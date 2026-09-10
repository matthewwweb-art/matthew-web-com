import { lookup } from "node:dns/promises";
import net from "node:net";
import { requireAdminApi } from "@/lib/requireAdminApi";

/* ============================================================
   MATTHEW WEB — WEBSITE AUDIT API

   PRIVATE ADMIN ROUTE

   Security:
   - Requires authenticated Matthew Web admin
   - Rejects localhost
   - Rejects private/internal IP addresses
   - Re-checks redirect destinations
   - Does not expose Supabase service credentials

   Current CRM-compatible fields:
   - has_website
   - has_https
   - has_contact_form
   - has_booking
   - has_phone_number
   - has_meta_title
   - has_meta_description
   - has_favicon
   - mobile_issue
   - speed_issue
   - outdated_design
   - issues_json
   - audit_summary

   Additional useful audit fields are also returned.
============================================================ */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_REDIRECTS = 5;
const FETCH_TIMEOUT_MS = 12000;
const MAX_HTML_LENGTH = 2_000_000;

/* ============================================================
   BASIC HELPERS
============================================================ */

function clamp(number, min = 0, max = 100) {
  return Math.max(
    min,
    Math.min(max, Math.round(number))
  );
}

function normalizeText(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeBasicHtml(value) {
  return normalizeText(value)
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

function stripHtml(html) {
  return normalizeText(
    String(html || "")
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
      .replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, " ")
      .replace(/<[^>]+>/g, " ")
  );
}

function countMatches(text, regex) {
  return (String(text || "").match(regex) || []).length;
}

function includesAny(text, terms) {
  const lower = String(text || "").toLowerCase();

  return terms.some((term) =>
    lower.includes(term.toLowerCase())
  );
}

function extractTitle(html) {
  const match = String(html || "").match(
    /<title[^>]*>([\s\S]*?)<\/title>/i
  );

  return match
    ? decodeBasicHtml(match[1])
    : "";
}

function extractMetaDescription(html) {
  const source = String(html || "");

  const matchA = source.match(
    /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["'][^>]*>/i
  );

  if (matchA) {
    return decodeBasicHtml(matchA[1]);
  }

  const matchB = source.match(
    /<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["'][^>]*>/i
  );

  return matchB
    ? decodeBasicHtml(matchB[1])
    : "";
}

function extractViewport(html) {
  return /<meta[^>]+name=["']viewport["'][^>]*>/i.test(
    String(html || "")
  );
}

function extractH1Count(html) {
  return countMatches(
    html,
    /<h1\b[^>]*>/gi
  );
}

function extractLinksCount(html) {
  return countMatches(
    html,
    /<a\b[^>]*href=/gi
  );
}

function extractImageCount(html) {
  return countMatches(
    html,
    /<img\b[^>]*>/gi
  );
}

function hasFaviconMarkup(html) {
  return /<link[^>]+rel=["'][^"']*(?:icon|shortcut icon)[^"']*["'][^>]*>/i.test(
    String(html || "")
  );
}

function hasSchemaMarkup(html) {
  return (
    /application\/ld\+json/i.test(html) ||
    /itemscope/i.test(html)
  );
}

/* ============================================================
   NETWORK / SSRF PROTECTION
============================================================ */

function isPrivateIPv4(ip) {
  const parts = ip
    .split(".")
    .map((part) => Number(part));

  if (
    parts.length !== 4 ||
    parts.some(
      (part) =>
        !Number.isInteger(part) ||
        part < 0 ||
        part > 255
    )
  ) {
    return true;
  }

  const [a, b] = parts;

  if (a === 0) return true;
  if (a === 10) return true;
  if (a === 127) return true;

  if (
    a === 169 &&
    b === 254
  ) {
    return true;
  }

  if (
    a === 172 &&
    b >= 16 &&
    b <= 31
  ) {
    return true;
  }

  if (
    a === 192 &&
    b === 168
  ) {
    return true;
  }

  if (
    a === 100 &&
    b >= 64 &&
    b <= 127
  ) {
    return true;
  }

  if (
    a === 192 &&
    b === 0
  ) {
    return true;
  }

  if (
    a === 192 &&
    b === 0 &&
    parts[2] === 2
  ) {
    return true;
  }

  if (
    a === 198 &&
    (
      b === 18 ||
      b === 19
    )
  ) {
    return true;
  }

  if (
    a === 198 &&
    b === 51 &&
    parts[2] === 100
  ) {
    return true;
  }

  if (
    a === 203 &&
    b === 0 &&
    parts[2] === 113
  ) {
    return true;
  }

  if (a >= 224) {
    return true;
  }

  return false;
}

function isPrivateIPv6(ip) {
  const normalized =
    String(ip || "").toLowerCase();

  if (
    normalized === "::1" ||
    normalized === "::"
  ) {
    return true;
  }

  if (
    normalized.startsWith("fc") ||
    normalized.startsWith("fd")
  ) {
    return true;
  }

  if (
    normalized.startsWith("fe8") ||
    normalized.startsWith("fe9") ||
    normalized.startsWith("fea") ||
    normalized.startsWith("feb")
  ) {
    return true;
  }

  const mapped =
    normalized.match(
      /^::ffff:(\d+\.\d+\.\d+\.\d+)$/
    );

  if (mapped) {
    return isPrivateIPv4(mapped[1]);
  }

  return false;
}

function isPrivateIp(ip) {
  const type =
    net.isIP(ip);

  if (type === 4) {
    return isPrivateIPv4(ip);
  }

  if (type === 6) {
    return isPrivateIPv6(ip);
  }

  return true;
}

async function validatePublicUrl(rawUrl) {
  if (
    !rawUrl ||
    typeof rawUrl !== "string"
  ) {
    throw new Error(
      "Website URL is required."
    );
  }

  let value =
    rawUrl.trim();

  if (!value) {
    throw new Error(
      "Website URL is required."
    );
  }

  if (
    !/^https?:\/\//i.test(value)
  ) {
    value =
      `https://${value}`;
  }

  let url;

  try {
    url = new URL(value);
  } catch {
    throw new Error(
      "Invalid website URL."
    );
  }

  if (
    url.protocol !== "http:" &&
    url.protocol !== "https:"
  ) {
    throw new Error(
      "Only HTTP and HTTPS websites can be audited."
    );
  }

  if (
    url.username ||
    url.password
  ) {
    throw new Error(
      "Website URLs containing credentials are not allowed."
    );
  }

  const hostname =
    url.hostname.toLowerCase();

  if (
    hostname === "localhost" ||
    hostname.endsWith(".localhost") ||
    hostname.endsWith(".local") ||
    hostname.endsWith(".internal")
  ) {
    throw new Error(
      "Private or local network websites cannot be audited."
    );
  }

  if (net.isIP(hostname)) {
    if (isPrivateIp(hostname)) {
      throw new Error(
        "Private or local network websites cannot be audited."
      );
    }

    return url;
  }

  let addresses;

  try {
    addresses = await lookup(
      hostname,
      {
        all: true,
        verbatim: true,
      }
    );
  } catch {
    throw new Error(
      "The website hostname could not be resolved."
    );
  }

  if (
    !addresses ||
    addresses.length === 0
  ) {
    throw new Error(
      "The website hostname could not be resolved."
    );
  }

  for (const entry of addresses) {
    if (
      !entry?.address ||
      isPrivateIp(entry.address)
    ) {
      throw new Error(
        "Private or local network websites cannot be audited."
      );
    }
  }

  return url;
}

/* ============================================================
   SAFE WEBSITE FETCH
============================================================ */

async function fetchWebsite(startUrl) {
  let currentUrl =
    await validatePublicUrl(startUrl);

  let redirects = 0;

  while (
    redirects <= MAX_REDIRECTS
  ) {
    currentUrl =
      await validatePublicUrl(
        currentUrl.toString()
      );

    const controller =
      new AbortController();

    const timeout =
      setTimeout(
        () => controller.abort(),
        FETCH_TIMEOUT_MS
      );

    const startedAt =
      Date.now();

    let response;

    try {
      response = await fetch(
        currentUrl.toString(),
        {
          method: "GET",

          redirect: "manual",

          signal:
            controller.signal,

          headers: {
            "User-Agent":
              "Matthew-Web-Website-Audit/1.0",

            Accept:
              "text/html,application/xhtml+xml;q=0.9,*/*;q=0.5",
          },

          cache: "no-store",
        }
      );
    } finally {
      clearTimeout(timeout);
    }

    const elapsedMs =
      Date.now() - startedAt;

    if (
      response.status >= 300 &&
      response.status < 400
    ) {
      const location =
        response.headers.get(
          "location"
        );

      if (!location) {
        throw new Error(
          `Website returned redirect status ${response.status} without a destination.`
        );
      }

      redirects += 1;

      if (
        redirects > MAX_REDIRECTS
      ) {
        throw new Error(
          "Website redirected too many times."
        );
      }

      currentUrl =
        new URL(
          location,
          currentUrl
        );

      continue;
    }

    const contentType =
      response.headers.get(
        "content-type"
      ) || "";

    if (!response.ok) {
      throw new Error(
        `Website returned HTTP ${response.status}.`
      );
    }

    if (
      contentType &&
      !contentType
        .toLowerCase()
        .includes("text/html") &&
      !contentType
        .toLowerCase()
        .includes("application/xhtml+xml")
    ) {
      throw new Error(
        "The supplied URL did not return an HTML webpage."
      );
    }

    let html =
      await response.text();

    if (
      html.length >
      MAX_HTML_LENGTH
    ) {
      html =
        html.slice(
          0,
          MAX_HTML_LENGTH
        );
    }

    return {
      html,
      finalUrl:
        currentUrl.toString(),
      status:
        response.status,
      elapsedMs,
      contentType,
      redirects,
    };
  }

  throw new Error(
    "Website redirected too many times."
  );
}

/* ============================================================
   PAGE SIGNAL DETECTION
============================================================ */

function analyzeHtml(
  html,
  finalUrl,
  elapsedMs
) {
  const lowerHtml =
    String(html || "")
      .toLowerCase();

  const visibleText =
    stripHtml(html)
      .toLowerCase();

  const title =
    extractTitle(html);

  const metaDescription =
    extractMetaDescription(html);

  const h1Count =
    extractH1Count(html);

  const linkCount =
    extractLinksCount(html);

  const imageCount =
    extractImageCount(html);

  const hasViewport =
    extractViewport(html);

  const hasFavicon =
    hasFaviconMarkup(html);

  const hasSchema =
    hasSchemaMarkup(html);

  /* ==========================================================
     CONTACT / CONVERSION SIGNALS
  ========================================================== */

  const hasForm =
    /<form\b/i.test(html);

  const hasContactLanguage =
    includesAny(
      visibleText,
      [
        "contact us",
        "contact",
        "request a quote",
        "get a quote",
        "free quote",
        "send message",
        "send us a message",
        "get in touch",
        "request service",
        "request an estimate",
        "get an estimate",
      ]
    );

  const hasContactForm =
    hasForm &&
    (
      hasContactLanguage ||
      /type=["'](?:email|tel)["']/i.test(
        html
      ) ||
      /name=["'][^"']*(?:email|phone|message|contact)[^"']*["']/i.test(
        html
      )
    );

  const hasBooking =
    includesAny(
      lowerHtml,
      [
        "book now",
        "book online",
        "schedule now",
        "schedule online",
        "schedule appointment",
        "book appointment",
        "calendly",
        "acuityscheduling",
        "square.site/appointments",
        "squareup.com/appointments",
        "booking-widget",
        "appointment",
      ]
    );

  const hasPhoneNumber =
    /(?:\+?1[\s.-]?)?(?:\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}/.test(
      visibleText
    ) ||
    /href=["']tel:/i.test(
      html
    );

  const hasEmail =
    /href=["']mailto:/i.test(
      html
    ) ||
    /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i.test(
      visibleText
    );

  const hasClearCta =
    includesAny(
      visibleText,
      [
        "contact us",
        "get started",
        "request a quote",
        "get a quote",
        "call now",
        "book now",
        "schedule",
        "request service",
        "request an estimate",
        "get an estimate",
        "learn more",
      ]
    );

  /* ==========================================================
     TRUST SIGNALS
  ========================================================== */

  const hasReviews =
    includesAny(
      visibleText,
      [
        "reviews",
        "testimonials",
        "testimonial",
        "what our customers say",
        "what our clients say",
        "customer reviews",
        "client reviews",
      ]
    );

  const hasPrivacy =
    includesAny(
      lowerHtml,
      [
        "privacy policy",
        "/privacy",
        "/privacy-policy",
      ]
    );

  const hasLocationSignal =
    includesAny(
      visibleText,
      [
        "serving",
        "service area",
        "service areas",
        "located in",
        "based in",
        "maine",
      ]
    ) ||
    /address/i.test(
      lowerHtml
    );

  const hasSocialLinks =
    includesAny(
      lowerHtml,
      [
        "facebook.com/",
        "instagram.com/",
        "linkedin.com/",
        "youtube.com/",
        "tiktok.com/",
        "x.com/",
        "twitter.com/",
        "yelp.com/",
      ]
    );

  /* ==========================================================
     BUSINESS / LOCAL CONTENT SIGNALS
  ========================================================== */

  const serviceWords = [
    "services",
    "service",
    "repair",
    "installation",
    "maintenance",
    "contractor",
    "construction",
    "roofing",
    "plumbing",
    "electrical",
    "cleaning",
    "landscaping",
    "painting",
    "remodeling",
    "booking",
    "consultation",
    "estimate",
    "quote",
  ];

  const localWords = [
    "near me",
    "serving",
    "service area",
    "local",
    "maine",
    "county",
    "city",
    "town",
  ];

  const hasServiceWords =
    includesAny(
      visibleText,
      serviceWords
    );

  const hasLocalKeywords =
    includesAny(
      visibleText,
      localWords
    );

  /* ==========================================================
     TECHNICAL / SEO SIGNALS
  ========================================================== */

  const hasMetaTitle =
    title.length > 0;

  const hasMetaDescription =
    metaDescription.length > 0;

  const hasHttps =
    finalUrl
      .toLowerCase()
      .startsWith("https://");

  const mobileIssue =
    !hasViewport;

  const speedIssue =
    elapsedMs > 4000;

  /*
    This is intentionally conservative.

    We cannot reliably decide that a design is "outdated"
    from raw HTML alone, so this only flags very weak legacy
    signals instead of pretending we performed a visual review.
  */

  const legacySignals = [
    /<font\b/i,
    /<center\b/i,
    /<marquee\b/i,
    /<frameset\b/i,
    /<frame\b/i,
  ];

  const legacySignalCount =
    legacySignals.filter(
      (regex) =>
        regex.test(html)
    ).length;

  const outdatedDesign =
    legacySignalCount >= 2;

  return {
    title,
    title_length:
      title.length,

    meta_description:
      metaDescription,

    meta_description_length:
      metaDescription.length,

    has_https:
      hasHttps,

    has_contact_form:
      hasContactForm,

    has_booking:
      hasBooking,

    has_phone_number:
      hasPhoneNumber,

    has_email:
      hasEmail,

    has_meta_title:
      hasMetaTitle,

    has_meta_description:
      hasMetaDescription,

    has_favicon:
      hasFavicon,

    has_viewport:
      hasViewport,

    has_h1:
      h1Count > 0,

    h1_count:
      h1Count,

    has_clear_cta:
      hasClearCta,

    has_reviews:
      hasReviews,

    has_privacy_policy:
      hasPrivacy,

    has_location_signal:
      hasLocationSignal,

    has_schema:
      hasSchema,

    has_social_links:
      hasSocialLinks,

    has_service_words:
      hasServiceWords,

    has_local_keywords:
      hasLocalKeywords,

    link_count:
      linkCount,

    image_count:
      imageCount,

    load_time_ms:
      elapsedMs,

    mobile_issue:
      mobileIssue,

    speed_issue:
      speedIssue,

    outdated_design:
      outdatedDesign,
  };
}

/* ============================================================
   SCORING
============================================================ */

function scoreAudit(signals) {
  let seo = 0;

  if (signals.has_https) {
    seo += 15;
  }

  if (signals.has_meta_title) {
    seo += 20;
  }

  if (
    signals.title_length >= 20 &&
    signals.title_length <= 65
  ) {
    seo += 10;
  }

  if (
    signals.has_meta_description
  ) {
    seo += 15;
  }

  if (
    signals.meta_description_length >= 70 &&
    signals.meta_description_length <= 170
  ) {
    seo += 10;
  }

  if (signals.has_h1) {
    seo += 10;
  }

  if (signals.h1_count === 1) {
    seo += 5;
  }

  if (signals.has_schema) {
    seo += 10;
  }

  if (
    signals.has_local_keywords
  ) {
    seo += 5;
  }

  let conversion = 0;

  if (
    signals.has_contact_form
  ) {
    conversion += 25;
  }

  if (signals.has_booking) {
    conversion += 15;
  }

  if (
    signals.has_phone_number
  ) {
    conversion += 15;
  }

  if (signals.has_email) {
    conversion += 10;
  }

  if (
    signals.has_clear_cta
  ) {
    conversion += 20;
  }

  if (
    signals.has_service_words
  ) {
    conversion += 15;
  }

  let trust = 0;

  if (signals.has_https) {
    trust += 20;
  }

  if (signals.has_reviews) {
    trust += 20;
  }

  if (
    signals.has_privacy_policy
  ) {
    trust += 20;
  }

  if (
    signals.has_location_signal
  ) {
    trust += 15;
  }

  if (
    signals.has_phone_number
  ) {
    trust += 10;
  }

  if (signals.has_email) {
    trust += 5;
  }

  if (
    signals.has_social_links
  ) {
    trust += 10;
  }

  const seoScore =
    clamp(seo);

  const conversionScore =
    clamp(conversion);

  const trustScore =
    clamp(trust);

  let technical = 100;

  if (
    signals.mobile_issue
  ) {
    technical -= 25;
  }

  if (
    signals.speed_issue
  ) {
    technical -= 20;
  }

  if (
    !signals.has_https
  ) {
    technical -= 20;
  }

  if (
    !signals.has_favicon
  ) {
    technical -= 10;
  }

  if (
    !signals.has_h1
  ) {
    technical -= 15;
  }

  if (
    signals.h1_count > 1
  ) {
    technical -= 5;
  }

  if (
    signals.outdated_design
  ) {
    technical -= 10;
  }

  const technicalScore =
    clamp(technical);

  const websiteScore =
    clamp(
      (
        seoScore +
        conversionScore +
        trustScore +
        technicalScore
      ) / 4
    );

  return {
    website_score:
      websiteScore,

    seo_score:
      seoScore,

    conversion_score:
      conversionScore,

    trust_score:
      trustScore,

    technical_score:
      technicalScore,
  };
}

/* ============================================================
   ISSUE GENERATION
============================================================ */

function buildIssues(signals) {
  const issues = [];

  if (!signals.has_https) {
    issues.push(
      "Website is not using HTTPS."
    );
  }

  if (
    !signals.has_contact_form
  ) {
    issues.push(
      "No clear contact or lead form was detected."
    );
  }

  if (!signals.has_booking) {
    issues.push(
      "No booking or scheduling option was detected."
    );
  }

  if (
    !signals.has_phone_number
  ) {
    issues.push(
      "No clear phone number was detected."
    );
  }

  if (
    !signals.has_meta_title
  ) {
    issues.push(
      "No page title was detected."
    );
  } else if (
    signals.title_length < 20
  ) {
    issues.push(
      "The page title may be too short to clearly describe the page."
    );
  } else if (
    signals.title_length > 65
  ) {
    issues.push(
      "The page title may be longer than ideal for search-result display."
    );
  }

  if (
    !signals.has_meta_description
  ) {
    issues.push(
      "No meta description was detected."
    );
  }

  if (!signals.has_favicon) {
    issues.push(
      "No favicon markup was detected."
    );
  }

  if (!signals.has_h1) {
    issues.push(
      "No H1 heading was detected."
    );
  }

  if (signals.h1_count > 1) {
    issues.push(
      `Multiple H1 headings were detected (${signals.h1_count}).`
    );
  }

  if (
    !signals.has_clear_cta
  ) {
    issues.push(
      "No strong call-to-action signal was detected."
    );
  }

  if (!signals.has_reviews) {
    issues.push(
      "No testimonial or customer-review section was detected."
    );
  }

  if (
    !signals.has_privacy_policy
  ) {
    issues.push(
      "No clear privacy-policy link was detected."
    );
  }

  if (
    !signals.has_location_signal
  ) {
    issues.push(
      "No clear location or service-area signal was detected."
    );
  }

  if (!signals.has_schema) {
    issues.push(
      "No structured-data/schema markup was detected."
    );
  }

  if (
    !signals.has_social_links
  ) {
    issues.push(
      "No social-profile links were detected."
    );
  }

  if (
    !signals.has_service_words
  ) {
    issues.push(
      "The page may not clearly explain its services or customer offer."
    );
  }

  if (
    signals.mobile_issue
  ) {
    issues.push(
      "No viewport tag was detected, which may indicate a mobile usability problem."
    );
  }

  if (
    signals.speed_issue
  ) {
    issues.push(
      `The initial HTML request took about ${(signals.load_time_ms / 1000).toFixed(1)} seconds.`
    );
  }

  if (
    signals.outdated_design
  ) {
    issues.push(
      "Legacy HTML elements were detected that may indicate an older technical foundation."
    );
  }

  return issues;
}

/* ============================================================
   SALES GUIDANCE

   These are intentionally cautious.
   The audit should identify observable opportunities without
   inventing revenue loss, traffic, rankings, or business facts.
============================================================ */

function buildSalesGuidance(
  signals,
  scores,
  issues
) {
  const opportunities = [];

  if (
    !signals.has_contact_form ||
    !signals.has_clear_cta
  ) {
    opportunities.push(
      "improving the path from visitor to inquiry"
    );
  }

  if (
    signals.mobile_issue
  ) {
    opportunities.push(
      "improving the mobile foundation"
    );
  }

  if (
    !signals.has_meta_title ||
    !signals.has_meta_description ||
    !signals.has_schema
  ) {
    opportunities.push(
      "strengthening the search and indexing foundation"
    );
  }

  if (
    !signals.has_booking
  ) {
    opportunities.push(
      "adding a clearer booking or request process where appropriate"
    );
  }

  if (
    !signals.has_reviews ||
    !signals.has_privacy_policy ||
    !signals.has_location_signal
  ) {
    opportunities.push(
      "strengthening trust and business information"
    );
  }

  if (
    signals.speed_issue
  ) {
    opportunities.push(
      "reviewing page performance"
    );
  }

  const topOpportunities =
    opportunities
      .slice(0, 3);

  let salesAngle;

  if (
    topOpportunities.length === 0
  ) {
    salesAngle =
      "The website already shows several useful fundamentals. Any outreach should focus on specific improvements that can be verified rather than assuming the site needs a complete rebuild.";
  } else {
    salesAngle =
      `The website may have an opportunity for ${topOpportunities.join(
        ", "
      )}. Outreach should focus on these observable areas without making claims about the business's traffic, revenue, or results.`;
  }

  let recommendedOffer;

  if (
    scores.website_score < 45
  ) {
    recommendedOffer =
      "Consider discussing a broader website rebuild or modernization after confirming the business's actual goals and needs.";
  } else if (
    scores.website_score < 70
  ) {
    recommendedOffer =
      "Consider a focused website improvement package covering the verified technical, conversion, and search issues found in the audit.";
  } else {
    recommendedOffer =
      "Consider targeted improvements rather than automatically proposing a full rebuild.";
  }

  let suggestedPackage;

  if (
    scores.website_score < 45
  ) {
    suggestedPackage =
      "Website redesign / rebuild discussion";
  } else if (
    issues.length >= 4
  ) {
    suggestedPackage =
      "Website improvement / optimization discussion";
  } else {
    suggestedPackage =
      "Targeted website improvement discussion";
  }

  return {
    sales_angle:
      salesAngle,

    recommended_offer:
      recommendedOffer,

    suggested_package:
      suggestedPackage,
  };
}

/* ============================================================
   HUMAN-READABLE SUMMARY
============================================================ */

function buildSummary(
  scores,
  issues,
  sales
) {
  const issueLines =
    issues.length > 0
      ? issues
          .map(
            (issue) =>
              `- ${issue}`
          )
          .join("\n")
      : "- No major issues were detected by this automated scan.";

  return [
    `Website Score: ${scores.website_score}/100`,
    "",
    `SEO Score: ${scores.seo_score}/100`,
    `Conversion Score: ${scores.conversion_score}/100`,
    `Trust Score: ${scores.trust_score}/100`,
    "",
    "Problems Found:",
    issueLines,
    "",
    "Sales Angle:",
    sales.sales_angle,
    "",
    "Recommended Offer:",
    sales.recommended_offer,
    "",
    "Suggested Package:",
    sales.suggested_package,
  ].join("\n");
}

/* ============================================================
   POST
============================================================ */

export async function POST(request) {
  try {
    /* ========================================================
       1. ADMIN AUTHORIZATION
    ======================================================== */

    const adminAuth =
      await requireAdminApi(
        request
      );

    if (!adminAuth.ok) {
      return Response.json(
        {
          ok: false,
          error:
            adminAuth.error,
        },
        {
          status:
            adminAuth.status,
        }
      );
    }

    /* ========================================================
       2. REQUEST BODY
    ======================================================== */

    let body;

    try {
      body =
        await request.json();
    } catch {
      return Response.json(
        {
          ok: false,
          error:
            "Invalid request body.",
        },
        {
          status: 400,
        }
      );
    }

    const suppliedUrl =
      body?.website_url;

    if (
      !suppliedUrl ||
      typeof suppliedUrl !==
        "string"
    ) {
      return Response.json(
        {
          ok: false,
          error:
            "website_url is required.",
        },
        {
          status: 400,
        }
      );
    }

    /* ========================================================
       3. VALIDATE TARGET
    ======================================================== */

    let normalizedUrl;

    try {
      normalizedUrl =
        await validatePublicUrl(
          suppliedUrl
        );
    } catch (error) {
      return Response.json(
        {
          ok: false,
          error:
            error?.message ||
            "Invalid website URL.",
        },
        {
          status: 400,
        }
      );
    }

    /* ========================================================
       4. FETCH WEBSITE
    ======================================================== */

    let fetched;

    try {
      fetched =
        await fetchWebsite(
          normalizedUrl.toString()
        );
    } catch (error) {
      return Response.json(
        {
          ok: false,
          error:
            error?.name ===
            "AbortError"
              ? "The website took too long to respond."
              : error?.message ||
                "The website could not be loaded.",
        },
        {
          status: 502,
        }
      );
    }

    /* ========================================================
       5. ANALYZE WEBSITE
    ======================================================== */

    const signals =
      analyzeHtml(
        fetched.html,
        fetched.finalUrl,
        fetched.elapsedMs
      );

    const scores =
      scoreAudit(signals);

    const issues =
      buildIssues(signals);

    const sales =
      buildSalesGuidance(
        signals,
        scores,
        issues
      );

    const auditSummary =
      buildSummary(
        scores,
        issues,
        sales
      );

    /* ========================================================
       6. BUILD CRM-COMPATIBLE AUDIT OBJECT
    ======================================================== */

    const audit = {
      /* Existing database-compatible fields */

      has_website: true,

      has_https:
        signals.has_https,

      has_contact_form:
        signals.has_contact_form,

      has_booking:
        signals.has_booking,

      has_phone_number:
        signals.has_phone_number,

      has_meta_title:
        signals.has_meta_title,

      has_meta_description:
        signals.has_meta_description,

      has_favicon:
        signals.has_favicon,

      mobile_issue:
        signals.mobile_issue,

      speed_issue:
        signals.speed_issue,

      outdated_design:
        signals.outdated_design,

      issues_json: {
        issues,

        scores,

        signals: {
          has_email:
            signals.has_email,

          has_viewport:
            signals.has_viewport,

          has_h1:
            signals.has_h1,

          h1_count:
            signals.h1_count,

          has_clear_cta:
            signals.has_clear_cta,

          has_reviews:
            signals.has_reviews,

          has_privacy_policy:
            signals.has_privacy_policy,

          has_location_signal:
            signals.has_location_signal,

          has_schema:
            signals.has_schema,

          has_social_links:
            signals.has_social_links,

          has_service_words:
            signals.has_service_words,

          has_local_keywords:
            signals.has_local_keywords,

          link_count:
            signals.link_count,

          image_count:
            signals.image_count,

          title:
            signals.title,

          title_length:
            signals.title_length,

          meta_description:
            signals.meta_description,

          meta_description_length:
            signals.meta_description_length,

          load_time_ms:
            signals.load_time_ms,
        },

        final_url:
          fetched.finalUrl,

        http_status:
          fetched.status,

        redirect_count:
          fetched.redirects,
      },

      audit_summary:
        auditSummary,

      /* Additional fields available to newer UI */

      website_score:
        scores.website_score,

      seo_score:
        scores.seo_score,

      conversion_score:
        scores.conversion_score,

      trust_score:
        scores.trust_score,

      technical_score:
        scores.technical_score,

      problems_found:
        issues,

      sales_angle:
        sales.sales_angle,

      recommended_offer:
        sales.recommended_offer,

      suggested_package:
        sales.suggested_package,

      final_url:
        fetched.finalUrl,

      load_time_ms:
        fetched.elapsedMs,
    };

    return Response.json({
      ok: true,
      audit,
    });
  } catch (error) {
    console.error(
      "Lead Finder website audit error:",
      error
    );

    return Response.json(
      {
        ok: false,
        error:
          "Website audit failed.",
      },
      {
        status: 500,
      }
    );
  }
}
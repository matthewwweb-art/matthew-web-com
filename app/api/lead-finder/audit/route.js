import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function isPrivateOrLocalHost(hostname) {
  const lower = hostname.toLowerCase();

  if (
    lower === "localhost" ||
    lower === "127.0.0.1" ||
    lower === "0.0.0.0" ||
    lower.endsWith(".local")
  ) {
    return true;
  }

  if (/^10\./.test(lower)) return true;
  if (/^192\.168\./.test(lower)) return true;
  if (/^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(lower)) return true;

  return false;
}

function normalizeUrl(input) {
  if (!input) return null;

  let clean = input.trim();

  if (!clean.startsWith("http://") && !clean.startsWith("https://")) {
    clean = `https://${clean}`;
  }

  try {
    const parsed = new URL(clean);

    if (!["http:", "https:"].includes(parsed.protocol)) {
      return null;
    }

    if (isPrivateOrLocalHost(parsed.hostname)) {
      return null;
    }

    return parsed.toString();
  } catch {
    return null;
  }
}

function getMetaContent(html, name) {
  const regex = new RegExp(
    `<meta[^>]+(?:name|property)=["']${name}["'][^>]+content=["']([^"']*)["'][^>]*>`,
    "i"
  );

  const reverseRegex = new RegExp(
    `<meta[^>]+content=["']([^"']*)["'][^>]+(?:name|property)=["']${name}["'][^>]*>`,
    "i"
  );

  return html.match(regex)?.[1] || html.match(reverseRegex)?.[1] || "";
}

function getTitle(html) {
  return html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() || "";
}

function hasAny(html, terms) {
  const lower = html.toLowerCase();
  return terms.some((term) => lower.includes(term));
}

function countMatches(html, regex) {
  return (html.match(regex) || []).length;
}

function calculateAuditScores(checks) {
  let seoScore = 100;
  let conversionScore = 100;
  let trustScore = 100;

  if (!checks.has_meta_title) seoScore -= 30;
  if (!checks.has_meta_description) seoScore -= 30;
  if (!checks.has_h1) seoScore -= 15;
  if (!checks.has_structured_data) seoScore -= 10;
  if (!checks.has_local_keywords) seoScore -= 10;
  if (checks.title_too_short) seoScore -= 10;
  if (checks.description_too_short) seoScore -= 10;

  if (!checks.has_contact_form) conversionScore -= 25;
  if (!checks.has_booking) conversionScore -= 15;
  if (!checks.has_phone_number) conversionScore -= 20;
  if (!checks.has_clear_cta) conversionScore -= 20;
  if (!checks.has_email) conversionScore -= 10;
  if (!checks.has_service_words) conversionScore -= 10;

  if (!checks.has_https) trustScore -= 35;
  if (!checks.has_favicon) trustScore -= 15;
  if (!checks.has_privacy_policy) trustScore -= 10;
  if (!checks.has_reviews_or_testimonials) trustScore -= 15;
  if (!checks.has_social_links) trustScore -= 10;
  if (!checks.has_address_or_location) trustScore -= 10;

  seoScore = Math.max(seoScore, 0);
  conversionScore = Math.max(conversionScore, 0);
  trustScore = Math.max(trustScore, 0);

  const websiteScore = Math.round(
    seoScore * 0.34 + conversionScore * 0.43 + trustScore * 0.23
  );

  return {
    website_score: websiteScore,
    seo_score: seoScore,
    conversion_score: conversionScore,
    trust_score: trustScore,
  };
}

function buildProblemList(checks) {
  const problems = [];

  if (!checks.has_https) problems.push("Website does not appear to use HTTPS.");
  if (!checks.has_meta_title) problems.push("Missing or weak SEO title.");
  if (!checks.has_meta_description)
    problems.push("Missing or weak meta description.");
  if (!checks.has_h1) problems.push("Missing a clear main H1 heading.");
  if (!checks.has_favicon) problems.push("Missing favicon/brand icon.");
  if (!checks.has_phone_number) problems.push("No clear phone number detected.");
  if (!checks.has_email) problems.push("No email address detected.");
  if (!checks.has_contact_form) problems.push("No contact/quote form detected.");
  if (!checks.has_booking) problems.push("No booking or scheduling option detected.");
  if (!checks.has_clear_cta)
    problems.push("No strong call-to-action detected, such as Get Quote or Book Now.");
  if (!checks.has_reviews_or_testimonials)
    problems.push("No testimonials/reviews section detected.");
  if (!checks.has_privacy_policy) problems.push("No privacy policy detected.");
  if (!checks.has_address_or_location)
    problems.push("No clear address, city, service area, or location signal detected.");
  if (!checks.has_structured_data)
    problems.push("No structured data/schema detected.");
  if (!checks.has_social_links)
    problems.push("No obvious social/business profile links detected.");

  if (problems.length === 0) {
    problems.push(
      "No major basic technical issues detected. Manual review may still find design, speed, SEO, or conversion problems."
    );
  }

  return problems;
}

function buildSalesAngle(checks, scores) {
  if (scores.conversion_score <= 55) {
    return "This business may already be getting visitors, but the website is not set up strongly enough to turn those visitors into calls, quote requests, bookings, or leads.";
  }

  if (scores.seo_score <= 55) {
    return "This business may be hard to find in Google because the website has weak SEO signals, missing metadata, or limited local search structure.";
  }

  if (scores.trust_score <= 55) {
    return "This website may not build enough trust because it is missing important brand, security, review, privacy, or business credibility signals.";
  }

  if (!checks.has_booking && checks.has_phone_number) {
    return "This business has a way for people to call, but could likely capture more leads with a quote form, booking option, and automated follow-up.";
  }

  return "This website has some basics in place, but there may still be room to improve design, SEO, conversion flow, lead capture, and follow-up.";
}

function buildRecommendedOffer(checks, scores) {
  if (!checks.has_contact_form && !checks.has_booking) {
    return "Website rebuild or upgrade with a quote form, booking option, lead notifications, CRM tracking, and SEO cleanup.";
  }

  if (scores.seo_score <= 55) {
    return "SEO cleanup package with better page titles, meta descriptions, service-area content, schema, sitemap/indexing review, and local landing pages.";
  }

  if (scores.conversion_score <= 60) {
    return "Conversion upgrade with stronger call-to-action buttons, contact form, phone placement, quote request flow, and lead follow-up system.";
  }

  if (scores.trust_score <= 60) {
    return "Trust upgrade with reviews/testimonials, privacy policy, favicon/branding, social links, and stronger business credibility sections.";
  }

  return "Free website audit first, then pitch website improvements, SEO cleanup, CRM, booking, or custom automation based on manual review.";
}

function buildSuggestedPrice(checks, scores) {
  if (!checks.has_contact_form && !checks.has_booking && scores.website_score <= 55) {
    return "$2,500–$7,500";
  }

  if (scores.website_score <= 45) {
    return "$3,500–$10,000";
  }

  if (scores.seo_score <= 55) {
    return "$750–$2,500";
  }

  if (scores.conversion_score <= 60) {
    return "$1,500–$5,000";
  }

  if (scores.trust_score <= 60) {
    return "$750–$2,500";
  }

  return "$500–$2,500";
}

function buildSummary(scores, problems, salesAngle, recommendedOffer, suggestedPrice) {
  const topProblems = problems.slice(0, 6);

  return `Website Score: ${scores.website_score}/100

SEO Score: ${scores.seo_score}/100
Conversion Score: ${scores.conversion_score}/100
Trust Score: ${scores.trust_score}/100

Problems Found:
- ${topProblems.join("\n- ")}

Sales Angle:
${salesAngle}

Recommended Offer:
${recommendedOffer}

Suggested Package:
${suggestedPrice}`;
}

export async function POST(request) {
  try {
    const authHeader = request.headers.get("authorization") || "";
    const token = authHeader.replace("Bearer ", "").trim();

    if (!token) {
      return NextResponse.json(
        { ok: false, error: "Missing admin session." },
        { status: 401 }
      );
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    const { data: userData, error: userError } = await supabase.auth.getUser(
      token
    );

    if (userError || !userData?.user) {
      return NextResponse.json(
        { ok: false, error: "Invalid admin session." },
        { status: 401 }
      );
    }

    const body = await request.json();
    const targetUrl = normalizeUrl(body.website_url);

    if (!targetUrl) {
      return NextResponse.json(
        { ok: false, error: "Enter a valid public website URL." },
        { status: 400 }
      );
    }

    const startedAt = Date.now();

    const response = await fetch(targetUrl, {
      method: "GET",
      redirect: "follow",
      headers: {
        "User-Agent": "Mozilla/5.0 matthew-web lead finder website audit bot",
        Accept: "text/html,application/xhtml+xml",
      },
      signal: AbortSignal.timeout(12000),
    });

    const finalUrl = response.url || targetUrl;
    const html = await response.text();
    const loadTimeMs = Date.now() - startedAt;

    const title = getTitle(html);
    const description =
      getMetaContent(html, "description") ||
      getMetaContent(html, "og:description");

    const h1Count = countMatches(html, /<h1[\s>]/gi);
    const linkCount = countMatches(html, /<a[\s>]/gi);
    const imageCount = countMatches(html, /<img[\s>]/gi);

    const checks = {
      has_website: response.ok,
      has_https: finalUrl.startsWith("https://"),
      has_contact_form:
        hasAny(html, [
          "<form",
          "contact form",
          "request a quote",
          "get a quote",
          "free estimate",
          "estimate form",
          "contact us",
          "send message",
        ]) || false,
      has_booking: hasAny(html, [
        "book now",
        "schedule",
        "appointment",
        "booking",
        "calendar",
        "calendly",
        "square.site/appointments",
        "acuityscheduling",
        "setmore",
        "youcanbook",
      ]),
      has_phone_number: /(\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/.test(
        html
      ),
      has_email: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(html),
      has_meta_title: Boolean(title && title.length > 8),
      has_meta_description: Boolean(description && description.length > 40),
      has_favicon: hasAny(html, [
        'rel="icon"',
        "rel='icon'",
        'rel="shortcut icon"',
        "rel='shortcut icon'",
        "favicon.ico",
        "apple-touch-icon",
      ]),
      has_h1: h1Count > 0,
      has_clear_cta: hasAny(html, [
        "get a quote",
        "request a quote",
        "free estimate",
        "schedule now",
        "book now",
        "call now",
        "contact us",
        "get started",
        "request service",
        "start today",
      ]),
      has_reviews_or_testimonials: hasAny(html, [
        "reviews",
        "testimonials",
        "what our customers say",
        "what clients say",
        "google reviews",
        "rated",
      ]),
      has_privacy_policy: hasAny(html, [
        "privacy policy",
        "/privacy",
        "privacy-policy",
      ]),
      has_address_or_location:
        hasAny(html, [
          "service area",
          "serving",
          "located in",
          "address",
          "directions",
        ]) ||
        /\b[A-Z]{2}\s+\d{5}\b/.test(html),
      has_structured_data: hasAny(html, [
        "application/ld+json",
        "schema.org",
        "LocalBusiness",
        "Organization",
      ]),
      has_social_links: hasAny(html, [
        "facebook.com",
        "instagram.com",
        "linkedin.com",
        "yelp.com",
        "youtube.com",
        "tiktok.com",
        "twitter.com",
        "x.com",
      ]),
      has_service_words: hasAny(html, [
        "services",
        "repair",
        "installation",
        "maintenance",
        "contractor",
        "roofing",
        "landscaping",
        "plumbing",
        "electrical",
        "painting",
        "hvac",
        "cleaning",
        "remodeling",
      ]),
      has_local_keywords: hasAny(html, [
        "near me",
        "local",
        "service area",
        "serving",
        "county",
        "city",
        "town",
      ]),
      title_too_short: Boolean(title && title.length < 20),
      description_too_short: Boolean(description && description.length < 80),
      mobile_issue: false,
      speed_issue: loadTimeMs > 5000,
      outdated_design: false,
    };

    const scores = calculateAuditScores(checks);
    const problems = buildProblemList(checks);
    const salesAngle = buildSalesAngle(checks, scores);
    const recommendedOffer = buildRecommendedOffer(checks, scores);
    const suggestedPrice = buildSuggestedPrice(checks, scores);

    const auditSummary = buildSummary(
      scores,
      problems,
      salesAngle,
      recommendedOffer,
      suggestedPrice
    );

    const issues = {
      final_url: finalUrl,
      status: response.status,
      title,
      description,
      h1_count: h1Count,
      link_count: linkCount,
      image_count: imageCount,
      load_time_ms: loadTimeMs,
      website_score: scores.website_score,
      seo_score: scores.seo_score,
      conversion_score: scores.conversion_score,
      trust_score: scores.trust_score,
      problems,
      sales_angle: salesAngle,
      recommended_offer: recommendedOffer,
      suggested_price_range: suggestedPrice,
      checked_at: new Date().toISOString(),
    };

    return NextResponse.json({
      ok: true,
      audit: {
        ...checks,
        issues_json: issues,
        audit_summary: auditSummary,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error:
          error?.name === "TimeoutError"
            ? "Website audit timed out. The site may be slow or blocking requests."
            : error?.message || "Website audit failed.",
      },
      { status: 500 }
    );
  }
}
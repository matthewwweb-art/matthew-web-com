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

function scoreWebsiteAudit(checks) {
  let score = 100;

  if (!checks.has_https) score -= 20;
  if (!checks.has_meta_title) score -= 15;
  if (!checks.has_meta_description) score -= 15;
  if (!checks.has_favicon) score -= 10;
  if (!checks.has_phone_number) score -= 10;
  if (!checks.has_contact_form) score -= 15;
  if (!checks.has_booking) score -= 8;

  return Math.max(score, 0);
}

function buildSummary(checks) {
  const issues = [];

  if (!checks.has_https) issues.push("does not use HTTPS");
  if (!checks.has_meta_title) issues.push("is missing a proper SEO title");
  if (!checks.has_meta_description)
    issues.push("is missing a meta description");
  if (!checks.has_favicon) issues.push("does not have a favicon");
  if (!checks.has_phone_number) issues.push("does not show a clear phone number");
  if (!checks.has_contact_form) issues.push("does not appear to have a contact form");
  if (!checks.has_booking) issues.push("does not appear to have a booking option");

  if (issues.length === 0) {
    return "Website audit looks decent. This lead may still need design, SEO, conversion improvements, CRM, automation, or follow-up tools.";
  }

  return `Website audit found: ${issues.join(", ")}. This could be a good lead for a website rebuild, SEO cleanup, lead form, booking setup, CRM, or automation package.`;
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

    const response = await fetch(targetUrl, {
      method: "GET",
      redirect: "follow",
      headers: {
        "User-Agent":
          "Mozilla/5.0 matthew-web lead finder website audit bot",
        Accept: "text/html,application/xhtml+xml",
      },
      signal: AbortSignal.timeout(12000),
    });

    const finalUrl = response.url || targetUrl;
    const html = await response.text();

    const title = getTitle(html);
    const description =
      getMetaContent(html, "description") ||
      getMetaContent(html, "og:description");

    const checks = {
      has_website: response.ok,
      has_https: finalUrl.startsWith("https://"),
      has_contact_form:
        hasAny(html, [
          "<form",
          "contact form",
          "get a quote",
          "request a quote",
          "free estimate",
          "estimate form",
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
      ]),
      has_phone_number: /(\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/.test(
        html
      ),
      has_meta_title: Boolean(title && title.length > 8),
      has_meta_description: Boolean(description && description.length > 40),
      has_favicon: hasAny(html, [
        'rel="icon"',
        "rel='icon'",
        'rel="shortcut icon"',
        "rel='shortcut icon'",
        "favicon.ico",
      ]),
      mobile_issue: false,
      speed_issue: false,
      outdated_design: false,
    };

    const websiteScore = scoreWebsiteAudit(checks);
    const auditSummary = buildSummary(checks);

    const issues = {
      final_url: finalUrl,
      status: response.status,
      title,
      description,
      website_score: websiteScore,
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
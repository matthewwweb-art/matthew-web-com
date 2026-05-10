import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function safeText(value) {
  return value ? String(value).trim() : "";
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

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { ok: false, error: "Missing OPENAI_API_KEY." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const lead = body.lead || {};

    const prompt = `
Create custom outreach messages for this sales lead.

Business:
${safeText(lead.business_name)}

Category:
${safeText(lead.category)}

Location:
${[lead.city, lead.state].filter(Boolean).join(", ") || "Unknown"}

Phone:
${safeText(lead.phone)}

Website:
${safeText(lead.website_url)}

Google rating:
${safeText(lead.rating)}

Review count:
${safeText(lead.review_count)}

Lead score:
${safeText(lead.lead_score)}

Estimated offer value:
${safeText(lead.estimated_offer_value)}

Problem found:
${safeText(lead.problem_summary)}

Offer idea:
${safeText(lead.offer_idea)}

Notes:
${safeText(lead.notes)}

Write messages for matthew-web, a custom website and software business.

Rules:
- Sound human, direct, and not spammy.
- Mention the business by name.
- Do not overpromise results.
- Keep it short enough for real outreach.
- Push a free quick website/software audit.
- Focus on websites, forms, SEO, booking, CRM, missed leads, or custom software only when relevant.
- Return valid JSON only.
- Use this exact JSON shape:
{
  "facebook_dm": "...",
  "email_subject": "...",
  "email_message": "...",
  "phone_script": "...",
  "follow_up": "...",
  "sales_angle": "...",
  "recommended_offer": "..."
}
`;

    const openaiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-5-mini",
        instructions:
          "You write practical sales outreach for a web design and custom software business. Return valid JSON only.",
        input: prompt,
      }),
    });

    const openaiData = await openaiResponse.json();

    if (!openaiResponse.ok) {
      return NextResponse.json(
        {
          ok: false,
          error:
            openaiData?.error?.message ||
            "OpenAI request failed. Check your API key.",
        },
        { status: openaiResponse.status }
      );
    }

    const text = openaiData.output_text || "";

    let parsed;

    try {
      parsed = JSON.parse(text);
    } catch {
      return NextResponse.json(
        {
          ok: false,
          error: "AI returned text that was not valid JSON.",
          raw: text,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      outreach: parsed,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error?.message || "AI outreach failed.",
      },
      { status: 500 }
    );
  }
}
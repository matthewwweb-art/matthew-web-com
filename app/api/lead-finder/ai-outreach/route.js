import { requireAdminApi } from "@/lib/requireAdminApi";

/* ============================================================
   MATTHEW WEB — AI OUTREACH API

   PRIVATE ADMIN ROUTE

   Security:
   - Requires a valid Supabase session
   - Requires the signed-in user's email to exist in admin_users
   - OPENAI_API_KEY remains server-side only

   Expected output:
   - facebook_dm
   - email_subject
   - email_message
   - phone_script
   - follow_up
   - sales_angle
   - recommended_offer
============================================================ */

/* ============================================================
   EXTRACT TEXT FROM OPENAI RESPONSES API
============================================================ */

function extractResponseText(data) {
  if (
    typeof data?.output_text === "string" &&
    data.output_text.trim()
  ) {
    return data.output_text.trim();
  }

  const pieces = [];

  if (Array.isArray(data?.output)) {
    for (const outputItem of data.output) {
      if (!Array.isArray(outputItem?.content)) {
        continue;
      }

      for (const contentItem of outputItem.content) {
        if (
          contentItem?.type === "output_text" &&
          typeof contentItem?.text === "string"
        ) {
          pieces.push(contentItem.text);
        }
      }
    }
  }

  return pieces.join("\n").trim();
}

/* ============================================================
   CLEAN POSSIBLE MARKDOWN CODE FENCES
============================================================ */

function cleanJsonText(text) {
  if (!text) {
    return "";
  }

  return text
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
}

/* ============================================================
   API ROUTE
============================================================ */

export async function POST(request) {
  try {
    /* ========================================================
       1. VERIFY MATTHEW WEB ADMIN
    ======================================================== */

    const adminAuth = await requireAdminApi(request);

    if (!adminAuth.ok) {
      return Response.json(
        {
          ok: false,
          error: adminAuth.error,
        },
        {
          status: adminAuth.status,
        }
      );
    }

    /* ========================================================
       2. CHECK OPENAI CONFIGURATION
    ======================================================== */

    const openaiApiKey =
      process.env.OPENAI_API_KEY;

    if (!openaiApiKey) {
      return Response.json(
        {
          ok: false,
          error:
            "OPENAI_API_KEY is not configured on the server.",
        },
        {
          status: 500,
        }
      );
    }

    /* ========================================================
       3. READ LEAD DATA
    ======================================================== */

    let body;

    try {
      body = await request.json();
    } catch {
      return Response.json(
        {
          ok: false,
          error: "Invalid request body.",
        },
        {
          status: 400,
        }
      );
    }

    const lead = body?.lead;

    if (
      !lead ||
      typeof lead !== "object"
    ) {
      return Response.json(
        {
          ok: false,
          error: "Lead information is required.",
        },
        {
          status: 400,
        }
      );
    }

    /* ========================================================
       4. BUILD LEAD CONTEXT
    ======================================================== */

    const leadContext = `
BUSINESS NAME:
${lead.business_name || "Unknown"}

CATEGORY:
${lead.category || "Unknown"}

CONTACT NAME:
${lead.contact_name || "Unknown"}

CITY:
${lead.city || "Unknown"}

STATE:
${lead.state || "Unknown"}

PHONE:
${lead.phone || "Unknown"}

EMAIL:
${lead.email || "Unknown"}

WEBSITE:
${lead.website_url || "Unknown"}

GOOGLE MAPS:
${lead.google_maps_url || "Unknown"}

FACEBOOK:
${lead.facebook_url || "Unknown"}

YELP:
${lead.yelp_url || "Unknown"}

GOOGLE RATING:
${lead.rating ?? "Unknown"}

REVIEW COUNT:
${lead.review_count ?? "Unknown"}

LEAD SCORE:
${lead.lead_score ?? "Unknown"}

ESTIMATED OFFER VALUE:
${lead.estimated_offer_value ?? "Unknown"}

PROBLEM FOUND:
${lead.problem_summary || lead.problem_found || "None recorded"}

OFFER IDEA:
${lead.offer_idea || "None recorded"}

STATUS:
${lead.status || "Unknown"}

NOTES:
${lead.notes || "None"}
`.trim();

    /* ========================================================
       5. AI INSTRUCTIONS
    ======================================================== */

    const instructions = `
You create practical personalized sales outreach for Matthew Web.

Matthew Web provides website design, website redesign, custom software,
CRM dashboards, lead forms, business automation, integrations,
SEO-ready website structure, and indexing support.

Write like a real small-business owner contacting another business.

Rules:

- Be useful, respectful, and concise.
- Do not sound like mass spam.
- Do not invent facts about the prospect.
- Do not claim you personally inspected something unless the supplied
  lead information supports that claim.
- Do not invent revenue, traffic, rankings, customer counts, losses,
  conversion rates, or business problems.
- Do not promise Google rankings or guaranteed financial results.
- Mention observable or supplied problems naturally.
- Do not insult the prospect's current website.
- Do not use fake urgency.
- Do not pretend Matthew Web has employees, partnerships,
  certifications, or capabilities that have not been supplied.
- Keep the Facebook DM relatively short.
- Keep the email professional and easy to read.
- Keep the phone script conversational rather than robotic.
- Make the follow-up polite and shorter than the original message.
- The sales angle should explain the practical opportunity.
- The recommended offer should fit the supplied lead information.
- When evidence is limited, use careful language such as
  "may," "could," or "it looks like."

Return ONLY valid JSON.

Do not include markdown.
Do not include code fences.
Do not include commentary outside the JSON.

Return exactly these keys:

{
  "facebook_dm": "",
  "email_subject": "",
  "email_message": "",
  "phone_script": "",
  "follow_up": "",
  "sales_angle": "",
  "recommended_offer": ""
}
`.trim();

    const input = `
Create personalized Matthew Web outreach for this lead.

${leadContext}

Use only the information supplied above.
`.trim();

    /* ========================================================
       6. CALL OPENAI RESPONSES API
    ======================================================== */

    const openaiResponse = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization:
            `Bearer ${openaiApiKey}`,
        },

        body: JSON.stringify({
          model: "gpt-5-mini",
          instructions,
          input,
        }),
      }
    );

    let openaiData;

    try {
      openaiData =
        await openaiResponse.json();
    } catch {
      return Response.json(
        {
          ok: false,
          error:
            "OpenAI returned an unreadable response.",
        },
        {
          status: 502,
        }
      );
    }

    /* ========================================================
       7. HANDLE OPENAI ERRORS
    ======================================================== */

    if (!openaiResponse.ok) {
      console.error(
        "OpenAI AI outreach error:",
        openaiData
      );

      return Response.json(
        {
          ok: false,
          error:
            openaiData?.error?.message ||
            "OpenAI could not generate outreach.",
        },
        {
          status:
            openaiResponse.status || 500,
        }
      );
    }

    /* ========================================================
       8. EXTRACT AI OUTPUT
    ======================================================== */

    const rawText =
      extractResponseText(openaiData);

    if (!rawText) {
      console.error(
        "OpenAI response contained no text:",
        openaiData
      );

      return Response.json(
        {
          ok: false,
          error:
            "OpenAI returned an empty outreach response.",
        },
        {
          status: 502,
        }
      );
    }

    /* ========================================================
       9. PARSE JSON
    ======================================================== */

    const cleanedText =
      cleanJsonText(rawText);

    let outreach;

    try {
      outreach =
        JSON.parse(cleanedText);
    } catch (error) {
      console.error(
        "AI outreach JSON parse error:",
        error
      );

      console.error(
        "Raw AI outreach:",
        rawText
      );

      return Response.json(
        {
          ok: false,
          error:
            "OpenAI returned outreach in an invalid format.",
        },
        {
          status: 502,
        }
      );
    }

    /* ========================================================
       10. NORMALIZE EXPECTED FIELDS
    ======================================================== */

    const normalizedOutreach = {
      facebook_dm:
        outreach?.facebook_dm || "",

      email_subject:
        outreach?.email_subject || "",

      email_message:
        outreach?.email_message || "",

      phone_script:
        outreach?.phone_script || "",

      follow_up:
        outreach?.follow_up || "",

      sales_angle:
        outreach?.sales_angle || "",

      recommended_offer:
        outreach?.recommended_offer || "",
    };

    /* ========================================================
       11. SUCCESS
    ======================================================== */

    return Response.json({
      ok: true,
      outreach: normalizedOutreach,
    });
  } catch (error) {
    console.error(
      "AI outreach route error:",
      error
    );

    return Response.json(
      {
        ok: false,
        error:
          "Failed to generate AI outreach.",
      },
      {
        status: 500,
      }
    );
  }
}
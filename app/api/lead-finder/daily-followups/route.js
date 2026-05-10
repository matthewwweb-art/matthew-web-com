import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

function formatLeadLine(lead) {
  const location = [lead.city, lead.state].filter(Boolean).join(", ");
  const followUp = lead.next_followup_at
    ? new Date(lead.next_followup_at).toLocaleString("en-US", {
        timeZone: "America/New_York",
      })
    : "No date";

  return `
Business: ${lead.business_name || "Unknown"}
Category: ${lead.category || "Unknown"}
Location: ${location || "Unknown"}
Phone: ${lead.phone || "None"}
Email: ${lead.email || "None"}
Website: ${lead.website_url || "None"}
Status: ${lead.status || "new"}
Score: ${lead.lead_score || 0}
Estimated Value: ${lead.estimated_offer_value || "Not set"}
Follow-Up: ${followUp}
Problem: ${lead.problem_summary || "No problem summary"}
`;
}

export async function GET(request) {
  try {
    const authHeader = request.headers.get("authorization") || "";
    const cronSecret = process.env.CRON_SECRET;

    if (!cronSecret) {
      return NextResponse.json(
        { ok: false, error: "Missing CRON_SECRET." },
        { status: 500 }
      );
    }

    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json(
        { ok: false, error: "Unauthorized." },
        { status: 401 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { ok: false, error: "Missing RESEND_API_KEY." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    const now = new Date().toISOString();

    const { data: leads, error: leadError } = await supabase
      .from("lead_finder_leads")
      .select("*")
      .not("next_followup_at", "is", null)
      .lte("next_followup_at", now)
      .not("status", "in", '("won","lost")')
      .order("next_followup_at", { ascending: true });

    if (leadError) {
      return NextResponse.json(
        { ok: false, error: leadError.message },
        { status: 500 }
      );
    }

    const dueLeads = leads || [];

    if (dueLeads.length === 0) {
      return NextResponse.json({
        ok: true,
        sent: false,
        message: "No follow-ups due.",
      });
    }

    const emailTo =
      process.env.LEAD_TO_EMAIL ||
      process.env.LEAD_NOTIFICATION_EMAIL ||
      process.env.AUTO_REPLY_FROM_EMAIL;

    const emailFrom =
      process.env.EMAIL_FROM ||
      process.env.RESEND_FROM_EMAIL ||
      "matthew-web <onboarding@resend.dev>";

    if (!emailTo) {
      return NextResponse.json(
        { ok: false, error: "Missing lead reminder recipient email." },
        { status: 500 }
      );
    }

    const plainText = `Daily Lead Finder Follow-Ups

You have ${dueLeads.length} lead follow-up(s) due today or overdue.

${dueLeads.map(formatLeadLine).join("\n----------------------\n")}

Open Lead Finder:
https://matthew-web.com/admin/lead-finder
`;

    const html = `
      <div style="font-family: Arial, sans-serif; color: #1f2933; line-height: 1.5;">
        <h1 style="color:#f57c00;">Daily Lead Finder Follow-Ups</h1>
        <p>You have <strong>${dueLeads.length}</strong> lead follow-up(s) due today or overdue.</p>

        ${dueLeads
          .map(
            (lead) => `
              <div style="border:1px solid #e5e7eb; border-radius:12px; padding:16px; margin:14px 0;">
                <h2 style="margin:0 0 8px; color:#0f83a6;">${
                  lead.business_name || "Unknown Business"
                }</h2>
                <p><strong>Category:</strong> ${lead.category || "Unknown"}</p>
                <p><strong>Location:</strong> ${[lead.city, lead.state]
                  .filter(Boolean)
                  .join(", ") || "Unknown"}</p>
                <p><strong>Phone:</strong> ${lead.phone || "None"}</p>
                <p><strong>Email:</strong> ${lead.email || "None"}</p>
                <p><strong>Status:</strong> ${lead.status || "new"}</p>
                <p><strong>Score:</strong> ${lead.lead_score || 0}</p>
                <p><strong>Estimated Value:</strong> ${
                  lead.estimated_offer_value || "Not set"
                }</p>
                <p><strong>Problem:</strong> ${
                  lead.problem_summary || "No problem summary"
                }</p>
                ${
                  lead.website_url
                    ? `<p><a href="${lead.website_url}">Website</a></p>`
                    : ""
                }
              </div>
            `
          )
          .join("")}

        <p>
          <a href="https://matthew-web.com/admin/lead-finder" style="background:#f57c00; color:#fff; padding:12px 18px; border-radius:8px; text-decoration:none; font-weight:bold;">
            Open Lead Finder
          </a>
        </p>
      </div>
    `;

    const emailResult = await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      subject: `Lead Finder: ${dueLeads.length} follow-up(s) due today`,
      text: plainText,
      html,
    });

    return NextResponse.json({
      ok: true,
      sent: true,
      count: dueLeads.length,
      emailResult,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error?.message || "Daily follow-up reminder failed.",
      },
      { status: 500 }
    );
  }
}
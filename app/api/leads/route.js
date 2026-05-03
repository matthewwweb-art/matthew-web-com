import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const resendApiKey = process.env.RESEND_API_KEY;

const adminEmail =
  process.env.LEAD_TO_EMAIL ||
  process.env.LEAD_NOTIFICATION_EMAIL ||
  "matthewwweb@gmail.com";

const fromEmail =
  process.env.EMAIL_FROM ||
  process.env.RESEND_FROM_EMAIL ||
  "Matthew Web <onboarding@resend.dev>";

const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
const resend = new Resend(resendApiKey);

async function verifyRecaptcha(token) {
  if (!recaptchaSecretKey) {
    throw new Error("Missing RECAPTCHA_SECRET_KEY.");
  }

  if (!token) {
    throw new Error("Missing reCAPTCHA token.");
  }

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${encodeURIComponent(
        recaptchaSecretKey
      )}&response=${encodeURIComponent(token)}`,
    }
  );

  const data = await response.json();

  if (!data.success) {
    throw new Error("reCAPTCHA verification failed.");
  }

  return true;
}

export async function POST(request) {
  try {
    if (!supabaseUrl || !supabaseServiceRoleKey) {
      return NextResponse.json(
        {
          ok: false,
          error: "Missing Supabase server environment variables.",
        },
        { status: 500 }
      );
    }

    if (!resendApiKey) {
      return NextResponse.json(
        {
          ok: false,
          error: "Missing RESEND_API_KEY.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const {
      name,
      email,
      phone,
      business_name,
      message,
      page_source,
      recaptchaToken,
    } = body;

    if (!name || !email || !phone || !business_name) {
      return NextResponse.json(
        {
          ok: false,
          error: "Missing required fields.",
        },
        { status: 400 }
      );
    }

    await verifyRecaptcha(recaptchaToken);

    const leadData = {
      name,
      email,
      phone,
      business_name,
      message: message || "",
      page_source: page_source || "Website Form",
      status: "new",
    };

    const { data: lead, error: leadError } = await supabase
      .from("leads")
      .insert([leadData])
      .select()
      .single();

    if (leadError) {
      return NextResponse.json(
        {
          ok: false,
          error: leadError.message,
        },
        { status: 500 }
      );
    }

    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
        <h2 style="color: #f57c00;">New Website Lead</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Business Name:</strong> ${business_name}</p>
        <p><strong>Page Source:</strong> ${page_source || "Website Form"}</p>

        <p><strong>Message:</strong></p>
        <p>${message || "No message included."}</p>
      </div>
    `;

    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
        <h2 style="color: #f57c00;">Thank you for contacting Matthew Web!</h2>

        <p>Hi ${name},</p>

        <p>
          Thank you for contacting Matthew Web. We appreciate you reaching out
          and taking the time to tell us about your website project.
        </p>

        <p>
          We received your message and will be in contact within 48 hours.
        </p>

        <p>
          Thank you,<br />
          Matthew Web
        </p>
      </div>
    `;

    let adminEmailSent = false;
    let customerEmailSent = false;
    let customerEmailWarning = "";

    try {
      await resend.emails.send({
        from: fromEmail,
        to: adminEmail,
        replyTo: email,
        subject: `New Website Lead from ${name}`,
        html: adminEmailHtml,
      });

      adminEmailSent = true;
    } catch (emailError) {
      console.error("Admin email failed:", emailError);
    }

    try {
      await resend.emails.send({
        from: fromEmail,
        to: email,
        replyTo: adminEmail,
        subject: "Thank you for contacting Matthew Web",
        html: customerEmailHtml,
      });

      customerEmailSent = true;
    } catch (emailError) {
      console.error("Customer thank-you email failed:", emailError);

      customerEmailWarning =
        "Lead was saved, but the customer thank-you email was blocked. This usually happens because Resend onboarding@resend.dev can only send to your own email until you verify a domain.";
    }

    return NextResponse.json({
      ok: true,
      lead,
      adminEmailSent,
      customerEmailSent,
      customerEmailWarning,
    });
  } catch (error) {
    console.error("Lead form error:", error);

    return NextResponse.json(
      {
        ok: false,
        error: error.message || "Something went wrong.",
      },
      { status: 500 }
    );
  }
}
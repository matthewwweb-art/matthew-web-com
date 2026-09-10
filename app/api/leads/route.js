import "server-only";

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

/* ============================================================
   LIMITS
============================================================ */

const MAX_BODY_BYTES = 32 * 1024;

const LIMITS = {
  name: 120,
  email: 254,
  phone: 50,
  business_name: 160,
  message: 5000,
  page_source: 200,
  recaptchaToken: 4096,
};

/* ============================================================
   RESPONSE HELPERS
============================================================ */

function jsonError(message, status) {
  return NextResponse.json(
    {
      ok: false,
      error: message,
    },
    {
      status,
    }
  );
}

/* ============================================================
   STRING HELPERS
============================================================ */

function cleanString(value) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

function cleanSingleLine(value) {
  return cleanString(value)
    .replace(/[\r\n\t]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeHtmlWithBreaks(value) {
  return escapeHtml(value).replace(/\r?\n/g, "<br />");
}

function isValidEmail(email) {
  if (!email || email.length > LIMITS.email) {
    return false;
  }

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ============================================================
   RECAPTCHA
============================================================ */

async function verifyRecaptcha(token, recaptchaSecretKey) {
  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: recaptchaSecretKey,
        response: token,
      }),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      `reCAPTCHA service returned HTTP ${response.status}.`
    );
  }

  const data = await response.json();

  return Boolean(data?.success);
}

/* ============================================================
   POST /api/leads
============================================================ */

export async function POST(request) {
  try {
    /* --------------------------------------------------------
       ENVIRONMENT CONFIGURATION
    --------------------------------------------------------- */

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceRoleKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY;

    const resendApiKey = process.env.RESEND_API_KEY;
    const recaptchaSecretKey =
      process.env.RECAPTCHA_SECRET_KEY;

    const adminEmail =
      process.env.LEAD_TO_EMAIL ||
      process.env.LEAD_NOTIFICATION_EMAIL ||
      "matthewwweb@gmail.com";

    const fromEmail =
      process.env.EMAIL_FROM ||
      process.env.RESEND_FROM_EMAIL ||
      "Matthew Web <onboarding@resend.dev>";

    if (
      !supabaseUrl ||
      !supabaseServiceRoleKey ||
      !resendApiKey ||
      !recaptchaSecretKey
    ) {
      console.error(
        "Lead API configuration error: one or more required environment variables are missing."
      );

      return jsonError(
        "Contact form service is temporarily unavailable.",
        500
      );
    }

    /* --------------------------------------------------------
       CONTENT TYPE
    --------------------------------------------------------- */

    const contentType =
      request.headers.get("content-type") || "";

    if (
      !contentType
        .toLowerCase()
        .includes("application/json")
    ) {
      return jsonError(
        "Content-Type must be application/json.",
        415
      );
    }

    /* --------------------------------------------------------
       CONTENT LENGTH EARLY CHECK
    --------------------------------------------------------- */

    const contentLengthHeader =
      request.headers.get("content-length");

    if (contentLengthHeader) {
      const contentLength = Number(contentLengthHeader);

      if (
        Number.isFinite(contentLength) &&
        contentLength > MAX_BODY_BYTES
      ) {
        return jsonError(
          "Request body is too large.",
          413
        );
      }
    }

    /* --------------------------------------------------------
       READ BODY SAFELY
    --------------------------------------------------------- */

    let rawBody;

    try {
      rawBody = await request.text();
    } catch (error) {
      console.error("Unable to read lead request body:", error);

      return jsonError(
        "Unable to read request body.",
        400
      );
    }

    const bodyBytes = new TextEncoder().encode(
      rawBody
    ).length;

    if (bodyBytes > MAX_BODY_BYTES) {
      return jsonError(
        "Request body is too large.",
        413
      );
    }

    if (!rawBody.trim()) {
      return jsonError(
        "Request body is required.",
        400
      );
    }

    /* --------------------------------------------------------
       PARSE JSON SAFELY
    --------------------------------------------------------- */

    let body;

    try {
      body = JSON.parse(rawBody);
    } catch {
      return jsonError(
        "Invalid JSON request body.",
        400
      );
    }

    if (
      !body ||
      typeof body !== "object" ||
      Array.isArray(body)
    ) {
      return jsonError(
        "Request body must be a JSON object.",
        400
      );
    }

    /* --------------------------------------------------------
       TYPE VALIDATION
    --------------------------------------------------------- */

    const expectedStringFields = [
      "name",
      "email",
      "phone",
      "business_name",
      "message",
      "page_source",
      "recaptchaToken",
    ];

    for (const field of expectedStringFields) {
      if (
        body[field] !== undefined &&
        body[field] !== null &&
        typeof body[field] !== "string"
      ) {
        return jsonError(
          `Invalid value for ${field}.`,
          400
        );
      }
    }

    /* --------------------------------------------------------
       NORMALIZE INPUTS
    --------------------------------------------------------- */

    const name = cleanSingleLine(body.name);
    const email = cleanSingleLine(body.email);
    const phone = cleanSingleLine(body.phone);
    const business_name = cleanSingleLine(
      body.business_name
    );

    const message = cleanString(body.message);

    const page_source =
      cleanSingleLine(body.page_source) ||
      "Website Form";

    const recaptchaToken = cleanString(
      body.recaptchaToken
    );

    /* --------------------------------------------------------
       REQUIRED FIELDS
    --------------------------------------------------------- */

    if (
      !name ||
      !email ||
      !phone ||
      !business_name
    ) {
      return jsonError(
        "Missing required fields.",
        400
      );
    }

    if (!recaptchaToken) {
      return jsonError(
        "Missing reCAPTCHA token.",
        400
      );
    }

    /* --------------------------------------------------------
       FIELD LENGTHS
    --------------------------------------------------------- */

    if (name.length > LIMITS.name) {
      return jsonError(
        "Name is too long.",
        400
      );
    }

    if (email.length > LIMITS.email) {
      return jsonError(
        "Email address is too long.",
        400
      );
    }

    if (phone.length > LIMITS.phone) {
      return jsonError(
        "Phone number is too long.",
        400
      );
    }

    if (
      business_name.length >
      LIMITS.business_name
    ) {
      return jsonError(
        "Business name is too long.",
        400
      );
    }

    if (message.length > LIMITS.message) {
      return jsonError(
        "Message is too long.",
        400
      );
    }

    if (
      page_source.length >
      LIMITS.page_source
    ) {
      return jsonError(
        "Page source is too long.",
        400
      );
    }

    if (
      recaptchaToken.length >
      LIMITS.recaptchaToken
    ) {
      return jsonError(
        "Invalid reCAPTCHA token.",
        400
      );
    }

    /* --------------------------------------------------------
       EMAIL VALIDATION
    --------------------------------------------------------- */

    if (!isValidEmail(email)) {
      return jsonError(
        "Please enter a valid email address.",
        400
      );
    }

    /* --------------------------------------------------------
       RECAPTCHA VERIFICATION
    --------------------------------------------------------- */

    let recaptchaValid = false;

    try {
      recaptchaValid = await verifyRecaptcha(
        recaptchaToken,
        recaptchaSecretKey
      );
    } catch (error) {
      console.error(
        "reCAPTCHA verification service error:",
        error
      );

      return jsonError(
        "Unable to verify reCAPTCHA right now. Please try again.",
        502
      );
    }

    if (!recaptchaValid) {
      return jsonError(
        "reCAPTCHA verification failed.",
        403
      );
    }

    /* --------------------------------------------------------
       SERVER CLIENTS
    --------------------------------------------------------- */

    const supabase = createClient(
      supabaseUrl,
      supabaseServiceRoleKey,
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      }
    );

    const resend = new Resend(resendApiKey);

    /* --------------------------------------------------------
       SAVE LEAD
    --------------------------------------------------------- */

    const leadData = {
      name,
      email,
      phone,
      business_name,
      message,
      page_source,
      status: "new",
    };

    const {
      data: lead,
      error: leadError,
    } = await supabase
      .from("leads")
      .insert([leadData])
      .select()
      .single();

    if (leadError) {
      console.error(
        "Supabase lead insert failed:",
        leadError
      );

      return jsonError(
        "Unable to save your request right now. Please try again.",
        500
      );
    }

    /* --------------------------------------------------------
       SAFE EMAIL VALUES
    --------------------------------------------------------- */

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);

    const safeBusinessName =
      escapeHtml(business_name);

    const safePageSource =
      escapeHtml(page_source);

    const safeMessage = message
      ? escapeHtmlWithBreaks(message)
      : "No message included.";

    /* --------------------------------------------------------
       ADMIN EMAIL
    --------------------------------------------------------- */

    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
        <h2 style="color: #f57c00;">
          New Website Lead
        </h2>

        <p>
          <strong>Name:</strong>
          ${safeName}
        </p>

        <p>
          <strong>Email:</strong>
          ${safeEmail}
        </p>

        <p>
          <strong>Phone:</strong>
          ${safePhone}
        </p>

        <p>
          <strong>Business Name:</strong>
          ${safeBusinessName}
        </p>

        <p>
          <strong>Page Source:</strong>
          ${safePageSource}
        </p>

        <p>
          <strong>Message:</strong>
        </p>

        <p>
          ${safeMessage}
        </p>
      </div>
    `;

    /* --------------------------------------------------------
       CUSTOMER EMAIL
    --------------------------------------------------------- */

    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
        <h2 style="color: #f57c00;">
          Thank you for contacting Matthew Web!
        </h2>

        <p>
          Hi ${safeName},
        </p>

        <p>
          Thank you for contacting Matthew Web.
          We appreciate you reaching out and
          taking the time to tell us about your
          website project.
        </p>

        <p>
          We received your message and will be
          in contact within 48 hours.
        </p>

        <p>
          Thank you,<br />
          Matthew Web
        </p>
      </div>
    `;

    /* --------------------------------------------------------
       SEND ADMIN EMAIL
    --------------------------------------------------------- */

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
    } catch (error) {
      console.error(
        "Admin lead notification email failed:",
        error
      );
    }

    /* --------------------------------------------------------
       SEND CUSTOMER EMAIL
    --------------------------------------------------------- */

    try {
      await resend.emails.send({
        from: fromEmail,
        to: email,
        replyTo: adminEmail,
        subject:
          "Thank you for contacting Matthew Web",
        html: customerEmailHtml,
      });

      customerEmailSent = true;
    } catch (error) {
      console.error(
        "Customer thank-you email failed:",
        error
      );

      customerEmailWarning =
        "Lead was saved, but the confirmation email could not be sent.";
    }

    /* --------------------------------------------------------
       SUCCESS
    --------------------------------------------------------- */

    return NextResponse.json(
      {
        ok: true,
        lead,
        adminEmailSent,
        customerEmailSent,
        customerEmailWarning,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "Unexpected lead form error:",
      error
    );

    return jsonError(
      "Something went wrong while processing your request.",
      500
    );
  }
}
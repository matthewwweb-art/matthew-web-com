import "server-only";

import { NextResponse } from "next/server";

import { requireAdminApi } from "@/lib/requireAdminApi";

import {
  rateLimitRequest,
  getRateLimitHeaders,
} from "@/lib/rateLimit";

/* ============================================================
   MATTHEW WEB — TEST FOLLOW-UP REMINDER

   PRIVATE ADMIN ROUTE

   Purpose:
   - Allows an authorized Matthew Web admin to manually trigger
     the daily follow-up reminder system.
   - Keeps CRON_SECRET completely server-side.
   - Does NOT expose the cron secret to the browser.

   Security flow:

   Admin Supabase session
            ↓
   requireAdminApi()
            ↓
   admin_users verification
            ↓
   admin-user rate limiting
            ↓
   Server internally calls daily-followups
            ↓
   CRON_SECRET sent server-to-server only

   Rate limits:
   - 3 manual tests / 15 minutes
   - 10 manual tests / 24 hours
============================================================ */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* ============================================================
   RATE LIMITS
============================================================ */

const REMINDER_BURST_LIMIT = 3;

const REMINDER_BURST_WINDOW_SECONDS =
  15 * 60;

const REMINDER_DAILY_LIMIT = 10;

const REMINDER_DAILY_WINDOW_SECONDS =
  24 * 60 * 60;

/* ============================================================
   RESPONSE HELPER
============================================================ */

function jsonError(
  message,
  status,
  headers = {}
) {
  return NextResponse.json(
    {
      ok: false,
      error: message,
    },
    {
      status,

      headers: {
        "Cache-Control":
          "no-store",

        ...headers,
      },
    }
  );
}

/* ============================================================
   RATE LIMIT
============================================================ */

async function checkReminderRateLimit(
  request,
  adminIdentifier
) {
  /* --------------------------------------------------------
     SHORT / BURST LIMIT
  --------------------------------------------------------- */

  const burst =
    await rateLimitRequest(
      request,
      {
        namespace:
          "test-reminder-burst",

        limit:
          REMINDER_BURST_LIMIT,

        windowSeconds:
          REMINDER_BURST_WINDOW_SECONDS,

        identifier:
          adminIdentifier,
      }
    );

  if (!burst.allowed) {
    return {
      ok: false,

      response:
        jsonError(
          "Test reminder limit reached. Please wait a few minutes before running another test.",
          429,
          getRateLimitHeaders(
            burst
          )
        ),
    };
  }

  /* --------------------------------------------------------
     DAILY LIMIT
  --------------------------------------------------------- */

  const daily =
    await rateLimitRequest(
      request,
      {
        namespace:
          "test-reminder-daily",

        limit:
          REMINDER_DAILY_LIMIT,

        windowSeconds:
          REMINDER_DAILY_WINDOW_SECONDS,

        identifier:
          adminIdentifier,
      }
    );

  if (!daily.allowed) {
    return {
      ok: false,

      response:
        jsonError(
          "Daily test reminder limit reached. Please try again after the limit resets.",
          429,
          getRateLimitHeaders(
            daily
          )
        ),
    };
  }

  return {
    ok: true,
    burst,
    daily,
  };
}

/* ============================================================
   POST
============================================================ */

export async function POST(
  request
) {
  try {
    /* ========================================================
       1. MATTHEW WEB ADMIN AUTHORIZATION
    ======================================================== */

    const adminAuth =
      await requireAdminApi(
        request
      );

    if (!adminAuth.ok) {
      return jsonError(
        adminAuth.error,
        adminAuth.status
      );
    }

    /* ========================================================
       2. ADMIN IDENTITY
    ======================================================== */

    const adminIdentifier =
      adminAuth.user?.id ||
      adminAuth.user?.email ||
      adminAuth.admin?.email;

    if (!adminIdentifier) {
      console.error(
        "Authorized test reminder request did not contain a usable admin identity."
      );

      return jsonError(
        "Admin identity could not be verified.",
        403
      );
    }

    /* ========================================================
       3. RATE LIMIT

       Runs after admin authorization and before the internal
       daily-followups request.

       Anonymous attackers therefore cannot consume the admin's
       reminder allowance.
    ======================================================== */

    const rateCheck =
      await checkReminderRateLimit(
        request,
        adminIdentifier
      );

    if (!rateCheck.ok) {
      return rateCheck.response;
    }

    /* ========================================================
       4. VERIFY CRON CONFIGURATION
    ======================================================== */

    const cronSecret =
      process.env.CRON_SECRET;

    if (!cronSecret) {
      console.error(
        "Test reminder failed: CRON_SECRET is missing."
      );

      return jsonError(
        "Follow-up reminder configuration is incomplete.",
        500
      );
    }

    /* ========================================================
       5. BUILD INTERNAL DAILY-FOLLOWUP URL
    ======================================================== */

    const dailyFollowupUrl =
      new URL(
        "/api/lead-finder/daily-followups",
        request.url
      );

    /* ========================================================
       6. CALL DAILY FOLLOW-UP ROUTE

       CRON_SECRET stays entirely on the server.
    ======================================================== */

    let reminderResponse;

    try {
      reminderResponse =
        await fetch(
          dailyFollowupUrl,
          {
            method: "GET",

            headers: {
              Authorization:
                `Bearer ${cronSecret}`,

              "Cache-Control":
                "no-store",
            },

            cache:
              "no-store",
          }
        );
    } catch (error) {
      console.error(
        "Test reminder internal request failed:",
        error
      );

      return jsonError(
        "Could not reach the follow-up reminder service.",
        502
      );
    }

    /* ========================================================
       7. READ DAILY FOLLOW-UP RESPONSE
    ======================================================== */

    let reminderResult;

    try {
      reminderResult =
        await reminderResponse.json();
    } catch {
      return jsonError(
        "The follow-up reminder service returned an unreadable response.",
        502
      );
    }

    /* ========================================================
       8. HANDLE DAILY FOLLOW-UP ERROR

       Keep detailed internal reminder errors in server logs
       instead of forwarding configuration details directly
       to the browser.
    ======================================================== */

    if (
      !reminderResponse.ok ||
      !reminderResult?.ok
    ) {
      console.error(
        "Test reminder daily-followups error:",
        reminderResult
      );

      return jsonError(
        "The follow-up reminder could not be completed.",
        reminderResponse.status ||
          502
      );
    }

    /* ========================================================
       9. SUCCESS
    ======================================================== */

    return NextResponse.json(
      {
        ok: true,

        sent:
          Boolean(
            reminderResult.sent
          ),

        count:
          Number(
            reminderResult.count ||
              0
          ),

        message:
          reminderResult.message ||
          (
            reminderResult.sent
              ? "Test follow-up reminder completed successfully."
              : "No follow-up reminder was needed."
          ),
      },
      {
        status: 200,

        headers: {
          "Cache-Control":
            "no-store",
        },
      }
    );
  } catch (error) {
    console.error(
      "Test follow-up reminder route error:",
      error
    );

    return jsonError(
      "Test follow-up reminder failed.",
      500
    );
  }
}
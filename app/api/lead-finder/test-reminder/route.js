import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/requireAdminApi";

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
   Server internally calls daily-followups
            ↓
   CRON_SECRET sent server-to-server only
============================================================ */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* ============================================================
   POST
============================================================ */

export async function POST(request) {
  try {
    /* ========================================================
       1. MATTHEW WEB ADMIN AUTHORIZATION
    ======================================================== */

    const adminAuth =
      await requireAdminApi(request);

    if (!adminAuth.ok) {
      return NextResponse.json(
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
       2. VERIFY CRON CONFIGURATION
    ======================================================== */

    const cronSecret =
      process.env.CRON_SECRET;

    if (!cronSecret) {
      console.error(
        "Test reminder failed: CRON_SECRET is missing."
      );

      return NextResponse.json(
        {
          ok: false,
          error:
            "Follow-up reminder configuration is incomplete.",
        },
        {
          status: 500,
        }
      );
    }

    /* ========================================================
       3. BUILD INTERNAL DAILY-FOLLOWUP URL
    ======================================================== */

    const dailyFollowupUrl =
      new URL(
        "/api/lead-finder/daily-followups",
        request.url
      );

    /* ========================================================
       4. CALL DAILY FOLLOW-UP ROUTE

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

            cache: "no-store",
          }
        );
    } catch (error) {
      console.error(
        "Test reminder internal request failed:",
        error
      );

      return NextResponse.json(
        {
          ok: false,
          error:
            "Could not reach the follow-up reminder service.",
        },
        {
          status: 502,
        }
      );
    }

    /* ========================================================
       5. READ DAILY FOLLOW-UP RESPONSE
    ======================================================== */

    let reminderResult;

    try {
      reminderResult =
        await reminderResponse.json();
    } catch {
      return NextResponse.json(
        {
          ok: false,
          error:
            "The follow-up reminder service returned an unreadable response.",
        },
        {
          status: 502,
        }
      );
    }

    /* ========================================================
       6. HANDLE DAILY FOLLOW-UP ERROR
    ======================================================== */

    if (
      !reminderResponse.ok ||
      !reminderResult?.ok
    ) {
      console.error(
        "Test reminder daily-followups error:",
        reminderResult
      );

      return NextResponse.json(
        {
          ok: false,

          error:
            reminderResult?.error ||
            "The follow-up reminder could not be sent.",
        },
        {
          status:
            reminderResponse.status ||
            500,
        }
      );
    }

    /* ========================================================
       7. SUCCESS
    ======================================================== */

    return NextResponse.json({
      ok: true,

      sent:
        Boolean(
          reminderResult.sent
        ),

      count:
        Number(
          reminderResult.count || 0
        ),

      message:
        reminderResult.message ||
        (
          reminderResult.sent
            ? "Test follow-up reminder completed successfully."
            : "No follow-up reminder was needed."
        ),
    });
  } catch (error) {
    console.error(
      "Test follow-up reminder route error:",
      error
    );

    return NextResponse.json(
      {
        ok: false,
        error:
          "Test follow-up reminder failed.",
      },
      {
        status: 500,
      }
    );
  }
}
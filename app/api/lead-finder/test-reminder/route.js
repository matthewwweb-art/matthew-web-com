import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

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

    if (!process.env.CRON_SECRET) {
      return NextResponse.json(
        { ok: false, error: "Missing CRON_SECRET." },
        { status: 500 }
      );
    }

    const origin = request.nextUrl.origin;

    const reminderResponse = await fetch(
      `${origin}/api/lead-finder/daily-followups`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.CRON_SECRET}`,
        },
      }
    );

    const reminderResult = await reminderResponse.json();

    if (!reminderResponse.ok || !reminderResult.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: reminderResult.error || "Reminder test failed.",
        },
        { status: reminderResponse.status }
      );
    }

    return NextResponse.json({
      ok: true,
      result: reminderResult,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error?.message || "Test reminder failed.",
      },
      { status: 500 }
    );
  }
}
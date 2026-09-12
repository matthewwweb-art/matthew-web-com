import "server-only";

import { NextResponse } from "next/server";
import { requireAdminApi } from "../../../../lib/requireAdminApi";

/* ============================================================
   MATTHEW WEB — ADMIN ACCESS CHECK

   Purpose:
   - Validate the current Supabase session
   - Confirm the signed-in user belongs to public.admin_users
   - Give the admin UI one centralized authorization check

   Security:
   - Service-role credentials never reach the browser
   - Authorization is delegated to requireAdminApi()
   - Response is never cached
============================================================ */

export const dynamic = "force-dynamic";

export async function GET(request) {
  const auth = await requireAdminApi(request);

  if (!auth.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: auth.error,
      },
      {
        status: auth.status,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  }

  return NextResponse.json(
    {
      ok: true,
      user: {
        id: auth.user.id,
        email: auth.user.email,
      },
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}
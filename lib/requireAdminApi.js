import { createClient } from "@supabase/supabase-js";

/* ============================================================
   MATTHEW WEB — PRIVATE API ADMIN AUTHORIZATION

   Verifies:
   1. A Bearer token was supplied
   2. The token belongs to a real Supabase user
   3. That user's email exists in public.admin_users

   This file is SERVER-ONLY.
============================================================ */

export async function requireAdminApi(request) {
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL;

  const supabaseAnonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const serviceRoleKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (
    !supabaseUrl ||
    !supabaseAnonKey ||
    !serviceRoleKey
  ) {
    return {
      ok: false,
      status: 500,
      error:
        "Server authentication configuration is incomplete.",
    };
  }

  /* ==========================================================
     GET BEARER TOKEN
  ========================================================== */

  const authHeader =
    request.headers.get("authorization") || "";

  if (
    !authHeader
      .toLowerCase()
      .startsWith("bearer ")
  ) {
    return {
      ok: false,
      status: 401,
      error: "Missing admin session.",
    };
  }

  const token =
    authHeader
      .slice(7)
      .trim();

  if (!token) {
    return {
      ok: false,
      status: 401,
      error: "Missing admin session.",
    };
  }

  /* ==========================================================
     VERIFY SUPABASE USER
  ========================================================== */

  const authClient = createClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    }
  );

  const {
    data: userData,
    error: userError,
  } = await authClient.auth.getUser(token);

  const user =
    userData?.user || null;

  if (
    userError ||
    !user ||
    !user.email
  ) {
    return {
      ok: false,
      status: 401,
      error: "Invalid admin session.",
    };
  }

  /* ==========================================================
     VERIFY ADMIN_USERS MEMBERSHIP

     Service role is used only on the server.
     It is NEVER returned to the browser.
  ========================================================== */

  const adminClient = createClient(
    supabaseUrl,
    serviceRoleKey,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    }
  );

  const {
    data: adminRecord,
    error: adminError,
  } = await adminClient
    .from("admin_users")
    .select("id, email")
    .ilike(
      "email",
      user.email
    )
    .maybeSingle();

  if (
    adminError ||
    !adminRecord
  ) {
    return {
      ok: false,
      status: 403,
      error:
        "This account is not authorized for Matthew Web administration.",
    };
  }

  /* ==========================================================
     AUTHORIZED
  ========================================================== */

  return {
    ok: true,

    user: {
      id: user.id,
      email: user.email,
    },

    admin: {
      id: adminRecord.id,
      email: adminRecord.email,
    },
  };
}
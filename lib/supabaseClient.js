import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL;

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error(
    "Missing NEXT_PUBLIC_SUPABASE_URL"
  );
}

if (!supabaseAnonKey) {
  throw new Error(
    "Missing NEXT_PUBLIC_SUPABASE_ANON_KEY"
  );
}

/*
  Matthew Web browser Supabase client.

  persistSession:
    Keeps the authenticated admin session across reloads.

  autoRefreshToken:
    Refreshes an authenticated session automatically before
    the access token expires.

  detectSessionInUrl:
    Disabled because Matthew Web currently does not use
    OAuth callbacks, magic-link authentication, or password
    recovery links that need auth tokens read from the URL.
*/
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: false,
    },
  }
);

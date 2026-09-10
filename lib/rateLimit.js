import "server-only";

import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";

/* ============================================================
   MATTHEW WEB
   SERVER-SIDE DATABASE-BACKED RATE LIMITER

   Uses:
   - Supabase service role
   - consume_api_rate_limit RPC
   - hashed client identifiers
   - Vercel-aware client IP detection
============================================================ */

/* ============================================================
   SUPABASE ADMIN CLIENT
============================================================ */

function getSupabaseAdmin() {
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL;

  const serviceRoleKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      "Rate limiter server configuration is missing."
    );
  }

  return createClient(
    supabaseUrl,
    serviceRoleKey,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    }
  );
}

/* ============================================================
   CLIENT ADDRESS

   Preference order:

   1. x-vercel-forwarded-for
   2. x-forwarded-for
   3. x-real-ip
   4. "unknown"

   In production on Vercel, the forwarding headers are supplied
   by the platform.

   The x-forwarded-for fallback is also useful for localhost
   security testing.
============================================================ */

function getClientAddress(request) {
  const vercelForwardedFor =
    request.headers.get(
      "x-vercel-forwarded-for"
    );

  if (vercelForwardedFor) {
    const firstAddress =
      vercelForwardedFor
        .split(",")[0]
        ?.trim();

    if (firstAddress) {
      return firstAddress;
    }
  }

  const forwardedFor =
    request.headers.get(
      "x-forwarded-for"
    );

  if (forwardedFor) {
    const firstAddress =
      forwardedFor
        .split(",")[0]
        ?.trim();

    if (firstAddress) {
      return firstAddress;
    }
  }

  const realIp =
    request.headers.get(
      "x-real-ip"
    );

  if (realIp) {
    const cleaned =
      realIp.trim();

    if (cleaned) {
      return cleaned;
    }
  }

  return "unknown";
}

/* ============================================================
   IDENTIFIER HASHING

   We do not need to store raw visitor IP addresses inside
   api_rate_limits.

   Instead, the address or supplied identifier is SHA-256
   hashed before being used as part of the database rate key.
============================================================ */

function hashIdentifier(value) {
  return crypto
    .createHash("sha256")
    .update(String(value))
    .digest("hex");
}

/* ============================================================
   RATE LIMIT REQUEST

   Example:

   const result = await rateLimitRequest(request, {
     namespace: "contact-form",
     limit: 5,
     windowSeconds: 900,
   });

   Or for an authenticated user:

   const result = await rateLimitRequest(request, {
     namespace: "ai-outreach",
     limit: 20,
     windowSeconds: 3600,
     identifier: user.id,
   });
============================================================ */

export async function rateLimitRequest(
  request,
  {
    namespace,
    limit,
    windowSeconds,
    identifier,
  }
) {
  /* --------------------------------------------------------
     VALIDATE CONFIGURATION
  --------------------------------------------------------- */

  if (
    typeof namespace !== "string" ||
    !namespace.trim()
  ) {
    throw new Error(
      "Rate limiter namespace is required."
    );
  }

  if (
    !Number.isInteger(limit) ||
    limit < 1
  ) {
    throw new Error(
      "Rate limiter limit must be at least 1."
    );
  }

  if (
    !Number.isInteger(windowSeconds) ||
    windowSeconds < 1
  ) {
    throw new Error(
      "Rate limiter window must be at least 1 second."
    );
  }

  /* --------------------------------------------------------
     DETERMINE IDENTIFIER

     A caller may provide a user/account identifier.

     Otherwise we use the client's network address.
  --------------------------------------------------------- */

  const suppliedIdentifier =
    identifier !== undefined &&
    identifier !== null
      ? String(identifier).trim()
      : "";

  const clientIdentifier =
    suppliedIdentifier ||
    getClientAddress(request);

  /* --------------------------------------------------------
     HASH IDENTIFIER
  --------------------------------------------------------- */

  const hashedIdentifier =
    hashIdentifier(clientIdentifier);

  const cleanedNamespace =
    namespace
      .trim()
      .toLowerCase();

  const rateKey =
    `${cleanedNamespace}:${hashedIdentifier}`;

  /* --------------------------------------------------------
     CALL SUPABASE ATOMIC RATE-LIMIT RPC
  --------------------------------------------------------- */

  const supabase =
    getSupabaseAdmin();

  const {
    data,
    error,
  } = await supabase.rpc(
    "consume_api_rate_limit",
    {
      p_rate_key: rateKey,
      p_limit: limit,
      p_window_seconds: windowSeconds,
    }
  );

  /* --------------------------------------------------------
     DATABASE/RPC FAILURE

     Fail open deliberately.

     If the rate-limit database becomes temporarily unavailable,
     the public website should not automatically stop working.

     The error remains server-side in logs.
  --------------------------------------------------------- */

  if (error) {
    console.error(
      "Rate limit RPC failed:",
      error
    );

    return {
      allowed: true,
      remaining: null,
      resetAt: null,
      unavailable: true,
    };
  }

  const result =
    Array.isArray(data)
      ? data[0]
      : data;

  if (!result) {
    console.error(
      "Rate limit RPC returned no result."
    );

    return {
      allowed: true,
      remaining: null,
      resetAt: null,
      unavailable: true,
    };
  }

  /* --------------------------------------------------------
     NORMALIZE RESULT
  --------------------------------------------------------- */

  const remainingNumber =
    typeof result.remaining === "number"
      ? result.remaining
      : Number(result.remaining);

  return {
    allowed:
      result.allowed === true,

    remaining:
      Number.isFinite(
        remainingNumber
      )
        ? Math.max(
            0,
            remainingNumber
          )
        : null,

    resetAt:
      result.reset_at || null,

    unavailable: false,
  };
}

/* ============================================================
   RATE-LIMIT RESPONSE HEADERS

   Intended primarily for 429 responses.

   Example:

   return NextResponse.json(
     {
       ok: false,
       error: "Too many requests.",
     },
     {
       status: 429,
       headers: getRateLimitHeaders(result),
     }
   );
============================================================ */

export function getRateLimitHeaders(
  result
) {
  const headers = {
    "Cache-Control": "no-store",
  };

  /* --------------------------------------------------------
     REMAINING REQUESTS
  --------------------------------------------------------- */

  if (
    Number.isFinite(
      result?.remaining
    )
  ) {
    headers[
      "X-RateLimit-Remaining"
    ] = String(
      Math.max(
        0,
        result.remaining
      )
    );
  }

  /* --------------------------------------------------------
     RESET / RETRY-AFTER
  --------------------------------------------------------- */

  if (result?.resetAt) {
    const resetDate =
      new Date(
        result.resetAt
      );

    const resetTime =
      resetDate.getTime();

    if (
      Number.isFinite(
        resetTime
      )
    ) {
      const secondsUntilReset =
        Math.max(
          1,
          Math.ceil(
            (
              resetTime -
              Date.now()
            ) /
              1000
          )
        );

      headers[
        "Retry-After"
      ] = String(
        secondsUntilReset
      );

      headers[
        "X-RateLimit-Reset"
      ] = String(
        Math.ceil(
          resetTime / 1000
        )
      );
    }
  }

  return headers;
}
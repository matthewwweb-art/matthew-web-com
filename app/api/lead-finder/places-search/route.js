import "server-only";

import { NextResponse } from "next/server";

import { requireAdminApi } from "@/lib/requireAdminApi";
import {
  rateLimitRequest,
  getRateLimitHeaders,
} from "@/lib/rateLimit";

/* ============================================================
   MATTHEW WEB — GOOGLE PLACES LEAD SEARCH API

   PRIVATE ADMIN ROUTE

   Security:
   - Requires valid Supabase authentication
   - Requires user to exist in public.admin_users
   - Google API key stays server-side
   - Rate limited by authenticated admin identity
   - Requires application/json request bodies
   - Limits incoming request bodies to 8 KiB
   - Limits search query to 200 characters
   - Burst limit: 20 searches / 15 minutes
   - Daily limit: 100 searches / 24 hours

   Returns CRM-compatible fields:
   - place_id
   - business_name
   - category
   - phone
   - website_url
   - google_maps_url
   - address
   - city
   - state
   - source
   - rating
   - review_count
   - problem_summary
   - offer_idea
   - lead_score
============================================================ */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const GOOGLE_PLACES_URL =
  "https://places.googleapis.com/v1/places:searchText";

const MAX_QUERY_LENGTH = 200;
const MAX_REQUEST_BODY_BYTES = 8 * 1024;

/* ============================================================
   GOOGLE PLACES RATE LIMITS
============================================================ */

const PLACES_BURST_LIMIT = 20;
const PLACES_BURST_WINDOW_SECONDS =
  15 * 60;

const PLACES_DAILY_LIMIT = 100;
const PLACES_DAILY_WINDOW_SECONDS =
  24 * 60 * 60;

/* ============================================================
   RESPONSE HELPERS
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
        "Cache-Control": "no-store",

        ...headers,
      },
    }
  );
}

/* ============================================================
   REQUEST VALIDATION
============================================================ */

function isPlainObject(value) {
  return Boolean(
    value &&
      typeof value === "object" &&
      !Array.isArray(value)
  );
}

function isJsonContentType(request) {
  const contentType =
    request.headers
      .get("content-type")
      ?.split(";", 1)[0]
      ?.trim()
      ?.toLowerCase();

  return (
    contentType ===
    "application/json"
  );
}

function getDeclaredContentLength(
  request
) {
  const raw =
    request.headers
      .get("content-length")
      ?.trim();

  if (
    !raw ||
    !/^\d+$/.test(raw)
  ) {
    return null;
  }

  const parsed =
    Number(raw);

  return Number.isSafeInteger(
    parsed
  )
    ? parsed
    : null;
}

async function readValidatedSearchBody(
  request
) {
  /* --------------------------------------------------------
     REQUIRE JSON CONTENT TYPE
  --------------------------------------------------------- */

  if (
    !isJsonContentType(
      request
    )
  ) {
    return {
      ok: false,

      response:
        jsonError(
          "Content-Type must be application/json.",
          415
        ),
    };
  }

  /* --------------------------------------------------------
     EARLY CONTENT-LENGTH CHECK
  --------------------------------------------------------- */

  const declaredLength =
    getDeclaredContentLength(
      request
    );

  if (
    declaredLength !== null &&
    declaredLength >
      MAX_REQUEST_BODY_BYTES
  ) {
    return {
      ok: false,

      response:
        jsonError(
          "Request body is too large.",
          413
        ),
    };
  }

  /* --------------------------------------------------------
     READ RAW BODY
  --------------------------------------------------------- */

  let rawBody;

  try {
    rawBody =
      await request.text();
  } catch {
    return {
      ok: false,

      response:
        jsonError(
          "Invalid request body.",
          400
        ),
    };
  }

  /* --------------------------------------------------------
     ACTUAL UTF-8 BODY SIZE CHECK
  --------------------------------------------------------- */

  if (
    Buffer.byteLength(
      rawBody,
      "utf8"
    ) >
    MAX_REQUEST_BODY_BYTES
  ) {
    return {
      ok: false,

      response:
        jsonError(
          "Request body is too large.",
          413
        ),
    };
  }

  if (
    !rawBody.trim()
  ) {
    return {
      ok: false,

      response:
        jsonError(
          "Request body is required.",
          400
        ),
    };
  }

  /* --------------------------------------------------------
     PARSE JSON
  --------------------------------------------------------- */

  let body;

  try {
    body =
      JSON.parse(
        rawBody
      );
  } catch {
    return {
      ok: false,

      response:
        jsonError(
          "Invalid JSON request body.",
          400
        ),
    };
  }

  if (
    !isPlainObject(
      body
    )
  ) {
    return {
      ok: false,

      response:
        jsonError(
          "Request body must be a JSON object.",
          400
        ),
    };
  }

  /* --------------------------------------------------------
     QUERY VALIDATION
  --------------------------------------------------------- */

  if (
    typeof body.query !==
    "string"
  ) {
    return {
      ok: false,

      response:
        jsonError(
          "Search query must be text.",
          400
        ),
    };
  }

  const query =
    cleanText(
      body.query
    );

  if (!query) {
    return {
      ok: false,

      response:
        jsonError(
          "Search query is required.",
          400
        ),
    };
  }

  if (
    query.length >
    MAX_QUERY_LENGTH
  ) {
    return {
      ok: false,

      response:
        jsonError(
          `Search query must be ${MAX_QUERY_LENGTH} characters or fewer.`,
          400
        ),
    };
  }

  return {
    ok: true,
    query,
  };
}

/* ============================================================
   BASIC HELPERS
============================================================ */

function cleanText(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim();
}

function clampScore(value) {
  return Math.max(
    0,
    Math.min(
      100,
      Math.round(
        Number(value) || 0
      )
    )
  );
}

/* ============================================================
   ADDRESS HELPERS
============================================================ */

function findAddressComponent(
  addressComponents,
  type
) {
  if (
    !Array.isArray(
      addressComponents
    )
  ) {
    return "";
  }

  const component =
    addressComponents.find(
      (item) =>
        Array.isArray(
          item?.types
        )
          ? item.types.includes(
              type
            )
          : false
    );

  return (
    component?.longText ||
    component?.shortText ||
    ""
  );
}

function getCity(
  addressComponents
) {
  return (
    findAddressComponent(
      addressComponents,
      "locality"
    ) ||
    findAddressComponent(
      addressComponents,
      "postal_town"
    ) ||
    findAddressComponent(
      addressComponents,
      "sublocality"
    ) ||
    findAddressComponent(
      addressComponents,
      "administrative_area_level_2"
    ) ||
    ""
  );
}

function getState(
  addressComponents
) {
  if (
    !Array.isArray(
      addressComponents
    )
  ) {
    return "";
  }

  const component =
    addressComponents.find(
      (item) =>
        Array.isArray(
          item?.types
        )
          ? item.types.includes(
              "administrative_area_level_1"
            )
          : false
    );

  return (
    component?.shortText ||
    component?.longText ||
    ""
  );
}

/* ============================================================
   CATEGORY
============================================================ */

function formatCategory(place) {
  const displayCategory =
    cleanText(
      place
        ?.primaryTypeDisplayName
        ?.text
    );

  if (displayCategory) {
    return displayCategory;
  }

  const primaryType =
    cleanText(
      place?.primaryType
    );

  if (!primaryType) {
    return "Business";
  }

  return primaryType
    .replace(/_/g, " ")
    .replace(
      /\b\w/g,
      (letter) =>
        letter.toUpperCase()
    );
}

/* ============================================================
   LEAD SCORING

   Internal prioritization only.

   This does NOT claim:
   - how much money the business is losing
   - how likely it is to purchase
   - how successful outreach will be
============================================================ */

function calculateLeadScore(place) {
  let score = 20;

  const website =
    cleanText(
      place?.websiteUri
    );

  const phone =
    cleanText(
      place
        ?.nationalPhoneNumber
    );

  const maps =
    cleanText(
      place?.googleMapsUri
    );

  const rating =
    Number(
      place?.rating || 0
    );

  const reviews =
    Number(
      place
        ?.userRatingCount ||
        0
    );

  if (!website) {
    score += 40;
  } else {
    score += 8;
  }

  if (phone) {
    score += 15;
  }

  if (maps) {
    score += 5;
  }

  if (reviews > 0) {
    score += 5;
  }

  if (reviews >= 10) {
    score += 3;
  }

  if (reviews >= 50) {
    score += 2;
  }

  if (rating >= 4) {
    score += 5;
  }

  return clampScore(score);
}

/* ============================================================
   PROBLEM SUMMARY
============================================================ */

function buildProblemSummary(
  place
) {
  const website =
    cleanText(
      place?.websiteUri
    );

  const phone =
    cleanText(
      place
        ?.nationalPhoneNumber
    );

  const issues = [];

  if (!website) {
    issues.push(
      "No website was returned by the Google Places listing."
    );
  }

  if (!phone) {
    issues.push(
      "No phone number was returned by the Google Places listing."
    );
  }

  if (
    issues.length === 0
  ) {
    return (
      "A website and phone number were found. Review the website manually " +
      "before outreach to identify a real, specific improvement opportunity."
    );
  }

  return issues.join(" ");
}

/* ============================================================
   OFFER IDEA
============================================================ */

function buildOfferIdea(place) {
  const website =
    cleanText(
      place?.websiteUri
    );

  if (!website) {
    return (
      "Potential website-design opportunity. Confirm that the business " +
      "does not already use another website before contacting them."
    );
  }

  return (
    "Review the existing website for specific issues such as mobile usability, " +
    "page speed, outdated information, weak calls to action, missing forms, " +
    "search setup, or other business functionality before proposing an improvement."
  );
}

/* ============================================================
   NORMALIZE GOOGLE PLACE
============================================================ */

function normalizePlace(place) {
  const businessName =
    cleanText(
      place
        ?.displayName
        ?.text
    ) ||
    "Unknown Business";

  const address =
    cleanText(
      place
        ?.formattedAddress
    );

  const phone =
    cleanText(
      place
        ?.nationalPhoneNumber
    );

  const websiteUrl =
    cleanText(
      place?.websiteUri
    );

  const googleMapsUrl =
    cleanText(
      place
        ?.googleMapsUri
    );

  const city =
    getCity(
      place
        ?.addressComponents
    );

  const state =
    getState(
      place
        ?.addressComponents
    );

  const rating =
    typeof place?.rating ===
    "number"
      ? place.rating
      : null;

  const reviewCount =
    typeof place
      ?.userRatingCount ===
    "number"
      ? place.userRatingCount
      : null;

  return {
    place_id:
      cleanText(
        place?.id
      ),

    business_name:
      businessName,

    category:
      formatCategory(place),

    phone:
      phone || null,

    website_url:
      websiteUrl || null,

    google_maps_url:
      googleMapsUrl || null,

    address:
      address || null,

    city:
      city || null,

    state:
      state || null,

    source:
      "Google Places",

    rating,

    review_count:
      reviewCount,

    problem_summary:
      buildProblemSummary(
        place
      ),

    offer_idea:
      buildOfferIdea(
        place
      ),

    lead_score:
      calculateLeadScore(
        place
      ),
  };
}

/* ============================================================
   ADMIN RATE LIMIT
============================================================ */

async function checkPlacesRateLimit(
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
          "google-places-burst",

        limit:
          PLACES_BURST_LIMIT,

        windowSeconds:
          PLACES_BURST_WINDOW_SECONDS,

        identifier:
          adminIdentifier,
      }
    );

  if (!burst.allowed) {
    return {
      ok: false,

      response:
        jsonError(
          "Google Places search limit reached. Please wait a few minutes before searching again.",
          429,
          getRateLimitHeaders(
            burst
          )
        ),
    };
  }

  /* --------------------------------------------------------
     DAILY COST LIMIT
  --------------------------------------------------------- */

  const daily =
    await rateLimitRequest(
      request,
      {
        namespace:
          "google-places-daily",

        limit:
          PLACES_DAILY_LIMIT,

        windowSeconds:
          PLACES_DAILY_WINDOW_SECONDS,

        identifier:
          adminIdentifier,
      }
    );

  if (!daily.allowed) {
    return {
      ok: false,

      response:
        jsonError(
          "Daily Google Places search limit reached. Please try again after the limit resets.",
          429,
          getRateLimitHeaders(
            daily
          )
        ),
    };
  }

  return {
    ok: true,
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
       2. ADMIN IDENTIFIER
    ======================================================== */

    const adminIdentifier =
      adminAuth.user?.id ||
      adminAuth.user?.email ||
      adminAuth.admin?.email;

    if (!adminIdentifier) {
      console.error(
        "Authorized admin request did not contain a usable identity."
      );

      return jsonError(
        "Admin identity could not be verified.",
        403
      );
    }

    /* ========================================================
       3. VALIDATE REQUEST

       Reject malformed requests before consuming the admin's
       Places allowance or making a Google API request.
    ======================================================== */

    const bodyResult =
      await readValidatedSearchBody(
        request
      );

    if (!bodyResult.ok) {
      return bodyResult.response;
    }

    const query =
      bodyResult.query;

    /* ========================================================
       4. RATE LIMIT

       Runs after authorization + cheap request validation.
    ======================================================== */

    const rateCheck =
      await checkPlacesRateLimit(
        request,
        adminIdentifier
      );

    if (!rateCheck.ok) {
      return rateCheck.response;
    }

    /* ========================================================
       5. GOOGLE PLACES API KEY
    ======================================================== */

    const googleApiKey =
      process.env
        .GOOGLE_PLACES_API_KEY ||
      process.env
        .GOOGLE_MAPS_API_KEY;

    if (!googleApiKey) {
      console.error(
        "Google Places API key is not configured."
      );

      return jsonError(
        "Google Places search is temporarily unavailable.",
        500
      );
    }

    /* ========================================================
       6. GOOGLE PLACES TEXT SEARCH

       Request only the fields actually used by Lead Finder.

       Avoid "*" because unnecessary fields can increase
       processing and potentially affect Google Places billing.
    ======================================================== */

    const fieldMask = [
      "places.id",
      "places.displayName",
      "places.formattedAddress",
      "places.addressComponents",
      "places.nationalPhoneNumber",
      "places.websiteUri",
      "places.googleMapsUri",
      "places.rating",
      "places.userRatingCount",
      "places.primaryType",
      "places.primaryTypeDisplayName",
    ].join(",");

    let googleResponse;

    try {
      googleResponse =
        await fetch(
          GOOGLE_PLACES_URL,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",

              "X-Goog-Api-Key":
                googleApiKey,

              "X-Goog-FieldMask":
                fieldMask,
            },

            body:
              JSON.stringify({
                textQuery:
                  query,

                pageSize:
                  20,

                includePureServiceAreaBusinesses:
                  true,
              }),

            cache:
              "no-store",
          }
        );
    } catch (error) {
      console.error(
        "Google Places network error:",
        error
      );

      return jsonError(
        "Could not connect to Google Places.",
        502
      );
    }

    /* ========================================================
       7. READ GOOGLE RESPONSE
    ======================================================== */

    let googleData;

    try {
      googleData =
        await googleResponse
          .json();
    } catch {
      return jsonError(
        "Google Places returned an unreadable response.",
        502
      );
    }

    /* ========================================================
       8. GOOGLE ERROR
    ======================================================== */

    if (!googleResponse.ok) {
      console.error(
        "Google Places API error:",
        googleData
      );

      /*
        Keep detailed Google error information server-side.

        Do not forward Google configuration/project details
        directly to the browser.
      */

      return jsonError(
        "Google Places search failed.",
        googleResponse.status ||
          502
      );
    }

    /* ========================================================
       9. NORMALIZE RESULTS
    ======================================================== */

    const rawPlaces =
      Array.isArray(
        googleData?.places
      )
        ? googleData.places
        : [];

    const places =
      rawPlaces
        .map(
          normalizePlace
        )
        .filter(
          (place) =>
            place.place_id &&
            place.business_name
        );

    /* ========================================================
       10. SUCCESS
    ======================================================== */

    return NextResponse.json(
      {
        ok: true,

        query,

        count:
          places.length,

        places,
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
      "Google Places Lead Search error:",
      error
    );

    return jsonError(
      "Google Places lead search failed.",
      500
    );
  }
}
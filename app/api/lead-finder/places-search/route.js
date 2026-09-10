import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/requireAdminApi";

/* ============================================================
   MATTHEW WEB — GOOGLE PLACES LEAD SEARCH API

   PRIVATE ADMIN ROUTE

   Security:
   - Requires valid Supabase authentication
   - Requires user to exist in public.admin_users
   - Google API key stays server-side

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
      Math.round(Number(value) || 0)
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
  if (!Array.isArray(addressComponents)) {
    return "";
  }

  const component =
    addressComponents.find((item) =>
      Array.isArray(item?.types)
        ? item.types.includes(type)
        : false
    );

  return (
    component?.longText ||
    component?.shortText ||
    ""
  );
}

function getCity(addressComponents) {
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

function getState(addressComponents) {
  if (!Array.isArray(addressComponents)) {
    return "";
  }

  const component =
    addressComponents.find((item) =>
      Array.isArray(item?.types)
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
      place?.primaryTypeDisplayName?.text
    );

  if (displayCategory) {
    return displayCategory;
  }

  const primaryType =
    cleanText(place?.primaryType);

  if (!primaryType) {
    return "Business";
  }

  return primaryType
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) =>
      letter.toUpperCase()
    );
}

/* ============================================================
   LEAD SCORING

   This is an internal prioritization score.

   It does NOT claim how much money the business is losing,
   how likely it is to purchase, or how successful outreach
   will be.

   Higher scores generally mean the business appears to have
   a clearer website-service opportunity and usable contact
   information.
============================================================ */

function calculateLeadScore(place) {
  let score = 20;

  const website =
    cleanText(place?.websiteUri);

  const phone =
    cleanText(
      place?.nationalPhoneNumber
    );

  const maps =
    cleanText(place?.googleMapsUri);

  const rating =
    Number(place?.rating || 0);

  const reviews =
    Number(
      place?.userRatingCount || 0
    );

  /* ==========================================================
     WEBSITE OPPORTUNITY
  ========================================================== */

  if (!website) {
    score += 40;
  } else {
    score += 8;
  }

  /* ==========================================================
     CONTACTABILITY
  ========================================================== */

  if (phone) {
    score += 15;
  }

  if (maps) {
    score += 5;
  }

  /* ==========================================================
     ACTIVE BUSINESS SIGNALS

     Ratings/reviews do not prove buying intent.
     They only provide a small signal that the listing
     appears to have customer activity.
  ========================================================== */

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

function buildProblemSummary(place) {
  const website =
    cleanText(place?.websiteUri);

  const phone =
    cleanText(
      place?.nationalPhoneNumber
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

  if (issues.length === 0) {
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
    cleanText(place?.websiteUri);

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
      place?.displayName?.text
    ) || "Unknown Business";

  const address =
    cleanText(
      place?.formattedAddress
    );

  const phone =
    cleanText(
      place?.nationalPhoneNumber
    );

  const websiteUrl =
    cleanText(
      place?.websiteUri
    );

  const googleMapsUrl =
    cleanText(
      place?.googleMapsUri
    );

  const city =
    getCity(
      place?.addressComponents
    );

  const state =
    getState(
      place?.addressComponents
    );

  const rating =
    typeof place?.rating === "number"
      ? place.rating
      : null;

  const reviewCount =
    typeof place?.userRatingCount ===
    "number"
      ? place.userRatingCount
      : null;

  return {
    place_id:
      cleanText(place?.id),

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
      buildProblemSummary(place),

    offer_idea:
      buildOfferIdea(place),

    lead_score:
      calculateLeadScore(place),
  };
}

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
       2. GOOGLE PLACES API KEY
    ======================================================== */

    const googleApiKey =
      process.env.GOOGLE_PLACES_API_KEY ||
      process.env.GOOGLE_MAPS_API_KEY;

    if (!googleApiKey) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Google Places API key is not configured on the server.",
        },
        {
          status: 500,
        }
      );
    }

    /* ========================================================
       3. REQUEST BODY
    ======================================================== */

    let body;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Invalid request body.",
        },
        {
          status: 400,
        }
      );
    }

    const query =
      cleanText(body?.query);

    if (!query) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Search query is required.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      query.length >
      MAX_QUERY_LENGTH
    ) {
      return NextResponse.json(
        {
          ok: false,
          error:
            `Search query must be ${MAX_QUERY_LENGTH} characters or fewer.`,
        },
        {
          status: 400,
        }
      );
    }

    /* ========================================================
       4. GOOGLE PLACES TEXT SEARCH

       Request only the fields actually used by Lead Finder.

       Avoid using "*" because unnecessary fields can increase
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

            body: JSON.stringify({
              textQuery: query,

              pageSize: 20,

              includePureServiceAreaBusinesses:
                true,
            }),

            cache: "no-store",
          }
        );
    } catch (error) {
      console.error(
        "Google Places network error:",
        error
      );

      return NextResponse.json(
        {
          ok: false,
          error:
            "Could not connect to Google Places.",
        },
        {
          status: 502,
        }
      );
    }

    /* ========================================================
       5. READ GOOGLE RESPONSE
    ======================================================== */

    let googleData;

    try {
      googleData =
        await googleResponse.json();
    } catch {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Google Places returned an unreadable response.",
        },
        {
          status: 502,
        }
      );
    }

    /* ========================================================
       6. GOOGLE ERROR
    ======================================================== */

    if (!googleResponse.ok) {
      console.error(
        "Google Places API error:",
        googleData
      );

      const googleMessage =
        googleData?.error?.message;

      return NextResponse.json(
        {
          ok: false,

          error:
            googleMessage ||
            "Google Places search failed.",
        },
        {
          status:
            googleResponse.status ||
            500,
        }
      );
    }

    /* ========================================================
       7. NORMALIZE RESULTS
    ======================================================== */

    const rawPlaces =
      Array.isArray(
        googleData?.places
      )
        ? googleData.places
        : [];

    const places =
      rawPlaces
        .map(normalizePlace)
        .filter(
          (place) =>
            place.place_id &&
            place.business_name
        );

    /* ========================================================
       8. SUCCESS
    ======================================================== */

    return NextResponse.json({
      ok: true,

      query,

      count:
        places.length,

      places,
    });
  } catch (error) {
    console.error(
      "Google Places Lead Search error:",
      error
    );

    return NextResponse.json(
      {
        ok: false,
        error:
          "Google Places lead search failed.",
      },
      {
        status: 500,
      }
    );
  }
}
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function parseAddressParts(formattedAddress) {
  if (!formattedAddress) {
    return { city: "", state: "" };
  }

  const parts = formattedAddress.split(",").map((part) => part.trim());

  let city = "";
  let state = "";

  if (parts.length >= 3) {
    city = parts[parts.length - 3] || "";

    const stateZip = parts[parts.length - 2] || "";
    state = stateZip.split(" ")[0] || "";
  }

  return { city, state };
}

function guessProblemSummary(place) {
  const problems = [];

  if (!place.websiteUri) {
    problems.push("No website found");
  }

  if (!place.nationalPhoneNumber && !place.internationalPhoneNumber) {
    problems.push("No clear phone number found");
  }

  if ((place.userRatingCount || 0) >= 25 && !place.websiteUri) {
    problems.push("Has reviews but no website");
  }

  if (problems.length === 0) {
    problems.push(
      "Needs manual review for website quality, SEO, forms, booking, and follow-up system"
    );
  }

  return problems.join(", ") + ".";
}

function calculateLeadScore(place) {
  let score = 0;

  const rating = Number(place.rating || 0);
  const reviewCount = Number(place.userRatingCount || 0);

  if (!place.websiteUri) score += 35;
  if (rating >= 4) score += 15;
  if (reviewCount >= 25) score += 15;
  if (reviewCount >= 75) score += 10;
  if (place.googleMapsUri) score += 5;
  if (place.nationalPhoneNumber || place.internationalPhoneNumber) score += 10;

  return Math.min(score, 100);
}

function buildOfferIdea(place, score) {
  if (!place.websiteUri) {
    return "Offer a $1,500–$3,500 starter website with lead form, mobile layout, SEO setup, Google indexing, and hosting support.";
  }

  if (score >= 75) {
    return "High-value lead. Offer a website audit, rebuild, SEO cleanup, quote form, booking setup, CRM dashboard, or automated follow-up system.";
  }

  return "Offer a free website audit first, then pitch website improvements, lead forms, SEO cleanup, booking, or custom software based on what is missing.";
}

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

    const apiKey = process.env.GOOGLE_PLACES_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "Missing GOOGLE_PLACES_API_KEY." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const query = String(body.query || "").trim();

    if (!query) {
      return NextResponse.json(
        { ok: false, error: "Search query is required." },
        { status: 400 }
      );
    }

    const googleResponse = await fetch(
      "https://places.googleapis.com/v1/places:searchText",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "places.id,places.displayName,places.formattedAddress,places.nationalPhoneNumber,places.internationalPhoneNumber,places.websiteUri,places.googleMapsUri,places.rating,places.userRatingCount,places.primaryType",
        },
        body: JSON.stringify({
          textQuery: query,
          pageSize: 20,
        }),
      }
    );

    const googleData = await googleResponse.json();

    if (!googleResponse.ok) {
      return NextResponse.json(
        {
          ok: false,
          error:
            googleData?.error?.message ||
            "Google Places search failed. Check your API key and billing.",
        },
        { status: googleResponse.status }
      );
    }

    const places = (googleData.places || []).map((place) => {
      const { city, state } = parseAddressParts(place.formattedAddress);
      const score = calculateLeadScore(place);

      return {
        place_id: place.id || "",
        business_name: place.displayName?.text || "Unknown Business",
        category: place.primaryType || "",
        phone:
          place.nationalPhoneNumber || place.internationalPhoneNumber || "",
        website_url: place.websiteUri || "",
        google_maps_url: place.googleMapsUri || "",
        address: place.formattedAddress || "",
        city,
        state,
        rating: place.rating || null,
        review_count: place.userRatingCount || null,
        problem_summary: guessProblemSummary(place),
        lead_score: score,
        offer_idea: buildOfferIdea(place, score),
        source: `Google Places search: ${query}`,
      };
    });

    return NextResponse.json({
      ok: true,
      query,
      places,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error?.message || "Google Places search failed.",
      },
      { status: 500 }
    );
  }
}
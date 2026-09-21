// app/support/route.js

import { NextResponse } from "next/server";

export function GET(request) {
  const stripeSupportUrl =
    process.env.STRIPE_SUPPORT_URL;

  if (!stripeSupportUrl) {
    return NextResponse.redirect(
      new URL(
        "/contact-us?topic=support",
        request.url
      )
    );
  }

  return NextResponse.redirect(
    stripeSupportUrl
  );
}
/* ============================================================
   MATTHEW WEB — ROBOTS.TXT

   Generates:
   https://matthew-web.com/robots.txt

   Public pages are crawlable.

   Private admin/API areas are blocked.

   /search is intentionally NOT blocked here.
   Its own metadata uses:
   noindex, follow
============================================================ */

const BASE_URL =
  "https://matthew-web.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",

        allow: "/",

        disallow: [
          "/admin/",
          "/api/",
        ],
      },
    ],

    sitemap:
      `${BASE_URL}/sitemap.xml`,
  };
}
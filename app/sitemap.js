/* ============================================================
   MATTHEW WEB — PUBLIC XML SITEMAP

   Generates:
   https://matthew-web.com/sitemap.xml

   RULES:
   - Canonical public URLs only
   - No /admin
   - No /api
   - No /search
   - No Stripe checkout URLs
   - No query-string URLs
   - No fake lastModified dates
============================================================ */

const BASE_URL =
  "https://matthew-web.com";

/* ============================================================
   MAIN PUBLIC PAGES
============================================================ */

const mainPages = [
  "/",
  "/about-us",
  "/services",
  "/examples",
  "/blog",
  "/testimonials",
  "/pricing",
  "/contact-us",
];

/* ============================================================
   SERVICE PAGES
============================================================ */

const servicePages = [
  "/website-design",
  "/custom-software",
  "/seo-and-indexing",
  "/small-business-websites",
];

/* ============================================================
   PROJECT / COMPANY PAGES
============================================================ */

const projectPages = [
  "/free-game-hub-project",
  "/code-of-ethics",
];

/* ============================================================
   LEGAL PAGES
============================================================ */

const legalPages = [
  "/privacy-policy",
  "/terms",
];

/* ============================================================
   BLOG ARTICLES — 20 TOTAL
============================================================ */

const blogArticles = [
  "/why-custom-coded-websites-beat-diy-website-builders",

  "/how-much-should-a-small-business-website-cost-in-2026",

  "/what-every-contractor-website-needs-to-generate-leads",

  "/website-design-vs-custom-software-what-does-your-business-need",

  "/how-crm-dashboards-help-small-businesses-stop-losing-leads",

  "/why-google-indexing-matters-after-launching-a-new-website",

  "/raw-code-vs-wordpress-vs-wix-vs-godaddy",

  "/how-matthew-web-builds-seo-ready-small-business-websites",

  "/why-fast-website-load-speed-helps-leads-seo-and-trust",

  "/how-booking-forms-quote-forms-and-automation-help-local-businesses",

  "/7-reasons-why-small-business-websites-are-vital",

  "/7-signs-you-need-a-new-website-for-your-business",

  "/8-marketing-mistakes-small-businesses-make",

  "/8-things-every-small-business-website-needs",

  "/how-often-should-you-redesign-your-website",

  "/how-to-respond-to-online-reviews-good-and-bad",

  "/website-traffic-stats-explained",

  "/why-a-facebook-page-is-not-a-substitute-for-a-website",

  "/why-diy-site-builders-are-bad-for-small-businesses",

  "/why-reputation-management-and-online-reviews-are-important-in-business",
];

/* ============================================================
   COMPLETE PUBLIC ROUTE INVENTORY
============================================================ */

const publicRoutes = [
  ...mainPages,
  ...servicePages,
  ...projectPages,
  ...legalPages,
  ...blogArticles,
];

/* ============================================================
   GENERATE SITEMAP
============================================================ */

export default function sitemap() {
  return publicRoutes.map(
    (route) => ({
      url:
        route === "/"
          ? BASE_URL
          : `${BASE_URL}${route}`,
    })
  );
}
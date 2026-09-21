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

const LAST_MODIFIED = {
  "/": "2026-09-10",
  "/about-us": "2026-09-10",
  "/services": "2026-09-20",
  "/examples": "2026-09-20",
  "/blog": "2026-09-10",
  "/testimonials": "2026-09-20",
  "/pricing": "2026-09-20",
  "/contact-us": "2026-09-10",
  "/website-design": "2026-09-20",
  "/custom-software": "2026-09-20",
  "/seo-and-indexing": "2026-09-20",
  "/small-business-websites": "2026-09-20",
  "/code-of-ethics": "2026-09-20",
  "/privacy-policy": "2026-09-20",
  "/terms": "2026-09-20",
  "/why-custom-coded-websites-beat-diy-website-builders": "2026-09-20",
  "/how-much-should-a-small-business-website-cost-in-2026": "2026-09-20",
  "/what-every-contractor-website-needs-to-generate-leads": "2026-09-20",
  "/website-design-vs-custom-software-what-does-your-business-need": "2026-09-20",
  "/how-crm-dashboards-help-small-businesses-stop-losing-leads": "2026-09-20",
  "/why-google-indexing-matters-after-launching-a-new-website": "2026-09-20",
  "/raw-code-vs-wordpress-vs-wix-vs-godaddy": "2026-09-20",
  "/how-matthew-web-builds-seo-ready-small-business-websites": "2026-09-20",
  "/why-fast-website-load-speed-helps-leads-seo-and-trust": "2026-09-20",
  "/how-booking-forms-quote-forms-and-automation-help-local-businesses": "2026-09-20",
  "/7-reasons-why-small-business-websites-are-vital": "2026-09-20",
  "/7-signs-you-need-a-new-website-for-your-business": "2026-09-20",
  "/8-marketing-mistakes-small-businesses-make": "2026-09-20",
  "/8-things-every-small-business-website-needs": "2026-09-20",
  "/how-often-should-you-redesign-your-website": "2026-09-20",
  "/how-to-respond-to-online-reviews-good-and-bad": "2026-09-20",
  "/website-traffic-stats-explained": "2026-09-20",
  "/why-a-facebook-page-is-not-a-substitute-for-a-website": "2026-09-20",
  "/why-diy-site-builders-are-bad-for-small-businesses": "2026-09-20",
  "/why-reputation-management-and-online-reviews-are-important-in-business": "2026-09-20",
};
/* ============================================================
   GENERATE SITEMAP
============================================================ */

export default function sitemap() {
  return publicRoutes.map((route) => {
    const item = {
      url:
        route === "/"
          ? BASE_URL
          : `${BASE_URL}${route}`,
    };

    const lastModified =
      LAST_MODIFIED[route];

    if (lastModified) {
      item.lastModified =
        lastModified;
    }

    return item;
  });
}

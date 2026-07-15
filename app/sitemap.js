const siteUrl = "https://matthew-web.com";

export default function sitemap() {
  const routes = [
    "",
    "/about-us",
    "/services",
    "/examples",
    "/blog",
    "/testimonials",
    "/pricing",
    "/contact-us",
    "/why-a-facebook-page-is-not-a-substitute-for-a-website",
    "/7-signs-you-need-a-new-website-for-your-business",
    "/why-diy-site-builders-are-bad-for-small-businesses",
    "/8-things-every-small-business-website-needs",
    "/how-to-respond-to-online-reviews-good-and-bad",
    "/why-reputation-management-and-online-reviews-are-important-in-business",
    "/7-reasons-why-small-business-websites-are-vital",
    "/website-traffic-stats-explained",
    "/8-marketing-mistakes-small-businesses-make",
    "/how-often-should-you-redesign-your-website",
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
    "/code-of-ethics",
    "/privacy-policy",
    "/website-design",
    "/custom-software",
  ];

  return routes.map((route) => {
    let changeFrequency = "monthly";
    let priority = 0.8;

    if (route === "") {
      changeFrequency = "weekly";
      priority = 1;
    }

    if (route === "/blog") {
      changeFrequency = "weekly";
      priority = 0.9;
    }

    if (route === "/code-of-ethics" || route === "/privacy-policy") {
      changeFrequency = "yearly";
      priority = 0.6;
    }

    return {
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });
}
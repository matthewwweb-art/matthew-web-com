const siteUrl = "https://matthew-web.com";

export default function sitemap() {
  const routes = [
    "",
    "/about-us",
    "/services",
    "/website-design",
    "/custom-software",
    "/seo-and-indexing",
    "/small-business-websites",
    "/free-game-hub-project",
    "/examples",
    "/blog",
    "/testimonials",
    "/pricing",
    "/contact-us",
    "/privacy-policy",
    "/terms",
    "/code-of-ethics",

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
  ];

  return routes.map((route) => {
    let changeFrequency = "monthly";
    let priority = 0.8;

    if (route === "") {
      changeFrequency = "weekly";
      priority = 1;
    }

    if (
      route === "/services" ||
      route === "/website-design" ||
      route === "/custom-software" ||
      route === "/seo-and-indexing" ||
      route === "/small-business-websites"
    ) {
      changeFrequency = "monthly";
      priority = 0.9;
    }

    if (route === "/blog") {
      changeFrequency = "weekly";
      priority = 0.9;
    }

    if (
      route === "/privacy-policy" ||
      route === "/terms" ||
      route === "/code-of-ethics" ||
      route === "/free-game-hub-project"
    ) {
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
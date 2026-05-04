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
    "/privacy-policy",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
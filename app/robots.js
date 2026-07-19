export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
    ],
    sitemap: "https://matthew-web.com/sitemap.xml",
    host: "https://matthew-web.com",
  };
}
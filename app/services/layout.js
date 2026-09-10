import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata = {
  title: "Website & Software Services",

  description:
    "Explore Matthew Web website design, custom software, CRM dashboards, lead forms, integrations, SEO-ready development, indexing support, and small-business technology services.",

  alternates: {
    canonical: "https://matthew-web.com/services",
  },

  openGraph: {
    title: "Website & Software Services | Matthew Web",
    description:
      "Website design, custom software, CRM dashboards, forms, integrations, SEO-ready development, and business technology from Matthew Web.",
    url: "https://matthew-web.com/services",
    siteName: "Matthew Web",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/apple-touch-icon.png",
        alt: "Matthew Web",
      },
    ],
  },
};

export default function ServicesLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://matthew-web.com",
          },
          {
            name: "Services",
            url: "https://matthew-web.com/services",
          },
        ]}
      />

      {children}
    </>
  );
}
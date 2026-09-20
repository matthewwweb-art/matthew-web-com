import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata = {
  title: "Website Design, Custom Software & SEO Services",

  description:
    "Website design, custom software, CRM dashboards, forms, integrations, technical SEO and indexing support for small businesses in Maine and across the U.S.",

  alternates: {
    canonical: "https://matthew-web.com/services",
  },

  openGraph: {
    title:
      "Website Design, Custom Software & SEO Services | Matthew Web",

    description:
      "Explore Matthew Web website design, custom software, CRM dashboards, forms, integrations, technical SEO, indexing support, and small-business technology services.",

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
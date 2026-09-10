import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function SeoIndexingLayout({ children }) {
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
          {
            name: "SEO & Indexing",
            url: "https://matthew-web.com/seo-and-indexing",
          },
        ]}
      />

      {children}
    </>
  );
}
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function SmallBusinessWebsitesLayout({ children }) {
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
            name: "Small Business Websites",
            url: "https://matthew-web.com/small-business-websites",
          },
        ]}
      />

      {children}
    </>
  );
}
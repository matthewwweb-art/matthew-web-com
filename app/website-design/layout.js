import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function WebsiteDesignLayout({ children }) {
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
            name: "Website Design",
            url: "https://matthew-web.com/website-design",
          },
        ]}
      />

      {children}
    </>
  );
}
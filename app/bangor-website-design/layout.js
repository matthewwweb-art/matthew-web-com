import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function BangorWebsiteDesignLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://matthew-web.com" },
          { name: "Services", url: "https://matthew-web.com/services" },
          {
            name: "Bangor Website Design",
            url: "https://matthew-web.com/bangor-website-design",
          },
        ]}
      />
      {children}
    </>
  );
}

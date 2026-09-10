import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function CustomSoftwareLayout({ children }) {
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
            name: "Custom Software",
            url: "https://matthew-web.com/custom-software",
          },
        ]}
      />

      {children}
    </>
  );
}
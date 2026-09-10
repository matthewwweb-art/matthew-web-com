import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function PricingLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://matthew-web.com",
          },
          {
            name: "Pricing",
            url: "https://matthew-web.com/pricing",
          },
        ]}
      />

      {children}
    </>
  );
}
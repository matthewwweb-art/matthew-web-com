import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function TermsLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://matthew-web.com",
          },
          {
            name: "Terms of Use",
            url: "https://matthew-web.com/terms",
          },
        ]}
      />

      {children}
    </>
  );
}
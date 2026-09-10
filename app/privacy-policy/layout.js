import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function PrivacyPolicyLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://matthew-web.com",
          },
          {
            name: "Privacy Policy",
            url: "https://matthew-web.com/privacy-policy",
          },
        ]}
      />

      {children}
    </>
  );
}
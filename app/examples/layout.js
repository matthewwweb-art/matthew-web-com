import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function ExamplesLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://matthew-web.com",
          },
          {
            name: "Examples",
            url: "https://matthew-web.com/examples",
          },
        ]}
      />

      {children}
    </>
  );
}
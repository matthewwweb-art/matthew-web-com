import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function CodeOfEthicsLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://matthew-web.com",
          },
          {
            name: "Code of Ethics",
            url: "https://matthew-web.com/code-of-ethics",
          },
        ]}
      />

      {children}
    </>
  );
}
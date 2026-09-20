import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import MonetagInPagePush from "@/components/MonetagInPagePush";

export default function BlogLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://matthew-web.com",
          },
          {
            name: "Blog",
            url: "https://matthew-web.com/blog",
          },
        ]}
      />

      <MonetagInPagePush />

      {children}
    </>
  );
}
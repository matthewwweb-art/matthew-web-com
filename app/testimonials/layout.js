import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function TestimonialsLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://matthew-web.com",
          },
          {
            name: "Testimonials",
            url: "https://matthew-web.com/testimonials",
          },
        ]}
      />

      {children}
    </>
  );
}
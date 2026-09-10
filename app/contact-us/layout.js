import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata = {
  title: "Contact Matthew Web",

  description:
    "Contact Matthew Web about website design, custom software, small-business technology, project questions, development work, or ongoing support.",

  alternates: {
    canonical: "https://matthew-web.com/contact-us",
  },

  openGraph: {
    title: "Contact Matthew Web",
    description:
      "Contact Matthew Web about websites, custom software, business technology, development projects, or support.",
    url: "https://matthew-web.com/contact-us",
    siteName: "Matthew Web",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/apple-touch-icon.png",
        alt: "Matthew Web",
      },
    ],
  },
};

export default function ContactUsLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://matthew-web.com",
          },
          {
            name: "Contact Us",
            url: "https://matthew-web.com/contact-us",
          },
        ]}
      />

      {children}
    </>
  );
}
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata = {
  title: "About Matthew Web",

  description:
    "Learn about Matthew Web, a founder-led Maine technology business building websites, custom software, games, educational technology, and computer hardware research projects.",

  alternates: {
    canonical: "https://matthew-web.com/about-us",
  },

  openGraph: {
    title: "About Matthew Web",
    description:
      "Learn about Matthew Web, its founder, current technology work, and long-term development roadmap.",
    url: "https://matthew-web.com/about-us",
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

export default function AboutUsLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://matthew-web.com",
          },
          {
            name: "About Us",
            url: "https://matthew-web.com/about-us",
          },
        ]}
      />

      {children}
    </>
  );
}
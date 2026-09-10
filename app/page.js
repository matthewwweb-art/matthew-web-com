import HomePageClient from "./HomePageClient";

export const metadata = {
  title: {
    absolute:
      "Affordable Website Design & Custom Software Coding | Matthew Web",
  },

  description:
    "Matthew Web builds affordable small-business websites, SEO-ready pages, custom software, CRM dashboards, lead forms, integrations, and business automation for clients in Maine and across the United States.",

  alternates: {
    canonical:
      "https://matthew-web.com",
  },

  openGraph: {
    title:
      "Affordable Website Design & Custom Software Coding | Matthew Web",

    description:
      "Matthew Web builds websites, custom software, business tools, games, educational technology, and conducts CPU and FPGA research.",

    url:
      "https://matthew-web.com",

    siteName:
      "Matthew Web",

    type:
      "website",
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Affordable Website Design & Custom Software Coding | Matthew Web",

    description:
      "Websites, custom software, business technology, games, education, and computing R&D from Matthew Web.",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
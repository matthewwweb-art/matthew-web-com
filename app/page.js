import HomePageClient from "./HomePageClient";
import "./home-page.css";

export const metadata = {
  title: {
    absolute:
      "Maine Small Business Website Design | Matthew Web",
  },

  description:
    "Affordable website design for Maine small businesses. Mobile-friendly, SEO-ready websites with clear calls to action, lead forms, and easy quote requests.",

  alternates: {
    canonical:
      "https://matthew-web.com",
  },

  openGraph: {
    title:
      "Maine Small Business Website Design | Matthew Web",

    description:
      "Affordable website design for Maine small businesses, with mobile-friendly layouts, clear calls to action, lead forms, and easy quote requests.",

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
      "Maine Small Business Website Design | Matthew Web",

    description:
      "Affordable, mobile-friendly website design for Maine small businesses, built to generate calls, messages, and quote requests.",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
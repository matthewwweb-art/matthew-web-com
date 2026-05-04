export const metadata = {
  title: "Search matthew-web",
  description:
    "Search matthew-web pages, services, blog articles, pricing, examples, and contact information.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://matthew-web.com/search",
  },
};

export default function SearchLayout({ children }) {
  return children;
}
/* ============================================================
   MATTHEW WEB — SEARCH PAGE METADATA

   The search page is useful for visitors,
   but should not appear as a Google/Bing search result.

   We allow crawlers to reach it so they can read:
   noindex, follow
============================================================ */

export const metadata = {
  title: "Search",

  description:
    "Search Matthew Web pages, services, projects, and educational articles.",

  robots: {
    index: false,
    follow: true,

    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function SearchLayout({
  children,
}) {
  return children;
}
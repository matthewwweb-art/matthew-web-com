import Link from "next/link";

import {
  ArrowRight,
  BookOpen,
  Bot,
  CheckCircle2,
  ChevronRight,
  CircleCheckBig,
  Code2,
  FileSearch,
  FileText,
  Globe2,
  Link2,
  Map,
  Search,
  SearchCheck,
  ShieldAlert,
  Sparkles,
  Target,
  TimerReset,
  Waypoints,
  Wrench,
  Zap,
} from "lucide-react";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/* ============================================================
   METADATA
============================================================ */

export const metadata = {
  title:
    "Why Google Indexing Matters After Launching a New Website | Matthew Web",

  description:
    "Learn the difference between launching, crawling, indexing, and ranking a website. See how sitemaps, Google Search Console, internal links, canonicals, robots rules, and useful content support website discovery.",

  alternates: {
    canonical:
      "https://matthew-web.com/why-google-indexing-matters-after-launching-a-new-website",
  },

  openGraph: {
    title:
      "Why Google Indexing Matters After Launching a New Website | Matthew Web",

    description:
      "A website can be online without appearing in Google. Learn how crawling, indexing, sitemaps, Search Console, internal links, and technical structure fit together after launch.",

    url:
      "https://matthew-web.com/why-google-indexing-matters-after-launching-a-new-website",

    siteName:
      "Matthew Web",

    type:
      "article",
  },
};

/* ============================================================
   DEFINITIONS
============================================================ */

const definitions = [
  {
    icon: Globe2,
    title: "Live",
    text:
      "The website is deployed and can be visited directly through its public URL.",
  },
  {
    icon: Bot,
    title: "Crawled",
    text:
      "A search-engine crawler has discovered and requested a page so it can inspect the content and technical information.",
  },
  {
    icon: FileSearch,
    title: "Indexed",
    text:
      "The search engine has processed the page and may store it as part of the information it can consider for search results.",
  },
  {
    icon: SearchCheck,
    title: "Ranking",
    text:
      "An indexed page is selected to appear for a particular search query at a particular position. Indexing does not guarantee ranking.",
  },
];

/* ============================================================
   INDEXING FOUNDATIONS
============================================================ */

const foundations = [
  {
    icon: Map,
    title: "XML Sitemap",
    text:
      "A sitemap gives search engines a structured list of important public URLs that the site wants crawlers to discover.",
  },
  {
    icon: SearchCheck,
    title: "Google Search Console",
    text:
      "Search Console can help site owners inspect URLs, submit a sitemap, view indexing information, and identify certain search or crawl issues.",
  },
  {
    icon: Link2,
    title: "Internal Links",
    text:
      "Important pages should be connected through normal website navigation and contextual links so users and crawlers can discover how the site is organized.",
  },
  {
    icon: Code2,
    title: "Canonical URLs",
    text:
      "Canonical information can help identify the preferred URL when substantially similar or duplicate URL versions exist.",
  },
  {
    icon: ShieldAlert,
    title: "Robots & Noindex Rules",
    text:
      "A page can accidentally become difficult or impossible to index if crawler rules, metadata, authentication, or other restrictions block discovery or indexing.",
  },
  {
    icon: FileText,
    title: "Useful Public Content",
    text:
      "Technical indexing work cannot replace useful content. Pages should provide clear information that deserves to exist and is relevant to the people searching for it.",
  },
];

/* ============================================================
   COMMON ISSUES
============================================================ */

const indexingIssues = [
  {
    title: "The Page Is Not Linked Anywhere",
    text:
      "A page that exists only through a direct URL may be harder for users and crawlers to discover than a page connected to the normal site structure.",
  },
  {
    title: "The Sitemap Is Missing or Outdated",
    text:
      "Important new routes may not appear in the site's submitted sitemap if it is manually maintained and not updated.",
  },
  {
    title: "A Noindex Directive Is Still Present",
    text:
      "A development or temporary noindex setting can accidentally remain after launch and tell search engines not to index the page.",
  },
  {
    title: "Robots Rules Block Crawling",
    text:
      "A robots configuration can prevent crawlers from requesting certain routes when those rules are too broad or incorrectly configured.",
  },
  {
    title: "Duplicate URLs Compete",
    text:
      "Multiple versions of similar pages, inconsistent canonical URLs, or unnecessary parameter versions can make the preferred page less clear.",
  },
  {
    title: "The Content Is Too Weak or Repetitive",
    text:
      "Submitting a page does not mean a search engine must index or prominently surface it. Thin, duplicate, low-value, or unhelpful content can still perform poorly.",
  },
];

/* ============================================================
   POST-LAUNCH PROCESS
============================================================ */

const process = [
  {
    number: "01",
    title: "Verify the Public Site",
    text:
      "Confirm the correct domain loads over HTTPS and important public pages return normally.",
  },
  {
    number: "02",
    title: "Check Crawl Controls",
    text:
      "Review robots rules, noindex directives, canonicals, authentication, and other settings that can affect crawler access.",
  },
  {
    number: "03",
    title: "Update the Sitemap",
    text:
      "Make sure the sitemap contains the legitimate public pages that should be discoverable.",
  },
  {
    number: "04",
    title: "Submit Through Search Console",
    text:
      "Submit the sitemap and inspect important URLs when useful. Submission is a request for discovery or reconsideration, not a ranking guarantee.",
  },
  {
    number: "05",
    title: "Strengthen Internal Links",
    text:
      "Connect important pages from navigation, related content, service pages, blog posts, and other logical locations.",
  },
  {
    number: "06",
    title: "Monitor and Improve",
    text:
      "Watch indexing and search performance over time, fix legitimate problems, and improve the usefulness of the content rather than repeatedly submitting unchanged pages.",
  },
];

/* ============================================================
   FAQ
============================================================ */

const faqs = [
  {
    q:
      "How long does it take Google to index a new website?",
    a:
      "There is no guaranteed indexing time. Discovery and indexing can vary by website, page, crawl activity, technical configuration, content, links, and search-engine decisions.",
  },
  {
    q:
      "Does submitting a sitemap guarantee indexing?",
    a:
      "No. A sitemap helps communicate important URLs, but search engines still decide whether and when individual pages are crawled and indexed.",
  },
  {
    q:
      "Does requesting indexing guarantee a Google ranking?",
    a:
      "No. Indexing only makes a page eligible to be considered for search results. Ranking depends on the query, relevance, competition, quality, authority, location, search systems, and many other factors.",
  },
  {
    q:
      "Can a website be live but not indexed?",
    a:
      "Yes. A website can be publicly accessible through its URL even when a search engine has not indexed some or all of its pages.",
  },
  {
    q:
      "Should every page be indexed?",
    a:
      "No. Private admin areas, account pages, APIs, duplicate pages, testing routes, and other content may intentionally be excluded from indexing.",
  },
  {
    q:
      "Can Matthew Web help with indexing?",
    a:
      "Matthew Web currently provides technical indexing support including sitemap work, metadata, crawl structure, Google Search Console support, Bing Webmaster Tools support, internal linking, and related website configuration.",
  },
];

/* ============================================================
   RELATED ARTICLES
============================================================ */

const relatedArticles = [
  {
    title:
      "How Matthew Web Builds SEO-Ready Small Business Websites",
    href:
      "/how-matthew-web-builds-seo-ready-small-business-websites",
    text:
      "See how metadata, page structure, sitemaps, internal links, mobile design, and indexing preparation fit together.",
  },
  {
    title:
      "Why Fast Website Load Speed Helps Leads, SEO, and Trust",
    href:
      "/why-fast-website-load-speed-helps-leads-seo-and-trust",
    text:
      "Learn how website performance affects usability and the broader technical quality of a site.",
  },
  {
    title:
      "Why Custom-Coded Websites Beat DIY Website Builders",
    href:
      "/why-custom-coded-websites-beat-diy-website-builders",
    text:
      "Learn why greater technical control can become useful as a website grows.",
  },
];

/* ============================================================
   STRUCTURED DATA
============================================================ */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Why Google Indexing Matters After Launching a New Website",
  description:
    "A practical explanation of website crawling, indexing, ranking, sitemaps, Search Console, internal links, and technical post-launch indexing work.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://matthew-web.com/why-google-indexing-matters-after-launching-a-new-website",
  },
  author: {
    "@type": "Person",
    name: "Adam Matthew Charest",
  },
  publisher: {
    "@type": "Organization",
    name: "Matthew Web",
    url: "https://matthew-web.com",
  },
  dateModified: "2026-09-09",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://matthew-web.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://matthew-web.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name:
        "Why Google Indexing Matters After Launching a New Website",
      item:
        "https://matthew-web.com/why-google-indexing-matters-after-launching-a-new-website",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity:
    faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
};

/* ============================================================
   PAGE
============================================================ */

export default function GoogleIndexingArticlePage() {
  return (
    <main className="mwidx-page">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              articleSchema
            ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              breadcrumbSchema
            ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              faqSchema
            ),
        }}
      />

      <style>{`
        :root {
          --mwidx-black: #020304;
          --mwidx-muted: #aebbc5;
          --mwidx-blue: #08b9f4;
          --mwidx-blue-light: #38d7ff;
          --mwidx-orange: #ff7900;
          --mwidx-orange-light: #ffab31;
          --mwidx-green: #35e07e;
          --mwidx-border: rgba(255,255,255,.09);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--mwidx-black);
        }

        .mwidx-page {
          min-height: 100vh;
          overflow: hidden;
          color: #fff;
          background: var(--mwidx-black);
        }

        .mwidx-blue {
          color: var(--mwidx-blue-light);
        }

        .mwidx-orange {
          color: var(--mwidx-orange);
        }

        /* =====================================================
           BREADCRUMBS
        ===================================================== */

        .mwidx-breadcrumb-wrap {
          border-bottom: 1px solid rgba(255,255,255,.06);
          background: #04080b;
        }

        .mwidx-breadcrumbs {
          max-width: 1380px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 7px;
          padding: 14px clamp(20px,5vw,80px);
          color: #71838d;
          font-size: 10px;
          font-weight: 800;
        }

        .mwidx-breadcrumbs a {
          color: #8799a3;
          text-decoration: none;
        }

        .mwidx-breadcrumbs a:hover {
          color: var(--mwidx-blue-light);
        }

        .mwidx-breadcrumbs svg {
          width: 12px;
          height: 12px;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwidx-hero {
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(8,185,244,.16);
          background:
            radial-gradient(
              ellipse at 16% 42%,
              rgba(8,185,244,.16),
              transparent 37%
            ),
            radial-gradient(
              ellipse at 84% 48%,
              rgba(255,121,0,.09),
              transparent 33%
            ),
            linear-gradient(
              180deg,
              #020304,
              #03080c,
              #020304
            );
        }

        .mwidx-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: .26;
          pointer-events: none;
          background-image:
            linear-gradient(
              rgba(8,185,244,.055) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(8,185,244,.055) 1px,
              transparent 1px
            );
          background-size: 76px 76px;
          mask-image:
            radial-gradient(
              ellipse at center,
              black,
              transparent 80%
            );
        }

        .mwidx-hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1380px;
          margin: 0 auto;
          display: grid;
          grid-template-columns:
            minmax(0,1.05fr)
            minmax(390px,.95fr);
          align-items: center;
          gap: clamp(45px,6vw,90px);
          padding:
            100px
            clamp(20px,5vw,80px)
            105px;
        }

        .mwidx-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          margin-bottom: 19px;
          padding: 8px 12px;
          border: 1px solid rgba(8,185,244,.27);
          border-radius: 999px;
          color: #d9f8ff;
          background: rgba(8,185,244,.055);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .13em;
          text-transform: uppercase;
        }

        .mwidx-label svg {
          width: 16px;
          height: 16px;
        }

        .mwidx-hero h1 {
          max-width: 950px;
          margin: 0;
          font-size: clamp(48px,5.6vw,84px);
          line-height: .99;
          letter-spacing: -.06em;
        }

        .mwidx-description {
          max-width: 780px;
          margin: 25px 0 0;
          color: #b8c6cf;
          font-size: clamp(16px,1.4vw,20px);
          line-height: 1.75;
        }

        .mwidx-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 18px;
          margin-top: 25px;
          color: #71838d;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .05em;
          text-transform: uppercase;
        }

        /* =====================================================
           HERO SEARCH VISUAL
        ===================================================== */

        .mwidx-stage {
          min-height: 470px;
          display: grid;
          place-items: center;
        }

        .mwidx-console {
          width: min(100%,510px);
          padding: 25px;
          border: 1px solid rgba(8,185,244,.28);
          border-radius: 20px;
          background:
            radial-gradient(
              circle at 20% 20%,
              rgba(8,185,244,.11),
              transparent 35%
            ),
            linear-gradient(
              145deg,
              #0b161d,
              #04080b
            );
          box-shadow: 0 30px 70px rgba(0,0,0,.45);
        }

        .mwidx-console-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .mwidx-console-top strong {
          color: #81929d;
          font-size: 9px;
          letter-spacing: .12em;
        }

        .mwidx-console-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #8da0aa;
          font-size: 8px;
          font-weight: 900;
        }

        .mwidx-console-status::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--mwidx-green);
          box-shadow: 0 0 7px rgba(53,224,126,.7);
        }

        .mwidx-url-box {
          padding: 16px;
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 10px;
          background: #071015;
        }

        .mwidx-url-label {
          color: #667983;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: .09em;
          text-transform: uppercase;
        }

        .mwidx-url {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 9px;
          color: #d0dde3;
          font-size: 10px;
          word-break: break-all;
        }

        .mwidx-url svg {
          width: 16px;
          height: 16px;
          flex: 0 0 auto;
          color: var(--mwidx-blue-light);
        }

        .mwidx-search-flow {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 9px;
          margin-top: 10px;
        }

        .mwidx-search-step {
          min-height: 96px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          border: 1px solid rgba(8,185,244,.14);
          border-radius: 9px;
          background: #071015;
          text-align: center;
        }

        .mwidx-search-step:nth-child(even) {
          border-color: rgba(255,121,0,.14);
        }

        .mwidx-search-step svg {
          width: 23px;
          height: 23px;
          color: var(--mwidx-blue-light);
        }

        .mwidx-search-step:nth-child(even) svg {
          color: var(--mwidx-orange-light);
        }

        .mwidx-search-step strong {
          font-size: 8px;
          letter-spacing: .06em;
        }

        /* =====================================================
           ARTICLE
        ===================================================== */

        .mwidx-article-section {
          padding:
            95px
            clamp(20px,5vw,80px)
            110px;
          background: #020304;
        }

        .mwidx-article-layout {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns:
            minmax(220px,.27fr)
            minmax(0,.73fr);
          align-items: start;
          gap: clamp(40px,6vw,75px);
        }

        /* =====================================================
           TOC
        ===================================================== */

        .mwidx-toc {
          position: sticky;
          top: 30px;
          padding: 23px;
          border: 1px solid var(--mwidx-border);
          border-radius: 14px;
          background:
            linear-gradient(
              145deg,
              #09131a,
              #04080b
            );
        }

        .mwidx-toc-title {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 15px;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .mwidx-toc-title svg {
          width: 16px;
          height: 16px;
          color: var(--mwidx-blue-light);
        }

        .mwidx-toc a {
          display: block;
          padding: 8px 0;
          color: #8799a3;
          text-decoration: none;
          font-size: 12px;
          line-height: 1.45;
        }

        .mwidx-toc a:hover {
          color: var(--mwidx-blue-light);
        }

        .mwidx-toc-cta {
          margin-top: 18px;
          padding-top: 17px;
          border-top: 1px solid rgba(255,255,255,.07);
        }

        .mwidx-toc-cta a {
          color: var(--mwidx-orange-light);
          font-weight: 850;
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .mwidx-content {
          min-width: 0;
        }

        .mwidx-section {
          margin-bottom: 62px;
          scroll-margin-top: 35px;
        }

        .mwidx-section h2 {
          margin: 0 0 20px;
          font-size: clamp(30px,3.5vw,48px);
          line-height: 1.08;
          letter-spacing: -.045em;
        }

        .mwidx-section h3 {
          margin: 32px 0 12px;
          color: var(--mwidx-blue-light);
          font-size: 21px;
          line-height: 1.3;
        }

        .mwidx-section p {
          margin: 0 0 19px;
          color: #b6c3ca;
          font-size: 16px;
          line-height: 1.85;
        }

        .mwidx-section strong {
          color: #fff;
        }

        /* =====================================================
           ANSWER BOX
        ===================================================== */

        .mwidx-answer {
          margin-bottom: 55px;
          padding: 29px;
          border: 1px solid rgba(8,185,244,.23);
          border-radius: 17px;
          background:
            radial-gradient(
              circle at 90% 20%,
              rgba(8,185,244,.06),
              transparent 35%
            ),
            #071015;
        }

        .mwidx-answer-label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          color: var(--mwidx-blue-light);
          font-size: 9px;
          font-weight: 950;
          letter-spacing: .11em;
          text-transform: uppercase;
        }

        .mwidx-answer-label svg {
          width: 17px;
          height: 17px;
        }

        .mwidx-answer h2 {
          margin: 0 0 12px;
          font-size: clamp(24px,3vw,36px);
          line-height: 1.1;
        }

        .mwidx-answer p {
          margin: 0;
          color: #b7c5cc;
          font-size: 15px;
          line-height: 1.75;
        }

        /* =====================================================
           DEFINITION CARDS
        ===================================================== */

        .mwidx-definition-grid {
          display: grid;
          grid-template-columns: repeat(2,minmax(0,1fr));
          gap: 14px;
          margin-top: 27px;
        }

        .mwidx-definition {
          min-height: 230px;
          padding: 23px;
          border: 1px solid rgba(8,185,244,.14);
          border-radius: 14px;
          background: #071015;
        }

        .mwidx-definition:nth-child(even) {
          border-color: rgba(255,121,0,.14);
        }

        .mwidx-definition svg {
          width: 30px;
          height: 30px;
          margin-bottom: 16px;
          color: var(--mwidx-blue-light);
        }

        .mwidx-definition:nth-child(even) svg {
          color: var(--mwidx-orange-light);
        }

        .mwidx-definition h3 {
          margin: 0 0 10px;
          color: #fff;
          font-size: 18px;
        }

        .mwidx-definition p {
          margin: 0;
          color: var(--mwidx-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           FOUNDATION GRID
        ===================================================== */

        .mwidx-foundation-grid {
          display: grid;
          grid-template-columns: repeat(2,minmax(0,1fr));
          gap: 14px;
          margin-top: 27px;
        }

        .mwidx-foundation-card {
          min-height: 245px;
          padding: 23px;
          border: 1px solid rgba(8,185,244,.14);
          border-radius: 14px;
          background: rgba(8,185,244,.018);
        }

        .mwidx-foundation-card:nth-child(even) {
          border-color: rgba(255,121,0,.14);
          background: rgba(255,121,0,.016);
        }

        .mwidx-foundation-card svg {
          width: 30px;
          height: 30px;
          margin-bottom: 16px;
          color: var(--mwidx-blue-light);
        }

        .mwidx-foundation-card:nth-child(even) svg {
          color: var(--mwidx-orange-light);
        }

        .mwidx-foundation-card h3 {
          margin: 0 0 10px;
          color: #fff;
          font-size: 18px;
        }

        .mwidx-foundation-card p {
          margin: 0;
          color: var(--mwidx-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           PROCESS
        ===================================================== */

        .mwidx-process {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 12px;
          margin-top: 28px;
        }

        .mwidx-process-card {
          min-height: 220px;
          padding: 22px;
          border: 1px solid rgba(8,185,244,.14);
          border-radius: 13px;
          background: #071015;
        }

        .mwidx-process-card:nth-child(even) {
          border-color: rgba(255,121,0,.14);
        }

        .mwidx-process-number {
          margin-bottom: 14px;
          color: var(--mwidx-blue-light);
          font-size: 9px;
          font-weight: 950;
          letter-spacing: .1em;
        }

        .mwidx-process-card:nth-child(even)
          .mwidx-process-number {
          color: var(--mwidx-orange-light);
        }

        .mwidx-process-card h3 {
          margin: 0 0 9px;
          color: #fff;
          font-size: 18px;
        }

        .mwidx-process-card p {
          margin: 0;
          color: var(--mwidx-muted);
          font-size: 12px;
          line-height: 1.66;
        }

        /* =====================================================
           ISSUES
        ===================================================== */

        .mwidx-issue-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 12px;
          margin-top: 27px;
        }

        .mwidx-issue-card {
          padding: 23px;
          border: 1px solid rgba(255,121,0,.14);
          border-radius: 13px;
          background: rgba(255,121,0,.015);
        }

        .mwidx-issue-card h3 {
          margin: 0 0 9px;
          color: var(--mwidx-orange-light);
          font-size: 18px;
        }

        .mwidx-issue-card:nth-child(even) h3 {
          color: var(--mwidx-blue-light);
        }

        .mwidx-issue-card p {
          margin: 0;
          color: var(--mwidx-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           CALLOUT
        ===================================================== */

        .mwidx-callout {
          margin: 45px 0;
          padding: 30px;
          border: 1px solid rgba(255,121,0,.2);
          border-radius: 16px;
          background:
            radial-gradient(
              circle at 90% 20%,
              rgba(255,121,0,.06),
              transparent 35%
            ),
            #071015;
        }

        .mwidx-callout-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          margin-bottom: 15px;
          border: 1px solid rgba(255,121,0,.25);
          border-radius: 12px;
          color: var(--mwidx-orange-light);
          background: rgba(255,121,0,.045);
        }

        .mwidx-callout-icon svg {
          width: 24px;
          height: 24px;
        }

        .mwidx-callout h3 {
          margin: 0 0 10px;
          color: #fff;
          font-size: 22px;
        }

        .mwidx-callout p {
          margin: 0;
          color: var(--mwidx-muted);
          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           FAQ
        ===================================================== */

        .mwidx-faq-grid {
          display: grid;
          gap: 12px;
          margin-top: 27px;
        }

        .mwidx-faq-card {
          padding: 23px;
          border: 1px solid var(--mwidx-border);
          border-radius: 13px;
          background: #071015;
        }

        .mwidx-faq-card h3 {
          margin: 0 0 9px;
          color: var(--mwidx-blue-light);
          font-size: 17px;
        }

        .mwidx-faq-card:nth-child(even) h3 {
          color: var(--mwidx-orange-light);
        }

        .mwidx-faq-card p {
          margin: 0;
          color: var(--mwidx-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           BUTTONS / CTA
        ===================================================== */

        .mwidx-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 25px;
        }

        .mwidx-btn {
          min-height: 51px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0 20px;
          border-radius: 9px;
          color: #fff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 850;
          transition: transform .2s ease;
        }

        .mwidx-btn:hover {
          transform: translateY(-2px);
        }

        .mwidx-btn-blue {
          border: 1px solid rgba(56,215,255,.5);
          background:
            linear-gradient(
              180deg,
              #0ab6ed,
              #0789b6
            );
        }

        .mwidx-btn-orange {
          border: 1px solid rgba(255,176,49,.55);
          background:
            linear-gradient(
              180deg,
              #ff9519,
              #f16600
            );
        }

        .mwidx-btn-dark {
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.03);
        }

        .mwidx-btn svg {
          width: 17px;
          height: 17px;
        }

        .mwidx-article-cta {
          margin-top: 65px;
          padding: clamp(35px,5vw,55px);
          border: 1px solid rgba(8,185,244,.21);
          border-radius: 20px;
          background:
            radial-gradient(
              circle at 90% 50%,
              rgba(255,121,0,.065),
              transparent 31%
            ),
            linear-gradient(
              145deg,
              #0a151c,
              #04080b
            );
        }

        .mwidx-article-cta h2 {
          max-width: 800px;
          margin: 0;
          font-size: clamp(31px,4vw,49px);
          line-height: 1.05;
          letter-spacing: -.045em;
        }

        .mwidx-article-cta p {
          max-width: 760px;
          margin: 17px 0 0;
          color: var(--mwidx-muted);
          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           RELATED
        ===================================================== */

        .mwidx-related-section {
          padding: 90px clamp(20px,5vw,80px);
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwidx-related-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        .mwidx-related-title {
          margin-bottom: 32px;
        }

        .mwidx-related-title span {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 9px;
          color: var(--mwidx-orange-light);
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .mwidx-related-title svg {
          width: 16px;
          height: 16px;
        }

        .mwidx-related-title h2 {
          margin: 0;
          font-size: clamp(31px,4vw,49px);
          letter-spacing: -.045em;
        }

        .mwidx-related-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 14px;
        }

        .mwidx-related-card {
          min-height: 245px;
          display: flex;
          flex-direction: column;
          padding: 24px;
          border: 1px solid var(--mwidx-border);
          border-radius: 14px;
          color: #fff;
          text-decoration: none;
          background:
            linear-gradient(
              145deg,
              #0a1218,
              #04080b
            );
          transition:
            transform .2s ease,
            border-color .2s ease;
        }

        .mwidx-related-card:hover {
          transform: translateY(-4px);
          border-color: rgba(8,185,244,.3);
        }

        .mwidx-related-card:nth-child(even):hover {
          border-color: rgba(255,121,0,.3);
        }

        .mwidx-related-card h3 {
          margin: 0;
          font-size: 18px;
          line-height: 1.3;
        }

        .mwidx-related-card p {
          margin: 13px 0 0;
          color: var(--mwidx-muted);
          font-size: 12px;
          line-height: 1.65;
        }

        .mwidx-related-link {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: auto;
          padding-top: 21px;
          color: var(--mwidx-blue-light);
          font-size: 11px;
          font-weight: 850;
        }

        .mwidx-related-card:nth-child(even)
          .mwidx-related-link {
          color: var(--mwidx-orange-light);
        }

        .mwidx-related-link svg {
          width: 15px;
          height: 15px;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1050px) {
          .mwidx-hero-inner {
            grid-template-columns: 1fr;
          }

          .mwidx-hero-copy {
            text-align: center;
          }

          .mwidx-label {
            margin-left: auto;
            margin-right: auto;
          }

          .mwidx-description {
            margin-left: auto;
            margin-right: auto;
          }

          .mwidx-meta {
            justify-content: center;
          }

          .mwidx-related-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .mwidx-related-card:last-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 900px) {
          .mwidx-process {
            grid-template-columns: repeat(2,1fr);
          }
        }

        @media (max-width: 850px) {
          .mwidx-article-layout {
            grid-template-columns: 1fr;
          }

          .mwidx-toc {
            position: static;
            display: grid;
            grid-template-columns: repeat(2,1fr);
            gap: 0 20px;
          }

          .mwidx-toc-title,
          .mwidx-toc-cta {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 700px) {
          .mwidx-hero-inner {
            padding: 70px 16px;
          }

          .mwidx-hero h1 {
            font-size: clamp(43px,13vw,65px);
          }

          .mwidx-article-section {
            padding: 70px 16px 85px;
          }

          .mwidx-definition-grid,
          .mwidx-foundation-grid,
          .mwidx-process,
          .mwidx-issue-grid,
          .mwidx-related-grid {
            grid-template-columns: 1fr;
          }

          .mwidx-related-card:last-child {
            grid-column: auto;
          }

          .mwidx-related-section {
            padding: 70px 16px;
          }
        }

        @media (max-width: 500px) {
          .mwidx-stage {
            min-height: 440px;
            transform: scale(.9);
            margin: -10px -20px;
          }

          .mwidx-search-flow {
            grid-template-columns: 1fr;
          }

          .mwidx-toc {
            grid-template-columns: 1fr;
          }

          .mwidx-toc-title,
          .mwidx-toc-cta {
            grid-column: auto;
          }

          .mwidx-section p {
            font-size: 15px;
          }
        }
      `}</style>

      {/* ======================================================
          BREADCRUMBS
      ====================================================== */}

      <div className="mwidx-breadcrumb-wrap">
        <nav
          className="mwidx-breadcrumbs"
          aria-label="Breadcrumb"
        >
          <Link href="/">
            Home
          </Link>

          <ChevronRight />

          <Link href="/blog">
            Blog
          </Link>

          <ChevronRight />

          <span>
            Google Indexing After Launch
          </span>
        </nav>
      </div>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="mwidx-hero">
        <div className="mwidx-hero-inner">
          <div className="mwidx-hero-copy">
            <div className="mwidx-label">
              <BookOpen />
              SEO & Website Education
            </div>

            <h1>
              Your Website Is{" "}
              <span className="mwidx-orange">
                Live.
              </span>{" "}
              But Is It{" "}
              <span className="mwidx-blue">
                Indexed?
              </span>
            </h1>

            <p className="mwidx-description">
              Publishing a website makes it
              available on the internet. It does
              not automatically mean Google has
              discovered every page, indexed the
              content, or chosen it to appear for
              relevant searches.
            </p>

            <div className="mwidx-meta">
              <span>
                By Adam Matthew Charest
              </span>

              <span>
                Matthew Web
              </span>

              <span>
                Updated September 9, 2026
              </span>
            </div>
          </div>

          <div
            className="mwidx-stage"
            aria-hidden="true"
          >
            <div className="mwidx-console">
              <div className="mwidx-console-top">
                <strong>
                  SEARCH // INDEX STATUS
                </strong>

                <span className="mwidx-console-status">
                  PUBLIC
                </span>
              </div>

              <div className="mwidx-url-box">
                <div className="mwidx-url-label">
                  PUBLIC URL
                </div>

                <div className="mwidx-url">
                  <Globe2 />
                  https://matthew-web.com/example-page
                </div>
              </div>

              <div className="mwidx-search-flow">
                <div className="mwidx-search-step">
                  <Bot />
                  <strong>
                    CRAWL
                  </strong>
                </div>

                <div className="mwidx-search-step">
                  <FileSearch />
                  <strong>
                    INDEX
                  </strong>
                </div>

                <div className="mwidx-search-step">
                  <Search />
                  <strong>
                    SEARCH
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          ARTICLE
      ====================================================== */}

      <article className="mwidx-article-section">
        <div className="mwidx-article-layout">
          {/* ==================================================
              TABLE OF CONTENTS
          ================================================== */}

          <aside className="mwidx-toc">
            <div className="mwidx-toc-title">
              <BookOpen />
              In This Article
            </div>

            <a href="#short-answer">
              Short Answer
            </a>

            <a href="#live-vs-indexed">
              Live vs Indexed
            </a>

            <a href="#how-discovery-works">
              How Discovery Works
            </a>

            <a href="#foundations">
              Indexing Foundations
            </a>

            <a href="#search-console">
              Search Console
            </a>

            <a href="#sitemap">
              Sitemaps
            </a>

            <a href="#problems">
              Common Problems
            </a>

            <a href="#after-launch">
              Post-Launch Process
            </a>

            <a href="#ranking">
              Indexing vs Ranking
            </a>

            <a href="#faq">
              Indexing FAQs
            </a>

            <div className="mwidx-toc-cta">
              <Link href="/seo-and-indexing">
                SEO & Indexing Services →
              </Link>
            </div>
          </aside>

          <div className="mwidx-content">
            {/* =================================================
                SHORT ANSWER
            ================================================= */}

            <section
              className="mwidx-answer"
              id="short-answer"
            >
              <div className="mwidx-answer-label">
                <Zap />
                Short Answer
              </div>

              <h2>
                Why Does Google Indexing Matter?
              </h2>

              <p>
                <strong>
                  A page generally needs to be
                  discovered and indexed before
                  it can meaningfully compete in
                  Google Search.
                </strong>{" "}
                Launching the website makes the
                page publicly available, but
                search engines still have to
                discover, crawl, process, and
                decide how to handle it.
                Indexing is an important step,
                but it still does not guarantee
                rankings, traffic, leads, or
                sales.
              </p>
            </section>

            {/* =================================================
                LIVE VS INDEXED
            ================================================= */}

            <section
              className="mwidx-section"
              id="live-vs-indexed"
            >
              <h2>
                Live, Crawled, Indexed and
                Ranking Are{" "}
                <span className="mwidx-blue">
                  Different Things
                </span>
              </h2>

              <p>
                One of the most common
                misunderstandings after a website
                launch is assuming that because
                the domain works, the website
                must already be fully available
                through search.
              </p>

              <p>
                Those are separate stages.
              </p>

              <div className="mwidx-definition-grid">
                {definitions.map(
                  (item) => {
                    const Icon =
                      item.icon;

                    return (
                      <div
                        className="mwidx-definition"
                        key={item.title}
                      >
                        <Icon />

                        <h3>
                          {item.title}
                        </h3>

                        <p>
                          {item.text}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>

              <div className="mwidx-callout">
                <div className="mwidx-callout-icon">
                  <Search />
                </div>

                <h3>
                  Indexed Does Not Mean #1
                </h3>

                <p>
                  An indexed page is simply
                  eligible to be considered by
                  the search engine. Whether it
                  appears for a particular search
                  and where it appears are
                  separate questions.
                </p>
              </div>
            </section>

            {/* =================================================
                DISCOVERY
            ================================================= */}

            <section
              className="mwidx-section"
              id="how-discovery-works"
            >
              <h2>
                How Does Google{" "}
                <span className="mwidx-orange">
                  Discover a New Page?
                </span>
              </h2>

              <p>
                Search engines use automated
                crawlers to discover and inspect
                pages across the web.
              </p>

              <p>
                A new page can become easier to
                discover when it is linked from
                other crawlable pages, appears in
                a sitemap, or is surfaced through
                search-engine webmaster tools.
              </p>

              <p>
                Discovery alone does not require
                the search engine to index the
                page. The crawler can inspect a
                URL and the search engine may
                still decide not to keep it in
                the index.
              </p>

              <p>
                That is why indexing work should
                include both
                <strong>
                  {" "}
                  technical accessibility
                </strong>{" "}
                and
                <strong>
                  {" "}
                  useful content.
                </strong>
              </p>
            </section>

            {/* =================================================
                FOUNDATIONS
            ================================================= */}

            <section
              className="mwidx-section"
              id="foundations"
            >
              <h2>
                The Technical Foundations of{" "}
                <span className="mwidx-blue">
                  Indexing
                </span>
              </h2>

              <div className="mwidx-foundation-grid">
                {foundations.map(
                  (item) => {
                    const Icon =
                      item.icon;

                    return (
                      <div
                        className="mwidx-foundation-card"
                        key={item.title}
                      >
                        <Icon />

                        <h3>
                          {item.title}
                        </h3>

                        <p>
                          {item.text}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>
            </section>

            {/* =================================================
                SEARCH CONSOLE
            ================================================= */}

            <section
              className="mwidx-section"
              id="search-console"
            >
              <h2>
                What Google Search Console{" "}
                <span className="mwidx-orange">
                  Helps With
                </span>
              </h2>

              <p>
                Google Search Console is an
                important tool for understanding
                how Google interacts with a
                website.
              </p>

              <p>
                It can help website owners submit
                sitemaps, inspect individual
                URLs, review indexing information,
                view certain crawl or search
                issues, and understand some of
                the queries and pages appearing
                in Google Search.
              </p>

              <p>
                URL Inspection can also be useful
                when a new or significantly
                updated page needs to be checked.
              </p>

              <div className="mwidx-callout">
                <div className="mwidx-callout-icon">
                  <TimerReset />
                </div>

                <h3>
                  Requesting Indexing Is a
                  Request, Not a Command
                </h3>

                <p>
                  Submitting a URL or sitemap
                  does not force Google to index
                  a page immediately. The search
                  engine still decides when to
                  crawl, whether to index, and
                  how the page should be treated.
                </p>
              </div>
            </section>

            {/* =================================================
                SITEMAP
            ================================================= */}

            <section
              className="mwidx-section"
              id="sitemap"
            >
              <h2>
                Why the{" "}
                <span className="mwidx-blue">
                  Sitemap
                </span>{" "}
                Matters
              </h2>

              <p>
                A sitemap gives search crawlers a
                structured list of URLs the
                website considers important and
                indexable.
              </p>

              <p>
                On a growing website, that may
                include:
              </p>

              <ul className="mwidx-checklist">
                <li>
                  <CheckCircle2 />
                  Homepage
                </li>

                <li>
                  <CheckCircle2 />
                  Service pages
                </li>

                <li>
                  <CheckCircle2 />
                  Project pages
                </li>

                <li>
                  <CheckCircle2 />
                  Blog index
                </li>

                <li>
                  <CheckCircle2 />
                  Individual articles
                </li>

                <li>
                  <CheckCircle2 />
                  Public educational content
                </li>
              </ul>

              <p>
                It normally should not be used to
                advertise private admin systems,
                APIs, duplicate pages,
                authentication routes, testing
                pages, or other content that is
                intentionally excluded from
                public search.
              </p>
            </section>

            {/* =================================================
                PROBLEMS
            ================================================= */}

            <section
              className="mwidx-section"
              id="problems"
            >
              <h2>
                Common Reasons a Page May Have{" "}
                <span className="mwidx-orange">
                  Indexing Problems
                </span>
              </h2>

              <div className="mwidx-issue-grid">
                {indexingIssues.map(
                  (item) => (
                    <div
                      className="mwidx-issue-card"
                      key={item.title}
                    >
                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.text}
                      </p>
                    </div>
                  )
                )}
              </div>
            </section>

            {/* =================================================
                POST LAUNCH
            ================================================= */}

            <section
              className="mwidx-section"
              id="after-launch"
            >
              <h2>
                A Practical{" "}
                <span className="mwidx-blue">
                  Post-Launch Indexing Process
                </span>
              </h2>

              <p>
                Indexing should be part of the
                launch checklist rather than
                something remembered months
                later.
              </p>

              <div className="mwidx-process">
                {process.map(
                  (step) => (
                    <div
                      className="mwidx-process-card"
                      key={step.number}
                    >
                      <div className="mwidx-process-number">
                        STEP {step.number}
                      </div>

                      <h3>
                        {step.title}
                      </h3>

                      <p>
                        {step.text}
                      </p>
                    </div>
                  )
                )}
              </div>
            </section>

            {/* =================================================
                INDEXING VS RANKING
            ================================================= */}

            <section
              className="mwidx-section"
              id="ranking"
            >
              <h2>
                Indexing Is the Beginning,{" "}
                <span className="mwidx-orange">
                  Not the Finish Line
                </span>
              </h2>

              <p>
                Once the page is indexed, the
                next challenge is whether it is
                relevant and useful enough to
                appear for meaningful searches.
              </p>

              <p>
                Ranking can depend on many
                factors, including the search
                query, content, competition,
                location, site quality, links,
                authority, technical condition,
                user intent, and search-engine
                systems.
              </p>

              <p>
                That means submitting the sitemap
                twenty times is not a substitute
                for making the page better.
              </p>

              <div className="mwidx-callout">
                <div className="mwidx-callout-icon">
                  <Target />
                </div>

                <h3>
                  Build Pages Worth Finding
                </h3>

                <p>
                  The strongest long-term
                  indexing and SEO strategy is to
                  combine sound technical
                  structure with useful pages
                  that clearly answer real
                  customer questions.
                </p>
              </div>

              <div className="mwidx-buttons">
                <Link
                  href="/seo-and-indexing"
                  className="mwidx-btn mwidx-btn-blue"
                >
                  SEO & Indexing Services
                  <ArrowRight />
                </Link>
              </div>
            </section>

            {/* =================================================
                FAQ
            ================================================= */}

            <section
              className="mwidx-section"
              id="faq"
            >
              <h2>
                Google Indexing{" "}
                <span className="mwidx-blue">
                  FAQs
                </span>
              </h2>

              <div className="mwidx-faq-grid">
                {faqs.map(
                  (item) => (
                    <div
                      className="mwidx-faq-card"
                      key={item.q}
                    >
                      <h3>
                        {item.q}
                      </h3>

                      <p>
                        {item.a}
                      </p>
                    </div>
                  )
                )}
              </div>
            </section>

            {/* =================================================
                CTA
            ================================================= */}

            <section className="mwidx-article-cta">
              <h2>
                Your Website Should Not Stop at{" "}
                <span className="mwidx-orange">
                  “It’s Live.”
                </span>
              </h2>

              <p>
                Matthew Web can help review
                metadata, sitemaps, crawlability,
                internal links, Google Search
                Console, Bing Webmaster Tools,
                indexing preparation, and the
                broader technical search
                structure of a business website.
              </p>

              <div className="mwidx-buttons">
                <Link
                  href="/contact-us"
                  className="mwidx-btn mwidx-btn-orange"
                >
                  Ask About Indexing
                  <ArrowRight />
                </Link>

                <Link
                  href="/seo-and-indexing"
                  className="mwidx-btn mwidx-btn-blue"
                >
                  SEO & Indexing
                </Link>

                <Link
                  href="/website-design"
                  className="mwidx-btn mwidx-btn-dark"
                >
                  Website Design
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* ======================================================
          RELATED
      ====================================================== */}

      <section className="mwidx-related-section">
        <div className="mwidx-related-inner">
          <div className="mwidx-related-title">
            <span>
              <Sparkles />
              Continue Reading
            </span>

            <h2>
              Related{" "}
              <span className="mwidx-blue">
                Articles
              </span>
            </h2>
          </div>

          <div className="mwidx-related-grid">
            {relatedArticles.map(
              (article) => (
                <Link
                  href={article.href}
                  className="mwidx-related-card"
                  key={article.href}
                >
                  <h3>
                    {article.title}
                  </h3>

                  <p>
                    {article.text}
                  </p>

                  <div className="mwidx-related-link">
                    Read Article
                    <ArrowRight />
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
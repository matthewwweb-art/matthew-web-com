import Link from "next/link";

import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileSearch,
  FileText,
  Gauge,
  Globe2,
  Link2,
  ListTree,
  Map,
  MonitorCheck,
  Network,
  Search,
  SearchCheck,
  ServerCog,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
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
    "SEO & Search Engine Indexing Help | Matthew Web",

  description:
    "Matthew Web helps small businesses with SEO-ready website structure, Google Search Console, Bing Webmaster Tools, sitemaps, robots.txt, metadata, internal linking, indexing diagnostics, and search visibility.",

  alternates: {
    canonical:
      "https://matthew-web.com/seo-and-indexing",
  },

  openGraph: {
    title:
      "SEO & Search Engine Indexing Help | Matthew Web",

    description:
      "Technical SEO and indexing support including Google Search Console, Bing Webmaster Tools, sitemaps, metadata, internal links, content structure, and indexing diagnostics.",

    url:
      "https://matthew-web.com/seo-and-indexing",

    siteName:
      "Matthew Web",

    type:
      "website",
  },
};

/* ============================================================
   SERVICES
============================================================ */

const seoServices = [
  {
    icon: SearchCheck,
    title: "Google Search Console",
    text:
      "Verify websites, submit sitemaps, inspect important URLs, review indexing status, and investigate search visibility problems.",
    accent: "blue",
  },

  {
    icon: Globe2,
    title: "Bing Webmaster Tools",
    text:
      "Submit sitemaps and URLs, review crawl information, and monitor Bing search and indexing information.",
    accent: "orange",
  },

  {
    icon: Map,
    title: "Sitemap Setup",
    text:
      "Create or review a sitemap that clearly identifies the public pages search engines should discover and crawl.",
    accent: "blue",
  },

  {
    icon: ShieldCheck,
    title: "Robots.txt Review",
    text:
      "Confirm important public content can be crawled while private areas, admin systems, and API routes remain appropriately excluded.",
    accent: "orange",
  },

  {
    icon: FileText,
    title: "Metadata & Canonicals",
    text:
      "Create useful page titles, descriptions, canonical URLs, and sharing metadata that accurately describe each page.",
    accent: "blue",
  },

  {
    icon: Link2,
    title: "Internal Linking",
    text:
      "Connect related pages so visitors and search engines can discover important services, supporting content, and trust information.",
    accent: "orange",
  },
];

/* ============================================================
   INDEXING PROBLEMS
============================================================ */

const indexingProblems = [
  {
    icon: FileSearch,
    title: "Discovered, Not Indexed",
    text:
      "The search engine knows the URL exists but has not yet crawled and added it to the index.",
  },

  {
    icon: Search,
    title: "Crawled, Not Indexed",
    text:
      "The page was visited but was not selected for indexing at that time.",
  },

  {
    icon: FileText,
    title: "Thin Content",
    text:
      "Pages may not provide enough original, useful information to clearly establish their purpose and value.",
  },

  {
    icon: Settings2,
    title: "Weak Metadata",
    text:
      "Generic titles and descriptions make it harder to distinguish one important page from another.",
  },

  {
    icon: Network,
    title: "Poor Internal Links",
    text:
      "Important pages may be difficult to discover because few other pages or navigation paths point to them.",
  },

  {
    icon: AlertTriangle,
    title: "Technical Blocking",
    text:
      "Robots rules, noindex directives, canonical mistakes, redirects, or other technical issues can interfere with indexing.",
  },

  {
    icon: Wrench,
    title: "Broken URLs",
    text:
      "Old or incorrect links may lead visitors and crawlers to 404 pages instead of useful current content.",
  },

  {
    icon: ListTree,
    title: "Incomplete Site Structure",
    text:
      "A website may be missing dedicated service pages, supporting content, trust pages, or clear topic organization.",
  },
];

/* ============================================================
   PROCESS
============================================================ */

const processSteps = [
  {
    number: "01",
    title: "Review the Website",
    text:
      "Identify the important public pages, current search setup, content structure, links, sitemap, and obvious technical issues.",
  },

  {
    number: "02",
    title: "Check Crawl & Indexing",
    text:
      "Use available search-engine tools to understand whether important pages are discovered, crawled, indexed, blocked, or returning errors.",
  },

  {
    number: "03",
    title: "Improve Page Structure",
    text:
      "Strengthen page titles, descriptions, headings, content organization, internal links, and page purpose where needed.",
  },

  {
    number: "04",
    title: "Review Technical Files",
    text:
      "Check sitemap, robots rules, canonicals, redirects, and related technical signals that affect crawlability and indexing.",
  },

  {
    number: "05",
    title: "Submit & Inspect",
    text:
      "Submit the sitemap and inspect important URLs through Google Search Console and Bing Webmaster Tools where appropriate.",
  },

  {
    number: "06",
    title: "Monitor & Improve",
    text:
      "Search visibility develops over time, so indexing status, content quality, errors, and search performance should be reviewed periodically.",
  },
];

/* ============================================================
   FAQ
============================================================ */

const faqs = [
  {
    q:
      "Does submitting a sitemap guarantee rankings?",

    a:
      "No. A sitemap helps search engines discover URLs, but rankings depend on many other factors. Sitemap submission is part of the technical foundation, not a ranking guarantee.",
  },

  {
    q:
      "What does 'crawled but not indexed' mean?",

    a:
      "It generally means the search engine visited the page but did not add it to the index at that time. There can be many causes, including page quality, duplication, site structure, crawl priorities, or search-engine decisions.",
  },

  {
    q:
      "What does 'discovered but not indexed' mean?",

    a:
      "It means the search engine knows the URL exists but has not yet crawled and indexed it. Better internal links, useful content, sitemap submission, and URL inspection may help discovery, but indexing remains the search engine's decision.",
  },

  {
    q:
      "Can Matthew Web help with Bing too?",

    a:
      "Yes. Matthew Web can help with Bing Webmaster Tools, sitemap submission, URL inspection, and related search visibility work.",
  },

  {
    q:
      "Should every page appear in Google?",

    a:
      "No. Public service pages, useful articles, company information, examples, and other valuable public content may be appropriate for indexing. Private dashboards, admin areas, API routes, duplicate pages, and test pages generally should not appear in search results.",
  },

  {
    q:
      "Can you guarantee first-page Google rankings?",

    a:
      "No. Matthew Web does not guarantee a specific ranking. Search results depend on competition, relevance, content, authority, location, user intent, technical quality, outside signals, and search-engine decisions.",
  },

  {
    q:
      "Is SEO just adding keywords?",

    a:
      "No. Useful search optimization includes technical crawlability, page structure, content quality, search intent, internal linking, mobile usability, site organization, indexing, and other factors.",
  },

  {
    q:
      "Can SEO work be added to an existing website?",

    a:
      "Often, yes. Depending on the site's platform and technical access, existing pages can be reviewed and improved without automatically rebuilding the entire website.",
  },
];

/* ============================================================
   STRUCTURED DATA
============================================================ */

const serviceSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "Service",

  name:
    "SEO and Search Engine Indexing Support",

  provider: {
    "@type":
      "Organization",

    name:
      "Matthew Web",

    url:
      "https://matthew-web.com",
  },

  areaServed: {
    "@type":
      "Country",

    name:
      "United States",
  },

  serviceType:
    "Technical SEO and search engine indexing support",

  url:
    "https://matthew-web.com/seo-and-indexing",
};

const faqSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "FAQPage",

  mainEntity:
    faqs.map((item) => ({
      "@type":
        "Question",

      name:
        item.q,

      acceptedAnswer: {
        "@type":
          "Answer",

        text:
          item.a,
      },
    })),
};

/* ============================================================
   PAGE
============================================================ */

export default function SeoAndIndexingPage() {
  return (
    <main className="mwseo-page">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              serviceSchema
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
          --mwseo-black:
            #020304;

          --mwseo-panel:
            #091117;

          --mwseo-muted:
            #aebbc5;

          --mwseo-blue:
            #08b9f4;

          --mwseo-blue-light:
            #38d7ff;

          --mwseo-orange:
            #ff7900;

          --mwseo-orange-light:
            #ffab31;

          --mwseo-border:
            rgba(
              255,
              255,
              255,
              0.09
            );
        }

        body {
          margin: 0;

          background:
            var(--mwseo-black);
        }

        .mwseo-page {
          min-height:
            100vh;

          overflow:
            hidden;

          color:
            white;

          background:
            var(--mwseo-black);
        }

        .mwseo-container {
          width:
            100%;

          max-width:
            1380px;

          margin:
            0 auto;
        }

        .mwseo-section {
          position:
            relative;

          padding:
            100px
            clamp(
              20px,
              5vw,
              80px
            );
        }

        .mwseo-blue {
          color:
            var(
              --mwseo-blue-light
            );
        }

        .mwseo-orange {
          color:
            var(
              --mwseo-orange
            );
        }

        /* =====================================================
           COMMON
        ===================================================== */

        .mwseo-kicker {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            8px;

          margin-bottom:
            14px;

          color:
            var(
              --mwseo-blue-light
            );

          font-size:
            11px;

          font-weight:
            900;

          letter-spacing:
            0.16em;

          text-transform:
            uppercase;
        }

        .mwseo-kicker.orange {
          color:
            var(
              --mwseo-orange-light
            );
        }

        .mwseo-kicker svg {
          width:
            18px;

          height:
            18px;
        }

        .mwseo-heading {
          max-width:
            900px;

          margin-bottom:
            48px;
        }

        .mwseo-heading.center {
          margin-left:
            auto;

          margin-right:
            auto;

          text-align:
            center;
        }

        .mwseo-heading h2 {
          margin:
            0 0 18px;

          font-size:
            clamp(
              38px,
              4.7vw,
              68px
            );

          line-height:
            1.02;

          letter-spacing:
            -0.05em;
        }

        .mwseo-heading p {
          max-width:
            800px;

          margin:
            0;

          color:
            var(
              --mwseo-muted
            );

          font-size:
            clamp(
              15px,
              1.35vw,
              19px
            );

          line-height:
            1.75;
        }

        .mwseo-heading.center p {
          margin-left:
            auto;

          margin-right:
            auto;
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .mwseo-button-row {
          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            13px;

          margin-top:
            29px;
        }

        .mwseo-btn {
          min-height:
            53px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            9px;

          padding:
            0 22px;

          border-radius:
            9px;

          color:
            white;

          text-decoration:
            none;

          font-size:
            14px;

          font-weight:
            850;

          transition:
            transform
              0.2s ease,
            box-shadow
              0.2s ease,
            border-color
              0.2s ease;
        }

        .mwseo-btn svg {
          width:
            18px;

          height:
            18px;
        }

        .mwseo-btn-blue {
          border:
            1px solid
            rgba(
              56,
              215,
              255,
              0.55
            );

          background:
            linear-gradient(
              180deg,
              #0ab6ed,
              #0789b6
            );

          box-shadow:
            0 0 16px
            rgba(
              8,
              185,
              244,
              0.28
            );
        }

        .mwseo-btn-orange {
          border:
            1px solid
            rgba(
              255,
              176,
              49,
              0.6
            );

          background:
            linear-gradient(
              180deg,
              #ff9519,
              #f16600
            );

          box-shadow:
            0 0 16px
            rgba(
              255,
              121,
              0,
              0.27
            );
        }

        .mwseo-btn-dark {
          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.13
            );

          background:
            rgba(
              255,
              255,
              255,
              0.035
            );
        }

        .mwseo-btn:hover {
          transform:
            translateY(
              -2px
            );
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwseo-hero {
          position:
            relative;

          min-height:
            680px;

          display:
            flex;

          align-items:
            center;

          overflow:
            hidden;

          border-bottom:
            1px solid
            rgba(
              8,
              185,
              244,
              0.16
            );

          background:
            radial-gradient(
              ellipse at
              18% 42%,
              rgba(
                8,
                185,
                244,
                0.16
              ),
              transparent
              36%
            ),
            radial-gradient(
              ellipse at
              82% 48%,
              rgba(
                255,
                121,
                0,
                0.08
              ),
              transparent
              32%
            ),
            linear-gradient(
              180deg,
              #020304,
              #03080c,
              #020304
            );
        }

        .mwseo-hero::before {
          content:
            "";

          position:
            absolute;

          inset:
            0;

          opacity:
            0.27;

          pointer-events:
            none;

          background-image:
            linear-gradient(
              rgba(
                8,
                185,
                244,
                0.055
              )
              1px,
              transparent
              1px
            ),
            linear-gradient(
              90deg,
              rgba(
                8,
                185,
                244,
                0.055
              )
              1px,
              transparent
              1px
            );

          background-size:
            76px 76px;

          mask-image:
            radial-gradient(
              ellipse at center,
              black,
              transparent
              80%
            );
        }

        .mwseo-hero-inner {
          position:
            relative;

          z-index:
            3;

          display:
            grid;

          grid-template-columns:
            minmax(
              0,
              1.05fr
            )
            minmax(
              420px,
              0.95fr
            );

          align-items:
            center;

          gap:
            clamp(
              45px,
              6vw,
              95px
            );

          width:
            100%;

          max-width:
            1380px;

          margin:
            0 auto;

          padding:
            95px
            clamp(
              20px,
              5vw,
              80px
            );
        }

        .mwseo-hero-badge {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            8px;

          width:
            fit-content;

          margin-bottom:
            21px;

          padding:
            8px 12px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.28
            );

          border-radius:
            999px;

          color:
            #d9f8ff;

          background:
            rgba(
              8,
              185,
              244,
              0.055
            );

          font-size:
            10px;

          font-weight:
            900;

          letter-spacing:
            0.14em;

          text-transform:
            uppercase;
        }

        .mwseo-hero-badge span {
          width:
            7px;

          height:
            7px;

          border-radius:
            50%;

          background:
            #35e07e;

          box-shadow:
            0 0 9px
            rgba(
              53,
              224,
              126,
              0.8
            );
        }

        .mwseo-hero h1 {
          max-width:
            870px;

          margin:
            0;

          font-size:
            clamp(
              50px,
              6vw,
              91px
            );

          line-height:
            0.97;

          letter-spacing:
            -0.06em;
        }

        .mwseo-hero h1 span {
          display:
            block;
        }

        .mwseo-hero-copy
          > p {
          max-width:
            770px;

          margin:
            25px 0 0;

          color:
            #b8c6cf;

          font-size:
            clamp(
              16px,
              1.4vw,
              20px
            );

          line-height:
            1.72;
        }

        /* =====================================================
           SEARCH CONSOLE VISUAL
        ===================================================== */

        .mwseo-console-stage {
          position:
            relative;

          min-height:
            470px;

          display:
            grid;

          place-items:
            center;
        }

        .mwseo-console {
          position:
            relative;

          z-index:
            3;

          width:
            min(
              100%,
              500px
            );

          padding:
            23px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.31
            );

          border-radius:
            20px;

          background:
            radial-gradient(
              circle at
              20% 15%,
              rgba(
                8,
                185,
                244,
                0.13
              ),
              transparent
              34%
            ),
            linear-gradient(
              145deg,
              #0c171e,
              #04080b
            );

          box-shadow:
            0 30px 70px
            rgba(
              0,
              0,
              0,
              0.48
            ),
            0 0 30px
            rgba(
              8,
              185,
              244,
              0.08
            );
        }

        .mwseo-console-top {
          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          margin-bottom:
            17px;
        }

        .mwseo-console-dots {
          display:
            flex;

          gap:
            6px;
        }

        .mwseo-console-dots
          span {
          width:
            8px;

          height:
            8px;

          border-radius:
            50%;

          background:
            rgba(
              255,
              255,
              255,
              0.17
            );
        }

        .mwseo-console-dots
          span:nth-child(1) {
          background:
            var(
              --mwseo-orange
            );
        }

        .mwseo-console-dots
          span:nth-child(2) {
          background:
            var(
              --mwseo-blue
            );
        }

        .mwseo-console-top
          strong {
          color:
            #7f909b;

          font-size:
            9px;

          letter-spacing:
            0.13em;
        }

        .mwseo-url-field {
          display:
            flex;

          align-items:
            center;

          gap:
            9px;

          min-height:
            48px;

          padding:
            0 14px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.09
            );

          border-radius:
            8px;

          background:
            #071016;
        }

        .mwseo-url-field
          svg {
          width:
            18px;

          height:
            18px;

          color:
            var(
              --mwseo-blue-light
            );
        }

        .mwseo-url-line {
          width:
            68%;

          height:
            7px;

          border-radius:
            3px;

          background:
            rgba(
              255,
              255,
              255,
              0.14
            );
        }

        .mwseo-status-card {
          display:
            grid;

          grid-template-columns:
            48px 1fr;

          align-items:
            center;

          gap:
            13px;

          min-height:
            89px;

          margin-top:
            12px;

          padding:
            14px;

          border:
            1px solid
            rgba(
              53,
              224,
              126,
              0.19
            );

          border-radius:
            9px;

          background:
            rgba(
              53,
              224,
              126,
              0.035
            );
        }

        .mwseo-status-check {
          width:
            48px;

          height:
            48px;

          display:
            grid;

          place-items:
            center;

          border-radius:
            50%;

          color:
            #35e07e;

          background:
            rgba(
              53,
              224,
              126,
              0.08
            );
        }

        .mwseo-status-check
          svg {
          width:
            26px;

          height:
            26px;
        }

        .mwseo-status-card
          strong {
          display:
            block;

          font-size:
            13px;
        }

        .mwseo-status-card
          p {
          margin:
            5px 0 0;

          color:
            #7c8d97;

          font-size:
            10px;
        }

        .mwseo-console-grid {
          display:
            grid;

          grid-template-columns:
            repeat(
              2,
              1fr
            );

          gap:
            10px;

          margin-top:
            12px;
        }

        .mwseo-console-box {
          min-height:
            93px;

          padding:
            13px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.08
            );

          border-radius:
            8px;

          background:
            #081117;
        }

        .mwseo-console-box
          span {
          display:
            block;

          margin-bottom:
            8px;

          color:
            #71828c;

          font-size:
            8px;

          font-weight:
            900;

          letter-spacing:
            0.1em;
        }

        .mwseo-console-number {
          color:
            var(
              --mwseo-blue-light
            );

          font-size:
            28px;

          font-weight:
            900;
        }

        .mwseo-console-box:nth-child(2)
          .mwseo-console-number {
          color:
            var(
              --mwseo-orange-light
            );
        }

        .mwseo-console-tag {
          position:
            absolute;

          z-index:
            5;

          display:
            inline-flex;

          align-items:
            center;

          gap:
            7px;

          min-height:
            35px;

          padding:
            0 10px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.1
            );

          border-radius:
            7px;

          color:
            #dce7ec;

          background:
            rgba(
              3,
              8,
              11,
              0.92
            );

          font-size:
            9px;

          font-weight:
            900;

          letter-spacing:
            0.08em;
        }

        .mwseo-console-tag
          svg {
          width:
            15px;

          height:
            15px;

          color:
            var(
              --mwseo-blue-light
            );
        }

        .mwseo-console-tag.one {
          left:
            -1%;

          top:
            8%;
        }

        .mwseo-console-tag.two {
          right:
            -1%;

          bottom:
            9%;
        }

        .mwseo-console-tag.two
          svg {
          color:
            var(
              --mwseo-orange-light
            );
        }

        /* =====================================================
           SERVICES
        ===================================================== */

        .mwseo-services {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwseo-service-grid {
          display:
            grid;

          grid-template-columns:
            repeat(
              3,
              minmax(
                0,
                1fr
              )
            );

          gap:
            15px;
        }

        .mwseo-service-card {
          min-height:
            265px;

          padding:
            25px;

          border:
            1px solid
            var(
              --mwseo-border
            );

          border-radius:
            16px;

          background:
            linear-gradient(
              145deg,
              #0a1218,
              #04080b
            );

          transition:
            transform
              0.2s ease,
            border-color
              0.2s ease;
        }

        .mwseo-service-card:hover {
          transform:
            translateY(
              -5px
            );
        }

        .mwseo-service-card.blue:hover {
          border-color:
            rgba(
              8,
              185,
              244,
              0.35
            );
        }

        .mwseo-service-card.orange:hover {
          border-color:
            rgba(
              255,
              121,
              0,
              0.35
            );
        }

        .mwseo-service-icon {
          width:
            53px;

          height:
            53px;

          display:
            grid;

          place-items:
            center;

          margin-bottom:
            19px;

          border-radius:
            13px;
        }

        .mwseo-service-card.blue
          .mwseo-service-icon {
          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.3
            );

          color:
            var(
              --mwseo-blue-light
            );

          background:
            rgba(
              8,
              185,
              244,
              0.065
            );
        }

        .mwseo-service-card.orange
          .mwseo-service-icon {
          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.3
            );

          color:
            var(
              --mwseo-orange-light
            );

          background:
            rgba(
              255,
              121,
              0,
              0.06
            );
        }

        .mwseo-service-icon
          svg {
          width:
            27px;

          height:
            27px;
        }

        .mwseo-service-card
          h3 {
          margin:
            0 0 10px;

          font-size:
            19px;
        }

        .mwseo-service-card
          p {
          margin:
            0;

          color:
            var(
              --mwseo-muted
            );

          font-size:
            13px;

          line-height:
            1.68;
        }

        /* =====================================================
           INDEXING
        ===================================================== */

        .mwseo-indexing {
          background:
            radial-gradient(
              ellipse at
              82% 45%,
              rgba(
                255,
                121,
                0,
                0.05
              ),
              transparent
              31%
            ),
            #020304;
        }

        .mwseo-indexing-grid {
          display:
            grid;

          grid-template-columns:
            minmax(
              0,
              0.92fr
            )
            minmax(
              420px,
              1.08fr
            );

          gap:
            clamp(
              45px,
              7vw,
              100px
            );

          align-items:
            center;
        }

        .mwseo-indexing-copy
          h2 {
          margin:
            0 0 20px;

          font-size:
            clamp(
              40px,
              4.7vw,
              68px
            );

          line-height:
            1.02;

          letter-spacing:
            -0.05em;
        }

        .mwseo-indexing-copy
          p {
          margin:
            0 0 17px;

          color:
            var(
              --mwseo-muted
            );

          font-size:
            16px;

          line-height:
            1.8;
        }

        .mwseo-index-flow {
          display:
            grid;

          gap:
            11px;

          padding:
            28px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.21
            );

          border-radius:
            18px;

          background:
            linear-gradient(
              145deg,
              #09131a,
              #04080b
            );
        }

        .mwseo-index-step {
          display:
            grid;

          grid-template-columns:
            42px 1fr auto;

          align-items:
            center;

          gap:
            13px;

          min-height:
            67px;

          padding:
            11px 13px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.08
            );

          border-radius:
            9px;

          background:
            #081117;
        }

        .mwseo-index-step
          svg {
          width:
            22px;

          height:
            22px;

          color:
            var(
              --mwseo-blue-light
            );
        }

        .mwseo-index-step:nth-child(even)
          svg {
          color:
            var(
              --mwseo-orange-light
            );
        }

        .mwseo-index-step
          strong {
          display:
            block;

          font-size:
            13px;
        }

        .mwseo-index-step
          span {
          display:
            block;

          margin-top:
            4px;

          color:
            #74858f;

          font-size:
            10px;
        }

        .mwseo-step-arrow {
          color:
            var(
              --mwseo-orange
            );

          font-size:
            18px;
        }

        /* =====================================================
           PROBLEMS
        ===================================================== */

        .mwseo-problems {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwseo-problem-grid {
          display:
            grid;

          grid-template-columns:
            repeat(
              4,
              minmax(
                0,
                1fr
              )
            );

          gap:
            14px;
        }

        .mwseo-problem-card {
          min-height:
            235px;

          padding:
            23px;

          border:
            1px solid
            var(
              --mwseo-border
            );

          border-radius:
            14px;

          background:
            rgba(
              255,
              255,
              255,
              0.018
            );
        }

        .mwseo-problem-card
          svg {
          width:
            27px;

          height:
            27px;

          margin-bottom:
            16px;

          color:
            var(
              --mwseo-blue-light
            );
        }

        .mwseo-problem-card:nth-child(even)
          svg {
          color:
            var(
              --mwseo-orange-light
            );
        }

        .mwseo-problem-card
          h3 {
          margin:
            0 0 9px;

          font-size:
            16px;
        }

        .mwseo-problem-card
          p {
          margin:
            0;

          color:
            var(
              --mwseo-muted
            );

          font-size:
            12px;

          line-height:
            1.67;
        }

        /* =====================================================
           CONTENT STRUCTURE
        ===================================================== */

        .mwseo-content {
          background:
            #020304;
        }

        .mwseo-content-grid {
          display:
            grid;

          grid-template-columns:
            minmax(
              420px,
              1.05fr
            )
            minmax(
              0,
              0.95fr
            );

          align-items:
            center;

          gap:
            clamp(
              45px,
              7vw,
              100px
            );
        }

        .mwseo-site-tree {
          padding:
            28px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.21
            );

          border-radius:
            18px;

          background:
            linear-gradient(
              145deg,
              #09131a,
              #04080b
            );
        }

        .mwseo-tree-root {
          min-height:
            55px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          margin-bottom:
            16px;

          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.25
            );

          border-radius:
            9px;

          color:
            var(
              --mwseo-orange-light
            );

          background:
            rgba(
              255,
              121,
              0,
              0.045
            );

          font-size:
            12px;

          font-weight:
            900;
        }

        .mwseo-tree-grid {
          display:
            grid;

          grid-template-columns:
            repeat(
              2,
              1fr
            );

          gap:
            9px;
        }

        .mwseo-tree-item {
          min-height:
            55px;

          display:
            flex;

          align-items:
            center;

          gap:
            9px;

          padding:
            0 12px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.15
            );

          border-radius:
            8px;

          color:
            #c7d3d9;

          background:
            rgba(
              8,
              185,
              244,
              0.025
            );

          font-size:
            10px;

          font-weight:
            750;
        }

        .mwseo-tree-item
          svg {
          width:
            16px;

          height:
            16px;

          color:
            var(
              --mwseo-blue-light
            );
        }

        .mwseo-content-copy
          h2 {
          margin:
            0 0 20px;

          font-size:
            clamp(
              40px,
              4.7vw,
              68px
            );

          line-height:
            1.02;

          letter-spacing:
            -0.05em;
        }

        .mwseo-content-copy
          p {
          margin:
            0 0 17px;

          color:
            var(
              --mwseo-muted
            );

          font-size:
            16px;

          line-height:
            1.8;
        }

        /* =====================================================
           HONEST SEO
        ===================================================== */

        .mwseo-honest {
          padding:
            90px
            clamp(
              20px,
              5vw,
              80px
            );

          background:
            radial-gradient(
              ellipse at center,
              rgba(
                255,
                121,
                0,
                0.065
              ),
              transparent
              44%
            ),
            #020304;
        }

        .mwseo-honest-card {
          max-width:
            1120px;

          margin:
            0 auto;

          display:
            grid;

          grid-template-columns:
            auto 1fr;

          align-items:
            start;

          gap:
            24px;

          padding:
            clamp(
              32px,
              5vw,
              52px
            );

          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.22
            );

          border-radius:
            20px;

          background:
            radial-gradient(
              circle at
              88% 50%,
              rgba(
                255,
                121,
                0,
                0.08
              ),
              transparent
              28%
            ),
            linear-gradient(
              145deg,
              #08131a,
              #04080b
            );
        }

        .mwseo-honest-icon {
          width:
            70px;

          height:
            70px;

          display:
            grid;

          place-items:
            center;

          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.3
            );

          border-radius:
            17px;

          color:
            var(
              --mwseo-orange
            );

          background:
            rgba(
              255,
              121,
              0,
              0.055
            );
        }

        .mwseo-honest-icon
          svg {
          width:
            34px;

          height:
            34px;
        }

        .mwseo-honest-copy
          h2 {
          margin:
            0 0 10px;

          font-size:
            clamp(
              29px,
              3vw,
              43px
            );

          letter-spacing:
            -0.04em;
        }

        .mwseo-honest-copy
          p {
          margin:
            0 0 15px;

          color:
            var(
              --mwseo-muted
            );

          font-size:
            14px;

          line-height:
            1.72;
        }

        .mwseo-honest-points {
          display:
            grid;

          grid-template-columns:
            repeat(
              2,
              1fr
            );

          gap:
            8px 16px;

          margin-top:
            18px;
        }

        .mwseo-honest-point {
          display:
            flex;

          align-items:
            flex-start;

          gap:
            8px;

          color:
            #c5d0d6;

          font-size:
            11px;

          line-height:
            1.5;
        }

        .mwseo-honest-point
          svg {
          width:
            16px;

          height:
            16px;

          flex:
            0 0 auto;

          color:
            var(
              --mwseo-blue-light
            );
        }

        /* =====================================================
           PROCESS
        ===================================================== */

        .mwseo-process {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwseo-process-grid {
          display:
            grid;

          grid-template-columns:
            repeat(
              3,
              minmax(
                0,
                1fr
              )
            );

          gap:
            13px;
        }

        .mwseo-process-card {
          min-height:
            245px;

          padding:
            25px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.16
            );

          border-radius:
            14px;

          background:
            rgba(
              8,
              185,
              244,
              0.02
            );
        }

        .mwseo-process-card:nth-child(even) {
          border-color:
            rgba(
              255,
              121,
              0,
              0.16
            );

          background:
            rgba(
              255,
              121,
              0,
              0.018
            );
        }

        .mwseo-process-number {
          margin-bottom:
            17px;

          color:
            var(
              --mwseo-blue-light
            );

          font-size:
            11px;

          font-weight:
            950;

          letter-spacing:
            0.14em;
        }

        .mwseo-process-card:nth-child(even)
          .mwseo-process-number {
          color:
            var(
              --mwseo-orange-light
            );
        }

        .mwseo-process-card
          h3 {
          margin:
            0 0 10px;

          font-size:
            19px;
        }

        .mwseo-process-card
          p {
          margin:
            0;

          color:
            var(
              --mwseo-muted
            );

          font-size:
            13px;

          line-height:
            1.68;
        }

        /* =====================================================
           FAQ
        ===================================================== */

        .mwseo-faq {
          background:
            #020304;
        }

        .mwseo-faq-grid {
          display:
            grid;

          grid-template-columns:
            repeat(
              2,
              minmax(
                0,
                1fr
              )
            );

          gap:
            14px;
        }

        .mwseo-faq-card {
          padding:
            24px;

          border:
            1px solid
            var(
              --mwseo-border
            );

          border-radius:
            14px;

          background:
            linear-gradient(
              145deg,
              #0a1218,
              #04080b
            );
        }

        .mwseo-faq-card
          h3 {
          margin:
            0 0 10px;

          font-size:
            16px;
        }

        .mwseo-faq-card
          p {
          margin:
            0;

          color:
            var(
              --mwseo-muted
            );

          font-size:
            13px;

          line-height:
            1.7;
        }

        /* =====================================================
           FINAL
        ===================================================== */

        .mwseo-final {
          padding:
            95px
            clamp(
              20px,
              5vw,
              80px
            );

          background:
            radial-gradient(
              ellipse at
              20% 50%,
              rgba(
                8,
                185,
                244,
                0.1
              ),
              transparent
              32%
            ),
            radial-gradient(
              ellipse at
              80% 50%,
              rgba(
                255,
                121,
                0,
                0.075
              ),
              transparent
              32%
            ),
            #020304;
        }

        .mwseo-final-card {
          max-width:
            1100px;

          margin:
            0 auto;

          padding:
            clamp(
              42px,
              6vw,
              72px
            );

          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.24
            );

          border-radius:
            22px;

          text-align:
            center;

          background:
            linear-gradient(
              145deg,
              #09131a,
              #04080b
            );

          box-shadow:
            0 30px 80px
            rgba(
              0,
              0,
              0,
              0.34
            );
        }

        .mwseo-final-card
          > svg {
          width:
            42px;

          height:
            42px;

          margin-bottom:
            19px;

          color:
            var(
              --mwseo-orange
            );
        }

        .mwseo-final-card
          h2 {
          margin:
            0;

          font-size:
            clamp(
              38px,
              5vw,
              67px
            );

          line-height:
            1.03;

          letter-spacing:
            -0.05em;
        }

        .mwseo-final-card
          p {
          max-width:
            730px;

          margin:
            18px auto 0;

          color:
            var(
              --mwseo-muted
            );

          font-size:
            15px;

          line-height:
            1.75;
        }

        .mwseo-final-card
          .mwseo-button-row {
          justify-content:
            center;
        }

        .mwseo-related {
          display:
            flex;

          flex-wrap:
            wrap;

          justify-content:
            center;

          gap:
            10px 18px;

          margin-top:
            28px;
        }

        .mwseo-related
          a {
          color:
            #8fa0ab;

          text-decoration:
            none;

          font-size:
            11px;

          font-weight:
            700;
        }

        .mwseo-related
          a:hover {
          color:
            var(
              --mwseo-blue-light
            );
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (
          max-width:
          1100px
        ) {
          .mwseo-service-grid,
          .mwseo-process-grid {
            grid-template-columns:
              repeat(
                2,
                1fr
              );
          }

          .mwseo-problem-grid {
            grid-template-columns:
              repeat(
                2,
                1fr
              );
          }
        }

        @media (
          max-width:
          900px
        ) {
          .mwseo-hero-inner,
          .mwseo-indexing-grid,
          .mwseo-content-grid {
            grid-template-columns:
              1fr;
          }

          .mwseo-hero-inner {
            text-align:
              center;
          }

          .mwseo-hero-badge {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwseo-hero-copy
            > p {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwseo-button-row {
            justify-content:
              center;
          }

          .mwseo-console-stage {
            min-height:
              420px;
          }
        }

        @media (
          max-width:
          700px
        ) {
          .mwseo-section {
            padding:
              70px 16px;
          }

          .mwseo-hero {
            min-height:
              auto;
          }

          .mwseo-hero-inner {
            padding:
              70px 16px;
          }

          .mwseo-hero h1 {
            font-size:
              clamp(
                46px,
                14vw,
                67px
              );
          }

          .mwseo-service-grid,
          .mwseo-problem-grid,
          .mwseo-process-grid,
          .mwseo-faq-grid {
            grid-template-columns:
              1fr;
          }

          .mwseo-honest-card {
            grid-template-columns:
              1fr;

            text-align:
              center;
          }

          .mwseo-honest-icon {
            margin:
              0 auto;
          }

          .mwseo-honest-points {
            grid-template-columns:
              1fr;

            text-align:
              left;
          }
        }

        @media (
          max-width:
          500px
        ) {
          .mwseo-console-stage {
            min-height:
              355px;

            transform:
              scale(
                0.86
              );

            margin:
              -20px -25px;
          }

          .mwseo-tree-grid {
            grid-template-columns:
              1fr;
          }
        }
      `}</style>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        className="mwseo-hero"
        id="seo-and-indexing"
      >
        <div className="mwseo-hero-inner">
          <div className="mwseo-hero-copy">
            <div className="mwseo-hero-badge">
              <span />
              SEO &amp; Indexing • Available Now
            </div>

            <h1>
              <span>
                A Website Can Be
              </span>

              <span className="mwseo-blue">
                Online
              </span>

              <span>
                Without Being
              </span>

              <span className="mwseo-orange">
                Easy to Find.
              </span>
            </h1>

            <p>
              Matthew Web helps small businesses
              improve the technical and content
              foundation search engines use to
              discover, crawl, understand, and
              index website pages.
            </p>

            <div className="mwseo-button-row">
              <Link
                href="/contact-us"
                className="mwseo-btn mwseo-btn-blue"
              >
                Get SEO &amp; Indexing Help
                <ArrowRight />
              </Link>

              <Link
                href="/website-design"
                className="mwseo-btn mwseo-btn-dark"
              >
                Website Design
              </Link>
            </div>
          </div>

          <div
            className="mwseo-console-stage"
            aria-hidden="true"
          >
            <div className="mwseo-console-tag one">
              <SearchCheck />
              URL INSPECTION
            </div>

            <div className="mwseo-console-tag two">
              <Map />
              SITEMAP
            </div>

            <div className="mwseo-console">
              <div className="mwseo-console-top">
                <div className="mwseo-console-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <strong>
                  SEARCH VISIBILITY
                </strong>
              </div>

              <div className="mwseo-url-field">
                <Search />

                <div className="mwseo-url-line" />
              </div>

              <div className="mwseo-status-card">
                <div className="mwseo-status-check">
                  <CheckCircle2 />
                </div>

                <div>
                  <strong>
                    URL is discoverable
                  </strong>

                  <p>
                    Crawl • Inspect • Monitor
                  </p>
                </div>
              </div>

              <div className="mwseo-console-grid">
                <div className="mwseo-console-box">
                  <span>
                    INDEXED PAGES
                  </span>

                  <div className="mwseo-console-number">
                    42
                  </div>
                </div>

                <div className="mwseo-console-box">
                  <span>
                    NEEDS REVIEW
                  </span>

                  <div className="mwseo-console-number">
                    03
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          SERVICES
      ====================================================== */}

      <section
        className="mwseo-section mwseo-services"
        id="seo-services"
      >
        <div className="mwseo-container">
          <div className="mwseo-heading center">
            <div className="mwseo-kicker">
              <SearchCheck />
              Technical Search Foundation
            </div>

            <h2>
              Help Search Engines{" "}
              <span className="mwseo-blue">
                Understand the Site
              </span>
            </h2>

            <p>
              Good indexing work combines
              technical setup, useful content,
              clear site structure, and ongoing
              monitoring.
            </p>
          </div>

          <div className="mwseo-service-grid">
            {seoServices.map((service) => {
              const Icon =
                service.icon;

              return (
                <div
                  className={`mwseo-service-card ${service.accent}`}
                  key={service.title}
                >
                  <div className="mwseo-service-icon">
                    <Icon />
                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          INDEXING EXPLANATION
      ====================================================== */}

      <section
        className="mwseo-section mwseo-indexing"
        id="how-indexing-works"
      >
        <div className="mwseo-container">
          <div className="mwseo-indexing-grid">
            <div className="mwseo-indexing-copy">
              <div className="mwseo-kicker orange">
                <Workflow />
                Discovery to Search Results
              </div>

              <h2>
                Indexing Is a{" "}
                <span className="mwseo-orange">
                  Process.
                </span>
              </h2>

              <p>
                Publishing a page does not
                automatically mean it will
                immediately appear in search.
              </p>

              <p>
                Search engines first need to
                discover the URL, crawl the
                content, interpret the page and
                decide whether it belongs in the
                index.
              </p>

              <p>
                Even after a page is indexed,
                that does not mean it will rank
                first—or rank at all for every
                search. Indexing gives the page
                the opportunity to compete.
              </p>
            </div>

            <div
              className="mwseo-index-flow"
              aria-hidden="true"
            >
              <div className="mwseo-index-step">
                <Network />

                <div>
                  <strong>
                    Discover
                  </strong>

                  <span>
                    Links • Sitemap • URLs
                  </span>
                </div>

                <div className="mwseo-step-arrow">
                  ↓
                </div>
              </div>

              <div className="mwseo-index-step">
                <ServerCog />

                <div>
                  <strong>
                    Crawl
                  </strong>

                  <span>
                    Search engine visits page
                  </span>
                </div>

                <div className="mwseo-step-arrow">
                  ↓
                </div>
              </div>

              <div className="mwseo-index-step">
                <FileSearch />

                <div>
                  <strong>
                    Understand
                  </strong>

                  <span>
                    Content • Topic • Structure
                  </span>
                </div>

                <div className="mwseo-step-arrow">
                  ↓
                </div>
              </div>

              <div className="mwseo-index-step">
                <CheckCircle2 />

                <div>
                  <strong>
                    Index
                  </strong>

                  <span>
                    Eligible for search results
                  </span>
                </div>

                <div className="mwseo-step-arrow">
                  ↓
                </div>
              </div>

              <div className="mwseo-index-step">
                <BarChart3 />

                <div>
                  <strong>
                    Compete
                  </strong>

                  <span>
                    Relevance • Quality • Signals
                  </span>
                </div>

                <div className="mwseo-step-arrow">
                  ✓
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          COMMON PROBLEMS
      ====================================================== */}

      <section
        className="mwseo-section mwseo-problems"
        id="indexing-problems"
      >
        <div className="mwseo-container">
          <div className="mwseo-heading center">
            <div className="mwseo-kicker">
              <Wrench />
              Common Problems
            </div>

            <h2>
              Why Important Pages May{" "}
              <span className="mwseo-orange">
                Struggle to Appear
              </span>
            </h2>

            <p>
              Search visibility problems can
              come from technical issues, weak
              content, unclear structure, or a
              combination of several factors.
            </p>
          </div>

          <div className="mwseo-problem-grid">
            {indexingProblems.map(
              (problem) => {
                const Icon =
                  problem.icon;

                return (
                  <div
                    className="mwseo-problem-card"
                    key={problem.title}
                  >
                    <Icon />

                    <h3>
                      {problem.title}
                    </h3>

                    <p>
                      {problem.text}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* ======================================================
          CONTENT STRUCTURE
      ====================================================== */}

      <section
        className="mwseo-section mwseo-content"
        id="content-structure"
      >
        <div className="mwseo-container">
          <div className="mwseo-content-grid">
            <div
              className="mwseo-site-tree"
              aria-hidden="true"
            >
              <div className="mwseo-tree-root">
                BUSINESS WEBSITE
              </div>

              <div className="mwseo-tree-grid">
                <div className="mwseo-tree-item">
                  <Globe2 />
                  Home
                </div>

                <div className="mwseo-tree-item">
                  <FileText />
                  About
                </div>

                <div className="mwseo-tree-item">
                  <Target />
                  Main Service
                </div>

                <div className="mwseo-tree-item">
                  <Target />
                  Service Page
                </div>

                <div className="mwseo-tree-item">
                  <FileText />
                  Helpful Content
                </div>

                <div className="mwseo-tree-item">
                  <ShieldCheck />
                  Trust Information
                </div>

                <div className="mwseo-tree-item">
                  <BarChart3 />
                  Examples / Results
                </div>

                <div className="mwseo-tree-item">
                  <MousePointerPlaceholder />
                  Contact / Action
                </div>
              </div>
            </div>

            <div className="mwseo-content-copy">
              <div className="mwseo-kicker orange">
                <ListTree />
                Content Architecture
              </div>

              <h2>
                Search Engines Need{" "}
                <span className="mwseo-blue">
                  Context.
                </span>
              </h2>

              <p>
                A thin website with one short
                homepage gives both customers and
                search engines very little
                information.
              </p>

              <p>
                Dedicated service pages, clear
                business information, examples,
                FAQs, helpful articles, and
                strong internal links can create
                a much clearer picture of what
                the company actually does.
              </p>

              <p>
                The goal is not to create pages
                just to make the website larger.
                Each page should have a real
                purpose for the visitor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          HONEST EXPECTATIONS
      ====================================================== */}

      <section
        className="mwseo-honest"
        id="seo-expectations"
      >
        <div className="mwseo-honest-card">
          <div className="mwseo-honest-icon">
            <AlertTriangle />
          </div>

          <div className="mwseo-honest-copy">
            <h2>
              No Fake{" "}
              <span className="mwseo-orange">
                Ranking Promises.
              </span>
            </h2>

            <p>
              Technical SEO and indexing work
              can strengthen the foundation of a
              website, but nobody controls Google
              or Bing search results.
            </p>

            <p>
              Rankings can be affected by
              competition, relevance, location,
              content quality, links, reviews,
              authority, user intent, technical
              quality, time, and search-engine
              decisions.
            </p>

            <div className="mwseo-honest-points">
              <div className="mwseo-honest-point">
                <CheckCircle2 />
                Sitemap submission does not
                guarantee ranking.
              </div>

              <div className="mwseo-honest-point">
                <CheckCircle2 />
                Index requests do not guarantee
                immediate indexing.
              </div>

              <div className="mwseo-honest-point">
                <CheckCircle2 />
                New sites may require time to
                build visibility.
              </div>

              <div className="mwseo-honest-point">
                <CheckCircle2 />
                Useful content matters more than
                keyword stuffing.
              </div>

              <div className="mwseo-honest-point">
                <CheckCircle2 />
                Search work should be measured
                over time.
              </div>

              <div className="mwseo-honest-point">
                <CheckCircle2 />
                Improvements are based on
                evidence—not guarantees.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          PROCESS
      ====================================================== */}

      <section
        className="mwseo-section mwseo-process"
        id="seo-process"
      >
        <div className="mwseo-container">
          <div className="mwseo-heading center">
            <div className="mwseo-kicker">
              <MonitorCheck />
              SEO &amp; Indexing Process
            </div>

            <h2>
              Inspect. Improve.{" "}
              <span className="mwseo-blue">
                Monitor.
              </span>
            </h2>

            <p>
              Search work should be based on what
              the website and search tools
              actually show.
            </p>
          </div>

          <div className="mwseo-process-grid">
            {processSteps.map(
              (step) => (
                <div
                  className="mwseo-process-card"
                  key={step.number}
                >
                  <div className="mwseo-process-number">
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
        </div>
      </section>

      {/* ======================================================
          FAQ
      ====================================================== */}

      <section
        className="mwseo-section mwseo-faq"
        id="seo-faq"
      >
        <div className="mwseo-container">
          <div className="mwseo-heading">
            <div className="mwseo-kicker orange">
              <Sparkles />
              SEO &amp; Indexing FAQ
            </div>

            <h2>
              Common{" "}
              <span className="mwseo-orange">
                Questions
              </span>
            </h2>

            <p>
              Indexing, crawling, ranking, and
              SEO are related—but they are not
              all the same thing.
            </p>
          </div>

          <div className="mwseo-faq-grid">
            {faqs.map(
              (item) => (
                <div
                  className="mwseo-faq-card"
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
        </div>
      </section>

      {/* ======================================================
          FINAL CTA
      ====================================================== */}

      <section
        className="mwseo-final"
        id="seo-help"
      >
        <div className="mwseo-final-card">
          <Zap />

          <h2>
            Important Pages{" "}
            <span className="mwseo-orange">
              Not Showing Up?
            </span>
          </h2>

          <p>
            Matthew Web can review your website
            structure, sitemap, robots settings,
            metadata, internal links, Search
            Console information, Bing tools, and
            important page indexing status to
            determine what should be addressed.
          </p>

          <div className="mwseo-button-row">
            <Link
              href="/contact-us"
              className="mwseo-btn mwseo-btn-orange"
            >
              Request SEO &amp; Indexing Help
              <ArrowRight />
            </Link>

            <Link
              href="/services"
              className="mwseo-btn mwseo-btn-dark"
            >
              All Services
            </Link>
          </div>

          <nav className="mwseo-related">
            <Link href="/website-design">
              Website Design
            </Link>

            <Link href="/custom-software">
              Custom Software
            </Link>

            <Link href="/small-business-websites">
              Small Business Websites
            </Link>

            <Link href="/pricing">
              Pricing
            </Link>

            <Link href="/blog">
              Blog
            </Link>
          </nav>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

/*
IMPORTANT:
The component name below is only used as an icon placeholder
inside the coded site-tree visual above.
*/
function MousePointerPlaceholder() {
  return <Target />;
}
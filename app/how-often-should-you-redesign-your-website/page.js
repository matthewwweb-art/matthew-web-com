import Link from "next/link";

import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  Gauge,
  LayoutTemplate,
  MonitorSmartphone,
  RefreshCw,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
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
    "How Often Should You Redesign Your Website? | Matthew Web",

  description:
    "Learn when a business website should be redesigned based on mobile usability, performance, content accuracy, search structure, functionality, branding, customer needs, and business growth—not an arbitrary calendar.",

  alternates: {
    canonical:
      "https://matthew-web.com/how-often-should-you-redesign-your-website",
  },

  openGraph: {
    title:
      "How Often Should You Redesign Your Website? | Matthew Web",

    description:
      "A practical guide to deciding when a business website needs maintenance, optimization, targeted updates, or a complete redesign.",

    url:
      "https://matthew-web.com/how-often-should-you-redesign-your-website",

    siteName:
      "Matthew Web",

    type:
      "article",
  },
};

/* ============================================================
   REVIEW AREAS
============================================================ */

const reviewAreas = [
  {
    icon:
      MonitorSmartphone,

    title:
      "Mobile Usability",

    text:
      "Check whether navigation, forms, text, images, buttons, pricing layouts, and important customer actions still work well across current phone and tablet sizes.",
  },

  {
    icon:
      Gauge,

    title:
      "Performance",

    text:
      "Review loading behavior, scripts, images, animations, third-party tools, layout shifts, and interaction responsiveness as the website grows.",
  },

  {
    icon:
      SearchCheck,

    title:
      "Search Structure",

    text:
      "Review titles, descriptions, headings, canonicals, internal links, sitemap coverage, crawl controls, indexing behavior, and important public pages.",
  },

  {
    icon:
      Target,

    title:
      "Customer Journey",

    text:
      "Make sure visitors can still understand what the business does, find the right service, build confidence, and reach the correct next action.",
  },

  {
    icon:
      ShieldCheck,

    title:
      "Business Accuracy",

    text:
      "Remove outdated services, old prices, expired offers, incorrect contact information, unsupported claims, stale team information, or anything else that no longer represents the business.",
  },

  {
    icon:
      LayoutTemplate,

    title:
      "Business Fit",

    text:
      "Determine whether the website architecture still supports what the company needs today or whether new workflows, data, integrations, customer tools, or software requirements have outgrown it.",
  },
];

/* ============================================================
   LEVELS OF WORK
============================================================ */

const workLevels = [
  {
    level:
      "Level 1",

    title:
      "Routine Maintenance",

    examples:
      "Content corrections, image updates, small layout fixes, dependency maintenance, broken-link repairs, contact updates, and other normal upkeep.",

    useWhen:
      "The site still works well overall.",
  },

  {
    level:
      "Level 2",

    title:
      "Targeted Improvement",

    examples:
      "Improving several service pages, adjusting navigation, optimizing images, fixing mobile sections, strengthening CTAs, improving forms, or cleaning up search structure.",

    useWhen:
      "The basic architecture is sound but specific areas need meaningful improvement.",
  },

  {
    level:
      "Level 3",

    title:
      "Major Refresh",

    examples:
      "Significant visual modernization, new information architecture, rewritten major pages, better mobile behavior, stronger lead flows, and broader technical cleanup.",

    useWhen:
      "The website is still usable but many parts no longer match the business.",
  },

  {
    level:
      "Level 4",

    title:
      "Full Redesign / Rebuild",

    examples:
      "New architecture, major front-end replacement, platform change, URL restructuring, new software foundation, database integration, custom workflows, or substantial redevelopment.",

    useWhen:
      "The existing system has become a limitation rather than a useful foundation.",
  },
];

/* ============================================================
   REDESIGN TRIGGERS
============================================================ */

const redesignTriggers = [
  "The site is consistently difficult to use on mobile devices",
  "Important functionality repeatedly breaks",
  "The website is significantly slower or heavier than it needs to be",
  "Major services or products have changed",
  "The business model has changed",
  "The current platform blocks important new functionality",
  "The site structure makes important information difficult to find",
  "The branding no longer represents the company",
  "Lead and contact paths are confusing",
  "Search architecture has become disorganized",
  "Large amounts of outdated content have accumulated",
  "The company now needs databases, dashboards, portals, automation, or other custom software",
];

/* ============================================================
   DON'T REDESIGN JUST BECAUSE
============================================================ */

const badReasons = [
  {
    title:
      "The Website Had a Birthday",

    text:
      "Age can trigger a review, but age alone does not prove that the website is failing.",
  },

  {
    title:
      "A Competitor Changed Colors",

    text:
      "Competitor research can provide useful context, but copying a competitor's redesign is not a substitute for understanding your own customers and business needs.",
  },

  {
    title:
      "A New Design Trend Appeared",

    text:
      "Trends can inspire useful improvements, but a working business system should not be rebuilt every time the internet changes visual style.",
  },

  {
    title:
      "Someone Wants to Sell a Bigger Project",

    text:
      "The recommended scope should match the actual website problem rather than automatically maximizing the amount of work.",
  },
];

/* ============================================================
   REDESIGN PROCESS
============================================================ */

const redesignProcess = [
  {
    number:
      "01",

    title:
      "Audit the Existing Website",

    text:
      "Identify what works, what fails, what should be preserved, and what business problems actually need to be solved.",
  },

  {
    number:
      "02",

    title:
      "Inventory Important URLs",

    text:
      "Document valuable public pages before changing site structure so useful URLs and search equity are not accidentally discarded.",
  },

  {
    number:
      "03",

    title:
      "Define the New Requirements",

    text:
      "Decide what the redesigned site must accomplish for customers, marketing, search, lead generation, operations, and future growth.",
  },

  {
    number:
      "04",

    title:
      "Build the New Structure",

    text:
      "Create the page hierarchy, navigation, content architecture, mobile layouts, forms, functionality, and technical foundation around those requirements.",
  },

  {
    number:
      "05",

    title:
      "Protect Search & Customer Paths",

    text:
      "Handle redirects, metadata, canonicals, internal links, sitemap changes, forms, analytics, and other important systems carefully during migration.",
  },

  {
    number:
      "06",

    title:
      "Test After Launch",

    text:
      "Check important pages, devices, forms, redirects, indexing signals, analytics, performance, and customer actions after deployment.",
  },
];

/* ============================================================
   AUDIT CHECKLIST
============================================================ */

const auditChecklist = [
  "Homepage message still matches the business",
  "Services and products are accurate",
  "Phone and email information is correct",
  "Forms work correctly",
  "Navigation works on desktop and mobile",
  "Important pages load reasonably well",
  "Calls to action are clear",
  "Prices and offers are current where shown",
  "Project examples are legitimate and current",
  "Reviews or testimonials are verified",
  "Titles and descriptions are useful",
  "Canonical URLs are correct",
  "Sitemap includes intended public pages",
  "Private systems stay out of public search",
  "Broken links and retired routes are handled",
  "The site still supports planned business functionality",
];

/* ============================================================
   FAQ
============================================================ */

const faqs = [
  {
    q:
      "How often should a business redesign its website?",

    a:
      "There is no universal redesign interval. Businesses should review their websites regularly and redesign when usability, content, functionality, technology, search structure, branding, or business requirements justify the work.",
  },

  {
    q:
      "Is three years too old for a website?",

    a:
      "Not automatically. A three-year-old website may still be effective if it remains accurate, mobile-friendly, reliable, secure, searchable, fast enough, and capable of supporting the business.",
  },

  {
    q:
      "Should I redesign my website every year?",

    a:
      "Most businesses do not need a complete redesign every year. Regular maintenance and incremental improvements are often more practical unless major business or technical changes justify rebuilding.",
  },

  {
    q:
      "What is the difference between a website refresh and redesign?",

    a:
      "A refresh usually improves parts of the existing website while keeping much of the underlying architecture. A redesign or rebuild can involve larger structural, technical, content, navigation, platform, and functionality changes.",
  },

  {
    q:
      "Can redesigning a website hurt SEO?",

    a:
      "Yes, if important URLs disappear without redirects, useful content is lost, metadata or internal links are removed, crawl rules are misconfigured, or migration issues are not handled carefully. Search preservation should be part of the redesign plan.",
  },

  {
    q:
      "Can Matthew Web update a site without rebuilding everything?",

    a:
      "Yes. Depending on the existing website and project scope, work may involve targeted repairs, content updates, performance improvements, page redesigns, search cleanup, or a larger rebuild.",
  },
];

/* ============================================================
   RELATED ARTICLES
============================================================ */

const relatedArticles = [
  {
    title:
      "7 Signs You Need a New Website for Your Business",

    href:
      "/7-signs-you-need-a-new-website-for-your-business",

    text:
      "Use specific usability, performance, functionality, content, and business signals to determine whether a rebuild may be justified.",
  },

  {
    title:
      "Why Fast Website Load Speed Helps Leads, SEO, and Trust",

    href:
      "/why-fast-website-load-speed-helps-leads-seo-and-trust",

    text:
      "Learn when a performance problem may need optimization rather than an entire redesign.",
  },

  {
    title:
      "Raw Code vs WordPress vs Wix vs GoDaddy",

    href:
      "/raw-code-vs-wordpress-vs-wix-vs-godaddy",

    text:
      "Compare different website architectures when a redesign also raises the question of whether the current platform is still the right fit.",
  },
];

/* ============================================================
   STRUCTURED DATA
============================================================ */

const articleSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "Article",

  headline:
    "How Often Should You Redesign Your Website?",

  description:
    "A practical guide to deciding when a business website needs maintenance, targeted improvements, a major refresh, or a complete redesign.",

  mainEntityOfPage: {
    "@type":
      "WebPage",

    "@id":
      "https://matthew-web.com/how-often-should-you-redesign-your-website",
  },

  author: {
    "@type":
      "Person",

    name:
      "Adam Matthew Charest",
  },

  publisher: {
    "@type":
      "Organization",

    name:
      "Matthew Web",

    url:
      "https://matthew-web.com",
  },

  dateModified:
    "2026-09-09",
};

const breadcrumbSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "BreadcrumbList",

  itemListElement: [
    {
      "@type":
        "ListItem",

      position:
        1,

      name:
        "Home",

      item:
        "https://matthew-web.com",
    },

    {
      "@type":
        "ListItem",

      position:
        2,

      name:
        "Blog",

      item:
        "https://matthew-web.com/blog",
    },

    {
      "@type":
        "ListItem",

      position:
        3,

      name:
        "How Often Should You Redesign Your Website?",

      item:
        "https://matthew-web.com/how-often-should-you-redesign-your-website",
    },
  ],
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

export default function WebsiteRedesignTimingArticlePage() {
  return (
    <main className="mwtime-page">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(faqSchema),
        }}
      />

      <style>{`
        :root {
          --mwtime-black: #020304;
          --mwtime-muted: #aebbc5;
          --mwtime-blue: #08b9f4;
          --mwtime-blue-light: #38d7ff;
          --mwtime-orange: #ff7900;
          --mwtime-orange-light: #ffab31;
          --mwtime-green: #35e07e;
          --mwtime-border: rgba(255,255,255,.09);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--mwtime-black);
        }

        .mwtime-page {
          min-height: 100vh;
          overflow: hidden;
          color: #fff;
          background: var(--mwtime-black);
        }

        .mwtime-blue {
          color: var(--mwtime-blue-light);
        }

        .mwtime-orange {
          color: var(--mwtime-orange);
        }

        /* =====================================================
           BREADCRUMBS
        ===================================================== */

        .mwtime-breadcrumb-wrap {
          border-bottom: 1px solid rgba(255,255,255,.06);
          background: #04080b;
        }

        .mwtime-breadcrumbs {
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

        .mwtime-breadcrumbs a {
          color: #8799a3;
          text-decoration: none;
        }

        .mwtime-breadcrumbs a:hover {
          color: var(--mwtime-blue-light);
        }

        .mwtime-breadcrumbs svg {
          width: 12px;
          height: 12px;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwtime-hero {
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

        .mwtime-hero::before {
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

        .mwtime-hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1380px;
          margin: 0 auto;

          display: grid;

          grid-template-columns:
            minmax(0,1.06fr)
            minmax(390px,.94fr);

          align-items: center;

          gap: clamp(45px,6vw,90px);

          padding:
            100px
            clamp(20px,5vw,80px)
            105px;
        }

        .mwtime-label {
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

        .mwtime-label svg {
          width: 16px;
          height: 16px;
        }

        .mwtime-hero h1 {
          max-width: 980px;
          margin: 0;

          font-size:
            clamp(48px,5.6vw,84px);

          line-height: .99;
          letter-spacing: -.06em;
        }

        .mwtime-description {
          max-width: 810px;
          margin: 25px 0 0;

          color: #b8c6cf;

          font-size:
            clamp(16px,1.4vw,20px);

          line-height: 1.75;
        }

        .mwtime-meta {
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
           HERO VISUAL
        ===================================================== */

        .mwtime-stage {
          min-height: 470px;
          display: grid;
          place-items: center;
        }

        .mwtime-console {
          width: min(100%,520px);
          padding: 24px;

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

          box-shadow:
            0 30px 70px rgba(0,0,0,.45);
        }

        .mwtime-console-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .mwtime-console-top strong {
          color: #81929d;
          font-size: 9px;
          letter-spacing: .12em;
        }

        .mwtime-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #8da0aa;
          font-size: 8px;
          font-weight: 900;
        }

        .mwtime-status::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--mwtime-green);
          box-shadow: 0 0 7px rgba(53,224,126,.7);
        }

        .mwtime-main-card {
          padding: 20px;

          border: 1px solid rgba(255,121,0,.17);
          border-radius: 12px;

          background: #071015;
        }

        .mwtime-main-card span {
          color: #657984;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: .09em;
          text-transform: uppercase;
        }

        .mwtime-main-title {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 10px;

          color: var(--mwtime-orange-light);

          font-size: 15px;
          font-weight: 900;
        }

        .mwtime-main-title svg {
          width: 23px;
          height: 23px;
        }

        .mwtime-main-card p {
          margin: 10px 0 0;
          color: #788b95;
          font-size: 9px;
          line-height: 1.6;
        }

        .mwtime-signal-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 9px;
          margin-top: 10px;
        }

        .mwtime-signal-card {
          min-height: 95px;
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

        .mwtime-signal-card:nth-child(even) {
          border-color: rgba(255,121,0,.14);
        }

        .mwtime-signal-card svg {
          width: 22px;
          height: 22px;
          color: var(--mwtime-blue-light);
        }

        .mwtime-signal-card:nth-child(even) svg {
          color: var(--mwtime-orange-light);
        }

        .mwtime-signal-card strong {
          font-size: 8px;
          letter-spacing: .05em;
        }

        /* =====================================================
           ARTICLE
        ===================================================== */

        .mwtime-article-section {
          padding:
            95px
            clamp(20px,5vw,80px)
            110px;

          background: #020304;
        }

        .mwtime-layout {
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

        .mwtime-toc {
          position: sticky;
          top: 30px;

          padding: 23px;

          border: 1px solid var(--mwtime-border);
          border-radius: 14px;

          background:
            linear-gradient(
              145deg,
              #09131a,
              #04080b
            );
        }

        .mwtime-toc-title {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 15px;

          font-size: 10px;
          font-weight: 900;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .mwtime-toc-title svg {
          width: 16px;
          height: 16px;
          color: var(--mwtime-blue-light);
        }

        .mwtime-toc a {
          display: block;
          padding: 8px 0;
          color: #8799a3;
          text-decoration: none;
          font-size: 12px;
          line-height: 1.45;
        }

        .mwtime-toc a:hover {
          color: var(--mwtime-blue-light);
        }

        .mwtime-toc-cta {
          margin-top: 18px;
          padding-top: 17px;
          border-top: 1px solid rgba(255,255,255,.07);
        }

        .mwtime-toc-cta a {
          color: var(--mwtime-orange-light);
          font-weight: 850;
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .mwtime-content {
          min-width: 0;
        }

        .mwtime-section {
          margin-bottom: 62px;
          scroll-margin-top: 35px;
        }

        .mwtime-section h2 {
          margin: 0 0 20px;

          font-size:
            clamp(30px,3.5vw,48px);

          line-height: 1.08;
          letter-spacing: -.045em;
        }

        .mwtime-section h3 {
          margin: 32px 0 12px;
          color: var(--mwtime-blue-light);
          font-size: 21px;
          line-height: 1.3;
        }

        .mwtime-section p {
          margin: 0 0 19px;
          color: #b6c3ca;
          font-size: 16px;
          line-height: 1.85;
        }

        .mwtime-section strong {
          color: #fff;
        }

        /* =====================================================
           ANSWER
        ===================================================== */

        .mwtime-answer {
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

        .mwtime-answer-label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;

          color: var(--mwtime-blue-light);

          font-size: 9px;
          font-weight: 950;
          letter-spacing: .11em;
          text-transform: uppercase;
        }

        .mwtime-answer-label svg {
          width: 17px;
          height: 17px;
        }

        .mwtime-answer h2 {
          margin: 0 0 12px;
          font-size: clamp(24px,3vw,36px);
          line-height: 1.1;
        }

        .mwtime-answer p {
          margin: 0;
          color: #b7c5cc;
          font-size: 15px;
          line-height: 1.75;
        }

        /* =====================================================
           REVIEW AREAS
        ===================================================== */

        .mwtime-review-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 14px;
          margin-top: 27px;
        }

        .mwtime-review-card {
          min-height: 245px;
          padding: 23px;

          border: 1px solid rgba(8,185,244,.14);
          border-radius: 14px;

          background: rgba(8,185,244,.018);
        }

        .mwtime-review-card:nth-child(even) {
          border-color: rgba(255,121,0,.14);
          background: rgba(255,121,0,.016);
        }

        .mwtime-review-card svg {
          width: 30px;
          height: 30px;
          margin-bottom: 16px;
          color: var(--mwtime-blue-light);
        }

        .mwtime-review-card:nth-child(even) svg {
          color: var(--mwtime-orange-light);
        }

        .mwtime-review-card h3 {
          margin: 0 0 10px;
          color: #fff;
          font-size: 18px;
        }

        .mwtime-review-card p {
          margin: 0;
          color: var(--mwtime-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           WORK LEVELS
        ===================================================== */

        .mwtime-level-grid {
          display: grid;
          gap: 13px;
          margin-top: 28px;
        }

        .mwtime-level-card {
          display: grid;
          grid-template-columns: 110px 1fr;
          gap: 22px;
          padding: 24px;

          border: 1px solid rgba(8,185,244,.14);
          border-radius: 14px;

          background: #071015;
        }

        .mwtime-level-card:nth-child(even) {
          border-color: rgba(255,121,0,.14);
        }

        .mwtime-level-badge {
          min-height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 15px;

          border: 1px solid rgba(8,185,244,.2);
          border-radius: 12px;

          color: var(--mwtime-blue-light);
          background: rgba(8,185,244,.04);

          text-align: center;
          font-size: 11px;
          font-weight: 950;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .mwtime-level-card:nth-child(even)
          .mwtime-level-badge {
          border-color: rgba(255,121,0,.22);
          color: var(--mwtime-orange-light);
          background: rgba(255,121,0,.035);
        }

        .mwtime-level-card h3 {
          margin: 0 0 9px;
          color: #fff;
          font-size: 20px;
        }

        .mwtime-level-card p {
          margin: 0 0 11px;
          color: var(--mwtime-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        .mwtime-use {
          padding: 11px 13px;
          border-left: 2px solid var(--mwtime-blue);
          color: #c9d5db;
          background: rgba(8,185,244,.035);
          font-size: 12px;
          line-height: 1.6;
        }

        .mwtime-level-card:nth-child(even)
          .mwtime-use {
          border-left-color: var(--mwtime-orange);
          background: rgba(255,121,0,.03);
        }

        /* =====================================================
           CHECKLIST
        ===================================================== */

        .mwtime-checklist {
          display: grid;
          gap: 10px;
          margin: 25px 0;
          padding: 0;
          list-style: none;
        }

        .mwtime-checklist li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 13px 15px;

          border: 1px solid rgba(255,255,255,.07);
          border-radius: 9px;

          color: #c0ccd2;
          background: rgba(255,255,255,.015);

          font-size: 13px;
          line-height: 1.55;
        }

        .mwtime-checklist svg {
          width: 17px;
          height: 17px;
          flex: 0 0 auto;
          margin-top: 1px;
          color: var(--mwtime-blue-light);
        }

        /* =====================================================
           BAD REASONS
        ===================================================== */

        .mwtime-bad-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 12px;
          margin-top: 27px;
        }

        .mwtime-bad-card {
          padding: 23px;

          border: 1px solid rgba(255,121,0,.14);
          border-radius: 13px;

          background: rgba(255,121,0,.015);
        }

        .mwtime-bad-card:nth-child(even) {
          border-color: rgba(8,185,244,.14);
          background: rgba(8,185,244,.015);
        }

        .mwtime-bad-card h3 {
          margin: 0 0 9px;
          color: var(--mwtime-orange-light);
          font-size: 18px;
        }

        .mwtime-bad-card:nth-child(even) h3 {
          color: var(--mwtime-blue-light);
        }

        .mwtime-bad-card p {
          margin: 0;
          color: var(--mwtime-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           PROCESS
        ===================================================== */

        .mwtime-process-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 12px;
          margin-top: 28px;
        }

        .mwtime-process-card {
          min-height: 225px;
          padding: 22px;

          border: 1px solid rgba(8,185,244,.14);
          border-radius: 13px;

          background: #071015;
        }

        .mwtime-process-card:nth-child(even) {
          border-color: rgba(255,121,0,.14);
        }

        .mwtime-process-number {
          margin-bottom: 14px;
          color: var(--mwtime-blue-light);
          font-size: 9px;
          font-weight: 950;
          letter-spacing: .1em;
        }

        .mwtime-process-card:nth-child(even)
          .mwtime-process-number {
          color: var(--mwtime-orange-light);
        }

        .mwtime-process-card h3 {
          margin: 0 0 9px;
          color: #fff;
          font-size: 18px;
        }

        .mwtime-process-card p {
          margin: 0;
          color: var(--mwtime-muted);
          font-size: 12px;
          line-height: 1.66;
        }

        /* =====================================================
           CALLOUT
        ===================================================== */

        .mwtime-callout {
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

        .mwtime-callout-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          margin-bottom: 15px;

          border: 1px solid rgba(255,121,0,.25);
          border-radius: 12px;

          color: var(--mwtime-orange-light);
          background: rgba(255,121,0,.045);
        }

        .mwtime-callout-icon svg {
          width: 24px;
          height: 24px;
        }

        .mwtime-callout h3 {
          margin: 0 0 10px;
          color: #fff;
          font-size: 22px;
        }

        .mwtime-callout p {
          margin: 0;
          color: var(--mwtime-muted);
          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           FAQ
        ===================================================== */

        .mwtime-faq-grid {
          display: grid;
          gap: 12px;
          margin-top: 27px;
        }

        .mwtime-faq-card {
          padding: 23px;

          border: 1px solid var(--mwtime-border);
          border-radius: 13px;

          background: #071015;
        }

        .mwtime-faq-card h3 {
          margin: 0 0 9px;
          color: var(--mwtime-blue-light);
          font-size: 17px;
        }

        .mwtime-faq-card:nth-child(even) h3 {
          color: var(--mwtime-orange-light);
        }

        .mwtime-faq-card p {
          margin: 0;
          color: var(--mwtime-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .mwtime-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 25px;
        }

        .mwtime-btn {
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

        .mwtime-btn:hover {
          transform: translateY(-2px);
        }

        .mwtime-btn-blue {
          border: 1px solid rgba(56,215,255,.5);

          background:
            linear-gradient(
              180deg,
              #0ab6ed,
              #0789b6
            );
        }

        .mwtime-btn-orange {
          border: 1px solid rgba(255,176,49,.55);

          background:
            linear-gradient(
              180deg,
              #ff9519,
              #f16600
            );
        }

        .mwtime-btn-dark {
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.03);
        }

        .mwtime-btn svg {
          width: 17px;
          height: 17px;
        }

        /* =====================================================
           FINAL CTA
        ===================================================== */

        .mwtime-article-cta {
          margin-top: 65px;

          padding:
            clamp(35px,5vw,55px);

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

        .mwtime-article-cta h2 {
          max-width: 820px;
          margin: 0;

          font-size:
            clamp(31px,4vw,49px);

          line-height: 1.05;
          letter-spacing: -.045em;
        }

        .mwtime-article-cta p {
          max-width: 790px;
          margin: 17px 0 0;
          color: var(--mwtime-muted);
          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           RELATED
        ===================================================== */

        .mwtime-related-section {
          padding:
            90px
            clamp(20px,5vw,80px);

          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwtime-related-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        .mwtime-related-title {
          margin-bottom: 32px;
        }

        .mwtime-related-title span {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 9px;

          color: var(--mwtime-orange-light);

          font-size: 9px;
          font-weight: 900;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .mwtime-related-title svg {
          width: 16px;
          height: 16px;
        }

        .mwtime-related-title h2 {
          margin: 0;
          font-size: clamp(31px,4vw,49px);
          letter-spacing: -.045em;
        }

        .mwtime-related-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 14px;
        }

        .mwtime-related-card {
          min-height: 245px;
          display: flex;
          flex-direction: column;
          padding: 24px;

          border: 1px solid var(--mwtime-border);
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

        .mwtime-related-card:hover {
          transform: translateY(-4px);
          border-color: rgba(8,185,244,.3);
        }

        .mwtime-related-card:nth-child(even):hover {
          border-color: rgba(255,121,0,.3);
        }

        .mwtime-related-card h3 {
          margin: 0;
          font-size: 18px;
          line-height: 1.3;
        }

        .mwtime-related-card p {
          margin: 13px 0 0;
          color: var(--mwtime-muted);
          font-size: 12px;
          line-height: 1.65;
        }

        .mwtime-related-link {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: auto;
          padding-top: 21px;

          color: var(--mwtime-blue-light);

          font-size: 11px;
          font-weight: 850;
        }

        .mwtime-related-card:nth-child(even)
          .mwtime-related-link {
          color: var(--mwtime-orange-light);
        }

        .mwtime-related-link svg {
          width: 15px;
          height: 15px;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1100px) {
          .mwtime-process-grid {
            grid-template-columns: repeat(2,1fr);
          }
        }

        @media (max-width: 1050px) {
          .mwtime-hero-inner {
            grid-template-columns: 1fr;
          }

          .mwtime-hero-copy {
            text-align: center;
          }

          .mwtime-label {
            margin-left: auto;
            margin-right: auto;
          }

          .mwtime-description {
            margin-left: auto;
            margin-right: auto;
          }

          .mwtime-meta {
            justify-content: center;
          }

          .mwtime-related-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .mwtime-related-card:last-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 850px) {
          .mwtime-layout {
            grid-template-columns: 1fr;
          }

          .mwtime-toc {
            position: static;
            display: grid;
            grid-template-columns: repeat(2,1fr);
            gap: 0 20px;
          }

          .mwtime-toc-title,
          .mwtime-toc-cta {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 700px) {
          .mwtime-hero-inner {
            padding: 70px 16px;
          }

          .mwtime-hero h1 {
            font-size: clamp(43px,13vw,65px);
          }

          .mwtime-article-section {
            padding: 70px 16px 85px;
          }

          .mwtime-review-grid,
          .mwtime-bad-grid,
          .mwtime-process-grid,
          .mwtime-related-grid {
            grid-template-columns: 1fr;
          }

          .mwtime-related-card:last-child {
            grid-column: auto;
          }

          .mwtime-related-section {
            padding: 70px 16px;
          }
        }

        @media (max-width: 600px) {
          .mwtime-level-card {
            grid-template-columns: 1fr;
          }

          .mwtime-level-badge {
            min-height: 54px;
            width: fit-content;
          }
        }

        @media (max-width: 500px) {
          .mwtime-stage {
            min-height: 450px;
            transform: scale(.9);
            margin: -10px -20px;
          }

          .mwtime-signal-grid {
            grid-template-columns: 1fr;
          }

          .mwtime-toc {
            grid-template-columns: 1fr;
          }

          .mwtime-toc-title,
          .mwtime-toc-cta {
            grid-column: auto;
          }

          .mwtime-section p {
            font-size: 15px;
          }
        }
      `}</style>

      {/* ======================================================
          BREADCRUMBS
      ====================================================== */}

      <div className="mwtime-breadcrumb-wrap">
        <nav
          className="mwtime-breadcrumbs"
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
            How Often Should You Redesign Your Website?
          </span>
        </nav>
      </div>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="mwtime-hero">
        <div className="mwtime-hero-inner">
          <div className="mwtime-hero-copy">
            <div className="mwtime-label">
              <BookOpen />
              Website & Business Education
            </div>

            <h1>
              How Often Should You{" "}
              <span className="mwtime-blue">
                Redesign
              </span>{" "}
              Your{" "}
              <span className="mwtime-orange">
                Website?
              </span>
            </h1>

            <p className="mwtime-description">
              There is no expiration date stamped
              on a website. Review it regularly,
              maintain what still works, improve
              what can be improved, and rebuild
              when the evidence shows the current
              system no longer serves the
              business well.
            </p>

            <div className="mwtime-meta">
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
            className="mwtime-stage"
            aria-hidden="true"
          >
            <div className="mwtime-console">
              <div className="mwtime-console-top">
                <strong>
                  WEBSITE // LIFECYCLE REVIEW
                </strong>

                <span className="mwtime-status">
                  MONITOR
                </span>
              </div>

              <div className="mwtime-main-card">
                <span>
                  REDESIGN TIMING
                </span>

                <div className="mwtime-main-title">
                  <CalendarClock />
                  Evidence Beats an Arbitrary Date
                </div>

                <p>
                  Maintain → Measure → Improve →
                  Review → Redesign When Justified
                </p>
              </div>

              <div className="mwtime-signal-grid">
                <div className="mwtime-signal-card">
                  <MonitorSmartphone />
                  <strong>
                    MOBILE
                  </strong>
                </div>

                <div className="mwtime-signal-card">
                  <Gauge />
                  <strong>
                    PERFORMANCE
                  </strong>
                </div>

                <div className="mwtime-signal-card">
                  <Target />
                  <strong>
                    BUSINESS
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

      <article className="mwtime-article-section">
        <div className="mwtime-layout">
          {/* ==================================================
              TABLE OF CONTENTS
          ================================================== */}

          <aside className="mwtime-toc">
            <div className="mwtime-toc-title">
              <BookOpen />
              In This Article
            </div>

            <a href="#short-answer">
              Short Answer
            </a>

            <a href="#calendar">
              Is There a Set Schedule?
            </a>

            <a href="#review">
              What to Review
            </a>

            <a href="#levels">
              Maintenance vs Redesign
            </a>

            <a href="#triggers">
              Redesign Triggers
            </a>

            <a href="#bad-reasons">
              Bad Reasons to Rebuild
            </a>

            <a href="#audit">
              Website Audit
            </a>

            <a href="#seo">
              Protect SEO
            </a>

            <a href="#process">
              Redesign Process
            </a>

            <a href="#faq">
              FAQs
            </a>

            <div className="mwtime-toc-cta">
              <Link href="/website-design">
                Website Design Services →
              </Link>
            </div>
          </aside>

          <div className="mwtime-content">
            {/* =================================================
                SHORT ANSWER
            ================================================= */}

            <section
              className="mwtime-answer"
              id="short-answer"
            >
              <div className="mwtime-answer-label">
                <Zap />
                Short Answer
              </div>

              <h2>
                How Often Should a Website Be
                Redesigned?
              </h2>

              <p>
                <strong>
                  There is no universal number of
                  years after which a website
                  automatically needs to be
                  redesigned.
                </strong>{" "}
                Review the site regularly and
                consider a major redesign when
                widespread problems with
                usability, performance, content,
                search structure, branding,
                functionality, or changing
                business requirements make the
                existing system difficult to
                maintain or expand.
              </p>
            </section>

            {/* =================================================
                CALENDAR
            ================================================= */}

            <section
              className="mwtime-section"
              id="calendar"
            >
              <h2>
                A Website Does Not Have a{" "}
                <span className="mwtime-orange">
                  Fixed Expiration Date
                </span>
              </h2>

              <p>
                You may hear rules such as
                “redesign every two years” or
                “replace the website every three
                years.”
              </p>

              <p>
                Those numbers can be useful as a
                reminder to review the site, but
                they are not a diagnosis.
              </p>

              <p>
                A website could be relatively new
                and already have serious
                usability or technical problems.
              </p>

              <p>
                Another website could be several
                years old and still provide a
                strong customer experience,
                accurate information, reliable
                functionality, and a sound
                technical foundation.
              </p>

              <div className="mwtime-callout">
                <div className="mwtime-callout-icon">
                  <RefreshCw />
                </div>

                <h3>
                  Review Regularly. Rebuild When
                  Necessary.
                </h3>

                <p>
                  Continuous maintenance and
                  smaller improvements can extend
                  the useful life of a website
                  significantly. A full redesign
                  should solve problems that
                  smaller changes cannot
                  reasonably solve.
                </p>
              </div>
            </section>

            {/* =================================================
                REVIEW
            ================================================= */}

            <section
              className="mwtime-section"
              id="review"
            >
              <h2>
                What Should You{" "}
                <span className="mwtime-blue">
                  Review?
                </span>
              </h2>

              <p>
                Instead of asking only how old
                the website is, inspect the areas
                that determine whether it is
                still useful.
              </p>

              <div className="mwtime-review-grid">
                {reviewAreas.map(
                  (item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        className="mwtime-review-card"
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
                LEVELS
            ================================================= */}

            <section
              className="mwtime-section"
              id="levels"
            >
              <h2>
                Not Every Improvement Requires a{" "}
                <span className="mwtime-orange">
                  Full Rebuild
                </span>
              </h2>

              <p>
                Website work can happen at
                several levels.
              </p>

              <div className="mwtime-level-grid">
                {workLevels.map(
                  (item) => (
                    <div
                      className="mwtime-level-card"
                      key={item.level}
                    >
                      <div className="mwtime-level-badge">
                        {item.level}
                      </div>

                      <div>
                        <h3>
                          {item.title}
                        </h3>

                        <p>
                          {item.examples}
                        </p>

                        <div className="mwtime-use">
                          <strong>
                            Use when:
                          </strong>{" "}
                          {item.useWhen}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="mwtime-callout">
                <div className="mwtime-callout-icon">
                  <Wrench />
                </div>

                <h3>
                  Fix the Problem at the Right
                  Level
                </h3>

                <p>
                  A broken button does not
                  justify a complete redesign. A
                  platform that can no longer
                  support the company&apos;s core
                  workflows may.
                </p>
              </div>
            </section>

            {/* =================================================
                TRIGGERS
            ================================================= */}

            <section
              className="mwtime-section"
              id="triggers"
            >
              <h2>
                Stronger Reasons to Consider a{" "}
                <span className="mwtime-blue">
                  Redesign
                </span>
              </h2>

              <ul className="mwtime-checklist">
                {redesignTriggers.map(
                  (item) => (
                    <li key={item}>
                      <CheckCircle2 />
                      {item}
                    </li>
                  )
                )}
              </ul>

              <p>
                One item on this list may be
                repairable.
              </p>

              <p>
                When several occur together, the
                case for a larger redesign
                becomes stronger.
              </p>

              <div className="mwtime-buttons">
                <Link
                  href="/7-signs-you-need-a-new-website-for-your-business"
                  className="mwtime-btn mwtime-btn-blue"
                >
                  Read the 7 Warning Signs
                  <ArrowRight />
                </Link>
              </div>
            </section>

            {/* =================================================
                BAD REASONS
            ================================================= */}

            <section
              className="mwtime-section"
              id="bad-reasons"
            >
              <h2>
                Reasons That{" "}
                <span className="mwtime-orange">
                  Do Not Automatically Justify
                </span>{" "}
                a Redesign
              </h2>

              <div className="mwtime-bad-grid">
                {badReasons.map(
                  (item) => (
                    <div
                      className="mwtime-bad-card"
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

              <div className="mwtime-callout">
                <div className="mwtime-callout-icon">
                  <AlertTriangle />
                </div>

                <h3>
                  Do Not Turn Redesigns Into
                  Scheduled Waste
                </h3>

                <p>
                  The business should not throw
                  away a useful system merely
                  because an arbitrary date
                  arrived. Spend development time
                  where it solves an actual
                  problem or creates meaningful
                  new capability.
                </p>
              </div>
            </section>

            {/* =================================================
                AUDIT
            ================================================= */}

            <section
              className="mwtime-section"
              id="audit"
            >
              <h2>
                Run a{" "}
                <span className="mwtime-blue">
                  Website Health Check
                </span>
              </h2>

              <p>
                A periodic review helps identify
                problems before they accumulate
                into a full rebuild.
              </p>

              <ul className="mwtime-checklist">
                {auditChecklist.map(
                  (item) => (
                    <li key={item}>
                      <CheckCircle2 />
                      {item}
                    </li>
                  )
                )}
              </ul>

              <p>
                The result should lead to one of
                several decisions:
              </p>

              <p>
                <strong>
                  Leave it alone → maintain it →
                  improve specific areas → major
                  refresh → rebuild.
                </strong>
              </p>
            </section>

            {/* =================================================
                SEO
            ================================================= */}

            <section
              className="mwtime-section"
              id="seo"
            >
              <h2>
                A Redesign Must Protect{" "}
                <span className="mwtime-orange">
                  Existing Search Value
                </span>
              </h2>

              <p>
                Redesigning can change URLs,
                navigation, content, headings,
                internal links, metadata,
                canonicals, schema, sitemap
                entries, redirects, and crawl
                rules.
              </p>

              <p>
                That means the redesign plan
                should include the website&apos;s
                existing search structure rather
                than treating SEO as something to
                fix after launch.
              </p>

              <ul className="mwtime-checklist">
                <li>
                  <SearchCheck />
                  Inventory important existing
                  URLs
                </li>

                <li>
                  <SearchCheck />
                  Preserve useful content where
                  appropriate
                </li>

                <li>
                  <SearchCheck />
                  Map retired pages to relevant
                  replacements
                </li>

                <li>
                  <SearchCheck />
                  Add proper redirects where
                  necessary
                </li>

                <li>
                  <SearchCheck />
                  Recheck canonicals
                </li>

                <li>
                  <SearchCheck />
                  Recheck titles and descriptions
                </li>

                <li>
                  <SearchCheck />
                  Update the sitemap
                </li>

                <li>
                  <SearchCheck />
                  Validate internal links
                </li>

                <li>
                  <SearchCheck />
                  Inspect indexing after launch
                </li>
              </ul>

              <div className="mwtime-buttons">
                <Link
                  href="/seo-and-indexing"
                  className="mwtime-btn mwtime-btn-blue"
                >
                  SEO & Indexing
                  <ArrowRight />
                </Link>

                <Link
                  href="/how-matthew-web-builds-seo-ready-small-business-websites"
                  className="mwtime-btn mwtime-btn-dark"
                >
                  SEO-Ready Website Guide
                </Link>
              </div>
            </section>

            {/* =================================================
                PROCESS
            ================================================= */}

            <section
              className="mwtime-section"
              id="process"
            >
              <h2>
                When It Is Time,{" "}
                <span className="mwtime-blue">
                  Redesign Deliberately
                </span>
              </h2>

              <p>
                A redesign should begin with the
                existing system and business
                requirements—not with choosing a
                new color palette.
              </p>

              <div className="mwtime-process-grid">
                {redesignProcess.map(
                  (step) => (
                    <div
                      className="mwtime-process-card"
                      key={step.number}
                    >
                      <div className="mwtime-process-number">
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

              <div className="mwtime-callout">
                <div className="mwtime-callout-icon">
                  <Target />
                </div>

                <h3>
                  Define What “Better” Means
                </h3>

                <p>
                  Better might mean easier mobile
                  use, clearer services, stronger
                  lead capture, faster pages,
                  cleaner search architecture,
                  better accessibility, new
                  software functionality, or a
                  combination of those goals.
                </p>
              </div>
            </section>

            {/* =================================================
                FAQ
            ================================================= */}

            <section
              className="mwtime-section"
              id="faq"
            >
              <h2>
                Website Redesign Timing{" "}
                <span className="mwtime-orange">
                  FAQs
                </span>
              </h2>

              <div className="mwtime-faq-grid">
                {faqs.map(
                  (item) => (
                    <div
                      className="mwtime-faq-card"
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

            <section className="mwtime-article-cta">
              <h2>
                Redesign Because It{" "}
                <span className="mwtime-orange">
                  Solves a Real Problem
                </span>
                —Not Because a Calendar Says So.
              </h2>

              <p>
                Matthew Web can review an
                existing website&apos;s design,
                mobile usability, performance,
                content, search structure,
                functionality, lead paths, and
                future requirements to determine
                whether the right next step is
                maintenance, targeted
                improvement, or a larger rebuild.
              </p>

              <div className="mwtime-buttons">
                <Link
                  href="/contact-us"
                  className="mwtime-btn mwtime-btn-orange"
                >
                  Discuss Your Website
                  <ArrowRight />
                </Link>

                <Link
                  href="/website-design"
                  className="mwtime-btn mwtime-btn-blue"
                >
                  Website Design
                </Link>

                <Link
                  href="/examples"
                  className="mwtime-btn mwtime-btn-dark"
                >
                  View Projects
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* ======================================================
          RELATED ARTICLES
      ====================================================== */}

      <section className="mwtime-related-section">
        <div className="mwtime-related-inner">
          <div className="mwtime-related-title">
            <span>
              <Sparkles />
              Continue Reading
            </span>

            <h2>
              Related{" "}
              <span className="mwtime-blue">
                Articles
              </span>
            </h2>
          </div>

          <div className="mwtime-related-grid">
            {relatedArticles.map(
              (article) => (
                <Link
                  href={article.href}
                  className="mwtime-related-card"
                  key={article.href}
                >
                  <h3>
                    {article.title}
                  </h3>

                  <p>
                    {article.text}
                  </p>

                  <div className="mwtime-related-link">
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
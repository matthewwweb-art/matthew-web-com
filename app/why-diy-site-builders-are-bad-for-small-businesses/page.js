import Link from "next/link";

import {
  ArrowRight,
  BookOpen,
  Boxes,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  Gauge,
  Globe2,
  LayoutTemplate,
  LockKeyhole,
  MonitorSmartphone,
  SearchCheck,
  Settings2,
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
    "Why DIY Website Builders Can Become Limiting for Small Businesses | Matthew Web",

  description:
    "DIY website builders can be useful for simple sites, but growing businesses may eventually need more control, custom functionality, integrations, SEO structure, performance options, and software capabilities.",

  alternates: {
    canonical:
      "https://matthew-web.com/why-diy-site-builders-are-bad-for-small-businesses",
  },

  openGraph: {
    title:
      "Why DIY Website Builders Can Become Limiting for Small Businesses | Matthew Web",

    description:
      "Learn when DIY website builders make sense, where limitations can appear, and when a growing small business may benefit from custom website or software development.",

    url:
      "https://matthew-web.com/why-diy-site-builders-are-bad-for-small-businesses",

    siteName:
      "Matthew Web",

    type:
      "article",
  },
};

/* ============================================================
   WHEN DIY MAKES SENSE
============================================================ */

const diyGoodFits = [
  {
    icon:
      LayoutTemplate,

    title:
      "Simple Informational Website",

    text:
      "A business that only needs a small number of pages, basic contact information, images, and straightforward content may be able to build what it needs with a visual site builder.",
  },

  {
    icon:
      Wrench,

    title:
      "Owner Wants to Manage Everything",

    text:
      "DIY platforms can be useful when the business owner wants to make frequent visual changes without depending on a developer for every content update.",
  },

  {
    icon:
      Target,

    title:
      "Very Small Initial Scope",

    text:
      "A new business may need a basic public presence before it needs advanced lead systems, databases, integrations, or custom software.",
  },

  {
    icon:
      Gauge,

    title:
      "Speed of Initial Setup",

    text:
      "Templates and prebuilt components can make it possible to launch a basic site relatively quickly when the business requirements fit the platform.",
  },
];

/* ============================================================
   LIMITATIONS
============================================================ */

const limitations = [
  {
    number:
      "01",

    icon:
      LayoutTemplate,

    title:
      "The Business Starts Designing Around the Builder",

    text:
      "Visual builders work within a specific component system. That can be convenient at first, but a growing business may eventually begin changing its requirements to fit what the platform makes easy.",

    question:
      "Are we choosing this layout because it is best for the customer—or because it is the easiest thing the builder allows?",
  },

  {
    number:
      "02",

    icon:
      Code2,

    title:
      "Custom Functionality Becomes Harder",

    text:
      "A standard website may eventually need specialized forms, business logic, APIs, customer tools, account systems, interactive applications, or other functionality that goes beyond normal page building.",

    question:
      "Can the current system support the functionality the business actually needs next?",
  },

  {
    number:
      "03",

    icon:
      Database,

    title:
      "The Website Needs Real Data Systems",

    text:
      "Once a business needs lead databases, CRM records, dashboards, status tracking, customer data, reporting, or operational workflows, the project can move beyond normal website-building territory.",

    question:
      "Is the website becoming part of a larger business application?",
  },

  {
    number:
      "04",

    icon:
      Workflow,

    title:
      "Integrations and Automation Grow",

    text:
      "Businesses may eventually want website forms connected to databases, notifications, payments, spreadsheets, CRMs, internal systems, APIs, or other automated processes.",

    question:
      "Are manual workarounds becoming more complicated than building the correct workflow?",
  },

  {
    number:
      "05",

    icon:
      SearchCheck,

    title:
      "Search Architecture Needs More Control",

    text:
      "Small-business SEO can involve page structure, metadata, internal linking, canonicals, redirects, structured data, sitemap behavior, crawl controls, and other technical decisions.",

    question:
      "Does the platform provide enough control for the search architecture the site actually needs?",
  },

  {
    number:
      "06",

    icon:
      Gauge,

    title:
      "Performance Becomes More Difficult to Control",

    text:
      "Templates, applications, integrations, scripts, tracking tools, animations, and other additions can increase the technical weight of a website over time.",

    question:
      "Can unnecessary complexity be removed, or is the business stuck with technical overhead it cannot meaningfully control?",
  },

  {
    number:
      "07",

    icon:
      LockKeyhole,

    title:
      "Platform Dependency Increases",

    text:
      "Hosted builders simplify infrastructure by controlling much of it for the customer. The tradeoff is greater dependence on that platform's feature set, account system, technical architecture, pricing model, and future product decisions.",

    question:
      "How difficult would it be to change direction if the business outgrows the platform?",
  },

  {
    number:
      "08",

    icon:
      Boxes,

    title:
      "The Website Outgrows Its Original Purpose",

    text:
      "A site that began as five informational pages may eventually need to support marketing campaigns, analytics, lead management, customer tools, software workflows, content systems, and other business operations.",

    question:
      "Are we still building a website—or are we now building a technology system?",
  },
];

/* ============================================================
   DIY VS CUSTOM
============================================================ */

const comparison = [
  {
    area:
      "Initial simplicity",

    diy:
      "Often strong for straightforward template-based sites.",

    custom:
      "Requires more deliberate planning and development.",
  },

  {
    area:
      "Visual editing",

    diy:
      "Usually designed around direct visual editing.",

    custom:
      "Can use custom interfaces or developer-managed code depending on the project.",
  },

  {
    area:
      "Custom functionality",

    diy:
      "Usually depends on built-in features, extensions, integrations, or platform-supported customization.",

    custom:
      "Can be designed around project-specific requirements and business logic.",
  },

  {
    area:
      "Technical control",

    diy:
      "Much of the infrastructure and implementation is controlled by the platform.",

    custom:
      "Provides greater control over architecture, code, routing, integrations, and deployment choices.",
  },

  {
    area:
      "Maintenance responsibility",

    diy:
      "The platform handles many infrastructure responsibilities.",

    custom:
      "More flexibility also creates more responsibility for development, testing, deployment, and maintenance.",
  },

  {
    area:
      "Business software",

    diy:
      "Can support many common features but may become limiting for specialized workflows.",

    custom:
      "Can expand into databases, dashboards, APIs, automation, portals, and custom applications.",
  },

  {
    area:
      "Best fit",

    diy:
      "Businesses whose needs align closely with the platform.",

    custom:
      "Businesses whose requirements justify greater flexibility and control.",
  },
];

/* ============================================================
   WARNING SIGNS
============================================================ */

const warningSigns = [
  "You keep installing workarounds for basic business requirements",
  "Important functionality depends on several disconnected add-ons",
  "The platform cannot support a required integration",
  "The business needs custom database-backed workflows",
  "The current design cannot support the customer journey you want",
  "Important SEO changes are difficult or impossible to implement cleanly",
  "Performance problems are caused by features you cannot meaningfully control",
  "The business needs customer accounts, dashboards, or internal tools",
  "The website is becoming part of daily operations",
  "Changing the site now creates more work than rebuilding the underlying system correctly",
];

/* ============================================================
   QUESTIONS BEFORE CHOOSING
============================================================ */

const decisionQuestions = [
  "What does the website need to do today?",
  "What is likely to be needed during the next stage of the business?",
  "Who will manage normal content updates?",
  "Will the site need custom forms or lead routing?",
  "Will customer information need to enter a CRM or database?",
  "Are payments or booking required?",
  "Will the site need customer accounts or private areas?",
  "Does the company need custom APIs or third-party integrations?",
  "How much technical search control is required?",
  "How important is portability or changing infrastructure later?",
  "Is the business buying simplicity now at the cost of expensive workarounds later?",
  "Would custom development solve a real problem or merely add unnecessary complexity?",
];

/* ============================================================
   MIGRATION PROCESS
============================================================ */

const migrationSteps = [
  {
    number:
      "01",

    title:
      "Audit the Existing Site",

    text:
      "Identify useful content, important URLs, customer paths, forms, analytics, search traffic, and functionality that should not be lost.",
  },

  {
    number:
      "02",

    title:
      "Define the New Requirements",

    text:
      "Write down what the new system needs to accomplish rather than rebuilding the same limitations on a different platform.",
  },

  {
    number:
      "03",

    title:
      "Choose the Architecture",

    text:
      "Decide whether the next stage needs another managed platform, WordPress, custom code, custom software, or a combination of technologies.",
  },

  {
    number:
      "04",

    title:
      "Map Content and URLs",

    text:
      "Preserve useful pages and determine how old URLs will map to the new structure.",
  },

  {
    number:
      "05",

    title:
      "Build and Test",

    text:
      "Test responsive layouts, forms, integrations, navigation, performance, metadata, analytics, and important business functions before migration.",
  },

  {
    number:
      "06",

    title:
      "Redirect and Validate",

    text:
      "Handle retired URLs correctly, update the sitemap, verify canonicals and crawl controls, and inspect important pages after launch.",
  },
];

/* ============================================================
   MATTHEW WEB APPROACH
============================================================ */

const matthewWebApproach = [
  {
    title:
      "Start With the Requirement",

    text:
      "The technology should be selected after understanding what the business and customer actually need.",
  },

  {
    title:
      "Do Not Add Complexity for Its Own Sake",

    text:
      "A simple business website does not need to become a software engineering project merely because custom development is available.",
  },

  {
    title:
      "Build for the Current Stage",

    text:
      "Solve today's real problem while avoiding decisions that unnecessarily block the next reasonable stage of growth.",
  },

  {
    title:
      "Separate Website Needs From Software Needs",

    text:
      "Public marketing pages and internal business workflows solve different problems, even when they eventually connect to the same system.",
  },

  {
    title:
      "Measure Before Rebuilding",

    text:
      "A redesign or migration should be justified by actual requirements, technical limitations, customer problems, or operational needs.",
  },

  {
    title:
      "Earn the Next Stage",

    text:
      "Advanced systems should be added when the business has a real use for them, not because every company supposedly needs the most complicated technology available.",
  },
];

/* ============================================================
   FAQ
============================================================ */

const faqs = [
  {
    q:
      "Are DIY website builders bad for small businesses?",

    a:
      "No. DIY builders can be practical for businesses that need a relatively simple website and value visual editing or managed infrastructure. Problems appear when the business requires more control or functionality than the platform can reasonably provide.",
  },

  {
    q:
      "When should a business move away from a DIY website builder?",

    a:
      "A migration may make sense when the existing platform prevents important functionality, creates excessive workarounds, limits required integrations, makes search or performance improvements difficult, or no longer supports the business's operational needs.",
  },

  {
    q:
      "Is custom coding always better than a website builder?",

    a:
      "No. Custom development provides more control and flexibility, but it also requires more development and maintenance responsibility. The correct choice depends on the project's requirements.",
  },

  {
    q:
      "Can DIY websites rank in search engines?",

    a:
      "Yes. A website does not automatically rank or fail to rank because of the platform name. Useful content, technical accessibility, relevance, internal structure, authority, local relevance, indexing, and many other factors can affect search performance.",
  },

  {
    q:
      "Do I need custom software instead of a normal website?",

    a:
      "Only when the business requirements justify it. Databases, dashboards, custom workflows, APIs, automation, customer accounts, and specialized business logic can move a project beyond a standard website into custom software.",
  },

  {
    q:
      "Can Matthew Web rebuild a site that started on a DIY platform?",

    a:
      "Yes. Depending on the project, Matthew Web can redesign the public website, restructure content, preserve important URLs, build custom functionality, connect lead systems, and develop broader software capabilities when needed.",
  },
];

/* ============================================================
   RELATED ARTICLES
============================================================ */

const relatedArticles = [
  {
    title:
      "Why Custom-Coded Websites Beat DIY Website Builders",

    href:
      "/why-custom-coded-websites-beat-diy-website-builders",

    text:
      "Explore where custom development can provide additional control while still recognizing situations where DIY tools are sufficient.",
  },

  {
    title:
      "Raw Code vs WordPress vs Wix vs GoDaddy",

    href:
      "/raw-code-vs-wordpress-vs-wix-vs-godaddy",

    text:
      "Compare several website-development approaches instead of assuming one technology is automatically best for every project.",
  },

  {
    title:
      "Website Design vs Custom Software: What Does Your Business Need?",

    href:
      "/website-design-vs-custom-software-what-does-your-business-need",

    text:
      "Learn when a project has moved beyond normal website pages into databases, workflows, dashboards, integrations, and software.",
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
    "Why DIY Website Builders Can Become Limiting for Small Businesses",

  description:
    "A balanced guide to when DIY website builders make sense, where limitations can appear, and when custom website or software development may become appropriate.",

  mainEntityOfPage: {
    "@type":
      "WebPage",

    "@id":
      "https://matthew-web.com/why-diy-site-builders-are-bad-for-small-businesses",
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
        "Why DIY Website Builders Can Become Limiting for Small Businesses",

      item:
        "https://matthew-web.com/why-diy-site-builders-are-bad-for-small-businesses",
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

export default function DIYWebsiteBuildersArticlePage() {
  return (
    <main className="mwdiy-page">
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
          --mwdiy-black: #020304;
          --mwdiy-muted: #aebbc5;
          --mwdiy-blue: #08b9f4;
          --mwdiy-blue-light: #38d7ff;
          --mwdiy-orange: #ff7900;
          --mwdiy-orange-light: #ffab31;
          --mwdiy-green: #35e07e;
          --mwdiy-border: rgba(255,255,255,.09);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--mwdiy-black);
        }

        .mwdiy-page {
          min-height: 100vh;
          overflow: hidden;
          color: #fff;
          background: var(--mwdiy-black);
        }

        .mwdiy-blue {
          color: var(--mwdiy-blue-light);
        }

        .mwdiy-orange {
          color: var(--mwdiy-orange);
        }

        /* =====================================================
           BREADCRUMBS
        ===================================================== */

        .mwdiy-breadcrumb-wrap {
          border-bottom: 1px solid rgba(255,255,255,.06);
          background: #04080b;
        }

        .mwdiy-breadcrumbs {
          max-width: 1380px;
          margin: 0 auto;

          display: flex;
          align-items: center;
          flex-wrap: wrap;

          gap: 7px;

          padding:
            14px
            clamp(20px,5vw,80px);

          color: #71838d;

          font-size: 10px;
          font-weight: 800;
        }

        .mwdiy-breadcrumbs a {
          color: #8799a3;
          text-decoration: none;
        }

        .mwdiy-breadcrumbs a:hover {
          color: var(--mwdiy-blue-light);
        }

        .mwdiy-breadcrumbs svg {
          width: 12px;
          height: 12px;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwdiy-hero {
          position: relative;
          overflow: hidden;

          border-bottom:
            1px solid rgba(8,185,244,.16);

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

        .mwdiy-hero::before {
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

        .mwdiy-hero-inner {
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

          gap:
            clamp(45px,6vw,90px);

          padding:
            100px
            clamp(20px,5vw,80px)
            105px;
        }

        .mwdiy-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          width: fit-content;

          margin-bottom: 19px;

          padding: 8px 12px;

          border:
            1px solid rgba(8,185,244,.27);

          border-radius: 999px;

          color: #d9f8ff;

          background:
            rgba(8,185,244,.055);

          font-size: 10px;
          font-weight: 900;

          letter-spacing: .13em;
          text-transform: uppercase;
        }

        .mwdiy-label svg {
          width: 16px;
          height: 16px;
        }

        .mwdiy-hero h1 {
          max-width: 1000px;

          margin: 0;

          font-size:
            clamp(46px,5.4vw,82px);

          line-height: .99;

          letter-spacing: -.06em;
        }

        .mwdiy-description {
          max-width: 820px;

          margin: 25px 0 0;

          color: #b8c6cf;

          font-size:
            clamp(16px,1.4vw,20px);

          line-height: 1.75;
        }

        .mwdiy-meta {
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

        .mwdiy-stage {
          min-height: 470px;

          display: grid;
          place-items: center;
        }

        .mwdiy-console {
          width: min(100%,530px);

          padding: 24px;

          border:
            1px solid rgba(8,185,244,.28);

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

        .mwdiy-console-top {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-bottom: 18px;
        }

        .mwdiy-console-top strong {
          color: #81929d;

          font-size: 9px;

          letter-spacing: .12em;
        }

        .mwdiy-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;

          color: #8da0aa;

          font-size: 8px;
          font-weight: 900;
        }

        .mwdiy-status::before {
          content: "";

          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: var(--mwdiy-green);

          box-shadow:
            0 0 7px rgba(53,224,126,.7);
        }

        .mwdiy-main-card {
          padding: 19px;

          border:
            1px solid rgba(255,121,0,.17);

          border-radius: 11px;

          background: #071015;
        }

        .mwdiy-main-card span {
          color: #657984;

          font-size: 7px;
          font-weight: 900;

          letter-spacing: .09em;
          text-transform: uppercase;
        }

        .mwdiy-main-title {
          display: flex;
          align-items: center;
          gap: 9px;

          margin-top: 10px;

          color: var(--mwdiy-orange-light);

          font-size: 15px;
          font-weight: 900;
        }

        .mwdiy-main-title svg {
          width: 22px;
          height: 22px;
        }

        .mwdiy-main-card p {
          margin: 10px 0 0;

          color: #788b95;

          font-size: 9px;
          line-height: 1.6;
        }

        .mwdiy-path-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 9px;

          margin-top: 10px;
        }

        .mwdiy-path-card {
          min-height: 95px;

          display: flex;
          flex-direction: column;

          align-items: center;
          justify-content: center;

          gap: 8px;

          padding: 12px;

          border:
            1px solid rgba(8,185,244,.14);

          border-radius: 9px;

          background: #071015;

          text-align: center;
        }

        .mwdiy-path-card:nth-child(even) {
          border-color:
            rgba(255,121,0,.14);
        }

        .mwdiy-path-card svg {
          width: 22px;
          height: 22px;

          color: var(--mwdiy-blue-light);
        }

        .mwdiy-path-card:nth-child(even) svg {
          color: var(--mwdiy-orange-light);
        }

        .mwdiy-path-card strong {
          font-size: 8px;
          letter-spacing: .05em;
        }

        /* =====================================================
           ARTICLE
        ===================================================== */

        .mwdiy-article-section {
          padding:
            95px
            clamp(20px,5vw,80px)
            110px;

          background: #020304;
        }

        .mwdiy-layout {
          max-width: 1280px;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            minmax(220px,.27fr)
            minmax(0,.73fr);

          align-items: start;

          gap:
            clamp(40px,6vw,75px);
        }

        /* =====================================================
           TOC
        ===================================================== */

        .mwdiy-toc {
          position: sticky;
          top: 30px;

          padding: 23px;

          border:
            1px solid var(--mwdiy-border);

          border-radius: 14px;

          background:
            linear-gradient(
              145deg,
              #09131a,
              #04080b
            );
        }

        .mwdiy-toc-title {
          display: flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 15px;

          font-size: 10px;
          font-weight: 900;

          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .mwdiy-toc-title svg {
          width: 16px;
          height: 16px;

          color: var(--mwdiy-blue-light);
        }

        .mwdiy-toc a {
          display: block;

          padding: 8px 0;

          color: #8799a3;

          text-decoration: none;

          font-size: 12px;
          line-height: 1.45;
        }

        .mwdiy-toc a:hover {
          color: var(--mwdiy-blue-light);
        }

        .mwdiy-toc-cta {
          margin-top: 18px;

          padding-top: 17px;

          border-top:
            1px solid rgba(255,255,255,.07);
        }

        .mwdiy-toc-cta a {
          color: var(--mwdiy-orange-light);

          font-weight: 850;
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .mwdiy-content {
          min-width: 0;
        }

        .mwdiy-section {
          margin-bottom: 62px;

          scroll-margin-top: 35px;
        }

        .mwdiy-section h2 {
          margin: 0 0 20px;

          font-size:
            clamp(30px,3.5vw,48px);

          line-height: 1.08;

          letter-spacing: -.045em;
        }

        .mwdiy-section h3 {
          margin: 32px 0 12px;

          color: var(--mwdiy-blue-light);

          font-size: 21px;
          line-height: 1.3;
        }

        .mwdiy-section p {
          margin: 0 0 19px;

          color: #b6c3ca;

          font-size: 16px;
          line-height: 1.85;
        }

        .mwdiy-section strong {
          color: #fff;
        }

        /* =====================================================
           ANSWER
        ===================================================== */

        .mwdiy-answer {
          margin-bottom: 55px;

          padding: 29px;

          border:
            1px solid rgba(8,185,244,.23);

          border-radius: 17px;

          background:
            radial-gradient(
              circle at 90% 20%,
              rgba(8,185,244,.06),
              transparent 35%
            ),
            #071015;
        }

        .mwdiy-answer-label {
          display: flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 12px;

          color: var(--mwdiy-blue-light);

          font-size: 9px;
          font-weight: 950;

          letter-spacing: .11em;
          text-transform: uppercase;
        }

        .mwdiy-answer-label svg {
          width: 17px;
          height: 17px;
        }

        .mwdiy-answer h2 {
          margin: 0 0 12px;

          font-size:
            clamp(24px,3vw,36px);

          line-height: 1.1;
        }

        .mwdiy-answer p {
          margin: 0;

          color: #b7c5cc;

          font-size: 15px;
          line-height: 1.75;
        }

        /* =====================================================
           GOOD FIT
        ===================================================== */

        .mwdiy-fit-grid {
          display: grid;

          grid-template-columns:
            repeat(2,1fr);

          gap: 14px;

          margin-top: 27px;
        }

        .mwdiy-fit-card {
          min-height: 235px;

          padding: 23px;

          border:
            1px solid rgba(8,185,244,.14);

          border-radius: 14px;

          background:
            rgba(8,185,244,.018);
        }

        .mwdiy-fit-card:nth-child(even) {
          border-color:
            rgba(255,121,0,.14);

          background:
            rgba(255,121,0,.016);
        }

        .mwdiy-fit-card svg {
          width: 30px;
          height: 30px;

          margin-bottom: 16px;

          color: var(--mwdiy-blue-light);
        }

        .mwdiy-fit-card:nth-child(even) svg {
          color: var(--mwdiy-orange-light);
        }

        .mwdiy-fit-card h3 {
          margin: 0 0 10px;

          color: #fff;

          font-size: 18px;
        }

        .mwdiy-fit-card p {
          margin: 0;

          color: var(--mwdiy-muted);

          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           LIMITATIONS
        ===================================================== */

        .mwdiy-limit-grid {
          display: grid;
          gap: 14px;

          margin-top: 28px;
        }

        .mwdiy-limit-card {
          display: grid;

          grid-template-columns:
            80px 1fr;

          gap: 22px;

          padding: 25px;

          border:
            1px solid rgba(8,185,244,.14);

          border-radius: 14px;

          background: #071015;
        }

        .mwdiy-limit-card:nth-child(even) {
          border-color:
            rgba(255,121,0,.14);
        }

        .mwdiy-limit-icon {
          width: 70px;
          height: 70px;

          display: grid;
          place-items: center;

          border:
            1px solid rgba(8,185,244,.22);

          border-radius: 16px;

          color: var(--mwdiy-blue-light);

          background:
            rgba(8,185,244,.04);
        }

        .mwdiy-limit-card:nth-child(even)
          .mwdiy-limit-icon {
          border-color:
            rgba(255,121,0,.22);

          color:
            var(--mwdiy-orange-light);

          background:
            rgba(255,121,0,.035);
        }

        .mwdiy-limit-icon svg {
          width: 30px;
          height: 30px;
        }

        .mwdiy-number {
          margin-bottom: 7px;

          color:
            var(--mwdiy-blue-light);

          font-size: 9px;
          font-weight: 950;

          letter-spacing: .1em;
        }

        .mwdiy-limit-card:nth-child(even)
          .mwdiy-number {
          color:
            var(--mwdiy-orange-light);
        }

        .mwdiy-limit-card h3 {
          margin: 0 0 10px;

          color: #fff;

          font-size: 20px;
        }

        .mwdiy-limit-card p {
          margin: 0 0 14px;

          color:
            var(--mwdiy-muted);

          font-size: 13px;
          line-height: 1.72;
        }

        .mwdiy-question {
          padding: 12px 14px;

          border-left:
            2px solid var(--mwdiy-blue);

          color: #c6d4db;

          background:
            rgba(8,185,244,.035);

          font-size: 12px;
          line-height: 1.65;
        }

        .mwdiy-limit-card:nth-child(even)
          .mwdiy-question {
          border-left-color:
            var(--mwdiy-orange);

          background:
            rgba(255,121,0,.03);
        }

        /* =====================================================
           TABLE
        ===================================================== */

        .mwdiy-table-wrap {
          margin-top: 28px;

          overflow-x: auto;

          border:
            1px solid var(--mwdiy-border);

          border-radius: 15px;

          background: #071015;
        }

        .mwdiy-table {
          width: 100%;

          min-width: 850px;

          border-collapse: collapse;
        }

        .mwdiy-table th,
        .mwdiy-table td {
          padding: 18px;

          border-bottom:
            1px solid rgba(255,255,255,.07);

          vertical-align: top;

          text-align: left;
        }

        .mwdiy-table th {
          color: #fff;

          background: #0a151b;

          font-size: 10px;

          letter-spacing: .08em;

          text-transform: uppercase;
        }

        .mwdiy-table th:nth-child(2) {
          color:
            var(--mwdiy-orange-light);
        }

        .mwdiy-table th:nth-child(3) {
          color:
            var(--mwdiy-blue-light);
        }

        .mwdiy-table td {
          color: #aebbc5;

          font-size: 12px;

          line-height: 1.65;
        }

        .mwdiy-table td:first-child {
          color: #fff;

          font-weight: 800;
        }

        .mwdiy-table tr:last-child td {
          border-bottom: 0;
        }

        /* =====================================================
           CHECKLIST
        ===================================================== */

        .mwdiy-checklist {
          display: grid;

          gap: 10px;

          margin: 25px 0;

          padding: 0;

          list-style: none;
        }

        .mwdiy-checklist li {
          display: flex;
          align-items: flex-start;

          gap: 10px;

          padding: 13px 15px;

          border:
            1px solid rgba(255,255,255,.07);

          border-radius: 9px;

          color: #c0ccd2;

          background:
            rgba(255,255,255,.015);

          font-size: 13px;
          line-height: 1.55;
        }

        .mwdiy-checklist svg {
          width: 17px;
          height: 17px;

          flex: 0 0 auto;

          margin-top: 1px;

          color:
            var(--mwdiy-blue-light);
        }

        /* =====================================================
           APPROACH
        ===================================================== */

        .mwdiy-approach-grid {
          display: grid;

          grid-template-columns:
            repeat(2,1fr);

          gap: 12px;

          margin-top: 27px;
        }

        .mwdiy-approach-card {
          padding: 23px;

          border:
            1px solid var(--mwdiy-border);

          border-radius: 13px;

          background: #071015;
        }

        .mwdiy-approach-card h3 {
          margin: 0 0 9px;

          color:
            var(--mwdiy-blue-light);

          font-size: 18px;
        }

        .mwdiy-approach-card:nth-child(even) h3 {
          color:
            var(--mwdiy-orange-light);
        }

        .mwdiy-approach-card p {
          margin: 0;

          color:
            var(--mwdiy-muted);

          font-size: 13px;

          line-height: 1.7;
        }

        /* =====================================================
           PROCESS
        ===================================================== */

        .mwdiy-process-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 12px;

          margin-top: 28px;
        }

        .mwdiy-process-card {
          min-height: 225px;

          padding: 22px;

          border:
            1px solid rgba(8,185,244,.14);

          border-radius: 13px;

          background: #071015;
        }

        .mwdiy-process-card:nth-child(even) {
          border-color:
            rgba(255,121,0,.14);
        }

        .mwdiy-process-number {
          margin-bottom: 14px;

          color:
            var(--mwdiy-blue-light);

          font-size: 9px;
          font-weight: 950;

          letter-spacing: .1em;
        }

        .mwdiy-process-card:nth-child(even)
          .mwdiy-process-number {
          color:
            var(--mwdiy-orange-light);
        }

        .mwdiy-process-card h3 {
          margin: 0 0 9px;

          color: #fff;

          font-size: 18px;
        }

        .mwdiy-process-card p {
          margin: 0;

          color:
            var(--mwdiy-muted);

          font-size: 12px;
          line-height: 1.66;
        }

        /* =====================================================
           CALLOUT
        ===================================================== */

        .mwdiy-callout {
          margin: 45px 0;

          padding: 30px;

          border:
            1px solid rgba(255,121,0,.2);

          border-radius: 16px;

          background:
            radial-gradient(
              circle at 90% 20%,
              rgba(255,121,0,.06),
              transparent 35%
            ),
            #071015;
        }

        .mwdiy-callout-icon {
          width: 48px;
          height: 48px;

          display: grid;
          place-items: center;

          margin-bottom: 15px;

          border:
            1px solid rgba(255,121,0,.25);

          border-radius: 12px;

          color:
            var(--mwdiy-orange-light);

          background:
            rgba(255,121,0,.045);
        }

        .mwdiy-callout-icon svg {
          width: 24px;
          height: 24px;
        }

        .mwdiy-callout h3 {
          margin: 0 0 10px;

          color: #fff;

          font-size: 22px;
        }

        .mwdiy-callout p {
          margin: 0;

          color:
            var(--mwdiy-muted);

          font-size: 14px;

          line-height: 1.75;
        }

        /* =====================================================
           FAQ
        ===================================================== */

        .mwdiy-faq-grid {
          display: grid;

          gap: 12px;

          margin-top: 27px;
        }

        .mwdiy-faq-card {
          padding: 23px;

          border:
            1px solid var(--mwdiy-border);

          border-radius: 13px;

          background: #071015;
        }

        .mwdiy-faq-card h3 {
          margin: 0 0 9px;

          color:
            var(--mwdiy-blue-light);

          font-size: 17px;
        }

        .mwdiy-faq-card:nth-child(even) h3 {
          color:
            var(--mwdiy-orange-light);
        }

        .mwdiy-faq-card p {
          margin: 0;

          color:
            var(--mwdiy-muted);

          font-size: 13px;

          line-height: 1.7;
        }

        /* =====================================================
           BUTTONS / CTA
        ===================================================== */

        .mwdiy-buttons {
          display: flex;
          flex-wrap: wrap;

          gap: 12px;

          margin-top: 25px;
        }

        .mwdiy-btn {
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

          transition:
            transform .2s ease;
        }

        .mwdiy-btn:hover {
          transform:
            translateY(-2px);
        }

        .mwdiy-btn-blue {
          border:
            1px solid rgba(56,215,255,.5);

          background:
            linear-gradient(
              180deg,
              #0ab6ed,
              #0789b6
            );
        }

        .mwdiy-btn-orange {
          border:
            1px solid rgba(255,176,49,.55);

          background:
            linear-gradient(
              180deg,
              #ff9519,
              #f16600
            );
        }

        .mwdiy-btn-dark {
          border:
            1px solid rgba(255,255,255,.12);

          background:
            rgba(255,255,255,.03);
        }

        .mwdiy-btn svg {
          width: 17px;
          height: 17px;
        }

        .mwdiy-article-cta {
          margin-top: 65px;

          padding:
            clamp(35px,5vw,55px);

          border:
            1px solid rgba(8,185,244,.21);

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

        .mwdiy-article-cta h2 {
          max-width: 860px;

          margin: 0;

          font-size:
            clamp(31px,4vw,49px);

          line-height: 1.05;

          letter-spacing: -.045em;
        }

        .mwdiy-article-cta p {
          max-width: 800px;

          margin: 17px 0 0;

          color:
            var(--mwdiy-muted);

          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           RELATED
        ===================================================== */

        .mwdiy-related-section {
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

        .mwdiy-related-inner {
          max-width: 1280px;

          margin: 0 auto;
        }

        .mwdiy-related-title {
          margin-bottom: 32px;
        }

        .mwdiy-related-title span {
          display: flex;
          align-items: center;

          gap: 8px;

          margin-bottom: 9px;

          color:
            var(--mwdiy-orange-light);

          font-size: 9px;
          font-weight: 900;

          letter-spacing: .12em;

          text-transform: uppercase;
        }

        .mwdiy-related-title svg {
          width: 16px;
          height: 16px;
        }

        .mwdiy-related-title h2 {
          margin: 0;

          font-size:
            clamp(31px,4vw,49px);

          letter-spacing: -.045em;
        }

        .mwdiy-related-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 14px;
        }

        .mwdiy-related-card {
          min-height: 245px;

          display: flex;
          flex-direction: column;

          padding: 24px;

          border:
            1px solid var(--mwdiy-border);

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

        .mwdiy-related-card:hover {
          transform:
            translateY(-4px);

          border-color:
            rgba(8,185,244,.3);
        }

        .mwdiy-related-card:nth-child(even):hover {
          border-color:
            rgba(255,121,0,.3);
        }

        .mwdiy-related-card h3 {
          margin: 0;

          font-size: 18px;

          line-height: 1.3;
        }

        .mwdiy-related-card p {
          margin: 13px 0 0;

          color:
            var(--mwdiy-muted);

          font-size: 12px;
          line-height: 1.65;
        }

        .mwdiy-related-link {
          display: flex;
          align-items: center;

          gap: 7px;

          margin-top: auto;
          padding-top: 21px;

          color:
            var(--mwdiy-blue-light);

          font-size: 11px;
          font-weight: 850;
        }

        .mwdiy-related-card:nth-child(even)
          .mwdiy-related-link {
          color:
            var(--mwdiy-orange-light);
        }

        .mwdiy-related-link svg {
          width: 15px;
          height: 15px;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1100px) {
          .mwdiy-process-grid {
            grid-template-columns:
              repeat(2,1fr);
          }
        }

        @media (max-width: 1050px) {
          .mwdiy-hero-inner {
            grid-template-columns: 1fr;
          }

          .mwdiy-hero-copy {
            text-align: center;
          }

          .mwdiy-label {
            margin-left: auto;
            margin-right: auto;
          }

          .mwdiy-description {
            margin-left: auto;
            margin-right: auto;
          }

          .mwdiy-meta {
            justify-content: center;
          }

          .mwdiy-related-grid {
            grid-template-columns:
              repeat(2,1fr);
          }

          .mwdiy-related-card:last-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 850px) {
          .mwdiy-layout {
            grid-template-columns: 1fr;
          }

          .mwdiy-toc {
            position: static;

            display: grid;

            grid-template-columns:
              repeat(2,1fr);

            gap: 0 20px;
          }

          .mwdiy-toc-title,
          .mwdiy-toc-cta {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 700px) {
          .mwdiy-hero-inner {
            padding: 70px 16px;
          }

          .mwdiy-hero h1 {
            font-size:
              clamp(42px,12vw,64px);
          }

          .mwdiy-article-section {
            padding:
              70px 16px 85px;
          }

          .mwdiy-fit-grid,
          .mwdiy-approach-grid,
          .mwdiy-process-grid,
          .mwdiy-related-grid {
            grid-template-columns: 1fr;
          }

          .mwdiy-related-card:last-child {
            grid-column: auto;
          }

          .mwdiy-related-section {
            padding:
              70px 16px;
          }
        }

        @media (max-width: 560px) {
          .mwdiy-limit-card {
            grid-template-columns: 1fr;
          }

          .mwdiy-limit-icon {
            width: 58px;
            height: 58px;
          }
        }

        @media (max-width: 500px) {
          .mwdiy-stage {
            min-height: 450px;

            transform: scale(.9);

            margin: -10px -20px;
          }

          .mwdiy-path-grid {
            grid-template-columns: 1fr;
          }

          .mwdiy-toc {
            grid-template-columns: 1fr;
          }

          .mwdiy-toc-title,
          .mwdiy-toc-cta {
            grid-column: auto;
          }

          .mwdiy-section p {
            font-size: 15px;
          }
        }
      `}</style>

      {/* ======================================================
          BREADCRUMBS
      ====================================================== */}

      <div className="mwdiy-breadcrumb-wrap">
        <nav
          className="mwdiy-breadcrumbs"
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
            DIY Website Builders
          </span>
        </nav>
      </div>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="mwdiy-hero">
        <div className="mwdiy-hero-inner">
          <div className="mwdiy-hero-copy">
            <div className="mwdiy-label">
              <BookOpen />
              Websites • Platforms • Small Business
            </div>

            <h1>
              Why DIY Website Builders Can Become{" "}
              <span className="mwdiy-orange">
                Limiting
              </span>{" "}
              for{" "}
              <span className="mwdiy-blue">
                Small Businesses
              </span>
            </h1>

            <p className="mwdiy-description">
              DIY website builders are not
              automatically bad. They can be a
              practical way to launch a simple
              website. The problem begins when
              the business grows beyond what the
              original platform was intended to
              support.
            </p>

            <div className="mwdiy-meta">
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
            className="mwdiy-stage"
            aria-hidden="true"
          >
            <div className="mwdiy-console">
              <div className="mwdiy-console-top">
                <strong>
                  WEBSITE // PLATFORM DECISION
                </strong>

                <span className="mwdiy-status">
                  EVALUATE
                </span>
              </div>

              <div className="mwdiy-main-card">
                <span>
                  TECHNOLOGY FIT
                </span>

                <div className="mwdiy-main-title">
                  <Settings2 />
                  Choose Around the Requirement
                </div>

                <p>
                  Business Need → Architecture →
                  Build → Measure → Expand
                </p>
              </div>

              <div className="mwdiy-path-grid">
                <div className="mwdiy-path-card">
                  <LayoutTemplate />
                  <strong>
                    SIMPLE SITE
                  </strong>
                </div>

                <div className="mwdiy-path-card">
                  <Workflow />
                  <strong>
                    WORKFLOW
                  </strong>
                </div>

                <div className="mwdiy-path-card">
                  <Code2 />
                  <strong>
                    CUSTOM
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

      <article className="mwdiy-article-section">
        <div className="mwdiy-layout">
          {/* ==================================================
              TOC
          ================================================== */}

          <aside className="mwdiy-toc">
            <div className="mwdiy-toc-title">
              <BookOpen />
              In This Article
            </div>

            <a href="#short-answer">
              Short Answer
            </a>

            <a href="#when-diy-works">
              When DIY Works
            </a>

            <a href="#limitations">
              Where Limits Appear
            </a>

            <a href="#comparison">
              DIY vs Custom
            </a>

            <a href="#seo">
              SEO & Performance
            </a>

            <a href="#software">
              When It Becomes Software
            </a>

            <a href="#warning-signs">
              Warning Signs
            </a>

            <a href="#questions">
              Questions Before Choosing
            </a>

            <a href="#migration">
              Moving Off a Builder
            </a>

            <a href="#matthew-web">
              Matthew Web Approach
            </a>

            <a href="#faq">
              FAQs
            </a>

            <div className="mwdiy-toc-cta">
              <Link href="/website-design">
                Website Design →
              </Link>
            </div>
          </aside>

          <div className="mwdiy-content">
            {/* =================================================
                SHORT ANSWER
            ================================================= */}

            <section
              className="mwdiy-answer"
              id="short-answer"
            >
              <div className="mwdiy-answer-label">
                <Zap />
                Short Answer
              </div>

              <h2>
                Are DIY Website Builders Bad for
                Small Businesses?
              </h2>

              <p>
                <strong>
                  No. A DIY builder can be a good
                  choice when a business needs a
                  simple site and the platform
                  supports the requirements well.
                </strong>{" "}
                It becomes limiting when the
                company needs greater control
                over functionality, data,
                integrations, search structure,
                performance, workflows, or future
                software development than the
                platform can reasonably provide.
              </p>
            </section>

            {/* =================================================
                GOOD FIT
            ================================================= */}

            <section
              className="mwdiy-section"
              id="when-diy-works"
            >
              <h2>
                When a DIY Builder Can Be the{" "}
                <span className="mwdiy-blue">
                  Right Choice
                </span>
              </h2>

              <p>
                A small business should not spend
                money on custom development just
                because custom development exists.
              </p>

              <p>
                If the requirements are simple
                and a managed builder handles
                them well, that can be an
                efficient solution.
              </p>

              <div className="mwdiy-fit-grid">
                {diyGoodFits.map(
                  (item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        className="mwdiy-fit-card"
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

              <div className="mwdiy-callout">
                <div className="mwdiy-callout-icon">
                  <Target />
                </div>

                <h3>
                  The Cheapest Architecture That
                  Solves the Real Problem Can Be
                  the Correct Architecture
                </h3>

                <p>
                  Technology should match the
                  stage of the business. A
                  straightforward five-page
                  website does not automatically
                  require a database, custom
                  application, or advanced
                  software stack.
                </p>
              </div>
            </section>

            {/* =================================================
                LIMITATIONS
            ================================================= */}

            <section
              className="mwdiy-section"
              id="limitations"
            >
              <h2>
                Where DIY Platforms Can Become{" "}
                <span className="mwdiy-orange">
                  Limiting
                </span>
              </h2>

              <p>
                The limitation is not necessarily
                visible when the website first
                launches.
              </p>

              <p>
                It often appears later when the
                company asks the site to do more.
              </p>

              <div className="mwdiy-limit-grid">
                {limitations.map(
                  (item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        className="mwdiy-limit-card"
                        key={item.number}
                      >
                        <div className="mwdiy-limit-icon">
                          <Icon />
                        </div>

                        <div>
                          <div className="mwdiy-number">
                            LIMIT {item.number}
                          </div>

                          <h3>
                            {item.title}
                          </h3>

                          <p>
                            {item.text}
                          </p>

                          <div className="mwdiy-question">
                            <strong>
                              Ask:
                            </strong>{" "}
                            {item.question}
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </section>

            {/* =================================================
                COMPARISON
            ================================================= */}

            <section
              className="mwdiy-section"
              id="comparison"
            >
              <h2>
                DIY Builder vs{" "}
                <span className="mwdiy-blue">
                  Custom Development
                </span>
              </h2>

              <p>
                Neither approach wins every
                category.
              </p>

              <p>
                Each trades different levels of
                simplicity, control,
                responsibility, and flexibility.
              </p>

              <div className="mwdiy-table-wrap">
                <table className="mwdiy-table">
                  <thead>
                    <tr>
                      <th>
                        Area
                      </th>

                      <th>
                        DIY / Managed Builder
                      </th>

                      <th>
                        Custom Development
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {comparison.map(
                      (item) => (
                        <tr key={item.area}>
                          <td>
                            {item.area}
                          </td>

                          <td>
                            {item.diy}
                          </td>

                          <td>
                            {item.custom}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>

              <div className="mwdiy-buttons">
                <Link
                  href="/raw-code-vs-wordpress-vs-wix-vs-godaddy"
                  className="mwdiy-btn mwdiy-btn-blue"
                >
                  Compare Website Platforms
                  <ArrowRight />
                </Link>
              </div>
            </section>

            {/* =================================================
                SEO / PERFORMANCE
            ================================================= */}

            <section
              className="mwdiy-section"
              id="seo"
            >
              <h2>
                What About{" "}
                <span className="mwdiy-orange">
                  SEO and Performance?
                </span>
              </h2>

              <p>
                A common mistake is saying that a
                DIY site cannot rank simply
                because it was built with a site
                builder.
              </p>

              <p>
                That is too simplistic.
              </p>

              <p>
                Search performance can involve:
              </p>

              <ul className="mwdiy-checklist">
                <li>
                  <SearchCheck />
                  Useful and relevant content
                </li>

                <li>
                  <SearchCheck />
                  Crawlable public pages
                </li>

                <li>
                  <SearchCheck />
                  Indexing
                </li>

                <li>
                  <SearchCheck />
                  Internal linking
                </li>

                <li>
                  <SearchCheck />
                  Titles and descriptions
                </li>

                <li>
                  <SearchCheck />
                  Canonical URLs
                </li>

                <li>
                  <SearchCheck />
                  Mobile usability
                </li>

                <li>
                  <SearchCheck />
                  Performance
                </li>

                <li>
                  <SearchCheck />
                  Local relevance
                </li>

                <li>
                  <SearchCheck />
                  Site reputation and authority
                </li>
              </ul>

              <p>
                A platform becomes a problem when
                it prevents the business from
                implementing the technical or
                content improvements the website
                actually requires.
              </p>

              <div className="mwdiy-callout">
                <div className="mwdiy-callout-icon">
                  <Gauge />
                </div>

                <h3>
                  Custom Code Does Not
                  Automatically Mean Fast
                </h3>

                <p>
                  Poor custom code can be slow,
                  and a well-built managed site
                  can perform effectively.
                  Performance depends on the
                  implementation, media, scripts,
                  architecture, integrations, and
                  ongoing maintenance—not simply
                  the platform label.
                </p>
              </div>

              <div className="mwdiy-buttons">
                <Link
                  href="/how-matthew-web-builds-seo-ready-small-business-websites"
                  className="mwdiy-btn mwdiy-btn-blue"
                >
                  SEO-Ready Website Guide
                  <ArrowRight />
                </Link>

                <Link
                  href="/why-fast-website-load-speed-helps-leads-seo-and-trust"
                  className="mwdiy-btn mwdiy-btn-dark"
                >
                  Website Performance
                </Link>
              </div>
            </section>

            {/* =================================================
                SOFTWARE
            ================================================= */}

            <section
              className="mwdiy-section"
              id="software"
            >
              <h2>
                When the Website Starts Becoming{" "}
                <span className="mwdiy-blue">
                  Software
                </span>
              </h2>

              <p>
                The biggest architectural change
                often happens when the business
                stops asking only for pages and
                starts asking for workflows.
              </p>

              <p>
                Examples include:
              </p>

              <ul className="mwdiy-checklist">
                <li>
                  <Database />
                  Database-backed lead records
                </li>

                <li>
                  <Database />
                  CRM dashboards
                </li>

                <li>
                  <Database />
                  Customer accounts
                </li>

                <li>
                  <Database />
                  Private customer portals
                </li>

                <li>
                  <Database />
                  Business reporting
                </li>

                <li>
                  <Workflow />
                  Automated lead routing
                </li>

                <li>
                  <Workflow />
                  Custom quote workflows
                </li>

                <li>
                  <Workflow />
                  API integrations
                </li>

                <li>
                  <Workflow />
                  Internal business tools
                </li>

                <li>
                  <Workflow />
                  Specialized business logic
                </li>
              </ul>

              <p>
                At that point the project may
                still include a website, but part
                of the system has become custom
                software.
              </p>

              <div className="mwdiy-buttons">
                <Link
                  href="/website-design-vs-custom-software-what-does-your-business-need"
                  className="mwdiy-btn mwdiy-btn-blue"
                >
                  Website vs Custom Software
                  <ArrowRight />
                </Link>

                <Link
                  href="/custom-software"
                  className="mwdiy-btn mwdiy-btn-dark"
                >
                  Custom Software Services
                </Link>
              </div>
            </section>

            {/* =================================================
                WARNING SIGNS
            ================================================= */}

            <section
              className="mwdiy-section"
              id="warning-signs"
            >
              <h2>
                Signs You May Be{" "}
                <span className="mwdiy-orange">
                  Outgrowing the Platform
                </span>
              </h2>

              <ul className="mwdiy-checklist">
                {warningSigns.map(
                  (item) => (
                    <li key={item}>
                      <CheckCircle2 />
                      {item}
                    </li>
                  )
                )}
              </ul>

              <div className="mwdiy-callout">
                <div className="mwdiy-callout-icon">
                  <Wrench />
                </div>

                <h3>
                  One Limitation Does Not Always
                  Mean “Rebuild Everything”
                </h3>

                <p>
                  A plugin, integration, targeted
                  repair, or smaller change may
                  solve the problem. Migration
                  makes more sense when important
                  requirements repeatedly fight
                  the underlying architecture.
                </p>
              </div>
            </section>

            {/* =================================================
                DECISION QUESTIONS
            ================================================= */}

            <section
              className="mwdiy-section"
              id="questions"
            >
              <h2>
                Questions to Answer{" "}
                <span className="mwdiy-blue">
                  Before Choosing a Platform
                </span>
              </h2>

              <ul className="mwdiy-checklist">
                {decisionQuestions.map(
                  (item) => (
                    <li key={item}>
                      <CheckCircle2 />
                      {item}
                    </li>
                  )
                )}
              </ul>

              <p>
                These questions help prevent two
                opposite mistakes:
              </p>

              <p>
                <strong>
                  Choosing something too limited
                  for the real requirement—or
                  building something far more
                  complicated than the business
                  actually needs.
                </strong>
              </p>
            </section>

            {/* =================================================
                MIGRATION
            ================================================= */}

            <section
              className="mwdiy-section"
              id="migration"
            >
              <h2>
                If You Outgrow the Builder,{" "}
                <span className="mwdiy-orange">
                  Migrate Carefully
                </span>
              </h2>

              <p>
                Moving to a different system
                should not mean throwing away
                useful content, URLs, analytics,
                or customer paths.
              </p>

              <div className="mwdiy-process-grid">
                {migrationSteps.map(
                  (step) => (
                    <div
                      className="mwdiy-process-card"
                      key={step.number}
                    >
                      <div className="mwdiy-process-number">
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

              <div className="mwdiy-callout">
                <div className="mwdiy-callout-icon">
                  <Globe2 />
                </div>

                <h3>
                  A Platform Change Is Also a
                  Migration Project
                </h3>

                <p>
                  Search URLs, redirects,
                  customer forms, domains,
                  analytics, integrations,
                  content, metadata, and other
                  systems need to be considered
                  alongside the new design.
                </p>
              </div>
            </section>

            {/* =================================================
                MATTHEW WEB
            ================================================= */}

            <section
              className="mwdiy-section"
              id="matthew-web"
            >
              <h2>
                The Matthew Web{" "}
                <span className="mwdiy-blue">
                  Approach
                </span>
              </h2>

              <p>
                The goal should not be to prove
                that every website needs custom
                code.
              </p>

              <p>
                The goal is to choose technology
                that fits the business.
              </p>

              <div className="mwdiy-approach-grid">
                {matthewWebApproach.map(
                  (item) => (
                    <div
                      className="mwdiy-approach-card"
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

              <div className="mwdiy-callout">
                <div className="mwdiy-callout-icon">
                  <Boxes />
                </div>

                <h3>
                  Earn the Next Stage
                </h3>

                <p>
                  Start with the simplest system
                  that solves the real problem.
                  Add databases, automation,
                  custom software, advanced
                  integrations, and larger
                  architecture when the business
                  has a real requirement for
                  them.
                </p>
              </div>
            </section>

            {/* =================================================
                FAQ
            ================================================= */}

            <section
              className="mwdiy-section"
              id="faq"
            >
              <h2>
                DIY Website Builder{" "}
                <span className="mwdiy-orange">
                  FAQs
                </span>
              </h2>

              <div className="mwdiy-faq-grid">
                {faqs.map(
                  (item) => (
                    <div
                      className="mwdiy-faq-card"
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

            <section className="mwdiy-article-cta">
              <h2>
                Use the{" "}
                <span className="mwdiy-orange">
                  Simplest Technology
                </span>{" "}
                That Solves the Real Problem—
                Then{" "}
                <span className="mwdiy-blue">
                  Grow When Needed.
                </span>
              </h2>

              <p>
                Matthew Web builds websites and
                custom software around actual
                business requirements. That can
                mean a focused small-business
                website, a larger custom-coded
                site, database-backed lead
                systems, integrations,
                automation, dashboards, or other
                software when the project
                genuinely requires it.
              </p>

              <div className="mwdiy-buttons">
                <Link
                  href="/contact-us"
                  className="mwdiy-btn mwdiy-btn-orange"
                >
                  Discuss Your Project
                  <ArrowRight />
                </Link>

                <Link
                  href="/website-design"
                  className="mwdiy-btn mwdiy-btn-blue"
                >
                  Website Design
                </Link>

                <Link
                  href="/custom-software"
                  className="mwdiy-btn mwdiy-btn-dark"
                >
                  Custom Software
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* ======================================================
          RELATED
      ====================================================== */}

      <section className="mwdiy-related-section">
        <div className="mwdiy-related-inner">
          <div className="mwdiy-related-title">
            <span>
              <Sparkles />
              Continue Reading
            </span>

            <h2>
              Related{" "}
              <span className="mwdiy-blue">
                Articles
              </span>
            </h2>
          </div>

          <div className="mwdiy-related-grid">
            {relatedArticles.map(
              (article) => (
                <Link
                  href={article.href}
                  className="mwdiy-related-card"
                  key={article.href}
                >
                  <h3>
                    {article.title}
                  </h3>

                  <p>
                    {article.text}
                  </p>

                  <div className="mwdiy-related-link">
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
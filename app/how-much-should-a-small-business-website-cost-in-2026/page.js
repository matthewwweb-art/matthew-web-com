import Link from "next/link";

import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  CreditCard,
  FileText,
  Gauge,
  Globe2,
  Layers3,
  MonitorSmartphone,
  Puzzle,
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
    "How Much Should a Small Business Website Cost in 2026? | Matthew Web",

  description:
    "Learn what affects small-business website pricing in 2026, including page count, design, forms, SEO setup, integrations, maintenance, and custom software. Matthew Web website projects can start at $499 for qualifying scopes.",

  alternates: {
    canonical:
      "https://matthew-web.com/how-much-should-a-small-business-website-cost-in-2026",
  },

  openGraph: {
    title:
      "How Much Should a Small Business Website Cost in 2026? | Matthew Web",

    description:
      "Website pricing depends on scope, pages, functionality, content, integrations, maintenance, and business requirements. Learn how to evaluate what you are actually paying for.",

    url:
      "https://matthew-web.com/how-much-should-a-small-business-website-cost-in-2026",

    siteName:
      "Matthew Web",

    type:
      "article",
  },
};

/* ============================================================
   COST FACTORS
============================================================ */

const costFactors = [
  {
    icon:
      Layers3,

    title:
      "Number of Pages",

    text:
      "A five-page business website and a large site with dozens of service, location, product, or educational pages require very different amounts of planning, content, development, and testing.",
  },

  {
    icon:
      MonitorSmartphone,

    title:
      "Design & Layout",

    text:
      "Simple page layouts usually require less work than highly customized interfaces, complex responsive behavior, custom visuals, interactive sections, or unusual navigation.",
  },

  {
    icon:
      FileText,

    title:
      "Content Requirements",

    text:
      "Pricing can change depending on whether the customer supplies finished text and media or needs help organizing, editing, structuring, and preparing the website content.",
  },

  {
    icon:
      Puzzle,

    title:
      "Forms & Integrations",

    text:
      "Quote forms, booking systems, payment tools, email systems, analytics, external APIs, databases, and other integrations increase the amount of development and testing involved.",
  },

  {
    icon:
      Code2,

    title:
      "Custom Functionality",

    text:
      "A business website can become a software project when it needs dashboards, CRM-style tools, customer accounts, workflows, automation, databases, or specialized business logic.",
  },

  {
    icon:
      Wrench,

    title:
      "Ongoing Service",

    text:
      "Hosting, maintenance, updates, technical support, monitoring, and future changes should be considered separately from the initial cost of creating the site.",
  },
];

/* ============================================================
   PROJECT TYPES
============================================================ */

const projectTypes = [
  {
    type:
      "Basic Business Website",

    fit:
      "Best for a small business that needs a professional online presence, essential pages, clear contact information, responsive design, and a straightforward customer path.",

    pricing:
      "Matthew Web qualifying website projects can start at $499.",

    accent:
      "blue",
  },

  {
    type:
      "Expanded Business Website",

    fit:
      "Best when the site needs more service pages, stronger content architecture, additional forms, integrations, location content, or more customized sections.",

    pricing:
      "Pricing increases with the actual scope and requirements.",

    accent:
      "orange",
  },

  {
    type:
      "Website + Custom Software",

    fit:
      "Best when the business needs the public website connected to dashboards, databases, lead systems, automation, customer tools, or specialized workflows.",

    pricing:
      "Custom software is quoted according to the functionality and technical requirements.",

    accent:
      "blue",
  },
];

/* ============================================================
   WHAT SHOULD BE INCLUDED
============================================================ */

const valueChecklist = [
  "Responsive desktop, tablet, and mobile behavior",
  "Clear navigation and customer paths",
  "Professional page structure",
  "Contact or lead-generation functionality where required",
  "Basic technical search/indexing preparation",
  "Domain and deployment configuration where included",
  "Testing before launch",
  "A clear understanding of what is and is not included",
  "A plan for maintenance or future changes",
];

/* ============================================================
   PRICE QUESTIONS
============================================================ */

const pricingQuestions = [
  {
    q:
      "How many pages does the project actually need?",

    a:
      "Count real business needs rather than adding pages simply to make the website larger. Service pages, location pages, FAQs, portfolios, policies, and educational content all add scope.",
  },

  {
    q:
      "Who is providing the content?",

    a:
      "A project where finished copy, photos, branding, and business information are already organized can be very different from one where the developer must help structure everything.",
  },

  {
    q:
      "Does the site need business functionality?",

    a:
      "Forms, payments, booking, databases, dashboards, automation, accounts, and integrations can move a project beyond normal website design.",
  },

  {
    q:
      "What happens after launch?",

    a:
      "Ask who handles hosting, maintenance, updates, backups, support, security-related changes, and future content revisions.",
  },

  {
    q:
      "Is the price a starting point or a final quote?",

    a:
      "A starting price is useful for understanding the entry point, but the final price should match the actual scope being requested.",
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
      "Compare custom development with visual DIY website-building platforms.",
  },

  {
    title:
      "Raw Code vs WordPress vs Wix vs GoDaddy",

    href:
      "/raw-code-vs-wordpress-vs-wix-vs-godaddy",

    text:
      "Compare several common ways businesses can build and maintain a website.",
  },

  {
    title:
      "Website Design vs Custom Software",

    href:
      "/website-design-vs-custom-software-what-does-your-business-need",

    text:
      "Learn when the project is still a website and when the business really needs software.",
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
    "How Much Should a Small Business Website Cost in 2026?",

  description:
    "A practical guide to the factors that affect small-business website pricing in 2026.",

  mainEntityOfPage: {
    "@type":
      "WebPage",

    "@id":
      "https://matthew-web.com/how-much-should-a-small-business-website-cost-in-2026",
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
        "How Much Should a Small Business Website Cost in 2026?",

      item:
        "https://matthew-web.com/how-much-should-a-small-business-website-cost-in-2026",
    },
  ],
};

/* ============================================================
   PAGE
============================================================ */

export default function SmallBusinessWebsiteCostPage() {
  return (
    <main className="mwcost-page">
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

      <style>{`
        :root {
          --mwc-black:
            #020304;

          --mwc-panel:
            #091117;

          --mwc-muted:
            #aebbc5;

          --mwc-blue:
            #08b9f4;

          --mwc-blue-light:
            #38d7ff;

          --mwc-orange:
            #ff7900;

          --mwc-orange-light:
            #ffab31;

          --mwc-green:
            #35e07e;

          --mwc-border:
            rgba(
              255,
              255,
              255,
              0.09
            );
        }

        html {
          scroll-behavior:
            smooth;
        }

        body {
          margin:
            0;

          background:
            var(
              --mwc-black
            );
        }

        .mwcost-page {
          min-height:
            100vh;

          overflow:
            hidden;

          color:
            #ffffff;

          background:
            var(
              --mwc-black
            );
        }

        .mwc-container {
          width:
            100%;

          max-width:
            1380px;

          margin:
            0 auto;
        }

        .mwc-blue {
          color:
            var(
              --mwc-blue-light
            );
        }

        .mwc-orange {
          color:
            var(
              --mwc-orange
            );
        }

        /* =====================================================
           BREADCRUMBS
        ===================================================== */

        .mwc-breadcrumb-wrap {
          border-bottom:
            1px solid
            rgba(
              255,
              255,
              255,
              0.06
            );

          background:
            #04080b;
        }

        .mwc-breadcrumbs {
          max-width:
            1380px;

          margin:
            0 auto;

          display:
            flex;

          align-items:
            center;

          flex-wrap:
            wrap;

          gap:
            7px;

          padding:
            14px
            clamp(
              20px,
              5vw,
              80px
            );

          color:
            #71838d;

          font-size:
            10px;

          font-weight:
            800;
        }

        .mwc-breadcrumbs a {
          color:
            #8799a3;

          text-decoration:
            none;
        }

        .mwc-breadcrumbs a:hover {
          color:
            var(
              --mwc-blue-light
            );
        }

        .mwc-breadcrumbs svg {
          width:
            12px;

          height:
            12px;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwc-hero {
          position:
            relative;

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
                0.085
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

        .mwc-hero::before {
          content:
            "";

          position:
            absolute;

          inset:
            0;

          opacity:
            0.26;

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

        .mwc-hero-inner {
          position:
            relative;

          z-index:
            2;

          width:
            100%;

          max-width:
            1380px;

          margin:
            0 auto;

          display:
            grid;

          grid-template-columns:
            minmax(
              0,
              1.08fr
            )
            minmax(
              390px,
              0.92fr
            );

          align-items:
            center;

          gap:
            clamp(
              45px,
              6vw,
              90px
            );

          padding:
            100px
            clamp(
              20px,
              5vw,
              80px
            )
            105px;
        }

        .mwc-article-label {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            8px;

          width:
            fit-content;

          margin-bottom:
            19px;

          padding:
            8px 12px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.27
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
            0.13em;

          text-transform:
            uppercase;
        }

        .mwc-article-label svg {
          width:
            16px;

          height:
            16px;
        }

        .mwc-hero h1 {
          max-width:
            900px;

          margin:
            0;

          font-size:
            clamp(
              48px,
              5.6vw,
              84px
            );

          line-height:
            0.99;

          letter-spacing:
            -0.06em;
        }

        .mwc-hero-description {
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
            1.75;
        }

        .mwc-meta {
          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            8px 18px;

          margin-top:
            25px;

          color:
            #71838d;

          font-size:
            10px;

          font-weight:
            800;

          letter-spacing:
            0.05em;

          text-transform:
            uppercase;
        }

        /* =====================================================
           HERO PRICE VISUAL
        ===================================================== */

        .mwc-price-stage {
          min-height:
            440px;

          display:
            grid;

          place-items:
            center;
        }

        .mwc-price-panel {
          width:
            min(
              100%,
              500px
            );

          padding:
            27px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.27
            );

          border-radius:
            19px;

          background:
            linear-gradient(
              145deg,
              #0a151c,
              #04080b
            );

          box-shadow:
            0 30px 70px
            rgba(
              0,
              0,
              0,
              0.45
            );
        }

        .mwc-price-top {
          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          margin-bottom:
            24px;
        }

        .mwc-price-top strong {
          color:
            #81929d;

          font-size:
            9px;

          letter-spacing:
            0.12em;
        }

        .mwc-price-status {
          color:
            var(
              --mwc-green
            );

          font-size:
            8px;

          font-weight:
            900;

          letter-spacing:
            0.09em;
        }

        .mwc-price-main {
          padding:
            27px;

          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.19
            );

          border-radius:
            13px;

          text-align:
            center;

          background:
            radial-gradient(
              circle at center,
              rgba(
                255,
                121,
                0,
                0.075
              ),
              transparent
              60%
            ),
            #071015;
        }

        .mwc-price-main span {
          display:
            block;

          color:
            #7a8c96;

          font-size:
            8px;

          font-weight:
            900;

          letter-spacing:
            0.12em;

          text-transform:
            uppercase;
        }

        .mwc-price-main strong {
          display:
            block;

          margin:
            12px 0 8px;

          color:
            var(
              --mwc-orange-light
            );

          font-size:
            clamp(
              49px,
              7vw,
              74px
            );

          line-height:
            1;
        }

        .mwc-price-main p {
          margin:
            0;

          color:
            #8da0aa;

          font-size:
            10px;

          line-height:
            1.55;
        }

        .mwc-price-grid {
          display:
            grid;

          grid-template-columns:
            repeat(
              3,
              1fr
            );

          gap:
            9px;

          margin-top:
            11px;
        }

        .mwc-price-stat {
          min-height:
            88px;

          padding:
            13px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.07
            );

          border-radius:
            9px;

          background:
            #071015;
        }

        .mwc-price-stat span {
          display:
            block;

          color:
            #586b75;

          font-size:
            7px;

          font-weight:
            900;

          letter-spacing:
            0.08em;

          text-transform:
            uppercase;
        }

        .mwc-price-stat strong {
          display:
            block;

          margin-top:
            9px;

          color:
            var(
              --mwc-blue-light
            );

          font-size:
            11px;

          line-height:
            1.3;
        }

        .mwc-price-stat:nth-child(even)
          strong {
          color:
            var(
              --mwc-orange-light
            );
        }

        /* =====================================================
           ARTICLE
        ===================================================== */

        .mwc-article-section {
          padding:
            95px
            clamp(
              20px,
              5vw,
              80px
            )
            110px;

          background:
            #020304;
        }

        .mwc-article-layout {
          max-width:
            1280px;

          margin:
            0 auto;

          display:
            grid;

          grid-template-columns:
            minmax(
              220px,
              0.27fr
            )
            minmax(
              0,
              0.73fr
            );

          align-items:
            start;

          gap:
            clamp(
              40px,
              6vw,
              75px
            );
        }

        /* =====================================================
           TOC
        ===================================================== */

        .mwc-toc {
          position:
            sticky;

          top:
            30px;

          padding:
            23px;

          border:
            1px solid
            var(
              --mwc-border
            );

          border-radius:
            14px;

          background:
            linear-gradient(
              145deg,
              #09131a,
              #04080b
            );
        }

        .mwc-toc-title {
          display:
            flex;

          align-items:
            center;

          gap:
            8px;

          margin-bottom:
            15px;

          font-size:
            10px;

          font-weight:
            900;

          letter-spacing:
            0.1em;

          text-transform:
            uppercase;
        }

        .mwc-toc-title svg {
          width:
            16px;

          height:
            16px;

          color:
            var(
              --mwc-blue-light
            );
        }

        .mwc-toc a {
          display:
            block;

          padding:
            8px 0;

          color:
            #8799a3;

          text-decoration:
            none;

          font-size:
            12px;

          line-height:
            1.45;
        }

        .mwc-toc a:hover {
          color:
            var(
              --mwc-blue-light
            );
        }

        .mwc-toc-cta {
          margin-top:
            18px;

          padding-top:
            17px;

          border-top:
            1px solid
            rgba(
              255,
              255,
              255,
              0.07
            );
        }

        .mwc-toc-cta a {
          color:
            var(
              --mwc-orange-light
            );

          font-weight:
            850;
        }

        /* =====================================================
           ARTICLE TYPOGRAPHY
        ===================================================== */

        .mwc-content {
          min-width:
            0;
        }

        .mwc-content-section {
          margin-bottom:
            62px;

          scroll-margin-top:
            35px;
        }

        .mwc-content-section h2 {
          margin:
            0 0 20px;

          font-size:
            clamp(
              30px,
              3.5vw,
              48px
            );

          line-height:
            1.08;

          letter-spacing:
            -0.045em;
        }

        .mwc-content-section h3 {
          margin:
            33px 0 12px;

          color:
            var(
              --mwc-blue-light
            );

          font-size:
            22px;

          line-height:
            1.25;
        }

        .mwc-content-section p {
          margin:
            0 0 19px;

          color:
            #b6c3ca;

          font-size:
            16px;

          line-height:
            1.85;
        }

        .mwc-content-section strong {
          color:
            #ffffff;
        }

        /* =====================================================
           ANSWER BOX
        ===================================================== */

        .mwc-answer-box {
          margin-bottom:
            55px;

          padding:
            29px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.23
            );

          border-radius:
            17px;

          background:
            radial-gradient(
              circle at
              90% 20%,
              rgba(
                8,
                185,
                244,
                0.06
              ),
              transparent
              35%
            ),
            #071015;
        }

        .mwc-answer-label {
          display:
            flex;

          align-items:
            center;

          gap:
            8px;

          margin-bottom:
            12px;

          color:
            var(
              --mwc-blue-light
            );

          font-size:
            9px;

          font-weight:
            950;

          letter-spacing:
            0.11em;

          text-transform:
            uppercase;
        }

        .mwc-answer-label svg {
          width:
            17px;

          height:
            17px;
        }

        .mwc-answer-box h2 {
          margin:
            0 0 12px;

          font-size:
            clamp(
              24px,
              3vw,
              36px
            );

          line-height:
            1.1;
        }

        .mwc-answer-box p {
          margin:
            0;

          color:
            #b7c5cc;

          font-size:
            15px;

          line-height:
            1.75;
        }

        /* =====================================================
           FACTOR CARDS
        ===================================================== */

        .mwc-factor-grid {
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

          margin-top:
            28px;
        }

        .mwc-factor-card {
          min-height:
            250px;

          padding:
            23px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.14
            );

          border-radius:
            14px;

          background:
            rgba(
              8,
              185,
              244,
              0.018
            );
        }

        .mwc-factor-card:nth-child(even) {
          border-color:
            rgba(
              255,
              121,
              0,
              0.14
            );

          background:
            rgba(
              255,
              121,
              0,
              0.016
            );
        }

        .mwc-factor-card svg {
          width:
            30px;

          height:
            30px;

          margin-bottom:
            16px;

          color:
            var(
              --mwc-blue-light
            );
        }

        .mwc-factor-card:nth-child(even)
          svg {
          color:
            var(
              --mwc-orange-light
            );
        }

        .mwc-factor-card h3 {
          margin:
            0 0 10px;

          color:
            #ffffff;

          font-size:
            18px;
        }

        .mwc-factor-card p {
          margin:
            0;

          color:
            var(
              --mwc-muted
            );

          font-size:
            13px;

          line-height:
            1.7;
        }

        /* =====================================================
           PROJECT TYPES
        ===================================================== */

        .mwc-project-grid {
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
            14px;

          margin-top:
            28px;
        }

        .mwc-project-card {
          display:
            flex;

          flex-direction:
            column;

          min-height:
            310px;

          padding:
            25px;

          border:
            1px solid
            var(
              --mwc-border
            );

          border-radius:
            15px;

          background:
            linear-gradient(
              145deg,
              #0a1218,
              #04080b
            );
        }

        .mwc-project-card.blue {
          border-color:
            rgba(
              8,
              185,
              244,
              0.16
            );
        }

        .mwc-project-card.orange {
          border-color:
            rgba(
              255,
              121,
              0,
              0.16
            );
        }

        .mwc-project-type {
          margin-bottom:
            13px;

          color:
            var(
              --mwc-blue-light
            );

          font-size:
            9px;

          font-weight:
            950;

          letter-spacing:
            0.1em;

          text-transform:
            uppercase;
        }

        .mwc-project-card.orange
          .mwc-project-type {
          color:
            var(
              --mwc-orange-light
            );
        }

        .mwc-project-card h3 {
          margin:
            0 0 12px;

          color:
            #ffffff;

          font-size:
            20px;
        }

        .mwc-project-card p {
          margin:
            0 0 15px;

          color:
            var(
              --mwc-muted
            );

          font-size:
            13px;

          line-height:
            1.68;
        }

        .mwc-project-price {
          margin-top:
            auto;

          padding-top:
            18px;

          border-top:
            1px solid
            rgba(
              255,
              255,
              255,
              0.07
            );

          color:
            #ffffff;

          font-size:
            13px;

          font-weight:
            850;

          line-height:
            1.55;
        }

        /* =====================================================
           CHECKLIST
        ===================================================== */

        .mwc-checklist {
          display:
            grid;

          gap:
            10px;

          margin:
            27px 0 0;

          padding:
            0;

          list-style:
            none;
        }

        .mwc-checklist li {
          display:
            flex;

          align-items:
            flex-start;

          gap:
            10px;

          padding:
            13px 15px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.07
            );

          border-radius:
            9px;

          color:
            #c0ccd2;

          background:
            rgba(
              255,
              255,
              255,
              0.015
            );

          font-size:
            13px;

          line-height:
            1.55;
        }

        .mwc-checklist svg {
          width:
            17px;

          height:
            17px;

          flex:
            0 0 auto;

          margin-top:
            1px;

          color:
            var(
              --mwc-blue-light
            );
        }

        /* =====================================================
           QUESTIONS
        ===================================================== */

        .mwc-question-grid {
          display:
            grid;

          gap:
            12px;

          margin-top:
            27px;
        }

        .mwc-question-card {
          padding:
            23px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.08
            );

          border-radius:
            13px;

          background:
            #071015;
        }

        .mwc-question-card h3 {
          margin:
            0 0 9px;

          color:
            var(
              --mwc-blue-light
            );

          font-size:
            18px;
        }

        .mwc-question-card:nth-child(even)
          h3 {
          color:
            var(
              --mwc-orange-light
            );
        }

        .mwc-question-card p {
          margin:
            0;

          color:
            var(
              --mwc-muted
            );

          font-size:
            13px;

          line-height:
            1.7;
        }

        /* =====================================================
           CALLOUT
        ===================================================== */

        .mwc-callout {
          margin:
            45px 0;

          padding:
            30px;

          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.2
            );

          border-radius:
            16px;

          background:
            radial-gradient(
              circle at
              90% 20%,
              rgba(
                255,
                121,
                0,
                0.06
              ),
              transparent
              35%
            ),
            #071015;
        }

        .mwc-callout-icon {
          width:
            48px;

          height:
            48px;

          display:
            grid;

          place-items:
            center;

          margin-bottom:
            15px;

          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.25
            );

          border-radius:
            12px;

          color:
            var(
              --mwc-orange-light
            );

          background:
            rgba(
              255,
              121,
              0,
              0.045
            );
        }

        .mwc-callout-icon svg {
          width:
            24px;

          height:
            24px;
        }

        .mwc-callout h3 {
          margin:
            0 0 10px;

          color:
            #ffffff;

          font-size:
            22px;
        }

        .mwc-callout p {
          margin:
            0;

          color:
            var(
              --mwc-muted
            );

          font-size:
            14px;

          line-height:
            1.75;
        }

        /* =====================================================
           ARTICLE CTA
        ===================================================== */

        .mwc-article-cta {
          margin-top:
            65px;

          padding:
            clamp(
              35px,
              5vw,
              55px
            );

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.21
            );

          border-radius:
            20px;

          background:
            radial-gradient(
              circle at
              90% 50%,
              rgba(
                255,
                121,
                0,
                0.065
              ),
              transparent
              31%
            ),
            linear-gradient(
              145deg,
              #0a151c,
              #04080b
            );
        }

        .mwc-article-cta h2 {
          max-width:
            750px;

          margin:
            0;

          font-size:
            clamp(
              31px,
              4vw,
              49px
            );

          line-height:
            1.05;

          letter-spacing:
            -0.045em;
        }

        .mwc-article-cta p {
          max-width:
            760px;

          margin:
            17px 0 0;

          color:
            var(
              --mwc-muted
            );

          font-size:
            14px;

          line-height:
            1.75;
        }

        .mwc-button-row {
          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            12px;

          margin-top:
            25px;
        }

        .mwc-btn {
          min-height:
            51px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            8px;

          padding:
            0 20px;

          border-radius:
            9px;

          color:
            #ffffff;

          text-decoration:
            none;

          font-size:
            13px;

          font-weight:
            850;

          transition:
            transform
              0.2s ease;
        }

        .mwc-btn:hover {
          transform:
            translateY(
              -2px
            );
        }

        .mwc-btn-blue {
          border:
            1px solid
            rgba(
              56,
              215,
              255,
              0.5
            );

          background:
            linear-gradient(
              180deg,
              #0ab6ed,
              #0789b6
            );
        }

        .mwc-btn-orange {
          border:
            1px solid
            rgba(
              255,
              176,
              49,
              0.55
            );

          background:
            linear-gradient(
              180deg,
              #ff9519,
              #f16600
            );
        }

        .mwc-btn-dark {
          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.12
            );

          background:
            rgba(
              255,
              255,
              255,
              0.03
            );
        }

        .mwc-btn svg {
          width:
            17px;

          height:
            17px;
        }

        /* =====================================================
           RELATED ARTICLES
        ===================================================== */

        .mwc-related-section {
          padding:
            90px
            clamp(
              20px,
              5vw,
              80px
            );

          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwc-related-inner {
          max-width:
            1280px;

          margin:
            0 auto;
        }

        .mwc-related-title {
          margin-bottom:
            32px;
        }

        .mwc-related-title span {
          display:
            flex;

          align-items:
            center;

          gap:
            8px;

          margin-bottom:
            9px;

          color:
            var(
              --mwc-orange-light
            );

          font-size:
            9px;

          font-weight:
            900;

          letter-spacing:
            0.12em;

          text-transform:
            uppercase;
        }

        .mwc-related-title svg {
          width:
            16px;

          height:
            16px;
        }

        .mwc-related-title h2 {
          margin:
            0;

          font-size:
            clamp(
              31px,
              4vw,
              49px
            );

          letter-spacing:
            -0.045em;
        }

        .mwc-related-grid {
          display:
            grid;

          grid-template-columns:
            repeat(
              3,
              1fr
            );

          gap:
            14px;
        }

        .mwc-related-card {
          min-height:
            245px;

          display:
            flex;

          flex-direction:
            column;

          padding:
            24px;

          border:
            1px solid
            var(
              --mwc-border
            );

          border-radius:
            14px;

          color:
            #ffffff;

          text-decoration:
            none;

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

        .mwc-related-card:hover {
          transform:
            translateY(
              -4px
            );

          border-color:
            rgba(
              8,
              185,
              244,
              0.3
            );
        }

        .mwc-related-card:nth-child(even):hover {
          border-color:
            rgba(
              255,
              121,
              0,
              0.3
            );
        }

        .mwc-related-card h3 {
          margin:
            0;

          font-size:
            18px;

          line-height:
            1.3;
        }

        .mwc-related-card p {
          margin:
            13px 0 0;

          color:
            var(
              --mwc-muted
            );

          font-size:
            12px;

          line-height:
            1.65;
        }

        .mwc-related-link {
          display:
            flex;

          align-items:
            center;

          gap:
            7px;

          margin-top:
            auto;

          padding-top:
            21px;

          color:
            var(
              --mwc-blue-light
            );

          font-size:
            11px;

          font-weight:
            850;
        }

        .mwc-related-card:nth-child(even)
          .mwc-related-link {
          color:
            var(
              --mwc-orange-light
            );
        }

        .mwc-related-link svg {
          width:
            15px;

          height:
            15px;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1100px) {
          .mwc-project-grid {
            grid-template-columns:
              1fr;
          }
        }

        @media (max-width: 1050px) {
          .mwc-hero-inner {
            grid-template-columns:
              1fr;
          }

          .mwc-hero-copy {
            text-align:
              center;
          }

          .mwc-article-label {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwc-hero-description {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwc-meta {
            justify-content:
              center;
          }

          .mwc-related-grid {
            grid-template-columns:
              repeat(
                2,
                1fr
              );
          }

          .mwc-related-card:last-child {
            grid-column:
              1 / -1;
          }
        }

        @media (max-width: 850px) {
          .mwc-article-layout {
            grid-template-columns:
              1fr;
          }

          .mwc-toc {
            position:
              static;

            display:
              grid;

            grid-template-columns:
              repeat(
                2,
                1fr
              );

            gap:
              0 20px;
          }

          .mwc-toc-title,
          .mwc-toc-cta {
            grid-column:
              1 / -1;
          }
        }

        @media (max-width: 700px) {
          .mwc-hero-inner {
            padding:
              70px 16px;
          }

          .mwc-hero h1 {
            font-size:
              clamp(
                43px,
                13vw,
                65px
              );
          }

          .mwc-article-section {
            padding:
              70px 16px
              85px;
          }

          .mwc-factor-grid,
          .mwc-related-grid {
            grid-template-columns:
              1fr;
          }

          .mwc-related-card:last-child {
            grid-column:
              auto;
          }

          .mwc-related-section {
            padding:
              70px 16px;
          }
        }

        @media (max-width: 500px) {
          .mwc-price-stage {
            min-height:
              410px;

            transform:
              scale(
                0.9
              );

            margin:
              -10px -20px;
          }

          .mwc-price-grid {
            grid-template-columns:
              1fr;
          }

          .mwc-toc {
            grid-template-columns:
              1fr;
          }

          .mwc-toc-title,
          .mwc-toc-cta {
            grid-column:
              auto;
          }

          .mwc-content-section p {
            font-size:
              15px;
          }
        }
      `}</style>

      {/* ======================================================
          BREADCRUMBS
      ====================================================== */}

      <div className="mwc-breadcrumb-wrap">
        <nav
          className="mwc-breadcrumbs"
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
            Small Business Website Cost
          </span>
        </nav>
      </div>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="mwc-hero">
        <div className="mwc-hero-inner">
          <div className="mwc-hero-copy">
            <div className="mwc-article-label">
              <BookOpen />
              Website & Business Education
            </div>

            <h1>
              How Much Should a{" "}
              <span className="mwc-blue">
                Small Business Website
              </span>{" "}
              Cost in{" "}
              <span className="mwc-orange">
                2026?
              </span>
            </h1>

            <p className="mwc-hero-description">
              There is no single correct price
              for every business website. The
              useful question is what the
              business actually needs, what work
              is included, and whether the final
              website solves the problem it was
              purchased to solve.
            </p>

            <div className="mwc-meta">
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
            className="mwc-price-stage"
            aria-hidden="true"
          >
            <div className="mwc-price-panel">
              <div className="mwc-price-top">
                <strong>
                  MATTHEW WEB // PROJECT COST
                </strong>

                <span className="mwc-price-status">
                  SCOPE FIRST
                </span>
              </div>

              <div className="mwc-price-main">
                <span>
                  Qualifying Website Projects
                </span>

                <strong>
                  $499
                </strong>

                <p>
                  Matthew Web starting point.
                  Final pricing depends on the
                  actual project scope.
                </p>
              </div>

              <div className="mwc-price-grid">
                <div className="mwc-price-stat">
                  <span>
                    Website
                  </span>

                  <strong>
                    STARTING POINT
                  </strong>
                </div>

                <div className="mwc-price-stat">
                  <span>
                    Support
                  </span>

                  <strong>
                    FROM $49/MO
                  </strong>
                </div>

                <div className="mwc-price-stat">
                  <span>
                    Software
                  </span>

                  <strong>
                    CUSTOM QUOTE
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

      <article className="mwc-article-section">
        <div className="mwc-article-layout">
          {/* ==================================================
              TOC
          ================================================== */}

          <aside className="mwc-toc">
            <div className="mwc-toc-title">
              <BookOpen />
              In This Article
            </div>

            <a href="#short-answer">
              Short Answer
            </a>

            <a href="#why-prices-vary">
              Why Prices Vary
            </a>

            <a href="#cost-factors">
              What Changes the Price?
            </a>

            <a href="#project-types">
              Different Project Types
            </a>

            <a href="#what-should-be-included">
              What Should Be Included?
            </a>

            <a href="#monthly-costs">
              Monthly Costs
            </a>

            <a href="#custom-software">
              Custom Software
            </a>

            <a href="#cheap-vs-expensive">
              Cheap vs Expensive
            </a>

            <a href="#questions-to-ask">
              Questions to Ask
            </a>

            <a href="#matthew-web-pricing">
              Matthew Web Pricing
            </a>

            <div className="mwc-toc-cta">
              <Link href="/pricing">
                View Current Pricing →
              </Link>
            </div>
          </aside>

          <div className="mwc-content">
            {/* =================================================
                SHORT ANSWER
            ================================================= */}

            <section
              className="mwc-answer-box"
              id="short-answer"
            >
              <div className="mwc-answer-label">
                <Zap />
                Short Answer
              </div>

              <h2>
                What Should a Small Business
                Website Cost?
              </h2>

              <p>
                <strong>
                  The price should match the
                  actual scope of the project.
                </strong>{" "}
                A simple business website should
                not be priced like a custom
                software platform, while a site
                with databases, automation,
                customer systems, complex
                integrations, or many pages
                should not be treated like a
                basic brochure website. Matthew
                Web currently offers qualifying
                website projects starting at
                <strong>
                  {" "}
                  $499
                </strong>
                , with more complex work priced
                according to the requirements.
              </p>
            </section>

            {/* =================================================
                WHY PRICES VARY
            ================================================= */}

            <section
              className="mwc-content-section"
              id="why-prices-vary"
            >
              <h2>
                Why Website Prices{" "}
                <span className="mwc-blue">
                  Vary So Much
                </span>
              </h2>

              <p>
                Asking how much a website costs
                is similar to asking how much a
                building, vehicle, or computer
                costs. The category tells you
                what kind of thing you are
                buying, but it does not describe
                everything inside it.
              </p>

              <p>
                One business may need five public
                pages and a contact form. Another
                may need dozens of pages,
                payments, appointment scheduling,
                customer accounts, a database,
                automated emails, private admin
                tools, and integrations with
                other software.
              </p>

              <p>
                Both projects may be called a
                <strong>
                  {" "}
                  website
                </strong>
                , but the amount of work behind
                them is completely different.
              </p>

              <p>
                That is why a useful website
                quote should start with the
                project requirements instead of
                simply choosing a number because
                another business paid the same
                amount.
              </p>
            </section>

            {/* =================================================
                COST FACTORS
            ================================================= */}

            <section
              className="mwc-content-section"
              id="cost-factors"
            >
              <h2>
                What Actually{" "}
                <span className="mwc-orange">
                  Changes the Price?
                </span>
              </h2>

              <p>
                Most website-cost differences can
                be traced back to the amount and
                complexity of work required.
              </p>

              <div className="mwc-factor-grid">
                {costFactors.map(
                  (item) => {
                    const Icon =
                      item.icon;

                    return (
                      <div
                        className="mwc-factor-card"
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
                PROJECT TYPES
            ================================================= */}

            <section
              className="mwc-content-section"
              id="project-types"
            >
              <h2>
                Not Every Website Is the{" "}
                <span className="mwc-blue">
                  Same Type of Project
                </span>
              </h2>

              <p>
                It helps to separate a standard
                small-business website from a
                larger content site and from a
                software-heavy system.
              </p>

              <div className="mwc-project-grid">
                {projectTypes.map(
                  (project) => (
                    <div
                      className={`mwc-project-card ${project.accent}`}
                      key={project.type}
                    >
                      <div className="mwc-project-type">
                        Project Type
                      </div>

                      <h3>
                        {project.type}
                      </h3>

                      <p>
                        {project.fit}
                      </p>

                      <div className="mwc-project-price">
                        {project.pricing}
                      </div>
                    </div>
                  )
                )}
              </div>
            </section>

            {/* =================================================
                WHAT SHOULD BE INCLUDED
            ================================================= */}

            <section
              className="mwc-content-section"
              id="what-should-be-included"
            >
              <h2>
                What Should You Be{" "}
                <span className="mwc-orange">
                  Paying For?
                </span>
              </h2>

              <p>
                Price alone does not tell you
                whether a website is a good
                value.
              </p>

              <p>
                A lower price can be excellent if
                the project is efficient and
                still solves the business&apos;s
                needs. A higher price can also be
                reasonable when the project
                includes substantial design,
                content, software, integrations,
                strategy, testing, or support.
              </p>

              <p>
                What matters is whether the
                customer understands what is
                included.
              </p>

              <ul className="mwc-checklist">
                {valueChecklist.map(
                  (item) => (
                    <li key={item}>
                      <CheckCircle2 />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </section>

            {/* =================================================
                MONTHLY COSTS
            ================================================= */}

            <section
              className="mwc-content-section"
              id="monthly-costs"
            >
              <h2>
                What About{" "}
                <span className="mwc-blue">
                  Monthly Website Costs?
                </span>
              </h2>

              <p>
                The initial design cost and the
                ongoing cost of operating a
                website are two different things.
              </p>

              <p>
                Depending on the arrangement,
                ongoing expenses can involve
                hosting, maintenance, support,
                domain renewals, database usage,
                email delivery, paid APIs,
                software subscriptions, payment
                processing, or other
                infrastructure.
              </p>

              <p>
                Matthew Web currently offers
                ongoing website maintenance and
                support starting at
                <strong>
                  {" "}
                  $49 per month
                </strong>{" "}
                for applicable service
                arrangements.
              </p>

              <p>
                More complex applications may
                require different infrastructure
                and therefore different ongoing
                costs.
              </p>

              <div className="mwc-callout">
                <div className="mwc-callout-icon">
                  <CreditCard />
                </div>

                <h3>
                  Ask About Both Costs
                </h3>

                <p>
                  Before approving a website,
                  understand both the cost to
                  create it and the expected cost
                  to keep it operating. A cheap
                  setup with unclear recurring
                  fees may not be cheaper over
                  time.
                </p>
              </div>
            </section>

            {/* =================================================
                CUSTOM SOFTWARE
            ================================================= */}

            <section
              className="mwc-content-section"
              id="custom-software"
            >
              <h2>
                When Does Website Pricing Become{" "}
                <span className="mwc-orange">
                  Software Pricing?
                </span>
              </h2>

              <p>
                A normal website primarily
                presents information and helps
                visitors take actions such as
                calling, emailing, requesting a
                quote, or completing a form.
              </p>

              <p>
                A project begins moving toward
                custom software when it has to
                store, process, organize, or
                automate more specialized
                business information.
              </p>

              <p>
                Examples can include CRM-style
                lead systems, customer
                dashboards, internal admin tools,
                workflow automation, databases,
                custom booking logic, account
                systems, and integrations with
                outside services.
              </p>

              <p>
                Those projects should usually be
                priced from their technical
                requirements rather than treated
                as a normal website-page package.
              </p>

              <div className="mwc-button-row">
                <Link
                  href="/custom-software"
                  className="mwc-btn mwc-btn-blue"
                >
                  Custom Software
                  <ArrowRight />
                </Link>
              </div>
            </section>

            {/* =================================================
                CHEAP VS EXPENSIVE
            ================================================= */}

            <section
              className="mwc-content-section"
              id="cheap-vs-expensive"
            >
              <h2>
                Is a Cheap Website{" "}
                <span className="mwc-blue">
                  Bad?
                </span>
              </h2>

              <p>
                No. A lower-cost website is not
                automatically low quality.
              </p>

              <p>
                A small project can be affordable
                because the scope is focused, the
                development process is efficient,
                reusable technology is used
                appropriately, and the business
                does not need unnecessary
                features.
              </p>

              <p>
                The problem begins when the low
                price is achieved by removing
                things the customer actually
                needs or when important costs and
                limitations are hidden until
                later.
              </p>

              <h3>
                Is an Expensive Website Better?
              </h3>

              <p>
                Not automatically.
              </p>

              <p>
                A large price does not guarantee
                stronger design, more leads,
                better search visibility, better
                support, or more useful
                technology.
              </p>

              <p>
                The customer should be able to
                connect the price to real work:
                pages, design, content,
                functionality, integrations,
                development time, support, or
                another clear source of value.
              </p>

              <div className="mwc-callout">
                <div className="mwc-callout-icon">
                  <Target />
                </div>

                <h3>
                  Price Should Follow Scope
                </h3>

                <p>
                  The goal is not to make every
                  website as cheap as possible or
                  as expensive as possible. The
                  goal is to match the project
                  cost to the work required and
                  the business value being
                  created.
                </p>
              </div>
            </section>

            {/* =================================================
                QUESTIONS
            ================================================= */}

            <section
              className="mwc-content-section"
              id="questions-to-ask"
            >
              <h2>
                Questions to Ask Before{" "}
                <span className="mwc-orange">
                  Comparing Website Quotes
                </span>
              </h2>

              <p>
                Two quotes are only comparable if
                they are actually describing
                similar work.
              </p>

              <div className="mwc-question-grid">
                {pricingQuestions.map(
                  (item) => (
                    <div
                      className="mwc-question-card"
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
                MATTHEW WEB PRICING
            ================================================= */}

            <section
              className="mwc-content-section"
              id="matthew-web-pricing"
            >
              <h2>
                How Matthew Web Approaches{" "}
                <span className="mwc-blue">
                  Website Pricing
                </span>
              </h2>

              <p>
                Matthew Web&apos;s current
                approach is to keep a clear
                starting point for standard
                small-business website work while
                using custom pricing when a
                project becomes substantially
                larger or more technical.
              </p>

              <p>
                <strong>
                  Qualifying website projects
                  can start at $499.
                </strong>
              </p>

              <p>
                <strong>
                  Ongoing maintenance and support
                  can start at $49 per month
                </strong>{" "}
                depending on the applicable
                service arrangement.
              </p>

              <p>
                Custom software, advanced
                integrations, specialized
                systems, larger websites, and
                other work outside the standard
                scope should be quoted based on
                the actual requirements.
              </p>

              <p>
                This makes the starting price
                useful without pretending that
                every possible website can or
                should cost exactly the same
                amount.
              </p>

              <div className="mwc-button-row">
                <Link
                  href="/pricing"
                  className="mwc-btn mwc-btn-orange"
                >
                  View Pricing
                  <ArrowRight />
                </Link>

                <Link
                  href="/website-design"
                  className="mwc-btn mwc-btn-blue"
                >
                  Website Design
                </Link>
              </div>
            </section>

            {/* =================================================
                ARTICLE CTA
            ================================================= */}

            <section className="mwc-article-cta">
              <h2>
                Need a Price for{" "}
                <span className="mwc-orange">
                  Your Actual Project?
                </span>
              </h2>

              <p>
                Tell Matthew Web what your
                business needs, what website you
                have now, and what you want the
                new system to accomplish. That
                gives us a better starting point
                than guessing from a generic
                package alone.
              </p>

              <div className="mwc-button-row">
                <Link
                  href="/contact-us"
                  className="mwc-btn mwc-btn-orange"
                >
                  Send Project Details
                  <ArrowRight />
                </Link>

                <Link
                  href="/pricing"
                  className="mwc-btn mwc-btn-blue"
                >
                  View Pricing
                </Link>

                <Link
                  href="/examples"
                  className="mwc-btn mwc-btn-dark"
                >
                  See Our Work
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* ======================================================
          RELATED ARTICLES
      ====================================================== */}

      <section className="mwc-related-section">
        <div className="mwc-related-inner">
          <div className="mwc-related-title">
            <span>
              <Sparkles />
              Continue Reading
            </span>

            <h2>
              Related{" "}
              <span className="mwc-blue">
                Articles
              </span>
            </h2>
          </div>

          <div className="mwc-related-grid">
            {relatedArticles.map(
              (article) => (
                <Link
                  href={article.href}
                  className="mwc-related-card"
                  key={article.href}
                >
                  <h3>
                    {article.title}
                  </h3>

                  <p>
                    {article.text}
                  </p>

                  <div className="mwc-related-link">
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
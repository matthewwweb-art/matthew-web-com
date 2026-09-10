import Link from "next/link";

import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Gauge,
  Globe2,
  LayoutTemplate,
  Link2Off,
  MonitorSmartphone,
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
    "7 Signs You Need a New Website for Your Business | Matthew Web",

  description:
    "Learn seven practical signs that a business website may need a redesign, including mobile problems, slow performance, broken features, outdated information, weak conversion paths, search problems, and business growth.",

  alternates: {
    canonical:
      "https://matthew-web.com/7-signs-you-need-a-new-website-for-your-business",
  },

  openGraph: {
    title:
      "7 Signs You Need a New Website for Your Business | Matthew Web",

    description:
      "How to tell whether your business website needs repairs, improvements, or a complete redesign based on usability, performance, functionality, content, search structure, and business needs.",

    url:
      "https://matthew-web.com/7-signs-you-need-a-new-website-for-your-business",

    siteName:
      "Matthew Web",

    type:
      "article",
  },
};

/* ============================================================
   SEVEN SIGNS
============================================================ */

const signs = [
  {
    number:
      "01",

    icon:
      MonitorSmartphone,

    title:
      "The Website Is Difficult to Use on a Phone",

    text:
      "If visitors have to zoom, scroll sideways, fight tiny buttons, or deal with layouts that break on smaller screens, the website is creating unnecessary friction for mobile customers.",

    action:
      "Test important pages, navigation, forms, phone links, tables, images, and calls to action on real mobile screen sizes.",
  },

  {
    number:
      "02",

    icon:
      Gauge,

    title:
      "The Site Is Slow or Unstable",

    text:
      "Long waits, oversized images, heavy scripts, unnecessary animations, layout shifts, or slow interactions can make an otherwise useful website difficult to use.",

    action:
      "Measure the problem before rebuilding. Some sites need optimization rather than a full redesign.",
  },

  {
    number:
      "03",

    icon:
      Link2Off,

    title:
      "Important Features Are Broken",

    text:
      "Broken forms, dead links, missing images, outdated integrations, failed buttons, expired certificates, or other technical problems can interrupt the path between a visitor and the business.",

    action:
      "Prioritize failures that affect contact, payments, booking, quotes, navigation, customer access, or other core functions.",
  },

  {
    number:
      "04",

    icon:
      Clock3,

    title:
      "The Information No Longer Matches the Business",

    text:
      "Old services, incorrect prices, outdated hours, stale staff information, dead offers, old branding, or inaccurate contact details can make the website less useful and less trustworthy.",

    action:
      "Audit what the business offers today and remove information that no longer represents reality.",
  },

  {
    number:
      "05",

    icon:
      Target,

    title:
      "Visitors Do Not Have a Clear Next Step",

    text:
      "A website can look attractive while still making it difficult to understand what the company does or how a customer should call, request a quote, contact the business, schedule, or continue researching.",

    action:
      "Review each important page and identify the one or two most useful actions a visitor should be able to take.",
  },

  {
    number:
      "06",

    icon:
      SearchCheck,

    title:
      "The Search Foundation Is Weak or Confusing",

    text:
      "Missing titles, duplicate pages, poor headings, weak internal links, bad crawl controls, missing sitemaps, unclear service pages, and indexing problems can make the website harder for search systems to understand.",

    action:
      "Audit the technical structure and content before assuming the answer is simply adding more keywords.",
  },

  {
    number:
      "07",

    icon:
      LayoutTemplate,

    title:
      "The Business Has Outgrown What the Website Can Do",

    text:
      "A basic website may have been perfect when the company started. Later, the business may need quote workflows, CRM integration, customer accounts, payments, analytics, automation, databases, booking, or other software capabilities.",

    action:
      "When the website architecture becomes the obstacle, rebuilding around current and future business requirements may be more efficient than repeatedly patching the old system.",
  },
];

/* ============================================================
   REPAIR VS REDESIGN
============================================================ */

const decisions = [
  {
    situation:
      "One or two broken links",

    response:
      "Repair",

    explanation:
      "A small isolated issue normally does not justify rebuilding an entire website.",
  },

  {
    situation:
      "A few oversized images or slow pages",

    response:
      "Optimize",

    explanation:
      "Performance improvements may solve the problem while preserving the existing site.",
  },

  {
    situation:
      "Outdated wording or service information",

    response:
      "Update Content",

    explanation:
      "If the architecture still works, correcting the information may be enough.",
  },

  {
    situation:
      "Poor mobile layout across the entire site",

    response:
      "Consider Redesign",

    explanation:
      "Widespread responsive-layout problems can make rebuilding the front end more practical.",
  },

  {
    situation:
      "Old platform blocks required functionality",

    response:
      "Consider Rebuild",

    explanation:
      "If the business cannot reasonably add the systems it now needs, architecture becomes part of the problem.",
  },

  {
    situation:
      "Broken design, outdated content, weak search structure, and poor functionality together",

    response:
      "Strong Redesign Candidate",

    explanation:
      "Multiple system-wide problems may justify rebuilding instead of continuing to patch each issue separately.",
  },
];

/* ============================================================
   WEBSITE AUDIT
============================================================ */

const auditItems = [
  "Does the site work properly on phones?",
  "Do navigation links work?",
  "Do contact and quote forms submit correctly?",
  "Are phone and email links correct?",
  "Do service pages represent what the business currently offers?",
  "Are prices and offers accurate where displayed?",
  "Are important pages reasonably fast?",
  "Are headings and content easy to understand?",
  "Can visitors tell what the business does quickly?",
  "Is there a clear next action?",
  "Are important public pages crawlable?",
  "Are titles, descriptions, and canonical URLs configured correctly?",
  "Is the sitemap current?",
  "Are private admin or API routes kept out of public search?",
  "Can the website support the business features expected next?",
];

/* ============================================================
   REDESIGN GOALS
============================================================ */

const redesignGoals = [
  {
    icon:
      MonitorSmartphone,

    title:
      "Better Mobile Experience",

    text:
      "Responsive layouts, readable text, useful touch targets, practical navigation, and forms designed around smaller screens.",
  },

  {
    icon:
      Gauge,

    title:
      "Better Performance",

    text:
      "Reduce unnecessary technical weight while protecting the images, functionality, analytics, and visual experience the business actually needs.",
  },

  {
    icon:
      Target,

    title:
      "Clearer Customer Journey",

    text:
      "Help visitors understand the business, compare services, build trust, and reach the appropriate next step.",
  },

  {
    icon:
      SearchCheck,

    title:
      "Cleaner Search Structure",

    text:
      "Build useful service pages, metadata, internal links, crawl controls, canonicals, sitemaps, and indexing preparation into the site.",
  },

  {
    icon:
      ShieldCheck,

    title:
      "More Accurate Business Information",

    text:
      "Remove outdated promises, old services, inaccurate contact information, stale testimonials, and other content that no longer reflects the business.",
  },

  {
    icon:
      Wrench,

    title:
      "Room for Future Functionality",

    text:
      "Choose an architecture that can reasonably support the next stage of forms, dashboards, databases, automation, integrations, payments, or other software.",
  },
];

/* ============================================================
   FAQ
============================================================ */

const faqs = [
  {
    q:
      "How often should a business redesign its website?",

    a:
      "There is no universal redesign schedule. A website should be reviewed regularly, but a redesign is best justified by real problems or changed business requirements rather than age alone.",
  },

  {
    q:
      "Does an old website automatically need to be replaced?",

    a:
      "No. An older website that remains accurate, secure, usable, mobile-friendly, fast enough, searchable, and capable of supporting the business may not need a full replacement.",
  },

  {
    q:
      "Can Matthew Web improve an existing website instead of replacing it?",

    a:
      "Yes. Depending on the existing system and project scope, the right solution may be targeted improvements, content updates, performance work, technical fixes, or a larger redesign.",
  },

  {
    q:
      "Will redesigning my website automatically improve Google rankings?",

    a:
      "No. A redesign can improve technical structure, content organization, mobile usability, performance, and search foundations, but rankings are controlled by search systems and depend on many factors.",
  },

  {
    q:
      "Can a redesign hurt SEO?",

    a:
      "A poorly handled redesign can create problems if useful URLs disappear, redirects are missing, content is removed without a plan, crawl rules change incorrectly, or metadata and internal links are lost. Search considerations should be part of the redesign process.",
  },

  {
    q:
      "When does a website redesign become custom software development?",

    a:
      "When the project begins requiring specialized databases, dashboards, automation, business logic, APIs, customer accounts, internal workflows, or other application functionality, part of the project may move beyond normal website design into custom software.",
  },
];

/* ============================================================
   RELATED ARTICLES
============================================================ */

const relatedArticles = [
  {
    title:
      "How Often Should You Redesign Your Website?",

    href:
      "/how-often-should-you-redesign-your-website",

    text:
      "Learn why redesign timing should be driven by evidence, business changes, and technical condition rather than an arbitrary calendar.",
  },

  {
    title:
      "Why Fast Website Load Speed Helps Leads, SEO, and Trust",

    href:
      "/why-fast-website-load-speed-helps-leads-seo-and-trust",

    text:
      "Learn when website performance is part of the problem and what may be making a site slow.",
  },

  {
    title:
      "How Matthew Web Builds SEO-Ready Small Business Websites",

    href:
      "/how-matthew-web-builds-seo-ready-small-business-websites",

    text:
      "See how structure, metadata, content, internal links, sitemaps, mobile design, and indexing preparation fit together.",
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
    "7 Signs You Need a New Website for Your Business",

  description:
    "Seven practical signs that an existing business website may need improvement or replacement, including mobile usability, performance, broken functionality, outdated information, conversion problems, search structure, and changing business requirements.",

  mainEntityOfPage: {
    "@type":
      "WebPage",

    "@id":
      "https://matthew-web.com/7-signs-you-need-a-new-website-for-your-business",
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
        "7 Signs You Need a New Website for Your Business",

      item:
        "https://matthew-web.com/7-signs-you-need-a-new-website-for-your-business",
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

export default function NewWebsiteSignsArticlePage() {
  return (
    <main className="mwred-page">
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
          --mwred-black: #020304;
          --mwred-muted: #aebbc5;
          --mwred-blue: #08b9f4;
          --mwred-blue-light: #38d7ff;
          --mwred-orange: #ff7900;
          --mwred-orange-light: #ffab31;
          --mwred-green: #35e07e;
          --mwred-border: rgba(255,255,255,.09);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--mwred-black);
        }

        .mwred-page {
          min-height: 100vh;
          overflow: hidden;
          color: #ffffff;
          background: var(--mwred-black);
        }

        .mwred-blue {
          color: var(--mwred-blue-light);
        }

        .mwred-orange {
          color: var(--mwred-orange);
        }

        /* =====================================================
           BREADCRUMBS
        ===================================================== */

        .mwred-breadcrumb-wrap {
          border-bottom:
            1px solid
            rgba(255,255,255,.06);

          background: #04080b;
        }

        .mwred-breadcrumbs {
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

        .mwred-breadcrumbs a {
          color: #8799a3;
          text-decoration: none;
        }

        .mwred-breadcrumbs a:hover {
          color:
            var(--mwred-blue-light);
        }

        .mwred-breadcrumbs svg {
          width: 12px;
          height: 12px;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwred-hero {
          position: relative;
          overflow: hidden;

          border-bottom:
            1px solid
            rgba(8,185,244,.16);

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

        .mwred-hero::before {
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

        .mwred-hero-inner {
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

          gap:
            clamp(45px,6vw,90px);

          padding:
            100px
            clamp(20px,5vw,80px)
            105px;
        }

        .mwred-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          width: fit-content;

          margin-bottom: 19px;

          padding: 8px 12px;

          border:
            1px solid
            rgba(8,185,244,.27);

          border-radius: 999px;

          color: #d9f8ff;

          background:
            rgba(8,185,244,.055);

          font-size: 10px;
          font-weight: 900;

          letter-spacing: .13em;
          text-transform: uppercase;
        }

        .mwred-label svg {
          width: 16px;
          height: 16px;
        }

        .mwred-hero h1 {
          max-width: 980px;

          margin: 0;

          font-size:
            clamp(48px,5.6vw,84px);

          line-height: .99;

          letter-spacing: -.06em;
        }

        .mwred-description {
          max-width: 800px;

          margin: 25px 0 0;

          color: #b8c6cf;

          font-size:
            clamp(16px,1.4vw,20px);

          line-height: 1.75;
        }

        .mwred-meta {
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
           HERO DIAGNOSTIC
        ===================================================== */

        .mwred-stage {
          min-height: 470px;

          display: grid;
          place-items: center;
        }

        .mwred-console {
          width:
            min(100%,520px);

          padding: 24px;

          border:
            1px solid
            rgba(8,185,244,.28);

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
            0 30px 70px
            rgba(0,0,0,.45);
        }

        .mwred-console-top {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-bottom: 18px;
        }

        .mwred-console-top strong {
          color: #81929d;

          font-size: 9px;

          letter-spacing: .12em;
        }

        .mwred-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;

          color: #8da0aa;

          font-size: 8px;
          font-weight: 900;
        }

        .mwred-status::before {
          content: "";

          width: 6px;
          height: 6px;

          border-radius: 50%;

          background:
            var(--mwred-orange);

          box-shadow:
            0 0 7px
            rgba(255,121,0,.75);
        }

        .mwred-audit-main {
          padding: 18px;

          border:
            1px solid
            rgba(255,121,0,.18);

          border-radius: 11px;

          background: #071015;
        }

        .mwred-audit-main span {
          color: #657984;

          font-size: 7px;
          font-weight: 900;

          letter-spacing: .09em;
          text-transform: uppercase;
        }

        .mwred-audit-title {
          display: flex;
          align-items: center;
          gap: 9px;

          margin-top: 10px;

          color:
            var(--mwred-orange-light);

          font-size: 15px;
          font-weight: 900;
        }

        .mwred-audit-title svg {
          width: 22px;
          height: 22px;
        }

        .mwred-audit-main p {
          margin: 10px 0 0;

          color: #788b95;

          font-size: 9px;
          line-height: 1.6;
        }

        .mwred-diagnostic-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 9px;

          margin-top: 10px;
        }

        .mwred-diagnostic-card {
          min-height: 95px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          gap: 8px;

          padding: 12px;

          border:
            1px solid
            rgba(8,185,244,.14);

          border-radius: 9px;

          background: #071015;

          text-align: center;
        }

        .mwred-diagnostic-card:nth-child(even) {
          border-color:
            rgba(255,121,0,.14);
        }

        .mwred-diagnostic-card svg {
          width: 22px;
          height: 22px;

          color:
            var(--mwred-blue-light);
        }

        .mwred-diagnostic-card:nth-child(even)
          svg {
          color:
            var(--mwred-orange-light);
        }

        .mwred-diagnostic-card strong {
          font-size: 8px;
          letter-spacing: .05em;
        }

        /* =====================================================
           ARTICLE
        ===================================================== */

        .mwred-article-section {
          padding:
            95px
            clamp(20px,5vw,80px)
            110px;

          background: #020304;
        }

        .mwred-layout {
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

        .mwred-toc {
          position: sticky;
          top: 30px;

          padding: 23px;

          border:
            1px solid
            var(--mwred-border);

          border-radius: 14px;

          background:
            linear-gradient(
              145deg,
              #09131a,
              #04080b
            );
        }

        .mwred-toc-title {
          display: flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 15px;

          font-size: 10px;
          font-weight: 900;

          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .mwred-toc-title svg {
          width: 16px;
          height: 16px;

          color:
            var(--mwred-blue-light);
        }

        .mwred-toc a {
          display: block;

          padding: 8px 0;

          color: #8799a3;

          text-decoration: none;

          font-size: 12px;
          line-height: 1.45;
        }

        .mwred-toc a:hover {
          color:
            var(--mwred-blue-light);
        }

        .mwred-toc-cta {
          margin-top: 18px;

          padding-top: 17px;

          border-top:
            1px solid
            rgba(255,255,255,.07);
        }

        .mwred-toc-cta a {
          color:
            var(--mwred-orange-light);

          font-weight: 850;
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .mwred-content {
          min-width: 0;
        }

        .mwred-section {
          margin-bottom: 62px;

          scroll-margin-top: 35px;
        }

        .mwred-section h2 {
          margin: 0 0 20px;

          font-size:
            clamp(30px,3.5vw,48px);

          line-height: 1.08;

          letter-spacing: -.045em;
        }

        .mwred-section h3 {
          margin: 32px 0 12px;

          color:
            var(--mwred-blue-light);

          font-size: 21px;
          line-height: 1.3;
        }

        .mwred-section p {
          margin: 0 0 19px;

          color: #b6c3ca;

          font-size: 16px;
          line-height: 1.85;
        }

        .mwred-section strong {
          color: #ffffff;
        }

        /* =====================================================
           ANSWER
        ===================================================== */

        .mwred-answer {
          margin-bottom: 55px;

          padding: 29px;

          border:
            1px solid
            rgba(8,185,244,.23);

          border-radius: 17px;

          background:
            radial-gradient(
              circle at 90% 20%,
              rgba(8,185,244,.06),
              transparent 35%
            ),
            #071015;
        }

        .mwred-answer-label {
          display: flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 12px;

          color:
            var(--mwred-blue-light);

          font-size: 9px;
          font-weight: 950;

          letter-spacing: .11em;
          text-transform: uppercase;
        }

        .mwred-answer-label svg {
          width: 17px;
          height: 17px;
        }

        .mwred-answer h2 {
          margin: 0 0 12px;

          font-size:
            clamp(24px,3vw,36px);

          line-height: 1.1;
        }

        .mwred-answer p {
          margin: 0;

          color: #b7c5cc;

          font-size: 15px;
          line-height: 1.75;
        }

        /* =====================================================
           SIGNS
        ===================================================== */

        .mwred-sign-grid {
          display: grid;
          gap: 14px;

          margin-top: 28px;
        }

        .mwred-sign-card {
          display: grid;

          grid-template-columns:
            80px 1fr;

          gap: 22px;

          padding: 25px;

          border:
            1px solid
            rgba(8,185,244,.14);

          border-radius: 14px;

          background: #071015;
        }

        .mwred-sign-card:nth-child(even) {
          border-color:
            rgba(255,121,0,.14);
        }

        .mwred-sign-icon {
          width: 70px;
          height: 70px;

          display: grid;
          place-items: center;

          border:
            1px solid
            rgba(8,185,244,.22);

          border-radius: 16px;

          color:
            var(--mwred-blue-light);

          background:
            rgba(8,185,244,.04);
        }

        .mwred-sign-card:nth-child(even)
          .mwred-sign-icon {
          border-color:
            rgba(255,121,0,.22);

          color:
            var(--mwred-orange-light);

          background:
            rgba(255,121,0,.035);
        }

        .mwred-sign-icon svg {
          width: 30px;
          height: 30px;
        }

        .mwred-sign-number {
          margin-bottom: 7px;

          color:
            var(--mwred-blue-light);

          font-size: 9px;
          font-weight: 950;

          letter-spacing: .1em;
        }

        .mwred-sign-card:nth-child(even)
          .mwred-sign-number {
          color:
            var(--mwred-orange-light);
        }

        .mwred-sign-card h3 {
          margin: 0 0 10px;

          color: #ffffff;

          font-size: 20px;
        }

        .mwred-sign-card p {
          margin: 0 0 14px;

          color:
            var(--mwred-muted);

          font-size: 13px;
          line-height: 1.72;
        }

        .mwred-action {
          padding: 12px 14px;

          border-left:
            2px solid
            var(--mwred-blue);

          color: #c6d4db;

          background:
            rgba(8,185,244,.035);

          font-size: 12px;
          line-height: 1.6;
        }

        .mwred-sign-card:nth-child(even)
          .mwred-action {
          border-left-color:
            var(--mwred-orange);

          background:
            rgba(255,121,0,.03);
        }

        /* =====================================================
           DECISION TABLE
        ===================================================== */

        .mwred-table-wrap {
          margin-top: 28px;

          overflow-x: auto;

          border:
            1px solid
            var(--mwred-border);

          border-radius: 15px;

          background: #071015;
        }

        .mwred-table {
          width: 100%;
          min-width: 760px;

          border-collapse: collapse;
        }

        .mwred-table th,
        .mwred-table td {
          padding: 18px;

          border-bottom:
            1px solid
            rgba(255,255,255,.07);

          vertical-align: top;
          text-align: left;
        }

        .mwred-table th {
          color: #ffffff;

          background: #0a151b;

          font-size: 10px;
          letter-spacing: .08em;

          text-transform: uppercase;
        }

        .mwred-table th:nth-child(2) {
          color:
            var(--mwred-orange-light);
        }

        .mwred-table td {
          color: #aebbc5;

          font-size: 12px;
          line-height: 1.65;
        }

        .mwred-table td:first-child {
          color: #ffffff;
          font-weight: 800;
        }

        .mwred-table td:nth-child(2) {
          color:
            var(--mwred-blue-light);

          font-weight: 850;
        }

        .mwred-table tr:last-child td {
          border-bottom: 0;
        }

        /* =====================================================
           CHECKLIST
        ===================================================== */

        .mwred-checklist {
          display: grid;
          gap: 10px;

          margin: 25px 0;

          padding: 0;

          list-style: none;
        }

        .mwred-checklist li {
          display: flex;
          align-items: flex-start;
          gap: 10px;

          padding: 13px 15px;

          border:
            1px solid
            rgba(255,255,255,.07);

          border-radius: 9px;

          color: #c0ccd2;

          background:
            rgba(255,255,255,.015);

          font-size: 13px;
          line-height: 1.55;
        }

        .mwred-checklist svg {
          width: 17px;
          height: 17px;

          flex: 0 0 auto;

          margin-top: 1px;

          color:
            var(--mwred-blue-light);
        }

        /* =====================================================
           GOALS
        ===================================================== */

        .mwred-goal-grid {
          display: grid;

          grid-template-columns:
            repeat(2,1fr);

          gap: 14px;

          margin-top: 27px;
        }

        .mwred-goal-card {
          min-height: 245px;

          padding: 23px;

          border:
            1px solid
            rgba(8,185,244,.14);

          border-radius: 14px;

          background:
            rgba(8,185,244,.018);
        }

        .mwred-goal-card:nth-child(even) {
          border-color:
            rgba(255,121,0,.14);

          background:
            rgba(255,121,0,.016);
        }

        .mwred-goal-card svg {
          width: 30px;
          height: 30px;

          margin-bottom: 16px;

          color:
            var(--mwred-blue-light);
        }

        .mwred-goal-card:nth-child(even)
          svg {
          color:
            var(--mwred-orange-light);
        }

        .mwred-goal-card h3 {
          margin: 0 0 10px;

          color: #ffffff;

          font-size: 18px;
        }

        .mwred-goal-card p {
          margin: 0;

          color:
            var(--mwred-muted);

          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           CALLOUT
        ===================================================== */

        .mwred-callout {
          margin: 45px 0;

          padding: 30px;

          border:
            1px solid
            rgba(255,121,0,.2);

          border-radius: 16px;

          background:
            radial-gradient(
              circle at 90% 20%,
              rgba(255,121,0,.06),
              transparent 35%
            ),
            #071015;
        }

        .mwred-callout-icon {
          width: 48px;
          height: 48px;

          display: grid;
          place-items: center;

          margin-bottom: 15px;

          border:
            1px solid
            rgba(255,121,0,.25);

          border-radius: 12px;

          color:
            var(--mwred-orange-light);

          background:
            rgba(255,121,0,.045);
        }

        .mwred-callout-icon svg {
          width: 24px;
          height: 24px;
        }

        .mwred-callout h3 {
          margin: 0 0 10px;

          color: #ffffff;

          font-size: 22px;
        }

        .mwred-callout p {
          margin: 0;

          color:
            var(--mwred-muted);

          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           FAQ
        ===================================================== */

        .mwred-faq-grid {
          display: grid;
          gap: 12px;

          margin-top: 27px;
        }

        .mwred-faq-card {
          padding: 23px;

          border:
            1px solid
            var(--mwred-border);

          border-radius: 13px;

          background: #071015;
        }

        .mwred-faq-card h3 {
          margin: 0 0 9px;

          color:
            var(--mwred-blue-light);

          font-size: 17px;
        }

        .mwred-faq-card:nth-child(even)
          h3 {
          color:
            var(--mwred-orange-light);
        }

        .mwred-faq-card p {
          margin: 0;

          color:
            var(--mwred-muted);

          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .mwred-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;

          margin-top: 25px;
        }

        .mwred-btn {
          min-height: 51px;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          padding: 0 20px;

          border-radius: 9px;

          color: #ffffff;

          text-decoration: none;

          font-size: 13px;
          font-weight: 850;

          transition:
            transform .2s ease;
        }

        .mwred-btn:hover {
          transform:
            translateY(-2px);
        }

        .mwred-btn-blue {
          border:
            1px solid
            rgba(56,215,255,.5);

          background:
            linear-gradient(
              180deg,
              #0ab6ed,
              #0789b6
            );
        }

        .mwred-btn-orange {
          border:
            1px solid
            rgba(255,176,49,.55);

          background:
            linear-gradient(
              180deg,
              #ff9519,
              #f16600
            );
        }

        .mwred-btn-dark {
          border:
            1px solid
            rgba(255,255,255,.12);

          background:
            rgba(255,255,255,.03);
        }

        .mwred-btn svg {
          width: 17px;
          height: 17px;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .mwred-article-cta {
          margin-top: 65px;

          padding:
            clamp(35px,5vw,55px);

          border:
            1px solid
            rgba(8,185,244,.21);

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

        .mwred-article-cta h2 {
          max-width: 820px;

          margin: 0;

          font-size:
            clamp(31px,4vw,49px);

          line-height: 1.05;
          letter-spacing: -.045em;
        }

        .mwred-article-cta p {
          max-width: 780px;

          margin: 17px 0 0;

          color:
            var(--mwred-muted);

          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           RELATED
        ===================================================== */

        .mwred-related-section {
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

        .mwred-related-inner {
          max-width: 1280px;

          margin: 0 auto;
        }

        .mwred-related-title {
          margin-bottom: 32px;
        }

        .mwred-related-title span {
          display: flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 9px;

          color:
            var(--mwred-orange-light);

          font-size: 9px;
          font-weight: 900;

          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .mwred-related-title svg {
          width: 16px;
          height: 16px;
        }

        .mwred-related-title h2 {
          margin: 0;

          font-size:
            clamp(31px,4vw,49px);

          letter-spacing: -.045em;
        }

        .mwred-related-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 14px;
        }

        .mwred-related-card {
          min-height: 245px;

          display: flex;
          flex-direction: column;

          padding: 24px;

          border:
            1px solid
            var(--mwred-border);

          border-radius: 14px;

          color: #ffffff;

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

        .mwred-related-card:hover {
          transform:
            translateY(-4px);

          border-color:
            rgba(8,185,244,.3);
        }

        .mwred-related-card:nth-child(even):hover {
          border-color:
            rgba(255,121,0,.3);
        }

        .mwred-related-card h3 {
          margin: 0;

          font-size: 18px;
          line-height: 1.3;
        }

        .mwred-related-card p {
          margin: 13px 0 0;

          color:
            var(--mwred-muted);

          font-size: 12px;
          line-height: 1.65;
        }

        .mwred-related-link {
          display: flex;
          align-items: center;
          gap: 7px;

          margin-top: auto;
          padding-top: 21px;

          color:
            var(--mwred-blue-light);

          font-size: 11px;
          font-weight: 850;
        }

        .mwred-related-card:nth-child(even)
          .mwred-related-link {
          color:
            var(--mwred-orange-light);
        }

        .mwred-related-link svg {
          width: 15px;
          height: 15px;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1050px) {
          .mwred-hero-inner {
            grid-template-columns: 1fr;
          }

          .mwred-hero-copy {
            text-align: center;
          }

          .mwred-label {
            margin-left: auto;
            margin-right: auto;
          }

          .mwred-description {
            margin-left: auto;
            margin-right: auto;
          }

          .mwred-meta {
            justify-content: center;
          }

          .mwred-related-grid {
            grid-template-columns:
              repeat(2,1fr);
          }

          .mwred-related-card:last-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 850px) {
          .mwred-layout {
            grid-template-columns: 1fr;
          }

          .mwred-toc {
            position: static;

            display: grid;

            grid-template-columns:
              repeat(2,1fr);

            gap: 0 20px;
          }

          .mwred-toc-title,
          .mwred-toc-cta {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 700px) {
          .mwred-hero-inner {
            padding: 70px 16px;
          }

          .mwred-hero h1 {
            font-size:
              clamp(43px,13vw,65px);
          }

          .mwred-article-section {
            padding:
              70px 16px 85px;
          }

          .mwred-goal-grid,
          .mwred-related-grid {
            grid-template-columns: 1fr;
          }

          .mwred-related-card:last-child {
            grid-column: auto;
          }

          .mwred-related-section {
            padding: 70px 16px;
          }
        }

        @media (max-width: 560px) {
          .mwred-sign-card {
            grid-template-columns: 1fr;
          }

          .mwred-sign-icon {
            width: 58px;
            height: 58px;
          }
        }

        @media (max-width: 500px) {
          .mwred-stage {
            min-height: 450px;

            transform:
              scale(.9);

            margin: -10px -20px;
          }

          .mwred-diagnostic-grid {
            grid-template-columns: 1fr;
          }

          .mwred-toc {
            grid-template-columns: 1fr;
          }

          .mwred-toc-title,
          .mwred-toc-cta {
            grid-column: auto;
          }

          .mwred-section p {
            font-size: 15px;
          }
        }
      `}</style>

      {/* ======================================================
          BREADCRUMBS
      ====================================================== */}

      <div className="mwred-breadcrumb-wrap">
        <nav
          className="mwred-breadcrumbs"
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
            7 Signs You Need a New Website
          </span>
        </nav>
      </div>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="mwred-hero">
        <div className="mwred-hero-inner">
          <div className="mwred-hero-copy">
            <div className="mwred-label">
              <BookOpen />
              Website & Business Education
            </div>

            <h1>
              7 Signs You Need a{" "}
              <span className="mwred-blue">
                New Website
              </span>{" "}
              for Your{" "}
              <span className="mwred-orange">
                Business
              </span>
            </h1>

            <p className="mwred-description">
              A website does not need to be
              replaced simply because it has
              been online for a few years. The
              better question is whether the
              current site still serves the
              business and its customers
              effectively.
            </p>

            <div className="mwred-meta">
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
            className="mwred-stage"
            aria-hidden="true"
          >
            <div className="mwred-console">
              <div className="mwred-console-top">
                <strong>
                  WEBSITE // CONDITION AUDIT
                </strong>

                <span className="mwred-status">
                  REVIEW
                </span>
              </div>

              <div className="mwred-audit-main">
                <span>
                  REDESIGN DECISION
                </span>

                <div className="mwred-audit-title">
                  <AlertTriangle />
                  Diagnose Before Rebuilding
                </div>

                <p>
                  Mobile → Performance →
                  Functionality → Content →
                  Search → Business Fit
                </p>
              </div>

              <div className="mwred-diagnostic-grid">
                <div className="mwred-diagnostic-card">
                  <MonitorSmartphone />
                  <strong>
                    MOBILE
                  </strong>
                </div>

                <div className="mwred-diagnostic-card">
                  <Gauge />
                  <strong>
                    SPEED
                  </strong>
                </div>

                <div className="mwred-diagnostic-card">
                  <SearchCheck />
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

      <article className="mwred-article-section">
        <div className="mwred-layout">
          {/* ==================================================
              TOC
          ================================================== */}

          <aside className="mwred-toc">
            <div className="mwred-toc-title">
              <BookOpen />
              In This Article
            </div>

            <a href="#short-answer">
              Short Answer
            </a>

            <a href="#seven-signs">
              Seven Warning Signs
            </a>

            <a href="#repair-or-redesign">
              Repair or Redesign?
            </a>

            <a href="#audit">
              Website Audit
            </a>

            <a href="#redesign-goals">
              Redesign Goals
            </a>

            <a href="#seo">
              Protect SEO
            </a>

            <a href="#business-growth">
              Business Growth
            </a>

            <a href="#faq">
              Redesign FAQs
            </a>

            <div className="mwred-toc-cta">
              <Link href="/website-design">
                Website Design Services →
              </Link>
            </div>
          </aside>

          <div className="mwred-content">
            {/* =================================================
                SHORT ANSWER
            ================================================= */}

            <section
              className="mwred-answer"
              id="short-answer"
            >
              <div className="mwred-answer-label">
                <Zap />
                Short Answer
              </div>

              <h2>
                How Do You Know When You Need a
                New Website?
              </h2>

              <p>
                <strong>
                  Consider a redesign when
                  widespread problems with
                  mobile usability, performance,
                  broken functionality,
                  outdated information, weak
                  conversion paths, search
                  structure, or business
                  requirements make the current
                  website difficult to repair or
                  expand effectively.
                </strong>{" "}
                Age alone is not enough reason to
                rebuild a working website.
              </p>
            </section>

            {/* =================================================
                SEVEN SIGNS
            ================================================= */}

            <section
              className="mwred-section"
              id="seven-signs"
            >
              <h2>
                Seven Signs Your Website May Be{" "}
                <span className="mwred-orange">
                  Holding the Business Back
                </span>
              </h2>

              <p>
                One isolated problem usually does
                not mean the entire website
                should be thrown away.
              </p>

              <p>
                The redesign case becomes stronger
                when several important problems
                affect the site at the same time.
              </p>

              <div className="mwred-sign-grid">
                {signs.map(
                  (sign) => {
                    const Icon =
                      sign.icon;

                    return (
                      <div
                        className="mwred-sign-card"
                        key={sign.number}
                      >
                        <div className="mwred-sign-icon">
                          <Icon />
                        </div>

                        <div>
                          <div className="mwred-sign-number">
                            SIGN {sign.number}
                          </div>

                          <h3>
                            {sign.title}
                          </h3>

                          <p>
                            {sign.text}
                          </p>

                          <div className="mwred-action">
                            <strong>
                              Check:
                            </strong>{" "}
                            {sign.action}
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </section>

            {/* =================================================
                REPAIR OR REDESIGN
            ================================================= */}

            <section
              className="mwred-section"
              id="repair-or-redesign"
            >
              <h2>
                Does the Website Need a{" "}
                <span className="mwred-blue">
                  Repair or a Redesign?
                </span>
              </h2>

              <p>
                Rebuilding should not be the
                automatic answer to every website
                problem.
              </p>

              <p>
                Sometimes the most efficient
                solution is simply correcting the
                problem that already exists.
              </p>

              <div className="mwred-table-wrap">
                <table className="mwred-table">
                  <thead>
                    <tr>
                      <th>
                        Situation
                      </th>

                      <th>
                        Possible Response
                      </th>

                      <th>
                        Why
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {decisions.map(
                      (item) => (
                        <tr key={item.situation}>
                          <td>
                            {item.situation}
                          </td>

                          <td>
                            {item.response}
                          </td>

                          <td>
                            {item.explanation}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>

              <div className="mwred-callout">
                <div className="mwred-callout-icon">
                  <Wrench />
                </div>

                <h3>
                  Do Not Rebuild What Only Needs
                  a Repair
                </h3>

                <p>
                  The customer should not be
                  pushed into a larger project
                  simply because a developer can
                  sell one. Start by identifying
                  the actual business and
                  technical problem.
                </p>
              </div>
            </section>

            {/* =================================================
                AUDIT
            ================================================= */}

            <section
              className="mwred-section"
              id="audit"
            >
              <h2>
                Run a Website{" "}
                <span className="mwred-orange">
                  Audit First
                </span>
              </h2>

              <p>
                Before deciding whether the site
                should be rebuilt, inspect what is
                actually working and what is not.
              </p>

              <ul className="mwred-checklist">
                {auditItems.map(
                  (item) => (
                    <li key={item}>
                      <CheckCircle2 />
                      {item}
                    </li>
                  )
                )}
              </ul>

              <p>
                This separates
                <strong>
                  {" "}
                  evidence
                </strong>{" "}
                from the vague feeling that a
                website simply “looks old.”
              </p>
            </section>

            {/* =================================================
                REDESIGN GOALS
            ================================================= */}

            <section
              className="mwred-section"
              id="redesign-goals"
            >
              <h2>
                A Redesign Should Have{" "}
                <span className="mwred-blue">
                  Defined Goals
                </span>
              </h2>

              <p>
                If the decision is made to
                rebuild, the new website should
                solve specific problems.
              </p>

              <div className="mwred-goal-grid">
                {redesignGoals.map(
                  (item) => {
                    const Icon =
                      item.icon;

                    return (
                      <div
                        className="mwred-goal-card"
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

              <div className="mwred-callout">
                <div className="mwred-callout-icon">
                  <Target />
                </div>

                <h3>
                  “Make It Look New” Is Not
                  Enough
                </h3>

                <p>
                  Visual improvement matters,
                  but a useful redesign should
                  also improve the underlying
                  content, customer journey,
                  functionality, technical
                  structure, or ability to support
                  the business.
                </p>
              </div>
            </section>

            {/* =================================================
                SEO
            ================================================= */}

            <section
              className="mwred-section"
              id="seo"
            >
              <h2>
                Protect the Existing{" "}
                <span className="mwred-orange">
                  Search Foundation
                </span>
              </h2>

              <p>
                A redesign changes more than what
                customers see.
              </p>

              <p>
                URLs, navigation, internal links,
                headings, page copy, metadata,
                canonical URLs, crawl rules,
                structured data, sitemaps, and
                redirects can all change during
                the project.
              </p>

              <p>
                That means search considerations
                should be part of the redesign
                plan from the beginning.
              </p>

              <ul className="mwred-checklist">
                <li>
                  <CheckCircle2 />
                  Inventory important existing
                  URLs
                </li>

                <li>
                  <CheckCircle2 />
                  Preserve useful content where
                  appropriate
                </li>

                <li>
                  <CheckCircle2 />
                  Redirect retired URLs when
                  there is a relevant replacement
                </li>

                <li>
                  <CheckCircle2 />
                  Recheck titles and descriptions
                </li>

                <li>
                  <CheckCircle2 />
                  Verify canonical URLs
                </li>

                <li>
                  <CheckCircle2 />
                  Review robots and noindex rules
                </li>

                <li>
                  <CheckCircle2 />
                  Update the sitemap
                </li>

                <li>
                  <CheckCircle2 />
                  Check internal links
                </li>

                <li>
                  <CheckCircle2 />
                  Inspect important pages after
                  launch
                </li>
              </ul>

              <div className="mwred-buttons">
                <Link
                  href="/seo-and-indexing"
                  className="mwred-btn mwred-btn-blue"
                >
                  SEO & Indexing
                  <ArrowRight />
                </Link>

                <Link
                  href="/why-google-indexing-matters-after-launching-a-new-website"
                  className="mwred-btn mwred-btn-dark"
                >
                  Learn About Indexing
                </Link>
              </div>
            </section>

            {/* =================================================
                BUSINESS GROWTH
            ================================================= */}

            <section
              className="mwred-section"
              id="business-growth"
            >
              <h2>
                Sometimes the Website Is Not
                Broken. The Business Has Just{" "}
                <span className="mwred-blue">
                  Outgrown It.
                </span>
              </h2>

              <p>
                A five-page website can be exactly
                what a new business needs.
              </p>

              <p>
                Later, the same company may need
                a very different digital system.
              </p>

              <p>
                New requirements might include:
              </p>

              <ul className="mwred-checklist">
                <li>
                  <CheckCircle2 />
                  Quote forms
                </li>

                <li>
                  <CheckCircle2 />
                  Booking workflows
                </li>

                <li>
                  <CheckCircle2 />
                  Payments
                </li>

                <li>
                  <CheckCircle2 />
                  CRM integration
                </li>

                <li>
                  <CheckCircle2 />
                  Customer accounts
                </li>

                <li>
                  <CheckCircle2 />
                  Internal dashboards
                </li>

                <li>
                  <CheckCircle2 />
                  Databases
                </li>

                <li>
                  <CheckCircle2 />
                  Analytics
                </li>

                <li>
                  <CheckCircle2 />
                  APIs
                </li>

                <li>
                  <CheckCircle2 />
                  Workflow automation
                </li>
              </ul>

              <p>
                At that point, the question may
                no longer be:
              </p>

              <p>
                <strong>
                  “Does the design look old?”
                </strong>
              </p>

              <p>
                It becomes:
              </p>

              <p>
                <strong>
                  “Can this system support what
                  the business needs to do?”
                </strong>
              </p>

              <div className="mwred-buttons">
                <Link
                  href="/website-design-vs-custom-software-what-does-your-business-need"
                  className="mwred-btn mwred-btn-blue"
                >
                  Website vs Custom Software
                  <ArrowRight />
                </Link>

                <Link
                  href="/custom-software"
                  className="mwred-btn mwred-btn-dark"
                >
                  Custom Software
                </Link>
              </div>
            </section>

            {/* =================================================
                FAQ
            ================================================= */}

            <section
              className="mwred-section"
              id="faq"
            >
              <h2>
                Website Redesign{" "}
                <span className="mwred-orange">
                  FAQs
                </span>
              </h2>

              <div className="mwred-faq-grid">
                {faqs.map(
                  (item) => (
                    <div
                      className="mwred-faq-card"
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

            <section className="mwred-article-cta">
              <h2>
                Not Sure Whether Your Website
                Needs a{" "}
                <span className="mwred-orange">
                  Repair or a Rebuild?
                </span>
              </h2>

              <p>
                Matthew Web can review the
                website&apos;s mobile experience,
                content, functionality,
                performance, search structure,
                customer journey, and future
                business requirements to help
                determine what kind of work
                actually makes sense.
              </p>

              <div className="mwred-buttons">
                <Link
                  href="/contact-us"
                  className="mwred-btn mwred-btn-orange"
                >
                  Discuss Your Website
                  <ArrowRight />
                </Link>

                <Link
                  href="/website-design"
                  className="mwred-btn mwred-btn-blue"
                >
                  Website Design
                </Link>

                <Link
                  href="/examples"
                  className="mwred-btn mwred-btn-dark"
                >
                  View Matthew Web Projects
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* ======================================================
          RELATED
      ====================================================== */}

      <section className="mwred-related-section">
        <div className="mwred-related-inner">
          <div className="mwred-related-title">
            <span>
              <Sparkles />
              Continue Reading
            </span>

            <h2>
              Related{" "}
              <span className="mwred-blue">
                Articles
              </span>
            </h2>
          </div>

          <div className="mwred-related-grid">
            {relatedArticles.map(
              (article) => (
                <Link
                  href={article.href}
                  className="mwred-related-card"
                  key={article.href}
                >
                  <h3>
                    {article.title}
                  </h3>

                  <p>
                    {article.text}
                  </p>

                  <div className="mwred-related-link">
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
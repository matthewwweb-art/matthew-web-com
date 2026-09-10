import Link from "next/link";

import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  FileText,
  FormInput,
  Gauge,
  Globe2,
  Layers3,
  MonitorSmartphone,
  Network,
  SearchCheck,
  ServerCog,
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
    "Website Design vs Custom Software: What Does Your Business Need? | Matthew Web",

  description:
    "Learn the difference between website design and custom software, when a business needs one or the other, and when a website should connect to dashboards, databases, automation, CRM tools, or other software.",

  alternates: {
    canonical:
      "https://matthew-web.com/website-design-vs-custom-software-what-does-your-business-need",
  },

  openGraph: {
    title:
      "Website Design vs Custom Software: What Does Your Business Need? | Matthew Web",

    description:
      "A practical guide to deciding whether your business needs a better website, custom software, or a connected combination of both.",

    url:
      "https://matthew-web.com/website-design-vs-custom-software-what-does-your-business-need",

    siteName:
      "Matthew Web",

    type:
      "article",
  },
};

/* ============================================================
   COMPARISON DATA
============================================================ */

const comparisonRows = [
  {
    area:
      "Primary Purpose",

    website:
      "Present information, explain services, build trust, attract visitors, and create customer-facing conversion paths.",

    software:
      "Process information, automate workflows, organize data, manage operations, and perform specialized business functions.",
  },

  {
    area:
      "Typical Users",

    website:
      "Prospective customers, existing customers, visitors, search users, and the public.",

    software:
      "Owners, employees, customers, administrators, contractors, or other authorized users depending on the system.",
  },

  {
    area:
      "Examples",

    website:
      "Home pages, service pages, about pages, portfolios, pricing, articles, FAQs, contact forms, and landing pages.",

    software:
      "CRM dashboards, lead systems, customer portals, databases, booking logic, automation, reporting tools, and internal workflows.",
  },

  {
    area:
      "Data",

    website:
      "May collect information through forms, analytics, payments, or other website features.",

    software:
      "Often stores, processes, updates, organizes, searches, or acts on structured business data.",
  },

  {
    area:
      "Complexity",

    website:
      "Can range from a simple business site to a highly customized public web experience.",

    software:
      "Usually becomes more complex as user roles, databases, automation, integrations, permissions, and workflows are added.",
  },

  {
    area:
      "Pricing",

    website:
      "Can often begin with a defined website scope or starting package.",

    software:
      "Usually requires a custom quote based on requirements and technical complexity.",
  },
];

/* ============================================================
   WEBSITE SIGNALS
============================================================ */

const websiteSignals = [
  {
    icon:
      Globe2,

    title:
      "Customers Cannot Understand Your Services",

    text:
      "If visitors mainly need clearer pages explaining what your business does, a website redesign may solve the problem without building a separate software system.",
  },

  {
    icon:
      MonitorSmartphone,

    title:
      "The Current Site Is Outdated or Hard to Use",

    text:
      "Poor mobile behavior, confusing navigation, old information, broken layouts, and weak calls to action are usually website problems first.",
  },

  {
    icon:
      SearchCheck,

    title:
      "Search Engines Need Better Structure",

    text:
      "Service pages, metadata, internal links, indexing preparation, content architecture, and crawlability belong primarily in the website layer.",
  },

  {
    icon:
      FormInput,

    title:
      "You Need Better Lead Capture",

    text:
      "A stronger contact, quote, booking, or project-request form may be enough when the business does not need a larger internal workflow behind it.",
  },
];

/* ============================================================
   SOFTWARE SIGNALS
============================================================ */

const softwareSignals = [
  {
    icon:
      Database,

    title:
      "Information Must Be Stored & Managed",

    text:
      "If the business needs to organize leads, customers, projects, inventory, requests, records, or other structured information, a database-backed system may be appropriate.",
  },

  {
    icon:
      Workflow,

    title:
      "Manual Work Is Being Repeated",

    text:
      "Repeated copying, sorting, follow-up, status tracking, data entry, notifications, or administrative steps may be candidates for software or automation.",
  },

  {
    icon:
      ServerCog,

    title:
      "You Need a Private Dashboard",

    text:
      "Owners or staff may need a secure area for managing leads, projects, customers, reports, settings, or business activity that should not be exposed publicly.",
  },

  {
    icon:
      Network,

    title:
      "Multiple Systems Need to Work Together",

    text:
      "APIs, payment providers, email systems, databases, forms, analytics, customer accounts, and other services may require integration beyond ordinary page design.",
  },
];

/* ============================================================
   HYBRID EXAMPLES
============================================================ */

const hybridExamples = [
  {
    title:
      "Contractor Website + Lead Dashboard",

    publicSide:
      "Services, project photos, service areas, estimate request form, contact information.",

    softwareSide:
      "Lead status, notes, follow-up dates, source tracking, quote status, and customer history.",
  },

  {
    title:
      "Property Website + Management Tools",

    publicSide:
      "Property information, listings, tenant information, owner information, inquiry forms.",

    softwareSide:
      "Internal records, maintenance workflows, lead management, reporting, or connections to external property systems.",
  },

  {
    title:
      "Service Business + Booking Workflow",

    publicSide:
      "Service pages, availability information, customer education, booking or request interface.",

    softwareSide:
      "Scheduling logic, notifications, customer records, appointment status, payment or administrative workflow.",
  },

  {
    title:
      "Online Platform + Admin System",

    publicSide:
      "Landing pages, account entry points, help content, pricing, product information.",

    softwareSide:
      "User accounts, permissions, data management, dashboards, reporting, integrations, and administration.",
  },
];

/* ============================================================
   DECISION QUESTIONS
============================================================ */

const decisionQuestions = [
  {
    q:
      "Is the main problem what customers see?",

    a:
      "If the problem is confusing pages, weak mobile design, missing service information, poor navigation, or unclear calls to action, start with the website.",
  },

  {
    q:
      "Is the main problem what happens after a customer contacts you?",

    a:
      "If leads are being lost, records are scattered, follow-up is inconsistent, or staff repeat manual tasks, custom software may solve the deeper problem.",
  },

  {
    q:
      "Does information need to be stored and updated?",

    a:
      "A few form submissions can be handled simply. A growing collection of customers, projects, statuses, notes, permissions, and records may justify a database-backed system.",
  },

  {
    q:
      "Do different users need different access?",

    a:
      "Customer accounts, private employee areas, admin dashboards, role permissions, or restricted data usually move the project further into software development.",
  },

  {
    q:
      "Do outside systems need to connect?",

    a:
      "Payment processors, APIs, email systems, databases, calendars, authentication services, and other integrations may require custom development.",
  },

  {
    q:
      "Could the problem be solved more simply?",

    a:
      "Custom software should not be built merely because it is possible. If an existing tool or straightforward website feature solves the problem well, unnecessary complexity may not be worthwhile.",
  },
];

/* ============================================================
   FAQ
============================================================ */

const faqs = [
  {
    q:
      "Is a website considered software?",

    a:
      "A website is built with software technology, but in business planning it is useful to distinguish a primarily public informational website from a more application-like system that stores data, manages workflows, provides dashboards, or performs specialized business functions.",
  },

  {
    q:
      "Can a normal business website become custom software later?",

    a:
      "Yes. A website can begin with public pages and forms and later connect to databases, dashboards, customer accounts, automation, APIs, payments, and other software systems.",
  },

  {
    q:
      "Does every business need custom software?",

    a:
      "No. Many businesses can operate successfully with a well-built website and existing software products. Custom software makes more sense when there is a specific problem that existing tools do not solve well.",
  },

  {
    q:
      "Can Matthew Web build both the website and the software?",

    a:
      "Matthew Web currently provides website development and custom software development. The exact solution depends on project requirements, scope, technical needs, and available resources.",
  },

  {
    q:
      "Is custom software more expensive than a website?",

    a:
      "It can be because software may require databases, user permissions, workflows, integrations, testing, security controls, and specialized functionality. The actual cost depends on scope.",
  },

  {
    q:
      "Which should be built first?",

    a:
      "The answer depends on the problem. A customer-facing website may need to come first when visibility and lead generation are the immediate issue. An internal software system may take priority when operational problems are already costing significant time or creating errors.",
  },
];

/* ============================================================
   RELATED ARTICLES
============================================================ */

const relatedArticles = [
  {
    title:
      "How CRM Dashboards Help Small Businesses Stop Losing Leads",

    href:
      "/how-crm-dashboards-help-small-businesses-stop-losing-leads",

    text:
      "See how structured lead management can move beyond a basic contact form.",
  },

  {
    title:
      "Why Custom-Coded Websites Beat DIY Website Builders",

    href:
      "/why-custom-coded-websites-beat-diy-website-builders",

    text:
      "Learn why custom development becomes useful when a website needs greater flexibility and functionality.",
  },

  {
    title:
      "How Booking Forms, Quote Forms, and Automation Help Local Businesses",

    href:
      "/how-booking-forms-quote-forms-and-automation-help-local-businesses",

    text:
      "Explore the connection between customer forms, business workflows, and automation.",
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
    "Website Design vs Custom Software: What Does Your Business Need?",

  description:
    "A practical guide to deciding whether a business needs a website, custom software, or a connected combination of both.",

  mainEntityOfPage: {
    "@type":
      "WebPage",

    "@id":
      "https://matthew-web.com/website-design-vs-custom-software-what-does-your-business-need",
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
        "Website Design vs Custom Software",

      item:
        "https://matthew-web.com/website-design-vs-custom-software-what-does-your-business-need",
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

export default function WebsiteVsSoftwarePage() {
  return (
    <main className="mwvs-page">
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
          --mwvs-black: #020304;
          --mwvs-panel: #091117;
          --mwvs-muted: #aebbc5;
          --mwvs-blue: #08b9f4;
          --mwvs-blue-light: #38d7ff;
          --mwvs-orange: #ff7900;
          --mwvs-orange-light: #ffab31;
          --mwvs-green: #35e07e;
          --mwvs-border: rgba(255, 255, 255, 0.09);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--mwvs-black);
        }

        .mwvs-page {
          min-height: 100vh;
          overflow: hidden;
          color: #ffffff;
          background: var(--mwvs-black);
        }

        .mwvs-blue {
          color: var(--mwvs-blue-light);
        }

        .mwvs-orange {
          color: var(--mwvs-orange);
        }

        /* =====================================================
           BREADCRUMBS
        ===================================================== */

        .mwvs-breadcrumb-wrap {
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          background: #04080b;
        }

        .mwvs-breadcrumbs {
          max-width: 1380px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 7px;
          padding: 14px clamp(20px, 5vw, 80px);
          color: #71838d;
          font-size: 10px;
          font-weight: 800;
        }

        .mwvs-breadcrumbs a {
          color: #8799a3;
          text-decoration: none;
        }

        .mwvs-breadcrumbs a:hover {
          color: var(--mwvs-blue-light);
        }

        .mwvs-breadcrumbs svg {
          width: 12px;
          height: 12px;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwvs-hero {
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(8, 185, 244, 0.16);
          background:
            radial-gradient(
              ellipse at 16% 42%,
              rgba(8, 185, 244, 0.16),
              transparent 37%
            ),
            radial-gradient(
              ellipse at 84% 48%,
              rgba(255, 121, 0, 0.09),
              transparent 33%
            ),
            linear-gradient(
              180deg,
              #020304,
              #03080c,
              #020304
            );
        }

        .mwvs-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0.26;
          pointer-events: none;
          background-image:
            linear-gradient(
              rgba(8, 185, 244, 0.055) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(8, 185, 244, 0.055) 1px,
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

        .mwvs-hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1380px;
          margin: 0 auto;
          display: grid;
          grid-template-columns:
            minmax(0, 1.05fr)
            minmax(390px, 0.95fr);
          align-items: center;
          gap: clamp(45px, 6vw, 90px);
          padding:
            100px
            clamp(20px, 5vw, 80px)
            105px;
        }

        .mwvs-article-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          margin-bottom: 19px;
          padding: 8px 12px;
          border: 1px solid rgba(8, 185, 244, 0.27);
          border-radius: 999px;
          color: #d9f8ff;
          background: rgba(8, 185, 244, 0.055);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .mwvs-article-label svg {
          width: 16px;
          height: 16px;
        }

        .mwvs-hero h1 {
          max-width: 930px;
          margin: 0;
          font-size: clamp(48px, 5.6vw, 84px);
          line-height: 0.99;
          letter-spacing: -0.06em;
        }

        .mwvs-hero-description {
          max-width: 780px;
          margin: 25px 0 0;
          color: #b8c6cf;
          font-size: clamp(16px, 1.4vw, 20px);
          line-height: 1.75;
        }

        .mwvs-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 18px;
          margin-top: 25px;
          color: #71838d;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        /* =====================================================
           HERO VISUAL
        ===================================================== */

        .mwvs-stage {
          min-height: 450px;
          display: grid;
          place-items: center;
        }

        .mwvs-system {
          width: min(100%, 510px);
          padding: 25px;
          border: 1px solid rgba(8, 185, 244, 0.28);
          border-radius: 20px;
          background:
            radial-gradient(
              circle at 20% 20%,
              rgba(8, 185, 244, 0.11),
              transparent 35%
            ),
            linear-gradient(
              145deg,
              #0b161d,
              #04080b
            );
          box-shadow:
            0 30px 70px rgba(0, 0, 0, 0.45);
        }

        .mwvs-system-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .mwvs-system-top strong {
          color: #81929d;
          font-size: 9px;
          letter-spacing: 0.12em;
        }

        .mwvs-system-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #8da0aa;
          font-size: 8px;
          font-weight: 900;
        }

        .mwvs-system-status::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--mwvs-green);
          box-shadow: 0 0 7px rgba(53, 224, 126, 0.7);
        }

        .mwvs-system-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 11px;
        }

        .mwvs-side {
          min-height: 220px;
          padding: 19px;
          border-radius: 14px;
          background: #071015;
        }

        .mwvs-side.website {
          border: 1px solid rgba(8, 185, 244, 0.2);
        }

        .mwvs-side.software {
          border: 1px solid rgba(255, 121, 0, 0.2);
        }

        .mwvs-side-icon {
          width: 52px;
          height: 52px;
          display: grid;
          place-items: center;
          margin-bottom: 16px;
          border-radius: 12px;
        }

        .mwvs-side.website .mwvs-side-icon {
          color: var(--mwvs-blue-light);
          border: 1px solid rgba(8, 185, 244, 0.28);
          background: rgba(8, 185, 244, 0.05);
        }

        .mwvs-side.software .mwvs-side-icon {
          color: var(--mwvs-orange-light);
          border: 1px solid rgba(255, 121, 0, 0.28);
          background: rgba(255, 121, 0, 0.05);
        }

        .mwvs-side-icon svg {
          width: 26px;
          height: 26px;
        }

        .mwvs-side span {
          display: block;
          margin-bottom: 7px;
          color: #748690;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        .mwvs-side strong {
          display: block;
          font-size: 17px;
        }

        .mwvs-side p {
          margin: 10px 0 0;
          color: #768993;
          font-size: 9px;
          line-height: 1.6;
        }

        .mwvs-connection {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 50%;
          color: #ffffff;
          background: #0b151b;
        }

        .mwvs-connection svg {
          width: 20px;
          height: 20px;
        }

        .mwvs-system-bottom {
          margin-top: 11px;
          padding: 13px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 9px;
          text-align: center;
          color: #8798a2;
          background: #071015;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.05em;
        }

        /* =====================================================
           ARTICLE
        ===================================================== */

        .mwvs-article-section {
          padding:
            95px
            clamp(20px, 5vw, 80px)
            110px;
          background: #020304;
        }

        .mwvs-article-layout {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns:
            minmax(220px, 0.27fr)
            minmax(0, 0.73fr);
          align-items: start;
          gap: clamp(40px, 6vw, 75px);
        }

        /* =====================================================
           TOC
        ===================================================== */

        .mwvs-toc {
          position: sticky;
          top: 30px;
          padding: 23px;
          border: 1px solid var(--mwvs-border);
          border-radius: 14px;
          background:
            linear-gradient(
              145deg,
              #09131a,
              #04080b
            );
        }

        .mwvs-toc-title {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 15px;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .mwvs-toc-title svg {
          width: 16px;
          height: 16px;
          color: var(--mwvs-blue-light);
        }

        .mwvs-toc a {
          display: block;
          padding: 8px 0;
          color: #8799a3;
          text-decoration: none;
          font-size: 12px;
          line-height: 1.45;
        }

        .mwvs-toc a:hover {
          color: var(--mwvs-blue-light);
        }

        .mwvs-toc-cta {
          margin-top: 18px;
          padding-top: 17px;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .mwvs-toc-cta a {
          color: var(--mwvs-orange-light);
          font-weight: 850;
        }

        /* =====================================================
           TYPOGRAPHY
        ===================================================== */

        .mwvs-content {
          min-width: 0;
        }

        .mwvs-content-section {
          margin-bottom: 62px;
          scroll-margin-top: 35px;
        }

        .mwvs-content-section h2 {
          margin: 0 0 20px;
          font-size: clamp(30px, 3.5vw, 48px);
          line-height: 1.08;
          letter-spacing: -0.045em;
        }

        .mwvs-content-section h3 {
          margin: 32px 0 12px;
          color: var(--mwvs-blue-light);
          font-size: 21px;
          line-height: 1.3;
        }

        .mwvs-content-section p {
          margin: 0 0 19px;
          color: #b6c3ca;
          font-size: 16px;
          line-height: 1.85;
        }

        .mwvs-content-section strong {
          color: #ffffff;
        }

        /* =====================================================
           ANSWER BOX
        ===================================================== */

        .mwvs-answer-box {
          margin-bottom: 55px;
          padding: 29px;
          border: 1px solid rgba(8, 185, 244, 0.23);
          border-radius: 17px;
          background:
            radial-gradient(
              circle at 90% 20%,
              rgba(8, 185, 244, 0.06),
              transparent 35%
            ),
            #071015;
        }

        .mwvs-answer-label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          color: var(--mwvs-blue-light);
          font-size: 9px;
          font-weight: 950;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        .mwvs-answer-label svg {
          width: 17px;
          height: 17px;
        }

        .mwvs-answer-box h2 {
          margin: 0 0 12px;
          font-size: clamp(24px, 3vw, 36px);
          line-height: 1.1;
        }

        .mwvs-answer-box p {
          margin: 0;
          color: #b7c5cc;
          font-size: 15px;
          line-height: 1.75;
        }

        /* =====================================================
           COMPARISON TABLE
        ===================================================== */

        .mwvs-table-wrap {
          margin-top: 28px;
          overflow-x: auto;
          border: 1px solid var(--mwvs-border);
          border-radius: 15px;
          background: #071015;
        }

        .mwvs-table {
          width: 100%;
          min-width: 760px;
          border-collapse: collapse;
        }

        .mwvs-table th,
        .mwvs-table td {
          padding: 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          vertical-align: top;
          text-align: left;
        }

        .mwvs-table th {
          color: #ffffff;
          background: #0a151b;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .mwvs-table th:nth-child(2) {
          color: var(--mwvs-blue-light);
        }

        .mwvs-table th:nth-child(3) {
          color: var(--mwvs-orange-light);
        }

        .mwvs-table td {
          color: #aebbc5;
          font-size: 12px;
          line-height: 1.65;
        }

        .mwvs-table td:first-child {
          width: 18%;
          color: #ffffff;
          font-weight: 800;
        }

        .mwvs-table tr:last-child td {
          border-bottom: 0;
        }

        /* =====================================================
           SIGNAL CARDS
        ===================================================== */

        .mwvs-signal-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 27px;
        }

        .mwvs-signal-card {
          min-height: 245px;
          padding: 23px;
          border-radius: 14px;
          background: #071015;
        }

        .mwvs-signal-card.website {
          border: 1px solid rgba(8, 185, 244, 0.15);
        }

        .mwvs-signal-card.software {
          border: 1px solid rgba(255, 121, 0, 0.15);
        }

        .mwvs-signal-card svg {
          width: 30px;
          height: 30px;
          margin-bottom: 16px;
        }

        .mwvs-signal-card.website svg {
          color: var(--mwvs-blue-light);
        }

        .mwvs-signal-card.software svg {
          color: var(--mwvs-orange-light);
        }

        .mwvs-signal-card h3 {
          margin: 0 0 10px;
          color: #ffffff;
          font-size: 18px;
        }

        .mwvs-signal-card p {
          margin: 0;
          color: var(--mwvs-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           HYBRID
        ===================================================== */

        .mwvs-hybrid-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 28px;
        }

        .mwvs-hybrid-card {
          padding: 24px;
          border: 1px solid var(--mwvs-border);
          border-radius: 14px;
          background:
            linear-gradient(
              145deg,
              #0a1218,
              #04080b
            );
        }

        .mwvs-hybrid-card h3 {
          margin: 0 0 18px;
          color: #ffffff;
          font-size: 19px;
        }

        .mwvs-hybrid-side {
          margin-top: 12px;
          padding: 14px;
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.018);
        }

        .mwvs-hybrid-side span {
          display: block;
          margin-bottom: 6px;
          font-size: 8px;
          font-weight: 950;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .mwvs-hybrid-side.public span {
          color: var(--mwvs-blue-light);
        }

        .mwvs-hybrid-side.private span {
          color: var(--mwvs-orange-light);
        }

        .mwvs-hybrid-side p {
          margin: 0;
          color: var(--mwvs-muted);
          font-size: 12px;
          line-height: 1.65;
        }

        /* =====================================================
           DECISION QUESTIONS
        ===================================================== */

        .mwvs-question-grid {
          display: grid;
          gap: 12px;
          margin-top: 27px;
        }

        .mwvs-question-card {
          padding: 23px;
          border: 1px solid var(--mwvs-border);
          border-radius: 13px;
          background: #071015;
        }

        .mwvs-question-card h3 {
          margin: 0 0 9px;
          color: var(--mwvs-blue-light);
          font-size: 18px;
        }

        .mwvs-question-card:nth-child(even) h3 {
          color: var(--mwvs-orange-light);
        }

        .mwvs-question-card p {
          margin: 0;
          color: var(--mwvs-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           PROCESS
        ===================================================== */

        .mwvs-process {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 11px;
          margin-top: 27px;
        }

        .mwvs-process-card {
          min-height: 200px;
          padding: 21px;
          border: 1px solid rgba(8, 185, 244, 0.14);
          border-radius: 13px;
          background: #071015;
        }

        .mwvs-process-card:nth-child(even) {
          border-color: rgba(255, 121, 0, 0.14);
        }

        .mwvs-process-number {
          margin-bottom: 14px;
          color: var(--mwvs-blue-light);
          font-size: 10px;
          font-weight: 950;
          letter-spacing: 0.1em;
        }

        .mwvs-process-card:nth-child(even)
          .mwvs-process-number {
          color: var(--mwvs-orange-light);
        }

        .mwvs-process-card h3 {
          margin: 0 0 9px;
          color: #ffffff;
          font-size: 17px;
        }

        .mwvs-process-card p {
          margin: 0;
          color: var(--mwvs-muted);
          font-size: 12px;
          line-height: 1.65;
        }

        /* =====================================================
           CALLOUT
        ===================================================== */

        .mwvs-callout {
          margin: 45px 0;
          padding: 30px;
          border: 1px solid rgba(255, 121, 0, 0.2);
          border-radius: 16px;
          background:
            radial-gradient(
              circle at 90% 20%,
              rgba(255, 121, 0, 0.06),
              transparent 35%
            ),
            #071015;
        }

        .mwvs-callout-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          margin-bottom: 15px;
          border: 1px solid rgba(255, 121, 0, 0.25);
          border-radius: 12px;
          color: var(--mwvs-orange-light);
          background: rgba(255, 121, 0, 0.045);
        }

        .mwvs-callout-icon svg {
          width: 24px;
          height: 24px;
        }

        .mwvs-callout h3 {
          margin: 0 0 10px;
          color: #ffffff;
          font-size: 22px;
        }

        .mwvs-callout p {
          margin: 0;
          color: var(--mwvs-muted);
          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           FAQ
        ===================================================== */

        .mwvs-faq-grid {
          display: grid;
          gap: 12px;
          margin-top: 27px;
        }

        .mwvs-faq-card {
          padding: 23px;
          border: 1px solid var(--mwvs-border);
          border-radius: 13px;
          background: #071015;
        }

        .mwvs-faq-card h3 {
          margin: 0 0 9px;
          color: var(--mwvs-blue-light);
          font-size: 17px;
        }

        .mwvs-faq-card:nth-child(even) h3 {
          color: var(--mwvs-orange-light);
        }

        .mwvs-faq-card p {
          margin: 0;
          color: var(--mwvs-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           BUTTONS / CTA
        ===================================================== */

        .mwvs-button-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 25px;
        }

        .mwvs-btn {
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
          transition: transform 0.2s ease;
        }

        .mwvs-btn:hover {
          transform: translateY(-2px);
        }

        .mwvs-btn-blue {
          border: 1px solid rgba(56, 215, 255, 0.5);
          background:
            linear-gradient(
              180deg,
              #0ab6ed,
              #0789b6
            );
        }

        .mwvs-btn-orange {
          border: 1px solid rgba(255, 176, 49, 0.55);
          background:
            linear-gradient(
              180deg,
              #ff9519,
              #f16600
            );
        }

        .mwvs-btn-dark {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.03);
        }

        .mwvs-btn svg {
          width: 17px;
          height: 17px;
        }

        .mwvs-article-cta {
          margin-top: 65px;
          padding: clamp(35px, 5vw, 55px);
          border: 1px solid rgba(8, 185, 244, 0.21);
          border-radius: 20px;
          background:
            radial-gradient(
              circle at 90% 50%,
              rgba(255, 121, 0, 0.065),
              transparent 31%
            ),
            linear-gradient(
              145deg,
              #0a151c,
              #04080b
            );
        }

        .mwvs-article-cta h2 {
          max-width: 780px;
          margin: 0;
          font-size: clamp(31px, 4vw, 49px);
          line-height: 1.05;
          letter-spacing: -0.045em;
        }

        .mwvs-article-cta p {
          max-width: 760px;
          margin: 17px 0 0;
          color: var(--mwvs-muted);
          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           RELATED
        ===================================================== */

        .mwvs-related-section {
          padding: 90px clamp(20px, 5vw, 80px);
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwvs-related-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        .mwvs-related-title {
          margin-bottom: 32px;
        }

        .mwvs-related-title span {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 9px;
          color: var(--mwvs-orange-light);
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .mwvs-related-title svg {
          width: 16px;
          height: 16px;
        }

        .mwvs-related-title h2 {
          margin: 0;
          font-size: clamp(31px, 4vw, 49px);
          letter-spacing: -0.045em;
        }

        .mwvs-related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .mwvs-related-card {
          min-height: 245px;
          display: flex;
          flex-direction: column;
          padding: 24px;
          border: 1px solid var(--mwvs-border);
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
            transform 0.2s ease,
            border-color 0.2s ease;
        }

        .mwvs-related-card:hover {
          transform: translateY(-4px);
          border-color: rgba(8, 185, 244, 0.3);
        }

        .mwvs-related-card:nth-child(even):hover {
          border-color: rgba(255, 121, 0, 0.3);
        }

        .mwvs-related-card h3 {
          margin: 0;
          font-size: 18px;
          line-height: 1.3;
        }

        .mwvs-related-card p {
          margin: 13px 0 0;
          color: var(--mwvs-muted);
          font-size: 12px;
          line-height: 1.65;
        }

        .mwvs-related-link {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: auto;
          padding-top: 21px;
          color: var(--mwvs-blue-light);
          font-size: 11px;
          font-weight: 850;
        }

        .mwvs-related-card:nth-child(even)
          .mwvs-related-link {
          color: var(--mwvs-orange-light);
        }

        .mwvs-related-link svg {
          width: 15px;
          height: 15px;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1100px) {
          .mwvs-process {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 1050px) {
          .mwvs-hero-inner {
            grid-template-columns: 1fr;
          }

          .mwvs-hero-copy {
            text-align: center;
          }

          .mwvs-article-label {
            margin-left: auto;
            margin-right: auto;
          }

          .mwvs-hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .mwvs-meta {
            justify-content: center;
          }

          .mwvs-related-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .mwvs-related-card:last-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 850px) {
          .mwvs-article-layout {
            grid-template-columns: 1fr;
          }

          .mwvs-toc {
            position: static;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0 20px;
          }

          .mwvs-toc-title,
          .mwvs-toc-cta {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 700px) {
          .mwvs-hero-inner {
            padding: 70px 16px;
          }

          .mwvs-hero h1 {
            font-size: clamp(43px, 13vw, 65px);
          }

          .mwvs-article-section {
            padding: 70px 16px 85px;
          }

          .mwvs-signal-grid,
          .mwvs-hybrid-grid,
          .mwvs-process,
          .mwvs-related-grid {
            grid-template-columns: 1fr;
          }

          .mwvs-related-card:last-child {
            grid-column: auto;
          }

          .mwvs-related-section {
            padding: 70px 16px;
          }
        }

        @media (max-width: 500px) {
          .mwvs-stage {
            min-height: 480px;
            transform: scale(0.9);
            margin: -10px -20px;
          }

          .mwvs-system-grid {
            grid-template-columns: 1fr;
          }

          .mwvs-connection {
            margin: 0 auto;
            transform: rotate(90deg);
          }

          .mwvs-toc {
            grid-template-columns: 1fr;
          }

          .mwvs-toc-title,
          .mwvs-toc-cta {
            grid-column: auto;
          }

          .mwvs-content-section p {
            font-size: 15px;
          }
        }
      `}</style>

      {/* ======================================================
          BREADCRUMBS
      ====================================================== */}

      <div className="mwvs-breadcrumb-wrap">
        <nav
          className="mwvs-breadcrumbs"
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
            Website Design vs Custom Software
          </span>
        </nav>
      </div>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="mwvs-hero">
        <div className="mwvs-hero-inner">
          <div className="mwvs-hero-copy">
            <div className="mwvs-article-label">
              <BookOpen />
              Website & Software Education
            </div>

            <h1>
              Website Design vs{" "}
              <span className="mwvs-orange">
                Custom Software:
              </span>{" "}
              What Does Your{" "}
              <span className="mwvs-blue">
                Business Need?
              </span>
            </h1>

            <p className="mwvs-hero-description">
              Some business problems need a
              better public website. Others need
              software behind the website. And
              many modern businesses eventually
              need both systems working together.
            </p>

            <div className="mwvs-meta">
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
            className="mwvs-stage"
            aria-hidden="true"
          >
            <div className="mwvs-system">
              <div className="mwvs-system-top">
                <strong>
                  MATTHEW WEB // BUSINESS SYSTEM
                </strong>

                <span className="mwvs-system-status">
                  CONNECTED
                </span>
              </div>

              <div className="mwvs-system-grid">
                <div className="mwvs-side website">
                  <div className="mwvs-side-icon">
                    <Globe2 />
                  </div>

                  <span>
                    Public Layer
                  </span>

                  <strong>
                    WEBSITE
                  </strong>

                  <p>
                    Services, content, search,
                    contact, trust, and customer
                    experience.
                  </p>
                </div>

                <div className="mwvs-connection">
                  <Network />
                </div>

                <div className="mwvs-side software">
                  <div className="mwvs-side-icon">
                    <Database />
                  </div>

                  <span>
                    System Layer
                  </span>

                  <strong>
                    SOFTWARE
                  </strong>

                  <p>
                    Data, workflows, dashboards,
                    automation, integrations, and
                    business logic.
                  </p>
                </div>
              </div>

              <div className="mwvs-system-bottom">
                WEBSITE + SOFTWARE = CONNECTED BUSINESS TECHNOLOGY
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          ARTICLE
      ====================================================== */}

      <article className="mwvs-article-section">
        <div className="mwvs-article-layout">
          {/* ==================================================
              TABLE OF CONTENTS
          ================================================== */}

          <aside className="mwvs-toc">
            <div className="mwvs-toc-title">
              <BookOpen />
              In This Article
            </div>

            <a href="#short-answer">
              Short Answer
            </a>

            <a href="#difference">
              What Is the Difference?
            </a>

            <a href="#website">
              When You Need a Website
            </a>

            <a href="#software">
              When You Need Software
            </a>

            <a href="#both">
              When You Need Both
            </a>

            <a href="#examples">
              Real-World Examples
            </a>

            <a href="#cost">
              Cost & Complexity
            </a>

            <a href="#decision">
              Decision Questions
            </a>

            <a href="#process">
              How to Start
            </a>

            <a href="#faq">
              FAQs
            </a>

            <div className="mwvs-toc-cta">
              <Link href="/custom-software">
                Custom Software Services →
              </Link>
            </div>
          </aside>

          <div className="mwvs-content">
            {/* =================================================
                SHORT ANSWER
            ================================================= */}

            <section
              className="mwvs-answer-box"
              id="short-answer"
            >
              <div className="mwvs-answer-label">
                <Zap />
                Short Answer
              </div>

              <h2>
                Website or Custom Software?
              </h2>

              <p>
                <strong>
                  Choose website development when
                  the main problem is how
                  customers find, understand, and
                  contact the business.
                </strong>{" "}
                Choose custom software when the
                problem involves storing data,
                managing workflows, automating
                repeated work, providing private
                dashboards, connecting systems,
                or performing specialized
                business functions. Many
                businesses eventually need both.
              </p>
            </section>

            {/* =================================================
                DIFFERENCE
            ================================================= */}

            <section
              className="mwvs-content-section"
              id="difference"
            >
              <h2>
                What Is the{" "}
                <span className="mwvs-blue">
                  Difference?
                </span>
              </h2>

              <p>
                Websites and software overlap
                more than people sometimes
                realize.
              </p>

              <p>
                A modern business website is
                already software at a technical
                level. It may contain forms,
                analytics, APIs, databases,
                interactive components, payment
                systems, and other programming.
              </p>

              <p>
                But when planning a business
                project, it is useful to separate
                the
                <strong>
                  {" "}
                  public website layer
                </strong>{" "}
                from the
                <strong>
                  {" "}
                  application or operational
                  layer.
                </strong>
              </p>

              <p>
                The website usually explains the
                business and helps customers take
                action. Custom software usually
                manages information or performs a
                process after, before, or behind
                that customer interaction.
              </p>

              <div className="mwvs-table-wrap">
                <table className="mwvs-table">
                  <thead>
                    <tr>
                      <th>
                        Area
                      </th>

                      <th>
                        Website Design
                      </th>

                      <th>
                        Custom Software
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {comparisonRows.map(
                      (row) => (
                        <tr key={row.area}>
                          <td>
                            {row.area}
                          </td>

                          <td>
                            {row.website}
                          </td>

                          <td>
                            {row.software}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </section>

            {/* =================================================
                WEBSITE
            ================================================= */}

            <section
              className="mwvs-content-section"
              id="website"
            >
              <h2>
                Signs You Primarily Need a{" "}
                <span className="mwvs-blue">
                  Better Website
                </span>
              </h2>

              <p>
                Sometimes the business problem is
                visible directly to the customer.
              </p>

              <p>
                The company may already have
                adequate internal systems, but
                its website fails to explain the
                services, looks outdated, does
                not work well on phones, is
                difficult to find in search, or
                gives visitors no clear path to
                contact the business.
              </p>

              <div className="mwvs-signal-grid">
                {websiteSignals.map(
                  (item) => {
                    const Icon =
                      item.icon;

                    return (
                      <div
                        className="mwvs-signal-card website"
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

              <div className="mwvs-button-row">
                <Link
                  href="/website-design"
                  className="mwvs-btn mwvs-btn-blue"
                >
                  Website Design Services
                  <ArrowRight />
                </Link>
              </div>
            </section>

            {/* =================================================
                SOFTWARE
            ================================================= */}

            <section
              className="mwvs-content-section"
              id="software"
            >
              <h2>
                Signs the Real Problem Is{" "}
                <span className="mwvs-orange">
                  Software
                </span>
              </h2>

              <p>
                A beautiful new homepage will not
                fix every business problem.
              </p>

              <p>
                If leads are being lost after
                they arrive, customer records are
                spread across multiple places,
                employees repeat the same manual
                tasks, or the business has no
                reliable way to track workflow,
                the deeper issue may be
                operational.
              </p>

              <div className="mwvs-signal-grid">
                {softwareSignals.map(
                  (item) => {
                    const Icon =
                      item.icon;

                    return (
                      <div
                        className="mwvs-signal-card software"
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

              <div className="mwvs-callout">
                <div className="mwvs-callout-icon">
                  <Target />
                </div>

                <h3>
                  Do Not Build Software Just
                  Because You Can
                </h3>

                <p>
                  Custom software should solve a
                  real problem. If a simple form,
                  spreadsheet, existing product,
                  or small website improvement
                  already solves the need well,
                  adding a custom system may
                  create unnecessary cost and
                  complexity.
                </p>
              </div>

              <div className="mwvs-button-row">
                <Link
                  href="/custom-software"
                  className="mwvs-btn mwvs-btn-orange"
                >
                  Explore Custom Software
                  <ArrowRight />
                </Link>
              </div>
            </section>

            {/* =================================================
                BOTH
            ================================================= */}

            <section
              className="mwvs-content-section"
              id="both"
            >
              <h2>
                Sometimes the Best Answer Is{" "}
                <span className="mwvs-blue">
                  Both
                </span>
              </h2>

              <p>
                Website design and custom
                software do not need to be
                competing choices.
              </p>

              <p>
                A strong business system can have
                a public layer that attracts and
                informs customers while a private
                layer manages what happens after
                the inquiry.
              </p>

              <p>
                For example:
              </p>

              <p>
                A customer fills out a quote form
                on the public website. That lead
                can then enter a private system
                where the business records the
                source, changes the status,
                writes notes, schedules
                follow-up, prepares a quote, and
                eventually converts the lead into
                a customer.
              </p>

              <p>
                That is no longer just a website.
                It is a connected business
                system.
              </p>
            </section>

            {/* =================================================
                EXAMPLES
            ================================================= */}

            <section
              className="mwvs-content-section"
              id="examples"
            >
              <h2>
                Examples of{" "}
                <span className="mwvs-orange">
                  Website + Software
                </span>
              </h2>

              <div className="mwvs-hybrid-grid">
                {hybridExamples.map(
                  (example) => (
                    <div
                      className="mwvs-hybrid-card"
                      key={example.title}
                    >
                      <h3>
                        {example.title}
                      </h3>

                      <div className="mwvs-hybrid-side public">
                        <span>
                          Public Website
                        </span>

                        <p>
                          {example.publicSide}
                        </p>
                      </div>

                      <div className="mwvs-hybrid-side private">
                        <span>
                          Software Layer
                        </span>

                        <p>
                          {example.softwareSide}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </section>

            {/* =================================================
                COST
            ================================================= */}

            <section
              className="mwvs-content-section"
              id="cost"
            >
              <h2>
                Why Custom Software Is Usually{" "}
                <span className="mwvs-blue">
                  Quoted Differently
                </span>
              </h2>

              <p>
                A standard website scope can
                often be understood through page
                count, design requirements,
                content, forms, and common
                integrations.
              </p>

              <p>
                Software introduces additional
                questions.
              </p>

              <p>
                What data must be stored? Who can
                access it? Which users can edit
                it? What happens when a status
                changes? What systems need to
                communicate? What information is
                private? What happens when an
                action fails? What should be
                automated?
              </p>

              <p>
                Those requirements affect
                architecture, database design,
                authentication, permissions,
                API development, testing,
                maintenance, and security.
              </p>

              <p>
                That is why Matthew Web treats
                custom software as
                <strong>
                  {" "}
                  scope-based work
                </strong>{" "}
                rather than pretending every
                application has one universal
                price.
              </p>

              <div className="mwvs-callout">
                <div className="mwvs-callout-icon">
                  <Settings2 />
                </div>

                <h3>
                  Complexity Should Be Earned
                </h3>

                <p>
                  Start with the smallest system
                  that solves the real problem.
                  More features can be added when
                  they are justified by actual
                  business needs.
                </p>
              </div>
            </section>

            {/* =================================================
                DECISION
            ================================================= */}

            <section
              className="mwvs-content-section"
              id="decision"
            >
              <h2>
                Six Questions to Help{" "}
                <span className="mwvs-orange">
                  Decide
                </span>
              </h2>

              <p>
                Before deciding what technology
                to build, identify where the
                problem actually occurs.
              </p>

              <div className="mwvs-question-grid">
                {decisionQuestions.map(
                  (item) => (
                    <div
                      className="mwvs-question-card"
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
                PROCESS
            ================================================= */}

            <section
              className="mwvs-content-section"
              id="process"
            >
              <h2>
                Start With the{" "}
                <span className="mwvs-blue">
                  Problem
                </span>
                , Not the Technology
              </h2>

              <p>
                Matthew Web&apos;s preferred
                approach is to understand what
                needs to happen before deciding
                how much technology should be
                built.
              </p>

              <div className="mwvs-process">
                <div className="mwvs-process-card">
                  <div className="mwvs-process-number">
                    STEP 01
                  </div>

                  <h3>
                    Identify the Problem
                  </h3>

                  <p>
                    Determine what is currently
                    confusing, slow, manual,
                    broken, missing, or difficult
                    to manage.
                  </p>
                </div>

                <div className="mwvs-process-card">
                  <div className="mwvs-process-number">
                    STEP 02
                  </div>

                  <h3>
                    Find the Simplest Solution
                  </h3>

                  <p>
                    Determine whether the problem
                    needs a page improvement, a
                    form, an existing tool, an
                    integration, or custom
                    software.
                  </p>
                </div>

                <div className="mwvs-process-card">
                  <div className="mwvs-process-number">
                    STEP 03
                  </div>

                  <h3>
                    Define the Scope
                  </h3>

                  <p>
                    Establish the actual pages,
                    workflows, data, users,
                    integrations, and features
                    required.
                  </p>
                </div>

                <div className="mwvs-process-card">
                  <div className="mwvs-process-number">
                    STEP 04
                  </div>

                  <h3>
                    Build in Stages
                  </h3>

                  <p>
                    Launch a useful foundation,
                    test it, and expand when
                    additional functionality is
                    justified.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                FAQ
            ================================================= */}

            <section
              className="mwvs-content-section"
              id="faq"
            >
              <h2>
                Website vs Software{" "}
                <span className="mwvs-orange">
                  FAQs
                </span>
              </h2>

              <div className="mwvs-faq-grid">
                {faqs.map(
                  (item) => (
                    <div
                      className="mwvs-faq-card"
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
                FINAL ARTICLE CTA
            ================================================= */}

            <section className="mwvs-article-cta">
              <h2>
                Not Sure Whether You Need a{" "}
                <span className="mwvs-orange">
                  Website
                </span>{" "}
                or{" "}
                <span className="mwvs-blue">
                  Software?
                </span>
              </h2>

              <p>
                Tell Matthew Web what is not
                working now and what you want the
                business to be able to do. The
                first step is identifying the
                problem—not automatically
                selling the largest possible
                system.
              </p>

              <div className="mwvs-button-row">
                <Link
                  href="/contact-us"
                  className="mwvs-btn mwvs-btn-orange"
                >
                  Tell Us What You Need
                  <ArrowRight />
                </Link>

                <Link
                  href="/website-design"
                  className="mwvs-btn mwvs-btn-blue"
                >
                  Website Design
                </Link>

                <Link
                  href="/custom-software"
                  className="mwvs-btn mwvs-btn-dark"
                >
                  Custom Software
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* ======================================================
          RELATED ARTICLES
      ====================================================== */}

      <section className="mwvs-related-section">
        <div className="mwvs-related-inner">
          <div className="mwvs-related-title">
            <span>
              <Sparkles />
              Continue Reading
            </span>

            <h2>
              Related{" "}
              <span className="mwvs-blue">
                Articles
              </span>
            </h2>
          </div>

          <div className="mwvs-related-grid">
            {relatedArticles.map(
              (article) => (
                <Link
                  href={article.href}
                  className="mwvs-related-card"
                  key={article.href}
                >
                  <h3>
                    {article.title}
                  </h3>

                  <p>
                    {article.text}
                  </p>

                  <div className="mwvs-related-link">
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
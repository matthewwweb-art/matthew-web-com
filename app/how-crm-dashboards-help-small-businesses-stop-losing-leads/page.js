import Link from "next/link";

import {
  Activity,
  ArrowRight,
  BellRing,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Database,
  FileText,
  Filter,
  LayoutDashboard,
  ListChecks,
  Mail,
  MessageSquare,
  Search,
  Sparkles,
  Target,
  UserCheck,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/* ============================================================
   METADATA
============================================================ */

export const metadata = {
  title:
    "How CRM Dashboards Help Small Businesses Stop Losing Leads | Matthew Web",

  description:
    "Learn how CRM dashboards can help small businesses organize leads, track follow-ups, manage sales stages, record communication, identify overdue opportunities, and connect website inquiries to a clearer sales process.",

  alternates: {
    canonical:
      "https://matthew-web.com/how-crm-dashboards-help-small-businesses-stop-losing-leads",
  },

  openGraph: {
    title:
      "How CRM Dashboards Help Small Businesses Stop Losing Leads | Matthew Web",

    description:
      "A practical guide to using CRM dashboards, lead stages, follow-up reminders, notes, source tracking, and customer records to create a more organized sales process.",

    url:
      "https://matthew-web.com/how-crm-dashboards-help-small-businesses-stop-losing-leads",

    siteName:
      "Matthew Web",

    type:
      "article",
  },
};

/* ============================================================
   PROBLEMS
============================================================ */

const leadProblems = [
  {
    icon:
      Mail,

    title:
      "Leads Are Buried in Email",

    text:
      "A new inquiry arrives, receives one response, and then disappears underneath newer messages because there is no separate place tracking what should happen next.",
  },

  {
    icon:
      FileText,

    title:
      "Notes Are Scattered",

    text:
      "Phone notes, text messages, email details, paper notes, spreadsheets, and memory can all contain pieces of the same customer conversation.",
  },

  {
    icon:
      Clock3,

    title:
      "Follow-Ups Are Forgotten",

    text:
      "The business intends to contact a prospect again but has no reliable reminder, due date, or visible list showing which conversations need attention.",
  },

  {
    icon:
      Workflow,

    title:
      "Nobody Knows the Lead Stage",

    text:
      "Without a defined pipeline, it becomes difficult to distinguish a brand-new inquiry from a qualified prospect, a sent quote, a pending payment, or a lost opportunity.",
  },

  {
    icon:
      Target,

    title:
      "Lead Sources Are Unknown",

    text:
      "If inquiries are not connected to their source, the business has less information about whether customers came from search, referrals, social media, outreach, ads, or another channel.",
  },

  {
    icon:
      CircleDollarSign,

    title:
      "Sales Value Is Hard to See",

    text:
      "When quotes, expected project value, deposits, balances, and recurring work are separated from the lead record, management has a weaker view of the pipeline.",
  },
];

/* ============================================================
   CRM CAPABILITIES
============================================================ */

const crmCapabilities = [
  {
    icon:
      Users,

    title:
      "Centralized Lead Records",

    text:
      "Keep contact information, business details, service interest, notes, status, source, and follow-up information associated with one lead record.",
  },

  {
    icon:
      ListChecks,

    title:
      "Pipeline Stages",

    text:
      "Move leads through meaningful stages such as new, qualified, contacted, follow-up, quote sent, customer, completed, or lost.",
  },

  {
    icon:
      BellRing,

    title:
      "Follow-Up Tracking",

    text:
      "Record when a lead should be contacted again so opportunities are not dependent entirely on memory.",
  },

  {
    icon:
      MessageSquare,

    title:
      "Communication History",

    text:
      "Store notes about calls, emails, outreach, questions, objections, and next actions so the conversation has context later.",
  },

  {
    icon:
      Search,

    title:
      "Search & Filters",

    text:
      "Find leads by status, business, service, priority, follow-up date, source, or other useful information instead of manually scanning unrelated records.",
  },

  {
    icon:
      Activity,

    title:
      "Management Visibility",

    text:
      "A dashboard can surface overdue follow-ups, active opportunities, pipeline stages, lead volume, and other operational information in one place.",
  },
];

/* ============================================================
   PIPELINE
============================================================ */

const pipeline = [
  {
    number:
      "01",

    stage:
      "New Lead",

    text:
      "A customer submits a website form, calls, emails, responds to outreach, or enters through another source.",
  },

  {
    number:
      "02",

    stage:
      "Qualified",

    text:
      "The business determines whether the request fits its services, location, budget, availability, and other requirements.",
  },

  {
    number:
      "03",

    stage:
      "Contacted",

    text:
      "The first meaningful response or conversation has taken place.",
  },

  {
    number:
      "04",

    stage:
      "Follow-Up",

    text:
      "The opportunity still exists, but another conversation or action is needed.",
  },

  {
    number:
      "05",

    stage:
      "Quote / Proposal",

    text:
      "Pricing, scope, or another formal project proposal has been prepared or sent.",
  },

  {
    number:
      "06",

    stage:
      "Customer",

    text:
      "The lead accepts the project and moves into the customer or active-project workflow.",
  },
];

/* ============================================================
   DATA FIELDS
============================================================ */

const usefulFields = [
  "Lead or customer name",
  "Business name",
  "Email address",
  "Phone number",
  "Website",
  "Service or project interest",
  "Lead source",
  "Landing page or campaign where useful",
  "Lead status",
  "Priority",
  "Last contact date",
  "Next follow-up date",
  "Notes",
  "Quoted amount where applicable",
  "Expected or actual project value where useful",
];

/* ============================================================
   AUTOMATION
============================================================ */

const automations = [
  {
    title:
      "Form → CRM",

    text:
      "A website inquiry can create or update a lead record automatically instead of requiring someone to copy the information manually.",
  },

  {
    title:
      "Follow-Up Reminder",

    text:
      "The system can identify leads whose follow-up date has arrived and surface them for attention.",
  },

  {
    title:
      "Status-Based Tasks",

    text:
      "Changing a lead to a certain stage can help trigger the next internal action, such as preparing a quote or scheduling another contact.",
  },

  {
    title:
      "Source Tracking",

    text:
      "Campaign parameters, landing pages, forms, or manually recorded sources can help connect inquiries to marketing activity.",
  },
];

/* ============================================================
   FAQ
============================================================ */

const faqs = [
  {
    q:
      "What does CRM mean?",

    a:
      "CRM commonly means customer relationship management. A CRM system helps organize information and activity related to prospects, leads, customers, communication, and sales processes.",
  },

  {
    q:
      "Does a small business really need a CRM?",

    a:
      "Not every small business needs a complex CRM. A simple system becomes useful when leads, follow-ups, customer records, quotes, or communication are becoming difficult to manage reliably.",
  },

  {
    q:
      "Can a CRM automatically generate sales?",

    a:
      "No. A CRM can help organize the sales process, but it cannot make customers buy. Sales still depend on the offer, demand, pricing, communication, reputation, timing, competition, and other factors.",
  },

  {
    q:
      "Can a website contact form connect directly to a CRM?",

    a:
      "Yes. A custom website can send submitted lead information into a database-backed CRM or lead-management system when that workflow is designed and configured.",
  },

  {
    q:
      "Is a spreadsheet the same as a CRM?",

    a:
      "A spreadsheet can be enough for simple lead tracking. A CRM becomes more useful when the business needs structured stages, reminders, histories, filters, dashboards, permissions, or automation that are difficult to manage manually.",
  },

  {
    q:
      "Can Matthew Web build custom CRM-style software?",

    a:
      "Yes. Matthew Web currently develops custom software and internal business tools, including CRM-style lead-management dashboards when the project requirements justify a custom system.",
  },
];

/* ============================================================
   RELATED ARTICLES
============================================================ */

const relatedArticles = [
  {
    title:
      "Website Design vs Custom Software: What Does Your Business Need?",

    href:
      "/website-design-vs-custom-software-what-does-your-business-need",

    text:
      "Learn when the problem belongs on the public website and when it requires software behind the scenes.",
  },

  {
    title:
      "How Booking Forms, Quote Forms, and Automation Help Local Businesses",

    href:
      "/how-booking-forms-quote-forms-and-automation-help-local-businesses",

    text:
      "See how customer forms can connect to better business workflows and follow-up.",
  },

  {
    title:
      "What Every Contractor Website Needs to Generate Leads",

    href:
      "/what-every-contractor-website-needs-to-generate-leads",

    text:
      "Learn how a public business website can create a clearer path from visitor to inquiry.",
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
    "How CRM Dashboards Help Small Businesses Stop Losing Leads",

  description:
    "A practical guide to organizing leads, follow-ups, sales stages, communication, and customer information through CRM dashboards.",

  mainEntityOfPage: {
    "@type":
      "WebPage",

    "@id":
      "https://matthew-web.com/how-crm-dashboards-help-small-businesses-stop-losing-leads",
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
        "How CRM Dashboards Help Small Businesses Stop Losing Leads",

      item:
        "https://matthew-web.com/how-crm-dashboards-help-small-businesses-stop-losing-leads",
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

export default function CRMDashboardArticlePage() {
  return (
    <main className="mwcrm-page">
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
          --mwcrm-black: #020304;
          --mwcrm-muted: #aebbc5;
          --mwcrm-blue: #08b9f4;
          --mwcrm-blue-light: #38d7ff;
          --mwcrm-orange: #ff7900;
          --mwcrm-orange-light: #ffab31;
          --mwcrm-green: #35e07e;
          --mwcrm-border: rgba(255, 255, 255, 0.09);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--mwcrm-black);
        }

        .mwcrm-page {
          min-height: 100vh;
          overflow: hidden;
          color: #ffffff;
          background: var(--mwcrm-black);
        }

        .mwcrm-blue {
          color: var(--mwcrm-blue-light);
        }

        .mwcrm-orange {
          color: var(--mwcrm-orange);
        }

        /* =====================================================
           BREADCRUMBS
        ===================================================== */

        .mwcrm-breadcrumb-wrap {
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          background: #04080b;
        }

        .mwcrm-breadcrumbs {
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

        .mwcrm-breadcrumbs a {
          color: #8799a3;
          text-decoration: none;
        }

        .mwcrm-breadcrumbs a:hover {
          color: var(--mwcrm-blue-light);
        }

        .mwcrm-breadcrumbs svg {
          width: 12px;
          height: 12px;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwcrm-hero {
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

        .mwcrm-hero::before {
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

        .mwcrm-hero-inner {
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

        .mwcrm-article-label {
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

        .mwcrm-article-label svg {
          width: 16px;
          height: 16px;
        }

        .mwcrm-hero h1 {
          max-width: 950px;
          margin: 0;
          font-size: clamp(48px, 5.6vw, 84px);
          line-height: 0.99;
          letter-spacing: -0.06em;
        }

        .mwcrm-hero-description {
          max-width: 780px;
          margin: 25px 0 0;
          color: #b8c6cf;
          font-size: clamp(16px, 1.4vw, 20px);
          line-height: 1.75;
        }

        .mwcrm-meta {
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
           HERO CRM VISUAL
        ===================================================== */

        .mwcrm-stage {
          min-height: 470px;
          display: grid;
          place-items: center;
        }

        .mwcrm-dashboard {
          width: min(100%, 520px);
          padding: 24px;
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

        .mwcrm-dash-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .mwcrm-dash-top strong {
          color: #81929d;
          font-size: 9px;
          letter-spacing: 0.12em;
        }

        .mwcrm-live {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #8da0aa;
          font-size: 8px;
          font-weight: 900;
        }

        .mwcrm-live::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--mwcrm-green);
          box-shadow: 0 0 7px rgba(53, 224, 126, 0.7);
        }

        .mwcrm-dash-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }

        .mwcrm-stat {
          min-height: 83px;
          padding: 12px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 9px;
          background: #071015;
        }

        .mwcrm-stat span {
          display: block;
          color: #60727c;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .mwcrm-stat strong {
          display: block;
          margin-top: 9px;
          color: var(--mwcrm-blue-light);
          font-size: 19px;
        }

        .mwcrm-stat:nth-child(even) strong {
          color: var(--mwcrm-orange-light);
        }

        .mwcrm-pipeline-preview {
          margin-top: 9px;
          padding: 14px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 10px;
          background: #071015;
        }

        .mwcrm-pipeline-label {
          margin-bottom: 11px;
          color: #647781;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        .mwcrm-pipeline-row {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 10px;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mwcrm-pipeline-row:last-child {
          border-bottom: 0;
        }

        .mwcrm-pipeline-row strong {
          font-size: 9px;
        }

        .mwcrm-status-pill {
          padding: 5px 7px;
          border-radius: 999px;
          color: var(--mwcrm-blue-light);
          background: rgba(8, 185, 244, 0.07);
          font-size: 7px;
          font-weight: 900;
        }

        .mwcrm-pipeline-row:nth-child(even)
          .mwcrm-status-pill {
          color: var(--mwcrm-orange-light);
          background: rgba(255, 121, 0, 0.06);
        }

        /* =====================================================
           ARTICLE LAYOUT
        ===================================================== */

        .mwcrm-article-section {
          padding:
            95px
            clamp(20px, 5vw, 80px)
            110px;
          background: #020304;
        }

        .mwcrm-article-layout {
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

        .mwcrm-toc {
          position: sticky;
          top: 30px;
          padding: 23px;
          border: 1px solid var(--mwcrm-border);
          border-radius: 14px;
          background:
            linear-gradient(
              145deg,
              #09131a,
              #04080b
            );
        }

        .mwcrm-toc-title {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 15px;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .mwcrm-toc-title svg {
          width: 16px;
          height: 16px;
          color: var(--mwcrm-blue-light);
        }

        .mwcrm-toc a {
          display: block;
          padding: 8px 0;
          color: #8799a3;
          text-decoration: none;
          font-size: 12px;
          line-height: 1.45;
        }

        .mwcrm-toc a:hover {
          color: var(--mwcrm-blue-light);
        }

        .mwcrm-toc-cta {
          margin-top: 18px;
          padding-top: 17px;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .mwcrm-toc-cta a {
          color: var(--mwcrm-orange-light);
          font-weight: 850;
        }

        /* =====================================================
           ARTICLE TYPOGRAPHY
        ===================================================== */

        .mwcrm-content {
          min-width: 0;
        }

        .mwcrm-content-section {
          margin-bottom: 62px;
          scroll-margin-top: 35px;
        }

        .mwcrm-content-section h2 {
          margin: 0 0 20px;
          font-size: clamp(30px, 3.5vw, 48px);
          line-height: 1.08;
          letter-spacing: -0.045em;
        }

        .mwcrm-content-section h3 {
          margin: 32px 0 12px;
          color: var(--mwcrm-blue-light);
          font-size: 21px;
          line-height: 1.3;
        }

        .mwcrm-content-section p {
          margin: 0 0 19px;
          color: #b6c3ca;
          font-size: 16px;
          line-height: 1.85;
        }

        .mwcrm-content-section strong {
          color: #ffffff;
        }

        /* =====================================================
           ANSWER BOX
        ===================================================== */

        .mwcrm-answer-box {
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

        .mwcrm-answer-label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          color: var(--mwcrm-blue-light);
          font-size: 9px;
          font-weight: 950;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        .mwcrm-answer-label svg {
          width: 17px;
          height: 17px;
        }

        .mwcrm-answer-box h2 {
          margin: 0 0 12px;
          font-size: clamp(24px, 3vw, 36px);
          line-height: 1.1;
        }

        .mwcrm-answer-box p {
          margin: 0;
          color: #b7c5cc;
          font-size: 15px;
          line-height: 1.75;
        }

        /* =====================================================
           PROBLEM / CAPABILITY GRIDS
        ===================================================== */

        .mwcrm-card-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 27px;
        }

        .mwcrm-info-card {
          min-height: 245px;
          padding: 23px;
          border: 1px solid rgba(8, 185, 244, 0.14);
          border-radius: 14px;
          background: rgba(8, 185, 244, 0.018);
        }

        .mwcrm-info-card:nth-child(even) {
          border-color: rgba(255, 121, 0, 0.14);
          background: rgba(255, 121, 0, 0.016);
        }

        .mwcrm-info-card svg {
          width: 30px;
          height: 30px;
          margin-bottom: 16px;
          color: var(--mwcrm-blue-light);
        }

        .mwcrm-info-card:nth-child(even) svg {
          color: var(--mwcrm-orange-light);
        }

        .mwcrm-info-card h3 {
          margin: 0 0 10px;
          color: #ffffff;
          font-size: 18px;
        }

        .mwcrm-info-card p {
          margin: 0;
          color: var(--mwcrm-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           PIPELINE
        ===================================================== */

        .mwcrm-pipeline {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 28px;
        }

        .mwcrm-pipeline-card {
          min-height: 215px;
          padding: 22px;
          border: 1px solid rgba(8, 185, 244, 0.14);
          border-radius: 13px;
          background: #071015;
        }

        .mwcrm-pipeline-card:nth-child(even) {
          border-color: rgba(255, 121, 0, 0.14);
        }

        .mwcrm-pipeline-number {
          margin-bottom: 14px;
          color: var(--mwcrm-blue-light);
          font-size: 9px;
          font-weight: 950;
          letter-spacing: 0.1em;
        }

        .mwcrm-pipeline-card:nth-child(even)
          .mwcrm-pipeline-number {
          color: var(--mwcrm-orange-light);
        }

        .mwcrm-pipeline-card h3 {
          margin: 0 0 9px;
          color: #ffffff;
          font-size: 18px;
        }

        .mwcrm-pipeline-card p {
          margin: 0;
          color: var(--mwcrm-muted);
          font-size: 12px;
          line-height: 1.66;
        }

        /* =====================================================
           CHECKLIST
        ===================================================== */

        .mwcrm-checklist {
          display: grid;
          gap: 10px;
          margin: 25px 0 0;
          padding: 0;
          list-style: none;
        }

        .mwcrm-checklist li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 13px 15px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 9px;
          color: #c0ccd2;
          background: rgba(255, 255, 255, 0.015);
          font-size: 13px;
          line-height: 1.55;
        }

        .mwcrm-checklist svg {
          width: 17px;
          height: 17px;
          flex: 0 0 auto;
          margin-top: 1px;
          color: var(--mwcrm-blue-light);
        }

        /* =====================================================
           AUTOMATION
        ===================================================== */

        .mwcrm-automation-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 27px;
        }

        .mwcrm-automation-card {
          padding: 23px;
          border: 1px solid var(--mwcrm-border);
          border-radius: 13px;
          background: #071015;
        }

        .mwcrm-automation-card h3 {
          margin: 0 0 9px;
          color: var(--mwcrm-blue-light);
          font-size: 18px;
        }

        .mwcrm-automation-card:nth-child(even) h3 {
          color: var(--mwcrm-orange-light);
        }

        .mwcrm-automation-card p {
          margin: 0;
          color: var(--mwcrm-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           CALLOUT
        ===================================================== */

        .mwcrm-callout {
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

        .mwcrm-callout-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          margin-bottom: 15px;
          border: 1px solid rgba(255, 121, 0, 0.25);
          border-radius: 12px;
          color: var(--mwcrm-orange-light);
          background: rgba(255, 121, 0, 0.045);
        }

        .mwcrm-callout-icon svg {
          width: 24px;
          height: 24px;
        }

        .mwcrm-callout h3 {
          margin: 0 0 10px;
          color: #ffffff;
          font-size: 22px;
        }

        .mwcrm-callout p {
          margin: 0;
          color: var(--mwcrm-muted);
          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           FAQ
        ===================================================== */

        .mwcrm-faq-grid {
          display: grid;
          gap: 12px;
          margin-top: 27px;
        }

        .mwcrm-faq-card {
          padding: 23px;
          border: 1px solid var(--mwcrm-border);
          border-radius: 13px;
          background: #071015;
        }

        .mwcrm-faq-card h3 {
          margin: 0 0 9px;
          color: var(--mwcrm-blue-light);
          font-size: 17px;
        }

        .mwcrm-faq-card:nth-child(even) h3 {
          color: var(--mwcrm-orange-light);
        }

        .mwcrm-faq-card p {
          margin: 0;
          color: var(--mwcrm-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           CTA / BUTTONS
        ===================================================== */

        .mwcrm-button-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 25px;
        }

        .mwcrm-btn {
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

        .mwcrm-btn:hover {
          transform: translateY(-2px);
        }

        .mwcrm-btn-blue {
          border: 1px solid rgba(56, 215, 255, 0.5);
          background:
            linear-gradient(
              180deg,
              #0ab6ed,
              #0789b6
            );
        }

        .mwcrm-btn-orange {
          border: 1px solid rgba(255, 176, 49, 0.55);
          background:
            linear-gradient(
              180deg,
              #ff9519,
              #f16600
            );
        }

        .mwcrm-btn-dark {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.03);
        }

        .mwcrm-btn svg {
          width: 17px;
          height: 17px;
        }

        .mwcrm-article-cta {
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

        .mwcrm-article-cta h2 {
          max-width: 790px;
          margin: 0;
          font-size: clamp(31px, 4vw, 49px);
          line-height: 1.05;
          letter-spacing: -0.045em;
        }

        .mwcrm-article-cta p {
          max-width: 760px;
          margin: 17px 0 0;
          color: var(--mwcrm-muted);
          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           RELATED
        ===================================================== */

        .mwcrm-related-section {
          padding: 90px clamp(20px, 5vw, 80px);
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwcrm-related-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        .mwcrm-related-title {
          margin-bottom: 32px;
        }

        .mwcrm-related-title span {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 9px;
          color: var(--mwcrm-orange-light);
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .mwcrm-related-title svg {
          width: 16px;
          height: 16px;
        }

        .mwcrm-related-title h2 {
          margin: 0;
          font-size: clamp(31px, 4vw, 49px);
          letter-spacing: -0.045em;
        }

        .mwcrm-related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .mwcrm-related-card {
          min-height: 245px;
          display: flex;
          flex-direction: column;
          padding: 24px;
          border: 1px solid var(--mwcrm-border);
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

        .mwcrm-related-card:hover {
          transform: translateY(-4px);
          border-color: rgba(8, 185, 244, 0.3);
        }

        .mwcrm-related-card:nth-child(even):hover {
          border-color: rgba(255, 121, 0, 0.3);
        }

        .mwcrm-related-card h3 {
          margin: 0;
          font-size: 18px;
          line-height: 1.3;
        }

        .mwcrm-related-card p {
          margin: 13px 0 0;
          color: var(--mwcrm-muted);
          font-size: 12px;
          line-height: 1.65;
        }

        .mwcrm-related-link {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: auto;
          padding-top: 21px;
          color: var(--mwcrm-blue-light);
          font-size: 11px;
          font-weight: 850;
        }

        .mwcrm-related-card:nth-child(even)
          .mwcrm-related-link {
          color: var(--mwcrm-orange-light);
        }

        .mwcrm-related-link svg {
          width: 15px;
          height: 15px;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1050px) {
          .mwcrm-hero-inner {
            grid-template-columns: 1fr;
          }

          .mwcrm-hero-copy {
            text-align: center;
          }

          .mwcrm-article-label {
            margin-left: auto;
            margin-right: auto;
          }

          .mwcrm-hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .mwcrm-meta {
            justify-content: center;
          }

          .mwcrm-related-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .mwcrm-related-card:last-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 900px) {
          .mwcrm-pipeline {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 850px) {
          .mwcrm-article-layout {
            grid-template-columns: 1fr;
          }

          .mwcrm-toc {
            position: static;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0 20px;
          }

          .mwcrm-toc-title,
          .mwcrm-toc-cta {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 700px) {
          .mwcrm-hero-inner {
            padding: 70px 16px;
          }

          .mwcrm-hero h1 {
            font-size: clamp(43px, 13vw, 65px);
          }

          .mwcrm-article-section {
            padding: 70px 16px 85px;
          }

          .mwcrm-card-grid,
          .mwcrm-pipeline,
          .mwcrm-automation-grid,
          .mwcrm-related-grid {
            grid-template-columns: 1fr;
          }

          .mwcrm-related-card:last-child {
            grid-column: auto;
          }

          .mwcrm-related-section {
            padding: 70px 16px;
          }
        }

        @media (max-width: 500px) {
          .mwcrm-stage {
            min-height: 450px;
            transform: scale(0.9);
            margin: -10px -20px;
          }

          .mwcrm-dash-stats {
            grid-template-columns: 1fr;
          }

          .mwcrm-toc {
            grid-template-columns: 1fr;
          }

          .mwcrm-toc-title,
          .mwcrm-toc-cta {
            grid-column: auto;
          }

          .mwcrm-content-section p {
            font-size: 15px;
          }
        }
      `}</style>

      {/* ======================================================
          BREADCRUMBS
      ====================================================== */}

      <div className="mwcrm-breadcrumb-wrap">
        <nav
          className="mwcrm-breadcrumbs"
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
            CRM Dashboards & Leads
          </span>
        </nav>
      </div>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="mwcrm-hero">
        <div className="mwcrm-hero-inner">
          <div className="mwcrm-hero-copy">
            <div className="mwcrm-article-label">
              <BookOpen />
              Software & Business Education
            </div>

            <h1>
              How{" "}
              <span className="mwcrm-blue">
                CRM Dashboards
              </span>{" "}
              Help Small Businesses Stop{" "}
              <span className="mwcrm-orange">
                Losing Leads
              </span>
            </h1>

            <p className="mwcrm-hero-description">
              Getting an inquiry is only the
              beginning. A lead-management system
              can help a business organize what
              happens next: qualification,
              communication, follow-up, quotes,
              customer conversion, and ongoing
              records.
            </p>

            <div className="mwcrm-meta">
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
            className="mwcrm-stage"
            aria-hidden="true"
          >
            <div className="mwcrm-dashboard">
              <div className="mwcrm-dash-top">
                <strong>
                  LEAD CRM // MISSION CONTROL
                </strong>

                <span className="mwcrm-live">
                  ACTIVE
                </span>
              </div>

              <div className="mwcrm-dash-stats">
                <div className="mwcrm-stat">
                  <span>
                    New Leads
                  </span>

                  <strong>
                    08
                  </strong>
                </div>

                <div className="mwcrm-stat">
                  <span>
                    Follow-Up
                  </span>

                  <strong>
                    04
                  </strong>
                </div>

                <div className="mwcrm-stat">
                  <span>
                    Quotes
                  </span>

                  <strong>
                    03
                  </strong>
                </div>
              </div>

              <div className="mwcrm-pipeline-preview">
                <div className="mwcrm-pipeline-label">
                  SAMPLE PIPELINE
                </div>

                <div className="mwcrm-pipeline-row">
                  <strong>
                    Contractor Website
                  </strong>

                  <span className="mwcrm-status-pill">
                    FOLLOW-UP
                  </span>
                </div>

                <div className="mwcrm-pipeline-row">
                  <strong>
                    Software Dashboard
                  </strong>

                  <span className="mwcrm-status-pill">
                    QUOTE
                  </span>
                </div>

                <div className="mwcrm-pipeline-row">
                  <strong>
                    Website Redesign
                  </strong>

                  <span className="mwcrm-status-pill">
                    NEW
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          ARTICLE
      ====================================================== */}

      <article className="mwcrm-article-section">
        <div className="mwcrm-article-layout">
          {/* ==================================================
              TOC
          ================================================== */}

          <aside className="mwcrm-toc">
            <div className="mwcrm-toc-title">
              <BookOpen />
              In This Article
            </div>

            <a href="#short-answer">
              Short Answer
            </a>

            <a href="#why-leads-get-lost">
              Why Leads Get Lost
            </a>

            <a href="#what-is-crm">
              What Is a CRM?
            </a>

            <a href="#crm-capabilities">
              What a CRM Can Track
            </a>

            <a href="#pipeline">
              Lead Pipeline
            </a>

            <a href="#follow-up">
              Follow-Up
            </a>

            <a href="#source-tracking">
              Lead Sources
            </a>

            <a href="#website-integration">
              Website Integration
            </a>

            <a href="#automation">
              Automation
            </a>

            <a href="#simple-vs-custom">
              Simple vs Custom CRM
            </a>

            <a href="#faq">
              CRM FAQs
            </a>

            <div className="mwcrm-toc-cta">
              <Link href="/custom-software">
                Custom Software Services →
              </Link>
            </div>
          </aside>

          <div className="mwcrm-content">
            {/* =================================================
                SHORT ANSWER
            ================================================= */}

            <section
              className="mwcrm-answer-box"
              id="short-answer"
            >
              <div className="mwcrm-answer-label">
                <Zap />
                Short Answer
              </div>

              <h2>
                How Does a CRM Help Stop Leads
                From Getting Lost?
              </h2>

              <p>
                <strong>
                  A CRM gives the business one
                  organized place to track who
                  the lead is, what they need,
                  where they came from, what has
                  happened, and what should
                  happen next.
                </strong>{" "}
                It does not guarantee a sale, but
                it can reduce the chance that an
                opportunity disappears simply
                because a follow-up, note, quote,
                or conversation was forgotten.
              </p>
            </section>

            {/* =================================================
                LOST LEADS
            ================================================= */}

            <section
              className="mwcrm-content-section"
              id="why-leads-get-lost"
            >
              <h2>
                Businesses Can Lose Leads{" "}
                <span className="mwcrm-orange">
                  After They Arrive
                </span>
              </h2>

              <p>
                Businesses spend time building
                websites, improving search
                visibility, posting on social
                media, asking for referrals, and
                performing outreach because they
                want inquiries.
              </p>

              <p>
                But getting the inquiry does not
                mean the process is finished.
              </p>

              <p>
                The business still needs to read
                it, determine whether the lead is
                qualified, respond, remember the
                conversation, follow up at the
                right time, prepare pricing when
                appropriate, and know whether the
                opportunity became a customer.
              </p>

              <p>
                Without a system, those steps can
                become spread across email,
                phones, text messages,
                spreadsheets, paper, calendars,
                and memory.
              </p>

              <div className="mwcrm-card-grid">
                {leadProblems.map(
                  (item) => {
                    const Icon =
                      item.icon;

                    return (
                      <div
                        className="mwcrm-info-card"
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
                WHAT IS CRM
            ================================================= */}

            <section
              className="mwcrm-content-section"
              id="what-is-crm"
            >
              <h2>
                What Is a{" "}
                <span className="mwcrm-blue">
                  CRM?
                </span>
              </h2>

              <p>
                CRM commonly stands for
                <strong>
                  {" "}
                  customer relationship
                  management.
                </strong>
              </p>

              <p>
                The term can refer to large
                commercial platforms used by
                major sales organizations, but a
                CRM does not have to be enormous.
              </p>

              <p>
                For a small business, the system
                may simply provide a structured
                place to manage:
              </p>

              <ul className="mwcrm-checklist">
                <li>
                  <CheckCircle2 />
                  Leads
                </li>

                <li>
                  <CheckCircle2 />
                  Customer information
                </li>

                <li>
                  <CheckCircle2 />
                  Sales status
                </li>

                <li>
                  <CheckCircle2 />
                  Notes
                </li>

                <li>
                  <CheckCircle2 />
                  Follow-up dates
                </li>

                <li>
                  <CheckCircle2 />
                  Quotes or project value
                </li>

                <li>
                  <CheckCircle2 />
                  Lead sources
                </li>

                <li>
                  <CheckCircle2 />
                  Communication history
                </li>
              </ul>
            </section>

            {/* =================================================
                CAPABILITIES
            ================================================= */}

            <section
              className="mwcrm-content-section"
              id="crm-capabilities"
            >
              <h2>
                What a CRM Dashboard Can{" "}
                <span className="mwcrm-orange">
                  Organize
                </span>
              </h2>

              <div className="mwcrm-card-grid">
                {crmCapabilities.map(
                  (item) => {
                    const Icon =
                      item.icon;

                    return (
                      <div
                        className="mwcrm-info-card"
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
                PIPELINE
            ================================================= */}

            <section
              className="mwcrm-content-section"
              id="pipeline"
            >
              <h2>
                A Lead Pipeline Makes the{" "}
                <span className="mwcrm-blue">
                  Sales Process Visible
                </span>
              </h2>

              <p>
                A pipeline is simply a structured
                way to describe where an
                opportunity currently stands.
              </p>

              <p>
                The exact stages should match the
                business. A contractor, web
                designer, accountant, property
                manager, repair company, and
                software business may all need
                slightly different processes.
              </p>

              <p>
                A basic example could look like
                this:
              </p>

              <div className="mwcrm-pipeline">
                {pipeline.map(
                  (item) => (
                    <div
                      className="mwcrm-pipeline-card"
                      key={item.number}
                    >
                      <div className="mwcrm-pipeline-number">
                        STAGE {item.number}
                      </div>

                      <h3>
                        {item.stage}
                      </h3>

                      <p>
                        {item.text}
                      </p>
                    </div>
                  )
                )}
              </div>

              <div className="mwcrm-callout">
                <div className="mwcrm-callout-icon">
                  <LayoutDashboard />
                </div>

                <h3>
                  A Dashboard Should Show What
                  Needs Attention
                </h3>

                <p>
                  The best dashboard is not the
                  one with the largest number of
                  charts. It is the one that
                  makes important work easier to
                  see: new leads, overdue
                  follow-ups, quotes waiting on a
                  decision, active customers, and
                  other next actions.
                </p>
              </div>
            </section>

            {/* =================================================
                FOLLOW UP
            ================================================= */}

            <section
              className="mwcrm-content-section"
              id="follow-up"
            >
              <h2>
                Follow-Up Should Not Depend{" "}
                <span className="mwcrm-orange">
                  Entirely on Memory
                </span>
              </h2>

              <p>
                A lead may not be ready to buy
                during the first conversation.
              </p>

              <p>
                They may need time to review a
                quote, speak with another person,
                wait for funding, finish another
                project, or simply decide what
                they want.
              </p>

              <p>
                That does not automatically mean
                the lead is lost.
              </p>

              <p>
                A CRM can record a specific
                follow-up date and make that
                future action visible instead of
                depending on someone to remember
                several days or weeks later.
              </p>

              <p>
                The system can also distinguish
                between a genuine follow-up and a
                lead that has explicitly declined
                the service or requested no
                further contact.
              </p>
            </section>

            {/* =================================================
                SOURCE TRACKING
            ================================================= */}

            <section
              className="mwcrm-content-section"
              id="source-tracking"
            >
              <h2>
                Track{" "}
                <span className="mwcrm-blue">
                  Where Leads Come From
                </span>
              </h2>

              <p>
                Marketing becomes harder to
                evaluate when every inquiry is
                simply recorded as
                <strong>
                  {" "}
                  “new lead.”
                </strong>
              </p>

              <p>
                A useful system may track sources
                such as:
              </p>

              <ul className="mwcrm-checklist">
                <li>
                  <CheckCircle2 />
                  Google search
                </li>

                <li>
                  <CheckCircle2 />
                  Google Business Profile
                </li>

                <li>
                  <CheckCircle2 />
                  Bing or other search engines
                </li>

                <li>
                  <CheckCircle2 />
                  Referral
                </li>

                <li>
                  <CheckCircle2 />
                  Facebook or another social
                  platform
                </li>

                <li>
                  <CheckCircle2 />
                  Direct outreach
                </li>

                <li>
                  <CheckCircle2 />
                  Blog or educational content
                </li>

                <li>
                  <CheckCircle2 />
                  Paid campaign when applicable
                </li>
              </ul>

              <p>
                Over time, this can help connect
                marketing activity with actual
                inquiries and eventually with
                customers or revenue.
              </p>

              <p>
                That does not mean every lead
                source can always be identified
                perfectly. People may visit
                multiple times, switch devices,
                receive referrals offline, or
                discover the business through
                several channels before making
                contact.
              </p>
            </section>

            {/* =================================================
                WEBSITE INTEGRATION
            ================================================= */}

            <section
              className="mwcrm-content-section"
              id="website-integration"
            >
              <h2>
                Connect the Website{" "}
                <span className="mwcrm-orange">
                  Directly to the CRM
                </span>
              </h2>

              <p>
                One of the strongest advantages
                of custom website development is
                that the contact experience and
                internal lead system can be
                connected.
              </p>

              <p>
                Instead of:
              </p>

              <p>
                Website form → email → manual
                spreadsheet entry → reminder
                created somewhere else
              </p>

              <p>
                the workflow can become:
              </p>

              <p>
                <strong>
                  Website form → database lead
                  record → notification →
                  follow-up workflow → pipeline
                  management.
                </strong>
              </p>

              <p>
                The public website and private
                business software become two
                parts of the same system.
              </p>

              <h3>
                Useful CRM Fields
              </h3>

              <ul className="mwcrm-checklist">
                {usefulFields.map(
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
                AUTOMATION
            ================================================= */}

            <section
              className="mwcrm-content-section"
              id="automation"
            >
              <h2>
                Where{" "}
                <span className="mwcrm-blue">
                  Automation
                </span>{" "}
                Can Help
              </h2>

              <p>
                Automation should reduce useful
                repetitive work, not create an
                impersonal maze for customers.
              </p>

              <p>
                Simple CRM automation can support
                the human sales process by making
                information and next actions
                easier to manage.
              </p>

              <div className="mwcrm-automation-grid">
                {automations.map(
                  (item) => (
                    <div
                      className="mwcrm-automation-card"
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

              <div className="mwcrm-callout">
                <div className="mwcrm-callout-icon">
                  <UserCheck />
                </div>

                <h3>
                  Automation Does Not Replace
                  Judgment
                </h3>

                <p>
                  A system can remind someone to
                  follow up or organize the lead,
                  but the business still has to
                  understand the customer,
                  communicate appropriately, make
                  pricing decisions, and decide
                  whether the opportunity is a
                  good fit.
                </p>
              </div>
            </section>

            {/* =================================================
                SIMPLE VS CUSTOM
            ================================================= */}

            <section
              className="mwcrm-content-section"
              id="simple-vs-custom"
            >
              <h2>
                Do You Need a{" "}
                <span className="mwcrm-orange">
                  Custom CRM?
                </span>
              </h2>

              <p>
                Not necessarily.
              </p>

              <p>
                If a spreadsheet or existing CRM
                product already handles the
                business process well, building
                custom software may not be
                justified.
              </p>

              <p>
                Custom CRM development becomes
                more useful when the business has
                a workflow that does not fit
                generic software well, needs
                tighter integration with its
                website, requires specialized
                dashboards, or wants specific
                automation and data structures.
              </p>

              <p>
                The decision should start with
                the actual operational problem.
              </p>

              <div className="mwcrm-callout">
                <div className="mwcrm-callout-icon">
                  <Target />
                </div>

                <h3>
                  Use the Simplest System That
                  Works
                </h3>

                <p>
                  A business should not buy or
                  build a complicated CRM simply
                  to say it has one. Start with
                  the functions that prevent
                  leads from being forgotten and
                  expand when the workflow
                  genuinely requires more.
                </p>
              </div>

              <div className="mwcrm-button-row">
                <Link
                  href="/custom-software"
                  className="mwcrm-btn mwcrm-btn-blue"
                >
                  Explore Custom Software
                  <ArrowRight />
                </Link>
              </div>
            </section>

            {/* =================================================
                FAQ
            ================================================= */}

            <section
              className="mwcrm-content-section"
              id="faq"
            >
              <h2>
                CRM & Lead Management{" "}
                <span className="mwcrm-blue">
                  FAQs
                </span>
              </h2>

              <div className="mwcrm-faq-grid">
                {faqs.map(
                  (item) => (
                    <div
                      className="mwcrm-faq-card"
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

            <section className="mwcrm-article-cta">
              <h2>
                Are Leads Coming In but the{" "}
                <span className="mwcrm-orange">
                  Follow-Up Process
                </span>{" "}
                Is Falling Apart?
              </h2>

              <p>
                Matthew Web can build websites,
                lead forms, dashboards,
                database-backed tools, and custom
                CRM-style systems around the
                workflow your business actually
                needs.
              </p>

              <div className="mwcrm-button-row">
                <Link
                  href="/contact-us"
                  className="mwcrm-btn mwcrm-btn-orange"
                >
                  Tell Us About Your Workflow
                  <ArrowRight />
                </Link>

                <Link
                  href="/custom-software"
                  className="mwcrm-btn mwcrm-btn-blue"
                >
                  Custom Software
                </Link>

                <Link
                  href="/website-design"
                  className="mwcrm-btn mwcrm-btn-dark"
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

      <section className="mwcrm-related-section">
        <div className="mwcrm-related-inner">
          <div className="mwcrm-related-title">
            <span>
              <Sparkles />
              Continue Reading
            </span>

            <h2>
              Related{" "}
              <span className="mwcrm-blue">
                Articles
              </span>
            </h2>
          </div>

          <div className="mwcrm-related-grid">
            {relatedArticles.map(
              (article) => (
                <Link
                  href={article.href}
                  className="mwcrm-related-card"
                  key={article.href}
                >
                  <h3>
                    {article.title}
                  </h3>

                  <p>
                    {article.text}
                  </p>

                  <div className="mwcrm-related-link">
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
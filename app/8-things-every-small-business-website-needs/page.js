import Link from "next/link";

import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  FileText,
  Gauge,
  Globe2,
  LayoutTemplate,
  MapPin,
  MessageSquare,
  MonitorSmartphone,
  Phone,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  UserCheck,
  Zap,
} from "lucide-react";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/* ============================================================
   METADATA
============================================================ */

export const metadata = {
  title:
    "8 Things Every Small Business Website Needs | Matthew Web",

  description:
    "Learn eight things a strong small-business website needs, including a clear business message, service information, contact paths, mobile usability, trust signals, local information, performance, and search-ready structure.",

  alternates: {
    canonical:
      "https://matthew-web.com/8-things-every-small-business-website-needs",
  },

  openGraph: {
    title:
      "8 Things Every Small Business Website Needs | Matthew Web",

    description:
      "A practical small-business website checklist covering services, contact information, mobile design, trust, local information, performance, SEO structure, and clear calls to action.",

    url:
      "https://matthew-web.com/8-things-every-small-business-website-needs",

    siteName:
      "Matthew Web",

    type:
      "article",
  },
};

/* ============================================================
   EIGHT ESSENTIALS
============================================================ */

const essentials = [
  {
    number: "01",
    icon: Target,

    title:
      "A Clear Explanation of the Business",

    text:
      "Visitors should be able to understand what the company does, who it helps, and what kind of service or product it provides without searching through several pages.",

    question:
      "Can a new visitor understand the business within the first few moments of reading the page?",
  },

  {
    number: "02",
    icon: FileText,

    title:
      "Useful Service or Product Information",

    text:
      "Customers need enough information to determine whether the business offers what they need. Important services deserve clear explanations instead of being buried inside one vague paragraph.",

    question:
      "Can a customer tell what is offered and whether it matches their need?",
  },

  {
    number: "03",
    icon: MessageSquare,

    title:
      "A Clear Way to Contact the Business",

    text:
      "Phone numbers, email links, contact forms, quote requests, booking requests, or other appropriate contact methods should be easy to locate and use.",

    question:
      "Can somebody who is ready to contact the business immediately see what to do next?",
  },

  {
    number: "04",
    icon: MonitorSmartphone,

    title:
      "A Mobile-Friendly Experience",

    text:
      "Text, navigation, buttons, forms, images, tables, and other important elements should remain practical on smaller screens instead of forcing customers to zoom, scroll sideways, or fight the interface.",

    question:
      "Can the most important customer actions be completed comfortably from a phone?",
  },

  {
    number: "05",
    icon: ShieldCheck,

    title:
      "Real Trust Information",

    text:
      "A website should help customers understand who is behind the business and why they should feel comfortable starting a conversation. Real project examples, accurate business information, process explanations, policies, and verified customer feedback can all help when legitimately available.",

    question:
      "Does the website provide real evidence instead of unsupported claims?",
  },

  {
    number: "06",
    icon: MapPin,

    title:
      "Accurate Location or Service-Area Information",

    text:
      "Local businesses should make it clear where they genuinely operate. This may mean a physical location, service area, towns or regions served, or another accurate geographic description.",

    question:
      "Can a customer determine whether the business actually serves their area?",
  },

  {
    number: "07",
    icon: Gauge,

    title:
      "Reasonable Performance and Reliability",

    text:
      "Important information should load and respond without unnecessary delay. Images, scripts, animations, tracking tools, integrations, and other features should provide enough value to justify the technical weight they add.",

    question:
      "Does the website work reliably without unnecessary waiting, jumping, or broken interactions?",
  },

  {
    number: "08",
    icon: SearchCheck,

    title:
      "A Search-Ready Technical Structure",

    text:
      "Useful page titles, headings, metadata, internal links, canonical URLs, sitemap structure, crawl controls, mobile usability, and indexable public content help search systems understand the website.",

    question:
      "Can search crawlers clearly discover and understand the pages that are meant to be public?",
  },
];

/* ============================================================
   HOMEPAGE CHECKLIST
============================================================ */

const homepageItems = [
  "Business name",
  "Clear primary message",
  "Main service or product categories",
  "Primary customer action",
  "Phone or contact path where appropriate",
  "Useful trust information",
  "Short explanation of why the business is different",
  "Links to deeper service information",
  "Mobile-friendly navigation",
  "Accurate business information",
];

/* ============================================================
   TRUST ELEMENTS
============================================================ */

const trustElements = [
  {
    title:
      "Real Project Examples",

    text:
      "Show work the business has actually completed or projects that can legitimately be presented publicly.",
  },

  {
    title:
      "Verified Customer Feedback",

    text:
      "Use reviews or testimonials only when the customer feedback is real and the business has an appropriate basis to publish it.",
  },

  {
    title:
      "Clear Business Identity",

    text:
      "Make it clear who the company is, what it does, how to reach it, and where it operates when location is relevant.",
  },

  {
    title:
      "Understandable Process",

    text:
      "Explaining how an inquiry becomes a quote, project, appointment, or service can reduce uncertainty for new customers.",
  },

  {
    title:
      "Accurate Pricing Information",

    text:
      "If prices or starting prices are displayed, they should match the actual way the business currently sells the service.",
  },

  {
    title:
      "Honest Capability Claims",

    text:
      "Do not advertise employees, certifications, partnerships, products, locations, customer results, or capabilities that do not actually exist.",
  },
];

/* ============================================================
   CONTACT PATHS
============================================================ */

const contactPaths = [
  {
    icon: Phone,

    title:
      "Phone",

    text:
      "Useful when customers commonly want to speak directly with the business.",
  },

  {
    icon: MessageSquare,

    title:
      "Contact Form",

    text:
      "Useful for general inquiries and customers who prefer to send information online.",
  },

  {
    icon: FileText,

    title:
      "Quote Request",

    text:
      "Useful when the business needs project details before discussing pricing.",
  },

  {
    icon: UserCheck,

    title:
      "Booking Request",

    text:
      "Useful when customers need to request an appointment or service time that may still require confirmation.",
  },
];

/* ============================================================
   SEARCH FOUNDATION
============================================================ */

const searchItems = [
  "Descriptive page titles",
  "Useful meta descriptions",
  "One clear H1 per important page",
  "Logical H2 and H3 structure",
  "Canonical URLs",
  "Internal links",
  "Descriptive link text",
  "XML sitemap",
  "Correct robots and noindex behavior",
  "HTTPS",
  "Mobile usability",
  "Useful public content",
  "Structured data where it accurately represents the page",
];

/* ============================================================
   OPTIONAL FEATURES
============================================================ */

const optionalFeatures = [
  {
    title:
      "Online Payments",

    text:
      "Useful when customers legitimately need to pay deposits, invoices, products, subscriptions, or other charges online.",
  },

  {
    title:
      "Booking System",

    text:
      "Useful when appointments or service windows can be managed through a structured scheduling process.",
  },

  {
    title:
      "CRM Integration",

    text:
      "Useful when inquiries need statuses, notes, follow-up dates, quote tracking, or other lead-management information.",
  },

  {
    title:
      "Customer Portal",

    text:
      "Useful when customers need authenticated access to documents, project information, account details, or other private resources.",
  },

  {
    title:
      "Automation",

    text:
      "Useful when repetitive notifications, record creation, reminders, workflows, or data transfers can be handled reliably by software.",
  },

  {
    title:
      "Custom Software",

    text:
      "Useful when the business requires functionality that goes significantly beyond a standard marketing website.",
  },
];

/* ============================================================
   FAQ
============================================================ */

const faqs = [
  {
    q:
      "How many pages does a small business website need?",

    a:
      "There is no universal page count. A small website may only need several strong core pages, while a business with multiple services, locations, customer questions, projects, or content needs may benefit from a larger structure.",
  },

  {
    q:
      "What pages should a basic small-business website include?",

    a:
      "Common core pages include a homepage, service information, an About page, and a Contact page. Additional pages such as pricing, project examples, FAQs, service-specific pages, blog articles, policies, or booking pages should be added when they serve a real business purpose.",
  },

  {
    q:
      "Does every business need online booking?",

    a:
      "No. Some businesses benefit from instant scheduling, others need booking requests that require confirmation, and some businesses are better served by phone calls or quote forms.",
  },

  {
    q:
      "Do small-business websites need SEO?",

    a:
      "A business website benefits from a search-ready foundation when the company wants its public pages to be discoverable through search. That includes useful content, crawlability, metadata, internal links, mobile usability, sitemaps, and indexing preparation.",
  },

  {
    q:
      "Should a website display customer reviews?",

    a:
      "Real customer feedback can be useful when it is verified and appropriate to publish. Businesses should not create fake reviews, invented star ratings, or customer identities to make the company appear more established.",
  },

  {
    q:
      "Can Matthew Web add forms, CRM systems, or automation later?",

    a:
      "Yes. Matthew Web can build websites that later connect to forms, database-backed lead systems, CRM-style dashboards, integrations, automation, payments, and other custom software when the business needs them.",
  },
];

/* ============================================================
   RELATED ARTICLES
============================================================ */

const relatedArticles = [
  {
    title:
      "7 Reasons Why Small Business Websites Are Vital",

    href:
      "/7-reasons-why-small-business-websites-are-vital",

    text:
      "Learn why the website can become the central public hub connecting services, search, marketing, leads, and future technology.",
  },

  {
    title:
      "7 Signs You Need a New Website for Your Business",

    href:
      "/7-signs-you-need-a-new-website-for-your-business",

    text:
      "See how to identify when an existing website is no longer meeting the needs of the business or its customers.",
  },

  {
    title:
      "How Matthew Web Builds SEO-Ready Small Business Websites",

    href:
      "/how-matthew-web-builds-seo-ready-small-business-websites",

    text:
      "Explore the technical search foundation behind a modern small-business website.",
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
    "8 Things Every Small Business Website Needs",

  description:
    "A practical checklist covering eight important elements of a small-business website, including business messaging, services, contact paths, mobile usability, trust information, location information, performance, and search-ready structure.",

  mainEntityOfPage: {
    "@type":
      "WebPage",

    "@id":
      "https://matthew-web.com/8-things-every-small-business-website-needs",
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
        "8 Things Every Small Business Website Needs",

      item:
        "https://matthew-web.com/8-things-every-small-business-website-needs",
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

export default function SmallBusinessWebsiteNeedsArticlePage() {
  return (
    <main className="mwsbn-page">
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
          --mwsbn-black: #020304;
          --mwsbn-muted: #aebbc5;
          --mwsbn-blue: #08b9f4;
          --mwsbn-blue-light: #38d7ff;
          --mwsbn-orange: #ff7900;
          --mwsbn-orange-light: #ffab31;
          --mwsbn-green: #35e07e;
          --mwsbn-border: rgba(255,255,255,.09);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--mwsbn-black);
        }

        .mwsbn-page {
          min-height: 100vh;
          overflow: hidden;
          color: #fff;
          background: var(--mwsbn-black);
        }

        .mwsbn-blue {
          color: var(--mwsbn-blue-light);
        }

        .mwsbn-orange {
          color: var(--mwsbn-orange);
        }

        /* =====================================================
           BREADCRUMBS
        ===================================================== */

        .mwsbn-breadcrumb-wrap {
          border-bottom: 1px solid rgba(255,255,255,.06);
          background: #04080b;
        }

        .mwsbn-breadcrumbs {
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

        .mwsbn-breadcrumbs a {
          color: #8799a3;
          text-decoration: none;
        }

        .mwsbn-breadcrumbs a:hover {
          color: var(--mwsbn-blue-light);
        }

        .mwsbn-breadcrumbs svg {
          width: 12px;
          height: 12px;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwsbn-hero {
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

        .mwsbn-hero::before {
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

        .mwsbn-hero-inner {
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

        .mwsbn-label {
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

        .mwsbn-label svg {
          width: 16px;
          height: 16px;
        }

        .mwsbn-hero h1 {
          max-width: 990px;
          margin: 0;

          font-size:
            clamp(48px,5.6vw,84px);

          line-height: .99;
          letter-spacing: -.06em;
        }

        .mwsbn-description {
          max-width: 810px;

          margin: 25px 0 0;

          color: #b8c6cf;

          font-size:
            clamp(16px,1.4vw,20px);

          line-height: 1.75;
        }

        .mwsbn-meta {
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

        .mwsbn-stage {
          min-height: 470px;

          display: grid;
          place-items: center;
        }

        .mwsbn-console {
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

        .mwsbn-console-top {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-bottom: 18px;
        }

        .mwsbn-console-top strong {
          color: #81929d;

          font-size: 9px;
          letter-spacing: .12em;
        }

        .mwsbn-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;

          color: #8da0aa;

          font-size: 8px;
          font-weight: 900;
        }

        .mwsbn-status::before {
          content: "";

          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: var(--mwsbn-green);

          box-shadow:
            0 0 7px rgba(53,224,126,.7);
        }

        .mwsbn-site-card {
          padding: 18px;

          border: 1px solid rgba(255,121,0,.17);
          border-radius: 11px;

          background: #071015;
        }

        .mwsbn-site-card span {
          color: #657984;

          font-size: 7px;
          font-weight: 900;
          letter-spacing: .09em;
          text-transform: uppercase;
        }

        .mwsbn-site-title {
          display: flex;
          align-items: center;
          gap: 9px;

          margin-top: 10px;

          color: var(--mwsbn-orange-light);

          font-size: 15px;
          font-weight: 900;
        }

        .mwsbn-site-title svg {
          width: 22px;
          height: 22px;
        }

        .mwsbn-site-card p {
          margin: 10px 0 0;

          color: #788b95;

          font-size: 9px;
          line-height: 1.6;
        }

        .mwsbn-preview-grid {
          display: grid;

          grid-template-columns:
            repeat(4,1fr);

          gap: 8px;

          margin-top: 10px;
        }

        .mwsbn-preview-card {
          min-height: 90px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          gap: 7px;

          padding: 10px;

          border: 1px solid rgba(8,185,244,.14);
          border-radius: 9px;

          background: #071015;

          text-align: center;
        }

        .mwsbn-preview-card:nth-child(even) {
          border-color: rgba(255,121,0,.14);
        }

        .mwsbn-preview-card svg {
          width: 20px;
          height: 20px;

          color: var(--mwsbn-blue-light);
        }

        .mwsbn-preview-card:nth-child(even) svg {
          color: var(--mwsbn-orange-light);
        }

        .mwsbn-preview-card strong {
          font-size: 7px;
          letter-spacing: .04em;
        }

        /* =====================================================
           ARTICLE
        ===================================================== */

        .mwsbn-article-section {
          padding:
            95px
            clamp(20px,5vw,80px)
            110px;

          background: #020304;
        }

        .mwsbn-layout {
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

        .mwsbn-toc {
          position: sticky;
          top: 30px;

          padding: 23px;

          border: 1px solid var(--mwsbn-border);
          border-radius: 14px;

          background:
            linear-gradient(
              145deg,
              #09131a,
              #04080b
            );
        }

        .mwsbn-toc-title {
          display: flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 15px;

          font-size: 10px;
          font-weight: 900;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .mwsbn-toc-title svg {
          width: 16px;
          height: 16px;

          color: var(--mwsbn-blue-light);
        }

        .mwsbn-toc a {
          display: block;

          padding: 8px 0;

          color: #8799a3;

          text-decoration: none;

          font-size: 12px;
          line-height: 1.45;
        }

        .mwsbn-toc a:hover {
          color: var(--mwsbn-blue-light);
        }

        .mwsbn-toc-cta {
          margin-top: 18px;
          padding-top: 17px;

          border-top:
            1px solid rgba(255,255,255,.07);
        }

        .mwsbn-toc-cta a {
          color: var(--mwsbn-orange-light);
          font-weight: 850;
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .mwsbn-content {
          min-width: 0;
        }

        .mwsbn-section {
          margin-bottom: 62px;

          scroll-margin-top: 35px;
        }

        .mwsbn-section h2 {
          margin: 0 0 20px;

          font-size:
            clamp(30px,3.5vw,48px);

          line-height: 1.08;
          letter-spacing: -.045em;
        }

        .mwsbn-section h3 {
          margin: 32px 0 12px;

          color: var(--mwsbn-blue-light);

          font-size: 21px;
          line-height: 1.3;
        }

        .mwsbn-section p {
          margin: 0 0 19px;

          color: #b6c3ca;

          font-size: 16px;
          line-height: 1.85;
        }

        .mwsbn-section strong {
          color: #fff;
        }

        /* =====================================================
           ANSWER
        ===================================================== */

        .mwsbn-answer {
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

        .mwsbn-answer-label {
          display: flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 12px;

          color: var(--mwsbn-blue-light);

          font-size: 9px;
          font-weight: 950;
          letter-spacing: .11em;
          text-transform: uppercase;
        }

        .mwsbn-answer-label svg {
          width: 17px;
          height: 17px;
        }

        .mwsbn-answer h2 {
          margin: 0 0 12px;

          font-size:
            clamp(24px,3vw,36px);

          line-height: 1.1;
        }

        .mwsbn-answer p {
          margin: 0;

          color: #b7c5cc;

          font-size: 15px;
          line-height: 1.75;
        }

        /* =====================================================
           ESSENTIAL CARDS
        ===================================================== */

        .mwsbn-essential-grid {
          display: grid;
          gap: 14px;

          margin-top: 28px;
        }

        .mwsbn-essential-card {
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

        .mwsbn-essential-card:nth-child(even) {
          border-color: rgba(255,121,0,.14);
        }

        .mwsbn-essential-icon {
          width: 70px;
          height: 70px;

          display: grid;
          place-items: center;

          border:
            1px solid rgba(8,185,244,.22);

          border-radius: 16px;

          color: var(--mwsbn-blue-light);

          background: rgba(8,185,244,.04);
        }

        .mwsbn-essential-card:nth-child(even)
          .mwsbn-essential-icon {
          border-color: rgba(255,121,0,.22);

          color: var(--mwsbn-orange-light);

          background: rgba(255,121,0,.035);
        }

        .mwsbn-essential-icon svg {
          width: 30px;
          height: 30px;
        }

        .mwsbn-number {
          margin-bottom: 7px;

          color: var(--mwsbn-blue-light);

          font-size: 9px;
          font-weight: 950;
          letter-spacing: .1em;
        }

        .mwsbn-essential-card:nth-child(even)
          .mwsbn-number {
          color: var(--mwsbn-orange-light);
        }

        .mwsbn-essential-card h3 {
          margin: 0 0 10px;

          color: #fff;

          font-size: 20px;
        }

        .mwsbn-essential-card p {
          margin: 0 0 14px;

          color: var(--mwsbn-muted);

          font-size: 13px;
          line-height: 1.72;
        }

        .mwsbn-question {
          padding: 12px 14px;

          border-left:
            2px solid var(--mwsbn-blue);

          color: #c6d4db;

          background: rgba(8,185,244,.035);

          font-size: 12px;
          line-height: 1.65;
        }

        .mwsbn-essential-card:nth-child(even)
          .mwsbn-question {
          border-left-color: var(--mwsbn-orange);

          background: rgba(255,121,0,.03);
        }

        /* =====================================================
           CHECKLIST
        ===================================================== */

        .mwsbn-checklist {
          display: grid;
          gap: 10px;

          margin: 25px 0;

          padding: 0;

          list-style: none;
        }

        .mwsbn-checklist li {
          display: flex;
          align-items: flex-start;
          gap: 10px;

          padding: 13px 15px;

          border:
            1px solid rgba(255,255,255,.07);

          border-radius: 9px;

          color: #c0ccd2;

          background: rgba(255,255,255,.015);

          font-size: 13px;
          line-height: 1.55;
        }

        .mwsbn-checklist svg {
          width: 17px;
          height: 17px;

          flex: 0 0 auto;

          margin-top: 1px;

          color: var(--mwsbn-blue-light);
        }

        /* =====================================================
           TRUST
        ===================================================== */

        .mwsbn-card-grid {
          display: grid;

          grid-template-columns:
            repeat(2,1fr);

          gap: 12px;

          margin-top: 27px;
        }

        .mwsbn-info-card {
          padding: 23px;

          border: 1px solid var(--mwsbn-border);
          border-radius: 13px;

          background: #071015;
        }

        .mwsbn-info-card h3 {
          margin: 0 0 9px;

          color: var(--mwsbn-blue-light);

          font-size: 18px;
        }

        .mwsbn-info-card:nth-child(even) h3 {
          color: var(--mwsbn-orange-light);
        }

        .mwsbn-info-card p {
          margin: 0;

          color: var(--mwsbn-muted);

          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           CONTACT PATHS
        ===================================================== */

        .mwsbn-contact-grid {
          display: grid;

          grid-template-columns:
            repeat(2,1fr);

          gap: 14px;

          margin-top: 27px;
        }

        .mwsbn-contact-card {
          min-height: 225px;

          padding: 23px;

          border:
            1px solid rgba(8,185,244,.14);

          border-radius: 14px;

          background: rgba(8,185,244,.018);
        }

        .mwsbn-contact-card:nth-child(even) {
          border-color: rgba(255,121,0,.14);

          background: rgba(255,121,0,.016);
        }

        .mwsbn-contact-card svg {
          width: 30px;
          height: 30px;

          margin-bottom: 16px;

          color: var(--mwsbn-blue-light);
        }

        .mwsbn-contact-card:nth-child(even) svg {
          color: var(--mwsbn-orange-light);
        }

        .mwsbn-contact-card h3 {
          margin: 0 0 10px;

          color: #fff;

          font-size: 18px;
        }

        .mwsbn-contact-card p {
          margin: 0;

          color: var(--mwsbn-muted);

          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           OPTIONAL FEATURES
        ===================================================== */

        .mwsbn-feature-grid {
          display: grid;

          grid-template-columns:
            repeat(2,1fr);

          gap: 12px;

          margin-top: 27px;
        }

        .mwsbn-feature-card {
          padding: 23px;

          border:
            1px solid rgba(8,185,244,.13);

          border-radius: 13px;

          background: rgba(8,185,244,.015);
        }

        .mwsbn-feature-card:nth-child(even) {
          border-color: rgba(255,121,0,.13);

          background: rgba(255,121,0,.014);
        }

        .mwsbn-feature-card h3 {
          margin: 0 0 9px;

          color: var(--mwsbn-blue-light);

          font-size: 18px;
        }

        .mwsbn-feature-card:nth-child(even) h3 {
          color: var(--mwsbn-orange-light);
        }

        .mwsbn-feature-card p {
          margin: 0;

          color: var(--mwsbn-muted);

          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           CALLOUT
        ===================================================== */

        .mwsbn-callout {
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

        .mwsbn-callout-icon {
          width: 48px;
          height: 48px;

          display: grid;
          place-items: center;

          margin-bottom: 15px;

          border:
            1px solid rgba(255,121,0,.25);

          border-radius: 12px;

          color: var(--mwsbn-orange-light);

          background: rgba(255,121,0,.045);
        }

        .mwsbn-callout-icon svg {
          width: 24px;
          height: 24px;
        }

        .mwsbn-callout h3 {
          margin: 0 0 10px;

          color: #fff;

          font-size: 22px;
        }

        .mwsbn-callout p {
          margin: 0;

          color: var(--mwsbn-muted);

          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           FAQ
        ===================================================== */

        .mwsbn-faq-grid {
          display: grid;
          gap: 12px;

          margin-top: 27px;
        }

        .mwsbn-faq-card {
          padding: 23px;

          border: 1px solid var(--mwsbn-border);
          border-radius: 13px;

          background: #071015;
        }

        .mwsbn-faq-card h3 {
          margin: 0 0 9px;

          color: var(--mwsbn-blue-light);

          font-size: 17px;
        }

        .mwsbn-faq-card:nth-child(even) h3 {
          color: var(--mwsbn-orange-light);
        }

        .mwsbn-faq-card p {
          margin: 0;

          color: var(--mwsbn-muted);

          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           BUTTONS / CTA
        ===================================================== */

        .mwsbn-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;

          margin-top: 25px;
        }

        .mwsbn-btn {
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

        .mwsbn-btn:hover {
          transform: translateY(-2px);
        }

        .mwsbn-btn-blue {
          border:
            1px solid rgba(56,215,255,.5);

          background:
            linear-gradient(
              180deg,
              #0ab6ed,
              #0789b6
            );
        }

        .mwsbn-btn-orange {
          border:
            1px solid rgba(255,176,49,.55);

          background:
            linear-gradient(
              180deg,
              #ff9519,
              #f16600
            );
        }

        .mwsbn-btn-dark {
          border:
            1px solid rgba(255,255,255,.12);

          background: rgba(255,255,255,.03);
        }

        .mwsbn-btn svg {
          width: 17px;
          height: 17px;
        }

        .mwsbn-article-cta {
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

        .mwsbn-article-cta h2 {
          max-width: 820px;

          margin: 0;

          font-size:
            clamp(31px,4vw,49px);

          line-height: 1.05;
          letter-spacing: -.045em;
        }

        .mwsbn-article-cta p {
          max-width: 790px;

          margin: 17px 0 0;

          color: var(--mwsbn-muted);

          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           RELATED
        ===================================================== */

        .mwsbn-related-section {
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

        .mwsbn-related-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        .mwsbn-related-title {
          margin-bottom: 32px;
        }

        .mwsbn-related-title span {
          display: flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 9px;

          color: var(--mwsbn-orange-light);

          font-size: 9px;
          font-weight: 900;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .mwsbn-related-title svg {
          width: 16px;
          height: 16px;
        }

        .mwsbn-related-title h2 {
          margin: 0;

          font-size:
            clamp(31px,4vw,49px);

          letter-spacing: -.045em;
        }

        .mwsbn-related-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 14px;
        }

        .mwsbn-related-card {
          min-height: 245px;

          display: flex;
          flex-direction: column;

          padding: 24px;

          border:
            1px solid var(--mwsbn-border);

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

        .mwsbn-related-card:hover {
          transform: translateY(-4px);

          border-color: rgba(8,185,244,.3);
        }

        .mwsbn-related-card:nth-child(even):hover {
          border-color: rgba(255,121,0,.3);
        }

        .mwsbn-related-card h3 {
          margin: 0;

          font-size: 18px;
          line-height: 1.3;
        }

        .mwsbn-related-card p {
          margin: 13px 0 0;

          color: var(--mwsbn-muted);

          font-size: 12px;
          line-height: 1.65;
        }

        .mwsbn-related-link {
          display: flex;
          align-items: center;
          gap: 7px;

          margin-top: auto;
          padding-top: 21px;

          color: var(--mwsbn-blue-light);

          font-size: 11px;
          font-weight: 850;
        }

        .mwsbn-related-card:nth-child(even)
          .mwsbn-related-link {
          color: var(--mwsbn-orange-light);
        }

        .mwsbn-related-link svg {
          width: 15px;
          height: 15px;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1050px) {
          .mwsbn-hero-inner {
            grid-template-columns: 1fr;
          }

          .mwsbn-hero-copy {
            text-align: center;
          }

          .mwsbn-label {
            margin-left: auto;
            margin-right: auto;
          }

          .mwsbn-description {
            margin-left: auto;
            margin-right: auto;
          }

          .mwsbn-meta {
            justify-content: center;
          }

          .mwsbn-related-grid {
            grid-template-columns:
              repeat(2,1fr);
          }

          .mwsbn-related-card:last-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 850px) {
          .mwsbn-layout {
            grid-template-columns: 1fr;
          }

          .mwsbn-toc {
            position: static;

            display: grid;

            grid-template-columns:
              repeat(2,1fr);

            gap: 0 20px;
          }

          .mwsbn-toc-title,
          .mwsbn-toc-cta {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 700px) {
          .mwsbn-hero-inner {
            padding: 70px 16px;
          }

          .mwsbn-hero h1 {
            font-size:
              clamp(43px,13vw,65px);
          }

          .mwsbn-article-section {
            padding: 70px 16px 85px;
          }

          .mwsbn-card-grid,
          .mwsbn-contact-grid,
          .mwsbn-feature-grid,
          .mwsbn-related-grid {
            grid-template-columns: 1fr;
          }

          .mwsbn-related-card:last-child {
            grid-column: auto;
          }

          .mwsbn-related-section {
            padding: 70px 16px;
          }
        }

        @media (max-width: 560px) {
          .mwsbn-essential-card {
            grid-template-columns: 1fr;
          }

          .mwsbn-essential-icon {
            width: 58px;
            height: 58px;
          }
        }

        @media (max-width: 500px) {
          .mwsbn-stage {
            min-height: 450px;

            transform: scale(.9);

            margin: -10px -20px;
          }

          .mwsbn-preview-grid {
            grid-template-columns:
              repeat(2,1fr);
          }

          .mwsbn-toc {
            grid-template-columns: 1fr;
          }

          .mwsbn-toc-title,
          .mwsbn-toc-cta {
            grid-column: auto;
          }

          .mwsbn-section p {
            font-size: 15px;
          }
        }
      `}</style>

      {/* ======================================================
          BREADCRUMBS
      ====================================================== */}

      <div className="mwsbn-breadcrumb-wrap">
        <nav
          className="mwsbn-breadcrumbs"
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
            8 Things Every Small Business Website Needs
          </span>
        </nav>
      </div>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="mwsbn-hero">
        <div className="mwsbn-hero-inner">
          <div className="mwsbn-hero-copy">
            <div className="mwsbn-label">
              <BookOpen />
              Website & Business Education
            </div>

            <h1>
              8 Things Every{" "}
              <span className="mwsbn-blue">
                Small Business Website
              </span>{" "}
              <span className="mwsbn-orange">
                Needs
              </span>
            </h1>

            <p className="mwsbn-description">
              A useful small-business website
              does not need every feature on the
              internet. It needs the right
              information, clear customer paths,
              dependable technology, and a
              foundation that can grow with the
              business.
            </p>

            <div className="mwsbn-meta">
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
            className="mwsbn-stage"
            aria-hidden="true"
          >
            <div className="mwsbn-console">
              <div className="mwsbn-console-top">
                <strong>
                  SMALL BUSINESS // WEBSITE FOUNDATION
                </strong>

                <span className="mwsbn-status">
                  READY
                </span>
              </div>

              <div className="mwsbn-site-card">
                <span>
                  CUSTOMER EXPERIENCE
                </span>

                <div className="mwsbn-site-title">
                  <LayoutTemplate />
                  Build Around What Customers Need
                </div>

                <p>
                  Understand → Trust → Explore →
                  Contact → Grow
                </p>
              </div>

              <div className="mwsbn-preview-grid">
                <div className="mwsbn-preview-card">
                  <Target />
                  <strong>
                    MESSAGE
                  </strong>
                </div>

                <div className="mwsbn-preview-card">
                  <Phone />
                  <strong>
                    CONTACT
                  </strong>
                </div>

                <div className="mwsbn-preview-card">
                  <ShieldCheck />
                  <strong>
                    TRUST
                  </strong>
                </div>

                <div className="mwsbn-preview-card">
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

      <article className="mwsbn-article-section">
        <div className="mwsbn-layout">
          {/* ==================================================
              TOC
          ================================================== */}

          <aside className="mwsbn-toc">
            <div className="mwsbn-toc-title">
              <BookOpen />
              In This Article
            </div>

            <a href="#short-answer">
              Short Answer
            </a>

            <a href="#eight-things">
              The Eight Essentials
            </a>

            <a href="#homepage">
              Homepage Checklist
            </a>

            <a href="#contact">
              Contact Paths
            </a>

            <a href="#trust">
              Trust Information
            </a>

            <a href="#local">
              Local Information
            </a>

            <a href="#mobile-performance">
              Mobile & Performance
            </a>

            <a href="#search">
              Search Foundation
            </a>

            <a href="#optional">
              Optional Features
            </a>

            <a href="#faq">
              FAQs
            </a>

            <div className="mwsbn-toc-cta">
              <Link href="/small-business-websites">
                Small Business Websites →
              </Link>
            </div>
          </aside>

          <div className="mwsbn-content">
            {/* =================================================
                SHORT ANSWER
            ================================================= */}

            <section
              className="mwsbn-answer"
              id="short-answer"
            >
              <div className="mwsbn-answer-label">
                <Zap />
                Short Answer
              </div>

              <h2>
                What Does Every Small-Business
                Website Need?
              </h2>

              <p>
                <strong>
                  A strong small-business website
                  needs a clear business message,
                  useful service information,
                  an easy contact path,
                  mobile-friendly design, real
                  trust information, accurate
                  geographic information where
                  relevant, reliable performance,
                  and a search-ready technical
                  structure.
                </strong>{" "}
                Extra features should be added
                when they solve an actual
                business problem.
              </p>
            </section>

            {/* =================================================
                EIGHT ESSENTIALS
            ================================================= */}

            <section
              className="mwsbn-section"
              id="eight-things"
            >
              <h2>
                The Eight{" "}
                <span className="mwsbn-blue">
                  Essentials
                </span>
              </h2>

              <p>
                A business website should be
                judged by whether it helps the
                customer understand and interact
                with the business—not by how many
                features were packed into it.
              </p>

              <div className="mwsbn-essential-grid">
                {essentials.map(
                  (item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        className="mwsbn-essential-card"
                        key={item.number}
                      >
                        <div className="mwsbn-essential-icon">
                          <Icon />
                        </div>

                        <div>
                          <div className="mwsbn-number">
                            ESSENTIAL {item.number}
                          </div>

                          <h3>
                            {item.title}
                          </h3>

                          <p>
                            {item.text}
                          </p>

                          <div className="mwsbn-question">
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
                HOMEPAGE
            ================================================= */}

            <section
              className="mwsbn-section"
              id="homepage"
            >
              <h2>
                What Should the{" "}
                <span className="mwsbn-orange">
                  Homepage
                </span>{" "}
                Do?
              </h2>

              <p>
                The homepage does not need to
                contain every detail about the
                company.
              </p>

              <p>
                It should give visitors enough
                context to understand the
                business and move toward the
                information they need.
              </p>

              <ul className="mwsbn-checklist">
                {homepageItems.map(
                  (item) => (
                    <li key={item}>
                      <CheckCircle2 />
                      {item}
                    </li>
                  )
                )}
              </ul>

              <div className="mwsbn-callout">
                <div className="mwsbn-callout-icon">
                  <Target />
                </div>

                <h3>
                  Do Not Make Customers Decode
                  the Business
                </h3>

                <p>
                  Creative headlines can support
                  a brand, but the page still
                  needs to communicate what the
                  business actually does.
                </p>
              </div>
            </section>

            {/* =================================================
                CONTACT
            ================================================= */}

            <section
              className="mwsbn-section"
              id="contact"
            >
              <h2>
                Give Customers a{" "}
                <span className="mwsbn-blue">
                  Clear Next Step
                </span>
              </h2>

              <p>
                Different businesses need
                different customer-contact paths.
              </p>

              <p>
                A contractor may want quote
                requests. A professional service
                may prefer consultation requests.
                A repair business may prioritize
                phone calls. Another business may
                need online booking.
              </p>

              <div className="mwsbn-contact-grid">
                {contactPaths.map(
                  (item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        className="mwsbn-contact-card"
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

              <div className="mwsbn-buttons">
                <Link
                  href="/how-booking-forms-quote-forms-and-automation-help-local-businesses"
                  className="mwsbn-btn mwsbn-btn-blue"
                >
                  Learn About Forms & Automation
                  <ArrowRight />
                </Link>
              </div>
            </section>

            {/* =================================================
                TRUST
            ================================================= */}

            <section
              className="mwsbn-section"
              id="trust"
            >
              <h2>
                Trust Should Come From{" "}
                <span className="mwsbn-orange">
                  Real Information
                </span>
              </h2>

              <p>
                A business website should help
                reduce uncertainty.
              </p>

              <p>
                That does not require filling the
                page with unsupported awards,
                fake five-star reviews, generic
                stock people, or exaggerated
                claims.
              </p>

              <div className="mwsbn-card-grid">
                {trustElements.map(
                  (item) => (
                    <div
                      className="mwsbn-info-card"
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

              <div className="mwsbn-callout">
                <div className="mwsbn-callout-icon">
                  <ShieldCheck />
                </div>

                <h3>
                  Verified Beats Impressive-Sounding
                </h3>

                <p>
                  Real work, accurate business
                  information, clear processes,
                  and legitimate customer
                  feedback are stronger long-term
                  trust signals than claims the
                  business cannot prove.
                </p>
              </div>
            </section>

            {/* =================================================
                LOCAL
            ================================================= */}

            <section
              className="mwsbn-section"
              id="local"
            >
              <h2>
                Local Businesses Need{" "}
                <span className="mwsbn-blue">
                  Accurate Geographic Information
                </span>
              </h2>

              <p>
                Customers need to know whether
                the business actually serves
                them.
              </p>

              <p>
                Depending on the company, useful
                information could include a real
                storefront location, legitimate
                service area, towns served,
                county or regional coverage, or
                another accurate description.
              </p>

              <p>
                The website should not invent
                office locations simply to target
                more geographic searches.
              </p>

              <div className="mwsbn-callout">
                <div className="mwsbn-callout-icon">
                  <MapPin />
                </div>

                <h3>
                  Local SEO Starts With Reality
                </h3>

                <p>
                  Business identity, service
                  areas, Google Business Profile
                  information, contact details,
                  and website content should tell
                  a consistent story about where
                  the business genuinely
                  operates.
                </p>
              </div>
            </section>

            {/* =================================================
                MOBILE / PERFORMANCE
            ================================================= */}

            <section
              className="mwsbn-section"
              id="mobile-performance"
            >
              <h2>
                Mobile Design and{" "}
                <span className="mwsbn-orange">
                  Performance
                </span>{" "}
                Are Basic Requirements
              </h2>

              <p>
                Customers should not need a
                desktop computer to understand or
                contact a local business.
              </p>

              <p>
                On smaller screens, check:
              </p>

              <ul className="mwsbn-checklist">
                <li>
                  <MonitorSmartphone />
                  Navigation
                </li>

                <li>
                  <MonitorSmartphone />
                  Text readability
                </li>

                <li>
                  <MonitorSmartphone />
                  Buttons and touch targets
                </li>

                <li>
                  <MonitorSmartphone />
                  Phone links
                </li>

                <li>
                  <MonitorSmartphone />
                  Forms
                </li>

                <li>
                  <MonitorSmartphone />
                  Images
                </li>

                <li>
                  <MonitorSmartphone />
                  Tables or pricing layouts
                </li>

                <li>
                  <MonitorSmartphone />
                  Calls to action
                </li>
              </ul>

              <p>
                Performance should also be
                monitored as images, analytics,
                advertisements, integrations,
                videos, animations, and other
                systems are added.
              </p>

              <div className="mwsbn-buttons">
                <Link
                  href="/why-fast-website-load-speed-helps-leads-seo-and-trust"
                  className="mwsbn-btn mwsbn-btn-blue"
                >
                  Learn About Website Performance
                  <ArrowRight />
                </Link>
              </div>
            </section>

            {/* =================================================
                SEARCH
            ================================================= */}

            <section
              className="mwsbn-section"
              id="search"
            >
              <h2>
                Build the{" "}
                <span className="mwsbn-blue">
                  Search Foundation
                </span>{" "}
                Into the Website
              </h2>

              <p>
                Search optimization is easier to
                manage when basic technical
                structure is considered during
                the build rather than treated as
                a separate decoration after
                launch.
              </p>

              <ul className="mwsbn-checklist">
                {searchItems.map(
                  (item) => (
                    <li key={item}>
                      <SearchCheck />
                      {item}
                    </li>
                  )
                )}
              </ul>

              <div className="mwsbn-callout">
                <div className="mwsbn-callout-icon">
                  <SearchCheck />
                </div>

                <h3>
                  Search-Ready Does Not Mean
                  Guaranteed Rankings
                </h3>

                <p>
                  Strong technical structure and
                  useful content make the website
                  better prepared for discovery,
                  but search engines still decide
                  crawling, indexing, and ranking.
                </p>
              </div>

              <div className="mwsbn-buttons">
                <Link
                  href="/how-matthew-web-builds-seo-ready-small-business-websites"
                  className="mwsbn-btn mwsbn-btn-blue"
                >
                  SEO-Ready Website Guide
                  <ArrowRight />
                </Link>

                <Link
                  href="/seo-and-indexing"
                  className="mwsbn-btn mwsbn-btn-dark"
                >
                  SEO & Indexing Services
                </Link>
              </div>
            </section>

            {/* =================================================
                OPTIONAL FEATURES
            ================================================= */}

            <section
              className="mwsbn-section"
              id="optional"
            >
              <h2>
                What Does a Small-Business Website{" "}
                <span className="mwsbn-orange">
                  Not Automatically Need?
                </span>
              </h2>

              <p>
                Not every useful feature belongs
                on every website.
              </p>

              <p>
                The question should be whether a
                feature solves a real customer or
                business problem.
              </p>

              <div className="mwsbn-feature-grid">
                {optionalFeatures.map(
                  (item) => (
                    <div
                      className="mwsbn-feature-card"
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

              <div className="mwsbn-callout">
                <div className="mwsbn-callout-icon">
                  <Globe2 />
                </div>

                <h3>
                  Start With the Business Need
                </h3>

                <p>
                  A five-page website can be the
                  correct solution for one
                  business. Another may genuinely
                  need a database-backed system
                  with CRM tools, automation,
                  payments, customer accounts,
                  and integrations. Complexity
                  should be earned by the
                  requirement.
                </p>
              </div>
            </section>

            {/* =================================================
                FAQ
            ================================================= */}

            <section
              className="mwsbn-section"
              id="faq"
            >
              <h2>
                Small Business Website{" "}
                <span className="mwsbn-blue">
                  FAQs
                </span>
              </h2>

              <div className="mwsbn-faq-grid">
                {faqs.map(
                  (item) => (
                    <div
                      className="mwsbn-faq-card"
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

            <section className="mwsbn-article-cta">
              <h2>
                Build What Your Business{" "}
                <span className="mwsbn-orange">
                  Actually Needs.
                </span>
              </h2>

              <p>
                Matthew Web builds small-business
                websites around real services,
                customer information, mobile
                usability, lead capture,
                search-ready structure,
                deployment, performance, and
                practical business functionality.
                Additional software and
                automation can be added when the
                business genuinely needs the next
                stage.
              </p>

              <div className="mwsbn-buttons">
                <Link
                  href="/contact-us"
                  className="mwsbn-btn mwsbn-btn-orange"
                >
                  Start a Website Project
                  <ArrowRight />
                </Link>

                <Link
                  href="/small-business-websites"
                  className="mwsbn-btn mwsbn-btn-blue"
                >
                  Small Business Websites
                </Link>

                <Link
                  href="/pricing"
                  className="mwsbn-btn mwsbn-btn-dark"
                >
                  View Pricing
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* ======================================================
          RELATED
      ====================================================== */}

      <section className="mwsbn-related-section">
        <div className="mwsbn-related-inner">
          <div className="mwsbn-related-title">
            <span>
              <Sparkles />
              Continue Reading
            </span>

            <h2>
              Related{" "}
              <span className="mwsbn-blue">
                Articles
              </span>
            </h2>
          </div>

          <div className="mwsbn-related-grid">
            {relatedArticles.map(
              (article) => (
                <Link
                  href={article.href}
                  className="mwsbn-related-card"
                  key={article.href}
                >
                  <h3>
                    {article.title}
                  </h3>

                  <p>
                    {article.text}
                  </p>

                  <div className="mwsbn-related-link">
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
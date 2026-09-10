import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  FileText,
  Gauge,
  Mail,
  Megaphone,
  MessageSquare,
  MousePointerClick,
  SearchCheck,
  Sparkles,
  Target,
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
    "8 Marketing Mistakes Small Businesses Make | Matthew Web",

  description:
    "Learn eight common small-business marketing mistakes, including unclear targeting, generic outreach, weak websites, inconsistent follow-up, poor tracking, disconnected content, premature paid advertising, and failing to test what actually works.",

  alternates: {
    canonical:
      "https://matthew-web.com/8-marketing-mistakes-small-businesses-make",
  },

  openGraph: {
    title:
      "8 Marketing Mistakes Small Businesses Make | Matthew Web",

    description:
      "A practical small-business marketing guide covering targeting, websites, outreach, content, follow-up, tracking, testing, and when paid advertising makes financial sense.",

    url:
      "https://matthew-web.com/8-marketing-mistakes-small-businesses-make",

    siteName:
      "Matthew Web",

    type:
      "article",
  },
};

/* ============================================================
   EIGHT MISTAKES
============================================================ */

const mistakes = [
  {
    number: "01",
    icon: Users,

    title:
      "Trying to Market to Everyone",

    problem:
      "When the audience is defined as simply “anyone who might buy,” messaging usually becomes too broad to speak clearly to the people most likely to need the service.",

    better:
      "Define practical customer groups based on the problem being solved, business type, service need, geography where relevant, and buying situation.",
  },

  {
    number: "02",
    icon: Mail,

    title:
      "Sending Generic Mass Outreach",

    problem:
      "A message that could have been sent to any business gives the recipient little reason to believe the sender actually looked at their situation.",

    better:
      "Personalize outreach around observable facts such as no website, broken pages, difficult mobile use, missing contact information, outdated content, or another legitimate issue.",
  },

  {
    number: "03",
    icon: MousePointerClick,

    title:
      "Sending Traffic to a Weak Website",

    problem:
      "Marketing can create attention, but the website still has to explain the business, build confidence, answer important questions, and provide a clear next step.",

    better:
      "Strengthen the landing experience before spending heavily to send more people into it.",
  },

  {
    number: "04",
    icon: Workflow,

    title:
      "Following Up Randomly",

    problem:
      "Leads can disappear when follow-up depends entirely on somebody remembering who needs another call or message.",

    better:
      "Track the last contact, next action, follow-up date, status, notes, and outcome in a simple CRM or organized lead system.",
  },

  {
    number: "05",
    icon: BarChart3,

    title:
      "Not Tracking Where Leads Come From",

    problem:
      "If every inquiry is treated the same, the business cannot easily tell whether leads came from search, social media, referrals, outreach, content, local listings, or paid campaigns.",

    better:
      "Record lead source and connect marketing activity to actual inquiries, qualified leads, customers, and revenue where reasonably possible.",
  },

  {
    number: "06",
    icon: FileText,

    title:
      "Creating Disconnected Content",

    problem:
      "Publishing random posts without a clear connection to the company, customer questions, services, or projects can consume time without building a useful body of information.",

    better:
      "Build repeatable content pillars and reuse real company work across articles, social posts, screenshots, short explanations, project updates, and educational material.",
  },

  {
    number: "07",
    icon: CircleDollarSign,

    title:
      "Spending on Ads Before Knowing the Numbers",

    problem:
      "Paid advertising adds cost immediately. If the business does not know whether the landing page converts or what a qualified customer is worth, it becomes difficult to judge whether the campaign is economically useful.",

    better:
      "Establish basic conversion and customer-value measurements before increasing paid-ad spending.",
  },

  {
    number: "08",
    icon: Gauge,

    title:
      "Never Testing the Offer or Message",

    problem:
      "Businesses can keep using the same headline, pricing explanation, call to action, outreach message, or landing page even when there is no evidence that it is the strongest version.",

    better:
      "Test meaningful changes one at a time and compare real outcomes instead of changing everything based on guesses.",
  },
];

/* ============================================================
   MARKETING FOUNDATION
============================================================ */

const foundation = [
  {
    icon: Target,

    title:
      "Customer Group",

    text:
      "Know who the message is meant for and what problem makes the offer relevant to that group.",
  },

  {
    icon: Megaphone,

    title:
      "Clear Offer",

    text:
      "Explain what the business provides, what problem it solves, and what the customer should do next.",
  },

  {
    icon: SearchCheck,

    title:
      "Discoverable Website",

    text:
      "Use useful public pages, search-ready structure, local information where appropriate, and content that customers can actually find and understand.",
  },

  {
    icon: MessageSquare,

    title:
      "Follow-Up System",

    text:
      "Keep leads organized so interested prospects do not disappear simply because the business forgot the next action.",
  },

  {
    icon: BarChart3,

    title:
      "Measurement",

    text:
      "Track enough information to understand which channels are producing attention, inquiries, qualified leads, customers, and revenue.",
  },

  {
    icon: Gauge,

    title:
      "Continuous Improvement",

    text:
      "Use evidence to improve messaging, pages, offers, follow-up, and channel selection over time.",
  },
];

/* ============================================================
   CUSTOMER GROUPS
============================================================ */

const customerGroups = [
  {
    group:
      "Businesses With No Website",

    message:
      "Focus on creating a credible public business presence, useful customer information, lead capture, and search foundations.",
  },

  {
    group:
      "Businesses With Outdated Websites",

    message:
      "Focus on the specific problems that are actually visible: old information, broken layouts, poor mobile use, weak conversion paths, or outdated functionality.",
  },

  {
    group:
      "Businesses With Broken or Incomplete Sites",

    message:
      "Lead with the real operational issue rather than a generic design pitch.",
  },

  {
    group:
      "Growing Businesses",

    message:
      "Discuss how websites can expand into forms, dashboards, databases, CRM systems, integrations, and automation when those needs are real.",
  },

  {
    group:
      "Local Maine Small Businesses",

    message:
      "Use accurate local context, legitimate service-area information, useful website education, and personalized outreach based on the business itself.",
  },
];

/* ============================================================
   CONTENT SYSTEM
============================================================ */

const contentPillars = [
  "Website & Business Education",
  "Matthew Web Services",
  "Software Development",
  "Game Development",
  "Computing & R&D",
  "Education",
  "Matthew Web Company Progress / News",
];

/* ============================================================
   TRACKING
============================================================ */

const trackingItems = [
  "Lead source",
  "Landing page",
  "Campaign or outreach source where relevant",
  "Service interest",
  "Date the lead entered the system",
  "Lead status",
  "Last contact",
  "Next follow-up",
  "Quote status",
  "Customer conversion",
  "Project value where appropriate",
  "Recurring revenue where applicable",
];

/* ============================================================
   ORGANIC VS PAID
============================================================ */

const paidReadiness = [
  {
    question:
      "Do we know which customer group we are targeting?",

    reason:
      "Paid traffic becomes wasteful when the audience and offer are still unclear.",
  },

  {
    question:
      "Does the landing page clearly explain the offer?",

    reason:
      "More visitors do not solve a confusing sales page.",
  },

  {
    question:
      "Are conversions being measured?",

    reason:
      "The business needs to know whether traffic becomes inquiries or another meaningful action.",
  },

  {
    question:
      "Can we track qualified leads and customers?",

    reason:
      "A cheap click is not automatically a valuable result.",
  },

  {
    question:
      "Do we understand average customer value and margin?",

    reason:
      "Advertising cost must eventually be compared with the value created by customers.",
  },

  {
    question:
      "Do we have a follow-up process?",

    reason:
      "Paying for leads while failing to follow up consistently wastes the acquisition effort.",
  },
];

/* ============================================================
   TESTING
============================================================ */

const tests = [
  {
    title:
      "Headline Test",

    text:
      "Compare different ways of describing the same real offer and customer problem.",
  },

  {
    title:
      "Call-to-Action Test",

    text:
      "Compare actions such as discussing a project, requesting a quote, or exploring a service when each is appropriate.",
  },

  {
    title:
      "Pricing Message Test",

    text:
      "Test how pricing or starting-price information is explained without changing what the customer is actually being charged.",
  },

  {
    title:
      "Outreach Message Test",

    text:
      "Compare different personalized approaches while keeping the audience and offer consistent enough to learn from the results.",
  },

  {
    title:
      "Service Page Test",

    text:
      "Improve structure, explanations, FAQs, trust information, or next steps and compare customer behavior over time.",
  },

  {
    title:
      "Content Topic Test",

    text:
      "Track which real customer questions and company topics generate useful search traffic, engagement, or business inquiries.",
  },
];

/* ============================================================
   FAQ
============================================================ */

const faqs = [
  {
    q:
      "What is the biggest marketing mistake a small business can make?",

    a:
      "There is no single mistake that applies to every business, but marketing without a clear customer, offer, tracking system, or follow-up process makes it difficult to understand what is working and what should be improved.",
  },

  {
    q:
      "Should a small business use social media?",

    a:
      "Social media can be useful for awareness, education, updates, community interaction, and directing people toward deeper website content. The right platforms depend on where the business's actual customers spend attention.",
  },

  {
    q:
      "Should a new business start with paid advertising?",

    a:
      "Not necessarily. Organic content, direct outreach, referrals, customer reviews, local search, and website improvements can provide valuable information before significant paid spending. Paid advertising becomes easier to evaluate once conversion and customer-value measurements are available.",
  },

  {
    q:
      "How should a small business track marketing?",

    a:
      "Start with practical information such as lead source, service interest, landing page or campaign where relevant, follow-up status, quote status, customer conversion, and revenue. The tracking system can become more detailed as the business grows.",
  },

  {
    q:
      "Is personalized outreach better than sending the same message to everyone?",

    a:
      "Personalized outreach can be more relevant because it connects the offer to an observable business situation. The message should remain truthful and should not invent problems, financial losses, or facts about the prospect.",
  },

  {
    q:
      "Does Matthew Web provide marketing services?",

    a:
      "Matthew Web's current website and digital work can support marketing through website design, search-ready structure, lead capture, analytics, indexing, content architecture, and custom business systems. Specific project scope should be confirmed before work begins.",
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
      "See how the website can become the central hub connecting search, marketing, customer information, and lead generation.",
  },

  {
    title:
      "8 Things Every Small Business Website Needs",

    href:
      "/8-things-every-small-business-website-needs",

    text:
      "Learn what the website itself should contain before sending more marketing traffic toward it.",
  },

  {
    title:
      "How CRM Dashboards Help Small Businesses Stop Losing Leads",

    href:
      "/how-crm-dashboards-help-small-businesses-stop-losing-leads",

    text:
      "See how a lead-management system can support follow-up and make marketing results easier to track.",
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
    "8 Marketing Mistakes Small Businesses Make",

  description:
    "Eight common small-business marketing mistakes involving targeting, websites, outreach, follow-up, lead-source tracking, content, paid advertising, and testing.",

  mainEntityOfPage: {
    "@type":
      "WebPage",

    "@id":
      "https://matthew-web.com/8-marketing-mistakes-small-businesses-make",
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
        "8 Marketing Mistakes Small Businesses Make",

      item:
        "https://matthew-web.com/8-marketing-mistakes-small-businesses-make",
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

export default function MarketingMistakesArticlePage() {
  return (
    <main className="mwmkt-page">
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
          --mwmkt-black: #020304;
          --mwmkt-muted: #aebbc5;
          --mwmkt-blue: #08b9f4;
          --mwmkt-blue-light: #38d7ff;
          --mwmkt-orange: #ff7900;
          --mwmkt-orange-light: #ffab31;
          --mwmkt-green: #35e07e;
          --mwmkt-border: rgba(255,255,255,.09);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--mwmkt-black);
        }

        .mwmkt-page {
          min-height: 100vh;
          overflow: hidden;
          color: #fff;
          background: var(--mwmkt-black);
        }

        .mwmkt-blue {
          color: var(--mwmkt-blue-light);
        }

        .mwmkt-orange {
          color: var(--mwmkt-orange);
        }

        /* =====================================================
           BREADCRUMBS
        ===================================================== */

        .mwmkt-breadcrumb-wrap {
          border-bottom: 1px solid rgba(255,255,255,.06);
          background: #04080b;
        }

        .mwmkt-breadcrumbs {
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

        .mwmkt-breadcrumbs a {
          color: #8799a3;
          text-decoration: none;
        }

        .mwmkt-breadcrumbs a:hover {
          color: var(--mwmkt-blue-light);
        }

        .mwmkt-breadcrumbs svg {
          width: 12px;
          height: 12px;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwmkt-hero {
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

        .mwmkt-hero::before {
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

        .mwmkt-hero-inner {
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

        .mwmkt-label {
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

        .mwmkt-label svg {
          width: 16px;
          height: 16px;
        }

        .mwmkt-hero h1 {
          max-width: 980px;
          margin: 0;
          font-size: clamp(48px,5.6vw,84px);
          line-height: .99;
          letter-spacing: -.06em;
        }

        .mwmkt-description {
          max-width: 810px;
          margin: 25px 0 0;
          color: #b8c6cf;
          font-size: clamp(16px,1.4vw,20px);
          line-height: 1.75;
        }

        .mwmkt-meta {
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

        .mwmkt-stage {
          min-height: 470px;
          display: grid;
          place-items: center;
        }

        .mwmkt-console {
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
          box-shadow: 0 30px 70px rgba(0,0,0,.45);
        }

        .mwmkt-console-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .mwmkt-console-top strong {
          color: #81929d;
          font-size: 9px;
          letter-spacing: .12em;
        }

        .mwmkt-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #8da0aa;
          font-size: 8px;
          font-weight: 900;
        }

        .mwmkt-status::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--mwmkt-green);
          box-shadow: 0 0 7px rgba(53,224,126,.7);
        }

        .mwmkt-system-card {
          padding: 19px;
          border: 1px solid rgba(255,121,0,.17);
          border-radius: 11px;
          background: #071015;
        }

        .mwmkt-system-card span {
          color: #657984;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: .09em;
          text-transform: uppercase;
        }

        .mwmkt-system-title {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 10px;
          color: var(--mwmkt-orange-light);
          font-size: 14px;
          font-weight: 900;
        }

        .mwmkt-system-title svg {
          width: 22px;
          height: 22px;
        }

        .mwmkt-system-card p {
          margin: 10px 0 0;
          color: #788b95;
          font-size: 9px;
          line-height: 1.6;
        }

        .mwmkt-flow-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 9px;
          margin-top: 10px;
        }

        .mwmkt-flow-card {
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

        .mwmkt-flow-card:nth-child(even) {
          border-color: rgba(255,121,0,.14);
        }

        .mwmkt-flow-card svg {
          width: 22px;
          height: 22px;
          color: var(--mwmkt-blue-light);
        }

        .mwmkt-flow-card:nth-child(even) svg {
          color: var(--mwmkt-orange-light);
        }

        .mwmkt-flow-card strong {
          font-size: 8px;
          letter-spacing: .05em;
        }

        /* =====================================================
           ARTICLE
        ===================================================== */

        .mwmkt-article-section {
          padding:
            95px
            clamp(20px,5vw,80px)
            110px;
          background: #020304;
        }

        .mwmkt-layout {
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

        .mwmkt-toc {
          position: sticky;
          top: 30px;
          padding: 23px;
          border: 1px solid var(--mwmkt-border);
          border-radius: 14px;
          background:
            linear-gradient(
              145deg,
              #09131a,
              #04080b
            );
        }

        .mwmkt-toc-title {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 15px;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .mwmkt-toc-title svg {
          width: 16px;
          height: 16px;
          color: var(--mwmkt-blue-light);
        }

        .mwmkt-toc a {
          display: block;
          padding: 8px 0;
          color: #8799a3;
          text-decoration: none;
          font-size: 12px;
          line-height: 1.45;
        }

        .mwmkt-toc a:hover {
          color: var(--mwmkt-blue-light);
        }

        .mwmkt-toc-cta {
          margin-top: 18px;
          padding-top: 17px;
          border-top: 1px solid rgba(255,255,255,.07);
        }

        .mwmkt-toc-cta a {
          color: var(--mwmkt-orange-light);
          font-weight: 850;
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .mwmkt-content {
          min-width: 0;
        }

        .mwmkt-section {
          margin-bottom: 62px;
          scroll-margin-top: 35px;
        }

        .mwmkt-section h2 {
          margin: 0 0 20px;
          font-size: clamp(30px,3.5vw,48px);
          line-height: 1.08;
          letter-spacing: -.045em;
        }

        .mwmkt-section h3 {
          margin: 32px 0 12px;
          color: var(--mwmkt-blue-light);
          font-size: 21px;
          line-height: 1.3;
        }

        .mwmkt-section p {
          margin: 0 0 19px;
          color: #b6c3ca;
          font-size: 16px;
          line-height: 1.85;
        }

        .mwmkt-section strong {
          color: #fff;
        }

        /* =====================================================
           ANSWER
        ===================================================== */

        .mwmkt-answer {
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

        .mwmkt-answer-label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          color: var(--mwmkt-blue-light);
          font-size: 9px;
          font-weight: 950;
          letter-spacing: .11em;
          text-transform: uppercase;
        }

        .mwmkt-answer-label svg {
          width: 17px;
          height: 17px;
        }

        .mwmkt-answer h2 {
          margin: 0 0 12px;
          font-size: clamp(24px,3vw,36px);
          line-height: 1.1;
        }

        .mwmkt-answer p {
          margin: 0;
          color: #b7c5cc;
          font-size: 15px;
          line-height: 1.75;
        }

        /* =====================================================
           MISTAKES
        ===================================================== */

        .mwmkt-mistake-grid {
          display: grid;
          gap: 14px;
          margin-top: 28px;
        }

        .mwmkt-mistake-card {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 22px;
          padding: 25px;
          border: 1px solid rgba(8,185,244,.14);
          border-radius: 14px;
          background: #071015;
        }

        .mwmkt-mistake-card:nth-child(even) {
          border-color: rgba(255,121,0,.14);
        }

        .mwmkt-mistake-icon {
          width: 70px;
          height: 70px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(8,185,244,.22);
          border-radius: 16px;
          color: var(--mwmkt-blue-light);
          background: rgba(8,185,244,.04);
        }

        .mwmkt-mistake-card:nth-child(even)
          .mwmkt-mistake-icon {
          border-color: rgba(255,121,0,.22);
          color: var(--mwmkt-orange-light);
          background: rgba(255,121,0,.035);
        }

        .mwmkt-mistake-icon svg {
          width: 30px;
          height: 30px;
        }

        .mwmkt-number {
          margin-bottom: 7px;
          color: var(--mwmkt-blue-light);
          font-size: 9px;
          font-weight: 950;
          letter-spacing: .1em;
        }

        .mwmkt-mistake-card:nth-child(even)
          .mwmkt-number {
          color: var(--mwmkt-orange-light);
        }

        .mwmkt-mistake-card h3 {
          margin: 0 0 10px;
          color: #fff;
          font-size: 20px;
        }

        .mwmkt-mistake-card p {
          margin: 0 0 14px;
          color: var(--mwmkt-muted);
          font-size: 13px;
          line-height: 1.72;
        }

        .mwmkt-better {
          padding: 13px 14px;
          border-left: 2px solid var(--mwmkt-blue);
          color: #c6d4db;
          background: rgba(8,185,244,.035);
          font-size: 12px;
          line-height: 1.65;
        }

        .mwmkt-mistake-card:nth-child(even)
          .mwmkt-better {
          border-left-color: var(--mwmkt-orange);
          background: rgba(255,121,0,.03);
        }

        /* =====================================================
           FOUNDATION
        ===================================================== */

        .mwmkt-foundation-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 14px;
          margin-top: 27px;
        }

        .mwmkt-foundation-card {
          min-height: 245px;
          padding: 23px;
          border: 1px solid rgba(8,185,244,.14);
          border-radius: 14px;
          background: rgba(8,185,244,.018);
        }

        .mwmkt-foundation-card:nth-child(even) {
          border-color: rgba(255,121,0,.14);
          background: rgba(255,121,0,.016);
        }

        .mwmkt-foundation-card svg {
          width: 30px;
          height: 30px;
          margin-bottom: 16px;
          color: var(--mwmkt-blue-light);
        }

        .mwmkt-foundation-card:nth-child(even) svg {
          color: var(--mwmkt-orange-light);
        }

        .mwmkt-foundation-card h3 {
          margin: 0 0 10px;
          color: #fff;
          font-size: 18px;
        }

        .mwmkt-foundation-card p {
          margin: 0;
          color: var(--mwmkt-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           TABLE
        ===================================================== */

        .mwmkt-table-wrap {
          margin-top: 28px;
          overflow-x: auto;
          border: 1px solid var(--mwmkt-border);
          border-radius: 15px;
          background: #071015;
        }

        .mwmkt-table {
          width: 100%;
          min-width: 760px;
          border-collapse: collapse;
        }

        .mwmkt-table th,
        .mwmkt-table td {
          padding: 18px;
          border-bottom: 1px solid rgba(255,255,255,.07);
          vertical-align: top;
          text-align: left;
        }

        .mwmkt-table th {
          color: #fff;
          background: #0a151b;
          font-size: 10px;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .mwmkt-table th:nth-child(2) {
          color: var(--mwmkt-orange-light);
        }

        .mwmkt-table td {
          color: #aebbc5;
          font-size: 12px;
          line-height: 1.65;
        }

        .mwmkt-table td:first-child {
          color: #fff;
          font-weight: 800;
        }

        .mwmkt-table tr:last-child td {
          border-bottom: 0;
        }

        /* =====================================================
           CHECKLIST
        ===================================================== */

        .mwmkt-checklist {
          display: grid;
          gap: 10px;
          margin: 25px 0;
          padding: 0;
          list-style: none;
        }

        .mwmkt-checklist li {
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

        .mwmkt-checklist svg {
          width: 17px;
          height: 17px;
          flex: 0 0 auto;
          margin-top: 1px;
          color: var(--mwmkt-blue-light);
        }

        /* =====================================================
           READINESS / TESTS
        ===================================================== */

        .mwmkt-readiness-grid,
        .mwmkt-test-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 12px;
          margin-top: 27px;
        }

        .mwmkt-readiness-card,
        .mwmkt-test-card {
          padding: 23px;
          border: 1px solid var(--mwmkt-border);
          border-radius: 13px;
          background: #071015;
        }

        .mwmkt-readiness-card h3,
        .mwmkt-test-card h3 {
          margin: 0 0 9px;
          color: var(--mwmkt-blue-light);
          font-size: 18px;
        }

        .mwmkt-readiness-card:nth-child(even) h3,
        .mwmkt-test-card:nth-child(even) h3 {
          color: var(--mwmkt-orange-light);
        }

        .mwmkt-readiness-card p,
        .mwmkt-test-card p {
          margin: 0;
          color: var(--mwmkt-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           CALLOUT
        ===================================================== */

        .mwmkt-callout {
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

        .mwmkt-callout-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          margin-bottom: 15px;
          border: 1px solid rgba(255,121,0,.25);
          border-radius: 12px;
          color: var(--mwmkt-orange-light);
          background: rgba(255,121,0,.045);
        }

        .mwmkt-callout-icon svg {
          width: 24px;
          height: 24px;
        }

        .mwmkt-callout h3 {
          margin: 0 0 10px;
          color: #fff;
          font-size: 22px;
        }

        .mwmkt-callout p {
          margin: 0;
          color: var(--mwmkt-muted);
          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           FAQ
        ===================================================== */

        .mwmkt-faq-grid {
          display: grid;
          gap: 12px;
          margin-top: 27px;
        }

        .mwmkt-faq-card {
          padding: 23px;
          border: 1px solid var(--mwmkt-border);
          border-radius: 13px;
          background: #071015;
        }

        .mwmkt-faq-card h3 {
          margin: 0 0 9px;
          color: var(--mwmkt-blue-light);
          font-size: 17px;
        }

        .mwmkt-faq-card:nth-child(even) h3 {
          color: var(--mwmkt-orange-light);
        }

        .mwmkt-faq-card p {
          margin: 0;
          color: var(--mwmkt-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           BUTTONS / CTA
        ===================================================== */

        .mwmkt-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 25px;
        }

        .mwmkt-btn {
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

        .mwmkt-btn:hover {
          transform: translateY(-2px);
        }

        .mwmkt-btn-blue {
          border: 1px solid rgba(56,215,255,.5);
          background:
            linear-gradient(
              180deg,
              #0ab6ed,
              #0789b6
            );
        }

        .mwmkt-btn-orange {
          border: 1px solid rgba(255,176,49,.55);
          background:
            linear-gradient(
              180deg,
              #ff9519,
              #f16600
            );
        }

        .mwmkt-btn-dark {
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.03);
        }

        .mwmkt-btn svg {
          width: 17px;
          height: 17px;
        }

        .mwmkt-article-cta {
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

        .mwmkt-article-cta h2 {
          max-width: 820px;
          margin: 0;
          font-size: clamp(31px,4vw,49px);
          line-height: 1.05;
          letter-spacing: -.045em;
        }

        .mwmkt-article-cta p {
          max-width: 790px;
          margin: 17px 0 0;
          color: var(--mwmkt-muted);
          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           RELATED
        ===================================================== */

        .mwmkt-related-section {
          padding: 90px clamp(20px,5vw,80px);
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwmkt-related-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        .mwmkt-related-title {
          margin-bottom: 32px;
        }

        .mwmkt-related-title span {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 9px;
          color: var(--mwmkt-orange-light);
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .mwmkt-related-title svg {
          width: 16px;
          height: 16px;
        }

        .mwmkt-related-title h2 {
          margin: 0;
          font-size: clamp(31px,4vw,49px);
          letter-spacing: -.045em;
        }

        .mwmkt-related-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 14px;
        }

        .mwmkt-related-card {
          min-height: 245px;
          display: flex;
          flex-direction: column;
          padding: 24px;
          border: 1px solid var(--mwmkt-border);
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

        .mwmkt-related-card:hover {
          transform: translateY(-4px);
          border-color: rgba(8,185,244,.3);
        }

        .mwmkt-related-card:nth-child(even):hover {
          border-color: rgba(255,121,0,.3);
        }

        .mwmkt-related-card h3 {
          margin: 0;
          font-size: 18px;
          line-height: 1.3;
        }

        .mwmkt-related-card p {
          margin: 13px 0 0;
          color: var(--mwmkt-muted);
          font-size: 12px;
          line-height: 1.65;
        }

        .mwmkt-related-link {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: auto;
          padding-top: 21px;
          color: var(--mwmkt-blue-light);
          font-size: 11px;
          font-weight: 850;
        }

        .mwmkt-related-card:nth-child(even)
          .mwmkt-related-link {
          color: var(--mwmkt-orange-light);
        }

        .mwmkt-related-link svg {
          width: 15px;
          height: 15px;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1050px) {
          .mwmkt-hero-inner {
            grid-template-columns: 1fr;
          }

          .mwmkt-hero-copy {
            text-align: center;
          }

          .mwmkt-label {
            margin-left: auto;
            margin-right: auto;
          }

          .mwmkt-description {
            margin-left: auto;
            margin-right: auto;
          }

          .mwmkt-meta {
            justify-content: center;
          }

          .mwmkt-related-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .mwmkt-related-card:last-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 850px) {
          .mwmkt-layout {
            grid-template-columns: 1fr;
          }

          .mwmkt-toc {
            position: static;
            display: grid;
            grid-template-columns: repeat(2,1fr);
            gap: 0 20px;
          }

          .mwmkt-toc-title,
          .mwmkt-toc-cta {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 700px) {
          .mwmkt-hero-inner {
            padding: 70px 16px;
          }

          .mwmkt-hero h1 {
            font-size: clamp(43px,13vw,65px);
          }

          .mwmkt-article-section {
            padding: 70px 16px 85px;
          }

          .mwmkt-foundation-grid,
          .mwmkt-readiness-grid,
          .mwmkt-test-grid,
          .mwmkt-related-grid {
            grid-template-columns: 1fr;
          }

          .mwmkt-related-card:last-child {
            grid-column: auto;
          }

          .mwmkt-related-section {
            padding: 70px 16px;
          }
        }

        @media (max-width: 560px) {
          .mwmkt-mistake-card {
            grid-template-columns: 1fr;
          }

          .mwmkt-mistake-icon {
            width: 58px;
            height: 58px;
          }
        }

        @media (max-width: 500px) {
          .mwmkt-stage {
            min-height: 450px;
            transform: scale(.9);
            margin: -10px -20px;
          }

          .mwmkt-flow-grid {
            grid-template-columns: 1fr;
          }

          .mwmkt-toc {
            grid-template-columns: 1fr;
          }

          .mwmkt-toc-title,
          .mwmkt-toc-cta {
            grid-column: auto;
          }

          .mwmkt-section p {
            font-size: 15px;
          }
        }
      `}</style>

      {/* ======================================================
          BREADCRUMBS
      ====================================================== */}

      <div className="mwmkt-breadcrumb-wrap">
        <nav
          className="mwmkt-breadcrumbs"
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
            8 Marketing Mistakes Small Businesses Make
          </span>
        </nav>
      </div>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="mwmkt-hero">
        <div className="mwmkt-hero-inner">
          <div className="mwmkt-hero-copy">
            <div className="mwmkt-label">
              <BookOpen />
              Business & Marketing Education
            </div>

            <h1>
              8{" "}
              <span className="mwmkt-blue">
                Marketing Mistakes
              </span>{" "}
              Small Businesses{" "}
              <span className="mwmkt-orange">
                Make
              </span>
            </h1>

            <p className="mwmkt-description">
              Small-business marketing does not
              need to mean spending money
              everywhere. A stronger system
              starts with the right customer,
              useful messaging, a website that
              can convert attention into action,
              consistent follow-up, and enough
              tracking to learn what is actually
              working.
            </p>

            <div className="mwmkt-meta">
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
            className="mwmkt-stage"
            aria-hidden="true"
          >
            <div className="mwmkt-console">
              <div className="mwmkt-console-top">
                <strong>
                  MARKETING // SYSTEM
                </strong>

                <span className="mwmkt-status">
                  MEASURE
                </span>
              </div>

              <div className="mwmkt-system-card">
                <span>
                  CUSTOMER ACQUISITION
                </span>

                <div className="mwmkt-system-title">
                  <Target />
                  Build a Repeatable Path
                </div>

                <p>
                  Audience → Message → Website →
                  Lead → Follow-Up → Customer →
                  Measure
                </p>
              </div>

              <div className="mwmkt-flow-grid">
                <div className="mwmkt-flow-card">
                  <Users />
                  <strong>
                    TARGET
                  </strong>
                </div>

                <div className="mwmkt-flow-card">
                  <MessageSquare />
                  <strong>
                    CONNECT
                  </strong>
                </div>

                <div className="mwmkt-flow-card">
                  <BarChart3 />
                  <strong>
                    MEASURE
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

      <article className="mwmkt-article-section">
        <div className="mwmkt-layout">
          {/* ==================================================
              TOC
          ================================================== */}

          <aside className="mwmkt-toc">
            <div className="mwmkt-toc-title">
              <BookOpen />
              In This Article
            </div>

            <a href="#short-answer">
              Short Answer
            </a>

            <a href="#eight-mistakes">
              Eight Marketing Mistakes
            </a>

            <a href="#foundation">
              Marketing Foundation
            </a>

            <a href="#customers">
              Customer Groups
            </a>

            <a href="#outreach">
              Personalized Outreach
            </a>

            <a href="#content">
              Content Strategy
            </a>

            <a href="#tracking">
              Lead Tracking
            </a>

            <a href="#paid-ads">
              When to Use Paid Ads
            </a>

            <a href="#testing">
              Marketing Tests
            </a>

            <a href="#faq">
              FAQs
            </a>

            <div className="mwmkt-toc-cta">
              <Link href="/small-business-websites">
                Small Business Websites →
              </Link>
            </div>
          </aside>

          <div className="mwmkt-content">
            {/* =================================================
                SHORT ANSWER
            ================================================= */}

            <section
              className="mwmkt-answer"
              id="short-answer"
            >
              <div className="mwmkt-answer-label">
                <Zap />
                Short Answer
              </div>

              <h2>
                Why Does Small-Business Marketing Fail?
              </h2>

              <p>
                <strong>
                  Marketing becomes difficult to
                  improve when the business does
                  not know who it is targeting,
                  what message it is testing,
                  where leads came from, whether
                  follow-up happened, or which
                  activities eventually produced
                  customers.
                </strong>{" "}
                The goal is not maximum marketing
                activity. The goal is a more
                repeatable customer-acquisition
                system.
              </p>
            </section>

            {/* =================================================
                EIGHT MISTAKES
            ================================================= */}

            <section
              className="mwmkt-section"
              id="eight-mistakes"
            >
              <h2>
                Eight Mistakes That Make Marketing{" "}
                <span className="mwmkt-orange">
                  Harder to Measure
                </span>
              </h2>

              <p>
                None of these automatically means
                a business is doing everything
                wrong.
              </p>

              <p>
                They are warning signs that the
                marketing system may be producing
                activity without producing enough
                useful information.
              </p>

              <div className="mwmkt-mistake-grid">
                {mistakes.map(
                  (item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        className="mwmkt-mistake-card"
                        key={item.number}
                      >
                        <div className="mwmkt-mistake-icon">
                          <Icon />
                        </div>

                        <div>
                          <div className="mwmkt-number">
                            MISTAKE {item.number}
                          </div>

                          <h3>
                            {item.title}
                          </h3>

                          <p>
                            {item.problem}
                          </p>

                          <div className="mwmkt-better">
                            <strong>
                              Better approach:
                            </strong>{" "}
                            {item.better}
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </section>

            {/* =================================================
                FOUNDATION
            ================================================= */}

            <section
              className="mwmkt-section"
              id="foundation"
            >
              <h2>
                Build the{" "}
                <span className="mwmkt-blue">
                  Marketing Foundation
                </span>{" "}
                First
              </h2>

              <p>
                The business does not need every
                marketing channel at once.
              </p>

              <p>
                It needs a foundation that lets
                different channels feed into the
                same customer-acquisition system.
              </p>

              <div className="mwmkt-foundation-grid">
                {foundation.map(
                  (item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        className="mwmkt-foundation-card"
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

              <div className="mwmkt-callout">
                <div className="mwmkt-callout-icon">
                  <Workflow />
                </div>

                <h3>
                  Marketing Is a System, Not a
                  Pile of Posts
                </h3>

                <p>
                  Search, social media, referrals,
                  direct outreach, website
                  content, local listings, email,
                  reviews, and paid advertising
                  become more useful when they
                  connect into a common lead and
                  follow-up process.
                </p>
              </div>
            </section>

            {/* =================================================
                CUSTOMER GROUPS
            ================================================= */}

            <section
              className="mwmkt-section"
              id="customers"
            >
              <h2>
                Start With{" "}
                <span className="mwmkt-orange">
                  Customer Groups
                </span>
              </h2>

              <p>
                Matthew Web&apos;s website
                marketing does not need to target
                every business with the same
                message.
              </p>

              <p>
                Different situations create
                different reasons to act.
              </p>

              <div className="mwmkt-table-wrap">
                <table className="mwmkt-table">
                  <thead>
                    <tr>
                      <th>
                        Customer Group
                      </th>

                      <th>
                        Useful Message Direction
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {customerGroups.map(
                      (item) => (
                        <tr key={item.group}>
                          <td>
                            {item.group}
                          </td>

                          <td>
                            {item.message}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>

              <p>
                This makes the marketing more
                specific without inventing
                problems that have not actually
                been observed.
              </p>
            </section>

            {/* =================================================
                OUTREACH
            ================================================= */}

            <section
              className="mwmkt-section"
              id="outreach"
            >
              <h2>
                Personalized Outreach Beats{" "}
                <span className="mwmkt-blue">
                  Pretending Every Prospect Is the Same
                </span>
              </h2>

              <p>
                Outreach becomes more credible
                when the message shows that the
                business was actually reviewed.
              </p>

              <p>
                A real observation could include:
              </p>

              <ul className="mwmkt-checklist">
                <li>
                  <CheckCircle2 />
                  No website found
                </li>

                <li>
                  <CheckCircle2 />
                  Website appears incomplete
                </li>

                <li>
                  <CheckCircle2 />
                  Important link does not work
                </li>

                <li>
                  <CheckCircle2 />
                  Contact path is difficult to find
                </li>

                <li>
                  <CheckCircle2 />
                  Mobile layout has visible problems
                </li>

                <li>
                  <CheckCircle2 />
                  Service information appears outdated
                </li>

                <li>
                  <CheckCircle2 />
                  Important business information is missing
                </li>
              </ul>

              <div className="mwmkt-callout">
                <div className="mwmkt-callout-icon">
                  <Mail />
                </div>

                <h3>
                  Do Not Invent the Problem
                </h3>

                <p>
                  Personalized outreach should be
                  based on observable information.
                  Do not claim a website is
                  losing a specific amount of
                  money, costing a company
                  customers, or creating a problem
                  that has not actually been
                  verified.
                </p>
              </div>
            </section>

            {/* =================================================
                CONTENT
            ================================================= */}

            <section
              className="mwmkt-section"
              id="content"
            >
              <h2>
                Build Content Around{" "}
                <span className="mwmkt-orange">
                  Real Company Activity
                </span>
              </h2>

              <p>
                Matthew Web now has seven primary
                content pillars:
              </p>

              <ul className="mwmkt-checklist">
                {contentPillars.map(
                  (item) => (
                    <li key={item}>
                      <CheckCircle2 />
                      {item}
                    </li>
                  )
                )}
              </ul>

              <p>
                One real development can often
                support several useful pieces of
                content.
              </p>

              <p>
                For example, a real CPU/FPGA test
                could become:
              </p>

              <p>
                <strong>
                  Technical article → short social
                  explanation → diagram or
                  screenshot → project update →
                  educational post → future
                  research reference.
                </strong>
              </p>

              <p>
                A website project can similarly
                become an article about the
                problem solved, a technical lesson,
                a portfolio entry, and a social
                update—provided customer
                information and results are only
                used when they can legitimately
                be shared.
              </p>
            </section>

            {/* =================================================
                TRACKING
            ================================================= */}

            <section
              className="mwmkt-section"
              id="tracking"
            >
              <h2>
                Track the Path From{" "}
                <span className="mwmkt-blue">
                  Lead to Customer
                </span>
              </h2>

              <p>
                Marketing becomes much easier to
                improve when the business knows
                what happened after the click,
                call, message, referral, or form.
              </p>

              <p>
                Useful lead-level information can
                eventually include:
              </p>

              <ul className="mwmkt-checklist">
                {trackingItems.map(
                  (item) => (
                    <li key={item}>
                      <BarChart3 />
                      {item}
                    </li>
                  )
                )}
              </ul>

              <div className="mwmkt-callout">
                <div className="mwmkt-callout-icon">
                  <BarChart3 />
                </div>

                <h3>
                  Traffic → Lead → Qualified Lead
                  → Customer → Revenue
                </h3>

                <p>
                  A marketing channel should not
                  be judged only by how many
                  people visited. The stronger
                  question is whether it helped
                  create meaningful business
                  opportunities at a sustainable
                  cost.
                </p>
              </div>

              <div className="mwmkt-buttons">
                <Link
                  href="/how-crm-dashboards-help-small-businesses-stop-losing-leads"
                  className="mwmkt-btn mwmkt-btn-blue"
                >
                  Learn About CRM Tracking
                  <ArrowRight />
                </Link>
              </div>
            </section>

            {/* =================================================
                PAID ADS
            ================================================= */}

            <section
              className="mwmkt-section"
              id="paid-ads"
            >
              <h2>
                When Should a Small Business Use{" "}
                <span className="mwmkt-orange">
                  Paid Advertising?
                </span>
              </h2>

              <p>
                Paid advertising can be useful,
                but it should eventually be
                judged financially.
              </p>

              <p>
                Before increasing ad spending,
                answer several basic questions:
              </p>

              <div className="mwmkt-readiness-grid">
                {paidReadiness.map(
                  (item) => (
                    <div
                      className="mwmkt-readiness-card"
                      key={item.question}
                    >
                      <h3>
                        {item.question}
                      </h3>

                      <p>
                        {item.reason}
                      </p>
                    </div>
                  )
                )}
              </div>

              <h3>
                Numbers Worth Understanding
              </h3>

              <ul className="mwmkt-checklist">
                <li>
                  <CheckCircle2 />
                  Cost per click when applicable
                </li>

                <li>
                  <CheckCircle2 />
                  Landing-page conversion rate
                </li>

                <li>
                  <CheckCircle2 />
                  Cost per lead
                </li>

                <li>
                  <CheckCircle2 />
                  Lead-to-qualified-lead rate
                </li>

                <li>
                  <CheckCircle2 />
                  Lead-to-customer rate
                </li>

                <li>
                  <CheckCircle2 />
                  Average project or customer value
                </li>

                <li>
                  <CheckCircle2 />
                  Gross margin
                </li>

                <li>
                  <CheckCircle2 />
                  Customer acquisition cost
                </li>

                <li>
                  <CheckCircle2 />
                  Payback period where relevant
                </li>
              </ul>

              <div className="mwmkt-callout">
                <div className="mwmkt-callout-icon">
                  <CircleDollarSign />
                </div>

                <h3>
                  Organic Before Major Paid Spend
                </h3>

                <p>
                  Direct outreach, useful
                  educational content, SEO, local
                  visibility, referrals, real
                  customer reviews, social media,
                  and website improvements can
                  help establish the offer and
                  customer path before substantial
                  paid advertising is introduced.
                </p>
              </div>
            </section>

            {/* =================================================
                TESTING
            ================================================= */}

            <section
              className="mwmkt-section"
              id="testing"
            >
              <h2>
                Test Marketing Without{" "}
                <span className="mwmkt-blue">
                  Changing Everything at Once
                </span>
              </h2>

              <p>
                A useful test changes something
                meaningful while preserving
                enough of the surrounding system
                to understand the result.
              </p>

              <div className="mwmkt-test-grid">
                {tests.map(
                  (item) => (
                    <div
                      className="mwmkt-test-card"
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

              <div className="mwmkt-callout">
                <div className="mwmkt-callout-icon">
                  <Gauge />
                </div>

                <h3>
                  Keep the Winners. Learn From
                  the Losers.
                </h3>

                <p>
                  The goal of testing is not to
                  prove every idea works. Failed
                  offers and messages can still
                  provide useful information when
                  the test is measured and
                  documented.
                </p>
              </div>
            </section>

            {/* =================================================
                FAQ
            ================================================= */}

            <section
              className="mwmkt-section"
              id="faq"
            >
              <h2>
                Small Business Marketing{" "}
                <span className="mwmkt-orange">
                  FAQs
                </span>
              </h2>

              <div className="mwmkt-faq-grid">
                {faqs.map(
                  (item) => (
                    <div
                      className="mwmkt-faq-card"
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

            <section className="mwmkt-article-cta">
              <h2>
                Marketing Works Better When the{" "}
                <span className="mwmkt-orange">
                  Website and Lead System Work Together.
                </span>
              </h2>

              <p>
                Matthew Web can help build the
                website, search structure, lead
                forms, analytics connections,
                CRM-style systems, and custom
                workflows that give small
                businesses a stronger foundation
                for customer acquisition and
                measurement.
              </p>

              <div className="mwmkt-buttons">
                <Link
                  href="/contact-us"
                  className="mwmkt-btn mwmkt-btn-orange"
                >
                  Discuss Your Business
                  <ArrowRight />
                </Link>

                <Link
                  href="/small-business-websites"
                  className="mwmkt-btn mwmkt-btn-blue"
                >
                  Small Business Websites
                </Link>

                <Link
                  href="/custom-software"
                  className="mwmkt-btn mwmkt-btn-dark"
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

      <section className="mwmkt-related-section">
        <div className="mwmkt-related-inner">
          <div className="mwmkt-related-title">
            <span>
              <Sparkles />
              Continue Reading
            </span>

            <h2>
              Related{" "}
              <span className="mwmkt-blue">
                Articles
              </span>
            </h2>
          </div>

          <div className="mwmkt-related-grid">
            {relatedArticles.map(
              (article) => (
                <Link
                  href={article.href}
                  className="mwmkt-related-card"
                  key={article.href}
                >
                  <h3>
                    {article.title}
                  </h3>

                  <p>
                    {article.text}
                  </p>

                  <div className="mwmkt-related-link">
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
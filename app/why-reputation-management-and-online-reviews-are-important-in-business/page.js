import Link from "next/link";

import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Eye,
  HeartHandshake,
  MessageCircleReply,
  MessageSquare,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  UserCheck,
  UsersRound,
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
    "Why Reputation Management & Online Reviews Matter | Matthew Web",

  description:
    "Learn why online reputation matters for small businesses, including customer reviews, accurate business information, public responses, trust, feedback patterns, websites, local visibility, and customer experience.",

  alternates: {
    canonical:
      "https://matthew-web.com/why-reputation-management-and-online-reviews-are-important-in-business",
  },

  openGraph: {
    title:
      "Why Reputation Management & Online Reviews Matter | Matthew Web",

    description:
      "A practical guide to business reputation, online reviews, customer trust, accurate information, feedback monitoring, public responses, websites, and local presence.",

    url:
      "https://matthew-web.com/why-reputation-management-and-online-reviews-are-important-in-business",

    siteName:
      "Matthew Web",

    type:
      "article",
  },
};

/* ============================================================
   REPUTATION COMPONENTS
============================================================ */

const reputationComponents = [
  {
    icon:
      HeartHandshake,

    title:
      "Actual Customer Experience",

    text:
      "Reputation begins with what customers really experience: communication, reliability, expectations, service quality, follow-up, problem handling, and whether the business does what it says it will do.",
  },

  {
    icon:
      Star,

    title:
      "Customer Reviews",

    text:
      "Legitimate reviews give potential customers another source of information about real experiences with the business. They can also provide useful feedback to the company itself.",
  },

  {
    icon:
      MessageCircleReply,

    title:
      "Business Responses",

    text:
      "How the business responds to praise, criticism, misunderstandings, and complaints can become part of its public reputation.",
  },

  {
    icon:
      SearchCheck,

    title:
      "Search & Local Presence",

    text:
      "Business profiles, search results, website pages, directories, social profiles, and other public references can shape what people see when they research the company.",
  },

  {
    icon:
      ShieldCheck,

    title:
      "Accurate Business Information",

    text:
      "Incorrect hours, phone numbers, service areas, websites, addresses, pricing statements, or other outdated information can create confusion even when the underlying business is operating correctly.",
  },

  {
    icon:
      Eye,

    title:
      "Public Content",

    text:
      "The company's own website, articles, project examples, policies, social updates, business profiles, and other public information also contribute to how people understand the business.",
  },
];

/* ============================================================
   WHY REVIEWS MATTER
============================================================ */

const reviewReasons = [
  {
    number:
      "01",

    title:
      "They Give Customers More Context",

    text:
      "A business can describe itself on its own website, while reviews provide another perspective based on individual customer experiences.",
  },

  {
    number:
      "02",

    title:
      "They Can Reduce Uncertainty",

    text:
      "Verified feedback can help potential customers understand how previous customers experienced communication, service, responsiveness, or other parts of the business.",
  },

  {
    number:
      "03",

    title:
      "They Reveal Customer Questions",

    text:
      "Reviews may show what customers care about, what they misunderstand, what they value, and what information the business should explain more clearly.",
  },

  {
    number:
      "04",

    title:
      "They Can Reveal Operational Problems",

    text:
      "Repeated complaints about scheduling, communication, billing explanations, delays, or another issue may indicate that the underlying business process deserves attention.",
  },

  {
    number:
      "05",

    title:
      "They Create Public Conversations",

    text:
      "The review is only one part of what people see. A professional business response can provide useful context about how the company handles customer concerns.",
  },

  {
    number:
      "06",

    title:
      "They Become Part of the Broader Online Presence",

    text:
      "Reviews may appear alongside business profiles, maps, search results, social pages, websites, and other public information used during customer research.",
  },
];

/* ============================================================
   REPUTATION SYSTEM
============================================================ */

const reputationSystem = [
  {
    title:
      "Deliver",

    text:
      "Provide the actual service or customer experience.",
  },

  {
    title:
      "Listen",

    text:
      "Pay attention to legitimate feedback, questions, complaints, and praise.",
  },

  {
    title:
      "Verify",

    text:
      "Check facts, records, and business information before reacting.",
  },

  {
    title:
      "Respond",

    text:
      "Answer publicly when useful and move private details into the appropriate private channel.",
  },

  {
    title:
      "Improve",

    text:
      "Fix recurring process problems and strengthen what customers consistently value.",
  },

  {
    title:
      "Measure",

    text:
      "Track meaningful patterns over time instead of reacting only to individual ratings.",
  },
];

/* ============================================================
   WHAT TO MONITOR
============================================================ */

const monitorItems = [
  "New legitimate customer reviews",
  "Repeated complaints or praise",
  "Incorrect business information",
  "Outdated phone numbers or contact methods",
  "Incorrect service-area information",
  "Old website links",
  "Outdated hours where applicable",
  "Customer questions that repeatedly appear",
  "Public responses that still need follow-up",
  "Important business-profile changes",
  "Website information that no longer matches the business",
  "Patterns that may indicate an operations problem",
];

/* ============================================================
   TRUST SOURCES
============================================================ */

const trustSources = [
  {
    title:
      "Business Website",

    text:
      "The website can explain services, pricing where appropriate, project process, contact information, company identity, policies, project examples, and educational resources.",
  },

  {
    title:
      "Verified Reviews",

    text:
      "Real customer feedback can add another layer of evidence when the business has a legitimate basis to display or reference it.",
  },

  {
    title:
      "Project Examples",

    text:
      "Real work can show what the business has actually built or delivered without relying only on marketing language.",
  },

  {
    title:
      "Accurate Profiles",

    text:
      "Business listings and social profiles should match the company's current identity, contact details, service information, and operating model.",
  },

  {
    title:
      "Professional Responses",

    text:
      "How a company handles questions and criticism publicly can provide information about its communication style.",
  },

  {
    title:
      "Consistent Information",

    text:
      "The website, business profiles, contact information, social accounts, and other public sources should not contradict each other unnecessarily.",
  },
];

/* ============================================================
   NEGATIVE REVIEW PROCESS
============================================================ */

const negativeReviewProcess = [
  {
    number:
      "01",

    title:
      "Do Not React Immediately",

    text:
      "Read the full review and separate the emotional reaction from the business question that actually needs to be addressed.",
  },

  {
    number:
      "02",

    title:
      "Check the Facts",

    text:
      "Review legitimate customer records, communications, project notes, or other relevant information before making factual statements.",
  },

  {
    number:
      "03",

    title:
      "Identify the Real Issue",

    text:
      "Determine whether the review involves a service failure, misunderstanding, expectation problem, inaccurate fact, communication issue, or something else.",
  },

  {
    number:
      "04",

    title:
      "Respond Professionally",

    text:
      "Acknowledge the concern, clarify material information when appropriate, and avoid insults, sarcasm, threats, or unnecessary argument.",
  },

  {
    number:
      "05",

    title:
      "Move Private Details Offline",

    text:
      "Account information, payment history, private messages, personal details, and complicated disputes usually do not belong in a public review response.",
  },

  {
    number:
      "06",

    title:
      "Improve the Underlying Process",

    text:
      "If the complaint reveals a legitimate weakness, fixing that weakness can be more valuable than focusing only on the public rating.",
  },
];

/* ============================================================
   DO NOT DO
============================================================ */

const avoidItems = [
  {
    icon:
      Star,

    title:
      "Do Not Fabricate Reviews",

    text:
      "Never invent customers, quotations, experiences, star ratings, or testimonials simply to make the business appear more established.",
  },

  {
    icon:
      UsersRound,

    title:
      "Do Not Create Fake Customer Accounts",

    text:
      "A review should represent an actual customer experience rather than a business owner, employee, friend, or invented identity pretending to be a customer.",
  },

  {
    icon:
      AlertTriangle,

    title:
      "Do Not Attack Critics",

    text:
      "A hostile public response can become a second reputation problem even when the business believes the original review was unfair.",
  },

  {
    icon:
      ShieldCheck,

    title:
      "Do Not Expose Private Information",

    text:
      "Do not publish private customer records, payment information, phone numbers, email addresses, private messages, or other sensitive information to defend the company publicly.",
  },

  {
    icon:
      Target,

    title:
      "Do Not Obsess Over One Number",

    text:
      "An average rating can provide context, but one number does not explain every customer experience, every review, or every operational issue.",
  },

  {
    icon:
      MessageSquare,

    title:
      "Do Not Ignore Legitimate Patterns",

    text:
      "Repeated complaints about the same issue deserve investigation even when each individual complaint seems small.",
  },
];

/* ============================================================
   FEEDBACK PATTERNS
============================================================ */

const feedbackPatterns = [
  {
    pattern:
      "Customers repeatedly praise communication",

    action:
      "Preserve the process that is creating that experience and consider explaining it more clearly in the sales process.",
  },

  {
    pattern:
      "Customers repeatedly ask the same question",

    action:
      "Improve the website, FAQ, sales material, quote process, or onboarding information so the answer is easier to find.",
  },

  {
    pattern:
      "Several customers misunderstand pricing",

    action:
      "Review how scope, starting prices, estimates, exclusions, and payment expectations are communicated.",
  },

  {
    pattern:
      "Customers mention slow follow-up",

    action:
      "Review lead tracking, notifications, reminders, response responsibilities, and CRM workflow.",
  },

  {
    pattern:
      "Customers praise one specific service",

    action:
      "Consider strengthening that service page, project examples, educational content, or marketing message with real evidence.",
  },

  {
    pattern:
      "Multiple customers report the same service problem",

    action:
      "Investigate the underlying operation rather than treating every complaint as an isolated reputation issue.",
  },
];

/* ============================================================
   WEBSITE ROLE
============================================================ */

const websiteRoles = [
  "Explain the business clearly",
  "Publish accurate service information",
  "Provide correct contact paths",
  "Show real project examples",
  "Explain the customer process",
  "Display verified reviews when legitimately available",
  "Provide useful educational content",
  "Clarify service areas where relevant",
  "Keep policies and business information current",
  "Connect customers to the appropriate next action",
];

/* ============================================================
   REVIEW REQUEST PROCESS
============================================================ */

const reviewRequestProcess = [
  {
    title:
      "Wait for a Real Customer Event",

    text:
      "Completed work, successful service delivery, resolved support, or another genuine customer interaction can create a natural opportunity for feedback.",
  },

  {
    title:
      "Ask for Honest Feedback",

    text:
      "Request the customer's real opinion instead of instructing them to provide a specific rating or prewritten statement.",
  },

  {
    title:
      "Make the Legitimate Review Path Easy",

    text:
      "When appropriate, provide the customer with a direct path to the business's real review profile.",
  },

  {
    title:
      "Record Feedback Internally",

    text:
      "Useful customer comments can help improve services, messaging, website content, follow-up, and other business processes.",
  },
];

/* ============================================================
   FAQ
============================================================ */

const faqs = [
  {
    q:
      "What is online reputation management?",

    a:
      "Online reputation management generally refers to monitoring and improving how a business is represented across public digital channels. That can include customer experience, reviews, review responses, business profiles, websites, public information, and recurring feedback patterns.",
  },

  {
    q:
      "Why are online reviews important for businesses?",

    a:
      "Reviews can give potential customers additional context about real customer experiences and can give businesses useful feedback about communication, service, expectations, and recurring problems.",
  },

  {
    q:
      "Should businesses respond to negative reviews?",

    a:
      "A professional response can be useful when it addresses a legitimate concern, corrects important information carefully, or provides an appropriate next step. Private customer information should remain private.",
  },

  {
    q:
      "Should businesses ask customers for reviews?",

    a:
      "Businesses can ask legitimate customers for honest feedback when a real customer interaction creates an appropriate opportunity. They should not fabricate reviews or pressure customers to provide a specific rating or statement.",
  },

  {
    q:
      "Do reviews replace the need for a good website?",

    a:
      "No. Reviews are one part of an online presence. The website can provide controlled business information, services, project examples, contact paths, educational content, forms, search structure, and other resources reviews cannot replace.",
  },

  {
    q:
      "Does Matthew Web offer reputation-management services?",

    a:
      "Matthew Web currently provides website, SEO and indexing, custom software, lead systems, analytics connections, and related digital services. This article is business education and should not be interpreted as a dedicated reputation-management service offering unless such work is separately discussed and scoped.",
  },
];

/* ============================================================
   RELATED ARTICLES
============================================================ */

const relatedArticles = [
  {
    title:
      "How to Respond to Online Reviews: Good and Bad",

    href:
      "/how-to-respond-to-online-reviews-good-and-bad",

    text:
      "Learn how to respond professionally to positive reviews, negative reviews, misunderstandings, complaints, and suspicious feedback.",
  },

  {
    title:
      "8 Marketing Mistakes Small Businesses Make",

    href:
      "/8-marketing-mistakes-small-businesses-make",

    text:
      "See how customer reviews, trust, lead tracking, content, outreach, and measurement fit into the wider marketing system.",
  },

  {
    title:
      "8 Things Every Small Business Website Needs",

    href:
      "/8-things-every-small-business-website-needs",

    text:
      "Learn how real reviews, project proof, accurate information, contact paths, and other trust signals fit into a strong business website.",
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
    "Why Reputation Management and Online Reviews Are Important in Business",

  description:
    "A practical guide to online business reputation, legitimate customer reviews, public responses, accurate information, customer trust, feedback patterns, websites, and local visibility.",

  mainEntityOfPage: {
    "@type":
      "WebPage",

    "@id":
      "https://matthew-web.com/why-reputation-management-and-online-reviews-are-important-in-business",
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
        "Why Reputation Management and Online Reviews Are Important in Business",

      item:
        "https://matthew-web.com/why-reputation-management-and-online-reviews-are-important-in-business",
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

export default function ReputationManagementArticlePage() {
  return (
    <main className="mwrep-page">
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
          --mwrep-black: #020304;
          --mwrep-muted: #aebbc5;
          --mwrep-blue: #08b9f4;
          --mwrep-blue-light: #38d7ff;
          --mwrep-orange: #ff7900;
          --mwrep-orange-light: #ffab31;
          --mwrep-green: #35e07e;
          --mwrep-border: rgba(255,255,255,.09);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--mwrep-black);
        }

        .mwrep-page {
          min-height: 100vh;
          overflow: hidden;
          color: #fff;
          background: var(--mwrep-black);
        }

        .mwrep-blue {
          color: var(--mwrep-blue-light);
        }

        .mwrep-orange {
          color: var(--mwrep-orange);
        }

        /* =====================================================
           BREADCRUMBS
        ===================================================== */

        .mwrep-breadcrumb-wrap {
          border-bottom: 1px solid rgba(255,255,255,.06);
          background: #04080b;
        }

        .mwrep-breadcrumbs {
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

        .mwrep-breadcrumbs a {
          color: #8799a3;
          text-decoration: none;
        }

        .mwrep-breadcrumbs a:hover {
          color: var(--mwrep-blue-light);
        }

        .mwrep-breadcrumbs svg {
          width: 12px;
          height: 12px;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwrep-hero {
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

        .mwrep-hero::before {
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

          background-size:
            76px 76px;

          mask-image:
            radial-gradient(
              ellipse at center,
              black,
              transparent 80%
            );
        }

        .mwrep-hero-inner {
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

        .mwrep-label {
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

        .mwrep-label svg {
          width: 16px;
          height: 16px;
        }

        .mwrep-hero h1 {
          max-width: 1000px;

          margin: 0;

          font-size:
            clamp(46px,5.3vw,82px);

          line-height: .99;

          letter-spacing: -.06em;
        }

        .mwrep-description {
          max-width: 820px;

          margin: 25px 0 0;

          color: #b8c6cf;

          font-size:
            clamp(16px,1.4vw,20px);

          line-height: 1.75;
        }

        .mwrep-meta {
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

        .mwrep-stage {
          min-height: 470px;

          display: grid;
          place-items: center;
        }

        .mwrep-console {
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

        .mwrep-console-top {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-bottom: 18px;
        }

        .mwrep-console-top strong {
          color: #81929d;

          font-size: 9px;

          letter-spacing: .12em;
        }

        .mwrep-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;

          color: #8da0aa;

          font-size: 8px;
          font-weight: 900;
        }

        .mwrep-status::before {
          content: "";

          width: 6px;
          height: 6px;

          border-radius: 50%;

          background:
            var(--mwrep-green);

          box-shadow:
            0 0 7px rgba(53,224,126,.7);
        }

        .mwrep-main-card {
          padding: 19px;

          border:
            1px solid rgba(255,121,0,.17);

          border-radius: 11px;

          background: #071015;
        }

        .mwrep-main-card span {
          color: #657984;

          font-size: 7px;
          font-weight: 900;

          letter-spacing: .09em;

          text-transform: uppercase;
        }

        .mwrep-main-title {
          display: flex;
          align-items: center;

          gap: 9px;

          margin-top: 10px;

          color:
            var(--mwrep-orange-light);

          font-size: 15px;
          font-weight: 900;
        }

        .mwrep-main-title svg {
          width: 22px;
          height: 22px;
        }

        .mwrep-main-card p {
          margin: 10px 0 0;

          color: #788b95;

          font-size: 9px;

          line-height: 1.6;
        }

        .mwrep-signal-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 9px;

          margin-top: 10px;
        }

        .mwrep-signal-card {
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

        .mwrep-signal-card:nth-child(even) {
          border-color:
            rgba(255,121,0,.14);
        }

        .mwrep-signal-card svg {
          width: 22px;
          height: 22px;

          color:
            var(--mwrep-blue-light);
        }

        .mwrep-signal-card:nth-child(even) svg {
          color:
            var(--mwrep-orange-light);
        }

        .mwrep-signal-card strong {
          font-size: 8px;

          letter-spacing: .05em;
        }

        /* =====================================================
           ARTICLE
        ===================================================== */

        .mwrep-article-section {
          padding:
            95px
            clamp(20px,5vw,80px)
            110px;

          background: #020304;
        }

        .mwrep-layout {
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

        .mwrep-toc {
          position: sticky;
          top: 30px;

          padding: 23px;

          border:
            1px solid var(--mwrep-border);

          border-radius: 14px;

          background:
            linear-gradient(
              145deg,
              #09131a,
              #04080b
            );
        }

        .mwrep-toc-title {
          display: flex;
          align-items: center;

          gap: 8px;

          margin-bottom: 15px;

          font-size: 10px;
          font-weight: 900;

          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .mwrep-toc-title svg {
          width: 16px;
          height: 16px;

          color:
            var(--mwrep-blue-light);
        }

        .mwrep-toc a {
          display: block;

          padding: 8px 0;

          color: #8799a3;

          text-decoration: none;

          font-size: 12px;
          line-height: 1.45;
        }

        .mwrep-toc a:hover {
          color:
            var(--mwrep-blue-light);
        }

        .mwrep-toc-cta {
          margin-top: 18px;

          padding-top: 17px;

          border-top:
            1px solid rgba(255,255,255,.07);
        }

        .mwrep-toc-cta a {
          color:
            var(--mwrep-orange-light);

          font-weight: 850;
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .mwrep-content {
          min-width: 0;
        }

        .mwrep-section {
          margin-bottom: 62px;

          scroll-margin-top: 35px;
        }

        .mwrep-section h2 {
          margin: 0 0 20px;

          font-size:
            clamp(30px,3.5vw,48px);

          line-height: 1.08;

          letter-spacing: -.045em;
        }

        .mwrep-section h3 {
          margin: 32px 0 12px;

          color:
            var(--mwrep-blue-light);

          font-size: 21px;

          line-height: 1.3;
        }

        .mwrep-section p {
          margin: 0 0 19px;

          color: #b6c3ca;

          font-size: 16px;

          line-height: 1.85;
        }

        .mwrep-section strong {
          color: #fff;
        }

        /* =====================================================
           SHORT ANSWER
        ===================================================== */

        .mwrep-answer {
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

        .mwrep-answer-label {
          display: flex;
          align-items: center;

          gap: 8px;

          margin-bottom: 12px;

          color:
            var(--mwrep-blue-light);

          font-size: 9px;
          font-weight: 950;

          letter-spacing: .11em;

          text-transform: uppercase;
        }

        .mwrep-answer-label svg {
          width: 17px;
          height: 17px;
        }

        .mwrep-answer h2 {
          margin: 0 0 12px;

          font-size:
            clamp(24px,3vw,36px);

          line-height: 1.1;
        }

        .mwrep-answer p {
          margin: 0;

          color: #b7c5cc;

          font-size: 15px;

          line-height: 1.75;
        }

        /* =====================================================
           COMPONENT CARDS
        ===================================================== */

        .mwrep-component-grid {
          display: grid;

          grid-template-columns:
            repeat(2,1fr);

          gap: 14px;

          margin-top: 27px;
        }

        .mwrep-component-card {
          min-height: 245px;

          padding: 23px;

          border:
            1px solid rgba(8,185,244,.14);

          border-radius: 14px;

          background:
            rgba(8,185,244,.018);
        }

        .mwrep-component-card:nth-child(even) {
          border-color:
            rgba(255,121,0,.14);

          background:
            rgba(255,121,0,.016);
        }

        .mwrep-component-card svg {
          width: 30px;
          height: 30px;

          margin-bottom: 16px;

          color:
            var(--mwrep-blue-light);
        }

        .mwrep-component-card:nth-child(even) svg {
          color:
            var(--mwrep-orange-light);
        }

        .mwrep-component-card h3 {
          margin: 0 0 10px;

          color: #fff;

          font-size: 18px;
        }

        .mwrep-component-card p {
          margin: 0;

          color:
            var(--mwrep-muted);

          font-size: 13px;

          line-height: 1.7;
        }

        /* =====================================================
           REVIEW REASONS
        ===================================================== */

        .mwrep-reason-grid {
          display: grid;

          gap: 14px;

          margin-top: 28px;
        }

        .mwrep-reason-card {
          display: grid;

          grid-template-columns:
            75px 1fr;

          gap: 21px;

          padding: 24px;

          border:
            1px solid rgba(8,185,244,.14);

          border-radius: 14px;

          background: #071015;
        }

        .mwrep-reason-card:nth-child(even) {
          border-color:
            rgba(255,121,0,.14);
        }

        .mwrep-reason-number {
          width: 64px;
          height: 64px;

          display: grid;
          place-items: center;

          border:
            1px solid rgba(8,185,244,.22);

          border-radius: 15px;

          color:
            var(--mwrep-blue-light);

          background:
            rgba(8,185,244,.04);

          font-size: 11px;
          font-weight: 950;

          letter-spacing: .08em;
        }

        .mwrep-reason-card:nth-child(even)
          .mwrep-reason-number {
          border-color:
            rgba(255,121,0,.22);

          color:
            var(--mwrep-orange-light);

          background:
            rgba(255,121,0,.035);
        }

        .mwrep-reason-card h3 {
          margin: 0 0 9px;

          color: #fff;

          font-size: 19px;
        }

        .mwrep-reason-card p {
          margin: 0;

          color:
            var(--mwrep-muted);

          font-size: 13px;

          line-height: 1.7;
        }

        /* =====================================================
           SYSTEM / PROCESS
        ===================================================== */

        .mwrep-system-grid,
        .mwrep-process-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 12px;

          margin-top: 28px;
        }

        .mwrep-system-card,
        .mwrep-process-card {
          min-height: 210px;

          padding: 22px;

          border:
            1px solid rgba(8,185,244,.14);

          border-radius: 13px;

          background: #071015;
        }

        .mwrep-system-card:nth-child(even),
        .mwrep-process-card:nth-child(even) {
          border-color:
            rgba(255,121,0,.14);
        }

        .mwrep-system-card h3 {
          margin: 0 0 9px;

          color:
            var(--mwrep-blue-light);

          font-size: 18px;
        }

        .mwrep-system-card:nth-child(even) h3 {
          color:
            var(--mwrep-orange-light);
        }

        .mwrep-system-card p,
        .mwrep-process-card p {
          margin: 0;

          color:
            var(--mwrep-muted);

          font-size: 12px;

          line-height: 1.67;
        }

        .mwrep-process-number {
          margin-bottom: 14px;

          color:
            var(--mwrep-blue-light);

          font-size: 9px;
          font-weight: 950;

          letter-spacing: .1em;
        }

        .mwrep-process-card:nth-child(even)
          .mwrep-process-number {
          color:
            var(--mwrep-orange-light);
        }

        .mwrep-process-card h3 {
          margin: 0 0 9px;

          color: #fff;

          font-size: 18px;
        }

        /* =====================================================
           CHECKLIST
        ===================================================== */

        .mwrep-checklist {
          display: grid;

          gap: 10px;

          margin: 25px 0;

          padding: 0;

          list-style: none;
        }

        .mwrep-checklist li {
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

        .mwrep-checklist svg {
          width: 17px;
          height: 17px;

          flex: 0 0 auto;

          margin-top: 1px;

          color:
            var(--mwrep-blue-light);
        }

        /* =====================================================
           TRUST CARDS
        ===================================================== */

        .mwrep-trust-grid {
          display: grid;

          grid-template-columns:
            repeat(2,1fr);

          gap: 12px;

          margin-top: 27px;
        }

        .mwrep-trust-card {
          padding: 23px;

          border:
            1px solid var(--mwrep-border);

          border-radius: 13px;

          background: #071015;
        }

        .mwrep-trust-card h3 {
          margin: 0 0 9px;

          color:
            var(--mwrep-blue-light);

          font-size: 18px;
        }

        .mwrep-trust-card:nth-child(even) h3 {
          color:
            var(--mwrep-orange-light);
        }

        .mwrep-trust-card p {
          margin: 0;

          color:
            var(--mwrep-muted);

          font-size: 13px;

          line-height: 1.7;
        }

        /* =====================================================
           AVOID
        ===================================================== */

        .mwrep-avoid-grid {
          display: grid;

          grid-template-columns:
            repeat(2,1fr);

          gap: 12px;

          margin-top: 27px;
        }

        .mwrep-avoid-card {
          min-height: 240px;

          padding: 23px;

          border:
            1px solid rgba(255,121,0,.14);

          border-radius: 13px;

          background:
            rgba(255,121,0,.014);
        }

        .mwrep-avoid-card:nth-child(even) {
          border-color:
            rgba(8,185,244,.14);

          background:
            rgba(8,185,244,.014);
        }

        .mwrep-avoid-card svg {
          width: 28px;
          height: 28px;

          margin-bottom: 15px;

          color:
            var(--mwrep-orange-light);
        }

        .mwrep-avoid-card:nth-child(even) svg {
          color:
            var(--mwrep-blue-light);
        }

        .mwrep-avoid-card h3 {
          margin: 0 0 9px;

          color: #fff;

          font-size: 18px;
        }

        .mwrep-avoid-card p {
          margin: 0;

          color:
            var(--mwrep-muted);

          font-size: 13px;

          line-height: 1.7;
        }

        /* =====================================================
           TABLE
        ===================================================== */

        .mwrep-table-wrap {
          margin-top: 28px;

          overflow-x: auto;

          border:
            1px solid var(--mwrep-border);

          border-radius: 15px;

          background: #071015;
        }

        .mwrep-table {
          width: 100%;

          min-width: 800px;

          border-collapse: collapse;
        }

        .mwrep-table th,
        .mwrep-table td {
          padding: 18px;

          border-bottom:
            1px solid rgba(255,255,255,.07);

          vertical-align: top;

          text-align: left;
        }

        .mwrep-table th {
          color: #fff;

          background: #0a151b;

          font-size: 10px;

          letter-spacing: .08em;

          text-transform: uppercase;
        }

        .mwrep-table th:nth-child(2) {
          color:
            var(--mwrep-orange-light);
        }

        .mwrep-table td {
          color: #aebbc5;

          font-size: 12px;

          line-height: 1.65;
        }

        .mwrep-table td:first-child {
          color: #fff;

          font-weight: 800;
        }

        .mwrep-table tr:last-child td {
          border-bottom: 0;
        }

        /* =====================================================
           REVIEW REQUEST
        ===================================================== */

        .mwrep-request-grid {
          display: grid;

          grid-template-columns:
            repeat(2,1fr);

          gap: 12px;

          margin-top: 27px;
        }

        .mwrep-request-card {
          padding: 23px;

          border:
            1px solid var(--mwrep-border);

          border-radius: 13px;

          background: #071015;
        }

        .mwrep-request-card h3 {
          margin: 0 0 9px;

          color:
            var(--mwrep-blue-light);

          font-size: 18px;
        }

        .mwrep-request-card:nth-child(even) h3 {
          color:
            var(--mwrep-orange-light);
        }

        .mwrep-request-card p {
          margin: 0;

          color:
            var(--mwrep-muted);

          font-size: 13px;

          line-height: 1.7;
        }

        /* =====================================================
           CALLOUT
        ===================================================== */

        .mwrep-callout {
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

        .mwrep-callout-icon {
          width: 48px;
          height: 48px;

          display: grid;
          place-items: center;

          margin-bottom: 15px;

          border:
            1px solid rgba(255,121,0,.25);

          border-radius: 12px;

          color:
            var(--mwrep-orange-light);

          background:
            rgba(255,121,0,.045);
        }

        .mwrep-callout-icon svg {
          width: 24px;
          height: 24px;
        }

        .mwrep-callout h3 {
          margin: 0 0 10px;

          color: #fff;

          font-size: 22px;
        }

        .mwrep-callout p {
          margin: 0;

          color:
            var(--mwrep-muted);

          font-size: 14px;

          line-height: 1.75;
        }

        /* =====================================================
           FAQ
        ===================================================== */

        .mwrep-faq-grid {
          display: grid;

          gap: 12px;

          margin-top: 27px;
        }

        .mwrep-faq-card {
          padding: 23px;

          border:
            1px solid var(--mwrep-border);

          border-radius: 13px;

          background: #071015;
        }

        .mwrep-faq-card h3 {
          margin: 0 0 9px;

          color:
            var(--mwrep-blue-light);

          font-size: 17px;
        }

        .mwrep-faq-card:nth-child(even) h3 {
          color:
            var(--mwrep-orange-light);
        }

        .mwrep-faq-card p {
          margin: 0;

          color:
            var(--mwrep-muted);

          font-size: 13px;

          line-height: 1.7;
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .mwrep-buttons {
          display: flex;
          flex-wrap: wrap;

          gap: 12px;

          margin-top: 25px;
        }

        .mwrep-btn {
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

        .mwrep-btn:hover {
          transform:
            translateY(-2px);
        }

        .mwrep-btn-blue {
          border:
            1px solid rgba(56,215,255,.5);

          background:
            linear-gradient(
              180deg,
              #0ab6ed,
              #0789b6
            );
        }

        .mwrep-btn-orange {
          border:
            1px solid rgba(255,176,49,.55);

          background:
            linear-gradient(
              180deg,
              #ff9519,
              #f16600
            );
        }

        .mwrep-btn-dark {
          border:
            1px solid rgba(255,255,255,.12);

          background:
            rgba(255,255,255,.03);
        }

        .mwrep-btn svg {
          width: 17px;
          height: 17px;
        }

        /* =====================================================
           FINAL CTA
        ===================================================== */

        .mwrep-article-cta {
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

        .mwrep-article-cta h2 {
          max-width: 870px;

          margin: 0;

          font-size:
            clamp(31px,4vw,49px);

          line-height: 1.05;

          letter-spacing: -.045em;
        }

        .mwrep-article-cta p {
          max-width: 810px;

          margin: 17px 0 0;

          color:
            var(--mwrep-muted);

          font-size: 14px;

          line-height: 1.75;
        }

        /* =====================================================
           RELATED
        ===================================================== */

        .mwrep-related-section {
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

        .mwrep-related-inner {
          max-width: 1280px;

          margin: 0 auto;
        }

        .mwrep-related-title {
          margin-bottom: 32px;
        }

        .mwrep-related-title span {
          display: flex;
          align-items: center;

          gap: 8px;

          margin-bottom: 9px;

          color:
            var(--mwrep-orange-light);

          font-size: 9px;
          font-weight: 900;

          letter-spacing: .12em;

          text-transform: uppercase;
        }

        .mwrep-related-title svg {
          width: 16px;
          height: 16px;
        }

        .mwrep-related-title h2 {
          margin: 0;

          font-size:
            clamp(31px,4vw,49px);

          letter-spacing: -.045em;
        }

        .mwrep-related-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 14px;
        }

        .mwrep-related-card {
          min-height: 245px;

          display: flex;
          flex-direction: column;

          padding: 24px;

          border:
            1px solid var(--mwrep-border);

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

        .mwrep-related-card:hover {
          transform:
            translateY(-4px);

          border-color:
            rgba(8,185,244,.3);
        }

        .mwrep-related-card:nth-child(even):hover {
          border-color:
            rgba(255,121,0,.3);
        }

        .mwrep-related-card h3 {
          margin: 0;

          font-size: 18px;

          line-height: 1.3;
        }

        .mwrep-related-card p {
          margin: 13px 0 0;

          color:
            var(--mwrep-muted);

          font-size: 12px;

          line-height: 1.65;
        }

        .mwrep-related-link {
          display: flex;
          align-items: center;

          gap: 7px;

          margin-top: auto;

          padding-top: 21px;

          color:
            var(--mwrep-blue-light);

          font-size: 11px;
          font-weight: 850;
        }

        .mwrep-related-card:nth-child(even)
          .mwrep-related-link {
          color:
            var(--mwrep-orange-light);
        }

        .mwrep-related-link svg {
          width: 15px;
          height: 15px;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1100px) {
          .mwrep-system-grid,
          .mwrep-process-grid {
            grid-template-columns:
              repeat(2,1fr);
          }
        }

        @media (max-width: 1050px) {
          .mwrep-hero-inner {
            grid-template-columns: 1fr;
          }

          .mwrep-hero-copy {
            text-align: center;
          }

          .mwrep-label {
            margin-left: auto;
            margin-right: auto;
          }

          .mwrep-description {
            margin-left: auto;
            margin-right: auto;
          }

          .mwrep-meta {
            justify-content: center;
          }

          .mwrep-related-grid {
            grid-template-columns:
              repeat(2,1fr);
          }

          .mwrep-related-card:last-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 850px) {
          .mwrep-layout {
            grid-template-columns: 1fr;
          }

          .mwrep-toc {
            position: static;

            display: grid;

            grid-template-columns:
              repeat(2,1fr);

            gap: 0 20px;
          }

          .mwrep-toc-title,
          .mwrep-toc-cta {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 700px) {
          .mwrep-hero-inner {
            padding: 70px 16px;
          }

          .mwrep-hero h1 {
            font-size:
              clamp(42px,12vw,64px);
          }

          .mwrep-article-section {
            padding:
              70px 16px 85px;
          }

          .mwrep-component-grid,
          .mwrep-system-grid,
          .mwrep-process-grid,
          .mwrep-trust-grid,
          .mwrep-avoid-grid,
          .mwrep-request-grid,
          .mwrep-related-grid {
            grid-template-columns: 1fr;
          }

          .mwrep-related-card:last-child {
            grid-column: auto;
          }

          .mwrep-related-section {
            padding:
              70px 16px;
          }
        }

        @media (max-width: 560px) {
          .mwrep-reason-card {
            grid-template-columns: 1fr;
          }

          .mwrep-reason-number {
            width: 58px;
            height: 58px;
          }
        }

        @media (max-width: 500px) {
          .mwrep-stage {
            min-height: 450px;

            transform: scale(.9);

            margin: -10px -20px;
          }

          .mwrep-signal-grid {
            grid-template-columns: 1fr;
          }

          .mwrep-toc {
            grid-template-columns: 1fr;
          }

          .mwrep-toc-title,
          .mwrep-toc-cta {
            grid-column: auto;
          }

          .mwrep-section p {
            font-size: 15px;
          }
        }
      `}</style>

      {/* ======================================================
          BREADCRUMBS
      ====================================================== */}

      <div className="mwrep-breadcrumb-wrap">
        <nav
          className="mwrep-breadcrumbs"
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
            Reputation Management & Online Reviews
          </span>
        </nav>
      </div>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="mwrep-hero">
        <div className="mwrep-hero-inner">
          <div className="mwrep-hero-copy">
            <div className="mwrep-label">
              <BookOpen />
              Reputation • Reviews • Customer Trust
            </div>

            <h1>
              Why{" "}
              <span className="mwrep-blue">
                Reputation Management
              </span>{" "}
              & Online Reviews Matter in{" "}
              <span className="mwrep-orange">
                Business
              </span>
            </h1>

            <p className="mwrep-description">
              A business reputation is bigger
              than a star rating. It develops
              through real customer experiences,
              reviews, public responses, accurate
              business information, websites,
              search results, social profiles,
              and how the company handles
              problems over time.
            </p>

            <div className="mwrep-meta">
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
            className="mwrep-stage"
            aria-hidden="true"
          >
            <div className="mwrep-console">
              <div className="mwrep-console-top">
                <strong>
                  REPUTATION // BUSINESS SIGNALS
                </strong>

                <span className="mwrep-status">
                  LISTENING
                </span>
              </div>

              <div className="mwrep-main-card">
                <span>
                  REPUTATION SYSTEM
                </span>

                <div className="mwrep-main-title">
                  <HeartHandshake />
                  Earn Trust Through Real Experience
                </div>

                <p>
                  Experience → Feedback → Response →
                  Improvement → Trust
                </p>
              </div>

              <div className="mwrep-signal-grid">
                <div className="mwrep-signal-card">
                  <Star />
                  <strong>
                    REVIEWS
                  </strong>
                </div>

                <div className="mwrep-signal-card">
                  <MessageSquare />
                  <strong>
                    RESPONSE
                  </strong>
                </div>

                <div className="mwrep-signal-card">
                  <TrendingUp />
                  <strong>
                    IMPROVE
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

      <article className="mwrep-article-section">
        <div className="mwrep-layout">
          {/* ==================================================
              TOC
          ================================================== */}

          <aside className="mwrep-toc">
            <div className="mwrep-toc-title">
              <BookOpen />
              In This Article
            </div>

            <a href="#short-answer">
              Short Answer
            </a>

            <a href="#what-is-reputation">
              What Is Online Reputation?
            </a>

            <a href="#reviews">
              Why Reviews Matter
            </a>

            <a href="#system">
              Reputation System
            </a>

            <a href="#monitor">
              What to Monitor
            </a>

            <a href="#trust">
              Building Trust
            </a>

            <a href="#negative">
              Negative Reviews
            </a>

            <a href="#avoid">
              What Not to Do
            </a>

            <a href="#patterns">
              Learn From Patterns
            </a>

            <a href="#website">
              Website & Reputation
            </a>

            <a href="#request">
              Asking for Reviews
            </a>

            <a href="#faq">
              FAQs
            </a>

            <div className="mwrep-toc-cta">
              <Link href="/how-to-respond-to-online-reviews-good-and-bad">
                Review Response Guide →
              </Link>
            </div>
          </aside>

          <div className="mwrep-content">
            {/* =================================================
                SHORT ANSWER
            ================================================= */}

            <section
              className="mwrep-answer"
              id="short-answer"
            >
              <div className="mwrep-answer-label">
                <Zap />
                Short Answer
              </div>

              <h2>
                Why Does Online Reputation Matter?
              </h2>

              <p>
                <strong>
                  Online reputation matters
                  because customers can encounter
                  reviews, business profiles,
                  search results, social pages,
                  websites, public responses, and
                  other information before they
                  decide whether to contact a
                  company.
                </strong>{" "}
                Reputation management is not
                simply trying to make every
                rating positive. It includes
                keeping public information
                accurate, listening to legitimate
                feedback, responding
                professionally, and improving
                recurring customer problems.
              </p>
            </section>

            {/* =================================================
                WHAT IS REPUTATION
            ================================================= */}

            <section
              className="mwrep-section"
              id="what-is-reputation"
            >
              <h2>
                What Is a Business&apos;s{" "}
                <span className="mwrep-blue">
                  Online Reputation?
                </span>
              </h2>

              <p>
                A reputation is not created by
                one website or one review
                platform.
              </p>

              <p>
                It develops from multiple public
                and private experiences that
                eventually shape what customers
                believe about the company.
              </p>

              <div className="mwrep-component-grid">
                {reputationComponents.map(
                  (item) => {
                    const Icon =
                      item.icon;

                    return (
                      <div
                        className="mwrep-component-card"
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

              <div className="mwrep-callout">
                <div className="mwrep-callout-icon">
                  <ShieldCheck />
                </div>

                <h3>
                  Reputation Cannot Be Separated
                  From Operations
                </h3>

                <p>
                  If the same customer problem
                  happens repeatedly, the
                  long-term solution is usually
                  not a better public response.
                  The underlying business process
                  may need to change.
                </p>
              </div>
            </section>

            {/* =================================================
                REVIEWS
            ================================================= */}

            <section
              className="mwrep-section"
              id="reviews"
            >
              <h2>
                Why Online Reviews{" "}
                <span className="mwrep-orange">
                  Matter
                </span>
              </h2>

              <p>
                Reviews are not perfect evidence.
                They can be subjective,
                incomplete, emotional, or based
                on different expectations.
              </p>

              <p>
                But legitimate reviews can still
                provide useful information to
                future customers and to the
                business itself.
              </p>

              <div className="mwrep-reason-grid">
                {reviewReasons.map(
                  (item) => (
                    <div
                      className="mwrep-reason-card"
                      key={item.number}
                    >
                      <div className="mwrep-reason-number">
                        {item.number}
                      </div>

                      <div>
                        <h3>
                          {item.title}
                        </h3>

                        <p>
                          {item.text}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="mwrep-callout">
                <div className="mwrep-callout-icon">
                  <Star />
                </div>

                <h3>
                  Reviews Are Evidence, Not the
                  Entire Business
                </h3>

                <p>
                  A review provides information
                  about one experience. Look at
                  the content, context, response,
                  and broader pattern rather than
                  assuming one star count tells
                  the complete story.
                </p>
              </div>
            </section>

            {/* =================================================
                SYSTEM
            ================================================= */}

            <section
              className="mwrep-section"
              id="system"
            >
              <h2>
                Reputation Management Is a{" "}
                <span className="mwrep-blue">
                  Business System
                </span>
              </h2>

              <p>
                A useful reputation process can
                be much simpler than many
                businesses expect.
              </p>

              <div className="mwrep-system-grid">
                {reputationSystem.map(
                  (item) => (
                    <div
                      className="mwrep-system-card"
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

              <div className="mwrep-callout">
                <div className="mwrep-callout-icon">
                  <Workflow />
                </div>

                <h3>
                  Deliver → Listen → Verify →
                  Respond → Improve
                </h3>

                <p>
                  The goal is not to control what
                  every person says. The goal is
                  to operate the business well,
                  make public information
                  accurate, respond appropriately,
                  and learn from useful feedback.
                </p>
              </div>
            </section>

            {/* =================================================
                MONITOR
            ================================================= */}

            <section
              className="mwrep-section"
              id="monitor"
            >
              <h2>
                What Should a Business{" "}
                <span className="mwrep-orange">
                  Monitor?
                </span>
              </h2>

              <p>
                Monitoring does not need to mean
                watching the internet every
                minute.
              </p>

              <p>
                Periodically review the places
                where customers are likely to
                encounter important business
                information.
              </p>

              <ul className="mwrep-checklist">
                {monitorItems.map(
                  (item) => (
                    <li key={item}>
                      <CheckCircle2 />
                      {item}
                    </li>
                  )
                )}
              </ul>

              <p>
                The exact channels depend on the
                business. A local contractor,
                online software company,
                restaurant, consultant, and
                nationwide service company will
                not necessarily need the same
                monitoring routine.
              </p>
            </section>

            {/* =================================================
                TRUST
            ================================================= */}

            <section
              className="mwrep-section"
              id="trust"
            >
              <h2>
                Reputation Comes From{" "}
                <span className="mwrep-blue">
                  More Than Reviews
                </span>
              </h2>

              <p>
                Customers may research several
                sources before deciding what they
                think about a business.
              </p>

              <div className="mwrep-trust-grid">
                {trustSources.map(
                  (item) => (
                    <div
                      className="mwrep-trust-card"
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

              <div className="mwrep-callout">
                <div className="mwrep-callout-icon">
                  <UserCheck />
                </div>

                <h3>
                  Consistency Builds Clarity
                </h3>

                <p>
                  A business looks more credible
                  when its website, contact
                  information, services, profiles,
                  and public responses tell a
                  consistent and accurate story.
                </p>
              </div>
            </section>

            {/* =================================================
                NEGATIVE REVIEWS
            ================================================= */}

            <section
              className="mwrep-section"
              id="negative"
            >
              <h2>
                Negative Reviews Should Trigger{" "}
                <span className="mwrep-orange">
                  Investigation, Not Panic
                </span>
              </h2>

              <p>
                A negative review does not always
                mean the business failed.
              </p>

              <p>
                But it does provide a reason to
                understand what happened.
              </p>

              <div className="mwrep-process-grid">
                {negativeReviewProcess.map(
                  (step) => (
                    <div
                      className="mwrep-process-card"
                      key={step.number}
                    >
                      <div className="mwrep-process-number">
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

              <div className="mwrep-buttons">
                <Link
                  href="/how-to-respond-to-online-reviews-good-and-bad"
                  className="mwrep-btn mwrep-btn-blue"
                >
                  Review Response Guide
                  <ArrowRight />
                </Link>
              </div>
            </section>

            {/* =================================================
                AVOID
            ================================================= */}

            <section
              className="mwrep-section"
              id="avoid"
            >
              <h2>
                Reputation Practices to{" "}
                <span className="mwrep-blue">
                  Avoid
                </span>
              </h2>

              <div className="mwrep-avoid-grid">
                {avoidItems.map(
                  (item) => {
                    const Icon =
                      item.icon;

                    return (
                      <div
                        className="mwrep-avoid-card"
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

              <div className="mwrep-callout">
                <div className="mwrep-callout-icon">
                  <AlertTriangle />
                </div>

                <h3>
                  Never Manufacture Trust
                </h3>

                <p>
                  Fake reviews, invented customer
                  photos, fabricated testimonials,
                  unsupported ratings, and
                  fictional success stories may
                  make a page look busier, but
                  they undermine the credibility
                  the page is supposed to create.
                </p>
              </div>
            </section>

            {/* =================================================
                PATTERNS
            ================================================= */}

            <section
              className="mwrep-section"
              id="patterns"
            >
              <h2>
                Look for{" "}
                <span className="mwrep-orange">
                  Patterns
                </span>{" "}
                in Customer Feedback
              </h2>

              <p>
                Individual reviews are useful,
                but recurring themes can reveal
                bigger business questions.
              </p>

              <div className="mwrep-table-wrap">
                <table className="mwrep-table">
                  <thead>
                    <tr>
                      <th>
                        Feedback Pattern
                      </th>

                      <th>
                        Possible Business Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {feedbackPatterns.map(
                      (item) => (
                        <tr key={item.pattern}>
                          <td>
                            {item.pattern}
                          </td>

                          <td>
                            {item.action}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>

              <div className="mwrep-callout">
                <div className="mwrep-callout-icon">
                  <TrendingUp />
                </div>

                <h3>
                  Reputation Data Can Become
                  Operations Data
                </h3>

                <p>
                  Recurring customer feedback can
                  influence website content,
                  sales explanations, pricing
                  communication, lead follow-up,
                  service processes, automation,
                  and other areas of the business.
                </p>
              </div>
            </section>

            {/* =================================================
                WEBSITE
            ================================================= */}

            <section
              className="mwrep-section"
              id="website"
            >
              <h2>
                Your Website Is Part of Your{" "}
                <span className="mwrep-blue">
                  Reputation
                </span>
              </h2>

              <p>
                A business website is one of the
                places where the company can
                directly control how its
                information is organized and
                explained.
              </p>

              <ul className="mwrep-checklist">
                {websiteRoles.map(
                  (item) => (
                    <li key={item}>
                      <CheckCircle2 />
                      {item}
                    </li>
                  )
                )}
              </ul>

              <p>
                A professional website does not
                prove that every customer will
                have a perfect experience.
              </p>

              <p>
                It does give the business a
                controlled place to publish
                accurate information and help
                customers understand what to
                expect.
              </p>

              <div className="mwrep-buttons">
                <Link
                  href="/8-things-every-small-business-website-needs"
                  className="mwrep-btn mwrep-btn-blue"
                >
                  Website Trust Checklist
                  <ArrowRight />
                </Link>

                <Link
                  href="/small-business-websites"
                  className="mwrep-btn mwrep-btn-dark"
                >
                  Small Business Websites
                </Link>
              </div>
            </section>

            {/* =================================================
                REVIEW REQUESTS
            ================================================= */}

            <section
              className="mwrep-section"
              id="request"
            >
              <h2>
                Building a Real{" "}
                <span className="mwrep-orange">
                  Review Base
                </span>
              </h2>

              <p>
                If the business wants more
                reviews, the correct solution is
                to create legitimate
                opportunities for real customers
                to provide feedback.
              </p>

              <div className="mwrep-request-grid">
                {reviewRequestProcess.map(
                  (item) => (
                    <div
                      className="mwrep-request-card"
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

              <div className="mwrep-callout">
                <div className="mwrep-callout-icon">
                  <HeartHandshake />
                </div>

                <h3>
                  Ask for Honest Reviews
                </h3>

                <p>
                  A review request should invite
                  real feedback from a legitimate
                  customer. Do not tell the
                  customer what they must say or
                  manufacture feedback when no
                  verified reviews exist yet.
                </p>
              </div>
            </section>

            {/* =================================================
                REPUTATION + MARKETING
            ================================================= */}

            <section className="mwrep-section">
              <h2>
                Reputation and Marketing Should{" "}
                <span className="mwrep-blue">
                  Support Each Other
                </span>
              </h2>

              <p>
                Advertising and marketing can
                introduce new people to a
                business.
              </p>

              <p>
                Those people may then investigate
                the company&apos;s website,
                reviews, search presence, social
                profiles, project examples, and
                other public information before
                deciding whether to take the next
                step.
              </p>

              <p>
                That means reputation is not a
                separate layer added after
                marketing.
              </p>

              <p>
                It is part of the customer
                journey.
              </p>

              <div className="mwrep-callout">
                <div className="mwrep-callout-icon">
                  <Target />
                </div>

                <h3>
                  Marketing Creates Attention.
                  Reputation Helps Provide Context.
                </h3>

                <p>
                  The stronger long-term strategy
                  is not simply trying to produce
                  better-looking ratings. It is
                  building a business that can
                  support its public claims with
                  real information, real work, and
                  real customer experiences.
                </p>
              </div>

              <div className="mwrep-buttons">
                <Link
                  href="/8-marketing-mistakes-small-businesses-make"
                  className="mwrep-btn mwrep-btn-blue"
                >
                  Small Business Marketing Guide
                  <ArrowRight />
                </Link>
              </div>
            </section>

            {/* =================================================
                FAQ
            ================================================= */}

            <section
              className="mwrep-section"
              id="faq"
            >
              <h2>
                Reputation & Reviews{" "}
                <span className="mwrep-orange">
                  FAQs
                </span>
              </h2>

              <div className="mwrep-faq-grid">
                {faqs.map(
                  (item) => (
                    <div
                      className="mwrep-faq-card"
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

            <section className="mwrep-article-cta">
              <h2>
                Build Trust With{" "}
                <span className="mwrep-orange">
                  Real Information,
                </span>{" "}
                Real Work, and{" "}
                <span className="mwrep-blue">
                  Real Customer Experiences.
                </span>
              </h2>

              <p>
                Matthew Web builds websites,
                search-ready content structures,
                lead systems, analytics
                connections, forms, dashboards,
                and custom software that can help
                businesses present accurate
                information and create stronger
                customer workflows. Dedicated
                reputation-management work is not
                being presented here as a
                standard Matthew Web service.
              </p>

              <div className="mwrep-buttons">
                <Link
                  href="/contact-us"
                  className="mwrep-btn mwrep-btn-orange"
                >
                  Discuss Your Website
                  <ArrowRight />
                </Link>

                <Link
                  href="/website-design"
                  className="mwrep-btn mwrep-btn-blue"
                >
                  Website Design
                </Link>

                <Link
                  href="/seo-and-indexing"
                  className="mwrep-btn mwrep-btn-dark"
                >
                  SEO & Indexing
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* ======================================================
          RELATED ARTICLES
      ====================================================== */}

      <section className="mwrep-related-section">
        <div className="mwrep-related-inner">
          <div className="mwrep-related-title">
            <span>
              <Sparkles />
              Continue Reading
            </span>

            <h2>
              Related{" "}
              <span className="mwrep-blue">
                Articles
              </span>
            </h2>
          </div>

          <div className="mwrep-related-grid">
            {relatedArticles.map(
              (article) => (
                <Link
                  href={article.href}
                  className="mwrep-related-card"
                  key={article.href}
                >
                  <h3>
                    {article.title}
                  </h3>

                  <p>
                    {article.text}
                  </p>

                  <div className="mwrep-related-link">
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
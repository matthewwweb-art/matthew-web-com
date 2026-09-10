import Link from "next/link";

import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  Globe2,
  Layers3,
  MapPin,
  MessageSquare,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
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
    "7 Reasons Why Small Business Websites Are Vital | Matthew Web",

  description:
    "Learn seven practical reasons a small business website matters, including credibility, search visibility, lead generation, customer information, marketing support, business control, and future growth.",

  alternates: {
    canonical:
      "https://matthew-web.com/7-reasons-why-small-business-websites-are-vital",
  },

  openGraph: {
    title:
      "7 Reasons Why Small Business Websites Are Vital | Matthew Web",

    description:
      "A practical guide to why a professional website remains an important business asset for visibility, trust, lead generation, customer service, marketing, and future growth.",

    url:
      "https://matthew-web.com/7-reasons-why-small-business-websites-are-vital",

    siteName:
      "Matthew Web",

    type:
      "article",
  },
};

/* ============================================================
   SEVEN REASONS
============================================================ */

const reasons = [
  {
    number:
      "01",

    icon:
      ShieldCheck,

    title:
      "Create a Professional Home for Your Business",

    text:
      "Your website gives customers one official place to understand who you are, what you offer, how to contact you, and what makes your business different. Social profiles and directory listings can support the business, but your website gives you much more control over the experience.",
  },

  {
    number:
      "02",

    icon:
      Clock3,

    title:
      "Make Important Information Available Anytime",

    text:
      "Customers may research a business before opening hours, after work, on weekends, or whenever a need appears. A website can keep service information, contact options, FAQs, project examples, and other useful information available even when nobody is immediately answering the phone.",
  },

  {
    number:
      "03",

    icon:
      SearchCheck,

    title:
      "Give Search Engines Something Useful to Discover",

    text:
      "Service pages, articles, business information, internal links, local information, and other crawlable content can help search engines understand what the business does. Search visibility still depends on many factors, but without useful public pages there is much less for search systems to work with.",
  },

  {
    number:
      "04",

    icon:
      MessageSquare,

    title:
      "Create a Clear Path to an Inquiry",

    text:
      "A website can connect customers to phone numbers, contact forms, quote requests, booking requests, email links, service pages, pricing information, or another appropriate next step.",
  },

  {
    number:
      "05",

    icon:
      Target,

    title:
      "Support the Rest of Your Marketing",

    text:
      "Social posts, referrals, printed materials, business cards, local listings, outreach, search results, and future advertising can all point back to a website where the customer can learn more and take action.",
  },

  {
    number:
      "06",

    icon:
      Globe2,

    title:
      "Control Your Own Business Information",

    text:
      "A business should not depend entirely on a third-party social network or directory to explain its services. Your website gives you a place to publish accurate information directly and organize it around your customers.",
  },

  {
    number:
      "07",

    icon:
      Workflow,

    title:
      "Build a Foundation for Future Technology",

    text:
      "A website can start as a public business presence and later connect to payments, forms, analytics, customer accounts, CRM systems, booking workflows, databases, automation, and custom software as the business grows.",
  },
];

/* ============================================================
   WEBSITE COMPONENTS
============================================================ */

const foundationItems = [
  "Clear explanation of the business",
  "Primary services",
  "Service area where relevant",
  "Phone and contact information",
  "Mobile-friendly navigation",
  "Useful contact or quote form",
  "Calls to action",
  "Trust information",
  "Real project or portfolio evidence when available",
  "Search-friendly page structure",
  "Privacy and legal information where appropriate",
  "Fast, usable page experience",
];

/* ============================================================
   BUSINESS TYPES
============================================================ */

const businessTypes = [
  {
    title:
      "Contractors",

    text:
      "Explain services, show real projects, identify legitimate service areas, and give customers an easy way to request an estimate.",
  },

  {
    title:
      "Professional Services",

    text:
      "Explain expertise, services, processes, customer questions, and how somebody can request a consultation or begin a conversation.",
  },

  {
    title:
      "Local Service Businesses",

    text:
      "Make service information, hours where appropriate, contact options, locations or service areas, and customer next steps easier to find.",
  },

  {
    title:
      "Property & Real Estate Businesses",

    text:
      "Publish property information, listings, owner or tenant information, inquiries, and connections to other business systems.",
  },

  {
    title:
      "Growing Small Businesses",

    text:
      "Use the website as the public layer of a larger system that can eventually include dashboards, databases, integrations, and automation.",
  },

  {
    title:
      "Technology Businesses",

    text:
      "Publish products, development work, technical documentation, research, educational material, project updates, and software entry points.",
  },
];

/* ============================================================
   WEBSITE VS SOCIAL
============================================================ */

const channelComparison = [
  {
    channel:
      "Business Website",

    control:
      "High",

    purpose:
      "Official business information, services, content, lead generation, search visibility, software integration, and owned customer pathways.",
  },

  {
    channel:
      "Social Media",

    control:
      "Platform dependent",

    purpose:
      "Conversation, awareness, community, short-form content, updates, and directing interested people toward deeper information.",
  },

  {
    channel:
      "Google Business Profile",

    control:
      "Platform dependent",

    purpose:
      "Local discovery, business information, maps, reviews, photos, updates, and connections to the main website.",
  },

  {
    channel:
      "Directories",

    control:
      "Platform dependent",

    purpose:
      "Additional business discovery and citation information where the directory is legitimate and useful.",
  },
];

/* ============================================================
   FAQ
============================================================ */

const faqs = [
  {
    q:
      "Does every small business still need a website?",

    a:
      "The exact need depends on the business, but a website remains a useful asset for businesses that want a controlled place for services, customer information, search visibility, inquiries, content, and future digital functionality.",
  },

  {
    q:
      "Is a Facebook page enough for a small business?",

    a:
      "A Facebook page can be useful, but it serves a different role. The business does not control the Facebook platform itself. A website provides greater control over content, structure, customer pathways, integrations, and long-term business functionality.",
  },

  {
    q:
      "Can a small business website generate leads?",

    a:
      "A website can create clear opportunities for customers to call, email, request a quote, book, or submit a form. Lead volume is not guaranteed and still depends on traffic, demand, trust, competition, marketing, pricing, and other factors.",
  },

  {
    q:
      "Does having a website guarantee Google rankings?",

    a:
      "No. A website creates pages that can potentially be discovered and indexed, but rankings depend on relevance, competition, content quality, technical condition, authority, location, search systems, and many other factors.",
  },

  {
    q:
      "Can a website grow into custom software later?",

    a:
      "Yes. A website can later connect to databases, customer portals, CRM dashboards, payments, booking systems, automation, APIs, and other custom software.",
  },

  {
    q:
      "Does Matthew Web build websites for Maine small businesses?",

    a:
      "Yes. Maine small businesses are an important near-term focus for Matthew Web website services, while projects can also be handled for businesses outside Maine depending on the scope.",
  },
];

/* ============================================================
   RELATED ARTICLES
============================================================ */

const relatedArticles = [
  {
    title:
      "8 Things Every Small Business Website Needs",

    href:
      "/8-things-every-small-business-website-needs",

    text:
      "Move from why a website matters to the actual components a useful small-business website should contain.",
  },

  {
    title:
      "7 Signs You Need a New Website for Your Business",

    href:
      "/7-signs-you-need-a-new-website-for-your-business",

    text:
      "Learn how to recognize when an existing website is becoming an obstacle instead of an asset.",
  },

  {
    title:
      "How Matthew Web Builds SEO-Ready Small Business Websites",

    href:
      "/how-matthew-web-builds-seo-ready-small-business-websites",

    text:
      "See how content, metadata, internal links, mobile usability, sitemaps, and indexing preparation fit together.",
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
    "7 Reasons Why Small Business Websites Are Vital",

  description:
    "Seven practical reasons a professional small business website remains useful for credibility, customer information, search visibility, leads, marketing, business control, and future technology growth.",

  mainEntityOfPage: {
    "@type":
      "WebPage",

    "@id":
      "https://matthew-web.com/7-reasons-why-small-business-websites-are-vital",
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
        "7 Reasons Why Small Business Websites Are Vital",

      item:
        "https://matthew-web.com/7-reasons-why-small-business-websites-are-vital",
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

export default function SmallBusinessWebsitesVitalArticle() {
  return (
    <main className="mwvital-page">
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
          --mwvital-black: #020304;
          --mwvital-muted: #aebbc5;
          --mwvital-blue: #08b9f4;
          --mwvital-blue-light: #38d7ff;
          --mwvital-orange: #ff7900;
          --mwvital-orange-light: #ffab31;
          --mwvital-green: #35e07e;
          --mwvital-border: rgba(255,255,255,.09);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--mwvital-black);
        }

        .mwvital-page {
          min-height: 100vh;
          overflow: hidden;
          color: #ffffff;
          background: var(--mwvital-black);
        }

        .mwvital-blue {
          color: var(--mwvital-blue-light);
        }

        .mwvital-orange {
          color: var(--mwvital-orange);
        }

        /* =====================================================
           BREADCRUMBS
        ===================================================== */

        .mwvital-breadcrumb-wrap {
          border-bottom: 1px solid rgba(255,255,255,.06);
          background: #04080b;
        }

        .mwvital-breadcrumbs {
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

        .mwvital-breadcrumbs a {
          color: #8799a3;
          text-decoration: none;
        }

        .mwvital-breadcrumbs a:hover {
          color: var(--mwvital-blue-light);
        }

        .mwvital-breadcrumbs svg {
          width: 12px;
          height: 12px;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwvital-hero {
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

        .mwvital-hero::before {
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

        .mwvital-hero-inner {
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

        .mwvital-label {
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

        .mwvital-label svg {
          width: 16px;
          height: 16px;
        }

        .mwvital-hero h1 {
          max-width: 980px;
          margin: 0;

          font-size:
            clamp(48px,5.6vw,84px);

          line-height: .99;
          letter-spacing: -.06em;
        }

        .mwvital-description {
          max-width: 800px;
          margin: 25px 0 0;

          color: #b8c6cf;

          font-size:
            clamp(16px,1.4vw,20px);

          line-height: 1.75;
        }

        .mwvital-meta {
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

        .mwvital-stage {
          min-height: 470px;

          display: grid;
          place-items: center;
        }

        .mwvital-console {
          width: min(100%,520px);

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

        .mwvital-console-top {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-bottom: 18px;
        }

        .mwvital-console-top strong {
          color: #81929d;
          font-size: 9px;
          letter-spacing: .12em;
        }

        .mwvital-live {
          display: inline-flex;
          align-items: center;
          gap: 6px;

          color: #8da0aa;

          font-size: 8px;
          font-weight: 900;
        }

        .mwvital-live::before {
          content: "";

          width: 6px;
          height: 6px;

          border-radius: 50%;

          background:
            var(--mwvital-green);

          box-shadow:
            0 0 7px
            rgba(53,224,126,.7);
        }

        .mwvital-business-card {
          padding: 20px;

          border:
            1px solid
            rgba(255,121,0,.17);

          border-radius: 12px;

          background: #071015;
        }

        .mwvital-business-card span {
          color: #657984;

          font-size: 7px;
          font-weight: 900;
          letter-spacing: .09em;
          text-transform: uppercase;
        }

        .mwvital-business-title {
          display: flex;
          align-items: center;
          gap: 9px;

          margin-top: 10px;

          color:
            var(--mwvital-orange-light);

          font-size: 16px;
          font-weight: 900;
        }

        .mwvital-business-title svg {
          width: 23px;
          height: 23px;
        }

        .mwvital-business-card p {
          margin: 10px 0 0;

          color: #788b95;

          font-size: 9px;
          line-height: 1.6;
        }

        .mwvital-flow {
          display: grid;
          grid-template-columns:
            repeat(3,1fr);

          gap: 9px;

          margin-top: 10px;
        }

        .mwvital-flow-card {
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

        .mwvital-flow-card:nth-child(even) {
          border-color:
            rgba(255,121,0,.14);
        }

        .mwvital-flow-card svg {
          width: 22px;
          height: 22px;

          color:
            var(--mwvital-blue-light);
        }

        .mwvital-flow-card:nth-child(even)
          svg {
          color:
            var(--mwvital-orange-light);
        }

        .mwvital-flow-card strong {
          font-size: 8px;
          letter-spacing: .05em;
        }

        /* =====================================================
           ARTICLE
        ===================================================== */

        .mwvital-article-section {
          padding:
            95px
            clamp(20px,5vw,80px)
            110px;

          background: #020304;
        }

        .mwvital-layout {
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

        .mwvital-toc {
          position: sticky;
          top: 30px;

          padding: 23px;

          border:
            1px solid
            var(--mwvital-border);

          border-radius: 14px;

          background:
            linear-gradient(
              145deg,
              #09131a,
              #04080b
            );
        }

        .mwvital-toc-title {
          display: flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 15px;

          font-size: 10px;
          font-weight: 900;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .mwvital-toc-title svg {
          width: 16px;
          height: 16px;

          color:
            var(--mwvital-blue-light);
        }

        .mwvital-toc a {
          display: block;

          padding: 8px 0;

          color: #8799a3;

          text-decoration: none;

          font-size: 12px;
          line-height: 1.45;
        }

        .mwvital-toc a:hover {
          color:
            var(--mwvital-blue-light);
        }

        .mwvital-toc-cta {
          margin-top: 18px;
          padding-top: 17px;

          border-top:
            1px solid
            rgba(255,255,255,.07);
        }

        .mwvital-toc-cta a {
          color:
            var(--mwvital-orange-light);

          font-weight: 850;
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .mwvital-content {
          min-width: 0;
        }

        .mwvital-section {
          margin-bottom: 62px;
          scroll-margin-top: 35px;
        }

        .mwvital-section h2 {
          margin: 0 0 20px;

          font-size:
            clamp(30px,3.5vw,48px);

          line-height: 1.08;
          letter-spacing: -.045em;
        }

        .mwvital-section h3 {
          margin: 32px 0 12px;

          color:
            var(--mwvital-blue-light);

          font-size: 21px;
          line-height: 1.3;
        }

        .mwvital-section p {
          margin: 0 0 19px;

          color: #b6c3ca;

          font-size: 16px;
          line-height: 1.85;
        }

        .mwvital-section strong {
          color: #ffffff;
        }

        /* =====================================================
           ANSWER
        ===================================================== */

        .mwvital-answer {
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

        .mwvital-answer-label {
          display: flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 12px;

          color:
            var(--mwvital-blue-light);

          font-size: 9px;
          font-weight: 950;
          letter-spacing: .11em;
          text-transform: uppercase;
        }

        .mwvital-answer-label svg {
          width: 17px;
          height: 17px;
        }

        .mwvital-answer h2 {
          margin: 0 0 12px;

          font-size:
            clamp(24px,3vw,36px);

          line-height: 1.1;
        }

        .mwvital-answer p {
          margin: 0;

          color: #b7c5cc;

          font-size: 15px;
          line-height: 1.75;
        }

        /* =====================================================
           REASON CARDS
        ===================================================== */

        .mwvital-reason-grid {
          display: grid;
          gap: 14px;
          margin-top: 28px;
        }

        .mwvital-reason-card {
          display: grid;

          grid-template-columns:
            78px 1fr;

          gap: 22px;

          padding: 25px;

          border:
            1px solid
            rgba(8,185,244,.14);

          border-radius: 14px;

          background: #071015;
        }

        .mwvital-reason-card:nth-child(even) {
          border-color:
            rgba(255,121,0,.14);
        }

        .mwvital-reason-icon {
          width: 70px;
          height: 70px;

          display: grid;
          place-items: center;

          border:
            1px solid
            rgba(8,185,244,.22);

          border-radius: 16px;

          color:
            var(--mwvital-blue-light);

          background:
            rgba(8,185,244,.04);
        }

        .mwvital-reason-card:nth-child(even)
          .mwvital-reason-icon {
          border-color:
            rgba(255,121,0,.22);

          color:
            var(--mwvital-orange-light);

          background:
            rgba(255,121,0,.035);
        }

        .mwvital-reason-icon svg {
          width: 30px;
          height: 30px;
        }

        .mwvital-reason-number {
          margin-bottom: 7px;

          color:
            var(--mwvital-blue-light);

          font-size: 9px;
          font-weight: 950;
          letter-spacing: .1em;
        }

        .mwvital-reason-card:nth-child(even)
          .mwvital-reason-number {
          color:
            var(--mwvital-orange-light);
        }

        .mwvital-reason-card h3 {
          margin: 0 0 9px;

          color: #ffffff;

          font-size: 20px;
        }

        .mwvital-reason-card p {
          margin: 0;

          color:
            var(--mwvital-muted);

          font-size: 13px;
          line-height: 1.72;
        }

        /* =====================================================
           CHECKLIST
        ===================================================== */

        .mwvital-checklist {
          display: grid;
          gap: 10px;

          margin: 25px 0;

          padding: 0;

          list-style: none;
        }

        .mwvital-checklist li {
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

        .mwvital-checklist svg {
          width: 17px;
          height: 17px;

          flex: 0 0 auto;

          margin-top: 1px;

          color:
            var(--mwvital-blue-light);
        }

        /* =====================================================
           BUSINESS TYPES
        ===================================================== */

        .mwvital-business-grid {
          display: grid;

          grid-template-columns:
            repeat(2,1fr);

          gap: 12px;

          margin-top: 27px;
        }

        .mwvital-business-type {
          padding: 23px;

          border:
            1px solid
            var(--mwvital-border);

          border-radius: 13px;

          background: #071015;
        }

        .mwvital-business-type h3 {
          margin: 0 0 9px;

          color:
            var(--mwvital-blue-light);

          font-size: 18px;
        }

        .mwvital-business-type:nth-child(even)
          h3 {
          color:
            var(--mwvital-orange-light);
        }

        .mwvital-business-type p {
          margin: 0;

          color:
            var(--mwvital-muted);

          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           COMPARISON
        ===================================================== */

        .mwvital-table-wrap {
          margin-top: 28px;

          overflow-x: auto;

          border:
            1px solid
            var(--mwvital-border);

          border-radius: 15px;

          background: #071015;
        }

        .mwvital-table {
          width: 100%;
          min-width: 760px;

          border-collapse: collapse;
        }

        .mwvital-table th,
        .mwvital-table td {
          padding: 18px;

          border-bottom:
            1px solid
            rgba(255,255,255,.07);

          vertical-align: top;
          text-align: left;
        }

        .mwvital-table th {
          color: #ffffff;

          background: #0a151b;

          font-size: 10px;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .mwvital-table th:nth-child(2) {
          color:
            var(--mwvital-blue-light);
        }

        .mwvital-table th:nth-child(3) {
          color:
            var(--mwvital-orange-light);
        }

        .mwvital-table td {
          color: #aebbc5;

          font-size: 12px;
          line-height: 1.65;
        }

        .mwvital-table td:first-child {
          color: #ffffff;
          font-weight: 800;
        }

        .mwvital-table tr:last-child td {
          border-bottom: 0;
        }

        /* =====================================================
           CALLOUT
        ===================================================== */

        .mwvital-callout {
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

        .mwvital-callout-icon {
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
            var(--mwvital-orange-light);

          background:
            rgba(255,121,0,.045);
        }

        .mwvital-callout-icon svg {
          width: 24px;
          height: 24px;
        }

        .mwvital-callout h3 {
          margin: 0 0 10px;

          color: #ffffff;

          font-size: 22px;
        }

        .mwvital-callout p {
          margin: 0;

          color:
            var(--mwvital-muted);

          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           FAQ
        ===================================================== */

        .mwvital-faq-grid {
          display: grid;
          gap: 12px;

          margin-top: 27px;
        }

        .mwvital-faq-card {
          padding: 23px;

          border:
            1px solid
            var(--mwvital-border);

          border-radius: 13px;

          background: #071015;
        }

        .mwvital-faq-card h3 {
          margin: 0 0 9px;

          color:
            var(--mwvital-blue-light);

          font-size: 17px;
        }

        .mwvital-faq-card:nth-child(even)
          h3 {
          color:
            var(--mwvital-orange-light);
        }

        .mwvital-faq-card p {
          margin: 0;

          color:
            var(--mwvital-muted);

          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .mwvital-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;

          margin-top: 25px;
        }

        .mwvital-btn {
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

        .mwvital-btn:hover {
          transform:
            translateY(-2px);
        }

        .mwvital-btn-blue {
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

        .mwvital-btn-orange {
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

        .mwvital-btn-dark {
          border:
            1px solid
            rgba(255,255,255,.12);

          background:
            rgba(255,255,255,.03);
        }

        .mwvital-btn svg {
          width: 17px;
          height: 17px;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .mwvital-article-cta {
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

        .mwvital-article-cta h2 {
          max-width: 820px;
          margin: 0;

          font-size:
            clamp(31px,4vw,49px);

          line-height: 1.05;
          letter-spacing: -.045em;
        }

        .mwvital-article-cta p {
          max-width: 780px;

          margin: 17px 0 0;

          color:
            var(--mwvital-muted);

          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           RELATED
        ===================================================== */

        .mwvital-related-section {
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

        .mwvital-related-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        .mwvital-related-title {
          margin-bottom: 32px;
        }

        .mwvital-related-title span {
          display: flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 9px;

          color:
            var(--mwvital-orange-light);

          font-size: 9px;
          font-weight: 900;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .mwvital-related-title svg {
          width: 16px;
          height: 16px;
        }

        .mwvital-related-title h2 {
          margin: 0;

          font-size:
            clamp(31px,4vw,49px);

          letter-spacing: -.045em;
        }

        .mwvital-related-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 14px;
        }

        .mwvital-related-card {
          min-height: 245px;

          display: flex;
          flex-direction: column;

          padding: 24px;

          border:
            1px solid
            var(--mwvital-border);

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

        .mwvital-related-card:hover {
          transform:
            translateY(-4px);

          border-color:
            rgba(8,185,244,.3);
        }

        .mwvital-related-card:nth-child(even):hover {
          border-color:
            rgba(255,121,0,.3);
        }

        .mwvital-related-card h3 {
          margin: 0;

          font-size: 18px;
          line-height: 1.3;
        }

        .mwvital-related-card p {
          margin: 13px 0 0;

          color:
            var(--mwvital-muted);

          font-size: 12px;
          line-height: 1.65;
        }

        .mwvital-related-link {
          display: flex;
          align-items: center;
          gap: 7px;

          margin-top: auto;
          padding-top: 21px;

          color:
            var(--mwvital-blue-light);

          font-size: 11px;
          font-weight: 850;
        }

        .mwvital-related-card:nth-child(even)
          .mwvital-related-link {
          color:
            var(--mwvital-orange-light);
        }

        .mwvital-related-link svg {
          width: 15px;
          height: 15px;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1050px) {
          .mwvital-hero-inner {
            grid-template-columns: 1fr;
          }

          .mwvital-hero-copy {
            text-align: center;
          }

          .mwvital-label {
            margin-left: auto;
            margin-right: auto;
          }

          .mwvital-description {
            margin-left: auto;
            margin-right: auto;
          }

          .mwvital-meta {
            justify-content: center;
          }

          .mwvital-related-grid {
            grid-template-columns:
              repeat(2,1fr);
          }

          .mwvital-related-card:last-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 850px) {
          .mwvital-layout {
            grid-template-columns: 1fr;
          }

          .mwvital-toc {
            position: static;

            display: grid;

            grid-template-columns:
              repeat(2,1fr);

            gap: 0 20px;
          }

          .mwvital-toc-title,
          .mwvital-toc-cta {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 700px) {
          .mwvital-hero-inner {
            padding: 70px 16px;
          }

          .mwvital-hero h1 {
            font-size:
              clamp(43px,13vw,65px);
          }

          .mwvital-article-section {
            padding: 70px 16px 85px;
          }

          .mwvital-business-grid,
          .mwvital-related-grid {
            grid-template-columns: 1fr;
          }

          .mwvital-related-card:last-child {
            grid-column: auto;
          }

          .mwvital-related-section {
            padding: 70px 16px;
          }
        }

        @media (max-width: 560px) {
          .mwvital-reason-card {
            grid-template-columns: 1fr;
          }

          .mwvital-reason-icon {
            width: 58px;
            height: 58px;
          }
        }

        @media (max-width: 500px) {
          .mwvital-stage {
            min-height: 445px;

            transform:
              scale(.9);

            margin: -10px -20px;
          }

          .mwvital-flow {
            grid-template-columns: 1fr;
          }

          .mwvital-toc {
            grid-template-columns: 1fr;
          }

          .mwvital-toc-title,
          .mwvital-toc-cta {
            grid-column: auto;
          }

          .mwvital-section p {
            font-size: 15px;
          }
        }
      `}</style>

      {/* ======================================================
          BREADCRUMBS
      ====================================================== */}

      <div className="mwvital-breadcrumb-wrap">
        <nav
          className="mwvital-breadcrumbs"
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
            7 Reasons Small Business Websites Are Vital
          </span>
        </nav>
      </div>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="mwvital-hero">
        <div className="mwvital-hero-inner">
          <div className="mwvital-hero-copy">
            <div className="mwvital-label">
              <BookOpen />
              Website & Business Education
            </div>

            <h1>
              7 Reasons Why{" "}
              <span className="mwvital-blue">
                Small Business Websites
              </span>{" "}
              Are{" "}
              <span className="mwvital-orange">
                Vital
              </span>
            </h1>

            <p className="mwvital-description">
              A website is more than an online
              business card. It can become the
              central public layer connecting
              your services, search presence,
              customer inquiries, marketing,
              content, and future business
              technology.
            </p>

            <div className="mwvital-meta">
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
            className="mwvital-stage"
            aria-hidden="true"
          >
            <div className="mwvital-console">
              <div className="mwvital-console-top">
                <strong>
                  SMALL BUSINESS // DIGITAL HUB
                </strong>

                <span className="mwvital-live">
                  ONLINE
                </span>
              </div>

              <div className="mwvital-business-card">
                <span>
                  BUSINESS WEBSITE
                </span>

                <div className="mwvital-business-title">
                  <Globe2 />
                  Your Business Has a Home
                </div>

                <p>
                  Services → Search → Trust →
                  Leads → Customers → Growth
                </p>
              </div>

              <div className="mwvital-flow">
                <div className="mwvital-flow-card">
                  <SearchCheck />
                  <strong>
                    DISCOVER
                  </strong>
                </div>

                <div className="mwvital-flow-card">
                  <ShieldCheck />
                  <strong>
                    TRUST
                  </strong>
                </div>

                <div className="mwvital-flow-card">
                  <MessageSquare />
                  <strong>
                    CONTACT
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

      <article className="mwvital-article-section">
        <div className="mwvital-layout">
          {/* ==================================================
              TOC
          ================================================== */}

          <aside className="mwvital-toc">
            <div className="mwvital-toc-title">
              <BookOpen />
              In This Article
            </div>

            <a href="#short-answer">
              Short Answer
            </a>

            <a href="#seven-reasons">
              Seven Reasons
            </a>

            <a href="#website-foundation">
              Website Foundation
            </a>

            <a href="#website-vs-social">
              Website vs Social Media
            </a>

            <a href="#business-types">
              Business Examples
            </a>

            <a href="#growth">
              Future Growth
            </a>

            <a href="#maine">
              Maine Businesses
            </a>

            <a href="#faq">
              FAQs
            </a>

            <div className="mwvital-toc-cta">
              <Link href="/small-business-websites">
                Small Business Websites →
              </Link>
            </div>
          </aside>

          <div className="mwvital-content">
            {/* =================================================
                SHORT ANSWER
            ================================================= */}

            <section
              className="mwvital-answer"
              id="short-answer"
            >
              <div className="mwvital-answer-label">
                <Zap />
                Short Answer
              </div>

              <h2>
                Why Is a Website Important for a
                Small Business?
              </h2>

              <p>
                <strong>
                  A website gives a small
                  business a controlled public
                  place to explain its services,
                  build trust, appear in search,
                  support marketing, collect
                  inquiries, and connect future
                  digital systems.
                </strong>{" "}
                It does not automatically create
                traffic or customers, but it
                provides infrastructure that many
                other business and marketing
                activities can build on.
              </p>
            </section>

            {/* =================================================
                SEVEN REASONS
            ================================================= */}

            <section
              className="mwvital-section"
              id="seven-reasons"
            >
              <h2>
                Seven Reasons a Website Still{" "}
                <span className="mwvital-blue">
                  Matters
                </span>
              </h2>

              <p>
                A small-business website should
                not exist simply because
                “businesses are supposed to have
                websites.”
              </p>

              <p>
                It should perform useful work.
              </p>

              <div className="mwvital-reason-grid">
                {reasons.map(
                  (reason) => {
                    const Icon =
                      reason.icon;

                    return (
                      <div
                        className="mwvital-reason-card"
                        key={reason.number}
                      >
                        <div className="mwvital-reason-icon">
                          <Icon />
                        </div>

                        <div>
                          <div className="mwvital-reason-number">
                            REASON {reason.number}
                          </div>

                          <h3>
                            {reason.title}
                          </h3>

                          <p>
                            {reason.text}
                          </p>
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
              className="mwvital-section"
              id="website-foundation"
            >
              <h2>
                What Should a Small-Business
                Website{" "}
                <span className="mwvital-orange">
                  Actually Contain?
                </span>
              </h2>

              <p>
                A useful website does not need to
                begin with dozens of pages.
              </p>

              <p>
                It needs the right information
                arranged clearly.
              </p>

              <ul className="mwvital-checklist">
                {foundationItems.map(
                  (item) => (
                    <li key={item}>
                      <CheckCircle2 />
                      {item}
                    </li>
                  )
                )}
              </ul>

              <p>
                Additional pages and features
                should be added when the business
                has a genuine reason for them.
              </p>

              <div className="mwvital-buttons">
                <Link
                  href="/8-things-every-small-business-website-needs"
                  className="mwvital-btn mwvital-btn-blue"
                >
                  See the Website Checklist
                  <ArrowRight />
                </Link>
              </div>
            </section>

            {/* =================================================
                WEBSITE VS SOCIAL
            ================================================= */}

            <section
              className="mwvital-section"
              id="website-vs-social"
            >
              <h2>
                Your Website and Social Media Do{" "}
                <span className="mwvital-blue">
                  Different Jobs
                </span>
              </h2>

              <p>
                A Facebook page, LinkedIn
                profile, Google Business Profile,
                or other platform can absolutely
                help a small business.
              </p>

              <p>
                The mistake is assuming every
                channel must replace the others.
              </p>

              <p>
                Your website can serve as the
                central destination while social
                media, local listings, referrals,
                and other channels help people
                discover it.
              </p>

              <div className="mwvital-table-wrap">
                <table className="mwvital-table">
                  <thead>
                    <tr>
                      <th>
                        Channel
                      </th>

                      <th>
                        Control
                      </th>

                      <th>
                        Main Role
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {channelComparison.map(
                      (item) => (
                        <tr key={item.channel}>
                          <td>
                            {item.channel}
                          </td>

                          <td>
                            {item.control}
                          </td>

                          <td>
                            {item.purpose}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>

              <div className="mwvital-callout">
                <div className="mwvital-callout-icon">
                  <Globe2 />
                </div>

                <h3>
                  Build a Hub, Not an Island
                </h3>

                <p>
                  Your website does not need to
                  replace every marketing
                  platform. The stronger strategy
                  is often to let those channels
                  support one another while the
                  website remains a stable source
                  of business information.
                </p>
              </div>
            </section>

            {/* =================================================
                BUSINESS TYPES
            ================================================= */}

            <section
              className="mwvital-section"
              id="business-types"
            >
              <h2>
                The Website&apos;s Job Changes by{" "}
                <span className="mwvital-orange">
                  Business Type
                </span>
              </h2>

              <p>
                There is no reason a contractor,
                property manager, consultant,
                restaurant, technology company,
                and software business should all
                have the same website.
              </p>

              <div className="mwvital-business-grid">
                {businessTypes.map(
                  (item) => (
                    <div
                      className="mwvital-business-type"
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
            </section>

            {/* =================================================
                GROWTH
            ================================================= */}

            <section
              className="mwvital-section"
              id="growth"
            >
              <h2>
                A Website Can Become a{" "}
                <span className="mwvital-blue">
                  Business System
                </span>
              </h2>

              <p>
                One of the biggest advantages of
                treating the website seriously is
                that it can grow beyond normal
                marketing pages.
              </p>

              <p>
                A business might begin with:
              </p>

              <p>
                <strong>
                  Services → About → Contact.
                </strong>
              </p>

              <p>
                Later, the same digital
                foundation can connect to:
              </p>

              <ul className="mwvital-checklist">
                <li>
                  <CheckCircle2 />
                  Quote forms
                </li>

                <li>
                  <CheckCircle2 />
                  Booking requests
                </li>

                <li>
                  <CheckCircle2 />
                  CRM dashboards
                </li>

                <li>
                  <CheckCircle2 />
                  Customer records
                </li>

                <li>
                  <CheckCircle2 />
                  Payments
                </li>

                <li>
                  <CheckCircle2 />
                  Analytics
                </li>

                <li>
                  <CheckCircle2 />
                  Marketing attribution
                </li>

                <li>
                  <CheckCircle2 />
                  Automation
                </li>

                <li>
                  <CheckCircle2 />
                  APIs and integrations
                </li>

                <li>
                  <CheckCircle2 />
                  Custom software
                </li>
              </ul>

              <div className="mwvital-callout">
                <div className="mwvital-callout-icon">
                  <Workflow />
                </div>

                <h3>
                  Start Useful. Expand When
                  Justified.
                </h3>

                <p>
                  A small business does not need
                  enterprise software on day one.
                  Build the foundation that
                  solves today&apos;s problem and
                  expand when real business needs
                  justify the next stage.
                </p>
              </div>
            </section>

            {/* =================================================
                MAINE
            ================================================= */}

            <section
              className="mwvital-section"
              id="maine"
            >
              <h2>
                Websites for{" "}
                <span className="mwvital-orange">
                  Maine Small Businesses
                </span>
              </h2>

              <p>
                Local businesses often depend on
                a combination of word of mouth,
                repeat customers, community
                reputation, search, social media,
                and local discovery.
              </p>

              <p>
                A website can support those
                channels by giving customers a
                consistent place to verify the
                business, understand services,
                check legitimate service-area
                information, and make contact.
              </p>

              <p>
                Matthew Web&apos;s near-term
                website-service focus includes
                Maine small businesses that have
                no website or are dealing with
                websites that are outdated,
                broken, slow, difficult to use on
                phones, incomplete, or unclear.
              </p>

              <div className="mwvital-buttons">
                <Link
                  href="/small-business-websites"
                  className="mwvital-btn mwvital-btn-blue"
                >
                  Small Business Websites
                  <ArrowRight />
                </Link>

                <Link
                  href="/website-design"
                  className="mwvital-btn mwvital-btn-dark"
                >
                  Website Design
                </Link>
              </div>
            </section>

            {/* =================================================
                FAQ
            ================================================= */}

            <section
              className="mwvital-section"
              id="faq"
            >
              <h2>
                Small Business Website{" "}
                <span className="mwvital-blue">
                  FAQs
                </span>
              </h2>

              <div className="mwvital-faq-grid">
                {faqs.map(
                  (item) => (
                    <div
                      className="mwvital-faq-card"
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

            <section className="mwvital-article-cta">
              <h2>
                Your Website Should Be a{" "}
                <span className="mwvital-orange">
                  Useful Business Asset.
                </span>
              </h2>

              <p>
                Matthew Web builds small-business
                websites around real services,
                mobile usability, lead capture,
                search-ready structure,
                deployment, business
                functionality, and room for
                future growth.
              </p>

              <div className="mwvital-buttons">
                <Link
                  href="/contact-us"
                  className="mwvital-btn mwvital-btn-orange"
                >
                  Start a Website Project
                  <ArrowRight />
                </Link>

                <Link
                  href="/small-business-websites"
                  className="mwvital-btn mwvital-btn-blue"
                >
                  Small Business Websites
                </Link>

                <Link
                  href="/pricing"
                  className="mwvital-btn mwvital-btn-dark"
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

      <section className="mwvital-related-section">
        <div className="mwvital-related-inner">
          <div className="mwvital-related-title">
            <span>
              <Sparkles />
              Continue Reading
            </span>

            <h2>
              Related{" "}
              <span className="mwvital-blue">
                Articles
              </span>
            </h2>
          </div>

          <div className="mwvital-related-grid">
            {relatedArticles.map(
              (article) => (
                <Link
                  href={article.href}
                  className="mwvital-related-card"
                  key={article.href}
                >
                  <h3>
                    {article.title}
                  </h3>

                  <p>
                    {article.text}
                  </p>

                  <div className="mwvital-related-link">
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
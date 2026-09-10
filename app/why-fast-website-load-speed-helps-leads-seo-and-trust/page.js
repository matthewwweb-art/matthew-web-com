import Link from "next/link";

import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Code2,
  Gauge,
  Globe2,
  Image,
  Layers3,
  MonitorSmartphone,
  MousePointerClick,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/* ============================================================
   METADATA
============================================================ */

export const metadata = {
  title:
    "Why Fast Website Load Speed Helps Leads, SEO, and Trust | Matthew Web",

  description:
    "Learn why website performance matters for small businesses, including mobile usability, customer experience, lead conversion paths, search quality, Core Web Vitals, images, scripts, hosting, and technical trust.",

  alternates: {
    canonical:
      "https://matthew-web.com/why-fast-website-load-speed-helps-leads-seo-and-trust",
  },

  openGraph: {
    title:
      "Why Fast Website Load Speed Helps Leads, SEO, and Trust | Matthew Web",

    description:
      "A practical guide to website speed, mobile performance, customer experience, technical SEO, images, scripts, Core Web Vitals, and conversion paths.",

    url:
      "https://matthew-web.com/why-fast-website-load-speed-helps-leads-seo-and-trust",

    siteName:
      "Matthew Web",

    type:
      "article",
  },
};

/* ============================================================
   WHY SPEED MATTERS
============================================================ */

const speedBenefits = [
  {
    icon:
      MonitorSmartphone,

    title:
      "Better Mobile Experience",

    text:
      "A customer on a phone may be using cellular data, weaker Wi-Fi, an older device, or a busy connection. Efficient pages make the site easier to use under less-than-perfect conditions.",
  },

  {
    icon:
      MousePointerClick,

    title:
      "Clearer Conversion Path",

    text:
      "Visitors can move through services, pricing, project information, contact forms, and calls to action more easily when the interface responds without unnecessary delay.",
  },

  {
    icon:
      ShieldCheck,

    title:
      "More Professional Experience",

    text:
      "A website that loads and responds reliably generally feels more intentional than one that repeatedly stalls, jumps around, or makes visitors wait for basic information.",
  },

  {
    icon:
      SearchCheck,

    title:
      "Stronger Technical Foundation",

    text:
      "Performance is one part of overall website quality. Search engines evaluate many signals, and good performance supports a technically healthier site without guaranteeing rankings.",
  },

  {
    icon:
      Gauge,

    title:
      "Less Technical Waste",

    text:
      "Performance work often exposes oversized images, unnecessary scripts, unused code, excessive animations, inefficient loading behavior, or other resources that do not provide enough value.",
  },

  {
    icon:
      Globe2,

    title:
      "More Consistent Access",

    text:
      "A lighter, more efficient website can be easier to access across different devices, networks, and customer environments.",
  },
];

/* ============================================================
   COMMON PERFORMANCE PROBLEMS
============================================================ */

const performanceProblems = [
  {
    icon:
      Image,

    title:
      "Oversized Images",

    text:
      "Uploading large photographs directly from a camera or phone can add unnecessary file weight when the image will only be displayed at a much smaller size.",
  },

  {
    icon:
      Code2,

    title:
      "Too Much JavaScript",

    text:
      "Large client-side bundles, unnecessary libraries, excessive third-party widgets, and code that does not need to run in the browser can add loading and processing work.",
  },

  {
    icon:
      Layers3,

    title:
      "Too Many Third-Party Tools",

    text:
      "Analytics, advertising, chat widgets, tracking systems, embedded media, social tools, and other services can each add network requests and execution work.",
  },

  {
    icon:
      Sparkles,

    title:
      "Animation Without a Purpose",

    text:
      "Motion can improve a design, but excessive visual effects can add rendering work and distract from the customer journey when they are used everywhere.",
  },

  {
    icon:
      Clock3,

    title:
      "Slow External Services",

    text:
      "A website can depend on APIs, fonts, scripts, embeds, databases, or other services outside the main application. Delays in those systems can affect the user experience.",
  },

  {
    icon:
      Target,

    title:
      "Poor Loading Priorities",

    text:
      "A page should prioritize the content the visitor needs first rather than making every image, script, animation, or below-the-fold element compete for attention immediately.",
  },
];

/* ============================================================
   CORE WEB VITALS
============================================================ */

const webVitals = [
  {
    title:
      "Loading Performance",

    text:
      "How quickly important visible content becomes available to the visitor.",
  },

  {
    title:
      "Interaction Responsiveness",

    text:
      "How quickly the page responds when a person clicks, taps, types, or otherwise interacts with the interface.",
  },

  {
    title:
      "Visual Stability",

    text:
      "How stable the layout remains while the page loads so buttons, text, and other content do not unexpectedly jump around.",
  },
];

/* ============================================================
   OPTIMIZATION AREAS
============================================================ */

const optimizationAreas = [
  "Resize images for their actual display needs",
  "Use efficient modern image delivery where appropriate",
  "Avoid loading unnecessary scripts",
  "Reduce unused client-side code",
  "Lazy-load noncritical content where appropriate",
  "Prioritize above-the-fold information",
  "Keep animations purposeful",
  "Use efficient fonts and font-loading strategies",
  "Review third-party embeds and trackers",
  "Use caching and platform delivery features appropriately",
  "Test mobile layouts on realistic screen sizes",
  "Watch for layout shifts",
  "Review forms and interactive elements for responsiveness",
  "Measure performance after major website changes",
];

/* ============================================================
   PERFORMANCE PROCESS
============================================================ */

const performanceProcess = [
  {
    number:
      "01",

    title:
      "Build Efficiently",

    text:
      "Start with a reasonable architecture instead of waiting until the end to remove unnecessary technical weight.",
  },

  {
    number:
      "02",

    title:
      "Optimize Media",

    text:
      "Prepare images and other media according to how they are actually displayed rather than serving unnecessarily large files.",
  },

  {
    number:
      "03",

    title:
      "Control Scripts",

    text:
      "Keep track of analytics, advertising, embeds, widgets, libraries, and other browser-side code as the site grows.",
  },

  {
    number:
      "04",

    title:
      "Test Mobile",

    text:
      "Evaluate the site on smaller screens and under realistic conditions instead of assuming desktop performance represents every visitor.",
  },

  {
    number:
      "05",

    title:
      "Measure",

    text:
      "Use browser tools and performance reports to identify actual bottlenecks instead of guessing which element is responsible.",
  },

  {
    number:
      "06",

    title:
      "Protect Performance Over Time",

    text:
      "Recheck performance after adding major content, analytics, ads, integrations, animations, plugins, or other functionality.",
  },
];

/* ============================================================
   PERFORMANCE VS BUSINESS
============================================================ */

const businessConnections = [
  {
    title:
      "Service Pages",

    text:
      "A customer should be able to reach the information needed to understand a service without waiting on unrelated visual elements.",
  },

  {
    title:
      "Contact Forms",

    text:
      "The form should appear, respond, validate, and submit reliably so the lead path does not create unnecessary friction.",
  },

  {
    title:
      "Phone Calls",

    text:
      "Mobile visitors should be able to reach a visible phone link quickly when calling is the preferred customer action.",
  },

  {
    title:
      "Project Galleries",

    text:
      "Real project photos can build trust, but large galleries should be delivered carefully so proof does not become a performance problem.",
  },

  {
    title:
      "Articles",

    text:
      "Educational content should remain readable and accessible without requiring unnecessary interactive code just to display normal information.",
  },

  {
    title:
      "Custom Software",

    text:
      "Dashboards and applications may require more client-side functionality, making loading strategy and interaction responsiveness even more important.",
  },
];

/* ============================================================
   FAQ
============================================================ */

const faqs = [
  {
    q:
      "Does website speed affect SEO?",

    a:
      "Performance is one part of a website's overall technical and user-experience quality. Search rankings depend on many factors, so a faster website does not automatically rank higher, but poor performance can still create technical and usability problems worth fixing.",
  },

  {
    q:
      "Does a fast website guarantee more leads?",

    a:
      "No. Website speed cannot guarantee leads or sales. A faster and more responsive site can reduce unnecessary friction, but customer demand, offer quality, pricing, trust, content, competition, and many other factors also affect conversion.",
  },

  {
    q:
      "What usually makes a website slow?",

    a:
      "Common causes include oversized images, excessive scripts, large client-side bundles, third-party embeds, inefficient fonts, heavy video, unnecessary animation, slow external services, and poor loading priorities.",
  },

  {
    q:
      "Are animations bad for website performance?",

    a:
      "Not automatically. Well-designed animations can improve a website. Problems arise when motion is excessive, technically expensive, distracting, or loaded in ways that interfere with important content and interactions.",
  },

  {
    q:
      "Should every website aim for a perfect performance score?",

    a:
      "Performance tools are useful diagnostics, but a numeric score is not the entire business objective. The goal is a fast, usable, accessible, reliable site that supports its actual content and functionality.",
  },

  {
    q:
      "Can Matthew Web help improve website performance?",

    a:
      "Matthew Web can review website structure, images, mobile behavior, scripts, code, loading patterns, technical architecture, and other factors that may affect performance.",
  },
];

/* ============================================================
   RELATED ARTICLES
============================================================ */

const relatedArticles = [
  {
    title:
      "How Matthew Web Builds SEO-Ready Small Business Websites",

    href:
      "/how-matthew-web-builds-seo-ready-small-business-websites",

    text:
      "See how performance fits into the broader technical search and website architecture process.",
  },

  {
    title:
      "Why Google Indexing Matters After Launching a New Website",

    href:
      "/why-google-indexing-matters-after-launching-a-new-website",

    text:
      "Learn the difference between making a site public, getting crawled, being indexed, and actually ranking.",
  },

  {
    title:
      "What Every Contractor Website Needs to Generate Leads",

    href:
      "/what-every-contractor-website-needs-to-generate-leads",

    text:
      "See why mobile usability, project photos, clear contact paths, and performance matter for local service businesses.",
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
    "Why Fast Website Load Speed Helps Leads, SEO, and Trust",

  description:
    "A practical explanation of how website performance affects mobile usability, customer experience, conversion paths, technical SEO, and trust.",

  mainEntityOfPage: {
    "@type":
      "WebPage",

    "@id":
      "https://matthew-web.com/why-fast-website-load-speed-helps-leads-seo-and-trust",
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
        "Why Fast Website Load Speed Helps Leads, SEO, and Trust",

      item:
        "https://matthew-web.com/why-fast-website-load-speed-helps-leads-seo-and-trust",
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

export default function WebsitePerformanceArticlePage() {
  return (
    <main className="mwperf-page">
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
          --mwperf-black: #020304;
          --mwperf-muted: #aebbc5;
          --mwperf-blue: #08b9f4;
          --mwperf-blue-light: #38d7ff;
          --mwperf-orange: #ff7900;
          --mwperf-orange-light: #ffab31;
          --mwperf-green: #35e07e;
          --mwperf-border: rgba(255,255,255,.09);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--mwperf-black);
        }

        .mwperf-page {
          min-height: 100vh;
          overflow: hidden;
          color: #ffffff;
          background: var(--mwperf-black);
        }

        .mwperf-blue {
          color: var(--mwperf-blue-light);
        }

        .mwperf-orange {
          color: var(--mwperf-orange);
        }

        /* =====================================================
           BREADCRUMBS
        ===================================================== */

        .mwperf-breadcrumb-wrap {
          border-bottom: 1px solid rgba(255,255,255,.06);
          background: #04080b;
        }

        .mwperf-breadcrumbs {
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

        .mwperf-breadcrumbs a {
          color: #8799a3;
          text-decoration: none;
        }

        .mwperf-breadcrumbs a:hover {
          color: var(--mwperf-blue-light);
        }

        .mwperf-breadcrumbs svg {
          width: 12px;
          height: 12px;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwperf-hero {
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

        .mwperf-hero::before {
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

        .mwperf-hero-inner {
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

        .mwperf-label {
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

        .mwperf-label svg {
          width: 16px;
          height: 16px;
        }

        .mwperf-hero h1 {
          max-width: 980px;
          margin: 0;
          font-size: clamp(48px,5.6vw,84px);
          line-height: .99;
          letter-spacing: -.06em;
        }

        .mwperf-description {
          max-width: 800px;
          margin: 25px 0 0;
          color: #b8c6cf;
          font-size: clamp(16px,1.4vw,20px);
          line-height: 1.75;
        }

        .mwperf-meta {
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
           PERFORMANCE VISUAL
        ===================================================== */

        .mwperf-stage {
          min-height: 470px;
          display: grid;
          place-items: center;
        }

        .mwperf-console {
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

        .mwperf-console-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .mwperf-console-top strong {
          color: #81929d;
          font-size: 9px;
          letter-spacing: .12em;
        }

        .mwperf-live {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #8da0aa;
          font-size: 8px;
          font-weight: 900;
        }

        .mwperf-live::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--mwperf-green);
          box-shadow: 0 0 7px rgba(53,224,126,.7);
        }

        .mwperf-main-gauge {
          padding: 23px;
          border: 1px solid rgba(255,121,0,.17);
          border-radius: 12px;
          background: #071015;
        }

        .mwperf-gauge-label {
          color: #647781;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: .09em;
          text-transform: uppercase;
        }

        .mwperf-gauge-row {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-top: 12px;
        }

        .mwperf-gauge-icon {
          width: 72px;
          height: 72px;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          border: 1px solid rgba(8,185,244,.25);
          border-radius: 50%;
          color: var(--mwperf-blue-light);
          background: rgba(8,185,244,.05);
        }

        .mwperf-gauge-icon svg {
          width: 37px;
          height: 37px;
        }

        .mwperf-gauge-copy strong {
          display: block;
          font-size: 20px;
        }

        .mwperf-gauge-copy span {
          display: block;
          margin-top: 6px;
          color: #788b95;
          font-size: 9px;
          line-height: 1.55;
        }

        .mwperf-mini-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 9px;
          margin-top: 10px;
        }

        .mwperf-mini-card {
          min-height: 91px;
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

        .mwperf-mini-card:nth-child(even) {
          border-color: rgba(255,121,0,.14);
        }

        .mwperf-mini-card svg {
          width: 21px;
          height: 21px;
          color: var(--mwperf-blue-light);
        }

        .mwperf-mini-card:nth-child(even) svg {
          color: var(--mwperf-orange-light);
        }

        .mwperf-mini-card strong {
          font-size: 8px;
          letter-spacing: .05em;
        }

        /* =====================================================
           ARTICLE
        ===================================================== */

        .mwperf-article-section {
          padding:
            95px
            clamp(20px,5vw,80px)
            110px;
          background: #020304;
        }

        .mwperf-layout {
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

        .mwperf-toc {
          position: sticky;
          top: 30px;
          padding: 23px;
          border: 1px solid var(--mwperf-border);
          border-radius: 14px;
          background:
            linear-gradient(
              145deg,
              #09131a,
              #04080b
            );
        }

        .mwperf-toc-title {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 15px;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .mwperf-toc-title svg {
          width: 16px;
          height: 16px;
          color: var(--mwperf-blue-light);
        }

        .mwperf-toc a {
          display: block;
          padding: 8px 0;
          color: #8799a3;
          text-decoration: none;
          font-size: 12px;
          line-height: 1.45;
        }

        .mwperf-toc a:hover {
          color: var(--mwperf-blue-light);
        }

        .mwperf-toc-cta {
          margin-top: 18px;
          padding-top: 17px;
          border-top: 1px solid rgba(255,255,255,.07);
        }

        .mwperf-toc-cta a {
          color: var(--mwperf-orange-light);
          font-weight: 850;
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .mwperf-content {
          min-width: 0;
        }

        .mwperf-section {
          margin-bottom: 62px;
          scroll-margin-top: 35px;
        }

        .mwperf-section h2 {
          margin: 0 0 20px;
          font-size: clamp(30px,3.5vw,48px);
          line-height: 1.08;
          letter-spacing: -.045em;
        }

        .mwperf-section h3 {
          margin: 32px 0 12px;
          color: var(--mwperf-blue-light);
          font-size: 21px;
          line-height: 1.3;
        }

        .mwperf-section p {
          margin: 0 0 19px;
          color: #b6c3ca;
          font-size: 16px;
          line-height: 1.85;
        }

        .mwperf-section strong {
          color: #ffffff;
        }

        /* =====================================================
           ANSWER
        ===================================================== */

        .mwperf-answer {
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

        .mwperf-answer-label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          color: var(--mwperf-blue-light);
          font-size: 9px;
          font-weight: 950;
          letter-spacing: .11em;
          text-transform: uppercase;
        }

        .mwperf-answer-label svg {
          width: 17px;
          height: 17px;
        }

        .mwperf-answer h2 {
          margin: 0 0 12px;
          font-size: clamp(24px,3vw,36px);
          line-height: 1.1;
        }

        .mwperf-answer p {
          margin: 0;
          color: #b7c5cc;
          font-size: 15px;
          line-height: 1.75;
        }

        /* =====================================================
           BENEFITS / PROBLEMS
        ===================================================== */

        .mwperf-card-grid {
          display: grid;
          grid-template-columns: repeat(2,minmax(0,1fr));
          gap: 14px;
          margin-top: 27px;
        }

        .mwperf-info-card {
          min-height: 245px;
          padding: 23px;
          border: 1px solid rgba(8,185,244,.14);
          border-radius: 14px;
          background: rgba(8,185,244,.018);
        }

        .mwperf-info-card:nth-child(even) {
          border-color: rgba(255,121,0,.14);
          background: rgba(255,121,0,.016);
        }

        .mwperf-info-card svg {
          width: 30px;
          height: 30px;
          margin-bottom: 16px;
          color: var(--mwperf-blue-light);
        }

        .mwperf-info-card:nth-child(even) svg {
          color: var(--mwperf-orange-light);
        }

        .mwperf-info-card h3 {
          margin: 0 0 10px;
          color: #ffffff;
          font-size: 18px;
        }

        .mwperf-info-card p {
          margin: 0;
          color: var(--mwperf-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           WEB VITALS
        ===================================================== */

        .mwperf-vitals {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 14px;
          margin-top: 28px;
        }

        .mwperf-vital-card {
          min-height: 235px;
          padding: 24px;
          border: 1px solid rgba(8,185,244,.15);
          border-radius: 14px;
          background:
            linear-gradient(
              145deg,
              #0a1218,
              #04080b
            );
        }

        .mwperf-vital-card:nth-child(even) {
          border-color: rgba(255,121,0,.16);
        }

        .mwperf-vital-label {
          margin-bottom: 12px;
          color: var(--mwperf-blue-light);
          font-size: 9px;
          font-weight: 950;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .mwperf-vital-card:nth-child(even)
          .mwperf-vital-label {
          color: var(--mwperf-orange-light);
        }

        .mwperf-vital-card h3 {
          margin: 0 0 11px;
          color: #ffffff;
          font-size: 19px;
        }

        .mwperf-vital-card p {
          margin: 0;
          color: var(--mwperf-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           CHECKLIST
        ===================================================== */

        .mwperf-checklist {
          display: grid;
          gap: 10px;
          margin: 25px 0;
          padding: 0;
          list-style: none;
        }

        .mwperf-checklist li {
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

        .mwperf-checklist svg {
          width: 17px;
          height: 17px;
          flex: 0 0 auto;
          margin-top: 1px;
          color: var(--mwperf-blue-light);
        }

        /* =====================================================
           PROCESS
        ===================================================== */

        .mwperf-process {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 12px;
          margin-top: 28px;
        }

        .mwperf-process-card {
          min-height: 225px;
          padding: 22px;
          border: 1px solid rgba(8,185,244,.14);
          border-radius: 13px;
          background: #071015;
        }

        .mwperf-process-card:nth-child(even) {
          border-color: rgba(255,121,0,.14);
        }

        .mwperf-process-number {
          margin-bottom: 14px;
          color: var(--mwperf-blue-light);
          font-size: 9px;
          font-weight: 950;
          letter-spacing: .1em;
        }

        .mwperf-process-card:nth-child(even)
          .mwperf-process-number {
          color: var(--mwperf-orange-light);
        }

        .mwperf-process-card h3 {
          margin: 0 0 9px;
          color: #ffffff;
          font-size: 18px;
        }

        .mwperf-process-card p {
          margin: 0;
          color: var(--mwperf-muted);
          font-size: 12px;
          line-height: 1.66;
        }

        /* =====================================================
           BUSINESS CONNECTIONS
        ===================================================== */

        .mwperf-business-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 12px;
          margin-top: 27px;
        }

        .mwperf-business-card {
          padding: 23px;
          border: 1px solid var(--mwperf-border);
          border-radius: 13px;
          background: #071015;
        }

        .mwperf-business-card h3 {
          margin: 0 0 9px;
          color: var(--mwperf-blue-light);
          font-size: 18px;
        }

        .mwperf-business-card:nth-child(even) h3 {
          color: var(--mwperf-orange-light);
        }

        .mwperf-business-card p {
          margin: 0;
          color: var(--mwperf-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           CALLOUT
        ===================================================== */

        .mwperf-callout {
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

        .mwperf-callout-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          margin-bottom: 15px;
          border: 1px solid rgba(255,121,0,.25);
          border-radius: 12px;
          color: var(--mwperf-orange-light);
          background: rgba(255,121,0,.045);
        }

        .mwperf-callout-icon svg {
          width: 24px;
          height: 24px;
        }

        .mwperf-callout h3 {
          margin: 0 0 10px;
          color: #ffffff;
          font-size: 22px;
        }

        .mwperf-callout p {
          margin: 0;
          color: var(--mwperf-muted);
          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           FAQ
        ===================================================== */

        .mwperf-faq-grid {
          display: grid;
          gap: 12px;
          margin-top: 27px;
        }

        .mwperf-faq-card {
          padding: 23px;
          border: 1px solid var(--mwperf-border);
          border-radius: 13px;
          background: #071015;
        }

        .mwperf-faq-card h3 {
          margin: 0 0 9px;
          color: var(--mwperf-blue-light);
          font-size: 17px;
        }

        .mwperf-faq-card:nth-child(even) h3 {
          color: var(--mwperf-orange-light);
        }

        .mwperf-faq-card p {
          margin: 0;
          color: var(--mwperf-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .mwperf-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 25px;
        }

        .mwperf-btn {
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
          transition: transform .2s ease;
        }

        .mwperf-btn:hover {
          transform: translateY(-2px);
        }

        .mwperf-btn-blue {
          border: 1px solid rgba(56,215,255,.5);
          background:
            linear-gradient(
              180deg,
              #0ab6ed,
              #0789b6
            );
        }

        .mwperf-btn-orange {
          border: 1px solid rgba(255,176,49,.55);
          background:
            linear-gradient(
              180deg,
              #ff9519,
              #f16600
            );
        }

        .mwperf-btn-dark {
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.03);
        }

        .mwperf-btn svg {
          width: 17px;
          height: 17px;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .mwperf-article-cta {
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

        .mwperf-article-cta h2 {
          max-width: 820px;
          margin: 0;
          font-size: clamp(31px,4vw,49px);
          line-height: 1.05;
          letter-spacing: -.045em;
        }

        .mwperf-article-cta p {
          max-width: 780px;
          margin: 17px 0 0;
          color: var(--mwperf-muted);
          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           RELATED
        ===================================================== */

        .mwperf-related-section {
          padding: 90px clamp(20px,5vw,80px);
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwperf-related-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        .mwperf-related-title {
          margin-bottom: 32px;
        }

        .mwperf-related-title span {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 9px;
          color: var(--mwperf-orange-light);
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .mwperf-related-title svg {
          width: 16px;
          height: 16px;
        }

        .mwperf-related-title h2 {
          margin: 0;
          font-size: clamp(31px,4vw,49px);
          letter-spacing: -.045em;
        }

        .mwperf-related-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 14px;
        }

        .mwperf-related-card {
          min-height: 245px;
          display: flex;
          flex-direction: column;
          padding: 24px;
          border: 1px solid var(--mwperf-border);
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

        .mwperf-related-card:hover {
          transform: translateY(-4px);
          border-color: rgba(8,185,244,.3);
        }

        .mwperf-related-card:nth-child(even):hover {
          border-color: rgba(255,121,0,.3);
        }

        .mwperf-related-card h3 {
          margin: 0;
          font-size: 18px;
          line-height: 1.3;
        }

        .mwperf-related-card p {
          margin: 13px 0 0;
          color: var(--mwperf-muted);
          font-size: 12px;
          line-height: 1.65;
        }

        .mwperf-related-link {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: auto;
          padding-top: 21px;
          color: var(--mwperf-blue-light);
          font-size: 11px;
          font-weight: 850;
        }

        .mwperf-related-card:nth-child(even)
          .mwperf-related-link {
          color: var(--mwperf-orange-light);
        }

        .mwperf-related-link svg {
          width: 15px;
          height: 15px;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1100px) {
          .mwperf-process,
          .mwperf-vitals {
            grid-template-columns: repeat(2,1fr);
          }

          .mwperf-vital-card:last-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 1050px) {
          .mwperf-hero-inner {
            grid-template-columns: 1fr;
          }

          .mwperf-hero-copy {
            text-align: center;
          }

          .mwperf-label {
            margin-left: auto;
            margin-right: auto;
          }

          .mwperf-description {
            margin-left: auto;
            margin-right: auto;
          }

          .mwperf-meta {
            justify-content: center;
          }

          .mwperf-related-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .mwperf-related-card:last-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 850px) {
          .mwperf-layout {
            grid-template-columns: 1fr;
          }

          .mwperf-toc {
            position: static;
            display: grid;
            grid-template-columns: repeat(2,1fr);
            gap: 0 20px;
          }

          .mwperf-toc-title,
          .mwperf-toc-cta {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 700px) {
          .mwperf-hero-inner {
            padding: 70px 16px;
          }

          .mwperf-hero h1 {
            font-size: clamp(43px,13vw,65px);
          }

          .mwperf-article-section {
            padding: 70px 16px 85px;
          }

          .mwperf-card-grid,
          .mwperf-vitals,
          .mwperf-process,
          .mwperf-business-grid,
          .mwperf-related-grid {
            grid-template-columns: 1fr;
          }

          .mwperf-vital-card:last-child,
          .mwperf-related-card:last-child {
            grid-column: auto;
          }

          .mwperf-related-section {
            padding: 70px 16px;
          }
        }

        @media (max-width: 500px) {
          .mwperf-stage {
            min-height: 460px;
            transform: scale(.9);
            margin: -10px -20px;
          }

          .mwperf-mini-grid {
            grid-template-columns: 1fr;
          }

          .mwperf-gauge-row {
            flex-direction: column;
            text-align: center;
          }

          .mwperf-toc {
            grid-template-columns: 1fr;
          }

          .mwperf-toc-title,
          .mwperf-toc-cta {
            grid-column: auto;
          }

          .mwperf-section p {
            font-size: 15px;
          }
        }
      `}</style>

      {/* ======================================================
          BREADCRUMBS
      ====================================================== */}

      <div className="mwperf-breadcrumb-wrap">
        <nav
          className="mwperf-breadcrumbs"
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
            Website Load Speed
          </span>
        </nav>
      </div>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="mwperf-hero">
        <div className="mwperf-hero-inner">
          <div className="mwperf-hero-copy">
            <div className="mwperf-label">
              <BookOpen />
              Performance • SEO • Website Education
            </div>

            <h1>
              Why{" "}
              <span className="mwperf-blue">
                Fast Website Load Speed
              </span>{" "}
              Helps Leads, SEO &{" "}
              <span className="mwperf-orange">
                Trust
              </span>
            </h1>

            <p className="mwperf-description">
              Website performance is not just a
              technical score. It affects how
              quickly customers can understand
              the business, move through the
              site, use forms, view projects, and
              reach the next step.
            </p>

            <div className="mwperf-meta">
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
            className="mwperf-stage"
            aria-hidden="true"
          >
            <div className="mwperf-console">
              <div className="mwperf-console-top">
                <strong>
                  WEBSITE // PERFORMANCE
                </strong>

                <span className="mwperf-live">
                  OPTIMIZED
                </span>
              </div>

              <div className="mwperf-main-gauge">
                <div className="mwperf-gauge-label">
                  CUSTOMER EXPERIENCE
                </div>

                <div className="mwperf-gauge-row">
                  <div className="mwperf-gauge-icon">
                    <Gauge />
                  </div>

                  <div className="mwperf-gauge-copy">
                    <strong>
                      SPEED WITH PURPOSE
                    </strong>

                    <span>
                      Load important content
                      quickly. Keep interactions
                      responsive. Avoid
                      unnecessary technical
                      weight.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mwperf-mini-grid">
                <div className="mwperf-mini-card">
                  <MonitorSmartphone />
                  <strong>
                    MOBILE
                  </strong>
                </div>

                <div className="mwperf-mini-card">
                  <Zap />
                  <strong>
                    RESPONSE
                  </strong>
                </div>

                <div className="mwperf-mini-card">
                  <SearchCheck />
                  <strong>
                    TECH SEO
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

      <article className="mwperf-article-section">
        <div className="mwperf-layout">
          {/* ==================================================
              TABLE OF CONTENTS
          ================================================== */}

          <aside className="mwperf-toc">
            <div className="mwperf-toc-title">
              <BookOpen />
              In This Article
            </div>

            <a href="#short-answer">
              Short Answer
            </a>

            <a href="#why-speed-matters">
              Why Speed Matters
            </a>

            <a href="#leads">
              Speed & Leads
            </a>

            <a href="#trust">
              Speed & Trust
            </a>

            <a href="#seo">
              Speed & SEO
            </a>

            <a href="#core-web-vitals">
              Core Web Vitals
            </a>

            <a href="#slow-sites">
              What Makes Sites Slow?
            </a>

            <a href="#optimization">
              Optimization Checklist
            </a>

            <a href="#process">
              Performance Process
            </a>

            <a href="#business">
              Business Impact
            </a>

            <a href="#faq">
              Performance FAQs
            </a>

            <div className="mwperf-toc-cta">
              <Link href="/website-design">
                Website Design Services →
              </Link>
            </div>
          </aside>

          <div className="mwperf-content">
            {/* =================================================
                SHORT ANSWER
            ================================================= */}

            <section
              className="mwperf-answer"
              id="short-answer"
            >
              <div className="mwperf-answer-label">
                <Zap />
                Short Answer
              </div>

              <h2>
                Why Does Website Speed Matter?
              </h2>

              <p>
                <strong>
                  Website speed matters because
                  customers need to reach useful
                  information and interact with
                  the site without unnecessary
                  delay.
                </strong>{" "}
                Good performance supports mobile
                usability, customer experience,
                technical SEO, accessibility,
                forms, calls to action, and the
                overall professionalism of the
                site. It does not guarantee
                rankings, leads, or sales.
              </p>
            </section>

            {/* =================================================
                WHY SPEED MATTERS
            ================================================= */}

            <section
              className="mwperf-section"
              id="why-speed-matters"
            >
              <h2>
                Performance Is Part of the{" "}
                <span className="mwperf-blue">
                  Customer Experience
                </span>
              </h2>

              <p>
                A website can have excellent
                colors, strong copy, professional
                project photos, useful services,
                and a good offer—but the visitor
                still has to be able to use it.
              </p>

              <p>
                If pages repeatedly stall,
                content jumps around during
                loading, buttons respond slowly,
                or important information waits
                behind unnecessary resources,
                technical performance becomes a
                customer-facing problem.
              </p>

              <div className="mwperf-card-grid">
                {speedBenefits.map(
                  (item) => {
                    const Icon =
                      item.icon;

                    return (
                      <div
                        className="mwperf-info-card"
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
                LEADS
            ================================================= */}

            <section
              className="mwperf-section"
              id="leads"
            >
              <h2>
                Website Speed and{" "}
                <span className="mwperf-orange">
                  Lead Generation
                </span>
              </h2>

              <p>
                A website does not create a lead
                simply because it is fast.
              </p>

              <p>
                The business still needs a useful
                offer, the right customer,
                understandable services,
                credibility, pricing or scope
                alignment, and a clear path to
                contact.
              </p>

              <p>
                Performance matters because it
                can remove unnecessary friction
                from that path.
              </p>

              <p>
                If a visitor is trying to request
                an estimate, check whether a
                contractor serves their town,
                compare services, read pricing,
                or submit a project form, the
                technology should make those
                actions easier—not harder.
              </p>

              <div className="mwperf-callout">
                <div className="mwperf-callout-icon">
                  <MousePointerClick />
                </div>

                <h3>
                  Speed Supports Conversion. It
                  Does Not Guarantee It.
                </h3>

                <p>
                  A technically fast page with a
                  weak offer or confusing content
                  can still fail to produce
                  inquiries. Performance should
                  support the broader customer
                  journey.
                </p>
              </div>
            </section>

            {/* =================================================
                TRUST
            ================================================= */}

            <section
              className="mwperf-section"
              id="trust"
            >
              <h2>
                Performance Can Affect{" "}
                <span className="mwperf-blue">
                  Perceived Quality
                </span>
              </h2>

              <p>
                Customers may not know what
                framework, hosting platform, or
                image format a website uses.
              </p>

              <p>
                They do notice whether it works.
              </p>

              <p>
                A business website should feel
                intentional and dependable.
                Important text should appear
                correctly. Navigation should
                respond. Forms should work.
                Images should load reasonably.
                Buttons should remain where the
                visitor expects them.
              </p>

              <p>
                That technical stability becomes
                part of the overall impression of
                the business.
              </p>

              <div className="mwperf-callout">
                <div className="mwperf-callout-icon">
                  <ShieldCheck />
                </div>

                <h3>
                  Trust Is Bigger Than Speed
                </h3>

                <p>
                  Performance alone cannot prove
                  that a business is legitimate.
                  Real business information,
                  honest claims, useful content,
                  customer proof, secure systems,
                  and professional communication
                  still matter.
                </p>
              </div>
            </section>

            {/* =================================================
                SEO
            ================================================= */}

            <section
              className="mwperf-section"
              id="seo"
            >
              <h2>
                Does Website Speed Help{" "}
                <span className="mwperf-orange">
                  SEO?
                </span>
              </h2>

              <p>
                Performance belongs inside the
                broader technical SEO system.
              </p>

              <p>
                Search engines evaluate many
                factors when deciding how pages
                should be handled and ranked.
                Performance does not replace
                relevant content, good page
                structure, internal links,
                authority, local relevance,
                indexing, or other search
                factors.
              </p>

              <p>
                The useful way to think about
                performance is:
              </p>

              <p>
                <strong>
                  A slow or unstable website can
                  create avoidable technical and
                  user-experience problems.
                </strong>
              </p>

              <p>
                Fixing those problems makes the
                overall website stronger even
                though it cannot guarantee a
                particular ranking position.
              </p>

              <div className="mwperf-buttons">
                <Link
                  href="/how-matthew-web-builds-seo-ready-small-business-websites"
                  className="mwperf-btn mwperf-btn-blue"
                >
                  Learn About SEO-Ready Websites
                  <ArrowRight />
                </Link>
              </div>
            </section>

            {/* =================================================
                CORE WEB VITALS
            ================================================= */}

            <section
              className="mwperf-section"
              id="core-web-vitals"
            >
              <h2>
                What Are{" "}
                <span className="mwperf-blue">
                  Core Web Vitals?
                </span>
              </h2>

              <p>
                Core Web Vitals are performance
                measurements intended to
                represent important parts of the
                real user experience.
              </p>

              <p>
                The concepts focus on three
                practical questions:
              </p>

              <div className="mwperf-vitals">
                {webVitals.map(
                  (item, index) => (
                    <div
                      className="mwperf-vital-card"
                      key={item.title}
                    >
                      <div className="mwperf-vital-label">
                        SIGNAL 0{index + 1}
                      </div>

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

              <p>
                These measurements are useful
                because they move the discussion
                beyond simply asking whether a
                file downloaded quickly.
              </p>

              <p>
                A page can appear quickly but
                still respond poorly to a click.
                It can load fast but shift
                content around enough to make the
                interface frustrating.
              </p>
            </section>

            {/* =================================================
                WHAT MAKES SITES SLOW
            ================================================= */}

            <section
              className="mwperf-section"
              id="slow-sites"
            >
              <h2>
                What Makes a Website{" "}
                <span className="mwperf-orange">
                  Slow?
                </span>
              </h2>

              <p>
                Performance problems rarely come
                from one universal cause.
              </p>

              <p>
                A growing website gradually
                accumulates images, analytics,
                advertising, social integrations,
                videos, scripts, custom features,
                fonts, forms, tracking tools,
                databases, and other systems.
              </p>

              <div className="mwperf-card-grid">
                {performanceProblems.map(
                  (item) => {
                    const Icon =
                      item.icon;

                    return (
                      <div
                        className="mwperf-info-card"
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
                OPTIMIZATION
            ================================================= */}

            <section
              className="mwperf-section"
              id="optimization"
            >
              <h2>
                Website Performance{" "}
                <span className="mwperf-blue">
                  Checklist
                </span>
              </h2>

              <p>
                Performance optimization should
                focus on removing unnecessary
                work while preserving the design,
                content, accessibility, analytics,
                and functionality the business
                actually needs.
              </p>

              <ul className="mwperf-checklist">
                {optimizationAreas.map(
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
                PROCESS
            ================================================= */}

            <section
              className="mwperf-section"
              id="process"
            >
              <h2>
                Matthew Web&apos;s Performance{" "}
                <span className="mwperf-orange">
                  Approach
                </span>
              </h2>

              <p>
                Performance is easier to protect
                when it is considered throughout
                development instead of waiting
                until the site becomes difficult
                to use.
              </p>

              <div className="mwperf-process">
                {performanceProcess.map(
                  (step) => (
                    <div
                      className="mwperf-process-card"
                      key={step.number}
                    >
                      <div className="mwperf-process-number">
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

              <div className="mwperf-callout">
                <div className="mwperf-callout-icon">
                  <Gauge />
                </div>

                <h3>
                  Measure Before Guessing
                </h3>

                <p>
                  Performance tools are most
                  useful when they help identify
                  specific problems. Optimization
                  should respond to evidence
                  rather than randomly removing
                  features that may not be causing
                  the issue.
                </p>
              </div>
            </section>

            {/* =================================================
                BUSINESS
            ================================================= */}

            <section
              className="mwperf-section"
              id="business"
            >
              <h2>
                Performance Connects to the{" "}
                <span className="mwperf-blue">
                  Entire Website
                </span>
              </h2>

              <div className="mwperf-business-grid">
                {businessConnections.map(
                  (item) => (
                    <div
                      className="mwperf-business-card"
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

              <h3>
                Performance vs Advertising
              </h3>

              <p>
                This becomes especially important
                as Matthew Web experiments with
                alternative website monetization.
              </p>

              <p>
                Advertising scripts can add
                network requests, layout changes,
                tracking code, and additional
                browser work.
              </p>

              <p>
                That is another reason ads should
                be used selectively on content,
                games, education, and appropriate
                free resources instead of
                covering high-intent service,
                pricing, and contact pages with
                unnecessary advertising.
              </p>

              <div className="mwperf-callout">
                <div className="mwperf-callout-icon">
                  <Target />
                </div>

                <h3>
                  Features Have a Performance
                  Budget
                </h3>

                <p>
                  Every animation, analytics
                  package, advertisement,
                  integration, image, video, and
                  widget should provide enough
                  value to justify the technical
                  cost it adds.
                </p>
              </div>
            </section>

            {/* =================================================
                FAQ
            ================================================= */}

            <section
              className="mwperf-section"
              id="faq"
            >
              <h2>
                Website Performance{" "}
                <span className="mwperf-orange">
                  FAQs
                </span>
              </h2>

              <div className="mwperf-faq-grid">
                {faqs.map(
                  (item) => (
                    <div
                      className="mwperf-faq-card"
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

            <section className="mwperf-article-cta">
              <h2>
                A Professional Website Should{" "}
                <span className="mwperf-orange">
                  Work as Good as It Looks.
                </span>
              </h2>

              <p>
                Matthew Web builds and improves
                small-business websites with
                mobile usability, responsive
                layouts, images, scripts,
                technical architecture,
                performance, search structure,
                and customer conversion paths
                considered together.
              </p>

              <div className="mwperf-buttons">
                <Link
                  href="/contact-us"
                  className="mwperf-btn mwperf-btn-orange"
                >
                  Discuss Your Website
                  <ArrowRight />
                </Link>

                <Link
                  href="/website-design"
                  className="mwperf-btn mwperf-btn-blue"
                >
                  Website Design
                </Link>

                <Link
                  href="/seo-and-indexing"
                  className="mwperf-btn mwperf-btn-dark"
                >
                  SEO & Indexing
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* ======================================================
          RELATED
      ====================================================== */}

      <section className="mwperf-related-section">
        <div className="mwperf-related-inner">
          <div className="mwperf-related-title">
            <span>
              <Sparkles />
              Continue Reading
            </span>

            <h2>
              Related{" "}
              <span className="mwperf-blue">
                Articles
              </span>
            </h2>
          </div>

          <div className="mwperf-related-grid">
            {relatedArticles.map(
              (article) => (
                <Link
                  href={article.href}
                  className="mwperf-related-card"
                  key={article.href}
                >
                  <h3>
                    {article.title}
                  </h3>

                  <p>
                    {article.text}
                  </p>

                  <div className="mwperf-related-link">
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
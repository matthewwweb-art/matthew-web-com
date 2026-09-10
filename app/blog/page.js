import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Boxes,
  BriefcaseBusiness,
  Building2,
  Code2,
  Cpu,
  Database,
  DollarSign,
  Gamepad2,
  Gauge,
  GraduationCap,
  HardHat,
  LayoutTemplate,
  MessageSquare,
  Newspaper,
  RefreshCw,
  SearchCheck,
  Share2,
  Sparkles,
  Star,
  Workflow,
} from "lucide-react";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/* ============================================================
   METADATA
============================================================ */

export const metadata = {
  title:
    "Matthew Web Blog | Websites, Software, Business & Technology",

  description:
    "Practical articles from Matthew Web covering websites, SEO, small business, software, CRM systems, automation, analytics, reviews, game development, education, computing, and technology R&D.",

  alternates: {
    canonical:
      "https://matthew-web.com/blog",
  },

  openGraph: {
    title:
      "Matthew Web Blog | Websites, Software, Business & Technology",

    description:
      "Website education, software development, business technology, SEO, analytics, reviews, game development, education, computing, R&D, and Matthew Web company progress.",

    url:
      "https://matthew-web.com/blog",

    siteName:
      "Matthew Web",

    type:
      "website",
  },
};

/* ============================================================
   CONTENT PILLARS
============================================================ */

const pillars = [
  {
    icon:
      BookOpen,

    title:
      "Website & Business Education",

    text:
      "Practical guidance about websites, marketing, analytics, customer trust, reviews, local business, SEO, performance, redesigns, and online business systems.",
  },

  {
    icon:
      BriefcaseBusiness,

    title:
      "Matthew Web Services",

    text:
      "How Matthew Web approaches website design, small-business websites, search readiness, lead generation, deployment, and digital business functionality.",
  },

  {
    icon:
      Code2,

    title:
      "Software Development",

    text:
      "CRM systems, dashboards, databases, forms, integrations, automation, custom workflows, and software built around real business problems.",
  },

  {
    icon:
      Gamepad2,

    title:
      "Game Development",

    text:
      "Development updates, design decisions, technical lessons, experiments, and progress from Matthew Web game projects.",
  },

  {
    icon:
      Cpu,

    title:
      "Computing & R&D",

    text:
      "CPU architecture, FPGA development, computing research, hardware experiments, technical tests, and longer-term technology development.",
  },

  {
    icon:
      GraduationCap,

    title:
      "Education",

    text:
      "Educational technology, computing concepts, learning tools, technical explanations, and projects designed to make technology easier to understand.",
  },

  {
    icon:
      Newspaper,

    title:
      "Matthew Web Company Progress / News",

    text:
      "Real project progress, company development, product work, launches, experiments, milestones, and what Matthew Web is building next.",
  },
];

/* ============================================================
   ALL 20 ARTICLES
============================================================ */

const articles = [
  {
    number:
      "01",

    icon:
      Code2,

    category:
      "Website & Business Education",

    title:
      "Why Custom-Coded Websites Beat DIY Website Builders",

    description:
      "Learn where custom development provides real advantages, where DIY platforms can make sense, and why the best choice depends on the actual business problem.",

    href:
      "/why-custom-coded-websites-beat-diy-website-builders",

    tags: [
      "Custom Code",
      "Website Design",
      "DIY",
    ],
  },

  {
    number:
      "02",

    icon:
      DollarSign,

    category:
      "Website & Business Education",

    title:
      "How Much Should a Small Business Website Cost in 2026?",

    description:
      "A practical explanation of website pricing, project scope, maintenance, custom software, and Matthew Web's current starting-price structure.",

    href:
      "/how-much-should-a-small-business-website-cost-in-2026",

    tags: [
      "Pricing",
      "Small Business",
      "Websites",
    ],
  },

  {
    number:
      "03",

    icon:
      HardHat,

    category:
      "Website & Business Education",

    title:
      "What Every Contractor Website Needs to Generate Leads",

    description:
      "Services, service areas, project proof, quote forms, mobile design, performance, search structure, and clear customer contact paths.",

    href:
      "/what-every-contractor-website-needs-to-generate-leads",

    tags: [
      "Contractors",
      "Lead Generation",
      "Local Business",
    ],
  },

  {
    number:
      "04",

    icon:
      LayoutTemplate,

    category:
      "Software Development",

    title:
      "Website Design vs Custom Software: What Does Your Business Need?",

    description:
      "Understand the difference between a public-facing website and custom software that manages data, workflows, dashboards, integrations, and operations.",

    href:
      "/website-design-vs-custom-software-what-does-your-business-need",

    tags: [
      "Website Design",
      "Software",
      "Business Systems",
    ],
  },

  {
    number:
      "05",

    icon:
      Database,

    category:
      "Software Development",

    title:
      "How CRM Dashboards Help Small Businesses Stop Losing Leads",

    description:
      "Learn how organized lead records, statuses, notes, follow-up dates, source tracking, and dashboards can improve customer follow-up.",

    href:
      "/how-crm-dashboards-help-small-businesses-stop-losing-leads",

    tags: [
      "CRM",
      "Leads",
      "Dashboards",
    ],
  },

  {
    number:
      "06",

    icon:
      SearchCheck,

    category:
      "Website & Business Education",

    title:
      "Why Google Indexing Matters After Launching a New Website",

    description:
      "Learn the difference between a website being live, crawled, indexed, and ranked—and what should be checked after launch.",

    href:
      "/why-google-indexing-matters-after-launching-a-new-website",

    tags: [
      "Indexing",
      "SEO",
      "Search",
    ],
  },

  {
    number:
      "07",

    icon:
      Code2,

    category:
      "Website & Business Education",

    title:
      "Raw Code vs WordPress vs Wix vs GoDaddy",

    description:
      "Compare common website-development approaches and learn why no single platform is automatically the right answer for every project.",

    href:
      "/raw-code-vs-wordpress-vs-wix-vs-godaddy",

    tags: [
      "Platforms",
      "WordPress",
      "Custom Code",
    ],
  },

  {
    number:
      "08",

    icon:
      SearchCheck,

    category:
      "Matthew Web Services",

    title:
      "How Matthew Web Builds SEO-Ready Small Business Websites",

    description:
      "See how page structure, metadata, canonicals, sitemaps, crawl controls, internal links, mobile usability, performance, and indexing preparation fit together.",

    href:
      "/how-matthew-web-builds-seo-ready-small-business-websites",

    tags: [
      "Matthew Web",
      "SEO",
      "Small Business",
    ],
  },

  {
    number:
      "09",

    icon:
      Gauge,

    category:
      "Website & Business Education",

    title:
      "Why Fast Website Load Speed Helps Leads, SEO, and Trust",

    description:
      "Learn how website performance connects to mobile usability, customer experience, technical SEO, lead paths, trust, and overall site quality.",

    href:
      "/why-fast-website-load-speed-helps-leads-seo-and-trust",

    tags: [
      "Performance",
      "SEO",
      "User Experience",
    ],
  },

  {
    number:
      "10",

    icon:
      Workflow,

    category:
      "Software Development",

    title:
      "How Booking Forms, Quote Forms & Automation Help Local Businesses",

    description:
      "Turn website forms into practical workflows using lead records, notifications, follow-up systems, CRM integration, and appropriate automation.",

    href:
      "/how-booking-forms-quote-forms-and-automation-help-local-businesses",

    tags: [
      "Forms",
      "Automation",
      "CRM",
    ],
  },

  {
    number:
      "11",

    icon:
      Building2,

    category:
      "Website & Business Education",

    title:
      "7 Reasons Why Small Business Websites Are Vital",

    description:
      "Why a website remains useful for business identity, customer information, search discovery, lead generation, marketing, control, and future technology growth.",

    href:
      "/7-reasons-why-small-business-websites-are-vital",

    tags: [
      "Small Business",
      "Websites",
      "Marketing",
    ],
  },

  {
    number:
      "12",

    icon:
      RefreshCw,

    category:
      "Website & Business Education",

    title:
      "7 Signs You Need a New Website for Your Business",

    description:
      "Learn when mobile problems, slow performance, broken features, outdated information, weak search structure, or business growth may justify a redesign.",

    href:
      "/7-signs-you-need-a-new-website-for-your-business",

    tags: [
      "Redesign",
      "Website Audit",
      "Business",
    ],
  },

  {
    number:
      "13",

    icon:
      MessageSquare,

    category:
      "Website & Business Education",

    title:
      "8 Marketing Mistakes Small Businesses Make",

    description:
      "Targeting, personalized outreach, websites, follow-up, lead-source tracking, content strategy, testing, and knowing when paid advertising makes sense.",

    href:
      "/8-marketing-mistakes-small-businesses-make",

    tags: [
      "Marketing",
      "Lead Tracking",
      "Small Business",
    ],
  },

  {
    number:
      "14",

    icon:
      LayoutTemplate,

    category:
      "Website & Business Education",

    title:
      "8 Things Every Small Business Website Needs",

    description:
      "A practical checklist covering business messaging, services, contact paths, mobile design, trust, local information, performance, and search structure.",

    href:
      "/8-things-every-small-business-website-needs",

    tags: [
      "Website Checklist",
      "Small Business",
      "SEO",
    ],
  },

  {
    number:
      "15",

    icon:
      RefreshCw,

    category:
      "Website & Business Education",

    title:
      "How Often Should You Redesign Your Website?",

    description:
      "Why redesign timing should be based on evidence, usability, technology, business changes, and actual requirements rather than an arbitrary calendar.",

    href:
      "/how-often-should-you-redesign-your-website",

    tags: [
      "Redesign",
      "Maintenance",
      "Website Audit",
    ],
  },

  {
    number:
      "16",

    icon:
      MessageSquare,

    category:
      "Website & Business Education",

    title:
      "How to Respond to Online Reviews: Good and Bad",

    description:
      "A practical guide to positive feedback, negative reviews, complaints, suspicious reviews, customer privacy, honest review requests, and business learning.",

    href:
      "/how-to-respond-to-online-reviews-good-and-bad",

    tags: [
      "Reviews",
      "Customer Trust",
      "Business",
    ],
  },

  {
    number:
      "17",

    icon:
      BarChart3,

    category:
      "Website & Business Education",

    title:
      "Website Traffic Stats Explained",

    description:
      "Understand users, sessions, page views, traffic sources, landing pages, engagement, conversions, leads, and why traffic alone does not define success.",

    href:
      "/website-traffic-stats-explained",

    tags: [
      "Analytics",
      "Traffic",
      "Conversions",
    ],
  },

  {
    number:
      "18",

    icon:
      Share2,

    category:
      "Website & Business Education",

    title:
      "Why a Facebook Page Is Not a Substitute for a Website",

    description:
      "Learn why social media works best as a distribution and interaction channel while a dedicated website remains the business's controlled digital hub.",

    href:
      "/why-a-facebook-page-is-not-a-substitute-for-a-website",

    tags: [
      "Facebook",
      "Social Media",
      "Websites",
    ],
  },

  {
    number:
      "19",

    icon:
      Boxes,

    category:
      "Website & Business Education",

    title:
      "Why DIY Website Builders Can Become Limiting for Small Businesses",

    description:
      "DIY builders can work well for simple sites. Learn when functionality, integrations, data, performance, SEO, or business growth may justify a different architecture.",

    href:
      "/why-diy-site-builders-are-bad-for-small-businesses",

    tags: [
      "DIY",
      "Platforms",
      "Custom Development",
    ],
  },

  {
    number:
      "20",

    icon:
      Star,

    category:
      "Website & Business Education",

    title:
      "Why Reputation Management & Online Reviews Matter in Business",

    description:
      "Learn how real customer experiences, reviews, public responses, accurate information, websites, search visibility, and feedback patterns shape business reputation.",

    href:
      "/why-reputation-management-and-online-reviews-are-important-in-business",

    tags: [
      "Reputation",
      "Reviews",
      "Customer Trust",
    ],
  },
];

/* ============================================================
   FEATURED ARTICLE
============================================================ */

const featuredArticle =
  articles.find(
    (article) =>
      article.href ===
      "/how-matthew-web-builds-seo-ready-small-business-websites"
  );

/* ============================================================
   OTHER ARTICLES
============================================================ */

const remainingArticles =
  articles.filter(
    (article) =>
      article.href !==
      featuredArticle.href
  );

/* ============================================================
   STRUCTURED DATA
============================================================ */

const blogSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "Blog",

  name:
    "Matthew Web Blog",

  description:
    "Practical articles about websites, software, business technology, SEO, marketing, analytics, reviews, education, game development, computing, and Matthew Web R&D.",

  url:
    "https://matthew-web.com/blog",

  publisher: {
    "@type":
      "Organization",

    name:
      "Matthew Web",

    url:
      "https://matthew-web.com",
  },

  blogPost:
    articles.map(
      (article) => ({
        "@type":
          "BlogPosting",

        headline:
          article.title,

        url:
          `https://matthew-web.com${article.href}`,

        author: {
          "@type":
            "Person",

          name:
            "Adam Matthew Charest",
        },
      })
    ),
};

/* ============================================================
   PAGE
============================================================ */

export default function BlogPage() {
  const FeaturedIcon =
    featuredArticle.icon;

  return (
    <main className="mwblog-page">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(blogSchema),
        }}
      />

      <style>{`
        :root {
          --mwblog-black: #020304;
          --mwblog-blue: #08b9f4;
          --mwblog-blue-light: #38d7ff;
          --mwblog-orange: #ff7900;
          --mwblog-orange-light: #ffab31;
          --mwblog-muted: #aebbc5;
          --mwblog-border: rgba(255,255,255,.09);
          --mwblog-green: #35e07e;
        }

        body {
          margin: 0;
          background: var(--mwblog-black);
        }

        .mwblog-page {
          min-height: 100vh;
          overflow: hidden;
          color: #fff;
          background: var(--mwblog-black);
        }

        .mwblog-blue {
          color: var(--mwblog-blue-light);
        }

        .mwblog-orange {
          color: var(--mwblog-orange);
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwblog-hero {
          position: relative;
          overflow: hidden;

          padding:
            110px
            clamp(20px,5vw,80px)
            105px;

          border-bottom:
            1px solid
            rgba(8,185,244,.16);

          background:
            radial-gradient(
              ellipse at 16% 35%,
              rgba(8,185,244,.17),
              transparent 38%
            ),
            radial-gradient(
              ellipse at 86% 50%,
              rgba(255,121,0,.10),
              transparent 34%
            ),
            linear-gradient(
              180deg,
              #020304,
              #03080c,
              #020304
            );
        }

        .mwblog-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: .25;
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
              transparent 82%
            );
        }

        .mwblog-hero-inner {
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
        }

        .mwblog-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          width: fit-content;

          margin-bottom: 19px;

          padding:
            8px 12px;

          border:
            1px solid
            rgba(8,185,244,.27);

          border-radius:
            999px;

          color:
            #d9f8ff;

          background:
            rgba(8,185,244,.055);

          font-size:
            10px;

          font-weight:
            900;

          letter-spacing:
            .13em;

          text-transform:
            uppercase;
        }

        .mwblog-label svg {
          width: 16px;
          height: 16px;
        }

        .mwblog-hero h1 {
          max-width: 950px;
          margin: 0;

          font-size:
            clamp(
              50px,
              6vw,
              88px
            );

          line-height: .98;
          letter-spacing: -.06em;
        }

        .mwblog-hero-description {
          max-width: 790px;

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

        .mwblog-hero-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;

          margin-top:
            28px;
        }

        .mwblog-stat {
          padding:
            10px 13px;

          border:
            1px solid
            rgba(255,255,255,.08);

          border-radius:
            8px;

          color:
            #9aacb6;

          background:
            rgba(255,255,255,.02);

          font-size:
            9px;

          font-weight:
            850;

          letter-spacing:
            .07em;

          text-transform:
            uppercase;
        }

        .mwblog-stat strong {
          color:
            var(--mwblog-blue-light);
        }

        .mwblog-stat:nth-child(even)
          strong {
          color:
            var(--mwblog-orange-light);
        }

        /* =====================================================
           HERO CONSOLE
        ===================================================== */

        .mwblog-stage {
          min-height:
            470px;

          display: grid;
          place-items: center;
        }

        .mwblog-console {
          width:
            min(100%,530px);

          padding:
            24px;

          border:
            1px solid
            rgba(8,185,244,.28);

          border-radius:
            20px;

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

        .mwblog-console-top {
          display: flex;
          align-items: center;
          justify-content:
            space-between;

          margin-bottom:
            18px;
        }

        .mwblog-console-top strong {
          color:
            #81929d;

          font-size:
            9px;

          letter-spacing:
            .12em;
        }

        .mwblog-live {
          display:
            inline-flex;

          align-items:
            center;

          gap: 6px;

          color:
            #8da0aa;

          font-size:
            8px;

          font-weight:
            900;
        }

        .mwblog-live::before {
          content: "";

          width: 6px;
          height: 6px;

          border-radius:
            50%;

          background:
            var(--mwblog-green);

          box-shadow:
            0 0 7px
            rgba(53,224,126,.7);
        }

        .mwblog-console-main {
          padding:
            20px;

          border:
            1px solid
            rgba(255,121,0,.18);

          border-radius:
            12px;

          background:
            #071015;
        }

        .mwblog-console-main span {
          color:
            #657984;

          font-size:
            7px;

          font-weight:
            900;

          letter-spacing:
            .1em;

          text-transform:
            uppercase;
        }

        .mwblog-console-title {
          display: flex;
          align-items: center;
          gap: 9px;

          margin-top:
            10px;

          color:
            var(--mwblog-orange-light);

          font-size:
            15px;

          font-weight:
            900;
        }

        .mwblog-console-title svg {
          width: 23px;
          height: 23px;
        }

        .mwblog-console-main p {
          margin:
            10px 0 0;

          color:
            #788b95;

          font-size:
            9px;

          line-height:
            1.6;
        }

        .mwblog-console-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 9px;

          margin-top:
            10px;
        }

        .mwblog-console-card {
          min-height:
            96px;

          display: flex;
          flex-direction:
            column;

          align-items:
            center;

          justify-content:
            center;

          gap: 8px;

          padding:
            12px;

          border:
            1px solid
            rgba(8,185,244,.14);

          border-radius:
            9px;

          background:
            #071015;

          text-align:
            center;
        }

        .mwblog-console-card:nth-child(even) {
          border-color:
            rgba(255,121,0,.14);
        }

        .mwblog-console-card svg {
          width: 22px;
          height: 22px;

          color:
            var(--mwblog-blue-light);
        }

        .mwblog-console-card:nth-child(even)
          svg {
          color:
            var(--mwblog-orange-light);
        }

        .mwblog-console-card strong {
          font-size:
            8px;

          letter-spacing:
            .05em;
        }

        /* =====================================================
           INTRO
        ===================================================== */

        .mwblog-intro {
          padding:
            90px
            clamp(20px,5vw,80px);

          background:
            #020304;
        }

        .mwblog-intro-inner {
          max-width:
            1200px;

          margin:
            0 auto;

          text-align:
            center;
        }

        .mwblog-eyebrow {
          display:
            inline-flex;

          align-items:
            center;

          gap: 8px;

          margin-bottom:
            12px;

          color:
            var(--mwblog-orange-light);

          font-size:
            9px;

          font-weight:
            900;

          letter-spacing:
            .13em;

          text-transform:
            uppercase;
        }

        .mwblog-eyebrow svg {
          width: 16px;
          height: 16px;
        }

        .mwblog-intro h2 {
          max-width:
            900px;

          margin:
            0 auto;

          font-size:
            clamp(
              34px,
              4.4vw,
              58px
            );

          line-height:
            1.05;

          letter-spacing:
            -.05em;
        }

        .mwblog-intro p {
          max-width:
            830px;

          margin:
            20px auto 0;

          color:
            var(--mwblog-muted);

          font-size:
            15px;

          line-height:
            1.8;
        }

        /* =====================================================
           PILLARS
        ===================================================== */

        .mwblog-pillars {
          padding:
            0
            clamp(20px,5vw,80px)
            100px;

          background:
            #020304;
        }

        .mwblog-pillars-inner {
          max-width:
            1380px;

          margin:
            0 auto;
        }

        .mwblog-section-heading {
          display: flex;
          align-items: end;
          justify-content:
            space-between;

          gap: 30px;

          margin-bottom:
            34px;
        }

        .mwblog-section-heading h2 {
          margin: 0;

          font-size:
            clamp(
              32px,
              4vw,
              52px
            );

          line-height:
            1.04;

          letter-spacing:
            -.045em;
        }

        .mwblog-section-heading p {
          max-width:
            560px;

          margin: 0;

          color:
            var(--mwblog-muted);

          font-size:
            13px;

          line-height:
            1.7;
        }

        .mwblog-pillar-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap:
            14px;
        }

        .mwblog-pillar-card {
          min-height:
            245px;

          padding:
            24px;

          border:
            1px solid
            rgba(8,185,244,.14);

          border-radius:
            14px;

          background:
            linear-gradient(
              145deg,
              #0a1218,
              #04080b
            );
        }

        .mwblog-pillar-card:nth-child(even) {
          border-color:
            rgba(255,121,0,.14);
        }

        .mwblog-pillar-card svg {
          width: 31px;
          height: 31px;

          margin-bottom:
            17px;

          color:
            var(--mwblog-blue-light);
        }

        .mwblog-pillar-card:nth-child(even)
          svg {
          color:
            var(--mwblog-orange-light);
        }

        .mwblog-pillar-card h3 {
          margin:
            0 0 10px;

          font-size:
            19px;

          line-height:
            1.25;
        }

        .mwblog-pillar-card p {
          margin: 0;

          color:
            var(--mwblog-muted);

          font-size:
            12px;

          line-height:
            1.7;
        }

        /* =====================================================
           FEATURED
        ===================================================== */

        .mwblog-featured-section {
          padding:
            100px
            clamp(20px,5vw,80px);

          border-top:
            1px solid
            rgba(255,255,255,.05);

          border-bottom:
            1px solid
            rgba(255,255,255,.05);

          background:
            linear-gradient(
              180deg,
              #020304,
              #050b0f,
              #020304
            );
        }

        .mwblog-featured-inner {
          max-width:
            1380px;

          margin:
            0 auto;
        }

        .mwblog-featured-card {
          display: grid;

          grid-template-columns:
            .75fr
            1.25fr;

          overflow: hidden;

          border:
            1px solid
            rgba(8,185,244,.24);

          border-radius:
            22px;

          background:
            linear-gradient(
              145deg,
              #0b171e,
              #05090c
            );

          box-shadow:
            0 30px 70px
            rgba(0,0,0,.35);
        }

        .mwblog-featured-visual {
          position: relative;

          min-height:
            460px;

          display: grid;
          place-items:
            center;

          padding:
            35px;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 50% 30%,
              rgba(8,185,244,.15),
              transparent 40%
            ),
            linear-gradient(
              145deg,
              #07131a,
              #020304
            );
        }

        .mwblog-featured-visual::before {
          content: "";

          position:
            absolute;

          inset: 0;

          opacity: .35;

          background-image:
            linear-gradient(
              rgba(8,185,244,.06) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(8,185,244,.06) 1px,
              transparent 1px
            );

          background-size:
            42px 42px;
        }

        .mwblog-featured-icon {
          position:
            relative;

          z-index: 2;

          width:
            140px;

          height:
            140px;

          display: grid;

          place-items:
            center;

          border:
            1px solid
            rgba(8,185,244,.32);

          border-radius:
            28px;

          color:
            var(--mwblog-blue-light);

          background:
            rgba(8,185,244,.055);

          box-shadow:
            0 0 55px
            rgba(8,185,244,.12);
        }

        .mwblog-featured-icon svg {
          width: 70px;
          height: 70px;
        }

        .mwblog-featured-copy {
          display: flex;

          flex-direction:
            column;

          justify-content:
            center;

          padding:
            clamp(
              35px,
              5vw,
              65px
            );
        }

        .mwblog-featured-label {
          margin-bottom:
            15px;

          color:
            var(--mwblog-orange-light);

          font-size:
            9px;

          font-weight:
            900;

          letter-spacing:
            .12em;

          text-transform:
            uppercase;
        }

        .mwblog-featured-copy h3 {
          max-width:
            780px;

          margin: 0;

          font-size:
            clamp(
              30px,
              4vw,
              53px
            );

          line-height:
            1.06;

          letter-spacing:
            -.045em;
        }

        .mwblog-featured-copy p {
          max-width:
            730px;

          margin:
            18px 0 0;

          color:
            var(--mwblog-muted);

          font-size:
            14px;

          line-height:
            1.8;
        }

        .mwblog-tag-row {
          display: flex;

          flex-wrap: wrap;

          gap: 7px;

          margin-top:
            22px;
        }

        .mwblog-tag {
          padding:
            7px 9px;

          border:
            1px solid
            rgba(255,255,255,.08);

          border-radius:
            999px;

          color:
            #8da0aa;

          background:
            rgba(255,255,255,.02);

          font-size:
            8px;

          font-weight:
            800;

          letter-spacing:
            .05em;

          text-transform:
            uppercase;
        }

        .mwblog-featured-link {
          width:
            fit-content;

          min-height:
            52px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap: 9px;

          margin-top:
            26px;

          padding:
            0 21px;

          border:
            1px solid
            rgba(255,176,49,.55);

          border-radius:
            9px;

          color: #fff;

          background:
            linear-gradient(
              180deg,
              #ff9519,
              #f16600
            );

          text-decoration:
            none;

          font-size:
            13px;

          font-weight:
            850;

          transition:
            transform .2s ease;
        }

        .mwblog-featured-link:hover {
          transform:
            translateY(-2px);
        }

        .mwblog-featured-link svg {
          width: 17px;
          height: 17px;
        }

        /* =====================================================
           ARTICLES
        ===================================================== */

        .mwblog-articles {
          padding:
            100px
            clamp(20px,5vw,80px)
            115px;

          background:
            #020304;
        }

        .mwblog-articles-inner {
          max-width:
            1380px;

          margin:
            0 auto;
        }

        .mwblog-article-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap:
            15px;
        }

        .mwblog-article-card {
          min-height:
            390px;

          display: flex;

          flex-direction:
            column;

          padding:
            24px;

          border:
            1px solid
            rgba(8,185,244,.13);

          border-radius:
            15px;

          color:
            #fff;

          text-decoration:
            none;

          background:
            linear-gradient(
              145deg,
              #091218,
              #04080b
            );

          transition:
            transform .22s ease,
            border-color .22s ease,
            box-shadow .22s ease;
        }

        .mwblog-article-card:nth-child(even) {
          border-color:
            rgba(255,121,0,.13);
        }

        .mwblog-article-card:hover {
          transform:
            translateY(-5px);

          border-color:
            rgba(8,185,244,.34);

          box-shadow:
            0 20px 45px
            rgba(0,0,0,.28);
        }

        .mwblog-article-card:nth-child(even):hover {
          border-color:
            rgba(255,121,0,.34);
        }

        .mwblog-card-top {
          display: flex;

          align-items:
            center;

          justify-content:
            space-between;

          gap: 12px;

          margin-bottom:
            23px;
        }

        .mwblog-card-icon {
          width: 48px;
          height: 48px;

          display: grid;

          place-items:
            center;

          border:
            1px solid
            rgba(8,185,244,.22);

          border-radius:
            12px;

          color:
            var(--mwblog-blue-light);

          background:
            rgba(8,185,244,.04);
        }

        .mwblog-article-card:nth-child(even)
          .mwblog-card-icon {
          border-color:
            rgba(255,121,0,.22);

          color:
            var(--mwblog-orange-light);

          background:
            rgba(255,121,0,.035);
        }

        .mwblog-card-icon svg {
          width: 24px;
          height: 24px;
        }

        .mwblog-card-number {
          color:
            #4f636e;

          font-size:
            9px;

          font-weight:
            950;

          letter-spacing:
            .11em;
        }

        .mwblog-card-category {
          margin-bottom:
            10px;

          color:
            var(--mwblog-blue-light);

          font-size:
            8px;

          font-weight:
            900;

          letter-spacing:
            .1em;

          text-transform:
            uppercase;
        }

        .mwblog-article-card:nth-child(even)
          .mwblog-card-category {
          color:
            var(--mwblog-orange-light);
        }

        .mwblog-article-card h3 {
          margin: 0;

          font-size:
            21px;

          line-height:
            1.28;

          letter-spacing:
            -.025em;
        }

        .mwblog-article-card p {
          margin:
            14px 0 0;

          color:
            var(--mwblog-muted);

          font-size:
            12px;

          line-height:
            1.72;
        }

        .mwblog-card-bottom {
          margin-top:
            auto;

          padding-top:
            22px;
        }

        .mwblog-card-link {
          display: flex;

          align-items:
            center;

          gap: 7px;

          margin-top:
            19px;

          color:
            var(--mwblog-blue-light);

          font-size:
            11px;

          font-weight:
            850;
        }

        .mwblog-article-card:nth-child(even)
          .mwblog-card-link {
          color:
            var(--mwblog-orange-light);
        }

        .mwblog-card-link svg {
          width: 15px;
          height: 15px;
        }

        /* =====================================================
           CONTENT SYSTEM
        ===================================================== */

        .mwblog-system {
          padding:
            100px
            clamp(20px,5vw,80px);

          border-top:
            1px solid
            rgba(255,255,255,.05);

          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwblog-system-inner {
          max-width:
            1200px;

          margin:
            0 auto;
        }

        .mwblog-system-box {
          padding:
            clamp(
              32px,
              5vw,
              55px
            );

          border:
            1px solid
            rgba(8,185,244,.2);

          border-radius:
            20px;

          background:
            radial-gradient(
              circle at 90% 20%,
              rgba(255,121,0,.06),
              transparent 32%
            ),
            linear-gradient(
              145deg,
              #0a151c,
              #04080b
            );
        }

        .mwblog-system-box h2 {
          max-width:
            850px;

          margin: 0;

          font-size:
            clamp(
              31px,
              4vw,
              50px
            );

          line-height:
            1.05;

          letter-spacing:
            -.045em;
        }

        .mwblog-system-box p {
          max-width:
            830px;

          margin:
            18px 0 0;

          color:
            var(--mwblog-muted);

          font-size:
            14px;

          line-height:
            1.8;
        }

        .mwblog-flow {
          display: grid;

          grid-template-columns:
            repeat(5,1fr);

          gap: 9px;

          margin-top:
            28px;
        }

        .mwblog-flow-item {
          min-height:
            100px;

          display: flex;

          flex-direction:
            column;

          align-items:
            center;

          justify-content:
            center;

          gap: 8px;

          padding:
            12px;

          border:
            1px solid
            rgba(8,185,244,.14);

          border-radius:
            10px;

          background:
            #071015;

          text-align:
            center;
        }

        .mwblog-flow-item:nth-child(even) {
          border-color:
            rgba(255,121,0,.14);
        }

        .mwblog-flow-item strong {
          color:
            #fff;

          font-size:
            9px;
        }

        .mwblog-flow-item span {
          color:
            #697c86;

          font-size:
            8px;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .mwblog-cta {
          padding:
            100px
            clamp(20px,5vw,80px);

          text-align:
            center;

          background:
            #020304;
        }

        .mwblog-cta-inner {
          max-width:
            1000px;

          margin:
            0 auto;
        }

        .mwblog-cta h2 {
          margin: 0;

          font-size:
            clamp(
              35px,
              5vw,
              64px
            );

          line-height:
            1.03;

          letter-spacing:
            -.055em;
        }

        .mwblog-cta p {
          max-width:
            760px;

          margin:
            20px auto 0;

          color:
            var(--mwblog-muted);

          font-size:
            14px;

          line-height:
            1.8;
        }

        .mwblog-buttons {
          display: flex;

          justify-content:
            center;

          flex-wrap: wrap;

          gap: 12px;

          margin-top:
            28px;
        }

        .mwblog-btn {
          min-height:
            52px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap: 8px;

          padding:
            0 21px;

          border-radius:
            9px;

          color: #fff;

          text-decoration:
            none;

          font-size:
            13px;

          font-weight:
            850;

          transition:
            transform .2s ease;
        }

        .mwblog-btn:hover {
          transform:
            translateY(-2px);
        }

        .mwblog-btn-blue {
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

        .mwblog-btn-orange {
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

        .mwblog-btn-dark {
          border:
            1px solid
            rgba(255,255,255,.12);

          background:
            rgba(255,255,255,.03);
        }

        .mwblog-btn svg {
          width: 17px;
          height: 17px;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1100px) {
          .mwblog-pillar-grid,
          .mwblog-article-grid {
            grid-template-columns:
              repeat(2,1fr);
          }

          .mwblog-flow {
            grid-template-columns:
              repeat(3,1fr);
          }
        }

        @media (max-width: 1000px) {
          .mwblog-hero-inner {
            grid-template-columns:
              1fr;
          }

          .mwblog-hero-copy {
            text-align:
              center;
          }

          .mwblog-label {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwblog-hero-description {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwblog-hero-stats {
            justify-content:
              center;
          }

          .mwblog-featured-card {
            grid-template-columns:
              1fr;
          }

          .mwblog-featured-visual {
            min-height:
              300px;
          }
        }

        @media (max-width: 800px) {
          .mwblog-section-heading {
            display: block;
          }

          .mwblog-section-heading p {
            margin-top:
              14px;
          }
        }

        @media (max-width: 700px) {
          .mwblog-hero {
            padding:
              75px 16px;
          }

          .mwblog-hero h1 {
            font-size:
              clamp(
                44px,
                13vw,
                68px
              );
          }

          .mwblog-intro,
          .mwblog-featured-section,
          .mwblog-articles,
          .mwblog-system,
          .mwblog-cta {
            padding-left:
              16px;

            padding-right:
              16px;
          }

          .mwblog-pillars {
            padding-left:
              16px;

            padding-right:
              16px;
          }

          .mwblog-pillar-grid,
          .mwblog-article-grid,
          .mwblog-flow {
            grid-template-columns:
              1fr;
          }

          .mwblog-featured-copy {
            padding:
              30px 23px;
          }

          .mwblog-article-card {
            min-height:
              350px;
          }
        }

        @media (max-width: 500px) {
          .mwblog-stage {
            min-height:
              450px;

            transform:
              scale(.9);

            margin:
              -10px -20px;
          }

          .mwblog-console-grid {
            grid-template-columns:
              1fr;
          }

          .mwblog-featured-icon {
            width:
              110px;

            height:
              110px;
          }

          .mwblog-featured-icon svg {
            width:
              54px;

            height:
              54px;
          }
        }
      `}</style>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="mwblog-hero">
        <div className="mwblog-hero-inner">
          <div className="mwblog-hero-copy">
            <div className="mwblog-label">
              <BookOpen />
              Matthew Web Knowledge Base
            </div>

            <h1>
              Ideas. Lessons.{" "}
              <span className="mwblog-blue">
                Technology.
              </span>{" "}
              Real{" "}
              <span className="mwblog-orange">
                Progress.
              </span>
            </h1>

            <p className="mwblog-hero-description">
              Practical writing about websites,
              small business, software,
              marketing, analytics, customer
              trust, SEO, game development,
              education, computing, and the
              technology Matthew Web is building
              and researching.
            </p>

            <div className="mwblog-hero-stats">
              <div className="mwblog-stat">
                <strong>
                  20
                </strong>{" "}
                Current Articles
              </div>

              <div className="mwblog-stat">
                <strong>
                  7
                </strong>{" "}
                Content Pillars
              </div>

              <div className="mwblog-stat">
                <strong>
                  1
                </strong>{" "}
                Connected Knowledge System
              </div>
            </div>
          </div>

          <div
            className="mwblog-stage"
            aria-hidden="true"
          >
            <div className="mwblog-console">
              <div className="mwblog-console-top">
                <strong>
                  MATTHEW WEB // CONTENT ENGINE
                </strong>

                <span className="mwblog-live">
                  BUILDING
                </span>
              </div>

              <div className="mwblog-console-main">
                <span>
                  KNOWLEDGE SYSTEM
                </span>

                <div className="mwblog-console-title">
                  <Sparkles />
                  One Company. Many Connected Topics.
                </div>

                <p>
                  Websites → Software → Games →
                  Education → Computing → R&D →
                  Company Progress
                </p>
              </div>

              <div className="mwblog-console-grid">
                <div className="mwblog-console-card">
                  <SearchCheck />
                  <strong>
                    DISCOVER
                  </strong>
                </div>

                <div className="mwblog-console-card">
                  <BookOpen />
                  <strong>
                    LEARN
                  </strong>
                </div>

                <div className="mwblog-console-card">
                  <Code2 />
                  <strong>
                    BUILD
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          INTRO
      ====================================================== */}

      <section className="mwblog-intro">
        <div className="mwblog-intro-inner">
          <div className="mwblog-eyebrow">
            <Sparkles />
            Practical Technology Content
          </div>

          <h2>
            Useful Information Before{" "}
            <span className="mwblog-blue">
              Marketing Noise
            </span>
          </h2>

          <p>
            The Matthew Web blog is built around
            real customer questions, business
            problems, development work, technical
            research, and company progress.
            Articles should teach something
            useful first, connect naturally to
            related resources, and avoid fake
            statistics, fake customer results,
            exaggerated guarantees, or claims
            that cannot be supported.
          </p>
        </div>
      </section>

      {/* ======================================================
          CONTENT PILLARS
      ====================================================== */}

      <section className="mwblog-pillars">
        <div className="mwblog-pillars-inner">
          <div className="mwblog-section-heading">
            <div>
              <div className="mwblog-eyebrow">
                <BookOpen />
                Content Architecture
              </div>

              <h2>
                Seven{" "}
                <span className="mwblog-orange">
                  Content Pillars
                </span>
              </h2>
            </div>

            <p>
              The blog can grow far beyond
              website advice as Matthew Web
              expands into software, games,
              education, computing research,
              and broader technology development.
            </p>
          </div>

          <div className="mwblog-pillar-grid">
            {pillars.map(
              (pillar) => {
                const Icon =
                  pillar.icon;

                return (
                  <div
                    className="mwblog-pillar-card"
                    key={pillar.title}
                  >
                    <Icon />

                    <h3>
                      {pillar.title}
                    </h3>

                    <p>
                      {pillar.text}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* ======================================================
          FEATURED
      ====================================================== */}

      <section className="mwblog-featured-section">
        <div className="mwblog-featured-inner">
          <div className="mwblog-section-heading">
            <div>
              <div className="mwblog-eyebrow">
                <Sparkles />
                Featured Guide
              </div>

              <h2>
                Start With the{" "}
                <span className="mwblog-blue">
                  Foundation
                </span>
              </h2>
            </div>

            <p>
              Search readiness is not one
              setting. It is the result of many
              technical and content decisions
              working together.
            </p>
          </div>

          <div className="mwblog-featured-card">
            <div
              className="mwblog-featured-visual"
              aria-hidden="true"
            >
              <div className="mwblog-featured-icon">
                <FeaturedIcon />
              </div>
            </div>

            <div className="mwblog-featured-copy">
              <div className="mwblog-featured-label">
                {featuredArticle.category}
              </div>

              <h3>
                {featuredArticle.title}
              </h3>

              <p>
                {featuredArticle.description}
              </p>

              <div className="mwblog-tag-row">
                {featuredArticle.tags.map(
                  (tag) => (
                    <span
                      className="mwblog-tag"
                      key={tag}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              <Link
                href={featuredArticle.href}
                className="mwblog-featured-link"
              >
                Read Featured Article
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          ARTICLES
      ====================================================== */}

      <section className="mwblog-articles">
        <div className="mwblog-articles-inner">
          <div className="mwblog-section-heading">
            <div>
              <div className="mwblog-eyebrow">
                <BookOpen />
                Browse the Library
              </div>

              <h2>
                All{" "}
                <span className="mwblog-orange">
                  20 Articles
                </span>
              </h2>
            </div>

            <p>
              The featured guide appears above.
              The remaining nineteen articles
              continue the connected website,
              software, business, analytics,
              SEO, marketing, and customer-system
              knowledge base.
            </p>
          </div>

          <div className="mwblog-article-grid">
            {remainingArticles.map(
              (article) => {
                const Icon =
                  article.icon;

                return (
                  <Link
                    href={article.href}
                    className="mwblog-article-card"
                    key={article.href}
                  >
                    <div className="mwblog-card-top">
                      <div className="mwblog-card-icon">
                        <Icon />
                      </div>

                      <div className="mwblog-card-number">
                        ARTICLE {article.number}
                      </div>
                    </div>

                    <div className="mwblog-card-category">
                      {article.category}
                    </div>

                    <h3>
                      {article.title}
                    </h3>

                    <p>
                      {article.description}
                    </p>

                    <div className="mwblog-card-bottom">
                      <div className="mwblog-tag-row">
                        {article.tags.map(
                          (tag) => (
                            <span
                              className="mwblog-tag"
                              key={tag}
                            >
                              {tag}
                            </span>
                          )
                        )}
                      </div>

                      <div className="mwblog-card-link">
                        Read Article
                        <ArrowRight />
                      </div>
                    </div>
                  </Link>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* ======================================================
          CONTENT SYSTEM
      ====================================================== */}

      <section className="mwblog-system">
        <div className="mwblog-system-inner">
          <div className="mwblog-system-box">
            <div className="mwblog-eyebrow">
              <Workflow />
              Matthew Web Content System
            </div>

            <h2>
              One Real Development Can Create{" "}
              <span className="mwblog-orange">
                Multiple Useful Resources.
              </span>
            </h2>

            <p>
              Instead of inventing disconnected
              marketing content, Matthew Web can
              document real website projects,
              software development, game
              progress, educational work, CPU/
              FPGA research, experiments, tests,
              and company milestones—then adapt
              that real work into useful content
              for different audiences.
            </p>

            <div className="mwblog-flow">
              <div className="mwblog-flow-item">
                <strong>
                  REAL WORK
                </strong>

                <span>
                  Build / Test
                </span>
              </div>

              <div className="mwblog-flow-item">
                <strong>
                  DOCUMENT
                </strong>

                <span>
                  What Changed?
                </span>
              </div>

              <div className="mwblog-flow-item">
                <strong>
                  EXPLAIN
                </strong>

                <span>
                  Teach It
                </span>
              </div>

              <div className="mwblog-flow-item">
                <strong>
                  REUSE
                </strong>

                <span>
                  Web / Social
                </span>
              </div>

              <div className="mwblog-flow-item">
                <strong>
                  MEASURE
                </strong>

                <span>
                  Learn / Improve
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          CTA
      ====================================================== */}

      <section className="mwblog-cta">
        <div className="mwblog-cta-inner">
          <div className="mwblog-eyebrow">
            <Sparkles />
            Matthew Web
          </div>

          <h2>
            Need More Than an{" "}
            <span className="mwblog-blue">
              Article?
            </span>
          </h2>

          <p>
            Matthew Web provides website design,
            small-business websites, SEO and
            indexing support, custom software,
            forms, dashboards, integrations,
            automation, and other practical
            technology services based on the
            needs of the project.
          </p>

          <div className="mwblog-buttons">
            <Link
              href="/contact-us"
              className="mwblog-btn mwblog-btn-orange"
            >
              Start a Conversation
              <ArrowRight />
            </Link>

            <Link
              href="/services"
              className="mwblog-btn mwblog-btn-blue"
            >
              Explore Services
            </Link>

            <Link
              href="/examples"
              className="mwblog-btn mwblog-btn-dark"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
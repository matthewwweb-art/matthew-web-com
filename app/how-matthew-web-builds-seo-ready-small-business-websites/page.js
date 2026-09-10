import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Bot,
  CheckCircle2,
  ChevronRight,
  FileSearch,
  FileText,
  Gauge,
  Globe2,
  Link2,
  Map,
  MapPin,
  MonitorSmartphone,
  Network,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  Waypoints,
  Zap,
} from "lucide-react";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/* ============================================================
   METADATA
============================================================ */

export const metadata = {
  title:
    "How Matthew Web Builds SEO-Ready Small Business Websites | Matthew Web",

  description:
    "Learn how Matthew Web builds SEO-ready small business websites using clear site architecture, useful content, metadata, internal links, mobile design, performance, sitemaps, indexing preparation, structured data, and measurement.",

  alternates: {
    canonical:
      "https://matthew-web.com/how-matthew-web-builds-seo-ready-small-business-websites",
  },

  openGraph: {
    title:
      "How Matthew Web Builds SEO-Ready Small Business Websites | Matthew Web",

    description:
      "See how Matthew Web approaches website architecture, metadata, content, internal linking, mobile usability, performance, structured data, sitemaps, indexing, and ongoing search improvement.",

    url:
      "https://matthew-web.com/how-matthew-web-builds-seo-ready-small-business-websites",

    siteName:
      "Matthew Web",

    type:
      "article",
  },
};

/* ============================================================
   SEO FOUNDATIONS
============================================================ */

const seoFoundations = [
  {
    icon: Network,

    title:
      "Clear Site Architecture",

    text:
      "Important services, business information, articles, projects, and conversion pages should have a logical place in the site instead of being scattered across disconnected routes.",
  },

  {
    icon: FileText,

    title:
      "Useful Page Content",

    text:
      "Pages should explain real services, answer useful questions, describe the business accurately, and help visitors make decisions. Technical SEO cannot replace weak content.",
  },

  {
    icon: SearchCheck,

    title:
      "Titles & Metadata",

    text:
      "Each important page should have a descriptive title, useful meta description, canonical URL, and other metadata appropriate to that page.",
  },

  {
    icon: Link2,

    title:
      "Internal Linking",

    text:
      "Services, articles, project pages, and related resources should connect logically so visitors and crawlers can understand relationships across the website.",
  },

  {
    icon: MonitorSmartphone,

    title:
      "Mobile Usability",

    text:
      "Navigation, text, forms, buttons, tables, and layouts should remain practical on smaller screens because a technically indexed site can still provide a poor customer experience.",
  },

  {
    icon: Gauge,

    title:
      "Performance Awareness",

    text:
      "Images, scripts, animations, external tools, and application code should be managed carefully so the site remains visually strong without unnecessary technical weight.",
  },

  {
    icon: Map,

    title:
      "Sitemap & Crawl Structure",

    text:
      "Important public pages should be included in the sitemap while private admin systems, APIs, test routes, and intentionally excluded content remain outside the public index.",
  },

  {
    icon: ShieldCheck,

    title:
      "Indexing Controls",

    text:
      "Robots rules, noindex directives, canonicals, authentication, redirects, and other technical controls should support the intended public/private structure of the website.",
  },
];

/* ============================================================
   BUILD PROCESS
============================================================ */

const buildProcess = [
  {
    number:
      "01",

    title:
      "Understand the Business",

    text:
      "Identify the real services, customer groups, geographic market, common questions, conversion goals, and business priorities before deciding what pages should exist.",
  },

  {
    number:
      "02",

    title:
      "Design the Site Structure",

    text:
      "Organize primary pages, service pages, supporting content, articles, projects, contact paths, and internal links into a clear hierarchy.",
  },

  {
    number:
      "03",

    title:
      "Build Useful Pages",

    text:
      "Create pages around real customer needs instead of producing thin pages only to target keywords.",
  },

  {
    number:
      "04",

    title:
      "Add Technical Search Foundations",

    text:
      "Configure page titles, descriptions, canonicals, headings, structured data where appropriate, crawl controls, and other technical details.",
  },

  {
    number:
      "05",

    title:
      "Prepare for Discovery",

    text:
      "Maintain the sitemap, verify important links, support Google Search Console and Bing Webmaster Tools, and make sure intended public pages are accessible to crawlers.",
  },

  {
    number:
      "06",

    title:
      "Measure & Improve",

    text:
      "Use search, analytics, lead, and conversion information to understand what is working and where content or technical improvements are justified.",
  },
];

/* ============================================================
   PAGE STRUCTURE
============================================================ */

const pageElements = [
  {
    title:
      "One Clear Primary Topic",

    text:
      "A page should have a defined purpose. Trying to make one page rank for every possible service and question usually creates a confusing experience.",
  },

  {
    title:
      "Descriptive H1",

    text:
      "The main heading should explain what the page is actually about rather than relying only on a clever slogan.",
  },

  {
    title:
      "Logical H2/H3 Sections",

    text:
      "Subheadings help readers scan the page and help machines understand the organization of the information.",
  },

  {
    title:
      "Useful Supporting Copy",

    text:
      "Content should answer real questions, explain services, clarify expectations, and provide context instead of repeating the same phrase unnaturally.",
  },

  {
    title:
      "Relevant Internal Links",

    text:
      "A website-design article might link to website services, pricing, related SEO content, and contact information when those links genuinely help the reader.",
  },

  {
    title:
      "Clear Next Action",

    text:
      "When appropriate, the page should make the next useful action clear: contact the business, read another article, explore a service, or view related work.",
  },
];

/* ============================================================
   TECHNICAL CHECKLIST
============================================================ */

const technicalChecklist = [
  "Unique page title",
  "Useful meta description",
  "Correct canonical URL",
  "Single clear H1",
  "Logical H2 and H3 hierarchy",
  "Internal links",
  "Descriptive anchor text",
  "Mobile-friendly layout",
  "Accessible navigation and forms",
  "Image alt text where appropriate",
  "Efficient image delivery",
  "Sitemap inclusion when the page should be indexed",
  "Correct robots and noindex behavior",
  "HTTPS",
  "Working redirects where needed",
  "No unnecessary duplicate routes",
  "Structured data where it accurately represents the page",
];

/* ============================================================
   SEO / AEO / GEO
============================================================ */

const discoveryLayers = [
  {
    icon: SearchCheck,

    title:
      "SEO",

    label:
      "Search Engine Optimization",

    text:
      "Improve the technical structure, content, relevance, crawlability, local signals, and user experience that help search engines understand and evaluate the website.",
  },

  {
    icon: FileSearch,

    title:
      "AEO",

    label:
      "Answer Engine Optimization",

    text:
      "Structure useful information so direct questions can be answered clearly through definitions, summaries, FAQs, comparisons, steps, and well-organized sections.",
  },

  {
    icon: Bot,

    title:
      "GEO",

    label:
      "Generative Engine Optimization",

    text:
      "Create accurate, crawlable, well-attributed first-party information that AI-powered search and answer systems can understand when producing responses.",
  },
];

/* ============================================================
   LOCAL SEO
============================================================ */

const localElements = [
  "Accurate business name",
  "Consistent phone and contact information",
  "Real service-area information",
  "Useful Maine or local-market content where relevant",
  "Google Business Profile consistency",
  "Real customer reviews when available",
  "Legitimate local citations",
  "Service pages that accurately describe what the business offers",
  "No fake offices or fabricated locations",
];

/* ============================================================
   BAD SEO
============================================================ */

const avoidItems = [
  {
    title:
      "Keyword Stuffing",

    text:
      "Repeating the same phrase unnaturally does not make a page more useful to the customer.",
  },

  {
    title:
      "Fake Location Pages",

    text:
      "Creating pages for offices or service areas that do not genuinely exist damages trust and creates misleading information.",
  },

  {
    title:
      "Copied Content",

    text:
      "Duplicating competitors, manufacturers, or generic marketing text does not build strong first-party authority.",
  },

  {
    title:
      "Fake Reviews",

    text:
      "Customer names, ratings, testimonials, and project results should never be fabricated to make the business appear more established.",
  },

  {
    title:
      "Ranking Guarantees",

    text:
      "A web developer can control the work performed on the website but cannot control Google, Bing, customer demand, competitors, or search-engine algorithms.",
  },

  {
    title:
      "Building Pages Only for Search Engines",

    text:
      "A page should have a useful reason to exist for people. Search structure should support that purpose rather than replace it.",
  },
];

/* ============================================================
   FAQ
============================================================ */

const faqs = [
  {
    q:
      "What does SEO-ready mean?",

    a:
      "SEO-ready means the website is built with a sound technical and content foundation for search discovery, including crawlability, page structure, metadata, internal links, mobile usability, sitemaps, indexing preparation, and useful content. It does not mean rankings are guaranteed.",
  },

  {
    q:
      "Does Matthew Web guarantee first-page Google rankings?",

    a:
      "No. Matthew Web can improve website structure, content organization, technical SEO, indexing preparation, and related factors, but search engines decide rankings and results can also depend on competition, demand, location, authority, links, reputation, and many other factors.",
  },

  {
    q:
      "Is SEO finished when the website launches?",

    a:
      "Usually not. Launch creates the foundation. Search performance can continue changing as content grows, competitors change, search systems evolve, new pages are created, and real performance data becomes available.",
  },

  {
    q:
      "Does every service need its own page?",

    a:
      "Not automatically. A dedicated page makes sense when the service has enough unique information, customer intent, examples, questions, or conversion needs to justify its own useful page.",
  },

  {
    q:
      "Can SEO help AI systems understand a website too?",

    a:
      "Many of the same fundamentals help: crawlable public content, clear headings, structured information, accurate entity details, useful explanations, authorship, internal linking, and original source material. No website can guarantee inclusion in a particular AI answer.",
  },

  {
    q:
      "Does Matthew Web help with Google Search Console and Bing Webmaster Tools?",

    a:
      "Matthew Web provides technical indexing and search-support work that can include sitemap configuration, Google Search Console support, Bing Webmaster Tools support, metadata, internal linking, crawl structure, and indexing preparation.",
  },
];

/* ============================================================
   RELATED ARTICLES
============================================================ */

const relatedArticles = [
  {
    title:
      "Why Google Indexing Matters After Launching a New Website",

    href:
      "/why-google-indexing-matters-after-launching-a-new-website",

    text:
      "Learn the difference between being live, crawled, indexed, and ranked.",
  },

  {
    title:
      "Why Fast Website Load Speed Helps Leads, SEO, and Trust",

    href:
      "/why-fast-website-load-speed-helps-leads-seo-and-trust",

    text:
      "See how performance fits into the customer experience and broader technical quality of a website.",
  },

  {
    title:
      "What Every Contractor Website Needs to Generate Leads",

    href:
      "/what-every-contractor-website-needs-to-generate-leads",

    text:
      "See how service pages, local information, trust signals, and conversion paths work together on a local-business site.",
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
    "How Matthew Web Builds SEO-Ready Small Business Websites",

  description:
    "An explanation of the website architecture, content, metadata, internal linking, mobile design, performance, indexing, and measurement practices Matthew Web uses when building search-ready small business websites.",

  mainEntityOfPage: {
    "@type":
      "WebPage",

    "@id":
      "https://matthew-web.com/how-matthew-web-builds-seo-ready-small-business-websites",
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
        "How Matthew Web Builds SEO-Ready Small Business Websites",

      item:
        "https://matthew-web.com/how-matthew-web-builds-seo-ready-small-business-websites",
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

export default function SEOReadyWebsiteArticlePage() {
  return (
    <main className="mwseoart-page">
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
          --mwseoart-black: #020304;
          --mwseoart-muted: #aebbc5;
          --mwseoart-blue: #08b9f4;
          --mwseoart-blue-light: #38d7ff;
          --mwseoart-orange: #ff7900;
          --mwseoart-orange-light: #ffab31;
          --mwseoart-green: #35e07e;
          --mwseoart-border: rgba(255,255,255,.09);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--mwseoart-black);
        }

        .mwseoart-page {
          min-height: 100vh;
          overflow: hidden;
          color: #ffffff;
          background: var(--mwseoart-black);
        }

        .mwseoart-blue {
          color: var(--mwseoart-blue-light);
        }

        .mwseoart-orange {
          color: var(--mwseoart-orange);
        }

        /* =====================================================
           BREADCRUMBS
        ===================================================== */

        .mwseoart-breadcrumb-wrap {
          border-bottom: 1px solid rgba(255,255,255,.06);
          background: #04080b;
        }

        .mwseoart-breadcrumbs {
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

        .mwseoart-breadcrumbs a {
          color: #8799a3;
          text-decoration: none;
        }

        .mwseoart-breadcrumbs a:hover {
          color: var(--mwseoart-blue-light);
        }

        .mwseoart-breadcrumbs svg {
          width: 12px;
          height: 12px;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwseoart-hero {
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

        .mwseoart-hero::before {
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

        .mwseoart-hero-inner {
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

        .mwseoart-label {
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

        .mwseoart-label svg {
          width: 16px;
          height: 16px;
        }

        .mwseoart-hero h1 {
          max-width: 980px;
          margin: 0;
          font-size: clamp(48px,5.6vw,84px);
          line-height: .99;
          letter-spacing: -.06em;
        }

        .mwseoart-description {
          max-width: 800px;
          margin: 25px 0 0;
          color: #b8c6cf;
          font-size: clamp(16px,1.4vw,20px);
          line-height: 1.75;
        }

        .mwseoart-meta {
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

        .mwseoart-stage {
          min-height: 470px;
          display: grid;
          place-items: center;
        }

        .mwseoart-console {
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

        .mwseoart-console-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .mwseoart-console-top strong {
          color: #81929d;
          font-size: 9px;
          letter-spacing: .12em;
        }

        .mwseoart-console-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #8da0aa;
          font-size: 8px;
          font-weight: 900;
        }

        .mwseoart-console-status::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--mwseoart-green);
          box-shadow: 0 0 7px rgba(53,224,126,.7);
        }

        .mwseoart-search-card {
          padding: 18px;
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 11px;
          background: #071015;
        }

        .mwseoart-search-card span {
          color: #62757f;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: .09em;
          text-transform: uppercase;
        }

        .mwseoart-search-title {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 10px;
          color: var(--mwseoart-blue-light);
          font-size: 14px;
          font-weight: 900;
        }

        .mwseoart-search-title svg {
          width: 21px;
          height: 21px;
        }

        .mwseoart-search-card p {
          margin: 10px 0 0;
          color: #768993;
          font-size: 9px;
          line-height: 1.6;
        }

        .mwseoart-tech-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 9px;
          margin-top: 10px;
        }

        .mwseoart-tech-card {
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

        .mwseoart-tech-card:nth-child(even) {
          border-color: rgba(255,121,0,.14);
        }

        .mwseoart-tech-card svg {
          width: 22px;
          height: 22px;
          color: var(--mwseoart-blue-light);
        }

        .mwseoart-tech-card:nth-child(even) svg {
          color: var(--mwseoart-orange-light);
        }

        .mwseoart-tech-card strong {
          font-size: 8px;
          letter-spacing: .05em;
        }

        /* =====================================================
           ARTICLE LAYOUT
        ===================================================== */

        .mwseoart-article-section {
          padding:
            95px
            clamp(20px,5vw,80px)
            110px;
          background: #020304;
        }

        .mwseoart-layout {
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

        .mwseoart-toc {
          position: sticky;
          top: 30px;
          padding: 23px;
          border: 1px solid var(--mwseoart-border);
          border-radius: 14px;
          background:
            linear-gradient(
              145deg,
              #09131a,
              #04080b
            );
        }

        .mwseoart-toc-title {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 15px;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .mwseoart-toc-title svg {
          width: 16px;
          height: 16px;
          color: var(--mwseoart-blue-light);
        }

        .mwseoart-toc a {
          display: block;
          padding: 8px 0;
          color: #8799a3;
          text-decoration: none;
          font-size: 12px;
          line-height: 1.45;
        }

        .mwseoart-toc a:hover {
          color: var(--mwseoart-blue-light);
        }

        .mwseoart-toc-cta {
          margin-top: 18px;
          padding-top: 17px;
          border-top: 1px solid rgba(255,255,255,.07);
        }

        .mwseoart-toc-cta a {
          color: var(--mwseoart-orange-light);
          font-weight: 850;
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .mwseoart-content {
          min-width: 0;
        }

        .mwseoart-section {
          margin-bottom: 62px;
          scroll-margin-top: 35px;
        }

        .mwseoart-section h2 {
          margin: 0 0 20px;
          font-size: clamp(30px,3.5vw,48px);
          line-height: 1.08;
          letter-spacing: -.045em;
        }

        .mwseoart-section h3 {
          margin: 32px 0 12px;
          color: var(--mwseoart-blue-light);
          font-size: 21px;
          line-height: 1.3;
        }

        .mwseoart-section p {
          margin: 0 0 19px;
          color: #b6c3ca;
          font-size: 16px;
          line-height: 1.85;
        }

        .mwseoart-section strong {
          color: #ffffff;
        }

        /* =====================================================
           ANSWER BOX
        ===================================================== */

        .mwseoart-answer {
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

        .mwseoart-answer-label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          color: var(--mwseoart-blue-light);
          font-size: 9px;
          font-weight: 950;
          letter-spacing: .11em;
          text-transform: uppercase;
        }

        .mwseoart-answer-label svg {
          width: 17px;
          height: 17px;
        }

        .mwseoart-answer h2 {
          margin: 0 0 12px;
          font-size: clamp(24px,3vw,36px);
          line-height: 1.1;
        }

        .mwseoart-answer p {
          margin: 0;
          color: #b7c5cc;
          font-size: 15px;
          line-height: 1.75;
        }

        /* =====================================================
           FOUNDATION CARDS
        ===================================================== */

        .mwseoart-foundation-grid {
          display: grid;
          grid-template-columns: repeat(2,minmax(0,1fr));
          gap: 14px;
          margin-top: 28px;
        }

        .mwseoart-foundation-card {
          min-height: 245px;
          padding: 23px;
          border: 1px solid rgba(8,185,244,.14);
          border-radius: 14px;
          background: rgba(8,185,244,.018);
        }

        .mwseoart-foundation-card:nth-child(even) {
          border-color: rgba(255,121,0,.14);
          background: rgba(255,121,0,.016);
        }

        .mwseoart-foundation-card svg {
          width: 30px;
          height: 30px;
          margin-bottom: 16px;
          color: var(--mwseoart-blue-light);
        }

        .mwseoart-foundation-card:nth-child(even) svg {
          color: var(--mwseoart-orange-light);
        }

        .mwseoart-foundation-card h3 {
          margin: 0 0 10px;
          color: #ffffff;
          font-size: 18px;
        }

        .mwseoart-foundation-card p {
          margin: 0;
          color: var(--mwseoart-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           BUILD PROCESS
        ===================================================== */

        .mwseoart-process-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 12px;
          margin-top: 28px;
        }

        .mwseoart-process-card {
          min-height: 230px;
          padding: 22px;
          border: 1px solid rgba(8,185,244,.14);
          border-radius: 13px;
          background: #071015;
        }

        .mwseoart-process-card:nth-child(even) {
          border-color: rgba(255,121,0,.14);
        }

        .mwseoart-process-number {
          margin-bottom: 14px;
          color: var(--mwseoart-blue-light);
          font-size: 9px;
          font-weight: 950;
          letter-spacing: .1em;
        }

        .mwseoart-process-card:nth-child(even)
          .mwseoart-process-number {
          color: var(--mwseoart-orange-light);
        }

        .mwseoart-process-card h3 {
          margin: 0 0 9px;
          color: #ffffff;
          font-size: 18px;
        }

        .mwseoart-process-card p {
          margin: 0;
          color: var(--mwseoart-muted);
          font-size: 12px;
          line-height: 1.66;
        }

        /* =====================================================
           PAGE ELEMENTS
        ===================================================== */

        .mwseoart-page-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 12px;
          margin-top: 27px;
        }

        .mwseoart-page-card {
          padding: 23px;
          border: 1px solid var(--mwseoart-border);
          border-radius: 13px;
          background: #071015;
        }

        .mwseoart-page-card h3 {
          margin: 0 0 9px;
          color: var(--mwseoart-blue-light);
          font-size: 18px;
        }

        .mwseoart-page-card:nth-child(even) h3 {
          color: var(--mwseoart-orange-light);
        }

        .mwseoart-page-card p {
          margin: 0;
          color: var(--mwseoart-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           CHECKLIST
        ===================================================== */

        .mwseoart-checklist {
          display: grid;
          gap: 10px;
          margin: 25px 0;
          padding: 0;
          list-style: none;
        }

        .mwseoart-checklist li {
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

        .mwseoart-checklist svg {
          width: 17px;
          height: 17px;
          flex: 0 0 auto;
          margin-top: 1px;
          color: var(--mwseoart-blue-light);
        }

        /* =====================================================
           DISCOVERY LAYERS
        ===================================================== */

        .mwseoart-discovery-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 14px;
          margin-top: 28px;
        }

        .mwseoart-discovery-card {
          min-height: 315px;
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

        .mwseoart-discovery-card:nth-child(even) {
          border-color: rgba(255,121,0,.16);
        }

        .mwseoart-discovery-card svg {
          width: 32px;
          height: 32px;
          margin-bottom: 17px;
          color: var(--mwseoart-blue-light);
        }

        .mwseoart-discovery-card:nth-child(even) svg {
          color: var(--mwseoart-orange-light);
        }

        .mwseoart-discovery-card span {
          display: block;
          margin-bottom: 7px;
          color: #677a84;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: .09em;
          text-transform: uppercase;
        }

        .mwseoart-discovery-card h3 {
          margin: 0 0 12px;
          color: #ffffff;
          font-size: 24px;
        }

        .mwseoart-discovery-card p {
          margin: 0;
          color: var(--mwseoart-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           AVOID GRID
        ===================================================== */

        .mwseoart-avoid-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 12px;
          margin-top: 27px;
        }

        .mwseoart-avoid-card {
          padding: 23px;
          border: 1px solid rgba(255,121,0,.14);
          border-radius: 13px;
          background: rgba(255,121,0,.015);
        }

        .mwseoart-avoid-card:nth-child(even) {
          border-color: rgba(8,185,244,.14);
        }

        .mwseoart-avoid-card h3 {
          margin: 0 0 9px;
          color: var(--mwseoart-orange-light);
          font-size: 18px;
        }

        .mwseoart-avoid-card:nth-child(even) h3 {
          color: var(--mwseoart-blue-light);
        }

        .mwseoart-avoid-card p {
          margin: 0;
          color: var(--mwseoart-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           CALLOUT
        ===================================================== */

        .mwseoart-callout {
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

        .mwseoart-callout-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          margin-bottom: 15px;
          border: 1px solid rgba(255,121,0,.25);
          border-radius: 12px;
          color: var(--mwseoart-orange-light);
          background: rgba(255,121,0,.045);
        }

        .mwseoart-callout-icon svg {
          width: 24px;
          height: 24px;
        }

        .mwseoart-callout h3 {
          margin: 0 0 10px;
          color: #ffffff;
          font-size: 22px;
        }

        .mwseoart-callout p {
          margin: 0;
          color: var(--mwseoart-muted);
          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           FAQ
        ===================================================== */

        .mwseoart-faq-grid {
          display: grid;
          gap: 12px;
          margin-top: 27px;
        }

        .mwseoart-faq-card {
          padding: 23px;
          border: 1px solid var(--mwseoart-border);
          border-radius: 13px;
          background: #071015;
        }

        .mwseoart-faq-card h3 {
          margin: 0 0 9px;
          color: var(--mwseoart-blue-light);
          font-size: 17px;
        }

        .mwseoart-faq-card:nth-child(even) h3 {
          color: var(--mwseoart-orange-light);
        }

        .mwseoart-faq-card p {
          margin: 0;
          color: var(--mwseoart-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .mwseoart-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 25px;
        }

        .mwseoart-btn {
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

        .mwseoart-btn:hover {
          transform: translateY(-2px);
        }

        .mwseoart-btn-blue {
          border: 1px solid rgba(56,215,255,.5);
          background:
            linear-gradient(
              180deg,
              #0ab6ed,
              #0789b6
            );
        }

        .mwseoart-btn-orange {
          border: 1px solid rgba(255,176,49,.55);
          background:
            linear-gradient(
              180deg,
              #ff9519,
              #f16600
            );
        }

        .mwseoart-btn-dark {
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.03);
        }

        .mwseoart-btn svg {
          width: 17px;
          height: 17px;
        }

        /* =====================================================
           ARTICLE CTA
        ===================================================== */

        .mwseoart-article-cta {
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

        .mwseoart-article-cta h2 {
          max-width: 810px;
          margin: 0;
          font-size: clamp(31px,4vw,49px);
          line-height: 1.05;
          letter-spacing: -.045em;
        }

        .mwseoart-article-cta p {
          max-width: 780px;
          margin: 17px 0 0;
          color: var(--mwseoart-muted);
          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           RELATED
        ===================================================== */

        .mwseoart-related-section {
          padding: 90px clamp(20px,5vw,80px);
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwseoart-related-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        .mwseoart-related-title {
          margin-bottom: 32px;
        }

        .mwseoart-related-title span {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 9px;
          color: var(--mwseoart-orange-light);
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .mwseoart-related-title svg {
          width: 16px;
          height: 16px;
        }

        .mwseoart-related-title h2 {
          margin: 0;
          font-size: clamp(31px,4vw,49px);
          letter-spacing: -.045em;
        }

        .mwseoart-related-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 14px;
        }

        .mwseoart-related-card {
          min-height: 245px;
          display: flex;
          flex-direction: column;
          padding: 24px;
          border: 1px solid var(--mwseoart-border);
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

        .mwseoart-related-card:hover {
          transform: translateY(-4px);
          border-color: rgba(8,185,244,.3);
        }

        .mwseoart-related-card:nth-child(even):hover {
          border-color: rgba(255,121,0,.3);
        }

        .mwseoart-related-card h3 {
          margin: 0;
          font-size: 18px;
          line-height: 1.3;
        }

        .mwseoart-related-card p {
          margin: 13px 0 0;
          color: var(--mwseoart-muted);
          font-size: 12px;
          line-height: 1.65;
        }

        .mwseoart-related-link {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: auto;
          padding-top: 21px;
          color: var(--mwseoart-blue-light);
          font-size: 11px;
          font-weight: 850;
        }

        .mwseoart-related-card:nth-child(even)
          .mwseoart-related-link {
          color: var(--mwseoart-orange-light);
        }

        .mwseoart-related-link svg {
          width: 15px;
          height: 15px;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1100px) {
          .mwseoart-process-grid,
          .mwseoart-discovery-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .mwseoart-discovery-card:last-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 1050px) {
          .mwseoart-hero-inner {
            grid-template-columns: 1fr;
          }

          .mwseoart-hero-copy {
            text-align: center;
          }

          .mwseoart-label {
            margin-left: auto;
            margin-right: auto;
          }

          .mwseoart-description {
            margin-left: auto;
            margin-right: auto;
          }

          .mwseoart-meta {
            justify-content: center;
          }

          .mwseoart-related-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .mwseoart-related-card:last-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 850px) {
          .mwseoart-layout {
            grid-template-columns: 1fr;
          }

          .mwseoart-toc {
            position: static;
            display: grid;
            grid-template-columns: repeat(2,1fr);
            gap: 0 20px;
          }

          .mwseoart-toc-title,
          .mwseoart-toc-cta {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 700px) {
          .mwseoart-hero-inner {
            padding: 70px 16px;
          }

          .mwseoart-hero h1 {
            font-size: clamp(43px,13vw,65px);
          }

          .mwseoart-article-section {
            padding: 70px 16px 85px;
          }

          .mwseoart-foundation-grid,
          .mwseoart-process-grid,
          .mwseoart-page-grid,
          .mwseoart-discovery-grid,
          .mwseoart-avoid-grid,
          .mwseoart-related-grid {
            grid-template-columns: 1fr;
          }

          .mwseoart-discovery-card:last-child,
          .mwseoart-related-card:last-child {
            grid-column: auto;
          }

          .mwseoart-related-section {
            padding: 70px 16px;
          }
        }

        @media (max-width: 500px) {
          .mwseoart-stage {
            min-height: 450px;
            transform: scale(.9);
            margin: -10px -20px;
          }

          .mwseoart-tech-grid {
            grid-template-columns: 1fr;
          }

          .mwseoart-toc {
            grid-template-columns: 1fr;
          }

          .mwseoart-toc-title,
          .mwseoart-toc-cta {
            grid-column: auto;
          }

          .mwseoart-section p {
            font-size: 15px;
          }
        }
      `}</style>

      {/* ======================================================
          BREADCRUMBS
      ====================================================== */}

      <div className="mwseoart-breadcrumb-wrap">
        <nav
          className="mwseoart-breadcrumbs"
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
            How Matthew Web Builds SEO-Ready Websites
          </span>
        </nav>
      </div>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="mwseoart-hero">
        <div className="mwseoart-hero-inner">
          <div className="mwseoart-hero-copy">
            <div className="mwseoart-label">
              <BookOpen />
              SEO • AEO • GEO • Website Education
            </div>

            <h1>
              How Matthew Web Builds{" "}
              <span className="mwseoart-blue">
                SEO-Ready
              </span>{" "}
              Small Business{" "}
              <span className="mwseoart-orange">
                Websites
              </span>
            </h1>

            <p className="mwseoart-description">
              Search optimization starts before
              the website is launched. Page
              architecture, useful content,
              metadata, internal links, mobile
              design, performance, sitemaps,
              crawl controls, and indexing
              preparation should work together
              as one system.
            </p>

            <div className="mwseoart-meta">
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
            className="mwseoart-stage"
            aria-hidden="true"
          >
            <div className="mwseoart-console">
              <div className="mwseoart-console-top">
                <strong>
                  WEBSITE // SEARCH FOUNDATION
                </strong>

                <span className="mwseoart-console-status">
                  READY
                </span>
              </div>

              <div className="mwseoart-search-card">
                <span>
                  PAGE STRUCTURE
                </span>

                <div className="mwseoart-search-title">
                  <SearchCheck />
                  Useful Content + Technical Control
                </div>

                <p>
                  Architecture → Content →
                  Metadata → Internal Links →
                  Crawl → Index → Measure
                </p>
              </div>

              <div className="mwseoart-tech-grid">
                <div className="mwseoart-tech-card">
                  <Network />
                  <strong>
                    STRUCTURE
                  </strong>
                </div>

                <div className="mwseoart-tech-card">
                  <Map />
                  <strong>
                    SITEMAP
                  </strong>
                </div>

                <div className="mwseoart-tech-card">
                  <FileSearch />
                  <strong>
                    INDEX
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

      <article className="mwseoart-article-section">
        <div className="mwseoart-layout">
          {/* ==================================================
              TABLE OF CONTENTS
          ================================================== */}

          <aside className="mwseoart-toc">
            <div className="mwseoart-toc-title">
              <BookOpen />
              In This Article
            </div>

            <a href="#short-answer">
              Short Answer
            </a>

            <a href="#seo-ready">
              What SEO-Ready Means
            </a>

            <a href="#foundation">
              SEO Foundations
            </a>

            <a href="#process">
              Matthew Web Process
            </a>

            <a href="#page-structure">
              Page Structure
            </a>

            <a href="#technical-seo">
              Technical SEO
            </a>

            <a href="#indexing">
              Sitemap & Indexing
            </a>

            <a href="#local-seo">
              Local SEO
            </a>

            <a href="#aeo-geo">
              AEO & GEO
            </a>

            <a href="#measurement">
              Measurement
            </a>

            <a href="#avoid">
              What We Avoid
            </a>

            <a href="#faq">
              SEO FAQs
            </a>

            <div className="mwseoart-toc-cta">
              <Link href="/seo-and-indexing">
                SEO & Indexing Services →
              </Link>
            </div>
          </aside>

          <div className="mwseoart-content">
            {/* =================================================
                SHORT ANSWER
            ================================================= */}

            <section
              className="mwseoart-answer"
              id="short-answer"
            >
              <div className="mwseoart-answer-label">
                <Zap />
                Short Answer
              </div>

              <h2>
                What Does Matthew Web Mean by
                “SEO-Ready”?
              </h2>

              <p>
                <strong>
                  SEO-ready means the website is
                  built with a strong technical
                  and content foundation for
                  search discovery.
                </strong>{" "}
                That includes crawlable public
                pages, clear architecture,
                useful content, titles,
                descriptions, headings,
                canonicals, internal links,
                mobile usability, performance
                awareness, sitemaps, indexing
                preparation, and structured data
                where appropriate. It does not
                mean a ranking is guaranteed.
              </p>
            </section>

            {/* =================================================
                SEO READY
            ================================================= */}

            <section
              className="mwseoart-section"
              id="seo-ready"
            >
              <h2>
                SEO Should Not Be an{" "}
                <span className="mwseoart-orange">
                  Afterthought
                </span>
              </h2>

              <p>
                One way to build a website is to
                finish every page first and then
                ask how to “add SEO.”
              </p>

              <p>
                Matthew Web prefers to treat
                search structure as part of the
                website itself.
              </p>

              <p>
                The page hierarchy affects
                internal linking. The service
                structure affects what content
                should exist. The code affects
                crawlability. The mobile layout
                affects usability. The sitemap
                reflects the public information
                architecture.
              </p>

              <p>
                These systems are connected.
              </p>

              <div className="mwseoart-callout">
                <div className="mwseoart-callout-icon">
                  <Target />
                </div>

                <h3>
                  SEO-Ready Is Not the Same as
                  “Guaranteed to Rank”
                </h3>

                <p>
                  Matthew Web can control how the
                  website is built and improved.
                  It cannot control Google,
                  Bing, competitors, customer
                  demand, search algorithms,
                  external links, or every factor
                  involved in ranking.
                </p>
              </div>
            </section>

            {/* =================================================
                FOUNDATIONS
            ================================================= */}

            <section
              className="mwseoart-section"
              id="foundation"
            >
              <h2>
                The{" "}
                <span className="mwseoart-blue">
                  SEO Foundation
                </span>
              </h2>

              <p>
                A search-ready website is not one
                plugin, one keyword field, or one
                sitemap submission.
              </p>

              <p>
                It is the combination of many
                smaller decisions.
              </p>

              <div className="mwseoart-foundation-grid">
                {seoFoundations.map(
                  (item) => {
                    const Icon =
                      item.icon;

                    return (
                      <div
                        className="mwseoart-foundation-card"
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
                PROCESS
            ================================================= */}

            <section
              className="mwseoart-section"
              id="process"
            >
              <h2>
                How Matthew Web Approaches the{" "}
                <span className="mwseoart-orange">
                  Build
                </span>
              </h2>

              <p>
                The best starting point is not a
                list of keywords.
              </p>

              <p>
                It is understanding the business,
                customers, services, problems,
                geography, and actions the
                website needs to support.
              </p>

              <div className="mwseoart-process-grid">
                {buildProcess.map(
                  (step) => (
                    <div
                      className="mwseoart-process-card"
                      key={step.number}
                    >
                      <div className="mwseoart-process-number">
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
            </section>

            {/* =================================================
                PAGE STRUCTURE
            ================================================= */}

            <section
              className="mwseoart-section"
              id="page-structure"
            >
              <h2>
                Build Each Page Around a{" "}
                <span className="mwseoart-blue">
                  Real Purpose
                </span>
              </h2>

              <p>
                Search-friendly content should
                still be written for people.
              </p>

              <p>
                A service page exists because a
                customer needs to understand that
                service. An article exists
                because a question deserves a
                useful answer. A location page
                should represent a real market or
                service area.
              </p>

              <div className="mwseoart-page-grid">
                {pageElements.map(
                  (item) => (
                    <div
                      className="mwseoart-page-card"
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

              <div className="mwseoart-callout">
                <div className="mwseoart-callout-icon">
                  <FileText />
                </div>

                <h3>
                  Useful Content Comes First
                </h3>

                <p>
                  Search optimization should make
                  strong content easier to
                  discover and understand. It
                  should not turn a useful page
                  into awkward keyword repetition
                  that customers do not want to
                  read.
                </p>
              </div>
            </section>

            {/* =================================================
                TECHNICAL SEO
            ================================================= */}

            <section
              className="mwseoart-section"
              id="technical-seo"
            >
              <h2>
                Technical SEO Is the{" "}
                <span className="mwseoart-orange">
                  Infrastructure Layer
                </span>
              </h2>

              <p>
                Once the right public pages
                exist, the technical system
                should make their purpose clear
                and avoid unnecessary crawl or
                indexing problems.
              </p>

              <ul className="mwseoart-checklist">
                {technicalChecklist.map(
                  (item) => (
                    <li key={item}>
                      <CheckCircle2 />
                      {item}
                    </li>
                  )
                )}
              </ul>

              <p>
                Not every page needs every
                possible type of structured data
                or optimization. The markup
                should accurately describe the
                content that actually exists.
              </p>
            </section>

            {/* =================================================
                INDEXING
            ================================================= */}

            <section
              className="mwseoart-section"
              id="indexing"
            >
              <h2>
                Sitemap, Crawling &{" "}
                <span className="mwseoart-blue">
                  Indexing
                </span>
              </h2>

              <p>
                A website can be online without
                every page being indexed.
              </p>

              <p>
                That is why the launch process
                should include a review of which
                pages are intended to be public,
                how they are linked, whether they
                appear in the sitemap, and
                whether technical rules allow
                search crawlers to access them.
              </p>

              <p>
                Matthew Web can support:
              </p>

              <ul className="mwseoart-checklist">
                <li>
                  <CheckCircle2 />
                  XML sitemap configuration
                </li>

                <li>
                  <CheckCircle2 />
                  Robots review
                </li>

                <li>
                  <CheckCircle2 />
                  Canonical URLs
                </li>

                <li>
                  <CheckCircle2 />
                  Internal-link structure
                </li>

                <li>
                  <CheckCircle2 />
                  Google Search Console support
                </li>

                <li>
                  <CheckCircle2 />
                  Bing Webmaster Tools support
                </li>

                <li>
                  <CheckCircle2 />
                  Indexing preparation
                </li>

                <li>
                  <CheckCircle2 />
                  Investigation of legitimate
                  crawl or indexing problems
                </li>
              </ul>

              <div className="mwseoart-buttons">
                <Link
                  href="/why-google-indexing-matters-after-launching-a-new-website"
                  className="mwseoart-btn mwseoart-btn-blue"
                >
                  Learn About Indexing
                  <ArrowRight />
                </Link>
              </div>
            </section>

            {/* =================================================
                LOCAL SEO
            ================================================= */}

            <section
              className="mwseoart-section"
              id="local-seo"
            >
              <h2>
                Local Businesses Need{" "}
                <span className="mwseoart-orange">
                  Real Local Signals
                </span>
              </h2>

              <p>
                For contractors, service
                companies, professional services,
                and other local businesses,
                search visibility often depends
                partly on geography.
              </p>

              <p>
                Matthew Web&apos;s near-term
                website-service focus includes
                Maine small businesses, so local
                information should be accurate
                and genuinely useful.
              </p>

              <ul className="mwseoart-checklist">
                {localElements.map(
                  (item) => (
                    <li key={item}>
                      <MapPin />
                      {item}
                    </li>
                  )
                )}
              </ul>

              <div className="mwseoart-callout">
                <div className="mwseoart-callout-icon">
                  <MapPin />
                </div>

                <h3>
                  Local SEO Does Not Mean Fake
                  Locations
                </h3>

                <p>
                  Matthew Web does not recommend
                  inventing offices, service
                  areas, customer projects, or
                  business addresses simply to
                  create more location keywords.
                </p>
              </div>
            </section>

            {/* =================================================
                AEO / GEO
            ================================================= */}

            <section
              className="mwseoart-section"
              id="aeo-geo"
            >
              <h2>
                Search Is Expanding Beyond{" "}
                <span className="mwseoart-blue">
                  Traditional Results
                </span>
              </h2>

              <p>
                Websites are increasingly
                discovered through several kinds
                of search and answer experiences.
              </p>

              <p>
                That makes clear, structured,
                useful first-party information
                even more important.
              </p>

              <div className="mwseoart-discovery-grid">
                {discoveryLayers.map(
                  (item) => {
                    const Icon =
                      item.icon;

                    return (
                      <div
                        className="mwseoart-discovery-card"
                        key={item.title}
                      >
                        <Icon />

                        <span>
                          {item.label}
                        </span>

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

              <h3>
                What Helps Answer and AI Systems?
              </h3>

              <p>
                Useful patterns can include
                concise answers, definitions,
                comparisons, step-by-step
                sections, FAQs, clear headings,
                authorship, dates, structured
                data, original research,
                project documentation, and
                consistent company information.
              </p>

              <p>
                Matthew Web&apos;s future
                technical content can also use
                first-party development work such
                as CPU/FPGA testing, software
                development, game-development
                reports, and real project
                documentation as original source
                material.
              </p>

              <div className="mwseoart-callout">
                <div className="mwseoart-callout-icon">
                  <Bot />
                </div>

                <h3>
                  No AI Visibility Guarantee
                </h3>

                <p>
                  Clear content can make
                  information easier for search
                  and AI systems to understand,
                  but Matthew Web cannot
                  guarantee that a specific
                  company, page, or statement
                  will appear in an answer from
                  ChatGPT, Gemini, Claude,
                  Perplexity, Google, Bing, or
                  another platform.
                </p>
              </div>
            </section>

            {/* =================================================
                MEASUREMENT
            ================================================= */}

            <section
              className="mwseoart-section"
              id="measurement"
            >
              <h2>
                Search Traffic Is Only Useful if
                It Supports a{" "}
                <span className="mwseoart-orange">
                  Business Goal
                </span>
              </h2>

              <p>
                Rankings by themselves do not pay
                the bills.
              </p>

              <p>
                A useful measurement system
                should eventually connect search
                and website activity to the
                customer journey.
              </p>

              <p>
                Matthew Web&apos;s Phase 2
                measurement system is intended to
                increasingly connect:
              </p>

              <ul className="mwseoart-checklist">
                <li>
                  <CheckCircle2 />
                  Traffic source
                </li>

                <li>
                  <CheckCircle2 />
                  Landing page
                </li>

                <li>
                  <CheckCircle2 />
                  Service interest
                </li>

                <li>
                  <CheckCircle2 />
                  CTA clicks
                </li>

                <li>
                  <CheckCircle2 />
                  Contact submissions
                </li>

                <li>
                  <CheckCircle2 />
                  Lead source
                </li>

                <li>
                  <CheckCircle2 />
                  Qualified lead status
                </li>

                <li>
                  <CheckCircle2 />
                  Customer conversion
                </li>

                <li>
                  <CheckCircle2 />
                  Revenue attribution where
                  reasonably possible
                </li>
              </ul>

              <div className="mwseoart-callout">
                <div className="mwseoart-callout-icon">
                  <BarChart3 />
                </div>

                <h3>
                  Traffic → Lead → Customer
                </h3>

                <p>
                  The long-term goal is not just
                  to know that someone visited a
                  page. It is to better
                  understand which content,
                  services, campaigns, and
                  customer paths produce useful
                  business opportunities.
                </p>
              </div>
            </section>

            {/* =================================================
                AVOID
            ================================================= */}

            <section
              className="mwseoart-section"
              id="avoid"
            >
              <h2>
                What Matthew Web{" "}
                <span className="mwseoart-blue">
                  Does Not Want SEO to Become
                </span>
              </h2>

              <p>
                Search optimization loses value
                when it becomes misleading,
                repetitive, or disconnected from
                the customer.
              </p>

              <div className="mwseoart-avoid-grid">
                {avoidItems.map(
                  (item) => (
                    <div
                      className="mwseoart-avoid-card"
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

              <div className="mwseoart-callout">
                <div className="mwseoart-callout-icon">
                  <ShieldCheck />
                </div>

                <h3>
                  Build Something Worth Finding
                </h3>

                <p>
                  The strongest long-term search
                  foundation combines useful
                  content, honest business
                  information, sound technical
                  structure, and ongoing
                  improvement based on real
                  evidence.
                </p>
              </div>
            </section>

            {/* =================================================
                FAQ
            ================================================= */}

            <section
              className="mwseoart-section"
              id="faq"
            >
              <h2>
                SEO-Ready Website{" "}
                <span className="mwseoart-orange">
                  FAQs
                </span>
              </h2>

              <div className="mwseoart-faq-grid">
                {faqs.map(
                  (item) => (
                    <div
                      className="mwseoart-faq-card"
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

            <section className="mwseoart-article-cta">
              <h2>
                Build the Website and the{" "}
                <span className="mwseoart-orange">
                  Search Foundation
                </span>{" "}
                Together.
              </h2>

              <p>
                Matthew Web builds small-business
                websites with page structure,
                mobile usability, metadata,
                internal links, sitemaps,
                indexing preparation, and
                technical search foundations
                considered as part of the build
                rather than added as an
                afterthought.
              </p>

              <div className="mwseoart-buttons">
                <Link
                  href="/contact-us"
                  className="mwseoart-btn mwseoart-btn-orange"
                >
                  Discuss Your Website
                  <ArrowRight />
                </Link>

                <Link
                  href="/seo-and-indexing"
                  className="mwseoart-btn mwseoart-btn-blue"
                >
                  SEO & Indexing
                </Link>

                <Link
                  href="/website-design"
                  className="mwseoart-btn mwseoart-btn-dark"
                >
                  Website Design
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* ======================================================
          RELATED ARTICLES
      ====================================================== */}

      <section className="mwseoart-related-section">
        <div className="mwseoart-related-inner">
          <div className="mwseoart-related-title">
            <span>
              <Sparkles />
              Continue Reading
            </span>

            <h2>
              Related{" "}
              <span className="mwseoart-blue">
                Articles
              </span>
            </h2>
          </div>

          <div className="mwseoart-related-grid">
            {relatedArticles.map(
              (article) => (
                <Link
                  href={article.href}
                  className="mwseoart-related-card"
                  key={article.href}
                >
                  <h3>
                    {article.title}
                  </h3>

                  <p>
                    {article.text}
                  </p>

                  <div className="mwseoart-related-link">
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
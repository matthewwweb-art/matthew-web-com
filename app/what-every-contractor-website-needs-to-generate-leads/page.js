import Link from "next/link";

import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Camera,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  FileText,
  Gauge,
  Globe2,
  Hammer,
  MapPin,
  MessageSquare,
  MonitorSmartphone,
  Phone,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  UserCheck,
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
    "What Every Contractor Website Needs to Generate Leads | Matthew Web",

  description:
    "Learn what a contractor website needs to help turn visitors into real inquiries, including clear services, service areas, project photos, trust signals, mobile design, quote forms, calls to action, SEO structure, and contact information.",

  alternates: {
    canonical:
      "https://matthew-web.com/what-every-contractor-website-needs-to-generate-leads",
  },

  openGraph: {
    title:
      "What Every Contractor Website Needs to Generate Leads | Matthew Web",

    description:
      "A practical guide to building contractor websites around trust, service information, local visibility, clear calls to action, quote requests, project proof, and mobile usability.",

    url:
      "https://matthew-web.com/what-every-contractor-website-needs-to-generate-leads",

    siteName:
      "Matthew Web",

    type:
      "article",
  },
};

/* ============================================================
   CORE ELEMENTS
============================================================ */

const contractorElements = [
  {
    icon:
      Hammer,

    title:
      "Clear Service Pages",

    text:
      "Visitors should quickly understand what work the contractor performs. Roofing, plumbing, electrical, excavation, remodeling, landscaping, snow removal, and other services should not be buried inside vague marketing language.",
  },

  {
    icon:
      MapPin,

    title:
      "Service Area Information",

    text:
      "Contractors should clearly explain where they work. City, town, county, and broader service-area information can help customers determine whether they are in the right place before contacting the business.",
  },

  {
    icon:
      Phone,

    title:
      "Visible Contact Options",

    text:
      "Phone numbers, inquiry forms, estimate requests, and other contact methods should be easy to find without forcing the visitor to search through multiple pages.",
  },

  {
    icon:
      Camera,

    title:
      "Real Project Proof",

    text:
      "Real project photos, before-and-after work, completed jobs, certifications, licenses where applicable, and other verified evidence can help visitors understand what the contractor actually does.",
  },

  {
    icon:
      MessageSquare,

    title:
      "Quote or Estimate Forms",

    text:
      "A structured form can collect useful information before the first conversation, such as project type, location, contact details, timing, and a description of the work.",
  },

  {
    icon:
      MonitorSmartphone,

    title:
      "Strong Mobile Experience",

    text:
      "Many customers will encounter the website from a phone. Navigation, phone links, forms, buttons, text, and project photos should remain practical on smaller screens.",
  },

  {
    icon:
      SearchCheck,

    title:
      "Search-Friendly Structure",

    text:
      "Service pages, useful headings, metadata, local information, internal links, sitemaps, and crawlable content help search engines understand what the contractor does and where the business works.",
  },

  {
    icon:
      Gauge,

    title:
      "Reasonable Performance",

    text:
      "Heavy images, unnecessary scripts, oversized video, and poor mobile layouts can make a contractor site frustrating to use. Performance should be considered when the site is built.",
  },
];

/* ============================================================
   TRUST SIGNALS
============================================================ */

const trustSignals = [
  {
    title:
      "Real Business Information",

    text:
      "Business name, phone number, service area, hours where appropriate, contact methods, and company information should be consistent.",
  },

  {
    title:
      "Verified Reviews",

    text:
      "Real customer feedback can be useful when the contractor has permission to publish it. Reviews should not be fabricated or rewritten into claims the customer never made.",
  },

  {
    title:
      "Project Photos",

    text:
      "Photos from actual work can help customers understand the contractor's experience and the types of projects the business handles.",
  },

  {
    title:
      "Licenses, Insurance, or Credentials",

    text:
      "If a contractor legitimately holds licenses, insurance, certifications, manufacturer credentials, or professional affiliations, those facts can be displayed accurately where relevant.",
  },

  {
    title:
      "Clear Policies & Expectations",

    text:
      "Customers benefit when the site explains how to request work, what information is needed, and what happens after an inquiry.",
  },

  {
    title:
      "Professional Presentation",

    text:
      "A site should look intentional, readable, current, and usable. Trust can be damaged when important pages are broken, incomplete, confusing, or obviously outdated.",
  },
];

/* ============================================================
   FORM FIELDS
============================================================ */

const formFields = [
  "Name",
  "Email address",
  "Phone number",
  "Project location or service area",
  "Type of work requested",
  "Short project description",
  "Preferred contact method where useful",
  "Optional photos or additional information when the system supports them",
];

/* ============================================================
   COMMON PROBLEMS
============================================================ */

const commonProblems = [
  {
    icon:
      FileText,

    title:
      "One Generic Services Paragraph",

    text:
      "If every service is compressed into one paragraph, both visitors and search engines have less context about what the business actually provides.",
  },

  {
    icon:
      Phone,

    title:
      "Hidden Contact Information",

    text:
      "A visitor should not have to hunt through menus to find the phone number or request form.",
  },

  {
    icon:
      Building2,

    title:
      "No Service Area",

    text:
      "A customer may leave simply because they cannot tell whether the contractor works in their town.",
  },

  {
    icon:
      Camera,

    title:
      "Stock Photos Instead of Proof",

    text:
      "Stock imagery can support a design, but it should not be presented as completed customer work. Real project evidence is much stronger when available.",
  },

  {
    icon:
      Gauge,

    title:
      "Poor Mobile Usability",

    text:
      "Small text, tiny buttons, broken layouts, oversized images, or difficult forms can make the site harder to use on a phone.",
  },

  {
    icon:
      Target,

    title:
      "No Clear Next Action",

    text:
      "If the visitor reaches the end of a page without knowing whether to call, request an estimate, send project details, or view another service, the conversion path is incomplete.",
  },
];

/* ============================================================
   FAQ
============================================================ */

const faqs = [
  {
    q:
      "What is the most important part of a contractor website?",

    a:
      "The site should quickly explain what the contractor does, where the business works, why the visitor can trust the company, and how to request the next step.",
  },

  {
    q:
      "Should every contractor service have its own page?",

    a:
      "Not always, but important distinct services often benefit from dedicated pages when each service needs its own explanation, examples, local relevance, or customer path.",
  },

  {
    q:
      "Does a contractor website need a quote form?",

    a:
      "A form is not mandatory, but it can be useful for collecting structured project information from customers who prefer not to call immediately.",
  },

  {
    q:
      "Should contractors put prices on their website?",

    a:
      "It depends on the business. Fixed-price services may be easier to publish, while custom construction or repair work may require inspection, measurements, materials, labor, location, or other project details before pricing can be established.",
  },

  {
    q:
      "Do reviews help a contractor website?",

    a:
      "Real customer reviews can provide useful trust evidence. Only verified or genuinely received feedback should be presented as customer testimony.",
  },

  {
    q:
      "Can SEO guarantee contractor leads?",

    a:
      "No. SEO can improve how well a site is structured and understood, but rankings, traffic, inquiries, and sales depend on competition, demand, content, reputation, search systems, and many other factors.",
  },
];

/* ============================================================
   RELATED ARTICLES
============================================================ */

const relatedArticles = [
  {
    title:
      "How Booking Forms, Quote Forms, and Automation Help Local Businesses",

    href:
      "/how-booking-forms-quote-forms-and-automation-help-local-businesses",

    text:
      "See how structured forms and automation can improve customer inquiries and follow-up workflows.",
  },

  {
    title:
      "How Matthew Web Builds SEO-Ready Small Business Websites",

    href:
      "/how-matthew-web-builds-seo-ready-small-business-websites",

    text:
      "Learn how page structure, metadata, internal links, mobile design, and indexing preparation fit together.",
  },

  {
    title:
      "Why Fast Website Load Speed Helps Leads, SEO, and Trust",

    href:
      "/why-fast-website-load-speed-helps-leads-seo-and-trust",

    text:
      "Learn why website performance matters for visitors, mobile usability, and technical quality.",
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
    "What Every Contractor Website Needs to Generate Leads",

  description:
    "A practical guide to the website elements contractors need to support customer inquiries, trust, local visibility, and lead generation.",

  mainEntityOfPage: {
    "@type":
      "WebPage",

    "@id":
      "https://matthew-web.com/what-every-contractor-website-needs-to-generate-leads",
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
        "What Every Contractor Website Needs to Generate Leads",

      item:
        "https://matthew-web.com/what-every-contractor-website-needs-to-generate-leads",
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

export default function ContractorWebsiteLeadPage() {
  return (
    <main className="mwcw-page">
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
          --mwcw-black:
            #020304;

          --mwcw-panel:
            #091117;

          --mwcw-muted:
            #aebbc5;

          --mwcw-blue:
            #08b9f4;

          --mwcw-blue-light:
            #38d7ff;

          --mwcw-orange:
            #ff7900;

          --mwcw-orange-light:
            #ffab31;

          --mwcw-green:
            #35e07e;

          --mwcw-border:
            rgba(
              255,
              255,
              255,
              0.09
            );
        }

        html {
          scroll-behavior:
            smooth;
        }

        body {
          margin:
            0;

          background:
            var(
              --mwcw-black
            );
        }

        .mwcw-page {
          min-height:
            100vh;

          overflow:
            hidden;

          color:
            #ffffff;

          background:
            var(
              --mwcw-black
            );
        }

        .mwcw-blue {
          color:
            var(
              --mwcw-blue-light
            );
        }

        .mwcw-orange {
          color:
            var(
              --mwcw-orange
            );
        }

        /* =====================================================
           BREADCRUMBS
        ===================================================== */

        .mwcw-breadcrumb-wrap {
          border-bottom:
            1px solid
            rgba(
              255,
              255,
              255,
              0.06
            );

          background:
            #04080b;
        }

        .mwcw-breadcrumbs {
          max-width:
            1380px;

          margin:
            0 auto;

          display:
            flex;

          align-items:
            center;

          flex-wrap:
            wrap;

          gap:
            7px;

          padding:
            14px
            clamp(
              20px,
              5vw,
              80px
            );

          color:
            #71838d;

          font-size:
            10px;

          font-weight:
            800;
        }

        .mwcw-breadcrumbs a {
          color:
            #8799a3;

          text-decoration:
            none;
        }

        .mwcw-breadcrumbs a:hover {
          color:
            var(
              --mwcw-blue-light
            );
        }

        .mwcw-breadcrumbs svg {
          width:
            12px;

          height:
            12px;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwcw-hero {
          position:
            relative;

          overflow:
            hidden;

          border-bottom:
            1px solid
            rgba(
              8,
              185,
              244,
              0.16
            );

          background:
            radial-gradient(
              ellipse at
              16% 42%,
              rgba(
                8,
                185,
                244,
                0.16
              ),
              transparent
              37%
            ),
            radial-gradient(
              ellipse at
              82% 48%,
              rgba(
                255,
                121,
                0,
                0.09
              ),
              transparent
              33%
            ),
            linear-gradient(
              180deg,
              #020304,
              #03080c,
              #020304
            );
        }

        .mwcw-hero::before {
          content:
            "";

          position:
            absolute;

          inset:
            0;

          opacity:
            0.26;

          pointer-events:
            none;

          background-image:
            linear-gradient(
              rgba(
                8,
                185,
                244,
                0.055
              )
              1px,
              transparent
              1px
            ),
            linear-gradient(
              90deg,
              rgba(
                8,
                185,
                244,
                0.055
              )
              1px,
              transparent
              1px
            );

          background-size:
            76px 76px;

          mask-image:
            radial-gradient(
              ellipse at center,
              black,
              transparent
              80%
            );
        }

        .mwcw-hero-inner {
          position:
            relative;

          z-index:
            2;

          width:
            100%;

          max-width:
            1380px;

          margin:
            0 auto;

          display:
            grid;

          grid-template-columns:
            minmax(
              0,
              1.08fr
            )
            minmax(
              390px,
              0.92fr
            );

          align-items:
            center;

          gap:
            clamp(
              45px,
              6vw,
              90px
            );

          padding:
            100px
            clamp(
              20px,
              5vw,
              80px
            )
            105px;
        }

        .mwcw-article-label {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            8px;

          width:
            fit-content;

          margin-bottom:
            19px;

          padding:
            8px 12px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.27
            );

          border-radius:
            999px;

          color:
            #d9f8ff;

          background:
            rgba(
              8,
              185,
              244,
              0.055
            );

          font-size:
            10px;

          font-weight:
            900;

          letter-spacing:
            0.13em;

          text-transform:
            uppercase;
        }

        .mwcw-article-label svg {
          width:
            16px;

          height:
            16px;
        }

        .mwcw-hero h1 {
          max-width:
            920px;

          margin:
            0;

          font-size:
            clamp(
              48px,
              5.6vw,
              84px
            );

          line-height:
            0.99;

          letter-spacing:
            -0.06em;
        }

        .mwcw-hero-description {
          max-width:
            770px;

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

        .mwcw-meta {
          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            8px 18px;

          margin-top:
            25px;

          color:
            #71838d;

          font-size:
            10px;

          font-weight:
            800;

          letter-spacing:
            0.05em;

          text-transform:
            uppercase;
        }

        /* =====================================================
           CONTRACTOR VISUAL
        ===================================================== */

        .mwcw-stage {
          min-height:
            455px;

          display:
            grid;

          place-items:
            center;
        }

        .mwcw-dashboard {
          width:
            min(
              100%,
              500px
            );

          padding:
            26px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.28
            );

          border-radius:
            20px;

          background:
            radial-gradient(
              circle at
              20% 20%,
              rgba(
                8,
                185,
                244,
                0.11
              ),
              transparent
              35%
            ),
            linear-gradient(
              145deg,
              #0b161d,
              #04080b
            );

          box-shadow:
            0 30px 70px
            rgba(
              0,
              0,
              0,
              0.45
            );
        }

        .mwcw-dash-top {
          display:
            flex;

          justify-content:
            space-between;

          align-items:
            center;

          margin-bottom:
            22px;
        }

        .mwcw-dash-top strong {
          color:
            #81929d;

          font-size:
            9px;

          letter-spacing:
            0.12em;
        }

        .mwcw-live {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            6px;

          color:
            #8da0aa;

          font-size:
            8px;

          font-weight:
            900;

          letter-spacing:
            0.08em;
        }

        .mwcw-live::before {
          content:
            "";

          width:
            6px;

          height:
            6px;

          border-radius:
            50%;

          background:
            var(
              --mwcw-green
            );

          box-shadow:
            0 0 7px
            rgba(
              53,
              224,
              126,
              0.7
            );
        }

        .mwcw-contractor-card {
          display:
            grid;

          grid-template-columns:
            82px 1fr;

          align-items:
            center;

          gap:
            18px;

          padding:
            18px;

          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.18
            );

          border-radius:
            12px;

          background:
            #071015;
        }

        .mwcw-contractor-icon {
          width:
            78px;

          height:
            78px;

          display:
            grid;

          place-items:
            center;

          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.3
            );

          border-radius:
            18px;

          color:
            var(
              --mwcw-orange-light
            );

          background:
            rgba(
              255,
              121,
              0,
              0.05
            );
        }

        .mwcw-contractor-icon svg {
          width:
            39px;

          height:
            39px;
        }

        .mwcw-contractor-copy span {
          color:
            var(
              --mwcw-orange-light
            );

          font-size:
            8px;

          font-weight:
            900;

          letter-spacing:
            0.1em;

          text-transform:
            uppercase;
        }

        .mwcw-contractor-copy strong {
          display:
            block;

          margin-top:
            7px;

          font-size:
            18px;
        }

        .mwcw-contractor-copy p {
          margin:
            6px 0 0;

          color:
            #758892;

          font-size:
            9px;

          line-height:
            1.55;
        }

        .mwcw-flow {
          display:
            grid;

          grid-template-columns:
            repeat(
              3,
              1fr
            );

          gap:
            9px;

          margin-top:
            11px;
        }

        .mwcw-flow-card {
          min-height:
            90px;

          display:
            flex;

          flex-direction:
            column;

          justify-content:
            center;

          align-items:
            center;

          gap:
            8px;

          padding:
            12px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.14
            );

          border-radius:
            9px;

          background:
            #071015;

          text-align:
            center;
        }

        .mwcw-flow-card:nth-child(even) {
          border-color:
            rgba(
              255,
              121,
              0,
              0.14
            );
        }

        .mwcw-flow-card svg {
          width:
            22px;

          height:
            22px;

          color:
            var(
              --mwcw-blue-light
            );
        }

        .mwcw-flow-card:nth-child(even)
          svg {
          color:
            var(
              --mwcw-orange-light
            );
        }

        .mwcw-flow-card strong {
          color:
            #c5d0d6;

          font-size:
            8px;

          letter-spacing:
            0.05em;
        }

        /* =====================================================
           ARTICLE LAYOUT
        ===================================================== */

        .mwcw-article-section {
          padding:
            95px
            clamp(
              20px,
              5vw,
              80px
            )
            110px;

          background:
            #020304;
        }

        .mwcw-article-layout {
          max-width:
            1280px;

          margin:
            0 auto;

          display:
            grid;

          grid-template-columns:
            minmax(
              220px,
              0.27fr
            )
            minmax(
              0,
              0.73fr
            );

          align-items:
            start;

          gap:
            clamp(
              40px,
              6vw,
              75px
            );
        }

        /* =====================================================
           TOC
        ===================================================== */

        .mwcw-toc {
          position:
            sticky;

          top:
            30px;

          padding:
            23px;

          border:
            1px solid
            var(
              --mwcw-border
            );

          border-radius:
            14px;

          background:
            linear-gradient(
              145deg,
              #09131a,
              #04080b
            );
        }

        .mwcw-toc-title {
          display:
            flex;

          align-items:
            center;

          gap:
            8px;

          margin-bottom:
            15px;

          font-size:
            10px;

          font-weight:
            900;

          letter-spacing:
            0.1em;

          text-transform:
            uppercase;
        }

        .mwcw-toc-title svg {
          width:
            16px;

          height:
            16px;

          color:
            var(
              --mwcw-blue-light
            );
        }

        .mwcw-toc a {
          display:
            block;

          padding:
            8px 0;

          color:
            #8799a3;

          text-decoration:
            none;

          font-size:
            12px;

          line-height:
            1.45;
        }

        .mwcw-toc a:hover {
          color:
            var(
              --mwcw-blue-light
            );
        }

        .mwcw-toc-cta {
          margin-top:
            18px;

          padding-top:
            17px;

          border-top:
            1px solid
            rgba(
              255,
              255,
              255,
              0.07
            );
        }

        .mwcw-toc-cta a {
          color:
            var(
              --mwcw-orange-light
            );

          font-weight:
            850;
        }

        /* =====================================================
           ARTICLE TYPOGRAPHY
        ===================================================== */

        .mwcw-content {
          min-width:
            0;
        }

        .mwcw-content-section {
          margin-bottom:
            62px;

          scroll-margin-top:
            35px;
        }

        .mwcw-content-section h2 {
          margin:
            0 0 20px;

          font-size:
            clamp(
              30px,
              3.5vw,
              48px
            );

          line-height:
            1.08;

          letter-spacing:
            -0.045em;
        }

        .mwcw-content-section h3 {
          margin:
            32px 0 12px;

          color:
            var(
              --mwcw-blue-light
            );

          font-size:
            21px;

          line-height:
            1.3;
        }

        .mwcw-content-section p {
          margin:
            0 0 19px;

          color:
            #b6c3ca;

          font-size:
            16px;

          line-height:
            1.85;
        }

        .mwcw-content-section strong {
          color:
            #ffffff;
        }

        /* =====================================================
           ANSWER BOX
        ===================================================== */

        .mwcw-answer-box {
          margin-bottom:
            55px;

          padding:
            29px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.23
            );

          border-radius:
            17px;

          background:
            radial-gradient(
              circle at
              90% 20%,
              rgba(
                8,
                185,
                244,
                0.06
              ),
              transparent
              35%
            ),
            #071015;
        }

        .mwcw-answer-label {
          display:
            flex;

          align-items:
            center;

          gap:
            8px;

          margin-bottom:
            12px;

          color:
            var(
              --mwcw-blue-light
            );

          font-size:
            9px;

          font-weight:
            950;

          letter-spacing:
            0.11em;

          text-transform:
            uppercase;
        }

        .mwcw-answer-label svg {
          width:
            17px;

          height:
            17px;
        }

        .mwcw-answer-box h2 {
          margin:
            0 0 12px;

          font-size:
            clamp(
              24px,
              3vw,
              36px
            );

          line-height:
            1.1;
        }

        .mwcw-answer-box p {
          margin:
            0;

          color:
            #b7c5cc;

          font-size:
            15px;

          line-height:
            1.75;
        }

        /* =====================================================
           CORE ELEMENTS
        ===================================================== */

        .mwcw-element-grid {
          display:
            grid;

          grid-template-columns:
            repeat(
              2,
              minmax(
                0,
                1fr
              )
            );

          gap:
            14px;

          margin-top:
            28px;
        }

        .mwcw-element-card {
          min-height:
            250px;

          padding:
            23px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.14
            );

          border-radius:
            14px;

          background:
            rgba(
              8,
              185,
              244,
              0.018
            );
        }

        .mwcw-element-card:nth-child(even) {
          border-color:
            rgba(
              255,
              121,
              0,
              0.14
            );

          background:
            rgba(
              255,
              121,
              0,
              0.016
            );
        }

        .mwcw-element-card svg {
          width:
            30px;

          height:
            30px;

          margin-bottom:
            16px;

          color:
            var(
              --mwcw-blue-light
            );
        }

        .mwcw-element-card:nth-child(even)
          svg {
          color:
            var(
              --mwcw-orange-light
            );
        }

        .mwcw-element-card h3 {
          margin:
            0 0 10px;

          color:
            #ffffff;

          font-size:
            18px;
        }

        .mwcw-element-card p {
          margin:
            0;

          color:
            var(
              --mwcw-muted
            );

          font-size:
            13px;

          line-height:
            1.7;
        }

        /* =====================================================
           LEAD PATH
        ===================================================== */

        .mwcw-lead-path {
          display:
            grid;

          grid-template-columns:
            repeat(
              4,
              minmax(
                0,
                1fr
              )
            );

          gap:
            11px;

          margin-top:
            28px;
        }

        .mwcw-lead-step {
          min-height:
            210px;

          padding:
            21px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.15
            );

          border-radius:
            13px;

          background:
            #071015;
        }

        .mwcw-lead-step:nth-child(even) {
          border-color:
            rgba(
              255,
              121,
              0,
              0.15
            );
        }

        .mwcw-lead-number {
          margin-bottom:
            14px;

          color:
            var(
              --mwcw-blue-light
            );

          font-size:
            10px;

          font-weight:
            950;

          letter-spacing:
            0.1em;
        }

        .mwcw-lead-step:nth-child(even)
          .mwcw-lead-number {
          color:
            var(
              --mwcw-orange-light
            );
        }

        .mwcw-lead-step h3 {
          margin:
            0 0 10px;

          color:
            #ffffff;

          font-size:
            17px;
        }

        .mwcw-lead-step p {
          margin:
            0;

          color:
            var(
              --mwcw-muted
            );

          font-size:
            12px;

          line-height:
            1.65;
        }

        /* =====================================================
           TRUST GRID
        ===================================================== */

        .mwcw-trust-grid {
          display:
            grid;

          grid-template-columns:
            repeat(
              2,
              minmax(
                0,
                1fr
              )
            );

          gap:
            12px;

          margin-top:
            27px;
        }

        .mwcw-trust-card {
          padding:
            22px;

          border:
            1px solid
            var(
              --mwcw-border
            );

          border-radius:
            13px;

          background:
            #071015;
        }

        .mwcw-trust-card h3 {
          margin:
            0 0 8px;

          color:
            var(
              --mwcw-blue-light
            );

          font-size:
            17px;
        }

        .mwcw-trust-card:nth-child(even)
          h3 {
          color:
            var(
              --mwcw-orange-light
            );
        }

        .mwcw-trust-card p {
          margin:
            0;

          color:
            var(
              --mwcw-muted
            );

          font-size:
            13px;

          line-height:
            1.68;
        }

        /* =====================================================
           CHECKLIST
        ===================================================== */

        .mwcw-checklist {
          display:
            grid;

          gap:
            10px;

          margin:
            25px 0 0;

          padding:
            0;

          list-style:
            none;
        }

        .mwcw-checklist li {
          display:
            flex;

          align-items:
            flex-start;

          gap:
            10px;

          padding:
            13px 15px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.07
            );

          border-radius:
            9px;

          color:
            #c0ccd2;

          background:
            rgba(
              255,
              255,
              255,
              0.015
            );

          font-size:
            13px;

          line-height:
            1.55;
        }

        .mwcw-checklist svg {
          width:
            17px;

          height:
            17px;

          flex:
            0 0 auto;

          margin-top:
            1px;

          color:
            var(
              --mwcw-blue-light
            );
        }

        /* =====================================================
           COMMON PROBLEMS
        ===================================================== */

        .mwcw-problem-grid {
          display:
            grid;

          grid-template-columns:
            repeat(
              2,
              minmax(
                0,
                1fr
              )
            );

          gap:
            12px;

          margin-top:
            26px;
        }

        .mwcw-problem-card {
          padding:
            22px;

          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.13
            );

          border-radius:
            13px;

          background:
            rgba(
              255,
              121,
              0,
              0.015
            );
        }

        .mwcw-problem-card svg {
          width:
            28px;

          height:
            28px;

          margin-bottom:
            14px;

          color:
            var(
              --mwcw-orange-light
            );
        }

        .mwcw-problem-card h3 {
          margin:
            0 0 8px;

          color:
            #ffffff;

          font-size:
            17px;
        }

        .mwcw-problem-card p {
          margin:
            0;

          color:
            var(
              --mwcw-muted
            );

          font-size:
            12px;

          line-height:
            1.67;
        }

        /* =====================================================
           CALLOUT
        ===================================================== */

        .mwcw-callout {
          margin:
            45px 0;

          padding:
            30px;

          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.2
            );

          border-radius:
            16px;

          background:
            radial-gradient(
              circle at
              90% 20%,
              rgba(
                255,
                121,
                0,
                0.06
              ),
              transparent
              35%
            ),
            #071015;
        }

        .mwcw-callout-icon {
          width:
            48px;

          height:
            48px;

          display:
            grid;

          place-items:
            center;

          margin-bottom:
            15px;

          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.25
            );

          border-radius:
            12px;

          color:
            var(
              --mwcw-orange-light
            );

          background:
            rgba(
              255,
              121,
              0,
              0.045
            );
        }

        .mwcw-callout-icon svg {
          width:
            24px;

          height:
            24px;
        }

        .mwcw-callout h3 {
          margin:
            0 0 10px;

          color:
            #ffffff;

          font-size:
            22px;
        }

        .mwcw-callout p {
          margin:
            0;

          color:
            var(
              --mwcw-muted
            );

          font-size:
            14px;

          line-height:
            1.75;
        }

        /* =====================================================
           FAQ
        ===================================================== */

        .mwcw-faq-grid {
          display:
            grid;

          gap:
            12px;

          margin-top:
            27px;
        }

        .mwcw-faq-card {
          padding:
            23px;

          border:
            1px solid
            var(
              --mwcw-border
            );

          border-radius:
            13px;

          background:
            #071015;
        }

        .mwcw-faq-card h3 {
          margin:
            0 0 9px;

          color:
            var(
              --mwcw-blue-light
            );

          font-size:
            17px;
        }

        .mwcw-faq-card:nth-child(even)
          h3 {
          color:
            var(
              --mwcw-orange-light
            );
        }

        .mwcw-faq-card p {
          margin:
            0;

          color:
            var(
              --mwcw-muted
            );

          font-size:
            13px;

          line-height:
            1.7;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .mwcw-article-cta {
          margin-top:
            65px;

          padding:
            clamp(
              35px,
              5vw,
              55px
            );

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.21
            );

          border-radius:
            20px;

          background:
            radial-gradient(
              circle at
              90% 50%,
              rgba(
                255,
                121,
                0,
                0.065
              ),
              transparent
              31%
            ),
            linear-gradient(
              145deg,
              #0a151c,
              #04080b
            );
        }

        .mwcw-article-cta h2 {
          max-width:
            760px;

          margin:
            0;

          font-size:
            clamp(
              31px,
              4vw,
              49px
            );

          line-height:
            1.05;

          letter-spacing:
            -0.045em;
        }

        .mwcw-article-cta p {
          max-width:
            760px;

          margin:
            17px 0 0;

          color:
            var(
              --mwcw-muted
            );

          font-size:
            14px;

          line-height:
            1.75;
        }

        .mwcw-button-row {
          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            12px;

          margin-top:
            25px;
        }

        .mwcw-btn {
          min-height:
            51px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            8px;

          padding:
            0 20px;

          border-radius:
            9px;

          color:
            #ffffff;

          text-decoration:
            none;

          font-size:
            13px;

          font-weight:
            850;

          transition:
            transform
              0.2s ease;
        }

        .mwcw-btn:hover {
          transform:
            translateY(
              -2px
            );
        }

        .mwcw-btn-blue {
          border:
            1px solid
            rgba(
              56,
              215,
              255,
              0.5
            );

          background:
            linear-gradient(
              180deg,
              #0ab6ed,
              #0789b6
            );
        }

        .mwcw-btn-orange {
          border:
            1px solid
            rgba(
              255,
              176,
              49,
              0.55
            );

          background:
            linear-gradient(
              180deg,
              #ff9519,
              #f16600
            );
        }

        .mwcw-btn-dark {
          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.12
            );

          background:
            rgba(
              255,
              255,
              255,
              0.03
            );
        }

        .mwcw-btn svg {
          width:
            17px;

          height:
            17px;
        }

        /* =====================================================
           RELATED
        ===================================================== */

        .mwcw-related-section {
          padding:
            90px
            clamp(
              20px,
              5vw,
              80px
            );

          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwcw-related-inner {
          max-width:
            1280px;

          margin:
            0 auto;
        }

        .mwcw-related-title {
          margin-bottom:
            32px;
        }

        .mwcw-related-title span {
          display:
            flex;

          align-items:
            center;

          gap:
            8px;

          margin-bottom:
            9px;

          color:
            var(
              --mwcw-orange-light
            );

          font-size:
            9px;

          font-weight:
            900;

          letter-spacing:
            0.12em;

          text-transform:
            uppercase;
        }

        .mwcw-related-title svg {
          width:
            16px;

          height:
            16px;
        }

        .mwcw-related-title h2 {
          margin:
            0;

          font-size:
            clamp(
              31px,
              4vw,
              49px
            );

          letter-spacing:
            -0.045em;
        }

        .mwcw-related-grid {
          display:
            grid;

          grid-template-columns:
            repeat(
              3,
              1fr
            );

          gap:
            14px;
        }

        .mwcw-related-card {
          min-height:
            245px;

          display:
            flex;

          flex-direction:
            column;

          padding:
            24px;

          border:
            1px solid
            var(
              --mwcw-border
            );

          border-radius:
            14px;

          color:
            #ffffff;

          text-decoration:
            none;

          background:
            linear-gradient(
              145deg,
              #0a1218,
              #04080b
            );

          transition:
            transform
              0.2s ease,
            border-color
              0.2s ease;
        }

        .mwcw-related-card:hover {
          transform:
            translateY(
              -4px
            );

          border-color:
            rgba(
              8,
              185,
              244,
              0.3
            );
        }

        .mwcw-related-card:nth-child(even):hover {
          border-color:
            rgba(
              255,
              121,
              0,
              0.3
            );
        }

        .mwcw-related-card h3 {
          margin:
            0;

          font-size:
            18px;

          line-height:
            1.3;
        }

        .mwcw-related-card p {
          margin:
            13px 0 0;

          color:
            var(
              --mwcw-muted
            );

          font-size:
            12px;

          line-height:
            1.65;
        }

        .mwcw-related-link {
          display:
            flex;

          align-items:
            center;

          gap:
            7px;

          margin-top:
            auto;

          padding-top:
            21px;

          color:
            var(
              --mwcw-blue-light
            );

          font-size:
            11px;

          font-weight:
            850;
        }

        .mwcw-related-card:nth-child(even)
          .mwcw-related-link {
          color:
            var(
              --mwcw-orange-light
            );
        }

        .mwcw-related-link svg {
          width:
            15px;

          height:
            15px;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1100px) {
          .mwcw-lead-path {
            grid-template-columns:
              repeat(
                2,
                1fr
              );
          }
        }

        @media (max-width: 1050px) {
          .mwcw-hero-inner {
            grid-template-columns:
              1fr;
          }

          .mwcw-hero-copy {
            text-align:
              center;
          }

          .mwcw-article-label {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwcw-hero-description {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwcw-meta {
            justify-content:
              center;
          }

          .mwcw-related-grid {
            grid-template-columns:
              repeat(
                2,
                1fr
              );
          }

          .mwcw-related-card:last-child {
            grid-column:
              1 / -1;
          }
        }

        @media (max-width: 850px) {
          .mwcw-article-layout {
            grid-template-columns:
              1fr;
          }

          .mwcw-toc {
            position:
              static;

            display:
              grid;

            grid-template-columns:
              repeat(
                2,
                1fr
              );

            gap:
              0 20px;
          }

          .mwcw-toc-title,
          .mwcw-toc-cta {
            grid-column:
              1 / -1;
          }
        }

        @media (max-width: 700px) {
          .mwcw-hero-inner {
            padding:
              70px 16px;
          }

          .mwcw-hero h1 {
            font-size:
              clamp(
                43px,
                13vw,
                65px
              );
          }

          .mwcw-article-section {
            padding:
              70px 16px
              85px;
          }

          .mwcw-element-grid,
          .mwcw-trust-grid,
          .mwcw-problem-grid,
          .mwcw-lead-path,
          .mwcw-related-grid {
            grid-template-columns:
              1fr;
          }

          .mwcw-related-card:last-child {
            grid-column:
              auto;
          }

          .mwcw-related-section {
            padding:
              70px 16px;
          }
        }

        @media (max-width: 500px) {
          .mwcw-stage {
            min-height:
              420px;

            transform:
              scale(
                0.9
              );

            margin:
              -10px -20px;
          }

          .mwcw-flow {
            grid-template-columns:
              1fr;
          }

          .mwcw-contractor-card {
            grid-template-columns:
              1fr;

            text-align:
              center;
          }

          .mwcw-contractor-icon {
            margin:
              0 auto;
          }

          .mwcw-toc {
            grid-template-columns:
              1fr;
          }

          .mwcw-toc-title,
          .mwcw-toc-cta {
            grid-column:
              auto;
          }

          .mwcw-content-section p {
            font-size:
              15px;
          }
        }
      `}</style>

      {/* ======================================================
          BREADCRUMBS
      ====================================================== */}

      <div className="mwcw-breadcrumb-wrap">
        <nav
          className="mwcw-breadcrumbs"
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
            Contractor Website Leads
          </span>
        </nav>
      </div>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="mwcw-hero">
        <div className="mwcw-hero-inner">
          <div className="mwcw-hero-copy">
            <div className="mwcw-article-label">
              <BookOpen />
              Website & Business Education
            </div>

            <h1>
              What Every{" "}
              <span className="mwcw-blue">
                Contractor Website
              </span>{" "}
              Needs to Generate{" "}
              <span className="mwcw-orange">
                Leads
              </span>
            </h1>

            <p className="mwcw-hero-description">
              A contractor website should do more
              than prove the company exists. It
              should help the right customer
              understand the services, confirm
              the service area, build trust, and
              take a clear next step.
            </p>

            <div className="mwcw-meta">
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
            className="mwcw-stage"
            aria-hidden="true"
          >
            <div className="mwcw-dashboard">
              <div className="mwcw-dash-top">
                <strong>
                  CONTRACTOR WEBSITE // LEAD PATH
                </strong>

                <span className="mwcw-live">
                  ACTIVE
                </span>
              </div>

              <div className="mwcw-contractor-card">
                <div className="mwcw-contractor-icon">
                  <Hammer />
                </div>

                <div className="mwcw-contractor-copy">
                  <span>
                    Local Service Business
                  </span>

                  <strong>
                    Turn Interest Into an Inquiry
                  </strong>

                  <p>
                    Explain the work. Show the
                    proof. Make the next step
                    obvious.
                  </p>
                </div>
              </div>

              <div className="mwcw-flow">
                <div className="mwcw-flow-card">
                  <SearchCheck />
                  <strong>
                    FIND
                  </strong>
                </div>

                <div className="mwcw-flow-card">
                  <ShieldCheck />
                  <strong>
                    TRUST
                  </strong>
                </div>

                <div className="mwcw-flow-card">
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

      <article className="mwcw-article-section">
        <div className="mwcw-article-layout">
          {/* ==================================================
              TABLE OF CONTENTS
          ================================================== */}

          <aside className="mwcw-toc">
            <div className="mwcw-toc-title">
              <BookOpen />
              In This Article
            </div>

            <a href="#short-answer">
              Short Answer
            </a>

            <a href="#lead-path">
              The Lead Path
            </a>

            <a href="#essential-elements">
              Essential Website Elements
            </a>

            <a href="#service-pages">
              Service Pages
            </a>

            <a href="#service-area">
              Service Area
            </a>

            <a href="#trust">
              Trust & Proof
            </a>

            <a href="#quote-form">
              Quote Forms
            </a>

            <a href="#mobile">
              Mobile & Speed
            </a>

            <a href="#seo">
              Local SEO
            </a>

            <a href="#problems">
              Common Problems
            </a>

            <a href="#faq">
              Contractor FAQ
            </a>

            <div className="mwcw-toc-cta">
              <Link href="/website-design">
                Contractor Website Help →
              </Link>
            </div>
          </aside>

          <div className="mwcw-content">
            {/* =================================================
                SHORT ANSWER
            ================================================= */}

            <section
              className="mwcw-answer-box"
              id="short-answer"
            >
              <div className="mwcw-answer-label">
                <Zap />
                Short Answer
              </div>

              <h2>
                What Does a Contractor Website
                Need to Generate Leads?
              </h2>

              <p>
                A strong contractor website
                should clearly explain
                <strong>
                  {" "}
                  what services are offered,
                  where the contractor works, why
                  the business can be trusted,
                  and how the visitor can request
                  the next step.
                </strong>{" "}
                Useful service pages, real
                project proof, visible contact
                information, mobile-friendly
                design, quote forms, local
                information, and search-ready
                structure all support that goal.
              </p>
            </section>

            {/* =================================================
                LEAD PATH
            ================================================= */}

            <section
              className="mwcw-content-section"
              id="lead-path"
            >
              <h2>
                A Contractor Website Needs a{" "}
                <span className="mwcw-blue">
                  Clear Lead Path
                </span>
              </h2>

              <p>
                When somebody visits a contractor
                website, they are usually trying
                to answer a small number of
                practical questions.
              </p>

              <p>
                Do you perform the work they
                need? Do you work where they
                live? Does the company appear
                legitimate? Can they see examples
                of the work? How do they get an
                estimate or start a conversation?
              </p>

              <p>
                The website should make those
                answers easier to find rather
                than adding unnecessary obstacles
                between the visitor and the
                business.
              </p>

              <div className="mwcw-lead-path">
                <div className="mwcw-lead-step">
                  <div className="mwcw-lead-number">
                    STEP 01
                  </div>

                  <h3>
                    Find the Business
                  </h3>

                  <p>
                    The customer discovers the
                    contractor through search,
                    local listings, social media,
                    referrals, ads, or another
                    source.
                  </p>
                </div>

                <div className="mwcw-lead-step">
                  <div className="mwcw-lead-number">
                    STEP 02
                  </div>

                  <h3>
                    Understand the Service
                  </h3>

                  <p>
                    The site quickly confirms
                    whether the contractor
                    performs the required type of
                    work.
                  </p>
                </div>

                <div className="mwcw-lead-step">
                  <div className="mwcw-lead-number">
                    STEP 03
                  </div>

                  <h3>
                    Build Confidence
                  </h3>

                  <p>
                    Real information, project
                    evidence, reviews, and
                    professional presentation
                    help the visitor evaluate the
                    business.
                  </p>
                </div>

                <div className="mwcw-lead-step">
                  <div className="mwcw-lead-number">
                    STEP 04
                  </div>

                  <h3>
                    Request the Next Step
                  </h3>

                  <p>
                    The customer calls, sends a
                    message, requests an
                    estimate, or submits project
                    information.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                CORE ELEMENTS
            ================================================= */}

            <section
              className="mwcw-content-section"
              id="essential-elements"
            >
              <h2>
                The Core Elements of a{" "}
                <span className="mwcw-orange">
                  Lead-Focused Contractor Site
                </span>
              </h2>

              <p>
                The exact website will depend on
                the contractor, but several
                elements consistently make the
                customer journey easier to
                understand.
              </p>

              <div className="mwcw-element-grid">
                {contractorElements.map(
                  (item) => {
                    const Icon =
                      item.icon;

                    return (
                      <div
                        className="mwcw-element-card"
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
                SERVICE PAGES
            ================================================= */}

            <section
              className="mwcw-content-section"
              id="service-pages"
            >
              <h2>
                Your Services Need More Than{" "}
                <span className="mwcw-blue">
                  a List
                </span>
              </h2>

              <p>
                A contractor may offer several
                different types of work, but the
                customer usually arrives with one
                specific problem.
              </p>

              <p>
                Someone looking for a roof
                replacement does not necessarily
                want to read through one giant
                page containing remodeling,
                siding, decks, windows,
                excavation, landscaping, and
                every other service the company
                has ever performed.
              </p>

              <p>
                Important services can benefit
                from dedicated pages that explain
                what the service is, what kind of
                jobs the contractor handles, what
                area is served, what the customer
                should expect next, and how to
                request more information.
              </p>

              <div className="mwcw-callout">
                <div className="mwcw-callout-icon">
                  <FileText />
                </div>

                <h3>
                  Write for the Customer First
                </h3>

                <p>
                  Service pages should exist
                  because they help real
                  customers understand the
                  business. Search optimization
                  works best when it supports
                  useful information instead of
                  creating repetitive pages that
                  exist only to target keywords.
                </p>
              </div>
            </section>

            {/* =================================================
                SERVICE AREA
            ================================================= */}

            <section
              className="mwcw-content-section"
              id="service-area"
            >
              <h2>
                Tell Customers{" "}
                <span className="mwcw-orange">
                  Where You Work
                </span>
              </h2>

              <p>
                Local service businesses have a
                geographic limitation that many
                other websites do not.
              </p>

              <p>
                A roofing company may serve
                several towns. An excavation
                contractor may travel throughout
                a county. A plumber may have a
                tighter service radius. A snow
                removal company may operate only
                in specific communities.
              </p>

              <p>
                The website should make that
                information clear.
              </p>

              <p>
                For Maine contractors, useful
                service-area information might
                reference legitimate towns,
                counties, or regions the business
                actually serves. It should not
                create fake locations simply to
                appear in more searches.
              </p>

              <div className="mwcw-callout">
                <div className="mwcw-callout-icon">
                  <MapPin />
                </div>

                <h3>
                  Local SEO Still Needs Accuracy
                </h3>

                <p>
                  Do not create fictional
                  offices, fake addresses, or
                  location pages for communities
                  the contractor does not
                  reasonably serve. Local
                  visibility should be built from
                  real business information.
                </p>
              </div>
            </section>

            {/* =================================================
                TRUST
            ================================================= */}

            <section
              className="mwcw-content-section"
              id="trust"
            >
              <h2>
                Contractors Need{" "}
                <span className="mwcw-blue">
                  Proof, Not Hype
                </span>
              </h2>

              <p>
                Homeowners and businesses may be
                trusting a contractor with a
                building, property, equipment,
                money, or a project that could
                last for years.
              </p>

              <p>
                That means trust matters.
              </p>

              <p>
                The strongest trust signals are
                usually based on information that
                can actually be supported.
              </p>

              <div className="mwcw-trust-grid">
                {trustSignals.map(
                  (item) => (
                    <div
                      className="mwcw-trust-card"
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

              <div className="mwcw-callout">
                <div className="mwcw-callout-icon">
                  <Star />
                </div>

                <h3>
                  Never Invent Reviews
                </h3>

                <p>
                  A website should not display
                  fabricated customer names,
                  fictional five-star ratings,
                  fake project results, or
                  testimonials that cannot be
                  verified. Real proof is much
                  more valuable than manufactured
                  credibility.
                </p>
              </div>
            </section>

            {/* =================================================
                QUOTE FORM
            ================================================= */}

            <section
              className="mwcw-content-section"
              id="quote-form"
            >
              <h2>
                Make It Easy to{" "}
                <span className="mwcw-orange">
                  Request an Estimate
                </span>
              </h2>

              <p>
                Some customers want to call.
                Others want to submit details
                first.
              </p>

              <p>
                A contractor website can support
                both.
              </p>

              <p>
                A structured inquiry form can
                give the contractor better
                information than a generic box
                that simply says
                <strong>
                  {" "}
                  “Message.”
                </strong>
              </p>

              <p>
                Depending on the business, useful
                fields may include:
              </p>

              <ul className="mwcw-checklist">
                {formFields.map(
                  (item) => (
                    <li key={item}>
                      <CheckCircle2 />
                      {item}
                    </li>
                  )
                )}
              </ul>

              <p>
                The form should collect only
                information that is genuinely
                useful. Making a customer answer
                twenty unnecessary questions can
                become another obstacle.
              </p>

              <div className="mwcw-button-row">
                <Link
                  href="/how-booking-forms-quote-forms-and-automation-help-local-businesses"
                  className="mwcw-btn mwcw-btn-blue"
                >
                  Learn About Quote Forms
                  <ArrowRight />
                </Link>
              </div>
            </section>

            {/* =================================================
                MOBILE
            ================================================= */}

            <section
              className="mwcw-content-section"
              id="mobile"
            >
              <h2>
                Contractor Websites Need to Work{" "}
                <span className="mwcw-blue">
                  on a Phone
                </span>
              </h2>

              <p>
                A customer may find the contractor
                while standing in a driveway,
                looking at storm damage, sitting
                in a vehicle, comparing
                businesses after work, or trying
                to solve an urgent property
                problem.
              </p>

              <p>
                That means the mobile version is
                not a smaller afterthought. It is
                part of the primary customer
                experience.
              </p>

              <p>
                Phone links should be easy to
                tap. Forms should fit the screen.
                Navigation should remain
                understandable. Text should not
                require zooming. Images should
                not make the page unnecessarily
                heavy.
              </p>

              <h3>
                Performance Matters Too
              </h3>

              <p>
                Contractor sites often include
                many high-resolution project
                photos. Those images are useful,
                but they should be prepared and
                delivered efficiently so the
                portfolio does not make the
                entire website difficult to use.
              </p>
            </section>

            {/* =================================================
                SEO
            ================================================= */}

            <section
              className="mwcw-content-section"
              id="seo"
            >
              <h2>
                Contractor SEO Starts With{" "}
                <span className="mwcw-orange">
                  Clear Business Information
                </span>
              </h2>

              <p>
                Search optimization should help
                search engines understand the
                same things customers need to
                understand.
              </p>

              <p>
                What services does the contractor
                provide? Where does the business
                work? Which pages explain those
                services? Is the business
                information consistent? Can
                search engines crawl the site?
              </p>

              <p>
                Useful technical foundations can
                include metadata, headings,
                internal links, sitemap
                configuration, indexing
                preparation, mobile usability,
                page performance, and
                appropriately structured
                content.
              </p>

              <p>
                Google Business Profile and other
                legitimate local-business
                listings can also contribute to a
                contractor&apos;s broader local
                presence.
              </p>

              <div className="mwcw-callout">
                <div className="mwcw-callout-icon">
                  <SearchCheck />
                </div>

                <h3>
                  SEO Does Not Guarantee Leads
                </h3>

                <p>
                  Search optimization can improve
                  the technical and content
                  foundation of a contractor
                  website, but rankings, traffic,
                  inquiries, and customers still
                  depend on competition, demand,
                  reputation, search systems,
                  service quality, and many other
                  factors.
                </p>
              </div>
            </section>

            {/* =================================================
                COMMON PROBLEMS
            ================================================= */}

            <section
              className="mwcw-content-section"
              id="problems"
            >
              <h2>
                Common Contractor Website{" "}
                <span className="mwcw-blue">
                  Problems
                </span>
              </h2>

              <p>
                Many contractor sites do not need
                an exotic redesign. They need
                straightforward problems fixed.
              </p>

              <div className="mwcw-problem-grid">
                {commonProblems.map(
                  (item) => {
                    const Icon =
                      item.icon;

                    return (
                      <div
                        className="mwcw-problem-card"
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
                CALL TO ACTION
            ================================================= */}

            <section
              className="mwcw-content-section"
              id="cta-strategy"
            >
              <h2>
                Every Important Page Needs a{" "}
                <span className="mwcw-orange">
                  Next Step
                </span>
              </h2>

              <p>
                A visitor should not reach the end
                of a service page and wonder what
                to do.
              </p>

              <p>
                Depending on the contractor, the
                next action might be:
              </p>

              <ul className="mwcw-checklist">
                <li>
                  <CheckCircle2 />
                  Call the business
                </li>

                <li>
                  <CheckCircle2 />
                  Request an estimate
                </li>

                <li>
                  <CheckCircle2 />
                  Submit project details
                </li>

                <li>
                  <CheckCircle2 />
                  View completed projects
                </li>

                <li>
                  <CheckCircle2 />
                  Read about another related
                  service
                </li>

                <li>
                  <CheckCircle2 />
                  Check whether the contractor
                  serves their location
                </li>
              </ul>

              <p>
                The call to action does not need
                to be aggressive. It needs to be
                clear.
              </p>
            </section>

            {/* =================================================
                FAQ
            ================================================= */}

            <section
              className="mwcw-content-section"
              id="faq"
            >
              <h2>
                Contractor Website{" "}
                <span className="mwcw-blue">
                  FAQs
                </span>
              </h2>

              <div className="mwcw-faq-grid">
                {faqs.map(
                  (item) => (
                    <div
                      className="mwcw-faq-card"
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

            <section className="mwcw-article-cta">
              <h2>
                Is Your Contractor Website{" "}
                <span className="mwcw-orange">
                  Helping Customers Take the Next Step?
                </span>
              </h2>

              <p>
                Matthew Web can help with new
                contractor websites, redesigns,
                mobile improvements, service
                pages, lead forms, technical
                search structure, deployment,
                and custom business
                functionality.
              </p>

              <div className="mwcw-button-row">
                <Link
                  href="/contact-us"
                  className="mwcw-btn mwcw-btn-orange"
                >
                  Send Project Details
                  <ArrowRight />
                </Link>

                <Link
                  href="/small-business-websites"
                  className="mwcw-btn mwcw-btn-blue"
                >
                  Small Business Websites
                </Link>

                <Link
                  href="/pricing"
                  className="mwcw-btn mwcw-btn-dark"
                >
                  View Pricing
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* ======================================================
          RELATED ARTICLES
      ====================================================== */}

      <section className="mwcw-related-section">
        <div className="mwcw-related-inner">
          <div className="mwcw-related-title">
            <span>
              <Sparkles />
              Continue Reading
            </span>

            <h2>
              Related{" "}
              <span className="mwcw-blue">
                Articles
              </span>
            </h2>
          </div>

          <div className="mwcw-related-grid">
            {relatedArticles.map(
              (article) => (
                <Link
                  href={article.href}
                  className="mwcw-related-card"
                  key={article.href}
                >
                  <h3>
                    {article.title}
                  </h3>

                  <p>
                    {article.text}
                  </p>

                  <div className="mwcw-related-link">
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
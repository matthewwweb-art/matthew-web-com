import Link from "next/link";

import {
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  Code2,
  CreditCard,
  FileText,
  Globe2,
  Layers3,
  LifeBuoy,
  MonitorSmartphone,
  SearchCheck,
  Server,
  Settings2,
  ShieldCheck,
  Sparkles,
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
    "Website & Technology Pricing | Matthew Web",

  description:
    "Matthew Web pricing for small business websites, website maintenance, custom software, SEO and indexing, forms, integrations, deployment, analytics, and additional business technology.",

  alternates: {
    canonical:
      "https://matthew-web.com/pricing",
  },

  openGraph: {
    title:
      "Website & Technology Pricing | Matthew Web",

    description:
      "Straightforward starting prices for website development and maintenance, with custom quotes for software, integrations, SEO, and additional functionality.",

    url:
      "https://matthew-web.com/pricing",

    siteName:
      "Matthew Web",

    type:
      "website",
  },
};

/* ============================================================
   PRIMARY PRICING
============================================================ */

const pricingCards = [
  {
    id:
      "website-design",

    icon:
      MonitorSmartphone,

    label:
      "WEBSITE DEVELOPMENT",

    title:
      "Website Design & Setup",

    price:
      "$499",

    priceNote:
      "starting point",

    billing:
      "One-time project",

    description:
      "A practical starting package for small businesses that need a professional, mobile-friendly website with a clear customer path and modern technical foundation.",

    includes: [
      "Standard small-business website scope",
      "Up to 5 core pages for qualifying projects",
      "Responsive desktop, tablet & mobile design",
      "Business-focused page structure",
      "Contact and lead-capture options",
      "Domain connection assistance",
      "Basic metadata & search-ready structure",
      "Sitemap and indexing preparation",
      "Launch and deployment assistance",
    ],

    note:
      "Larger sites, advanced features, custom integrations, unusual content requirements, or software functionality may require a custom quote.",

    accent:
      "blue",
  },

  {
    id:
      "monthly-service",

    icon:
      LifeBuoy,

    label:
      "ONGOING SERVICE",

    title:
      "Maintenance & Support",

    price:
      "$49",

    priceNote:
      "/ month",

    billing:
      "Starting monthly service",

    description:
      "Ongoing website help for businesses that want updates, maintenance, technical support, monitoring, deployment assistance, and continued help after launch.",

    includes: [
      "Routine website updates",
      "Content changes",
      "Technical maintenance",
      "Responsive-layout checks",
      "Deployment oversight",
      "Domain and SSL checks",
      "Basic website monitoring",
      "Direct Matthew Web support",
      "Room for additional services",
    ],

    note:
      "The exact monthly scope depends on the website and service arrangement. Large additions or new functionality may be quoted separately.",

    accent:
      "orange",
  },

  {
    id:
      "custom-software",

    icon:
      Code2,

    label:
      "CUSTOM DEVELOPMENT",

    title:
      "Custom Software",

    price:
      "Custom",

    priceNote:
      "quote",

    billing:
      "Priced by project scope",

    description:
      "Custom-coded tools for businesses whose needs go beyond ordinary website pages or off-the-shelf website features.",

    includes: [
      "CRM-style dashboards",
      "Lead tracking systems",
      "Custom forms",
      "Business workflows",
      "Admin tools",
      "Database-backed functionality",
      "Integrations",
      "Automation",
      "Custom business features",
    ],

    note:
      "Custom software is priced after the problem, required features, technical complexity, and delivery scope are understood.",

    accent:
      "blue",
  },
];

/* ============================================================
   ADDITIONAL SERVICES
============================================================ */

const additionalServices = [
  {
    icon:
      Globe2,

    title:
      "Domain & Deployment",

    price:
      "Quoted by scope",

    text:
      "Domain connection, DNS help, deployment, redirects, launch configuration, and related technical setup.",
  },

  {
    icon:
      SearchCheck,

    title:
      "SEO & Indexing",

    price:
      "Quoted by scope",

    text:
      "Metadata, sitemap setup, Search Console, Bing tools, indexing diagnostics, internal linking, and technical search improvements.",
  },

  {
    icon:
      FileText,

    title:
      "Forms & Lead Capture",

    price:
      "Quoted by scope",

    text:
      "Contact forms, quote requests, booking requests, intake forms, lead capture, and structured customer information.",
  },

  {
    icon:
      CreditCard,

    title:
      "Payment Integration",

    price:
      "Quoted by scope",

    text:
      "Payment links, checkout connections, payment-flow setup, and website payment functionality where appropriate.",
  },

  {
    icon:
      Layers3,

    title:
      "Additional Pages",

    price:
      "Quoted before work",

    text:
      "New service pages, landing pages, FAQs, examples, content sections, business information, and other website expansion.",
  },

  {
    icon:
      Settings2,

    title:
      "Added Functionality",

    price:
      "Custom quote",

    text:
      "Booking tools, dashboards, customer systems, integrations, automation, data tools, and other custom website functionality.",
  },
];

/* ============================================================
   PRICING PRINCIPLES
============================================================ */

const pricingPrinciples = [
  {
    icon:
      BadgeDollarSign,

    title:
      "Clear Starting Price",

    text:
      "Standard website work can begin from a defined starting point instead of forcing every customer into a high-cost agency package.",
  },

  {
    icon:
      FileText,

    title:
      "Scope Before Extra Work",

    text:
      "Additional pages, features, integrations, and software should be identified and priced before that additional work is added.",
  },

  {
    icon:
      ShieldCheck,

    title:
      "Written Expectations",

    text:
      "Larger projects should clearly define scope, payment terms, revisions, responsibilities, delivery, and other important project conditions.",
  },

  {
    icon:
      Wrench,

    title:
      "Build What Is Needed",

    text:
      "A business should not automatically pay for features it does not need. The project should match the actual business problem.",
  },
];

/* ============================================================
   PAYMENT PROCESS
============================================================ */

const paymentSteps = [
  {
    number:
      "01",

    title:
      "Project Inquiry",

    text:
      "Tell Matthew Web what you need, what you have now, and what problem the website or software should solve.",
  },

  {
    number:
      "02",

    title:
      "Define the Scope",

    text:
      "The required pages, functionality, integrations, content, timeline, and major project requirements are identified.",
  },

  {
    number:
      "03",

    title:
      "Price & Agreement",

    text:
      "The project price and applicable deposit, milestone, revision, cancellation, and payment terms are established before committed work begins.",
  },

  {
    number:
      "04",

    title:
      "Development",

    text:
      "Matthew Web builds the agreed website, feature, integration, or software based on the defined project scope.",
  },

  {
    number:
      "05",

    title:
      "Review & Completion",

    text:
      "The project is reviewed and agreed revisions are handled according to the project arrangement.",
  },

  {
    number:
      "06",

    title:
      "Launch & Ongoing Service",

    text:
      "After payment and completion requirements are satisfied, the project can launch and ongoing maintenance or support can continue if desired.",
  },
];

/* ============================================================
   FAQ
============================================================ */

const faqs = [
  {
    q:
      "Is every website exactly $499?",

    a:
      "$499 is Matthew Web's standard starting point for a qualifying small-business website scope. Larger websites, advanced functionality, complex integrations, extensive content work, or unusual project requirements may cost more. The scope should be established before work begins.",
  },

  {
    q:
      "What is included in the $499 website starting package?",

    a:
      "A qualifying standard project can include up to five core pages, responsive design, business-focused structure, contact or lead-capture options, domain connection assistance, search-ready metadata and structure, sitemap preparation, and launch assistance.",
  },

  {
    q:
      "Is the $49 monthly service required?",

    a:
      "Monthly maintenance and support is an available ongoing service rather than something that should be assumed for every project. The exact ongoing arrangement depends on the website, customer needs, and agreed service terms.",
  },

  {
    q:
      "What happens if I need more pages or features?",

    a:
      "Additional work can be scoped separately. New service pages, forms, payments, dashboards, booking tools, automation, integrations, or custom functionality can be added when needed.",
  },

  {
    q:
      "How is custom software priced?",

    a:
      "Custom software is priced after the business problem and technical requirements are understood. A simple internal tool and a larger database-backed business system are very different projects, so one fixed price would not accurately represent both.",
  },

  {
    q:
      "Do I have to buy custom software with a website?",

    a:
      "No. Many businesses only need a strong website. Custom software should be added when it solves a real workflow, data, customer-management, automation, or integration problem.",
  },

  {
    q:
      "Can I add maintenance later?",

    a:
      "Yes, when Matthew Web has capacity and the website is supportable. Ongoing service can include updates, maintenance, monitoring, technical help, and additional work.",
  },

  {
    q:
      "When does ownership transfer?",

    a:
      "Ownership, access, delivery, and transfer conditions should follow the written project agreement and applicable payment terms. Those details should be clear before a project reaches final delivery.",
  },
];

/* ============================================================
   STRUCTURED DATA
============================================================ */

const pageSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "WebPage",

  name:
    "Matthew Web Pricing",

  url:
    "https://matthew-web.com/pricing",

  description:
    "Website design, maintenance, custom software, SEO, indexing, integrations, and business technology pricing from Matthew Web.",
};

/* ============================================================
   PAGE
============================================================ */

export default function PricingPage() {
  return (
    <main className="mwprice-page">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              pageSchema
            ),
        }}
      />

      <style>{`
        :root {
          --mwp-black:
            #020304;

          --mwp-panel:
            #091117;

          --mwp-muted:
            #aebbc5;

          --mwp-blue:
            #08b9f4;

          --mwp-blue-light:
            #38d7ff;

          --mwp-orange:
            #ff7900;

          --mwp-orange-light:
            #ffab31;

          --mwp-green:
            #35e07e;

          --mwp-border:
            rgba(
              255,
              255,
              255,
              0.09
            );
        }

        body {
          margin: 0;
          background:
            var(--mwp-black);
        }

        .mwprice-page {
          min-height:
            100vh;

          overflow:
            hidden;

          color:
            #ffffff;

          background:
            var(--mwp-black);
        }

        .mwp-container {
          width:
            100%;

          max-width:
            1380px;

          margin:
            0 auto;
        }

        .mwp-section {
          position:
            relative;

          padding:
            100px
            clamp(
              20px,
              5vw,
              80px
            );
        }

        .mwp-blue {
          color:
            var(--mwp-blue-light);
        }

        .mwp-orange {
          color:
            var(--mwp-orange);
        }

        /* =====================================================
           COMMON
        ===================================================== */

        .mwp-kicker {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            8px;

          margin-bottom:
            14px;

          color:
            var(--mwp-blue-light);

          font-size:
            11px;

          font-weight:
            900;

          letter-spacing:
            0.16em;

          text-transform:
            uppercase;
        }

        .mwp-kicker.orange {
          color:
            var(--mwp-orange-light);
        }

        .mwp-kicker svg {
          width:
            18px;

          height:
            18px;
        }

        .mwp-heading {
          max-width:
            900px;

          margin-bottom:
            48px;
        }

        .mwp-heading.center {
          margin-left:
            auto;

          margin-right:
            auto;

          text-align:
            center;
        }

        .mwp-heading h2 {
          margin:
            0 0 18px;

          font-size:
            clamp(
              38px,
              4.7vw,
              68px
            );

          line-height:
            1.02;

          letter-spacing:
            -0.05em;
        }

        .mwp-heading p {
          max-width:
            800px;

          margin:
            0;

          color:
            var(--mwp-muted);

          font-size:
            clamp(
              15px,
              1.35vw,
              19px
            );

          line-height:
            1.75;
        }

        .mwp-heading.center p {
          margin-left:
            auto;

          margin-right:
            auto;
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .mwp-button-row {
          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            13px;

          margin-top:
            29px;
        }

        .mwp-btn {
          min-height:
            53px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            9px;

          padding:
            0 22px;

          border-radius:
            9px;

          color:
            #ffffff;

          text-decoration:
            none;

          font-size:
            14px;

          font-weight:
            850;

          transition:
            transform
              0.2s ease,
            box-shadow
              0.2s ease,
            border-color
              0.2s ease;
        }

        .mwp-btn svg {
          width:
            18px;

          height:
            18px;
        }

        .mwp-btn-blue {
          border:
            1px solid
            rgba(
              56,
              215,
              255,
              0.55
            );

          background:
            linear-gradient(
              180deg,
              #0ab6ed,
              #0789b6
            );

          box-shadow:
            0 0 16px
            rgba(
              8,
              185,
              244,
              0.28
            );
        }

        .mwp-btn-orange {
          border:
            1px solid
            rgba(
              255,
              176,
              49,
              0.6
            );

          background:
            linear-gradient(
              180deg,
              #ff9519,
              #f16600
            );

          box-shadow:
            0 0 16px
            rgba(
              255,
              121,
              0,
              0.27
            );
        }

        .mwp-btn-dark {
          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.13
            );

          background:
            rgba(
              255,
              255,
              255,
              0.035
            );
        }

        .mwp-btn:hover {
          transform:
            translateY(-2px);
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwp-hero {
          position:
            relative;

          min-height:
            650px;

          display:
            flex;

          align-items:
            center;

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
              18% 42%,
              rgba(
                8,
                185,
                244,
                0.16
              ),
              transparent
              36%
            ),
            radial-gradient(
              ellipse at
              82% 48%,
              rgba(
                255,
                121,
                0,
                0.08
              ),
              transparent
              32%
            ),
            linear-gradient(
              180deg,
              #020304,
              #03080c,
              #020304
            );
        }

        .mwp-hero::before {
          content:
            "";

          position:
            absolute;

          inset:
            0;

          opacity:
            0.27;

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
              transparent 80%
            );
        }

        .mwp-hero-inner {
          position:
            relative;

          z-index:
            3;

          display:
            grid;

          grid-template-columns:
            minmax(
              0,
              1.04fr
            )
            minmax(
              420px,
              0.96fr
            );

          align-items:
            center;

          gap:
            clamp(
              45px,
              6vw,
              95px
            );

          width:
            100%;

          max-width:
            1380px;

          margin:
            0 auto;

          padding:
            95px
            clamp(
              20px,
              5vw,
              80px
            );
        }

        .mwp-hero-badge {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            8px;

          width:
            fit-content;

          margin-bottom:
            21px;

          padding:
            8px 12px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.28
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
            0.14em;

          text-transform:
            uppercase;
        }

        .mwp-hero-badge span {
          width:
            7px;

          height:
            7px;

          border-radius:
            50%;

          background:
            var(--mwp-green);

          box-shadow:
            0 0 9px
            rgba(
              53,
              224,
              126,
              0.8
            );
        }

        .mwp-hero h1 {
          max-width:
            920px;

          margin:
            0;

          font-size:
            clamp(
              50px,
              6vw,
              91px
            );

          line-height:
            0.97;

          letter-spacing:
            -0.06em;
        }

        .mwp-hero h1 span {
          display:
            block;
        }

        .mwp-hero-copy > p {
          max-width:
            760px;

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
            1.72;
        }

        /* =====================================================
           HERO PRICE VISUAL
        ===================================================== */

        .mwp-price-stage {
          position:
            relative;

          min-height:
            440px;

          display:
            grid;

          place-items:
            center;
        }

        .mwp-price-display {
          position:
            relative;

          width:
            min(
              100%,
              480px
            );

          padding:
            30px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.3
            );

          border-radius:
            21px;

          background:
            radial-gradient(
              circle at
              20% 15%,
              rgba(
                8,
                185,
                244,
                0.12
              ),
              transparent
              34%
            ),
            linear-gradient(
              145deg,
              #0c171e,
              #04080b
            );

          box-shadow:
            0 30px 70px
            rgba(
              0,
              0,
              0,
              0.48
            );
        }

        .mwp-price-display-top {
          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          margin-bottom:
            30px;
        }

        .mwp-price-display-top strong {
          color:
            #82939d;

          font-size:
            9px;

          letter-spacing:
            0.13em;
        }

        .mwp-live-dot {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            6px;

          color:
            #a8bac4;

          font-size:
            8px;

          font-weight:
            900;

          letter-spacing:
            0.09em;
        }

        .mwp-live-dot::before {
          content:
            "";

          width:
            6px;

          height:
            6px;

          border-radius:
            50%;

          background:
            var(--mwp-green);

          box-shadow:
            0 0 7px
            rgba(
              53,
              224,
              126,
              0.7
            );
        }

        .mwp-big-price {
          text-align:
            center;
        }

        .mwp-big-price-label {
          color:
            #81929c;

          font-size:
            9px;

          font-weight:
            900;

          letter-spacing:
            0.13em;

          text-transform:
            uppercase;
        }

        .mwp-big-price-value {
          margin-top:
            8px;

          font-size:
            clamp(
              68px,
              8vw,
              108px
            );

          line-height:
            1;

          font-weight:
            950;

          letter-spacing:
            -0.07em;
        }

        .mwp-big-price-value span {
          color:
            var(--mwp-blue-light);
        }

        .mwp-price-caption {
          margin-top:
            11px;

          color:
            #91a1aa;

          font-size:
            11px;

          line-height:
            1.5;

          text-align:
            center;
        }

        .mwp-price-mini-grid {
          display:
            grid;

          grid-template-columns:
            repeat(
              2,
              1fr
            );

          gap:
            10px;

          margin-top:
            27px;
        }

        .mwp-price-mini {
          min-height:
            76px;

          padding:
            13px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.08
            );

          border-radius:
            9px;

          background:
            #081117;
        }

        .mwp-price-mini span {
          display:
            block;

          color:
            #71838d;

          font-size:
            8px;

          font-weight:
            900;

          letter-spacing:
            0.09em;
        }

        .mwp-price-mini strong {
          display:
            block;

          margin-top:
            7px;

          color:
            var(--mwp-orange-light);

          font-size:
            17px;
        }

        .mwp-price-mini:first-child strong {
          color:
            var(--mwp-blue-light);
        }

        /* =====================================================
           PRIMARY PRICING
        ===================================================== */

        .mwp-plans {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwp-plan-grid {
          display:
            grid;

          grid-template-columns:
            repeat(
              3,
              minmax(
                0,
                1fr
              )
            );

          gap:
            16px;
        }

        .mwp-plan-card {
          position:
            relative;

          display:
            flex;

          flex-direction:
            column;

          min-height:
            700px;

          padding:
            28px;

          border:
            1px solid
            var(--mwp-border);

          border-radius:
            18px;

          background:
            linear-gradient(
              145deg,
              #0a1218,
              #04080b
            );

          transition:
            transform
              0.22s ease,
            border-color
              0.22s ease;
        }

        .mwp-plan-card:hover {
          transform:
            translateY(-5px);
        }

        .mwp-plan-card.blue:hover {
          border-color:
            rgba(
              8,
              185,
              244,
              0.36
            );
        }

        .mwp-plan-card.orange:hover {
          border-color:
            rgba(
              255,
              121,
              0,
              0.36
            );
        }

        .mwp-plan-icon {
          width:
            58px;

          height:
            58px;

          display:
            grid;

          place-items:
            center;

          margin-bottom:
            19px;

          border-radius:
            14px;
        }

        .mwp-plan-card.blue .mwp-plan-icon {
          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.3
            );

          color:
            var(--mwp-blue-light);

          background:
            rgba(
              8,
              185,
              244,
              0.055
            );
        }

        .mwp-plan-card.orange .mwp-plan-icon {
          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.3
            );

          color:
            var(--mwp-orange-light);

          background:
            rgba(
              255,
              121,
              0,
              0.05
            );
        }

        .mwp-plan-icon svg {
          width:
            29px;

          height:
            29px;
        }

        .mwp-plan-label {
          margin-bottom:
            9px;

          color:
            #7d8e98;

          font-size:
            8px;

          font-weight:
            950;

          letter-spacing:
            0.13em;
        }

        .mwp-plan-card h3 {
          margin:
            0;

          font-size:
            27px;

          line-height:
            1.08;

          letter-spacing:
            -0.035em;
        }

        .mwp-plan-price {
          display:
            flex;

          align-items:
            flex-end;

          gap:
            9px;

          margin-top:
            24px;
        }

        .mwp-plan-price strong {
          font-size:
            58px;

          line-height:
            0.95;

          letter-spacing:
            -0.055em;
        }

        .mwp-plan-price span {
          padding-bottom:
            5px;

          color:
            #8798a2;

          font-size:
            11px;

          font-weight:
            800;
        }

        .mwp-plan-billing {
          margin-top:
            9px;

          color:
            var(--mwp-blue-light);

          font-size:
            10px;

          font-weight:
            900;

          letter-spacing:
            0.08em;

          text-transform:
            uppercase;
        }

        .mwp-plan-card.orange .mwp-plan-billing {
          color:
            var(--mwp-orange-light);
        }

        .mwp-plan-description {
          margin:
            21px 0 0;

          color:
            var(--mwp-muted);

          font-size:
            13px;

          line-height:
            1.7;
        }

        .mwp-plan-divider {
          height:
            1px;

          margin:
            24px 0;

          background:
            rgba(
              255,
              255,
              255,
              0.07
            );
        }

        .mwp-includes-title {
          margin-bottom:
            13px;

          color:
            #ffffff;

          font-size:
            11px;

          font-weight:
            900;

          letter-spacing:
            0.09em;

          text-transform:
            uppercase;
        }

        .mwp-plan-list {
          display:
            grid;

          gap:
            10px;

          margin:
            0;

          padding:
            0;

          list-style:
            none;
        }

        .mwp-plan-list li {
          display:
            flex;

          align-items:
            flex-start;

          gap:
            9px;

          color:
            #c0ccd2;

          font-size:
            12px;

          line-height:
            1.5;
        }

        .mwp-plan-list svg {
          width:
            15px;

          height:
            15px;

          flex:
            0 0 auto;

          margin-top:
            1px;

          color:
            var(--mwp-blue-light);
        }

        .mwp-plan-card.orange .mwp-plan-list svg {
          color:
            var(--mwp-orange-light);
        }

        .mwp-plan-note {
          margin:
            23px 0 0;

          padding:
            13px;

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
            #84959f;

          background:
            rgba(
              255,
              255,
              255,
              0.018
            );

          font-size:
            10px;

          line-height:
            1.6;
        }

        .mwp-plan-bottom {
          margin-top:
            auto;

          padding-top:
            25px;
        }

        .mwp-plan-bottom .mwp-btn {
          width:
            100%;

          box-sizing:
            border-box;
        }

        /* =====================================================
           ADDITIONAL SERVICES
        ===================================================== */

        .mwp-addons {
          background:
            #020304;
        }

        .mwp-addon-grid {
          display:
            grid;

          grid-template-columns:
            repeat(
              3,
              minmax(
                0,
                1fr
              )
            );

          gap:
            14px;
        }

        .mwp-addon-card {
          min-height:
            255px;

          padding:
            24px;

          border:
            1px solid
            var(--mwp-border);

          border-radius:
            14px;

          background:
            rgba(
              255,
              255,
              255,
              0.018
            );
        }

        .mwp-addon-card svg {
          width:
            29px;

          height:
            29px;

          margin-bottom:
            17px;

          color:
            var(--mwp-blue-light);
        }

        .mwp-addon-card:nth-child(even) svg {
          color:
            var(--mwp-orange-light);
        }

        .mwp-addon-card h3 {
          margin:
            0 0 9px;

          font-size:
            18px;
        }

        .mwp-addon-price {
          margin-bottom:
            12px;

          color:
            var(--mwp-orange-light);

          font-size:
            10px;

          font-weight:
            900;

          letter-spacing:
            0.08em;

          text-transform:
            uppercase;
        }

        .mwp-addon-card:nth-child(odd) .mwp-addon-price {
          color:
            var(--mwp-blue-light);
        }

        .mwp-addon-card p {
          margin:
            0;

          color:
            var(--mwp-muted);

          font-size:
            13px;

          line-height:
            1.68;
        }

        /* =====================================================
           PRICING PRINCIPLES
        ===================================================== */

        .mwp-principles {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwp-principle-grid {
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
            13px;
        }

        .mwp-principle-card {
          min-height:
            230px;

          padding:
            23px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.15
            );

          border-radius:
            14px;

          background:
            rgba(
              8,
              185,
              244,
              0.02
            );
        }

        .mwp-principle-card:nth-child(even) {
          border-color:
            rgba(
              255,
              121,
              0,
              0.15
            );

          background:
            rgba(
              255,
              121,
              0,
              0.018
            );
        }

        .mwp-principle-card svg {
          width:
            29px;

          height:
            29px;

          margin-bottom:
            17px;

          color:
            var(--mwp-blue-light);
        }

        .mwp-principle-card:nth-child(even) svg {
          color:
            var(--mwp-orange-light);
        }

        .mwp-principle-card h3 {
          margin:
            0 0 9px;

          font-size:
            17px;
        }

        .mwp-principle-card p {
          margin:
            0;

          color:
            var(--mwp-muted);

          font-size:
            12px;

          line-height:
            1.68;
        }

        /* =====================================================
           PAYMENT PROCESS
        ===================================================== */

        .mwp-process {
          background:
            radial-gradient(
              ellipse at
              80% 45%,
              rgba(
                255,
                121,
                0,
                0.05
              ),
              transparent
              31%
            ),
            #020304;
        }

        .mwp-process-grid {
          display:
            grid;

          grid-template-columns:
            repeat(
              3,
              minmax(
                0,
                1fr
              )
            );

          gap:
            13px;
        }

        .mwp-process-card {
          min-height:
            245px;

          padding:
            25px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.16
            );

          border-radius:
            14px;

          background:
            rgba(
              8,
              185,
              244,
              0.02
            );
        }

        .mwp-process-card:nth-child(even) {
          border-color:
            rgba(
              255,
              121,
              0,
              0.16
            );

          background:
            rgba(
              255,
              121,
              0,
              0.018
            );
        }

        .mwp-process-number {
          margin-bottom:
            17px;

          color:
            var(--mwp-blue-light);

          font-size:
            11px;

          font-weight:
            950;

          letter-spacing:
            0.14em;
        }

        .mwp-process-card:nth-child(even)
          .mwp-process-number {
          color:
            var(--mwp-orange-light);
        }

        .mwp-process-card h3 {
          margin:
            0 0 10px;

          font-size:
            19px;
        }

        .mwp-process-card p {
          margin:
            0;

          color:
            var(--mwp-muted);

          font-size:
            13px;

          line-height:
            1.68;
        }

        /* =====================================================
           IMPORTANT NOTE
        ===================================================== */

        .mwp-note-section {
          padding:
            80px
            clamp(
              20px,
              5vw,
              80px
            );

          background:
            #020304;
        }

        .mwp-note-card {
          max-width:
            1120px;

          margin:
            0 auto;

          display:
            grid;

          grid-template-columns:
            auto 1fr;

          align-items:
            center;

          gap:
            25px;

          padding:
            clamp(
              32px,
              5vw,
              52px
            );

          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.22
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
                0.07
              ),
              transparent
              28%
            ),
            linear-gradient(
              145deg,
              #08131a,
              #04080b
            );
        }

        .mwp-note-icon {
          width:
            72px;

          height:
            72px;

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
            17px;

          color:
            var(--mwp-orange);

          background:
            rgba(
              255,
              121,
              0,
              0.055
            );
        }

        .mwp-note-icon svg {
          width:
            35px;

          height:
            35px;
        }

        .mwp-note-copy h2 {
          margin:
            0 0 10px;

          font-size:
            clamp(
              28px,
              3vw,
              43px
            );

          letter-spacing:
            -0.04em;
        }

        .mwp-note-copy p {
          margin:
            0;

          color:
            var(--mwp-muted);

          font-size:
            14px;

          line-height:
            1.72;
        }

        /* =====================================================
           FAQ
        ===================================================== */

        .mwp-faq {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwp-faq-grid {
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
        }

        .mwp-faq-card {
          padding:
            24px;

          border:
            1px solid
            var(--mwp-border);

          border-radius:
            14px;

          background:
            linear-gradient(
              145deg,
              #0a1218,
              #04080b
            );
        }

        .mwp-faq-card h3 {
          margin:
            0 0 10px;

          font-size:
            16px;
        }

        .mwp-faq-card p {
          margin:
            0;

          color:
            var(--mwp-muted);

          font-size:
            13px;

          line-height:
            1.7;
        }

        /* =====================================================
           FINAL CTA
        ===================================================== */

        .mwp-final {
          padding:
            95px
            clamp(
              20px,
              5vw,
              80px
            );

          background:
            radial-gradient(
              ellipse at
              20% 50%,
              rgba(
                8,
                185,
                244,
                0.1
              ),
              transparent
              32%
            ),
            radial-gradient(
              ellipse at
              80% 50%,
              rgba(
                255,
                121,
                0,
                0.075
              ),
              transparent
              32%
            ),
            #020304;
        }

        .mwp-final-card {
          max-width:
            1100px;

          margin:
            0 auto;

          padding:
            clamp(
              42px,
              6vw,
              72px
            );

          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.24
            );

          border-radius:
            22px;

          text-align:
            center;

          background:
            linear-gradient(
              145deg,
              #09131a,
              #04080b
            );

          box-shadow:
            0 30px 80px
            rgba(
              0,
              0,
              0,
              0.34
            );
        }

        .mwp-final-card > svg {
          width:
            43px;

          height:
            43px;

          margin-bottom:
            19px;

          color:
            var(--mwp-orange);
        }

        .mwp-final-card h2 {
          margin:
            0;

          font-size:
            clamp(
              38px,
              5vw,
              67px
            );

          line-height:
            1.03;

          letter-spacing:
            -0.05em;
        }

        .mwp-final-card p {
          max-width:
            740px;

          margin:
            18px auto 0;

          color:
            var(--mwp-muted);

          font-size:
            15px;

          line-height:
            1.75;
        }

        .mwp-final-card .mwp-button-row {
          justify-content:
            center;
        }

        .mwp-related {
          display:
            flex;

          flex-wrap:
            wrap;

          justify-content:
            center;

          gap:
            10px 18px;

          margin-top:
            28px;
        }

        .mwp-related a {
          color:
            #8fa0ab;

          text-decoration:
            none;

          font-size:
            11px;

          font-weight:
            700;
        }

        .mwp-related a:hover {
          color:
            var(--mwp-blue-light);
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (
          max-width:
          1100px
        ) {
          .mwp-plan-grid,
          .mwp-addon-grid,
          .mwp-process-grid {
            grid-template-columns:
              repeat(
                2,
                1fr
              );
          }

          .mwp-principle-grid {
            grid-template-columns:
              repeat(
                2,
                1fr
              );
          }

          .mwp-plan-card:last-child {
            grid-column:
              1 / -1;

            min-height:
              600px;
          }
        }

        @media (
          max-width:
          900px
        ) {
          .mwp-hero-inner {
            grid-template-columns:
              1fr;
          }

          .mwp-hero-inner {
            text-align:
              center;
          }

          .mwp-hero-badge {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwp-hero-copy > p {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwp-button-row {
            justify-content:
              center;
          }

          .mwp-price-stage {
            min-height:
              410px;
          }
        }

        @media (
          max-width:
          700px
        ) {
          .mwp-section {
            padding:
              70px 16px;
          }

          .mwp-hero {
            min-height:
              auto;
          }

          .mwp-hero-inner {
            padding:
              70px 16px;
          }

          .mwp-hero h1 {
            font-size:
              clamp(
                46px,
                14vw,
                67px
              );
          }

          .mwp-plan-grid,
          .mwp-addon-grid,
          .mwp-principle-grid,
          .mwp-process-grid,
          .mwp-faq-grid {
            grid-template-columns:
              1fr;
          }

          .mwp-plan-card:last-child {
            grid-column:
              auto;
          }

          .mwp-note-card {
            grid-template-columns:
              1fr;

            text-align:
              center;
          }

          .mwp-note-icon {
            margin:
              0 auto;
          }
        }

        @media (
          max-width:
          500px
        ) {
          .mwp-price-stage {
            min-height:
              360px;

            transform:
              scale(
                0.9
              );

            margin:
              -10px -20px;
          }

          .mwp-price-mini-grid {
            grid-template-columns:
              1fr;
          }

          .mwp-plan-price strong {
            font-size:
              51px;
          }
        }
      `}</style>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        className="mwp-hero"
        id="pricing"
      >
        <div className="mwp-hero-inner">
          <div className="mwp-hero-copy">
            <div className="mwp-hero-badge">
              <span />
              Website • Software • Support
            </div>

            <h1>
              <span>
                Practical
              </span>

              <span className="mwp-blue">
                Starting Prices.
              </span>

              <span>
                Flexible
              </span>

              <span className="mwp-orange">
                Technology.
              </span>
            </h1>

            <p>
              Start with what your business
              actually needs. Standard website
              projects have a clear starting
              point, while larger websites,
              software, integrations, and custom
              functionality are priced according
              to scope.
            </p>

            <div className="mwp-button-row">
              <Link
                href="/contact-us"
                className="mwp-btn mwp-btn-blue"
              >
                Request a Project Quote
                <ArrowRight />
              </Link>

              <Link
                href="/services"
                className="mwp-btn mwp-btn-dark"
              >
                View Services
              </Link>
            </div>
          </div>

          <div
            className="mwp-price-stage"
            aria-hidden="true"
          >
            <div className="mwp-price-display">
              <div className="mwp-price-display-top">
                <strong>
                  WEBSITE STARTING POINT
                </strong>

                <div className="mwp-live-dot">
                  AVAILABLE
                </div>
              </div>

              <div className="mwp-big-price">
                <div className="mwp-big-price-label">
                  Standard Website
                </div>

                <div className="mwp-big-price-value">
                  <span>$</span>
                  499
                </div>

                <div className="mwp-price-caption">
                  Standard qualifying
                  small-business website scope
                </div>
              </div>

              <div className="mwp-price-mini-grid">
                <div className="mwp-price-mini">
                  <span>
                    ONGOING SERVICE
                  </span>

                  <strong>
                    $49 / MONTH
                  </strong>
                </div>

                <div className="mwp-price-mini">
                  <span>
                    CUSTOM DEVELOPMENT
                  </span>

                  <strong>
                    QUOTED
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          PRIMARY PLANS
      ====================================================== */}

      <section
        className="mwp-section mwp-plans"
        id="pricing-plans"
      >
        <div className="mwp-container">
          <div className="mwp-heading center">
            <div className="mwp-kicker">
              <BadgeDollarSign />
              Current Services
            </div>

            <h2>
              Choose the{" "}
              <span className="mwp-blue">
                Right Starting Point
              </span>
            </h2>

            <p>
              Not every business needs the same
              project. These options cover the
              three main ways customers can work
              with Matthew Web today.
            </p>
          </div>

          <div className="mwp-plan-grid">
            {pricingCards.map(
              (card) => {
                const Icon =
                  card.icon;

                return (
                  <article
                    className={`mwp-plan-card ${card.accent}`}
                    id={card.id}
                    key={card.id}
                  >
                    <div className="mwp-plan-icon">
                      <Icon />
                    </div>

                    <div className="mwp-plan-label">
                      {card.label}
                    </div>

                    <h3>
                      {card.title}
                    </h3>

                    <div className="mwp-plan-price">
                      <strong>
                        {card.price}
                      </strong>

                      <span>
                        {card.priceNote}
                      </span>
                    </div>

                    <div className="mwp-plan-billing">
                      {card.billing}
                    </div>

                    <p className="mwp-plan-description">
                      {card.description}
                    </p>

                    <div className="mwp-plan-divider" />

                    <div className="mwp-includes-title">
                      Can Include
                    </div>

                    <ul className="mwp-plan-list">
                      {card.includes.map(
                        (item) => (
                          <li key={item}>
                            <CheckCircle2 />
                            {item}
                          </li>
                        )
                      )}
                    </ul>

                    <div className="mwp-plan-note">
                      {card.note}
                    </div>

                    <div className="mwp-plan-bottom">
                      <Link
                        href="/contact-us"
                        className={
                          card.accent ===
                          "orange"
                            ? "mwp-btn mwp-btn-orange"
                            : "mwp-btn mwp-btn-blue"
                        }
                      >
                        Request Pricing
                        <ArrowRight />
                      </Link>
                    </div>
                  </article>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* ======================================================
          ADDITIONAL SERVICES
      ====================================================== */}

      <section
        className="mwp-section mwp-addons"
        id="additional-services"
      >
        <div className="mwp-container">
          <div className="mwp-heading">
            <div className="mwp-kicker orange">
              <Settings2 />
              Additional Services
            </div>

            <h2>
              Add What the Business{" "}
              <span className="mwp-orange">
                Actually Needs
              </span>
            </h2>

            <p>
              These services can be added to a
              new website or, when technically
              practical, provided for an existing
              website without requiring a
              complete rebuild.
            </p>
          </div>

          <div className="mwp-addon-grid">
            {additionalServices.map(
              (item) => {
                const Icon =
                  item.icon;

                return (
                  <div
                    className="mwp-addon-card"
                    key={item.title}
                  >
                    <Icon />

                    <h3>
                      {item.title}
                    </h3>

                    <div className="mwp-addon-price">
                      {item.price}
                    </div>

                    <p>
                      {item.text}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* ======================================================
          PRICING PRINCIPLES
      ====================================================== */}

      <section
        className="mwp-section mwp-principles"
        id="pricing-approach"
      >
        <div className="mwp-container">
          <div className="mwp-heading center">
            <div className="mwp-kicker">
              <ShieldCheck />
              Pricing Approach
            </div>

            <h2>
              Clear Scope Before{" "}
              <span className="mwp-blue">
                Surprise Charges
              </span>
            </h2>

            <p>
              The goal is to understand the work
              first and establish expectations
              before adding extra features,
              development, or cost.
            </p>
          </div>

          <div className="mwp-principle-grid">
            {pricingPrinciples.map(
              (item) => {
                const Icon =
                  item.icon;

                return (
                  <div
                    className="mwp-principle-card"
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
        </div>
      </section>

      {/* ======================================================
          PAYMENT PROCESS
      ====================================================== */}

      <section
        className="mwp-section mwp-process"
        id="project-payment-process"
      >
        <div className="mwp-container">
          <div className="mwp-heading center">
            <div className="mwp-kicker orange">
              <FileText />
              Project &amp; Payment Process
            </div>

            <h2>
              Know What Is Being Built{" "}
              <span className="mwp-orange">
                Before It Is Built
              </span>
            </h2>

            <p>
              Professional project controls help
              protect both the customer and
              Matthew Web by making scope,
              payment, revisions, and delivery
              expectations clearer.
            </p>
          </div>

          <div className="mwp-process-grid">
            {paymentSteps.map(
              (step) => (
                <div
                  className="mwp-process-card"
                  key={step.number}
                >
                  <div className="mwp-process-number">
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
        </div>
      </section>

      {/* ======================================================
          IMPORTANT PRICING NOTE
      ====================================================== */}

      <section className="mwp-note-section">
        <div className="mwp-note-card">
          <div className="mwp-note-icon">
            <BadgeDollarSign />
          </div>

          <div className="mwp-note-copy">
            <h2>
              Starting Price Does Not Mean{" "}
              <span className="mwp-orange">
                Every Project Is Identical.
              </span>
            </h2>

            <p>
              The $499 website price is a useful
              starting point for a standard
              qualifying small-business website.
              A project requiring substantial
              custom development, many additional
              pages, advanced integrations,
              specialized software, unusual
              content work, or other expanded
              requirements may receive a
              different quote before that work is
              started.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          FAQ
      ====================================================== */}

      <section
        className="mwp-section mwp-faq"
        id="pricing-faq"
      >
        <div className="mwp-container">
          <div className="mwp-heading">
            <div className="mwp-kicker">
              <Sparkles />
              Pricing FAQ
            </div>

            <h2>
              Common{" "}
              <span className="mwp-blue">
                Pricing Questions
              </span>
            </h2>

            <p>
              Clear pricing works best when the
              customer understands what the base
              price covers and when additional
              scope changes the project.
            </p>
          </div>

          <div className="mwp-faq-grid">
            {faqs.map(
              (item) => (
                <div
                  className="mwp-faq-card"
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
        </div>
      </section>

      {/* ======================================================
          FINAL CTA
      ====================================================== */}

      <section
        className="mwp-final"
        id="request-pricing"
      >
        <div className="mwp-final-card">
          <Zap />

          <h2>
            Know What You Need?{" "}
            <span className="mwp-orange">
              Let&apos;s Price It.
            </span>
          </h2>

          <p>
            Tell Matthew Web about your business,
            website, software need, or technical
            problem. We can determine whether the
            standard website starting package
            fits or whether the project needs a
            custom scope.
          </p>

          <div className="mwp-button-row">
            <Link
              href="/contact-us"
              className="mwp-btn mwp-btn-orange"
            >
              Request a Quote
              <ArrowRight />
            </Link>

            <Link
              href="/examples"
              className="mwp-btn mwp-btn-dark"
            >
              View Examples
            </Link>
          </div>

          <nav className="mwp-related">
            <Link href="/website-design">
              Website Design
            </Link>

            <Link href="/custom-software">
              Custom Software
            </Link>

            <Link href="/seo-and-indexing">
              SEO &amp; Indexing
            </Link>

            <Link href="/small-business-websites">
              Small Business Websites
            </Link>

            <Link href="/contact-us">
              Contact
            </Link>
          </nav>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
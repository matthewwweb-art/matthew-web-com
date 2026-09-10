import Link from "next/link";

import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardList,
  Code2,
  FileText,
  Globe2,
  Hammer,
  MapPin,
  MonitorSmartphone,
  MousePointerClick,
  SearchCheck,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  Users,
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
    "Small Business Websites in Maine & Across the U.S. | Matthew Web",

  description:
    "Matthew Web builds modern small business websites for Maine businesses and companies across the United States, including new websites, redesigns, mobile-friendly layouts, lead forms, SEO-ready structure, domains, analytics, and custom functionality.",

  alternates: {
    canonical:
      "https://matthew-web.com/small-business-websites",
  },

  openGraph: {
    title:
      "Small Business Websites | Matthew Web",

    description:
      "Modern, mobile-friendly small business websites built around clear services, customer trust, lead generation, search readiness, and future growth.",

    url:
      "https://matthew-web.com/small-business-websites",

    siteName:
      "Matthew Web",

    type:
      "website",
  },
};

/* ============================================================
   WEBSITE SITUATIONS
============================================================ */

const websiteSituations = [
  {
    icon: Globe2,
    title: "No Website",
    text:
      "Your business relies on Facebook, directories, word-of-mouth, or nothing at all for its main online presence.",
    solution:
      "Build a professional website from the ground up.",
    accent:
      "blue",
  },

  {
    icon: Wrench,
    title: "Outdated Website",
    text:
      "The site looks old, contains outdated information, or no longer reflects what the business has become.",
    solution:
      "Modern redesign and content cleanup.",
    accent:
      "orange",
  },

  {
    icon: Smartphone,
    title: "Poor Mobile Experience",
    text:
      "Customers have trouble reading, navigating, calling, or filling out forms when using their phone.",
    solution:
      "Responsive mobile-friendly rebuild.",
    accent:
      "blue",
  },

  {
    icon: MousePointerClick,
    title: "No Clear Customer Path",
    text:
      "Visitors can see the business but cannot easily figure out how to call, request a quote, book, or take the next step.",
    solution:
      "Stronger calls-to-action and lead flow.",
    accent:
      "orange",
  },

  {
    icon: SearchCheck,
    title: "Weak Search Foundation",
    text:
      "The website lacks clear service pages, useful metadata, internal links, sitemap structure, or indexing preparation.",
    solution:
      "SEO-ready structure and indexing support.",
    accent:
      "blue",
  },

  {
    icon: FileText,
    title: "Incomplete Information",
    text:
      "Important services, service areas, trust information, FAQs, examples, pricing guidance, or contact details are missing.",
    solution:
      "Complete the information customers actually need.",
    accent:
      "orange",
  },
];

/* ============================================================
   WEBSITE FOUNDATION
============================================================ */

const foundations = [
  {
    icon: Building2,
    title: "Clear Business Identity",
    text:
      "Visitors should quickly understand who the business is, what it provides, where it operates, and who it serves.",
  },

  {
    icon: ClipboardList,
    title: "Dedicated Service Pages",
    text:
      "Major services deserve enough space to explain the work, customer need, process, and next step.",
  },

  {
    icon: Smartphone,
    title: "Mobile-Friendly Design",
    text:
      "Customers should be able to read, navigate, call, and submit forms comfortably from a phone.",
  },

  {
    icon: MousePointerClick,
    title: "Strong Contact Paths",
    text:
      "Calls, forms, quote requests, booking links, and other customer actions should be easy to find.",
  },

  {
    icon: ShieldCheck,
    title: "Trust Information",
    text:
      "About information, examples, testimonials, policies, FAQs, and accurate business details help reduce uncertainty.",
  },

  {
    icon: SearchCheck,
    title: "Search-Ready Structure",
    text:
      "Metadata, internal links, page organization, sitemap preparation, and useful content help search engines understand the site.",
  },
];

/* ============================================================
   BUSINESS TYPES
============================================================ */

const businessTypes = [
  {
    icon: Hammer,
    label: "Contractors",
  },
  {
    icon: Building2,
    label: "Property Services",
  },
  {
    icon: Store,
    label: "Local Shops",
  },
  {
    icon: BriefcaseBusiness,
    label: "Consultants",
  },
  {
    icon: Users,
    label: "Small Agencies",
  },
  {
    icon: Globe2,
    label: "Local Service Businesses",
  },
];

/* ============================================================
   GROWTH OPTIONS
============================================================ */

const growthOptions = [
  {
    title: "More Service Pages",
    text:
      "Expand the site as the business adds services, locations, customer groups, or new offerings.",
  },

  {
    title: "Blog & Educational Content",
    text:
      "Answer real customer questions and build more useful information around the business.",
  },

  {
    title: "Advanced Lead Forms",
    text:
      "Collect project details, service needs, timelines, locations, and other useful customer information.",
  },

  {
    title: "CRM-Style Dashboards",
    text:
      "Move leads from the public website into a private system for tracking status, notes, and follow-ups.",
  },

  {
    title: "Payments & Booking",
    text:
      "Add appropriate payment links, booking requests, consultations, or other customer actions.",
  },

  {
    title: "Custom Business Software",
    text:
      "Grow beyond public website pages into dashboards, databases, workflows, integrations, or automation.",
  },
];

/* ============================================================
   PROCESS
============================================================ */

const processSteps = [
  {
    number: "01",
    title: "Understand the Business",
    text:
      "We start with the services, customers, location, current website situation, and what the owner actually needs the website to accomplish.",
  },

  {
    number: "02",
    title: "Identify the Important Pages",
    text:
      "We determine which pages the business needs instead of automatically forcing every customer into the same template.",
  },

  {
    number: "03",
    title: "Build Around the Customer",
    text:
      "The site is structured so visitors can understand the business, find the right service, build trust, and take the next step.",
  },

  {
    number: "04",
    title: "Add Lead Capture",
    text:
      "Phone links, contact forms, quote requests, booking actions, or other conversion paths are added where useful.",
  },

  {
    number: "05",
    title: "Prepare for Search",
    text:
      "Metadata, page structure, internal links, sitemap preparation, and indexing basics are handled as part of the technical foundation.",
  },

  {
    number: "06",
    title: "Launch & Grow",
    text:
      "After launch, the website can continue growing with new pages, maintenance, analytics, SEO work, and custom functionality.",
  },
];

/* ============================================================
   FAQ
============================================================ */

const faqs = [
  {
    q:
      "Does every small business need a huge website?",

    a:
      "No. The right website depends on the business. Some businesses need a focused professional website with only a few strong pages. Others benefit from separate service pages, content, examples, forms, and more advanced functionality.",
  },

  {
    q:
      "What if my business has no website at all?",

    a:
      "That is fine. Matthew Web can build a first website from the ground up using your business information, services, contact details, customer needs, and goals.",
  },

  {
    q:
      "Can you replace an outdated website?",

    a:
      "Yes. An existing website can be redesigned or rebuilt with updated information, clearer structure, improved mobile usability, stronger customer actions, and a more modern technical foundation.",
  },

  {
    q:
      "Is this service only for Maine businesses?",

    a:
      "No. Maine small businesses are an important Matthew Web focus, but website projects can also be completed remotely for businesses throughout the United States.",
  },

  {
    q:
      "Can you use my existing domain?",

    a:
      "Usually, yes. If you still own and control the domain, it can generally be connected to the new website when the project is ready to launch.",
  },

  {
    q:
      "Can the website help collect leads?",

    a:
      "Yes. Depending on the business, the website can include phone actions, contact forms, quote requests, booking links, service inquiries, or more advanced lead systems.",
  },

  {
    q:
      "Can my website grow later?",

    a:
      "Yes. New service pages, blog content, examples, forms, payment functionality, dashboards, booking systems, and custom software can be added as the business grows.",
  },

  {
    q:
      "Will a new website automatically rank first in Google?",

    a:
      "No. A website can be built with a strong technical and content foundation, but search rankings depend on competition, relevance, location, content quality, authority, reviews, links, time, and search-engine decisions.",
  },
];

/* ============================================================
   STRUCTURED DATA
============================================================ */

const serviceSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "Service",

  name:
    "Small Business Website Design",

  provider: {
    "@type":
      "Organization",

    name:
      "Matthew Web",

    url:
      "https://matthew-web.com",
  },

  areaServed: {
    "@type":
      "Country",

    name:
      "United States",
  },

  serviceType:
    "Small business website design and development",

  url:
    "https://matthew-web.com/small-business-websites",
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

export default function SmallBusinessWebsitesPage() {
  return (
    <main className="mwsb-page">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              serviceSchema
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
          --mwsb-black:
            #020304;

          --mwsb-panel:
            #091117;

          --mwsb-muted:
            #aebbc5;

          --mwsb-blue:
            #08b9f4;

          --mwsb-blue-light:
            #38d7ff;

          --mwsb-orange:
            #ff7900;

          --mwsb-orange-light:
            #ffab31;

          --mwsb-border:
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
            var(--mwsb-black);
        }

        .mwsb-page {
          min-height:
            100vh;

          overflow:
            hidden;

          color:
            white;

          background:
            var(--mwsb-black);
        }

        .mwsb-container {
          width:
            100%;

          max-width:
            1380px;

          margin:
            0 auto;
        }

        .mwsb-section {
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

        .mwsb-blue {
          color:
            var(
              --mwsb-blue-light
            );
        }

        .mwsb-orange {
          color:
            var(
              --mwsb-orange
            );
        }

        /* =====================================================
           COMMON
        ===================================================== */

        .mwsb-kicker {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            8px;

          margin-bottom:
            14px;

          color:
            var(
              --mwsb-blue-light
            );

          font-size:
            11px;

          font-weight:
            900;

          letter-spacing:
            0.16em;

          text-transform:
            uppercase;
        }

        .mwsb-kicker.orange {
          color:
            var(
              --mwsb-orange-light
            );
        }

        .mwsb-kicker svg {
          width:
            18px;

          height:
            18px;
        }

        .mwsb-heading {
          max-width:
            900px;

          margin-bottom:
            48px;
        }

        .mwsb-heading.center {
          margin-left:
            auto;

          margin-right:
            auto;

          text-align:
            center;
        }

        .mwsb-heading h2 {
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

        .mwsb-heading p {
          max-width:
            800px;

          margin:
            0;

          color:
            var(
              --mwsb-muted
            );

          font-size:
            clamp(
              15px,
              1.35vw,
              19px
            );

          line-height:
            1.75;
        }

        .mwsb-heading.center p {
          margin-left:
            auto;

          margin-right:
            auto;
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .mwsb-button-row {
          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            13px;

          margin-top:
            29px;
        }

        .mwsb-btn {
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
            white;

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

        .mwsb-btn svg {
          width:
            18px;

          height:
            18px;
        }

        .mwsb-btn-blue {
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

        .mwsb-btn-orange {
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

        .mwsb-btn-dark {
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

        .mwsb-btn:hover {
          transform:
            translateY(
              -2px
            );
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwsb-hero {
          position:
            relative;

          min-height:
            680px;

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

        .mwsb-hero::before {
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
              transparent
              80%
            );
        }

        .mwsb-hero-inner {
          position:
            relative;

          z-index:
            3;

          display:
            grid;

          grid-template-columns:
            minmax(
              0,
              1.06fr
            )
            minmax(
              420px,
              0.94fr
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

        .mwsb-hero-badge {
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

        .mwsb-hero-badge span {
          width:
            7px;

          height:
            7px;

          border-radius:
            50%;

          background:
            #35e07e;

          box-shadow:
            0 0 9px
            rgba(
              53,
              224,
              126,
              0.8
            );
        }

        .mwsb-hero h1 {
          max-width:
            900px;

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

        .mwsb-hero h1 span {
          display:
            block;
        }

        .mwsb-hero-copy
          > p {
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
           LOCAL BUSINESS VISUAL
        ===================================================== */

        .mwsb-business-stage {
          position:
            relative;

          min-height:
            470px;

          display:
            grid;

          place-items:
            center;
        }

        .mwsb-business-card {
          position:
            relative;

          z-index:
            3;

          width:
            min(
              100%,
              480px
            );

          padding:
            25px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.31
            );

          border-radius:
            20px;

          background:
            radial-gradient(
              circle at
              20% 15%,
              rgba(
                8,
                185,
                244,
                0.13
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
            ),
            0 0 30px
            rgba(
              8,
              185,
              244,
              0.08
            );
        }

        .mwsb-business-top {
          display:
            flex;

          justify-content:
            space-between;

          align-items:
            center;

          margin-bottom:
            20px;
        }

        .mwsb-business-logo {
          display:
            flex;

          align-items:
            center;

          gap:
            9px;

          color:
            white;

          font-size:
            12px;

          font-weight:
            900;
        }

        .mwsb-business-logo-icon {
          width:
            34px;

          height:
            34px;

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
              0.28
            );

          border-radius:
            8px;

          color:
            var(
              --mwsb-orange-light
            );

          background:
            rgba(
              255,
              121,
              0,
              0.05
            );
        }

        .mwsb-business-logo-icon
          svg {
          width:
            18px;

          height:
            18px;
        }

        .mwsb-online-status {
          display:
            flex;

          align-items:
            center;

          gap:
            6px;

          color:
            #7f919b;

          font-size:
            8px;

          font-weight:
            900;

          letter-spacing:
            0.1em;
        }

        .mwsb-online-status::before {
          content:
            "";

          width:
            6px;

          height:
            6px;

          border-radius:
            50%;

          background:
            #35e07e;

          box-shadow:
            0 0 7px
            rgba(
              53,
              224,
              126,
              0.8
            );
        }

        .mwsb-demo-hero {
          min-height:
            125px;

          padding:
            20px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.18
            );

          border-radius:
            10px;

          background:
            radial-gradient(
              circle at
              20% 50%,
              rgba(
                8,
                185,
                244,
                0.24
              ),
              transparent
              32%
            ),
            #081117;
        }

        .mwsb-demo-title {
          width:
            62%;

          height:
            15px;

          border-radius:
            3px;

          background:
            white;
        }

        .mwsb-demo-line {
          width:
            78%;

          height:
            7px;

          margin-top:
            12px;

          border-radius:
            3px;

          background:
            rgba(
              255,
              255,
              255,
              0.25
            );
        }

        .mwsb-demo-line.short {
          width:
            53%;
        }

        .mwsb-demo-button {
          width:
            78px;

          height:
            23px;

          margin-top:
            15px;

          border-radius:
            4px;

          background:
            var(
              --mwsb-orange
            );
        }

        .mwsb-demo-grid {
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

        .mwsb-demo-grid
          div {
          min-height:
            75px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.07
            );

          border-radius:
            7px;

          background:
            #0c171d;
        }

        .mwsb-floating-tag {
          position:
            absolute;

          z-index:
            5;

          display:
            inline-flex;

          align-items:
            center;

          gap:
            7px;

          min-height:
            35px;

          padding:
            0 10px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.1
            );

          border-radius:
            7px;

          color:
            #dce7ec;

          background:
            rgba(
              3,
              8,
              11,
              0.92
            );

          font-size:
            9px;

          font-weight:
            900;

          letter-spacing:
            0.08em;
        }

        .mwsb-floating-tag
          svg {
          width:
            15px;

          height:
            15px;

          color:
            var(
              --mwsb-blue-light
            );
        }

        .mwsb-floating-tag.one {
          left:
            -1%;

          top:
            8%;
        }

        .mwsb-floating-tag.two {
          right:
            -1%;

          top:
            17%;
        }

        .mwsb-floating-tag.three {
          left:
            3%;

          bottom:
            8%;
        }

        .mwsb-floating-tag.two
          svg {
          color:
            var(
              --mwsb-orange-light
            );
        }

        /* =====================================================
           SITUATIONS
        ===================================================== */

        .mwsb-situations {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwsb-situation-grid {
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
            15px;
        }

        .mwsb-situation-card {
          min-height:
            295px;

          padding:
            25px;

          border:
            1px solid
            var(
              --mwsb-border
            );

          border-radius:
            16px;

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

        .mwsb-situation-card:hover {
          transform:
            translateY(
              -5px
            );
        }

        .mwsb-situation-card.blue:hover {
          border-color:
            rgba(
              8,
              185,
              244,
              0.35
            );
        }

        .mwsb-situation-card.orange:hover {
          border-color:
            rgba(
              255,
              121,
              0,
              0.35
            );
        }

        .mwsb-situation-icon {
          width:
            53px;

          height:
            53px;

          display:
            grid;

          place-items:
            center;

          margin-bottom:
            19px;

          border-radius:
            13px;
        }

        .mwsb-situation-card.blue
          .mwsb-situation-icon {
          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.3
            );

          color:
            var(
              --mwsb-blue-light
            );

          background:
            rgba(
              8,
              185,
              244,
              0.065
            );
        }

        .mwsb-situation-card.orange
          .mwsb-situation-icon {
          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.3
            );

          color:
            var(
              --mwsb-orange-light
            );

          background:
            rgba(
              255,
              121,
              0,
              0.06
            );
        }

        .mwsb-situation-icon
          svg {
          width:
            27px;

          height:
            27px;
        }

        .mwsb-situation-card
          h3 {
          margin:
            0 0 10px;

          font-size:
            19px;
        }

        .mwsb-situation-card
          p {
          margin:
            0;

          color:
            var(
              --mwsb-muted
            );

          font-size:
            13px;

          line-height:
            1.68;
        }

        .mwsb-solution {
          display:
            inline-flex;

          margin-top:
            17px;

          padding:
            6px 9px;

          border-radius:
            999px;

          font-size:
            9px;

          font-weight:
            900;

          letter-spacing:
            0.07em;

          text-transform:
            uppercase;
        }

        .mwsb-situation-card.blue
          .mwsb-solution {
          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.2
            );

          color:
            #bcefff;

          background:
            rgba(
              8,
              185,
              244,
              0.04
            );
        }

        .mwsb-situation-card.orange
          .mwsb-solution {
          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.2
            );

          color:
            #ffd4ad;

          background:
            rgba(
              255,
              121,
              0,
              0.04
            );
        }

        /* =====================================================
           FOUNDATION
        ===================================================== */

        .mwsb-foundation {
          background:
            radial-gradient(
              ellipse at
              82% 45%,
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

        .mwsb-foundation-grid {
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

        .mwsb-foundation-card {
          min-height:
            245px;

          padding:
            24px;

          border:
            1px solid
            var(
              --mwsb-border
            );

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

        .mwsb-foundation-card
          svg {
          width:
            29px;

          height:
            29px;

          margin-bottom:
            17px;

          color:
            var(
              --mwsb-blue-light
            );
        }

        .mwsb-foundation-card:nth-child(even)
          svg {
          color:
            var(
              --mwsb-orange-light
            );
        }

        .mwsb-foundation-card
          h3 {
          margin:
            0 0 10px;

          font-size:
            18px;
        }

        .mwsb-foundation-card
          p {
          margin:
            0;

          color:
            var(
              --mwsb-muted
            );

          font-size:
            13px;

          line-height:
            1.67;
        }

        /* =====================================================
           MAINE
        ===================================================== */

        .mwsb-maine {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwsb-maine-grid {
          display:
            grid;

          grid-template-columns:
            minmax(
              0,
              0.95fr
            )
            minmax(
              420px,
              1.05fr
            );

          align-items:
            center;

          gap:
            clamp(
              45px,
              7vw,
              100px
            );
        }

        .mwsb-maine-copy
          h2 {
          margin:
            0 0 20px;

          font-size:
            clamp(
              40px,
              4.7vw,
              68px
            );

          line-height:
            1.02;

          letter-spacing:
            -0.05em;
        }

        .mwsb-maine-copy
          p {
          margin:
            0 0 17px;

          color:
            var(
              --mwsb-muted
            );

          font-size:
            16px;

          line-height:
            1.8;
        }

        .mwsb-local-panel {
          padding:
            28px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.22
            );

          border-radius:
            20px;

          background:
            radial-gradient(
              circle at
              20% 30%,
              rgba(
                8,
                185,
                244,
                0.1
              ),
              transparent
              34%
            ),
            linear-gradient(
              145deg,
              #09131a,
              #04080b
            );
        }

        .mwsb-local-map {
          position:
            relative;

          min-height:
            300px;

          overflow:
            hidden;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.08
            );

          border-radius:
            13px;

          background:
            linear-gradient(
              30deg,
              transparent
              24%,
              rgba(
                8,
                185,
                244,
                0.045
              )
              25%,
              rgba(
                8,
                185,
                244,
                0.045
              )
              26%,
              transparent
              27%,
              transparent
              74%,
              rgba(
                8,
                185,
                244,
                0.045
              )
              75%,
              rgba(
                8,
                185,
                244,
                0.045
              )
              76%,
              transparent
              77%
            ),
            linear-gradient(
              -30deg,
              transparent
              24%,
              rgba(
                255,
                121,
                0,
                0.035
              )
              25%,
              rgba(
                255,
                121,
                0,
                0.035
              )
              26%,
              transparent
              27%
            ),
            #071016;

          background-size:
            52px 90px;
        }

        .mwsb-map-center {
          position:
            absolute;

          left:
            50%;

          top:
            50%;

          transform:
            translate(
              -50%,
              -50%
            );

          width:
            150px;

          height:
            150px;

          display:
            grid;

          place-items:
            center;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.25
            );

          border-radius:
            50%;

          background:
            rgba(
              8,
              185,
              244,
              0.035
            );

          box-shadow:
            0 0 40px
            rgba(
              8,
              185,
              244,
              0.08
            );
        }

        .mwsb-map-pin {
          width:
            62px;

          height:
            62px;

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
              0.33
            );

          border-radius:
            50%;

          color:
            var(
              --mwsb-orange
            );

          background:
            #071016;

          box-shadow:
            0 0 20px
            rgba(
              255,
              121,
              0,
              0.16
            );
        }

        .mwsb-map-pin
          svg {
          width:
            28px;

          height:
            28px;
        }

        .mwsb-map-label {
          position:
            absolute;

          left:
            50%;

          bottom:
            28px;

          transform:
            translateX(
              -50%
            );

          padding:
            9px 13px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.2
            );

          border-radius:
            8px;

          color:
            #d8e6ec;

          background:
            rgba(
              2,
              5,
              7,
              0.9
            );

          font-size:
            10px;

          font-weight:
            900;

          letter-spacing:
            0.08em;

          white-space:
            nowrap;
        }

        /* =====================================================
           BUSINESS TYPES
        ===================================================== */

        .mwsb-businesses {
          background:
            #020304;
        }

        .mwsb-business-type-grid {
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
            12px;
        }

        .mwsb-business-type {
          min-height:
            110px;

          display:
            flex;

          align-items:
            center;

          gap:
            14px;

          padding:
            18px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.08
            );

          border-radius:
            12px;

          background:
            linear-gradient(
              145deg,
              #0a1218,
              #04080b
            );
        }

        .mwsb-business-type
          svg {
          width:
            29px;

          height:
            29px;

          flex:
            0 0 auto;

          color:
            var(
              --mwsb-blue-light
            );
        }

        .mwsb-business-type:nth-child(even)
          svg {
          color:
            var(
              --mwsb-orange-light
            );
        }

        .mwsb-business-type
          strong {
          font-size:
            14px;
        }

        /* =====================================================
           GROWTH
        ===================================================== */

        .mwsb-growth {
          background:
            radial-gradient(
              ellipse at
              15% 45%,
              rgba(
                8,
                185,
                244,
                0.06
              ),
              transparent
              30%
            ),
            #020304;
        }

        .mwsb-growth-grid {
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

        .mwsb-growth-card {
          min-height:
            225px;

          padding:
            24px;

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
              0.02
            );
        }

        .mwsb-growth-card:nth-child(even) {
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
              0.018
            );
        }

        .mwsb-growth-number {
          margin-bottom:
            15px;

          color:
            var(
              --mwsb-blue-light
            );

          font-size:
            10px;

          font-weight:
            950;

          letter-spacing:
            0.12em;
        }

        .mwsb-growth-card:nth-child(even)
          .mwsb-growth-number {
          color:
            var(
              --mwsb-orange-light
            );
        }

        .mwsb-growth-card
          h3 {
          margin:
            0 0 10px;

          font-size:
            17px;
        }

        .mwsb-growth-card
          p {
          margin:
            0;

          color:
            var(
              --mwsb-muted
            );

          font-size:
            13px;

          line-height:
            1.67;
        }

        /* =====================================================
           PROCESS
        ===================================================== */

        .mwsb-process {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwsb-process-grid {
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

        .mwsb-process-card {
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

        .mwsb-process-card:nth-child(even) {
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

        .mwsb-process-number {
          margin-bottom:
            17px;

          color:
            var(
              --mwsb-blue-light
            );

          font-size:
            11px;

          font-weight:
            950;

          letter-spacing:
            0.14em;
        }

        .mwsb-process-card:nth-child(even)
          .mwsb-process-number {
          color:
            var(
              --mwsb-orange-light
            );
        }

        .mwsb-process-card
          h3 {
          margin:
            0 0 10px;

          font-size:
            19px;
        }

        .mwsb-process-card
          p {
          margin:
            0;

          color:
            var(
              --mwsb-muted
            );

          font-size:
            13px;

          line-height:
            1.68;
        }

        /* =====================================================
           FAQ
        ===================================================== */

        .mwsb-faq {
          background:
            #020304;
        }

        .mwsb-faq-grid {
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

        .mwsb-faq-card {
          padding:
            24px;

          border:
            1px solid
            var(
              --mwsb-border
            );

          border-radius:
            14px;

          background:
            linear-gradient(
              145deg,
              #0a1218,
              #04080b
            );
        }

        .mwsb-faq-card
          h3 {
          margin:
            0 0 10px;

          font-size:
            16px;
        }

        .mwsb-faq-card
          p {
          margin:
            0;

          color:
            var(
              --mwsb-muted
            );

          font-size:
            13px;

          line-height:
            1.7;
        }

        /* =====================================================
           FINAL
        ===================================================== */

        .mwsb-final {
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

        .mwsb-final-card {
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

        .mwsb-final-card
          > svg {
          width:
            42px;

          height:
            42px;

          margin-bottom:
            19px;

          color:
            var(
              --mwsb-orange
            );
        }

        .mwsb-final-card
          h2 {
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

        .mwsb-final-card
          p {
          max-width:
            730px;

          margin:
            18px auto 0;

          color:
            var(
              --mwsb-muted
            );

          font-size:
            15px;

          line-height:
            1.75;
        }

        .mwsb-final-card
          .mwsb-button-row {
          justify-content:
            center;
        }

        .mwsb-related {
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

        .mwsb-related a {
          color:
            #8fa0ab;

          text-decoration:
            none;

          font-size:
            11px;

          font-weight:
            700;
        }

        .mwsb-related a:hover {
          color:
            var(
              --mwsb-blue-light
            );
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (
          max-width:
          1100px
        ) {
          .mwsb-situation-grid,
          .mwsb-foundation-grid,
          .mwsb-growth-grid,
          .mwsb-process-grid {
            grid-template-columns:
              repeat(
                2,
                1fr
              );
          }
        }

        @media (
          max-width:
          900px
        ) {
          .mwsb-hero-inner,
          .mwsb-maine-grid {
            grid-template-columns:
              1fr;
          }

          .mwsb-hero-inner {
            text-align:
              center;
          }

          .mwsb-hero-badge {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwsb-hero-copy
            > p {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwsb-button-row {
            justify-content:
              center;
          }

          .mwsb-business-stage {
            min-height:
              420px;
          }

          .mwsb-business-type-grid {
            grid-template-columns:
              repeat(
                2,
                1fr
              );
          }
        }

        @media (
          max-width:
          700px
        ) {
          .mwsb-section {
            padding:
              70px 16px;
          }

          .mwsb-hero {
            min-height:
              auto;
          }

          .mwsb-hero-inner {
            padding:
              70px 16px;
          }

          .mwsb-hero h1 {
            font-size:
              clamp(
                46px,
                14vw,
                67px
              );
          }

          .mwsb-situation-grid,
          .mwsb-foundation-grid,
          .mwsb-growth-grid,
          .mwsb-process-grid,
          .mwsb-faq-grid,
          .mwsb-business-type-grid {
            grid-template-columns:
              1fr;
          }
        }

        @media (
          max-width:
          500px
        ) {
          .mwsb-business-stage {
            min-height:
              355px;

            transform:
              scale(
                0.86
              );

            margin:
              -20px -25px;
          }

          .mwsb-floating-tag.one {
            left:
              0;
          }

          .mwsb-floating-tag.two {
            right:
              0;
          }
        }
      `}</style>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        className="mwsb-hero"
        id="small-business-websites"
      >
        <div className="mwsb-hero-inner">
          <div className="mwsb-hero-copy">
            <div className="mwsb-hero-badge">
              <span />
              Small Business Websites • Available Now
            </div>

            <h1>
              <span>
                Your Business
              </span>

              <span className="mwsb-blue">
                Works Hard.
              </span>

              <span>
                Your Website
              </span>

              <span className="mwsb-orange">
                Should Too.
              </span>
            </h1>

            <p>
              Matthew Web builds practical,
              professional websites for small
              businesses that need a stronger
              online presence, clearer customer
              path, better mobile experience, and
              room to grow.
            </p>

            <div className="mwsb-button-row">
              <Link
                href="/contact-us"
                className="mwsb-btn mwsb-btn-blue"
              >
                Start Your Website
                <ArrowRight />
              </Link>

              <Link
                href="/pricing"
                className="mwsb-btn mwsb-btn-dark"
              >
                View Pricing
              </Link>
            </div>
          </div>

          <div
            className="mwsb-business-stage"
            aria-hidden="true"
          >
            <div className="mwsb-floating-tag one">
              <Smartphone />
              MOBILE READY
            </div>

            <div className="mwsb-floating-tag two">
              <SearchCheck />
              SEARCH READY
            </div>

            <div className="mwsb-floating-tag three">
              <MousePointerClick />
              BUILT FOR LEADS
            </div>

            <div className="mwsb-business-card">
              <div className="mwsb-business-top">
                <div className="mwsb-business-logo">
                  <div className="mwsb-business-logo-icon">
                    <Building2 />
                  </div>

                  SMALL BUSINESS
                </div>

                <div className="mwsb-online-status">
                  ONLINE
                </div>
              </div>

              <div className="mwsb-demo-hero">
                <div className="mwsb-demo-title" />

                <div className="mwsb-demo-line" />

                <div className="mwsb-demo-line short" />

                <div className="mwsb-demo-button" />
              </div>

              <div className="mwsb-demo-grid">
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          BUSINESS SITUATIONS
      ====================================================== */}

      <section
        className="mwsb-section mwsb-situations"
        id="website-situations"
      >
        <div className="mwsb-container">
          <div className="mwsb-heading center">
            <div className="mwsb-kicker orange">
              <Wrench />
              Where Are You Starting?
            </div>

            <h2>
              There&apos;s More Than One Reason to{" "}
              <span className="mwsb-orange">
                Need a Better Website
              </span>
            </h2>

            <p>
              Some businesses need their first
              site. Others already have one but
              need specific problems corrected.
            </p>
          </div>

          <div className="mwsb-situation-grid">
            {websiteSituations.map(
              (item) => {
                const Icon =
                  item.icon;

                return (
                  <div
                    className={`mwsb-situation-card ${item.accent}`}
                    key={item.title}
                  >
                    <div className="mwsb-situation-icon">
                      <Icon />
                    </div>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.text}
                    </p>

                    <span className="mwsb-solution">
                      {item.solution}
                    </span>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* ======================================================
          WEBSITE FOUNDATION
      ====================================================== */}

      <section
        className="mwsb-section mwsb-foundation"
        id="website-foundation"
      >
        <div className="mwsb-container">
          <div className="mwsb-heading">
            <div className="mwsb-kicker">
              <MonitorSmartphone />
              Small Business Foundation
            </div>

            <h2>
              The Website Should Make the Business{" "}
              <span className="mwsb-blue">
                Easier to Understand.
              </span>
            </h2>

            <p>
              A useful small-business website
              should answer the questions a
              potential customer is likely to
              have before that person needs to
              call or submit a form.
            </p>
          </div>

          <div className="mwsb-foundation-grid">
            {foundations.map(
              (item) => {
                const Icon =
                  item.icon;

                return (
                  <div
                    className="mwsb-foundation-card"
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
          MAINE FOCUS
      ====================================================== */}

      <section
        className="mwsb-section mwsb-maine"
        id="maine-small-business"
      >
        <div className="mwsb-container">
          <div className="mwsb-maine-grid">
            <div className="mwsb-maine-copy">
              <div className="mwsb-kicker orange">
                <MapPin />
                Maine Small Businesses
              </div>

              <h2>
                Based in Maine.{" "}
                <span className="mwsb-orange">
                  Built for Local Business.
                </span>
              </h2>

              <p>
                Maine small-business website work
                is an important Matthew Web
                focus, especially businesses
                without websites or with sites
                that are outdated, broken,
                difficult on mobile, incomplete,
                or unclear.
              </p>

              <p>
                Working with a Maine business can
                also mean understanding that many
                local companies depend heavily on
                reputation, referrals, phone
                calls, service areas, quote
                requests, and direct customer
                relationships.
              </p>

              <p>
                Matthew Web can also work
                remotely with businesses outside
                Maine, so the service is not
                limited by geography.
              </p>

              <div className="mwsb-button-row">
                <Link
                  href="/contact-us"
                  className="mwsb-btn mwsb-btn-orange"
                >
                  Talk About Your Business
                  <ArrowRight />
                </Link>
              </div>
            </div>

            <div
              className="mwsb-local-panel"
              aria-hidden="true"
            >
              <div className="mwsb-local-map">
                <div className="mwsb-map-center">
                  <div className="mwsb-map-pin">
                    <MapPin />
                  </div>
                </div>

                <div className="mwsb-map-label">
                  MATTHEW WEB • MAINE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          BUSINESS TYPES
      ====================================================== */}

      <section
        className="mwsb-section mwsb-businesses"
        id="business-types"
      >
        <div className="mwsb-container">
          <div className="mwsb-heading center">
            <div className="mwsb-kicker">
              <BriefcaseBusiness />
              Businesses We Can Help
            </div>

            <h2>
              Different Businesses.{" "}
              <span className="mwsb-blue">
                Same Basic Need.
              </span>
            </h2>

            <p>
              Customers need to understand what
              you do and how to take the next
              step.
            </p>
          </div>

          <div className="mwsb-business-type-grid">
            {businessTypes.map(
              (business) => {
                const Icon =
                  business.icon;

                return (
                  <div
                    className="mwsb-business-type"
                    key={business.label}
                  >
                    <Icon />

                    <strong>
                      {business.label}
                    </strong>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* ======================================================
          GROWTH
      ====================================================== */}

      <section
        className="mwsb-section mwsb-growth"
        id="website-growth"
      >
        <div className="mwsb-container">
          <div className="mwsb-heading center">
            <div className="mwsb-kicker orange">
              <Code2 />
              Grow When You Need To
            </div>

            <h2>
              Start With a Website.{" "}
              <span className="mwsb-orange">
                Add More Later.
              </span>
            </h2>

            <p>
              A small business does not need to
              buy every possible feature on day
              one. The site can grow as the
              business proves it needs more.
            </p>
          </div>

          <div className="mwsb-growth-grid">
            {growthOptions.map(
              (item, index) => (
                <div
                  className="mwsb-growth-card"
                  key={item.title}
                >
                  <div className="mwsb-growth-number">
                    GROWTH OPTION{" "}
                    {String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )}
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

          <div className="mwsb-button-row">
            <Link
              href="/custom-software"
              className="mwsb-btn mwsb-btn-dark"
            >
              Explore Custom Software
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================
          PROCESS
      ====================================================== */}

      <section
        className="mwsb-section mwsb-process"
        id="small-business-process"
      >
        <div className="mwsb-container">
          <div className="mwsb-heading center">
            <div className="mwsb-kicker">
              <CheckCircle2 />
              How We Build
            </div>

            <h2>
              Build Around the{" "}
              <span className="mwsb-blue">
                Actual Business.
              </span>
            </h2>

            <p>
              The website should reflect how the
              business operates and what its
              customers actually need to know.
            </p>
          </div>

          <div className="mwsb-process-grid">
            {processSteps.map(
              (step) => (
                <div
                  className="mwsb-process-card"
                  key={step.number}
                >
                  <div className="mwsb-process-number">
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
          FAQ
      ====================================================== */}

      <section
        className="mwsb-section mwsb-faq"
        id="small-business-faq"
      >
        <div className="mwsb-container">
          <div className="mwsb-heading">
            <div className="mwsb-kicker orange">
              <Sparkles />
              Small Business Website FAQ
            </div>

            <h2>
              Common{" "}
              <span className="mwsb-orange">
                Questions
              </span>
            </h2>

            <p>
              Small-business websites can start
              simple and become more advanced as
              the business grows.
            </p>
          </div>

          <div className="mwsb-faq-grid">
            {faqs.map(
              (item) => (
                <div
                  className="mwsb-faq-card"
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
        className="mwsb-final"
        id="start-small-business-website"
      >
        <div className="mwsb-final-card">
          <Zap />

          <h2>
            No Website? Old Website?{" "}
            <span className="mwsb-orange">
              Let&apos;s Fix That.
            </span>
          </h2>

          <p>
            Tell Matthew Web about your
            business, the website you have now
            if there is one, and what you need
            customers to be able to do. We can
            determine the most practical next
            step.
          </p>

          <div className="mwsb-button-row">
            <Link
              href="/contact-us"
              className="mwsb-btn mwsb-btn-orange"
            >
              Start Your Website
              <ArrowRight />
            </Link>

            <Link
              href="/examples"
              className="mwsb-btn mwsb-btn-dark"
            >
              View Examples
            </Link>
          </div>

          <nav className="mwsb-related">
            <Link href="/services">
              All Services
            </Link>

            <Link href="/website-design">
              Website Design
            </Link>

            <Link href="/custom-software">
              Custom Software
            </Link>

            <Link href="/seo-and-indexing">
              SEO &amp; Indexing
            </Link>

            <Link href="/pricing">
              Pricing
            </Link>
          </nav>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
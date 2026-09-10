import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Code2,
  CreditCard,
  FileCheck2,
  FileText,
  Globe2,
  LockKeyhole,
  MonitorSmartphone,
  Scale,
  SearchCheck,
  Server,
  ShieldCheck,
  Sparkles,
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
    "Terms of Use | Matthew Web",

  description:
    "Read the Matthew Web Terms of Use covering public website use, service information, pricing, project inquiries, intellectual property, third-party services, acceptable use, and general limitations.",

  alternates: {
    canonical:
      "https://matthew-web.com/terms",
  },

  openGraph: {
    title:
      "Terms of Use | Matthew Web",

    description:
      "Terms governing use of the Matthew Web public website and general information about services, pricing, projects, content, and third-party technology.",

    url:
      "https://matthew-web.com/terms",

    siteName:
      "Matthew Web",

    type:
      "website",
  },
};

/* ============================================================
   SUMMARY
============================================================ */

const summaryCards = [
  {
    icon:
      Globe2,

    title:
      "Public Website Terms",

    text:
      "These terms primarily govern use of the Matthew Web public website and the general information presented through it.",

    accent:
      "blue",
  },

  {
    icon:
      FileCheck2,

    title:
      "Project Terms Are Separate",

    text:
      "A website page, contact form, starting price, or service description does not replace the specific written agreement or scope established for a customer project.",

    accent:
      "orange",
  },

  {
    icon:
      SearchCheck,

    title:
      "No Guaranteed Results",

    text:
      "Search rankings, indexing, traffic, sales, approvals, revenue, platform decisions, and similar outcomes depend on factors outside Matthew Web's direct control.",

    accent:
      "blue",
  },

  {
    icon:
      Server,

    title:
      "Third-Party Technology",

    text:
      "Websites and software may depend on hosting providers, domains, APIs, payment processors, databases, email systems, search engines, or other outside platforms.",

    accent:
      "orange",
  },

  {
    icon:
      ShieldCheck,

    title:
      "Responsible Use",

    text:
      "Visitors may not intentionally attack, interfere with, abuse, overload, misuse, or attempt unauthorized access to Matthew Web systems.",

    accent:
      "blue",
  },

  {
    icon:
      Scale,

    title:
      "Legal Review Will Continue",

    text:
      "These website terms can be refined as Matthew Web's business, technology, products, and lawyer-reviewed agreements develop.",

    accent:
      "orange",
  },
];

/* ============================================================
   ACCEPTABLE USE
============================================================ */

const prohibitedUses = [
  "Submit intentionally false, fraudulent, abusive, threatening, or spam information",
  "Attempt unauthorized access to private, administrative, account, database, API, or infrastructure areas",
  "Introduce malware, malicious code, destructive scripts, or harmful automated activity",
  "Intentionally overload, disrupt, damage, or interfere with website operation",
  "Use Matthew Web content to impersonate Matthew Web or mislead other people",
  "Circumvent security, authentication, access restrictions, rate limits, or technical protections",
  "Use the website in violation of applicable law or another person's rights",
];

/* ============================================================
   PROJECT RESPONSIBILITIES
============================================================ */

const clientResponsibilities = [
  "Provide accurate business and contact information",
  "Provide materials and content the customer owns or has permission to use",
  "Provide necessary account or domain access when required for approved work",
  "Review project information and requested changes in a reasonable manner",
  "Identify important requirements before work progresses beyond the agreed scope",
  "Follow applicable payment and project terms established for the specific engagement",
];

/* ============================================================
   TERMS NAVIGATION
============================================================ */

const termsNavigation = [
  {
    label:
      "General Terms",

    href:
      "#general",
  },

  {
    label:
      "Website Information",

    href:
      "#website-information",
  },

  {
    label:
      "Services & Projects",

    href:
      "#services",
  },

  {
    label:
      "Pricing & Payments",

    href:
      "#pricing",
  },

  {
    label:
      "Customer Responsibilities",

    href:
      "#customer-responsibilities",
  },

  {
    label:
      "SEO & External Results",

    href:
      "#results",
  },

  {
    label:
      "Third-Party Services",

    href:
      "#third-party",
  },

  {
    label:
      "Intellectual Property",

    href:
      "#intellectual-property",
  },

  {
    label:
      "Acceptable Use",

    href:
      "#acceptable-use",
  },

  {
    label:
      "Website Availability",

    href:
      "#availability",
  },

  {
    label:
      "Liability",

    href:
      "#liability",
  },

  {
    label:
      "Privacy",

    href:
      "#privacy",
  },

  {
    label:
      "Changes",

    href:
      "#changes",
  },

  {
    label:
      "Contact",

    href:
      "#terms-contact",
  },
];

/* ============================================================
   STRUCTURED DATA
============================================================ */

const termsSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "WebPage",

  name:
    "Matthew Web Terms of Use",

  url:
    "https://matthew-web.com/terms",

  description:
    "Terms governing use of the Matthew Web public website and general website information.",
};

/* ============================================================
   PAGE
============================================================ */

export default function TermsPage() {
  return (
    <main className="mwterms-page">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              termsSchema
            ),
        }}
      />

      <style>{`
        :root {
          --mwt-black:
            #020304;

          --mwt-panel:
            #091117;

          --mwt-muted:
            #aebbc5;

          --mwt-blue:
            #08b9f4;

          --mwt-blue-light:
            #38d7ff;

          --mwt-orange:
            #ff7900;

          --mwt-orange-light:
            #ffab31;

          --mwt-green:
            #35e07e;

          --mwt-border:
            rgba(
              255,
              255,
              255,
              0.09
            );
        }

        body {
          margin:
            0;

          background:
            var(
              --mwt-black
            );
        }

        .mwterms-page {
          min-height:
            100vh;

          overflow:
            hidden;

          color:
            #ffffff;

          background:
            var(
              --mwt-black
            );
        }

        .mwt-container {
          width:
            100%;

          max-width:
            1380px;

          margin:
            0 auto;
        }

        .mwt-section {
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

        .mwt-blue {
          color:
            var(
              --mwt-blue-light
            );
        }

        .mwt-orange {
          color:
            var(
              --mwt-orange
            );
        }

        /* =====================================================
           COMMON
        ===================================================== */

        .mwt-kicker {
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
              --mwt-blue-light
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

        .mwt-kicker.orange {
          color:
            var(
              --mwt-orange-light
            );
        }

        .mwt-kicker svg {
          width:
            18px;

          height:
            18px;
        }

        .mwt-heading {
          max-width:
            900px;

          margin-bottom:
            48px;
        }

        .mwt-heading.center {
          margin-left:
            auto;

          margin-right:
            auto;

          text-align:
            center;
        }

        .mwt-heading h2 {
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

        .mwt-heading p {
          max-width:
            820px;

          margin:
            0;

          color:
            var(
              --mwt-muted
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

        .mwt-heading.center p {
          margin-left:
            auto;

          margin-right:
            auto;
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .mwt-button-row {
          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            13px;

          margin-top:
            29px;
        }

        .mwt-btn {
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
              0.2s ease;
        }

        .mwt-btn svg {
          width:
            18px;

          height:
            18px;
        }

        .mwt-btn-blue {
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

        .mwt-btn-orange {
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

        .mwt-btn-dark {
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

        .mwt-btn:hover {
          transform:
            translateY(
              -2px
            );
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwt-hero {
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

        .mwt-hero::before {
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

        .mwt-hero-inner {
          position:
            relative;

          z-index:
            3;

          display:
            grid;

          grid-template-columns:
            minmax(
              0,
              1.05fr
            )
            minmax(
              420px,
              0.95fr
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

        .mwt-hero-badge {
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

        .mwt-hero-badge span {
          width:
            7px;

          height:
            7px;

          border-radius:
            50%;

          background:
            var(
              --mwt-green
            );

          box-shadow:
            0 0 9px
            rgba(
              53,
              224,
              126,
              0.8
            );
        }

        .mwt-hero h1 {
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

        .mwt-hero h1 span {
          display:
            block;
        }

        .mwt-hero-copy
          > p {
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
            1.72;
        }

        /* =====================================================
           HERO VISUAL
        ===================================================== */

        .mwt-terms-stage {
          min-height:
            440px;

          display:
            grid;

          place-items:
            center;
        }

        .mwt-terms-panel {
          width:
            min(
              100%,
              490px
            );

          padding:
            28px;

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

        .mwt-panel-top {
          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          margin-bottom:
            28px;
        }

        .mwt-panel-top
          strong {
          color:
            #81929d;

          font-size:
            9px;

          letter-spacing:
            0.13em;
        }

        .mwt-panel-status {
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

        .mwt-panel-status::before {
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
              --mwt-green
            );
        }

        .mwt-document {
          width:
            125px;

          height:
            125px;

          display:
            grid;

          place-items:
            center;

          margin:
            0 auto 27px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.3
            );

          border-radius:
            29px;

          color:
            var(
              --mwt-blue-light
            );

          background:
            rgba(
              8,
              185,
              244,
              0.055
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

        .mwt-document
          svg {
          width:
            59px;

          height:
            59px;
        }

        .mwt-mini-grid {
          display:
            grid;

          grid-template-columns:
            repeat(
              2,
              1fr
            );

          gap:
            9px;
        }

        .mwt-mini {
          min-height:
            67px;

          display:
            flex;

          align-items:
            center;

          gap:
            10px;

          padding:
            12px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.07
            );

          border-radius:
            8px;

          background:
            #081117;
        }

        .mwt-mini svg {
          width:
            18px;

          height:
            18px;

          color:
            var(
              --mwt-blue-light
            );
        }

        .mwt-mini:nth-child(even)
          svg {
          color:
            var(
              --mwt-orange-light
            );
        }

        .mwt-mini strong {
          font-size:
            9px;
        }

        /* =====================================================
           SUMMARY
        ===================================================== */

        .mwt-summary {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwt-summary-grid {
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

        .mwt-summary-card {
          min-height:
            260px;

          padding:
            25px;

          border:
            1px solid
            var(
              --mwt-border
            );

          border-radius:
            15px;

          background:
            linear-gradient(
              145deg,
              #0a1218,
              #04080b
            );
        }

        .mwt-summary-icon {
          width:
            54px;

          height:
            54px;

          display:
            grid;

          place-items:
            center;

          margin-bottom:
            18px;

          border-radius:
            13px;
        }

        .mwt-summary-card.blue
          .mwt-summary-icon {
          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.28
            );

          color:
            var(
              --mwt-blue-light
            );

          background:
            rgba(
              8,
              185,
              244,
              0.055
            );
        }

        .mwt-summary-card.orange
          .mwt-summary-icon {
          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.28
            );

          color:
            var(
              --mwt-orange-light
            );

          background:
            rgba(
              255,
              121,
              0,
              0.05
            );
        }

        .mwt-summary-icon
          svg {
          width:
            27px;

          height:
            27px;
        }

        .mwt-summary-card
          h3 {
          margin:
            0 0 10px;

          font-size:
            18px;
        }

        .mwt-summary-card
          p {
          margin:
            0;

          color:
            var(
              --mwt-muted
            );

          font-size:
            13px;

          line-height:
            1.68;
        }

        /* =====================================================
           FULL TERMS
        ===================================================== */

        .mwt-policy {
          background:
            #020304;
        }

        .mwt-policy-layout {
          display:
            grid;

          grid-template-columns:
            minmax(
              250px,
              0.3fr
            )
            minmax(
              0,
              0.7fr
            );

          align-items:
            start;

          gap:
            clamp(
              35px,
              6vw,
              80px
            );
        }

        .mwt-policy-nav {
          position:
            sticky;

          top:
            30px;

          padding:
            24px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.08
            );

          border-radius:
            15px;

          background:
            linear-gradient(
              145deg,
              #09131a,
              #04080b
            );
        }

        .mwt-policy-nav
          strong {
          display:
            block;

          margin-bottom:
            16px;

          font-size:
            11px;

          letter-spacing:
            0.1em;

          text-transform:
            uppercase;
        }

        .mwt-policy-nav
          a {
          display:
            block;

          padding:
            9px 0;

          color:
            #8ea0aa;

          text-decoration:
            none;

          font-size:
            12px;

          line-height:
            1.4;
        }

        .mwt-policy-nav
          a:hover {
          color:
            var(
              --mwt-blue-light
            );
        }

        .mwt-effective {
          margin-bottom:
            28px;

          padding:
            14px 17px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.16
            );

          border-radius:
            10px;

          color:
            #9eb0b9;

          background:
            rgba(
              8,
              185,
              244,
              0.025
            );

          font-size:
            12px;
        }

        .mwt-policy-block {
          margin-bottom:
            56px;

          scroll-margin-top:
            30px;
        }

        .mwt-policy-block
          h2 {
          margin:
            0 0 18px;

          font-size:
            clamp(
              27px,
              3vw,
              40px
            );

          line-height:
            1.08;

          letter-spacing:
            -0.04em;
        }

        .mwt-policy-block
          h3 {
          margin:
            28px 0 11px;

          color:
            var(
              --mwt-blue-light
            );

          font-size:
            18px;
        }

        .mwt-policy-block
          p {
          margin:
            0 0 16px;

          color:
            var(
              --mwt-muted
            );

          font-size:
            14px;

          line-height:
            1.82;
        }

        .mwt-policy-block
          a {
          color:
            var(
              --mwt-blue-light
            );
        }

        .mwt-list {
          display:
            grid;

          gap:
            10px;

          margin:
            18px 0 0;

          padding:
            0;

          list-style:
            none;
        }

        .mwt-list li {
          display:
            flex;

          align-items:
            flex-start;

          gap:
            10px;

          padding:
            12px 14px;

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

        .mwt-list svg {
          width:
            16px;

          height:
            16px;

          flex:
            0 0 auto;

          margin-top:
            1px;

          color:
            var(
              --mwt-blue-light
            );
        }

        /* =====================================================
           IMPORTANT AGREEMENT NOTE
        ===================================================== */

        .mwt-agreement {
          padding:
            85px
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

        .mwt-agreement-card {
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
            27px;

          padding:
            clamp(
              34px,
              5vw,
              54px
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

        .mwt-agreement-icon {
          width:
            74px;

          height:
            74px;

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
            var(
              --mwt-orange
            );

          background:
            rgba(
              255,
              121,
              0,
              0.055
            );
        }

        .mwt-agreement-icon
          svg {
          width:
            36px;

          height:
            36px;
        }

        .mwt-agreement-copy
          h2 {
          margin:
            0 0 10px;

          font-size:
            clamp(
              29px,
              3vw,
              43px
            );

          letter-spacing:
            -0.04em;
        }

        .mwt-agreement-copy
          p {
          margin:
            0;

          color:
            var(
              --mwt-muted
            );

          font-size:
            14px;

          line-height:
            1.72;
        }

        /* =====================================================
           FINAL
        ===================================================== */

        .mwt-final {
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

        .mwt-final-card {
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

        .mwt-final-card
          > svg {
          width:
            43px;

          height:
            43px;

          margin-bottom:
            19px;

          color:
            var(
              --mwt-orange
            );
        }

        .mwt-final-card
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

        .mwt-final-card
          p {
          max-width:
            740px;

          margin:
            18px auto 0;

          color:
            var(
              --mwt-muted
            );

          font-size:
            15px;

          line-height:
            1.75;
        }

        .mwt-final-card
          .mwt-button-row {
          justify-content:
            center;
        }

        .mwt-related {
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

        .mwt-related
          a {
          color:
            #8fa0ab;

          text-decoration:
            none;

          font-size:
            11px;

          font-weight:
            700;
        }

        .mwt-related
          a:hover {
          color:
            var(
              --mwt-blue-light
            );
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1100px) {
          .mwt-summary-grid {
            grid-template-columns:
              repeat(
                2,
                1fr
              );
          }
        }

        @media (max-width: 900px) {
          .mwt-hero-inner,
          .mwt-policy-layout {
            grid-template-columns:
              1fr;
          }

          .mwt-hero-inner {
            text-align:
              center;
          }

          .mwt-hero-badge {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwt-hero-copy
            > p {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwt-button-row {
            justify-content:
              center;
          }

          .mwt-policy-nav {
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

          .mwt-policy-nav
            strong {
            grid-column:
              1 / -1;
          }
        }

        @media (max-width: 700px) {
          .mwt-section {
            padding:
              70px 16px;
          }

          .mwt-hero {
            min-height:
              auto;
          }

          .mwt-hero-inner {
            padding:
              70px 16px;
          }

          .mwt-hero h1 {
            font-size:
              clamp(
                46px,
                14vw,
                67px
              );
          }

          .mwt-summary-grid {
            grid-template-columns:
              1fr;
          }

          .mwt-agreement-card {
            grid-template-columns:
              1fr;

            text-align:
              center;
          }

          .mwt-agreement-icon {
            margin:
              0 auto;
          }
        }

        @media (max-width: 500px) {
          .mwt-mini-grid,
          .mwt-policy-nav {
            grid-template-columns:
              1fr;
          }

          .mwt-terms-stage {
            min-height:
              440px;

            transform:
              scale(
                0.9
              );

            margin:
              -10px -20px;
          }
        }
      `}</style>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        className="mwt-hero"
        id="terms"
      >
        <div className="mwt-hero-inner">
          <div className="mwt-hero-copy">
            <div className="mwt-hero-badge">
              <span />
              Website Use • Projects • Technology
            </div>

            <h1>
              <span>
                Clear Rules.
              </span>

              <span className="mwt-blue">
                Clear Expectations.
              </span>

              <span>
                Better
              </span>

              <span className="mwt-orange">
                Business.
              </span>
            </h1>

            <p>
              These Terms of Use explain general
              rules for using the Matthew Web
              public website and how website
              information, project inquiries,
              pricing, content, and external
              technology should be understood.
            </p>

            <div className="mwt-button-row">
              <a
                href="#full-terms"
                className="mwt-btn mwt-btn-blue"
              >
                Read the Terms
                <ArrowRight />
              </a>

              <Link
                href="/privacy-policy"
                className="mwt-btn mwt-btn-dark"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <div
            className="mwt-terms-stage"
            aria-hidden="true"
          >
            <div className="mwt-terms-panel">
              <div className="mwt-panel-top">
                <strong>
                  MATTHEW WEB // TERMS
                </strong>

                <div className="mwt-panel-status">
                  WEBSITE TERMS
                </div>
              </div>

              <div className="mwt-document">
                <FileCheck2 />
              </div>

              <div className="mwt-mini-grid">
                <div className="mwt-mini">
                  <Globe2 />
                  <strong>
                    WEBSITE USE
                  </strong>
                </div>

                <div className="mwt-mini">
                  <FileText />
                  <strong>
                    PROJECT INFO
                  </strong>
                </div>

                <div className="mwt-mini">
                  <ShieldCheck />
                  <strong>
                    RESPONSIBLE USE
                  </strong>
                </div>

                <div className="mwt-mini">
                  <Scale />
                  <strong>
                    CLEAR TERMS
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          SUMMARY
      ====================================================== */}

      <section className="mwt-section mwt-summary">
        <div className="mwt-container">
          <div className="mwt-heading center">
            <div className="mwt-kicker">
              <Sparkles />
              Terms Overview
            </div>

            <h2>
              The Important Parts{" "}
              <span className="mwt-blue">
                Up Front
              </span>
            </h2>

            <p>
              These terms are designed to explain
              the public website without
              pretending that one webpage can
              replace the specific agreement
              needed for an actual customer
              project.
            </p>
          </div>

          <div className="mwt-summary-grid">
            {summaryCards.map(
              (item) => {
                const Icon =
                  item.icon;

                return (
                  <div
                    className={`mwt-summary-card ${item.accent}`}
                    key={item.title}
                  >
                    <div className="mwt-summary-icon">
                      <Icon />
                    </div>

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
          FULL TERMS
      ====================================================== */}

      <section
        className="mwt-section mwt-policy"
        id="full-terms"
      >
        <div className="mwt-container">
          <div className="mwt-policy-layout">
            {/* ================================================
                NAVIGATION
            ================================================= */}

            <nav className="mwt-policy-nav">
              <strong>
                Terms Sections
              </strong>

              {termsNavigation.map(
                (item) => (
                  <a
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </a>
                )
              )}
            </nav>

            {/* ================================================
                TERMS CONTENT
            ================================================= */}

            <div>
              <div className="mwt-effective">
                <strong>
                  Last Updated:
                </strong>{" "}
                September 9, 2026
              </div>

              {/* ==============================================
                  GENERAL
              =============================================== */}

              <section
                className="mwt-policy-block"
                id="general"
              >
                <h2>
                  General Terms
                </h2>

                <p>
                  These Terms of Use apply to the
                  public Matthew Web website and
                  general information made
                  available through it.
                </p>

                <p>
                  By using the public website,
                  visitors agree to use it for
                  lawful and legitimate purposes
                  and not intentionally interfere
                  with Matthew Web systems,
                  infrastructure, users, or
                  business operations.
                </p>

                <p>
                  These Terms of Use are not
                  intended to replace a specific
                  customer agreement, statement
                  of work, invoice, proposal,
                  license, payment arrangement,
                  or other written document
                  governing a particular project.
                </p>
              </section>

              {/* ==============================================
                  WEBSITE INFORMATION
              =============================================== */}

              <section
                className="mwt-policy-block"
                id="website-information"
              >
                <h2>
                  Website Information
                </h2>

                <p>
                  Matthew Web works to keep
                  public website information
                  useful and reasonably current.
                  However, services, pricing,
                  technologies, project status,
                  examples, development plans,
                  policies, and other information
                  may change over time.
                </p>

                <p>
                  Information presented on the
                  public website should not be
                  interpreted as a guaranteed
                  quote, guaranteed result,
                  guaranteed timeline, guaranteed
                  availability, or promise that a
                  particular feature or future
                  project will be completed.
                </p>
              </section>

              {/* ==============================================
                  SERVICES
              =============================================== */}

              <section
                className="mwt-policy-block"
                id="services"
              >
                <h2>
                  Services & Project Information
                </h2>

                <p>
                  Matthew Web may provide
                  services including website
                  development, redesign,
                  maintenance, domain and
                  deployment assistance, forms,
                  payment integrations,
                  analytics, indexing support,
                  search-related technical work,
                  added website functionality,
                  ongoing support, and custom
                  software.
                </p>

                <p>
                  Not every service is appropriate
                  for every project. Actual
                  deliverables depend on the
                  customer&apos;s needs,
                  technical requirements,
                  available resources, chosen
                  services, and established
                  project scope.
                </p>

                <p>
                  Internal projects, research,
                  prototypes, games, educational
                  technology, CPU work, FPGA
                  development, future hardware,
                  and other research material
                  should not automatically be
                  interpreted as commercially
                  available products unless
                  Matthew Web specifically
                  identifies them as available
                  for purchase or customer use.
                </p>
              </section>

              {/* ==============================================
                  PRICING
              =============================================== */}

              <section
                className="mwt-policy-block"
                id="pricing"
              >
                <h2>
                  Estimates, Pricing &
                  Payments
                </h2>

                <p>
                  Prices displayed on the website
                  may represent standard pricing,
                  starting points, or examples
                  for qualifying project scopes.
                  A larger or more complex
                  project may require a custom
                  quote.
                </p>

                <p>
                  Pricing can vary based on
                  factors such as page count,
                  custom functionality, software
                  development, integrations,
                  content requirements,
                  technical complexity, support,
                  timeline, and other project
                  requirements.
                </p>

                <p>
                  Deposits, milestone payments,
                  final payments, subscriptions,
                  cancellation terms, ownership
                  transfer, revision limits, and
                  other payment conditions should
                  be defined through the
                  applicable project arrangement
                  rather than assumed from
                  general website information.
                </p>
              </section>

              {/* ==============================================
                  CUSTOMER RESPONSIBILITIES
              =============================================== */}

              <section
                className="mwt-policy-block"
                id="customer-responsibilities"
              >
                <h2>
                  Customer Responsibilities
                </h2>

                <p>
                  Successful projects often
                  depend on cooperation between
                  Matthew Web and the customer.
                  Customers may be responsible
                  for providing information,
                  approvals, content, access,
                  feedback, or other materials
                  necessary to complete the
                  agreed work.
                </p>

                <ul className="mwt-list">
                  {clientResponsibilities.map(
                    (item) => (
                      <li key={item}>
                        <CheckCircle2 />
                        {item}
                      </li>
                    )
                  )}
                </ul>

                <p>
                  Delays in receiving required
                  information, access,
                  approvals, content, or payment
                  may affect project timing.
                </p>
              </section>

              {/* ==============================================
                  RESULTS
              =============================================== */}

              <section
                className="mwt-policy-block"
                id="results"
              >
                <h2>
                  SEO, Indexing, Traffic &
                  External Results
                </h2>

                <p>
                  Matthew Web may provide
                  technical help involving
                  website structure, metadata,
                  Search Console, Bing Webmaster
                  Tools, sitemaps, indexing,
                  internal linking, performance,
                  analytics, and related search
                  improvements.
                </p>

                <p>
                  Search engines, advertising
                  platforms, social platforms,
                  marketplaces, payment
                  providers, hosting companies,
                  and other third parties make
                  their own decisions and may
                  change their policies,
                  algorithms, pricing, approval
                  criteria, or technical systems.
                </p>

                <p>
                  Matthew Web therefore does not
                  promise a particular search
                  ranking, indexing date,
                  advertising approval, traffic
                  level, number of leads,
                  conversion rate, sales volume,
                  revenue result, or other
                  external platform outcome
                  unless a separate written
                  agreement explicitly says
                  otherwise.
                </p>
              </section>

              {/* ==============================================
                  THIRD PARTY
              =============================================== */}

              <section
                className="mwt-policy-block"
                id="third-party"
              >
                <h2>
                  Third-Party Services
                </h2>

                <p>
                  Matthew Web websites and
                  projects may depend on outside
                  providers for domains, hosting,
                  databases, analytics, email,
                  APIs, authentication, payment
                  processing, search tools,
                  development infrastructure,
                  advertising, or other
                  technology.
                </p>

                <p>
                  Third-party providers operate
                  under their own terms,
                  policies, systems, pricing, and
                  availability. Matthew Web
                  cannot directly control
                  third-party outages, account
                  restrictions, policy changes,
                  discontinuation, security
                  incidents, billing changes, or
                  technical decisions.
                </p>
              </section>

              {/* ==============================================
                  INTELLECTUAL PROPERTY
              =============================================== */}

              <section
                className="mwt-policy-block"
                id="intellectual-property"
              >
                <h2>
                  Intellectual Property &
                  Content
                </h2>

                <p>
                  Unless otherwise stated,
                  Matthew Web website text,
                  branding, design elements,
                  original graphics, original
                  code, project descriptions,
                  documentation, and other
                  original materials may be
                  protected by applicable
                  intellectual-property law.
                </p>

                <p>
                  Visitors may view the website
                  for normal informational and
                  business purposes but should
                  not represent Matthew Web
                  materials as their own or use
                  them in a misleading,
                  fraudulent, or unlawful manner.
                </p>

                <p>
                  Customers are responsible for
                  ensuring that content they
                  provide for use in a project,
                  including images, logos, text,
                  videos, fonts, music, data, and
                  other materials, may legally be
                  used for the intended purpose.
                </p>

                <p>
                  Ownership, licensing,
                  transfer, reusable code,
                  customer-specific work, source
                  files, internal tools, and
                  other intellectual-property
                  matters for paid projects
                  should be governed by the
                  applicable written project
                  agreement.
                </p>
              </section>

              {/* ==============================================
                  ACCEPTABLE USE
              =============================================== */}

              <section
                className="mwt-policy-block"
                id="acceptable-use"
              >
                <h2>
                  Acceptable Website Use
                </h2>

                <p>
                  Visitors may use the public
                  Matthew Web website for normal
                  informational, educational,
                  business, and communication
                  purposes.
                </p>

                <p>
                  Visitors may not intentionally
                  use the website or connected
                  systems in a way designed to
                  harm Matthew Web, other users,
                  customers, infrastructure, or
                  third-party systems.
                </p>

                <ul className="mwt-list">
                  {prohibitedUses.map(
                    (item) => (
                      <li key={item}>
                        <CheckCircle2 />
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </section>

              {/* ==============================================
                  AVAILABILITY
              =============================================== */}

              <section
                className="mwt-policy-block"
                id="availability"
              >
                <h2>
                  Website Availability
                </h2>

                <p>
                  Matthew Web aims to maintain a
                  functional and useful website,
                  but continuous availability
                  cannot be guaranteed.
                </p>

                <p>
                  Maintenance, hosting problems,
                  internet failures, software
                  bugs, security incidents,
                  provider outages, upgrades,
                  configuration changes, or
                  other technical events may
                  temporarily affect website
                  availability or functionality.
                </p>
              </section>

              {/* ==============================================
                  LIABILITY
              =============================================== */}

              <section
                className="mwt-policy-block"
                id="liability"
              >
                <h2>
                  General Limitations
                </h2>

                <p>
                  The public Matthew Web website
                  is provided for general
                  information, communication, and
                  business purposes.
                </p>

                <p>
                  Matthew Web does not represent
                  that every page will always be
                  error-free, uninterrupted,
                  complete, current, or suitable
                  for every visitor&apos;s
                  individual circumstances.
                </p>

                <p>
                  To the extent permitted by
                  applicable law, Matthew Web
                  does not assume responsibility
                  for losses caused solely by a
                  visitor&apos;s reliance on
                  general public website
                  information, third-party
                  platform decisions, external
                  outages, or unauthorized misuse
                  of the website.
                </p>

                <p>
                  Specific responsibilities,
                  warranties, remedies,
                  limitations, and other legal
                  obligations connected to a
                  paid customer project should
                  be addressed in the applicable
                  written project agreement.
                </p>
              </section>

              {/* ==============================================
                  PRIVACY
              =============================================== */}

              <section
                className="mwt-policy-block"
                id="privacy"
              >
                <h2>
                  Privacy
                </h2>

                <p>
                  Use of the website may involve
                  contact forms, analytics,
                  cookies, hosting systems,
                  security services, email
                  delivery, and other data
                  processing described in the
                  Matthew Web Privacy Policy.
                </p>

                <p>
                  You can review that policy
                  here:
                </p>

                <p>
                  <Link href="/privacy-policy">
                    View the Matthew Web Privacy
                    Policy
                  </Link>
                </p>
              </section>

              {/* ==============================================
                  CHANGES
              =============================================== */}

              <section
                className="mwt-policy-block"
                id="changes"
              >
                <h2>
                  Changes to These Terms
                </h2>

                <p>
                  Matthew Web may revise these
                  Terms of Use as the public
                  website, services,
                  technologies, policies,
                  business structure, or legal
                  requirements change.
                </p>

                <p>
                  Updated terms should be posted
                  on this page with a revised
                  update date.
                </p>
              </section>

              {/* ==============================================
                  CONTACT
              =============================================== */}

              <section
                className="mwt-policy-block"
                id="terms-contact"
              >
                <h2>
                  Contact Information
                </h2>

                <p>
                  Questions about these Terms of
                  Use can be directed to Matthew
                  Web.
                </p>

                <p>
                  <strong>
                    Matthew Web
                  </strong>
                  <br />

                  973 River Road
                  <br />

                  Madison, ME 04950
                  <br />

                  Phone:{" "}
                  <a href="tel:2076317793">
                    (207) 631-7793
                  </a>
                  <br />

                  Email:{" "}
                  <a href="mailto:matthewwweb@gmail.com">
                    matthewwweb@gmail.com
                  </a>
                </p>

                <p>
                  Please contact Matthew Web
                  before attempting an in-person
                  visit. Client walk-ins are not
                  accepted at the listed
                  location.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          FUTURE CUSTOMER AGREEMENT
      ====================================================== */}

      <section className="mwt-agreement">
        <div className="mwt-agreement-card">
          <div className="mwt-agreement-icon">
            <FileCheck2 />
          </div>

          <div className="mwt-agreement-copy">
            <h2>
              Website Terms Are Not the Same as a{" "}
              <span className="mwt-orange">
                Customer Project Agreement.
              </span>
            </h2>

            <p>
              These Terms of Use govern the
              public Matthew Web website and
              provide general information about
              services and projects. A customer
              project may require a separate
              written agreement defining scope,
              deposits, milestone payments,
              revisions, cancellations,
              intellectual property, delivery,
              support, ownership transfer, and
              other project-specific terms.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          FINAL
      ====================================================== */}

      <section className="mwt-final">
        <div className="mwt-final-card">
          <Zap />

          <h2>
            Questions About{" "}
            <span className="mwt-orange">
              These Terms?
            </span>
          </h2>

          <p>
            Contact Matthew Web if you have a
            question about use of the website,
            public service information, a
            project inquiry, or how a specific
            project would be handled.
          </p>

          <div className="mwt-button-row">
            <Link
              href="/contact-us"
              className="mwt-btn mwt-btn-orange"
            >
              Contact Matthew Web
              <ArrowRight />
            </Link>

            <Link
              href="/"
              className="mwt-btn mwt-btn-dark"
            >
              Back Home
            </Link>
          </div>

          <nav className="mwt-related">
            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <Link href="/code-of-ethics">
              Code of Ethics
            </Link>

            <Link href="/services">
              Services
            </Link>

            <Link href="/pricing">
              Pricing
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
import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cookie,
  Database,
  Eye,
  FileText,
  Globe2,
  KeyRound,
  LockKeyhole,
  Mail,
  MessageSquare,
  Server,
  ShieldCheck,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/* ============================================================
   METADATA
============================================================ */

export const metadata = {
  title:
    "Privacy Policy | Matthew Web",

  description:
    "Read the Matthew Web Privacy Policy to learn what information may be collected, how it is used, which website technologies and service providers are involved, and how to contact Matthew Web about privacy.",

  alternates: {
    canonical:
      "https://matthew-web.com/privacy-policy",
  },

  openGraph: {
    title:
      "Privacy Policy | Matthew Web",

    description:
      "Learn how Matthew Web handles website inquiries, analytics, lead information, reCAPTCHA, email delivery, hosting data, and other website information.",

    url:
      "https://matthew-web.com/privacy-policy",

    siteName:
      "Matthew Web",

    type:
      "website",
  },
};

/* ============================================================
   PRIVACY SUMMARY
============================================================ */

const privacySummary = [
  {
    icon:
      MessageSquare,

    title:
      "Information You Submit",

    text:
      "Contact forms may collect your name, email address, phone number, business name, message, project information, and other information you choose to provide.",

    accent:
      "blue",
  },

  {
    icon:
      BarChart3,

    title:
      "Website Usage Data",

    text:
      "Analytics and hosting systems may process information such as pages viewed, device and browser information, referral source, approximate geographic information, and technical usage data.",

    accent:
      "orange",
  },

  {
    icon:
      Database,

    title:
      "Lead Management",

    text:
      "Information submitted through Matthew Web forms may be stored in internal lead-management systems so inquiries can be reviewed, followed up on, and managed.",

    accent:
      "blue",
  },

  {
    icon:
      ShieldCheck,

    title:
      "Spam & Security Protection",

    text:
      "Security and anti-spam services may process technical information needed to protect forms, systems, accounts, and website infrastructure from abuse.",

    accent:
      "orange",
  },

  {
    icon:
      Mail,

    title:
      "Email Communication",

    text:
      "Submitted information may be used to send confirmations, project responses, follow-up messages, support communications, or other messages related to your inquiry or customer relationship.",

    accent:
      "blue",
  },

  {
    icon:
      UserCheck,

    title:
      "No Current Sale of Personal Information",

    text:
      "Matthew Web does not currently sell personal information submitted through its website as a standalone data product.",

    accent:
      "orange",
  },
];

/* ============================================================
   SERVICE PROVIDERS
============================================================ */

const providers = [
  {
    icon:
      BarChart3,

    title:
      "Google Analytics",

    text:
      "Used to understand website traffic, page usage, devices, referral sources, and other website-performance information.",
  },

  {
    icon:
      ShieldCheck,

    title:
      "Google reCAPTCHA",

    text:
      "Used on forms to help distinguish legitimate activity from automated spam or abuse.",
  },

  {
    icon:
      Database,

    title:
      "Supabase",

    text:
      "Used as part of Matthew Web's website and lead-management infrastructure, including storage of information submitted through applicable forms.",
  },

  {
    icon:
      Mail,

    title:
      "Resend",

    text:
      "Used for website-related email delivery, including inquiry notifications, confirmations, and other transactional messages where configured.",
  },

  {
    icon:
      Server,

    title:
      "Vercel",

    text:
      "Used to host and deploy Matthew Web's website. Hosting infrastructure may process normal server, request, security, and technical log information.",
  },

  {
    icon:
      Globe2,

    title:
      "Other Necessary Providers",

    text:
      "Matthew Web may use additional domain, infrastructure, security, payment, analytics, or technical providers when needed to operate services and projects.",
  },
];

/* ============================================================
   INFORMATION USES
============================================================ */

const uses = [
  "Respond to website, software, support, or project inquiries",
  "Communicate about requested services or existing customer work",
  "Store and organize leads and customer-related information",
  "Send inquiry confirmations and operational email messages",
  "Understand website traffic and improve website usability",
  "Diagnose technical problems and improve performance",
  "Prevent spam, abuse, fraud, and unauthorized activity",
  "Maintain business records where reasonably necessary",
  "Comply with applicable legal obligations",
  "Protect Matthew Web, customers, users, systems, and property",
];

/* ============================================================
   PAGE SCHEMA
============================================================ */

const privacySchema = {
  "@context":
    "https://schema.org",

  "@type":
    "WebPage",

  name:
    "Matthew Web Privacy Policy",

  url:
    "https://matthew-web.com/privacy-policy",

  description:
    "Privacy information for the Matthew Web website and related online services.",
};

/* ============================================================
   PAGE
============================================================ */

export default function PrivacyPolicyPage() {
  return (
    <main className="mwprivacy-page">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              privacySchema
            ),
        }}
      />

      <style>{`
        :root {
          --mwpv-black:
            #020304;

          --mwpv-panel:
            #091117;

          --mwpv-muted:
            #aebbc5;

          --mwpv-blue:
            #08b9f4;

          --mwpv-blue-light:
            #38d7ff;

          --mwpv-orange:
            #ff7900;

          --mwpv-orange-light:
            #ffab31;

          --mwpv-green:
            #35e07e;

          --mwpv-border:
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
              --mwpv-black
            );
        }

        .mwprivacy-page {
          min-height:
            100vh;

          overflow:
            hidden;

          color:
            #ffffff;

          background:
            var(
              --mwpv-black
            );
        }

        .mwpv-container {
          width:
            100%;

          max-width:
            1380px;

          margin:
            0 auto;
        }

        .mwpv-section {
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

        .mwpv-blue {
          color:
            var(
              --mwpv-blue-light
            );
        }

        .mwpv-orange {
          color:
            var(
              --mwpv-orange
            );
        }

        /* =====================================================
           COMMON
        ===================================================== */

        .mwpv-kicker {
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
              --mwpv-blue-light
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

        .mwpv-kicker.orange {
          color:
            var(
              --mwpv-orange-light
            );
        }

        .mwpv-kicker svg {
          width:
            18px;

          height:
            18px;
        }

        .mwpv-heading {
          max-width:
            900px;

          margin-bottom:
            48px;
        }

        .mwpv-heading.center {
          margin-left:
            auto;

          margin-right:
            auto;

          text-align:
            center;
        }

        .mwpv-heading h2 {
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

        .mwpv-heading p {
          max-width:
            820px;

          margin:
            0;

          color:
            var(
              --mwpv-muted
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

        .mwpv-heading.center p {
          margin-left:
            auto;

          margin-right:
            auto;
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .mwpv-button-row {
          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            13px;

          margin-top:
            29px;
        }

        .mwpv-btn {
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

        .mwpv-btn svg {
          width:
            18px;

          height:
            18px;
        }

        .mwpv-btn-blue {
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

        .mwpv-btn-orange {
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

        .mwpv-btn-dark {
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

        .mwpv-btn:hover {
          transform:
            translateY(
              -2px
            );
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwpv-hero {
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

        .mwpv-hero::before {
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

        .mwpv-hero-inner {
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

        .mwpv-hero-badge {
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

        .mwpv-hero-badge span {
          width:
            7px;

          height:
            7px;

          border-radius:
            50%;

          background:
            var(
              --mwpv-green
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

        .mwpv-hero h1 {
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

        .mwpv-hero h1 span {
          display:
            block;
        }

        .mwpv-hero-copy
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
           HERO PRIVACY VISUAL
        ===================================================== */

        .mwpv-privacy-stage {
          position:
            relative;

          min-height:
            440px;

          display:
            grid;

          place-items:
            center;
        }

        .mwpv-privacy-panel {
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

        .mwpv-panel-top {
          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          margin-bottom:
            28px;
        }

        .mwpv-panel-top
          strong {
          color:
            #81929d;

          font-size:
            9px;

          letter-spacing:
            0.13em;
        }

        .mwpv-panel-status {
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

        .mwpv-panel-status::before {
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
              --mwpv-green
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

        .mwpv-lock {
          width:
            125px;

          height:
            125px;

          display:
            grid;

          place-items:
            center;

          margin:
            0 auto 28px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.3
            );

          border-radius:
            30px;

          color:
            var(
              --mwpv-blue-light
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

        .mwpv-lock svg {
          width:
            60px;

          height:
            60px;
        }

        .mwpv-mini-grid {
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

        .mwpv-mini {
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

        .mwpv-mini svg {
          width:
            18px;

          height:
            18px;

          color:
            var(
              --mwpv-blue-light
            );
        }

        .mwpv-mini:nth-child(even)
          svg {
          color:
            var(
              --mwpv-orange-light
            );
        }

        .mwpv-mini strong {
          font-size:
            9px;
        }

        /* =====================================================
           SUMMARY
        ===================================================== */

        .mwpv-summary {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwpv-summary-grid {
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

        .mwpv-summary-card {
          min-height:
            270px;

          padding:
            25px;

          border:
            1px solid
            var(
              --mwpv-border
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

        .mwpv-summary-icon {
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

        .mwpv-summary-card.blue
          .mwpv-summary-icon {
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
              --mwpv-blue-light
            );

          background:
            rgba(
              8,
              185,
              244,
              0.055
            );
        }

        .mwpv-summary-card.orange
          .mwpv-summary-icon {
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
              --mwpv-orange-light
            );

          background:
            rgba(
              255,
              121,
              0,
              0.05
            );
        }

        .mwpv-summary-icon svg {
          width:
            27px;

          height:
            27px;
        }

        .mwpv-summary-card h3 {
          margin:
            0 0 10px;

          font-size:
            18px;
        }

        .mwpv-summary-card p {
          margin:
            0;

          color:
            var(
              --mwpv-muted
            );

          font-size:
            13px;

          line-height:
            1.68;
        }

        /* =====================================================
           POLICY CONTENT
        ===================================================== */

        .mwpv-policy {
          background:
            #020304;
        }

        .mwpv-policy-layout {
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

        .mwpv-policy-nav {
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

        .mwpv-policy-nav
          strong {
          display:
            block;

          margin-bottom:
            16px;

          color:
            #ffffff;

          font-size:
            11px;

          letter-spacing:
            0.1em;

          text-transform:
            uppercase;
        }

        .mwpv-policy-nav
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

        .mwpv-policy-nav
          a:hover {
          color:
            var(
              --mwpv-blue-light
            );
        }

        .mwpv-policy-content {
          min-width:
            0;
        }

        .mwpv-effective {
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

        .mwpv-policy-block {
          margin-bottom:
            55px;

          scroll-margin-top:
            30px;
        }

        .mwpv-policy-block h2 {
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

        .mwpv-policy-block h3 {
          margin:
            28px 0 11px;

          color:
            var(
              --mwpv-blue-light
            );

          font-size:
            18px;
        }

        .mwpv-policy-block p {
          margin:
            0 0 16px;

          color:
            var(
              --mwpv-muted
            );

          font-size:
            14px;

          line-height:
            1.82;
        }

        .mwpv-policy-block
          a {
          color:
            var(
              --mwpv-blue-light
            );
        }

        .mwpv-policy-list {
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

        .mwpv-policy-list li {
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

        .mwpv-policy-list svg {
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
              --mwpv-blue-light
            );
        }

        /* =====================================================
           PROVIDERS
        ===================================================== */

        .mwpv-providers {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwpv-provider-grid {
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

        .mwpv-provider-card {
          min-height:
            250px;

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
              0.018
            );
        }

        .mwpv-provider-card:nth-child(even) {
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

        .mwpv-provider-card
          svg {
          width:
            30px;

          height:
            30px;

          margin-bottom:
            17px;

          color:
            var(
              --mwpv-blue-light
            );
        }

        .mwpv-provider-card:nth-child(even)
          svg {
          color:
            var(
              --mwpv-orange-light
            );
        }

        .mwpv-provider-card
          h3 {
          margin:
            0 0 10px;

          font-size:
            18px;
        }

        .mwpv-provider-card
          p {
          margin:
            0;

          color:
            var(
              --mwpv-muted
            );

          font-size:
            13px;

          line-height:
            1.7;
        }

        /* =====================================================
           FUTURE SERVICES NOTE
        ===================================================== */

        .mwpv-future {
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

        .mwpv-future-card {
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

        .mwpv-future-icon {
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
            var(
              --mwpv-orange
            );

          background:
            rgba(
              255,
              121,
              0,
              0.055
            );
        }

        .mwpv-future-icon svg {
          width:
            35px;

          height:
            35px;
        }

        .mwpv-future-copy h2 {
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

        .mwpv-future-copy p {
          margin:
            0;

          color:
            var(
              --mwpv-muted
            );

          font-size:
            13px;

          line-height:
            1.72;
        }

        /* =====================================================
           CONTACT
        ===================================================== */

        .mwpv-final {
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

        .mwpv-final-card {
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

        .mwpv-final-card
          > svg {
          width:
            43px;

          height:
            43px;

          margin-bottom:
            19px;

          color:
            var(
              --mwpv-orange
            );
        }

        .mwpv-final-card h2 {
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

        .mwpv-final-card p {
          max-width:
            740px;

          margin:
            18px auto 0;

          color:
            var(
              --mwpv-muted
            );

          font-size:
            15px;

          line-height:
            1.75;
        }

        .mwpv-final-card
          .mwpv-button-row {
          justify-content:
            center;
        }

        .mwpv-related {
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

        .mwpv-related a {
          color:
            #8fa0ab;

          text-decoration:
            none;

          font-size:
            11px;

          font-weight:
            700;
        }

        .mwpv-related a:hover {
          color:
            var(
              --mwpv-blue-light
            );
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (
          max-width:
          1100px
        ) {
          .mwpv-summary-grid,
          .mwpv-provider-grid {
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
          .mwpv-hero-inner,
          .mwpv-policy-layout {
            grid-template-columns:
              1fr;
          }

          .mwpv-hero-inner {
            text-align:
              center;
          }

          .mwpv-hero-badge {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwpv-hero-copy
            > p {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwpv-button-row {
            justify-content:
              center;
          }

          .mwpv-policy-nav {
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

          .mwpv-policy-nav
            strong {
            grid-column:
              1 / -1;
          }
        }

        @media (
          max-width:
          700px
        ) {
          .mwpv-section {
            padding:
              70px 16px;
          }

          .mwpv-hero {
            min-height:
              auto;
          }

          .mwpv-hero-inner {
            padding:
              70px 16px;
          }

          .mwpv-hero h1 {
            font-size:
              clamp(
                46px,
                14vw,
                67px
              );
          }

          .mwpv-summary-grid,
          .mwpv-provider-grid {
            grid-template-columns:
              1fr;
          }

          .mwpv-future-card {
            grid-template-columns:
              1fr;

            text-align:
              center;
          }

          .mwpv-future-icon {
            margin:
              0 auto;
          }
        }

        @media (
          max-width:
          500px
        ) {
          .mwpv-mini-grid,
          .mwpv-policy-nav {
            grid-template-columns:
              1fr;
          }

          .mwpv-privacy-stage {
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
        className="mwpv-hero"
        id="privacy-policy"
      >
        <div className="mwpv-hero-inner">
          <div className="mwpv-hero-copy">
            <div className="mwpv-hero-badge">
              <span />
              Privacy • Data • Transparency
            </div>

            <h1>
              <span>
                Your Information
              </span>

              <span className="mwpv-blue">
                Deserves Care.
              </span>

              <span>
                Your Privacy
              </span>

              <span className="mwpv-orange">
                Deserves Clarity.
              </span>
            </h1>

            <p>
              This Privacy Policy explains what
              information Matthew Web may
              collect through this website, why
              that information is used, the
              technologies involved, and how you
              can contact us about your
              information.
            </p>

            <div className="mwpv-button-row">
              <a
                href="#full-policy"
                className="mwpv-btn mwpv-btn-blue"
              >
                Read the Policy
                <ArrowRight />
              </a>

              <Link
                href="/contact-us"
                className="mwpv-btn mwpv-btn-dark"
              >
                Contact Matthew Web
              </Link>
            </div>
          </div>

          <div
            className="mwpv-privacy-stage"
            aria-hidden="true"
          >
            <div className="mwpv-privacy-panel">
              <div className="mwpv-panel-top">
                <strong>
                  MATTHEW WEB // PRIVACY
                </strong>

                <div className="mwpv-panel-status">
                  POLICY ACTIVE
                </div>
              </div>

              <div className="mwpv-lock">
                <LockKeyhole />
              </div>

              <div className="mwpv-mini-grid">
                <div className="mwpv-mini">
                  <ShieldCheck />
                  <strong>
                    SECURITY
                  </strong>
                </div>

                <div className="mwpv-mini">
                  <Eye />
                  <strong>
                    TRANSPARENCY
                  </strong>
                </div>

                <div className="mwpv-mini">
                  <Database />
                  <strong>
                    DATA
                  </strong>
                </div>

                <div className="mwpv-mini">
                  <UserCheck />
                  <strong>
                    USER CHOICE
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

      <section className="mwpv-section mwpv-summary">
        <div className="mwpv-container">
          <div className="mwpv-heading center">
            <div className="mwpv-kicker">
              <ShieldCheck />
              Privacy Overview
            </div>

            <h2>
              What Happens to{" "}
              <span className="mwpv-blue">
                Website Information?
              </span>
            </h2>

            <p>
              Matthew Web uses information to
              operate the website, respond to
              inquiries, manage business
              relationships, understand website
              performance, and protect systems.
            </p>
          </div>

          <div className="mwpv-summary-grid">
            {privacySummary.map(
              (item) => {
                const Icon =
                  item.icon;

                return (
                  <div
                    className={`mwpv-summary-card ${item.accent}`}
                    key={item.title}
                  >
                    <div className="mwpv-summary-icon">
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
          FULL POLICY
      ====================================================== */}

      <section
        className="mwpv-section mwpv-policy"
        id="full-policy"
      >
        <div className="mwpv-container">
          <div className="mwpv-policy-layout">
            {/* ================================================
                POLICY NAV
            ================================================= */}

            <nav className="mwpv-policy-nav">
              <strong>
                Policy Sections
              </strong>

              <a href="#information-collected">
                Information We Collect
              </a>

              <a href="#how-information-is-used">
                How Information Is Used
              </a>

              <a href="#contact-forms">
                Contact Forms & Leads
              </a>

              <a href="#analytics">
                Analytics
              </a>

              <a href="#recaptcha">
                reCAPTCHA
              </a>

              <a href="#cookies">
                Cookies
              </a>

              <a href="#service-providers">
                Service Providers
              </a>

              <a href="#security">
                Security
              </a>

              <a href="#sharing">
                Information Sharing
              </a>

              <a href="#retention">
                Data Retention
              </a>

              <a href="#choices">
                Your Choices
              </a>

              <a href="#children">
                Children&apos;s Privacy
              </a>

              <a href="#policy-changes">
                Policy Changes
              </a>

              <a href="#privacy-contact">
                Contact
              </a>
            </nav>

            {/* ================================================
                POLICY BODY
            ================================================= */}

            <div className="mwpv-policy-content">
              <div className="mwpv-effective">
                <strong>
                  Last Updated:
                </strong>{" "}
                September 9, 2026
              </div>

              <section className="mwpv-policy-block">
                <h2>
                  Privacy Policy
                </h2>

                <p>
                  This Privacy Policy describes
                  how Matthew Web handles
                  information associated with
                  the public Matthew Web website
                  and related online interactions.
                </p>

                <p>
                  By using this website, you may
                  interact with forms, analytics,
                  security systems, hosting
                  infrastructure, and other
                  technologies described below.
                  Different Matthew Web products,
                  customer projects, or future
                  services may require additional
                  privacy information when their
                  data practices differ from this
                  public website.
                </p>
              </section>

              {/* ==============================================
                  INFORMATION COLLECTED
              =============================================== */}

              <section
                className="mwpv-policy-block"
                id="information-collected"
              >
                <h2>
                  Information We Collect
                </h2>

                <h3>
                  Information You Provide
                </h3>

                <p>
                  When you submit information
                  through a Matthew Web form, we
                  may collect information such
                  as:
                </p>

                <ul className="mwpv-policy-list">
                  <li>
                    <CheckCircle2 />
                    Your name
                  </li>

                  <li>
                    <CheckCircle2 />
                    Email address
                  </li>

                  <li>
                    <CheckCircle2 />
                    Phone number
                  </li>

                  <li>
                    <CheckCircle2 />
                    Business name
                  </li>

                  <li>
                    <CheckCircle2 />
                    Website address or other
                    business information you
                    provide
                  </li>

                  <li>
                    <CheckCircle2 />
                    Project requirements,
                    messages, questions, support
                    requests, or other submitted
                    information
                  </li>
                </ul>

                <h3>
                  Information Collected
                  Automatically
                </h3>

                <p>
                  Website, analytics, hosting,
                  and security systems may
                  automatically process technical
                  information associated with
                  visits to the website. This may
                  include browser information,
                  device information, pages
                  visited, referral source,
                  approximate geographic
                  information, IP-related
                  technical information,
                  timestamps, and other normal
                  website or server activity.
                </p>
              </section>

              {/* ==============================================
                  USES
              =============================================== */}

              <section
                className="mwpv-policy-block"
                id="how-information-is-used"
              >
                <h2>
                  How We Use Information
                </h2>

                <p>
                  Matthew Web may use collected
                  information for legitimate
                  website, customer-service,
                  operational, security, and
                  business purposes, including:
                </p>

                <ul className="mwpv-policy-list">
                  {uses.map(
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
                  CONTACT FORMS
              =============================================== */}

              <section
                className="mwpv-policy-block"
                id="contact-forms"
              >
                <h2>
                  Contact Forms &
                  Lead Management
                </h2>

                <p>
                  When you submit a Matthew Web
                  contact or project form, the
                  submitted information may be
                  saved in Matthew Web&apos;s
                  internal lead-management
                  systems so the inquiry can be
                  reviewed, organized, followed
                  up on, and associated with
                  relevant business activity.
                </p>

                <p>
                  Form submissions may also
                  generate email notifications
                  to Matthew Web and, where
                  configured, confirmation or
                  follow-up messages to the email
                  address you provided.
                </p>

                <p>
                  Please avoid submitting
                  passwords, financial account
                  credentials, government
                  identification numbers, or
                  other highly sensitive
                  information through a normal
                  website inquiry form unless
                  Matthew Web specifically
                  provides an appropriate method
                  for that information.
                </p>
              </section>

              {/* ==============================================
                  ANALYTICS
              =============================================== */}

              <section
                className="mwpv-policy-block"
                id="analytics"
              >
                <h2>
                  Google Analytics
                </h2>

                <p>
                  Matthew Web uses Google
                  Analytics to better understand
                  how visitors interact with the
                  website. Analytics information
                  may include pages viewed,
                  traffic source, device and
                  browser information, session
                  activity, approximate location,
                  and other website-usage
                  information made available
                  through the analytics service.
                </p>

                <p>
                  This information helps Matthew
                  Web understand website
                  performance, identify useful
                  content, detect usability
                  problems, and improve the
                  website over time.
                </p>
              </section>

              {/* ==============================================
                  RECAPTCHA
              =============================================== */}

              <section
                className="mwpv-policy-block"
                id="recaptcha"
              >
                <h2>
                  Google reCAPTCHA
                </h2>

                <p>
                  Matthew Web uses Google
                  reCAPTCHA on certain forms to
                  help prevent spam, automated
                  submissions, and other abuse.
                </p>

                <p>
                  reCAPTCHA may process technical
                  information and interaction
                  information as determined by
                  Google for purposes of
                  evaluating whether activity is
                  likely to come from a
                  legitimate user or automated
                  system.
                </p>
              </section>

              {/* ==============================================
                  COOKIES
              =============================================== */}

              <section
                className="mwpv-policy-block"
                id="cookies"
              >
                <h2>
                  Cookies & Similar
                  Technologies
                </h2>

                <p>
                  Matthew Web and service
                  providers used by the website
                  may use cookies, local storage,
                  identifiers, or similar
                  technologies for website
                  functionality, analytics,
                  security, fraud prevention,
                  preferences, and related
                  technical purposes.
                </p>

                <p>
                  Browser settings may allow you
                  to block or delete some cookies.
                  Blocking certain technologies
                  may affect parts of the website
                  or services that depend on
                  them.
                </p>
              </section>

              {/* ==============================================
                  SERVICE PROVIDERS
              =============================================== */}

              <section
                className="mwpv-policy-block"
                id="service-providers"
              >
                <h2>
                  Third-Party Service Providers
                </h2>

                <p>
                  Matthew Web uses third-party
                  technology providers to help
                  operate the website and related
                  business systems. Those
                  providers may process
                  information as needed to
                  provide their services.
                </p>

                <p>
                  Current website infrastructure
                  may include services such as
                  Vercel, Supabase, Resend,
                  Google Analytics, and Google
                  reCAPTCHA.
                </p>
              </section>

              {/* ==============================================
                  SECURITY
              =============================================== */}

              <section
                className="mwpv-policy-block"
                id="security"
              >
                <h2>
                  Security
                </h2>

                <p>
                  Matthew Web uses reasonable
                  administrative, technical, and
                  operational measures intended
                  to help protect information and
                  website systems from
                  unauthorized access, misuse,
                  alteration, or disclosure.
                </p>

                <p>
                  However, no website, database,
                  network, storage system, or
                  internet transmission can be
                  guaranteed to be completely
                  secure. Matthew Web therefore
                  cannot promise absolute
                  security.
                </p>
              </section>

              {/* ==============================================
                  SHARING
              =============================================== */}

              <section
                className="mwpv-policy-block"
                id="sharing"
              >
                <h2>
                  Sharing Information
                </h2>

                <p>
                  Matthew Web does not currently
                  sell personal information
                  submitted through this website
                  as a standalone data product.
                </p>

                <p>
                  Information may be disclosed to
                  technology providers,
                  contractors, professional
                  advisers, or other parties when
                  reasonably necessary to
                  operate the website, perform
                  requested services, maintain
                  security, process business
                  functions, comply with legal
                  obligations, or protect
                  legitimate rights and
                  interests.
                </p>

                <p>
                  Information may also be
                  disclosed when required by
                  applicable law, legal process,
                  court order, or valid
                  governmental request.
                </p>
              </section>

              {/* ==============================================
                  RETENTION
              =============================================== */}

              <section
                className="mwpv-policy-block"
                id="retention"
              >
                <h2>
                  Data Retention
                </h2>

                <p>
                  Matthew Web may retain
                  information for as long as
                  reasonably necessary for the
                  purpose for which it was
                  collected, including customer
                  communication, lead management,
                  project records, accounting,
                  dispute prevention, security,
                  legal obligations, and normal
                  business administration.
                </p>

                <p>
                  Retention periods may vary
                  depending on the type of
                  information and the business or
                  legal reason for keeping it.
                </p>
              </section>

              {/* ==============================================
                  CHOICES
              =============================================== */}

              <section
                className="mwpv-policy-block"
                id="choices"
              >
                <h2>
                  Your Choices &
                  Privacy Requests
                </h2>

                <p>
                  You may contact Matthew Web
                  with questions about
                  information you previously
                  submitted or to request a
                  reasonable correction or
                  deletion where appropriate.
                </p>

                <p>
                  Some information may need to be
                  retained when there is a
                  legitimate business, security,
                  accounting, contractual, or
                  legal reason for keeping it.
                </p>

                <p>
                  Depending on where you live,
                  applicable privacy law may
                  provide additional rights.
                  Matthew Web will evaluate
                  applicable requests based on
                  the circumstances and legal
                  requirements involved.
                </p>
              </section>

              {/* ==============================================
                  CHILDREN
              =============================================== */}

              <section
                className="mwpv-policy-block"
                id="children"
              >
                <h2>
                  Children&apos;s Privacy
                </h2>

                <p>
                  Matthew Web does not knowingly
                  use its general website inquiry
                  forms to collect personal
                  information from children under
                  13.
                </p>

                <p>
                  Matthew Web may develop games,
                  educational technology, or
                  other interactive content in
                  the future. If a future product
                  is specifically directed toward
                  children and requires
                  additional privacy procedures,
                  notices, permissions, or
                  parental consent, those
                  requirements should be
                  addressed separately before
                  that functionality is offered.
                </p>
              </section>

              {/* ==============================================
                  POLICY CHANGES
              =============================================== */}

              <section
                className="mwpv-policy-block"
                id="policy-changes"
              >
                <h2>
                  Changes to This
                  Privacy Policy
                </h2>

                <p>
                  Matthew Web may update this
                  Privacy Policy as the website,
                  business, technology,
                  providers, or legal requirements
                  change.
                </p>

                <p>
                  Material updates should be
                  reflected on this page by
                  changing the posted revision
                  date and, when appropriate,
                  providing additional notice.
                </p>
              </section>

              {/* ==============================================
                  CONTACT
              =============================================== */}

              <section
                className="mwpv-policy-block"
                id="privacy-contact"
              >
                <h2>
                  Contact Matthew Web
                </h2>

                <p>
                  Questions or requests regarding
                  this Privacy Policy can be
                  directed to Matthew Web using
                  the information below.
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
          PROVIDERS
      ====================================================== */}

      <section className="mwpv-section mwpv-providers">
        <div className="mwpv-container">
          <div className="mwpv-heading center">
            <div className="mwpv-kicker orange">
              <Server />
              Website Infrastructure
            </div>

            <h2>
              Services That Help{" "}
              <span className="mwpv-orange">
                Operate the Site
              </span>
            </h2>

            <p>
              Matthew Web relies on specialized
              technology providers for hosting,
              databases, analytics, email
              delivery, security, and other
              website functions.
            </p>
          </div>

          <div className="mwpv-provider-grid">
            {providers.map(
              (provider) => {
                const Icon =
                  provider.icon;

                return (
                  <div
                    className="mwpv-provider-card"
                    key={provider.title}
                  >
                    <Icon />

                    <h3>
                      {provider.title}
                    </h3>

                    <p>
                      {provider.text}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* ======================================================
          FUTURE DATA PRACTICES
      ====================================================== */}

      <section className="mwpv-future">
        <div className="mwpv-future-card">
          <div className="mwpv-future-icon">
            <FileText />
          </div>

          <div className="mwpv-future-copy">
            <h2>
              New Technology Can Mean{" "}
              <span className="mwpv-orange">
                New Privacy Requirements.
              </span>
            </h2>

            <p>
              Matthew Web is developing
              additional software, games,
              educational technology, website
              tools, and future advertising or
              monetization systems. If a new
              product or provider materially
              changes what information is
              collected, how it is used, or with
              whom it is shared, the applicable
              privacy disclosures should be
              reviewed and updated rather than
              assuming this current policy
              automatically covers every future
              system.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          FINAL
      ====================================================== */}

      <section className="mwpv-final">
        <div className="mwpv-final-card">
          <Zap />

          <h2>
            Questions About{" "}
            <span className="mwpv-orange">
              Your Information?
            </span>
          </h2>

          <p>
            Contact Matthew Web if you have a
            privacy question, need help
            understanding this policy, or want
            to ask about information you
            previously submitted through the
            website.
          </p>

          <div className="mwpv-button-row">
            <Link
              href="/contact-us"
              className="mwpv-btn mwpv-btn-orange"
            >
              Contact Matthew Web
              <ArrowRight />
            </Link>

            <Link
              href="/"
              className="mwpv-btn mwpv-btn-dark"
            >
              Back Home
            </Link>
          </div>

          <nav className="mwpv-related">
            <Link href="/code-of-ethics">
              Code of Ethics
            </Link>

            <Link href="/terms">
              Terms of Use
            </Link>

            <Link href="/contact-us">
              Contact
            </Link>

            <Link href="/about-us">
              About
            </Link>
          </nav>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
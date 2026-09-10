import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Eye,
  FileCheck2,
  Handshake,
  HeartHandshake,
  MessageSquare,
  Scale,
  ShieldCheck,
  Sparkles,
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
    "Code of Ethics | Matthew Web",

  description:
    "Read the Matthew Web Code of Ethics covering honesty, accountability, transparency, responsible technology, customer communication, and practical business conduct.",

  alternates: {
    canonical:
      "https://matthew-web.com/code-of-ethics",
  },

  openGraph: {
    title:
      "Code of Ethics | Matthew Web",

    description:
      "Matthew Web is built around honesty, accountability, transparency, useful technology, and responsible customer relationships.",

    url:
      "https://matthew-web.com/code-of-ethics",

    siteName:
      "Matthew Web",

    type:
      "website",
  },
};

/* ============================================================
   CORE PRINCIPLES
============================================================ */

const principles = [
  {
    icon:
      ShieldCheck,

    title:
      "Tell the Truth",

    text:
      "Matthew Web should describe services, products, projects, capabilities, pricing, and development status accurately without inventing results, customers, partnerships, certifications, or guarantees.",

    accent:
      "blue",
  },

  {
    icon:
      Target,

    title:
      "Recommend What Fits",

    text:
      "A customer should not be pushed into unnecessary software, features, pages, subscriptions, or technical complexity when a simpler solution can solve the real problem.",

    accent:
      "orange",
  },

  {
    icon:
      MessageSquare,

    title:
      "Communicate Clearly",

    text:
      "Customers should understand what is being proposed, what is included, what still needs to be decided, and what information is needed from them.",

    accent:
      "blue",
  },

  {
    icon:
      FileCheck2,

    title:
      "Define the Work",

    text:
      "Projects should have clear expectations around scope, pricing, responsibilities, revisions, delivery, and other important terms before substantial committed work begins.",

    accent:
      "orange",
  },

  {
    icon:
      Wrench,

    title:
      "Correct Problems",

    text:
      "When something needs to be reviewed, repaired, clarified, or improved, Matthew Web should address the issue directly instead of avoiding reasonable responsibility.",

    accent:
      "blue",
  },

  {
    icon:
      HeartHandshake,

    title:
      "Treat People Fairly",

    text:
      "Customers, contractors, partners, vendors, and other people working with Matthew Web should be treated with professionalism, respect, and consistency.",

    accent:
      "orange",
  },
];

/* ============================================================
   TECHNOLOGY ETHICS
============================================================ */

const technologyStandards = [
  {
    icon:
      Eye,

    title:
      "No Misleading Technology Claims",

    text:
      "Research, prototypes, active development, commercial products, and finished services should be clearly distinguished from one another.",
  },

  {
    icon:
      ShieldCheck,

    title:
      "Security Awareness",

    text:
      "Websites and software should be built with reasonable attention to authentication, access control, updates, data handling, backups, and technical risk.",
  },

  {
    icon:
      UserCheck,

    title:
      "Respect User Information",

    text:
      "Customer and visitor information should be collected for legitimate business purposes and handled according to applicable privacy practices and published policies.",
  },

  {
    icon:
      Scale,

    title:
      "Use Technology Responsibly",

    text:
      "Automation, AI, analytics, software, and future hardware should be used to improve usefulness and efficiency without intentionally misleading users or hiding important decisions.",
  },
];

/* ============================================================
   PROJECT STANDARD
============================================================ */

const projectStandards = [
  {
    number:
      "01",

    title:
      "Understand the Need",

    text:
      "Start with the business problem or project objective before recommending technology.",
  },

  {
    number:
      "02",

    title:
      "Explain the Solution",

    text:
      "Describe what is being proposed and why it is appropriate for the situation.",
  },

  {
    number:
      "03",

    title:
      "Establish Expectations",

    text:
      "Clarify scope, price, responsibilities, limitations, and important project conditions.",
  },

  {
    number:
      "04",

    title:
      "Build Carefully",

    text:
      "Develop the website, software, or other technology with attention to usefulness, reliability, maintainability, and user experience.",
  },

  {
    number:
      "05",

    title:
      "Review the Work",

    text:
      "Test and review the project before treating it as complete or ready for release.",
  },

  {
    number:
      "06",

    title:
      "Own the Outcome",

    text:
      "Communicate about legitimate problems, needed corrections, support, and future improvements instead of disappearing after delivery.",
  },
];

/* ============================================================
   PAGE SCHEMA
============================================================ */

const ethicsSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "WebPage",

  name:
    "Matthew Web Code of Ethics",

  url:
    "https://matthew-web.com/code-of-ethics",

  description:
    "Matthew Web ethical standards for honesty, accountability, technology development, customer relationships, and responsible business conduct.",
};

/* ============================================================
   PAGE
============================================================ */

export default function CodeOfEthicsPage() {
  return (
    <main className="mweth-page">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              ethicsSchema
            ),
        }}
      />

      <style>{`
        :root {
          --mwe-black:
            #020304;

          --mwe-muted:
            #aebbc5;

          --mwe-blue:
            #08b9f4;

          --mwe-blue-light:
            #38d7ff;

          --mwe-orange:
            #ff7900;

          --mwe-orange-light:
            #ffab31;

          --mwe-green:
            #35e07e;

          --mwe-border:
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
            var(--mwe-black);
        }

        .mweth-page {
          min-height:
            100vh;

          overflow:
            hidden;

          color:
            #ffffff;

          background:
            var(--mwe-black);
        }

        .mwe-container {
          width:
            100%;

          max-width:
            1380px;

          margin:
            0 auto;
        }

        .mwe-section {
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

        .mwe-blue {
          color:
            var(--mwe-blue-light);
        }

        .mwe-orange {
          color:
            var(--mwe-orange);
        }

        /* =====================================================
           COMMON
        ===================================================== */

        .mwe-kicker {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            8px;

          margin-bottom:
            14px;

          color:
            var(--mwe-blue-light);

          font-size:
            11px;

          font-weight:
            900;

          letter-spacing:
            0.16em;

          text-transform:
            uppercase;
        }

        .mwe-kicker.orange {
          color:
            var(--mwe-orange-light);
        }

        .mwe-kicker svg {
          width:
            18px;

          height:
            18px;
        }

        .mwe-heading {
          max-width:
            900px;

          margin-bottom:
            48px;
        }

        .mwe-heading.center {
          margin-left:
            auto;

          margin-right:
            auto;

          text-align:
            center;
        }

        .mwe-heading h2 {
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

        .mwe-heading p {
          max-width:
            800px;

          margin:
            0;

          color:
            var(--mwe-muted);

          font-size:
            clamp(
              15px,
              1.35vw,
              19px
            );

          line-height:
            1.75;
        }

        .mwe-heading.center p {
          margin-left:
            auto;

          margin-right:
            auto;
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .mwe-button-row {
          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            13px;

          margin-top:
            29px;
        }

        .mwe-btn {
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

        .mwe-btn svg {
          width:
            18px;

          height:
            18px;
        }

        .mwe-btn-blue {
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

        .mwe-btn-orange {
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

        .mwe-btn-dark {
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

        .mwe-btn:hover {
          transform:
            translateY(-2px);
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwe-hero {
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

        .mwe-hero::before {
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

        .mwe-hero-inner {
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

        .mwe-hero-badge {
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

        .mwe-hero-badge span {
          width:
            7px;

          height:
            7px;

          border-radius:
            50%;

          background:
            var(--mwe-green);

          box-shadow:
            0 0 9px
            rgba(
              53,
              224,
              126,
              0.8
            );
        }

        .mwe-hero h1 {
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

        .mwe-hero h1 span {
          display:
            block;
        }

        .mwe-hero-copy > p {
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
           ETHICS VISUAL
        ===================================================== */

        .mwe-ethics-stage {
          position:
            relative;

          min-height:
            430px;

          display:
            grid;

          place-items:
            center;
        }

        .mwe-ethics-panel {
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

        .mwe-panel-top {
          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          margin-bottom:
            28px;
        }

        .mwe-panel-top strong {
          color:
            #81929d;

          font-size:
            9px;

          letter-spacing:
            0.13em;
        }

        .mwe-panel-status {
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

        .mwe-panel-status::before {
          content:
            "";

          width:
            6px;

          height:
            6px;

          border-radius:
            50%;

          background:
            var(--mwe-green);

          box-shadow:
            0 0 7px
            rgba(
              53,
              224,
              126,
              0.7
            );
        }

        .mwe-shield {
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
              0.28
            );

          border-radius:
            30px;

          color:
            var(--mwe-blue-light);

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

        .mwe-shield svg {
          width:
            61px;

          height:
            61px;
        }

        .mwe-values-mini {
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

        .mwe-mini {
          min-height:
            65px;

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

        .mwe-mini svg {
          width:
            18px;

          height:
            18px;

          color:
            var(--mwe-blue-light);
        }

        .mwe-mini:nth-child(even) svg {
          color:
            var(--mwe-orange-light);
        }

        .mwe-mini strong {
          font-size:
            10px;
        }

        /* =====================================================
           PRINCIPLES
        ===================================================== */

        .mwe-principles {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwe-principle-grid {
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

        .mwe-principle-card {
          min-height:
            280px;

          padding:
            25px;

          border:
            1px solid
            var(--mwe-border);

          border-radius:
            15px;

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

        .mwe-principle-card:hover {
          transform:
            translateY(-4px);
        }

        .mwe-principle-card.blue:hover {
          border-color:
            rgba(
              8,
              185,
              244,
              0.32
            );
        }

        .mwe-principle-card.orange:hover {
          border-color:
            rgba(
              255,
              121,
              0,
              0.32
            );
        }

        .mwe-principle-icon {
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

        .mwe-principle-card.blue
          .mwe-principle-icon {
          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.28
            );

          color:
            var(--mwe-blue-light);

          background:
            rgba(
              8,
              185,
              244,
              0.055
            );
        }

        .mwe-principle-card.orange
          .mwe-principle-icon {
          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.28
            );

          color:
            var(--mwe-orange-light);

          background:
            rgba(
              255,
              121,
              0,
              0.05
            );
        }

        .mwe-principle-icon svg {
          width:
            27px;

          height:
            27px;
        }

        .mwe-principle-card h3 {
          margin:
            0 0 10px;

          font-size:
            19px;
        }

        .mwe-principle-card p {
          margin:
            0;

          color:
            var(--mwe-muted);

          font-size:
            13px;

          line-height:
            1.7;
        }

        /* =====================================================
           WASHINGTON-STYLE PRINCIPLE
        ===================================================== */

        .mwe-integrity {
          background:
            radial-gradient(
              ellipse at
              80% 50%,
              rgba(
                255,
                121,
                0,
                0.055
              ),
              transparent
              30%
            ),
            #020304;
        }

        .mwe-integrity-card {
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
            30px;

          padding:
            clamp(
              35px,
              5vw,
              58px
            );

          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.23
            );

          border-radius:
            20px;

          background:
            linear-gradient(
              145deg,
              #09131a,
              #04080b
            );
        }

        .mwe-integrity-icon {
          width:
            82px;

          height:
            82px;

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
            19px;

          color:
            var(--mwe-orange-light);

          background:
            rgba(
              255,
              121,
              0,
              0.05
            );
        }

        .mwe-integrity-icon svg {
          width:
            41px;

          height:
            41px;
        }

        .mwe-integrity-copy h2 {
          margin:
            0 0 13px;

          font-size:
            clamp(
              30px,
              3.5vw,
              48px
            );

          letter-spacing:
            -0.04em;
        }

        .mwe-integrity-copy p {
          margin:
            0;

          color:
            var(--mwe-muted);

          font-size:
            14px;

          line-height:
            1.75;
        }

        .mwe-integrity-quote {
          margin-top:
            18px;

          padding-left:
            18px;

          border-left:
            3px solid
            var(--mwe-orange);

          color:
            #ffffff;

          font-size:
            18px;

          font-weight:
            800;

          line-height:
            1.55;
        }

        /* =====================================================
           TECHNOLOGY
        ===================================================== */

        .mwe-technology {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwe-tech-grid {
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

        .mwe-tech-card {
          min-height:
            250px;

          padding:
            27px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.15
            );

          border-radius:
            15px;

          background:
            rgba(
              8,
              185,
              244,
              0.02
            );
        }

        .mwe-tech-card:nth-child(even) {
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

        .mwe-tech-card svg {
          width:
            31px;

          height:
            31px;

          margin-bottom:
            17px;

          color:
            var(--mwe-blue-light);
        }

        .mwe-tech-card:nth-child(even) svg {
          color:
            var(--mwe-orange-light);
        }

        .mwe-tech-card h3 {
          margin:
            0 0 10px;

          font-size:
            19px;
        }

        .mwe-tech-card p {
          margin:
            0;

          color:
            var(--mwe-muted);

          font-size:
            13px;

          line-height:
            1.7;
        }

        /* =====================================================
           PROJECT STANDARD
        ===================================================== */

        .mwe-process {
          background:
            #020304;
        }

        .mwe-process-grid {
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

        .mwe-process-card {
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

        .mwe-process-card:nth-child(even) {
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

        .mwe-process-number {
          margin-bottom:
            17px;

          color:
            var(--mwe-blue-light);

          font-size:
            11px;

          font-weight:
            950;

          letter-spacing:
            0.14em;
        }

        .mwe-process-card:nth-child(even)
          .mwe-process-number {
          color:
            var(--mwe-orange-light);
        }

        .mwe-process-card h3 {
          margin:
            0 0 10px;

          font-size:
            19px;
        }

        .mwe-process-card p {
          margin:
            0;

          color:
            var(--mwe-muted);

          font-size:
            13px;

          line-height:
            1.68;
        }

        /* =====================================================
           NOT A CONTRACT
        ===================================================== */

        .mwe-legal-note {
          padding:
            80px
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

        .mwe-legal-card {
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
              8,
              185,
              244,
              0.2
            );

          border-radius:
            20px;

          background:
            radial-gradient(
              circle at
              90% 50%,
              rgba(
                8,
                185,
                244,
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

        .mwe-legal-icon {
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
              8,
              185,
              244,
              0.3
            );

          border-radius:
            17px;

          color:
            var(--mwe-blue-light);

          background:
            rgba(
              8,
              185,
              244,
              0.055
            );
        }

        .mwe-legal-icon svg {
          width:
            35px;

          height:
            35px;
        }

        .mwe-legal-copy h2 {
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

        .mwe-legal-copy p {
          margin:
            0;

          color:
            var(--mwe-muted);

          font-size:
            13px;

          line-height:
            1.72;
        }

        /* =====================================================
           FINAL CTA
        ===================================================== */

        .mwe-final {
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

        .mwe-final-card {
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

        .mwe-final-card > svg {
          width:
            43px;

          height:
            43px;

          margin-bottom:
            19px;

          color:
            var(--mwe-orange);
        }

        .mwe-final-card h2 {
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

        .mwe-final-card p {
          max-width:
            740px;

          margin:
            18px auto 0;

          color:
            var(--mwe-muted);

          font-size:
            15px;

          line-height:
            1.75;
        }

        .mwe-final-card .mwe-button-row {
          justify-content:
            center;
        }

        .mwe-related {
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

        .mwe-related a {
          color:
            #8fa0ab;

          text-decoration:
            none;

          font-size:
            11px;

          font-weight:
            700;
        }

        .mwe-related a:hover {
          color:
            var(--mwe-blue-light);
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (
          max-width:
          1100px
        ) {
          .mwe-principle-grid,
          .mwe-process-grid {
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
          .mwe-hero-inner {
            grid-template-columns:
              1fr;
          }

          .mwe-hero-inner {
            text-align:
              center;
          }

          .mwe-hero-badge {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwe-hero-copy > p {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwe-button-row {
            justify-content:
              center;
          }
        }

        @media (
          max-width:
          700px
        ) {
          .mwe-section {
            padding:
              70px 16px;
          }

          .mwe-hero {
            min-height:
              auto;
          }

          .mwe-hero-inner {
            padding:
              70px 16px;
          }

          .mwe-hero h1 {
            font-size:
              clamp(
                46px,
                14vw,
                67px
              );
          }

          .mwe-principle-grid,
          .mwe-tech-grid,
          .mwe-process-grid {
            grid-template-columns:
              1fr;
          }

          .mwe-integrity-card,
          .mwe-legal-card {
            grid-template-columns:
              1fr;

            text-align:
              center;
          }

          .mwe-integrity-icon,
          .mwe-legal-icon {
            margin:
              0 auto;
          }

          .mwe-integrity-quote {
            padding:
              16px 0 0;

            border-left:
              0;

            border-top:
              3px solid
              var(--mwe-orange);
          }
        }

        @media (
          max-width:
          500px
        ) {
          .mwe-values-mini {
            grid-template-columns:
              1fr;
          }

          .mwe-ethics-stage {
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
        className="mwe-hero"
        id="code-of-ethics"
      >
        <div className="mwe-hero-inner">
          <div className="mwe-hero-copy">
            <div className="mwe-hero-badge">
              <span />
              Honesty • Accountability • Responsibility
            </div>

            <h1>
              <span>
                Technology
              </span>

              <span className="mwe-blue">
                Should Be Useful.
              </span>

              <span>
                Business Should Be
              </span>

              <span className="mwe-orange">
                Honest.
              </span>
            </h1>

            <p>
              Matthew Web&apos;s Code of Ethics
              defines the standards we want to
              follow in customer relationships,
              technology development, project
              communication, research, and
              business decisions.
            </p>

            <div className="mwe-button-row">
              <a
                href="#principles"
                className="mwe-btn mwe-btn-blue"
              >
                Read Our Principles
                <ArrowRight />
              </a>

              <Link
                href="/about-us"
                className="mwe-btn mwe-btn-dark"
              >
                About Matthew Web
              </Link>
            </div>
          </div>

          <div
            className="mwe-ethics-stage"
            aria-hidden="true"
          >
            <div className="mwe-ethics-panel">
              <div className="mwe-panel-top">
                <strong>
                  MATTHEW WEB // ETHICS
                </strong>

                <div className="mwe-panel-status">
                  ACTIVE STANDARD
                </div>
              </div>

              <div className="mwe-shield">
                <ShieldCheck />
              </div>

              <div className="mwe-values-mini">
                <div className="mwe-mini">
                  <CheckCircle2 />
                  <strong>
                    HONESTY
                  </strong>
                </div>

                <div className="mwe-mini">
                  <Handshake />
                  <strong>
                    FAIRNESS
                  </strong>
                </div>

                <div className="mwe-mini">
                  <Eye />
                  <strong>
                    TRANSPARENCY
                  </strong>
                </div>

                <div className="mwe-mini">
                  <Target />
                  <strong>
                    ACCOUNTABILITY
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          CORE PRINCIPLES
      ====================================================== */}

      <section
        className="mwe-section mwe-principles"
        id="principles"
      >
        <div className="mwe-container">
          <div className="mwe-heading center">
            <div className="mwe-kicker">
              <ShieldCheck />
              Core Principles
            </div>

            <h2>
              Standards That Apply{" "}
              <span className="mwe-blue">
                Before the Sale
              </span>
            </h2>

            <p>
              Ethics should affect how a project
              is sold, scoped, built, tested,
              explained, supported, and improved.
            </p>
          </div>

          <div className="mwe-principle-grid">
            {principles.map(
              (item) => {
                const Icon =
                  item.icon;

                return (
                  <div
                    className={`mwe-principle-card ${item.accent}`}
                    key={item.title}
                  >
                    <div className="mwe-principle-icon">
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
          WASHINGTON-STYLE INTEGRITY
      ====================================================== */}

      <section
        className="mwe-section mwe-integrity"
        id="integrity"
      >
        <div className="mwe-container">
          <div className="mwe-integrity-card">
            <div className="mwe-integrity-icon">
              <Scale />
            </div>

            <div className="mwe-integrity-copy">
              <div className="mwe-kicker orange">
                <Sparkles />
                Washington-Style Integrity
              </div>

              <h2>
                Do the Right Thing{" "}
                <span className="mwe-orange">
                  Even When It Is Harder.
                </span>
              </h2>

              <p>
                Matthew Web uses the phrase
                “Washington-Style Integrity” as
                a simple internal reminder that
                character matters when business
                decisions become inconvenient.
                The principle is to be truthful,
                take reasonable responsibility,
                and avoid choosing the easiest
                path simply because nobody would
                notice.
              </p>

              <div className="mwe-integrity-quote">
                If the right choice is harder,
                that does not make it the wrong
                choice.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          RESPONSIBLE TECHNOLOGY
      ====================================================== */}

      <section
        className="mwe-section mwe-technology"
        id="responsible-technology"
      >
        <div className="mwe-container">
          <div className="mwe-heading">
            <div className="mwe-kicker">
              <Eye />
              Responsible Technology
            </div>

            <h2>
              Ethics Applies to{" "}
              <span className="mwe-blue">
                What We Build
              </span>
            </h2>

            <p>
              As Matthew Web expands beyond
              websites into software, games,
              education, AI-assisted development,
              CPU architecture, FPGA research,
              and future hardware, the same
              standards should continue to apply.
            </p>
          </div>

          <div className="mwe-tech-grid">
            {technologyStandards.map(
              (item) => {
                const Icon =
                  item.icon;

                return (
                  <div
                    className="mwe-tech-card"
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
          PROJECT STANDARD
      ====================================================== */}

      <section
        className="mwe-section mwe-process"
        id="project-standard"
      >
        <div className="mwe-container">
          <div className="mwe-heading center">
            <div className="mwe-kicker orange">
              <Handshake />
              Project Standard
            </div>

            <h2>
              Integrity Should Show Up in{" "}
              <span className="mwe-orange">
                the Process
              </span>
            </h2>

            <p>
              Values are more meaningful when
              they influence the actual steps
              used to work with customers.
            </p>
          </div>

          <div className="mwe-process-grid">
            {projectStandards.map(
              (step) => (
                <div
                  className="mwe-process-card"
                  key={step.number}
                >
                  <div className="mwe-process-number">
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
          ETHICS VS CONTRACT
      ====================================================== */}

      <section className="mwe-legal-note">
        <div className="mwe-legal-card">
          <div className="mwe-legal-icon">
            <FileCheck2 />
          </div>

          <div className="mwe-legal-copy">
            <h2>
              Ethics Guide the Business.{" "}
              <span className="mwe-blue">
                Project Agreements Define the Deal.
              </span>
            </h2>

            <p>
              This Code of Ethics describes
              Matthew Web&apos;s general business
              principles and intended standards
              of conduct. Specific customer
              projects may later be governed by
              separate written agreements,
              statements of work, payment terms,
              policies, and other applicable
              documents. Those project documents
              should define the actual
              contractual terms for that work.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          FINAL CTA
      ====================================================== */}

      <section
        className="mwe-final"
        id="work-with-us"
      >
        <div className="mwe-final-card">
          <Zap />

          <h2>
            Build Something Useful.{" "}
            <span className="mwe-orange">
              Build It Responsibly.
            </span>
          </h2>

          <p>
            If you need a website, custom
            software, search support, business
            functionality, maintenance, or
            another practical technology
            solution, Matthew Web aims to start
            with clear communication and an
            honest understanding of the problem.
          </p>

          <div className="mwe-button-row">
            <Link
              href="/contact-us"
              className="mwe-btn mwe-btn-orange"
            >
              Start a Project
              <ArrowRight />
            </Link>

            <Link
              href="/services"
              className="mwe-btn mwe-btn-dark"
            >
              View Services
            </Link>
          </div>

          <nav className="mwe-related">
            <Link href="/about-us">
              About Us
            </Link>

            <Link href="/services">
              Services
            </Link>

            <Link href="/examples">
              Projects
            </Link>

            <Link href="/privacy-policy">
              Privacy
            </Link>

            <Link href="/terms">
              Terms
            </Link>
          </nav>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
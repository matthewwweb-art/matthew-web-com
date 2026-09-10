import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  HeartHandshake,
  MessageSquareQuote,
  MonitorCheck,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  UserCheck,
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
    "Customer Feedback & Reviews | Matthew Web",

  description:
    "Learn how Matthew Web approaches customer work, communication, project delivery, support, and verified customer feedback.",

  alternates: {
    canonical:
      "https://matthew-web.com/testimonials",
  },

  openGraph: {
    title:
      "Customer Feedback & Reviews | Matthew Web",

    description:
      "Matthew Web customer experience, project process, support standards, and verified customer feedback.",

    url:
      "https://matthew-web.com/testimonials",

    siteName:
      "Matthew Web",

    type:
      "website",
  },
};

/* ============================================================
   CUSTOMER EXPERIENCE
============================================================ */

const experiencePoints = [
  {
    icon:
      Target,

    title:
      "Clear Project Scope",

    text:
      "The project should begin with a clear understanding of what is being built, what problem it needs to solve, and what the customer expects.",

    accent:
      "blue",
  },

  {
    icon:
      MessageSquareQuote,

    title:
      "Direct Communication",

    text:
      "Customers should know who they are working with, what is happening with the project, and what information or decisions are still needed.",

    accent:
      "orange",
  },

  {
    icon:
      MonitorCheck,

    title:
      "Practical Development",

    text:
      "The work should focus on useful functionality, mobile usability, customer needs, and the actual purpose of the website or software.",

    accent:
      "blue",
  },

  {
    icon:
      FileCheck2,

    title:
      "Review Before Launch",

    text:
      "Customers should have an opportunity to review the work and identify agreed revisions before final launch or delivery.",

    accent:
      "orange",
  },

  {
    icon:
      Wrench,

    title:
      "Ongoing Support",

    text:
      "A project can continue after launch through maintenance, updates, technical support, additional pages, integrations, or new functionality.",

    accent:
      "blue",
  },

  {
    icon:
      HeartHandshake,

    title:
      "Long-Term Relationship",

    text:
      "A completed website should be the beginning of a useful business relationship when the customer continues to need support or improvements.",

    accent:
      "orange",
  },
];

/* ============================================================
   REVIEW VALUES
============================================================ */

const reviewValues = [
  {
    icon:
      MessageSquareQuote,

    title:
      "Communication",

    text:
      "Was the project explained clearly and were questions answered?",
  },

  {
    icon:
      CheckCircle2,

    title:
      "Quality",

    text:
      "Did the delivered work function properly and meet the agreed project need?",
  },

  {
    icon:
      Target,

    title:
      "Usefulness",

    text:
      "Did the website or software actually help solve the business problem?",
  },

  {
    icon:
      UserCheck,

    title:
      "Customer Experience",

    text:
      "Was the working relationship professional, understandable, and manageable?",
  },

  {
    icon:
      MonitorCheck,

    title:
      "Usability",

    text:
      "Can customers and business owners use the finished system effectively?",
  },

  {
    icon:
      Wrench,

    title:
      "Support",

    text:
      "Was follow-up help available when updates, questions, or problems came up?",
  },
];

/* ============================================================
   CUSTOMER PROCESS
============================================================ */

const customerProcess = [
  {
    number:
      "01",

    title:
      "Project Inquiry",

    text:
      "The business explains what it needs, what it has now, and what problem it is trying to solve.",
  },

  {
    number:
      "02",

    title:
      "Scope & Agreement",

    text:
      "The project requirements, price structure, responsibilities, and major expectations are defined before committed work begins.",
  },

  {
    number:
      "03",

    title:
      "Development",

    text:
      "Matthew Web builds the agreed website, software, integration, or business functionality.",
  },

  {
    number:
      "04",

    title:
      "Customer Review",

    text:
      "The customer reviews the work and agreed changes are addressed before final delivery or launch.",
  },

  {
    number:
      "05",

    title:
      "Launch & Delivery",

    text:
      "The completed work is launched or transferred according to the project arrangement.",
  },

  {
    number:
      "06",

    title:
      "Support & Feedback",

    text:
      "Ongoing support can continue, and real customer feedback can be requested after the work has created a legitimate review opportunity.",
  },
];

/* ============================================================
   PAGE SCHEMA
============================================================ */

const pageSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "WebPage",

  name:
    "Matthew Web Customer Feedback & Reviews",

  url:
    "https://matthew-web.com/testimonials",

  description:
    "Customer experience, project process, and verified customer feedback for Matthew Web.",
};

/* ============================================================
   PAGE
============================================================ */

export default function TestimonialsPage() {
  return (
    <main className="mwrev-page">
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
          --mwrev-black:
            #020304;

          --mwrev-panel:
            #091117;

          --mwrev-muted:
            #aebbc5;

          --mwrev-blue:
            #08b9f4;

          --mwrev-blue-light:
            #38d7ff;

          --mwrev-orange:
            #ff7900;

          --mwrev-orange-light:
            #ffab31;

          --mwrev-green:
            #35e07e;

          --mwrev-border:
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
            var(
              --mwrev-black
            );
        }

        .mwrev-page {
          min-height:
            100vh;

          overflow:
            hidden;

          color:
            white;

          background:
            var(
              --mwrev-black
            );
        }

        .mwrev-container {
          width:
            100%;

          max-width:
            1380px;

          margin:
            0 auto;
        }

        .mwrev-section {
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

        .mwrev-blue {
          color:
            var(
              --mwrev-blue-light
            );
        }

        .mwrev-orange {
          color:
            var(
              --mwrev-orange
            );
        }

        /* =====================================================
           COMMON
        ===================================================== */

        .mwrev-kicker {
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
              --mwrev-blue-light
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

        .mwrev-kicker.orange {
          color:
            var(
              --mwrev-orange-light
            );
        }

        .mwrev-kicker svg {
          width:
            18px;

          height:
            18px;
        }

        .mwrev-heading {
          max-width:
            900px;

          margin-bottom:
            48px;
        }

        .mwrev-heading.center {
          margin-left:
            auto;

          margin-right:
            auto;

          text-align:
            center;
        }

        .mwrev-heading h2 {
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

        .mwrev-heading p {
          max-width:
            800px;

          margin:
            0;

          color:
            var(
              --mwrev-muted
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

        .mwrev-heading.center p {
          margin-left:
            auto;

          margin-right:
            auto;
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .mwrev-button-row {
          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            13px;

          margin-top:
            29px;
        }

        .mwrev-btn {
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

        .mwrev-btn svg {
          width:
            18px;

          height:
            18px;
        }

        .mwrev-btn-blue {
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

        .mwrev-btn-orange {
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

        .mwrev-btn-dark {
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

        .mwrev-btn:hover {
          transform:
            translateY(
              -2px
            );
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwrev-hero {
          position:
            relative;

          min-height:
            670px;

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

        .mwrev-hero::before {
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

        .mwrev-hero-inner {
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

        .mwrev-hero-badge {
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

        .mwrev-hero-badge
          span {
          width:
            7px;

          height:
            7px;

          border-radius:
            50%;

          background:
            var(
              --mwrev-green
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

        .mwrev-hero h1 {
          max-width:
            910px;

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

        .mwrev-hero h1 span {
          display:
            block;
        }

        .mwrev-hero-copy
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
           HERO REVIEW VISUAL
        ===================================================== */

        .mwrev-review-stage {
          position:
            relative;

          min-height:
            470px;

          display:
            grid;

          place-items:
            center;
        }

        .mwrev-review-panel {
          position:
            relative;

          width:
            min(
              100%,
              500px
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

        .mwrev-review-top {
          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          margin-bottom:
            27px;
        }

        .mwrev-review-top
          strong {
          color:
            #82939d;

          font-size:
            9px;

          letter-spacing:
            0.13em;
        }

        .mwrev-review-status {
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
            0.1em;
        }

        .mwrev-review-status::before {
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
              --mwrev-green
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

        .mwrev-stars {
          display:
            flex;

          justify-content:
            center;

          gap:
            9px;

          margin:
            10px 0 25px;
        }

        .mwrev-stars
          svg {
          width:
            36px;

          height:
            36px;

          color:
            var(
              --mwrev-orange
            );

          stroke-width:
            1.6;

          filter:
            drop-shadow(
              0 0 8px
              rgba(
                255,
                121,
                0,
                0.18
              )
            );
        }

        .mwrev-review-lines {
          display:
            grid;

          gap:
            10px;

          max-width:
            390px;

          margin:
            0 auto;
        }

        .mwrev-review-line {
          height:
            8px;

          border-radius:
            999px;

          background:
            rgba(
              255,
              255,
              255,
              0.13
            );
        }

        .mwrev-review-line:nth-child(2) {
          width:
            86%;
        }

        .mwrev-review-line:nth-child(3) {
          width:
            68%;
        }

        .mwrev-review-seal {
          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            8px;

          width:
            fit-content;

          margin:
            28px auto 0;

          padding:
            9px 12px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.2
            );

          border-radius:
            999px;

          color:
            #caeefa;

          background:
            rgba(
              8,
              185,
              244,
              0.045
            );

          font-size:
            9px;

          font-weight:
            900;

          letter-spacing:
            0.08em;
        }

        .mwrev-review-seal
          svg {
          width:
            15px;

          height:
            15px;

          color:
            var(
              --mwrev-blue-light
            );
        }

        /* =====================================================
           CUSTOMER EXPERIENCE
        ===================================================== */

        .mwrev-experience {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwrev-experience-grid {
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

        .mwrev-experience-card {
          min-height:
            265px;

          padding:
            25px;

          border:
            1px solid
            var(
              --mwrev-border
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

        .mwrev-experience-card:hover {
          transform:
            translateY(
              -4px
            );
        }

        .mwrev-experience-card.blue:hover {
          border-color:
            rgba(
              8,
              185,
              244,
              0.32
            );
        }

        .mwrev-experience-card.orange:hover {
          border-color:
            rgba(
              255,
              121,
              0,
              0.32
            );
        }

        .mwrev-experience-icon {
          width:
            53px;

          height:
            53px;

          display:
            grid;

          place-items:
            center;

          margin-bottom:
            18px;

          border-radius:
            13px;
        }

        .mwrev-experience-card.blue
          .mwrev-experience-icon {
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
              --mwrev-blue-light
            );

          background:
            rgba(
              8,
              185,
              244,
              0.055
            );
        }

        .mwrev-experience-card.orange
          .mwrev-experience-icon {
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
              --mwrev-orange-light
            );

          background:
            rgba(
              255,
              121,
              0,
              0.05
            );
        }

        .mwrev-experience-icon
          svg {
          width:
            27px;

          height:
            27px;
        }

        .mwrev-experience-card
          h3 {
          margin:
            0 0 10px;

          font-size:
            19px;
        }

        .mwrev-experience-card
          p {
          margin:
            0;

          color:
            var(
              --mwrev-muted
            );

          font-size:
            13px;

          line-height:
            1.68;
        }

        /* =====================================================
           VERIFIED REVIEW AREA
        ===================================================== */

        .mwrev-feedback {
          background:
            radial-gradient(
              ellipse at
              80% 45%,
              rgba(
                255,
                121,
                0,
                0.055
              ),
              transparent
              32%
            ),
            #020304;
        }

        .mwrev-feedback-panel {
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

        .mwrev-feedback-copy
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

        .mwrev-feedback-copy
          p {
          margin:
            0 0 17px;

          color:
            var(
              --mwrev-muted
            );

          font-size:
            16px;

          line-height:
            1.8;
        }

        .mwrev-empty-review {
          position:
            relative;

          padding:
            38px;

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
              70% 20%,
              rgba(
                8,
                185,
                244,
                0.09
              ),
              transparent
              36%
            ),
            linear-gradient(
              145deg,
              #09131a,
              #04080b
            );
        }

        .mwrev-empty-icon {
          width:
            70px;

          height:
            70px;

          display:
            grid;

          place-items:
            center;

          margin-bottom:
            23px;

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
            var(
              --mwrev-blue-light
            );

          background:
            rgba(
              8,
              185,
              244,
              0.055
            );
        }

        .mwrev-empty-icon
          svg {
          width:
            34px;

          height:
            34px;
        }

        .mwrev-empty-review
          h3 {
          margin:
            0 0 12px;

          font-size:
            25px;

          letter-spacing:
            -0.03em;
        }

        .mwrev-empty-review
          p {
          margin:
            0;

          color:
            var(
              --mwrev-muted
            );

          font-size:
            13px;

          line-height:
            1.72;
        }

        .mwrev-empty-status {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            7px;

          margin-top:
            22px;

          padding:
            8px 11px;

          border:
            1px solid
            rgba(
              53,
              224,
              126,
              0.18
            );

          border-radius:
            999px;

          color:
            #b9eecf;

          background:
            rgba(
              53,
              224,
              126,
              0.035
            );

          font-size:
            9px;

          font-weight:
            900;

          letter-spacing:
            0.08em;
        }

        .mwrev-empty-status::before {
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
              --mwrev-green
            );
        }

        /* =====================================================
           REVIEW VALUES
        ===================================================== */

        .mwrev-values {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwrev-values-grid {
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

        .mwrev-value-card {
          min-height:
            210px;

          padding:
            23px;

          border:
            1px solid
            var(
              --mwrev-border
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

        .mwrev-value-card
          svg {
          width:
            28px;

          height:
            28px;

          margin-bottom:
            16px;

          color:
            var(
              --mwrev-blue-light
            );
        }

        .mwrev-value-card:nth-child(even)
          svg {
          color:
            var(
              --mwrev-orange-light
            );
        }

        .mwrev-value-card
          h3 {
          margin:
            0 0 9px;

          font-size:
            17px;
        }

        .mwrev-value-card
          p {
          margin:
            0;

          color:
            var(
              --mwrev-muted
            );

          font-size:
            13px;

          line-height:
            1.67;
        }

        /* =====================================================
           PROCESS
        ===================================================== */

        .mwrev-process {
          background:
            #020304;
        }

        .mwrev-process-grid {
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

        .mwrev-process-card {
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

        .mwrev-process-card:nth-child(even) {
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

        .mwrev-process-number {
          margin-bottom:
            17px;

          color:
            var(
              --mwrev-blue-light
            );

          font-size:
            11px;

          font-weight:
            950;

          letter-spacing:
            0.14em;
        }

        .mwrev-process-card:nth-child(even)
          .mwrev-process-number {
          color:
            var(
              --mwrev-orange-light
            );
        }

        .mwrev-process-card
          h3 {
          margin:
            0 0 10px;

          font-size:
            19px;
        }

        .mwrev-process-card
          p {
          margin:
            0;

          color:
            var(
              --mwrev-muted
            );

          font-size:
            13px;

          line-height:
            1.68;
        }

        /* =====================================================
           TRUST
        ===================================================== */

        .mwrev-trust {
          padding:
            90px
            clamp(
              20px,
              5vw,
              80px
            );

          background:
            radial-gradient(
              ellipse at center,
              rgba(
                8,
                185,
                244,
                0.06
              ),
              transparent
              45%
            ),
            #020304;
        }

        .mwrev-trust-card {
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

        .mwrev-trust-icon {
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
              --mwrev-orange
            );

          background:
            rgba(
              255,
              121,
              0,
              0.055
            );
        }

        .mwrev-trust-icon
          svg {
          width:
            35px;

          height:
            35px;
        }

        .mwrev-trust-copy
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

        .mwrev-trust-copy
          p {
          margin:
            0;

          color:
            var(
              --mwrev-muted
            );

          font-size:
            14px;

          line-height:
            1.72;
        }

        /* =====================================================
           FINAL
        ===================================================== */

        .mwrev-final {
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

        .mwrev-final-card {
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

        .mwrev-final-card
          > svg {
          width:
            43px;

          height:
            43px;

          margin-bottom:
            19px;

          color:
            var(
              --mwrev-orange
            );
        }

        .mwrev-final-card
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

        .mwrev-final-card
          p {
          max-width:
            740px;

          margin:
            18px auto 0;

          color:
            var(
              --mwrev-muted
            );

          font-size:
            15px;

          line-height:
            1.75;
        }

        .mwrev-final-card
          .mwrev-button-row {
          justify-content:
            center;
        }

        .mwrev-related {
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

        .mwrev-related
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

        .mwrev-related
          a:hover {
          color:
            var(
              --mwrev-blue-light
            );
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (
          max-width:
          1100px
        ) {
          .mwrev-experience-grid,
          .mwrev-values-grid,
          .mwrev-process-grid {
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
          .mwrev-hero-inner,
          .mwrev-feedback-panel {
            grid-template-columns:
              1fr;
          }

          .mwrev-hero-inner {
            text-align:
              center;
          }

          .mwrev-hero-badge {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwrev-hero-copy
            > p {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwrev-button-row {
            justify-content:
              center;
          }

          .mwrev-review-stage {
            min-height:
              420px;
          }
        }

        @media (
          max-width:
          700px
        ) {
          .mwrev-section {
            padding:
              70px 16px;
          }

          .mwrev-hero {
            min-height:
              auto;
          }

          .mwrev-hero-inner {
            padding:
              70px 16px;
          }

          .mwrev-hero h1 {
            font-size:
              clamp(
                46px,
                14vw,
                67px
              );
          }

          .mwrev-experience-grid,
          .mwrev-values-grid,
          .mwrev-process-grid {
            grid-template-columns:
              1fr;
          }

          .mwrev-trust-card {
            grid-template-columns:
              1fr;

            text-align:
              center;
          }

          .mwrev-trust-icon {
            margin:
              0 auto;
          }
        }

        @media (
          max-width:
          500px
        ) {
          .mwrev-review-stage {
            min-height:
              365px;

            transform:
              scale(
                0.9
              );

            margin:
              -10px -20px;
          }

          .mwrev-stars
            svg {
            width:
              29px;

            height:
              29px;
          }
        }
      `}</style>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        className="mwrev-hero"
        id="testimonials"
      >
        <div className="mwrev-hero-inner">
          <div className="mwrev-hero-copy">
            <div className="mwrev-hero-badge">
              <span />
              Customer Experience • Feedback • Trust
            </div>

            <h1>
              <span>
                Trust Should Be
              </span>

              <span className="mwrev-blue">
                Earned Through
              </span>

              <span className="mwrev-orange">
                Real Work.
              </span>
            </h1>

            <p>
              Matthew Web is building its
              customer-feedback system around
              real projects, clear communication,
              useful delivery, and feedback that
              reflects actual customer
              experiences.
            </p>

            <div className="mwrev-button-row">
              <Link
                href="/examples"
                className="mwrev-btn mwrev-btn-blue"
              >
                See Our Work
                <ArrowRight />
              </Link>

              <Link
                href="/contact-us"
                className="mwrev-btn mwrev-btn-dark"
              >
                Start a Project
              </Link>
            </div>
          </div>

          <div
            className="mwrev-review-stage"
            aria-hidden="true"
          >
            <div className="mwrev-review-panel">
              <div className="mwrev-review-top">
                <strong>
                  CUSTOMER FEEDBACK
                </strong>

                <div className="mwrev-review-status">
                  VERIFIED FIRST
                </div>
              </div>

              <div className="mwrev-stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>

              <div className="mwrev-review-lines">
                <div className="mwrev-review-line" />
                <div className="mwrev-review-line" />
                <div className="mwrev-review-line" />
              </div>

              <div className="mwrev-review-seal">
                <ShieldCheck />
                REAL CUSTOMER EXPERIENCE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          CUSTOMER EXPERIENCE
      ====================================================== */}

      <section
        className="mwrev-section mwrev-experience"
        id="customer-experience"
      >
        <div className="mwrev-container">
          <div className="mwrev-heading center">
            <div className="mwrev-kicker">
              <HeartHandshake />
              Customer Experience
            </div>

            <h2>
              What Working With{" "}
              <span className="mwrev-blue">
                Matthew Web
              </span>{" "}
              Should Look Like
            </h2>

            <p>
              Good customer feedback starts with
              a good process. These are the areas
              Matthew Web is building into the
              customer relationship.
            </p>
          </div>

          <div className="mwrev-experience-grid">
            {experiencePoints.map(
              (item) => {
                const Icon =
                  item.icon;

                return (
                  <div
                    className={`mwrev-experience-card ${item.accent}`}
                    key={item.title}
                  >
                    <div className="mwrev-experience-icon">
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
          VERIFIED FEEDBACK
      ====================================================== */}

      <section
        className="mwrev-section mwrev-feedback"
        id="verified-reviews"
      >
        <div className="mwrev-container">
          <div className="mwrev-feedback-panel">
            <div className="mwrev-feedback-copy">
              <div className="mwrev-kicker orange">
                <MessageSquareQuote />
                Customer Reviews
              </div>

              <h2>
                Real Feedback.{" "}
                <span className="mwrev-orange">
                  Not Placeholder Praise.
                </span>
              </h2>

              <p>
                Customer reviews are most useful
                when they describe a real project
                and a real experience.
              </p>

              <p>
                As Matthew Web collects
                documented customer feedback,
                verified reviews can be added to
                this page with the project or
                service context that makes the
                feedback meaningful.
              </p>

              <p>
                That gives future customers a
                clearer picture of what actually
                happened instead of relying on
                anonymous-looking stock
                testimonials.
              </p>
            </div>

            <div className="mwrev-empty-review">
              <div className="mwrev-empty-icon">
                <ClipboardCheck />
              </div>

              <h3>
                Verified Review Area
              </h3>

              <p>
                This section is prepared for
                documented customer feedback.
                New reviews can be added as
                legitimate customer experiences
                create review opportunities.
              </p>

              <div className="mwrev-empty-status">
                READY FOR VERIFIED FEEDBACK
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          WHAT REVIEWS SHOULD MEASURE
      ====================================================== */}

      <section
        className="mwrev-section mwrev-values"
        id="review-values"
      >
        <div className="mwrev-container">
          <div className="mwrev-heading center">
            <div className="mwrev-kicker">
              <Star />
              What Matters
            </div>

            <h2>
              A Useful Review Says{" "}
              <span className="mwrev-blue">
                More Than “Great Job.”
              </span>
            </h2>

            <p>
              Specific feedback helps Matthew Web
              improve and gives future customers
              better information about the
              experience.
            </p>
          </div>

          <div className="mwrev-values-grid">
            {reviewValues.map(
              (item) => {
                const Icon =
                  item.icon;

                return (
                  <div
                    className="mwrev-value-card"
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
          CUSTOMER PROCESS
      ====================================================== */}

      <section
        className="mwrev-section mwrev-process"
        id="customer-process"
      >
        <div className="mwrev-container">
          <div className="mwrev-heading center">
            <div className="mwrev-kicker orange">
              <FileCheck2 />
              Customer Journey
            </div>

            <h2>
              From First Conversation to{" "}
              <span className="mwrev-orange">
                Real Feedback
              </span>
            </h2>

            <p>
              Reviews should come after a genuine
              customer experience—not before the
              work has had a chance to prove its
              value.
            </p>
          </div>

          <div className="mwrev-process-grid">
            {customerProcess.map(
              (step) => (
                <div
                  className="mwrev-process-card"
                  key={step.number}
                >
                  <div className="mwrev-process-number">
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
          TRUST
      ====================================================== */}

      <section
        className="mwrev-trust"
        id="trust"
      >
        <div className="mwrev-trust-card">
          <div className="mwrev-trust-icon">
            <ShieldCheck />
          </div>

          <div className="mwrev-trust-copy">
            <h2>
              Proof Gets Stronger{" "}
              <span className="mwrev-blue">
                Project by Project.
              </span>
            </h2>

            <p>
              Matthew Web can continue building
              customer proof through completed
              work, examples, documented
              feedback, referrals, repeat
              customers, ongoing maintenance,
              and measurable customer
              experiences instead of relying on
              generic marketing claims.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          FINAL CTA
      ====================================================== */}

      <section
        className="mwrev-final"
        id="start-project"
      >
        <div className="mwrev-final-card">
          <Zap />

          <h2>
            Become Part of the{" "}
            <span className="mwrev-orange">
              Next Success Story.
            </span>
          </h2>

          <p>
            Need a website, redesign, search
            help, business functionality, or
            custom software? Tell Matthew Web
            what problem you are trying to solve
            and we can determine the practical
            next step.
          </p>

          <div className="mwrev-button-row">
            <Link
              href="/contact-us"
              className="mwrev-btn mwrev-btn-orange"
            >
              Start a Project
              <ArrowRight />
            </Link>

            <Link
              href="/examples"
              className="mwrev-btn mwrev-btn-dark"
            >
              View Examples
            </Link>
          </div>

          <nav className="mwrev-related">
            <Link href="/services">
              Services
            </Link>

            <Link href="/website-design">
              Website Design
            </Link>

            <Link href="/custom-software">
              Custom Software
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
import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  BellRing,
  CheckCircle2,
  ClipboardList,
  Code2,
  Database,
  FileInput,
  FileText,
  Gauge,
  Layers3,
  LockKeyhole,
  Mail,
  MousePointerClick,
  Network,
  RefreshCcw,
  Rocket,
  Settings2,
  Sparkles,
  Users,
  Workflow,
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
    "Custom Software for Small Businesses | Matthew Web",

  description:
    "Matthew Web builds custom software for small businesses, including dashboards, CRM-style tools, lead tracking, custom forms, business workflows, integrations, automation, and website-specific functionality.",

  alternates: {
    canonical:
      "https://matthew-web.com/custom-software",
  },

  openGraph: {
    title:
      "Custom Software for Small Businesses | Matthew Web",

    description:
      "Custom dashboards, lead tracking, business workflows, forms, integrations, automation, and website-connected software for small businesses.",

    url:
      "https://matthew-web.com/custom-software",

    siteName:
      "Matthew Web",

    type:
      "website",
  },
};

/* ============================================================
   SOFTWARE TYPES
============================================================ */

const softwareTypes = [
  {
    icon: BarChart3,
    title: "Business Dashboards",
    text:
      "Private dashboards that organize important business information, activity, statuses, and actions in one place.",
    accent: "blue",
  },

  {
    icon: Users,
    title: "Lead & Customer Tracking",
    text:
      "Track leads, contact information, notes, statuses, follow-up activity, and sales opportunities.",
    accent: "orange",
  },

  {
    icon: FileInput,
    title: "Custom Forms",
    text:
      "Structured forms designed around the exact information your business needs to collect.",
    accent: "blue",
  },

  {
    icon: ClipboardList,
    title: "Quote & Request Systems",
    text:
      "Collect project details, service requests, estimates, intake information, and customer requirements.",
    accent: "orange",
  },

  {
    icon: Workflow,
    title: "Workflow Tools",
    text:
      "Turn repetitive manual processes into clearer digital steps that are easier to manage and repeat.",
    accent: "blue",
  },

  {
    icon: Network,
    title: "Integrations",
    text:
      "Connect website actions, forms, databases, notifications, payments, and other systems where appropriate.",
    accent: "orange",
  },
];

/* ============================================================
   PROBLEMS
============================================================ */

const businessProblems = [
  {
    icon: BellRing,
    title: "Missed Follow-Ups",
    text:
      "Leads come in, but there is no reliable way to remember who needs a response or when to contact them again.",
  },

  {
    icon: Database,
    title: "Scattered Information",
    text:
      "Important customer or project information is spread across email, texts, spreadsheets, notes, and multiple apps.",
  },

  {
    icon: RefreshCcw,
    title: "Repeated Manual Work",
    text:
      "The same information is being copied, entered, checked, or reorganized over and over.",
  },

  {
    icon: Layers3,
    title: "Too Many Separate Tools",
    text:
      "The business is switching between several systems that do not communicate well with each other.",
  },

  {
    icon: Settings2,
    title: "Generic Software Does Not Fit",
    text:
      "Existing software has unnecessary complexity or still cannot match the actual business workflow.",
  },

  {
    icon: Gauge,
    title: "Growth Is Creating Friction",
    text:
      "A process that worked when the business was smaller is becoming harder to manage as leads, customers, or work increase.",
  },
];

/* ============================================================
   EXAMPLE BUILDS
============================================================ */

const examples = [
  {
    title: "Lead Management System",
    text:
      "Collect leads from a website, organize them by status, save notes, track follow-up dates, and keep customer information together.",
  },

  {
    title: "Quote Request Dashboard",
    text:
      "Turn public quote forms into organized internal records with project information, customer details, status, and notes.",
  },

  {
    title: "Service Request System",
    text:
      "Collect structured customer requests and route the information into a private dashboard instead of relying only on email.",
  },

  {
    title: "Booking / Consultation Requests",
    text:
      "Let customers submit structured requests for appointments, estimates, consultations, service calls, or other scheduling needs.",
  },

  {
    title: "Business Admin Panel",
    text:
      "Create a private area for managing leads, customer information, content, activity, forms, and business-specific data.",
  },

  {
    title: "Workflow Automation",
    text:
      "Reduce repetitive work with notifications, reminders, status changes, data organization, and connected business actions.",
  },
];

/* ============================================================
   PROCESS
============================================================ */

const processSteps = [
  {
    number: "01",
    title: "Identify the Problem",
    text:
      "We first determine what is wasting time, causing confusion, losing information, or making the business harder to manage.",
  },

  {
    number: "02",
    title: "Map the Workflow",
    text:
      "We define what happens from the first customer action through the internal business steps that follow.",
  },

  {
    number: "03",
    title: "Choose the Minimum Useful Version",
    text:
      "The first version focuses on the features necessary to solve the main problem instead of building unnecessary complexity.",
  },

  {
    number: "04",
    title: "Build & Connect",
    text:
      "The interface, data handling, forms, dashboard, notifications, integrations, or other required functionality are developed.",
  },

  {
    number: "05",
    title: "Test With Real Use",
    text:
      "The system is tested using realistic business situations so weak points can be found before more features are added.",
  },

  {
    number: "06",
    title: "Improve Over Time",
    text:
      "Reporting, automation, additional workflows, integrations, permissions, and other features can be added as the business proves it needs them.",
  },
];

/* ============================================================
   FAQ
============================================================ */

const faqs = [
  {
    q: "Is custom software only for large companies?",
    a:
      "No. A small business can benefit from a focused custom tool if it solves a repeated problem. The software does not need to be a huge platform to create real value.",
  },

  {
    q: "Can custom software start small?",
    a:
      "Yes. In many cases that is the preferred approach. A small first version can solve the main problem, gather real feedback, and expand only when additional features are justified.",
  },

  {
    q: "Can custom software connect to my website?",
    a:
      "Yes. Website forms and customer actions can connect to private dashboards, databases, notifications, lead systems, booking tools, or other business functionality.",
  },

  {
    q: "Do I automatically need a CRM?",
    a:
      "No. If a business has a simple process and a normal contact form works well, a larger system may not be necessary. Custom software should solve a real problem rather than add complexity.",
  },

  {
    q: "Can you work with my existing website?",
    a:
      "Depending on the website and technical setup, Matthew Web may be able to add forms, integrations, dashboards, or other functionality without requiring a complete website rebuild.",
  },

  {
    q: "Can software be private instead of public?",
    a:
      "Yes. Some systems can be designed as internal admin tools or protected dashboards rather than public-facing website pages.",
  },

  {
    q: "Can the system grow later?",
    a:
      "Yes. A focused first version can later expand with reporting, automation, additional data, customer portals, payment functionality, permissions, or other capabilities.",
  },

  {
    q: "Do you work with businesses outside Maine?",
    a:
      "Yes. Matthew Web is based in Maine, but custom software projects can also be planned, developed, reviewed, and supported remotely for businesses elsewhere in the United States.",
  },
];

/* ============================================================
   STRUCTURED DATA
============================================================ */

const serviceSchema = {
  "@context": "https://schema.org",

  "@type": "Service",

  name: "Custom Software Development",

  provider: {
    "@type": "Organization",
    name: "Matthew Web",
    url: "https://matthew-web.com",
  },

  areaServed: {
    "@type": "Country",
    name: "United States",
  },

  serviceType:
    "Custom software development for small businesses",

  url:
    "https://matthew-web.com/custom-software",
};

const faqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: faqs.map((item) => ({
    "@type": "Question",

    name: item.q,

    acceptedAnswer: {
      "@type": "Answer",

      text: item.a,
    },
  })),
};

/* ============================================================
   PAGE
============================================================ */

export default function CustomSoftwarePage() {
  return (
    <main className="mwcs-page">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <style>{`
        :root {
          --mwcs-black: #020304;
          --mwcs-panel: #091117;
          --mwcs-panel-light: #0d171e;

          --mwcs-white: #ffffff;
          --mwcs-muted: #aebbc5;

          --mwcs-blue: #08b9f4;
          --mwcs-blue-light: #38d7ff;

          --mwcs-orange: #ff7900;
          --mwcs-orange-light: #ffab31;

          --mwcs-border:
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
            var(--mwcs-black);
        }

        .mwcs-page {
          min-height: 100vh;

          overflow: hidden;

          color: white;

          background:
            var(--mwcs-black);
        }

        .mwcs-container {
          width: 100%;

          max-width: 1380px;

          margin: 0 auto;
        }

        .mwcs-section {
          position: relative;

          width: 100%;

          padding:
            100px
            clamp(
              20px,
              5vw,
              80px
            );
        }

        .mwcs-blue {
          color:
            var(--mwcs-blue-light);
        }

        .mwcs-orange {
          color:
            var(--mwcs-orange);
        }

        /* =====================================================
           COMMON
        ===================================================== */

        .mwcs-kicker {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          margin-bottom: 14px;

          color:
            var(--mwcs-blue-light);

          font-size: 11px;

          font-weight: 900;

          letter-spacing: 0.16em;

          text-transform: uppercase;
        }

        .mwcs-kicker.orange {
          color:
            var(--mwcs-orange-light);
        }

        .mwcs-kicker svg {
          width: 18px;
          height: 18px;
        }

        .mwcs-heading {
          max-width: 900px;

          margin-bottom: 48px;
        }

        .mwcs-heading.center {
          margin-left: auto;
          margin-right: auto;

          text-align: center;
        }

        .mwcs-heading h2 {
          margin: 0 0 18px;

          font-size:
            clamp(
              38px,
              4.7vw,
              68px
            );

          line-height: 1.02;

          letter-spacing: -0.05em;
        }

        .mwcs-heading p {
          max-width: 800px;

          margin: 0;

          color:
            var(--mwcs-muted);

          font-size:
            clamp(
              15px,
              1.35vw,
              19px
            );

          line-height: 1.75;
        }

        .mwcs-heading.center p {
          margin-left: auto;
          margin-right: auto;
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .mwcs-button-row {
          display: flex;

          flex-wrap: wrap;

          gap: 13px;

          margin-top: 29px;
        }

        .mwcs-btn {
          min-height: 53px;

          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 9px;

          padding: 0 22px;

          border-radius: 9px;

          color: white;

          text-decoration: none;

          font-size: 14px;

          font-weight: 850;

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            border-color 0.2s ease;
        }

        .mwcs-btn svg {
          width: 18px;
          height: 18px;
        }

        .mwcs-btn-blue {
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

        .mwcs-btn-orange {
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

        .mwcs-btn-dark {
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

        .mwcs-btn:hover {
          transform:
            translateY(-2px);
        }

        .mwcs-btn-blue:hover {
          box-shadow:
            0 0 25px
            rgba(
              8,
              185,
              244,
              0.48
            );
        }

        .mwcs-btn-orange:hover {
          box-shadow:
            0 0 25px
            rgba(
              255,
              121,
              0,
              0.48
            );
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwcs-hero {
          position: relative;

          min-height: 680px;

          display: flex;

          align-items: center;

          overflow: hidden;

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
              ellipse at 18% 42%,
              rgba(
                8,
                185,
                244,
                0.16
              ),
              transparent 36%
            ),
            radial-gradient(
              ellipse at 82% 48%,
              rgba(
                255,
                121,
                0,
                0.08
              ),
              transparent 32%
            ),
            linear-gradient(
              180deg,
              #020304,
              #03080c,
              #020304
            );
        }

        .mwcs-hero::before {
          content: "";

          position: absolute;

          inset: 0;

          opacity: 0.27;

          pointer-events: none;

          background-image:
            linear-gradient(
              rgba(
                8,
                185,
                244,
                0.055
              )
              1px,
              transparent 1px
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
              transparent 1px
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

        .mwcs-hero-inner {
          position: relative;

          z-index: 3;

          display: grid;

          grid-template-columns:
            minmax(0, 1.05fr)
            minmax(420px, 0.95fr);

          align-items: center;

          gap:
            clamp(
              45px,
              6vw,
              95px
            );

          width: 100%;

          max-width: 1380px;

          margin: 0 auto;

          padding:
            95px
            clamp(
              20px,
              5vw,
              80px
            );
        }

        .mwcs-hero-badge {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          width: fit-content;

          margin-bottom: 21px;

          padding: 8px 12px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.28
            );

          border-radius: 999px;

          color: #d9f8ff;

          background:
            rgba(
              8,
              185,
              244,
              0.055
            );

          font-size: 10px;

          font-weight: 900;

          letter-spacing: 0.14em;

          text-transform: uppercase;
        }

        .mwcs-hero-badge span {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #35e07e;

          box-shadow:
            0 0 9px
            rgba(
              53,
              224,
              126,
              0.8
            );
        }

        .mwcs-hero h1 {
          max-width: 880px;

          margin: 0;

          font-size:
            clamp(
              50px,
              6vw,
              91px
            );

          line-height: 0.97;

          letter-spacing: -0.06em;
        }

        .mwcs-hero h1 span {
          display: block;
        }

        .mwcs-hero-copy > p {
          max-width: 770px;

          margin: 25px 0 0;

          color: #b8c6cf;

          font-size:
            clamp(
              16px,
              1.4vw,
              20px
            );

          line-height: 1.72;
        }

        /* =====================================================
           SOFTWARE FLOW VISUAL
        ===================================================== */

        .mwcs-system-stage {
          position: relative;

          min-height: 470px;

          display: grid;

          place-items: center;
        }

        .mwcs-system {
          position: relative;

          z-index: 3;

          width:
            min(
              100%,
              500px
            );

          padding: 24px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.32
            );

          border-radius: 20px;

          background:
            radial-gradient(
              circle at 20% 15%,
              rgba(
                8,
                185,
                244,
                0.13
              ),
              transparent 34%
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

        .mwcs-system-top {
          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-bottom: 18px;
        }

        .mwcs-system-dots {
          display: flex;

          gap: 6px;
        }

        .mwcs-system-dots span {
          width: 8px;
          height: 8px;

          border-radius: 50%;

          background:
            rgba(
              255,
              255,
              255,
              0.18
            );
        }

        .mwcs-system-dots
          span:nth-child(1) {
          background:
            var(--mwcs-orange);
        }

        .mwcs-system-dots
          span:nth-child(2) {
          background:
            var(--mwcs-blue);
        }

        .mwcs-system-top strong {
          color: #82939d;

          font-size: 9px;

          letter-spacing: 0.13em;
        }

        .mwcs-flow {
          display: grid;

          gap: 9px;
        }

        .mwcs-flow-card {
          display: grid;

          grid-template-columns:
            42px 1fr auto;

          align-items: center;

          gap: 12px;

          min-height: 67px;

          padding: 11px 13px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.08
            );

          border-radius: 10px;

          background: #081117;
        }

        .mwcs-flow-card:nth-child(even) {
          border-color:
            rgba(
              255,
              121,
              0,
              0.15
            );
        }

        .mwcs-flow-icon {
          width: 42px;
          height: 42px;

          display: grid;

          place-items: center;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.24
            );

          border-radius: 9px;

          color:
            var(--mwcs-blue-light);

          background:
            rgba(
              8,
              185,
              244,
              0.05
            );
        }

        .mwcs-flow-card:nth-child(even)
          .mwcs-flow-icon {
          border-color:
            rgba(
              255,
              121,
              0,
              0.24
            );

          color:
            var(--mwcs-orange-light);

          background:
            rgba(
              255,
              121,
              0,
              0.045
            );
        }

        .mwcs-flow-icon svg {
          width: 21px;
          height: 21px;
        }

        .mwcs-flow-card strong {
          display: block;

          font-size: 13px;
        }

        .mwcs-flow-card p {
          margin: 4px 0 0;

          color: #74858f;

          font-size: 10px;
        }

        .mwcs-flow-status {
          width: 8px;
          height: 8px;

          border-radius: 50%;

          background: #35e07e;

          box-shadow:
            0 0 8px
            rgba(
              53,
              224,
              126,
              0.7
            );
        }

        .mwcs-system-tag {
          position: absolute;

          z-index: 5;

          display: inline-flex;

          align-items: center;

          gap: 7px;

          min-height: 35px;

          padding: 0 10px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.1
            );

          border-radius: 7px;

          color: #dce7ec;

          background:
            rgba(
              3,
              8,
              11,
              0.92
            );

          font-size: 9px;

          font-weight: 900;

          letter-spacing: 0.08em;
        }

        .mwcs-system-tag svg {
          width: 15px;
          height: 15px;

          color:
            var(--mwcs-blue-light);
        }

        .mwcs-system-tag.one {
          left: -1%;
          top: 9%;
        }

        .mwcs-system-tag.two {
          right: -1%;
          top: 16%;
        }

        .mwcs-system-tag.three {
          left: 3%;
          bottom: 8%;
        }

        .mwcs-system-tag.two svg {
          color:
            var(--mwcs-orange-light);
        }

        /* =====================================================
           SOFTWARE TYPES
        ===================================================== */

        .mwcs-types {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwcs-type-grid {
          display: grid;

          grid-template-columns:
            repeat(
              3,
              minmax(
                0,
                1fr
              )
            );

          gap: 15px;
        }

        .mwcs-type-card {
          min-height: 265px;

          padding: 25px;

          border:
            1px solid
            var(--mwcs-border);

          border-radius: 16px;

          background:
            linear-gradient(
              145deg,
              #0a1218,
              #04080b
            );

          transition:
            transform 0.2s ease,
            border-color 0.2s ease;
        }

        .mwcs-type-card:hover {
          transform:
            translateY(-5px);
        }

        .mwcs-type-card.blue:hover {
          border-color:
            rgba(
              8,
              185,
              244,
              0.35
            );
        }

        .mwcs-type-card.orange:hover {
          border-color:
            rgba(
              255,
              121,
              0,
              0.35
            );
        }

        .mwcs-type-icon {
          width: 53px;
          height: 53px;

          display: grid;

          place-items: center;

          margin-bottom: 19px;

          border-radius: 13px;
        }

        .mwcs-type-card.blue
          .mwcs-type-icon {
          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.3
            );

          color:
            var(--mwcs-blue-light);

          background:
            rgba(
              8,
              185,
              244,
              0.065
            );
        }

        .mwcs-type-card.orange
          .mwcs-type-icon {
          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.3
            );

          color:
            var(--mwcs-orange-light);

          background:
            rgba(
              255,
              121,
              0,
              0.06
            );
        }

        .mwcs-type-icon svg {
          width: 27px;
          height: 27px;
        }

        .mwcs-type-card h3 {
          margin: 0 0 10px;

          font-size: 19px;
        }

        .mwcs-type-card p {
          margin: 0;

          color:
            var(--mwcs-muted);

          font-size: 13px;

          line-height: 1.68;
        }

        /* =====================================================
           PROBLEMS
        ===================================================== */

        .mwcs-problems {
          background:
            radial-gradient(
              ellipse at 82% 45%,
              rgba(
                255,
                121,
                0,
                0.05
              ),
              transparent 31%
            ),
            #020304;
        }

        .mwcs-problem-grid {
          display: grid;

          grid-template-columns:
            repeat(
              3,
              minmax(
                0,
                1fr
              )
            );

          gap: 14px;
        }

        .mwcs-problem-card {
          padding: 24px;

          border:
            1px solid
            var(--mwcs-border);

          border-radius: 14px;

          background:
            rgba(
              255,
              255,
              255,
              0.018
            );
        }

        .mwcs-problem-card svg {
          width: 28px;
          height: 28px;

          margin-bottom: 16px;

          color:
            var(--mwcs-blue-light);
        }

        .mwcs-problem-card:nth-child(even)
          svg {
          color:
            var(--mwcs-orange-light);
        }

        .mwcs-problem-card h3 {
          margin: 0 0 9px;

          font-size: 17px;
        }

        .mwcs-problem-card p {
          margin: 0;

          color:
            var(--mwcs-muted);

          font-size: 13px;

          line-height: 1.67;
        }

        /* =====================================================
           WEBSITE → SOFTWARE
        ===================================================== */

        .mwcs-connection {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwcs-connection-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 0.9fr)
            minmax(420px, 1.1fr);

          align-items: center;

          gap:
            clamp(
              45px,
              7vw,
              100px
            );
        }

        .mwcs-connection-copy h2 {
          margin: 0 0 20px;

          font-size:
            clamp(
              40px,
              4.7vw,
              68px
            );

          line-height: 1.02;

          letter-spacing: -0.05em;
        }

        .mwcs-connection-copy p {
          margin: 0 0 17px;

          color:
            var(--mwcs-muted);

          font-size: 16px;

          line-height: 1.8;
        }

        .mwcs-connection-visual {
          display: grid;

          grid-template-columns:
            1fr auto 1fr;

          align-items: center;

          gap: 16px;

          padding: 28px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.22
            );

          border-radius: 20px;

          background:
            linear-gradient(
              145deg,
              #09131a,
              #04080b
            );
        }

        .mwcs-public-card,
        .mwcs-private-card {
          min-height: 230px;

          padding: 20px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.08
            );

          border-radius: 11px;

          background: #081117;
        }

        .mwcs-public-card > svg,
        .mwcs-private-card > svg {
          width: 31px;
          height: 31px;

          margin-bottom: 17px;
        }

        .mwcs-public-card > svg {
          color:
            var(--mwcs-blue-light);
        }

        .mwcs-private-card > svg {
          color:
            var(--mwcs-orange-light);
        }

        .mwcs-public-card strong,
        .mwcs-private-card strong {
          display: block;

          margin-bottom: 10px;

          font-size: 14px;
        }

        .mwcs-mini-line {
          height: 7px;

          margin-bottom: 8px;

          border-radius: 3px;

          background:
            rgba(
              255,
              255,
              255,
              0.13
            );
        }

        .mwcs-mini-line.short {
          width: 66%;
        }

        .mwcs-mini-button {
          width: 75px;
          height: 21px;

          margin-top: 14px;

          border-radius: 4px;

          background:
            var(--mwcs-blue);
        }

        .mwcs-private-row {
          display: flex;

          align-items: center;

          justify-content: space-between;

          min-height: 35px;

          margin-bottom: 7px;

          padding: 0 9px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.07
            );

          border-radius: 5px;

          color: #9dabb4;

          font-size: 9px;
        }

        .mwcs-private-row span {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background:
            var(--mwcs-orange);
        }

        .mwcs-connection-arrow {
          color:
            var(--mwcs-orange);

          font-size: 28px;

          filter:
            drop-shadow(
              0 0 8px
              rgba(
                255,
                121,
                0,
                0.35
              )
            );
        }

        /* =====================================================
           EXAMPLES
        ===================================================== */

        .mwcs-examples {
          background: #020304;
        }

        .mwcs-example-grid {
          display: grid;

          grid-template-columns:
            repeat(
              3,
              minmax(
                0,
                1fr
              )
            );

          gap: 14px;
        }

        .mwcs-example-card {
          min-height: 235px;

          padding: 24px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.14
            );

          border-radius: 14px;

          background:
            rgba(
              8,
              185,
              244,
              0.02
            );
        }

        .mwcs-example-card:nth-child(even) {
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

        .mwcs-example-number {
          margin-bottom: 16px;

          color:
            var(--mwcs-blue-light);

          font-size: 10px;

          font-weight: 950;

          letter-spacing: 0.14em;
        }

        .mwcs-example-card:nth-child(even)
          .mwcs-example-number {
          color:
            var(--mwcs-orange-light);
        }

        .mwcs-example-card h3 {
          margin: 0 0 10px;

          font-size: 18px;
        }

        .mwcs-example-card p {
          margin: 0;

          color:
            var(--mwcs-muted);

          font-size: 13px;

          line-height: 1.68;
        }

        /* =====================================================
           PRACTICAL CHOICE
        ===================================================== */

        .mwcs-practical {
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
                0.065
              ),
              transparent 44%
            ),
            #020304;
        }

        .mwcs-practical-card {
          max-width: 1120px;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            auto 1fr;

          align-items: center;

          gap: 25px;

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

          border-radius: 20px;

          background:
            radial-gradient(
              circle at 88% 50%,
              rgba(
                255,
                121,
                0,
                0.08
              ),
              transparent 27%
            ),
            linear-gradient(
              145deg,
              #08131a,
              #04080b
            );
        }

        .mwcs-practical-icon {
          width: 72px;
          height: 72px;

          display: grid;

          place-items: center;

          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.3
            );

          border-radius: 17px;

          color:
            var(--mwcs-orange);

          background:
            rgba(
              255,
              121,
              0,
              0.055
            );
        }

        .mwcs-practical-icon svg {
          width: 34px;
          height: 34px;
        }

        .mwcs-practical-copy h2 {
          margin: 0 0 9px;

          font-size:
            clamp(
              29px,
              3vw,
              43px
            );

          letter-spacing:
            -0.04em;
        }

        .mwcs-practical-copy p {
          margin: 0;

          color:
            var(--mwcs-muted);

          font-size: 14px;

          line-height: 1.72;
        }

        /* =====================================================
           PROCESS
        ===================================================== */

        .mwcs-process {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwcs-process-grid {
          display: grid;

          grid-template-columns:
            repeat(
              3,
              minmax(
                0,
                1fr
              )
            );

          gap: 13px;
        }

        .mwcs-process-card {
          min-height: 245px;

          padding: 25px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.16
            );

          border-radius: 14px;

          background:
            rgba(
              8,
              185,
              244,
              0.02
            );
        }

        .mwcs-process-card:nth-child(even) {
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

        .mwcs-process-number {
          margin-bottom: 17px;

          color:
            var(--mwcs-blue-light);

          font-size: 11px;

          font-weight: 950;

          letter-spacing: 0.14em;
        }

        .mwcs-process-card:nth-child(even)
          .mwcs-process-number {
          color:
            var(--mwcs-orange-light);
        }

        .mwcs-process-card h3 {
          margin: 0 0 10px;

          font-size: 19px;
        }

        .mwcs-process-card p {
          margin: 0;

          color:
            var(--mwcs-muted);

          font-size: 13px;

          line-height: 1.68;
        }

        /* =====================================================
           FAQ
        ===================================================== */

        .mwcs-faq {
          background: #020304;
        }

        .mwcs-faq-grid {
          display: grid;

          grid-template-columns:
            repeat(
              2,
              minmax(
                0,
                1fr
              )
            );

          gap: 14px;
        }

        .mwcs-faq-card {
          padding: 24px;

          border:
            1px solid
            var(--mwcs-border);

          border-radius: 14px;

          background:
            linear-gradient(
              145deg,
              #0a1218,
              #04080b
            );
        }

        .mwcs-faq-card h3 {
          margin: 0 0 10px;

          font-size: 16px;
        }

        .mwcs-faq-card p {
          margin: 0;

          color:
            var(--mwcs-muted);

          font-size: 13px;

          line-height: 1.7;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .mwcs-final {
          padding:
            95px
            clamp(
              20px,
              5vw,
              80px
            );

          background:
            radial-gradient(
              ellipse at 20% 50%,
              rgba(
                8,
                185,
                244,
                0.1
              ),
              transparent 32%
            ),
            radial-gradient(
              ellipse at 80% 50%,
              rgba(
                255,
                121,
                0,
                0.075
              ),
              transparent 32%
            ),
            #020304;
        }

        .mwcs-final-card {
          max-width: 1100px;

          margin: 0 auto;

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

          border-radius: 22px;

          text-align: center;

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

        .mwcs-final-card > svg {
          width: 42px;
          height: 42px;

          margin-bottom: 19px;

          color:
            var(--mwcs-orange);
        }

        .mwcs-final-card h2 {
          margin: 0;

          font-size:
            clamp(
              38px,
              5vw,
              67px
            );

          line-height: 1.03;

          letter-spacing: -0.05em;
        }

        .mwcs-final-card p {
          max-width: 730px;

          margin:
            18px auto 0;

          color:
            var(--mwcs-muted);

          font-size: 15px;

          line-height: 1.75;
        }

        .mwcs-final-card
          .mwcs-button-row {
          justify-content: center;
        }

        .mwcs-related {
          display: flex;

          flex-wrap: wrap;

          justify-content: center;

          gap: 10px 18px;

          margin-top: 28px;
        }

        .mwcs-related a {
          color: #8fa0ab;

          text-decoration: none;

          font-size: 11px;

          font-weight: 700;
        }

        .mwcs-related a:hover {
          color:
            var(--mwcs-blue-light);
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1100px) {
          .mwcs-type-grid,
          .mwcs-problem-grid,
          .mwcs-example-grid,
          .mwcs-process-grid {
            grid-template-columns:
              repeat(
                2,
                1fr
              );
          }
        }

        @media (max-width: 900px) {
          .mwcs-hero-inner,
          .mwcs-connection-grid {
            grid-template-columns: 1fr;
          }

          .mwcs-hero-inner {
            text-align: center;
          }

          .mwcs-hero-badge {
            margin-left: auto;
            margin-right: auto;
          }

          .mwcs-hero-copy > p {
            margin-left: auto;
            margin-right: auto;
          }

          .mwcs-button-row {
            justify-content: center;
          }

          .mwcs-system-stage {
            min-height: 420px;
          }
        }

        @media (max-width: 700px) {
          .mwcs-section {
            padding:
              70px 16px;
          }

          .mwcs-hero {
            min-height: auto;
          }

          .mwcs-hero-inner {
            padding:
              70px 16px;
          }

          .mwcs-hero h1 {
            font-size:
              clamp(
                46px,
                14vw,
                67px
              );
          }

          .mwcs-type-grid,
          .mwcs-problem-grid,
          .mwcs-example-grid,
          .mwcs-process-grid,
          .mwcs-faq-grid {
            grid-template-columns: 1fr;
          }

          .mwcs-connection-visual {
            grid-template-columns: 1fr;
          }

          .mwcs-connection-arrow {
            transform:
              rotate(90deg);

            text-align: center;
          }

          .mwcs-practical-card {
            grid-template-columns: 1fr;

            text-align: center;
          }

          .mwcs-practical-icon {
            margin: 0 auto;
          }
        }

        @media (max-width: 500px) {
          .mwcs-system-stage {
            min-height: 355px;

            transform:
              scale(0.86);

            margin:
              -20px -25px;
          }

          .mwcs-system-tag.one {
            left: 0;
          }

          .mwcs-system-tag.two {
            right: 0;
          }
        }
      `}</style>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        className="mwcs-hero"
        id="custom-software"
      >
        <div className="mwcs-hero-inner">
          <div className="mwcs-hero-copy">
            <div className="mwcs-hero-badge">
              <span />
              Custom Software • Available Now
            </div>

            <h1>
              <span>
                When Off-the-Shelf
              </span>

              <span className="mwcs-blue">
                Software Doesn&apos;t Fit,
              </span>

              <span className="mwcs-orange">
                Build What Does.
              </span>
            </h1>

            <p>
              Matthew Web builds custom
              dashboards, lead systems, forms,
              workflows, integrations, and
              website-connected software around
              the way a business actually
              operates.
            </p>

            <div className="mwcs-button-row">
              <Link
                href="/contact-us"
                className="mwcs-btn mwcs-btn-blue"
              >
                Discuss a Software Project
                <ArrowRight />
              </Link>

              <Link
                href="/services"
                className="mwcs-btn mwcs-btn-dark"
              >
                All Services
              </Link>
            </div>
          </div>

          <div
            className="mwcs-system-stage"
            aria-hidden="true"
          >
            <div className="mwcs-system-tag one">
              <FileInput />
              CUSTOMER INPUT
            </div>

            <div className="mwcs-system-tag two">
              <Database />
              BUSINESS DATA
            </div>

            <div className="mwcs-system-tag three">
              <Workflow />
              WORKFLOW
            </div>

            <div className="mwcs-system">
              <div className="mwcs-system-top">
                <div className="mwcs-system-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <strong>
                  BUSINESS WORKFLOW
                </strong>
              </div>

              <div className="mwcs-flow">
                <div className="mwcs-flow-card">
                  <div className="mwcs-flow-icon">
                    <FileInput />
                  </div>

                  <div>
                    <strong>
                      Customer Form
                    </strong>

                    <p>
                      Lead • Quote • Request
                    </p>
                  </div>

                  <div className="mwcs-flow-status" />
                </div>

                <div className="mwcs-flow-card">
                  <div className="mwcs-flow-icon">
                    <Database />
                  </div>

                  <div>
                    <strong>
                      Store & Organize
                    </strong>

                    <p>
                      Customer • Status • Data
                    </p>
                  </div>

                  <div className="mwcs-flow-status" />
                </div>

                <div className="mwcs-flow-card">
                  <div className="mwcs-flow-icon">
                    <BarChart3 />
                  </div>

                  <div>
                    <strong>
                      Private Dashboard
                    </strong>

                    <p>
                      View • Track • Manage
                    </p>
                  </div>

                  <div className="mwcs-flow-status" />
                </div>

                <div className="mwcs-flow-card">
                  <div className="mwcs-flow-icon">
                    <BellRing />
                  </div>

                  <div>
                    <strong>
                      Business Action
                    </strong>

                    <p>
                      Notify • Follow Up • Improve
                    </p>
                  </div>

                  <div className="mwcs-flow-status" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          WHAT WE BUILD
      ====================================================== */}

      <section
        className="mwcs-section mwcs-types"
        id="software-types"
      >
        <div className="mwcs-container">
          <div className="mwcs-heading center">
            <div className="mwcs-kicker">
              <Code2 />
              Custom Business Tools
            </div>

            <h2>
              Software Built Around{" "}
              <span className="mwcs-blue">
                Real Workflows
              </span>
            </h2>

            <p>
              Custom software does not have to
              mean a giant application. A focused
              tool that solves one repeated
              problem can be extremely useful.
            </p>
          </div>

          <div className="mwcs-type-grid">
            {softwareTypes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className={`mwcs-type-card ${item.accent}`}
                  key={item.title}
                >
                  <div className="mwcs-type-icon">
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
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          BUSINESS PROBLEMS
      ====================================================== */}

      <section
        className="mwcs-section mwcs-problems"
        id="software-problems"
      >
        <div className="mwcs-container">
          <div className="mwcs-heading">
            <div className="mwcs-kicker orange">
              <Wrench />
              When Software May Help
            </div>

            <h2>
              Repeated Problems Are Often{" "}
              <span className="mwcs-orange">
                Worth Investigating.
              </span>
            </h2>

            <p>
              If the same business problem keeps
              happening, there may be an
              opportunity to replace a messy
              manual process with something more
              organized.
            </p>
          </div>

          <div className="mwcs-problem-grid">
            {businessProblems.map((problem) => {
              const Icon = problem.icon;

              return (
                <div
                  className="mwcs-problem-card"
                  key={problem.title}
                >
                  <Icon />

                  <h3>
                    {problem.title}
                  </h3>

                  <p>
                    {problem.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          WEBSITE TO SOFTWARE
      ====================================================== */}

      <section
        className="mwcs-section mwcs-connection"
        id="website-software-connection"
      >
        <div className="mwcs-container">
          <div className="mwcs-connection-grid">
            <div className="mwcs-connection-copy">
              <div className="mwcs-kicker">
                <Network />
                Website + Software
              </div>

              <h2>
                Your Website Can Become Part of{" "}
                <span className="mwcs-blue">
                  the Business System.
                </span>
              </h2>

              <p>
                A public website can do more than
                display information. Customer
                actions can feed directly into
                private software used by the
                business.
              </p>

              <p>
                A quote request, for example,
                can become a lead record with
                customer details, project
                information, notes, status, and a
                follow-up workflow.
              </p>

              <p>
                This turns the website into the
                front end of a larger system
                instead of leaving customer
                information scattered across
                emails and messages.
              </p>

              <div className="mwcs-button-row">
                <Link
                  href="/website-design"
                  className="mwcs-btn mwcs-btn-dark"
                >
                  Website Design
                </Link>
              </div>
            </div>

            <div
              className="mwcs-connection-visual"
              aria-hidden="true"
            >
              <div className="mwcs-public-card">
                <MousePointerClick />

                <strong>
                  Public Website
                </strong>

                <div className="mwcs-mini-line" />
                <div className="mwcs-mini-line short" />
                <div className="mwcs-mini-line" />

                <div className="mwcs-mini-button" />
              </div>

              <div className="mwcs-connection-arrow">
                →
              </div>

              <div className="mwcs-private-card">
                <LockKeyhole />

                <strong>
                  Private Dashboard
                </strong>

                <div className="mwcs-private-row">
                  NEW LEAD
                  <span />
                </div>

                <div className="mwcs-private-row">
                  CONTACTED
                  <span />
                </div>

                <div className="mwcs-private-row">
                  FOLLOW UP
                  <span />
                </div>

                <div className="mwcs-private-row">
                  QUOTE
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          EXAMPLES
      ====================================================== */}

      <section
        className="mwcs-section mwcs-examples"
        id="software-examples"
      >
        <div className="mwcs-container">
          <div className="mwcs-heading center">
            <div className="mwcs-kicker orange">
              <Sparkles />
              Practical Examples
            </div>

            <h2>
              What Could{" "}
              <span className="mwcs-orange">
                Custom Software
              </span>{" "}
              Look Like?
            </h2>

            <p>
              These are examples of focused
              systems that can solve everyday
              business problems.
            </p>
          </div>

          <div className="mwcs-example-grid">
            {examples.map((item, index) => (
              <div
                className="mwcs-example-card"
                key={item.title}
              >
                <div className="mwcs-example-number">
                  EXAMPLE{" "}
                  {String(index + 1).padStart(
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
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          PRACTICAL CHOICE
      ====================================================== */}

      <section
        className="mwcs-practical"
        id="right-tool"
      >
        <div className="mwcs-practical-card">
          <div className="mwcs-practical-icon">
            <CheckCircle2 />
          </div>

          <div className="mwcs-practical-copy">
            <h2>
              Custom Software Is Not Always the{" "}
              <span className="mwcs-blue">
                Right Answer.
              </span>
            </h2>

            <p>
              If a normal form, existing service,
              spreadsheet, or simpler solution
              solves the problem well, building
              custom software may add unnecessary
              cost and complexity. The goal is to
              solve the business problem—not to
              sell the largest possible system.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          PROCESS
      ====================================================== */}

      <section
        className="mwcs-section mwcs-process"
        id="software-process"
      >
        <div className="mwcs-container">
          <div className="mwcs-heading center">
            <div className="mwcs-kicker">
              <Rocket />
              Development Process
            </div>

            <h2>
              Start With the Problem.{" "}
              <span className="mwcs-blue">
                Build What Matters.
              </span>
            </h2>

            <p>
              The first version should answer the
              important question before the
              project grows into something larger.
            </p>
          </div>

          <div className="mwcs-process-grid">
            {processSteps.map((step) => (
              <div
                className="mwcs-process-card"
                key={step.number}
              >
                <div className="mwcs-process-number">
                  STEP {step.number}
                </div>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          FAQ
      ====================================================== */}

      <section
        className="mwcs-section mwcs-faq"
        id="custom-software-faq"
      >
        <div className="mwcs-container">
          <div className="mwcs-heading">
            <div className="mwcs-kicker orange">
              <FileText />
              Custom Software FAQ
            </div>

            <h2>
              Common{" "}
              <span className="mwcs-orange">
                Questions
              </span>
            </h2>

            <p>
              Custom software can range from a
              small internal tool to a much
              larger business system.
            </p>
          </div>

          <div className="mwcs-faq-grid">
            {faqs.map((item) => (
              <div
                className="mwcs-faq-card"
                key={item.q}
              >
                <h3>
                  {item.q}
                </h3>

                <p>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          FINAL CTA
      ====================================================== */}

      <section
        className="mwcs-final"
        id="start-software-project"
      >
        <div className="mwcs-final-card">
          <Zap />

          <h2>
            Have a Repetitive Business Problem{" "}
            <span className="mwcs-orange">
              Worth Fixing?
            </span>
          </h2>

          <p>
            Tell Matthew Web how the process works
            today, where it breaks down, and what
            you wish happened instead. We can
            determine whether custom software—or
            a simpler solution—is the right next
            step.
          </p>

          <div className="mwcs-button-row">
            <Link
              href="/contact-us"
              className="mwcs-btn mwcs-btn-orange"
            >
              Discuss the Problem
              <ArrowRight />
            </Link>

            <Link
              href="/pricing"
              className="mwcs-btn mwcs-btn-dark"
            >
              View Pricing
            </Link>
          </div>

          <nav className="mwcs-related">
            <Link href="/services">
              All Services
            </Link>

            <Link href="/website-design">
              Website Design
            </Link>

            <Link href="/seo-and-indexing">
              SEO &amp; Indexing
            </Link>

            <Link href="/small-business-websites">
              Small Business Websites
            </Link>

            <Link href="/examples">
              Examples
            </Link>
          </nav>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
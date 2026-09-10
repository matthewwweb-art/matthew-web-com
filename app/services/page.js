"use client";

import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  CreditCard,
  Database,
  FileText,
  Gauge,
  Globe2,
  Layers3,
  LifeBuoy,
  MonitorSmartphone,
  MousePointerClick,
  RefreshCcw,
  Rocket,
  SearchCheck,
  Server,
  Settings2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/* ============================================================
   CORE SERVICES
============================================================ */

const coreServices = [
  {
    icon: MonitorSmartphone,
    title: "Website Design",
    status: "AVAILABLE NOW",
    text:
      "Modern, responsive websites built around your business, your customers and the actions you want visitors to take.",
    href: "/website-design",
    accent: "blue",
    items: [
      "New website creation",
      "Complete redesigns",
      "Responsive layouts",
      "Custom-coded sections",
      "Mobile optimization",
      "Business-focused structure",
    ],
  },
  {
    icon: Code2,
    title: "Custom Software",
    status: "AVAILABLE NOW",
    text:
      "Custom software and website functionality for businesses that need more than ordinary templates or off-the-shelf tools.",
    href: "/custom-software",
    accent: "orange",
    items: [
      "Custom forms",
      "Dashboards",
      "Business workflows",
      "Database-backed tools",
      "Integrations",
      "Site-specific functionality",
    ],
  },
  {
    icon: SearchCheck,
    title: "SEO & Indexing",
    status: "AVAILABLE NOW",
    text:
      "Technical search support designed to help search engines understand, discover and properly index your website.",
    href: "/seo-and-indexing",
    accent: "blue",
    items: [
      "Indexing setup",
      "Sitemaps",
      "Metadata",
      "Page structure",
      "Internal links",
      "Search diagnostics",
    ],
  },
  {
    icon: Globe2,
    title: "Small Business Websites",
    status: "PRIMARY FOCUS",
    text:
      "Practical website solutions for small businesses with no website or sites that are outdated, broken, slow or incomplete.",
    href: "/small-business-websites",
    accent: "orange",
    items: [
      "First websites",
      "Website rebuilds",
      "Broken-site repair",
      "Mobile improvements",
      "Contact-path improvements",
      "Business information cleanup",
    ],
  },
];

/* ============================================================
   SERVICE CAPABILITIES
============================================================ */

const capabilities = [
  {
    icon: Globe2,
    title: "Domain Connection",
    text:
      "Connect an existing domain or help prepare a new domain for your finished website.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    text:
      "Move the completed website from development into a live production environment.",
  },
  {
    icon: Server,
    title: "Hosting Setup",
    text:
      "Configure hosting-related infrastructure appropriate for the website or project.",
  },
  {
    icon: FileText,
    title: "Forms & Lead Capture",
    text:
      "Contact forms, inquiry forms, business forms and lead-capture systems.",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    text:
      "Add appropriate payment links or payment-related functionality to business websites.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    text:
      "Traffic and activity tracking so decisions can be based on real usage instead of guessing.",
  },
  {
    icon: SearchCheck,
    title: "Indexing Support",
    text:
      "Help search engines discover important pages and diagnose common indexing problems.",
  },
  {
    icon: Settings2,
    title: "Added Functionality",
    text:
      "Add useful features to an existing site without automatically requiring a full rebuild.",
  },
  {
    icon: RefreshCcw,
    title: "Maintenance",
    text:
      "Updates, fixes, content changes and ongoing improvements after launch.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Support",
    text:
      "Continued technical help so a finished website does not become an abandoned website.",
  },
  {
    icon: Database,
    title: "Business Data Tools",
    text:
      "Custom data capture, dashboards and business functionality where appropriate.",
  },
  {
    icon: ShieldCheck,
    title: "Technical Reliability",
    text:
      "Modern structure, SSL-aware deployment and practical maintenance focused on keeping systems working.",
  },
];

/* ============================================================
   BUSINESS PROBLEMS
============================================================ */

const businessProblems = [
  {
    icon: Globe2,
    title: "No Website",
    text:
      "Your business relies only on social media, directories or word-of-mouth and needs a professional home online.",
    solution: "New Website",
  },
  {
    icon: MonitorSmartphone,
    title: "Outdated Website",
    text:
      "The business has changed but the website no longer reflects the services, quality or current brand.",
    solution: "Redesign",
  },
  {
    icon: Wrench,
    title: "Broken Website",
    text:
      "Forms, links, pages or customer actions are not working correctly.",
    solution: "Repair / Rebuild",
  },
  {
    icon: Smartphone,
    title: "Poor Mobile Experience",
    text:
      "The site is difficult to read, navigate or use from a smartphone.",
    solution: "Responsive Improvement",
  },
  {
    icon: Gauge,
    title: "Slow or Heavy",
    text:
      "Large files, inefficient layouts or technical problems make the website frustrating to use.",
    solution: "Performance Work",
  },
  {
    icon: SearchCheck,
    title: "Weak Search Visibility",
    text:
      "Important pages are difficult to discover or appear to have indexing and search-structure problems.",
    solution: "SEO / Indexing",
  },
  {
    icon: MousePointerClick,
    title: "No Clear Customer Path",
    text:
      "Visitors cannot easily tell how to call, contact, buy, request a quote or take the next step.",
    solution: "Conversion Path",
  },
  {
    icon: Layers3,
    title: "Missing Features",
    text:
      "The website needs forms, payments, analytics, custom tools or other functionality.",
    solution: "Custom Functionality",
  },
];

/* ============================================================
   PROCESS
============================================================ */

const processSteps = [
  {
    number: "01",
    title: "Understand the Problem",
    text:
      "We start with the actual business need instead of assuming every customer needs the same package.",
  },
  {
    number: "02",
    title: "Define the Scope",
    text:
      "The project is narrowed to the website, software, feature or technical work that actually needs to be completed.",
  },
  {
    number: "03",
    title: "Build & Review",
    text:
      "Development is completed in stages with testing and customer review before launch or final delivery.",
  },
  {
    number: "04",
    title: "Launch & Support",
    text:
      "After deployment, maintenance and ongoing support can continue instead of the relationship ending at launch.",
  },
];

/* ============================================================
   PAGE
============================================================ */

export default function ServicesPage() {
  return (
    <main className="mws-page">
      <SiteHeader />

      <style jsx global>{`
        :root {
          --mws-black: #020304;
          --mws-panel: #091117;
          --mws-panel-soft: #0c151c;

          --mws-white: #ffffff;
          --mws-muted: #aebbc5;

          --mws-blue: #08b9f4;
          --mws-blue-light: #38d7ff;

          --mws-orange: #ff7900;
          --mws-orange-light: #ffab31;

          --mws-border: rgba(255, 255, 255, 0.09);
        }

        body {
          margin: 0;
          background: var(--mws-black);
        }

        .mws-page {
          min-height: 100vh;
          overflow: hidden;
          color: white;
          background: var(--mws-black);
        }

        .mws-container {
          width: 100%;
          max-width: 1380px;
          margin: 0 auto;
        }

        .mws-section {
          position: relative;
          width: 100%;
          padding: 100px clamp(20px, 5vw, 80px);
        }

        .mws-blue {
          color: var(--mws-blue-light);
        }

        .mws-orange {
          color: var(--mws-orange);
        }

        /* =====================================================
           HEADINGS
        ===================================================== */

        .mws-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 14px;

          color: var(--mws-blue-light);

          font-size: 11px;
          font-weight: 900;

          letter-spacing: 0.16em;

          text-transform: uppercase;
        }

        .mws-kicker.orange {
          color: var(--mws-orange-light);
        }

        .mws-kicker svg {
          width: 18px;
          height: 18px;
        }

        .mws-heading {
          max-width: 900px;
          margin-bottom: 48px;
        }

        .mws-heading.center {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .mws-heading h2 {
          margin: 0 0 18px;

          font-size: clamp(38px, 4.7vw, 68px);

          line-height: 1.02;

          letter-spacing: -0.05em;
        }

        .mws-heading p {
          max-width: 800px;
          margin: 0;

          color: var(--mws-muted);

          font-size: clamp(15px, 1.35vw, 19px);

          line-height: 1.75;
        }

        .mws-heading.center p {
          margin-left: auto;
          margin-right: auto;
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .mws-button-row {
          display: flex;
          flex-wrap: wrap;
          gap: 13px;

          margin-top: 29px;
        }

        .mws-btn {
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

        .mws-btn svg {
          width: 18px;
          height: 18px;
        }

        .mws-btn-blue {
          border: 1px solid rgba(56, 215, 255, 0.55);

          background:
            linear-gradient(
              180deg,
              #0ab6ed,
              #0789b6
            );

          box-shadow:
            0 0 16px
            rgba(8, 185, 244, 0.28);
        }

        .mws-btn-orange {
          border: 1px solid rgba(255, 176, 49, 0.6);

          background:
            linear-gradient(
              180deg,
              #ff9519,
              #f16600
            );

          box-shadow:
            0 0 16px
            rgba(255, 121, 0, 0.27);
        }

        .mws-btn-dark {
          border: 1px solid rgba(255, 255, 255, 0.13);

          background:
            rgba(255, 255, 255, 0.035);
        }

        .mws-btn:hover {
          transform: translateY(-2px);
        }

        .mws-btn-blue:hover {
          box-shadow:
            0 0 25px
            rgba(8, 185, 244, 0.48);
        }

        .mws-btn-orange:hover {
          box-shadow:
            0 0 25px
            rgba(255, 121, 0, 0.48);
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mws-hero {
          position: relative;

          min-height: 650px;

          display: flex;
          align-items: center;

          overflow: hidden;

          border-bottom:
            1px solid
            rgba(8, 185, 244, 0.16);

          background:
            radial-gradient(
              ellipse at 18% 43%,
              rgba(8, 185, 244, 0.16),
              transparent 36%
            ),
            radial-gradient(
              ellipse at 82% 48%,
              rgba(255, 121, 0, 0.08),
              transparent 32%
            ),
            linear-gradient(
              180deg,
              #020304,
              #03080c,
              #020304
            );
        }

        .mws-hero::before {
          content: "";

          position: absolute;
          inset: 0;

          opacity: 0.27;

          background-image:
            linear-gradient(
              rgba(8, 185, 244, 0.055) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(8, 185, 244, 0.055) 1px,
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

        .mws-hero-inner {
          position: relative;
          z-index: 3;

          display: grid;

          grid-template-columns:
            minmax(0, 1.06fr)
            minmax(420px, 0.94fr);

          align-items: center;

          gap: clamp(45px, 6vw, 90px);

          width: 100%;
          max-width: 1380px;

          margin: 0 auto;

          padding:
            95px
            clamp(20px, 5vw, 80px);
        }

        .mws-hero-badge {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          width: fit-content;

          margin-bottom: 21px;

          padding: 8px 12px;

          border:
            1px solid
            rgba(8, 185, 244, 0.28);

          border-radius: 999px;

          color: #d9f8ff;

          background:
            rgba(8, 185, 244, 0.055);

          font-size: 10px;
          font-weight: 900;

          letter-spacing: 0.14em;

          text-transform: uppercase;
        }

        .mws-hero-badge span {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background:
            #35e07e;

          box-shadow:
            0 0 9px
            rgba(53, 224, 126, 0.8);
        }

        .mws-hero h1 {
          max-width: 850px;

          margin: 0;

          font-size:
            clamp(
              52px,
              6.1vw,
              94px
            );

          line-height: 0.97;

          letter-spacing: -0.06em;
        }

        .mws-hero h1 span {
          display: block;
        }

        .mws-hero-copy > p {
          max-width: 760px;

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
           HERO VISUAL
        ===================================================== */

        .mws-hero-visual {
          position: relative;

          min-height: 450px;

          display: grid;

          place-items: center;
        }

        .mws-system-card {
          position: relative;
          z-index: 3;

          width: min(100%, 430px);

          padding: 25px;

          border:
            1px solid
            rgba(8, 185, 244, 0.34);

          border-radius: 20px;

          background:
            radial-gradient(
              circle at 30% 15%,
              rgba(8, 185, 244, 0.13),
              transparent 35%
            ),
            linear-gradient(
              145deg,
              #0c171e,
              #04080b
            );

          box-shadow:
            0 30px 70px
            rgba(0, 0, 0, 0.45),
            0 0 35px
            rgba(8, 185, 244, 0.1);
        }

        .mws-system-top {
          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-bottom: 21px;
        }

        .mws-system-dots {
          display: flex;

          gap: 6px;
        }

        .mws-system-dots span {
          width: 8px;
          height: 8px;

          border-radius: 50%;

          background:
            rgba(255, 255, 255, 0.18);
        }

        .mws-system-dots span:nth-child(1) {
          background: var(--mws-orange);
        }

        .mws-system-dots span:nth-child(2) {
          background: var(--mws-blue);
        }

        .mws-system-top strong {
          color: #8496a1;

          font-size: 9px;

          letter-spacing: 0.13em;
        }

        .mws-system-screen {
          min-height: 235px;

          padding: 20px;

          border:
            1px solid
            rgba(255, 255, 255, 0.08);

          border-radius: 11px;

          background: #061016;
        }

        .mws-browser-bar {
          height: 13px;

          margin-bottom: 18px;

          border-radius: 4px;

          background:
            rgba(255, 255, 255, 0.1);
        }

        .mws-system-hero {
          height: 85px;

          margin-bottom: 13px;

          border:
            1px solid
            rgba(8, 185, 244, 0.22);

          border-radius: 7px;

          background:
            radial-gradient(
              circle at 20% 50%,
              rgba(8, 185, 244, 0.35),
              transparent 30%
            ),
            linear-gradient(
              120deg,
              #0a1a23,
              #081017
            );
        }

        .mws-system-grid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 8px;
        }

        .mws-system-grid div {
          height: 67px;

          border:
            1px solid
            rgba(255, 255, 255, 0.07);

          border-radius: 6px;

          background: #101b22;
        }

        .mws-system-grid div:nth-child(2) {
          border-color:
            rgba(255, 121, 0, 0.22);

          background:
            rgba(255, 121, 0, 0.05);
        }

        .mws-floating-label {
          position: absolute;
          z-index: 5;

          display: flex;

          align-items: center;

          gap: 7px;

          min-height: 35px;

          padding: 0 11px;

          border:
            1px solid
            rgba(255, 255, 255, 0.11);

          border-radius: 7px;

          color: #dce7ec;

          background:
            rgba(3, 8, 11, 0.92);

          font-size: 9px;
          font-weight: 900;

          letter-spacing: 0.08em;
        }

        .mws-floating-label svg {
          width: 15px;
          height: 15px;

          color: var(--mws-blue-light);
        }

        .mws-floating-label.one {
          left: -2%;
          top: 14%;
        }

        .mws-floating-label.two {
          right: -1%;
          top: 18%;
        }

        .mws-floating-label.three {
          left: 3%;
          bottom: 11%;
        }

        .mws-floating-label.four {
          right: 1%;
          bottom: 8%;
        }

        .mws-floating-label.two svg,
        .mws-floating-label.four svg {
          color: var(--mws-orange-light);
        }

        /* =====================================================
           CORE SERVICE CARDS
        ===================================================== */

        .mws-core-services {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mws-core-grid {
          display: grid;

          grid-template-columns:
            repeat(
              2,
              minmax(
                0,
                1fr
              )
            );

          gap: 17px;
        }

        .mws-core-card {
          position: relative;

          min-height: 390px;

          padding: 30px;

          overflow: hidden;

          border:
            1px solid
            var(--mws-border);

          border-radius: 19px;

          text-decoration: none;

          background:
            linear-gradient(
              145deg,
              #0a1218,
              #04080b
            );

          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .mws-core-card:hover {
          transform:
            translateY(-6px);
        }

        .mws-core-card.blue:hover {
          border-color:
            rgba(8, 185, 244, 0.38);

          box-shadow:
            0 20px 50px
            rgba(8, 185, 244, 0.06);
        }

        .mws-core-card.orange:hover {
          border-color:
            rgba(255, 121, 0, 0.38);

          box-shadow:
            0 20px 50px
            rgba(255, 121, 0, 0.05);
        }

        .mws-core-icon {
          width: 58px;
          height: 58px;

          display: grid;
          place-items: center;

          margin-bottom: 20px;

          border-radius: 14px;
        }

        .mws-core-card.blue
          .mws-core-icon {
          border:
            1px solid
            rgba(8, 185, 244, 0.32);

          color: var(--mws-blue-light);

          background:
            rgba(8, 185, 244, 0.07);
        }

        .mws-core-card.orange
          .mws-core-icon {
          border:
            1px solid
            rgba(255, 121, 0, 0.32);

          color: var(--mws-orange-light);

          background:
            rgba(255, 121, 0, 0.06);
        }

        .mws-core-icon svg {
          width: 30px;
          height: 30px;
        }

        .mws-service-status {
          display: inline-flex;

          align-items: center;

          gap: 6px;

          margin-bottom: 11px;

          color: #8999a3;

          font-size: 9px;
          font-weight: 900;

          letter-spacing: 0.13em;

          text-transform: uppercase;
        }

        .mws-service-status::before {
          content: "";

          width: 6px;
          height: 6px;

          border-radius: 50%;

          background:
            var(--mws-blue);

          box-shadow:
            0 0 7px
            var(--mws-blue);
        }

        .mws-core-card.orange
          .mws-service-status::before {
          background:
            var(--mws-orange);

          box-shadow:
            0 0 7px
            var(--mws-orange);
        }

        .mws-core-card h3 {
          margin: 0 0 11px;

          color: white;

          font-size: 28px;

          letter-spacing: -0.035em;
        }

        .mws-core-card > p {
          margin: 0 0 20px;

          color: var(--mws-muted);

          font-size: 14px;

          line-height: 1.72;
        }

        .mws-core-list {
          display: grid;

          grid-template-columns:
            repeat(
              2,
              minmax(
                0,
                1fr
              )
            );

          gap: 8px 12px;

          margin:
            0 0 24px;

          padding: 0;

          list-style: none;
        }

        .mws-core-list li {
          display: flex;

          align-items: flex-start;

          gap: 7px;

          color: #cad6dc;

          font-size: 12px;
        }

        .mws-core-list li::before {
          content: "";

          width: 5px;
          height: 5px;

          flex: 0 0 auto;

          margin-top: 5px;

          border-radius: 50%;

          background:
            var(--mws-blue);
        }

        .mws-core-card.orange
          .mws-core-list
          li::before {
          background:
            var(--mws-orange);
        }

        .mws-card-link {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          color: white;

          font-size: 12px;
          font-weight: 850;
        }

        .mws-card-link svg {
          width: 15px;
          height: 15px;
        }

        /* =====================================================
           BUSINESS PROBLEMS
        ===================================================== */

        .mws-problems {
          background:
            radial-gradient(
              ellipse at 80% 40%,
              rgba(255, 121, 0, 0.05),
              transparent 30%
            ),
            #020304;
        }

        .mws-problem-grid {
          display: grid;

          grid-template-columns:
            repeat(
              4,
              minmax(
                0,
                1fr
              )
            );

          gap: 14px;
        }

        .mws-problem-card {
          min-height: 260px;

          padding: 24px;

          border:
            1px solid
            var(--mws-border);

          border-radius: 15px;

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

        .mws-problem-card:hover {
          transform:
            translateY(-4px);

          border-color:
            rgba(8, 185, 244, 0.28);
        }

        .mws-problem-card:nth-child(even):hover {
          border-color:
            rgba(255, 121, 0, 0.28);
        }

        .mws-problem-card svg {
          width: 28px;
          height: 28px;

          margin-bottom: 17px;

          color: var(--mws-blue-light);
        }

        .mws-problem-card:nth-child(even)
          svg {
          color:
            var(--mws-orange-light);
        }

        .mws-problem-card h3 {
          margin: 0 0 10px;

          font-size: 18px;
        }

        .mws-problem-card p {
          margin: 0;

          color: var(--mws-muted);

          font-size: 13px;

          line-height: 1.65;
        }

        .mws-problem-solution {
          display: inline-flex;

          margin-top: 17px;

          padding: 6px 9px;

          border:
            1px solid
            rgba(8, 185, 244, 0.2);

          border-radius: 999px;

          color: #bcf1ff;

          background:
            rgba(8, 185, 244, 0.045);

          font-size: 9px;
          font-weight: 900;

          letter-spacing: 0.08em;

          text-transform: uppercase;
        }

        .mws-problem-card:nth-child(even)
          .mws-problem-solution {
          border-color:
            rgba(255, 121, 0, 0.2);

          color: #ffd6b2;

          background:
            rgba(255, 121, 0, 0.04);
        }

        /* =====================================================
           CAPABILITIES
        ===================================================== */

        .mws-capabilities {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mws-capability-grid {
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

        .mws-capability {
          padding: 23px;

          border:
            1px solid
            var(--mws-border);

          border-radius: 13px;

          background:
            rgba(255, 255, 255, 0.018);
        }

        .mws-capability svg {
          width: 27px;
          height: 27px;

          margin-bottom: 15px;

          color:
            var(--mws-blue-light);
        }

        .mws-capability:nth-child(even)
          svg {
          color:
            var(--mws-orange-light);
        }

        .mws-capability h3 {
          margin: 0 0 8px;

          font-size: 16px;
        }

        .mws-capability p {
          margin: 0;

          color: var(--mws-muted);

          font-size: 12px;

          line-height: 1.65;
        }

        /* =====================================================
           CUSTOM SOFTWARE FEATURE
        ===================================================== */

        .mws-software-feature {
          background:
            radial-gradient(
              ellipse at 16% 48%,
              rgba(8, 185, 244, 0.08),
              transparent 31%
            ),
            #020304;
        }

        .mws-software-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            minmax(420px, 0.9fr);

          align-items: center;

          gap:
            clamp(
              45px,
              7vw,
              100px
            );
        }

        .mws-software-copy h2 {
          margin: 0 0 20px;

          font-size:
            clamp(
              41px,
              4.8vw,
              68px
            );

          line-height: 1.02;

          letter-spacing: -0.05em;
        }

        .mws-software-copy p {
          margin: 0;

          color:
            var(--mws-muted);

          font-size: 16px;

          line-height: 1.78;
        }

        .mws-flow {
          position: relative;

          display: grid;

          gap: 13px;

          padding: 30px;

          border:
            1px solid
            rgba(8, 185, 244, 0.23);

          border-radius: 20px;

          background:
            linear-gradient(
              145deg,
              #09131a,
              #04080b
            );
        }

        .mws-flow-row {
          display: grid;

          grid-template-columns:
            45px 1fr auto;

          align-items: center;

          gap: 14px;

          min-height: 70px;

          padding: 12px 15px;

          border:
            1px solid
            rgba(255, 255, 255, 0.08);

          border-radius: 10px;

          background:
            #081117;
        }

        .mws-flow-icon {
          width: 45px;
          height: 45px;

          display: grid;
          place-items: center;

          border-radius: 10px;

          border:
            1px solid
            rgba(8, 185, 244, 0.25);

          color:
            var(--mws-blue-light);

          background:
            rgba(8, 185, 244, 0.05);
        }

        .mws-flow-row:nth-child(even)
          .mws-flow-icon {
          border-color:
            rgba(255, 121, 0, 0.25);

          color:
            var(--mws-orange-light);

          background:
            rgba(255, 121, 0, 0.045);
        }

        .mws-flow-icon svg {
          width: 22px;
          height: 22px;
        }

        .mws-flow-row strong {
          display: block;

          font-size: 13px;
        }

        .mws-flow-row span {
          display: block;

          margin-top: 4px;

          color: #768792;

          font-size: 10px;
        }

        .mws-flow-arrow {
          color:
            var(--mws-orange);

          font-size: 17px;
        }

        /* =====================================================
           PROCESS
        ===================================================== */

        .mws-process {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mws-process-grid {
          display: grid;

          grid-template-columns:
            repeat(
              4,
              minmax(
                0,
                1fr
              )
            );

          gap: 12px;
        }

        .mws-process-card {
          position: relative;

          min-height: 245px;

          padding: 25px;

          overflow: hidden;

          border:
            1px solid
            rgba(8, 185, 244, 0.16);

          border-radius: 14px;

          background:
            rgba(8, 185, 244, 0.022);
        }

        .mws-process-card:nth-child(even) {
          border-color:
            rgba(255, 121, 0, 0.16);

          background:
            rgba(255, 121, 0, 0.02);
        }

        .mws-process-number {
          margin-bottom: 18px;

          color:
            var(--mws-blue-light);

          font-size: 12px;
          font-weight: 950;

          letter-spacing: 0.14em;
        }

        .mws-process-card:nth-child(even)
          .mws-process-number {
          color:
            var(--mws-orange-light);
        }

        .mws-process-card h3 {
          margin: 0 0 11px;

          font-size: 19px;
        }

        .mws-process-card p {
          margin: 0;

          color:
            var(--mws-muted);

          font-size: 13px;

          line-height: 1.67;
        }

        /* =====================================================
           MAINE FOCUS
        ===================================================== */

        .mws-maine {
          padding:
            90px
            clamp(20px, 5vw, 80px);

          background:
            radial-gradient(
              ellipse at center,
              rgba(8, 185, 244, 0.07),
              transparent 45%
            ),
            #020304;
        }

        .mws-maine-card {
          max-width: 1100px;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            auto 1fr auto;

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
            rgba(8, 185, 244, 0.24);

          border-radius: 20px;

          background:
            radial-gradient(
              circle at 10% 50%,
              rgba(8, 185, 244, 0.12),
              transparent 28%
            ),
            linear-gradient(
              145deg,
              #08131a,
              #04080b
            );
        }

        .mws-maine-icon {
          width: 70px;
          height: 70px;

          display: grid;
          place-items: center;

          border:
            1px solid
            rgba(8, 185, 244, 0.3);

          border-radius: 17px;

          color:
            var(--mws-blue-light);

          background:
            rgba(8, 185, 244, 0.055);
        }

        .mws-maine-icon svg {
          width: 34px;
          height: 34px;
        }

        .mws-maine-copy h2 {
          margin: 0 0 8px;

          font-size:
            clamp(
              29px,
              3vw,
              43px
            );

          letter-spacing: -0.04em;
        }

        .mws-maine-copy p {
          margin: 0;

          color:
            var(--mws-muted);

          font-size: 14px;

          line-height: 1.7;
        }

        /* =====================================================
           FINAL CTA
        ===================================================== */

        .mws-final {
          padding:
            95px
            clamp(20px, 5vw, 80px);

          background:
            radial-gradient(
              ellipse at 20% 50%,
              rgba(8, 185, 244, 0.1),
              transparent 32%
            ),
            radial-gradient(
              ellipse at 80% 50%,
              rgba(255, 121, 0, 0.075),
              transparent 32%
            ),
            #020304;
        }

        .mws-final-card {
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
            rgba(255, 121, 0, 0.24);

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
            rgba(0, 0, 0, 0.34);
        }

        .mws-final-card svg {
          width: 42px;
          height: 42px;

          margin-bottom: 19px;

          color:
            var(--mws-orange);
        }

        .mws-final-card h2 {
          margin: 0;

          font-size:
            clamp(
              38px,
              5vw,
              67px
            );

          letter-spacing: -0.05em;

          line-height: 1.03;
        }

        .mws-final-card p {
          max-width: 730px;

          margin:
            18px auto 0;

          color:
            var(--mws-muted);

          font-size: 15px;

          line-height: 1.75;
        }

        .mws-final-card
          .mws-button-row {
          justify-content: center;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1150px) {
          .mws-problem-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .mws-capability-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .mws-process-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }
        }

        @media (max-width: 900px) {
          .mws-hero-inner,
          .mws-software-grid {
            grid-template-columns: 1fr;
          }

          .mws-hero-inner {
            text-align: center;
          }

          .mws-hero-badge {
            margin-left: auto;
            margin-right: auto;
          }

          .mws-hero-copy > p {
            margin-left: auto;
            margin-right: auto;
          }

          .mws-button-row {
            justify-content: center;
          }

          .mws-hero-visual {
            min-height: 390px;
          }

          .mws-maine-card {
            grid-template-columns:
              auto 1fr;
          }

          .mws-maine-card
            .mws-btn {
            grid-column: 1 / -1;

            width: 100%;
          }
        }

        @media (max-width: 700px) {
          .mws-section {
            padding:
              70px 16px;
          }

          .mws-hero {
            min-height: auto;
          }

          .mws-hero-inner {
            padding:
              70px 16px;
          }

          .mws-hero h1 {
            font-size:
              clamp(
                46px,
                14vw,
                67px
              );
          }

          .mws-core-grid,
          .mws-problem-grid,
          .mws-capability-grid,
          .mws-process-grid {
            grid-template-columns: 1fr;
          }

          .mws-core-list {
            grid-template-columns: 1fr;
          }

          .mws-software-grid {
            gap: 40px;
          }

          .mws-maine-card {
            grid-template-columns: 1fr;

            text-align: center;
          }

          .mws-maine-icon {
            margin: 0 auto;
          }
        }

        @media (max-width: 500px) {
          .mws-hero-visual {
            min-height: 340px;
          }

          .mws-system-card {
            transform: scale(0.88);
          }

          .mws-floating-label {
            font-size: 8px;
          }

          .mws-floating-label.one {
            left: 0;
          }

          .mws-floating-label.two {
            right: 0;
          }

          .mws-flow {
            padding: 18px;
          }
        }
      `}</style>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        className="mws-hero"
        id="services"
      >
        <div className="mws-hero-inner">
          <div className="mws-hero-copy">
            <div className="mws-hero-badge">
              <span />
              Current Commercial Services
            </div>

            <h1>
              <span>
                Technology That
              </span>

              <span className="mws-blue">
                Solves Real
              </span>

              <span className="mws-orange">
                Business Problems.
              </span>
            </h1>

            <p>
              Matthew Web provides website
              development, custom software,
              search and indexing support,
              maintenance, integrations and
              practical digital services for
              businesses that need technology
              that actually works.
            </p>

            <div className="mws-button-row">
              <Link
                href="/contact-us"
                className="mws-btn mws-btn-blue"
              >
                Start a Project
                <ArrowRight />
              </Link>

              <Link
                href="/pricing"
                className="mws-btn mws-btn-dark"
              >
                View Pricing
              </Link>
            </div>
          </div>

          <div
            className="mws-hero-visual"
            aria-hidden="true"
          >
            <div className="mws-floating-label one">
              <MonitorSmartphone />
              RESPONSIVE WEB
            </div>

            <div className="mws-floating-label two">
              <Code2 />
              CUSTOM SOFTWARE
            </div>

            <div className="mws-floating-label three">
              <SearchCheck />
              SEO + INDEXING
            </div>

            <div className="mws-floating-label four">
              <Settings2 />
              BUSINESS TOOLS
            </div>

            <div className="mws-system-card">
              <div className="mws-system-top">
                <div className="mws-system-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <strong>
                  MATTHEW WEB SYSTEM
                </strong>
              </div>

              <div className="mws-system-screen">
                <div className="mws-browser-bar" />

                <div className="mws-system-hero" />

                <div className="mws-system-grid">
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          CORE SERVICES
      ====================================================== */}

      <section
        className="mws-section mws-core-services"
        id="core-services"
      >
        <div className="mws-container">
          <div className="mws-heading center">
            <div className="mws-kicker">
              <Layers3 />
              Core Services
            </div>

            <h2>
              What We Can{" "}
              <span className="mws-blue">
                Build Today
              </span>
            </h2>

            <p>
              These are current Matthew Web
              service areas—not future research
              concepts.
            </p>
          </div>

          <div className="mws-core-grid">
            {coreServices.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  href={service.href}
                  className={`mws-core-card ${service.accent}`}
                  key={service.title}
                >
                  <div className="mws-core-icon">
                    <Icon />
                  </div>

                  <div className="mws-service-status">
                    {service.status}
                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.text}
                  </p>

                  <ul className="mws-core-list">
                    {service.items.map(
                      (item) => (
                        <li key={item}>
                          {item}
                        </li>
                      )
                    )}
                  </ul>

                  <span className="mws-card-link">
                    Explore Service
                    <ArrowRight />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          BUSINESS PROBLEMS
      ====================================================== */}

      <section
        className="mws-section mws-problems"
        id="business-problems"
      >
        <div className="mws-container">
          <div className="mws-heading">
            <div className="mws-kicker orange">
              <Wrench />
              Problems We Help Solve
            </div>

            <h2>
              You Don&apos;t Always Need{" "}
              <span className="mws-orange">
                Everything Rebuilt.
              </span>
            </h2>

            <p>
              Sometimes a business needs an
              entirely new website. Sometimes it
              needs one specific problem solved.
              We look at the actual issue first.
            </p>
          </div>

          <div className="mws-problem-grid">
            {businessProblems.map(
              (problem) => {
                const Icon =
                  problem.icon;

                return (
                  <div
                    className="mws-problem-card"
                    key={problem.title}
                  >
                    <Icon />

                    <h3>
                      {problem.title}
                    </h3>

                    <p>
                      {problem.text}
                    </p>

                    <span className="mws-problem-solution">
                      {problem.solution}
                    </span>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* ======================================================
          CAPABILITIES
      ====================================================== */}

      <section
        className="mws-section mws-capabilities"
        id="capabilities"
      >
        <div className="mws-container">
          <div className="mws-heading center">
            <div className="mws-kicker">
              <Settings2 />
              Website &amp; Business Technology
            </div>

            <h2>
              More Than{" "}
              <span className="mws-blue">
                Page Design
              </span>
            </h2>

            <p>
              A useful business website often
              needs much more than a nice-looking
              homepage.
            </p>
          </div>

          <div className="mws-capability-grid">
            {capabilities.map(
              (capability) => {
                const Icon =
                  capability.icon;

                return (
                  <div
                    className="mws-capability"
                    key={capability.title}
                  >
                    <Icon />

                    <h3>
                      {capability.title}
                    </h3>

                    <p>
                      {capability.text}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* ======================================================
          CUSTOM SOFTWARE
      ====================================================== */}

      <section
        className="mws-section mws-software-feature"
        id="software"
      >
        <div className="mws-container">
          <div className="mws-software-grid">
            <div className="mws-software-copy">
              <div className="mws-kicker orange">
                <Code2 />
                Custom Development
              </div>

              <h2>
                When Ordinary Website Tools{" "}
                <span className="mws-orange">
                  Aren&apos;t Enough
                </span>
              </h2>

              <p>
                Some business problems require
                more than another plugin or
                template. Matthew Web can build
                custom forms, data tools,
                dashboards, integrations and
                website-specific software around
                the workflow the business
                actually needs.
              </p>

              <div className="mws-button-row">
                <Link
                  href="/custom-software"
                  className="mws-btn mws-btn-orange"
                >
                  Custom Software
                  <ArrowRight />
                </Link>
              </div>
            </div>

            <div
              className="mws-flow"
              aria-hidden="true"
            >
              <div className="mws-flow-row">
                <div className="mws-flow-icon">
                  <FileText />
                </div>

                <div>
                  <strong>
                    Customer Input
                  </strong>

                  <span>
                    Forms • Requests • Leads
                  </span>
                </div>

                <div className="mws-flow-arrow">
                  ↓
                </div>
              </div>

              <div className="mws-flow-row">
                <div className="mws-flow-icon">
                  <Database />
                </div>

                <div>
                  <strong>
                    Business Data
                  </strong>

                  <span>
                    Store • Organize • Process
                  </span>
                </div>

                <div className="mws-flow-arrow">
                  ↓
                </div>
              </div>

              <div className="mws-flow-row">
                <div className="mws-flow-icon">
                  <BarChart3 />
                </div>

                <div>
                  <strong>
                    Dashboard
                  </strong>

                  <span>
                    View • Track • Manage
                  </span>
                </div>

                <div className="mws-flow-arrow">
                  ↓
                </div>
              </div>

              <div className="mws-flow-row">
                <div className="mws-flow-icon">
                  <Settings2 />
                </div>

                <div>
                  <strong>
                    Business Action
                  </strong>

                  <span>
                    Follow Up • Automate • Improve
                  </span>
                </div>

                <CheckCircle2
                  className="mws-flow-arrow"
                  style={{
                    width: "18px",
                    height: "18px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          PROCESS
      ====================================================== */}

      <section
        className="mws-section mws-process"
        id="process"
      >
        <div className="mws-container">
          <div className="mws-heading center">
            <div className="mws-kicker">
              <Rocket />
              How We Work
            </div>

            <h2>
              Problem → Build →{" "}
              <span className="mws-blue">
                Support
              </span>
            </h2>

            <p>
              A project should have a clear
              purpose, scope and next step.
            </p>
          </div>

          <div className="mws-process-grid">
            {processSteps.map(
              (step) => (
                <div
                  className="mws-process-card"
                  key={step.number}
                >
                  <div className="mws-process-number">
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
          MAINE SMALL BUSINESS
      ====================================================== */}

      <section
        className="mws-maine"
        id="maine-small-business"
      >
        <div className="mws-maine-card">
          <div className="mws-maine-icon">
            <Globe2 />
          </div>

          <div className="mws-maine-copy">
            <h2>
              Built in Maine.{" "}
              <span className="mws-orange">
                Available Beyond Maine.
              </span>
            </h2>

            <p>
              Local Maine small-business website
              work is an important Matthew Web
              focus, especially businesses with
              missing, outdated, broken,
              non-mobile or incomplete websites.
              We can also work remotely with
              customers outside Maine.
            </p>
          </div>

          <Link
            href="/small-business-websites"
            className="mws-btn mws-btn-blue"
          >
            Small Business Websites
            <ArrowRight />
          </Link>
        </div>
      </section>

      {/* ======================================================
          FINAL CTA
      ====================================================== */}

      <section
        className="mws-final"
        id="start-project"
      >
        <div className="mws-final-card">
          <Sparkles />

          <h2>
            Have a Website or Business Problem{" "}
            <span className="mws-orange">
              That Needs Fixing?
            </span>
          </h2>

          <p>
            Tell Matthew Web what is not working,
            what you want to improve or what you
            need built. We&apos;ll look at the
            problem and determine the most
            practical next step.
          </p>

          <div className="mws-button-row">
            <Link
              href="/contact-us"
              className="mws-btn mws-btn-orange"
            >
              Start a Project
              <ArrowRight />
            </Link>

            <Link
              href="/pricing"
              className="mws-btn mws-btn-dark"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
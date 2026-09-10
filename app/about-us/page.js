"use client";

import Link from "next/link";

import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  CircuitBoard,
  Code2,
  Cpu,
  Gamepad2,
  Globe2,
  GraduationCap,
  Layers3,
  Lightbulb,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/* ============================================================
   FOUNDER IMAGE
============================================================ */

const founderImage = "/adam-matthew-charest.png";

/* ============================================================
   COMPANY DEVELOPMENT
============================================================ */

const companyTimeline = [
  {
    number: "01",
    icon: Globe2,
    title: "Website Foundation",
    text:
      "Matthew Web began by helping businesses establish and improve their online presence through practical website and digital services.",
    accent: "blue",
  },
  {
    number: "02",
    icon: Code2,
    title: "Greater Technology Control",
    text:
      "Client work showed the value of owning more of the technology stack, building custom systems and reducing dependence on restrictive outside platforms.",
    accent: "orange",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Software & Digital Products",
    text:
      "The company expanded into custom software, reusable systems, educational digital products and the Word-first website-builder direction.",
    accent: "blue",
  },
  {
    number: "04",
    icon: Gamepad2,
    title: "Games & Interactive Development",
    text:
      "Game development became another way to build capability in programming, graphics, UI/UX, optimization, physics, testing and digital distribution.",
    accent: "orange",
  },
  {
    number: "05",
    icon: CircuitBoard,
    title: "CPU & FPGA Research",
    text:
      "Custom processor architecture moved from simulation into FPGA implementation, creating a lower-cost physical validation stage before more expensive hardware work.",
    accent: "blue",
  },
  {
    number: "06",
    icon: Cpu,
    title: "Future Computing Systems",
    text:
      "Long-term research may expand into 64-bit processors, GPUs, memory, storage, interconnects and complete computer systems only when the earlier stages have been earned and validated.",
    accent: "orange",
  },
];

/* ============================================================
   PRINCIPLES
============================================================ */

const principles = [
  {
    icon: Users,
    title: "Accessibility",
    text:
      "Keep useful technology understandable and financially accessible where practical.",
  },
  {
    icon: Target,
    title: "Practical Value",
    text:
      "Projects should solve a real customer, business, educational, entertainment or technical problem.",
  },
  {
    icon: Rocket,
    title: "Efficiency",
    text:
      "Use reusable software, automation, AI-assisted workflows and modern development tools to increase output.",
  },
  {
    icon: CheckCircle2,
    title: "Validation",
    text:
      "Test ideas at the least expensive level that can answer the important question before committing more resources.",
  },
  {
    icon: ShieldCheck,
    title: "Ownership",
    text:
      "Progressively increase control of code, architecture, designs, data and intellectual property.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Growth",
    text:
      "Expand staff, facilities, hardware and business structure when the company has evidence that the next step is justified.",
  },
];

/* ============================================================
   CURRENT COMPANY STATUS
============================================================ */

const statusColumns = [
  {
    title: "Available Now",
    accent: "blue",
    icon: BriefcaseBusiness,
    items: [
      "Website creation",
      "Website redesign",
      "Maintenance & support",
      "Domains & deployment",
      "Forms & lead capture",
      "Payment integrations",
      "Analytics",
      "SEO & indexing support",
      "Business functionality",
      "Custom software work",
      "Educational digital products",
    ],
  },
  {
    title: "Active Development",
    accent: "orange",
    icon: Wrench,
    items: [
      "Word-first website builder",
      "Snow Plow Horror / CountyRoad",
      "Expanded software products",
      "Matthew Web technology platform",
      "Educational technology",
    ],
  },
  {
    title: "Active R&D",
    accent: "blue",
    icon: CircuitBoard,
    items: [
      "CPU architecture",
      "Processor simulation",
      "Multicore development",
      "FPGA implementation",
      "Physical FPGA validation",
      "Hardware documentation",
    ],
  },
  {
    title: "Future Research",
    accent: "orange",
    icon: Cpu,
    items: [
      "64-bit processors",
      "Modular CPUs",
      "GPU / accelerators",
      "Memory",
      "Storage",
      "Interconnects",
      "Power & cooling",
      "Complete computer systems",
      "ASICs & chiplets",
    ],
  },
];

/* ============================================================
   EARN THE NEXT STAGE
============================================================ */

const growthStages = [
  {
    number: "1",
    title: "Services",
    text: "Solve real customer problems.",
  },
  {
    number: "2",
    title: "Recurring Revenue",
    text: "Build a stronger commercial foundation.",
  },
  {
    number: "3",
    title: "Software & Products",
    text: "Create reusable technology and intellectual property.",
  },
  {
    number: "4",
    title: "Documented R&D",
    text: "Turn experiments into repeatable company knowledge.",
  },
  {
    number: "5",
    title: "Validated Hardware",
    text: "Prove designs physically before expensive manufacturing.",
  },
  {
    number: "6",
    title: "Commercialization",
    text: "Advance only when technical and business evidence supports it.",
  },
];

/* ============================================================
   FAQ
============================================================ */

const faqs = [
  {
    q: "What is Matthew Web?",
    a:
      "Matthew Web is a founder-led Maine technology business. Website and digital services remain an important commercial foundation while the company expands into software, digital products, games, education and computer technology research.",
  },
  {
    q: "Is Matthew Web still a website company?",
    a:
      "Website development remains one of our main current services, but Matthew Web is growing beyond a traditional web-design business into a broader technology company.",
  },
  {
    q: "Who runs Matthew Web?",
    a:
      "Matthew Web is founder-led by Adam Matthew Charest. Outside specialists, contractors, attorneys or advisers may support specific work when needed, but they should not be confused with permanent company departments or employees.",
  },
  {
    q: "Do you work only with businesses in Maine?",
    a:
      "No. Matthew Web is based in Maine, but website and software work can be completed for customers outside the state through phone, email and online communication.",
  },
  {
    q: "What services are available today?",
    a:
      "Current services include website creation and redesign, maintenance, domain and deployment assistance, forms, payment integrations, analytics, indexing support, business functionality, ongoing support and custom software work.",
  },
  {
    q: "What is the Word-first website builder?",
    a:
      "It is an active development project designed around using Microsoft Word as a familiar authoring surface while Matthew Web handles responsive web rendering, publishing, domains, components, animation and other web technology.",
  },
  {
    q: "Does Matthew Web already manufacture CPUs or computers?",
    a:
      "No. CPU architecture and FPGA implementation are current research and development activities. Advanced processors, GPUs, memory, storage, ASICs, chiplets and complete computer systems remain future stages.",
  },
  {
    q: "What does 'Earn the Next Stage' mean?",
    a:
      "It means Matthew Web does not want to jump into expensive or complex technology before the previous stage has been proven. Revenue, technical validation, customer demand and operating capability should justify each larger step.",
  },
];

/* ============================================================
   PAGE
============================================================ */

export default function AboutUsPage() {
  return (
    <main className="mwa-page">
      <SiteHeader />

      <style jsx global>{`
        :root {
          --mwa-black: #020304;
          --mwa-panel: #081017;
          --mwa-panel-soft: #0b141b;

          --mwa-white: #ffffff;
          --mwa-muted: #aebbc5;

          --mwa-blue: #08b9f4;
          --mwa-blue-light: #38d7ff;

          --mwa-orange: #ff7900;
          --mwa-orange-light: #ffab31;

          --mwa-border:
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
            var(--mwa-black);
        }

        .mwa-page {
          min-height: 100vh;

          overflow: hidden;

          color: white;

          background:
            var(--mwa-black);
        }

        .mwa-container {
          width: 100%;

          max-width: 1380px;

          margin: 0 auto;
        }

        .mwa-section {
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

        .mwa-blue {
          color:
            var(--mwa-blue-light);
        }

        .mwa-orange {
          color:
            var(--mwa-orange);
        }

        /* =====================================================
           COMMON HEADINGS
        ===================================================== */

        .mwa-kicker {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          margin-bottom: 14px;

          color:
            var(--mwa-blue-light);

          font-size: 11px;
          font-weight: 900;

          letter-spacing:
            0.17em;

          text-transform: uppercase;
        }

        .mwa-kicker.orange {
          color:
            var(--mwa-orange-light);
        }

        .mwa-kicker svg {
          width: 18px;
          height: 18px;
        }

        .mwa-heading {
          max-width: 900px;

          margin-bottom: 48px;
        }

        .mwa-heading.center {
          margin-left: auto;
          margin-right: auto;

          text-align: center;
        }

        .mwa-heading h2 {
          margin:
            0 0 18px;

          font-size:
            clamp(
              37px,
              4.7vw,
              68px
            );

          line-height: 1.02;

          letter-spacing:
            -0.05em;
        }

        .mwa-heading p {
          max-width: 780px;

          margin: 0;

          color:
            var(--mwa-muted);

          font-size:
            clamp(
              15px,
              1.35vw,
              19px
            );

          line-height: 1.75;
        }

        .mwa-heading.center p {
          margin-left: auto;
          margin-right: auto;
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .mwa-button-row {
          display: flex;

          flex-wrap: wrap;

          gap: 13px;

          margin-top: 29px;
        }

        .mwa-btn {
          min-height: 53px;

          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 9px;

          padding:
            0 22px;

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

        .mwa-btn svg {
          width: 18px;
          height: 18px;
        }

        .mwa-btn-blue {
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

        .mwa-btn-orange {
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

        .mwa-btn-dark {
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

        .mwa-btn:hover {
          transform:
            translateY(-2px);
        }

        .mwa-btn-blue:hover {
          box-shadow:
            0 0 25px
            rgba(
              8,
              185,
              244,
              0.48
            );
        }

        .mwa-btn-orange:hover {
          box-shadow:
            0 0 25px
            rgba(
              255,
              121,
              0,
              0.48
            );
        }

        .mwa-btn-dark:hover {
          border-color:
            rgba(
              8,
              185,
              244,
              0.4
            );
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwa-hero {
          position: relative;

          min-height: 660px;

          display: flex;

          align-items: center;

          overflow: hidden;

          border-bottom:
            1px solid
            rgba(
              8,
              185,
              244,
              0.15
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

        .mwa-hero::before {
          content: "";

          position: absolute;

          inset: 0;

          opacity: 0.26;

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

        .mwa-hero-inner {
          position: relative;

          z-index: 3;

          display: grid;

          grid-template-columns:
            minmax(
              0,
              1.08fr
            )
            minmax(
              400px,
              0.92fr
            );

          align-items: center;

          gap:
            clamp(
              40px,
              6vw,
              90px
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

        .mwa-hero-badge {
          width: fit-content;

          display: inline-flex;

          align-items: center;

          gap: 8px;

          margin-bottom: 21px;

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

          font-size: 10px;
          font-weight: 900;

          letter-spacing:
            0.14em;

          text-transform: uppercase;
        }

        .mwa-hero-badge span {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background:
            var(--mwa-blue);

          box-shadow:
            0 0 9px
            var(--mwa-blue);
        }

        .mwa-hero h1 {
          max-width: 850px;

          margin: 0;

          font-size:
            clamp(
              52px,
              6.2vw,
              94px
            );

          line-height: 0.97;

          letter-spacing:
            -0.06em;
        }

        .mwa-hero h1 span {
          display: block;
        }

        .mwa-hero-copy > p {
          max-width: 760px;

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

          line-height: 1.72;
        }

        /* =====================================================
           HERO VISUAL
        ===================================================== */

        .mwa-hero-visual {
          position: relative;

          min-height: 440px;

          display: grid;

          place-items: center;
        }

        .mwa-company-core {
          position: relative;

          z-index: 3;

          width: 275px;
          height: 275px;

          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.34
            );

          border-radius: 34px;

          background:
            radial-gradient(
              circle at 35% 20%,
              rgba(
                8,
                185,
                244,
                0.13
              ),
              transparent 35%
            ),
            linear-gradient(
              145deg,
              #0b151c,
              #04080b
            );

          box-shadow:
            0 0 35px
            rgba(
              8,
              185,
              244,
              0.12
            );
        }

        .mwa-core-icon {
          width: 82px;
          height: 82px;

          display: grid;

          place-items: center;

          margin-bottom: 18px;

          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.38
            );

          border-radius: 18px;

          color:
            var(--mwa-orange);

          background:
            rgba(
              255,
              121,
              0,
              0.055
            );

          box-shadow:
            0 0 25px
            rgba(
              255,
              121,
              0,
              0.1
            );
        }

        .mwa-core-icon svg {
          width: 43px;
          height: 43px;
        }

        .mwa-company-core strong {
          font-size: 24px;
        }

        .mwa-company-core p {
          margin:
            8px 0 0;

          color:
            #91a2ad;

          font-size: 11px;

          letter-spacing:
            0.1em;

          text-transform:
            uppercase;
        }

        .mwa-orbit {
          position: absolute;

          border-radius: 50%;

          pointer-events: none;
        }

        .mwa-orbit.one {
          width: 390px;
          height: 390px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.15
            );

          animation:
            mwaSpin
            20s linear
            infinite;
        }

        .mwa-orbit.two {
          width: 330px;
          height: 330px;

          border:
            1px dashed
            rgba(
              255,
              121,
              0,
              0.16
            );

          animation:
            mwaSpin
            14s linear
            infinite reverse;
        }

        @keyframes mwaSpin {
          to {
            transform:
              rotate(360deg);
          }
        }

        .mwa-visual-label {
          position: absolute;

          z-index: 4;

          display: inline-flex;

          align-items: center;

          gap: 7px;

          min-height: 34px;

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

          border-radius: 7px;

          color:
            #dbe6eb;

          background:
            rgba(
              4,
              9,
              13,
              0.92
            );

          font-size: 9px;
          font-weight: 900;

          letter-spacing:
            0.09em;
        }

        .mwa-visual-label svg {
          width: 15px;
          height: 15px;

          color:
            var(--mwa-blue-light);
        }

        .mwa-visual-label.one {
          top: 8%;
          left: 5%;
        }

        .mwa-visual-label.two {
          top: 14%;
          right: 2%;
        }

        .mwa-visual-label.three {
          bottom: 13%;
          left: 0;
        }

        .mwa-visual-label.four {
          bottom: 8%;
          right: 1%;
        }

        /* =====================================================
           STORY
        ===================================================== */

        .mwa-story {
          background:
            radial-gradient(
              ellipse at 80% 45%,
              rgba(
                255,
                121,
                0,
                0.05
              ),
              transparent 30%
            ),
            #020304;
        }

        .mwa-story-grid {
          display: grid;

          grid-template-columns:
            minmax(
              360px,
              0.85fr
            )
            minmax(
              0,
              1.15fr
            );

          gap:
            clamp(
              45px,
              7vw,
              100px
            );

          align-items: center;
        }

        .mwa-story-visual {
          position: relative;

          min-height: 450px;

          display: grid;

          place-items: center;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.18
            );

          border-radius: 22px;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 50% 45%,
              rgba(
                8,
                185,
                244,
                0.11
              ),
              transparent 43%
            ),
            linear-gradient(
              145deg,
              #071017,
              #030609
            );
        }

        .mwa-story-stack {
          width:
            min(
              80%,
              350px
            );

          display: grid;

          gap: 13px;
        }

        .mwa-story-layer {
          position: relative;

          min-height: 68px;

          display: flex;

          align-items: center;

          gap: 14px;

          padding:
            0 18px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.09
            );

          border-radius: 10px;

          background:
            rgba(
              9,
              17,
              23,
              0.94
            );

          box-shadow:
            0 15px 30px
            rgba(
              0,
              0,
              0,
              0.2
            );
        }

        .mwa-story-layer:nth-child(odd) {
          transform:
            translateX(-17px);

          border-color:
            rgba(
              8,
              185,
              244,
              0.2
            );
        }

        .mwa-story-layer:nth-child(even) {
          transform:
            translateX(17px);

          border-color:
            rgba(
              255,
              121,
              0,
              0.2
            );
        }

        .mwa-story-layer svg {
          width: 26px;
          height: 26px;

          color:
            var(--mwa-blue-light);
        }

        .mwa-story-layer:nth-child(even)
          svg {
          color:
            var(--mwa-orange-light);
        }

        .mwa-story-layer strong {
          display: block;

          font-size: 13px;
        }

        .mwa-story-layer span {
          display: block;

          margin-top: 4px;

          color:
            #778893;

          font-size: 10px;
        }

        .mwa-story-copy h2 {
          margin:
            0 0 20px;

          font-size:
            clamp(
              40px,
              4.7vw,
              68px
            );

          line-height: 1.02;

          letter-spacing:
            -0.05em;
        }

        .mwa-story-copy p {
          margin:
            0 0 18px;

          color:
            var(--mwa-muted);

          font-size: 16px;

          line-height: 1.8;
        }

        /* =====================================================
           TIMELINE
        ===================================================== */

        .mwa-timeline-section {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwa-timeline {
          display: grid;

          grid-template-columns:
            repeat(
              3,
              minmax(
                0,
                1fr
              )
            );

          gap: 17px;
        }

        .mwa-timeline-card {
          position: relative;

          min-height: 300px;

          padding: 28px;

          overflow: hidden;

          border:
            1px solid
            var(--mwa-border);

          border-radius: 17px;

          background:
            linear-gradient(
              145deg,
              #0a1218,
              #04080b
            );

          transition:
            transform 0.22s ease,
            border-color 0.22s ease;
        }

        .mwa-timeline-card:hover {
          transform:
            translateY(-5px);
        }

        .mwa-timeline-card.blue:hover {
          border-color:
            rgba(
              8,
              185,
              244,
              0.35
            );
        }

        .mwa-timeline-card.orange:hover {
          border-color:
            rgba(
              255,
              121,
              0,
              0.35
            );
        }

        .mwa-timeline-number {
          position: absolute;

          right: 18px;
          top: 12px;

          color:
            rgba(
              255,
              255,
              255,
              0.035
            );

          font-size: 72px;
          font-weight: 950;

          line-height: 1;
        }

        .mwa-timeline-icon {
          position: relative;

          z-index: 2;

          width: 55px;
          height: 55px;

          display: grid;

          place-items: center;

          margin-bottom: 22px;

          border-radius: 13px;
        }

        .mwa-timeline-card.blue
          .mwa-timeline-icon {
          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.32
            );

          color:
            var(--mwa-blue-light);

          background:
            rgba(
              8,
              185,
              244,
              0.07
            );
        }

        .mwa-timeline-card.orange
          .mwa-timeline-icon {
          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.32
            );

          color:
            var(--mwa-orange-light);

          background:
            rgba(
              255,
              121,
              0,
              0.065
            );
        }

        .mwa-timeline-icon svg {
          width: 28px;
          height: 28px;
        }

        .mwa-timeline-card h3 {
          position: relative;

          z-index: 2;

          margin:
            0 0 12px;

          font-size: 21px;
        }

        .mwa-timeline-card p {
          position: relative;

          z-index: 2;

          margin: 0;

          color:
            var(--mwa-muted);

          font-size: 14px;

          line-height: 1.72;
        }

        /* =====================================================
           MISSION
        ===================================================== */

        .mwa-mission {
          background:
            radial-gradient(
              ellipse at 15% 50%,
              rgba(
                8,
                185,
                244,
                0.06
              ),
              transparent 30%
            ),
            #020304;
        }

        .mwa-mission-grid {
          display: grid;

          grid-template-columns:
            repeat(
              2,
              minmax(
                0,
                1fr
              )
            );

          gap: 18px;

          margin-bottom: 18px;
        }

        .mwa-mission-card {
          padding:
            clamp(
              30px,
              4vw,
              45px
            );

          border:
            1px solid
            var(--mwa-border);

          border-radius: 18px;

          background:
            linear-gradient(
              145deg,
              #0a1218,
              #04080b
            );
        }

        .mwa-mission-card.blue {
          border-color:
            rgba(
              8,
              185,
              244,
              0.2
            );
        }

        .mwa-mission-card.orange {
          border-color:
            rgba(
              255,
              121,
              0,
              0.2
            );
        }

        .mwa-mission-card svg {
          width: 37px;
          height: 37px;

          margin-bottom: 19px;
        }

        .mwa-mission-card.blue svg {
          color:
            var(--mwa-blue-light);
        }

        .mwa-mission-card.orange svg {
          color:
            var(--mwa-orange-light);
        }

        .mwa-mission-card h3 {
          margin:
            0 0 13px;

          font-size:
            clamp(
              27px,
              2.5vw,
              37px
            );

          letter-spacing:
            -0.04em;
        }

        .mwa-mission-card p {
          margin: 0;

          color:
            var(--mwa-muted);

          font-size: 15px;

          line-height: 1.75;
        }

        /* =====================================================
           PRINCIPLES
        ===================================================== */

        .mwa-principles-grid {
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

        .mwa-principle {
          padding: 24px;

          border:
            1px solid
            var(--mwa-border);

          border-radius: 14px;

          background:
            rgba(
              255,
              255,
              255,
              0.018
            );
        }

        .mwa-principle svg {
          width: 27px;
          height: 27px;

          margin-bottom: 16px;

          color:
            var(--mwa-blue-light);
        }

        .mwa-principle:nth-child(even)
          svg {
          color:
            var(--mwa-orange-light);
        }

        .mwa-principle h3 {
          margin:
            0 0 9px;

          font-size: 17px;
        }

        .mwa-principle p {
          margin: 0;

          color:
            var(--mwa-muted);

          font-size: 13px;

          line-height: 1.68;
        }

        /* =====================================================
           FOUNDER
        ===================================================== */

        .mwa-founder {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwa-founder-grid {
          display: grid;

          grid-template-columns:
            minmax(
              0,
              1.15fr
            )
            minmax(
              360px,
              0.85fr
            );

          align-items: center;

          gap:
            clamp(
              45px,
              7vw,
              100px
            );
        }

        .mwa-founder-copy h2 {
          margin:
            0 0 18px;

          font-size:
            clamp(
              42px,
              4.8vw,
              68px
            );

          line-height: 1.02;

          letter-spacing:
            -0.05em;
        }

        .mwa-founder-copy p {
          margin:
            0 0 17px;

          color:
            var(--mwa-muted);

          font-size: 16px;

          line-height: 1.78;
        }

        .mwa-founder-label {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          margin-bottom: 13px;

          color:
            var(--mwa-orange-light);

          font-size: 11px;
          font-weight: 900;

          letter-spacing:
            0.15em;

          text-transform: uppercase;
        }

        .mwa-founder-label svg {
          width: 17px;
          height: 17px;
        }

        .mwa-founder-image-wrap {
          position: relative;

          width:
            min(
              100%,
              430px
            );

          margin-left: auto;
        }

        .mwa-founder-image-wrap::before {
          content: "";

          position: absolute;

          inset: -14px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.25
            );

          border-radius: 24px;

          transform:
            rotate(-3deg);
        }

        .mwa-founder-image-wrap::after {
          content: "";

          position: absolute;

          inset: -7px;

          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.2
            );

          border-radius: 22px;

          transform:
            rotate(2deg);
        }

        .mwa-founder-image {
          position: relative;

          z-index: 2;

          aspect-ratio:
            1 / 1;

          overflow: hidden;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.11
            );

          border-radius: 20px;

          background:
            #091117;

          box-shadow:
            0 30px 70px
            rgba(
              0,
              0,
              0,
              0.42
            );
        }

        .mwa-founder-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center 10%;
        }

        .mwa-founder-name {
          position: absolute;

          z-index: 4;

          left: 20px;
          right: 20px;
          bottom: 20px;

          padding:
            13px 15px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.12
            );

          border-radius: 10px;

          background:
            rgba(
              3,
              7,
              10,
              0.86
            );

          backdrop-filter:
            blur(12px);
        }

        .mwa-founder-name strong {
          display: block;

          font-size: 14px;
        }

        .mwa-founder-name span {
          display: block;

          margin-top: 4px;

          color:
            var(--mwa-blue-light);

          font-size: 9px;
          font-weight: 900;

          letter-spacing:
            0.12em;

          text-transform: uppercase;
        }

        /* =====================================================
           CURRENT VS FUTURE
        ===================================================== */

        .mwa-status-section {
          background:
            #020304;
        }

        .mwa-status-grid {
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

        .mwa-status-card {
          padding: 24px;

          border:
            1px solid
            var(--mwa-border);

          border-radius: 15px;

          background:
            linear-gradient(
              145deg,
              #0a1218,
              #04080b
            );
        }

        .mwa-status-card.blue {
          border-color:
            rgba(
              8,
              185,
              244,
              0.18
            );
        }

        .mwa-status-card.orange {
          border-color:
            rgba(
              255,
              121,
              0,
              0.18
            );
        }

        .mwa-status-top {
          display: flex;

          align-items: center;

          gap: 10px;

          margin-bottom: 19px;
        }

        .mwa-status-top svg {
          width: 25px;
          height: 25px;
        }

        .mwa-status-card.blue
          .mwa-status-top svg {
          color:
            var(--mwa-blue-light);
        }

        .mwa-status-card.orange
          .mwa-status-top svg {
          color:
            var(--mwa-orange-light);
        }

        .mwa-status-card h3 {
          margin: 0;

          font-size: 17px;
        }

        .mwa-status-list {
          display: grid;

          gap: 9px;

          margin: 0;
          padding: 0;

          list-style: none;
        }

        .mwa-status-list li {
          display: flex;

          align-items: flex-start;

          gap: 8px;

          color:
            var(--mwa-muted);

          font-size: 12px;

          line-height: 1.5;
        }

        .mwa-status-list li::before {
          content: "";

          width: 5px;
          height: 5px;

          flex: 0 0 auto;

          margin-top: 6px;

          border-radius: 50%;

          background:
            var(--mwa-blue);

          box-shadow:
            0 0 6px
            rgba(
              8,
              185,
              244,
              0.55
            );
        }

        .mwa-status-card.orange
          .mwa-status-list
          li::before {
          background:
            var(--mwa-orange);

          box-shadow:
            0 0 6px
            rgba(
              255,
              121,
              0,
              0.55
            );
        }

        /* =====================================================
           EARN NEXT STAGE
        ===================================================== */

        .mwa-growth {
          background:
            radial-gradient(
              ellipse at center,
              rgba(
                8,
                185,
                244,
                0.06
              ),
              transparent 45%
            ),
            #020304;
        }

        .mwa-growth-grid {
          display: grid;

          grid-template-columns:
            repeat(
              6,
              minmax(
                0,
                1fr
              )
            );

          gap: 9px;
        }

        .mwa-growth-card {
          position: relative;

          min-height: 200px;

          padding:
            24px 18px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.16
            );

          border-radius: 12px;

          background:
            rgba(
              8,
              185,
              244,
              0.025
            );
        }

        .mwa-growth-card:nth-child(even) {
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
              0.02
            );
        }

        .mwa-growth-number {
          width: 33px;
          height: 33px;

          display: grid;

          place-items: center;

          margin-bottom: 17px;

          border-radius: 50%;

          color:
            #031016;

          background:
            var(--mwa-blue-light);

          font-size: 12px;
          font-weight: 950;

          box-shadow:
            0 0 12px
            rgba(
              8,
              185,
              244,
              0.22
            );
        }

        .mwa-growth-card:nth-child(even)
          .mwa-growth-number {
          color: white;

          background:
            var(--mwa-orange);
        }

        .mwa-growth-card h3 {
          margin:
            0 0 9px;

          font-size: 15px;
        }

        .mwa-growth-card p {
          margin: 0;

          color:
            var(--mwa-muted);

          font-size: 11px;

          line-height: 1.6;
        }

        /* =====================================================
           FAQ
        ===================================================== */

        .mwa-faq {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwa-faq-grid {
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

        .mwa-faq-card {
          padding: 24px;

          border:
            1px solid
            var(--mwa-border);

          border-radius: 14px;

          background:
            linear-gradient(
              145deg,
              #0a1218,
              #04080b
            );
        }

        .mwa-faq-card h3 {
          margin:
            0 0 10px;

          color: white;

          font-size: 16px;
        }

        .mwa-faq-card p {
          margin: 0;

          color:
            var(--mwa-muted);

          font-size: 13px;

          line-height: 1.7;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .mwa-final-cta {
          padding:
            90px
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
                0.11
              ),
              transparent 33%
            ),
            radial-gradient(
              ellipse at 80% 50%,
              rgba(
                255,
                121,
                0,
                0.08
              ),
              transparent 32%
            ),
            #020304;
        }

        .mwa-final-card {
          max-width: 1100px;

          margin: 0 auto;

          padding:
            clamp(
              40px,
              6vw,
              70px
            );

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.25
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

        .mwa-final-card svg {
          width: 43px;
          height: 43px;

          margin-bottom: 19px;

          color:
            var(--mwa-orange);
        }

        .mwa-final-card h2 {
          margin: 0;

          font-size:
            clamp(
              38px,
              5vw,
              68px
            );

          line-height: 1.03;

          letter-spacing:
            -0.05em;
        }

        .mwa-final-card p {
          max-width: 720px;

          margin:
            18px auto 0;

          color:
            var(--mwa-muted);

          font-size: 15px;

          line-height: 1.75;
        }

        .mwa-final-card
          .mwa-button-row {
          justify-content: center;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (
          max-width: 1150px
        ) {
          .mwa-timeline {
            grid-template-columns:
              repeat(
                2,
                1fr
              );
          }

          .mwa-status-grid {
            grid-template-columns:
              repeat(
                2,
                1fr
              );
          }

          .mwa-growth-grid {
            grid-template-columns:
              repeat(
                3,
                1fr
              );
          }
        }

        @media (
          max-width: 900px
        ) {
          .mwa-hero-inner,
          .mwa-story-grid,
          .mwa-founder-grid {
            grid-template-columns:
              1fr;
          }

          .mwa-hero-inner {
            text-align: center;
          }

          .mwa-hero-badge {
            margin-left: auto;
            margin-right: auto;
          }

          .mwa-hero-copy > p {
            margin-left: auto;
            margin-right: auto;
          }

          .mwa-button-row {
            justify-content: center;
          }

          .mwa-founder-image-wrap {
            margin:
              25px auto 0;
          }

          .mwa-principles-grid {
            grid-template-columns:
              repeat(
                2,
                1fr
              );
          }
        }

        @media (
          max-width: 700px
        ) {
          .mwa-section {
            padding:
              70px 16px;
          }

          .mwa-hero {
            min-height: auto;
          }

          .mwa-hero-inner {
            padding:
              70px 16px;
          }

          .mwa-hero h1 {
            font-size:
              clamp(
                46px,
                14vw,
                67px
              );
          }

          .mwa-hero-visual {
            min-height: 340px;

            transform:
              scale(0.82);

            margin:
              -25px 0;
          }

          .mwa-timeline,
          .mwa-mission-grid,
          .mwa-principles-grid,
          .mwa-status-grid,
          .mwa-faq-grid {
            grid-template-columns:
              1fr;
          }

          .mwa-growth-grid {
            grid-template-columns:
              repeat(
                2,
                1fr
              );
          }

          .mwa-founder-copy {
            text-align: left;
          }
        }

        @media (
          max-width: 460px
        ) {
          .mwa-hero-visual {
            transform:
              scale(0.7);

            margin:
              -55px -70px;
          }

          .mwa-growth-grid {
            grid-template-columns:
              1fr;
          }

          .mwa-story-layer:nth-child(odd),
          .mwa-story-layer:nth-child(even) {
            transform: none;
          }

          .mwa-story-visual {
            min-height: 410px;
          }
        }

        @media (
          prefers-reduced-motion:
          reduce
        ) {
          .mwa-orbit {
            animation:
              none !important;
          }
        }
      `}</style>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        className="mwa-hero"
        id="about-us"
      >
        <div className="mwa-hero-inner">
          <div className="mwa-hero-copy">
            <div className="mwa-hero-badge">
              <span />
              Founder-Led • Maine-Based
            </div>

            <h1>
              <span>
                We Started With
              </span>

              <span className="mwa-blue">
                Websites.
              </span>

              <span>
                We&apos;re Building
              </span>

              <span className="mwa-orange">
                Much More.
              </span>
            </h1>

            <p>
              Matthew Web is a Maine-based
              technology company building useful,
              affordable technology while
              progressively developing the
              software, engineering knowledge,
              products and research needed to
              tackle increasingly ambitious
              problems.
            </p>

            <div className="mwa-button-row">
              <Link
                href="/services"
                className="mwa-btn mwa-btn-blue"
              >
                Explore Our Services
                <ArrowRight />
              </Link>

              <a
                href="#our-story"
                className="mwa-btn mwa-btn-dark"
              >
                Our Story
              </a>
            </div>
          </div>

          <div
            className="mwa-hero-visual"
            aria-hidden="true"
          >
            <div className="mwa-orbit one" />

            <div className="mwa-orbit two" />

            <div className="mwa-visual-label one">
              <Globe2 />
              WEB
            </div>

            <div className="mwa-visual-label two">
              <Code2 />
              SOFTWARE
            </div>

            <div className="mwa-visual-label three">
              <Gamepad2 />
              GAMES
            </div>

            <div className="mwa-visual-label four">
              <CircuitBoard />
              HARDWARE R&amp;D
            </div>

            <div className="mwa-company-core">
              <div className="mwa-core-icon">
                <Rocket />
              </div>

              <strong>
                Matthew Web
              </strong>

              <p>
                Building the next stage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          OUR STORY
      ====================================================== */}

      <section
        className="mwa-section mwa-story"
        id="our-story"
      >
        <div className="mwa-container">
          <div className="mwa-story-grid">
            <div className="mwa-story-visual">
              <div className="mwa-story-stack">
                <div className="mwa-story-layer">
                  <Globe2 />

                  <div>
                    <strong>
                      Website Services
                    </strong>

                    <span>
                      Commercial foundation
                    </span>
                  </div>
                </div>

                <div className="mwa-story-layer">
                  <Code2 />

                  <div>
                    <strong>
                      Software &amp; Products
                    </strong>

                    <span>
                      Reusable technology
                    </span>
                  </div>
                </div>

                <div className="mwa-story-layer">
                  <Gamepad2 />

                  <div>
                    <strong>
                      Games &amp; Education
                    </strong>

                    <span>
                      New capabilities
                    </span>
                  </div>
                </div>

                <div className="mwa-story-layer">
                  <CircuitBoard />

                  <div>
                    <strong>
                      CPU &amp; FPGA R&amp;D
                    </strong>

                    <span>
                      Physical validation
                    </span>
                  </div>
                </div>

                <div className="mwa-story-layer">
                  <Cpu />

                  <div>
                    <strong>
                      Future Systems
                    </strong>

                    <span>
                      Earned one stage at a time
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mwa-story-copy">
              <div className="mwa-kicker">
                <BookOpen />
                Our Story
              </div>

              <h2>
                From a Web Business to a{" "}
                <span className="mwa-blue">
                  Growing Technology Company
                </span>
              </h2>

              <p>
                Matthew Web began by helping
                businesses establish and improve
                their online presence. That work
                taught us practical lessons about
                customer needs, pricing,
                maintenance, recurring services
                and the limitations of relying too
                heavily on outside website
                platforms.
              </p>

              <p>
                Those experiences pushed Matthew
                Web toward greater ownership of
                its technology. Custom-coded
                websites led naturally into
                software, internal systems,
                digital products, games,
                educational technology and
                eventually computer architecture
                and FPGA research.
              </p>

              <p>
                The goal is not to become every
                type of technology company
                overnight. Matthew Web grows in
                stages, building the skills,
                revenue, intellectual property and
                evidence needed before advancing
                into more expensive or complex
                technology.
              </p>

              <div className="mwa-button-row">
                <Link
                  href="/contact-us"
                  className="mwa-btn mwa-btn-orange"
                >
                  Start a Project
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          COMPANY EVOLUTION
      ====================================================== */}

      <section
        className="mwa-section mwa-timeline-section"
        id="company-development"
      >
        <div className="mwa-container">
          <div className="mwa-heading center">
            <div className="mwa-kicker orange">
              <TrendingUp />
              Company Development
            </div>

            <h2>
              How Matthew Web{" "}
              <span className="mwa-orange">
                Keeps Growing
              </span>
            </h2>

            <p>
              Each stage is intended to create
              knowledge and capability that can
              support the next.
            </p>
          </div>

          <div className="mwa-timeline">
            {companyTimeline.map(
              (item) => {
                const Icon = item.icon;

                return (
                  <article
                    className={`mwa-timeline-card ${item.accent}`}
                    key={item.number}
                  >
                    <div className="mwa-timeline-number">
                      {item.number}
                    </div>

                    <div className="mwa-timeline-icon">
                      <Icon />
                    </div>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.text}
                    </p>
                  </article>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* ======================================================
          MISSION & VISION
      ====================================================== */}

      <section
        className="mwa-section mwa-mission"
        id="mission"
      >
        <div className="mwa-container">
          <div className="mwa-heading">
            <div className="mwa-kicker">
              <Target />
              Mission &amp; Vision
            </div>

            <h2>
              Useful Technology.{" "}
              <span className="mwa-blue">
                Sustainable Growth.
              </span>
            </h2>
          </div>

          <div className="mwa-mission-grid">
            <div className="mwa-mission-card blue">
              <Lightbulb />

              <h3>
                Our Mission
              </h3>

              <p>
                Create useful, affordable
                technology while progressively
                developing the software, products,
                engineering knowledge,
                intellectual property and
                organization required to build
                more advanced technology over
                time.
              </p>
            </div>

            <div className="mwa-mission-card orange">
              <Rocket />

              <h3>
                Our Vision
              </h3>

              <p>
                Build a diversified technology
                company that owns increasing
                portions of its software and
                computing stack while using
                outside manufacturing and
                specialist partners where doing
                so makes better economic sense.
              </p>
            </div>
          </div>

          <div className="mwa-principles-grid">
            {principles.map(
              (principle) => {
                const Icon =
                  principle.icon;

                return (
                  <div
                    className="mwa-principle"
                    key={principle.title}
                  >
                    <Icon />

                    <h3>
                      {principle.title}
                    </h3>

                    <p>
                      {principle.text}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* ======================================================
          FOUNDER
      ====================================================== */}

      <section
        className="mwa-section mwa-founder"
        id="adam-matthew-charest"
      >
        <div className="mwa-container">
          <div className="mwa-founder-grid">
            <div className="mwa-founder-copy">
              <div className="mwa-founder-label">
                <Users />
                Founder
              </div>

              <h2>
                Adam Matthew{" "}
                <span className="mwa-orange">
                  Charest
                </span>
              </h2>

              <p>
                I started Matthew Web around the
                idea that useful technology
                should not be limited to large
                companies with enormous budgets.
                Small businesses deserve
                professional websites, practical
                software and direct technical
                support too.
              </p>

              <p>
                As Matthew Web grew, my interests
                and the company&apos;s capabilities
                expanded beyond website design.
                Today I work across web
                development, software, games,
                educational technology and
                computer architecture while
                continuing to build the business
                one practical stage at a time.
              </p>

              <p>
                Matthew Web remains founder-led.
                When outside specialists,
                contractors, attorneys or advisers
                are needed, they can support
                specific areas without pretending
                the company already has a large
                staff or departments that do not
                yet exist.
              </p>

              <div className="mwa-button-row">
                <Link
                  href="/contact-us"
                  className="mwa-btn mwa-btn-blue"
                >
                  Contact Matthew Web
                  <ArrowRight />
                </Link>
              </div>
            </div>

            <div className="mwa-founder-image-wrap">
              <div className="mwa-founder-image">
                <img
                  src={founderImage}
                  alt="Adam Matthew Charest"
                />

                <div className="mwa-founder-name">
                  <strong>
                    Adam Matthew Charest
                  </strong>

                  <span>
                    Founder • Matthew Web
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          CURRENT VS FUTURE
      ====================================================== */}

      <section
        className="mwa-section mwa-status-section"
        id="what-we-do"
      >
        <div className="mwa-container">
          <div className="mwa-heading center">
            <div className="mwa-kicker">
              <Layers3 />
              Where We Are Today
            </div>

            <h2>
              Current Work vs.{" "}
              <span className="mwa-orange">
                Future Research
              </span>
            </h2>

            <p>
              We believe in being clear about
              what customers can use today, what
              is being actively developed and
              what remains long-term research.
            </p>
          </div>

          <div className="mwa-status-grid">
            {statusColumns.map(
              (column) => {
                const Icon =
                  column.icon;

                return (
                  <div
                    className={`mwa-status-card ${column.accent}`}
                    key={column.title}
                  >
                    <div className="mwa-status-top">
                      <Icon />

                      <h3>
                        {column.title}
                      </h3>
                    </div>

                    <ul className="mwa-status-list">
                      {column.items.map(
                        (item) => (
                          <li key={item}>
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* ======================================================
          EARN NEXT STAGE
      ====================================================== */}

      <section
        className="mwa-section mwa-growth"
        id="earn-the-next-stage"
      >
        <div className="mwa-container">
          <div className="mwa-heading center">
            <div className="mwa-kicker orange">
              <Rocket />
              Strategic Principle
            </div>

            <h2>
              Earn the{" "}
              <span className="mwa-orange">
                Next Stage
              </span>
            </h2>

            <p>
              Matthew Web&apos;s growth model is
              deliberately staged. We want each
              step to help fund, validate and
              strengthen the next one.
            </p>
          </div>

          <div className="mwa-growth-grid">
            {growthStages.map(
              (stage) => (
                <div
                  className="mwa-growth-card"
                  key={stage.number}
                >
                  <div className="mwa-growth-number">
                    {stage.number}
                  </div>

                  <h3>
                    {stage.title}
                  </h3>

                  <p>
                    {stage.text}
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
        className="mwa-section mwa-faq"
        id="faq"
      >
        <div className="mwa-container">
          <div className="mwa-heading">
            <div className="mwa-kicker">
              <BookOpen />
              About Matthew Web
            </div>

            <h2>
              Frequently Asked{" "}
              <span className="mwa-blue">
                Questions
              </span>
            </h2>

            <p>
              A clearer look at who we are,
              what we currently offer and where
              the company is heading.
            </p>
          </div>

          <div className="mwa-faq-grid">
            {faqs.map(
              (item) => (
                <div
                  className="mwa-faq-card"
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
          CTA
      ====================================================== */}

      <section
        className="mwa-final-cta"
        id="start-project"
      >
        <div className="mwa-final-card">
          <Sparkles />

          <h2>
            Have Something{" "}
            <span className="mwa-orange">
              Worth Building?
            </span>
          </h2>

          <p>
            Whether you need a website, custom
            software, technical help or want to
            discuss another project, Matthew Web
            is interested in practical ideas that
            solve real problems.
          </p>

          <div className="mwa-button-row">
            <Link
              href="/contact-us"
              className="mwa-btn mwa-btn-orange"
            >
              Start a Project
              <ArrowRight />
            </Link>

            <Link
              href="/services"
              className="mwa-btn mwa-btn-dark"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  CircuitBoard,
  Code2,
  Cpu,
  Database,
  FileText,
  Gamepad2,
  Globe2,
  GraduationCap,
  Layers3,
  LockKeyhole,
  MonitorSmartphone,
  Rocket,
  SearchCheck,
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
    "Examples & Technology Projects | Matthew Web",

  description:
    "Explore Matthew Web website work, custom software, educational technology, games, CPU architecture, FPGA research, and active technology projects.",

  alternates: {
    canonical:
      "https://matthew-web.com/examples",
  },

  openGraph: {
    title:
      "Examples & Technology Projects | Matthew Web",

    description:
      "A look at Matthew Web websites, software systems, games, educational products, CPU architecture, FPGA development, and active technology projects.",

    url:
      "https://matthew-web.com/examples",

    siteName:
      "Matthew Web",

    type:
      "website",
  },
};

/* ============================================================
   PROJECTS
============================================================ */

const projects = [
  {
    id: "matthew-web",
    icon: Globe2,
    category:
      "WEB",
    status:
      "LIVE",
    statusType:
      "live",
    title:
      "Matthew Web Main Website",
    text:
      "The current Matthew Web website is itself an active example of our custom web-development direction: responsive layouts, service architecture, search-ready pages, analytics, forms, custom navigation, and a fully coded technology-company design.",
    features: [
      "Custom Next.js website",
      "Responsive design",
      "SEO-ready pages",
      "Lead capture",
      "Analytics",
      "Custom navigation",
    ],
    href:
      "/",
    linkLabel:
      "View Live Site",
    accent:
      "blue",
    visual:
      "website",
  },

  {
    id: "lead-finder",
    icon: Database,
    category:
      "SOFTWARE",
    status:
      "PRIVATE WORKING SYSTEM",
    statusType:
      "private",
    title:
      "Lead Finder & CRM",
    text:
      "A private Matthew Web business system for organizing leads, statuses, notes, follow-up activity, customer information, and outreach workflow. It demonstrates how a public website can connect to more advanced internal business software.",
    features: [
      "Lead records",
      "Status tracking",
      "Follow-up workflow",
      "Notes",
      "Search",
      "Admin tools",
    ],
    href:
      null,
    linkLabel:
      null,
    accent:
      "orange",
    visual:
      "dashboard",
  },

  {
    id: "tankcpu-education",
    icon: GraduationCap,
    category:
      "EDUCATION",
    status:
      "PUBLISHED",
    statusType:
      "published",
    title:
      "TankCPU Education",
    text:
      "An educational CPU/computer project designed to make processor concepts more approachable through a real architecture project and digital learning material.",
    features: [
      "CPU education",
      "Computer architecture",
      "Digital product",
      "Technical learning",
      "Processor concepts",
      "Hands-on direction",
    ],
    href:
      null,
    linkLabel:
      null,
    accent:
      "blue",
    visual:
      "education",
  },

  {
    id: "snow-plow-horror",
    icon: Gamepad2,
    category:
      "GAME DEVELOPMENT",
    status:
      "ACTIVE DEVELOPMENT",
    statusType:
      "development",
    title:
      "Snow Plow Horror / CountyRoad",
    text:
      "A Maine-inspired snow-plow driving horror game currently in active development. The project combines vehicle systems, environmental design, optimization, weather, sound, gameplay systems, and interactive world building.",
    features: [
      "Unity development",
      "Vehicle systems",
      "Environment design",
      "Performance work",
      "Weather",
      "Gameplay systems",
    ],
    href:
      null,
    linkLabel:
      null,
    accent:
      "orange",
    visual:
      "game",
  },

  {
    id: "word-builder",
    icon: Code2,
    category:
      "SOFTWARE PLATFORM",
    status:
      "ACTIVE DEVELOPMENT",
    statusType:
      "development",
    title:
      "Word-First Website Builder",
    text:
      "A website-builder direction centered around using Microsoft Word as a familiar visual authoring surface while Matthew Web handles web rendering, responsive design, publishing, domains, and future business integrations.",
    features: [
      "Word-first authoring",
      "Web rendering",
      "Responsive output",
      "Custom domains",
      "Publishing",
      "Future Excel integration",
    ],
    href:
      null,
    linkLabel:
      null,
    accent:
      "blue",
    visual:
      "builder",
  },

  {
    id: "cpu-fpga",
    icon: CircuitBoard,
    category:
      "HARDWARE R&D",
    status:
      "ACTIVE R&D",
    statusType:
      "research",
    title:
      "Custom CPU & FPGA Development",
    text:
      "Matthew Web is developing custom processor architecture through simulation, multicore design, FPGA implementation, and staged physical validation before attempting more expensive future hardware stages.",
    features: [
      "CPU architecture",
      "Multicore design",
      "Simulation",
      "FPGA implementation",
      "Hardware validation",
      "Technical documentation",
    ],
    href:
      null,
    linkLabel:
      null,
    accent:
      "orange",
    visual:
      "cpu",
  },

  {
    id: "free-game-hub",
    icon: Gamepad2,
    category:
      "GAMES",
    status:
      "PROJECT",
    statusType:
      "project",
    title:
      "Free Game Hub Project",
    text:
      "A Matthew Web game and interactive-content project intended to bring playable experiences into the broader company website and digital-product ecosystem.",
    features: [
      "Games",
      "Interactive content",
      "Web integration",
      "Digital distribution",
      "Project expansion",
      "Matthew Web ecosystem",
    ],
    href:
      "/free-game-hub-project",
    linkLabel:
      "View Project",
    accent:
      "blue",
    visual:
      "gamehub",
  },
];

/* ============================================================
   CAPABILITY AREAS
============================================================ */

const capabilityAreas = [
  {
    icon:
      MonitorSmartphone,
    title:
      "Web",
    text:
      "Responsive websites, redesigns, business pages, forms, search structure, and custom functionality.",
  },

  {
    icon:
      Code2,
    title:
      "Software",
    text:
      "Dashboards, internal tools, lead systems, workflows, data handling, and business-specific software.",
  },

  {
    icon:
      Gamepad2,
    title:
      "Games",
    text:
      "Interactive projects involving programming, UI, environment design, performance, controls, and gameplay systems.",
  },

  {
    icon:
      GraduationCap,
    title:
      "Education",
    text:
      "Technical learning products built around real computer and processor concepts.",
  },

  {
    icon:
      CircuitBoard,
    title:
      "Hardware R&D",
    text:
      "CPU architecture, simulation, multicore work, FPGA implementation, and staged physical testing.",
  },
];

/* ============================================================
   STRUCTURED DATA
============================================================ */

const collectionSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "CollectionPage",

  name:
    "Matthew Web Examples and Technology Projects",

  url:
    "https://matthew-web.com/examples",

  description:
    "Examples of Matthew Web website development, software systems, educational technology, games, and computer hardware research.",
};

/* ============================================================
   PAGE
============================================================ */

export default function ExamplesPage() {
  return (
    <main className="mwex-page">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              collectionSchema
            ),
        }}
      />

      <style>{`
        :root {
          --mwex-black:
            #020304;

          --mwex-panel:
            #091117;

          --mwex-muted:
            #aebbc5;

          --mwex-blue:
            #08b9f4;

          --mwex-blue-light:
            #38d7ff;

          --mwex-orange:
            #ff7900;

          --mwex-orange-light:
            #ffab31;

          --mwex-green:
            #35e07e;

          --mwex-border:
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
              --mwex-black
            );
        }

        .mwex-page {
          min-height:
            100vh;

          overflow:
            hidden;

          color:
            white;

          background:
            var(
              --mwex-black
            );
        }

        .mwex-container {
          width:
            100%;

          max-width:
            1380px;

          margin:
            0 auto;
        }

        .mwex-section {
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

        .mwex-blue {
          color:
            var(
              --mwex-blue-light
            );
        }

        .mwex-orange {
          color:
            var(
              --mwex-orange
            );
        }

        /* =====================================================
           COMMON
        ===================================================== */

        .mwex-kicker {
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
              --mwex-blue-light
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

        .mwex-kicker.orange {
          color:
            var(
              --mwex-orange-light
            );
        }

        .mwex-kicker svg {
          width:
            18px;

          height:
            18px;
        }

        .mwex-heading {
          max-width:
            900px;

          margin-bottom:
            48px;
        }

        .mwex-heading.center {
          margin-left:
            auto;

          margin-right:
            auto;

          text-align:
            center;
        }

        .mwex-heading h2 {
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

        .mwex-heading p {
          max-width:
            800px;

          margin:
            0;

          color:
            var(
              --mwex-muted
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

        .mwex-heading.center p {
          margin-left:
            auto;

          margin-right:
            auto;
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .mwex-button-row {
          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            13px;

          margin-top:
            29px;
        }

        .mwex-btn {
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

        .mwex-btn svg {
          width:
            18px;

          height:
            18px;
        }

        .mwex-btn-blue {
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

        .mwex-btn-orange {
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

        .mwex-btn-dark {
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

        .mwex-btn:hover {
          transform:
            translateY(
              -2px
            );
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwex-hero {
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

        .mwex-hero::before {
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
              ellipse at
              center,
              black,
              transparent
              80%
            );
        }

        .mwex-hero-inner {
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

        .mwex-hero-badge {
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

        .mwex-hero-badge
          span {
          width:
            7px;

          height:
            7px;

          border-radius:
            50%;

          background:
            var(
              --mwex-green
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

        .mwex-hero h1 {
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

        .mwex-hero h1 span {
          display:
            block;
        }

        .mwex-hero-copy
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
           HERO PROJECT MATRIX
        ===================================================== */

        .mwex-matrix-stage {
          position:
            relative;

          min-height:
            470px;

          display:
            grid;

          place-items:
            center;
        }

        .mwex-matrix {
          width:
            min(
              100%,
              500px
            );

          display:
            grid;

          grid-template-columns:
            repeat(
              2,
              1fr
            );

          gap:
            12px;

          padding:
            24px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.29
            );

          border-radius:
            22px;

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

        .mwex-matrix-card {
          min-height:
            145px;

          display:
            flex;

          flex-direction:
            column;

          justify-content:
            space-between;

          padding:
            17px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.08
            );

          border-radius:
            11px;

          background:
            #081117;
        }

        .mwex-matrix-card
          svg {
          width:
            28px;

          height:
            28px;

          color:
            var(
              --mwex-blue-light
            );
        }

        .mwex-matrix-card:nth-child(even)
          svg {
          color:
            var(
              --mwex-orange-light
            );
        }

        .mwex-matrix-card
          strong {
          display:
            block;

          font-size:
            13px;
        }

        .mwex-matrix-card
          span {
          display:
            block;

          margin-top:
            5px;

          color:
            #71828d;

          font-size:
            9px;

          font-weight:
            800;

          letter-spacing:
            0.08em;
        }

        /* =====================================================
           STATUS GUIDE
        ===================================================== */

        .mwex-status-guide {
          padding:
            35px
            clamp(
              20px,
              5vw,
              80px
            );

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

        .mwex-status-row {
          max-width:
            1380px;

          margin:
            0 auto;

          display:
            flex;

          flex-wrap:
            wrap;

          align-items:
            center;

          justify-content:
            center;

          gap:
            12px 22px;
        }

        .mwex-status-key {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            7px;

          color:
            #91a2ac;

          font-size:
            10px;

          font-weight:
            800;

          letter-spacing:
            0.07em;

          text-transform:
            uppercase;
        }

        .mwex-status-dot {
          width:
            7px;

          height:
            7px;

          border-radius:
            50%;
        }

        .mwex-status-dot.live {
          background:
            #35e07e;

          box-shadow:
            0 0 7px
            rgba(
              53,
              224,
              126,
              0.65
            );
        }

        .mwex-status-dot.published {
          background:
            var(
              --mwex-blue
            );
        }

        .mwex-status-dot.development {
          background:
            var(
              --mwex-orange
            );
        }

        .mwex-status-dot.research {
          background:
            #b76cff;
        }

        .mwex-status-dot.private {
          background:
            #d9e2e7;
        }

        /* =====================================================
           PROJECTS
        ===================================================== */

        .mwex-projects {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwex-project-grid {
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
            18px;
        }

        .mwex-project-card {
          position:
            relative;

          overflow:
            hidden;

          min-height:
            640px;

          border:
            1px solid
            var(
              --mwex-border
            );

          border-radius:
            20px;

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
              0.22s ease,
            box-shadow
              0.22s ease;
        }

        .mwex-project-card:hover {
          transform:
            translateY(
              -5px
            );
        }

        .mwex-project-card.blue:hover {
          border-color:
            rgba(
              8,
              185,
              244,
              0.34
            );
        }

        .mwex-project-card.orange:hover {
          border-color:
            rgba(
              255,
              121,
              0,
              0.34
            );
        }

        .mwex-project-visual {
          position:
            relative;

          min-height:
            290px;

          display:
            grid;

          place-items:
            center;

          overflow:
            hidden;

          border-bottom:
            1px solid
            rgba(
              255,
              255,
              255,
              0.07
            );

          background:
            radial-gradient(
              circle at
              50% 50%,
              rgba(
                8,
                185,
                244,
                0.09
              ),
              transparent
              48%
            ),
            #050b0f;
        }

        .mwex-project-card.orange
          .mwex-project-visual {
          background:
            radial-gradient(
              circle at
              50% 50%,
              rgba(
                255,
                121,
                0,
                0.07
              ),
              transparent
              48%
            ),
            #050b0f;
        }

        .mwex-project-category {
          position:
            absolute;

          z-index:
            5;

          left:
            18px;

          top:
            18px;

          padding:
            7px 10px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.09
            );

          border-radius:
            999px;

          color:
            #c9d5db;

          background:
            rgba(
              3,
              7,
              10,
              0.88
            );

          font-size:
            8px;

          font-weight:
            900;

          letter-spacing:
            0.12em;
        }

        .mwex-project-icon {
          width:
            110px;

          height:
            110px;

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
              0.26
            );

          border-radius:
            26px;

          color:
            var(
              --mwex-blue-light
            );

          background:
            rgba(
              8,
              185,
              244,
              0.05
            );

          box-shadow:
            0 0 35px
            rgba(
              8,
              185,
              244,
              0.08
            );
        }

        .mwex-project-card.orange
          .mwex-project-icon {
          border-color:
            rgba(
              255,
              121,
              0,
              0.27
            );

          color:
            var(
              --mwex-orange-light
            );

          background:
            rgba(
              255,
              121,
              0,
              0.045
            );

          box-shadow:
            0 0 35px
            rgba(
              255,
              121,
              0,
              0.07
            );
        }

        .mwex-project-icon
          svg {
          width:
            55px;

          height:
            55px;
        }

        .mwex-visual-orbit {
          position:
            absolute;

          width:
            210px;

          height:
            210px;

          border:
            1px dashed
            rgba(
              8,
              185,
              244,
              0.13
            );

          border-radius:
            50%;

          animation:
            mwexSpin
            22s linear
            infinite;
        }

        .mwex-project-card.orange
          .mwex-visual-orbit {
          border-color:
            rgba(
              255,
              121,
              0,
              0.13
            );

          animation-direction:
            reverse;
        }

        @keyframes mwexSpin {
          to {
            transform:
              rotate(
                360deg
              );
          }
        }

        .mwex-orbit-dot {
          position:
            absolute;

          left:
            50%;

          top:
            -5px;

          width:
            9px;

          height:
            9px;

          transform:
            translateX(
              -50%
            );

          border-radius:
            50%;

          background:
            var(
              --mwex-blue
            );

          box-shadow:
            0 0 9px
            var(
              --mwex-blue
            );
        }

        .mwex-project-card.orange
          .mwex-orbit-dot {
          background:
            var(
              --mwex-orange
            );

          box-shadow:
            0 0 9px
            var(
              --mwex-orange
            );
        }

        .mwex-project-body {
          padding:
            28px;
        }

        .mwex-project-status {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            7px;

          margin-bottom:
            12px;

          color:
            #8c9da7;

          font-size:
            9px;

          font-weight:
            900;

          letter-spacing:
            0.12em;

          text-transform:
            uppercase;
        }

        .mwex-project-status::before {
          content:
            "";

          width:
            7px;

          height:
            7px;

          border-radius:
            50%;

          background:
            var(
              --mwex-blue
            );
        }

        .mwex-project-status.live::before {
          background:
            var(
              --mwex-green
            );

          box-shadow:
            0 0 7px
            rgba(
              53,
              224,
              126,
              0.6
            );
        }

        .mwex-project-status.private::before {
          background:
            #d9e2e7;
        }

        .mwex-project-status.published::before {
          background:
            var(
              --mwex-blue
            );
        }

        .mwex-project-status.development::before {
          background:
            var(
              --mwex-orange
            );
        }

        .mwex-project-status.research::before {
          background:
            #b76cff;
        }

        .mwex-project-status.project::before {
          background:
            var(
              --mwex-blue-light
            );
        }

        .mwex-project-body
          h3 {
          margin:
            0 0 12px;

          font-size:
            clamp(
              25px,
              2.4vw,
              34px
            );

          letter-spacing:
            -0.035em;
        }

        .mwex-project-body
          > p {
          margin:
            0;

          color:
            var(
              --mwex-muted
            );

          font-size:
            14px;

          line-height:
            1.73;
        }

        .mwex-project-features {
          display:
            grid;

          grid-template-columns:
            repeat(
              2,
              1fr
            );

          gap:
            8px 12px;

          margin:
            22px 0 0;

          padding:
            0;

          list-style:
            none;
        }

        .mwex-project-features
          li {
          display:
            flex;

          align-items:
            center;

          gap:
            7px;

          color:
            #c6d2d8;

          font-size:
            11px;
        }

        .mwex-project-features
          li::before {
          content:
            "";

          width:
            5px;

          height:
            5px;

          flex:
            0 0 auto;

          border-radius:
            50%;

          background:
            var(
              --mwex-blue
            );
        }

        .mwex-project-card.orange
          .mwex-project-features
          li::before {
          background:
            var(
              --mwex-orange
            );
        }

        .mwex-project-link {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            8px;

          margin-top:
            23px;

          color:
            white;

          text-decoration:
            none;

          font-size:
            12px;

          font-weight:
            850;
        }

        .mwex-project-link
          svg {
          width:
            16px;

          height:
            16px;
        }

        /* =====================================================
           CAPABILITY STRIP
        ===================================================== */

        .mwex-capabilities {
          background:
            radial-gradient(
              ellipse at
              50% 50%,
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

        .mwex-capability-grid {
          display:
            grid;

          grid-template-columns:
            repeat(
              5,
              minmax(
                0,
                1fr
              )
            );

          gap:
            12px;
        }

        .mwex-capability-card {
          min-height:
            210px;

          padding:
            22px;

          border:
            1px solid
            var(
              --mwex-border
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

        .mwex-capability-card
          svg {
          width:
            28px;

          height:
            28px;

          margin-bottom:
            17px;

          color:
            var(
              --mwex-blue-light
            );
        }

        .mwex-capability-card:nth-child(even)
          svg {
          color:
            var(
              --mwex-orange-light
            );
        }

        .mwex-capability-card
          h3 {
          margin:
            0 0 9px;

          font-size:
            17px;
        }

        .mwex-capability-card
          p {
          margin:
            0;

          color:
            var(
              --mwex-muted
            );

          font-size:
            12px;

          line-height:
            1.65;
        }

        /* =====================================================
           HONEST PORTFOLIO
        ===================================================== */

        .mwex-honesty {
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

        .mwex-honesty-card {
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
              27%
            ),
            linear-gradient(
              145deg,
              #08131a,
              #04080b
            );
        }

        .mwex-honesty-icon {
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
            var(
              --mwex-blue-light
            );

          background:
            rgba(
              8,
              185,
              244,
              0.055
            );
        }

        .mwex-honesty-icon
          svg {
          width:
            35px;

          height:
            35px;
        }

        .mwex-honesty-copy
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

        .mwex-honesty-copy
          p {
          margin:
            0;

          color:
            var(
              --mwex-muted
            );

          font-size:
            14px;

          line-height:
            1.72;
        }

        /* =====================================================
           FINAL CTA
        ===================================================== */

        .mwex-final {
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

        .mwex-final-card {
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

        .mwex-final-card
          > svg {
          width:
            43px;

          height:
            43px;

          margin-bottom:
            19px;

          color:
            var(
              --mwex-orange
            );
        }

        .mwex-final-card
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

        .mwex-final-card
          p {
          max-width:
            730px;

          margin:
            18px auto 0;

          color:
            var(
              --mwex-muted
            );

          font-size:
            15px;

          line-height:
            1.75;
        }

        .mwex-final-card
          .mwex-button-row {
          justify-content:
            center;
        }

        .mwex-related {
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

        .mwex-related
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

        .mwex-related
          a:hover {
          color:
            var(
              --mwex-blue-light
            );
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (
          max-width:
          1100px
        ) {
          .mwex-capability-grid {
            grid-template-columns:
              repeat(
                3,
                1fr
              );
          }
        }

        @media (
          max-width:
          900px
        ) {
          .mwex-hero-inner {
            grid-template-columns:
              1fr;
          }

          .mwex-hero-inner {
            text-align:
              center;
          }

          .mwex-hero-badge {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwex-hero-copy
            > p {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwex-button-row {
            justify-content:
              center;
          }

          .mwex-matrix-stage {
            min-height:
              400px;
          }

          .mwex-project-grid {
            grid-template-columns:
              1fr;
          }
        }

        @media (
          max-width:
          700px
        ) {
          .mwex-section {
            padding:
              70px 16px;
          }

          .mwex-hero {
            min-height:
              auto;
          }

          .mwex-hero-inner {
            padding:
              70px 16px;
          }

          .mwex-hero h1 {
            font-size:
              clamp(
                46px,
                14vw,
                67px
              );
          }

          .mwex-capability-grid {
            grid-template-columns:
              1fr;
          }

          .mwex-honesty-card {
            grid-template-columns:
              1fr;

            text-align:
              center;
          }

          .mwex-honesty-icon {
            margin:
              0 auto;
          }

          .mwex-project-card {
            min-height:
              0;
          }
        }

        @media (
          max-width:
          500px
        ) {
          .mwex-matrix {
            grid-template-columns:
              1fr;
          }

          .mwex-matrix-stage {
            min-height:
              600px;
          }

          .mwex-project-features {
            grid-template-columns:
              1fr;
          }
        }

        @media (
          prefers-reduced-motion:
          reduce
        ) {
          .mwex-visual-orbit {
            animation:
              none !important;
          }
        }
      `}</style>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        className="mwex-hero"
        id="examples"
      >
        <div className="mwex-hero-inner">
          <div className="mwex-hero-copy">
            <div className="mwex-hero-badge">
              <span />
              Matthew Web Work &amp; Projects
            </div>

            <h1>
              <span>
                We Don&apos;t Just
              </span>

              <span className="mwex-blue">
                Talk About
              </span>

              <span>
                Technology.
              </span>

              <span className="mwex-orange">
                We Build It.
              </span>
            </h1>

            <p>
              Explore real Matthew Web work
              across websites, business software,
              games, education, and computer
              hardware research—with each project
              clearly marked by its current
              status.
            </p>

            <div className="mwex-button-row">
              <a
                href="#project-gallery"
                className="mwex-btn mwex-btn-blue"
              >
                Explore Projects
                <ArrowRight />
              </a>

              <Link
                href="/contact-us"
                className="mwex-btn mwex-btn-dark"
              >
                Start a Project
              </Link>
            </div>
          </div>

          <div
            className="mwex-matrix-stage"
            aria-hidden="true"
          >
            <div className="mwex-matrix">
              <div className="mwex-matrix-card">
                <Globe2 />

                <div>
                  <strong>
                    WEB
                  </strong>

                  <span>
                    LIVE SERVICES
                  </span>
                </div>
              </div>

              <div className="mwex-matrix-card">
                <Code2 />

                <div>
                  <strong>
                    SOFTWARE
                  </strong>

                  <span>
                    BUSINESS SYSTEMS
                  </span>
                </div>
              </div>

              <div className="mwex-matrix-card">
                <Gamepad2 />

                <div>
                  <strong>
                    GAMES
                  </strong>

                  <span>
                    ACTIVE DEVELOPMENT
                  </span>
                </div>
              </div>

              <div className="mwex-matrix-card">
                <CircuitBoard />

                <div>
                  <strong>
                    HARDWARE
                  </strong>

                  <span>
                    ACTIVE R&amp;D
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          STATUS GUIDE
      ====================================================== */}

      <section className="mwex-status-guide">
        <div className="mwex-status-row">
          <div className="mwex-status-key">
            <span className="mwex-status-dot live" />
            Live
          </div>

          <div className="mwex-status-key">
            <span className="mwex-status-dot published" />
            Published
          </div>

          <div className="mwex-status-key">
            <span className="mwex-status-dot private" />
            Private Working System
          </div>

          <div className="mwex-status-key">
            <span className="mwex-status-dot development" />
            Active Development
          </div>

          <div className="mwex-status-key">
            <span className="mwex-status-dot research" />
            Active R&amp;D
          </div>
        </div>
      </section>

      {/* ======================================================
          PROJECTS
      ====================================================== */}

      <section
        className="mwex-section mwex-projects"
        id="project-gallery"
      >
        <div className="mwex-container">
          <div className="mwex-heading">
            <div className="mwex-kicker">
              <Layers3 />
              Selected Work
            </div>

            <h2>
              What Matthew Web Is{" "}
              <span className="mwex-blue">
                Actually Building
              </span>
            </h2>

            <p>
              This portfolio includes commercial
              work, internal systems, published
              products, active development, and
              research. The status label shows
              where each project currently
              stands.
            </p>
          </div>

          <div className="mwex-project-grid">
            {projects.map((project) => {
              const Icon =
                project.icon;

              return (
                <article
                  className={`mwex-project-card ${project.accent}`}
                  id={project.id}
                  key={project.id}
                >
                  <div className="mwex-project-visual">
                    <div className="mwex-project-category">
                      {project.category}
                    </div>

                    <div className="mwex-visual-orbit">
                      <div className="mwex-orbit-dot" />
                    </div>

                    <div className="mwex-project-icon">
                      <Icon />
                    </div>
                  </div>

                  <div className="mwex-project-body">
                    <div
                      className={`mwex-project-status ${project.statusType}`}
                    >
                      {project.status}
                    </div>

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.text}
                    </p>

                    <ul className="mwex-project-features">
                      {project.features.map(
                        (feature) => (
                          <li key={feature}>
                            {feature}
                          </li>
                        )
                      )}
                    </ul>

                    {project.href ? (
                      <Link
                        href={project.href}
                        className="mwex-project-link"
                      >
                        {project.linkLabel}
                        <ArrowRight />
                      </Link>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          CAPABILITIES
      ====================================================== */}

      <section
        className="mwex-section mwex-capabilities"
        id="capabilities"
      >
        <div className="mwex-container">
          <div className="mwex-heading center">
            <div className="mwex-kicker orange">
              <Rocket />
              Capability Areas
            </div>

            <h2>
              One Company.{" "}
              <span className="mwex-orange">
                Multiple Technologies.
              </span>
            </h2>

            <p>
              The projects above are different,
              but they build overlapping skills
              in software, systems, design,
              testing, optimization, and
              engineering.
            </p>
          </div>

          <div className="mwex-capability-grid">
            {capabilityAreas.map(
              (area) => {
                const Icon =
                  area.icon;

                return (
                  <div
                    className="mwex-capability-card"
                    key={area.title}
                  >
                    <Icon />

                    <h3>
                      {area.title}
                    </h3>

                    <p>
                      {area.text}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* ======================================================
          HONEST STATUS
      ====================================================== */}

      <section
        className="mwex-honesty"
        id="project-status"
      >
        <div className="mwex-honesty-card">
          <div className="mwex-honesty-icon">
            <CheckCircle2 />
          </div>

          <div className="mwex-honesty-copy">
            <h2>
              Finished Work and Future Work{" "}
              <span className="mwex-blue">
                Are Not the Same Thing.
              </span>
            </h2>

            <p>
              Matthew Web labels projects by
              their real stage. A live website is
              shown as live. A published product
              is shown as published. A game under
              development remains development,
              and CPU/FPGA work remains research
              and validation rather than being
              presented as a finished commercial
              processor.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          FINAL CTA
      ====================================================== */}

      <section
        className="mwex-final"
        id="start-project"
      >
        <div className="mwex-final-card">
          <Sparkles />

          <h2>
            Want to Add Your Project to{" "}
            <span className="mwex-orange">
              What We Build Next?
            </span>
          </h2>

          <p>
            Whether you need a business website,
            custom software, a new feature, or
            another practical technology project,
            tell Matthew Web what problem you are
            trying to solve.
          </p>

          <div className="mwex-button-row">
            <Link
              href="/contact-us"
              className="mwex-btn mwex-btn-orange"
            >
              Start a Project
              <ArrowRight />
            </Link>

            <Link
              href="/services"
              className="mwex-btn mwex-btn-dark"
            >
              View Services
            </Link>
          </div>

          <nav className="mwex-related">
            <Link href="/website-design">
              Website Design
            </Link>

            <Link href="/custom-software">
              Custom Software
            </Link>

            <Link href="/free-game-hub-project">
              Game Projects
            </Link>

            <Link href="/blog">
              Blog
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
import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Code2,
  Gamepad2,
  Gauge,
  Globe2,
  GraduationCap,
  Layers3,
  MonitorSmartphone,
  MousePointer2,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Trophy,
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
    "Free Game Hub Project | Matthew Web",

  description:
    "The Matthew Web Free Game Hub Project is a planned web-based gaming and interactive-content hub for free games, experiments, educational projects, and future playable technology.",

  alternates: {
    canonical:
      "https://matthew-web.com/free-game-hub-project",
  },

  openGraph: {
    title:
      "Free Game Hub Project | Matthew Web",

    description:
      "Explore Matthew Web's plan for a growing free-game and interactive-content hub featuring browser games, original projects, educational experiences, and future web-based entertainment.",

    url:
      "https://matthew-web.com/free-game-hub-project",

    siteName:
      "Matthew Web",

    type:
      "website",
  },
};

/* ============================================================
   HUB FEATURES
============================================================ */

const hubFeatures = [
  {
    icon:
      Gamepad2,

    title:
      "Free Browser Games",

    text:
      "Simple playable experiences that can run directly in a web browser when the technology and game format support it.",

    accent:
      "blue",
  },

  {
    icon:
      Sparkles,

    title:
      "Original Matthew Web Projects",

    text:
      "The hub can become a home for smaller original games, experiments, prototypes, and interactive ideas created by Matthew Web.",

    accent:
      "orange",
  },

  {
    icon:
      GraduationCap,

    title:
      "Educational Games",

    text:
      "Interactive projects can also be used to teach technology, computers, programming, business concepts, and other subjects.",

    accent:
      "blue",
  },

  {
    icon:
      Search,

    title:
      "Categories & Search",

    text:
      "As the collection grows, visitors can browse by category and use search tools to find the type of experience they want.",

    accent:
      "orange",
  },

  {
    icon:
      MonitorSmartphone,

    title:
      "Responsive Interface",

    text:
      "The surrounding hub should remain easy to navigate across desktop, tablet, and mobile devices even when individual games have different requirements.",

    accent:
      "blue",
  },

  {
    icon:
      BarChart3,

    title:
      "Project Analytics",

    text:
      "Usage data can help Matthew Web understand which projects people use, where the experience needs improvement, and what should be developed next.",

    accent:
      "orange",
  },
];

/* ============================================================
   PROJECT VALUE
============================================================ */

const projectValue = [
  {
    icon:
      Code2,

    title:
      "Programming",

    text:
      "Game logic, controls, menus, scoring, state management, data handling, and interactive systems.",
  },

  {
    icon:
      MousePointer2,

    title:
      "User Experience",

    text:
      "Navigation, controls, feedback, accessibility, instructions, and making interactive content understandable.",
  },

  {
    icon:
      Gauge,

    title:
      "Performance",

    text:
      "Testing load times, rendering, asset size, responsiveness, and how interactive experiences behave across devices.",
  },

  {
    icon:
      Globe2,

    title:
      "Web Technology",

    text:
      "Publishing, routing, metadata, hosting, analytics, search structure, and integration with the wider Matthew Web website.",
  },

  {
    icon:
      Users,

    title:
      "Audience Learning",

    text:
      "Observing what people actually use can provide better information than guessing what visitors might enjoy.",
  },

  {
    icon:
      Layers3,

    title:
      "Reusable Technology",

    text:
      "Game menus, accounts, search systems, data structures, analytics, and UI concepts can contribute to other software projects.",
  },
];

/* ============================================================
   DEVELOPMENT PHASES
============================================================ */

const developmentPhases = [
  {
    number:
      "01",

    title:
      "Build the Hub Foundation",

    text:
      "Create the primary game-hub interface, project explanation, navigation, categories, and structure needed for playable content.",
  },

  {
    number:
      "02",

    title:
      "Add Initial Playable Content",

    text:
      "Start with a manageable number of games or interactive projects instead of filling the hub with low-value content.",
  },

  {
    number:
      "03",

    title:
      "Create Individual Game Pages",

    text:
      "Each game can have its own title, description, instructions, category, related links, technical information, and play area when appropriate.",
  },

  {
    number:
      "04",

    title:
      "Improve Discovery",

    text:
      "Add search, categories, featured projects, recently updated games, and related-content navigation as the library grows.",
  },

  {
    number:
      "05",

    title:
      "Measure & Improve",

    text:
      "Review performance and usage data to learn what people play, where visitors leave, and which areas deserve additional development.",
  },

  {
    number:
      "06",

    title:
      "Expand the Ecosystem",

    text:
      "Add more original projects, educational experiences, account features, competitions, achievements, monetization, or other capabilities when justified.",
  },
];

/* ============================================================
   FAQ
============================================================ */

const faqs = [
  {
    q:
      "Is the Free Game Hub fully live yet?",

    a:
      "No. The Free Game Hub is a developing Matthew Web project. This page explains the planned direction while the larger game and technology ecosystem continues to be built.",
  },

  {
    q:
      "Will games on the hub be free?",

    a:
      "The goal of this hub is to provide free playable content. Matthew Web may still develop separate paid standalone games outside the Free Game Hub.",
  },

  {
    q:
      "Is Snow Plow Horror part of the Free Game Hub?",

    a:
      "Snow Plow Horror / CountyRoad is a separate larger game-development project. The Free Game Hub is better suited to smaller web-based games, experiments, educational projects, and other interactive content.",
  },

  {
    q:
      "Will Matthew Web make original games for the hub?",

    a:
      "That is part of the intended direction. The hub can provide a place for smaller original games and experiments alongside other properly authorized playable content.",
  },

  {
    q:
      "Can third-party games be included?",

    a:
      "Potentially, but Matthew Web should only publish or embed third-party games when the appropriate permission, license, or provider terms allow it.",
  },

  {
    q:
      "Will there be advertising?",

    a:
      "Advertising may become one funding source later. Any advertising would depend on the selected provider, approval requirements, project traffic, and whether the placement can be added without damaging the user experience.",
  },

  {
    q:
      "Could the hub include educational games?",

    a:
      "Yes. Educational and technical interactive content fits the broader Matthew Web direction and could eventually connect with computer architecture, programming, business, or other learning projects.",
  },

  {
    q:
      "Why does Matthew Web build games?",

    a:
      "Game development combines programming, user interfaces, optimization, simulation, data, graphics, testing, and system design. Those skills can also strengthen software and broader technology development.",
  },
];

/* ============================================================
   STRUCTURED DATA
============================================================ */

const projectSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "CreativeWork",

  name:
    "Matthew Web Free Game Hub Project",

  url:
    "https://matthew-web.com/free-game-hub-project",

  creator: {
    "@type":
      "Organization",

    name:
      "Matthew Web",

    url:
      "https://matthew-web.com",
  },

  description:
    "A developing Matthew Web project for free web-based games, original interactive projects, educational content, and future browser entertainment.",
};

/* ============================================================
   PAGE
============================================================ */

export default function FreeGameHubProjectPage() {
  return (
    <main className="mwgame-page">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              projectSchema
            ),
        }}
      />

      <style>{`
        :root {
          --mwg-black:
            #020304;

          --mwg-panel:
            #091117;

          --mwg-muted:
            #aebbc5;

          --mwg-blue:
            #08b9f4;

          --mwg-blue-light:
            #38d7ff;

          --mwg-orange:
            #ff7900;

          --mwg-orange-light:
            #ffab31;

          --mwg-green:
            #35e07e;

          --mwg-purple:
            #b36cff;

          --mwg-border:
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
              --mwg-black
            );
        }

        .mwgame-page {
          min-height:
            100vh;

          overflow:
            hidden;

          color:
            #ffffff;

          background:
            var(
              --mwg-black
            );
        }

        .mwg-container {
          width:
            100%;

          max-width:
            1380px;

          margin:
            0 auto;
        }

        .mwg-section {
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

        .mwg-blue {
          color:
            var(
              --mwg-blue-light
            );
        }

        .mwg-orange {
          color:
            var(
              --mwg-orange
            );
        }

        /* =====================================================
           COMMON
        ===================================================== */

        .mwg-kicker {
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
              --mwg-blue-light
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

        .mwg-kicker.orange {
          color:
            var(
              --mwg-orange-light
            );
        }

        .mwg-kicker svg {
          width:
            18px;

          height:
            18px;
        }

        .mwg-heading {
          max-width:
            900px;

          margin-bottom:
            48px;
        }

        .mwg-heading.center {
          margin-left:
            auto;

          margin-right:
            auto;

          text-align:
            center;
        }

        .mwg-heading h2 {
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

        .mwg-heading p {
          max-width:
            800px;

          margin:
            0;

          color:
            var(
              --mwg-muted
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

        .mwg-heading.center p {
          margin-left:
            auto;

          margin-right:
            auto;
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .mwg-button-row {
          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            13px;

          margin-top:
            29px;
        }

        .mwg-btn {
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

        .mwg-btn svg {
          width:
            18px;

          height:
            18px;
        }

        .mwg-btn-blue {
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

        .mwg-btn-orange {
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

        .mwg-btn-dark {
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

        .mwg-btn:hover {
          transform:
            translateY(
              -2px
            );
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwg-hero {
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
                0.17
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
                0.09
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

        .mwg-hero::before {
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

        .mwg-hero-inner {
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

        .mwg-hero-badge {
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
              255,
              121,
              0,
              0.3
            );

          border-radius:
            999px;

          color:
            #ffe0c2;

          background:
            rgba(
              255,
              121,
              0,
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

        .mwg-hero-badge span {
          width:
            7px;

          height:
            7px;

          border-radius:
            50%;

          background:
            var(
              --mwg-orange
            );

          box-shadow:
            0 0 9px
            rgba(
              255,
              121,
              0,
              0.8
            );
        }

        .mwg-hero h1 {
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

        .mwg-hero h1 span {
          display:
            block;
        }

        .mwg-hero-copy
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
           GAME HUB VISUAL
        ===================================================== */

        .mwg-hub-stage {
          position:
            relative;

          min-height:
            470px;

          display:
            grid;

          place-items:
            center;
        }

        .mwg-hub-screen {
          width:
            min(
              100%,
              510px
            );

          padding:
            24px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.3
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

        .mwg-screen-top {
          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          margin-bottom:
            20px;
        }

        .mwg-screen-top
          strong {
          color:
            #81929d;

          font-size:
            9px;

          letter-spacing:
            0.13em;
        }

        .mwg-screen-status {
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

        .mwg-screen-status::before {
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
              --mwg-orange
            );

          box-shadow:
            0 0 7px
            rgba(
              255,
              121,
              0,
              0.7
            );
        }

        .mwg-feature-game {
          min-height:
            160px;

          display:
            grid;

          grid-template-columns:
            95px 1fr;

          align-items:
            center;

          gap:
            20px;

          padding:
            20px;

          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.18
            );

          border-radius:
            12px;

          background:
            radial-gradient(
              circle at
              20% 50%,
              rgba(
                255,
                121,
                0,
                0.13
              ),
              transparent
              38%
            ),
            #081117;
        }

        .mwg-feature-icon {
          width:
            88px;

          height:
            88px;

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
            20px;

          color:
            var(
              --mwg-orange-light
            );

          background:
            rgba(
              255,
              121,
              0,
              0.05
            );

          box-shadow:
            0 0 25px
            rgba(
              255,
              121,
              0,
              0.07
            );
        }

        .mwg-feature-icon
          svg {
          width:
            43px;

          height:
            43px;
        }

        .mwg-feature-copy
          span {
          color:
            var(
              --mwg-orange-light
            );

          font-size:
            8px;

          font-weight:
            900;

          letter-spacing:
            0.11em;
        }

        .mwg-feature-copy
          strong {
          display:
            block;

          margin-top:
            7px;

          font-size:
            19px;
        }

        .mwg-feature-copy
          p {
          margin:
            7px 0 0;

          color:
            #71838d;

          font-size:
            9px;

          line-height:
            1.6;
        }

        .mwg-game-grid {
          display:
            grid;

          grid-template-columns:
            repeat(
              3,
              1fr
            );

          gap:
            10px;

          margin-top:
            12px;
        }

        .mwg-game-tile {
          min-height:
            92px;

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
              0.13
            );

          border-radius:
            9px;

          color:
            var(
              --mwg-blue-light
            );

          background:
            rgba(
              8,
              185,
              244,
              0.025
            );
        }

        .mwg-game-tile:nth-child(even) {
          border-color:
            rgba(
              255,
              121,
              0,
              0.13
            );

          color:
            var(
              --mwg-orange-light
            );

          background:
            rgba(
              255,
              121,
              0,
              0.02
            );
        }

        .mwg-game-tile
          svg {
          width:
            28px;

          height:
            28px;
        }

        /* =====================================================
           PROJECT PURPOSE
        ===================================================== */

        .mwg-purpose {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwg-purpose-grid {
          display:
            grid;

          grid-template-columns:
            minmax(
              0,
              1fr
            )
            minmax(
              380px,
              0.8fr
            );

          align-items:
            center;

          gap:
            clamp(
              45px,
              7vw,
              95px
            );
        }

        .mwg-purpose-copy
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

        .mwg-purpose-copy
          p {
          margin:
            0 0 17px;

          color:
            var(
              --mwg-muted
            );

          font-size:
            16px;

          line-height:
            1.8;
        }

        .mwg-purpose-panel {
          padding:
            30px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.22
            );

          border-radius:
            19px;

          background:
            radial-gradient(
              circle at
              50% 15%,
              rgba(
                8,
                185,
                244,
                0.08
              ),
              transparent
              38%
            ),
            #071015;
        }

        .mwg-purpose-panel
          svg {
          width:
            46px;

          height:
            46px;

          margin-bottom:
            20px;

          color:
            var(
              --mwg-blue-light
            );
        }

        .mwg-purpose-panel
          h3 {
          margin:
            0 0 12px;

          font-size:
            25px;

          letter-spacing:
            -0.03em;
        }

        .mwg-purpose-panel
          p {
          margin:
            0;

          color:
            var(
              --mwg-muted
            );

          font-size:
            13px;

          line-height:
            1.72;
        }

        /* =====================================================
           FEATURES
        ===================================================== */

        .mwg-features {
          background:
            #020304;
        }

        .mwg-feature-grid {
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

        .mwg-feature-card {
          min-height:
            265px;

          padding:
            25px;

          border:
            1px solid
            var(
              --mwg-border
            );

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

        .mwg-feature-card:hover {
          transform:
            translateY(
              -4px
            );
        }

        .mwg-feature-card.blue:hover {
          border-color:
            rgba(
              8,
              185,
              244,
              0.32
            );
        }

        .mwg-feature-card.orange:hover {
          border-color:
            rgba(
              255,
              121,
              0,
              0.32
            );
        }

        .mwg-card-icon {
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

        .mwg-feature-card.blue
          .mwg-card-icon {
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
              --mwg-blue-light
            );

          background:
            rgba(
              8,
              185,
              244,
              0.055
            );
        }

        .mwg-feature-card.orange
          .mwg-card-icon {
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
              --mwg-orange-light
            );

          background:
            rgba(
              255,
              121,
              0,
              0.05
            );
        }

        .mwg-card-icon
          svg {
          width:
            27px;

          height:
            27px;
        }

        .mwg-feature-card
          h3 {
          margin:
            0 0 10px;

          font-size:
            18px;
        }

        .mwg-feature-card
          p {
          margin:
            0;

          color:
            var(
              --mwg-muted
            );

          font-size:
            13px;

          line-height:
            1.68;
        }

        /* =====================================================
           BIG GAME SEPARATION
        ===================================================== */

        .mwg-big-game {
          background:
            radial-gradient(
              ellipse at
              85% 50%,
              rgba(
                255,
                121,
                0,
                0.06
              ),
              transparent
              32%
            ),
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwg-big-game-card {
          display:
            grid;

          grid-template-columns:
            minmax(
              300px,
              0.8fr
            )
            minmax(
              0,
              1.2fr
            );

          overflow:
            hidden;

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
            #071015;
        }

        .mwg-big-game-visual {
          min-height:
            390px;

          display:
            grid;

          place-items:
            center;

          border-right:
            1px solid
            rgba(
              255,
              255,
              255,
              0.07
            );

          background:
            radial-gradient(
              circle at center,
              rgba(
                255,
                121,
                0,
                0.12
              ),
              transparent
              48%
            ),
            #050a0d;
        }

        .mwg-big-game-icon {
          width:
            135px;

          height:
            135px;

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
            30px;

          color:
            var(
              --mwg-orange-light
            );

          background:
            rgba(
              255,
              121,
              0,
              0.05
            );

          box-shadow:
            0 0 45px
            rgba(
              255,
              121,
              0,
              0.09
            );
        }

        .mwg-big-game-icon
          svg {
          width:
            65px;

          height:
            65px;
        }

        .mwg-big-game-copy {
          display:
            flex;

          flex-direction:
            column;

          justify-content:
            center;

          padding:
            clamp(
              35px,
              5vw,
              60px
            );
        }

        .mwg-status-label {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            7px;

          width:
            fit-content;

          margin-bottom:
            15px;

          color:
            var(
              --mwg-orange-light
            );

          font-size:
            9px;

          font-weight:
            900;

          letter-spacing:
            0.12em;
        }

        .mwg-status-label::before {
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
              --mwg-orange
            );

          box-shadow:
            0 0 7px
            rgba(
              255,
              121,
              0,
              0.6
            );
        }

        .mwg-big-game-copy
          h2 {
          margin:
            0;

          font-size:
            clamp(
              34px,
              4vw,
              55px
            );

          line-height:
            1.04;

          letter-spacing:
            -0.045em;
        }

        .mwg-big-game-copy
          p {
          margin:
            18px 0 0;

          color:
            var(
              --mwg-muted
            );

          font-size:
            14px;

          line-height:
            1.75;
        }

        /* =====================================================
           VALUE
        ===================================================== */

        .mwg-value {
          background:
            #020304;
        }

        .mwg-value-grid {
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

        .mwg-value-card {
          min-height:
            235px;

          padding:
            23px;

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

        .mwg-value-card:nth-child(even) {
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

        .mwg-value-card
          svg {
          width:
            29px;

          height:
            29px;

          margin-bottom:
            17px;

          color:
            var(
              --mwg-blue-light
            );
        }

        .mwg-value-card:nth-child(even)
          svg {
          color:
            var(
              --mwg-orange-light
            );
        }

        .mwg-value-card
          h3 {
          margin:
            0 0 9px;

          font-size:
            17px;
        }

        .mwg-value-card
          p {
          margin:
            0;

          color:
            var(
              --mwg-muted
            );

          font-size:
            12px;

          line-height:
            1.68;
        }

        /* =====================================================
           DEVELOPMENT
        ===================================================== */

        .mwg-development {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwg-development-grid {
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

        .mwg-development-card {
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

        .mwg-development-card:nth-child(even) {
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

        .mwg-development-number {
          margin-bottom:
            17px;

          color:
            var(
              --mwg-blue-light
            );

          font-size:
            11px;

          font-weight:
            950;

          letter-spacing:
            0.14em;
        }

        .mwg-development-card:nth-child(even)
          .mwg-development-number {
          color:
            var(
              --mwg-orange-light
            );
        }

        .mwg-development-card
          h3 {
          margin:
            0 0 10px;

          font-size:
            19px;
        }

        .mwg-development-card
          p {
          margin:
            0;

          color:
            var(
              --mwg-muted
            );

          font-size:
            13px;

          line-height:
            1.68;
        }

        /* =====================================================
           MONETIZATION
        ===================================================== */

        .mwg-monetization {
          padding:
            85px
            clamp(
              20px,
              5vw,
              80px
            );

          background:
            #020304;
        }

        .mwg-monetization-card {
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
              28%
            ),
            linear-gradient(
              145deg,
              #08131a,
              #04080b
            );
        }

        .mwg-monetization-icon {
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
              --mwg-blue-light
            );

          background:
            rgba(
              8,
              185,
              244,
              0.055
            );
        }

        .mwg-monetization-icon
          svg {
          width:
            35px;

          height:
            35px;
        }

        .mwg-monetization-copy
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

        .mwg-monetization-copy
          p {
          margin:
            0;

          color:
            var(
              --mwg-muted
            );

          font-size:
            14px;

          line-height:
            1.72;
        }

        /* =====================================================
           RIGHTS / TRUST
        ===================================================== */

        .mwg-trust {
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

        .mwg-trust-grid {
          max-width:
            1120px;

          margin:
            0 auto;

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

        .mwg-trust-card {
          padding:
            27px;

          border:
            1px solid
            var(
              --mwg-border
            );

          border-radius:
            15px;

          background:
            #071015;
        }

        .mwg-trust-card
          svg {
          width:
            30px;

          height:
            30px;

          margin-bottom:
            17px;

          color:
            var(
              --mwg-blue-light
            );
        }

        .mwg-trust-card:nth-child(even)
          svg {
          color:
            var(
              --mwg-orange-light
            );
        }

        .mwg-trust-card
          h3 {
          margin:
            0 0 10px;

          font-size:
            19px;
        }

        .mwg-trust-card
          p {
          margin:
            0;

          color:
            var(
              --mwg-muted
            );

          font-size:
            13px;

          line-height:
            1.7;
        }

        /* =====================================================
           FAQ
        ===================================================== */

        .mwg-faq {
          background:
            #020304;
        }

        .mwg-faq-grid {
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

        .mwg-faq-card {
          padding:
            24px;

          border:
            1px solid
            var(
              --mwg-border
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

        .mwg-faq-card
          h3 {
          margin:
            0 0 10px;

          font-size:
            16px;
        }

        .mwg-faq-card
          p {
          margin:
            0;

          color:
            var(
              --mwg-muted
            );

          font-size:
            13px;

          line-height:
            1.7;
        }

        /* =====================================================
           FINAL
        ===================================================== */

        .mwg-final {
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

        .mwg-final-card {
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

        .mwg-final-card
          > svg {
          width:
            43px;

          height:
            43px;

          margin-bottom:
            19px;

          color:
            var(
              --mwg-orange
            );
        }

        .mwg-final-card
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

        .mwg-final-card
          p {
          max-width:
            740px;

          margin:
            18px auto 0;

          color:
            var(
              --mwg-muted
            );

          font-size:
            15px;

          line-height:
            1.75;
        }

        .mwg-final-card
          .mwg-button-row {
          justify-content:
            center;
        }

        .mwg-related {
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

        .mwg-related
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

        .mwg-related
          a:hover {
          color:
            var(
              --mwg-blue-light
            );
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (
          max-width:
          1100px
        ) {
          .mwg-feature-grid,
          .mwg-value-grid,
          .mwg-development-grid {
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
          .mwg-hero-inner,
          .mwg-purpose-grid,
          .mwg-big-game-card {
            grid-template-columns:
              1fr;
          }

          .mwg-hero-inner {
            text-align:
              center;
          }

          .mwg-hero-badge {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwg-hero-copy
            > p {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwg-button-row {
            justify-content:
              center;
          }

          .mwg-big-game-visual {
            min-height:
              300px;

            border-right:
              0;

            border-bottom:
              1px solid
              rgba(
                255,
                255,
                255,
                0.07
              );
          }
        }

        @media (
          max-width:
          700px
        ) {
          .mwg-section {
            padding:
              70px 16px;
          }

          .mwg-hero {
            min-height:
              auto;
          }

          .mwg-hero-inner {
            padding:
              70px 16px;
          }

          .mwg-hero h1 {
            font-size:
              clamp(
                46px,
                14vw,
                67px
              );
          }

          .mwg-feature-grid,
          .mwg-value-grid,
          .mwg-development-grid,
          .mwg-faq-grid,
          .mwg-trust-grid {
            grid-template-columns:
              1fr;
          }

          .mwg-monetization-card {
            grid-template-columns:
              1fr;

            text-align:
              center;
          }

          .mwg-monetization-icon {
            margin:
              0 auto;
          }
        }

        @media (
          max-width:
          500px
        ) {
          .mwg-hub-stage {
            min-height:
              420px;

            transform:
              scale(
                0.9
              );

            margin:
              -10px -20px;
          }

          .mwg-feature-game {
            grid-template-columns:
              1fr;

            text-align:
              center;
          }

          .mwg-feature-icon {
            margin:
              0 auto;
          }

          .mwg-game-grid {
            grid-template-columns:
              repeat(
                2,
                1fr
              );
          }
        }
      `}</style>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        className="mwg-hero"
        id="free-game-hub"
      >
        <div className="mwg-hero-inner">
          <div className="mwg-hero-copy">
            <div className="mwg-hero-badge">
              <span />
              Project • Planned Development
            </div>

            <h1>
              <span>
                Free Games.
              </span>

              <span className="mwg-blue">
                Real Development.
              </span>

              <span>
                One Growing
              </span>

              <span className="mwg-orange">
                Game Hub.
              </span>
            </h1>

            <p>
              The Matthew Web Free Game Hub is a
              developing web project for free
              playable games, interactive
              experiments, educational projects,
              and future original content.
            </p>

            <div className="mwg-button-row">
              <a
                href="#project-plan"
                className="mwg-btn mwg-btn-blue"
              >
                Explore the Project
                <ArrowRight />
              </a>

              <Link
                href="/examples"
                className="mwg-btn mwg-btn-dark"
              >
                View All Projects
              </Link>
            </div>
          </div>

          <div
            className="mwg-hub-stage"
            aria-hidden="true"
          >
            <div className="mwg-hub-screen">
              <div className="mwg-screen-top">
                <strong>
                  MATTHEW WEB // GAME HUB
                </strong>

                <div className="mwg-screen-status">
                  PROJECT
                </div>
              </div>

              <div className="mwg-feature-game">
                <div className="mwg-feature-icon">
                  <Gamepad2 />
                </div>

                <div className="mwg-feature-copy">
                  <span>
                    FEATURED GAME
                  </span>

                  <strong>
                    PLAY • LEARN • EXPLORE
                  </strong>

                  <p>
                    Original games, experiments,
                    educational projects, and
                    interactive content.
                  </p>
                </div>
              </div>

              <div className="mwg-game-grid">
                <div className="mwg-game-tile">
                  <Trophy />
                </div>

                <div className="mwg-game-tile">
                  <Gamepad2 />
                </div>

                <div className="mwg-game-tile">
                  <GraduationCap />
                </div>

                <div className="mwg-game-tile">
                  <Rocket />
                </div>

                <div className="mwg-game-tile">
                  <Code2 />
                </div>

                <div className="mwg-game-tile">
                  <Sparkles />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          PURPOSE
      ====================================================== */}

      <section
        className="mwg-section mwg-purpose"
        id="project-plan"
      >
        <div className="mwg-container">
          <div className="mwg-purpose-grid">
            <div className="mwg-purpose-copy">
              <div className="mwg-kicker">
                <Rocket />
                Why Build It?
              </div>

              <h2>
                A Place for{" "}
                <span className="mwg-blue">
                  Interactive Technology
                </span>
              </h2>

              <p>
                Games are now part of the broader
                Matthew Web technology direction.
                They combine software, interface
                design, graphics, simulation,
                performance, controls, data, and
                user experience in one type of
                project.
              </p>

              <p>
                The Free Game Hub gives smaller
                projects and web-based
                experiments a place to live
                inside the Matthew Web ecosystem
                instead of requiring every game
                idea to become a large standalone
                product.
              </p>

              <p>
                It can start small and grow only
                as useful playable content is
                actually created or properly
                licensed for publication.
              </p>
            </div>

            <div className="mwg-purpose-panel">
              <Gamepad2 />

              <h3>
                Content First
              </h3>

              <p>
                The hub should exist because
                there are games and interactive
                experiences worth using—not
                because there is empty page space
                available for advertisements.
                Revenue can support useful
                content later instead of becoming
                the content itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          HUB FEATURES
      ====================================================== */}

      <section
        className="mwg-section mwg-features"
        id="planned-features"
      >
        <div className="mwg-container">
          <div className="mwg-heading center">
            <div className="mwg-kicker orange">
              <Layers3 />
              Planned Hub
            </div>

            <h2>
              What the Hub Can{" "}
              <span className="mwg-orange">
                Grow Into
              </span>
            </h2>

            <p>
              The first version does not need
              every feature. These are the
              capabilities the project can
              progressively build toward.
            </p>
          </div>

          <div className="mwg-feature-grid">
            {hubFeatures.map(
              (item) => {
                const Icon =
                  item.icon;

                return (
                  <div
                    className={`mwg-feature-card ${item.accent}`}
                    key={item.title}
                  >
                    <div className="mwg-card-icon">
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
          SNOW PLOW DISTINCTION
      ====================================================== */}

      <section
        className="mwg-section mwg-big-game"
        id="standalone-games"
      >
        <div className="mwg-container">
          <div className="mwg-big-game-card">
            <div className="mwg-big-game-visual">
              <div className="mwg-big-game-icon">
                <Gamepad2 />
              </div>
            </div>

            <div className="mwg-big-game-copy">
              <div className="mwg-status-label">
                ACTIVE GAME DEVELOPMENT
              </div>

              <h2>
                The Free Game Hub Is{" "}
                <span className="mwg-orange">
                  Not Every Matthew Web Game.
                </span>
              </h2>

              <p>
                Larger standalone projects such
                as Snow Plow Horror / CountyRoad
                have their own development path.
                That project includes vehicle
                systems, environments, weather,
                optimization, gameplay, sound,
                story development, and other
                systems that go well beyond a
                small browser game.
              </p>

              <p>
                The Free Game Hub instead gives
                Matthew Web another path:
                smaller web-playable games,
                technical experiments,
                educational experiences, and
                projects that make sense inside
                the main website.
              </p>

              <div className="mwg-button-row">
                <Link
                  href="/examples#snow-plow-horror"
                  className="mwg-btn mwg-btn-orange"
                >
                  View Game Development
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          TECHNOLOGY VALUE
      ====================================================== */}

      <section
        className="mwg-section mwg-value"
        id="development-value"
      >
        <div className="mwg-container">
          <div className="mwg-heading">
            <div className="mwg-kicker">
              <Code2 />
              Technology Development
            </div>

            <h2>
              Games Build Skills That{" "}
              <span className="mwg-blue">
                Transfer Elsewhere
              </span>
            </h2>

            <p>
              The technical work needed for games
              overlaps with software, web
              development, education, data,
              simulation, and future computing
              projects.
            </p>
          </div>

          <div className="mwg-value-grid">
            {projectValue.map(
              (item) => {
                const Icon =
                  item.icon;

                return (
                  <div
                    className="mwg-value-card"
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
          DEVELOPMENT PHASES
      ====================================================== */}

      <section
        className="mwg-section mwg-development"
        id="development-roadmap"
      >
        <div className="mwg-container">
          <div className="mwg-heading center">
            <div className="mwg-kicker orange">
              <Wrench />
              Development Roadmap
            </div>

            <h2>
              Build It in{" "}
              <span className="mwg-orange">
                Useful Stages
              </span>
            </h2>

            <p>
              The project can follow the same
              Matthew Web principle used
              elsewhere: build the foundation,
              test it, prove value, and then earn
              the next stage.
            </p>
          </div>

          <div className="mwg-development-grid">
            {developmentPhases.map(
              (phase) => (
                <div
                  className="mwg-development-card"
                  key={phase.number}
                >
                  <div className="mwg-development-number">
                    PHASE {phase.number}
                  </div>

                  <h3>
                    {phase.title}
                  </h3>

                  <p>
                    {phase.text}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ======================================================
          MONETIZATION
      ====================================================== */}

      <section
        className="mwg-monetization"
        id="monetization"
      >
        <div className="mwg-monetization-card">
          <div className="mwg-monetization-icon">
            <BarChart3 />
          </div>

          <div className="mwg-monetization-copy">
            <h2>
              Free to Play Does Not Mean{" "}
              <span className="mwg-blue">
                Free to Operate.
              </span>
            </h2>

            <p>
              Hosting, development, maintenance,
              analytics, content creation, and
              future expansion all have costs.
              The hub may eventually use
              selective advertising, support
              contributions, sponsorships, or
              other appropriate revenue sources.
              Monetization should support the
              project without overwhelming the
              games or making the experience
              difficult to use.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          RIGHTS & EXPERIENCE
      ====================================================== */}

      <section
        className="mwg-trust"
        id="game-standards"
      >
        <div className="mwg-trust-grid">
          <div className="mwg-trust-card">
            <ShieldCheck />

            <h3>
              Use Authorized Content
            </h3>

            <p>
              Original Matthew Web games can be
              published directly. Third-party
              games should only be included when
              the applicable owner, license, or
              provider terms permit publication
              or embedding.
            </p>
          </div>

          <div className="mwg-trust-card">
            <MonitorSmartphone />

            <h3>
              Protect the Player Experience
            </h3>

            <p>
              Navigation, advertising, analytics,
              and other surrounding website
              systems should support the playable
              content rather than cover it,
              interrupt it unnecessarily, or make
              the hub confusing to use.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          FAQ
      ====================================================== */}

      <section
        className="mwg-section mwg-faq"
        id="game-hub-faq"
      >
        <div className="mwg-container">
          <div className="mwg-heading">
            <div className="mwg-kicker">
              <BookOpen />
              Game Hub FAQ
            </div>

            <h2>
              Project{" "}
              <span className="mwg-blue">
                Questions
              </span>
            </h2>

            <p>
              The Free Game Hub is a developing
              project, so its features can grow
              as real games and technology are
              added.
            </p>
          </div>

          <div className="mwg-faq-grid">
            {faqs.map(
              (item) => (
                <div
                  className="mwg-faq-card"
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
        className="mwg-final"
        id="game-projects"
      >
        <div className="mwg-final-card">
          <Zap />

          <h2>
            Websites Can Do More Than{" "}
            <span className="mwg-orange">
              Display Information.
            </span>
          </h2>

          <p>
            Games are one example of what can
            happen when web development,
            software, design, data, and
            interactive systems are combined.
            Matthew Web continues exploring those
            connections through both customer
            work and internal technology
            projects.
          </p>

          <div className="mwg-button-row">
            <Link
              href="/examples"
              className="mwg-btn mwg-btn-orange"
            >
              Explore Projects
              <ArrowRight />
            </Link>

            <Link
              href="/contact-us"
              className="mwg-btn mwg-btn-dark"
            >
              Contact Matthew Web
            </Link>
          </div>

          <nav className="mwg-related">
            <Link href="/examples">
              Examples
            </Link>

            <Link href="/blog">
              Development Blog
            </Link>

            <Link href="/custom-software">
              Custom Software
            </Link>

            <Link href="/services">
              Services
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
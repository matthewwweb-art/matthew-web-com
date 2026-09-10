import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  FileText,
  Gauge,
  Globe2,
  Layers3,
  MonitorSmartphone,
  MousePointerClick,
  RefreshCcw,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Smartphone,
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
    "Website Design for Small Businesses | Matthew Web",

  description:
    "Matthew Web builds modern, mobile-friendly websites for small businesses in Maine and across the United States, including new websites, redesigns, lead forms, SEO-ready structure, domain setup, analytics, and custom functionality.",

  alternates: {
    canonical:
      "https://matthew-web.com/website-design",
  },

  openGraph: {
    title:
      "Website Design for Small Businesses | Matthew Web",

    description:
      "Modern website design, redesigns, responsive layouts, lead capture, SEO-ready structure, and custom functionality for small businesses.",

    url:
      "https://matthew-web.com/website-design",

    siteName:
      "Matthew Web",

    type:
      "website",
  },
};

/* ============================================================
   PROBLEMS
============================================================ */

const websiteProblems = [
  {
    icon: Globe2,
    title: "No Website",
    text:
      "Your business depends on Facebook, directories, word-of-mouth, or nothing at all for its online presence.",
    action:
      "Build from scratch",
    accent:
      "blue",
  },

  {
    icon: RefreshCcw,
    title: "Outdated Website",
    text:
      "Your current site no longer reflects the quality, services, brand, or direction of your business.",
    action:
      "Complete redesign",
    accent:
      "orange",
  },

  {
    icon: Wrench,
    title: "Broken Website",
    text:
      "Links, pages, forms, buttons, contact information, or important customer actions are not working correctly.",
    action:
      "Repair or rebuild",
    accent:
      "blue",
  },

  {
    icon: Smartphone,
    title: "Poor Mobile Experience",
    text:
      "Customers have trouble reading, navigating, calling, or completing forms when using a phone.",
    action:
      "Responsive rebuild",
    accent:
      "orange",
  },

  {
    icon: Layers3,
    title: "Incomplete Website",
    text:
      "Important services, examples, trust information, contact paths, pricing context, or other useful content is missing.",
    action:
      "Complete the site",
    accent:
      "blue",
  },

  {
    icon: MousePointerClick,
    title: "No Clear Next Step",
    text:
      "Visitors can see your website but cannot easily tell how to contact, request a quote, book, buy, or take action.",
    action:
      "Improve conversion path",
    accent:
      "orange",
  },
];

/* ============================================================
   WEBSITE FEATURES
============================================================ */

const websiteFeatures = [
  {
    icon: MonitorSmartphone,
    title: "Responsive Design",
    text:
      "Layouts designed to work across desktops, laptops, tablets, and smartphones.",
  },

  {
    icon: FileText,
    title: "Clear Page Structure",
    text:
      "Services, business information, calls-to-action, and important customer information organized clearly.",
  },

  {
    icon: SearchCheck,
    title: "SEO-Ready Foundation",
    text:
      "Page titles, metadata, headings, internal links, sitemap structure, and indexing preparation.",
  },

  {
    icon: MousePointerClick,
    title: "Lead Capture",
    text:
      "Contact forms, quote requests, phone links, booking links, and other ways for visitors to become leads.",
  },

  {
    icon: Gauge,
    title: "Performance Focus",
    text:
      "Practical layouts, optimized assets, and modern development aimed at keeping the site responsive and usable.",
  },

  {
    icon: Code2,
    title: "Room to Grow",
    text:
      "Your website can later expand into dashboards, databases, automation, custom software, and other business tools.",
  },
];

/* ============================================================
   WEBSITE COMPONENTS
============================================================ */

const websiteComponents = [
  "Home page",
  "About page",
  "Service pages",
  "Contact page",
  "Quote or inquiry forms",
  "Mobile navigation",
  "Calls-to-action",
  "Domain connection",
  "Analytics setup",
  "SEO-ready structure",
  "Sitemap and indexing setup",
  "Custom business features",
];

/* ============================================================
   PROCESS
============================================================ */

const processSteps = [
  {
    number: "01",
    title: "Understand the Business",
    text:
      "We look at what your business does, who your customers are, your current website situation, and what the new website actually needs to accomplish.",
  },

  {
    number: "02",
    title: "Plan the Website",
    text:
      "We determine which pages, information, forms, customer actions, integrations, and functionality the project needs.",
  },

  {
    number: "03",
    title: "Design & Build",
    text:
      "The website is built around a responsive structure with clear content, business-focused calls-to-action, and modern visual design.",
  },

  {
    number: "04",
    title: "Review & Improve",
    text:
      "The project is reviewed and refined before launch so content, layout, forms, links, and important functionality work as intended.",
  },

  {
    number: "05",
    title: "Launch",
    text:
      "The domain and production deployment are prepared so the completed website can go live.",
  },

  {
    number: "06",
    title: "Maintain & Grow",
    text:
      "After launch, Matthew Web can continue helping with updates, maintenance, new pages, SEO work, analytics, and added functionality.",
  },
];

/* ============================================================
   FAQ
============================================================ */

const faqs = [
  {
    q:
      "Do I need a website if I already have a Facebook page?",

    a:
      "For most businesses, a website is still valuable because it gives you more control over your services, contact process, search visibility, content, branding, forms, and long-term online presence. Social media can support the website rather than replace it.",
  },

  {
    q:
      "Can Matthew Web redesign my existing website?",

    a:
      "Yes. A redesign can improve the visual design, mobile experience, page structure, customer path, content, forms, search setup, and technical foundation without pretending the existing site has to be completely useless.",
  },

  {
    q:
      "Do you build websites outside Maine?",

    a:
      "Yes. Matthew Web is based in Maine and has a strong focus on Maine small businesses, but website projects can also be completed remotely for businesses throughout the United States.",
  },

  {
    q:
      "Is SEO included with website design?",

    a:
      "The website can include an SEO-ready technical foundation such as page titles, descriptions, headings, internal links, sitemap preparation, robots checks, and indexing support. Ongoing SEO, content development, and deeper search work can also be handled separately.",
  },

  {
    q:
      "Can you use my existing domain?",

    a:
      "Usually, yes. If you still own and control your domain, it can generally be connected to the new website when the project is ready to launch.",
  },

  {
    q:
      "Can my website collect leads?",

    a:
      "Yes. Depending on the project, the website can include contact forms, quote requests, service inquiries, booking links, phone actions, or more advanced lead systems.",
  },

  {
    q:
      "Can I add custom software later?",

    a:
      "Yes. A website can start with public pages and later grow into dashboards, databases, customer tools, automation, reporting, or other custom functionality.",
  },

  {
    q:
      "Do you only use templates?",

    a:
      "No. Matthew Web can build custom layouts and custom-coded functionality. The approach depends on the goals, budget, timeline, and technical requirements of the project.",
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
    "Website design and development",

  url:
    "https://matthew-web.com/website-design",
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

export default function WebsiteDesignPage() {
  return (
    <main className="mwwd-page">
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
          --mwwd-black: #020304;
          --mwwd-panel: #091117;
          --mwwd-panel-light: #0d171e;

          --mwwd-white: #ffffff;

          --mwwd-muted:
            #aebbc5;

          --mwwd-blue:
            #08b9f4;

          --mwwd-blue-light:
            #38d7ff;

          --mwwd-orange:
            #ff7900;

          --mwwd-orange-light:
            #ffab31;

          --mwwd-border:
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
            var(--mwwd-black);
        }

        .mwwd-page {
          min-height:
            100vh;

          overflow:
            hidden;

          color:
            white;

          background:
            var(--mwwd-black);
        }

        .mwwd-container {
          width:
            100%;

          max-width:
            1380px;

          margin:
            0 auto;
        }

        .mwwd-section {
          position:
            relative;

          width:
            100%;

          padding:
            100px
            clamp(
              20px,
              5vw,
              80px
            );
        }

        .mwwd-blue {
          color:
            var(--mwwd-blue-light);
        }

        .mwwd-orange {
          color:
            var(--mwwd-orange);
        }

        /* ==================================================
           COMMON
        ================================================== */

        .mwwd-kicker {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            8px;

          margin-bottom:
            14px;

          color:
            var(--mwwd-blue-light);

          font-size:
            11px;

          font-weight:
            900;

          letter-spacing:
            0.16em;

          text-transform:
            uppercase;
        }

        .mwwd-kicker.orange {
          color:
            var(--mwwd-orange-light);
        }

        .mwwd-kicker svg {
          width:
            18px;

          height:
            18px;
        }

        .mwwd-heading {
          max-width:
            900px;

          margin-bottom:
            48px;
        }

        .mwwd-heading.center {
          margin-left:
            auto;

          margin-right:
            auto;

          text-align:
            center;
        }

        .mwwd-heading h2 {
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

        .mwwd-heading p {
          max-width:
            800px;

          margin:
            0;

          color:
            var(--mwwd-muted);

          font-size:
            clamp(
              15px,
              1.35vw,
              19px
            );

          line-height:
            1.75;
        }

        .mwwd-heading.center p {
          margin-left:
            auto;

          margin-right:
            auto;
        }

        /* ==================================================
           BUTTONS
        ================================================== */

        .mwwd-button-row {
          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            13px;

          margin-top:
            29px;
        }

        .mwwd-btn {
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

        .mwwd-btn svg {
          width:
            18px;

          height:
            18px;
        }

        .mwwd-btn-blue {
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

        .mwwd-btn-orange {
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

        .mwwd-btn-dark {
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

        .mwwd-btn:hover {
          transform:
            translateY(
              -2px
            );
        }

        .mwwd-btn-blue:hover {
          box-shadow:
            0 0 25px
            rgba(
              8,
              185,
              244,
              0.48
            );
        }

        .mwwd-btn-orange:hover {
          box-shadow:
            0 0 25px
            rgba(
              255,
              121,
              0,
              0.48
            );
        }

        /* ==================================================
           HERO
        ================================================== */

        .mwwd-hero {
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

        .mwwd-hero::before {
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
              ellipse
              at center,
              black,
              transparent
              80%
            );
        }

        .mwwd-hero-inner {
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

        .mwwd-hero-badge {
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

        .mwwd-hero-badge span {
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

        .mwwd-hero h1 {
          max-width:
            850px;

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

        .mwwd-hero h1 span {
          display:
            block;
        }

        .mwwd-hero-copy > p {
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

        /* ==================================================
           DEVICE VISUAL
        ================================================== */

        .mwwd-device-stage {
          position:
            relative;

          min-height:
            460px;

          display:
            grid;

          place-items:
            center;
        }

        .mwwd-desktop {
          position:
            relative;

          z-index:
            2;

          width:
            min(
              100%,
              500px
            );

          aspect-ratio:
            1.55 / 1;

          overflow:
            hidden;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.35
            );

          border-radius:
            16px;

          background:
            #070e13;

          box-shadow:
            0 30px 70px
            rgba(
              0,
              0,
              0,
              0.5
            ),
            0 0 30px
            rgba(
              8,
              185,
              244,
              0.09
            );
        }

        .mwwd-browser-top {
          height:
            38px;

          display:
            flex;

          align-items:
            center;

          gap:
            6px;

          padding:
            0 12px;

          border-bottom:
            1px solid
            rgba(
              255,
              255,
              255,
              0.08
            );

          background:
            #0c151b;
        }

        .mwwd-browser-top span {
          width:
            7px;

          height:
            7px;

          border-radius:
            50%;

          background:
            rgba(
              255,
              255,
              255,
              0.2
            );
        }

        .mwwd-browser-top
          span:nth-child(1) {
          background:
            var(
              --mwwd-orange
            );
        }

        .mwwd-browser-top
          span:nth-child(2) {
          background:
            var(
              --mwwd-blue
            );
        }

        .mwwd-browser-url {
          width:
            58%;

          height:
            10px;

          margin-left:
            8px;

          border-radius:
            999px;

          background:
            rgba(
              255,
              255,
              255,
              0.1
            );
        }

        .mwwd-browser-body {
          padding:
            19px;
        }

        .mwwd-demo-nav {
          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          margin-bottom:
            15px;
        }

        .mwwd-demo-logo {
          width:
            90px;

          height:
            10px;

          border-radius:
            3px;

          background:
            linear-gradient(
              90deg,
              var(
                --mwwd-blue
              ),
              var(
                --mwwd-orange
              )
            );
        }

        .mwwd-demo-links {
          display:
            flex;

          gap:
            6px;
        }

        .mwwd-demo-links span {
          width:
            32px;

          height:
            6px;

          border-radius:
            2px;

          background:
            rgba(
              255,
              255,
              255,
              0.15
            );
        }

        .mwwd-demo-hero {
          min-height:
            120px;

          display:
            flex;

          flex-direction:
            column;

          justify-content:
            center;

          padding:
            18px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.19
            );

          border-radius:
            9px;

          background:
            radial-gradient(
              circle at
              20% 45%,
              rgba(
                8,
                185,
                244,
                0.26
              ),
              transparent
              32%
            ),
            linear-gradient(
              120deg,
              #0b1a23,
              #081016
            );
        }

        .mwwd-demo-title {
          width:
            52%;

          height:
            15px;

          border-radius:
            3px;

          background:
            white;
        }

        .mwwd-demo-text {
          width:
            72%;

          height:
            7px;

          margin-top:
            11px;

          border-radius:
            3px;

          background:
            rgba(
              255,
              255,
              255,
              0.35
            );
        }

        .mwwd-demo-button {
          width:
            72px;

          height:
            20px;

          margin-top:
            14px;

          border-radius:
            4px;

          background:
            var(
              --mwwd-orange
            );

          box-shadow:
            0 0 12px
            rgba(
              255,
              121,
              0,
              0.28
            );
        }

        .mwwd-demo-cards {
          display:
            grid;

          grid-template-columns:
            repeat(
              3,
              1fr
            );

          gap:
            8px;

          margin-top:
            10px;
        }

        .mwwd-demo-cards div {
          height:
            67px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.08
            );

          border-radius:
            6px;

          background:
            #101a20;
        }

        .mwwd-phone {
          position:
            absolute;

          z-index:
            5;

          right:
            -15px;

          bottom:
            8px;

          width:
            126px;

          height:
            245px;

          padding:
            8px;

          border:
            5px solid
            #11191e;

          border-radius:
            22px;

          background:
            #030608;

          box-shadow:
            0 25px 50px
            rgba(
              0,
              0,
              0,
              0.6
            ),
            0 0 18px
            rgba(
              255,
              121,
              0,
              0.1
            );
        }

        .mwwd-phone-notch {
          width:
            38px;

          height:
            7px;

          margin:
            0 auto 8px;

          border-radius:
            999px;

          background:
            #192228;
        }

        .mwwd-phone-screen {
          height:
            calc(
              100% - 15px
            );

          padding:
            9px;

          border-radius:
            13px;

          background:
            linear-gradient(
              180deg,
              #08151c,
              #04080b
            );
        }

        .mwwd-phone-logo {
          width:
            42px;

          height:
            6px;

          background:
            var(
              --mwwd-blue
            );
        }

        .mwwd-phone-hero {
          height:
            66px;

          margin-top:
            9px;

          border-radius:
            5px;

          background:
            linear-gradient(
              145deg,
              rgba(
                8,
                185,
                244,
                0.25
              ),
              rgba(
                255,
                121,
                0,
                0.08
              )
            );
        }

        .mwwd-phone-line {
          height:
            5px;

          margin-top:
            8px;

          border-radius:
            2px;

          background:
            rgba(
              255,
              255,
              255,
              0.24
            );
        }

        .mwwd-phone-line.short {
          width:
            62%;
        }

        .mwwd-phone-card {
          height:
            42px;

          margin-top:
            9px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.15
            );

          border-radius:
            5px;

          background:
            rgba(
              255,
              255,
              255,
              0.035
            );
        }

        .mwwd-device-tag {
          position:
            absolute;

          z-index:
            7;

          display:
            inline-flex;

          align-items:
            center;

          gap:
            7px;

          min-height:
            34px;

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

        .mwwd-device-tag svg {
          width:
            15px;

          height:
            15px;

          color:
            var(
              --mwwd-blue-light
            );
        }

        .mwwd-device-tag.one {
          left:
            -1%;

          top:
            8%;
        }

        .mwwd-device-tag.two {
          right:
            -2%;

          top:
            15%;
        }

        .mwwd-device-tag.two svg {
          color:
            var(
              --mwwd-orange-light
            );
        }

        /* ==================================================
           PROBLEMS
        ================================================== */

        .mwwd-problems {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwwd-problem-grid {
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

        .mwwd-problem-card {
          min-height:
            280px;

          padding:
            25px;

          border:
            1px solid
            var(
              --mwwd-border
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

        .mwwd-problem-card:hover {
          transform:
            translateY(
              -5px
            );
        }

        .mwwd-problem-card.blue:hover {
          border-color:
            rgba(
              8,
              185,
              244,
              0.35
            );
        }

        .mwwd-problem-card.orange:hover {
          border-color:
            rgba(
              255,
              121,
              0,
              0.35
            );
        }

        .mwwd-problem-icon {
          width:
            52px;

          height:
            52px;

          display:
            grid;

          place-items:
            center;

          margin-bottom:
            19px;

          border-radius:
            13px;
        }

        .mwwd-problem-card.blue
          .mwwd-problem-icon {
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
              --mwwd-blue-light
            );

          background:
            rgba(
              8,
              185,
              244,
              0.065
            );
        }

        .mwwd-problem-card.orange
          .mwwd-problem-icon {
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
              --mwwd-orange-light
            );

          background:
            rgba(
              255,
              121,
              0,
              0.06
            );
        }

        .mwwd-problem-icon svg {
          width:
            26px;

          height:
            26px;
        }

        .mwwd-problem-card h3 {
          margin:
            0 0 10px;

          font-size:
            20px;
        }

        .mwwd-problem-card p {
          margin:
            0;

          color:
            var(
              --mwwd-muted
            );

          font-size:
            13px;

          line-height:
            1.68;
        }

        .mwwd-problem-action {
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
            0.08em;

          text-transform:
            uppercase;
        }

        .mwwd-problem-card.blue
          .mwwd-problem-action {
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
              0.045
            );
        }

        .mwwd-problem-card.orange
          .mwwd-problem-action {
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

        /* ==================================================
           PURPOSE SECTION
        ================================================== */

        .mwwd-purpose {
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

        .mwwd-purpose-grid {
          display:
            grid;

          grid-template-columns:
            minmax(
              0,
              0.9fr
            )
            minmax(
              0,
              1.1fr
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

        .mwwd-purpose-copy h2 {
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

        .mwwd-purpose-copy p {
          margin:
            0 0 17px;

          color:
            var(
              --mwwd-muted
            );

          font-size:
            16px;

          line-height:
            1.8;
        }

        .mwwd-purpose-stack {
          display:
            grid;

          gap:
            12px;
        }

        .mwwd-purpose-item {
          display:
            grid;

          grid-template-columns:
            48px 1fr;

          align-items:
            center;

          gap:
            14px;

          min-height:
            88px;

          padding:
            15px 17px;

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
            linear-gradient(
              145deg,
              #0a1218,
              #05090c
            );
        }

        .mwwd-purpose-item
          svg {
          width:
            28px;

          height:
            28px;

          color:
            var(
              --mwwd-blue-light
            );
        }

        .mwwd-purpose-item:nth-child(even)
          svg {
          color:
            var(
              --mwwd-orange-light
            );
        }

        .mwwd-purpose-item
          strong {
          display:
            block;

          margin-bottom:
            4px;

          font-size:
            15px;
        }

        .mwwd-purpose-item
          span {
          color:
            #82939e;

          font-size:
            12px;

          line-height:
            1.55;
        }

        /* ==================================================
           FEATURES
        ================================================== */

        .mwwd-features {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwwd-feature-grid {
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

        .mwwd-feature-card {
          min-height:
            245px;

          padding:
            24px;

          border:
            1px solid
            var(
              --mwwd-border
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

        .mwwd-feature-card
          svg {
          width:
            29px;

          height:
            29px;

          margin-bottom:
            17px;

          color:
            var(
              --mwwd-blue-light
            );
        }

        .mwwd-feature-card:nth-child(even)
          svg {
          color:
            var(
              --mwwd-orange-light
            );
        }

        .mwwd-feature-card
          h3 {
          margin:
            0 0 10px;

          font-size:
            18px;
        }

        .mwwd-feature-card
          p {
          margin:
            0;

          color:
            var(
              --mwwd-muted
            );

          font-size:
            13px;

          line-height:
            1.67;
        }

        /* ==================================================
           INCLUDED
        ================================================== */

        .mwwd-included {
          background:
            radial-gradient(
              ellipse at
              15% 45%,
              rgba(
                8,
                185,
                244,
                0.07
              ),
              transparent
              30%
            ),
            #020304;
        }

        .mwwd-included-grid {
          display:
            grid;

          grid-template-columns:
            minmax(
              0,
              0.8fr
            )
            minmax(
              420px,
              1.2fr
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

        .mwwd-included-copy h2 {
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

        .mwwd-included-copy p {
          margin:
            0;

          color:
            var(
              --mwwd-muted
            );

          font-size:
            16px;

          line-height:
            1.8;
        }

        .mwwd-check-grid {
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
            10px;
        }

        .mwwd-check-item {
          display:
            flex;

          align-items:
            center;

          gap:
            10px;

          min-height:
            56px;

          padding:
            11px 14px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.08
            );

          border-radius:
            9px;

          color:
            #d4dfe5;

          background:
            #081017;

          font-size:
            12px;
        }

        .mwwd-check-item
          svg {
          width:
            17px;

          height:
            17px;

          flex:
            0 0 auto;

          color:
            var(
              --mwwd-blue-light
            );
        }

        .mwwd-check-item:nth-child(even)
          svg {
          color:
            var(
              --mwwd-orange-light
            );
        }

        /* ==================================================
           GROWTH SECTION
        ================================================== */

        .mwwd-growth {
          padding:
            90px
            clamp(
              20px,
              5vw,
              80px
            );

          background:
            #020304;
        }

        .mwwd-growth-card {
          max-width:
            1120px;

          margin:
            0 auto;

          display:
            grid;

          grid-template-columns:
            auto
            1fr
            auto;

          align-items:
            center;

          gap:
            26px;

          padding:
            clamp(
              32px,
              5vw,
              52px
            );

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.24
            );

          border-radius:
            20px;

          background:
            radial-gradient(
              circle at
              10% 50%,
              rgba(
                8,
                185,
                244,
                0.12
              ),
              transparent
              28%
            ),
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
              26%
            ),
            linear-gradient(
              145deg,
              #08131a,
              #04080b
            );
        }

        .mwwd-growth-icon {
          width:
            70px;

          height:
            70px;

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
              --mwwd-orange
            );

          background:
            rgba(
              255,
              121,
              0,
              0.055
            );
        }

        .mwwd-growth-icon
          svg {
          width:
            34px;

          height:
            34px;
        }

        .mwwd-growth-copy
          h2 {
          margin:
            0 0 9px;

          font-size:
            clamp(
              29px,
              3vw,
              43px
            );

          letter-spacing:
            -0.04em;
        }

        .mwwd-growth-copy
          p {
          margin:
            0;

          color:
            var(
              --mwwd-muted
            );

          font-size:
            14px;

          line-height:
            1.7;
        }

        /* ==================================================
           PROCESS
        ================================================== */

        .mwwd-process {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwwd-process-grid {
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

        .mwwd-process-card {
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

        .mwwd-process-card:nth-child(even) {
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

        .mwwd-process-number {
          margin-bottom:
            17px;

          color:
            var(
              --mwwd-blue-light
            );

          font-size:
            11px;

          font-weight:
            950;

          letter-spacing:
            0.14em;
        }

        .mwwd-process-card:nth-child(even)
          .mwwd-process-number {
          color:
            var(
              --mwwd-orange-light
            );
        }

        .mwwd-process-card
          h3 {
          margin:
            0 0 10px;

          font-size:
            19px;
        }

        .mwwd-process-card
          p {
          margin:
            0;

          color:
            var(
              --mwwd-muted
            );

          font-size:
            13px;

          line-height:
            1.68;
        }

        /* ==================================================
           FAQ
        ================================================== */

        .mwwd-faq {
          background:
            #020304;
        }

        .mwwd-faq-grid {
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

        .mwwd-faq-card {
          padding:
            24px;

          border:
            1px solid
            var(
              --mwwd-border
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

        .mwwd-faq-card
          h3 {
          margin:
            0 0 10px;

          color:
            white;

          font-size:
            16px;
        }

        .mwwd-faq-card
          p {
          margin:
            0;

          color:
            var(
              --mwwd-muted
            );

          font-size:
            13px;

          line-height:
            1.7;
        }

        /* ==================================================
           FINAL CTA
        ================================================== */

        .mwwd-final {
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

        .mwwd-final-card {
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

        .mwwd-final-card
          > svg {
          width:
            42px;

          height:
            42px;

          margin-bottom:
            19px;

          color:
            var(
              --mwwd-orange
            );
        }

        .mwwd-final-card
          h2 {
          margin:
            0;

          font-size:
            clamp(
              38px,
              5vw,
              67px
            );

          letter-spacing:
            -0.05em;

          line-height:
            1.03;
        }

        .mwwd-final-card
          p {
          max-width:
            730px;

          margin:
            18px auto 0;

          color:
            var(
              --mwwd-muted
            );

          font-size:
            15px;

          line-height:
            1.75;
        }

        .mwwd-final-card
          .mwwd-button-row {
          justify-content:
            center;
        }

        .mwwd-related {
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

        .mwwd-related a {
          color:
            #8fa0ab;

          text-decoration:
            none;

          font-size:
            11px;

          font-weight:
            700;
        }

        .mwwd-related a:hover {
          color:
            var(
              --mwwd-blue-light
            );
        }

        /* ==================================================
           RESPONSIVE
        ================================================== */

        @media (
          max-width:
          1100px
        ) {
          .mwwd-problem-grid,
          .mwwd-feature-grid,
          .mwwd-process-grid {
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
          .mwwd-hero-inner,
          .mwwd-purpose-grid,
          .mwwd-included-grid {
            grid-template-columns:
              1fr;
          }

          .mwwd-hero-inner {
            text-align:
              center;
          }

          .mwwd-hero-badge {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwwd-hero-copy
            > p {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwwd-button-row {
            justify-content:
              center;
          }

          .mwwd-device-stage {
            min-height:
              420px;
          }

          .mwwd-growth-card {
            grid-template-columns:
              auto 1fr;
          }

          .mwwd-growth-card
            .mwwd-btn {
            grid-column:
              1 / -1;

            width:
              100%;
          }
        }

        @media (
          max-width:
          700px
        ) {
          .mwwd-section {
            padding:
              70px 16px;
          }

          .mwwd-hero {
            min-height:
              auto;
          }

          .mwwd-hero-inner {
            padding:
              70px 16px;
          }

          .mwwd-hero h1 {
            font-size:
              clamp(
                46px,
                14vw,
                67px
              );
          }

          .mwwd-problem-grid,
          .mwwd-feature-grid,
          .mwwd-process-grid,
          .mwwd-faq-grid,
          .mwwd-check-grid {
            grid-template-columns:
              1fr;
          }

          .mwwd-device-stage {
            min-height:
              350px;

            transform:
              scale(
                0.86
              );

            margin:
              -20px
              -25px;
          }

          .mwwd-growth-card {
            grid-template-columns:
              1fr;

            text-align:
              center;
          }

          .mwwd-growth-icon {
            margin:
              0 auto;
          }
        }

        @media (
          max-width:
          480px
        ) {
          .mwwd-device-stage {
            transform:
              scale(
                0.72
              );

            margin:
              -55px
              -80px;
          }

          .mwwd-phone {
            right:
              0;
          }
        }

        @media (
          prefers-reduced-motion:
          reduce
        ) {
          * {
            scroll-behavior:
              auto !important;
          }
        }
      `}</style>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        className="mwwd-hero"
        id="website-design"
      >
        <div className="mwwd-hero-inner">
          <div className="mwwd-hero-copy">
            <div className="mwwd-hero-badge">
              <span />
              Website Design • Available Now
            </div>

            <h1>
              <span>
                Your Business
              </span>

              <span className="mwwd-blue">
                Deserves Better
              </span>

              <span>
                Than an Outdated
              </span>

              <span className="mwwd-orange">
                Website.
              </span>
            </h1>

            <p>
              Matthew Web builds modern,
              responsive websites for small
              businesses that need a first
              website, a complete redesign, a
              better mobile experience, stronger
              lead capture, or a website that
              finally reflects the business it
              represents.
            </p>

            <div className="mwwd-button-row">
              <Link
                href="/contact-us"
                className="mwwd-btn mwwd-btn-blue"
              >
                Start a Website Project
                <ArrowRight />
              </Link>

              <Link
                href="/examples"
                className="mwwd-btn mwwd-btn-dark"
              >
                View Examples
              </Link>
            </div>
          </div>

          <div
            className="mwwd-device-stage"
            aria-hidden="true"
          >
            <div className="mwwd-device-tag one">
              <MonitorSmartphone />
              RESPONSIVE DESIGN
            </div>

            <div className="mwwd-device-tag two">
              <MousePointerClick />
              BUILT FOR ACTION
            </div>

            <div className="mwwd-desktop">
              <div className="mwwd-browser-top">
                <span />
                <span />
                <span />

                <div className="mwwd-browser-url" />
              </div>

              <div className="mwwd-browser-body">
                <div className="mwwd-demo-nav">
                  <div className="mwwd-demo-logo" />

                  <div className="mwwd-demo-links">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="mwwd-demo-hero">
                  <div className="mwwd-demo-title" />

                  <div className="mwwd-demo-text" />

                  <div className="mwwd-demo-button" />
                </div>

                <div className="mwwd-demo-cards">
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            </div>

            <div className="mwwd-phone">
              <div className="mwwd-phone-notch" />

              <div className="mwwd-phone-screen">
                <div className="mwwd-phone-logo" />

                <div className="mwwd-phone-hero" />

                <div className="mwwd-phone-line" />

                <div className="mwwd-phone-line short" />

                <div className="mwwd-phone-card" />

                <div className="mwwd-phone-card" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          WEBSITE PROBLEMS
      ====================================================== */}

      <section
        className="mwwd-section mwwd-problems"
        id="website-problems"
      >
        <div className="mwwd-container">
          <div className="mwwd-heading center">
            <div className="mwwd-kicker orange">
              <Wrench />
              Common Website Problems
            </div>

            <h2>
              Which One Sounds Like{" "}
              <span className="mwwd-orange">
                Your Business?
              </span>
            </h2>

            <p>
              A website project should start
              with the problem that actually
              needs to be solved.
            </p>
          </div>

          <div className="mwwd-problem-grid">
            {websiteProblems.map(
              (problem) => {
                const Icon =
                  problem.icon;

                return (
                  <div
                    className={`mwwd-problem-card ${problem.accent}`}
                    key={problem.title}
                  >
                    <div className="mwwd-problem-icon">
                      <Icon />
                    </div>

                    <h3>
                      {problem.title}
                    </h3>

                    <p>
                      {problem.text}
                    </p>

                    <span className="mwwd-problem-action">
                      {problem.action}
                    </span>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* ======================================================
          WHAT THE WEBSITE SHOULD DO
      ====================================================== */}

      <section
        className="mwwd-section mwwd-purpose"
        id="website-purpose"
      >
        <div className="mwwd-container">
          <div className="mwwd-purpose-grid">
            <div className="mwwd-purpose-copy">
              <div className="mwwd-kicker">
                <Rocket />
                More Than Appearance
              </div>

              <h2>
                A Website Should{" "}
                <span className="mwwd-blue">
                  Do a Job.
                </span>
              </h2>

              <p>
                A business website should not
                exist just because businesses
                are expected to have one.
              </p>

              <p>
                It should help visitors quickly
                understand what the business
                does, decide whether they trust
                it, and know exactly how to take
                the next step.
              </p>

              <p>
                That could mean making a phone
                call, submitting a quote
                request, filling out a form,
                visiting the business, booking
                an appointment, or exploring
                services.
              </p>

              <div className="mwwd-button-row">
                <Link
                  href="/contact-us"
                  className="mwwd-btn mwwd-btn-orange"
                >
                  Discuss Your Website
                  <ArrowRight />
                </Link>
              </div>
            </div>

            <div className="mwwd-purpose-stack">
              <div className="mwwd-purpose-item">
                <FileText />

                <div>
                  <strong>
                    Explain the Business
                  </strong>

                  <span>
                    Make services, location,
                    contact information, and
                    important details easy to
                    understand.
                  </span>
                </div>
              </div>

              <div className="mwwd-purpose-item">
                <ShieldCheck />

                <div>
                  <strong>
                    Build Trust
                  </strong>

                  <span>
                    Present the business
                    professionally with clear
                    information, examples, and
                    useful content.
                  </span>
                </div>
              </div>

              <div className="mwwd-purpose-item">
                <MousePointerClick />

                <div>
                  <strong>
                    Create a Clear Next Step
                  </strong>

                  <span>
                    Give visitors an obvious
                    path to call, contact,
                    request a quote, book, or
                    take action.
                  </span>
                </div>
              </div>

              <div className="mwwd-purpose-item">
                <SearchCheck />

                <div>
                  <strong>
                    Support Discovery
                  </strong>

                  <span>
                    Give search engines a clear
                    technical and content
                    structure to understand.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          FEATURES
      ====================================================== */}

      <section
        className="mwwd-section mwwd-features"
        id="website-features"
      >
        <div className="mwwd-container">
          <div className="mwwd-heading center">
            <div className="mwwd-kicker">
              <MonitorSmartphone />
              Website Foundation
            </div>

            <h2>
              Built for{" "}
              <span className="mwwd-blue">
                Modern Customers
              </span>
            </h2>

            <p>
              The exact project depends on the
              business, but these are some of
              the foundations a professional
              small-business website should be
              built around.
            </p>
          </div>

          <div className="mwwd-feature-grid">
            {websiteFeatures.map(
              (feature) => {
                const Icon =
                  feature.icon;

                return (
                  <div
                    className="mwwd-feature-card"
                    key={feature.title}
                  >
                    <Icon />

                    <h3>
                      {feature.title}
                    </h3>

                    <p>
                      {feature.text}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* ======================================================
          INCLUDED
      ====================================================== */}

      <section
        className="mwwd-section mwwd-included"
        id="website-components"
      >
        <div className="mwwd-container">
          <div className="mwwd-included-grid">
            <div className="mwwd-included-copy">
              <div className="mwwd-kicker orange">
                <Layers3 />
                Project Components
              </div>

              <h2>
                Build What the{" "}
                <span className="mwwd-orange">
                  Business Needs.
                </span>
              </h2>

              <p>
                Not every website needs every
                possible feature. We can choose
                the pages and functionality that
                make sense for the actual
                business instead of forcing
                every customer into exactly the
                same layout.
              </p>

              <div className="mwwd-button-row">
                <Link
                  href="/pricing"
                  className="mwwd-btn mwwd-btn-dark"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            <div className="mwwd-check-grid">
              {websiteComponents.map(
                (item) => (
                  <div
                    className="mwwd-check-item"
                    key={item}
                  >
                    <CheckCircle2 />

                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          GROW INTO SOFTWARE
      ====================================================== */}

      <section
        className="mwwd-growth"
        id="website-growth"
      >
        <div className="mwwd-growth-card">
          <div className="mwwd-growth-icon">
            <Code2 />
          </div>

          <div className="mwwd-growth-copy">
            <h2>
              Your Website Can Grow Into{" "}
              <span className="mwwd-blue">
                Business Software.
              </span>
            </h2>

            <p>
              A contact form can later feed a
              dashboard. Customer information
              can be stored and organized.
              Payment functionality, reporting,
              automation, admin tools, and
              custom workflows can be added as
              the business grows.
            </p>
          </div>

          <Link
            href="/custom-software"
            className="mwwd-btn mwwd-btn-orange"
          >
            Custom Software
            <ArrowRight />
          </Link>
        </div>
      </section>

      {/* ======================================================
          PROCESS
      ====================================================== */}

      <section
        className="mwwd-section mwwd-process"
        id="website-process"
      >
        <div className="mwwd-container">
          <div className="mwwd-heading center">
            <div className="mwwd-kicker">
              <Rocket />
              Website Process
            </div>

            <h2>
              From Business Need to{" "}
              <span className="mwwd-blue">
                Live Website
              </span>
            </h2>

            <p>
              The project moves through a
              defined process instead of jumping
              directly into random design work.
            </p>
          </div>

          <div className="mwwd-process-grid">
            {processSteps.map(
              (step) => (
                <div
                  className="mwwd-process-card"
                  key={step.number}
                >
                  <div className="mwwd-process-number">
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
        className="mwwd-section mwwd-faq"
        id="website-design-faq"
      >
        <div className="mwwd-container">
          <div className="mwwd-heading">
            <div className="mwwd-kicker orange">
              <Sparkles />
              Website Design FAQ
            </div>

            <h2>
              Common{" "}
              <span className="mwwd-orange">
                Questions
              </span>
            </h2>

            <p>
              A few common questions about
              website creation, redesigns,
              search setup, domains, and future
              growth.
            </p>
          </div>

          <div className="mwwd-faq-grid">
            {faqs.map(
              (item) => (
                <div
                  className="mwwd-faq-card"
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
        className="mwwd-final"
        id="start-website"
      >
        <div className="mwwd-final-card">
          <Zap />

          <h2>
            Ready for a Website That{" "}
            <span className="mwwd-orange">
              Fits Your Business?
            </span>
          </h2>

          <p>
            Whether you have no website, need a
            redesign, or already know exactly
            what you want built, tell Matthew
            Web about the project and we can
            determine the next step.
          </p>

          <div className="mwwd-button-row">
            <Link
              href="/contact-us"
              className="mwwd-btn mwwd-btn-orange"
            >
              Start a Website Project
              <ArrowRight />
            </Link>

            <Link
              href="/examples"
              className="mwwd-btn mwwd-btn-dark"
            >
              View Examples
            </Link>
          </div>

          <nav className="mwwd-related">
            <Link href="/services">
              All Services
            </Link>

            <Link href="/custom-software">
              Custom Software
            </Link>

            <Link href="/seo-and-indexing">
              SEO &amp; Indexing
            </Link>

            <Link href="/small-business-websites">
              Small Business Websites
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
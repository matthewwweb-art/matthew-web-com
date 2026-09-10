"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CircuitBoard,
  Code2,
  FileText,
  Gamepad2,
  Globe2,
  GraduationCap,
  Layers3,
  LifeBuoy,
  MonitorSmartphone,
  Search,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Tag,
  UserRound,
  Wrench,
  X,
} from "lucide-react";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/* ============================================================
   SEARCH INDEX
============================================================ */

const searchLinks = [
  {
    title:
      "Home",

    href:
      "/",

    category:
      "MAIN",

    icon:
      Globe2,

    description:
      "Matthew Web home page covering websites, software, games, education, hardware R&D, active projects, pricing, support, and contact.",

    keywords:
      "home matthew web technology company websites software games education hardware research development r&d maine",
  },

  {
    title:
      "About Matthew Web",

    href:
      "/about-us",

    category:
      "COMPANY",

    icon:
      UserRound,

    description:
      "Learn how Matthew Web grew from website services into software, games, education, CPU architecture, FPGA research, and broader technology development.",

    keywords:
      "about matthew web adam matthew charest founder maine company story mission vision technology business",
  },

  {
    title:
      "Services",

    href:
      "/services",

    category:
      "SERVICES",

    icon:
      BriefcaseBusiness,

    description:
      "Explore Matthew Web's current website, software, SEO, indexing, maintenance, deployment, lead capture, and business technology services.",

    keywords:
      "services website design custom software seo indexing maintenance support domain deployment forms payments analytics business technology",
  },

  {
    title:
      "Website Design",

    href:
      "/website-design",

    category:
      "SERVICES",

    icon:
      MonitorSmartphone,

    description:
      "Modern website design and redesign for businesses that need a better mobile experience, clearer customer path, stronger structure, and room to grow.",

    keywords:
      "website design redesign new website mobile responsive small business website pages forms leads modern web development",
  },

  {
    title:
      "Custom Software",

    href:
      "/custom-software",

    category:
      "SERVICES",

    icon:
      Code2,

    description:
      "Custom dashboards, CRM-style systems, lead tracking, forms, databases, workflows, integrations, automation, and business tools.",

    keywords:
      "custom software crm dashboard lead tracking database booking forms admin automation workflows integration business tools",
  },

  {
    title:
      "SEO & Indexing",

    href:
      "/seo-and-indexing",

    category:
      "SERVICES",

    icon:
      SearchCheck,

    description:
      "Technical SEO and indexing help including Google Search Console, Bing Webmaster Tools, sitemaps, robots.txt, metadata, internal links, and indexing diagnostics.",

    keywords:
      "seo indexing google search console bing webmaster tools sitemap robots metadata canonical internal linking crawl ranking search engine",
  },

  {
    title:
      "Small Business Websites",

    href:
      "/small-business-websites",

    category:
      "SERVICES",

    icon:
      BriefcaseBusiness,

    description:
      "Website services for small businesses with no website or sites that are outdated, broken, incomplete, slow, difficult on mobile, or unclear.",

    keywords:
      "small business websites maine contractors local business outdated broken no website mobile slow incomplete leads",
  },

  {
    title:
      "Examples & Technology Projects",

    href:
      "/examples",

    category:
      "PROJECTS",

    icon:
      Layers3,

    description:
      "See Matthew Web website work, internal software, educational technology, game development, Word-first website builder work, and CPU/FPGA research.",

    keywords:
      "examples portfolio projects website software games education hardware cpu fpga word builder tankcpu countyroad snow plow lead finder",
  },

  {
    title:
      "Matthew Web Website",

    href:
      "/examples#matthew-web",

    category:
      "PROJECTS",

    icon:
      Globe2,

    description:
      "The Matthew Web website as a live example of custom Next.js web development, responsive design, search-ready structure, analytics, and lead capture.",

    keywords:
      "matthew web main website example nextjs next.js responsive analytics forms live site",
  },

  {
    title:
      "Lead Finder & CRM",

    href:
      "/examples#lead-finder",

    category:
      "PROJECTS",

    icon:
      Code2,

    description:
      "Private Matthew Web software for lead records, statuses, notes, follow-ups, customer information, search, and outreach workflow.",

    keywords:
      "lead finder crm private software dashboard leads follow up customer records admin outreach",
  },

  {
    title:
      "TankCPU Education",

    href:
      "/examples#tankcpu-education",

    category:
      "EDUCATION",

    icon:
      GraduationCap,

    description:
      "Matthew Web educational processor and computer-architecture work built around real CPU concepts and technical learning.",

    keywords:
      "tankcpu education cpu processor computer architecture digital product learning technology",
  },

  {
    title:
      "Snow Plow Horror / CountyRoad",

    href:
      "/examples#snow-plow-horror",

    category:
      "GAMES",

    icon:
      Gamepad2,

    description:
      "Maine-inspired snow-plow driving horror game in active development with vehicle systems, weather, environments, optimization, and gameplay.",

    keywords:
      "snow plow horror countyroad game unity maine vehicle driving weather horror development",
  },

  {
    title:
      "Word-First Website Builder",

    href:
      "/examples#word-builder",

    category:
      "SOFTWARE",

    icon:
      Code2,

    description:
      "Active Matthew Web website-builder development using Microsoft Word as a familiar authoring surface with web rendering and publishing technology.",

    keywords:
      "word first website builder microsoft word excel website authoring software custom domain publishing",
  },

  {
    title:
      "CPU & FPGA Research",

    href:
      "/examples#cpu-fpga",

    category:
      "R&D",

    icon:
      CircuitBoard,

    description:
      "Matthew Web processor architecture, multicore CPU development, simulation, FPGA implementation, physical validation, and hardware research.",

    keywords:
      "cpu fpga processor architecture multicore tankcpu hardware research r&d simulation validation computer",
  },

  {
    title:
      "Free Game Hub Project",

    href:
      "/free-game-hub-project",

    category:
      "GAMES",

    icon:
      Gamepad2,

    description:
      "Matthew Web game and interactive-content project for playable experiences and broader website integration.",

    keywords:
      "free game hub games playable interactive content project digital game website",
  },

  {
    title:
      "Blog",

    href:
      "/blog",

    category:
      "CONTENT",

    icon:
      BookOpen,

    description:
      "Matthew Web guides and project content covering websites, small-business technology, software, SEO, games, education, CPU development, and FPGA research.",

    keywords:
      "blog articles guides website business software seo games education cpu fpga research development",
  },

  {
    title:
      "Why Custom-Coded Websites Beat DIY Website Builders",

    href:
      "/why-custom-coded-websites-beat-diy-website-builders",

    category:
      "ARTICLE",

    icon:
      BookOpen,

    description:
      "Compare custom-coded website development with DIY website builders for control, customization, lead capture, software functionality, and growth.",

    keywords:
      "custom coded websites diy website builders wix godaddy control ownership flexibility small business",
  },

  {
    title:
      "How Much Should a Small Business Website Cost in 2026?",

    href:
      "/how-much-should-a-small-business-website-cost-in-2026",

    category:
      "ARTICLE",

    icon:
      BookOpen,

    description:
      "A practical guide to website pricing, development scope, SEO setup, software functionality, and business website costs.",

    keywords:
      "website cost pricing 2026 small business 499 development custom software price",
  },

  {
    title:
      "What Every Contractor Website Needs to Generate Leads",

    href:
      "/what-every-contractor-website-needs-to-generate-leads",

    category:
      "ARTICLE",

    icon:
      BookOpen,

    description:
      "Website structure, service information, trust, estimate requests, and lead-generation considerations for contractor businesses.",

    keywords:
      "contractor website leads estimate construction service business website homeowners",
  },

  {
    title:
      "Website Design vs Custom Software",

    href:
      "/website-design-vs-custom-software-what-does-your-business-need",

    category:
      "ARTICLE",

    icon:
      BookOpen,

    description:
      "Learn when a business needs a better public website and when the real problem requires dashboards, workflows, data, or custom software.",

    keywords:
      "website design vs custom software business dashboard crm workflow database tool",
  },

  {
    title:
      "How CRM Dashboards Help Small Businesses Stop Losing Leads",

    href:
      "/how-crm-dashboards-help-small-businesses-stop-losing-leads",

    category:
      "ARTICLE",

    icon:
      BookOpen,

    description:
      "How CRM-style dashboards organize leads, notes, status, follow-up dates, quotes, and customer activity.",

    keywords:
      "crm dashboard leads follow up sales quotes customer management small business",
  },

  {
    title:
      "Why Google Indexing Matters After Launching a Website",

    href:
      "/why-google-indexing-matters-after-launching-a-new-website",

    category:
      "ARTICLE",

    icon:
      BookOpen,

    description:
      "Learn why search engines still need to discover, crawl, understand, and index pages after a website launches.",

    keywords:
      "google indexing crawl search console website launch seo search engine sitemap",
  },

  {
    title:
      "Raw Code vs WordPress vs Wix vs GoDaddy",

    href:
      "/raw-code-vs-wordpress-vs-wix-vs-godaddy",

    category:
      "ARTICLE",

    icon:
      BookOpen,

    description:
      "Compare website development approaches across customization, ownership, maintenance, search structure, speed, and long-term flexibility.",

    keywords:
      "raw code wordpress wix godaddy website builder comparison customization ownership",
  },

  {
    title:
      "How Matthew Web Builds SEO-Ready Small Business Websites",

    href:
      "/how-matthew-web-builds-seo-ready-small-business-websites",

    category:
      "ARTICLE",

    icon:
      BookOpen,

    description:
      "How page structure, useful content, metadata, internal links, mobile design, sitemaps, and indexing preparation support search readiness.",

    keywords:
      "seo ready websites small business metadata sitemap internal links mobile search indexing",
  },

  {
    title:
      "Why Fast Website Load Speed Helps Leads, SEO, and Trust",

    href:
      "/why-fast-website-load-speed-helps-leads-seo-and-trust",

    category:
      "ARTICLE",

    icon:
      BookOpen,

    description:
      "Why website responsiveness and performance matter for visitors, mobile usability, customer experience, and technical quality.",

    keywords:
      "website speed performance load time leads seo trust mobile optimization fast",
  },

  {
    title:
      "How Booking Forms, Quote Forms, and Automation Help Local Businesses",

    href:
      "/how-booking-forms-quote-forms-and-automation-help-local-businesses",

    category:
      "ARTICLE",

    icon:
      BookOpen,

    description:
      "How structured forms, notifications, CRM-style systems, and automation can improve customer-information and follow-up workflows.",

    keywords:
      "booking forms quote forms automation local business crm notifications lead forms workflows",
  },

  {
    title:
      "Customer Feedback & Reviews",

    href:
      "/testimonials",

    category:
      "COMPANY",

    icon:
      UserRound,

    description:
      "Learn about Matthew Web's customer process, communication standards, support approach, and system for verified customer feedback.",

    keywords:
      "testimonials reviews customer feedback verified trust communication support experience",
  },

  {
    title:
      "Pricing",

    href:
      "/pricing",

    category:
      "PRICING",

    icon:
      Tag,

    description:
      "Matthew Web website, maintenance, custom software, SEO, indexing, forms, integrations, deployment, and technology pricing.",

    keywords:
      "pricing website cost 499 49 monthly maintenance custom software quote price services",
  },

  {
    title:
      "Website Design & Setup Pricing",

    href:
      "/pricing#website-design",

    category:
      "PRICING",

    icon:
      Tag,

    description:
      "Standard qualifying small-business website projects begin from a $499 starting point.",

    keywords:
      "499 website design setup price starting point five pages small business",
  },

  {
    title:
      "Maintenance & Support Pricing",

    href:
      "/pricing#monthly-service",

    category:
      "PRICING",

    icon:
      LifeBuoy,

    description:
      "Ongoing website maintenance and support is available starting at $49 per month depending on the service arrangement.",

    keywords:
      "49 month monthly website maintenance support updates monitoring service",
  },

  {
    title:
      "Custom Software Pricing",

    href:
      "/pricing#custom-software",

    category:
      "PRICING",

    icon:
      Code2,

    description:
      "Custom software is priced according to the business problem, technical requirements, functionality, and project scope.",

    keywords:
      "custom software price quote crm dashboard database automation integration",
  },

  {
    title:
      "Contact Matthew Web",

    href:
      "/contact-us",

    category:
      "CONTACT",

    icon:
      BriefcaseBusiness,

    description:
      "Contact Matthew Web about website projects, software, SEO, maintenance, support, integrations, or another technology need.",

    keywords:
      "contact matthew web phone project inquiry website software seo support maine",
  },

  {
    title:
      "Project Inquiry Form",

    href:
      "/contact-us#contact-form",

    category:
      "CONTACT",

    icon:
      FileText,

    description:
      "Send Matthew Web your business information, contact details, and project requirements through the protected inquiry form.",

    keywords:
      "contact form project inquiry submit request quote business information recaptcha lead",
  },

  {
    title:
      "Code of Ethics",

    href:
      "/code-of-ethics",

    category:
      "LEGAL & TRUST",

    icon:
      ShieldCheck,

    description:
      "Matthew Web principles and standards for responsible business conduct and technology work.",

    keywords:
      "code ethics ethical standards responsibility trust business technology principles",
  },

  {
    title:
      "Privacy Policy",

    href:
      "/privacy-policy",

    category:
      "LEGAL & TRUST",

    icon:
      ShieldCheck,

    description:
      "Matthew Web privacy information covering website visitors, submitted information, analytics, and related data practices.",

    keywords:
      "privacy policy data information analytics forms user information legal",
  },

  {
    title:
      "Terms of Use",

    href:
      "/terms",

    category:
      "LEGAL & TRUST",

    icon:
      FileText,

    description:
      "Terms governing use of the Matthew Web public website.",

    keywords:
      "terms terms of use website legal conditions rules",
  },
];

/* ============================================================
   CATEGORY SHORTCUTS
============================================================ */

const categoryShortcuts = [
  {
    label:
      "Websites",

    query:
      "website",

    icon:
      MonitorSmartphone,
  },

  {
    label:
      "Software",

    query:
      "software",

    icon:
      Code2,
  },

  {
    label:
      "SEO",

    query:
      "seo",

    icon:
      SearchCheck,
  },

  {
    label:
      "Games",

    query:
      "games",

    icon:
      Gamepad2,
  },

  {
    label:
      "CPU / FPGA",

    query:
      "cpu fpga",

    icon:
      CircuitBoard,
  },

  {
    label:
      "Pricing",

    query:
      "pricing",

    icon:
      Tag,
  },
];

/* ============================================================
   PAGE
============================================================ */

export default function SearchPage() {
  const [query, setQuery] =
    useState("");

  const filteredResults =
    useMemo(() => {
      const cleanQuery =
        query
          .trim()
          .toLowerCase();

      if (!cleanQuery) {
        return searchLinks;
      }

      const words =
        cleanQuery
          .split(/\s+/)
          .filter(Boolean);

      return searchLinks.filter(
        (item) => {
          const searchableText =
            `${item.title} ${item.category} ${item.description} ${item.keywords}`.toLowerCase();

          return words.every(
            (word) =>
              searchableText.includes(
                word
              )
          );
        }
      );
    }, [query]);

  function clearSearch() {
    setQuery("");
  }

  return (
    <main className="mwsearch-page">
      <SiteHeader />

      <style>{`
        :root {
          --mws-black:
            #020304;

          --mws-panel:
            #091117;

          --mws-muted:
            #aebbc5;

          --mws-blue:
            #08b9f4;

          --mws-blue-light:
            #38d7ff;

          --mws-orange:
            #ff7900;

          --mws-orange-light:
            #ffab31;

          --mws-border:
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
              --mws-black
            );
        }

        .mwsearch-page {
          min-height:
            100vh;

          overflow:
            hidden;

          color:
            white;

          background:
            var(
              --mws-black
            );
        }

        .mws-container {
          width:
            100%;

          max-width:
            1380px;

          margin:
            0 auto;
        }

        .mws-blue {
          color:
            var(
              --mws-blue-light
            );
        }

        .mws-orange {
          color:
            var(
              --mws-orange
            );
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mws-hero {
          position:
            relative;

          overflow:
            hidden;

          padding:
            100px
            clamp(
              20px,
              5vw,
              80px
            )
            90px;

          border-bottom:
            1px solid
            rgba(
              8,
              185,
              244,
              0.16
            );

          text-align:
            center;

          background:
            radial-gradient(
              ellipse at
              30% 35%,
              rgba(
                8,
                185,
                244,
                0.15
              ),
              transparent
              35%
            ),
            radial-gradient(
              ellipse at
              70% 55%,
              rgba(
                255,
                121,
                0,
                0.07
              ),
              transparent
              30%
            ),
            linear-gradient(
              180deg,
              #020304,
              #03080c,
              #020304
            );
        }

        .mws-hero::before {
          content:
            "";

          position:
            absolute;

          inset:
            0;

          opacity:
            0.25;

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

        .mws-hero-inner {
          position:
            relative;

          z-index:
            2;

          max-width:
            980px;

          margin:
            0 auto;
        }

        .mws-kicker {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            8px;

          margin-bottom:
            18px;

          color:
            var(
              --mws-blue-light
            );

          font-size:
            10px;

          font-weight:
            900;

          letter-spacing:
            0.16em;

          text-transform:
            uppercase;
        }

        .mws-kicker svg {
          width:
            18px;

          height:
            18px;
        }

        .mws-hero h1 {
          margin:
            0;

          font-size:
            clamp(
              52px,
              7vw,
              96px
            );

          line-height:
            0.98;

          letter-spacing:
            -0.06em;
        }

        .mws-hero p {
          max-width:
            760px;

          margin:
            24px auto 0;

          color:
            #b8c6cf;

          font-size:
            clamp(
              16px,
              1.5vw,
              20px
            );

          line-height:
            1.7;
        }

        /* =====================================================
           SEARCH AREA
        ===================================================== */

        .mws-search-section {
          position:
            relative;

          min-height:
            700px;

          padding:
            80px
            clamp(
              20px,
              5vw,
              80px
            )
            110px;

          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mws-search-box {
          max-width:
            1050px;

          margin:
            0 auto 32px;
        }

        .mws-search-input-wrap {
          position:
            relative;

          display:
            flex;

          align-items:
            center;

          min-height:
            70px;

          overflow:
            hidden;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.32
            );

          border-radius:
            15px;

          background:
            linear-gradient(
              145deg,
              #0b151b,
              #05090c
            );

          box-shadow:
            0 20px 55px
            rgba(
              0,
              0,
              0,
              0.3
            ),
            0 0 25px
            rgba(
              8,
              185,
              244,
              0.05
            );
        }

        .mws-search-icon {
          width:
            24px;

          height:
            24px;

          flex:
            0 0 auto;

          margin-left:
            22px;

          color:
            var(
              --mws-blue-light
            );
        }

        .mws-search-input {
          width:
            100%;

          min-height:
            68px;

          padding:
            0 22px;

          border:
            0;

          outline:
            none;

          color:
            white;

          background:
            transparent;

          font-size:
            clamp(
              16px,
              1.5vw,
              20px
            );
        }

        .mws-search-input::placeholder {
          color:
            #62737d;
        }

        .mws-clear {
          width:
            42px;

          height:
            42px;

          display:
            grid;

          place-items:
            center;

          flex:
            0 0 auto;

          margin-right:
            13px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.09
            );

          border-radius:
            9px;

          color:
            #9aabb5;

          background:
            rgba(
              255,
              255,
              255,
              0.025
            );

          cursor:
            pointer;
        }

        .mws-clear:hover {
          color:
            white;

          border-color:
            rgba(
              255,
              121,
              0,
              0.35
            );
        }

        .mws-clear svg {
          width:
            18px;

          height:
            18px;
        }

        /* =====================================================
           SHORTCUTS
        ===================================================== */

        .mws-shortcuts {
          max-width:
            1050px;

          margin:
            18px auto 38px;

          display:
            flex;

          flex-wrap:
            wrap;

          justify-content:
            center;

          gap:
            9px;
        }

        .mws-shortcut {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            7px;

          min-height:
            37px;

          padding:
            0 12px;

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
            #b8c5cc;

          background:
            rgba(
              255,
              255,
              255,
              0.02
            );

          font-size:
            10px;

          font-weight:
            850;

          cursor:
            pointer;

          transition:
            border-color
              0.2s ease,
            color
              0.2s ease,
            transform
              0.2s ease;
        }

        .mws-shortcut:hover {
          transform:
            translateY(
              -1px
            );

          color:
            white;

          border-color:
            rgba(
              8,
              185,
              244,
              0.3
            );
        }

        .mws-shortcut:nth-child(even):hover {
          border-color:
            rgba(
              255,
              121,
              0,
              0.3
            );
        }

        .mws-shortcut svg {
          width:
            14px;

          height:
            14px;

          color:
            var(
              --mws-blue-light
            );
        }

        .mws-shortcut:nth-child(even)
          svg {
          color:
            var(
              --mws-orange-light
            );
        }

        /* =====================================================
           RESULT META
        ===================================================== */

        .mws-result-meta {
          max-width:
            1050px;

          margin:
            0 auto 18px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          gap:
            15px;

          color:
            #7d8e98;

          font-size:
            10px;

          font-weight:
            850;

          letter-spacing:
            0.07em;

          text-transform:
            uppercase;
        }

        .mws-result-meta strong {
          color:
            var(
              --mws-blue-light
            );
        }

        /* =====================================================
           RESULTS
        ===================================================== */

        .mws-results {
          max-width:
            1050px;

          margin:
            0 auto;

          display:
            grid;

          gap:
            12px;
        }

        .mws-result-card {
          display:
            grid;

          grid-template-columns:
            54px 1fr auto;

          align-items:
            center;

          gap:
            18px;

          min-height:
            128px;

          padding:
            21px 23px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.08
            );

          border-radius:
            14px;

          color:
            white;

          text-decoration:
            none;

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
              0.2s ease,
            box-shadow
              0.2s ease;
        }

        .mws-result-card:hover {
          transform:
            translateY(
              -2px
            );

          border-color:
            rgba(
              8,
              185,
              244,
              0.3
            );

          box-shadow:
            0 15px 35px
            rgba(
              0,
              0,
              0,
              0.2
            );
        }

        .mws-result-card:nth-child(even):hover {
          border-color:
            rgba(
              255,
              121,
              0,
              0.3
            );
        }

        .mws-result-icon {
          width:
            54px;

          height:
            54px;

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
              0.22
            );

          border-radius:
            13px;

          color:
            var(
              --mws-blue-light
            );

          background:
            rgba(
              8,
              185,
              244,
              0.045
            );
        }

        .mws-result-card:nth-child(even)
          .mws-result-icon {
          border-color:
            rgba(
              255,
              121,
              0,
              0.22
            );

          color:
            var(
              --mws-orange-light
            );

          background:
            rgba(
              255,
              121,
              0,
              0.04
            );
        }

        .mws-result-icon svg {
          width:
            26px;

          height:
            26px;
        }

        .mws-result-category {
          margin-bottom:
            6px;

          color:
            #758791;

          font-size:
            8px;

          font-weight:
            950;

          letter-spacing:
            0.12em;

          text-transform:
            uppercase;
        }

        .mws-result-copy h3 {
          margin:
            0;

          font-size:
            clamp(
              17px,
              2vw,
              22px
            );

          line-height:
            1.2;

          letter-spacing:
            -0.025em;
        }

        .mws-result-copy p {
          max-width:
            760px;

          margin:
            8px 0 0;

          color:
            var(
              --mws-muted
            );

          font-size:
            12px;

          line-height:
            1.65;
        }

        .mws-result-arrow {
          width:
            40px;

          height:
            40px;

          display:
            grid;

          place-items:
            center;

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
            #82949e;

          background:
            rgba(
              255,
              255,
              255,
              0.02
            );

          transition:
            color
              0.2s ease,
            transform
              0.2s ease;
        }

        .mws-result-card:hover
          .mws-result-arrow {
          color:
            var(
              --mws-blue-light
            );

          transform:
            translateX(
              2px
            );
        }

        .mws-result-card:nth-child(even):hover
          .mws-result-arrow {
          color:
            var(
              --mws-orange-light
            );
        }

        .mws-result-arrow svg {
          width:
            17px;

          height:
            17px;
        }

        /* =====================================================
           NO RESULTS
        ===================================================== */

        .mws-no-results {
          max-width:
            760px;

          margin:
            50px auto 0;

          padding:
            45px;

          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.2
            );

          border-radius:
            18px;

          text-align:
            center;

          background:
            radial-gradient(
              circle at center,
              rgba(
                255,
                121,
                0,
                0.055
              ),
              transparent
              55%
            ),
            #071015;
        }

        .mws-no-results-icon {
          width:
            67px;

          height:
            67px;

          display:
            grid;

          place-items:
            center;

          margin:
            0 auto 18px;

          border:
            1px solid
            rgba(
              255,
              121,
              0,
              0.25
            );

          border-radius:
            17px;

          color:
            var(
              --mws-orange
            );

          background:
            rgba(
              255,
              121,
              0,
              0.05
            );
        }

        .mws-no-results-icon svg {
          width:
            31px;

          height:
            31px;
        }

        .mws-no-results h3 {
          margin:
            0;

          font-size:
            27px;

          letter-spacing:
            -0.035em;
        }

        .mws-no-results p {
          max-width:
            560px;

          margin:
            13px auto 0;

          color:
            var(
              --mws-muted
            );

          font-size:
            13px;

          line-height:
            1.7;
        }

        .mws-no-results button {
          min-height:
            46px;

          margin-top:
            21px;

          padding:
            0 18px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.35
            );

          border-radius:
            8px;

          color:
            white;

          background:
            rgba(
              8,
              185,
              244,
              0.08
            );

          font-weight:
            850;

          cursor:
            pointer;
        }

        /* =====================================================
           SEARCH NOTE
        ===================================================== */

        .mws-note {
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

        .mws-note-card {
          max-width:
            1050px;

          margin:
            0 auto;

          display:
            grid;

          grid-template-columns:
            auto 1fr;

          align-items:
            center;

          gap:
            22px;

          padding:
            34px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.2
            );

          border-radius:
            17px;

          background:
            linear-gradient(
              145deg,
              #08131a,
              #04080b
            );
        }

        .mws-note-icon {
          width:
            65px;

          height:
            65px;

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
              0.28
            );

          border-radius:
            15px;

          color:
            var(
              --mws-blue-light
            );

          background:
            rgba(
              8,
              185,
              244,
              0.05
            );
        }

        .mws-note-icon svg {
          width:
            31px;

          height:
            31px;
        }

        .mws-note-copy h2 {
          margin:
            0 0 8px;

          font-size:
            clamp(
              24px,
              3vw,
              36px
            );

          letter-spacing:
            -0.035em;
        }

        .mws-note-copy p {
          margin:
            0;

          color:
            var(
              --mws-muted
            );

          font-size:
            13px;

          line-height:
            1.7;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (
          max-width:
          700px
        ) {
          .mws-hero {
            padding:
              70px 16px;
          }

          .mws-search-section {
            padding:
              55px 16px
              80px;
          }

          .mws-result-card {
            grid-template-columns:
              48px 1fr;

            min-height:
              0;

            padding:
              18px;
          }

          .mws-result-icon {
            width:
              48px;

            height:
              48px;
          }

          .mws-result-arrow {
            display:
              none;
          }

          .mws-result-meta {
            align-items:
              flex-start;

            flex-direction:
              column;
          }

          .mws-note-card {
            grid-template-columns:
              1fr;

            text-align:
              center;
          }

          .mws-note-icon {
            margin:
              0 auto;
          }
        }

        @media (
          max-width:
          500px
        ) {
          .mws-search-input-wrap {
            min-height:
              62px;
          }

          .mws-search-input {
            min-height:
              60px;

            padding:
              0 12px;

            font-size:
              15px;
          }

          .mws-search-icon {
            margin-left:
              15px;
          }

          .mws-result-card {
            grid-template-columns:
              1fr;
          }

          .mws-result-icon {
            margin-bottom:
              2px;
          }

          .mws-no-results {
            padding:
              32px 20px;
          }
        }
      `}</style>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        className="mws-hero"
        id="search"
      >
        <div className="mws-hero-inner">
          <div className="mws-kicker">
            <Search />
            Matthew Web Search
          </div>

          <h1>
            Find the{" "}
            <span className="mws-blue">
              Technology,
            </span>
            <br />

            Service, or{" "}
            <span className="mws-orange">
              Project.
            </span>
          </h1>

          <p>
            Search across Matthew Web services,
            software, projects, games,
            educational technology, CPU and FPGA
            research, pricing, articles, support,
            and company information.
          </p>
        </div>
      </section>

      {/* ======================================================
          SEARCH
      ====================================================== */}

      <section className="mws-search-section">
        <div className="mws-container">
          <div className="mws-search-box">
            <div className="mws-search-input-wrap">
              <Search className="mws-search-icon" />

              <input
                className="mws-search-input"
                type="search"
                value={query}
                onChange={(event) =>
                  setQuery(
                    event.target.value
                  )
                }
                placeholder="Search websites, software, SEO, games, CPU, pricing..."
                aria-label="Search Matthew Web"
                autoFocus
              />

              {query ? (
                <button
                  type="button"
                  className="mws-clear"
                  onClick={
                    clearSearch
                  }
                  aria-label="Clear search"
                  title="Clear search"
                >
                  <X />
                </button>
              ) : null}
            </div>
          </div>

          {/* ==================================================
              SHORTCUTS
          ================================================== */}

          <div className="mws-shortcuts">
            {categoryShortcuts.map(
              (item) => {
                const Icon =
                  item.icon;

                return (
                  <button
                    type="button"
                    className="mws-shortcut"
                    key={item.label}
                    onClick={() =>
                      setQuery(
                        item.query
                      )
                    }
                  >
                    <Icon />
                    {item.label}
                  </button>
                );
              }
            )}
          </div>

          {/* ==================================================
              RESULT COUNT
          ================================================== */}

          <div className="mws-result-meta">
            <div>
              <strong>
                {
                  filteredResults.length
                }
              </strong>{" "}
              result
              {filteredResults.length ===
              1
                ? ""
                : "s"}
            </div>

            <div>
              {query
                ? `Searching for: ${query}`
                : "Showing the Matthew Web site index"}
            </div>
          </div>

          {/* ==================================================
              RESULTS
          ================================================== */}

          {filteredResults.length >
          0 ? (
            <div className="mws-results">
              {filteredResults.map(
                (item) => {
                  const Icon =
                    item.icon;

                  return (
                    <Link
                      href={
                        item.href
                      }
                      className="mws-result-card"
                      key={`${item.href}-${item.title}`}
                    >
                      <div className="mws-result-icon">
                        <Icon />
                      </div>

                      <div className="mws-result-copy">
                        <div className="mws-result-category">
                          {
                            item.category
                          }
                        </div>

                        <h3>
                          {
                            item.title
                          }
                        </h3>

                        <p>
                          {
                            item.description
                          }
                        </p>
                      </div>

                      <div className="mws-result-arrow">
                        <ArrowRight />
                      </div>
                    </Link>
                  );
                }
              )}
            </div>
          ) : (
            <div className="mws-no-results">
              <div className="mws-no-results-icon">
                <Search />
              </div>

              <h3>
                No Matches Found
              </h3>

              <p>
                Try a broader search such as
                website, software, SEO, games,
                CPU, FPGA, pricing, support,
                contact, or project.
              </p>

              <button
                type="button"
                onClick={
                  clearSearch
                }
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ======================================================
          SEARCH NOTE
      ====================================================== */}

      <section className="mws-note">
        <div className="mws-note-card">
          <div className="mws-note-icon">
            <Sparkles />
          </div>

          <div className="mws-note-copy">
            <h2>
              Can&apos;t Find What You Need?
            </h2>

            <p>
              The search index covers Matthew
              Web&apos;s main public pages,
              services, projects, articles,
              pricing, and technology areas. If
              your question is more specific,
              contact Matthew Web and explain
              what you are trying to find or
              build.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
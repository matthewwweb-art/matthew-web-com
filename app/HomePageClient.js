"use client";

import { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  CircuitBoard,
  Code2,
  Cpu,
  Database,
  FileCode2,
  Gamepad2,
  Globe2,
  GraduationCap,
  Heart,
  Layers3,
  LockKeyhole,
  MessageSquare,
  MonitorSmartphone,
  Network,
  Rocket,
  SearchCheck,
  Server,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/* ============================================================
   COMPANY AREAS
============================================================ */

const companyAreas = [
  {
    icon: Globe2,
    title: "Web",
    status: "AVAILABLE NOW",
    text:
      "Modern websites, redesigns, mobile layouts, business functionality, domains, deployment, forms, payments, analytics, SEO and ongoing support.",
    href: "/website-design",
    accent: "blue",
  },
  {
    icon: Code2,
    title: "Software",
    status: "AVAILABLE + EXPANDING",
    text:
      "Custom software and business tools designed around real workflows instead of forcing businesses into one-size-fits-all systems.",
    href: "/custom-software",
    accent: "orange",
  },
  {
    icon: Gamepad2,
    title: "Games",
    status: "ACTIVE DEVELOPMENT",
    text:
      "Original interactive projects and games developed under Matthew Web, including our growing game-development pipeline.",
    href: "/free-game-hub-project",
    accent: "blue",
  },
  {
    icon: GraduationCap,
    title: "Education",
    status: "GROWING",
    text:
      "Educational technology and computing projects designed to make CPUs, software, hardware and digital technology easier to explore.",
    href: "/blog",
    accent: "orange",
  },
  {
    icon: Cpu,
    title: "Hardware",
    status: "R&D / FPGA",
    text:
      "CPU architecture, FPGA validation and long-term computer hardware research. Advanced hardware remains research and future development.",
    href: "/about-us",
    accent: "blue",
  },
];

/* ============================================================
   WEBSITE SERVICES
============================================================ */

const webServices = [
  {
    icon: MonitorSmartphone,
    title: "Website Design & Redesign",
    text:
      "Responsive modern websites built around the business, customer and purpose of the site.",
  },
  {
    icon: Rocket,
    title: "Domains & Deployment",
    text:
      "Domain connection, deployment, hosting setup and getting your finished website live.",
  },
  {
    icon: FileCode2,
    title: "Business Functionality",
    text:
      "Forms, lead capture, customer actions, payment integrations and custom functionality.",
  },
  {
    icon: SearchCheck,
    title: "SEO & Indexing",
    text:
      "Technical search structure, indexing setup and improvements that help search engines understand your site.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    text:
      "Traffic and performance tracking so business decisions can be based on useful information.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    text:
      "Ongoing updates, fixes, improvements and technical help after your website launches.",
  },
];

/* ============================================================
   CURRENT PROJECTS
============================================================ */

const activeProjects = [
  {
    type: "builder",
    status: "ACTIVE DEVELOPMENT",
    category: "SOFTWARE / WEB",
    title: "Word-First Website Builder",
    text:
      "A new website-building direction that uses Microsoft Word as the visual authoring surface while Matthew Web handles translation, rendering, publishing, domains, components, animation and web functionality.",
    detail:
      "Future Excel integration is planned for leads, revenue, customer data and reporting.",
  },
  {
    type: "game",
    status: "ACTIVE DEVELOPMENT",
    category: "GAME DEVELOPMENT",
    title: "Snow Plow Horror",
    text:
      "An original Maine-inspired snow-plow horror game with driving systems, changing weather, backroads, vehicle controls and atmospheric gameplay.",
    detail:
      "Development continues as part of Matthew Web's growing game portfolio.",
  },
  {
    type: "fpga",
    status: "ACTIVE R&D",
    category: "CPU / FPGA",
    title: "CPU & FPGA Research",
    text:
      "Matthew Web is designing and validating custom processor architecture through simulation and FPGA hardware as part of a longer-term computing roadmap.",
    detail:
      "Future 64-bit CPUs, GPUs, memory, storage and complete computer hardware remain R&D goals—not current commercial products.",
  },
];

/* ============================================================
   WHY MATTHEW WEB
============================================================ */

const whyCards = [
  {
    icon: MessageSquare,
    title: "Direct Communication",
    text:
      "Work directly with the person building and managing the project instead of being passed through layers of departments.",
  },
  {
    icon: Layers3,
    title: "Built Around the Problem",
    text:
      "The goal is not to force every client into the same template. We look at the actual problem and build around it.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Small-Business Focus",
    text:
      "Matthew Web understands that smaller businesses need practical technology, clear pricing and solutions that can grow with them.",
  },
  {
    icon: Sparkles,
    title: "Technology That Keeps Growing",
    text:
      "Web work is only one part of Matthew Web. Software, games, education and computing research expand what we can build over time.",
  },
];

/* ============================================================
   LONG-TERM R&D ROADMAP
============================================================ */

const roadmap = [
  "CPU Architecture",
  "64-Bit & Multicore",
  "Modular CPU",
  "GPU",
  "Memory",
  "Storage",
  "Networking & I/O",
  "Motherboard / Interconnect",
  "Power & Cooling",
  "Complete Computer Systems",
];

/* ============================================================
   TESTIMONIALS
============================================================ */

const homeTestimonials = [
  {
    name: "Chris P.",
    initials: "CP",
    quote:
      "I can't thank the team at Matthew enough for the amazing job they did on my website. They listened to my needs and created a site that perfectly reflects my brand and message. Plus, they were able to get it done in a short amount of time and at a price that was very reasonable. I highly recommend their services.",
  },
  {
    name: "Samantha H.",
    initials: "SH",
    quote:
      "I was hesitant to invest in a website for my small business, but I'm so glad I did! The team at Matthew was knowledgeable, responsive, and patient with all of my questions. The end result was a beautiful, professional website that helped me reach a wider audience.",
  },
  {
    name: "Walter D.",
    initials: "WD",
    quote:
      "I had a great experience working with this web design firm. They were able to take my vision for my website and turn it into a reality while being professional and easy to work with. I'm extremely satisfied with the end result.",
  },
];

/* ============================================================
   FAQ
============================================================ */

const faqs = [
  {
    q: "What does Matthew Web do today?",
    a:
      "Matthew Web currently provides website development, redesign, maintenance, domain and deployment assistance, forms, payment integrations, analytics, indexing, business functionality, ongoing support and custom software work.",
  },
  {
    q: "Do you only build websites?",
    a:
      "No. Website services are an important part of the business, but Matthew Web is expanding into custom software, games, educational technology and computer hardware research.",
  },
  {
    q: "Do you work with small businesses?",
    a:
      "Yes. Small businesses are a major focus. We work with businesses that have no website as well as businesses with outdated, broken, slow, non-mobile or incomplete websites.",
  },
  {
    q: "Can you redesign an existing website?",
    a:
      "Yes. We can review an existing website and rebuild or improve its design, mobile experience, structure, functionality and technical setup.",
  },
  {
    q: "Can you help connect my domain?",
    a:
      "Yes. Domain connection and deployment assistance are part of the website services we can provide.",
  },
  {
    q: "Do you offer SEO and indexing help?",
    a:
      "Yes. Matthew Web can help with search-friendly site structure, technical SEO basics, sitemap and indexing setup, and search-engine visibility work.",
  },
  {
    q: "Is the Word-first website builder available yet?",
    a:
      "Not yet. It is an active development project. The goal is to let Word act as a familiar visual authoring environment while Matthew Web handles the web technology behind it.",
  },
  {
    q: "Can I buy Matthew Web CPUs or computer hardware?",
    a:
      "Not currently. CPU architecture and FPGA work are active research and development. Future processor, GPU, memory, storage and computer-system work is part of the long-term roadmap.",
  },
];

/* ============================================================
   PROJECT VISUAL
============================================================ */

function ProjectVisual({ type }) {
  if (type === "builder") {
    return (
      <div className="mwh-project-visual mwh-builder-visual" aria-hidden="true">
        <div className="mwh-builder-window">
          <div className="mwh-builder-topbar">
            <span />
            <span />
            <span />
            <strong>WORD → WEB</strong>
          </div>

          <div className="mwh-builder-body">
            <div className="mwh-builder-document">
              <div className="mwh-doc-title" />
              <div className="mwh-doc-line long" />
              <div className="mwh-doc-line" />
              <div className="mwh-doc-card-row">
                <div />
                <div />
                <div />
              </div>
            </div>

            <div className="mwh-builder-arrow">
              <ArrowRight />
            </div>

            <div className="mwh-builder-browser">
              <div className="mwh-browser-bar" />
              <div className="mwh-browser-hero" />
              <div className="mwh-browser-grid">
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "game") {
    return (
      <div className="mwh-project-visual mwh-game-visual" aria-hidden="true">
        <div className="mwh-snow sky-one" />
        <div className="mwh-snow sky-two" />
        <div className="mwh-snow sky-three" />
        <div className="mwh-snow sky-four" />
        <div className="mwh-snow sky-five" />

        <div className="mwh-game-mountain mountain-one" />
        <div className="mwh-game-mountain mountain-two" />

        <div className="mwh-game-road">
          <span />
          <span />
          <span />
        </div>

        <div className="mwh-truck">
          <div className="mwh-truck-cab" />
          <div className="mwh-truck-bed" />
          <div className="mwh-truck-light" />
          <div className="mwh-truck-wheel wheel-one" />
          <div className="mwh-truck-wheel wheel-two" />
          <div className="mwh-plow" />
        </div>

        <div className="mwh-game-label">
          <Gamepad2 />
          COUNTY ROAD
        </div>
      </div>
    );
  }

  return (
    <div className="mwh-project-visual mwh-fpga-visual" aria-hidden="true">
      <div className="mwh-board">
        <div className="mwh-chip">
          <Cpu />
          <span>CPU</span>
        </div>

        <div className="mwh-board-line line-a" />
        <div className="mwh-board-line line-b" />
        <div className="mwh-board-line line-c" />
        <div className="mwh-board-line line-d" />
        <div className="mwh-board-line line-e" />

        <span className="mwh-board-node node-a" />
        <span className="mwh-board-node node-b" />
        <span className="mwh-board-node node-c" />
        <span className="mwh-board-node node-d" />

        <div className="mwh-board-port port-a" />
        <div className="mwh-board-port port-b" />

        <div className="mwh-fpga-label">
          <CircuitBoard />
          FPGA VALIDATION
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   HOME PAGE
============================================================ */

export default function HomePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business_name: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const recaptchaSiteKey =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const currentTestimonial =
    homeTestimonials[testimonialIndex];

  function updateField(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function previousTestimonial() {
    setTestimonialIndex((current) =>
      current === 0
        ? homeTestimonials.length - 1
        : current - 1
    );
  }

  function nextTestimonial() {
    setTestimonialIndex((current) =>
      current === homeTestimonials.length - 1
        ? 0
        : current + 1
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus("");
    setStatusType("");

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.business_name
    ) {
      setStatus("Please fill out all required fields.");
      setStatusType("error");
      return;
    }

    const recaptchaToken =
      typeof window !== "undefined" &&
      window.grecaptcha
        ? window.grecaptcha.getResponse()
        : "";

    if (!recaptchaToken) {
      setStatus("Please complete the reCAPTCHA.");
      setStatusType("error");
      return;
    }

    try {
      setSubmitting(true);

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          page_source: "Home Page",
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(
          data.error || "Something went wrong."
        );
      }

      setForm({
        name: "",
        email: "",
        phone: "",
        business_name: "",
        message: "",
      });

      if (
        typeof window !== "undefined" &&
        window.grecaptcha
      ) {
        window.grecaptcha.reset();
      }

      setStatus(
        "Thank you! We received your message and will be in contact within 48 hours."
      );

      setStatusType("success");
    } catch (error) {
      setStatus(
        error.message ||
          "Something went wrong. Please try again."
      );

      setStatusType("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="mw-home">
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />

      <SiteHeader />

      <style jsx global>{`
        :root {
          --mwh-black: #020304;
          --mwh-black-soft: #060a0e;
          --mwh-panel: #090f14;
          --mwh-panel-light: #0d151c;

          --mwh-white: #ffffff;
          --mwh-muted: #aebbc5;

          --mwh-blue: #08b9f4;
          --mwh-blue-light: #38d7ff;

          --mwh-orange: #ff7900;
          --mwh-orange-light: #ffab31;

          --mwh-border: rgba(255, 255, 255, 0.09);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--mwh-black);
        }

        .mw-home {
          min-height: 100vh;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 15% 15%,
              rgba(8, 185, 244, 0.035),
              transparent 24%
            ),
            radial-gradient(
              circle at 85% 35%,
              rgba(255, 121, 0, 0.025),
              transparent 23%
            ),
            var(--mwh-black);

          color: white;
        }

        .mwh-section {
          position: relative;

          width: 100%;

          padding:
            105px
            clamp(20px, 5vw, 80px);
        }

        .mwh-container {
          width: 100%;

          max-width: 1380px;

          margin: 0 auto;
        }

        .mwh-section-kicker {
          display: inline-flex;

          align-items: center;

          gap: 9px;

          margin-bottom: 15px;

          color: var(--mwh-blue-light);

          font-size: 13px;
          font-weight: 850;

          letter-spacing: 0.18em;

          text-transform: uppercase;
        }

        .mwh-section-kicker.orange {
          color: var(--mwh-orange-light);
        }

        .mwh-section-kicker svg {
          width: 18px;
          height: 18px;
        }

        .mwh-section-heading {
          max-width: 900px;

          margin-bottom: 46px;
        }

        .mwh-section-heading.center {
          margin-left: auto;
          margin-right: auto;

          text-align: center;
        }

        .mwh-section-heading h2 {
          margin: 0 0 18px;

          color: white;

          font-size:
            clamp(
              36px,
              4.2vw,
              67px
            );

          line-height: 1.03;

          letter-spacing: -0.045em;
        }

        .mwh-section-heading p {
          max-width: 800px;

          margin: 0;

          color: var(--mwh-muted);

          font-size:
            clamp(
              16px,
              1.4vw,
              20px
            );

          line-height: 1.75;
        }

        .mwh-section-heading.center p {
          margin-left: auto;
          margin-right: auto;
        }

        .mwh-blue-text {
          color: var(--mwh-blue-light);
        }

        .mwh-orange-text {
          color: var(--mwh-orange);
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .mwh-button-row {
          display: flex;

          align-items: center;

          flex-wrap: wrap;

          gap: 14px;

          margin-top: 31px;
        }

        .mwh-btn {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 10px;

          min-height: 54px;

          padding: 0 23px;

          border-radius: 10px;

          text-decoration: none;

          font-size: 15px;
          font-weight: 850;

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease,
            border-color 0.2s ease;
        }

        .mwh-btn svg {
          width: 19px;
          height: 19px;
        }

        .mwh-btn-primary {
          color: white;

          border:
            1px solid
            rgba(66, 217, 255, 0.72);

          background:
            linear-gradient(
              180deg,
              #0ab6ed,
              #0789b6
            );

          box-shadow:
            0 0 15px
            rgba(8, 185, 244, 0.38),
            inset 0 1px 0
            rgba(255, 255, 255, 0.2);
        }

        .mwh-btn-primary:hover {
          transform: translateY(-2px);

          box-shadow:
            0 0 22px
            rgba(8, 185, 244, 0.55);
        }

        .mwh-btn-orange {
          color: white;

          border:
            1px solid
            rgba(255, 176, 55, 0.72);

          background:
            linear-gradient(
              180deg,
              #ff9519,
              #f16600
            );

          box-shadow:
            0 0 15px
            rgba(255, 121, 0, 0.38),
            inset 0 1px 0
            rgba(255, 255, 255, 0.21);
        }

        .mwh-btn-orange:hover {
          transform: translateY(-2px);

          box-shadow:
            0 0 22px
            rgba(255, 121, 0, 0.55);
        }

        .mwh-btn-dark {
          color: white;

          border:
            1px solid
            rgba(255, 255, 255, 0.14);

          background:
            rgba(255, 255, 255, 0.035);
        }

        .mwh-btn-dark:hover {
          transform: translateY(-2px);

          border-color:
            rgba(8, 185, 244, 0.5);

          background:
            rgba(8, 185, 244, 0.07);
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwh-hero {
          position: relative;

          min-height:
            clamp(
              620px,
              76vh,
              850px
            );

          display: flex;

          align-items: center;

          overflow: hidden;

          border-bottom:
            1px solid
            rgba(8, 185, 244, 0.17);

          background:
            radial-gradient(
              ellipse at 23% 44%,
              rgba(8, 185, 244, 0.16),
              transparent 36%
            ),
            radial-gradient(
              ellipse at 76% 48%,
              rgba(255, 121, 0, 0.08),
              transparent 31%
            ),
            linear-gradient(
              180deg,
              #020304,
              #03080c 62%,
              #020304
            );
        }

        .mwh-hero::before {
          content: "";

          position: absolute;

          inset: 0;

          opacity: 0.3;

          pointer-events: none;

          background-image:
            linear-gradient(
              rgba(8, 185, 244, 0.06) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(8, 185, 244, 0.06) 1px,
              transparent 1px
            );

          background-size: 75px 75px;

          mask-image:
            radial-gradient(
              ellipse at center,
              black,
              transparent 78%
            );
        }

        .mwh-hero-glow {
          position: absolute;

          border-radius: 50%;

          pointer-events: none;

          filter: blur(50px);

          animation:
            mwhHeroGlow
            6s ease-in-out
            infinite alternate;
        }

        .mwh-hero-glow.one {
          width: 330px;
          height: 260px;

          left: 3%;
          top: 30%;

          background:
            rgba(8, 185, 244, 0.14);
        }

        .mwh-hero-glow.two {
          width: 290px;
          height: 230px;

          right: 8%;
          bottom: 8%;

          background:
            rgba(255, 121, 0, 0.08);

          animation-delay: 1s;
        }

        @keyframes mwhHeroGlow {
          from {
            opacity: 0.45;

            transform:
              translateY(10px)
              scale(0.92);
          }

          to {
            opacity: 1;

            transform:
              translateY(-12px)
              scale(1.08);
          }
        }

        .mwh-hero-inner {
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
              100px
            );

          width: 100%;

          max-width: 1380px;

          margin: 0 auto;

          padding:
            95px
            clamp(20px, 5vw, 80px);
        }

        .mwh-hero-badge {
          display: inline-flex;

          align-items: center;

          gap: 9px;

          width: fit-content;

          margin-bottom: 24px;

          padding:
            9px 13px;

          border:
            1px solid
            rgba(8, 185, 244, 0.3);

          border-radius: 999px;

          color: #dff8ff;

          background:
            rgba(8, 185, 244, 0.07);

          box-shadow:
            inset 0 0 18px
            rgba(8, 185, 244, 0.04);

          font-size: 12px;
          font-weight: 800;

          letter-spacing: 0.12em;

          text-transform: uppercase;
        }

        .mwh-hero-badge span {
          width: 8px;
          height: 8px;

          border-radius: 50%;

          background: var(--mwh-blue);

          box-shadow:
            0 0 10px
            var(--mwh-blue);
        }

        .mwh-hero-copy h1 {
          max-width: 820px;

          margin: 0;

          font-size:
            clamp(
              49px,
              6.2vw,
              96px
            );

          line-height: 0.96;

          letter-spacing: -0.06em;
        }

        .mwh-hero-copy h1 .line {
          display: block;
        }

        .mwh-hero-copy h1 .blue {
          color: var(--mwh-blue-light);

          text-shadow:
            0 0 22px
            rgba(8, 185, 244, 0.25);
        }

        .mwh-hero-copy h1 .orange {
          color: var(--mwh-orange);

          text-shadow:
            0 0 22px
            rgba(255, 121, 0, 0.24);
        }

        .mwh-hero-copy > p {
          max-width: 790px;

          margin: 28px 0 0;

          color: #becbd4;

          font-size:
            clamp(
              17px,
              1.45vw,
              21px
            );

          line-height: 1.72;
        }

        .mwh-hero-mini {
          display: flex;

          flex-wrap: wrap;

          gap: 15px 24px;

          margin-top: 27px;

          color: #d8e3e9;

          font-size: 13px;
          font-weight: 700;
        }

        .mwh-hero-mini span {
          display: inline-flex;

          align-items: center;

          gap: 7px;
        }

        .mwh-hero-mini svg {
          width: 17px;
          height: 17px;

          color: var(--mwh-blue-light);
        }

        /* =====================================================
           HERO TECH STACK
        ===================================================== */

        .mwh-tech-core {
          position: relative;

          min-height: 470px;

          display: grid;

          place-items: center;
        }

        .mwh-core-orbit {
          position: absolute;

          border-radius: 50%;
        }

        .mwh-core-orbit.outer {
          width: 430px;
          height: 430px;

          border:
            1px solid
            rgba(8, 185, 244, 0.15);

          box-shadow:
            0 0 50px
            rgba(8, 185, 244, 0.08);

          animation:
            mwhCoreSpin
            22s linear
            infinite;
        }

        .mwh-core-orbit.outer::before,
        .mwh-core-orbit.outer::after {
          content: "";

          position: absolute;

          width: 8px;
          height: 8px;

          border-radius: 50%;
        }

        .mwh-core-orbit.outer::before {
          top: -4px;
          left: 50%;

          background:
            var(--mwh-blue-light);

          box-shadow:
            0 0 13px
            var(--mwh-blue);
        }

        .mwh-core-orbit.outer::after {
          bottom: -4px;
          left: 50%;

          background:
            var(--mwh-orange);

          box-shadow:
            0 0 13px
            var(--mwh-orange);
        }

        .mwh-core-orbit.inner {
          width: 320px;
          height: 320px;

          border:
            1px dashed
            rgba(255, 121, 0, 0.2);

          animation:
            mwhCoreSpin
            16s linear
            infinite reverse;
        }

        @keyframes mwhCoreSpin {
          to {
            transform: rotate(360deg);
          }
        }

        .mwh-core-card {
          position: relative;

          z-index: 3;

          width: 290px;
          min-height: 290px;

          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;

          padding: 32px;

          border:
            1px solid
            rgba(8, 185, 244, 0.38);

          border-radius: 32px;

          text-align: center;

          background:
            radial-gradient(
              circle at 40% 25%,
              rgba(8, 185, 244, 0.15),
              transparent 35%
            ),
            linear-gradient(
              145deg,
              rgba(12, 22, 29, 0.98),
              rgba(3, 7, 10, 0.99)
            );

          box-shadow:
            0 0 35px
            rgba(8, 185, 244, 0.13),
            inset 0 0 30px
            rgba(8, 185, 244, 0.04);
        }

        .mwh-core-icon {
          width: 86px;
          height: 86px;

          display: grid;

          place-items: center;

          margin-bottom: 21px;

          border:
            1px solid
            rgba(255, 121, 0, 0.4);

          border-radius: 20px;

          background:
            rgba(255, 121, 0, 0.06);

          box-shadow:
            0 0 25px
            rgba(255, 121, 0, 0.12);
        }

        .mwh-core-icon svg {
          width: 48px;
          height: 48px;

          color: var(--mwh-orange);

          filter:
            drop-shadow(
              0 0 10px
              rgba(255, 121, 0, 0.38)
            );
        }

        .mwh-core-card strong {
          color: white;

          font-size: 25px;

          letter-spacing: -0.025em;
        }

        .mwh-core-card p {
          margin: 10px 0 0;

          color: var(--mwh-muted);

          font-size: 13px;

          line-height: 1.6;
        }

        .mwh-core-label {
          position: absolute;

          display: flex;

          align-items: center;

          gap: 7px;

          padding:
            9px 12px;

          border:
            1px solid
            rgba(255, 255, 255, 0.1);

          border-radius: 8px;

          background:
            rgba(4, 9, 13, 0.92);

          color: #dbe7ed;

          font-size: 11px;
          font-weight: 850;

          letter-spacing: 0.08em;

          box-shadow:
            0 8px 25px
            rgba(0, 0, 0, 0.3);
        }

        .mwh-core-label svg {
          width: 17px;
          height: 17px;

          color: var(--mwh-blue-light);
        }

        .mwh-core-label.web {
          top: 12%;
          left: 1%;
        }

        .mwh-core-label.software {
          top: 13%;
          right: 0;
        }

        .mwh-core-label.games {
          bottom: 13%;
          left: 1%;
        }

        .mwh-core-label.hardware {
          bottom: 12%;
          right: -2%;
        }

        /* =====================================================
           AREA CARDS
        ===================================================== */

        .mwh-areas {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d 50%,
              #020304
            );
        }

        .mwh-area-grid {
          display: grid;

          grid-template-columns:
            repeat(5, minmax(0, 1fr));

          gap: 16px;
        }

        .mwh-area-card {
          position: relative;

          min-height: 315px;

          padding: 26px 23px;

          overflow: hidden;

          border:
            1px solid
            var(--mwh-border);

          border-radius: 18px;

          background:
            linear-gradient(
              145deg,
              rgba(13, 21, 28, 0.88),
              rgba(4, 8, 11, 0.95)
            );

          text-decoration: none;

          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .mwh-area-card::before {
          content: "";

          position: absolute;

          inset: 0;

          opacity: 0;

          transition:
            opacity 0.25s ease;
        }

        .mwh-area-card.blue::before {
          background:
            radial-gradient(
              circle at 25% 15%,
              rgba(8, 185, 244, 0.14),
              transparent 45%
            );
        }

        .mwh-area-card.orange::before {
          background:
            radial-gradient(
              circle at 25% 15%,
              rgba(255, 121, 0, 0.12),
              transparent 45%
            );
        }

        .mwh-area-card:hover {
          transform:
            translateY(-7px);

          border-color:
            rgba(8, 185, 244, 0.34);

          box-shadow:
            0 18px 45px
            rgba(0, 0, 0, 0.32),
            0 0 20px
            rgba(8, 185, 244, 0.08);
        }

        .mwh-area-card.orange:hover {
          border-color:
            rgba(255, 121, 0, 0.34);
        }

        .mwh-area-card:hover::before {
          opacity: 1;
        }

        .mwh-area-content {
          position: relative;

          z-index: 2;
        }

        .mwh-area-icon {
          width: 56px;
          height: 56px;

          display: grid;

          place-items: center;

          margin-bottom: 22px;

          border-radius: 14px;
        }

        .mwh-area-card.blue
          .mwh-area-icon {
          border:
            1px solid
            rgba(8, 185, 244, 0.35);

          background:
            rgba(8, 185, 244, 0.08);

          color: var(--mwh-blue-light);
        }

        .mwh-area-card.orange
          .mwh-area-icon {
          border:
            1px solid
            rgba(255, 121, 0, 0.35);

          background:
            rgba(255, 121, 0, 0.07);

          color:
            var(--mwh-orange-light);
        }

        .mwh-area-icon svg {
          width: 29px;
          height: 29px;
        }

        .mwh-status {
          display: inline-flex;

          align-items: center;

          gap: 6px;

          margin-bottom: 11px;

          color: #92a3af;

          font-size: 9px;
          font-weight: 900;

          letter-spacing: 0.15em;

          text-transform: uppercase;
        }

        .mwh-status::before {
          content: "";

          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: var(--mwh-blue);

          box-shadow:
            0 0 8px
            var(--mwh-blue);
        }

        .mwh-area-card.orange
          .mwh-status::before {
          background: var(--mwh-orange);

          box-shadow:
            0 0 8px
            var(--mwh-orange);
        }

        .mwh-area-card h3 {
          margin: 0 0 13px;

          color: white;

          font-size: 23px;

          letter-spacing: -0.03em;
        }

        .mwh-area-card p {
          margin: 0;

          color: var(--mwh-muted);

          font-size: 14px;

          line-height: 1.72;
        }

        .mwh-area-more {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          margin-top: 20px;

          color: white;

          font-size: 12px;
          font-weight: 800;
        }

        .mwh-area-more svg {
          width: 15px;
          height: 15px;
        }

        /* =====================================================
           WEBSITE SERVICES
        ===================================================== */

        .mwh-services {
          background:
            radial-gradient(
              ellipse at 85% 30%,
              rgba(255, 121, 0, 0.055),
              transparent 31%
            ),
            #020304;
        }

        .mwh-services-layout {
          display: grid;

          grid-template-columns:
            minmax(360px, 0.82fr)
            minmax(0, 1.18fr);

          gap:
            clamp(
              45px,
              6vw,
              90px
            );

          align-items: start;
        }

        .mwh-service-intro {
          position: sticky;

          top: 30px;
        }

        .mwh-service-intro h2 {
          margin: 0 0 22px;

          font-size:
            clamp(
              40px,
              4.5vw,
              68px
            );

          line-height: 1;

          letter-spacing: -0.05em;
        }

        .mwh-service-intro p {
          margin: 0;

          color: var(--mwh-muted);

          font-size: 17px;

          line-height: 1.78;
        }

        .mwh-live-badge {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          margin-bottom: 18px;

          padding:
            8px 11px;

          border:
            1px solid
            rgba(71, 219, 255, 0.26);

          border-radius: 7px;

          color: #c9f5ff;

          background:
            rgba(8, 185, 244, 0.06);

          font-size: 10px;
          font-weight: 900;

          letter-spacing: 0.13em;
        }

        .mwh-live-badge span {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #35e07e;

          box-shadow:
            0 0 9px
            rgba(53, 224, 126, 0.8);
        }

        .mwh-service-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 15px;
        }

        .mwh-service-card {
          min-height: 230px;

          padding: 25px;

          border:
            1px solid
            var(--mwh-border);

          border-radius: 15px;

          background:
            linear-gradient(
              145deg,
              #0b1117,
              #05090c
            );

          transition:
            transform 0.2s ease,
            border-color 0.2s ease;
        }

        .mwh-service-card:hover {
          transform:
            translateY(-4px);

          border-color:
            rgba(8, 185, 244, 0.3);
        }

        .mwh-service-card svg {
          width: 30px;
          height: 30px;

          margin-bottom: 18px;

          color:
            var(--mwh-blue-light);
        }

        .mwh-service-card:nth-child(even)
          svg {
          color:
            var(--mwh-orange-light);
        }

        .mwh-service-card h3 {
          margin: 0 0 10px;

          font-size: 19px;
        }

        .mwh-service-card p {
          margin: 0;

          color: var(--mwh-muted);

          font-size: 14px;

          line-height: 1.68;
        }

        /* =====================================================
           PROJECTS
        ===================================================== */

        .mwh-projects {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwh-project-list {
          display: grid;

          gap: 25px;
        }

        .mwh-project-card {
          display: grid;

          grid-template-columns:
            minmax(0, 0.95fr)
            minmax(0, 1.05fr);

          min-height: 420px;

          overflow: hidden;

          border:
            1px solid
            var(--mwh-border);

          border-radius: 22px;

          background:
            linear-gradient(
              145deg,
              rgba(10, 17, 22, 0.96),
              rgba(3, 7, 10, 0.98)
            );

          box-shadow:
            0 25px 60px
            rgba(0, 0, 0, 0.24);
        }

        .mwh-project-card:nth-child(even)
          .mwh-project-visual {
          order: 2;
        }

        .mwh-project-copy {
          display: flex;

          flex-direction: column;

          justify-content: center;

          padding:
            clamp(
              35px,
              5vw,
              68px
            );
        }

        .mwh-project-meta {
          display: flex;

          flex-wrap: wrap;

          gap: 9px;

          margin-bottom: 18px;
        }

        .mwh-project-status,
        .mwh-project-category {
          display: inline-flex;

          align-items: center;

          min-height: 27px;

          padding:
            0 10px;

          border-radius: 999px;

          font-size: 9px;
          font-weight: 900;

          letter-spacing: 0.13em;

          text-transform: uppercase;
        }

        .mwh-project-status {
          color: #dffaff;

          border:
            1px solid
            rgba(8, 185, 244, 0.25);

          background:
            rgba(8, 185, 244, 0.07);
        }

        .mwh-project-category {
          color: #ffd9b6;

          border:
            1px solid
            rgba(255, 121, 0, 0.22);

          background:
            rgba(255, 121, 0, 0.055);
        }

        .mwh-project-copy h3 {
          margin: 0 0 17px;

          font-size:
            clamp(
              31px,
              3vw,
              49px
            );

          letter-spacing: -0.04em;

          line-height: 1.06;
        }

        .mwh-project-copy p {
          margin: 0;

          color: var(--mwh-muted);

          font-size: 16px;

          line-height: 1.75;
        }

        .mwh-project-detail {
          display: flex;

          align-items: flex-start;

          gap: 9px;

          margin-top: 18px;

          padding-top: 18px;

          border-top:
            1px solid
            rgba(255, 255, 255, 0.08);

          color: #d7e4eb;

          font-size: 13px;

          line-height: 1.65;
        }

        .mwh-project-detail svg {
          width: 18px;
          height: 18px;

          flex: 0 0 auto;

          margin-top: 2px;

          color:
            var(--mwh-orange-light);
        }

        /* =====================================================
           PROJECT VISUALS
        ===================================================== */

        .mwh-project-visual {
          position: relative;

          min-height: 420px;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 40% 40%,
              rgba(8, 185, 244, 0.1),
              transparent 40%
            ),
            #050b0f;
        }

        /* BUILDER */

        .mwh-builder-visual {
          display: grid;

          place-items: center;

          padding: 35px;

          background:
            radial-gradient(
              circle at 25% 30%,
              rgba(8, 185, 244, 0.16),
              transparent 33%
            ),
            radial-gradient(
              circle at 76% 70%,
              rgba(255, 121, 0, 0.09),
              transparent 34%
            ),
            #04090d;
        }

        .mwh-builder-window {
          width: min(100%, 540px);

          overflow: hidden;

          border:
            1px solid
            rgba(8, 185, 244, 0.3);

          border-radius: 14px;

          background:
            rgba(4, 9, 13, 0.96);

          box-shadow:
            0 25px 60px
            rgba(0, 0, 0, 0.55),
            0 0 30px
            rgba(8, 185, 244, 0.08);
        }

        .mwh-builder-topbar {
          min-height: 43px;

          display: flex;

          align-items: center;

          gap: 7px;

          padding: 0 13px;

          border-bottom:
            1px solid
            rgba(255, 255, 255, 0.08);

          background:
            #0c141a;
        }

        .mwh-builder-topbar span {
          width: 8px;
          height: 8px;

          border-radius: 50%;

          background:
            rgba(255, 255, 255, 0.25);
        }

        .mwh-builder-topbar span:nth-child(1) {
          background:
            var(--mwh-orange);
        }

        .mwh-builder-topbar span:nth-child(2) {
          background:
            var(--mwh-blue);
        }

        .mwh-builder-topbar strong {
          margin-left: auto;

          color: #c7d5dc;

          font-size: 9px;

          letter-spacing: 0.13em;
        }

        .mwh-builder-body {
          display: grid;

          grid-template-columns:
            1fr auto 1fr;

          align-items: center;

          gap: 18px;

          padding: 24px;
        }

        .mwh-builder-document,
        .mwh-builder-browser {
          min-height: 230px;

          padding: 20px;

          border:
            1px solid
            rgba(255, 255, 255, 0.1);

          border-radius: 9px;

          background: #111a20;
        }

        .mwh-builder-document {
          background:
            #f5f7f8;
        }

        .mwh-doc-title {
          width: 68%;
          height: 15px;

          margin-bottom: 18px;

          border-radius: 3px;

          background: #2478ba;
        }

        .mwh-doc-line {
          width: 76%;
          height: 7px;

          margin-bottom: 9px;

          border-radius: 2px;

          background: #aeb8bf;
        }

        .mwh-doc-line.long {
          width: 93%;
        }

        .mwh-doc-card-row {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 6px;

          margin-top: 25px;
        }

        .mwh-doc-card-row div {
          height: 54px;

          border-radius: 5px;

          background:
            linear-gradient(
              145deg,
              #08a0d2,
              #ff7900
            );
        }

        .mwh-builder-arrow svg {
          width: 27px;
          height: 27px;

          color:
            var(--mwh-orange);

          filter:
            drop-shadow(
              0 0 9px
              rgba(255, 121, 0, 0.45)
            );
        }

        .mwh-browser-bar {
          width: 100%;
          height: 14px;

          margin-bottom: 14px;

          border-radius: 3px;

          background:
            rgba(255, 255, 255, 0.12);
        }

        .mwh-browser-hero {
          height: 85px;

          border-radius: 6px;

          background:
            radial-gradient(
              circle at 25% 50%,
              rgba(8, 185, 244, 0.6),
              transparent 35%
            ),
            linear-gradient(
              120deg,
              #09161e,
              #081015
            );

          border:
            1px solid
            rgba(8, 185, 244, 0.22);
        }

        .mwh-browser-grid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 6px;

          margin-top: 13px;
        }

        .mwh-browser-grid div {
          height: 50px;

          border-radius: 5px;

          background:
            #13212a;

          border:
            1px solid
            rgba(255, 255, 255, 0.08);
        }

        /* GAME */

        .mwh-game-visual {
          position: relative;

          background:
            linear-gradient(
              180deg,
              #0b1923 0%,
              #101b20 48%,
              #dde6eb 49%,
              #bfcad0 100%
            );
        }

        .mwh-game-visual::after {
          content: "";

          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(8, 185, 244, 0.13),
              transparent 34%,
              rgba(255, 121, 0, 0.06)
            );

          pointer-events: none;
        }

        .mwh-game-mountain {
          position: absolute;

          top: 32%;

          width: 50%;
          height: 34%;

          background: #26343a;

          clip-path:
            polygon(
              0 100%,
              32% 25%,
              53% 60%,
              69% 15%,
              100% 100%
            );
        }

        .mwh-game-mountain.mountain-one {
          left: -5%;
        }

        .mwh-game-mountain.mountain-two {
          right: -8%;

          opacity: 0.75;

          transform: scale(1.15);
        }

        .mwh-game-road {
          position: absolute;

          left: 24%;
          right: 24%;

          bottom: -30px;

          height: 61%;

          background:
            linear-gradient(
              90deg,
              #67747a,
              #39454a 23%,
              #252f33 50%,
              #39454a 77%,
              #67747a
            );

          clip-path:
            polygon(
              43% 0,
              57% 0,
              100% 100%,
              0 100%
            );
        }

        .mwh-game-road span {
          position: absolute;

          left: 50%;

          width: 4px;
          height: 47px;

          background:
            rgba(255, 255, 255, 0.7);

          transform:
            translateX(-50%);
        }

        .mwh-game-road span:nth-child(1) {
          top: 28%;
        }

        .mwh-game-road span:nth-child(2) {
          top: 55%;
        }

        .mwh-game-road span:nth-child(3) {
          top: 85%;
        }

        .mwh-truck {
          position: absolute;

          z-index: 4;

          left: 50%;
          bottom: 17%;

          width: 150px;
          height: 85px;

          transform:
            translateX(-50%);
        }

        .mwh-truck-cab {
          position: absolute;

          right: 16px;
          bottom: 18px;

          width: 62px;
          height: 52px;

          border-radius:
            8px 8px 3px 3px;

          background:
            linear-gradient(
              145deg,
              #174f62,
              #092a35
            );

          border:
            1px solid
            rgba(8, 185, 244, 0.45);
        }

        .mwh-truck-bed {
          position: absolute;

          left: 25px;
          bottom: 18px;

          width: 72px;
          height: 35px;

          border-radius:
            3px 3px 0 0;

          background:
            #173b48;

          border:
            1px solid
            rgba(8, 185, 244, 0.35);
        }

        .mwh-truck-light {
          position: absolute;

          right: 43px;
          top: 7px;

          width: 25px;
          height: 7px;

          background:
            var(--mwh-orange);

          border-radius: 2px;

          box-shadow:
            0 0 15px
            rgba(255, 121, 0, 0.85);
        }

        .mwh-truck-wheel {
          position: absolute;

          bottom: 3px;

          width: 24px;
          height: 24px;

          border-radius: 50%;

          border:
            6px solid #090c0e;

          background: #3d464a;
        }

        .mwh-truck-wheel.wheel-one {
          left: 39px;
        }

        .mwh-truck-wheel.wheel-two {
          right: 25px;
        }

        .mwh-plow {
          position: absolute;

          right: -14px;
          bottom: 15px;

          width: 47px;
          height: 18px;

          transform: skewX(-24deg);

          background:
            var(--mwh-orange);

          box-shadow:
            0 0 12px
            rgba(255, 121, 0, 0.35);
        }

        .mwh-snow {
          position: absolute;

          z-index: 5;

          width: 5px;
          height: 5px;

          border-radius: 50%;

          background:
            rgba(255, 255, 255, 0.9);

          animation:
            mwhSnowFall
            2.7s linear
            infinite;
        }

        .mwh-snow.sky-one {
          left: 10%;
          top: 5%;
        }

        .mwh-snow.sky-two {
          left: 32%;
          top: 15%;

          animation-delay: 0.4s;
        }

        .mwh-snow.sky-three {
          left: 56%;
          top: 7%;

          animation-delay: 0.9s;
        }

        .mwh-snow.sky-four {
          left: 78%;
          top: 17%;

          animation-delay: 1.2s;
        }

        .mwh-snow.sky-five {
          left: 91%;
          top: 4%;

          animation-delay: 0.7s;
        }

        @keyframes mwhSnowFall {
          from {
            transform:
              translateY(-20px)
              translateX(-10px);

            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          to {
            transform:
              translateY(350px)
              translateX(50px);

            opacity: 0.2;
          }
        }

        .mwh-game-label,
        .mwh-fpga-label {
          position: absolute;

          z-index: 6;

          left: 25px;
          bottom: 22px;

          display: inline-flex;

          align-items: center;

          gap: 8px;

          padding:
            9px 11px;

          border:
            1px solid
            rgba(255, 255, 255, 0.15);

          border-radius: 7px;

          color: white;

          background:
            rgba(3, 8, 11, 0.8);

          backdrop-filter: blur(10px);

          font-size: 10px;
          font-weight: 900;

          letter-spacing: 0.13em;
        }

        .mwh-game-label svg,
        .mwh-fpga-label svg {
          width: 17px;
          height: 17px;

          color:
            var(--mwh-orange);
        }

        /* FPGA */

        .mwh-fpga-visual {
          display: grid;

          place-items: center;

          padding: 40px;

          background:
            radial-gradient(
              circle at center,
              rgba(8, 185, 244, 0.13),
              transparent 45%
            ),
            #03090d;
        }

        .mwh-board {
          position: relative;

          width:
            min(
              95%,
              500px
            );

          aspect-ratio: 1.45 / 1;

          overflow: hidden;

          border:
            2px solid
            rgba(8, 185, 244, 0.42);

          border-radius: 15px;

          background:
            linear-gradient(
              145deg,
              #064b42,
              #032c2c
            );

          box-shadow:
            0 25px 60px
            rgba(0, 0, 0, 0.5),
            0 0 30px
            rgba(8, 185, 244, 0.1),
            inset 0 0 40px
            rgba(0, 0, 0, 0.25);
        }

        .mwh-chip {
          position: absolute;

          z-index: 4;

          left: 50%;
          top: 50%;

          width: 120px;
          height: 120px;

          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;

          gap: 7px;

          transform:
            translate(-50%, -50%);

          border:
            2px solid
            rgba(255, 121, 0, 0.55);

          background:
            #091115;

          box-shadow:
            0 0 30px
            rgba(255, 121, 0, 0.15);
        }

        .mwh-chip svg {
          width: 47px;
          height: 47px;

          color:
            var(--mwh-orange);

          filter:
            drop-shadow(
              0 0 9px
              rgba(255, 121, 0, 0.5)
            );
        }

        .mwh-chip span {
          color:
            #cdeef7;

          font-size: 10px;
          font-weight: 900;

          letter-spacing: 0.15em;
        }

        .mwh-board-line {
          position: absolute;

          height: 2px;

          background:
            rgba(8, 185, 244, 0.68);

          box-shadow:
            0 0 7px
            rgba(8, 185, 244, 0.4);
        }

        .mwh-board-line.line-a {
          width: 34%;
          left: 4%;
          top: 30%;
        }

        .mwh-board-line.line-b {
          width: 33%;
          right: 4%;
          top: 38%;
        }

        .mwh-board-line.line-c {
          width: 31%;
          left: 4%;
          bottom: 28%;
        }

        .mwh-board-line.line-d {
          width: 31%;
          right: 4%;
          bottom: 27%;
        }

        .mwh-board-line.line-e {
          width: 2px;
          height: 28%;

          left: 50%;
          top: 3%;
        }

        .mwh-board-node {
          position: absolute;

          width: 12px;
          height: 12px;

          border-radius: 2px;

          background:
            var(--mwh-orange);

          box-shadow:
            0 0 9px
            rgba(255, 121, 0, 0.55);
        }

        .mwh-board-node.node-a {
          left: 12%;
          top: 26%;
        }

        .mwh-board-node.node-b {
          right: 13%;
          top: 35%;
        }

        .mwh-board-node.node-c {
          left: 17%;
          bottom: 24%;
        }

        .mwh-board-node.node-d {
          right: 18%;
          bottom: 23%;
        }

        .mwh-board-port {
          position: absolute;

          width: 55px;
          height: 24px;

          background:
            #b8c2c7;

          border:
            4px solid
            #1c282e;
        }

        .mwh-board-port.port-a {
          left: -6px;
          top: 15%;
        }

        .mwh-board-port.port-b {
          right: -6px;
          bottom: 13%;
        }

        /* =====================================================
           R&D ROADMAP
        ===================================================== */

        .mwh-roadmap-section {
          background:
            radial-gradient(
              ellipse at 50% 50%,
              rgba(8, 185, 244, 0.065),
              transparent 45%
            ),
            #020304;
        }

        .mwh-roadmap-warning {
          display: flex;

          align-items: flex-start;

          gap: 12px;

          max-width: 900px;

          margin:
            0 auto 42px;

          padding: 17px 19px;

          border:
            1px solid
            rgba(255, 121, 0, 0.23);

          border-radius: 11px;

          color: #d8e2e8;

          background:
            rgba(255, 121, 0, 0.045);

          font-size: 13px;

          line-height: 1.65;
        }

        .mwh-roadmap-warning svg {
          width: 21px;
          height: 21px;

          flex: 0 0 auto;

          color:
            var(--mwh-orange);
        }

        .mwh-roadmap {
          display: flex;

          flex-wrap: wrap;

          justify-content: center;

          gap: 10px;
        }

        .mwh-roadmap-step {
          position: relative;

          display: inline-flex;

          align-items: center;

          gap: 9px;

          min-height: 49px;

          padding:
            0 15px;

          border:
            1px solid
            rgba(8, 185, 244, 0.18);

          border-radius: 8px;

          color: #dfeaf0;

          background:
            rgba(8, 185, 244, 0.035);

          font-size: 12px;
          font-weight: 750;
        }

        .mwh-roadmap-number {
          display: grid;

          place-items: center;

          width: 23px;
          height: 23px;

          border-radius: 50%;

          color: #061117;

          background:
            var(--mwh-blue-light);

          font-size: 10px;
          font-weight: 950;
        }

        .mwh-roadmap-step:nth-child(even)
          .mwh-roadmap-number {
          background:
            var(--mwh-orange);

          color: white;
        }

        /* =====================================================
           REVENUE FUNDED INNOVATION
        ===================================================== */

        .mwh-innovation {
          padding:
            70px
            clamp(20px, 5vw, 80px);
        }

        .mwh-innovation-card {
          position: relative;

          max-width: 1180px;

          margin: 0 auto;

          padding:
            clamp(
              40px,
              6vw,
              75px
            );

          overflow: hidden;

          border:
            1px solid
            rgba(8, 185, 244, 0.25);

          border-radius: 24px;

          text-align: center;

          background:
            radial-gradient(
              circle at 12% 40%,
              rgba(8, 185, 244, 0.14),
              transparent 29%
            ),
            radial-gradient(
              circle at 88% 55%,
              rgba(255, 121, 0, 0.11),
              transparent 28%
            ),
            linear-gradient(
              145deg,
              #08121a,
              #04080b
            );

          box-shadow:
            0 30px 80px
            rgba(0, 0, 0, 0.32);
        }

        .mwh-innovation-icon {
          width: 67px;
          height: 67px;

          display: grid;

          place-items: center;

          margin:
            0 auto 22px;

          border-radius: 18px;

          border:
            1px solid
            rgba(255, 121, 0, 0.37);

          background:
            rgba(255, 121, 0, 0.06);
        }

        .mwh-innovation-icon svg {
          width: 34px;
          height: 34px;

          color:
            var(--mwh-orange);
        }

        .mwh-innovation-card h2 {
          margin: 0;

          font-size:
            clamp(
              39px,
              5vw,
              70px
            );

          letter-spacing: -0.05em;
        }

        .mwh-innovation-card h3 {
          margin: 12px 0 0;

          color:
            var(--mwh-blue-light);

          font-size:
            clamp(
              19px,
              2vw,
              27px
            );

          letter-spacing: 0.03em;

          text-transform: uppercase;
        }

        .mwh-innovation-card p {
          max-width: 820px;

          margin:
            22px auto 0;

          color:
            var(--mwh-muted);

          font-size: 16px;

          line-height: 1.8;
        }

        /* =====================================================
           WHY MATTHEW WEB
        ===================================================== */

        .mwh-why-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 16px;
        }

        .mwh-why-card {
          padding: 27px;

          border:
            1px solid
            var(--mwh-border);

          border-radius: 16px;

          background:
            linear-gradient(
              145deg,
              #0a1117,
              #04080b
            );
        }

        .mwh-why-card svg {
          width: 30px;
          height: 30px;

          margin-bottom: 20px;

          color:
            var(--mwh-blue-light);
        }

        .mwh-why-card:nth-child(even)
          svg {
          color:
            var(--mwh-orange-light);
        }

        .mwh-why-card h3 {
          margin: 0 0 12px;

          font-size: 20px;
        }

        .mwh-why-card p {
          margin: 0;

          color:
            var(--mwh-muted);

          font-size: 14px;

          line-height: 1.7;
        }

        /* =====================================================
           SERVICE STRIP
        ===================================================== */

        .mwh-business-strip {
          border-top:
            1px solid
            rgba(255, 255, 255, 0.06);

          border-bottom:
            1px solid
            rgba(255, 255, 255, 0.06);

          background:
            #05090c;
        }

        .mwh-business-strip-inner {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          max-width: 1250px;

          margin: 0 auto;
        }

        .mwh-business-item {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 10px;

          min-height: 87px;

          padding: 16px;

          color: #dce8ee;

          font-size: 12px;
          font-weight: 800;

          text-align: center;

          border-right:
            1px solid
            rgba(255, 255, 255, 0.07);
        }

        .mwh-business-item:last-child {
          border-right: 0;
        }

        .mwh-business-item svg {
          width: 21px;
          height: 21px;

          color:
            var(--mwh-blue-light);
        }

        .mwh-business-item:nth-child(even)
          svg {
          color:
            var(--mwh-orange-light);
        }

        /* =====================================================
           TESTIMONIALS
        ===================================================== */

        .mwh-testimonials {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwh-testimonial-carousel {
          display: grid;

          grid-template-columns:
            auto
            minmax(0, 850px)
            auto;

          align-items: center;

          justify-content: center;

          gap: 20px;
        }

        .mwh-testimonial-arrow {
          width: 48px;
          height: 48px;

          display: grid;

          place-items: center;

          border:
            1px solid
            rgba(8, 185, 244, 0.25);

          border-radius: 50%;

          color:
            var(--mwh-blue-light);

          background:
            #071016;

          cursor: pointer;

          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .mwh-testimonial-arrow:hover {
          transform: scale(1.07);

          background:
            rgba(8, 185, 244, 0.1);
        }

        .mwh-testimonial-card {
          min-height: 350px;

          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;

          padding:
            clamp(
              35px,
              5vw,
              65px
            );

          border:
            1px solid
            var(--mwh-border);

          border-radius: 22px;

          text-align: center;

          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(8, 185, 244, 0.09),
              transparent 42%
            ),
            #070d11;
        }

        .mwh-testimonial-avatar {
          width: 67px;
          height: 67px;

          display: grid;

          place-items: center;

          margin-bottom: 17px;

          border:
            2px solid
            rgba(8, 185, 244, 0.45);

          border-radius: 50%;

          color:
            var(--mwh-blue-light);

          background:
            #07151d;

          font-size: 17px;
          font-weight: 900;

          box-shadow:
            0 0 18px
            rgba(8, 185, 244, 0.12);
        }

        .mwh-stars {
          margin-bottom: 17px;

          color:
            var(--mwh-orange);

          letter-spacing: 0.13em;
        }

        .mwh-testimonial-card blockquote {
          max-width: 730px;

          margin: 0;

          color: #d8e2e8;

          font-size:
            clamp(
              16px,
              1.45vw,
              20px
            );

          line-height: 1.75;
        }

        .mwh-testimonial-card strong {
          margin-top: 21px;

          color: white;

          font-size: 14px;
        }

        /* =====================================================
           SUPPORT
        ===================================================== */

        .mwh-support-section {
          padding:
            90px
            clamp(20px, 5vw, 80px);

          background:
            radial-gradient(
              ellipse at center,
              rgba(255, 121, 0, 0.08),
              transparent 45%
            ),
            #020304;
        }

        .mwh-support-card {
          max-width: 1120px;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            auto 1fr auto;

          align-items: center;

          gap: 28px;

          padding:
            clamp(
              30px,
              4vw,
              50px
            );

          border:
            1px solid
            rgba(255, 121, 0, 0.28);

          border-radius: 20px;

          background:
            linear-gradient(
              145deg,
              rgba(255, 121, 0, 0.075),
              rgba(5, 9, 12, 0.96)
            );

          box-shadow:
            0 0 35px
            rgba(255, 121, 0, 0.05);
        }

        .mwh-support-icon {
          width: 70px;
          height: 70px;

          display: grid;

          place-items: center;

          border:
            1px solid
            rgba(255, 121, 0, 0.35);

          border-radius: 18px;

          background:
            rgba(255, 121, 0, 0.08);
        }

        .mwh-support-icon svg {
          width: 34px;
          height: 34px;

          color:
            var(--mwh-orange);

          fill:
            rgba(255, 121, 0, 0.17);
        }

        .mwh-support-copy h2 {
          margin: 0 0 8px;

          font-size:
            clamp(
              29px,
              3vw,
              43px
            );

          letter-spacing: -0.04em;
        }

        .mwh-support-copy p {
          max-width: 680px;

          margin: 0;

          color:
            var(--mwh-muted);

          font-size: 14px;

          line-height: 1.7;
        }

        /* =====================================================
           PRICING CTA
        ===================================================== */

        .mwh-pricing {
          text-align: center;

          background:
            radial-gradient(
              circle at center,
              rgba(8, 185, 244, 0.07),
              transparent 45%
            ),
            #030609;
        }

        .mwh-pricing h2 {
          margin: 0;

          font-size:
            clamp(
              39px,
              5vw,
              70px
            );

          letter-spacing: -0.05em;
        }

        .mwh-pricing p {
          max-width: 720px;

          margin:
            20px auto 0;

          color:
            var(--mwh-muted);

          font-size: 16px;

          line-height: 1.75;
        }

        .mwh-pricing
          .mwh-button-row {
          justify-content: center;
        }

        /* =====================================================
           FAQ
        ===================================================== */

        .mwh-faq-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 14px;
        }

        .mwh-faq-item {
          padding: 25px;

          border:
            1px solid
            var(--mwh-border);

          border-radius: 14px;

          background:
            linear-gradient(
              145deg,
              #0a1116,
              #05090c
            );
        }

        .mwh-faq-item h3 {
          margin: 0 0 11px;

          color: white;

          font-size: 17px;
        }

        .mwh-faq-item p {
          margin: 0;

          color:
            var(--mwh-muted);

          font-size: 14px;

          line-height: 1.7;
        }

        /* =====================================================
           CONTACT
        ===================================================== */

        .mwh-contact-section {
          background:
            radial-gradient(
              ellipse at 12% 45%,
              rgba(8, 185, 244, 0.09),
              transparent 30%
            ),
            radial-gradient(
              ellipse at 88% 60%,
              rgba(255, 121, 0, 0.06),
              transparent 30%
            ),
            #020304;
        }

        .mwh-contact-layout {
          display: grid;

          grid-template-columns:
            minmax(0, 0.82fr)
            minmax(450px, 1.18fr);

          gap:
            clamp(
              45px,
              6vw,
              90px
            );

          align-items: start;
        }

        .mwh-contact-copy h2 {
          margin: 0 0 18px;

          font-size:
            clamp(
              39px,
              4.8vw,
              68px
            );

          line-height: 1.02;

          letter-spacing: -0.05em;
        }

        .mwh-contact-copy > p {
          color:
            var(--mwh-muted);

          font-size: 16px;

          line-height: 1.78;
        }

        .mwh-contact-points {
          display: grid;

          gap: 13px;

          margin-top: 28px;
        }

        .mwh-contact-point {
          display: flex;

          align-items: center;

          gap: 11px;

          color: #d6e2e8;

          font-size: 13px;
        }

        .mwh-contact-point svg {
          width: 20px;
          height: 20px;

          color:
            var(--mwh-blue-light);
        }

        .mwh-contact-form {
          display: grid;

          gap: 13px;

          padding:
            clamp(
              25px,
              3vw,
              37px
            );

          border:
            1px solid
            rgba(8, 185, 244, 0.22);

          border-radius: 18px;

          background:
            linear-gradient(
              145deg,
              #0a1117,
              #05090c
            );

          box-shadow:
            0 25px 60px
            rgba(0, 0, 0, 0.3);
        }

        .mwh-form-row {
          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap: 13px;
        }

        .mwh-contact-form input,
        .mwh-contact-form textarea {
          width: 100%;

          padding:
            15px 16px;

          outline: none;

          border:
            1px solid
            rgba(255, 255, 255, 0.11);

          border-radius: 9px;

          color: white;

          background:
            #05090c;

          font: inherit;

          font-size: 14px;

          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .mwh-contact-form input::placeholder,
        .mwh-contact-form textarea::placeholder {
          color:
            #788893;
        }

        .mwh-contact-form input:focus,
        .mwh-contact-form textarea:focus {
          border-color:
            rgba(8, 185, 244, 0.6);

          box-shadow:
            0 0 0 3px
            rgba(8, 185, 244, 0.07);
        }

        .mwh-contact-form textarea {
          resize: vertical;

          min-height: 130px;
        }

        .mwh-recaptcha-wrap {
          min-height: 78px;

          display: flex;

          align-items: center;
        }

        .mwh-form-status {
          padding:
            11px 13px;

          border-radius: 8px;

          font-size: 13px;

          line-height: 1.5;
        }

        .mwh-form-status.success {
          color: #b9fbd0;

          border:
            1px solid
            rgba(53, 224, 126, 0.24);

          background:
            rgba(53, 224, 126, 0.06);
        }

        .mwh-form-status.error {
          color: #ffd1bf;

          border:
            1px solid
            rgba(255, 105, 71, 0.25);

          background:
            rgba(255, 105, 71, 0.06);
        }

        .mwh-form-button {
          min-height: 54px;

          border: 0;

          border-radius: 9px;

          color: white;

          background:
            linear-gradient(
              180deg,
              #0ab6ed,
              #0789b6
            );

          font-size: 15px;
          font-weight: 850;

          cursor: pointer;

          box-shadow:
            0 0 14px
            rgba(8, 185, 244, 0.25);

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            opacity 0.2s ease;
        }

        .mwh-form-button:hover:not(:disabled) {
          transform: translateY(-2px);

          box-shadow:
            0 0 21px
            rgba(8, 185, 244, 0.4);
        }

        .mwh-form-button:disabled {
          opacity: 0.58;

          cursor: wait;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1200px) {
          .mwh-area-grid {
            grid-template-columns:
              repeat(3, 1fr);
          }

          .mwh-area-card:nth-child(4),
          .mwh-area-card:nth-child(5) {
            min-height: 270px;
          }

          .mwh-why-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }
        }

        @media (max-width: 1000px) {
          .mwh-section {
            padding:
              80px 22px;
          }

          .mwh-hero-inner {
            grid-template-columns:
              1fr;

            padding:
              75px 22px;

            text-align: center;
          }

          .mwh-hero-badge {
            margin-left: auto;
            margin-right: auto;
          }

          .mwh-hero-copy > p {
            margin-left: auto;
            margin-right: auto;
          }

          .mwh-hero-mini {
            justify-content: center;
          }

          .mwh-button-row {
            justify-content: center;
          }

          .mwh-tech-core {
            min-height: 420px;
          }

          .mwh-services-layout {
            grid-template-columns:
              1fr;
          }

          .mwh-service-intro {
            position: static;
          }

          .mwh-project-card {
            grid-template-columns:
              1fr;
          }

          .mwh-project-card:nth-child(even)
            .mwh-project-visual {
            order: 0;
          }

          .mwh-project-visual {
            min-height: 390px;
          }

          .mwh-business-strip-inner {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .mwh-business-item:nth-child(2) {
            border-right: 0;
          }

          .mwh-business-item:nth-child(-n + 2) {
            border-bottom:
              1px solid
              rgba(255, 255, 255, 0.07);
          }

          .mwh-support-card {
            grid-template-columns:
              auto 1fr;
          }

          .mwh-support-card
            .mwh-btn {
            grid-column:
              1 / -1;

            width: 100%;
          }

          .mwh-contact-layout {
            grid-template-columns:
              1fr;
          }
        }

        @media (max-width: 720px) {
          .mwh-section {
            padding:
              68px 16px;
          }

          .mwh-hero {
            min-height: auto;
          }

          .mwh-hero-inner {
            padding:
              65px 16px;
          }

          .mwh-hero-copy h1 {
            font-size:
              clamp(
                44px,
                14vw,
                68px
              );
          }

          .mwh-tech-core {
            min-height: 340px;

            transform: scale(0.82);

            margin:
              -25px 0;
          }

          .mwh-core-orbit.outer {
            width: 365px;
            height: 365px;
          }

          .mwh-core-orbit.inner {
            width: 275px;
            height: 275px;
          }

          .mwh-core-card {
            width: 245px;
            min-height: 245px;
          }

          .mwh-area-grid,
          .mwh-service-grid,
          .mwh-why-grid,
          .mwh-faq-grid {
            grid-template-columns:
              1fr;
          }

          .mwh-area-card {
            min-height: 0;
          }

          .mwh-project-card {
            min-height: 0;
          }

          .mwh-project-visual {
            min-height: 330px;
          }

          .mwh-builder-body {
            grid-template-columns:
              1fr;

            gap: 12px;
          }

          .mwh-builder-document,
          .mwh-builder-browser {
            min-height: 150px;
          }

          .mwh-builder-arrow {
            display: grid;
            place-items: center;

            transform:
              rotate(90deg);
          }

          .mwh-support-card {
            grid-template-columns:
              1fr;

            text-align: center;
          }

          .mwh-support-icon {
            margin:
              0 auto;
          }

          .mwh-testimonial-carousel {
            grid-template-columns:
              1fr;
          }

          .mwh-testimonial-arrow {
            display: none;
          }

          .mwh-form-row {
            grid-template-columns:
              1fr;
          }

          .mwh-business-strip-inner {
            grid-template-columns:
              1fr;
          }

          .mwh-business-item {
            border-right: 0;

            border-bottom:
              1px solid
              rgba(255, 255, 255, 0.07);
          }

          .mwh-business-item:last-child {
            border-bottom: 0;
          }
        }

        @media (max-width: 480px) {
          .mwh-tech-core {
            transform: scale(0.7);

            margin:
              -55px -70px;
          }

          .mwh-project-copy {
            padding:
              30px 23px;
          }

          .mwh-project-visual {
            min-height: 280px;
          }

          .mwh-builder-visual,
          .mwh-fpga-visual {
            padding: 18px;
          }

          .mwh-truck {
            transform:
              translateX(-50%)
              scale(0.82);
          }

          .g-recaptcha {
            transform:
              scale(0.88);

            transform-origin:
              left center;
          }
        }

        @media (
          prefers-reduced-motion:
          reduce
        ) {
          .mwh-hero-glow,
          .mwh-core-orbit,
          .mwh-snow {
            animation:
              none !important;
          }

          * {
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        className="mwh-hero"
        id="home-hero"
      >
        <div className="mwh-hero-glow one" />
        <div className="mwh-hero-glow two" />

        <div className="mwh-hero-inner">
          <div className="mwh-hero-copy">
            <div className="mwh-hero-badge">
              <span />
              Maine-Based Technology Company
            </div>

            <h1>
              <span className="line">
                Building
              </span>

              <span className="line blue">
                Practical Technology
              </span>

              <span className="line">
                for Today.
              </span>

              <span className="line orange">
                Researching Tomorrow.
              </span>
            </h1>

            <p>
              Matthew Web builds websites,
              custom software, games and
              educational technology while
              developing a growing research
              program in CPUs, FPGA hardware
              and future computer systems.
            </p>

            <div className="mwh-hero-mini">
              <span>
                <CheckCircle2 />
                Small-business solutions
              </span>

              <span>
                <Code2 />
                Custom development
              </span>

              <span>
                <CircuitBoard />
                Technology R&amp;D
              </span>
            </div>

            <div className="mwh-button-row">
              <Link
                href="/contact-us"
                className="mwh-btn mwh-btn-primary"
              >
                Start a Project
                <ArrowRight />
              </Link>

              <a
                href="#what-we-build"
                className="mwh-btn mwh-btn-dark"
              >
                Explore What We Build
              </a>
            </div>
          </div>

          <div
            className="mwh-tech-core"
            aria-hidden="true"
          >
            <div className="mwh-core-orbit outer" />

            <div className="mwh-core-orbit inner" />

            <div className="mwh-core-label web">
              <Globe2 />
              WEB
            </div>

            <div className="mwh-core-label software">
              <Code2 />
              SOFTWARE
            </div>

            <div className="mwh-core-label games">
              <Gamepad2 />
              GAMES
            </div>

            <div className="mwh-core-label hardware">
              <Cpu />
              HARDWARE
            </div>

            <div className="mwh-core-card">
              <div className="mwh-core-icon">
                <CircuitBoard />
              </div>

              <strong>
                Matthew Web
              </strong>

              <p>
                Web • Software • Games
                <br />
                Education • Hardware
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          BUSINESS STRIP
      ====================================================== */}

      <div className="mwh-business-strip">
        <div className="mwh-business-strip-inner">
          <div className="mwh-business-item">
            <Globe2 />
            Maine-Based
          </div>

          <div className="mwh-business-item">
            <MonitorSmartphone />
            Responsive Development
          </div>

          <div className="mwh-business-item">
            <Code2 />
            Custom Technology
          </div>

          <div className="mwh-business-item">
            <ShieldCheck />
            Ongoing Support
          </div>
        </div>
      </div>

      {/* ======================================================
          WHAT WE BUILD
      ====================================================== */}

      <section
        className="mwh-section mwh-areas"
        id="what-we-build"
      >
        <div className="mwh-container">
          <div className="mwh-section-heading center">
            <div className="mwh-section-kicker">
              <Layers3 />
              One Company. Multiple Technologies.
            </div>

            <h2>
              What{" "}
              <span className="mwh-blue-text">
                Matthew
              </span>{" "}
              <span className="mwh-orange-text">
                Web
              </span>{" "}
              Builds
            </h2>

            <p>
              We started with websites and
              continue building outward into
              software, games, education and
              computing research.
            </p>
          </div>

          <div className="mwh-area-grid">
            {companyAreas.map((area) => {
              const Icon = area.icon;

              return (
                <Link
                  href={area.href}
                  key={area.title}
                  className={`mwh-area-card ${area.accent}`}
                >
                  <div className="mwh-area-content">
                    <div className="mwh-area-icon">
                      <Icon />
                    </div>

                    <div className="mwh-status">
                      {area.status}
                    </div>

                    <h3>{area.title}</h3>

                    <p>{area.text}</p>

                    <span className="mwh-area-more">
                      Learn More
                      <ArrowRight />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          WEBSITE SERVICES
      ====================================================== */}

      <section
        className="mwh-section mwh-services"
        id="website-services"
      >
        <div className="mwh-container">
          <div className="mwh-services-layout">
            <div className="mwh-service-intro">
              <div className="mwh-live-badge">
                <span />
                AVAILABLE NOW
              </div>

              <h2>
                Technology for{" "}
                <span className="mwh-blue-text">
                  Real Businesses
                </span>
              </h2>

              <p>
                Website and digital services
                remain a core part of Matthew
                Web. We help businesses that
                need a first website, a complete
                redesign, better mobile
                performance, new functionality
                or ongoing technical support.
              </p>

              <div className="mwh-button-row">
                <Link
                  href="/services"
                  className="mwh-btn mwh-btn-primary"
                >
                  View Services
                  <ArrowRight />
                </Link>

                <Link
                  href="/pricing"
                  className="mwh-btn mwh-btn-dark"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            <div className="mwh-service-grid">
              {webServices.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    className="mwh-service-card"
                    key={service.title}
                  >
                    <Icon />

                    <h3>{service.title}</h3>

                    <p>{service.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          ACTIVE PROJECTS
      ====================================================== */}

      <section
        className="mwh-section mwh-projects"
        id="current-projects"
      >
        <div className="mwh-container">
          <div className="mwh-section-heading">
            <div className="mwh-section-kicker orange">
              <Rocket />
              Building Right Now
            </div>

            <h2>
              Current{" "}
              <span className="mwh-orange-text">
                Development
              </span>
            </h2>

            <p>
              Matthew Web is actively expanding
              beyond traditional website work.
              These projects show where that
              growth is happening now.
            </p>
          </div>

          <div className="mwh-project-list">
            {activeProjects.map((project) => (
              <article
                className="mwh-project-card"
                key={project.title}
              >
                <ProjectVisual
                  type={project.type}
                />

                <div className="mwh-project-copy">
                  <div className="mwh-project-meta">
                    <span className="mwh-project-status">
                      {project.status}
                    </span>

                    <span className="mwh-project-category">
                      {project.category}
                    </span>
                  </div>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.text}
                  </p>

                  <div className="mwh-project-detail">
                    <Check />
                    <span>
                      {project.detail}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          R&D ROADMAP
      ====================================================== */}

      <section
        className="mwh-section mwh-roadmap-section"
        id="research-roadmap"
      >
        <div className="mwh-container">
          <div className="mwh-section-heading center">
            <div className="mwh-section-kicker">
              <CircuitBoard />
              Long-Term Research
            </div>

            <h2>
              From Processor Research to{" "}
              <span className="mwh-blue-text">
                Complete Systems
              </span>
            </h2>

            <p>
              Our long-term computing roadmap
              grows step-by-step rather than
              pretending every future idea is a
              finished product today.
            </p>
          </div>

          <div className="mwh-roadmap-warning">
            <LockKeyhole />

            <span>
              CPU simulation and FPGA work are
              active R&amp;D. Advanced
              processors, GPUs, memory, storage
              and complete Matthew Web computers
              are future research goals and are
              not currently commercial products.
            </span>
          </div>

          <div className="mwh-roadmap">
            {roadmap.map((step, index) => (
              <div
                className="mwh-roadmap-step"
                key={step}
              >
                <span className="mwh-roadmap-number">
                  {index + 1}
                </span>

                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          REVENUE FUNDED INNOVATION
      ====================================================== */}

      <section className="mwh-innovation">
        <div className="mwh-innovation-card">
          <div className="mwh-innovation-icon">
            <Rocket />
          </div>

          <h2>
            Revenue-Funded Innovation
          </h2>

          <h3>
            Earn the Next Stage
          </h3>

          <p>
            Matthew Web is being built in
            stages. Revenue from practical
            services and products helps support
            software development, game
            development, educational projects
            and increasingly advanced technology
            research.
          </p>
        </div>
      </section>

      {/* ======================================================
          WHY MATTHEW WEB
      ====================================================== */}

      <section
        className="mwh-section"
        id="why-matthew-web"
      >
        <div className="mwh-container">
          <div className="mwh-section-heading center">
            <div className="mwh-section-kicker">
              <Sparkles />
              Why Matthew Web
            </div>

            <h2>
              Practical First.{" "}
              <span className="mwh-orange-text">
                Built to Grow.
              </span>
            </h2>

            <p>
              Technology should solve the real
              problem, communicate clearly and
              create something useful—not just
              look impressive in a sales pitch.
            </p>
          </div>

          <div className="mwh-why-grid">
            {whyCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  className="mwh-why-card"
                  key={card.title}
                >
                  <Icon />

                  <h3>{card.title}</h3>

                  <p>{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          TESTIMONIALS
      ====================================================== */}

      <section
        className="mwh-section mwh-testimonials"
        id="testimonials"
      >
        <div className="mwh-container">
          <div className="mwh-section-heading center">
            <div className="mwh-section-kicker orange">
              <MessageSquare />
              Client Feedback
            </div>

            <h2>
              What Clients{" "}
              <span className="mwh-orange-text">
                Say
              </span>
            </h2>
          </div>

          <div className="mwh-testimonial-carousel">
            <button
              type="button"
              className="mwh-testimonial-arrow"
              onClick={previousTestimonial}
              aria-label="Previous testimonial"
            >
              ◀
            </button>

            <div className="mwh-testimonial-card">
              <div className="mwh-testimonial-avatar">
                {currentTestimonial.initials}
              </div>

              <div className="mwh-stars">
                ★ ★ ★ ★ ★
              </div>

              <blockquote>
                “{currentTestimonial.quote}”
              </blockquote>

              <strong>
                — {currentTestimonial.name}
              </strong>
            </div>

            <button
              type="button"
              className="mwh-testimonial-arrow"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              ▶
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================
          PRICING
      ====================================================== */}

      <section
        className="mwh-section mwh-pricing"
        id="pricing-preview"
      >
        <div className="mwh-container">
          <div className="mwh-section-kicker orange">
            <BriefcaseBusiness />
            Website &amp; Business Services
          </div>

          <h2>
            Need Something{" "}
            <span className="mwh-blue-text">
              Built?
            </span>
          </h2>

          <p>
            View our current pricing and
            services, or contact Matthew Web
            about a project that needs a custom
            approach.
          </p>

          <div className="mwh-button-row">
            <Link
              href="/pricing"
              className="mwh-btn mwh-btn-orange"
            >
              View Pricing
              <ArrowRight />
            </Link>

            <Link
              href="/contact-us"
              className="mwh-btn mwh-btn-dark"
            >
              Discuss a Project
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================
          SUPPORT
      ====================================================== */}

      <section
        className="mwh-support-section"
        id="support"
      >
        <div className="mwh-support-card">
          <div className="mwh-support-icon">
            <Heart />
          </div>

          <div className="mwh-support-copy">
            <h2>
              Support the Work
            </h2>

            <p>
              Matthew Web is developing new
              software, games, educational
              technology and independent
              computing research. Support helps
              us keep building, testing and
              expanding these projects.
            </p>
          </div>

          <Link
            href="https://buy.stripe.com/5kQeVf0IT9HX75w2YW8og0k"
            className="mwh-btn mwh-btn-orange"
          >
            Support Matthew Web
            <Heart />
          </Link>
        </div>
      </section>

      {/* ======================================================
          FAQ
      ====================================================== */}

      <section
        className="mwh-section"
        id="faq"
      >
        <div className="mwh-container">
          <div className="mwh-section-heading">
            <div className="mwh-section-kicker">
              <MessageSquare />
              Questions
            </div>

            <h2>
              Frequently Asked{" "}
              <span className="mwh-blue-text">
                Questions
              </span>
            </h2>

            <p>
              Current services, development
              projects and research are kept
              clearly separated so visitors know
              what is available now and what is
              still being built.
            </p>
          </div>

          <div className="mwh-faq-grid">
            {faqs.map((item) => (
              <div
                className="mwh-faq-item"
                key={item.q}
              >
                <h3>{item.q}</h3>

                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          CONTACT FORM — EXISTING API / RECAPTCHA PRESERVED
      ====================================================== */}

      <section
        className="mwh-section mwh-contact-section"
        id="contact-form"
      >
        <div className="mwh-container">
          <div className="mwh-contact-layout">
            <div className="mwh-contact-copy">
              <div className="mwh-section-kicker orange">
                <MessageSquare />
                Start a Conversation
              </div>

              <h2>
                What Can We{" "}
                <span className="mwh-orange-text">
                  Build
                </span>{" "}
                for You?
              </h2>

              <p>
                Tell us about your business,
                website, software idea or
                technology project. We’ll review
                the details and follow up about
                the next step.
              </p>

              <div className="mwh-contact-points">
                <div className="mwh-contact-point">
                  <CheckCircle2 />
                  Website creation and redesign
                </div>

                <div className="mwh-contact-point">
                  <Code2 />
                  Custom software and functionality
                </div>

                <div className="mwh-contact-point">
                  <SearchCheck />
                  SEO, indexing and technical help
                </div>

                <div className="mwh-contact-point">
                  <Wrench />
                  Ongoing maintenance and support
                </div>
              </div>
            </div>

            <form
              className="mwh-contact-form"
              onSubmit={handleSubmit}
            >
              <div className="mwh-form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={updateField}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address *"
                  value={form.email}
                  onChange={updateField}
                  required
                />
              </div>

              <div className="mwh-form-row">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number *"
                  value={form.phone}
                  onChange={updateField}
                  required
                />

                <input
                  type="text"
                  name="business_name"
                  placeholder="Business / Organization *"
                  value={form.business_name}
                  onChange={updateField}
                  required
                />
              </div>

              <textarea
                name="message"
                placeholder="Tell us about the project"
                rows="6"
                value={form.message}
                onChange={updateField}
              />

              <div className="mwh-recaptcha-wrap">
                {recaptchaSiteKey ? (
                  <div
                    className="g-recaptcha"
                    data-sitekey={
                      recaptchaSiteKey
                    }
                  />
                ) : (
                  <div className="mwh-form-status error">
                    Missing
                    NEXT_PUBLIC_RECAPTCHA_SITE_KEY
                    in .env.local
                  </div>
                )}
              </div>

              {status ? (
                <div
                  className={`mwh-form-status ${statusType}`}
                >
                  {status}
                </div>
              ) : null}

              <button
                type="submit"
                className="mwh-form-button"
                disabled={submitting}
              >
                {submitting
                  ? "Sending..."
                  : "Send Project Details"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
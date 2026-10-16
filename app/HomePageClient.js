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
        "Thank you! We received your message and will be in contact as soon as possible."
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
                Professional Websites.
              </span>

              <span className="line blue">
                Clear for Customers.
              </span>

              <span className="line">
                Easy to Contact.
              </span>

              <span className="line orange">
                Built to Grow.
              </span>
            </h1>

            <p>
              Matthew Web builds websites and
              custom business tools that help
              customers understand your services,
              trust your business, and take the
              next step—while giving you a stronger
              online presence you control.
              Limited one-page pilot availability
              may also be available with $0 upfront
              and $49/month.
            </p>

            <div className="mwh-hero-mini">
              <span>
                <CheckCircle2 />
                Professional business websites
              </span>

              <span>
                <Code2 />
                Custom development
              </span>

              <span>
                <CircuitBoard />
                Technology R&amp;D
              </span>

              <span>
                <Wrench />
                Electronics &amp; Tech Repair
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

              <Link
                href="/pricing"
                className="mwh-btn mwh-btn-dark"
              >
                View Pricing
              </Link>
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
                  aria-label="Your name (required)"
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={updateField}
                  required
                />

                <input
                  type="email"
                  name="email"
                  aria-label="Your email address (required)"
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
                  aria-label="Your phone number (required)"
                  placeholder="Your Phone Number *"
                  value={form.phone}
                  onChange={updateField}
                  required
                />

                <input
                  type="text"
                  name="business_name"
                  aria-label="Business or organization name (required)"
                  placeholder="Business / Organization *"
                  value={form.business_name}
                  onChange={updateField}
                  required
                />
              </div>

              <textarea
                name="message"
                aria-label="Project details"
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

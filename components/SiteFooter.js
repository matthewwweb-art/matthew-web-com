"use client";

import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Code2,
  Cpu,
  Gamepad2,
  Globe2,
  GraduationCap,
  Heart,
  MapPin,
  MonitorSmartphone,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

/* ============================================================
   LINKS
============================================================ */

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Examples", href: "/examples" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Search", href: "/search" },
];

const serviceLinks = [
  {
    label: "All Services",
    href: "/services",
  },
  {
    label: "Website Design",
    href: "/website-design",
  },
  {
    label: "Custom Software",
    href: "/custom-software",
  },
  {
    label: "SEO & Indexing",
    href: "/seo-and-indexing",
  },
  {
    label: "Small Business Websites",
    href: "/small-business-websites",
  },
];

const projectLinks = [
  {
    label: "Free Game Hub Project",
    href: "/free-game-hub-project",
  },
  {
    label: "CPU & FPGA Research",
    href: "/about-us",
  },
  {
    label: "Technology & Education",
    href: "/blog",
  },
];

const legalLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms of Use",
    href: "/terms",
  },
  {
    label: "Code of Ethics",
    href: "/code-of-ethics",
  },
];

const technologyAreas = [
  {
    icon: Globe2,
    label: "Web",
    className: "blue",
  },
  {
    icon: Code2,
    label: "Software",
    className: "orange",
  },
  {
    icon: Gamepad2,
    label: "Games",
    className: "blue",
  },
  {
    icon: GraduationCap,
    label: "Education",
    className: "orange",
  },
  {
    icon: Cpu,
    label: "Hardware R&D",
    className: "blue",
  },
];

const googleBusinessLink =
  "https://www.google.com/maps/place/matthew-web/@44.835119,-69.805476,12z/data=!3m1!4b1!4m6!3m5!1s0xafa28749f39516d3:0xa868970605ad7855!8m2!3d44.835119!4d-69.805476!16s%2Fg%2F11ytxf9y2w?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D";

export default function SiteFooter() {
  return (
    <>
      <style jsx global>{`
        /* =====================================================
           FOOTER
        ===================================================== */

        .mwf-footer {
          position: relative;

          overflow: hidden;

          color: white;

          background:
            radial-gradient(
              ellipse at 13% 22%,
              rgba(8, 185, 244, 0.1),
              transparent 30%
            ),
            radial-gradient(
              ellipse at 87% 35%,
              rgba(255, 121, 0, 0.07),
              transparent 28%
            ),
            linear-gradient(
              180deg,
              #04090d 0%,
              #020304 55%,
              #010203 100%
            );

          border-top:
            1px solid
            rgba(8, 185, 244, 0.23);
        }

        .mwf-footer::before {
          content: "";

          position: absolute;

          inset: 0;

          pointer-events: none;

          opacity: 0.18;

          background-image:
            linear-gradient(
              rgba(8, 185, 244, 0.065) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(8, 185, 244, 0.065) 1px,
              transparent 1px
            );

          background-size:
            72px 72px;

          mask-image:
            linear-gradient(
              180deg,
              black,
              transparent 87%
            );
        }

        /* =====================================================
           TOP GLOW LINE
        ===================================================== */

        .mwf-top-line {
          position: absolute;

          left: 0;
          right: 0;
          top: 0;

          height: 2px;

          background:
            linear-gradient(
              90deg,
              transparent 0%,
              #08b9f4 22%,
              #38d7ff 42%,
              #ff7900 64%,
              transparent 100%
            );

          box-shadow:
            0 0 16px
            rgba(8, 185, 244, 0.42),
            0 0 22px
            rgba(255, 121, 0, 0.2);
        }

        /* =====================================================
           CTA
        ===================================================== */

        .mwf-cta-wrap {
          position: relative;

          z-index: 2;

          max-width: 1380px;

          margin: 0 auto;

          padding:
            65px
            clamp(20px, 5vw, 80px)
            35px;
        }

        .mwf-cta {
          position: relative;

          display: grid;

          grid-template-columns:
            1fr auto;

          align-items: center;

          gap: 30px;

          padding:
            clamp(
              30px,
              4vw,
              48px
            );

          overflow: hidden;

          border:
            1px solid
            rgba(8, 185, 244, 0.28);

          border-radius: 22px;

          background:
            radial-gradient(
              circle at 15% 40%,
              rgba(8, 185, 244, 0.13),
              transparent 34%
            ),
            radial-gradient(
              circle at 88% 60%,
              rgba(255, 121, 0, 0.1),
              transparent 32%
            ),
            linear-gradient(
              145deg,
              rgba(10, 20, 27, 0.98),
              rgba(4, 8, 11, 0.99)
            );

          box-shadow:
            0 25px 60px
            rgba(0, 0, 0, 0.32),
            inset 0 0 40px
            rgba(8, 185, 244, 0.025);
        }

        .mwf-cta::before {
          content: "";

          position: absolute;

          width: 210px;
          height: 210px;

          right: -60px;
          top: -90px;

          border-radius: 50%;

          border:
            1px dashed
            rgba(255, 121, 0, 0.16);

          animation:
            mwfRotate
            18s linear
            infinite;
        }

        .mwf-cta::after {
          content: "";

          position: absolute;

          width: 140px;
          height: 140px;

          right: -25px;
          top: -55px;

          border-radius: 50%;

          border:
            1px solid
            rgba(8, 185, 244, 0.13);

          animation:
            mwfRotate
            13s linear
            infinite reverse;
        }

        @keyframes mwfRotate {
          to {
            transform:
              rotate(360deg);
          }
        }

        .mwf-cta-copy {
          position: relative;

          z-index: 2;
        }

        .mwf-cta-kicker {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          margin-bottom: 11px;

          color: #38d7ff;

          font-size: 10px;
          font-weight: 900;

          letter-spacing: 0.16em;

          text-transform: uppercase;
        }

        .mwf-cta-kicker svg {
          width: 17px;
          height: 17px;
        }

        .mwf-cta h2 {
          margin: 0;

          font-size:
            clamp(
              30px,
              3.7vw,
              52px
            );

          line-height: 1.05;

          letter-spacing: -0.045em;
        }

        .mwf-cta h2 span {
          color: #ff7900;

          text-shadow:
            0 0 18px
            rgba(255, 121, 0, 0.2);
        }

        .mwf-cta p {
          max-width: 740px;

          margin:
            14px 0 0;

          color: #aebbc5;

          font-size: 14px;

          line-height: 1.7;
        }

        .mwf-cta-buttons {
          position: relative;

          z-index: 3;

          display: flex;

          flex-wrap: wrap;

          gap: 11px;
        }

        .mwf-btn {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 9px;

          min-height: 50px;

          padding:
            0 19px;

          border-radius: 9px;

          text-decoration: none;

          font-size: 13px;
          font-weight: 850;

          white-space: nowrap;

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            border-color 0.2s ease;
        }

        .mwf-btn svg {
          width: 18px;
          height: 18px;
        }

        .mwf-btn-blue {
          color: white;

          border:
            1px solid
            rgba(56, 215, 255, 0.55);

          background:
            linear-gradient(
              180deg,
              #0ab6ed,
              #0789b6
            );

          box-shadow:
            0 0 15px
            rgba(8, 185, 244, 0.27);
        }

        .mwf-btn-blue:hover {
          transform:
            translateY(-2px);

          box-shadow:
            0 0 23px
            rgba(8, 185, 244, 0.46);
        }

        .mwf-btn-orange {
          color: white;

          border:
            1px solid
            rgba(255, 175, 49, 0.65);

          background:
            linear-gradient(
              180deg,
              #ff9519,
              #f16600
            );

          box-shadow:
            0 0 15px
            rgba(255, 121, 0, 0.29);
        }

        .mwf-btn-orange:hover {
          transform:
            translateY(-2px);

          box-shadow:
            0 0 23px
            rgba(255, 121, 0, 0.48);
        }

        /* =====================================================
           MAIN FOOTER GRID
        ===================================================== */

        .mwf-main {
          position: relative;

          z-index: 2;

          max-width: 1380px;

          margin: 0 auto;

          padding:
            55px
            clamp(20px, 5vw, 80px)
            48px;
        }

        .mwf-grid {
          display: grid;

          grid-template-columns:
            minmax(280px, 1.55fr)
            minmax(140px, 0.7fr)
            minmax(175px, 0.85fr)
            minmax(170px, 0.85fr)
            minmax(250px, 1.1fr);

          gap:
            clamp(
              28px,
              4vw,
              65px
            );
        }

        /* =====================================================
           BRAND
        ===================================================== */

        .mwf-brand-name {
          display: inline-flex;

          align-items: baseline;

          margin-bottom: 17px;

          text-decoration: none;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size:
            clamp(
              31px,
              3vw,
              44px
            );

          font-weight: 900;

          letter-spacing:
            -0.055em;
        }

        .mwf-brand-blue {
          color: #38d7ff;

          text-shadow:
            0 0 14px
            rgba(8, 185, 244, 0.23);
        }

        .mwf-brand-orange {
          color: #ff7900;

          text-shadow:
            0 0 14px
            rgba(255, 121, 0, 0.23);
        }

        .mwf-brand-copy {
          max-width: 400px;

          margin: 0;

          color: #aebbc5;

          font-size: 14px;

          line-height: 1.72;
        }

        /* =====================================================
           TECHNOLOGY TAGS
        ===================================================== */

        .mwf-tech-row {
          display: flex;

          flex-wrap: wrap;

          gap: 7px;

          margin-top: 22px;
        }

        .mwf-tech-tag {
          display: inline-flex;

          align-items: center;

          gap: 6px;

          min-height: 31px;

          padding:
            0 9px;

          border-radius: 6px;

          color: #dfeaf0;

          background:
            rgba(255, 255, 255, 0.025);

          font-size: 9px;
          font-weight: 850;

          letter-spacing: 0.07em;

          text-transform: uppercase;
        }

        .mwf-tech-tag.blue {
          border:
            1px solid
            rgba(8, 185, 244, 0.2);
        }

        .mwf-tech-tag.orange {
          border:
            1px solid
            rgba(255, 121, 0, 0.2);
        }

        .mwf-tech-tag svg {
          width: 14px;
          height: 14px;
        }

        .mwf-tech-tag.blue svg {
          color: #38d7ff;
        }

        .mwf-tech-tag.orange svg {
          color: #ff9c22;
        }

        /* =====================================================
           SOCIAL
        ===================================================== */

        .mwf-social-row {
          display: flex;

          gap: 9px;

          margin-top: 24px;
        }

        .mwf-social {
          width: 39px;
          height: 39px;

          display: grid;

          place-items: center;

          border:
            1px solid
            rgba(255, 255, 255, 0.11);

          border-radius: 9px;

          color: white;

          background:
            rgba(255, 255, 255, 0.025);

          text-decoration: none;

          font-size: 14px;
          font-weight: 900;

          transition:
            transform 0.2s ease,
            color 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .mwf-social:hover {
          transform:
            translateY(-3px);

          color: #38d7ff;

          border-color:
            rgba(8, 185, 244, 0.4);

          box-shadow:
            0 0 14px
            rgba(8, 185, 244, 0.14);
        }

        .mwf-social:nth-child(even):hover {
          color: #ff9c22;

          border-color:
            rgba(255, 121, 0, 0.4);

          box-shadow:
            0 0 14px
            rgba(255, 121, 0, 0.13);
        }

        /* =====================================================
           LINK COLUMNS
        ===================================================== */

        .mwf-column h3 {
          position: relative;

          margin:
            5px 0 20px;

          padding-bottom: 11px;

          color: white;

          font-size: 14px;
          font-weight: 850;

          letter-spacing: 0.035em;
        }

        .mwf-column h3::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: 0;

          width: 38px;
          height: 2px;

          border-radius: 999px;

          background:
            linear-gradient(
              90deg,
              #08b9f4,
              #ff7900
            );
        }

        .mwf-links {
          display: grid;

          gap: 11px;
        }

        .mwf-links a {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          width: fit-content;

          color: #9faeb8;

          text-decoration: none;

          font-size: 13px;

          line-height: 1.35;

          transition:
            color 0.18s ease,
            transform 0.18s ease;
        }

        .mwf-links a::before {
          content: "";

          width: 4px;
          height: 4px;

          flex: 0 0 auto;

          border-radius: 50%;

          background: #08b9f4;

          box-shadow:
            0 0 5px
            rgba(8, 185, 244, 0.5);
        }

        .mwf-links a:nth-child(even)::before {
          background: #ff7900;

          box-shadow:
            0 0 5px
            rgba(255, 121, 0, 0.45);
        }

        .mwf-links a:hover {
          color: white;

          transform:
            translateX(4px);
        }

        /* =====================================================
           CONTACT
        ===================================================== */

        .mwf-contact-list {
          display: grid;

          gap: 17px;
        }

        .mwf-contact-item {
          display: grid;

          grid-template-columns:
            34px 1fr;

          align-items: start;

          gap: 10px;
        }

        .mwf-contact-icon {
          width: 34px;
          height: 34px;

          display: grid;

          place-items: center;

          border:
            1px solid
            rgba(8, 185, 244, 0.19);

          border-radius: 8px;

          background:
            rgba(8, 185, 244, 0.045);
        }

        .mwf-contact-icon.orange {
          border-color:
            rgba(255, 121, 0, 0.2);

          background:
            rgba(255, 121, 0, 0.045);
        }

        .mwf-contact-icon svg {
          width: 17px;
          height: 17px;

          color: #38d7ff;
        }

        .mwf-contact-icon.orange svg {
          color: #ff9c22;
        }

        .mwf-contact-label {
          display: block;

          margin-bottom: 3px;

          color: #71818c;

          font-size: 9px;
          font-weight: 850;

          letter-spacing: 0.1em;

          text-transform: uppercase;
        }

        .mwf-contact-value,
        .mwf-contact-value a {
          color: #dbe5ea;

          text-decoration: none;

          font-size: 12px;

          line-height: 1.55;
        }

        .mwf-contact-value a:hover {
          color: #38d7ff;
        }

        .mwf-location-note {
          margin-top: 18px;

          padding:
            12px 13px;

          border:
            1px solid
            rgba(255, 255, 255, 0.07);

          border-radius: 8px;

          color: #7f8f99;

          background:
            rgba(255, 255, 255, 0.018);

          font-size: 10px;

          line-height: 1.6;
        }

        /* =====================================================
           R&D NOTICE
        ===================================================== */

        .mwf-rd-note {
          position: relative;

          z-index: 2;

          max-width: 1380px;

          margin: 0 auto;

          padding:
            0
            clamp(20px, 5vw, 80px)
            35px;
        }

        .mwf-rd-inner {
          display: flex;

          align-items: flex-start;

          gap: 11px;

          padding:
            14px 16px;

          border:
            1px solid
            rgba(255, 121, 0, 0.15);

          border-radius: 9px;

          color: #80909a;

          background:
            rgba(255, 121, 0, 0.025);

          font-size: 10px;

          line-height: 1.6;
        }

        .mwf-rd-inner svg {
          width: 18px;
          height: 18px;

          flex: 0 0 auto;

          color: #ff7900;
        }

        /* =====================================================
           BOTTOM BAR
        ===================================================== */

        .mwf-bottom {
          position: relative;

          z-index: 2;

          border-top:
            1px solid
            rgba(255, 255, 255, 0.065);

          background:
            rgba(0, 0, 0, 0.25);
        }

        .mwf-bottom-inner {
          max-width: 1380px;

          margin: 0 auto;

          min-height: 78px;

          display: flex;

          align-items: center;
          justify-content: space-between;

          gap: 25px;

          padding:
            18px
            clamp(20px, 5vw, 80px);
        }

        .mwf-copyright {
          margin: 0;

          color: #71818b;

          font-size: 10px;

          line-height: 1.6;
        }

        .mwf-bottom-links {
          display: flex;

          flex-wrap: wrap;

          align-items: center;

          justify-content: flex-end;

          gap: 7px 17px;
        }

        .mwf-bottom-links a {
          color: #8998a2;

          text-decoration: none;

          font-size: 10px;

          transition:
            color 0.18s ease;
        }

        .mwf-bottom-links a:hover {
          color: #38d7ff;
        }

        .mwf-built {
          display: inline-flex;

          align-items: center;

          gap: 5px;

          color: #667680;

          font-size: 10px;
        }

        .mwf-built span:first-child {
          color: #38d7ff;

          font-weight: 850;
        }

        .mwf-built span:last-child {
          color: #ff7900;

          font-weight: 850;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1180px) {
          .mwf-grid {
            grid-template-columns:
              1.4fr
              0.8fr
              0.9fr
              1fr;
          }

          .mwf-contact-column {
            grid-column:
              1 / -1;

            display: grid;

            grid-template-columns:
              170px 1fr;

            gap: 30px;

            padding-top: 10px;
          }

          .mwf-contact-column h3 {
            margin-top: 0;
          }

          .mwf-contact-list {
            grid-template-columns:
              repeat(3, 1fr);
          }

          .mwf-location-note {
            grid-column:
              1 / -1;
          }
        }

        @media (max-width: 900px) {
          .mwf-cta {
            grid-template-columns:
              1fr;
          }

          .mwf-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .mwf-brand-column {
            grid-column:
              1 / -1;
          }

          .mwf-contact-column {
            grid-column:
              1 / -1;

            grid-template-columns:
              1fr;
          }

          .mwf-contact-list {
            grid-template-columns:
              1fr;
          }

          .mwf-bottom-inner {
            flex-direction: column;

            align-items: flex-start;
          }

          .mwf-bottom-links {
            justify-content:
              flex-start;
          }
        }

        @media (max-width: 600px) {
          .mwf-cta-wrap {
            padding:
              45px 16px
              25px;
          }

          .mwf-main {
            padding:
              45px 16px
              35px;
          }

          .mwf-grid {
            grid-template-columns:
              1fr;
          }

          .mwf-brand-column {
            grid-column: auto;
          }

          .mwf-contact-column {
            grid-column: auto;
          }

          .mwf-rd-note {
            padding:
              0 16px
              28px;
          }

          .mwf-bottom-inner {
            padding:
              20px 16px;
          }

          .mwf-cta-buttons {
            width: 100%;
          }

          .mwf-btn {
            width: 100%;
          }

          .mwf-bottom-links {
            display: grid;

            gap: 8px;
          }
        }

        @media (
          prefers-reduced-motion:
          reduce
        ) {
          .mwf-cta::before,
          .mwf-cta::after {
            animation:
              none !important;
          }
        }
      `}</style>

      <footer className="mwf-footer">
        <div
          className="mwf-top-line"
          aria-hidden="true"
        />

        {/* =====================================================
            TOP CTA
        ===================================================== */}

        <div className="mwf-cta-wrap">
          <div className="mwf-cta">
            <div className="mwf-cta-copy">
              <div className="mwf-cta-kicker">
                <Sparkles />
                Have an idea?
              </div>

              <h2>
                Let&apos;s Build{" "}
                <span>Something Useful.</span>
              </h2>

              <p>
                From websites and custom software
                to new technology ideas, tell
                Matthew Web what you&apos;re trying
                to accomplish and we&apos;ll look at
                the best way to build it.
              </p>
            </div>

            <div className="mwf-cta-buttons">
              <Link
                href="/contact-us"
                className="mwf-btn mwf-btn-blue"
              >
                Start a Project
                <ArrowRight />
              </Link>

              <Link
                href="https://buy.stripe.com/5kQeVf0IT9HX75w2YW8og0k"
                className="mwf-btn mwf-btn-orange"
              >
                <Heart />
                Support Us
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}

        <div className="mwf-main">
          <div className="mwf-grid">
            {/* BRAND */}

            <div className="mwf-brand-column">
              <Link
                href="/"
                className="mwf-brand-name"
                aria-label="Matthew Web home"
              >
                <span className="mwf-brand-blue">
                  matthew-
                </span>

                <span className="mwf-brand-orange">
                  web
                </span>
              </Link>

              <p className="mwf-brand-copy">
                Matthew Web is a Maine-based
                technology company building
                practical websites and software
                while expanding into games,
                education and independent computer
                hardware research.
              </p>

              <div className="mwf-tech-row">
                {technologyAreas.map((area) => {
                  const Icon = area.icon;

                  return (
                    <span
                      className={`mwf-tech-tag ${area.className}`}
                      key={area.label}
                    >
                      <Icon />
                      {area.label}
                    </span>
                  );
                })}
              </div>

              <div className="mwf-social-row">
                <a
                  href="https://www.facebook.com/profile.php?id=61585865428354"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Matthew Web on Facebook"
                  title="Facebook"
                  className="mwf-social"
                >
                  f
                </a>

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className="mwf-social"
                >
                  ◎
                </a>

                <a
                  href={googleBusinessLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Matthew Web Google Business Profile"
                  title="Google Business"
                  className="mwf-social"
                >
                  G
                </a>
              </div>
            </div>

            {/* EXPLORE */}

            <div className="mwf-column">
              <h3>Explore</h3>

              <div className="mwf-links">
                {exploreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* SERVICES */}

            <div className="mwf-column">
              <h3>Services</h3>

              <div className="mwf-links">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* PROJECTS */}

            <div className="mwf-column">
              <h3>Projects &amp; Resources</h3>

              <div className="mwf-links">
                {projectLinks.map((link) => (
                  <Link
                    key={`${link.href}-${link.label}`}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ))}

                <Link href="/search">
                  <Search
                    style={{
                      width: "13px",
                      height: "13px",
                    }}
                  />
                  Search
                </Link>
              </div>
            </div>

            {/* CONTACT */}

            <div className="mwf-column mwf-contact-column">
              <h3>Contact</h3>

              <div>
                <div className="mwf-contact-list">
                  <div className="mwf-contact-item">
                    <div className="mwf-contact-icon">
                      <MapPin />
                    </div>

                    <div>
                      <span className="mwf-contact-label">
                        Location
                      </span>

                      <div className="mwf-contact-value">
                        <a
                          href={googleBusinessLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          973 River Road
                          <br />
                          Madison, ME 04950
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mwf-contact-item">
                    <div className="mwf-contact-icon orange">
                      <Phone />
                    </div>

                    <div>
                      <span className="mwf-contact-label">
                        Phone
                      </span>

                      <div className="mwf-contact-value">
                        <a href="tel:2076317793">
                          (207) 631-7793
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mwf-contact-item">
                    <div className="mwf-contact-icon">
                      <Clock3 />
                    </div>

                    <div>
                      <span className="mwf-contact-label">
                        Business Hours
                      </span>

                      <div className="mwf-contact-value">
                        Monday – Friday
                        <br />
                        9:00 AM – 5:00 PM
                        <br />
                        Weekends: Closed
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mwf-location-note">
                  Client walk-ins are not accepted
                  at this location. Please contact
                  Matthew Web by phone, mail, website
                  message, or another arranged method
                  before visiting.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            R&D NOTICE
        ===================================================== */}

        <div className="mwf-rd-note">
          <div className="mwf-rd-inner">
            <Cpu />

            <span>
              Hardware, CPU, FPGA and advanced
              computing content refers to Matthew
              Web research and development unless
              specifically identified as a product
              or service currently available for
              purchase.
            </span>
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <div className="mwf-bottom">
          <div className="mwf-bottom-inner">
            <div>
              <p className="mwf-copyright">
                Copyright © 2026 Matthew Web.
                All Rights Reserved.
                <br />
                Designed &amp; developed by Adam
                Matthew Charest.
              </p>
            </div>

            <div className="mwf-bottom-links">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}

              <a
                href={googleBusinessLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Business
                <ArrowUpRight
                  style={{
                    width: "11px",
                    height: "11px",
                    marginLeft: "4px",
                    verticalAlign: "-2px",
                  }}
                />
              </a>

              <span className="mwf-built">
                <span>WEB</span>
                • SOFTWARE • GAMES • EDUCATION •
                <span>HARDWARE</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
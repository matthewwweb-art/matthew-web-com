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
  Phone,
  Search,
  Sparkles,
} from "lucide-react";

/* ============================================================
   INTERNAL LINKS
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
  { label: "All Services", href: "/services" },
  { label: "Website Design", href: "/website-design" },
  { label: "Custom Software", href: "/custom-software" },
  { label: "SEO & Indexing", href: "/seo-and-indexing" },
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

/* ============================================================
   MATTHEW WEB NETWORK / PRODUCTS
============================================================ */

const productNetworkLinks = [
  {
    label: "Free Game Hub",
    href: "https://games.matthew-web.com",
    description: "Matthew Web game website",
  },
  {
    label: "TankCPU Education — itch.io",
    href:
      "https://matthew-web.itch.io/tankcpu-education-v10-hands-on-8-bit-cpu-course-for-logisim-evolution",
    description: "Educational CPU product",
  },
  {
    label: "8-Bit Educational CPU — Classful",
    href:
      "https://classful.com/product/8-bit-educational-cpu-build-program-understand-a-real-cpu-learn-computer-architecture-by-exploring-and-programming-a-working-8-bit-cpu-built-specifically-for-education/",
    description: "Educational CPU listing",
  },
  {
    label: "Matthew Web on itch.io",
    href: "https://matthew-web.itch.io",
    description: "Games and educational products",
  },
  {
    label: "Matthew Web on GitHub",
    href: "https://github.com/matthewwweb-art",
    description: "Software and development projects",
  },
];

/* ============================================================
   SOCIAL / PROFILE LINKS
============================================================ */

const socialLinks = [
  {
    label: "Facebook",
    href:
      "https://www.facebook.com/profile.php?id=61585865428354",
    mark: "f",
  },
  {
    label: "GitHub",
    href: "https://github.com/matthewwweb-art",
    mark: "GH",
  },
  {
    label: "itch.io",
    href: "https://matthew-web.itch.io",
    mark: "i",
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
        :root {
          --mwf-black: #020304;
          --mwf-blue: #08b9f4;
          --mwf-blue-light: #38d7ff;
          --mwf-orange: #ff7900;
          --mwf-orange-light: #ff9c22;
          --mwf-text: #dbe7ed;
          --mwf-muted: #8fa0aa;
        }

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
            1px solid rgba(8, 185, 244, 0.23);
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

          background-size: 72px 72px;

          mask-image:
            linear-gradient(
              180deg,
              black,
              transparent 87%
            );
        }

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
              var(--mwf-blue) 22%,
              var(--mwf-blue-light) 42%,
              var(--mwf-orange) 64%,
              transparent 100%
            );

          box-shadow:
            0 0 16px rgba(8, 185, 244, 0.42),
            0 0 22px rgba(255, 121, 0, 0.2);
        }

        /* =====================================================
           TOP CTA
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
          grid-template-columns: 1fr auto;
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
            1px solid rgba(8, 185, 244, 0.28);

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
            0 25px 60px rgba(0, 0, 0, 0.32),
            inset 0 0 40px
              rgba(8, 185, 244, 0.025);
        }

        .mwf-cta::before,
        .mwf-cta::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .mwf-cta::before {
          width: 210px;
          height: 210px;
          right: -60px;
          top: -90px;

          border:
            1px dashed rgba(255, 121, 0, 0.16);

          animation:
            mwfRotate 18s linear infinite;
        }

        .mwf-cta::after {
          width: 140px;
          height: 140px;
          right: -25px;
          top: -55px;

          border:
            1px solid rgba(8, 185, 244, 0.13);

          animation:
            mwfRotate 13s linear infinite reverse;
        }

        @keyframes mwfRotate {
          to {
            transform: rotate(360deg);
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
          color: var(--mwf-blue-light);
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
          color: var(--mwf-orange);
        }

        .mwf-cta p {
          max-width: 740px;
          margin: 14px 0 0;
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
          padding: 0 19px;
          border-radius: 9px;
          text-decoration: none;
          color: white;
          font-size: 13px;
          font-weight: 850;
          white-space: nowrap;

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .mwf-btn svg {
          width: 18px;
          height: 18px;
        }

        .mwf-btn-blue {
          border:
            1px solid rgba(56, 215, 255, 0.55);

          background:
            linear-gradient(
              180deg,
              #0ab6ed,
              #0789b6
            );

          box-shadow:
            0 0 15px rgba(8, 185, 244, 0.27);
        }

        .mwf-btn-blue:hover {
          transform: translateY(-2px);

          box-shadow:
            0 0 23px rgba(8, 185, 244, 0.46);
        }

        .mwf-btn-orange {
          border:
            1px solid rgba(255, 175, 49, 0.65);

          background:
            linear-gradient(
              180deg,
              #ff9519,
              #f16600
            );

          box-shadow:
            0 0 15px rgba(255, 121, 0, 0.29);
        }

        .mwf-btn-orange:hover {
          transform: translateY(-2px);

          box-shadow:
            0 0 23px rgba(255, 121, 0, 0.48);
        }

        /* =====================================================
           MAIN GRID
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
            minmax(260px, 1.45fr)
            minmax(135px, 0.7fr)
            minmax(165px, 0.85fr)
            minmax(175px, 0.9fr)
            minmax(230px, 1.15fr);

          gap:
            clamp(
              28px,
              3.7vw,
              56px
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
          letter-spacing: -0.055em;
        }

        .mwf-brand-blue {
          color: var(--mwf-blue-light);
        }

        .mwf-brand-orange {
          color: var(--mwf-orange);
        }

        .mwf-brand-copy {
          max-width: 400px;
          margin: 0;
          color: #aebbc5;
          font-size: 14px;
          line-height: 1.72;
        }

        /* =====================================================
           TECH TAGS
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
          padding: 0 9px;
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
            1px solid rgba(8, 185, 244, 0.2);
        }

        .mwf-tech-tag.orange {
          border:
            1px solid rgba(255, 121, 0, 0.2);
        }

        .mwf-tech-tag svg {
          width: 14px;
          height: 14px;
        }

        .mwf-tech-tag.blue svg {
          color: var(--mwf-blue-light);
        }

        .mwf-tech-tag.orange svg {
          color: var(--mwf-orange-light);
        }

        /* =====================================================
           SOCIAL
        ===================================================== */

        .mwf-social-title {
          margin:
            25px 0
            10px;

          color: #70828d;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .mwf-social-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .mwf-social {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          min-height: 39px;
          padding: 0 11px;

          border:
            1px solid rgba(255, 255, 255, 0.11);

          border-radius: 9px;

          color: white;

          background:
            rgba(255, 255, 255, 0.025);

          text-decoration: none;

          font-size: 11px;
          font-weight: 850;

          transition:
            transform 0.2s ease,
            border-color 0.2s ease,
            color 0.2s ease;
        }

        .mwf-social:hover {
          transform: translateY(-2px);
          color: var(--mwf-blue-light);

          border-color:
            rgba(8, 185, 244, 0.4);
        }

        .mwf-social-mark {
          color: var(--mwf-orange-light);
          font-weight: 900;
        }

        /* =====================================================
           COLUMNS
        ===================================================== */

        .mwf-column h3 {
          position: relative;
          margin: 5px 0 20px;
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
              var(--mwf-blue),
              var(--mwf-orange)
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
          line-height: 1.4;

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
          background: var(--mwf-blue);

          box-shadow:
            0 0 5px rgba(8, 185, 244, 0.5);
        }

        .mwf-links a:nth-child(even)::before {
          background: var(--mwf-orange);

          box-shadow:
            0 0 5px rgba(255, 121, 0, 0.45);
        }

        .mwf-links a:hover {
          color: white;
          transform: translateX(4px);
        }

        .mwf-links svg {
          width: 12px;
          height: 12px;
          flex: 0 0 auto;
        }

        /* =====================================================
           NETWORK
        ===================================================== */

        .mwf-network-list {
          display: grid;
          gap: 10px;
        }

        .mwf-network-card {
          display: block;
          padding: 11px 12px;

          border:
            1px solid rgba(255, 255, 255, 0.075);

          border-radius: 9px;

          background:
            rgba(255, 255, 255, 0.018);

          text-decoration: none;

          transition:
            transform 0.18s ease,
            border-color 0.18s ease,
            background 0.18s ease;
        }

        .mwf-network-card:hover {
          transform: translateY(-2px);

          border-color:
            rgba(8, 185, 244, 0.3);

          background:
            rgba(8, 185, 244, 0.045);
        }

        .mwf-network-name {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #dce8ee;
          font-size: 12px;
          font-weight: 800;
          line-height: 1.4;
        }

        .mwf-network-name svg {
          width: 13px;
          height: 13px;
          flex: 0 0 auto;
          color: var(--mwf-orange-light);
        }

        .mwf-network-description {
          display: block;
          margin-top: 4px;
          color: #72838d;
          font-size: 9px;
          line-height: 1.45;
        }

        /* =====================================================
           CONTACT
        ===================================================== */

        .mwf-contact-column {
          grid-column:
            1 / -1;

          padding-top: 15px;
        }

        .mwf-contact-shell {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 15px;
        }

        .mwf-contact-item {
          display: grid;

          grid-template-columns:
            38px 1fr;

          gap: 11px;

          padding: 14px;

          border:
            1px solid rgba(255, 255, 255, 0.07);

          border-radius: 10px;

          background:
            rgba(255, 255, 255, 0.018);
        }

        .mwf-contact-icon {
          width: 38px;
          height: 38px;

          display: grid;
          place-items: center;

          border:
            1px solid rgba(8, 185, 244, 0.2);

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
          width: 18px;
          height: 18px;
          color: var(--mwf-blue-light);
        }

        .mwf-contact-icon.orange svg {
          color: var(--mwf-orange-light);
        }

        .mwf-contact-label {
          display: block;
          margin-bottom: 4px;
          color: #71818c;
          font-size: 9px;
          font-weight: 850;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .mwf-contact-value,
        .mwf-contact-value a {
          color: var(--mwf-text);
          text-decoration: none;
          font-size: 12px;
          line-height: 1.55;
        }

        .mwf-contact-value a:hover {
          color: var(--mwf-blue-light);
        }

        .mwf-location-note {
          margin-top: 15px;
          padding: 12px 13px;

          border:
            1px solid rgba(255, 255, 255, 0.07);

          border-radius: 8px;

          color: #7f8f99;

          background:
            rgba(255, 255, 255, 0.018);

          font-size: 10px;
          line-height: 1.6;
        }

        /* =====================================================
           R&D
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
          padding: 14px 16px;

          border:
            1px solid rgba(255, 121, 0, 0.15);

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
          color: var(--mwf-orange);
        }

        /* =====================================================
           BOTTOM
        ===================================================== */

        .mwf-bottom {
          position: relative;
          z-index: 2;

          border-top:
            1px solid rgba(255, 255, 255, 0.065);

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
          color: var(--mwf-blue-light);
        }

        .mwf-google-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .mwf-google-link svg {
          width: 11px;
          height: 11px;
        }

        .mwf-built {
          display: inline-flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 5px;
          color: #667680;
          font-size: 10px;
        }

        .mwf-built-blue {
          color: var(--mwf-blue-light);
          font-weight: 850;
        }

        .mwf-built-orange {
          color: var(--mwf-orange);
          font-weight: 850;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1180px) {
          .mwf-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .mwf-brand-column {
            grid-column:
              1 / -1;
          }

          .mwf-contact-column {
            grid-column:
              1 / -1;
          }
        }

        @media (max-width: 900px) {
          .mwf-cta {
            grid-template-columns:
              1fr;
          }

          .mwf-contact-shell {
            grid-template-columns:
              1fr;
          }

          .mwf-bottom-inner {
            flex-direction:
              column;

            align-items:
              flex-start;
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

          .mwf-brand-column,
          .mwf-contact-column {
            grid-column:
              auto;
          }

          .mwf-cta-buttons {
            width: 100%;
          }

          .mwf-btn {
            width: 100%;
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

          .mwf-bottom-links {
            display: grid;
            gap: 8px;
          }

          .mwf-social-row {
            display: grid;

            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .mwf-social {
            width: 100%;
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
            CTA
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
                From websites and custom software to
                business systems, games, educational
                technology and new technology ideas,
                tell Matthew Web what you&apos;re
                trying to accomplish.
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

              <a
                href="https://buy.stripe.com/5kQeVf0IT9HX75w2YW8og0k"
                className="mwf-btn mwf-btn-orange"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Heart />
                Support Us
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            MAIN
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
                technology business building
                websites, custom software and
                business technology while expanding
                into games, education and independent
                computer hardware research.
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

              <div className="mwf-social-title">
                Social &amp; Profiles
              </div>

              <div className="mwf-social-row">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Matthew Web ${social.label}`}
                    title={social.label}
                    className="mwf-social"
                  >
                    <span className="mwf-social-mark">
                      {social.mark}
                    </span>

                    {social.label}
                  </a>
                ))}

                <a
                  href={googleBusinessLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Matthew Web Google Business Profile"
                  title="Google Business"
                  className="mwf-social"
                >
                  <span className="mwf-social-mark">
                    G
                  </span>

                  Google
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
              <h3>
                Projects &amp; Resources
              </h3>

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
                  <Search />
                  Search Matthew Web
                </Link>
              </div>
            </div>

            {/* PRODUCTS / NETWORK */}

            <div className="mwf-column">
              <h3>
                Products &amp; Network
              </h3>

              <div className="mwf-network-list">
                {productNetworkLinks.map(
                  (link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mwf-network-card"
                    >
                      <span className="mwf-network-name">
                        {link.label}
                        <ArrowUpRight />
                      </span>

                      <span className="mwf-network-description">
                        {link.description}
                      </span>
                    </a>
                  )
                )}
              </div>
            </div>

            {/* CONTACT */}

            <div className="mwf-column mwf-contact-column">
              <h3>Contact</h3>

              <div className="mwf-contact-shell">
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
                Client walk-ins are not accepted at
                this location. Please contact Matthew
                Web by phone, mail, website message,
                or another arranged method before
                visiting.
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
              computing content refers to Matthew Web
              research and development unless
              specifically identified as a product or
              service currently available for
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
                className="mwf-google-link"
              >
                Google Business
                <ArrowUpRight />
              </a>

              <a
                href="https://github.com/matthewwweb-art"
                target="_blank"
                rel="noopener noreferrer"
               className="mwf-google-link"
              >
               GitHub
               <ArrowUpRight />
             </a>

              <span className="mwf-built">
                <span className="mwf-built-blue">
                  WEB
                </span>

                • SOFTWARE • GAMES • EDUCATION •

                <span className="mwf-built-orange">
                  HARDWARE
                </span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
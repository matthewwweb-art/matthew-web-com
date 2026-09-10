"use client";

import { useState } from "react";
import Script from "next/script";
import Link from "next/link";

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Code2,
  FileText,
  Globe2,
  LifeBuoy,
  MapPin,
  MessageSquare,
  MonitorSmartphone,
  Phone,
  SearchCheck,
  Send,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/* ============================================================
   CONTACT OPTIONS
============================================================ */

const contactOptions = [
  {
    icon: MonitorSmartphone,
    title: "Website Project",
    text:
      "New website, redesign, mobile improvements, additional pages, lead capture, or other website work.",
    accent: "blue",
  },

  {
    icon: Code2,
    title: "Custom Software",
    text:
      "Dashboards, lead systems, business tools, workflows, databases, forms, integrations, or automation.",
    accent: "orange",
  },

  {
    icon: SearchCheck,
    title: "SEO & Indexing",
    text:
      "Search Console, Bing Webmaster Tools, metadata, sitemaps, indexing issues, internal links, or search structure.",
    accent: "blue",
  },

  {
    icon: Wrench,
    title: "Existing Website Help",
    text:
      "Maintenance, updates, deployment, domains, broken features, forms, payments, or additional functionality.",
    accent: "orange",
  },

  {
    icon: LifeBuoy,
    title: "Support",
    text:
      "Existing Matthew Web customers can use this page to request help, updates, or additional work.",
    accent: "blue",
  },

  {
    icon: MessageSquare,
    title: "Something Else",
    text:
      "Have another technology or business project in mind? Explain what you are trying to accomplish.",
    accent: "orange",
  },
];

/* ============================================================
   WHAT TO INCLUDE
============================================================ */

const helpfulDetails = [
  "What your business does",
  "What you need help with",
  "Whether you already have a website",
  "Your current website address, if applicable",
  "The problem you are trying to solve",
  "Important features or pages you need",
  "Any timeline you are working with",
  "Anything else that will help explain the project",
];

/* ============================================================
   PAGE
============================================================ */

export default function ContactUsPage() {
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

  const recaptchaSiteKey =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  function updateField(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
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
      setStatus(
        "Please fill out all required fields."
      );

      setStatusType("error");

      return;
    }

    const recaptchaToken =
      typeof window !== "undefined" &&
      window.grecaptcha
        ? window.grecaptcha.getResponse()
        : "";

    if (!recaptchaToken) {
      setStatus(
        "Please complete the reCAPTCHA."
      );

      setStatusType("error");

      return;
    }

    try {
      setSubmitting(true);

      const response = await fetch(
        "/api/leads",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            ...form,

            page_source:
              "Contact Us Page",

            recaptchaToken,
          }),
        }
      );

      const data =
        await response.json();

      if (
        !response.ok ||
        !data.ok
      ) {
        throw new Error(
          data.error ||
            "Something went wrong."
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
        typeof window !==
          "undefined" &&
        window.grecaptcha
      ) {
        window.grecaptcha.reset();
      }

      setStatus(
        "Thank you! We received your message and will be in contact within 48 hours."
      );

      setStatusType(
        "success"
      );
    } catch (error) {
      setStatus(
        error.message ||
          "Something went wrong. Please try again."
      );

      setStatusType(
        "error"
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="mwc-page">
      {/* ======================================================
          RECAPTCHA
      ====================================================== */}

      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />

      <SiteHeader />

      <style>{`
        :root {
          --mwc-black:
            #020304;

          --mwc-panel:
            #091117;

          --mwc-muted:
            #aebbc5;

          --mwc-blue:
            #08b9f4;

          --mwc-blue-light:
            #38d7ff;

          --mwc-orange:
            #ff7900;

          --mwc-orange-light:
            #ffab31;

          --mwc-green:
            #35e07e;

          --mwc-border:
            rgba(
              255,
              255,
              255,
              0.09
            );
        }

        * {
          box-sizing:
            border-box;
        }

        body {
          margin:
            0;

          background:
            var(
              --mwc-black
            );
        }

        .mwc-page {
          min-height:
            100vh;

          overflow:
            hidden;

          color:
            #ffffff;

          background:
            var(
              --mwc-black
            );
        }

        .mwc-container {
          width:
            100%;

          max-width:
            1380px;

          margin:
            0 auto;
        }

        .mwc-section {
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

        .mwc-blue {
          color:
            var(
              --mwc-blue-light
            );
        }

        .mwc-orange {
          color:
            var(
              --mwc-orange
            );
        }

        /* =====================================================
           SHARED
        ===================================================== */

        .mwc-kicker {
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
              --mwc-blue-light
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

        .mwc-kicker.orange {
          color:
            var(
              --mwc-orange-light
            );
        }

        .mwc-kicker svg {
          width:
            18px;

          height:
            18px;
        }

        .mwc-heading {
          max-width:
            900px;

          margin-bottom:
            48px;
        }

        .mwc-heading.center {
          margin-left:
            auto;

          margin-right:
            auto;

          text-align:
            center;
        }

        .mwc-heading h2 {
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

        .mwc-heading p {
          max-width:
            800px;

          margin:
            0;

          color:
            var(
              --mwc-muted
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

        .mwc-heading.center p {
          margin-left:
            auto;

          margin-right:
            auto;
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .mwc-button-row {
          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            13px;

          margin-top:
            29px;
        }

        .mwc-btn {
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

        .mwc-btn svg {
          width:
            18px;

          height:
            18px;
        }

        .mwc-btn-blue {
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

        .mwc-btn-orange {
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

        .mwc-btn-dark {
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

        .mwc-btn:hover {
          transform:
            translateY(
              -2px
            );
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwc-hero {
          position:
            relative;

          min-height:
            640px;

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

        .mwc-hero::before {
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

        .mwc-hero-inner {
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

        .mwc-hero-badge {
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

        .mwc-hero-badge span {
          width:
            7px;

          height:
            7px;

          border-radius:
            50%;

          background:
            var(
              --mwc-green
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

        .mwc-hero h1 {
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

        .mwc-hero h1 span {
          display:
            block;
        }

        .mwc-hero-copy
          > p {
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

        /* =====================================================
           CONTACT TERMINAL
        ===================================================== */

        .mwc-contact-stage {
          position:
            relative;

          min-height:
            430px;

          display:
            grid;

          place-items:
            center;
        }

        .mwc-contact-panel {
          width:
            min(
              100%,
              490px
            );

          padding:
            27px;

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.3
            );

          border-radius:
            21px;

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

        .mwc-contact-panel-top {
          display:
            flex;

          justify-content:
            space-between;

          align-items:
            center;

          margin-bottom:
            24px;
        }

        .mwc-contact-panel-top
          strong {
          color:
            #81929d;

          font-size:
            9px;

          letter-spacing:
            0.13em;
        }

        .mwc-contact-live {
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
            0.08em;
        }

        .mwc-contact-live::before {
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
              --mwc-green
            );

          box-shadow:
            0 0 7px
            rgba(
              53,
              224,
              126,
              0.7
            );
        }

        .mwc-contact-line {
          display:
            grid;

          grid-template-columns:
            38px 1fr;

          align-items:
            center;

          gap:
            12px;

          min-height:
            67px;

          margin-bottom:
            10px;

          padding:
            12px 14px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.07
            );

          border-radius:
            9px;

          background:
            #081117;
        }

        .mwc-contact-line
          svg {
          width:
            22px;

          height:
            22px;

          color:
            var(
              --mwc-blue-light
            );
        }

        .mwc-contact-line:nth-child(odd)
          svg {
          color:
            var(
              --mwc-orange-light
            );
        }

        .mwc-contact-line
          strong {
          display:
            block;

          font-size:
            12px;
        }

        .mwc-contact-line
          span,
        .mwc-contact-line
          a {
          display:
            block;

          margin-top:
            4px;

          color:
            #82939d;

          font-size:
            10px;

          text-decoration:
            none;
        }

        .mwc-contact-line
          a:hover {
          color:
            var(
              --mwc-blue-light
            );
        }

        /* =====================================================
           CONTACT TYPES
        ===================================================== */

        .mwc-options {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwc-option-grid {
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

        .mwc-option-card {
          min-height:
            250px;

          padding:
            24px;

          border:
            1px solid
            var(
              --mwc-border
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

        .mwc-option-card:hover {
          transform:
            translateY(
              -4px
            );
        }

        .mwc-option-card.blue:hover {
          border-color:
            rgba(
              8,
              185,
              244,
              0.32
            );
        }

        .mwc-option-card.orange:hover {
          border-color:
            rgba(
              255,
              121,
              0,
              0.32
            );
        }

        .mwc-option-icon {
          width:
            53px;

          height:
            53px;

          display:
            grid;

          place-items:
            center;

          margin-bottom:
            18px;

          border-radius:
            13px;
        }

        .mwc-option-card.blue
          .mwc-option-icon {
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
              --mwc-blue-light
            );

          background:
            rgba(
              8,
              185,
              244,
              0.055
            );
        }

        .mwc-option-card.orange
          .mwc-option-icon {
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
              --mwc-orange-light
            );

          background:
            rgba(
              255,
              121,
              0,
              0.05
            );
        }

        .mwc-option-icon
          svg {
          width:
            27px;

          height:
            27px;
        }

        .mwc-option-card
          h3 {
          margin:
            0 0 10px;

          font-size:
            18px;
        }

        .mwc-option-card
          p {
          margin:
            0;

          color:
            var(
              --mwc-muted
            );

          font-size:
            13px;

          line-height:
            1.68;
        }

        /* =====================================================
           FORM AREA
        ===================================================== */

        .mwc-form-section {
          position:
            relative;

          padding:
            110px
            clamp(
              20px,
              5vw,
              80px
            );

          background:
            radial-gradient(
              ellipse at
              15% 35%,
              rgba(
                8,
                185,
                244,
                0.08
              ),
              transparent
              32%
            ),
            radial-gradient(
              ellipse at
              85% 65%,
              rgba(
                255,
                121,
                0,
                0.055
              ),
              transparent
              30%
            ),
            #020304;
        }

        .mwc-form-layout {
          max-width:
            1280px;

          margin:
            0 auto;

          display:
            grid;

          grid-template-columns:
            minmax(
              330px,
              0.78fr
            )
            minmax(
              0,
              1.22fr
            );

          align-items:
            start;

          gap:
            clamp(
              40px,
              7vw,
              90px
            );
        }

        .mwc-form-info {
          position:
            sticky;

          top:
            30px;
        }

        .mwc-form-info h2 {
          margin:
            0;

          font-size:
            clamp(
              39px,
              4.5vw,
              65px
            );

          line-height:
            1.02;

          letter-spacing:
            -0.05em;
        }

        .mwc-form-info
          > p {
          margin:
            20px 0 0;

          color:
            var(
              --mwc-muted
            );

          font-size:
            15px;

          line-height:
            1.75;
        }

        .mwc-detail-list {
          display:
            grid;

          gap:
            11px;

          margin:
            28px 0 0;

          padding:
            0;

          list-style:
            none;
        }

        .mwc-detail-list
          li {
          display:
            flex;

          align-items:
            flex-start;

          gap:
            9px;

          color:
            #c1ced4;

          font-size:
            12px;

          line-height:
            1.5;
        }

        .mwc-detail-list
          svg {
          width:
            16px;

          height:
            16px;

          flex:
            0 0 auto;

          margin-top:
            1px;

          color:
            var(
              --mwc-blue-light
            );
        }

        /* =====================================================
           FORM PANEL
        ===================================================== */

        .mwc-form-panel {
          padding:
            clamp(
              26px,
              4vw,
              44px
            );

          border:
            1px solid
            rgba(
              8,
              185,
              244,
              0.2
            );

          border-radius:
            21px;

          background:
            linear-gradient(
              145deg,
              #0a141a,
              #04080b
            );

          box-shadow:
            0 28px 70px
            rgba(
              0,
              0,
              0,
              0.32
            );
        }

        .mwc-form-panel-top {
          display:
            flex;

          justify-content:
            space-between;

          align-items:
            center;

          gap:
            20px;

          margin-bottom:
            30px;
        }

        .mwc-form-panel-top
          h3 {
          margin:
            0;

          font-size:
            26px;

          letter-spacing:
            -0.035em;
        }

        .mwc-form-secure {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            6px;

          color:
            #8799a3;

          font-size:
            9px;

          font-weight:
            850;

          letter-spacing:
            0.07em;

          white-space:
            nowrap;
        }

        .mwc-form-secure
          svg {
          width:
            14px;

          height:
            14px;

          color:
            var(
              --mwc-green
            );
        }

        .mwc-form-grid {
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
            17px;
        }

        .mwc-field {
          display:
            flex;

          flex-direction:
            column;

          gap:
            8px;
        }

        .mwc-field.full {
          grid-column:
            1 / -1;
        }

        .mwc-field label {
          color:
            #c7d2d8;

          font-size:
            10px;

          font-weight:
            900;

          letter-spacing:
            0.07em;

          text-transform:
            uppercase;
        }

        .mwc-field input,
        .mwc-field textarea {
          width:
            100%;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.11
            );

          border-radius:
            9px;

          outline:
            none;

          color:
            #ffffff;

          background:
            #050b0f;

          font-size:
            14px;

          transition:
            border-color
              0.2s ease,
            box-shadow
              0.2s ease;
        }

        .mwc-field input {
          min-height:
            54px;

          padding:
            0 15px;
        }

        .mwc-field textarea {
          min-height:
            160px;

          padding:
            15px;

          resize:
            vertical;

          font-family:
            inherit;

          line-height:
            1.6;
        }

        .mwc-field input::placeholder,
        .mwc-field textarea::placeholder {
          color:
            #566771;
        }

        .mwc-field input:focus,
        .mwc-field textarea:focus {
          border-color:
            rgba(
              8,
              185,
              244,
              0.6
            );

          box-shadow:
            0 0 0 3px
            rgba(
              8,
              185,
              244,
              0.07
            );
        }

        /* =====================================================
           RECAPTCHA & STATUS
        ===================================================== */

        .mwc-recaptcha-wrap {
          display:
            flex;

          justify-content:
            flex-start;

          margin:
            28px 0;
        }

        .mwc-status {
          margin:
            0 0 20px;

          padding:
            14px 16px;

          border-radius:
            9px;

          font-size:
            13px;

          font-weight:
            750;

          line-height:
            1.55;
        }

        .mwc-status.success {
          border:
            1px solid
            rgba(
              53,
              224,
              126,
              0.32
            );

          color:
            #baf2cf;

          background:
            rgba(
              53,
              224,
              126,
              0.07
            );
        }

        .mwc-status.error {
          border:
            1px solid
            rgba(
              255,
              100,
              100,
              0.32
            );

          color:
            #ffb7b7;

          background:
            rgba(
              255,
              70,
              70,
              0.07
            );
        }

        /* =====================================================
           SUBMIT
        ===================================================== */

        .mwc-submit {
          min-height:
            55px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            9px;

          padding:
            0 25px;

          border:
            1px solid
            rgba(
              255,
              176,
              49,
              0.6
            );

          border-radius:
            9px;

          color:
            #ffffff;

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

          font-size:
            14px;

          font-weight:
            900;

          cursor:
            pointer;

          transition:
            transform
              0.2s ease,
            opacity
              0.2s ease;
        }

        .mwc-submit:hover:not(:disabled) {
          transform:
            translateY(
              -2px
            );
        }

        .mwc-submit:disabled {
          opacity:
            0.6;

          cursor:
            not-allowed;
        }

        .mwc-submit
          svg {
          width:
            18px;

          height:
            18px;
        }

        /* =====================================================
           LOCATION / CONTACT
        ===================================================== */

        .mwc-location {
          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwc-location-grid {
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

        .mwc-location-card {
          min-height:
            205px;

          padding:
            24px;

          border:
            1px solid
            var(
              --mwc-border
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

        .mwc-location-card
          svg {
          width:
            30px;

          height:
            30px;

          margin-bottom:
            17px;

          color:
            var(
              --mwc-blue-light
            );
        }

        .mwc-location-card:nth-child(even)
          svg {
          color:
            var(
              --mwc-orange-light
            );
        }

        .mwc-location-card
          h3 {
          margin:
            0 0 10px;

          font-size:
            18px;
        }

        .mwc-location-card
          p,
        .mwc-location-card
          a {
          margin:
            0;

          color:
            var(
              --mwc-muted
            );

          font-size:
            13px;

          line-height:
            1.7;

          text-decoration:
            none;
        }

        .mwc-location-card
          a:hover {
          color:
            var(
              --mwc-blue-light
            );
        }

        /* =====================================================
           PROJECT NOTE
        ===================================================== */

        .mwc-project-note {
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

        .mwc-project-note-card {
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

        .mwc-project-note-icon {
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
              --mwc-blue-light
            );

          background:
            rgba(
              8,
              185,
              244,
              0.055
            );
        }

        .mwc-project-note-icon
          svg {
          width:
            35px;

          height:
            35px;
        }

        .mwc-project-note-copy
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

        .mwc-project-note-copy
          p {
          margin:
            0;

          color:
            var(
              --mwc-muted
            );

          font-size:
            14px;

          line-height:
            1.72;
        }

        /* =====================================================
           FINAL CTA
        ===================================================== */

        .mwc-final {
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

        .mwc-final-card {
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

        .mwc-final-card
          > svg {
          width:
            43px;

          height:
            43px;

          margin-bottom:
            19px;

          color:
            var(
              --mwc-orange
            );
        }

        .mwc-final-card
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

        .mwc-final-card
          p {
          max-width:
            730px;

          margin:
            18px auto 0;

          color:
            var(
              --mwc-muted
            );

          font-size:
            15px;

          line-height:
            1.75;
        }

        .mwc-final-card
          .mwc-button-row {
          justify-content:
            center;
        }

        .mwc-related {
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

        .mwc-related
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

        .mwc-related
          a:hover {
          color:
            var(
              --mwc-blue-light
            );
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (
          max-width:
          1100px
        ) {
          .mwc-option-grid {
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
          .mwc-hero-inner,
          .mwc-form-layout {
            grid-template-columns:
              1fr;
          }

          .mwc-hero-inner {
            text-align:
              center;
          }

          .mwc-hero-badge {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwc-hero-copy
            > p {
            margin-left:
              auto;

            margin-right:
              auto;
          }

          .mwc-button-row {
            justify-content:
              center;
          }

          .mwc-contact-stage {
            min-height:
              400px;
          }

          .mwc-form-info {
            position:
              static;
          }

          .mwc-location-grid {
            grid-template-columns:
              1fr;
          }
        }

        @media (
          max-width:
          700px
        ) {
          .mwc-section,
          .mwc-form-section {
            padding:
              70px 16px;
          }

          .mwc-hero {
            min-height:
              auto;
          }

          .mwc-hero-inner {
            padding:
              70px 16px;
          }

          .mwc-hero h1 {
            font-size:
              clamp(
                46px,
                14vw,
                67px
              );
          }

          .mwc-option-grid {
            grid-template-columns:
              1fr;
          }

          .mwc-form-grid {
            grid-template-columns:
              1fr;
          }

          .mwc-field.full {
            grid-column:
              auto;
          }

          .mwc-project-note-card {
            grid-template-columns:
              1fr;

            text-align:
              center;
          }

          .mwc-project-note-icon {
            margin:
              0 auto;
          }
        }

        @media (
          max-width:
          500px
        ) {
          .mwc-contact-stage {
            min-height:
              360px;

            transform:
              scale(
                0.9
              );

            margin:
              -10px -20px;
          }

          .mwc-form-panel {
            padding:
              22px 16px;
          }

          .mwc-form-panel-top {
            align-items:
              flex-start;

            flex-direction:
              column;
          }

          .mwc-recaptcha-wrap {
            overflow-x:
              auto;
          }

          .mwc-submit {
            width:
              100%;
          }
        }
      `}</style>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        className="mwc-hero"
        id="contact-us"
      >
        <div className="mwc-hero-inner">
          <div className="mwc-hero-copy">
            <div className="mwc-hero-badge">
              <span />
              Projects • Support • Technology
            </div>

            <h1>
              <span>
                Tell Us What
              </span>

              <span className="mwc-blue">
                You Need.
              </span>

              <span>
                Let&apos;s Find the
              </span>

              <span className="mwc-orange">
                Right Solution.
              </span>
            </h1>

            <p>
              Need a website, redesign, custom
              software, SEO help, maintenance,
              business functionality, or another
              technology solution? Tell Matthew
              Web what problem you are trying to
              solve.
            </p>

            <div className="mwc-button-row">
              <a
                href="#contact-form"
                className="mwc-btn mwc-btn-blue"
              >
                Send Project Details
                <ArrowRight />
              </a>

              <Link
                href="/pricing"
                className="mwc-btn mwc-btn-dark"
              >
                View Pricing
              </Link>
            </div>
          </div>

          <div
            className="mwc-contact-stage"
            aria-hidden="true"
          >
            <div className="mwc-contact-panel">
              <div className="mwc-contact-panel-top">
                <strong>
                  MATTHEW WEB // CONTACT
                </strong>

                <div className="mwc-contact-live">
                  AVAILABLE
                </div>
              </div>

              <div className="mwc-contact-line">
                <Phone />

                <div>
                  <strong>
                    Phone
                  </strong>

                  <a href="tel:2076317793">
                    (207) 631-7793
                  </a>
                </div>
              </div>

              <div className="mwc-contact-line">
                <MapPin />

                <div>
                  <strong>
                    Maine
                  </strong>

                  <span>
                    973 River Road • Madison, ME 04950
                  </span>
                </div>
              </div>

              <div className="mwc-contact-line">
                <Globe2 />

                <div>
                  <strong>
                    Project Availability
                  </strong>

                  <span>
                    Maine + Remote U.S. Projects
                  </span>
                </div>
              </div>

              <div className="mwc-contact-line">
                <MessageSquare />

                <div>
                  <strong>
                    Online Inquiry
                  </strong>

                  <span>
                    Use the project form below
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          WHAT CAN WE HELP WITH?
      ====================================================== */}

      <section
        className="mwc-section mwc-options"
        id="project-types"
      >
        <div className="mwc-container">
          <div className="mwc-heading center">
            <div className="mwc-kicker">
              <Sparkles />
              How Can We Help?
            </div>

            <h2>
              Start With the{" "}
              <span className="mwc-blue">
                Problem
              </span>
            </h2>

            <p>
              You do not need to know the exact
              technical solution before
              contacting Matthew Web. Explain
              what is not working or what you
              want the business to be able to
              do.
            </p>
          </div>

          <div className="mwc-option-grid">
            {contactOptions.map(
              (item) => {
                const Icon =
                  item.icon;

                return (
                  <div
                    className={`mwc-option-card ${item.accent}`}
                    key={item.title}
                  >
                    <div className="mwc-option-icon">
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
          FORM
      ====================================================== */}

      <section
        className="mwc-form-section"
        id="contact-form"
      >
        <div className="mwc-form-layout">
          <div className="mwc-form-info">
            <div className="mwc-kicker orange">
              <FileText />
              Project Inquiry
            </div>

            <h2>
              Give Us Enough Information to{" "}
              <span className="mwc-orange">
                Understand the Job.
              </span>
            </h2>

            <p>
              The more useful information you
              provide, the easier it is to
              understand whether you need a
              standard website project, a
              specific website fix, ongoing
              support, or custom development.
            </p>

            <ul className="mwc-detail-list">
              {helpfulDetails.map(
                (item) => (
                  <li key={item}>
                    <CheckCircle2 />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="mwc-form-panel">
            <div className="mwc-form-panel-top">
              <h3>
                Contact Matthew Web
              </h3>

              <div className="mwc-form-secure">
                <ShieldCheck />
                PROTECTED BY RECAPTCHA
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
            >
              <div className="mwc-form-grid">
                <div className="mwc-field">
                  <label htmlFor="name">
                    Your Name *
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={updateField}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="mwc-field">
                  <label htmlFor="business_name">
                    Business Name *
                  </label>

                  <input
                    id="business_name"
                    type="text"
                    name="business_name"
                    placeholder="Business name"
                    value={
                      form.business_name
                    }
                    onChange={updateField}
                    autoComplete="organization"
                    required
                  />
                </div>

                <div className="mwc-field">
                  <label htmlFor="email">
                    Email Address *
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={updateField}
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="mwc-field">
                  <label htmlFor="phone">
                    Phone Number *
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={form.phone}
                    onChange={updateField}
                    autoComplete="tel"
                    required
                  />
                </div>

                <div className="mwc-field full">
                  <label htmlFor="message">
                    Project Details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us what you need, what you have now, and what problem you are trying to solve..."
                    value={form.message}
                    onChange={updateField}
                  />
                </div>
              </div>

              <div className="mwc-recaptcha-wrap">
                {recaptchaSiteKey ? (
                  <div
                    className="g-recaptcha"
                    data-sitekey={
                      recaptchaSiteKey
                    }
                  />
                ) : (
                  <div className="mwc-status error">
                    Missing
                    NEXT_PUBLIC_RECAPTCHA_SITE_KEY
                    in .env.local
                  </div>
                )}
              </div>

              {status ? (
                <div
                  className={`mwc-status ${statusType}`}
                >
                  {status}
                </div>
              ) : null}

              <button
                type="submit"
                className="mwc-submit"
                disabled={submitting}
              >
                {submitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Inquiry
                    <Send />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ======================================================
          DIRECT CONTACT
      ====================================================== */}

      <section
        className="mwc-section mwc-location"
        id="direct-contact"
      >
        <div className="mwc-container">
          <div className="mwc-heading center">
            <div className="mwc-kicker">
              <Building2 />
              Direct Contact
            </div>

            <h2>
              Prefer a More{" "}
              <span className="mwc-blue">
                Direct Route?
              </span>
            </h2>

            <p>
              Use the online form whenever
              possible so the project information
              can be reviewed in one place, but
              phone contact is also available.
            </p>
          </div>

          <div className="mwc-location-grid">
            <div className="mwc-location-card">
              <Phone />

              <h3>
                Phone
              </h3>

              <a href="tel:2076317793">
                (207) 631-7793
              </a>
            </div>

            <div className="mwc-location-card">
              <MapPin />

              <h3>
                Business Address
              </h3>

              <p>
                973 River Road
                <br />
                Madison, ME 04950
              </p>
            </div>

            <div className="mwc-location-card">
              <Globe2 />

              <h3>
                Service Area
              </h3>

              <p>
                Maine-focused small-business
                service with remote projects
                available throughout the United
                States.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          PROJECT TERMS NOTE
      ====================================================== */}

      <section className="mwc-project-note">
        <div className="mwc-project-note-card">
          <div className="mwc-project-note-icon">
            <FileText />
          </div>

          <div className="mwc-project-note-copy">
            <h2>
              Inquiry First.{" "}
              <span className="mwc-blue">
                Scope Second.
              </span>
            </h2>

            <p>
              Submitting this contact form does
              not automatically define a project
              scope or price. Matthew Web can
              review the request, determine what
              work is needed, and establish the
              appropriate project details before
              committed development begins.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          FINAL CTA
      ====================================================== */}

      <section
        className="mwc-final"
        id="ready-to-start"
      >
        <div className="mwc-final-card">
          <Zap />

          <h2>
            Have a Problem Worth{" "}
            <span className="mwc-orange">
              Solving?
            </span>
          </h2>

          <p>
            Start with the project inquiry above.
            Matthew Web can help determine
            whether the right solution is a new
            website, redesign, technical fix,
            ongoing service, search support, or
            custom software.
          </p>

          <div className="mwc-button-row">
            <a
              href="#contact-form"
              className="mwc-btn mwc-btn-orange"
            >
              Send Project Details
              <ArrowRight />
            </a>

            <Link
              href="/pricing"
              className="mwc-btn mwc-btn-dark"
            >
              View Pricing
            </Link>
          </div>

          <nav className="mwc-related">
            <Link href="/services">
              Services
            </Link>

            <Link href="/website-design">
              Website Design
            </Link>

            <Link href="/custom-software">
              Custom Software
            </Link>

            <Link href="/examples">
              Examples
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
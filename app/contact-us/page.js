"use client";

import { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Examples", href: "/examples" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact Us", href: "/contact-us" },
];

const images = {
  logo:
    "https://d14tal8bchn59o.cloudfront.net/pD8SMCm46GE9kXJfrsm-3pOgtGU_bUZ6M378zAftc-g/w:1920/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23501021/Screenshot_2025-12-19_174653_original.png",
  contact:
    "https://d14tal8bchn59o.cloudfront.net/ds-Ke-Cy2_wky4DWpTe-1ObrxkL6JDyiZKxiOZ4rqek/w:700/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374774/contact_original.jpg",
  cta:
    "https://d14tal8bchn59o.cloudfront.net/CHtN7q4DWtPHAZwDIAxcVv-h8M1_pakHSx7aJ86Il5Q/s:322:225:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374779/website-cta_original.png",
};

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

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

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

    if (!form.name || !form.email || !form.phone || !form.business_name) {
      setStatus("Please fill out all required fields.");
      setStatusType("error");
      return;
    }

    const recaptchaToken =
      typeof window !== "undefined" && window.grecaptcha
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
          page_source: "Contact Us Page",
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setForm({
        name: "",
        email: "",
        phone: "",
        business_name: "",
        message: "",
      });

      if (typeof window !== "undefined" && window.grecaptcha) {
        window.grecaptcha.reset();
      }

      setStatus(
        "Thank you! We received your message and will be in contact within 48 hours."
      );
      setStatusType("success");
    } catch (error) {
      setStatus(error.message || "Something went wrong. Please try again.");
      setStatusType("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main>
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          color: #303036;
          background: #ffffff;
        }

        a {
          text-decoration: none;
        }

        .site-header {
          background: #ffffff;
        }

        .logo-wrap {
          padding: 35px 0 35px 7%;
          background: #ffffff;
        }

        .logo-link {
          display: inline-block;
        }

        .site-logo {
          display: block;
          width: 520px;
          max-width: 90%;
          height: auto;
        }

        .main-nav {
          background: #0f83a6;
        }

        .nav-inner {
          display: flex;
          justify-content: center;
          align-items: stretch;
          flex-wrap: wrap;
        }

        .nav-link {
          color: #ff7900;
          font-size: 18px;
          padding: 18px 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.2s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          background: #f57c00;
          color: #ffffff;
        }

        .search-link {
          gap: 5px;
        }

        .page-title {
          background: #f57c00;
          padding: 52px 20px 78px;
          text-align: center;
        }

        .page-title h1 {
          margin: 0;
          color: #ffffff;
          font-size: 58px;
          line-height: 1.1;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .contact-intro {
          padding: 90px 7% 80px;
          background: #ffffff;
        }

        .contact-grid {
          max-width: 1220px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .contact-image img {
          width: 100%;
          display: block;
          border-radius: 0 0 24px 24px;
          object-fit: cover;
        }

        .address {
          font-size: 22px;
          line-height: 1.35;
          margin: 10px 0 25px;
        }

        .phone-line {
          font-size: 26px;
          font-weight: 900;
          margin-top: 20px;
        }

        .phone-line a {
          color: #f57c00;
        }

        .contact-copy h2 {
          margin: 0 0 14px;
          font-size: 42px;
          line-height: 1.25;
          font-weight: 900;
        }

        .contact-copy .subhead {
          font-size: 26px;
          margin: 0 0 26px;
        }

        .contact-copy p {
          font-size: 22px;
          line-height: 1.35;
          margin: 0 0 22px;
        }

        .contact-copy strong {
          font-size: 23px;
        }

        .form-section {
          background: #f3f3f3;
          padding: 85px 7% 100px;
          text-align: center;
        }

        .form-section h2 {
          margin: 0 0 22px;
          font-size: 42px;
          line-height: 1.2;
          font-weight: 900;
        }

        .form-section .form-subtitle {
          margin: 0 0 70px;
          font-size: 26px;
        }

        .contact-form {
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          display: block;
          border: 1px solid #d7d7d7;
          background: #ffffff;
          padding: 18px 14px;
          margin-bottom: 28px;
          font-size: 18px;
          color: #333;
          outline: none;
        }

        .contact-form textarea {
          min-height: 130px;
          resize: vertical;
          font-family: Arial, Helvetica, sans-serif;
        }

        .recaptcha-wrap {
          display: flex;
          justify-content: center;
          margin: 30px auto;
        }

        .form-status {
          max-width: 800px;
          margin: 0 auto 28px;
          padding: 16px 18px;
          border-radius: 8px;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.4;
        }

        .form-status.success {
          background: #dcfce7;
          color: #166534;
          border: 1px solid #86efac;
        }

        .form-status.error {
          background: #fee2e2;
          color: #991b1b;
          border: 1px solid #fca5a5;
        }

        .btn-primary,
        .submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #f57c00;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          padding: 22px 56px;
          min-width: 184px;
          font-size: 24px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .btn-primary:hover,
        .submit-btn:hover {
          background: #d96d00;
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .services-cta-parallax {
          min-height: 365px;
          background-image:
            linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
            url("${images.cta}");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 65px 20px;
        }

        .services-cta-overlay {
          max-width: 1100px;
          color: #ffffff;
        }

        .services-cta-overlay h2 {
          margin: 0 0 28px;
          font-size: 48px;
          line-height: 1.1;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .services-cta-overlay p {
          margin: 0 auto 30px;
          font-size: 28px;
          line-height: 1.25;
          max-width: 1100px;
        }

        .site-footer {
          background: #f5821f;
          color: #ffffff;
          padding: 48px 32px 55px;
        }

        .footer-grid {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 70px;
        }

        .footer-grid h3 {
          font-size: 22px;
          margin: 0 0 18px;
          color: #ffffff;
        }

        .footer-grid p,
        .footer-grid a {
          color: #ffffff;
          font-size: 20px;
          line-height: 1.65;
        }

        .footer-grid a {
          text-decoration: underline;
        }

        .footer-contact {
          margin: 0 0 14px;
          font-size: 20px;
        }

        .social-row {
          display: flex;
          gap: 22px;
          margin-top: 24px;
        }

        .social-row span {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #ffffff;
          color: #f5821f;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          font-weight: 900;
        }

        .footer-nav {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 24px;
          margin: 60px auto 25px;
        }

        .footer-nav a {
          color: #ffffff;
          font-size: 18px;
        }

        .copyright {
          text-align: center;
          font-size: 12px;
          margin: 0;
          color: #ffffff;
        }

        @media (max-width: 900px) {
          .logo-wrap {
            padding: 24px 20px;
            text-align: center;
          }

          .site-logo {
            margin: 0 auto;
            width: 430px;
          }

          .nav-inner {
            justify-content: flex-start;
          }

          .nav-link {
            font-size: 16px;
            padding: 15px 12px;
          }

          .page-title h1 {
            font-size: 44px;
          }

          .contact-grid,
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .contact-intro {
            padding: 55px 22px;
          }

          .contact-copy h2,
          .form-section h2 {
            font-size: 34px;
          }

          .contact-copy p,
          .contact-copy .subhead,
          .form-section .form-subtitle,
          .address {
            font-size: 20px;
          }

          .services-cta-parallax {
            background-attachment: scroll;
          }

          .services-cta-overlay h2 {
            font-size: 36px;
          }

          .services-cta-overlay p {
            font-size: 22px;
          }
        }

        @media (max-width: 520px) {
          .site-logo {
            width: 330px;
          }

          .page-title {
            padding: 42px 18px 58px;
          }

          .page-title h1 {
            font-size: 40px;
          }

          .contact-copy h2,
          .form-section h2 {
            font-size: 30px;
          }

          .phone-line {
            font-size: 22px;
          }

          .btn-primary,
          .submit-btn {
            width: 100%;
            max-width: 260px;
            padding: 18px 24px;
            font-size: 22px;
          }

          .footer-grid p,
          .footer-grid a {
            font-size: 17px;
          }
        }
      `}</style>

      <SiteHeader />

      <section className="page-title">
        <h1>Contact Us</h1>
      </section>

      <section className="contact-intro">
        <div className="contact-grid">
          <div>
            <div className="contact-image">
              <img src={images.contact} alt="Contact matthew-web" />
            </div>

            <p className="address">
              973 River Road
              <br />
              Madison, ME 04950
            </p>

            <p className="phone-line">
              Give Us a Call: <a href="tel:2076317793">(207) 631-7793</a>
            </p>
          </div>

          <div className="contact-copy">
            <h2>Contact us today to request your FREE website mockup!</h2>

            <p className="subhead">No cost. No obligation. No risk.</p>

            <p>
              We're so confident you'll love our work, we're willing to design
              your site for free. If you don't love it, you pay nothing. It's as
              simple as that.
            </p>

            <p>
              To get started, give us a call or submit your information using
              the form below. We look forward to hearing from you!
            </p>

            <p>
              <strong>Matthew</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="form-section">
        <h2>Fill out the form below to get started.</h2>
        <p className="form-subtitle">We look forward to hearing from you!</p>

        <form className="contact-form" onSubmit={handleSubmit}>
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
            placeholder="Name of Your Business *"
            value={form.business_name}
            onChange={updateField}
            required
          />

          <textarea
            name="message"
            placeholder="Include a Message"
            value={form.message}
            onChange={updateField}
          ></textarea>

          <div className="recaptcha-wrap">
            {recaptchaSiteKey ? (
              <div
                className="g-recaptcha"
                data-sitekey={recaptchaSiteKey}
              ></div>
            ) : (
              <div className="form-status error">
                Missing NEXT_PUBLIC_RECAPTCHA_SITE_KEY in .env.local
              </div>
            )}
          </div>

          {status ? (
            <div className={`form-status ${statusType}`}>{status}</div>
          ) : null}

          <button type="submit" className="submit-btn" disabled={submitting}>
            {submitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </section>

      <section className="services-cta-parallax">
        <div className="services-cta-overlay">
          <h2>GET YOUR FREE WEBSITE MOCKUP</h2>
          <p>
            Interesting in seeing how your new website can look? Contact us
            today to request your{" "}
            <strong>FREE no-obligation website mockup.</strong>
          </p>
          <Link href="/contact-us" className="btn-primary">
            Get Started Now
          </Link>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <h3>About Matthew</h3>
            <p>
              If you're searching for an affordable and reliable website
              designer near Madison, than look no further. At Matthew, we
              specialize in creating professional, functional, and affordable
              websites for small businesses.
            </p>

            <p>
              Whether you're across town or across the country, our team of
              experts will help you get your business online with a
              cost-friendly website that is visually appealing, user-friendly,
              and optimized for search engines. Contact us to request your FREE
              website demo.
            </p>

            <Link href="/privacy-policy">Privacy Policy</Link>

            <div className="social-row">
              <span>f</span>
              <span>◎</span>
              <span>✹</span>
              <span>G</span>
            </div>
          </div>

          <div>
            <p className="footer-contact">
              📍{" "}
              <a href="https://www.google.com/maps/search/?api=1&query=973+River+Road+Madison+ME+04950">
                973 River Road Madison, ME 04950
              </a>
            </p>

            <p className="footer-contact">
              📞 Phone <a href="tel:2076317793">(207) 631-7793</a>
            </p>

            <p className="footer-contact">
              🕘 Monday - Friday: 9:00am - 5:00pm
              <br />
              Saturday - Sunday: Closed
            </p>
          </div>
        </div>

        <nav className="footer-nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link href="/search">🔍 Search</Link>
        </nav>

        <p className="copyright">
          Copyright ©2026 Matthew. All Rights Reserved. Designed by Adam Matthew
          Charest
        </p>
      </footer>
    </main>
  );
}
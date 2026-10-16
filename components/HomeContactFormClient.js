"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import Script from "next/script";

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  business_name: "",
  message: "",
};

export default function HomeContactFormClient() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [submitting, setSubmitting] =
    useState(false);

  const recaptchaSiteKey =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const contactFormRef = useRef(null);

  const [
    recaptchaShouldLoad,
    setRecaptchaShouldLoad,
  ] = useState(false);

  // RECAPTCHA PERFORMANCE:
  // The form is far below the initial viewport, so avoid loading
  // Google's reCAPTCHA runtime during the critical homepage render.
  // Server-side token verification remains the security boundary.
  useEffect(() => {
    const contactForm = contactFormRef.current;

    if (!contactForm) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setRecaptchaShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries.some(
            (entry) => entry.isIntersecting
          )
        ) {
          setRecaptchaShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "600px 0px",
      }
    );

    observer.observe(contactForm);

    return () => observer.disconnect();
  }, []);

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
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...form,
            page_source: "Home Page",
            recaptchaToken,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(
          data.error ||
            "Something went wrong."
        );
      }

      setForm(EMPTY_FORM);

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
    }
    catch (error) {
      setStatus(
        error.message ||
          "Something went wrong. Please try again."
      );

      setStatusType("error");
    }
    finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {recaptchaSiteKey &&
      recaptchaShouldLoad ? (
        <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="afterInteractive"
        />
      ) : null}

      <form
        ref={contactFormRef}
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
              data-sitekey={recaptchaSiteKey}
            />
          ) : (
            <div className="mwh-form-status error">
              Missing NEXT_PUBLIC_RECAPTCHA_SITE_KEY
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
    </>
  );
}
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
  const recaptchaContainerRef = useRef(null);
  const recaptchaWidgetIdRef = useRef(null);

  const [
    recaptchaShouldLoad,
    setRecaptchaShouldLoad,
  ] = useState(false);

  const [
    recaptchaApiReady,
    setRecaptchaApiReady,
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

  // RECAPTCHA NAVIGATION:
  // Render explicitly after both the Google API and the form's
  // container are ready. This also handles Next.js client-side
  // navigation where the Google script may already be cached.
  useEffect(() => {
    if (
      !recaptchaShouldLoad ||
      !recaptchaApiReady ||
      !recaptchaSiteKey ||
      recaptchaWidgetIdRef.current !== null
    ) {
      return;
    }

    const container =
      recaptchaContainerRef.current;

    if (
      !container ||
      typeof window === "undefined" ||
      !window.grecaptcha ||
      typeof window.grecaptcha.render !== "function"
    ) {
      return;
    }

    const renderWidget = () => {
      if (
        recaptchaWidgetIdRef.current !== null ||
        !container.isConnected
      ) {
        return;
      }

      recaptchaWidgetIdRef.current =
        window.grecaptcha.render(
          container,
          {
            sitekey: recaptchaSiteKey,
          }
        );
    };

    if (
      typeof window.grecaptcha.ready === "function"
    ) {
      window.grecaptcha.ready(renderWidget);
    }
    else {
      renderWidget();
    }
  }, [
    recaptchaShouldLoad,
    recaptchaApiReady,
    recaptchaSiteKey,
  ]);

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
      window.grecaptcha &&
      recaptchaWidgetIdRef.current !== null
        ? window.grecaptcha.getResponse(
            recaptchaWidgetIdRef.current
          )
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
        window.grecaptcha &&
        recaptchaWidgetIdRef.current !== null
      ) {
        window.grecaptcha.reset(
          recaptchaWidgetIdRef.current
        );
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
          id="matthew-web-recaptcha"
          src="https://www.google.com/recaptcha/api.js?render=explicit"
          strategy="afterInteractive"
          onLoad={() =>
            setRecaptchaApiReady(true)
          }
          onReady={() =>
            setRecaptchaApiReady(true)
          }
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
            <div ref={recaptchaContainerRef} />
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
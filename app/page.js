"use client";

import { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

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

const benefits = [
  {
    icon: "⏱",
    title: "Save Time",
    text: "Many businesses try to build a website themselves however end up spending so much time trying to figure it all out. Save time by delegating your website to the professionals.",
  },
  {
    icon: "💰",
    title: "Save Money",
    text: "You don't have to take out a loan or break the bank to have a professional and modern web presence. Our prices are a fraction of what other website design firms charge.",
  },
  {
    icon: "✅",
    title: "Look Professional",
    text: "People judge books by their cover. Most businesses don't realize the importance of having a professionally designed website. You could be losing potential clients with an outdated or DIY website.",
  },
  {
    icon: "🚀",
    title: "Grow Your Business",
    text: "Our websites don't just look great they're designed to grow your business. Start attracting more customers online with a beautiful, search-optimized website for your business.",
  },
];

const images = {
  logo:
    "https://d14tal8bchn59o.cloudfront.net/pD8SMCm46GE9kXJfrsm-3pOgtGU_bUZ6M378zAftc-g/w:1920/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23501021/Screenshot_2025-12-19_174653_original.png",
  ideasMatter:
    "https://images.unsplash.com/photo-1589561253831-b8421dd58261?ixid=M3w1NzQ5OTV8MHwxfGFsbHx8fHx8fHx8fDE3NjYyODY1MzN8&ixlib=rb-4.1.0&utm_source=siteswan&utm_medium=referral&utm_campaign=api-credit&w=700",
  step1:
    "https://d14tal8bchn59o.cloudfront.net/5EoCMcYqTVFQIjUww6CdO-HJSlhfLPlWPGbhG3bnpRw/rs:fill:600:600:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23501068/image_original.jpg",
  step2:
    "https://d14tal8bchn59o.cloudfront.net/sT-XZfygtyZliGbh1wowytW3kPi6ukxTZwU1w7pLkhE/rs:fill:600:600:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374748/Things-Every-Small-Business-Website-Needs__original.jpg",
  step3:
    "https://d14tal8bchn59o.cloudfront.net/usaoR2J4IaAhAVu58evDaRx4q33vSKDrFHdisC8NMII/rs:fill:600:600:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374778/step3_original.jpg",
  features:
    "https://d14tal8bchn59o.cloudfront.net/6uLmw2wZL29NqLR-j_QU0j8OyblWn9wBSJ6Ij8VryLg/w:700/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374743/responsive-templatereseller2023_original.png",
  testimonial1:
    "https://d14tal8bchn59o.cloudfront.net/jAUSVFAMGYYYrZvpVQRsWCzikJIBjjhLwTxNbbCHrp0/rs:fill:360:360:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374794/Testimonial_1_original.jpg",
  testimonial2:
    "https://d14tal8bchn59o.cloudfront.net/nNVN4poq2uTeyfeypAVIUmxup5-QprXLq2tT640D4Cg/rs:fill:360:360:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374790/Testimonial_4_original.jpg",
  testimonial3:
    "https://d14tal8bchn59o.cloudfront.net/UD8mSLCxtmpYrnQIK_bCGUQ1sPX2EcRGadXMESU10uw/rs:fill:360:360:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374792/Testimonial_3_original.jpg",
};

const examples = [
  "https://d14tal8bchn59o.cloudfront.net/6scI6nO3xDW_DmOVvCn0YaUilDpQjIH4Z43vdY4e3IE/w:400/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374796/best-construction-management-website-design-theme_original_original.webp",
  "https://d14tal8bchn59o.cloudfront.net/rcq32_OhBoXsaIOzLqHauduDjdgVXkt5WZYYZ_7z8n4/w:400/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374798/computer-repair-website-design-theme_original_original.webp",
  "https://d14tal8bchn59o.cloudfront.net/K-LaK-zSyceNlIJpjJ8cUYrrhopXLAnQoEx4WEpZajA/w:400/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374797/brewery-brewpub-website-design-theme_original_original.webp",
  "https://d14tal8bchn59o.cloudfront.net/8R41RcMzObxDKgUjJulfWiQmCR94pJjyIK72hdPtw5A/w:400/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374800/Indian-restaurant-website-design-theme_original_original.webp",
  "https://d14tal8bchn59o.cloudfront.net/1ccYLUNYFS2OPx3W3y3lgCVy63drRnkHyFx1QutTjxc/w:400/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374795/best-framing-contractor-website-design-theme_original_original.webp",
  "https://d14tal8bchn59o.cloudfront.net/2o8vGrL0ek_rqPiQkJDWs8jytrNhd7vxnczi1JNViY0/w:400/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374729/mobile-phone-repair-website-design_original_original.webp",
  "https://d14tal8bchn59o.cloudfront.net/muYItAtdEG7vc4-BO_5oAo2FitKKh_gOtBLX2oiitos/w:400/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374801/it-services-website-design-theme_original_original.webp",
  "https://d14tal8bchn59o.cloudfront.net/U1JpJB0W6cLuuk7mJEsWfEQxm5RXwggoBuLev68Z9eI/w:400/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374735/real-estate-photography-website-design-theme-dark_original_original.webp",
  "https://d14tal8bchn59o.cloudfront.net/y9zTzhWucZMOCwXYhfXuTl5oYiieDbRmFk-rJodVMf8/w:400/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374803/pediatric-dentistry-website-design-theme_original_original.webp",
  "https://d14tal8bchn59o.cloudfront.net/-fW0f-FsYKam5Z9KX_OAJsQt4-_Uyjrfxla_u7IQp1E/w:400/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374802/kickboxing-studio-website-design-theme_original_original.webp",
  "https://d14tal8bchn59o.cloudfront.net/T3777oRSvrgE5AUgS5eZ5Kh3HGirZFSFD1O9FJwSWRk/w:400/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374805/professional-speaker-website-design-theme_original_original.webp",
  "https://d14tal8bchn59o.cloudfront.net/GvOvsOjWevjYpSH9pDSw3UpQhfiLFg8WBVXDemO5G4k/w:400/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374804/pilates-studio-website-design-theme_original_original.webp",
];

const faqs = [
  {
    q: "Why should I use Matthew to create my website?",
    a: "Maybe you created your own website and the design didn't turn out quite how you anticipated, or you have an outdated website that needs to be updated but you don't want to spend a lot. For us, quality and good service do not have to be expensive. We are committed to helping small businesses and have long standing success and many happy clients.",
  },
  {
    q: "Will you really design my site for free?",
    a: "Yes. Each project starts with a free design demo to show you what we're capable. This ensures you are 100% happy with our work before you pay us a dime. Once you approve your design and submit payment, we'll work with you to make any changes and complete your site.",
  },
  {
    q: "What's included in the monthly service fee?",
    a: "The monthly service fee includes hosting, SSL certificate, ongoing maintenance and support for our clients to ensure that their websites remain up-to-date and functioning properly.",
  },
  {
    q: "What platform will my new site be built on?",
    a: "This new version is being built custom in code, giving us full control over design, speed, SEO, layout, forms, and future features.",
  },
  {
    q: "Will my new website look good on smartphones?",
    a: "Yes. The website will be fully responsive, meaning that it will automatically adjust to fit desktop computers, laptops, tablets, and smartphones.",
  },
  {
    q: "Do you offer SEO optimization as part of your services?",
    a: "Yes, we offer SEO optimization as part of our website design and development services. This includes optimizing content and structure to improve visibility in search engine results.",
  },
  {
    q: "Can I use my domain from my previous site?",
    a: "Yes. It is generally possible to use a domain from your previous site for your new website as long as you still own it.",
  },
  {
    q: "Do you work with businesses outside of Madison?",
    a: "Yes, while our firm is located in Madison, we happily work with clients all over the country. Communication can be done by phone, email, or virtual meeting if necessary.",
  },
];

const homeTestimonials = [
  {
    name: "Chris P.",
    image: images.testimonial1,
    quote:
      "I can't thank the team at Matthew enough for the amazing job they did on my website. They listened to my needs and created a site that perfectly reflects my brand and message. Plus, they were able to get it done in a short amount of time and at a price that was very reasonable. I highly recommend their services.",
  },
  {
    name: "Samantha H",
    image: images.testimonial2,
    quote:
      "I was hesitant to invest in a website for my small business, but I'm so glad I did! The team at Matthew was great to work with - they were knowledgeable, responsive, and patient with all of my questions. And the end result was a beautiful, professional website that has helped me reach a wider audience and increase my sales. I highly recommend their services.",
  },
  {
    name: "Walter D.",
    image: images.testimonial3,
    quote:
      "I had a great experience working with this web design firm. They were able to take my vision for my website and turn it into a reality, all while being very professional and easy to work with. Plus, they were able to complete the project within my budget and timeline. I'm extremely satisfied with the end result and would highly recommend their services.",
  },
];

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

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const currentTestimonial = homeTestimonials[testimonialIndex];

  function updateField(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function previousTestimonial() {
    setTestimonialIndex((current) =>
      current === 0 ? homeTestimonials.length - 1 : current - 1
    );
  }

  function nextTestimonial() {
    setTestimonialIndex((current) =>
      current === homeTestimonials.length - 1 ? 0 : current + 1
    );
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
          page_source: "Home Page",
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

      <SiteHeader />

      <section className="hero-section" id="home-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="hero-kicker">Madison Maine's Most Trusted</p>
            <h1>Website Design & Digital Agency</h1>
            <p>
              At Matthew, we offer high-quality, affordable websites for small
              businesses that always start with a FREE demo.
            </p>
            <Link href="/contact-us" className="btn-primary">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      <section className="benefits-section" id="benefits">
        <div className="benefits-grid">
          {benefits.map((item) => (
            <div className="benefit-card" key={item.title}>
              <div className="benefit-icon">{item.icon}</div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-highlight" id="about-preview">
        <h2 className="about-highlight-title">
          <span>Matthew</span> is a Top-Rated Website Designer in Madison, ME
        </h2>

        <div className="about-highlight-main">
          <div className="about-highlight-image">
            <img src={images.ideasMatter} alt="Your ideas matter" />
          </div>

          <div className="about-highlight-side">
            <div className="about-highlight-copy">
              <p>
                Welcome to Matthew! We specialize in creating affordable
                websites for small businesses in Maine and beyond.
              </p>

              <p>
                At Matthew, we understand that as a small business owner, you
                have a lot on your plate and a limited budget to work with.
                That's why we offer cost-effective solutions to help you get a
                professional, functional website that meets your needs and helps
                you grow your business.
              </p>
            </div>
          </div>
        </div>

        <div className="about-highlight-bottom-row">
          <p className="about-highlight-bottom">
            If you're interested in seeing what we can do for your business,
            contact us today for a FREE no-obligation website demo.
          </p>

          <Link href="/contact-us" className="btn-primary about-highlight-btn">
            Get Started Now
          </Link>
        </div>
      </section>

      <section className="steps-section" id="how-it-works">
        <div className="section-heading">
          <h2>It's as Easy as 1, 2, 3...</h2>
          <p>
            You are just a few small steps away from growing your business
            online.
          </p>
        </div>

        <div className="step-row" id="tell-us-about-your-business">
          <div className="step-image">
            <img src={images.step1} alt="Tell us about your business" />
          </div>
          <div className="step-content">
            <h3>1. Tell us about your business</h3>
            <p>
              Start by telling us a little about your business, and we'll begin
              designing your website in as little as 24 hours.
            </p>
            <p>All we need are a few details including:</p>
            <ul>
              <li>Your business name</li>
              <li>A brief description of your company</li>
              <li>Core products and services</li>
            </ul>
            <Link href="/contact-us" className="btn-primary">
              Get Started Now
            </Link>
          </div>
        </div>

        <div className="step-row reverse" id="free-website-design-demo">
          <div className="step-image">
            <img src={images.step2} alt="Website design preview" />
          </div>
          <div className="step-content">
            <h3>2. We design your website for FREE</h3>
            <p>
              Our designers get to work putting together a beautiful website
              design based on your input and any information you provided.
            </p>
            <p>
              Don't worry you will have a chance to review the site and make
              changes.
            </p>
            <p>
              Unlike other website design firms, we actually let you preview
              your new website for free. This ensures you know exactly what
              you're getting and are 100% satisfied before you pay us a dime.
            </p>
            <Link href="/contact-us" className="btn-primary">
              Get Started Now
            </Link>
          </div>
        </div>

        <div className="step-row" id="review-and-go-live">
          <div className="step-image">
            <img src={images.step3} alt="Go live with your website" />
          </div>
          <div className="step-content">
            <h3>3. Review your site and go live</h3>
            <p>
              Once you approve the design and submit payment, we will make any
              changes, add content, complete your site, connect your domain and
              publish your site for the world to see!
            </p>
            <p>
              Our work doesn't stop there. We handle everything including
              ongoing monthly updates, hosting and site security to keep your
              site looking great, up-to-date and safe from hackers.
            </p>
            <Link href="/contact-us" className="btn-primary">
              Get Started!
            </Link>
          </div>
        </div>
      </section>

      <section className="examples-section" id="website-examples">
        <div className="section-heading">
          <h2>Website Examples</h2>
          <p>
            Check out some samples of our high-quality work below to see what
            we're capable of.
          </p>
        </div>

        <div className="examples-grid">
          {examples.map((src, index) => (
            <div className="example-card" key={src}>
              <img src={src} alt={`Website example ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="features-section" id="features">
        <div className="features-image">
          <img src={images.features} alt="Responsive website examples" />
        </div>
        <div className="features-content">
          <h2>All the Features you need - for one low price</h2>
          <ul>
            <li>Professional, Modern Design</li>
            <li>Mobile-Friendly</li>
            <li>Search Engine Optimized</li>
            <li>Real-time Traffic Stats and Analytics</li>
            <li>Hosting and Updates Included</li>
            <li>Friendly and Reliable Support</li>
            <li>Go Live in as Little as 1 Week!</li>
          </ul>
          <p>... and much more!</p>
          <Link href="/contact-us" className="btn-primary">
            Get Started Now
          </Link>
        </div>
      </section>

      <section className="testimonials-section" id="testimonials">
        <div className="section-heading">
          <h2>Testimonials</h2>
          <p>Here's what our customers have to say:</p>
        </div>

        <div className="testimonial-carousel">
          <button
            type="button"
            className="testimonial-arrow testimonial-arrow-left"
            onClick={previousTestimonial}
            aria-label="Previous testimonial"
          >
            ◀
          </button>

          <div className="testimonial-card">
            <img
              src={currentTestimonial.image}
              alt={`${currentTestimonial.name} testimonial`}
            />
            <div className="stars">★ ★ ★ ★ ★</div>
            <p>"{currentTestimonial.quote}"</p>
            <strong>— {currentTestimonial.name}</strong>
          </div>

          <button
            type="button"
            className="testimonial-arrow testimonial-arrow-right"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            ▶
          </button>
        </div>
      </section>

      <section className="pricing-cta" id="pricing-preview">
        <h2>Simple, Affordable Pricing</h2>
        <h3>No complicated plans. No hidden fees.</h3>
        <p>
          Simply pay a one-time set up fee followed by a low monthly service for
          hosting and support. That’s it! Your site will be ready in about a
          week.
        </p>
        <Link href="/pricing" className="btn-light">
          View Plans & Pricing
        </Link>
      </section>

      <section className="faq-section" id="faq">
        <div className="section-heading">
          <h2>FAQ</h2>
          <p>Commonly asked questions and answers.</p>
        </div>

        <div className="faq-list">
          {faqs.map((item) => (
            <div className="faq-item" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-hero" id="contact-cta">
        <div className="contact-hero-overlay">
          <h2>Work with the best and at the best prices.</h2>
          <p>
            With Matthew, you don't have to sacrifice quality for affordability.
            We offer the best of both worlds – top-notch website design services
            at prices that any business can afford. Contact us today to get a
            professional website that meets your needs and budget.
          </p>
          <Link href="/contact-us" className="btn-primary">
            Get Started Now
          </Link>
        </div>
      </section>

      <section className="contact-form-section" id="contact-form">
        <div className="section-heading">
          <h2>Fill out the form below to get started.</h2>
          <p>We look forward to hearing from you!</p>
        </div>

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
            rows="6"
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

          <button
            type="submit"
            className="btn-primary form-button"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </section>

      <section className="map-section" id="map">
        <iframe
          title="Matthew Web Madison Maine map"
          src="https://www.google.com/maps?q=973%20River%20Road%20Madison%20ME%2004950&output=embed"
          loading="lazy"
        ></iframe>
      </section>

      <SiteFooter />
    </main>
  );
}
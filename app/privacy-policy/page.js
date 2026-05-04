import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for matthew-web. Learn what information we collect, how we use it, and how to contact us about your privacy.",
  alternates: {
    canonical: "https://matthew-web.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <SiteHeader />

      <section className="blog-article-title">
        <h1>Privacy Policy</h1>
      </section>

      <article className="blog-article">
        <div className="blog-article-content">
          <p>
            <strong>Effective Date:</strong> May 3, 2026
          </p>

          <p>
            Welcome to matthew-web. This Privacy Policy explains what
            information we collect, how we use it, how we protect it, and how
            you can contact us with questions about your information.
          </p>

          <h3>Information We Collect</h3>

          <p>
            We may collect personal information that you choose to provide
            through our website forms, including your name, email address, phone
            number, business name, and any message or project details you submit.
          </p>

          <p>
            We may also collect basic website usage information through tools
            such as Google Analytics, including pages visited, device type,
            browser type, general location data, traffic source, and other
            website performance information.
          </p>

          <h3>How We Use Your Information</h3>

          <p>We may use the information we collect to:</p>

          <ul>
            <li>Respond to your website, software, or service inquiry</li>
            <li>Contact you about your project or requested website mockup</li>
            <li>Send confirmation or follow-up emails</li>
            <li>Track and manage leads in our internal dashboard</li>
            <li>Improve our website, services, marketing, and user experience</li>
            <li>Protect our website from spam, abuse, and unauthorized activity</li>
          </ul>

          <h3>Contact Forms and Lead Dashboard</h3>

          <p>
            When you submit a form on our website, your information may be saved
            in our secure lead dashboard and emailed to matthew-web so we can
            follow up with you. We may also send an automatic confirmation email
            to the email address you provided.
          </p>

          <h3>Google Analytics</h3>

          <p>
            We use Google Analytics to understand how visitors use our website.
            Google Analytics may collect information such as pages visited,
            browser type, device type, referral source, and general usage data.
            This helps us improve our website and marketing.
          </p>

          <h3>Google reCAPTCHA</h3>

          <p>
            We use Google reCAPTCHA on website forms to help prevent spam and
            abuse. reCAPTCHA may collect information needed by Google to verify
            whether form activity appears legitimate.
          </p>

          <h3>Cookies</h3>

          <p>
            Our website may use cookies or similar technologies to improve user
            experience, analyze website traffic, protect forms from spam, and
            support website functionality. You can adjust your browser settings
            to refuse cookies or alert you when cookies are being used.
          </p>

          <h3>Third-Party Services</h3>

          <p>
            We may use trusted third-party services to operate our website and
            business, including hosting, analytics, email delivery, spam
            protection, and database services. These services may process
            information only as needed to provide their services to us.
          </p>

          <h3>How We Protect Your Information</h3>

          <p>
            We use reasonable administrative, technical, and security measures to
            help protect personal information from unauthorized access,
            alteration, disclosure, or destruction. However, no website,
            database, or internet transmission can be guaranteed to be 100%
            secure.
          </p>

          <h3>Sharing Your Information</h3>

          <p>
            We do not sell your personal information. We may share information
            only when needed to operate our website, respond to your inquiry,
            provide services, comply with legal requirements, or protect our
            rights and website security.
          </p>

          <h3>Your Choices</h3>

          <p>
            You may contact us to ask questions about your information, request
            corrections, or ask that we delete information you previously
            submitted, unless we need to keep it for legitimate business, legal,
            or security reasons.
          </p>

          <h3>Children’s Privacy</h3>

          <p>
            Our website and services are intended for business owners and general
            business audiences. We do not knowingly collect personal information
            from children under 13.
          </p>

          <h3>Changes to This Privacy Policy</h3>

          <p>
            We may update this Privacy Policy from time to time. Updates will be
            posted on this page with a revised effective date.
          </p>

          <h3>Contact Us</h3>

          <p>
            If you have questions about this Privacy Policy or how your
            information is handled, please contact us:
          </p>

          <p>
            <strong>matthew-web</strong>
            <br />
            973 River Road
            <br />
            Madison, ME 04950
            <br />
            Phone: <a href="tel:2076317793">(207) 631-7793</a>
            <br />
            Email:{" "}
            <a href="mailto:matthewwweb@gmail.com">
              matthewwweb@gmail.com
            </a>
          </p>

          <div className="blog-article-buttons">
            <Link href="/" className="btn-secondary">
              Back Home
            </Link>

            <Link href="/contact-us" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
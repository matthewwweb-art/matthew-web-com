import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Terms of Use | matthew-web",
  description:
    "Terms of Use for matthew-web, including website usage, service information, estimates, project communication, payments, intellectual property, and limitations.",
  alternates: {
    canonical: "https://matthew-web.com/terms",
  },
  openGraph: {
    title: "Terms of Use | matthew-web",
    description:
      "Read the matthew-web Terms of Use for website visitors, clients, services, estimates, communication, payments, and project expectations.",
    url: "https://matthew-web.com/terms",
    siteName: "matthew-web",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <main>
      <style>{`
        .terms-page {
          background: #ffffff;
          color: #1f2933;
          font-family: Arial, Helvetica, sans-serif;
        }

        .terms-hero {
          background: #f57c00;
          color: #ffffff;
          text-align: center;
          padding: 76px 22px;
        }

        .terms-hero h1 {
          max-width: 1000px;
          margin: 0 auto 18px;
          font-size: clamp(42px, 6vw, 72px);
          line-height: 1.05;
          font-weight: 900;
        }

        .terms-hero p {
          max-width: 860px;
          margin: 0 auto;
          font-size: clamp(20px, 3vw, 28px);
          line-height: 1.35;
          font-weight: 600;
        }

        .terms-wrap {
          max-width: 980px;
          margin: 0 auto;
          padding: 70px 22px;
        }

        .terms-card {
          background: #f8fafc;
          border: 1px solid #e5e7eb;
          border-radius: 24px;
          padding: 38px;
          margin-bottom: 30px;
          box-shadow: 0 10px 28px rgba(0,0,0,0.06);
        }

        .terms-card h2 {
          color: #f57c00;
          font-size: clamp(28px, 4vw, 42px);
          line-height: 1.15;
          margin: 0 0 18px;
        }

        .terms-card h3 {
          color: #0f83a6;
          font-size: 24px;
          margin: 28px 0 10px;
        }

        .terms-card p {
          color: #374151;
          font-size: 20px;
          line-height: 1.7;
          margin: 0 0 20px;
        }

        .terms-card ul {
          margin: 0 0 22px;
          padding-left: 26px;
        }

        .terms-card li {
          color: #374151;
          font-size: 19px;
          line-height: 1.65;
          margin-bottom: 10px;
        }

        .notice-box {
          background: #111827;
          color: #ffffff;
          border-radius: 22px;
          padding: 30px;
          margin: 34px 0;
        }

        .notice-box p {
          color: #e5e7eb;
          margin: 0;
          font-size: 20px;
          line-height: 1.6;
        }

        .notice-box strong {
          color: #ffffff;
        }

        .cta-box {
          background: #111827;
          color: #ffffff;
          border-radius: 24px;
          padding: 42px;
          text-align: center;
          margin-top: 40px;
        }

        .cta-box h2 {
          color: #ffffff;
          margin: 0 0 16px;
          font-size: clamp(32px, 5vw, 52px);
        }

        .cta-box p {
          color: #e5e7eb;
          max-width: 780px;
          margin: 0 auto 28px;
          font-size: 21px;
          line-height: 1.5;
        }

        .cta-box a {
          display: inline-block;
          background: #f57c00;
          color: #ffffff;
          text-decoration: none;
          font-size: 20px;
          font-weight: 900;
          padding: 16px 30px;
          border-radius: 10px;
        }

        .cta-box a:hover {
          background: #d96d00;
        }

        .link-row {
          margin-top: 34px;
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .link-row a {
          color: #0f83a6;
          font-size: 18px;
          font-weight: 800;
        }

        @media (max-width: 760px) {
          .terms-wrap {
            padding: 46px 16px;
          }

          .terms-card,
          .cta-box {
            padding: 24px;
          }

          .terms-card p,
          .terms-card li {
            font-size: 18px;
          }
        }
      `}</style>

      <div className="terms-page">
        <SiteHeader />

        <section className="terms-hero">
          <h1>Terms of Use</h1>
          <p>
            These terms explain how visitors and clients may use the matthew-web
            website, service information, project communication, and business
            resources.
          </p>
        </section>

        <section className="terms-wrap">
          <article className="terms-card">
            <h2>Terms for Using matthew-web</h2>

            <p>
              These Terms of Use apply to the matthew-web website and to general
              information presented on this site. By using this website, you
              agree to use it in a lawful, respectful, and responsible way.
            </p>

            <p>
              matthew-web provides website design, custom software, SEO-ready
              pages, indexing support, lead forms, CRM dashboard planning,
              business automation ideas, and related digital services for small
              businesses.
            </p>

            <div className="notice-box">
              <p>
                <strong>Important:</strong> Website content, pricing examples,
                service descriptions, and project information are provided for
                general business purposes. A final project agreement, invoice,
                or written proposal controls the specific scope of any paid work.
              </p>
            </div>
          </article>

          <article className="terms-card">
            <h2>Website Information</h2>

            <p>
              matthew-web works to keep information on this website accurate and
              useful. However, website content may change over time as services,
              pricing, examples, tools, policies, and project offerings are
              updated.
            </p>

            <p>
              Information on this website should not be treated as a guaranteed
              quote, guaranteed ranking promise, guaranteed approval promise, or
              guaranteed business result. Every project depends on the client,
              business needs, timeline, content, budget, platform, third-party
              tools, and technical requirements.
            </p>
          </article>

          <article className="terms-card">
            <h2>Services and Project Scope</h2>

            <p>
              matthew-web may provide services such as website design, custom
              website pages, service pages, contact forms, quote forms, SEO-ready
              structure, sitemap setup, Google Search Console support, Bing
              Webmaster Tools support, custom dashboards, CRM-style tools, and
              business software features.
            </p>

            <p>
              The exact scope of a client project should be agreed to in writing
              before work begins. A project may include specific pages, features,
              forms, integrations, revisions, support terms, hosting guidance, or
              other deliverables.
            </p>

            <h3>Project scope may include</h3>

            <ul>
              <li>Website page design and development</li>
              <li>Mobile-friendly layout work</li>
              <li>Search-engine-ready page structure</li>
              <li>Contact forms, quote forms, or booking forms</li>
              <li>Custom-coded pages or dashboards</li>
              <li>Basic indexing and sitemap setup</li>
              <li>Content layout and page organization</li>
              <li>Client-requested revisions within the agreed project limits</li>
            </ul>
          </article>

          <article className="terms-card">
            <h2>Estimates, Pricing, and Payments</h2>

            <p>
              Prices shown on this website, if any, are general examples or
              starting points unless clearly stated otherwise. Final pricing can
              depend on the number of pages, design complexity, software
              features, forms, integrations, content needs, revisions, and
              timeline.
            </p>

            <p>
              Payment terms should be agreed to before work begins. Depending on
              the project, matthew-web may require a deposit, milestone payment,
              full upfront payment, or other written payment arrangement.
            </p>

            <p>
              Work may be paused if required client information, content,
              approvals, or payments are not provided on time.
            </p>
          </article>

          <article className="terms-card">
            <h2>Client Responsibilities</h2>

            <p>
              To complete a project correctly, clients may need to provide
              information, approvals, text, images, logos, business details,
              hosting access, domain access, or account permissions when needed.
            </p>

            <h3>Clients are responsible for providing accurate information</h3>

            <ul>
              <li>Business name, phone number, email, and service information</li>
              <li>Correct pricing, policies, and business details</li>
              <li>Approved images, logos, videos, or brand materials</li>
              <li>Timely feedback and approvals</li>
              <li>Access to accounts needed for approved work</li>
              <li>Legal permission to use any provided content or media</li>
            </ul>

            <p>
              matthew-web is not responsible for incorrect information provided
              by the client or for delays caused by missing approvals, missing
              access, or missing materials.
            </p>
          </article>

          <article className="terms-card">
            <h2>SEO, Indexing, and Ad Approval Expectations</h2>

            <p>
              matthew-web may help with SEO-ready structure, metadata, sitemaps,
              indexing requests, Search Console setup, Bing Webmaster Tools
              setup, and content planning. However, no honest web design or SEO
              provider can guarantee specific rankings, instant indexing, ad
              approval, traffic levels, sales, or revenue.
            </p>

            <p>
              Search engines and advertising platforms make their own decisions.
              Approval, indexing, ranking, and visibility can depend on content
              quality, website trust, competition, third-party policies, crawl
              timing, backlinks, reviews, user behavior, and other factors
              outside of matthew-web control.
            </p>
          </article>

          <article className="terms-card">
            <h2>Third-Party Tools and Platforms</h2>

            <p>
              Some projects may involve third-party services such as hosting
              providers, domain registrars, analytics tools, email providers,
              payment processors, databases, APIs, search tools, advertising
              platforms, CMS tools, or other external software.
            </p>

            <p>
              matthew-web is not responsible for outages, billing changes,
              policy changes, account restrictions, platform decisions, lost
              access, or technical problems caused by third-party services.
            </p>
          </article>

          <article className="terms-card">
            <h2>Intellectual Property and Content</h2>

            <p>
              Clients should only provide content, images, logos, videos, text,
              or materials they own or have permission to use. The client is
              responsible for making sure provided materials do not violate
              someone else’s rights.
            </p>

            <p>
              Custom work created for a paid client project may be transferred or
              licensed according to the written project agreement. matthew-web
              may keep rights to reusable code patterns, internal tools,
              development methods, templates, project systems, and general
              know-how unless a written agreement says otherwise.
            </p>
          </article>

          <article className="terms-card">
            <h2>Acceptable Website Use</h2>

            <p>
              Visitors may use this website for normal business and informational
              purposes. Visitors may not attempt to damage, overload, copy,
              attack, scrape, misuse, or interfere with the website, admin
              systems, forms, APIs, or connected services.
            </p>

            <h3>Do not use this website to</h3>

            <ul>
              <li>Submit false, abusive, spam, or harmful form entries</li>
              <li>Attempt unauthorized access to admin areas or systems</li>
              <li>Upload or send malicious code</li>
              <li>Copy website content for misleading or unlawful use</li>
              <li>Interfere with website security, hosting, or performance</li>
            </ul>
          </article>

          <article className="terms-card">
            <h2>Limitation of Liability</h2>

            <p>
              matthew-web provides website and digital service information in
              good faith, but this website is provided without guarantees that it
              will always be error-free, uninterrupted, or fully current.
            </p>

            <p>
              To the fullest extent allowed by law, matthew-web is not liable
              for indirect damages, lost profits, lost rankings, lost ad
              approvals, lost leads, third-party platform issues, downtime, or
              business losses related to use of this website or third-party
              services.
            </p>
          </article>

          <article className="terms-card">
            <h2>Privacy</h2>

            <p>
              Use of this website may also be covered by the matthew-web Privacy
              Policy. The Privacy Policy explains general information about
              contact forms, communication, analytics, and website data.
            </p>

            <p>
              You can read the Privacy Policy here:
            </p>

            <p>
              <Link href="/privacy-policy">View Privacy Policy</Link>
            </p>
          </article>

          <article className="terms-card">
            <h2>Contact Information</h2>

            <p>
              Questions about these terms, website services, project work, or
              business communication can be sent through the contact page.
            </p>

            <p>
              matthew-web
              <br />
              973 River Road
              <br />
              Madison, ME 04950
              <br />
              Phone: (207) 631-7793
            </p>

            <p>
              Client walk-ins are not accepted at this location. Please contact
              matthew-web by mail, phone, or website message.
            </p>
          </article>

          <section className="cta-box">
            <h2>Questions About These Terms?</h2>
            <p>
              Contact matthew-web for questions about website design, custom
              software, SEO-ready pages, indexing support, or project planning.
            </p>

            <Link href="/contact-us">Contact matthew-web</Link>
          </section>

          <nav className="link-row">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/code-of-ethics">Code of Ethics</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact-us">Contact</Link>
          </nav>
        </section>
      </div>
    </main>
  );
}
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Website Design for Small Businesses | matthew-web",
  description:
    "Affordable website design for small businesses across the United States. matthew-web builds SEO-ready, mobile-friendly websites with lead forms, service pages, indexing setup, and custom-coded options.",
  alternates: {
    canonical: "https://matthew-web.com/website-design",
  },
  openGraph: {
    title: "Website Design for Small Businesses | matthew-web",
    description:
      "matthew-web builds affordable, mobile-friendly, SEO-ready websites for small businesses with lead forms, service pages, and custom-coded options.",
    url: "https://matthew-web.com/website-design",
    siteName: "matthew-web",
    type: "website",
  },
};

export default function WebsiteDesignPage() {
  return (
    <main>
      <style>{`
        .service-page {
          background: #ffffff;
          color: #1f2933;
          font-family: Arial, Helvetica, sans-serif;
        }

        .service-hero {
          background: #f57c00;
          color: #ffffff;
          text-align: center;
          padding: 76px 22px;
        }

        .service-hero h1 {
          max-width: 1050px;
          margin: 0 auto 18px;
          font-size: clamp(42px, 6vw, 72px);
          line-height: 1.05;
          font-weight: 900;
        }

        .service-hero p {
          max-width: 920px;
          margin: 0 auto;
          font-size: clamp(20px, 3vw, 28px);
          line-height: 1.35;
          font-weight: 600;
        }

        .service-wrap {
          max-width: 1080px;
          margin: 0 auto;
          padding: 70px 22px;
        }

        .intro-card,
        .content-card,
        .faq-card {
          background: #f8fafc;
          border: 1px solid #e5e7eb;
          border-radius: 24px;
          padding: 34px;
          margin-bottom: 30px;
          box-shadow: 0 10px 28px rgba(0,0,0,0.06);
        }

        .intro-card h2,
        .content-card h2,
        .faq-card h2 {
          color: #f57c00;
          font-size: clamp(30px, 4vw, 46px);
          line-height: 1.12;
          margin: 0 0 18px;
        }

        .content-card h3,
        .faq-card h3 {
          color: #0f83a6;
          font-size: 25px;
          margin: 28px 0 10px;
        }

        .intro-card p,
        .content-card p,
        .faq-card p {
          color: #374151;
          font-size: 20px;
          line-height: 1.7;
          margin: 0 0 20px;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          margin: 28px 0;
        }

        .feature-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 18px;
          padding: 22px;
        }

        .feature-card h3 {
          margin: 0 0 10px;
          color: #f57c00;
          font-size: 24px;
        }

        .feature-card p {
          margin: 0;
          font-size: 18px;
          line-height: 1.55;
        }

        .process-list {
          list-style: none;
          padding: 0;
          margin: 26px 0 0;
          display: grid;
          gap: 16px;
        }

        .process-list li {
          background: #ffffff;
          border-left: 6px solid #f57c00;
          border-radius: 14px;
          padding: 18px;
          color: #374151;
          font-size: 19px;
          line-height: 1.55;
        }

        .process-list strong {
          color: #111827;
        }

        .highlight-box {
          background: #0f83a6;
          color: #ffffff;
          border-radius: 22px;
          padding: 30px;
          margin: 34px 0;
        }

        .highlight-box p {
          color: #ffffff;
          margin: 0;
          font-size: clamp(22px, 3vw, 32px);
          line-height: 1.3;
          font-weight: 900;
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
          .service-wrap {
            padding: 46px 16px;
          }

          .intro-card,
          .content-card,
          .faq-card,
          .cta-box {
            padding: 24px;
          }

          .feature-grid {
            grid-template-columns: 1fr;
          }

          .intro-card p,
          .content-card p,
          .faq-card p,
          .process-list li {
            font-size: 18px;
          }
        }
      `}</style>

      <div className="service-page">
        <SiteHeader />

        <section className="service-hero">
          <h1>Website Design for Small Businesses</h1>
          <p>
            matthew-web builds affordable, mobile-friendly, SEO-ready websites
            for small businesses that need more than a basic online business
            card.
          </p>
        </section>

        <section className="service-wrap">
          <article className="intro-card">
            <h2>Websites Built to Help Your Business Look Professional</h2>

            <p>
              A small business website should do more than sit online. It should
              clearly explain what the business does, show customers why they
              should trust it, and make it easy for people to call, request a
              quote, submit a form, or take the next step.
            </p>

            <p>
              matthew-web designs websites for small businesses across the
              United States with a focus on clear structure, mobile usability,
              useful content, search engine readiness, lead capture, and
              long-term growth. Some businesses need a simple starter website.
              Others need a custom-coded site with forms, booking tools, CRM
              dashboards, or automation. The right build depends on the business
              and the problem being solved.
            </p>

            <div className="highlight-box">
              <p>
                The goal is not just to make a website look nice. The goal is to
                build a website that helps customers understand, trust, and
                contact your business.
              </p>
            </div>
          </article>

          <article className="content-card">
            <h2>What Is Included in a Small Business Website?</h2>

            <p>
              A useful small business website needs the right foundation. That
              means the layout, content, navigation, calls-to-action, forms,
              service pages, and technical setup should all work together. A
              website should be easy for visitors to use and easy for search
              engines to understand.
            </p>

            <div className="feature-grid">
              <div className="feature-card">
                <h3>Mobile-Friendly Design</h3>
                <p>
                  The site should work clearly on phones, tablets, and desktop
                  screens so customers can read, call, and submit forms easily.
                </p>
              </div>

              <div className="feature-card">
                <h3>SEO-Ready Pages</h3>
                <p>
                  Page titles, descriptions, headings, sitemap setup, and
                  indexing support help Google understand the website.
                </p>
              </div>

              <div className="feature-card">
                <h3>Lead Forms</h3>
                <p>
                  Contact forms, quote forms, booking requests, and project
                  forms help visitors become real leads.
                </p>
              </div>

              <div className="feature-card">
                <h3>Clear Service Pages</h3>
                <p>
                  Separate service pages help explain what your business offers
                  and give customers more reasons to contact you.
                </p>
              </div>

              <div className="feature-card">
                <h3>Fast Page Experience</h3>
                <p>
                  Clean structure, optimized images, and practical layouts help
                  the website feel faster and more professional.
                </p>
              </div>

              <div className="feature-card">
                <h3>Room to Grow</h3>
                <p>
                  A website can later grow into custom software, CRM tools,
                  booking systems, dashboards, and automation.
                </p>
              </div>
            </div>
          </article>

          <article className="content-card">
            <h2>Who This Service Is For</h2>

            <p>
              matthew-web works best for small businesses that need an
              affordable but serious website. This can include contractors,
              landscapers, painters, cleaning companies, property managers,
              local service businesses, consultants, small shops, startup
              businesses, and owners who are tired of limited DIY website
              builders.
            </p>

            <p>
              A good website is especially important when one missed customer can
              be worth hundreds or thousands of dollars. If your business depends
              on calls, quotes, appointments, service requests, or customer
              trust, your website needs to support that process.
            </p>

            <h3>Common website problems matthew-web helps fix</h3>

            <ul className="process-list">
              <li>
                <strong>No website:</strong> The business has no professional
                online presence or only uses a Facebook page.
              </li>

              <li>
                <strong>Outdated website:</strong> The current site looks old,
                loads slowly, or does not reflect the business anymore.
              </li>

              <li>
                <strong>Weak mobile layout:</strong> Customers have trouble
                reading, clicking, calling, or filling out forms on phones.
              </li>

              <li>
                <strong>No lead system:</strong> The site does not have a strong
                quote form, booking form, or clear contact process.
              </li>

              <li>
                <strong>Poor SEO setup:</strong> The site lacks strong page
                titles, service pages, indexing setup, or useful content.
              </li>

              <li>
                <strong>Platform limits:</strong> The business has outgrown Wix,
                GoDaddy, SiteSwan, or another simple website builder.
              </li>
            </ul>
          </article>

          <article className="content-card">
            <h2>How the Website Design Process Works</h2>

            <p>
              Every website should start with the business goal. Some owners
              need a simple professional site. Others need service pages,
              pricing information, examples, quote forms, blog content, SEO
              setup, or custom software features. The build should match what
              the business actually needs.
            </p>

            <ul className="process-list">
              <li>
                <strong>1. Understand the business:</strong> We look at the
                services, audience, location, current website, competitors, and
                what the website needs to accomplish.
              </li>

              <li>
                <strong>2. Plan the structure:</strong> We decide which pages
                are needed, such as home, services, pricing, examples, blog,
                contact, trust pages, and service-specific pages.
              </li>

              <li>
                <strong>3. Build the design:</strong> The website is built to be
                clean, mobile-friendly, readable, and focused on helping visitors
                take action.
              </li>

              <li>
                <strong>4. Add lead capture:</strong> Forms, buttons, phone
                links, quote requests, booking links, or CRM connections are
                added depending on the business.
              </li>

              <li>
                <strong>5. Set up SEO basics:</strong> Page metadata, headings,
                internal links, sitemap setup, robots.txt checks, and indexing
                support are handled before launch.
              </li>

              <li>
                <strong>6. Launch and improve:</strong> After the site is live,
                the business can continue adding content, service pages,
                examples, blog articles, and new features over time.
              </li>
            </ul>
          </article>

          <article className="content-card">
            <h2>Website Design Can Grow Into Custom Software</h2>

            <p>
              One major advantage of working with matthew-web is that the
              website does not have to stop at public pages. A website can also
              become the front end of a larger business system.
            </p>

            <p>
              For example, a contact form can connect to a lead dashboard. A
              quote form can save customer details. A booking request can trigger
              an email notification. A small business can later add a CRM,
              follow-up reminders, admin tools, reporting pages, or automation.
            </p>

            <p>
              This is helpful for business owners who want to start with an
              affordable website now but leave room for more advanced tools
              later.
            </p>
          </article>

          <article className="faq-card">
            <h2>Website Design FAQs</h2>

            <h3>Do I need a website if I already have a Facebook page?</h3>
            <p>
              Yes, in most cases. A Facebook page can help, but it should not be
              your only online presence. A website gives your business more
              control over service pages, forms, SEO, branding, content, and
              long-term trust.
            </p>

            <h3>Can matthew-web build websites outside Maine?</h3>
            <p>
              Yes. matthew-web can build websites and custom-coded tools for
              small businesses across the United States. The work can be planned
              and completed remotely.
            </p>

            <h3>Is SEO included?</h3>
            <p>
              Basic SEO-ready setup can include page titles, descriptions,
              headings, internal links, sitemap setup, robots.txt review,
              indexing support, and structure that helps search engines
              understand the site. Ongoing SEO and content work can be added
              separately.
            </p>

            <h3>Can I start small and add more later?</h3>
            <p>
              Yes. Many businesses start with a basic website and later add
              service pages, blog articles, quote forms, booking tools, CRM
              dashboards, automation, or custom software.
            </p>

            <h3>Do you only use templates?</h3>
            <p>
              No. matthew-web can build custom-coded pages and custom layouts.
              The best approach depends on the business, budget, timeline, and
              features needed.
            </p>
          </article>

          <section className="cta-box">
            <h2>Need a Website for Your Small Business?</h2>
            <p>
              matthew-web builds affordable websites, SEO-ready pages, lead
              forms, custom-coded layouts, CRM dashboards, booking tools, and
              business software for small businesses across the United States.
            </p>

            <Link href="/contact-us">Request a Free Website Demo</Link>
          </section>

          <nav className="link-row">
            <Link href="/services">View All Services</Link>
            <Link href="/pricing">View Pricing</Link>
            <Link href="/examples">View Examples</Link>
            <Link href="/custom-software">Custom Software</Link>
            <Link href="/seo-and-indexing">SEO and Indexing</Link>
          </nav>
        </section>
      </div>
    </main>
  );
}
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Small Business Websites | matthew-web",
  description:
    "Small business websites built for leads, trust, SEO, mobile users, and growth. matthew-web builds affordable websites, service pages, contact forms, quote forms, CRM dashboards, and custom-coded business tools.",
  alternates: {
    canonical: "https://matthew-web.com/small-business-websites",
  },
  openGraph: {
    title: "Small Business Websites | matthew-web",
    description:
      "matthew-web builds affordable small business websites with SEO-ready pages, lead forms, mobile design, service pages, CRM dashboards, and custom-coded growth options.",
    url: "https://matthew-web.com/small-business-websites",
    siteName: "matthew-web",
    type: "website",
  },
};

export default function SmallBusinessWebsitesPage() {
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
          max-width: 1100px;
          margin: 0 auto 18px;
          font-size: clamp(42px, 6vw, 72px);
          line-height: 1.05;
          font-weight: 900;
        }

        .service-hero p {
          max-width: 940px;
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

        .business-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin: 28px 0;
        }

        .business-list span {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 15px;
          color: #374151;
          font-size: 17px;
          font-weight: 800;
          text-align: center;
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

        @media (max-width: 850px) {
          .business-list {
            grid-template-columns: repeat(2, 1fr);
          }
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

        @media (max-width: 520px) {
          .business-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="service-page">
        <SiteHeader />

        <section className="service-hero">
          <h1>Small Business Websites Built for Leads and Growth</h1>
          <p>
            matthew-web builds affordable small business websites with clear
            service pages, mobile-friendly layouts, lead forms, SEO-ready
            structure, and room to grow into custom software.
          </p>
        </section>

        <section className="service-wrap">
          <article className="intro-card">
            <h2>A Small Business Website Should Be More Than a Placeholder</h2>

            <p>
              Many small businesses have a website that technically exists but
              does not do enough. It may have a homepage, a phone number, a few
              service words, and a contact page, but it does not clearly explain
              the business, build trust, answer customer questions, or guide
              visitors toward taking action.
            </p>

            <p>
              A strong small business website should help people understand what
              you do, where you work, why they should trust you, and how to
              contact you. It should also be built with mobile users, search
              engines, and lead generation in mind.
            </p>

            <div className="highlight-box">
              <p>
                A good small business website should help turn visitors into
                calls, quote requests, appointments, messages, and real leads.
              </p>
            </div>
          </article>

          <article className="content-card">
            <h2>What a Small Business Website Needs</h2>

            <p>
              Every business is different, but most small business websites need
              the same core foundation: clear pages, useful content, trust
              signals, simple navigation, contact options, and a reason for
              visitors to take the next step.
            </p>

            <div className="feature-grid">
              <div className="feature-card">
                <h3>Clear Homepage</h3>
                <p>
                  The homepage should quickly explain who you are, what you do,
                  where you serve, and what action the visitor should take.
                </p>
              </div>

              <div className="feature-card">
                <h3>Service Pages</h3>
                <p>
                  Each main service should have enough helpful information for
                  customers and search engines to understand the offer.
                </p>
              </div>

              <div className="feature-card">
                <h3>Contact and Quote Forms</h3>
                <p>
                  Forms should collect the right information and make it easy
                  for customers to request help, pricing, or a consultation.
                </p>
              </div>

              <div className="feature-card">
                <h3>Mobile-Friendly Layout</h3>
                <p>
                  Visitors should be able to read, tap, call, and submit forms
                  easily from a phone.
                </p>
              </div>

              <div className="feature-card">
                <h3>Trust Signals</h3>
                <p>
                  About pages, reviews, examples, policies, pricing guidance,
                  and ethics pages help visitors feel safer contacting you.
                </p>
              </div>

              <div className="feature-card">
                <h3>SEO-Ready Structure</h3>
                <p>
                  Titles, descriptions, sitemap setup, internal links, and useful
                  content help search engines understand the website.
                </p>
              </div>
            </div>
          </article>

          <article className="content-card">
            <h2>Who This Is For</h2>

            <p>
              This service is for business owners who want a practical website
              that can help them look professional and get more serious online.
              You do not need to be a large company to benefit from a better
              website. A one-person business, contractor, local service company,
              startup, consultant, property manager, shop, or small agency can
              all benefit from clear website structure.
            </p>

            <p>
              matthew-web can help small businesses that are starting from
              scratch, moving away from a limited platform, replacing an old
              website, or adding more useful pages and forms to an existing
              site.
            </p>

            <div className="business-list">
              <span>Contractors</span>
              <span>Landscapers</span>
              <span>Roofers</span>
              <span>Painters</span>
              <span>Cleaners</span>
              <span>Property Managers</span>
              <span>Local Shops</span>
              <span>Consultants</span>
              <span>Restaurants</span>
              <span>Auto Detailers</span>
              <span>Barbers</span>
              <span>Small Agencies</span>
            </div>
          </article>

          <article className="content-card">
            <h2>Common Problems With Small Business Websites</h2>

            <p>
              A website can look “done” and still fail to help the business.
              Many small business websites are too thin, too vague, too slow, or
              too hard to use on mobile. Others rely only on social media and
              never build a website they control.
            </p>

            <ul className="process-list">
              <li>
                <strong>Only a Facebook page:</strong> Social media can help,
                but it should not replace a real business website.
              </li>

              <li>
                <strong>Outdated design:</strong> Old layouts, weak images, and
                hard-to-read pages can make the business look less trustworthy.
              </li>

              <li>
                <strong>No clear offer:</strong> Visitors do not quickly
                understand what the business does or who it helps.
              </li>

              <li>
                <strong>No service pages:</strong> All services are crammed into
                one small section instead of explained clearly.
              </li>

              <li>
                <strong>Weak contact flow:</strong> Phone numbers, forms, and
                calls-to-action are hidden or not easy to use.
              </li>

              <li>
                <strong>No SEO foundation:</strong> The site lacks page titles,
                descriptions, sitemap setup, internal links, or useful original
                content.
              </li>
            </ul>
          </article>

          <article className="content-card">
            <h2>Why Small Business Websites Need Original Content</h2>

            <p>
              Original content matters because customers and search engines need
              real information. A website with only a few short sections may not
              provide enough value. A business website should explain services,
              answer questions, show examples, discuss the process, and make the
              next step clear.
            </p>

            <p>
              For example, a contractor website should not only say “we do home
              repairs.” It should explain the repair services, service area,
              estimate process, project examples, and how customers can request
              help. A web design website should explain website design, custom
              software, SEO setup, pricing, examples, and policies clearly.
            </p>

            <p>
              This kind of content helps the site feel more complete, more
              trustworthy, and more useful.
            </p>
          </article>

          <article className="content-card">
            <h2>How matthew-web Builds Small Business Websites</h2>

            <p>
              matthew-web builds small business websites with a focus on real
              usefulness. That means the site should be easy to navigate, easy to
              read, easy to contact from, and structured in a way that supports
              search engines and future growth.
            </p>

            <ul className="process-list">
              <li>
                <strong>1. Plan the pages:</strong> Decide what public pages are
                needed, such as home, services, pricing, examples, blog, about,
                contact, privacy policy, terms, and trust pages.
              </li>

              <li>
                <strong>2. Write useful content:</strong> Build pages with real
                explanations, examples, FAQs, and calls-to-action instead of
                short generic sales copy.
              </li>

              <li>
                <strong>3. Build mobile-first layouts:</strong> Make sure the
                site works well on phones, tablets, and desktops.
              </li>

              <li>
                <strong>4. Add lead capture:</strong> Add contact forms, quote
                forms, booking buttons, phone links, and follow-up options when
                needed.
              </li>

              <li>
                <strong>5. Set up indexing basics:</strong> Add metadata,
                sitemap support, robots.txt rules, internal links, and Search
                Console guidance.
              </li>

              <li>
                <strong>6. Leave room to grow:</strong> Start simple if needed,
                then add CRM dashboards, automation, booking tools, or custom
                software later.
              </li>
            </ul>
          </article>

          <article className="content-card">
            <h2>A Website Can Grow Into a Business System</h2>

            <p>
              A small business website does not have to stay as a simple
              brochure. It can grow into a system that helps manage leads,
              follow-ups, quotes, customer details, booking requests, form
              submissions, and business tasks.
            </p>

            <p>
              For example, a form on the website can save a lead into a private
              CRM dashboard. A quote request can trigger an email notification.
              A booking form can collect appointment details. An admin page can
              show new leads, follow-up dates, notes, and status.
            </p>

            <p>
              This is useful for small businesses that want to start with a
              website but eventually need custom software tools.
            </p>
          </article>

          <article className="faq-card">
            <h2>Small Business Website FAQs</h2>

            <h3>How many pages does a small business website need?</h3>
            <p>
              It depends on the business, but a strong starting point often
              includes home, services, about, examples, pricing or packages,
              contact, privacy policy, and helpful content pages. Service
              businesses may need separate pages for each major service.
            </p>

            <h3>Can a small business website rank on Google?</h3>
            <p>
              A small business website can appear in Google when it is crawlable,
              indexable, useful, and relevant. Ranking depends on competition,
              content quality, local signals, reviews, links, and time.
            </p>

            <h3>Do I need custom code?</h3>
            <p>
              Not always. Some businesses only need a simple professional
              website. Custom code becomes more useful when you need stronger
              control, custom forms, CRM dashboards, booking tools, automation,
              or room to build business software.
            </p>

            <h3>Can matthew-web work with businesses outside Maine?</h3>
            <p>
              Yes. matthew-web can build websites and custom tools for small
              businesses across the United States.
            </p>

            <h3>Can I add more pages later?</h3>
            <p>
              Yes. A good website should be able to grow over time with new
              service pages, blog articles, examples, FAQs, landing pages, and
              custom features.
            </p>
          </article>

          <section className="cta-box">
            <h2>Need a Better Small Business Website?</h2>
            <p>
              matthew-web builds affordable small business websites, SEO-ready
              pages, lead forms, service pages, custom-coded layouts, CRM
              dashboards, booking tools, and automation for businesses across the
              United States.
            </p>

            <Link href="/contact-us">Request a Free Website Demo</Link>
          </section>

          <nav className="link-row">
            <Link href="/website-design">Website Design</Link>
            <Link href="/custom-software">Custom Software</Link>
            <Link href="/seo-and-indexing">SEO and Indexing</Link>
            <Link href="/services">View All Services</Link>
            <Link href="/pricing">View Pricing</Link>
          </nav>
        </section>
      </div>
    </main>
  );
}
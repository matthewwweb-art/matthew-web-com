import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Custom Software for Small Businesses | matthew-web",
  description:
    "Custom software development for small businesses across the United States. matthew-web builds CRM dashboards, lead tracking systems, booking tools, admin panels, automation, and custom-coded business tools.",
  alternates: {
    canonical: "https://matthew-web.com/custom-software",
  },
  openGraph: {
    title: "Custom Software for Small Businesses | matthew-web",
    description:
      "matthew-web builds custom software, CRM dashboards, lead tracking systems, booking tools, admin panels, and automation for small businesses.",
    url: "https://matthew-web.com/custom-software",
    siteName: "matthew-web",
    type: "website",
  },
};

export default function CustomSoftwarePage() {
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

        .example-box {
          background: #111827;
          color: #ffffff;
          border-radius: 22px;
          padding: 30px;
          margin: 34px 0;
        }

        .example-box h2 {
          color: #ffffff;
          margin-top: 0;
        }

        .example-box p,
        .example-box li {
          color: #e5e7eb;
        }

        .example-box ul {
          margin: 0;
          padding-left: 24px;
        }

        .example-box li {
          font-size: 19px;
          line-height: 1.55;
          margin-bottom: 10px;
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
          .example-box,
          .cta-box {
            padding: 24px;
          }

          .feature-grid {
            grid-template-columns: 1fr;
          }

          .intro-card p,
          .content-card p,
          .faq-card p,
          .process-list li,
          .example-box li {
            font-size: 18px;
          }
        }
      `}</style>

      <div className="service-page">
        <SiteHeader />

        <section className="service-hero">
          <h1>Custom Software for Small Businesses</h1>
          <p>
            matthew-web builds custom-coded business tools, CRM dashboards, lead
            tracking systems, booking tools, admin panels, and automation for
            small businesses that need more than a basic website.
          </p>
        </section>

        <section className="service-wrap">
          <article className="intro-card">
            <h2>Software Built Around the Way Your Business Actually Works</h2>

            <p>
              Many small businesses rely on a mix of emails, spreadsheets, text
              messages, missed calls, sticky notes, social media messages, and
              separate apps to manage daily work. That can work for a while, but
              eventually the process gets messy. Leads get forgotten. Follow-ups
              get missed. Customer information ends up in too many places.
            </p>

            <p>
              Custom software helps solve that problem by giving your business a
              tool built around your actual workflow. Instead of forcing your
              business into a generic app, matthew-web can build a custom-coded
              dashboard, form system, lead tracker, booking tool, or automation
              that fits what you need.
            </p>

            <div className="highlight-box">
              <p>
                A website brings customers in. Custom software helps you manage
                what happens after they contact your business.
              </p>
            </div>
          </article>

          <article className="content-card">
            <h2>What Kind of Custom Software Can matthew-web Build?</h2>

            <p>
              Custom software does not always mean a huge complicated app. For a
              small business, the best software is often simple, useful, and
              focused on one real problem. The goal is to save time, reduce
              confusion, organize information, and make it easier to follow up
              with customers.
            </p>

            <div className="feature-grid">
              <div className="feature-card">
                <h3>CRM Dashboards</h3>
                <p>
                  Track leads, statuses, notes, follow-up dates, quote values,
                  contact details, and sales opportunities in one place.
                </p>
              </div>

              <div className="feature-card">
                <h3>Lead Tracking Systems</h3>
                <p>
                  Save website form leads, Google leads, referrals, Facebook
                  leads, and manual leads into a private dashboard.
                </p>
              </div>

              <div className="feature-card">
                <h3>Booking Tools</h3>
                <p>
                  Let customers request appointments, consultations, estimates,
                  calls, or service times through a structured form.
                </p>
              </div>

              <div className="feature-card">
                <h3>Quote Request Systems</h3>
                <p>
                  Collect project details, service needs, location, timeline,
                  photos, and contact information before calling back.
                </p>
              </div>

              <div className="feature-card">
                <h3>Admin Dashboards</h3>
                <p>
                  Create private pages where the business can manage form
                  submissions, tasks, customers, notes, and important data.
                </p>
              </div>

              <div className="feature-card">
                <h3>Automation Tools</h3>
                <p>
                  Send email notifications, create follow-up reminders, organize
                  leads, reduce repeat work, and connect business workflows.
                </p>
              </div>
            </div>
          </article>

          <article className="content-card">
            <h2>When Does a Business Need Custom Software?</h2>

            <p>
              A business may not need custom software on day one. Sometimes a
              simple website and contact form is enough. But once the business
              starts getting more leads, more customers, more paperwork, more
              appointments, or more follow-ups, custom software can become a
              smart investment.
            </p>

            <p>
              Custom software is usually worth considering when the business has
              a repeat problem that happens over and over. If the same task is
              constantly being handled manually, forgotten, copied between apps,
              or tracked in messy spreadsheets, that process may be a good
              candidate for a custom tool.
            </p>

            <h3>Signs custom software may help</h3>

            <ul className="process-list">
              <li>
                <strong>Leads are getting lost:</strong> Customers contact the
                business, but follow-up is not organized.
              </li>

              <li>
                <strong>Information is scattered:</strong> Customer details are
                spread across emails, texts, spreadsheets, notes, and social
                media messages.
              </li>

              <li>
                <strong>Manual work is slowing you down:</strong> The same
                information gets copied, pasted, searched for, or rewritten too
                often.
              </li>

              <li>
                <strong>You need a private dashboard:</strong> The business
                needs one place to see leads, tasks, quotes, activity, or
                customer details.
              </li>

              <li>
                <strong>Generic software does not fit:</strong> Existing tools
                are too expensive, too complicated, or not built around the way
                your business operates.
              </li>

              <li>
                <strong>You want room to grow:</strong> The business wants a
                tool that can start simple and later add more features.
              </li>
            </ul>
          </article>

          <article className="content-card">
            <h2>Custom Software Examples for Small Businesses</h2>

            <p>
              The best custom software is specific. It should solve a real
              problem for the business using it. Below are examples of practical
              custom software ideas for small businesses.
            </p>

            <div className="example-box">
              <h2>Example Software Builds</h2>
              <ul>
                <li>
                  A contractor CRM that tracks quote requests, service type,
                  project notes, follow-up dates, and quote status.
                </li>

                <li>
                  A lead finder dashboard that helps a web design business find,
                  score, audit, and contact potential customers.
                </li>

                <li>
                  A booking request tool for consultations, estimates, service
                  appointments, or customer calls.
                </li>

                <li>
                  A property inquiry dashboard for rental leads, tenant
                  questions, owner inquiries, and application follow-ups.
                </li>

                <li>
                  A missed-lead follow-up system that reminds the business to
                  contact people who have not been responded to yet.
                </li>

                <li>
                  A quote form that saves customer details and sends the
                  business an organized email notification.
                </li>
              </ul>
            </div>

            <p>
              These tools can connect to a public website or live behind a
              private login. Some may be small internal tools. Others may grow
              into full business systems with dashboards, databases, email
              notifications, file uploads, payment links, and reporting.
            </p>
          </article>

          <article className="content-card">
            <h2>How Custom Software Connects to Your Website</h2>

            <p>
              A custom-coded website can become the front door for a larger
              business system. A visitor fills out a form on the public website.
              That information can then be saved into a private dashboard, sent
              to the business by email, assigned a status, and scheduled for
              follow-up.
            </p>

            <p>
              This connection is powerful because it turns the website from a
              static marketing page into part of the business operation. The
              website attracts the lead, and the software helps manage the lead.
            </p>

            <p>
              For example, a contact form can create a CRM record. A quote form
              can save project details. A booking form can create a request. An
              admin dashboard can show which leads are new, contacted,
              interested, quoted, won, lost, or waiting for follow-up.
            </p>
          </article>

          <article className="content-card">
            <h2>How the Custom Software Process Works</h2>

            <p>
              Custom software should start with a clear problem, not random
              features. The best process is to understand what the business is
              trying to fix, build a simple first version, test it, and improve
              it over time.
            </p>

            <ul className="process-list">
              <li>
                <strong>1. Identify the problem:</strong> We look at what is
                wasting time, causing missed leads, creating confusion, or
                making the business harder to manage.
              </li>

              <li>
                <strong>2. Plan the workflow:</strong> We map out what should
                happen when a customer contacts the business, submits a form,
                requests a quote, books a time, or needs follow-up.
              </li>

              <li>
                <strong>3. Build the first version:</strong> The software starts
                with the most important features first, such as saving leads,
                tracking status, adding notes, or sending notifications.
              </li>

              <li>
                <strong>4. Test with real use:</strong> The tool is tested with
                actual business situations so we can see what needs to be
                adjusted.
              </li>

              <li>
                <strong>5. Improve and expand:</strong> More features can be
                added later, such as reporting, file uploads, automation,
                payment links, AI tools, or customer portals.
              </li>
            </ul>
          </article>

          <article className="content-card">
            <h2>Why Custom Software Can Be Better Than Another App</h2>

            <p>
              There are many apps available for CRMs, booking, notes, forms, and
              automation. Sometimes those tools are a good choice. But many small
              businesses end up paying for tools that do too much, cost too much,
              or still do not fit the way the business works.
            </p>

            <p>
              Custom software can be better when the business needs a focused
              tool that does exactly what is needed without forcing the owner to
              work around a generic system. It can also reduce the number of
              disconnected apps the business has to manage.
            </p>

            <p>
              The right answer is not always custom software. The right answer is
              the option that solves the problem clearly and affordably.
              matthew-web focuses on recommending what fits the actual business
              need.
            </p>
          </article>

          <article className="faq-card">
            <h2>Custom Software FAQs</h2>

            <h3>Is custom software only for big companies?</h3>
            <p>
              No. Small businesses can benefit from simple custom tools too. A
              custom CRM, lead tracker, quote form, or admin dashboard can be
              useful even for a one-person business if it solves a real problem.
            </p>

            <h3>Can custom software start small?</h3>
            <p>
              Yes. In many cases, the best approach is to start with a simple
              first version and add more features later after the business has
              used it in real situations.
            </p>

            <h3>Can software connect to my website?</h3>
            <p>
              Yes. Website forms can connect to dashboards, email notifications,
              databases, lead tracking systems, booking tools, and custom admin
              areas.
            </p>

            <h3>Do I need a CRM dashboard?</h3>
            <p>
              If you are losing leads, forgetting follow-ups, or tracking
              customer details in too many places, a CRM dashboard may help. If
              your process is still simple, a basic contact form may be enough
              for now.
            </p>

            <h3>Can matthew-web build software for businesses outside Maine?</h3>
            <p>
              Yes. matthew-web can build websites and custom software for small
              businesses across the United States. Planning, revisions, and
              support can be handled remotely.
            </p>
          </article>

          <section className="cta-box">
            <h2>Need Custom Software for Your Business?</h2>
            <p>
              matthew-web builds custom-coded CRM dashboards, lead tracking
              tools, quote forms, booking systems, admin panels, automation, and
              business software for small businesses across the United States.
            </p>

            <Link href="/contact-us">Request a Free Software Consultation</Link>
          </section>

          <nav className="link-row">
            <Link href="/website-design">Website Design</Link>
            <Link href="/services">View All Services</Link>
            <Link href="/pricing">View Pricing</Link>
            <Link href="/examples">View Examples</Link>
            <Link href="/seo-and-indexing">SEO and Indexing</Link>
          </nav>
        </section>
      </div>
    </main>
  );
}
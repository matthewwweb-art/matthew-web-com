import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Code of Ethics | matthew-web",
  description:
    "Read the matthew-web Washington-Style Integrity Policy. Our business is built on honesty, accountability, and doing what is right for every client.",
  alternates: {
    canonical: "https://matthew-web.com/code-of-ethics",
  },
  openGraph: {
    title: "Code of Ethics | matthew-web",
    description:
      "matthew-web is built on honesty, accountability, transparency, and doing what is right for every client relationship.",
    url: "https://matthew-web.com/code-of-ethics",
    siteName: "matthew-web",
    type: "website",
  },
};

export default function CodeOfEthicsPage() {
  return (
    <main>
      <style>{`
        .ethics-page {
          background: #ffffff;
          color: #1f2933;
          font-family: Arial, Helvetica, sans-serif;
        }

        .ethics-hero {
          background: #f57c00;
          color: #ffffff;
          text-align: center;
          padding: 70px 22px;
        }

        .ethics-hero h1 {
          margin: 0 0 18px;
          font-size: clamp(42px, 6vw, 72px);
          line-height: 1;
          font-weight: 900;
        }

        .ethics-hero p {
          max-width: 900px;
          margin: 0 auto;
          font-size: clamp(20px, 3vw, 28px);
          line-height: 1.35;
          font-weight: 600;
        }

        .ethics-content {
          max-width: 980px;
          margin: 0 auto;
          padding: 70px 22px;
        }

        .ethics-card {
          background: #f8fafc;
          border: 1px solid #e5e7eb;
          border-radius: 24px;
          padding: 34px;
          margin-bottom: 34px;
          box-shadow: 0 10px 28px rgba(0,0,0,0.06);
        }

        .ethics-card h2 {
          color: #f57c00;
          font-size: clamp(30px, 4vw, 44px);
          line-height: 1.1;
          margin: 0 0 18px;
        }

        .ethics-card h3 {
          color: #0f83a6;
          font-size: 26px;
          margin: 28px 0 12px;
        }

        .ethics-card p {
          font-size: 20px;
          line-height: 1.65;
          margin: 0 0 20px;
          color: #374151;
        }

        .ethics-list {
          display: grid;
          gap: 18px;
          margin: 24px 0;
          padding: 0;
          list-style: none;
        }

        .ethics-list li {
          background: #ffffff;
          border-left: 6px solid #f57c00;
          border-radius: 14px;
          padding: 20px;
          font-size: 19px;
          line-height: 1.5;
          color: #374151;
        }

        .ethics-list strong {
          color: #111827;
        }

        .ethics-quote {
          background: #0f83a6;
          color: #ffffff;
          border-radius: 24px;
          padding: 34px;
          margin: 40px 0;
        }

        .ethics-quote p {
          color: #ffffff;
          font-size: clamp(24px, 4vw, 36px);
          line-height: 1.25;
          font-weight: 900;
          margin: 0;
        }

        .ethics-cta {
          background: #111827;
          color: #ffffff;
          border-radius: 24px;
          padding: 40px;
          text-align: center;
        }

        .ethics-cta h2 {
          color: #ffffff;
          margin: 0 0 16px;
          font-size: clamp(32px, 5vw, 52px);
        }

        .ethics-cta p {
          color: #e5e7eb;
          max-width: 760px;
          margin: 0 auto 26px;
          font-size: 21px;
          line-height: 1.5;
        }

        .ethics-cta a {
          display: inline-block;
          background: #f57c00;
          color: #ffffff;
          text-decoration: none;
          font-size: 20px;
          font-weight: 900;
          padding: 16px 28px;
          border-radius: 10px;
        }

        .ethics-cta a:hover {
          background: #d96d00;
        }

        @media (max-width: 700px) {
          .ethics-content {
            padding: 44px 16px;
          }

          .ethics-card,
          .ethics-quote,
          .ethics-cta {
            padding: 24px;
          }

          .ethics-card p,
          .ethics-list li {
            font-size: 18px;
          }
        }
      `}</style>

      <div className="ethics-page">
        <SiteHeader />

        <section className="ethics-hero">
          <h1>Code of Ethics</h1>
          <p>
            Our business is built on honesty, accountability, transparency, and
            doing what is right.
          </p>
        </section>

        <section className="ethics-content">
          <article className="ethics-card">
            <h2>Washington-Style Integrity Policy</h2>

            <p>
              At matthew-web, we believe a business should be built on more than
              sales, contracts, websites, and code. A real business should have
              standards. It should tell the truth, stand behind its work, and
              take responsibility when something needs to be corrected.
            </p>

            <p>
              Our Washington-Style Integrity Policy is simple: we believe in
              honesty, accountability, and doing what is right, even when the
              right thing is not the easiest thing. That standard applies to
              every website, every custom software project, every client
              conversation, and every recommendation we make.
            </p>

            <div className="ethics-quote">
              <p>
                Even when the right thing is not the easiest thing, we believe
                it is still the standard a real business should follow.
              </p>
            </div>

            <h3>What This Means for Our Clients</h3>

            <ul className="ethics-list">
              <li>
                <strong>We tell the truth.</strong> We do not promise results we
                cannot honestly guarantee, and we do not use misleading claims
                just to win a project.
              </li>

              <li>
                <strong>We stand behind our work.</strong> If something needs to
                be corrected, reviewed, improved, or explained, we believe in
                addressing it directly instead of avoiding responsibility.
              </li>

              <li>
                <strong>We do not cut corners.</strong> We believe websites and
                software should be built with care, clean structure, mobile
                usability, security awareness, and long-term usefulness in mind.
              </li>

              <li>
                <strong>We explain what we are building.</strong> Clients should
                understand what they are paying for, what is included, what is
                not included, and what options they have before making a
                decision.
              </li>

              <li>
                <strong>We recommend what fits the business.</strong> Not every
                client needs the most expensive option. Some businesses need a
                simple website. Others need custom software, CRM tools, booking
                systems, lead forms, or automation. We believe in recommending
                based on the actual need.
              </li>

              <li>
                <strong>We take accountability seriously.</strong> A business
                should not disappear when there is a question, issue, or needed
                adjustment. Communication and responsibility matter.
              </li>
            </ul>

            <h3>Why Integrity Matters in Web Design and Software</h3>

            <p>
              Websites and software can affect how customers find a business,
              contact a business, trust a business, and buy from a business. For
              that reason, the people building those systems should be honest
              about what the technology can do and what it cannot do.
            </p>

            <p>
              We do not believe in selling confusing packages, hiding important
              details, or pushing a business into tools it does not need. Our
              goal is to build websites, pages, dashboards, automations, and
              custom code that make sense for the business using them.
            </p>

            <h3>Our Standard</h3>

            <p>
              This policy means we are obligated to act with integrity in every
              project, every conversation, and every client relationship. We do
              not believe in misleading customers, avoiding accountability, or
              ignoring problems when something needs to be corrected.
            </p>

            <p>
              That is the standard we want matthew-web to be known for:
              affordable work, useful technology, honest communication, and a
              business approach built on doing what is right.
            </p>
          </article>

          <section className="ethics-cta">
            <h2>Work With a Business That Values Accountability</h2>
            <p>
              If you need a website, CRM dashboard, lead form, booking system,
              automation tool, or custom software project, matthew-web is built
              to help with honesty and clear communication from the start.
            </p>

            <Link href="/contact-us">Contact matthew-web</Link>
          </section>
        </section>
      </div>
    </main>
  );
}
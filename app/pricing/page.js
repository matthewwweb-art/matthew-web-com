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

const images = {
  logo:
    "https://d14tal8bchn59o.cloudfront.net/pD8SMCm46GE9kXJfrsm-3pOgtGU_bUZ6M378zAftc-g/w:1920/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23501021/Screenshot_2025-12-19_174653_original.png",

  cta:
    "https://d14tal8bchn59o.cloudfront.net/CHtN7q4DWtPHAZwDIAxcVv-h8M1_pakHSx7aJ86Il5Q/s:322:225:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374779/website-cta_original.png",
};

const pricingCards = [
  {
    id: "website-design-setup",
    title: "Website Design & Setup",
    price: "$499",
    priceNote: "one time",
    colorClass: "orange",
    description:
      "Establish your online presence and build credibility with a professional, search-optimized website, customized specifically for your small business.",
    includes: [
      "Professional Site Design",
      "Includes first 5 pages*",
      "Professional Stock Photography",
      "Mobile Optimization",
      "Content & Copywriting",
      "Connect Social Media Profiles",
      "Search Engine Optimization",
      "Cross Browser Testing",
      "Connect Your Domain",
    ],
    smallNote: "* Additional pages: $100 each",
  },
  {
    id: "website-monthly-service",
    title: "Website Monthly Service",
    price: "$49",
    priceNote: "/month",
    colorClass: "blue",
    description:
      "Our monthly service fee is required for all websites and includes monthly updates, hosting and site security to keep your site looking great, up-to-date and functioning properly.",
    includes: [
      "Worry-Free Cloud Hosting",
      "SSL Certificate",
      "Desktop, Tablet & Mobile Optimization",
      "Cross Browser Testing",
      "Real-Time Traffic Stats",
      "Site Login Credentials",
      "Make Your Own Updates",
      "We Make Updates for You",
      "Reliable Local Support",
    ],
    smallNote: "",
  },
  {
    id: "reputation-management",
    title: "Reputation Management",
    price: "$99",
    priceNote: "/month",
    colorClass: "green",
    description:
      "Don't let bad online customer reviews destroy your business. Protect your reputation by monitoring your brand, deflecting negative reviews and increasing positive reviews.",
    includes: [
      "Reputation Assessment",
      "Review Monitoring",
      "Daily Reputation Reports",
      "Automatic Email Notifications",
      "Review Request Form",
      "Deter Negative Reviews",
      "Increase 5-Star Reviews",
      "Promote on Social Media",
      "Review Response Coach",
    ],
    smallNote: "",
  },
];

const addOns = [
  {
    id: "custom-software",
    title: "Custom Software",
    price: "Price per design",
    description:
      "Custom CRM systems, AI tools, customer management dashboards, booking tools, admin panels, lead tracking systems, automation tools, and other business software built around your needs.",
  },
  {
    id: "basic-logo-creation",
    title: "Basic Logo Creation",
    price: "$399",
    description:
      "A clean, professional logo concept for your business that can be used on your website, social media, business cards, and basic marketing materials.",
  },
  {
    id: "website-indexing",
    title: "Website Indexing",
    price: "$15",
    description:
      "Basic website indexing help for search engines, including submitting your site and sitemap so Google and other search engines can discover your pages faster.",
  },
];

const comparisonRows = [
  {
    question: "How much to get started?",
    ourCompany: "$499",
    competition: "$3,000+",
    competitionNote: "Average Cost of a Small Business Website",
  },
  {
    question: "How much per year?",
    ourCompany: "$49/month",
    competition: "Thousands",
    competitionNote: "first year — Hundreds thereafter",
  },
  {
    question: "What about hosting?",
    ourCompany: "Included",
    competition: "+$150 per year",
    competitionNote: "approx.",
  },
  {
    question: "SSL certificate?",
    ourCompany: "Included",
    competition: "+$149 per year",
    competitionNote: "approx.",
  },
  {
    question: "Is it mobile responsive?",
    ourCompany: "Yes",
    competition: "Additional $$$",
    competitionNote: "Most web designers charge extra for a mobile site",
  },
  {
    question: "How much for ongoing updates?",
    ourCompany: "Easily make updates yourself or let us do it for you",
    competition: "$75/hour",
    competitionNote: "approx. Average hourly rate for web designers",
  },
  {
    question: "What about SEO?",
    ourCompany: "Included",
    competition: "$100-300/hour",
    competitionNote: "approx. Average hourly rate for SEO",
  },
  {
    question: "How long until my new website is live?",
    ourCompany: "Go live in as little as 1 week!",
    competition: "60 - 90 days",
    competitionNote: "approx.",
  },
  {
    question: "The bottom line",
    ourCompany:
      "Affordable pricing, must-have features, reliable support and a fast and easy set up process.",
    competition:
      "Thousands of dollars upfront, hundreds of dollars a month, pay for updates, and months to build.",
    competitionNote: "",
  },
];

export default function PricingPage() {
  return (
    <main>
      <style>{`
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
          text-decoration: none;
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

        .pricing-page-title {
          background: #f57c00;
          text-align: center;
          padding: 52px 20px 78px;
        }

        .pricing-page-title h1 {
          margin: 0;
          color: #ffffff;
          font-size: 58px;
          line-height: 1.1;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .pricing-intro {
          text-align: center;
          max-width: 1120px;
          margin: 0 auto;
          padding: 88px 24px 54px;
        }

        .pricing-intro h2 {
          margin: 0 0 20px;
          color: #2f3135;
          font-size: clamp(42px, 5vw, 58px);
          line-height: 1.1;
          font-weight: 800;
        }

        .pricing-intro p {
          margin: 0;
          color: #444444;
          font-size: 26px;
          line-height: 1.35;
        }

        .pricing-cards-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px 110px;
        }

        .pricing-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid #d6d6d6;
        }

        .pricing-card {
          border-right: 1px solid #d6d6d6;
          text-align: center;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          scroll-margin-top: 30px;
        }

        .pricing-card:last-child {
          border-right: none;
        }

        .card-header {
          min-height: 94px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
        }

        .card-header h3 {
          color: #ffffff;
          font-size: 29px;
          line-height: 1.15;
          margin: 0;
          font-weight: 800;
        }

        .card-header.orange {
          background: #f57c00;
        }

        .card-header.blue {
          background: #0f83a6;
        }

        .card-header.green {
          background: #124d0c;
        }

        .card-body {
          padding: 38px 28px 28px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .price {
          color: #2f3135;
          font-size: 62px;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 34px;
        }

        .price span {
          font-size: 24px;
          font-weight: 400;
          font-style: italic;
          margin-left: 6px;
        }

        .pricing-description {
          color: #4a4a4a;
          font-size: 18px;
          line-height: 1.25;
          margin: 0 0 28px;
        }

        .includes-title {
          color: #333333;
          font-size: 22px;
          font-weight: 800;
          margin: 0 0 6px;
        }

        .includes-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .includes-list li {
          color: #4a4a4a;
          font-size: 18px;
          line-height: 1.35;
        }

        .small-note {
          color: #4a4a4a;
          font-size: 13px;
          margin: 10px 0 18px;
          min-height: 20px;
        }

        .card-btn-wrap {
          margin-top: auto;
          padding-top: 18px;
        }

        .card-btn {
          width: 100%;
          max-width: 275px;
          text-align: center;
          margin: 0 auto;
        }

        .addons-section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px 100px;
          scroll-margin-top: 30px;
        }

        .addons-section h2 {
          text-align: center;
          color: #2f3135;
          font-size: clamp(38px, 5vw, 54px);
          line-height: 1.15;
          margin: 0 0 18px;
          font-weight: 800;
        }

        .addons-section > p {
          text-align: center;
          color: #444444;
          font-size: 24px;
          margin: 0 0 42px;
        }

        .addon-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }

        .addon-card {
          border: 1px solid #d6d6d6;
          border-radius: 8px;
          padding: 32px 26px;
          text-align: center;
          background: #ffffff;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          scroll-margin-top: 30px;
        }

        .addon-card h3 {
          color: #f57c00;
          font-size: 30px;
          line-height: 1.1;
          margin: 0 0 18px;
          font-weight: 800;
        }

        .addon-price {
          color: #2f3135;
          font-size: 36px;
          font-weight: 800;
          margin: 0 0 18px;
        }

        .addon-card p {
          color: #444444;
          font-size: 18px;
          line-height: 1.4;
          margin: 0 0 24px;
        }

        .addon-btn-wrap {
          margin-top: auto;
          padding-top: 10px;
        }

        .addon-btn {
          width: 100%;
          max-width: 260px;
          text-align: center;
          margin: 0 auto;
        }

        .comparison-section {
          max-width: 1120px;
          margin: 0 auto;
          padding: 8px 24px 80px;
          scroll-margin-top: 30px;
        }

        .comparison-section h2 {
          text-align: center;
          color: #2f3135;
          font-size: clamp(38px, 5vw, 54px);
          line-height: 1.15;
          margin: 0 0 18px;
          font-weight: 800;
        }

        .comparison-section > p {
          text-align: center;
          color: #333333;
          font-size: 26px;
          margin: 0 0 80px;
        }

        .comparison-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 70px;
          margin-bottom: 82px;
          align-items: start;
        }

        .comparison-question {
          color: #f57c00;
          font-size: 30px;
          line-height: 1.25;
          font-weight: 800;
        }

        .comparison-col-title {
          color: #1f2933;
          font-size: 30px;
          line-height: 1.2;
          margin-bottom: 18px;
        }

        .comparison-answer {
          color: #f57c00;
          font-size: 26px;
          line-height: 1.2;
          font-weight: 800;
        }

        .competition-answer {
          color: #1f2933;
          font-size: 26px;
          line-height: 1.2;
          font-weight: 800;
        }

        .comparison-note {
          color: #1f2933;
          font-size: 18px;
          line-height: 1.25;
          font-weight: 400;
        }

        .pricing-cta-parallax {
          min-height: 390px;
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.48),
              rgba(0, 0, 0, 0.48)
            ),
            url("${images.cta}");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 65px 20px;
          scroll-margin-top: 30px;
        }

        .pricing-cta-overlay h2 {
          color: #ffffff;
          font-size: clamp(36px, 5vw, 58px);
          line-height: 1.1;
          margin: 0 0 22px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .pricing-cta-overlay p {
          color: #ffffff;
          font-size: clamp(23px, 3vw, 31px);
          line-height: 1.25;
          margin: 0 auto 38px;
          max-width: 1050px;
        }

        .btn-primary {
          display: inline-block;
          background: #f57c00;
          color: #ffffff;
          text-decoration: none;
          font-size: 24px;
          padding: 22px 58px;
          border-radius: 8px;
          font-weight: 600;
        }

        .site-footer {
          background: #f57c00;
          color: #ffffff;
          padding: 52px 32px 34px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
          max-width: 1120px;
          margin: 0 auto;
        }

        .footer-grid h3 {
          font-size: 24px;
          margin: 0 0 18px;
          color: #ffffff;
        }

        .footer-grid p,
        .footer-grid a {
          color: #ffffff;
          font-size: 21px;
          line-height: 1.6;
        }

        .footer-grid a {
          text-decoration: underline;
        }

        .footer-contact {
          margin: 0 0 14px;
        }

        .social-row {
          display: flex;
          gap: 16px;
          margin-top: 24px;
        }

        .social-row span {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #ffffff;
          color: #f57c00;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 25px;
          font-weight: 800;
        }

        .footer-nav {
          display: flex;
          justify-content: center;
          gap: 22px;
          flex-wrap: wrap;
          margin-top: 42px;
        }

        .footer-nav a {
          color: #ffffff;
          font-size: 18px;
          text-decoration: none;
        }

        .footer-nav a:hover {
          text-decoration: underline;
        }

        .copyright {
          text-align: center;
          font-size: 12px;
          margin: 22px 0 0;
          color: #ffffff;
        }

        @media (max-width: 980px) {
          .logo-wrap {
            padding: 30px 24px;
            text-align: center;
          }

          .site-logo {
            width: min(520px, 92vw);
            margin: 0 auto;
          }

          .nav-link {
            font-size: 18px;
            padding: 14px 12px;
          }

          .pricing-page-title h1 {
            font-size: 48px;
          }

          .pricing-cards,
          .addon-grid {
            grid-template-columns: 1fr;
          }

          .pricing-card {
            border-right: none;
            border-bottom: 1px solid #d6d6d6;
          }

          .pricing-card:last-child {
            border-bottom: none;
          }

          .comparison-row {
            grid-template-columns: 1fr;
            gap: 18px;
            margin-bottom: 58px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .pricing-cta-parallax {
            background-attachment: scroll;
          }
        }

        @media (max-width: 620px) {
          .logo-wrap {
            padding: 24px 18px;
          }

          .pricing-page-title {
            padding: 38px 18px;
          }

          .pricing-page-title h1 {
            font-size: 42px;
          }

          .pricing-intro {
            padding: 60px 16px 42px;
          }

          .pricing-intro p,
          .comparison-section > p,
          .addons-section > p {
            font-size: 20px;
          }

          .pricing-cards-wrap,
          .addons-section,
          .comparison-section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .price {
            font-size: 54px;
          }

          .comparison-question,
          .comparison-col-title {
            font-size: 26px;
          }

          .comparison-answer,
          .competition-answer {
            font-size: 23px;
          }

          .btn-primary {
            font-size: 20px;
            padding: 18px 34px;
          }

          .footer-grid p,
          .footer-grid a {
            font-size: 18px;
          }
        }
      `}</style>

      <SiteHeader />

      <section className="pricing-page-title" id="pricing">
        <h1>Pricing</h1>
      </section>

      <section className="pricing-intro" id="simple-affordable-pricing">
        <h2>Simple, Affordable Pricing</h2>
        <p>No contracts. Cancel anytime. 100% satisfaction guaranteed.</p>
      </section>

      <section className="pricing-cards-wrap" id="pricing-plans">
        <div className="pricing-cards">
          {pricingCards.map((card) => (
            <article className="pricing-card" id={card.id} key={card.title}>
              <div className={`card-header ${card.colorClass}`}>
                <h3>{card.title}</h3>
              </div>

              <div className="card-body">
                <div className="price">
                  {card.price}
                  <span>{card.priceNote}</span>
                </div>

                <p className="pricing-description">{card.description}</p>

                <h4 className="includes-title">Includes:</h4>

                <ul className="includes-list">
                  {card.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <p className="small-note">
                  {card.smallNote ? card.smallNote : "\u00A0"}
                </p>

                <div className="card-btn-wrap">
                  <Link href="/contact-us" className="btn-primary card-btn">
                    Get Started Now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="addons-section" id="additional-services">
        <h2>Additional Services</h2>
        <p>
          Add extra business tools, branding, and search setup when you need
          them.
        </p>

        <div className="addon-grid">
          {addOns.map((item) => (
            <article className="addon-card" id={item.id} key={item.title}>
              <h3>{item.title}</h3>
              <div className="addon-price">{item.price}</div>
              <p>{item.description}</p>

              <div className="addon-btn-wrap">
                <Link href="/contact-us" className="btn-primary addon-btn">
                  Get Started Now
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="comparison-section" id="website-cost-comparison">
        <h2>Website Cost Comparison</h2>
        <p>See how our pricing stacks up against the competition.</p>

        {comparisonRows.map((row) => (
          <div className="comparison-row" key={row.question}>
            <div className="comparison-question">{row.question}</div>

            <div>
              <div className="comparison-col-title">Our Company:</div>
              <div className="comparison-answer">{row.ourCompany}</div>
            </div>

            <div>
              <div className="comparison-col-title">The Competition:</div>
              <div className="competition-answer">{row.competition}</div>
              {row.competitionNote ? (
                <div className="comparison-note">{row.competitionNote}</div>
              ) : null}
            </div>
          </div>
        ))}
      </section>

      <section className="pricing-cta-parallax" id="free-website-mockup">
        <div className="pricing-cta-overlay">
          <h2>GET YOUR FREE WEBSITE MOCKUP</h2>
          <p>
            Interested in seeing how your new website can look? Contact us
            today to request your{" "}
            <strong>FREE no-obligation website mockup.</strong>
          </p>

          <Link href="/contact-us" className="btn-primary">
            Get Started Now
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
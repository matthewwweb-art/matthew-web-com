import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowRight,
  ClipboardList,
  Globe2,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export const metadata = {
  title: "Bangor Maine Website Design for Small Businesses | Matthew Web",
  description:
    "Affordable website design for Bangor-area small businesses. Clear service pages, mobile-friendly layouts, contact options, and straightforward pricing from Matthew Web.",
  alternates: {
    canonical: "https://matthew-web.com/bangor-website-design",
  },
  openGraph: {
    title: "Bangor Maine Website Design | Matthew Web",
    description:
      "Website design for Bangor-area small businesses, with clear pricing and practical features.",
    url: "https://matthew-web.com/bangor-website-design",
    type: "website",
  },
};

const features = [
  {
    icon: MonitorSmartphone,
    title: "Mobile-friendly layout",
    text: "Make your services and contact information easy to use on phones, tablets, and desktop screens.",
  },
  {
    icon: ClipboardList,
    title: "Clear service information",
    text: "Organize your services, business details, and important customer information into an understandable website.",
  },
  {
    icon: Search,
    title: "SEO-ready structure",
    text: "Build pages with descriptive titles, organized content, and a structure that search engines can understand. Rankings are not guaranteed.",
  },
  {
    icon: Wrench,
    title: "Practical contact options",
    text: "Give potential customers a straightforward way to call, ask questions, or request a quote.",
  },
];

const audiences = [
  "Contractors and skilled trades",
  "Home and property service businesses",
  "Independent shops and local retailers",
  "Auto repair and other local service providers",
];

const steps = [
  ["1. Discuss the project", "We review your business, goals, required pages, and the information customers need."],
  ["2. Build the website", "The agreed pages and features are developed around your business information."],
  ["3. Review and launch", "You review the work, request covered adjustments, and coordinate launch details."],
];

const faqs = [
  {
    q: "Is Matthew Web located in Bangor?",
    a: "No. Matthew Web is based in Madison, Maine and serves businesses in Bangor and surrounding communities. There is no Bangor office.",
  },
  {
    q: "How much does a standard website cost?",
    a: "The standard website offer is $499 one time plus $49 per month for Website Care. The standard scope covers up to five agreed pages. Domain costs are separate.",
  },
  {
    q: "What does Website Care include?",
    a: "Website Care includes hosting, SSL, maintenance, support, compatibility care, and up to 30 covered minor edits per month. New pages, redesigns, integrations, and new software are outside the minor-edit allowance.",
  },
  {
    q: "Can I start with a smaller project?",
    a: "A limited one-page pilot is available with $0 upfront. Its first $49 payment is due 14 calendar days after documented development starts. Project scope and timing are agreed before work begins.",
  },
  {
    q: "Will a new website guarantee Google rankings?",
    a: "No. A website can be built with SEO-ready structure, but search rankings and traffic depend on many factors and are not guaranteed.",
  },
];

export default function BangorWebsiteDesignPage() {
  return (
    <>
      <SiteHeader />
      <main className="bangor-page">
      <style>{`
        .bangor-page{color:#dbe7ed;background:#020304;font-family:inherit}
        .bangor-wrap{width:min(1120px,calc(100% - 40px));margin:auto}
        .bangor-hero{padding:82px 0 72px;background:radial-gradient(ellipse at top left,#08212d 0%,#04090d 48%,#020304 100%)}
        .bangor-eyebrow{display:inline-block;color:#08b9f4;font-weight:700;font-size:.9rem;letter-spacing:.04em;text-transform:uppercase}
        .bangor-hero h1{max-width:850px;margin:18px 0;font-size:clamp(2.25rem,5vw,4rem);line-height:1.08;letter-spacing:-.04em}
        .bangor-lead{max-width:760px;color:#b7c8d1;font-size:1.15rem;line-height:1.75}
        .bangor-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:28px}
        .bangor-btn{display:inline-flex;align-items:center;gap:9px;padding:13px 19px;border-radius:9px;text-decoration:none;font-weight:700}
        .bangor-primary{background:#08b9f4;color:#020304}
        .bangor-secondary{border:1px solid #31505e;color:#dbe7ed;background:#080e12}
        .bangor-section{padding:66px 0}
        .bangor-muted{background:#04090d}
        .bangor-section h2{font-size:clamp(1.75rem,3vw,2.5rem);line-height:1.2;margin:0 0 16px}
        .bangor-intro{max-width:780px;color:#a9bac4;line-height:1.75}
        .bangor-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;margin-top:30px}
        .bangor-card{padding:24px;border:1px solid #18313d;border-radius:13px;background:#080e12}
        .bangor-card h3{margin:12px 0 8px;font-size:1.15rem}
        .bangor-card p,.bangor-section p{line-height:1.7;color:#a9bac4}
        .bangor-icon{color:#08b9f4;width:27px;height:27px}
        .bangor-list{padding-left:22px;line-height:2;color:#c4d2d9}
        .bangor-price{font-size:2.25rem;font-weight:800;letter-spacing:-.04em;margin:12px 0}
        .bangor-price small{font-size:1rem;font-weight:500;letter-spacing:0;color:#a9bac4}
        .bangor-process{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-top:28px}
        .bangor-faq{padding:20px 0;border-bottom:1px solid #18313d}
        .bangor-faq h3{font-size:1.08rem;margin:0 0 8px}
        .bangor-faq p{margin:0}
        .bangor-callout{padding:34px;border:1px solid #18313d;border-radius:16px;background:#080e12}
        .bangor-callout h2{margin-bottom:12px}
        @media(max-width:700px){.bangor-hero{padding:58px 0}.bangor-grid,.bangor-process{grid-template-columns:1fr}.bangor-section{padding:48px 0}.bangor-callout{padding:25px}}
      `}</style>

      <section className="bangor-hero">
        <div className="bangor-wrap">
          <span className="bangor-eyebrow">Serving Bangor and surrounding Maine communities</span>
          <h1>Website Design for Bangor-Area Small Businesses</h1>
          <p className="bangor-lead">
            A useful business website should explain what you do, make it easy
            for customers to contact you, and work well on mobile devices.
            Matthew Web builds straightforward websites for small businesses
            across the Bangor area.
          </p>
          <div className="bangor-actions">
            <Link className="bangor-btn bangor-primary" href="/contact-us">
              Request a Website Quote <ArrowRight size={18} />
            </Link>
            <Link className="bangor-btn bangor-secondary" href="/pricing">
              View Website Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="bangor-section">
        <div className="bangor-wrap">
          <h2>A clearer online presence for your business</h2>
          <p className="bangor-intro">
            Whether customers find you through a search, a recommendation, or
            your social media page, your website can give them one reliable
            place to understand your services and decide how to get in touch.
            The goal is a practical website built around the information your
            customers actually need.
          </p>
          <div className="bangor-grid">
            {features.map(({ icon: Icon, title, text }) => (
              <article className="bangor-card" key={title}>
                <Icon className="bangor-icon" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bangor-section bangor-muted">
        <div className="bangor-wrap">
          <h2>Website projects for local business types</h2>
          <p className="bangor-intro">
            Different businesses need different information on their websites.
            A project can be planned around the services, customers, and
            questions relevant to your operation.
          </p>
          <ul className="bangor-list">
            {audiences.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p>
            These are examples of businesses the service can support, not a
            claim of existing clients or completed projects in Bangor.
          </p>
        </div>
      </section>

      <section className="bangor-section">
        <div className="bangor-wrap">
          <h2>Straightforward website pricing</h2>
          <div className="bangor-grid">
            <article className="bangor-card">
              <h3>Standard website</h3>
              <div className="bangor-price">$499 <small>one time</small></div>
              <p>Plus $49 per month for Website Care.</p>
              <ul className="bangor-list">
                <li>Up to five agreed pages</li>
                <li>Mobile-friendly layout</li>
                <li>Clear business and service information</li>
                <li>Contact options for prospective customers</li>
                <li>Domain costs are separate</li>
              </ul>
              <Link className="bangor-btn bangor-primary" href="/contact-us">
                Discuss a Project <ArrowRight size={18} />
              </Link>
            </article>
            <article className="bangor-card">
              <h3>Limited one-page pilot</h3>
              <div className="bangor-price">$0 <small>upfront</small></div>
              <p>
                A limited pilot option for an agreed one-page project. The
                first $49 payment is due 14 calendar days after documented
                development starts.
              </p>
              <p>Availability and scope are confirmed before development begins.</p>
              <Link className="bangor-btn bangor-secondary" href="/contact-us">
                Ask About the Pilot <ArrowRight size={18} />
              </Link>
            </article>
          </div>
          <p className="bangor-intro">
            Website Care includes hosting, SSL, maintenance, support,
            compatibility care, and up to 30 covered minor edits per month.
            New pages, redesigns, integrations, and new software are not
            covered minor edits.
          </p>
          <p><Link href="/pricing">Review full pricing and service details</Link>.</p>
        </div>
      </section>

      <section className="bangor-section bangor-muted">
        <div className="bangor-wrap">
          <h2>A simple project process</h2>
          <div className="bangor-process">
            {steps.map(([title, text]) => (
              <article className="bangor-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bangor-section">
        <div className="bangor-wrap">
          <h2>Frequently asked questions</h2>
          {faqs.map(({ q, a }) => (
            <div className="bangor-faq" key={q}>
              <h3>{q}</h3>
              <p>{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bangor-section">
        <div className="bangor-wrap">
          <div className="bangor-callout">
            <h2>Based in Madison. Serving the Bangor area.</h2>
            <p>
              Matthew Web is based in Madison, Maine and works with small
              businesses in Bangor and surrounding communities. Get in touch
              to discuss your website goals and the scope that makes sense.
            </p>
            <div className="bangor-actions">
              <Link className="bangor-btn bangor-primary" href="/contact-us">
                Contact Matthew Web <ArrowRight size={18} />
              </Link>
              <Link className="bangor-btn bangor-secondary" href="/website-design">
                General Website Design <Globe2 size={18} />
              </Link>
            </div>
          </div>
          <p style={{ marginTop: 24 }}>
            <ShieldCheck size={17} style={{ display: "inline", verticalAlign: "text-bottom" }} />{" "}
            Learn more about <Link href="/small-business-websites">small-business websites</Link>,{" "}
            <Link href="/services">available services</Link>, and{" "}
            <Link href="/pricing">pricing</Link>.
          </p>
        </div>
      </section>
    </main>
      <SiteFooter />
    </>
  );
}

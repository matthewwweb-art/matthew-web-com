import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Blog | matthew-web",
  description:
    "Helpful matthew-web articles about website design, custom software, SEO, Google indexing, CRM dashboards, website speed, booking forms, automation, and small business websites.",
  alternates: {
    canonical: "https://matthew-web.com/blog",
  },
  openGraph: {
    title: "Blog | matthew-web",
    description:
      "Read original matthew-web guides about website design, custom software, SEO, indexing, CRM dashboards, forms, automation, and small business websites.",
    url: "https://matthew-web.com/blog",
    siteName: "matthew-web",
    type: "website",
  },
};

const images = {
  blog1:
    "https://d14tal8bchn59o.cloudfront.net/hMzPEeAuWkrzqgPOVpoPrV0ZZ6z8vVaOYUuRcQHhIbQ/rs:fill:400:266:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374753/web-design-g0095d4467_1920_original.jpg",

  blog2:
    "https://d14tal8bchn59o.cloudfront.net/jJIxjmGth8wGPFjpOkJRi2_aKwlrYGG2eTDJhTpKXec/rs:fill:400:266:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374749/signs-you-need-a-website_original.jpg",

  blog3:
    "https://d14tal8bchn59o.cloudfront.net/AT7N5ag5rEVqaMzKKBSZecSFIj_Jj0EPl-jYinSXw-w/rs:fill:400:266:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374752/diy-website-builders-bad-for-business_original.jpg",

  blog4:
    "https://d14tal8bchn59o.cloudfront.net/hUNYjiafnZ6dBevXl0c0u9gB7GIAqt68khDiqOhPc1w/rs:fill:400:266:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374748/Things-Every-Small-Business-Website-Needs__original.jpg",

  blog5:
    "https://d14tal8bchn59o.cloudfront.net/cVgcYdHBAU_4xf0hvO5FSwR2tW-_IXGvVSPmgbW4oBA/rs:fill:400:266:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374744/How_To_Respond_to_Online_Reviews_original.jpg",

  blog6:
    "https://d14tal8bchn59o.cloudfront.net/VwWurzp6dLNs6cSakkPhOvkQZKTHir3rfNBgT3mfeBY/rs:fill:400:266:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374747/Why-Reputation-Management-and-Online-Reviews-Are-Important-in-Business_original.jpg",

  blog7:
    "https://d14tal8bchn59o.cloudfront.net/lBBpKWycVl0fFT4BmOmx1CLObIglJ_yebL90ALQWpYU/rs:fill:400:266:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374755/domenico-loia-hGV2TfOh0ns-unsplash_original.jpg",

  blog8:
    "https://d14tal8bchn59o.cloudfront.net/Ms8nAuF7qTENOV47ftyPEZ71LCmv6nkyKaHuHCGaLfs/rs:fill:400:266:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374751/website-traffic-stats_original.jpg",

  blog9:
    "https://d14tal8bchn59o.cloudfront.net/zUtLlq0vywMXwNVr1UGlT-IgACwDZVinuW6goIcEeFk/rs:fill:400:266:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374746/small-business-marketing-mistakes_original.jpg",

  blog10:
    "https://d14tal8bchn59o.cloudfront.net/MSMfgieW9Jha4g9YO34SvA0kkVjeV7RZyjqN3ogvDp8/rs:fill:400:266:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374750/redesign-your-website_original.jpg",

  cta:
    "https://d14tal8bchn59o.cloudfront.net/CHtN7q4DWtPHAZwDIAxcVv-h8M1_pakHSx7aJ86Il5Q/s:322:225:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374779/website-cta_original.png",
};

const blogPosts = [
  {
    id: "custom-coded-websites-beat-diy-builders",
    title:
      "Why Custom-Coded Websites Beat DIY Website Builders for Small Businesses",
    image: images.blog3,
    href: "/why-custom-coded-websites-beat-diy-website-builders",
    text:
      "DIY website builders can help a business get online quickly, but custom-coded websites give growing businesses more control, better flexibility, stronger lead capture, and more room for SEO, automation, CRM tools, and future software features.",
  },
  {
    id: "small-business-website-cost-2026",
    title: "How Much Should a Small Business Website Cost in 2026?",
    image: images.blog4,
    href: "/how-much-should-a-small-business-website-cost-in-2026",
    text:
      "A practical pricing guide for small business owners comparing starter websites, custom-coded websites, SEO setup, CRM dashboards, booking tools, automation, and full code ownership in 2026.",
  },
  {
    id: "contractor-website-leads",
    title: "What Every Contractor Website Needs to Generate Leads",
    image: images.blog7,
    href: "/what-every-contractor-website-needs-to-generate-leads",
    text:
      "A contractor website should do more than look professional. It should help homeowners trust the business, understand the services, request estimates, and become real leads.",
  },
  {
    id: "website-design-vs-custom-software",
    title:
      "Website Design vs Custom Software: What Does Your Business Actually Need?",
    image: images.blog8,
    href: "/website-design-vs-custom-software-what-does-your-business-need",
    text:
      "Some businesses need a better website. Others need a CRM dashboard, booking system, automation tool, or custom software. The right answer depends on the problem the business is trying to solve.",
  },
  {
    id: "crm-dashboards-stop-losing-leads",
    title: "How CRM Dashboards Help Small Businesses Stop Losing Leads",
    image: images.blog9,
    href: "/how-crm-dashboards-help-small-businesses-stop-losing-leads",
    text:
      "A CRM dashboard helps small businesses organize leads, track follow-ups, save activity notes, manage quotes, and stop potential customers from disappearing after the first message.",
  },
  {
    id: "google-indexing-after-launch",
    title: "Why Google Indexing Matters After Launching a New Website",
    image: images.blog10,
    href: "/why-google-indexing-matters-after-launching-a-new-website",
    text:
      "Launching a website is only the first step. Google still needs to crawl, understand, and index your pages before customers can find them through search.",
  },
  {
    id: "raw-code-vs-wordpress-wix-godaddy",
    title:
      "Raw Code vs WordPress vs Wix vs GoDaddy: Which Is Best for Your Business?",
    image: images.blog1,
    href: "/raw-code-vs-wordpress-vs-wix-vs-godaddy",
    text:
      "Compare raw custom code, WordPress, Wix, and GoDaddy for small business websites, including SEO, speed, ownership, design control, custom features, and long-term growth.",
  },
  {
    id: "seo-ready-small-business-websites",
    title: "How matthew-web Builds SEO-Ready Small Business Websites",
    image: images.blog2,
    href: "/how-matthew-web-builds-seo-ready-small-business-websites",
    text:
      "SEO-ready websites are planned before launch with clean structure, useful content, mobile design, metadata, sitemaps, indexing setup, internal links, and lead forms.",
  },
  {
    id: "fast-website-speed-leads-seo-trust",
    title: "Why Fast Website Load Speed Helps Leads, SEO, and Trust",
    image: images.blog5,
    href: "/why-fast-website-load-speed-helps-leads-seo-and-trust",
    text:
      "A fast website helps visitors stay, trust the business, read the content, use the forms, and take the next step. Speed also supports mobile usability and SEO-ready website structure.",
  },
  {
    id: "booking-quote-forms-automation-local-businesses",
    title:
      "How Booking Forms, Quote Forms, and Automation Help Local Businesses",
    image: images.blog6,
    href: "/how-booking-forms-quote-forms-and-automation-help-local-businesses",
    text:
      "Booking forms, quote forms, lead forms, email notifications, CRM dashboards, and automation help local businesses save time, capture better leads, and follow up faster.",
  },
];

export default function BlogPage() {
  return (
    <main>
      <style>{`
        .blog-page-title {
          background: #f57c00;
          padding: 52px 20px 78px;
          text-align: center;
        }

        .blog-page-title h1 {
          margin: 0;
          color: #ffffff;
          font-size: 58px;
          line-height: 1.1;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .blog-page-title p {
          max-width: 900px;
          margin: 18px auto 0;
          color: #ffffff;
          font-size: clamp(20px, 3vw, 28px);
          line-height: 1.35;
          font-weight: 600;
        }

        .blog-list {
          max-width: 1120px;
          margin: 0 auto;
          padding: 68px 24px 40px;
        }

        .blog-post {
          margin-bottom: 94px;
          scroll-margin-top: 30px;
        }

        .blog-post h2 {
          color: #f57c00;
          font-size: clamp(32px, 4vw, 44px);
          line-height: 1.15;
          margin: 0 0 24px;
          font-weight: 800;
        }

        .blog-post h2 a {
          color: inherit;
          text-decoration: none;
        }

        .blog-post h2 a:hover {
          text-decoration: underline;
        }

        .blog-row {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 56px;
          align-items: start;
        }

        .blog-image img {
          width: 100%;
          height: 266px;
          object-fit: cover;
          border-radius: 24px;
          display: block;
        }

        .blog-copy p {
          margin: 0 0 24px;
          color: #1f2933;
          font-size: 23px;
          line-height: 1.28;
        }

        .read-more {
          color: #f57c00;
          font-size: 22px;
          text-decoration: none;
          font-weight: 800;
        }

        .read-more:hover {
          text-decoration: underline;
        }

        .blog-cta-parallax {
          min-height: 365px;
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

        .blog-cta-overlay h2 {
          color: #ffffff;
          font-size: clamp(36px, 5vw, 58px);
          line-height: 1.1;
          margin: 0 0 22px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .blog-cta-overlay p {
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
          font-weight: 800;
        }

        .btn-primary:hover {
          background: #d96d00;
        }

        @media (max-width: 900px) {
          .blog-page-title {
            padding: 44px 18px 62px;
          }

          .blog-page-title h1 {
            font-size: 48px;
          }

          .blog-list {
            padding: 46px 20px 20px;
          }

          .blog-post {
            margin-bottom: 70px;
          }

          .blog-row {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .blog-image img {
            max-width: 400px;
            height: auto;
          }

          .blog-copy p {
            font-size: 20px;
          }

          .blog-cta-parallax {
            background-attachment: scroll;
          }
        }

        @media (max-width: 520px) {
          .blog-page-title {
            padding: 38px 18px;
          }

          .blog-page-title h1 {
            font-size: 42px;
          }

          .blog-list {
            padding-left: 16px;
            padding-right: 16px;
          }

          .blog-post h2 {
            font-size: 31px;
          }

          .blog-copy p {
            font-size: 18px;
          }

          .btn-primary {
            font-size: 20px;
            padding: 18px 34px;
          }
        }
      `}</style>

      <SiteHeader />

      <section className="blog-page-title" id="blog">
        <h1>Blog</h1>
        <p>
          Original matthew-web guides about website design, custom software,
          SEO, Google indexing, CRM dashboards, booking forms, automation, and
          small business websites.
        </p>
      </section>

      <section className="blog-list" id="blog-posts">
        {blogPosts.map((post) => (
          <article className="blog-post" id={post.id} key={post.title}>
            <h2>
              <Link href={post.href}>{post.title}</Link>
            </h2>

            <div className="blog-row">
              <Link href={post.href} className="blog-image">
                <img src={post.image} alt={post.title} />
              </Link>

              <div className="blog-copy">
                <p>{post.text}</p>

                <Link href={post.href} className="read-more">
                  Continue Reading &gt;
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="blog-cta-parallax" id="free-website-mockup">
        <div className="blog-cta-overlay">
          <h2>GET YOUR FREE WEBSITE MOCKUP</h2>
          <p>
            Interested in seeing how your new website can look? Contact us today
            to request your <strong>FREE no-obligation website mockup.</strong>
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
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
    id: "facebook-page-not-substitute-website",
    title: "Why a Facebook Page is Not a Substitute for a Website",
    image: images.blog1,
    href: "/why-a-facebook-page-is-not-a-substitute-for-a-website",
    text:
      "When it comes to promoting and representing your small business online, it's important to have a strong, professional presence. Many businesses today turn to social media platforms, like Facebook, to create that presence. However, using a Facebook page as your primary or only online presence can be a huge mistake.",
  },
  {
    id: "signs-you-need-new-website",
    title: "7 Signs You Need a New Website for Your Business",
    image: images.blog2,
    href: "/7-signs-you-need-a-new-website-for-your-business",
    text:
      "Web design might sometimes seem like an unnecessary expense for some small business owners. In fact, it's quite the opposite. User habits and Google search algorithms change regularly. You're missing out on valuable traffic and potential customers if you're not consistently modernizing your website.",
  },
  {
    id: "diy-site-builders-bad-small-business",
    title: "Why DIY Site Builders are Bad for Small Businesses",
    image: images.blog3,
    href: "/why-diy-site-builders-are-bad-for-small-businesses",
    text:
      "Do you need to build a website for your small business and are considering building one yourself? Unfortunately, many people think that it's something that they can build on their own. Only after making a low-quality website do they realize that they would have been better off leaving it to the professionals.",
  },
  {
    id: "small-business-website-needs",
    title: "8 Things Every Small Business Website Needs",
    image: images.blog4,
    href: "/8-things-every-small-business-website-needs",
    text:
      "If you run a small business, no matter what it is that you do, or where you’re located, you need a website. Small business websites are crucial for online visibility, branding, and driving sales, but only if you've got good web design.",
  },
  {
    id: "respond-to-online-reviews",
    title: "How To Respond to Online Reviews (Good and Bad)",
    image: images.blog5,
    href: "/how-to-respond-to-online-reviews-good-and-bad",
    text:
      "93% of surveyed shoppers make buying decisions based on online reviews. That's a huge percentage! If you run a business, your reviews are vital to your success.",
  },
  {
    id: "reputation-management-online-reviews",
    title:
      "Why Reputation Management and Online Reviews Are Important in Business",
    image: images.blog6,
    href: "/why-reputation-management-and-online-reviews-are-important-in-business",
    text:
      "One recent report suggested that a company's reputation can account for more than 60% of its total value. As a result, your business might not be worth as much as it would be worth otherwise simply because of its reputation.",
  },
  {
    id: "small-business-websites-vital",
    title: "7 Reasons Why Small Business Websites Are Vital",
    image: images.blog7,
    href: "/7-reasons-why-small-business-websites-are-vital",
    text:
      "A website is a vital component to a small businesses’ success. However not any website will do. About one in five small business websites struggle to generate traffic to their website. Meanwhile, 57% of users won't recommend a company with a poor mobile web design.",
  },
  {
    id: "website-traffic-stats",
    title: "Website Traffic Stats Explained",
    image: images.blog8,
    href: "/website-traffic-stats-explained",
    text:
      "There are over 5.07 billion daily Internet users in the world, so there's a large base of potential customers you can reach with your website. But before you can tap into that potential, you need to know whether your website is capable of attracting those visitors.",
  },
  {
    id: "marketing-mistakes-small-businesses",
    title: "8 Marketing Mistakes Small Businesses Make",
    image: images.blog9,
    href: "/8-marketing-mistakes-small-businesses-make",
    text:
      "According to a recent survey, about half of all American small businesses lack a solid marketing plan. Not having a plan in place is one of the biggest marketing mistakes that any small business can make.",
  },
  {
    id: "redesign-your-website",
    title: "How Often Should You Redesign Your Website?",
    image: images.blog10,
    href: "/how-often-should-you-redesign-your-website",
    text:
      "A recent study found that 50% of consumers believe that website design is a fundamental factor in a business’s brand. Website design showcases your business’s style, attitude, and aesthetic.",
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

        .blog-list {
          max-width: 1120px;
          margin: 0 auto;
          padding: 68px 24px 40px;
        }

        .blog-post {
          margin-bottom: 112px;
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

        .social-row a {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #ffffff;
          color: #f57c00;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          font-weight: 900;
          text-decoration: none;
          line-height: 1;
          transition: 0.2s ease;
        }

        .social-row a:hover {
          transform: translateY(-2px);
          opacity: 0.9;
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

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
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

          .footer-grid p,
          .footer-grid a {
            font-size: 18px;
          }
        }
      `}</style>

      <SiteHeader />

      <section className="blog-page-title" id="blog">
        <h1>Blog</h1>
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
            Interesting in seeing how your new website can look? Contact us
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
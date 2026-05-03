import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

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
  notebook:
    "https://images.unsplash.com/photo-1560277090-46659724a489?ixid=M3w1NzQ5OTV8MHwxfGFsbHx8fHx8fHx8fDE3NjYxMTk1MDZ8&ixlib=rb-4.1.0&utm_source=siteswan&utm_medium=referral&utm_campaign=api-credit&w=700",
  portrait:
    "https://d14tal8bchn59o.cloudfront.net/ccNtrHXQRJx9fi7ue7Qp-hWIXBJPtWIUU5nwx_JG9hI/rs:fill:600:600:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23495059/ChatGPT_Image_Dec_18__2025__10_37_15_PM_original.png",
  cta:
    "https://d14tal8bchn59o.cloudfront.net/CHtN7q4DWtPHAZwDIAxcVv-h8M1_pakHSx7aJ86Il5Q/s:322:225:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374779/website-cta_original.png",
};

const faqs = [
  {
    id: "why-use-matthew",
    q: "Why should I use Matthew to create my website?",
    a: "Maybe you created your own website and the design didn't turn out quite how you anticipated, or you have an outdated website that needs to be updated but you don't want to spend a lot. For us, quality and good service do not have to be expensive. We are committed to helping small businesses and have long standing success and many happy clients.",
  },
  {
    id: "free-design-demo",
    q: "Will you really design my site for free?",
    a: "Yes. Each project starts with a free design demo to show you what we're capable. This ensures you are 100% happy with our work before you pay us a dime. Once you approve your design and submit payment, we'll work with you to make any changes and complete your site.",
  },
  {
    id: "monthly-service-fee",
    q: "What's included in the monthly service fee?",
    a: "The monthly service fee includes hosting, SSL certificate, ongoing maintenance and support for our clients to ensure that their websites remain up-to-date and functioning properly. This can include updating content, fixing issues, and making sure the website is compatible with modern standards and technologies.",
  },
  {
    id: "custom-code-platform",
    q: "What platform will my new site be built on?",
    a: "This new version is being built custom in code, giving us full control over design, speed, SEO, layout, forms, and future features.",
  },
  {
    id: "mobile-friendly-websites",
    q: "Will my new website look good on smartphones?",
    a: "Yes. All websites are designed to be responsive, meaning that they adjust to fit desktop computers, laptops, tablets, and smartphones.",
  },
  {
    id: "seo-optimization",
    q: "Do you offer SEO optimization as part of your services?",
    a: "Yes, we offer SEO optimization as part of our website design and development services. This includes optimizing content and structure to improve visibility in search engine results.",
  },
  {
    id: "use-existing-domain",
    q: "Can I use my domain from my previous site?",
    a: "Yes. It is generally possible to use a domain from your previous site for your new website as long as you still own it.",
  },
  {
    id: "businesses-outside-madison",
    q: "Do you work with businesses outside of Madison?",
    a: "Yes, while our firm is located in Madison, we happily work with clients all over the country. Communication can be done by phone, email, or virtual meeting if necessary.",
  },
];

export default function AboutUsPage() {
  return (
    <main>
      <SiteHeader />

      <section className="about-page-title" id="about-us">
        <h1>About Us</h1>
      </section>

      <section className="about-page-intro" id="about-matthew">
        <div className="about-page-top-row">
          <div className="about-page-image">
            <img src={images.notebook} alt="Website planning notebook" />
          </div>

          <div className="about-page-copy">
            <h2>About Matthew</h2>

            <p>
              Matthew is a web design firm based in Madison, ME. We are
              passionate about helping businesses of all sizes succeed online,
              and we are dedicated to delivering high-quality website design and
              development services at affordable prices.
            </p>

            <p>
              We recognize that price is very important, which is why we work
              very hard to keep our prices extremely competitive so you can keep
              more money in your pocket.
            </p>

            <p>
              Our team of experienced designers and developers is committed to
              creating websites that are not only visually appealing, but also
            </p>
          </div>
        </div>

        <div className="about-page-wide-copy">
          <p>
            designed to drive traffic, generate leads, and increase conversions.
            We use the latest technologies and techniques to ensure that our
            websites are user-friendly, mobile-friendly, and optimized for
            search engines.
          </p>

          <p>
            We are proud to serve businesses in Madison and all over the
            country, and we look forward to the opportunity to work with you and
            help your business thrive online. Thank you for considering Matthew
            for your website design needs.
          </p>

          <Link href="/contact-us#contact-form" className="btn-primary about-page-btn">
            Contact Us
          </Link>
        </div>
      </section>

      <section className="about-owner-section" id="adam-matthew-charest">
        <div className="about-owner-wrap">
          <div className="about-owner-copy">
            <h2>A little about me</h2>

            <p>
              Hi, my name is Adam Matthew Charest, and I am a web designer with
              a passion for helping small businesses succeed online. I have the
              skills and knowledge to create beautiful, functional websites that
              will help your business reach its goals.
            </p>

            <p>
              I believe that every small business deserves to have a professional
              online presence, and I am dedicated to helping my clients achieve
              that. Whether you are just starting out or looking to update your
              existing website, I can work with you to create a custom solution
              that meets your needs and budget.
            </p>

            <p>
              I look forward to the opportunity to work with you and help your
              small business thrive online!
            </p>
          </div>

          <div className="about-owner-image">
            <img src={images.portrait} alt="Adam Matthew Charest" />
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="section-heading">
          <h2>FAQ</h2>
          <p>Commonly asked questions and answers.</p>
        </div>

        <div className="faq-list">
          {faqs.map((item) => (
            <div className="faq-item" id={item.id} key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-cta-parallax" id="free-website-mockup">
        <div className="about-cta-overlay">
          <h2>GET YOUR FREE WEBSITE MOCKUP</h2>
          <p>
            Interesting in seeing how your new website can look? Contact us
            today to request your{" "}
            <strong>FREE no-obligation website mockup.</strong>
          </p>
          <Link href="/contact-us#contact-form" className="btn-primary">
            Get Started Now
          </Link>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <h3>About Matthew</h3>
            <p>
              If you're searching for an affordable and reliable website
              designer near Madison, than look no further. At Matthew, we
              specialize in creating professional, functional, and affordable
              websites for small businesses.
            </p>
            <p>
              Whether you're across town or across the country, our team of
              experts will help you get your business online with a
              cost-friendly website that is visually appealing, user-friendly,
              and optimized for search engines. Contact us to request your FREE
              website demo.
            </p>
            <Link href="/privacy-policy">Privacy Policy</Link>

            <div className="social-row">
              <span>f</span>
              <span>◎</span>
              <span>✹</span>
              <span>G</span>
            </div>
          </div>

          <div>
            <p className="footer-contact">📍 973 River Road Madison, ME 04950</p>
            <p className="footer-contact">📞 Phone (207) 631-7793</p>
            <p className="footer-contact">
              🕘 Monday - Friday: 9:00am - 5:00pm
              <br />
              Saturday - Sunday: Closed
            </p>
          </div>
        </div>

        <nav className="footer-nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link href="/search">🔍 Search</Link>
        </nav>

        <p className="copyright">
          Copyright ©2026 Matthew. All Rights Reserved. Designed by Adam Matthew
          Charest
        </p>
      </footer>
    </main>
  );
}
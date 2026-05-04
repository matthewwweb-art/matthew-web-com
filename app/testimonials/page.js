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

  person1:
    "https://d14tal8bchn59o.cloudfront.net/jAUSVFAMGYYYrZvpVQRsWCzikJIBjjhLwTxNbbCHrp0/rs:fill:360:360:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374794/Testimonial_1_original.jpg",

  person2:
    "https://d14tal8bchn59o.cloudfront.net/nNVN4poq2uTeyfeypAVIUmxup5-QprXLq2tT640D4Cg/rs:fill:360:360:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374790/Testimonial_4_original.jpg",

  person3:
    "https://d14tal8bchn59o.cloudfront.net/UD8mSLCxtmpYrnQIK_bCGUQ1sPX2EcRGadXMESU10uw/rs:fill:360:360:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374792/Testimonial_3_original.jpg",

  person4:
    "https://d14tal8bchn59o.cloudfront.net/S3EGjrA-I9m1ayjbxCFpHYTVgCH1QFhMijl-kdnm3FE/rs:fill:360:360:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374791/Testimonial_2_original.jpg",

  person5:
    "https://d14tal8bchn59o.cloudfront.net/pESdse2kiy4-pQC9w7HqhXGf06o-99BobtrwujixcIo/rs:fill:360:360:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374789/Testimonial-5_original.jpg",

  cta:
    "https://d14tal8bchn59o.cloudfront.net/CHtN7q4DWtPHAZwDIAxcVv-h8M1_pakHSx7aJ86Il5Q/s:322:225:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374779/website-cta_original.png",
};

const testimonials = [
  {
    id: "chris-p-review",
    name: "Chris P.",
    image: images.person1,
    quote:
      "I can't thank the team at Matthew enough for the amazing job they did on my website. They listened to my needs and created a site that perfectly reflects my brand and message. Plus, they were able to get it done in a short amount of time and at a price that was very reasonable. I highly recommend their services.",
  },
  {
    id: "samantha-h-review",
    name: "Samantha H",
    image: images.person2,
    quote:
      "I was hesitant to invest in a website for my small business, but I'm so glad I did! The team at Matthew was great to work with – they were knowledgeable, responsive, and patient with all of my questions. And the end result was a beautiful, professional website that has helped me reach a wider audience and increase my sales. I highly recommend their services.",
  },
  {
    id: "walter-d-review",
    name: "Walter D.",
    image: images.person3,
    quote:
      "I had a great experience working with this web design firm. They were able to take my vision for my website and turn it into a reality, all while being very professional and easy to work with. Plus, they were able to complete the project within my budget and timeline. I'm extremely satisfied with the end result and would highly recommend their services.",
  },
  {
    id: "heather-f-review",
    name: "Heather F.",
    image: images.person4,
    quote:
      "As a small business owner, I was looking for a web design firm that could deliver high-quality work at an affordable price. That's exactly what I found with Matthew. They were able to create a website that exceeded my expectations and helped me stand out in my industry. I'm so happy with the end result and would recommend them to anyone in need of a new website.",
  },
  {
    id: "james-p-review",
    name: "James P.",
    image: images.person5,
    quote:
      "I was in need of a new website for my small business, and I couldn't be happier with the result. The team at Matthew was able to create a site that was professional, user-friendly, and optimized for search engines. They were also very responsive and helpful throughout the process. I would highly recommend their services to any small business looking for a new website.",
  },
];

export default function TestimonialsPage() {
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

        .search-link {
          gap: 5px;
        }

        .testimonials-page-title {
          background: #f57c00;
          padding: 52px 20px 78px;
          text-align: center;
        }

        .testimonials-page-title h1 {
          margin: 0;
          color: #ffffff;
          font-size: 58px;
          line-height: 1.1;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .reviews-section {
          max-width: 1120px;
          margin: 0 auto;
          padding: 112px 24px 55px;
          scroll-margin-top: 30px;
        }

        .reviews-section h2 {
          text-align: center;
          color: #2f3135;
          font-size: clamp(38px, 5vw, 58px);
          line-height: 1.15;
          margin: 0 0 28px;
          font-weight: 800;
        }

        .reviews-intro {
          text-align: center;
          color: #444444;
          font-size: 22px;
          margin: 0 0 70px;
        }

        .testimonial {
          display: grid;
          grid-template-columns: 190px 1fr;
          gap: 36px;
          align-items: center;
          margin-bottom: 56px;
          scroll-margin-top: 30px;
        }

        .testimonial-image img {
          width: 190px;
          height: 190px;
          object-fit: cover;
          border-radius: 50%;
          display: block;
        }

        .stars {
          color: #f8bd2a;
          font-size: 32px;
          line-height: 1;
          letter-spacing: 3px;
          margin-bottom: 16px;
        }

        .testimonial-copy p {
          color: #444444;
          font-size: 23px;
          line-height: 1.25;
          margin: 0 0 18px;
        }

        .testimonial-name {
          color: #333333;
          font-size: 22px;
          font-weight: 800;
          margin: 0;
        }

        .testimonials-cta-parallax {
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

        .testimonials-cta-overlay h2 {
          color: #ffffff;
          font-size: clamp(36px, 5vw, 58px);
          line-height: 1.1;
          margin: 0 0 22px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .testimonials-cta-overlay p {
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

        @media (max-width: 900px) {
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

          .testimonials-page-title {
            padding: 44px 18px 62px;
          }

          .testimonials-page-title h1 {
            font-size: 48px;
          }

          .reviews-section {
            padding: 70px 20px 30px;
          }

          .testimonial {
            grid-template-columns: 150px 1fr;
            gap: 24px;
          }

          .testimonial-image img {
            width: 150px;
            height: 150px;
          }

          .testimonial-copy p {
            font-size: 20px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .testimonials-cta-parallax {
            background-attachment: scroll;
          }
        }

        @media (max-width: 620px) {
          .logo-wrap {
            padding: 24px 18px;
          }

          .testimonials-page-title {
            padding: 38px 18px;
          }

          .testimonials-page-title h1 {
            font-size: 42px;
          }

          .reviews-section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .testimonial {
            grid-template-columns: 1fr;
            text-align: center;
            justify-items: center;
            margin-bottom: 64px;
          }

          .testimonial-image img {
            width: 170px;
            height: 170px;
          }

          .stars {
            font-size: 30px;
          }

          .testimonial-copy p {
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

      <section className="testimonials-page-title" id="testimonials">
        <h1>Testimonials</h1>
      </section>

      <section className="reviews-section" id="five-star-reviews">
        <h2>Check Out Our Five Star Reviews</h2>
        <p className="reviews-intro">Here's what our customers have to say:</p>

        {testimonials.map((item) => (
          <article className="testimonial" id={item.id} key={item.name}>
            <div className="testimonial-image">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="testimonial-copy">
              <div className="stars">★★★★★</div>
              <p>"{item.quote}"</p>
              <h3 className="testimonial-name">— {item.name}</h3>
            </div>
          </article>
        ))}
      </section>

      <section className="testimonials-cta-parallax" id="free-website-mockup">
        <div className="testimonials-cta-overlay">
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
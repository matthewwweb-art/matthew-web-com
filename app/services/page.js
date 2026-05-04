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
  webDesign:
    "https://images.unsplash.com/photo-1678690832311-bb6e361989ca?ixid=M3w1NzQ5OTV8MHwxfGFsbHx8fHx8fHx8fDE3NjYxMjE4NzR8&ixlib=rb-4.1.0&utm_source=siteswan&utm_medium=referral&utm_campaign=api-credit&w=700&h=466&fit=crop",
  seo:
    "https://d14tal8bchn59o.cloudfront.net/majjx7BFBxABbFPF5WiFNI0Su4wbl3iWzm2qXCZ3QH0/rs:fill:700:466:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374756/carlos-muza-hpjSkU2UYSU-unsplash_original.jpg",
  social:
    "https://d14tal8bchn59o.cloudfront.net/00zkIMajaClvc7NjF7eUqUfyI-AxTmtdTh9e-ren3b8/rs:fill:700:466:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374758/social-media-ga48b08a6a_1920_original.jpg",
  reputation:
    "https://d14tal8bchn59o.cloudfront.net/TLBdrIYjj3FoxRZEhmLCqSIixwG7WfJyMiWqwZifbmA/rs:fill:700:466:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374747/Why-Reputation-Management-and-Online-Reviews-Are-Important-in-Business_original.jpg",
  branding:
    "https://d14tal8bchn59o.cloudfront.net/pgMD0JIgSDFD9UabLwpBLk36Ix770_6Zk3WFI1NAwt0/rs:fill:700:466:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374760/ux-indonesia-8mikJ83LmSQ-unsplash_original_original.webp",
  strategy:
    "https://d14tal8bchn59o.cloudfront.net/mkAlhjtU5Dc1wP848JoFdAptz-HSJtLbGkHWaC8CNIg/rs:fill:700:466:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374759/ux-indonesia-w00FkE6e8zE-unsplash_original_original.webp",
  cta:
    "https://d14tal8bchn59o.cloudfront.net/CHtN7q4DWtPHAZwDIAxcVv-h8M1_pakHSx7aJ86Il5Q/s:322:225:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374779/website-cta_original.png",
};

const services = [
  {
    id: "website-design",
    title: "Affordable Website Design",
    image: images.webDesign,
    reverse: false,
    paragraphs: [
      "At Matthew, we understand that your website is often the first point of contact with potential customers. That's why we offer affordable website design services that are tailored to your specific business goals and target audience. Our team of experienced designers will work with you to create a visually appealing and user-friendly website that effectively conveys your brand message and showcases your products or services in the best light possible.",
      "In addition to creating a beautiful and functional design, we also prioritize search engine optimization (SEO) to help your website rank highly in search results. We use best practices and the latest techniques to ensure that your website is easily discoverable by your target audience. We also offer ongoing support and maintenance to keep your website up-to-date and running smoothly. Whether you're starting from scratch or looking to revamp your existing website, we have the skills and expertise to help you succeed online.",
    ],
  },
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    image: images.seo,
    reverse: true,
    paragraphs: [
      "At Matthew, we offer comprehensive search engine optimization (SEO) services to help your business increase its online visibility and drive more qualified traffic to your website. Our team of experts has a deep understanding of how search engines work and what it takes to rank highly in search results. We use a data-driven approach to identify opportunities for improvement and implement strategies to help your website rank higher for relevant keywords.",
      "Our SEO services go beyond just on-page optimization. We also conduct thorough keyword research to identify the terms and phrases that your target audience is using to search for products or services like yours. We also have a strong focus on building high-quality backlinks to help improve your website's authority and credibility in the eyes of search engines. We offer regular reporting and analysis to track the progress of our efforts and make sure we are meeting your business goals. Let us help you improve your search engine rankings and drive more qualified traffic to your website.",
    ],
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    image: images.social,
    reverse: false,
    paragraphs: [
      "Social media has become an essential part of any comprehensive digital marketing strategy. Here at Matthew, we offer comprehensive social media management services to help businesses effectively reach and engage with their target audience on popular platforms like Facebook, Instagram, and Twitter. Our team of experts will work with you to develop a customized social media plan that aligns with your business goals and target audience.",
      "Our social media management services go beyond just posting updates. We also conduct thorough research to understand your target audience and create content that resonates with them. We use a variety of tactics, including paid advertising, to help maximize the reach of your content and drive more traffic to your website. We also offer regular reporting and analysis to track the progress of our efforts and make sure we are meeting your business goals. Let the experts at Matthew help you effectively leverage social media to grow your business.",
    ],
  },
  {
    id: "reputation-management",
    title: "Reputation Management",
    image: images.reputation,
    reverse: true,
    paragraphs: [
      "Your online reputation is an essential part of your overall brand image. At Matthew, we offer comprehensive reputation management services to help businesses protect and enhance their online reputation. Our team of experts will work with you to develop a customized strategy to address any negative reviews or comments and showcase the positive aspects of your business.",
      "Our reputation management services go beyond just monitoring and responding to online reviews. We also use a variety of tactics, including our smart review request form and social media promotion, to help shape the online conversation about your business. We work to promote positive content and push down negative content in search results. We also offer ongoing support to ensure that your online reputation continues to reflect the best aspects of your business. Let us help you protect and enhance your online reputation.",
    ],
  },
  {
    id: "branding-design",
    title: "Branding & Design",
    image: images.branding,
    reverse: false,
    paragraphs: [
      "Here at Matthew, we understand the importance of a strong brand in today's competitive market. Our branding services are designed to help businesses of all sizes establish and maintain a cohesive and consistent brand identity that resonates with their target audience. Our team of experts will work with you to understand your business goals and target audience, and develop a comprehensive branding strategy that includes everything from logo design to tone of voice.",
      "In addition to creating a strong visual identity, our branding services also include the development of brand guidelines to ensure that all of your marketing materials and communications are consistent with your brand. We also offer ongoing support to help you maintain and evolve your brand over time. Whether you're just starting out or looking to refresh your existing brand, we have the skills and expertise to help you succeed. Let us help you establish and maintain a strong, cohesive brand identity.",
    ],
  },
  {
    id: "digital-strategy",
    title: "Digital Strategy",
    image: images.strategy,
    reverse: true,
    paragraphs: [
      "We understand that a comprehensive digital marketing strategy is essential for businesses of all sizes here at Matthew. Our digital strategy services are designed to help businesses develop a clear and effective plan for reaching their target audience and achieving their business goals online. Our team of experts will work with you to understand your business, your target audience, and your goals, and develop a customized digital strategy that aligns with your specific needs.",
      "Our digital strategy services go beyond just developing a plan. We also offer ongoing support to help you implement and execute your digital strategy effectively. This may include a range of services, such as search engine optimization (SEO), pay-per-click (PPC) advertising, social media management, and email marketing. We offer regular reporting and analysis to track the progress of our efforts and make sure we are meeting your business goals. Let us help you develop and execute a comprehensive digital strategy that helps your business thrive online.",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />

      <section className="services-page-title" id="services">
        <h1>Services</h1>
      </section>

      <section className="services-list">
        {services.map((service) => (
          <div
            id={service.id}
            className={
              service.reverse ? "service-row service-row-reverse" : "service-row"
            }
            key={service.title}
          >
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>

            <div className="service-copy">
              <h2>{service.title}</h2>

              {service.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <Link href="/contact-us" className="btn-primary service-btn">
                Contact Us
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="services-cta-parallax" id="free-website-mockup">
        <div className="services-cta-overlay">
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
  <a
    href="https://www.facebook.com/profile.php?id=61585865428354"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    f
  </a>

  <a
    href="https://www.instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    ◎
  </a>

  <a
    href="https://biz.yelp.com/home/8nSjBZ9xpnEGgb5i4RAQrA"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Yelp"
  >
    y
  </a>

  <a
    href="https://www.google.com/maps/place/matthew-web/@44.835119,-69.805476,12z/data=!3m1!4b1!4m6!3m5!1s0xafa28749f39516d3:0xa868970605ad7855!8m2!3d44.835119!4d-69.805476!16s%2Fg%2F11ytxf9y2w?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Google Business Profile"
  >
    G
  </a>
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
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
  cta:
    "https://d14tal8bchn59o.cloudfront.net/CHtN7q4DWtPHAZwDIAxcVv-h8M1_pakHSx7aJ86Il5Q/s:322:225:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374779/website-cta_original.png",
};

const examples = [
  {
    id: "construction-example",
    src: "https://d14tal8bchn59o.cloudfront.net/6scI6nO3xDW_DmOVvCn0YaUilDpQjIH4Z43vdY4e3IE/w:400/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374796/best-construction-management-website-design-theme_original_original.webp",
    alt: "Construction website design example",
  },
  {
    id: "computer-repair-example",
    src: "https://d14tal8bchn59o.cloudfront.net/rcq32_OhBoXsaIOzLqHauduDjdgVXkt5WZYYZ_7z8n4/w:400/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374798/computer-repair-website-design-theme_original_original.webp",
    alt: "Computer repair website design example",
  },
  {
    id: "brewery-example",
    src: "https://d14tal8bchn59o.cloudfront.net/K-LaK-zSyceNlIJpjJ8cUYrrhopXLAnQoEx4WEpZajA/w:400/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374797/brewery-brewpub-website-design-theme_original_original.webp",
    alt: "Brewery website design example",
  },
  {
    id: "restaurant-example",
    src: "https://d14tal8bchn59o.cloudfront.net/8R41RcMzObxDKgUjJulfWiQmCR94pJjyIK72hdPtw5A/w:400/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374800/Indian-restaurant-website-design-theme_original_original.webp",
    alt: "Restaurant website design example",
  },
  {
    id: "contractor-example",
    src: "https://d14tal8bchn59o.cloudfront.net/1ccYLUNYFS2OPx3W3y3lgCVy63drRnkHyFx1QutTjxc/w:400/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374795/best-framing-contractor-website-design-theme_original_original.webp",
    alt: "Contractor website design example",
  },
  {
    id: "mobile-phone-repair-example",
    src: "https://d14tal8bchn59o.cloudfront.net/2o8vGrL0ek_rqPiQkJDWs8jytrNhd7vxnczi1JNViY0/w:400/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374729/mobile-phone-repair-website-design_original_original.webp",
    alt: "Mobile phone repair website design example",
  },
  {
    id: "it-services-example",
    src: "https://d14tal8bchn59o.cloudfront.net/muYItAtdEG7vc4-BO_5oAo2FitKKh_gOtBLX2oiitos/w:400/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374801/it-services-website-design-theme_original_original.webp",
    alt: "IT services website design example",
  },
  {
    id: "real-estate-example",
    src: "https://d14tal8bchn59o.cloudfront.net/U1JpJB0W6cLuuk7mJEsWfEQxm5RXwggoBuLev68Z9eI/w:400/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374735/real-estate-photography-website-design-theme-dark_original_original.webp",
    alt: "Real estate photography website design example",
  },
  {
    id: "dentistry-example",
    src: "https://d14tal8bchn59o.cloudfront.net/y9zTzhWucZMOCwXYhfXuTl5oYiieDbRmFk-rJodVMf8/w:400/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374803/pediatric-dentistry-website-design-theme_original_original.webp",
    alt: "Dentistry website design example",
  },
  {
    id: "kickboxing-example",
    src: "https://d14tal8bchn59o.cloudfront.net/-fW0f-FsYKam5Z9KX_OAJsQt4-_Uyjrfxla_u7IQp1E/w:400/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374802/kickboxing-studio-website-design-theme_original_original.webp",
    alt: "Kickboxing studio website design example",
  },
  {
    id: "speaker-example",
    src: "https://d14tal8bchn59o.cloudfront.net/T3777oRSvrgE5AUgS5eZ5Kh3HGirZFSFD1O9FJwSWRk/w:400/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374805/professional-speaker-website-design-theme_original_original.webp",
    alt: "Professional speaker website design example",
  },
  {
    id: "pilates-example",
    src: "https://d14tal8bchn59o.cloudfront.net/GvOvsOjWevjYpSH9pDSw3UpQhfiLFg8WBVXDemO5G4k/w:400/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374804/pilates-studio-website-design-theme_original_original.webp",
    alt: "Pilates studio website design example",
  },
];

export default function ExamplesPage() {
  return (
    <main>
      <SiteHeader />

      <section className="services-page-title" id="examples">
        <h1>Examples</h1>
      </section>

      <section className="examples-page-intro" id="website-examples">
        <div className="section-heading">
          <h2>Website Examples</h2>
          <p>
            Check out some samples of our high-quality work below to see what
            we're capable of.
          </p>
        </div>

        <div className="examples-grid" id="examples-gallery">
          {examples.map((example, index) => (
            <div
              className="example-card"
              id={example.id}
              key={`${example.src}-${index}`}
            >
              <img src={example.src} alt={example.alt} />
            </div>
          ))}
        </div>
      </section>

      <section className="services-cta-parallax" id="free-website-mockup">
        <div className="services-cta-overlay">
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
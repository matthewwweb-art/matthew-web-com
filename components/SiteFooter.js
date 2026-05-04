import Link from "next/link";

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

const googleBusinessLink =
  "https://www.google.com/maps/place/matthew-web/@44.835119,-69.805476,12z/data=!3m1!4b1!4m6!3m5!1s0xafa28749f39516d3:0xa868970605ad7855!8m2!3d44.835119!4d-69.805476!16s%2Fg%2F11ytxf9y2w?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D";

export default function SiteFooter() {
  return (
    <footer className="mw-footer">
      <div className="mw-footer-grid">
        <div>
          <h3>About Matthew</h3>

          <p>
            If you're searching for an affordable and reliable website designer
            near Madison, than look no further. At Matthew, we specialize in
            creating professional, functional, and affordable websites for small
            businesses.
          </p>

          <p>
            Whether you're across town or across the country, our team of
            experts will help you get your business online with a cost-friendly
            website that is visually appealing, user-friendly, and optimized for
            search engines. Contact us to request your FREE website demo.
          </p>

          <Link href="/privacy-policy">Privacy Policy</Link>

          <div className="mw-social-row">
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
              href={googleBusinessLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Business Profile"
            >
              G
            </a>
          </div>
        </div>

        <div>
          <p className="mw-footer-contact">
            📍{" "}
            <a
              href={googleBusinessLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              973 River Road Madison, ME 04950
            </a>
          </p>

          <p className="mw-footer-contact">
            📞 Phone <a href="tel:2076317793">(207) 631-7793</a>
          </p>

          <p className="mw-footer-contact">
            🕘 Monday - Friday: 9:00am - 5:00pm
            <br />
            Saturday - Sunday: Closed
          </p>

          <p className="mw-footer-note">
            Client walk-ins are not accepted at this location. Please contact us
            by phone, email, or website message.
          </p>
        </div>
      </div>

      <nav className="mw-footer-nav">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}

        <Link href="/search">🔍 Search</Link>
      </nav>

      <p className="mw-copyright">
        Copyright ©2026 Matthew. All Rights Reserved. Designed by Adam Matthew
        Charest
      </p>
    </footer>
  );
}
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

const logoUrl =
  "https://d14tal8bchn59o.cloudfront.net/pD8SMCm46GE9kXJfrsm-3pOgtGU_bUZ6M378zAftc-g/w:1920/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23501021/Screenshot_2025-12-19_174653_original.png";

export default function SiteHeader({ activePath = "/" }) {
  return (
    <header className="site-header">
      <div className="logo-wrap">
        <Link href="/" className="logo-link">
          <img src={logoUrl} alt="matthew-web logo" className="site-logo" />
        </Link>
      </div>

      <nav className="main-nav">
        <div className="nav-inner">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={link.href === activePath ? "nav-link active" : "nav-link"}
            >
              {link.label}
            </Link>
          ))}

          <Link href="/search" className="nav-link search-link">
            🔍 Search
          </Link>
        </div>
      </nav>
    </header>
  );
}
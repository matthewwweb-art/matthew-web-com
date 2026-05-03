"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

const logo =
  "https://d14tal8bchn59o.cloudfront.net/pD8SMCm46GE9kXJfrsm-3pOgtGU_bUZ6M378zAftc-g/w:1920/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23501021/Screenshot_2025-12-19_174653_original.png";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="mw-header">
      <div className="mw-logo-row">
        <Link href="/" onClick={closeMenu} className="mw-logo-link">
          <img src={logo} alt="matthew-web logo" className="mw-logo" />
        </Link>

        <button
          type="button"
          className={open ? "mw-menu-button open" : "mw-menu-button"}
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={open ? "mw-nav open" : "mw-nav"}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className={pathname === link.href ? "mw-nav-link active" : "mw-nav-link"}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/search"
          onClick={closeMenu}
          className={pathname === "/search" ? "mw-nav-link active" : "mw-nav-link"}
        >
          🔍 Search
        </Link>
      </nav>
    </header>
  );
}
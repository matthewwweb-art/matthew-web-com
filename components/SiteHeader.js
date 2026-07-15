"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Examples", href: "/examples" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact Us", href: "/contact-us" },
];

const serviceLinks = [
  { label: "All Services", href: "/services" },
  { label: "Website Design", href: "/website-design" },
  { label: "Custom Software", href: "/custom-software" },
  { label: "SEO and Indexing", href: "/seo-and-indexing" },
  { label: "Small Business Websites", href: "/small-business-websites" },
];

const projectLinks = [
  { label: "Free Game Hub Project", href: "/free-game-hub-project" },
  { label: "Code of Ethics", href: "/code-of-ethics" },
];

const logo =
  "https://d14tal8bchn59o.cloudfront.net/pD8SMCm46GE9kXJfrsm-3pOgtGU_bUZ6M378zAftc-g/w:1920/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23501021/Screenshot_2025-12-19_174653_original.png";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

  function closeMenu() {
    setOpen(false);
    setOpenDropdown("");
  }

  function toggleDropdown(name) {
    setOpenDropdown((current) => (current === name ? "" : name));
  }

  const serviceActive = serviceLinks.some((link) => link.href === pathname);
  const projectActive = projectLinks.some((link) => link.href === pathname);

  return (
    <header className="mw-header">
      <style>{`
        .mw-dropdown {
          position: relative;
          display: inline-flex;
          align-items: center;
        }

        .mw-dropdown-button {
          border: 0;
          cursor: pointer;
          font-family: inherit;
        }

        .mw-dropdown-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          z-index: 9999;
          min-width: 240px;
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.12);
          border-radius: 14px;
          box-shadow: 0 18px 38px rgba(0,0,0,0.18);
          padding: 10px;
          display: none;
        }

        .mw-dropdown.open .mw-dropdown-menu {
          display: grid;
          gap: 6px;
        }

        .mw-dropdown-item {
          display: block;
          color: #111827;
          text-decoration: none;
          font-size: 15px;
          font-weight: 800;
          padding: 11px 12px;
          border-radius: 10px;
          white-space: nowrap;
        }

        .mw-dropdown-item:hover,
        .mw-dropdown-item.active {
          background: #f57c00;
          color: #ffffff;
        }

        @media (max-width: 950px) {
          .mw-dropdown {
            width: 100%;
            display: block;
          }

          .mw-dropdown-button {
            width: 100%;
            text-align: center;
          }

          .mw-dropdown-menu {
            position: static;
            width: 100%;
            min-width: 0;
            margin-top: 8px;
            box-shadow: none;
            border-radius: 12px;
          }

          .mw-dropdown-item {
            text-align: center;
            white-space: normal;
          }
        }
      `}</style>

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
        <Link
          href="/"
          onClick={closeMenu}
          className={pathname === "/" ? "mw-nav-link active" : "mw-nav-link"}
        >
          Home
        </Link>

        <Link
          href="/about-us"
          onClick={closeMenu}
          className={
            pathname === "/about-us" ? "mw-nav-link active" : "mw-nav-link"
          }
        >
          About Us
        </Link>

        <div className={openDropdown === "services" ? "mw-dropdown open" : "mw-dropdown"}>
          <button
            type="button"
            onClick={() => toggleDropdown("services")}
            className={serviceActive ? "mw-nav-link mw-dropdown-button active" : "mw-nav-link mw-dropdown-button"}
            aria-expanded={openDropdown === "services"}
          >
            Services ▾
          </button>

          <div className="mw-dropdown-menu">
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={
                  pathname === link.href
                    ? "mw-dropdown-item active"
                    : "mw-dropdown-item"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className={openDropdown === "projects" ? "mw-dropdown open" : "mw-dropdown"}>
          <button
            type="button"
            onClick={() => toggleDropdown("projects")}
            className={projectActive ? "mw-nav-link mw-dropdown-button active" : "mw-nav-link mw-dropdown-button"}
            aria-expanded={openDropdown === "projects"}
          >
            Projects ▾
          </button>

          <div className="mw-dropdown-menu">
            {projectLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={
                  pathname === link.href
                    ? "mw-dropdown-item active"
                    : "mw-dropdown-item"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {mainLinks
          .filter((link) => link.href !== "/" && link.href !== "/about-us")
          .map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={
                pathname === link.href ? "mw-nav-link active" : "mw-nav-link"
              }
            >
              {link.label}
            </Link>
          ))}

        <Link
          href="/search"
          onClick={closeMenu}
          className={
            pathname === "/search" ? "mw-nav-link active" : "mw-nav-link"
          }
        >
          🔍 Search
        </Link>
      </nav>
    </header>
  );
}
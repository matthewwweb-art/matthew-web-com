"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  Users,
  Settings,
  Gamepad2,
  Image as ImageIcon,
  FileText,
  MessageCircle,
  Tag,
  Mail,
  Search,
  Heart,
  ChevronDown,
  LayoutGrid,
  Monitor,
  Code,
  BarChart3,
  Briefcase,
  Shield,
} from "lucide-react";

/*
  Exact Matthew Web emblem embedded directly into this component.
  No separate PNG file is required.
*/

const EXACT_MW_ICON =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACaCAMAAABi1HEYAAAAwFBMVEVjWR+XrKDvm2jm5d6bah/83aojUTBUc1mckmFniHJwlYsZYlLJvsP4+vnct6P8w1mPt9gdj7Sww7q4zMb29/b7/PvgfiF1suMgPRKZeFTgfFGrhT3WhCwEb4JNfoD+/v4APRrvgyIFfJ0ISCwCamz9xmz9tVYPQhv9qlD6+vkSh6vww679u2YGfaBOVB39t5RVOwH+0nb+0o79mXLQeiEsShv7yooqVTK2ciAKWUr8qYYgkbfVw7nN2NI2Zkywu89XIfssAAAAQHRSTlP////7////////////YP///////5ou////////////AP////////////7/////////////////////////////31z/rgAAEItJREFUeNrtnAtz2zgOgCVL0bN2WzvONre7VyV0ImsdO9vUsuKs5f7/f3UARVIkRb3c7mNuFjNtOmosfQZAAAQpWp//oWL9C/YvmC7TzHH+gWBLZ2Hbdpn948Ac20uS5DyXyK4zJ7v+28HsIkHxF+JKNg/9cJ79zWBzP03SXZIUNrtQ2r5HCCki528Fc3yS5NZrmhB7ikacR35BqAq9sPzbwLIsAwdLd/tf8jTx7bK0w7OXJnDFggvEp6x/MViWOSWOxpgkO/fuzgWOc+ifQVlpbrn7vbvDK7az/CvBsqws53aEHACSA9fdHjioUCy4cIdkiWc7078KDIJpaUdnwkCS1KIcr7s8TdMc3O2OyasFv0KicvpXgC1BWbZPEkk4yd61dkxZTPZWgmTOnw+GVGA9hSt179oFPC8521n254Jljh0WnkIFouhIlxs6JqLFOLRxYGjCWKfCSHHXJa/oZt45tJ3szwEDrLBoYLER2QOGjnaORqANB7sGLC9tYsGIvOsBy9lvAtrc+dFgziLyNCDiobP1GVICQ7ShpdFAMMexYxWLkNiPMGbsegypgCHafFC47QFb8hLmTDQsP/rw4QOYNu/lUsHgs+EQpQ3SmBOpzkVioPr27QPSWvt+MM0zMXv+CLBsoUR5NKH9DeRDRJIhCkMwNSCTor8Y6gdzbNmMgGVTrG/foljkyH4w8Ed57Hi+nX0nGOQfyRIF0xaIDUVrsnu9GwYWfbNhqKSyObPvAivDoo4PhR/YJ8c5nd6hwtCQMtfedbvA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";

const serviceLinks = [
  { label: "All Services", href: "/services", icon: LayoutGrid },
  { label: "Website Design", href: "/website-design", icon: Monitor },
  { label: "Custom Software", href: "/custom-software", icon: Code },
  { label: "SEO & Indexing", href: "/seo-and-indexing", icon: BarChart3 },
  {
    label: "Small Business Websites",
    href: "/small-business-websites",
    icon: Briefcase,
  },
];

const projectLinks = [
  {
    label: "Free Game Hub Project",
    href: "/free-game-hub-project",
    icon: Gamepad2,
  },
  { label: "Code of Ethics", href: "/code-of-ethics", icon: Shield },
  { label: "Privacy Policy", href: "/privacy-policy", icon: Shield },
  { label: "Terms of Use", href: "/terms", icon: FileText },
];

const standardLinks = [
  { label: "Examples", href: "/examples", icon: ImageIcon },
  { label: "Blog", href: "/blog", icon: FileText },
  { label: "Testimonials", href: "/testimonials", icon: MessageCircle },
  { label: "Pricing", href: "/pricing", icon: Tag },
  { label: "Contact Us", href: "/contact-us", icon: Mail },
];

const blueLetters = [..."matthew-"];
const orangeLetters = [..."web"];

export default function SiteHeader() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function closeEverything() {
    setMobileOpen(false);
    setDropdown("");
  }

  function toggleDropdown(name) {
    setDropdown((current) => (current === name ? "" : name));
  }

  useEffect(() => {
    setMobileOpen(false);
    setDropdown("");
  }, [pathname]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closeEverything();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const serviceActive = serviceLinks.some(
    (link) => pathname === link.href
  );

  const projectActive = projectLinks.some(
    (link) => pathname === link.href
  );

  return (
    <>

      <header
        className="mwx-header"
        style={{
          opacity: mounted ? 1 : 0,
          visibility: mounted ? "visible" : "hidden",
          transition: "opacity 0.12s ease",
        }}
      >
        <section className="mwx-hero">
          <div
            className="mwx-particles"
            aria-hidden="true"
          >
            <span className="mwx-particle mwx-p1" />
            <span className="mwx-particle orange mwx-p2" />
            <span className="mwx-particle mwx-p3" />
            <span className="mwx-particle orange mwx-p4" />
            <span className="mwx-particle mwx-p5" />
            <span className="mwx-particle orange mwx-p6" />
            <span className="mwx-particle mwx-p7" />
            <span className="mwx-particle orange mwx-p8" />
          </div>

          <div className="mwx-side left">
            <div>Ideas</div>
            <div>Technology</div>
            <div>Creativity</div>
            <div>Real Solutions</div>

            <div className="mwx-side-line" />
          </div>

          <Link
            href="/"
            className="mwx-brand"
            onClick={closeEverything}
            aria-label="Matthew Web home"
          >
            <div className="mwx-brand-main">
              <div className="mwx-emblem-stage">
                <div className="mwx-blue-fog" />
                <div className="mwx-smoke-extra" />

                <span className="mwx-energy orange" />
                <span className="mwx-energy blue" />

                <span className="mwx-color-stream orange" />
                <span className="mwx-color-stream blue" />

                <div className="mwx-emblem-window">
                  <img
                    src={EXACT_MW_ICON}
                    alt=""
                    className="mwx-emblem-piece top"
                    draggable="false"
                  />

                  <img
                    src={EXACT_MW_ICON}
                    alt=""
                    className="mwx-emblem-piece mid"
                    draggable="false"
                  />

                  <img
                    src={EXACT_MW_ICON}
                    alt=""
                    className="mwx-emblem-piece bottom"
                    draggable="false"
                  />

                  <img
                    src={EXACT_MW_ICON}
                    alt="Matthew Web emblem"
                    className="mwx-emblem-final"
                    draggable="false"
                  />
                </div>
              </div>

              <div
                className="mwx-wordmark"
                aria-label="matthew-web"
              >
                <span className="mwx-word-blue">
                  {blueLetters.map(
                    (letter, index) => (
                      <span
                        key={`blue-${index}`}
                        className="mwx-word-letter mwx-word-letter-blue"
                        style={{
                          animationDelay: `${
                            1.18 +
                            index * 0.065
                          }s`,
                        }}
                      >
                        {letter}
                      </span>
                    )
                  )}
                </span>

                <span className="mwx-word-orange">
                  {orangeLetters.map(
                    (letter, index) => (
                      <span
                        key={`orange-${index}`}
                        className="mwx-word-letter mwx-word-letter-orange"
                        style={{
                          animationDelay: `${
                            1.68 +
                            index * 0.09
                          }s`,
                        }}
                      >
                        {letter}
                      </span>
                    )
                  )}
                </span>
              </div>
            </div>

            <div className="mwx-tagline">
              WEB • SOFTWARE • GAMES • EDUCATION • HARDWARE
            </div>
          </Link>

          <div className="mwx-side right">
            <div>Building</div>
            <div>A Brighter</div>
            <div>Tomorrow</div>

            <div className="mwx-side-line" />
          </div>
        </section>

        <div className="mwx-mobile-bar">
          <div className="mwx-mobile-label">
            MATTHEW-
            <span>WEB</span>
          </div>

          <button
            type="button"
            className={
              mobileOpen
                ? "mwx-menu-button open"
                : "mwx-menu-button"
            }
            onClick={() =>
              setMobileOpen(
                (current) => !current
              )
            }
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div
          className={
            mobileOpen
              ? "mwx-nav-shell mobile-open"
              : "mwx-nav-shell"
          }
        >
          <nav
            className="mwx-nav"
            aria-label="Main navigation"
          >
            <Link
              href="/"
              onClick={closeEverything}
              className={
                pathname === "/"
                  ? "mwx-nav-link active"
                  : "mwx-nav-link"
              }
            >
              <Home />
              Home
            </Link>

            <Link
              href="/about-us"
              onClick={closeEverything}
              className={
                pathname === "/about-us"
                  ? "mwx-nav-link active"
                  : "mwx-nav-link"
              }
            >
              <Users />
              About Us
            </Link>

            <div
              className={
                dropdown === "services"
                  ? "mwx-dropdown open"
                  : "mwx-dropdown"
              }
            >
              <button
                type="button"
                onClick={() =>
                  toggleDropdown(
                    "services"
                  )
                }
                className={
                  serviceActive
                    ? "mwx-drop-button active"
                    : "mwx-drop-button"
                }
                aria-expanded={
                  dropdown ===
                  "services"
                }
              >
                <Settings />
                Services
                <ChevronDown className="mwx-chevron" />
              </button>

              <div className="mwx-dropdown-menu">
                {serviceLinks.map(
                  (link) => {
                    const Icon =
                      link.icon;

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeEverything}
                        className={
                          pathname ===
                          link.href
                            ? "mwx-dropdown-item active"
                            : "mwx-dropdown-item"
                        }
                      >
                        <Icon />
                        {link.label}
                      </Link>
                    );
                  }
                )}
              </div>
            </div>

            <div
              className={
                dropdown === "projects"
                  ? "mwx-dropdown open"
                  : "mwx-dropdown"
              }
            >
              <button
                type="button"
                onClick={() =>
                  toggleDropdown(
                    "projects"
                  )
                }
                className={
                  projectActive
                    ? "mwx-drop-button active"
                    : "mwx-drop-button"
                }
                aria-expanded={
                  dropdown ===
                  "projects"
                }
              >
                <Gamepad2 />
                Projects
                <ChevronDown className="mwx-chevron" />
              </button>

              <div className="mwx-dropdown-menu">
                {projectLinks.map(
                  (link) => {
                    const Icon =
                      link.icon;

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeEverything}
                        className={
                          pathname ===
                          link.href
                            ? "mwx-dropdown-item active"
                            : "mwx-dropdown-item"
                        }
                      >
                        <Icon />
                        {link.label}
                      </Link>
                    );
                  }
                )}
              </div>
            </div>

            {standardLinks.map(
              (link) => {
                const Icon =
                  link.icon;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeEverything}
                    className={
                      pathname ===
                      link.href
                        ? "mwx-nav-link active"
                        : "mwx-nav-link"
                    }
                  >
                    <Icon />
                    {link.label}
                  </Link>
                );
              }
            )}

            <div className="mwx-divider" />

            <Link
              href="/search"
              onClick={closeEverything}
              className={
                pathname === "/search"
                  ? "mwx-nav-link active"
                  : "mwx-nav-link"
              }
            >
              <Search />
              Search
            </Link>

            <div className="mwx-support-wrap">
              <Link
                href="https://buy.stripe.com/5kQeVf0IT9HX75w2YW8og0k"
                onClick={closeEverything}
                className="mwx-support"
              >
                <Heart />
                Support Us
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
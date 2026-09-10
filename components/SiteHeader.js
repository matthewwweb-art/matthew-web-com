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
      <style jsx global>{`
        :root {
          --mw-black: #020304;
          --mw-blue: #08b9f4;
          --mw-blue-light: #27ccff;
          --mw-orange: #ff7900;
          --mw-orange-light: #ff9c22;
        }

        .mwx-header {
          position: relative;
          z-index: 99999;
          width: 100%;
          color: white;
          background: var(--mw-black);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.5);
        }

        .mwx-hero {
          position: relative;
          min-height: 285px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 28px 30px;
          overflow: hidden;

          background:
            radial-gradient(
              circle at 27% 50%,
              rgba(0, 185, 244, 0.15),
              transparent 29%
            ),
            radial-gradient(
              circle at 72% 49%,
              rgba(255, 121, 0, 0.09),
              transparent 29%
            ),
            linear-gradient(
              180deg,
              #010203 0%,
              #020609 62%,
              #041018 100%
            );

          border-bottom: 1px solid rgba(39, 204, 255, 0.38);
        }

        .mwx-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.2;

          background-image:
            linear-gradient(
              90deg,
              transparent 49.7%,
              rgba(39, 204, 255, 0.09) 50%,
              transparent 50.3%
            ),
            linear-gradient(
              0deg,
              transparent 49.7%,
              rgba(39, 204, 255, 0.055) 50%,
              transparent 50.3%
            );

          background-size: 185px 185px;

          mask-image:
            linear-gradient(
              90deg,
              transparent,
              black 12%,
              black 88%,
              transparent
            );
        }

        .mwx-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .mwx-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--mw-blue);

          box-shadow:
            0 0 8px var(--mw-blue),
            0 0 18px rgba(8, 185, 244, 0.8);

          animation: mwxFloat 2.8s ease-in-out infinite alternate;
        }

        .mwx-particle.orange {
          background: var(--mw-orange);

          box-shadow:
            0 0 8px var(--mw-orange),
            0 0 18px rgba(255, 121, 0, 0.82);

          animation-duration: 3.05s;
        }

        .mwx-p1 {
          left: 4%;
          top: 20%;
        }

        .mwx-p2 {
          left: 17%;
          top: 75%;
          animation-delay: 0.25s;
        }

        .mwx-p3 {
          left: 35%;
          top: 14%;
          animation-delay: 0.55s;
        }

        .mwx-p4 {
          left: 62%;
          top: 12%;
          animation-delay: 0.15s;
        }

        .mwx-p5 {
          left: 81%;
          top: 72%;
          animation-delay: 0.7s;
        }

        .mwx-p6 {
          left: 95%;
          top: 28%;
          animation-delay: 0.35s;
        }

        .mwx-p7 {
          left: 2%;
          top: 83%;
          animation-delay: 0.85s;
        }

        .mwx-p8 {
          left: 75%;
          top: 22%;
          animation-delay: 0.45s;
        }

        @keyframes mwxFloat {
          0% {
            opacity: 0.18;
            transform:
              translateY(8px)
              translateX(-3px)
              scale(0.65);
          }

          45% {
            opacity: 1;
            transform:
              translateY(-4px)
              translateX(3px)
              scale(1.3);
          }

          100% {
            opacity: 0.5;
            transform:
              translateY(-17px)
              translateX(-2px)
              scale(0.9);
          }
        }

        .mwx-side {
          position: absolute;
          top: 50%;
          z-index: 5;
          transform: translateY(-50%);
          color: #a9bfd2;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.3em;
          line-height: 2.4;
          text-transform: uppercase;
          opacity: 0;
          animation: mwxSideIn 0.8s ease 1.75s forwards;
        }

        .mwx-side.left {
          left: 3%;
        }

        .mwx-side.right {
          right: 3%;
          text-align: right;
        }

        .mwx-side-line {
          width: 95px;
          height: 3px;
          margin-top: 10px;
          border-radius: 999px;

          background:
            linear-gradient(
              90deg,
              var(--mw-blue),
              var(--mw-orange)
            );
        }

        .mwx-side.right .mwx-side-line {
          margin-left: auto;
        }

        @keyframes mwxSideIn {
          from {
            opacity: 0;
            filter: blur(6px);
          }

          to {
            opacity: 1;
            filter: blur(0);
          }
        }

        .mwx-brand {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: white;
          text-decoration: none;
        }

        .mwx-brand-main {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 38px;
        }

        .mwx-emblem-stage {
          position: relative;
          width: 230px;
          height: 230px;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
        }

        .mwx-blue-fog {
          position: absolute;
          inset: -70px -100px -70px -100px;
          z-index: 0;
          pointer-events: none;
          border-radius: 50%;
          opacity: 0;

          background:
            radial-gradient(
              ellipse at 20% 45%,
              rgba(8, 185, 244, 0.42),
              transparent 29%
            ),
            radial-gradient(
              ellipse at 38% 60%,
              rgba(0, 142, 210, 0.35),
              transparent 34%
            ),
            radial-gradient(
              ellipse at 60% 45%,
              rgba(39, 204, 255, 0.31),
              transparent 31%
            ),
            radial-gradient(
              ellipse at 70% 67%,
              rgba(8, 185, 244, 0.27),
              transparent 29%
            ),
            radial-gradient(
              ellipse at 47% 27%,
              rgba(60, 216, 255, 0.22),
              transparent 27%
            ),
            radial-gradient(
              ellipse at 50% 52%,
              rgba(8, 185, 244, 0.2),
              transparent 53%
            );

          filter: blur(20px);

          animation:
            mwxFogAppear 1.25s ease 0.28s forwards,
            mwxFogDrift 4.7s ease-in-out 1.5s infinite alternate;
        }

        .mwx-blue-fog::before {
          content: "";
          position: absolute;
          width: 185px;
          height: 100px;
          left: -10px;
          top: 70px;
          border-radius: 50%;

          background:
            radial-gradient(
              ellipse,
              rgba(39, 204, 255, 0.32),
              rgba(8, 185, 244, 0.13) 42%,
              transparent 72%
            );

          filter: blur(18px);
          animation: mwxSmokeCloudOne 3.8s ease-in-out infinite alternate;
        }

        .mwx-blue-fog::after {
          content: "";
          position: absolute;
          width: 185px;
          height: 110px;
          right: -7px;
          bottom: 40px;
          border-radius: 50%;

          background:
            radial-gradient(
              ellipse,
              rgba(8, 185, 244, 0.3),
              rgba(39, 204, 255, 0.11) 43%,
              transparent 74%
            );

          filter: blur(20px);
          animation: mwxSmokeCloudTwo 4.2s ease-in-out infinite alternate;
        }

        .mwx-smoke-extra {
          position: absolute;
          width: 265px;
          height: 95px;
          z-index: 0;
          left: -18px;
          bottom: 18px;
          pointer-events: none;
          border-radius: 50%;
          opacity: 0;

          background:
            radial-gradient(
              ellipse,
              rgba(10, 169, 234, 0.23),
              rgba(8, 185, 244, 0.08) 48%,
              transparent 75%
            );

          filter: blur(18px);

          animation:
            mwxExtraSmokeIn 1.2s ease 0.7s forwards,
            mwxExtraSmokeMove 5s ease-in-out 1.8s infinite alternate;
        }

        @keyframes mwxFogAppear {
          from {
            opacity: 0;
            transform: scale(0.45);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes mwxFogDrift {
          from {
            transform:
              translateX(-12px)
              translateY(5px)
              scale(0.98);
          }

          to {
            transform:
              translateX(14px)
              translateY(-8px)
              scale(1.09);
          }
        }

        @keyframes mwxSmokeCloudOne {
          from {
            transform:
              translateX(-22px)
              translateY(7px)
              scale(0.82);

            opacity: 0.35;
          }

          to {
            transform:
              translateX(38px)
              translateY(-5px)
              scale(1.3);

            opacity: 0.92;
          }
        }

        @keyframes mwxSmokeCloudTwo {
          from {
            transform:
              translateX(24px)
              translateY(8px)
              scale(0.86);

            opacity: 0.35;
          }

          to {
            transform:
              translateX(-40px)
              translateY(-8px)
              scale(1.28);

            opacity: 0.88;
          }
        }

        @keyframes mwxExtraSmokeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 0.82;
          }
        }

        @keyframes mwxExtraSmokeMove {
          from {
            transform:
              translateX(-14px)
              translateY(4px)
              scaleX(0.9);
          }

          to {
            transform:
              translateX(25px)
              translateY(-7px)
              scaleX(1.2);
          }
        }

        .mwx-energy {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .mwx-energy.orange {
          width: 226px;
          height: 226px;
          z-index: 1;
          opacity: 0;

          background:
            repeating-conic-gradient(
              from 0deg,
              rgba(255, 121, 0, 1) 0deg,
              rgba(255, 121, 0, 1) 8deg,
              transparent 8deg,
              transparent 15deg,
              rgba(255, 165, 52, 0.95) 15deg,
              rgba(255, 165, 52, 0.95) 20deg,
              transparent 20deg,
              transparent 30deg
            );

          -webkit-mask:
            radial-gradient(
              farthest-side,
              transparent 0%,
              transparent 73%,
              #000 74%,
              #000 92%,
              transparent 93%
            );

          mask:
            radial-gradient(
              farthest-side,
              transparent 0%,
              transparent 73%,
              #000 74%,
              #000 92%,
              transparent 93%
            );

          filter:
            drop-shadow(0 0 10px rgba(255, 121, 0, 0.95))
            drop-shadow(0 0 28px rgba(255, 121, 0, 0.5));

          animation:
            mwxGearEntrance
              0.95s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.02s
              forwards,
            mwxSpinGear
              6.4s
              linear
              0.98s
              infinite
              reverse;
        }

        .mwx-energy.orange::before {
          content: "";
          position: absolute;
          inset: 18px;
          border-radius: 50%;
          border: 2px solid rgba(255, 170, 50, 0.45);

          box-shadow:
            inset 0 0 10px rgba(255, 121, 0, 0.14),
            0 0 10px rgba(255, 121, 0, 0.3);
        }

        .mwx-energy.blue {
          width: 192px;
          height: 192px;
          z-index: 2;
          opacity: 0;

          background:
            repeating-conic-gradient(
              from 0deg,
              rgba(8, 185, 244, 0.08) 0deg,
              rgba(8, 185, 244, 0.08) 6deg,
              rgba(39, 204, 255, 0.8) 7deg,
              rgba(39, 204, 255, 0.12) 11deg,
              transparent 18deg,
              transparent 26deg
            );

          -webkit-mask:
            radial-gradient(
              farthest-side,
              transparent 0%,
              transparent 67%,
              #000 68%,
              #000 86%,
              transparent 87%
            );

          mask:
            radial-gradient(
              farthest-side,
              transparent 0%,
              transparent 67%,
              #000 68%,
              #000 86%,
              transparent 87%
            );

          filter:
            drop-shadow(0 0 10px rgba(8, 185, 244, 0.98))
            drop-shadow(0 0 28px rgba(8, 185, 244, 0.5));

          animation:
            mwxDiscEntrance
              0.9s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.12s
              forwards,
            mwxSpinDisc
              4.6s
              linear
              1.02s
              infinite;
        }

        .mwx-energy.blue::before {
          content: "";
          position: absolute;
          inset: 15px;
          border-radius: 50%;
          border: 2px solid rgba(39, 204, 255, 0.54);

          box-shadow:
            0 0 10px rgba(39, 204, 255, 0.48),
            inset 0 0 12px rgba(39, 204, 255, 0.14);
        }

        .mwx-energy.blue::after {
          content: "";
          position: absolute;
          inset: 30px;
          border-radius: 50%;
          border: 1px solid rgba(180, 243, 255, 0.34);

          box-shadow:
            0 0 7px rgba(39, 204, 255, 0.25);
        }

        @keyframes mwxGearEntrance {
          from {
            opacity: 0;
            transform:
              scale(0.14)
              rotate(340deg);
          }

          to {
            opacity: 1;
            transform:
              scale(1)
              rotate(0);
          }
        }

        @keyframes mwxDiscEntrance {
          from {
            opacity: 0;
            transform:
              scale(0.18)
              rotate(-300deg);
          }

          to {
            opacity: 1;
            transform:
              scale(1)
              rotate(0);
          }
        }

        @keyframes mwxSpinGear {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes mwxSpinDisc {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .mwx-color-stream {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0;
        }

        .mwx-color-stream.blue {
          width: 198px;
          height: 198px;
          z-index: 3;

          background:
            conic-gradient(
              from 180deg,
              transparent 0deg 205deg,
              rgba(64, 220, 255, 0.96) 218deg 280deg,
              rgba(8, 185, 244, 0.2) 280deg 320deg,
              transparent 320deg 360deg
            );

          -webkit-mask:
            radial-gradient(
              farthest-side,
              transparent 0%,
              transparent 53%,
              #000 55%,
              #000 72%,
              transparent 74%
            );

          mask:
            radial-gradient(
              farthest-side,
              transparent 0%,
              transparent 53%,
              #000 55%,
              #000 72%,
              transparent 74%
            );

          filter:
            blur(3px)
            drop-shadow(0 0 14px rgba(39, 204, 255, 0.8));

          animation:
            mwxBlueStreamIn
              0.9s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.42s
              forwards;
        }

        .mwx-color-stream.orange {
          width: 230px;
          height: 230px;
          z-index: 2;

          background:
            conic-gradient(
              from 20deg,
              transparent 0deg 22deg,
              rgba(255, 170, 55, 0.96) 25deg 91deg,
              rgba(255, 121, 0, 0.2) 91deg 132deg,
              transparent 132deg 360deg
            );

          -webkit-mask:
            radial-gradient(
              farthest-side,
              transparent 0%,
              transparent 59%,
              #000 61%,
              #000 76%,
              transparent 78%
            );

          mask:
            radial-gradient(
              farthest-side,
              transparent 0%,
              transparent 59%,
              #000 61%,
              #000 76%,
              transparent 78%
            );

          filter:
            blur(4px)
            drop-shadow(0 0 14px rgba(255, 121, 0, 0.8));

          animation:
            mwxOrangeStreamIn
              1s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.48s
              forwards;
        }

        @keyframes mwxBlueStreamIn {
          0% {
            opacity: 0;
            transform:
              rotate(-190deg)
              scale(1.3);
            filter: blur(11px);
          }

          45% {
            opacity: 1;
            transform:
              rotate(-28deg)
              scale(1.03);
            filter: blur(3px);
          }

          100% {
            opacity: 0;
            transform:
              rotate(48deg)
              scale(0.48);
            filter: blur(1px);
          }
        }

        @keyframes mwxOrangeStreamIn {
          0% {
            opacity: 0;
            transform:
              rotate(200deg)
              scale(1.32);
            filter: blur(11px);
          }

          45% {
            opacity: 1;
            transform:
              rotate(32deg)
              scale(1.04);
            filter: blur(3px);
          }

          100% {
            opacity: 0;
            transform:
              rotate(-32deg)
              scale(0.5);
            filter: blur(1px);
          }
        }

        .mwx-emblem-window {
          position: relative;
          left: -2px;
          z-index: 4;
          width: 152px;
          height: 154px;
          transform: translateY(-4px);

          filter:
            drop-shadow(
              0 0 9px
              rgba(8, 185, 244, 0.18)
            );
        }

        .mwx-emblem-piece,
        .mwx-emblem-final {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          user-select: none;
          -webkit-user-drag: none;
        }

        .mwx-emblem-piece.top {
          clip-path: inset(0 0 58% 0);
          opacity: 0;
          transform-origin: 50% 60%;

          animation:
            mwxPieceTop
              0.95s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.84s
              forwards;
        }

        .mwx-emblem-piece.mid {
          clip-path: inset(27% 0 24% 0);
          opacity: 0;
          transform-origin: center;

          animation:
            mwxPieceMid
              1.05s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.96s
              forwards;
        }

        .mwx-emblem-piece.bottom {
          clip-path: inset(70% 0 0 0);
          opacity: 0;
          transform-origin: 50% 30%;

          animation:
            mwxPieceBottom
              0.9s
              cubic-bezier(0.16, 1, 0.3, 1)
              1.05s
              forwards;
        }

        .mwx-emblem-final {
          opacity: 0;
          animation:
            mwxFinalIcon
              0.3s
              ease
              1.36s
              forwards;
        }

        @keyframes mwxPieceTop {
          0% {
            opacity: 0;
            transform:
              scale(0.08)
              rotate(-340deg);
            filter: blur(11px);
          }

          65% {
            opacity: 1;
            transform:
              scale(1.09)
              rotate(8deg);
            filter: blur(0);
          }

          82% {
            transform:
              scale(0.97)
              rotate(-3deg);
          }

          100% {
            opacity: 1;
            transform:
              scale(1)
              rotate(0);
            filter: blur(0);
          }
        }

        @keyframes mwxPieceMid {
          0% {
            opacity: 0;
            transform:
              scale(0.1)
              rotate(360deg);
            filter: blur(11px);
          }

          65% {
            opacity: 1;
            transform:
              scale(1.08)
              rotate(-7deg);
            filter: blur(0);
          }

          82% {
            transform:
              scale(0.98)
              rotate(3deg);
          }

          100% {
            opacity: 1;
            transform:
              scale(1)
              rotate(0);
            filter: blur(0);
          }
        }

        @keyframes mwxPieceBottom {
          0% {
            opacity: 0;
            transform:
              translateY(28px)
              scale(0.2)
              rotate(-160deg);
            filter: blur(8px);
          }

          68% {
            opacity: 1;
            transform:
              translateY(-2px)
              scale(1.05)
              rotate(4deg);
            filter: blur(0);
          }

          100% {
            opacity: 1;
            transform:
              translateY(0)
              scale(1)
              rotate(0);
            filter: blur(0);
          }
        }

        @keyframes mwxFinalIcon {
          to {
            opacity: 1;
          }
        }

        .mwx-wordmark {
          display: flex;
          align-items: baseline;
          white-space: nowrap;
          line-height: 0.92;
          font-family: Arial, Helvetica, sans-serif;

          font-size:
            clamp(
              56px,
              5.6vw,
              94px
            );

          font-weight: 900;
          letter-spacing: -0.058em;
        }

        .mwx-word-blue,
        .mwx-word-orange {
          display: inline-flex;
          align-items: baseline;
        }

        .mwx-word-letter {
          display: inline-block;
          opacity: 0;
          transform-origin: center center;
          backface-visibility: hidden;
          will-change:
            transform,
            opacity,
            filter;
        }

        .mwx-word-letter-blue {
          color: transparent;

          background-image:
            linear-gradient(
              180deg,
              #35dcff 0%,
              #08b9f4 48%,
              #0085bd 100%
            );

          -webkit-background-clip: text;
          background-clip: text;

          filter:
            drop-shadow(
              0 0 7px
              rgba(8, 185, 244, 0.6)
            );

          animation:
            mwxBlueLetterIn
              0.82s
              cubic-bezier(0.16, 1, 0.3, 1)
              forwards;
        }

        .mwx-word-letter-orange {
          color: transparent;

          background-image:
            linear-gradient(
              180deg,
              #ffb53b 0%,
              #ff7900 48%,
              #e45b00 100%
            );

          -webkit-background-clip: text;
          background-clip: text;

          filter:
            drop-shadow(
              0 0 7px
              rgba(255, 121, 0, 0.65)
            );

          animation:
            mwxOrangeLetterIn
              0.88s
              cubic-bezier(0.16, 1, 0.3, 1)
              forwards;
        }

        @keyframes mwxBlueLetterIn {
          0% {
            opacity: 0;

            transform:
              translateX(-55px)
              translateY(-25px)
              rotate(-300deg)
              scale(0.08);

            filter:
              blur(14px)
              brightness(2);
          }

          48% {
            opacity: 0.92;

            transform:
              translateX(8px)
              translateY(4px)
              rotate(24deg)
              scale(1.17);

            filter:
              blur(1px)
              brightness(1.35);
          }

          72% {
            opacity: 1;

            transform:
              translateX(-3px)
              translateY(-1px)
              rotate(-8deg)
              scale(0.96);

            filter:
              blur(0)
              brightness(1.05);
          }

          100% {
            opacity: 1;

            transform:
              translateX(0)
              translateY(0)
              rotate(0)
              scale(1);

            filter:
              blur(0)
              brightness(1);
          }
        }

        @keyframes mwxOrangeLetterIn {
          0% {
            opacity: 0;

            transform:
              translateX(55px)
              translateY(-24px)
              rotate(300deg)
              scale(0.08);

            filter:
              blur(14px)
              brightness(2);
          }

          48% {
            opacity: 0.92;

            transform:
              translateX(-8px)
              translateY(4px)
              rotate(-24deg)
              scale(1.17);

            filter:
              blur(1px)
              brightness(1.35);
          }

          72% {
            opacity: 1;

            transform:
              translateX(3px)
              translateY(-1px)
              rotate(8deg)
              scale(0.96);

            filter:
              blur(0)
              brightness(1.05);
          }

          100% {
            opacity: 1;

            transform:
              translateX(0)
              translateY(0)
              rotate(0)
              scale(1);

            filter:
              blur(0)
              brightness(1);
          }
        }

        .mwx-tagline {
          margin-top: 15px;
          margin-left: 250px;
          color: #d8e3eb;

          font-size:
            clamp(
              9px,
              1.1vw,
              16px
            );

          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          white-space: nowrap;
          opacity: 0;
          animation: mwxTagIn 0.7s ease 2.1s forwards;
        }

        @keyframes mwxTagIn {
          from {
            opacity: 0;
            transform: translateY(10px);
            filter: blur(5px);
          }

          to {
            opacity: 1;
            transform: none;
            filter: none;
          }
        }

        .mwx-mobile-bar {
          display: none;
        }

        .mwx-nav-shell {
          position: relative;
          z-index: 100;
          width: 100%;

          background:
            linear-gradient(
              180deg,
              rgba(7, 12, 16, 0.995),
              rgba(2, 4, 6, 0.995)
            );

          border-bottom:
            1px solid
            rgba(255, 255, 255, 0.09);

          box-shadow:
            0 16px 36px
            rgba(0, 0, 0, 0.4);

          opacity: 0;
          animation: mwxNavIn 0.65s ease 2.35s forwards;
        }

        @keyframes mwxNavIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }

          to {
            opacity: 1;
            transform: none;
          }
        }

        .mwx-nav {
          display: flex;
          align-items: stretch;
          justify-content: center;
          flex-wrap: nowrap;
          width: 100%;
          max-width: 1700px;
          margin: 0 auto;
          padding: 0 10px;
          min-height: 72px;
        }

        .mwx-nav-link,
        .mwx-drop-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          min-height: 72px;

          padding:
            0
            clamp(
              8px,
              1vw,
              17px
            );

          border: 0;
          background: transparent;
          color: white;
          text-decoration: none;
          font: inherit;

          font-size:
            clamp(
              12px,
              0.95vw,
              15px
            );

          font-weight: 760;
          white-space: nowrap;
          cursor: pointer;

          transition:
            background 0.2s ease,
            color 0.2s ease,
            transform 0.2s ease;
        }

        .mwx-nav-link svg,
        .mwx-drop-button svg {
          width:
            clamp(
              17px,
              1.35vw,
              22px
            );

          height:
            clamp(
              17px,
              1.35vw,
              22px
            );

          color: var(--mw-blue-light);
          stroke-width: 2.5;
          flex: 0 0 auto;

          filter:
            drop-shadow(
              0 0 4px
              rgba(39, 204, 255, 0.25)
            );
        }

        .mwx-nav-link::after,
        .mwx-drop-button::after {
          content: "";
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 0;
          height: 4px;
          border-radius: 10px 10px 0 0;

          background:
            linear-gradient(
              90deg,
              var(--mw-orange),
              var(--mw-orange-light)
            );

          box-shadow:
            0 0 12px
            rgba(255, 121, 0, 0.7);

          transform: scaleX(0);
          transition: transform 0.2s ease;
        }

        .mwx-nav-link:hover,
        .mwx-drop-button:hover {
          background:
            linear-gradient(
              180deg,
              rgba(8, 185, 244, 0.09),
              rgba(8, 185, 244, 0.025)
            );

          transform: translateY(-1px);
        }

        .mwx-nav-link:hover::after,
        .mwx-drop-button:hover::after {
          transform: scaleX(0.72);
        }

        .mwx-nav-link.active,
        .mwx-drop-button.active {
          color: #ff8c12;
        }

        .mwx-nav-link.active svg,
        .mwx-drop-button.active svg {
          color: #ff8c12;
        }

        .mwx-nav-link.active::after,
        .mwx-drop-button.active::after {
          transform: scaleX(1);
        }

        .mwx-dropdown {
          position: relative;
          display: flex;
        }

        .mwx-dropdown-menu {
          position: absolute;
          top: calc(100% - 2px);
          left: 50%;
          z-index: 9999;
          min-width: 285px;
          padding: 9px;

          border:
            1px solid
            rgba(39, 204, 255, 0.3);

          border-radius: 12px;

          background:
            linear-gradient(
              145deg,
              rgba(12, 18, 23, 0.995),
              rgba(4, 7, 9, 0.995)
            );

          box-shadow:
            0 22px 50px
              rgba(0, 0, 0, 0.7),
            0 0 17px
              rgba(8, 185, 244, 0.12);

          opacity: 0;
          visibility: hidden;
          pointer-events: none;

          transform:
            translate(-50%, -8px)
            scale(0.97);

          transform-origin: top center;

          transition:
            opacity 0.18s ease,
            transform 0.18s ease,
            visibility 0.18s ease;
        }

        .mwx-dropdown-menu::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 2px;
          border-radius: 10px 10px 0 0;

          background:
            linear-gradient(
              90deg,
              var(--mw-blue),
              var(--mw-orange)
            );
        }

        .mwx-dropdown.open
          .mwx-dropdown-menu {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;

          transform:
            translate(-50%, 0)
            scale(1);
        }

        .mwx-dropdown-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 14px;
          border-radius: 8px;
          color: #edf8fd;
          text-decoration: none;
          font-size: 14px;
          font-weight: 650;

          transition:
            background 0.18s ease,
            transform 0.18s ease;
        }

        .mwx-dropdown-item svg {
          width: 20px;
          height: 20px;
          color: var(--mw-blue-light);
          stroke-width: 2.5;
        }

        .mwx-dropdown-item:hover {
          background:
            rgba(
              8,
              185,
              244,
              0.15
            );

          transform:
            translateX(4px);
        }

        .mwx-dropdown-item.active {
          background:
            linear-gradient(
              90deg,
              rgba(255, 121, 0, 0.9),
              rgba(255, 156, 34, 0.78)
            );

          color: white;
        }

        .mwx-dropdown-item.active svg {
          color: white;
        }

        .mwx-chevron {
          width: 15px !important;
          height: 15px !important;
          transition: transform 0.2s ease;
        }

        .mwx-dropdown.open
          .mwx-chevron {
          transform: rotate(180deg);
        }

        .mwx-divider {
          width: 1px;
          margin: 17px 5px;

          background:
            rgba(
              255,
              255,
              255,
              0.15
            );
        }

        .mwx-support-wrap {
          display: flex;
          align-items: center;
          padding: 9px 2px 9px 7px;
        }

        .mwx-support {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 50px;

          padding:
            0
            clamp(
              14px,
              1.1vw,
              20px
            );

          border: 1px solid #ffad30;
          border-radius: 10px;

          background:
            linear-gradient(
              180deg,
              #ff981b,
              #ff7100
            );

          color: white;

          font-size:
            clamp(
              12px,
              0.9vw,
              15px
            );

          font-weight: 850;
          white-space: nowrap;
          text-decoration: none;

          box-shadow:
            0 0 12px rgba(255, 121, 0, 0.65),
            0 0 28px rgba(255, 121, 0, 0.32),
            inset 0 1px 0 rgba(255, 255, 255, 0.32);

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .mwx-support svg {
          width: 20px;
          height: 20px;
          color: white;
          fill: white;
        }

        .mwx-support:hover {
          transform:
            translateY(-2px)
            scale(1.025);

          box-shadow:
            0 0 18px rgba(255, 121, 0, 0.8),
            0 0 38px rgba(255, 121, 0, 0.42);
        }

        .mwx-menu-button {
          width: 48px;
          height: 44px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;

          border:
            1px solid
            rgba(255, 255, 255, 0.14);

          border-radius: 10px;
          background: #0b1015;
          cursor: pointer;
        }

        .mwx-menu-button span {
          width: 23px;
          height: 2px;
          border-radius: 20px;
          background: white;

          transition:
            transform 0.25s ease,
            opacity 0.25s ease,
            background 0.25s ease;
        }

        .mwx-menu-button.open
          span:nth-child(1) {
          transform:
            translateY(8px)
            rotate(45deg);

          background:
            var(--mw-orange);
        }

        .mwx-menu-button.open
          span:nth-child(2) {
          opacity: 0;
        }

        .mwx-menu-button.open
          span:nth-child(3) {
          transform:
            translateY(-8px)
            rotate(-45deg);

          background:
            var(--mw-orange);
        }

        @media (max-width: 1400px) {
          .mwx-side {
            font-size: 9px;
            letter-spacing: 0.22em;
          }

          .mwx-side-line {
            width: 72px;
          }

          .mwx-nav-link,
          .mwx-drop-button {
            padding: 0 8px;
            font-size: 12px;
            gap: 5px;
          }

          .mwx-nav-link svg,
          .mwx-drop-button svg {
            width: 18px;
            height: 18px;
          }

          .mwx-support {
            padding: 0 13px;
            font-size: 13px;
          }
        }

        @media (max-width: 1120px) {
          .mwx-side {
            display: none;
          }

          .mwx-hero {
            min-height: 230px;
          }

          .mwx-brand-main {
            gap: 24px;
          }

          .mwx-emblem-stage {
            width: 170px;
            height: 170px;
          }

          .mwx-emblem-window {
            width: 112px;
            height: 113px;
          }

          .mwx-energy.orange {
            width: 170px;
            height: 170px;
          }

          .mwx-energy.blue {
            width: 145px;
            height: 145px;
          }

          .mwx-color-stream.orange {
            width: 174px;
            height: 174px;
          }

          .mwx-color-stream.blue {
            width: 150px;
            height: 150px;
          }

          .mwx-wordmark {
            font-size:
              clamp(
                43px,
                6vw,
                67px
              );
          }

          .mwx-tagline {
            margin-left: 190px;
            letter-spacing: 0.19em;
          }
        }

        @media (max-width: 980px) {
          .mwx-mobile-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-height: 64px;
            padding: 10px 16px;

            background:
              linear-gradient(
                180deg,
                #080c0f,
                #030506
              );

            border-bottom:
              1px solid
              rgba(
                255,
                255,
                255,
                0.08
              );
          }

          .mwx-mobile-label {
            font-size: 15px;
            font-weight: 900;
            letter-spacing: 0.07em;
          }

          .mwx-mobile-label span {
            color: var(--mw-orange);
          }

          .mwx-nav-shell {
            display: none;
            opacity: 1;
            animation: none;
          }

          .mwx-nav-shell.mobile-open {
            display: block;
            animation:
              mwxMobileNav
              0.24s ease
              forwards;
          }

          @keyframes mwxMobileNav {
            from {
              opacity: 0;
              transform: translateY(-8px);
            }

            to {
              opacity: 1;
              transform: none;
            }
          }

          .mwx-nav {
            display: grid;
            grid-template-columns: 1fr;
            min-height: 0;
            padding: 10px 14px 18px;
          }

          .mwx-nav-link,
          .mwx-drop-button {
            width: 100%;
            min-height: 52px;
            justify-content: flex-start;
            padding: 0 18px;
            font-size: 15px;
            border-radius: 8px;
          }

          .mwx-dropdown {
            display: block;
            width: 100%;
          }

          .mwx-dropdown-menu {
            position: static;
            display: none;
            width: 100%;
            min-width: 0;
            margin: 4px 0 7px;
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            transform: none;
          }

          .mwx-dropdown.open
            .mwx-dropdown-menu {
            display: block;
            transform: none;
          }

          .mwx-divider {
            width: 100%;
            height: 1px;
            margin: 8px 0;
          }

          .mwx-support-wrap {
            width: 100%;
            padding: 8px 0 0;
          }

          .mwx-support {
            width: 100%;
            min-height: 54px;
          }
        }

        @media (max-width: 720px) {
          .mwx-hero {
            min-height: 185px;
            padding: 18px 10px;
          }

          .mwx-brand-main {
            gap: 10px;
          }

          .mwx-emblem-stage {
            width: 108px;
            height: 108px;
          }

          .mwx-emblem-window {
            width: 72px;
            height: 73px;
          }

          .mwx-energy.orange {
            width: 108px;
            height: 108px;
          }

          .mwx-energy.blue {
            width: 92px;
            height: 92px;
          }

          .mwx-color-stream.orange {
            width: 112px;
            height: 112px;
          }

          .mwx-color-stream.blue {
            width: 96px;
            height: 96px;
          }

          .mwx-blue-fog {
            inset: -35px -42px;
          }

          .mwx-smoke-extra {
            width: 135px;
            height: 55px;
            left: -14px;
          }

          .mwx-wordmark {
            font-size:
              clamp(
                30px,
                8.5vw,
                45px
              );
          }

          .mwx-tagline {
            margin-left: 118px;
            margin-top: 10px;
            font-size: 7px;
            letter-spacing: 0.12em;
          }
        }

        @media (max-width: 510px) {
          .mwx-hero {
            min-height: 158px;
          }

          .mwx-emblem-stage {
            width: 88px;
            height: 88px;
          }

          .mwx-emblem-window {
            width: 58px;
            height: 59px;

            /* PHONE ONLY:
               moves MW emblem down and right
               without changing laptop or tablet */
            left: -0.5px;
            transform: translateY(-1.5px);
          }

          .mwx-energy.orange {
            width: 88px;
            height: 88px;
          }

          .mwx-energy.blue {
            width: 74px;
            height: 74px;
          }

          .mwx-color-stream.orange {
            width: 90px;
            height: 90px;
          }

          .mwx-color-stream.blue {
            width: 78px;
            height: 78px;
          }

          .mwx-wordmark {
            font-size:
              clamp(
                25px,
                8vw,
                35px
              );
          }

          .mwx-tagline {
            margin-left: 96px;
            font-size: 5.8px;
            letter-spacing: 0.07em;
          }
        }

        @media (
          prefers-reduced-motion:
          reduce
        ) {
          .mwx-particle,
          .mwx-energy,
          .mwx-blue-fog,
          .mwx-smoke-extra,
          .mwx-color-stream,
          .mwx-emblem-piece,
          .mwx-emblem-final,
          .mwx-word-letter,
          .mwx-tagline,
          .mwx-side,
          .mwx-nav-shell {
            animation:
              none !important;

            opacity:
              1 !important;

            transform:
              none !important;

            filter:
              none !important;
          }
        }
      `}</style>

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
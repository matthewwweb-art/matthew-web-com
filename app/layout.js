import "./globals.css";
import Script from "next/script";
import ImageLightbox from "@/components/ImageLightbox";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

/* ============================================================
   MATTHEW WEB — GLOBAL METADATA FOUNDATION

   IMPORTANT:
   - Individual public pages should define their own canonical URL.
   - Do NOT place a homepage canonical here globally.
   - Page-specific titles/descriptions override these defaults.
============================================================ */

export const metadata = {
  metadataBase: new URL("https://matthew-web.com"),

  applicationName: "Matthew Web",

  title: {
    default:
      "Affordable Website Design & Custom Software Coding | Matthew Web",
    template: "%s | Matthew Web",
  },

  description:
    "Matthew Web builds affordable small-business websites, SEO-ready pages, custom software, CRM dashboards, lead forms, integrations, and business automation for clients in Maine and across the United States.",

  keywords: [
    "Matthew Web",
    "matthew-web",
    "affordable website design",
    "small business websites",
    "custom software development",
    "custom website coding",
    "custom CRM development",
    "CRM dashboards",
    "business dashboards",
    "lead forms",
    "business automation",
    "website integrations",
    "SEO website design",
    "Google indexing help",
    "website indexing",
    "web designer for small business",
    "custom code for business",
    "remote website design services",
    "Maine website designer",
    "Maine web designer",
  ],

  authors: [
    {
      name: "Adam Matthew Charest",
    },
  ],

  creator: "Adam Matthew Charest",

  publisher: "Matthew Web",

  /* ==========================================================
     SEARCH ENGINE VERIFICATION
  ========================================================== */

  verification: {
    google:
      "P4hEKwe7pRsMn2kYuOQzHjSk8vFiu7bkoifMpSmUl_c",

    other: {
      "msvalidate.01":
        "F82B7759D5310D537004D976955519D3",
    },
  },

  /* ==========================================================
     OPEN GRAPH DEFAULTS
  ========================================================== */

  openGraph: {
    title:
      "Affordable Website Design & Custom Software Coding | Matthew Web",

    description:
      "Matthew Web builds small-business websites, SEO-ready pages, custom software, CRM dashboards, lead forms, integrations, and business automation.",

    url: "https://matthew-web.com",

    siteName: "Matthew Web",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/apple-touch-icon.png",
        alt: "Matthew Web",
      },
    ],
  },

  /* ==========================================================
     TWITTER / SOCIAL DEFAULTS
  ========================================================== */

  twitter: {
    card: "summary_large_image",

    title:
      "Affordable Website Design & Custom Software Coding | Matthew Web",

    description:
      "Websites, custom software, CRM dashboards, lead forms, integrations, and business automation from Matthew Web.",

    images: [
      "/apple-touch-icon.png",
    ],
  },

  /* ==========================================================
     SITE ICONS
  ========================================================== */

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },

      {
        url: "/favicon-48x48.png",
        type: "image/png",
        sizes: "48x48",
      },

      {
        url: "/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
    ],

    shortcut: "/favicon.ico",

    apple: "/apple-touch-icon.png",
  },
};

/* ============================================================
   SITE-WIDE STRUCTURED DATA

   This establishes Matthew Web as the organization behind
   the website without exposing a private operating address.
============================================================ */

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://matthew-web.com/#organization",

  name: "Matthew Web",

  url: "https://matthew-web.com",

  logo: {
    "@type": "ImageObject",
    url: "https://matthew-web.com/apple-touch-icon.png",
  },

  founder: {
    "@type": "Person",
    name: "Adam Matthew Charest",
  },

  description:
    "Matthew Web is a founder-led Maine technology business providing website design, custom software, business technology services, educational technology, game development, and computer hardware research and development.",

  areaServed: [
    {
      "@type": "State",
      name: "Maine",
    },
    {
      "@type": "Country",
      name: "United States",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://matthew-web.com/#website",

  url: "https://matthew-web.com",

  name: "Matthew Web",

  publisher: {
    "@id": "https://matthew-web.com/#organization",
  },

  inLanguage: "en-US",
};

/* ============================================================
   ROOT LAYOUT
============================================================ */

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        {/* ====================================================
            GLOBAL ORGANIZATION STRUCTURED DATA
        ==================================================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              organizationSchema
            ),
          }}
        />

        {/* ====================================================
            GLOBAL WEBSITE STRUCTURED DATA
        ==================================================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              websiteSchema
            ),
          }}
        />

        {/* ====================================================
            GOOGLE ANALYTICS
        ==================================================== */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4HBVKXBRL2"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer =
              window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            window.gtag = gtag;

            gtag(
              "js",
              new Date()
            );

            gtag(
              "config",
              "G-4HBVKXBRL2"
            );
          `}
        </Script>

        {/* ====================================================
            WEBSITE CONTENT
        ==================================================== */}

        {children}

        {/* ====================================================
            GLOBAL SITE FEATURES
        ==================================================== */}

        <ImageLightbox />

        <Analytics />

        <SpeedInsights />
      </body>
    </html>
  );
}
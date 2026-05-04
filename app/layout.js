import "./globals.css";
import Script from "next/script";
import ImageLightbox from "@/components/ImageLightbox";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  metadataBase: new URL("https://matthew-web.com"),
  title: {
    default: "Affordable Website Design & Custom Software Coding | matthew-web",
    template: "%s | matthew-web",
  },
  description:
    "matthew-web builds affordable websites, SEO-ready pages, custom software, CRM dashboards, lead forms, AI tools, and business automation for small businesses across the United States.",
  keywords: [
    "matthew-web",
    "Matthew Web",
    "affordable website design",
    "website design United States",
    "nationwide website design",
    "small business websites",
    "custom software coding",
    "custom website coding",
    "custom CRM development",
    "CRM dashboards",
    "business dashboards",
    "lead forms",
    "AI tools for business",
    "business automation tools",
    "SEO website design",
    "Google indexing help",
    "website indexing",
    "digital agency",
    "web designer for small business",
    "custom code for business",
    "remote website design services",
    "website designer Maine",
    "Maine web designer",
  ],
  alternates: {
    canonical: "https://matthew-web.com",
  },
  openGraph: {
    title: "Affordable Website Design & Custom Software Coding | matthew-web",
    description:
      "matthew-web builds affordable websites, SEO-ready pages, custom software, CRM dashboards, lead forms, AI tools, and business automation for small businesses across the United States.",
    url: "https://matthew-web.com",
    siteName: "matthew-web",
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 1200,
        height: 630,
        alt: "matthew-web",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Website Design & Custom Software Coding | matthew-web",
    description:
      "Affordable websites, SEO-ready pages, custom software, CRM dashboards, lead forms, AI tools, and business automation for small businesses across the United States.",
    images: ["/apple-touch-icon.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="P4hEKwe7pRsMn2kYuOQzHjSk8vFiu7bkoifMpSmUl_c"
        />

        <meta
          name="google-adsense-account"
          content="ca-pub-3247864013895587"
        />

        <meta
          name="msvalidate.01"
          content="F82B7759D5310D537004D976955519D3"
        />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicon-48x48.png"
          type="image/png"
          sizes="48x48"
        />
        <link
          rel="icon"
          href="/favicon-96x96.png"
          type="image/png"
          sizes="96x96"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>

      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4HBVKXBRL2"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-4HBVKXBRL2');
          `}
        </Script>

        {children}
        <ImageLightbox />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
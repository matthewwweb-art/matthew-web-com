import "./globals.css";
import Script from "next/script";
import ImageLightbox from "@/components/ImageLightbox";

export const metadata = {
  metadataBase: new URL("https://matthew-web.com"),
  title: {
    default: "matthew-web | Website Design & Custom Software Coding",
    template: "%s | matthew-web",
  },
  description:
    "Affordable website design, SEO, Google indexing help, custom software coding, CRM dashboards, AI tools, lead forms, and digital services for small businesses across the United States.",
  keywords: [
    "matthew-web",
    "Matthew Web",
    "website design",
    "website design United States",
    "affordable website design",
    "small business websites",
    "custom software coding",
    "custom website coding",
    "custom CRM",
    "business dashboards",
    "AI tools for business",
    "SEO website design",
    "Google indexing help",
    "website indexing",
    "digital agency",
    "web designer for small business",
    "custom code for business",
    "lead form website",
    "business automation tools",
    "website designer Maine",
    "Maine web designer",
  ],
  alternates: {
    canonical: "https://matthew-web.com",
  },
  openGraph: {
    title: "matthew-web | Website Design & Custom Software Coding",
    description:
      "High-quality, affordable websites, SEO help, Google indexing, custom software coding, CRM dashboards, AI tools, and digital services for small businesses across the United States.",
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
    title: "matthew-web | Website Design & Custom Software Coding",
    description:
      "Affordable website design, SEO, Google indexing help, and custom software coding for small businesses across the United States.",
    images: ["/apple-touch-icon.png"],
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
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
      </body>
    </html>
  );
}
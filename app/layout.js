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
    "Affordable website design, SEO, Google indexing help, custom software coding, CRM tools, AI tools, and digital services for small businesses in Maine and beyond.",
  keywords: [
    "matthew-web",
    "Matthew Web",
    "website design Maine",
    "affordable websites",
    "small business websites",
    "custom software coding",
    "custom CRM",
    "AI tools for business",
    "web designer Madison Maine",
    "SEO website design",
    "website indexing",
    "digital agency Maine",
  ],
  alternates: {
    canonical: "https://matthew-web.com",
  },
  openGraph: {
    title: "matthew-web | Website Design & Custom Software Coding",
    description:
      "High-quality, affordable websites, SEO help, Google indexing, and custom software coding for small businesses.",
    url: "https://matthew-web.com",
    siteName: "matthew-web",
    images: [
      {
        url: "https://cdn.imageurlgenerator.com/uploads/ce1bc88c-4c08-4df9-82ea-eaba13563fd9.png",
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
      "Affordable website design, SEO, Google indexing help, and custom software coding for small businesses.",
    images: [
      "https://cdn.imageurlgenerator.com/uploads/ce1bc88c-4c08-4df9-82ea-eaba13563fd9.png",
    ],
  },
  icons: {
    icon: "https://cdn.imageurlgenerator.com/uploads/ce1bc88c-4c08-4df9-82ea-eaba13563fd9.png",
    shortcut:
      "https://cdn.imageurlgenerator.com/uploads/ce1bc88c-4c08-4df9-82ea-eaba13563fd9.png",
    apple:
      "https://cdn.imageurlgenerator.com/uploads/ce1bc88c-4c08-4df9-82ea-eaba13563fd9.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
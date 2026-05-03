import "./globals.css";

const siteUrl = "https://matthew-web.com";

const logoUrl =
  "https://d14tal8bchn59o.cloudfront.net/pD8SMCm46GE9kXJfrsm-3pOgtGU_bUZ6M378zAftc-g/w:1920/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23501021/Screenshot_2025-12-19_174653_original.png";

const faviconUrl =
  "https://cdn.imageurlgenerator.com/uploads/ce1bc88c-4c08-4df9-82ea-eaba13563fd9.png";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "matthew-web | Website Design & Digital Agency",
  description:
    "Affordable website design and custom software coding for small businesses in Maine and beyond. Start with a free website demo.",
  keywords: [
    "matthew-web",
    "website design Maine",
    "affordable websites",
    "small business websites",
    "custom software coding",
    "web designer Madison Maine",
    "SEO website design",
  ],

  icons: {
    icon: faviconUrl,
    shortcut: faviconUrl,
    apple: faviconUrl,
  },

  openGraph: {
    title: "matthew-web | Website Design & Digital Agency",
    description:
      "High-quality, affordable websites and custom software coding for small businesses.",
    url: siteUrl,
    siteName: "matthew-web",
    images: [
      {
        url: logoUrl,
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
    title: "matthew-web | Website Design & Digital Agency",
    description:
      "Affordable website design and custom software coding for small businesses.",
    images: [logoUrl],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
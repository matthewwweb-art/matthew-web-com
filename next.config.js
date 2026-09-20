/** @type {import('next').NextConfig} */

/* ============================================================
   MATTHEW WEB — CONTENT SECURITY POLICY

   ENFORCED CSP

   This policy actively blocks resources that are not explicitly
   allowed below.

   Third-party advertising domains are added narrowly as they are
   observed and verified. Do not use broad wildcards unless they
   become absolutely necessary.
============================================================ */

const contentSecurityPolicy = [
  "default-src 'self'",

  /*
    SCRIPT SOURCES

    'unsafe-inline' is temporarily required because the current
    site contains inline JSON-LD and inline Google Analytics code.

    We can remove this later with a nonce/hash migration.

    Monetag:
    - nap5k.com serves the In-Page Push loader.
    - tzegilo.com serves Monetag statistics/script resources.
  */
  [
    "script-src",
    "'self'",
    "'unsafe-inline'",
    "https://www.googletagmanager.com",
    "https://nap5k.com",
    "https://tzegilo.com",
    "https://www.google.com/recaptcha/",
    "https://www.gstatic.com/recaptcha/",
    "https://va.vercel-scripts.com",
  ].join(" "),

  /*
    INLINE / EMBEDDED STYLES

    The current Matthew Web pages contain many inline style blocks,
    so unsafe-inline is required for styles at this stage.
  */
  [
    "style-src",
    "'self'",
    "'unsafe-inline'",
  ].join(" "),

  /*
    IMAGES

    Includes:
    - Matthew Web assets
    - inline data/blob images
    - testimonial CloudFront images
    - Google resources
    - Monetag advertising image/impression resources
  */
  [
    "img-src",
    "'self'",
    "data:",
    "blob:",
    "https://d14tal8bchn59o.cloudfront.net",
    "https://www.google.com",
    "https://www.gstatic.com",
    "https://www.google-analytics.com",

    /*
      Monetag In-Page Push
    */
    "https://aichouphaugn.com",
    "https://jhnwr.com",
  ].join(" "),

  /*
    NETWORK / FETCH / WEBSOCKET CONNECTIONS

    Includes:
    - Matthew Web
    - Supabase REST/Auth
    - Supabase Realtime WebSocket
    - Google Analytics
    - Google reCAPTCHA
    - Vercel Analytics / Speed Insights
    - Monetag In-Page Push network requests

    Monetag domains currently observed:
    - my.rtmark.net
    - jhnwr.com
    - fleraprt.com
    - aichouphaugn.com
  */
  [
    "connect-src",
    "'self'",
    "https://opkgtvmkevqeukqcjuhd.supabase.co",
    "wss://opkgtvmkevqeukqcjuhd.supabase.co",
    "https://www.google.com/recaptcha/",
    "https://www.google-analytics.com",
    "https://*.google-analytics.com",
    "https://analytics.google.com",
    "https://*.analytics.google.com",
    "https://www.googletagmanager.com",
    "https://vitals.vercel-insights.com",
    "https://va.vercel-scripts.com",

    /*
      Monetag In-Page Push
    */
    "https://my.rtmark.net",
    "https://jhnwr.com",
    "https://fleraprt.com",
    "https://aichouphaugn.com",
  ].join(" "),

  /*
    FRAMES

    Google reCAPTCHA is currently the only allowed third-party
    frame source.

    If Monetag later requires a frame domain, we will add only
    the exact domain reported by the browser.
  */
  [
    "frame-src",
    "https://www.google.com/recaptcha/",
    "https://recaptcha.google.com/recaptcha/",
  ].join(" "),

  /*
    FONTS
  */
  [
    "font-src",
    "'self'",
    "data:",
  ].join(" "),

  /*
    MEDIA
  */
  [
    "media-src",
    "'self'",
    "data:",
    "blob:",
  ].join(" "),

  /*
    WORKERS
  */
  [
    "worker-src",
    "'self'",
    "blob:",
  ].join(" "),

  /*
    HARDENING DIRECTIVES
  */
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "manifest-src 'self'",
].join("; ");

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/called",
        destination: "/contact-us",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",

        headers: [
          {
            key:
              "X-DNS-Prefetch-Control",
            value:
              "on",
          },

          {
            key:
              "X-Content-Type-Options",
            value:
              "nosniff",
          },

          {
            key:
              "X-Frame-Options",
            value:
              "SAMEORIGIN",
          },

          {
            key:
              "Referrer-Policy",
            value:
              "strict-origin-when-cross-origin",
          },

          {
            key:
              "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },

          {
            key:
              "Strict-Transport-Security",
            value:
              "max-age=31536000; includeSubDomains",
          },

          /* ====================================================
             ENFORCED CONTENT SECURITY POLICY
          ==================================================== */

          {
            key:
              "Content-Security-Policy",

            value:
              contentSecurityPolicy,
          },
        ],
      },

      {
        source:
          "/admin/:path*",

        headers: [
          {
            key:
              "X-Robots-Tag",

            value:
              "noindex, nofollow, noarchive",
          },

          /*
            Admin HTML itself contains no private CRM records
            until authenticated client requests occur.

            no-store adds another defense-in-depth layer.
          */
          {
            key:
              "Cache-Control",

            value:
              "private, no-store, max-age=0",
          },
        ],
      },

      {
        source:
          "/api/:path*",

        headers: [
          {
            key:
              "X-Robots-Tag",

            value:
              "noindex, nofollow, noarchive",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
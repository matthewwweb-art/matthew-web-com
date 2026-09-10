import Link from "next/link";

import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Globe2,
  LayoutTemplate,
  Link2,
  LockKeyhole,
  Megaphone,
  MessageSquare,
  SearchCheck,
  Share2,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Workflow,
  Zap,
} from "lucide-react";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/* ============================================================
   METADATA
============================================================ */

export const metadata = {
  title:
    "Why a Facebook Page Is Not a Substitute for a Website | Matthew Web",

  description:
    "Learn why a Facebook business page can be useful for social reach and customer interaction but should not automatically replace a business website you control.",

  alternates: {
    canonical:
      "https://matthew-web.com/why-a-facebook-page-is-not-a-substitute-for-a-website",
  },

  openGraph: {
    title:
      "Why a Facebook Page Is Not a Substitute for a Website | Matthew Web",

    description:
      "A practical comparison of Facebook business pages and business websites, including ownership, search visibility, customer experience, lead capture, analytics, branding, and long-term control.",

    url:
      "https://matthew-web.com/why-a-facebook-page-is-not-a-substitute-for-a-website",

    siteName:
      "Matthew Web",

    type:
      "article",
  },
};

/* ============================================================
   COMPARISON
============================================================ */

const comparison = [
  {
    category:
      "Platform Control",

    facebook:
      "The page operates inside another company's platform, interface, features, rules, and account system.",

    website:
      "The business controls the website's content, architecture, navigation, branding, domain, and technical direction.",
  },

  {
    category:
      "Brand Experience",

    facebook:
      "Businesses can customize content and imagery, but the overall experience still follows the social platform's design.",

    website:
      "The business can build a much more specific visual identity and customer journey.",
  },

  {
    category:
      "Search Structure",

    facebook:
      "A social profile can appear in search, but it does not replace a full set of dedicated service, location, educational, and business pages.",

    website:
      "Individual pages can target specific customer questions, services, topics, and legitimate geographic needs.",
  },

  {
    category:
      "Lead Capture",

    facebook:
      "Customers may message, comment, follow, or interact through tools provided by the platform.",

    website:
      "The business can build contact forms, quote forms, booking requests, payments, CRM connections, and custom workflows around its own process.",
  },

  {
    category:
      "Content Organization",

    facebook:
      "New posts continuously push older content farther down the feed.",

    website:
      "Important information can remain organized permanently in navigation, service pages, FAQs, articles, and resource sections.",
  },

  {
    category:
      "Analytics",

    facebook:
      "The platform provides analytics within the information and controls it makes available.",

    website:
      "The business can connect analytics, conversion tracking, lead attribution, CRM records, and other measurement systems where appropriate.",
  },

  {
    category:
      "Long-Term Flexibility",

    facebook:
      "The business works within the capabilities made available by the platform.",

    website:
      "The site can expand into databases, software, customer portals, automation, integrations, and other technology as requirements grow.",
  },
];

/* ============================================================
   WEBSITE BENEFITS
============================================================ */

const websiteBenefits = [
  {
    icon:
      Globe2,

    title:
      "Your Own Domain",

    text:
      "A dedicated domain gives the business a stable public destination that can be used across search, social media, email, printed material, advertising, referrals, and customer communication.",
  },

  {
    icon:
      LayoutTemplate,

    title:
      "Purpose-Built Customer Journey",

    text:
      "A website can organize customers around services, pricing, FAQs, examples, contact paths, articles, and other information instead of relying primarily on a chronological social feed.",
  },

  {
    icon:
      SearchCheck,

    title:
      "Dedicated Search Content",

    text:
      "Individual service and educational pages can be structured for crawling, indexing, internal linking, and search discovery without depending entirely on a social profile.",
  },

  {
    icon:
      Target,

    title:
      "Custom Conversion Paths",

    text:
      "Calls, forms, quote requests, booking requests, purchases, downloads, customer portals, and other actions can be designed around the actual business process.",
  },

  {
    icon:
      Workflow,

    title:
      "Business-System Integration",

    text:
      "Website activity can connect with databases, CRM tools, analytics, automation, email notifications, payments, and other software when the business needs them.",
  },

  {
    icon:
      ShieldCheck,

    title:
      "More Direct Control",

    text:
      "The business has greater control over the public experience instead of depending entirely on the layout, feature decisions, and content presentation of a third-party social platform.",
  },
];

/* ============================================================
   FACEBOOK BENEFITS
============================================================ */

const facebookBenefits = [
  {
    title:
      "Community Interaction",

    text:
      "Social platforms can make conversations, comments, shares, reactions, and customer interaction convenient.",
  },

  {
    title:
      "Company Updates",

    text:
      "Businesses can quickly share announcements, project photos, events, new content, operational updates, and other timely information.",
  },

  {
    title:
      "Content Distribution",

    text:
      "Social posts can introduce people to articles, services, projects, products, or other deeper resources hosted on the business website.",
  },

  {
    title:
      "Social Proof",

    text:
      "Real followers, public interactions, recommendations, and legitimate customer feedback can add context to the company's broader online presence.",
  },

  {
    title:
      "Direct Messaging",

    text:
      "Some customers prefer initiating contact through the social platforms they already use.",
  },

  {
    title:
      "Audience Development",

    text:
      "A useful social presence can help a business develop an audience that later visits the website, joins another channel, or becomes a customer.",
  },
];

/* ============================================================
   HUB MODEL
============================================================ */

const hubSteps = [
  {
    title:
      "Search",

    text:
      "A customer discovers a service, article, business name, or other relevant result.",
  },

  {
    title:
      "Social",

    text:
      "The customer sees an update, project, discussion, recommendation, or shared resource.",
  },

  {
    title:
      "Website",

    text:
      "The website provides the organized business information and deeper customer journey.",
  },

  {
    title:
      "Action",

    text:
      "The visitor calls, messages, submits a form, requests a quote, books, buys, or takes another appropriate action.",
  },

  {
    title:
      "Lead System",

    text:
      "The business records and follows up with the inquiry through its normal process.",
  },

  {
    title:
      "Customer",

    text:
      "Qualified opportunities can become actual business relationships.",
  },
];

/* ============================================================
   SOCIAL-ONLY RISKS
============================================================ */

const socialOnlyRisks = [
  "Important information is buried inside old posts",
  "Customers must learn the social platform's interface to find business information",
  "Service details may be difficult to organize into permanent sections",
  "The business has less control over layout and customer flow",
  "Custom forms and software workflows may be limited",
  "Search content is concentrated inside a third-party platform",
  "Changes to platform features can affect how the business operates",
  "Customers who do not use the platform may have a weaker experience",
  "Detailed analytics and lead attribution may be harder to connect to the full sales process",
  "The business may become too dependent on one outside distribution channel",
];

/* ============================================================
   WEBSITE CHECKLIST
============================================================ */

const websiteChecklist = [
  "Clear explanation of what the business does",
  "Dedicated service or product information",
  "Accurate contact information",
  "Legitimate service-area or location information where relevant",
  "Mobile-friendly layout",
  "Clear calls to action",
  "Contact or quote forms where useful",
  "Real project examples where available",
  "Verified customer feedback where available",
  "Search-ready page structure",
  "Analytics and conversion tracking where appropriate",
  "Links to active social profiles",
];

/* ============================================================
   CONTENT LOOP
============================================================ */

const contentLoop = [
  {
    number:
      "01",

    title:
      "Create the Useful Resource",

    text:
      "Publish a strong service page, article, project update, technical explanation, educational resource, or other useful content on the website.",
  },

  {
    number:
      "02",

    title:
      "Adapt It for Social",

    text:
      "Turn part of the resource into a shorter post, screenshot, visual, project note, lesson, question, or company update.",
  },

  {
    number:
      "03",

    title:
      "Link Back When Useful",

    text:
      "Direct people to the website when the deeper information, service details, project, or customer action belongs there.",
  },

  {
    number:
      "04",

    title:
      "Measure the Response",

    text:
      "Track useful traffic, inquiries, engagement, leads, and customer outcomes where the systems support it.",
  },

  {
    number:
      "05",

    title:
      "Learn What People Care About",

    text:
      "Use customer questions, search behavior, social responses, and lead activity to identify useful future content.",
  },

  {
    number:
      "06",

    title:
      "Build the Next Resource",

    text:
      "Continue developing an interconnected library instead of producing unrelated posts with no long-term destination.",
  },
];

/* ============================================================
   FAQ
============================================================ */

const faqs = [
  {
    q:
      "Can a Facebook page replace a business website?",

    a:
      "A Facebook page can provide useful social visibility, messaging, updates, and customer interaction, but it does not provide the same level of control, content organization, custom functionality, search structure, branding, and long-term flexibility as a dedicated business website.",
  },

  {
    q:
      "Does a small business need both Facebook and a website?",

    a:
      "Not every business needs every social platform, but a website and relevant social channels can serve different purposes. The website can act as the controlled business hub while social platforms help distribute content and connect with audiences.",
  },

  {
    q:
      "Can a Facebook business page appear in Google search?",

    a:
      "Social profiles can appear in search results. However, a Facebook page does not provide the same collection of dedicated service pages, articles, landing pages, internal links, and custom technical structure that a business can build on its own website.",
  },

  {
    q:
      "Should I delete my Facebook page after building a website?",

    a:
      "Usually there is no reason to remove a useful social presence simply because a website exists. The stronger approach is often to let each channel do the job it is best suited for.",
  },

  {
    q:
      "What should I post on Facebook if I have a website?",

    a:
      "Useful social content can include company updates, educational tips, project progress, new articles, legitimate customer stories, events, announcements, images, questions, and links to deeper website resources.",
  },

  {
    q:
      "Can Matthew Web connect a business website with social media?",

    a:
      "Yes. Matthew Web can build websites that link to social profiles, support social sharing, provide landing pages for campaigns, capture leads, connect analytics, and serve as the central destination for business information.",
  },
];

/* ============================================================
   RELATED ARTICLES
============================================================ */

const relatedArticles = [
  {
    title:
      "7 Reasons Why Small Business Websites Are Vital",

    href:
      "/7-reasons-why-small-business-websites-are-vital",

    text:
      "Learn why a dedicated website can serve as the central public hub for business identity, marketing, leads, search, and future technology.",
  },

  {
    title:
      "8 Things Every Small Business Website Needs",

    href:
      "/8-things-every-small-business-website-needs",

    text:
      "See what information and functionality the business website should provide after customers arrive from search, social media, or referrals.",
  },

  {
    title:
      "8 Marketing Mistakes Small Businesses Make",

    href:
      "/8-marketing-mistakes-small-businesses-make",

    text:
      "Build social media into a larger marketing system involving websites, outreach, content, lead tracking, follow-up, and measurement.",
  },
];

/* ============================================================
   STRUCTURED DATA
============================================================ */

const articleSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "Article",

  headline:
    "Why a Facebook Page Is Not a Substitute for a Website",

  description:
    "A practical comparison of Facebook business pages and dedicated business websites, including platform control, branding, search structure, customer journeys, lead capture, analytics, and long-term flexibility.",

  mainEntityOfPage: {
    "@type":
      "WebPage",

    "@id":
      "https://matthew-web.com/why-a-facebook-page-is-not-a-substitute-for-a-website",
  },

  author: {
    "@type":
      "Person",

    name:
      "Adam Matthew Charest",
  },

  publisher: {
    "@type":
      "Organization",

    name:
      "Matthew Web",

    url:
      "https://matthew-web.com",
  },

  dateModified:
    "2026-09-09",
};

const breadcrumbSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "BreadcrumbList",

  itemListElement: [
    {
      "@type":
        "ListItem",

      position:
        1,

      name:
        "Home",

      item:
        "https://matthew-web.com",
    },

    {
      "@type":
        "ListItem",

      position:
        2,

      name:
        "Blog",

      item:
        "https://matthew-web.com/blog",
    },

    {
      "@type":
        "ListItem",

      position:
        3,

      name:
        "Why a Facebook Page Is Not a Substitute for a Website",

      item:
        "https://matthew-web.com/why-a-facebook-page-is-not-a-substitute-for-a-website",
    },
  ],
};

const faqSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "FAQPage",

  mainEntity:
    faqs.map((item) => ({
      "@type":
        "Question",

      name:
        item.q,

      acceptedAnswer: {
        "@type":
          "Answer",

        text:
          item.a,
      },
    })),
};

/* ============================================================
   PAGE
============================================================ */

export default function FacebookVsWebsiteArticlePage() {
  return (
    <main className="mwfb-page">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(faqSchema),
        }}
      />

      <style>{`
        :root {
          --mwfb-black: #020304;
          --mwfb-muted: #aebbc5;
          --mwfb-blue: #08b9f4;
          --mwfb-blue-light: #38d7ff;
          --mwfb-orange: #ff7900;
          --mwfb-orange-light: #ffab31;
          --mwfb-green: #35e07e;
          --mwfb-border: rgba(255,255,255,.09);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--mwfb-black);
        }

        .mwfb-page {
          min-height: 100vh;
          overflow: hidden;
          color: #fff;
          background: var(--mwfb-black);
        }

        .mwfb-blue {
          color: var(--mwfb-blue-light);
        }

        .mwfb-orange {
          color: var(--mwfb-orange);
        }

        /* =====================================================
           BREADCRUMBS
        ===================================================== */

        .mwfb-breadcrumb-wrap {
          border-bottom: 1px solid rgba(255,255,255,.06);
          background: #04080b;
        }

        .mwfb-breadcrumbs {
          max-width: 1380px;
          margin: 0 auto;

          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 7px;

          padding: 14px clamp(20px,5vw,80px);

          color: #71838d;

          font-size: 10px;
          font-weight: 800;
        }

        .mwfb-breadcrumbs a {
          color: #8799a3;
          text-decoration: none;
        }

        .mwfb-breadcrumbs a:hover {
          color: var(--mwfb-blue-light);
        }

        .mwfb-breadcrumbs svg {
          width: 12px;
          height: 12px;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwfb-hero {
          position: relative;
          overflow: hidden;

          border-bottom: 1px solid rgba(8,185,244,.16);

          background:
            radial-gradient(
              ellipse at 16% 42%,
              rgba(8,185,244,.16),
              transparent 37%
            ),
            radial-gradient(
              ellipse at 84% 48%,
              rgba(255,121,0,.09),
              transparent 33%
            ),
            linear-gradient(
              180deg,
              #020304,
              #03080c,
              #020304
            );
        }

        .mwfb-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: .26;
          pointer-events: none;

          background-image:
            linear-gradient(
              rgba(8,185,244,.055) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(8,185,244,.055) 1px,
              transparent 1px
            );

          background-size: 76px 76px;

          mask-image:
            radial-gradient(
              ellipse at center,
              black,
              transparent 80%
            );
        }

        .mwfb-hero-inner {
          position: relative;
          z-index: 2;

          width: 100%;
          max-width: 1380px;
          margin: 0 auto;

          display: grid;

          grid-template-columns:
            minmax(0,1.06fr)
            minmax(390px,.94fr);

          align-items: center;

          gap: clamp(45px,6vw,90px);

          padding:
            100px
            clamp(20px,5vw,80px)
            105px;
        }

        .mwfb-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          width: fit-content;

          margin-bottom: 19px;

          padding: 8px 12px;

          border: 1px solid rgba(8,185,244,.27);
          border-radius: 999px;

          color: #d9f8ff;
          background: rgba(8,185,244,.055);

          font-size: 10px;
          font-weight: 900;

          letter-spacing: .13em;
          text-transform: uppercase;
        }

        .mwfb-label svg {
          width: 16px;
          height: 16px;
        }

        .mwfb-hero h1 {
          max-width: 1000px;
          margin: 0;

          font-size:
            clamp(48px,5.6vw,84px);

          line-height: .99;
          letter-spacing: -.06em;
        }

        .mwfb-description {
          max-width: 810px;

          margin: 25px 0 0;

          color: #b8c6cf;

          font-size:
            clamp(16px,1.4vw,20px);

          line-height: 1.75;
        }

        .mwfb-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 18px;

          margin-top: 25px;

          color: #71838d;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: .05em;
          text-transform: uppercase;
        }

        /* =====================================================
           HERO VISUAL
        ===================================================== */

        .mwfb-stage {
          min-height: 470px;

          display: grid;
          place-items: center;
        }

        .mwfb-console {
          width: min(100%,530px);

          padding: 24px;

          border: 1px solid rgba(8,185,244,.28);
          border-radius: 20px;

          background:
            radial-gradient(
              circle at 20% 20%,
              rgba(8,185,244,.11),
              transparent 35%
            ),
            linear-gradient(
              145deg,
              #0b161d,
              #04080b
            );

          box-shadow:
            0 30px 70px rgba(0,0,0,.45);
        }

        .mwfb-console-top {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-bottom: 18px;
        }

        .mwfb-console-top strong {
          color: #81929d;

          font-size: 9px;
          letter-spacing: .12em;
        }

        .mwfb-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;

          color: #8da0aa;

          font-size: 8px;
          font-weight: 900;
        }

        .mwfb-status::before {
          content: "";

          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: var(--mwfb-green);

          box-shadow:
            0 0 7px rgba(53,224,126,.7);
        }

        .mwfb-hub {
          padding: 19px;

          border: 1px solid rgba(255,121,0,.17);
          border-radius: 11px;

          background: #071015;
        }

        .mwfb-hub span {
          color: #657984;

          font-size: 7px;
          font-weight: 900;
          letter-spacing: .09em;
          text-transform: uppercase;
        }

        .mwfb-hub-title {
          display: flex;
          align-items: center;
          gap: 9px;

          margin-top: 10px;

          color: var(--mwfb-orange-light);

          font-size: 15px;
          font-weight: 900;
        }

        .mwfb-hub-title svg {
          width: 22px;
          height: 22px;
        }

        .mwfb-hub p {
          margin: 10px 0 0;

          color: #788b95;

          font-size: 9px;
          line-height: 1.6;
        }

        .mwfb-channel-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 9px;

          margin-top: 10px;
        }

        .mwfb-channel {
          min-height: 95px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          gap: 8px;

          padding: 12px;

          border: 1px solid rgba(8,185,244,.14);
          border-radius: 9px;

          background: #071015;

          text-align: center;
        }

        .mwfb-channel:nth-child(even) {
          border-color: rgba(255,121,0,.14);
        }

        .mwfb-channel svg {
          width: 22px;
          height: 22px;

          color: var(--mwfb-blue-light);
        }

        .mwfb-channel:nth-child(even) svg {
          color: var(--mwfb-orange-light);
        }

        .mwfb-channel strong {
          font-size: 8px;
          letter-spacing: .05em;
        }

        /* =====================================================
           ARTICLE
        ===================================================== */

        .mwfb-article-section {
          padding:
            95px
            clamp(20px,5vw,80px)
            110px;

          background: #020304;
        }

        .mwfb-layout {
          max-width: 1280px;
          margin: 0 auto;

          display: grid;

          grid-template-columns:
            minmax(220px,.27fr)
            minmax(0,.73fr);

          align-items: start;

          gap: clamp(40px,6vw,75px);
        }

        /* =====================================================
           TOC
        ===================================================== */

        .mwfb-toc {
          position: sticky;
          top: 30px;

          padding: 23px;

          border: 1px solid var(--mwfb-border);
          border-radius: 14px;

          background:
            linear-gradient(
              145deg,
              #09131a,
              #04080b
            );
        }

        .mwfb-toc-title {
          display: flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 15px;

          font-size: 10px;
          font-weight: 900;

          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .mwfb-toc-title svg {
          width: 16px;
          height: 16px;

          color: var(--mwfb-blue-light);
        }

        .mwfb-toc a {
          display: block;

          padding: 8px 0;

          color: #8799a3;

          text-decoration: none;

          font-size: 12px;
          line-height: 1.45;
        }

        .mwfb-toc a:hover {
          color: var(--mwfb-blue-light);
        }

        .mwfb-toc-cta {
          margin-top: 18px;
          padding-top: 17px;

          border-top:
            1px solid rgba(255,255,255,.07);
        }

        .mwfb-toc-cta a {
          color: var(--mwfb-orange-light);
          font-weight: 850;
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .mwfb-content {
          min-width: 0;
        }

        .mwfb-section {
          margin-bottom: 62px;
          scroll-margin-top: 35px;
        }

        .mwfb-section h2 {
          margin: 0 0 20px;

          font-size:
            clamp(30px,3.5vw,48px);

          line-height: 1.08;
          letter-spacing: -.045em;
        }

        .mwfb-section h3 {
          margin: 32px 0 12px;

          color: var(--mwfb-blue-light);

          font-size: 21px;
          line-height: 1.3;
        }

        .mwfb-section p {
          margin: 0 0 19px;

          color: #b6c3ca;

          font-size: 16px;
          line-height: 1.85;
        }

        .mwfb-section strong {
          color: #fff;
        }

        /* =====================================================
           ANSWER
        ===================================================== */

        .mwfb-answer {
          margin-bottom: 55px;

          padding: 29px;

          border: 1px solid rgba(8,185,244,.23);
          border-radius: 17px;

          background:
            radial-gradient(
              circle at 90% 20%,
              rgba(8,185,244,.06),
              transparent 35%
            ),
            #071015;
        }

        .mwfb-answer-label {
          display: flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 12px;

          color: var(--mwfb-blue-light);

          font-size: 9px;
          font-weight: 950;

          letter-spacing: .11em;
          text-transform: uppercase;
        }

        .mwfb-answer-label svg {
          width: 17px;
          height: 17px;
        }

        .mwfb-answer h2 {
          margin: 0 0 12px;

          font-size:
            clamp(24px,3vw,36px);

          line-height: 1.1;
        }

        .mwfb-answer p {
          margin: 0;

          color: #b7c5cc;

          font-size: 15px;
          line-height: 1.75;
        }

        /* =====================================================
           TABLE
        ===================================================== */

        .mwfb-table-wrap {
          margin-top: 28px;
          overflow-x: auto;

          border: 1px solid var(--mwfb-border);
          border-radius: 15px;

          background: #071015;
        }

        .mwfb-table {
          width: 100%;
          min-width: 880px;

          border-collapse: collapse;
        }

        .mwfb-table th,
        .mwfb-table td {
          padding: 18px;

          border-bottom:
            1px solid rgba(255,255,255,.07);

          vertical-align: top;
          text-align: left;
        }

        .mwfb-table th {
          color: #fff;

          background: #0a151b;

          font-size: 10px;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .mwfb-table th:nth-child(2) {
          color: var(--mwfb-orange-light);
        }

        .mwfb-table th:nth-child(3) {
          color: var(--mwfb-blue-light);
        }

        .mwfb-table td {
          color: #aebbc5;

          font-size: 12px;
          line-height: 1.65;
        }

        .mwfb-table td:first-child {
          color: #fff;
          font-weight: 800;
        }

        .mwfb-table tr:last-child td {
          border-bottom: 0;
        }

        /* =====================================================
           BENEFITS
        ===================================================== */

        .mwfb-benefit-grid {
          display: grid;

          grid-template-columns:
            repeat(2,1fr);

          gap: 14px;

          margin-top: 27px;
        }

        .mwfb-benefit-card {
          min-height: 245px;

          padding: 23px;

          border: 1px solid rgba(8,185,244,.14);
          border-radius: 14px;

          background: rgba(8,185,244,.018);
        }

        .mwfb-benefit-card:nth-child(even) {
          border-color: rgba(255,121,0,.14);

          background: rgba(255,121,0,.016);
        }

        .mwfb-benefit-card svg {
          width: 30px;
          height: 30px;

          margin-bottom: 16px;

          color: var(--mwfb-blue-light);
        }

        .mwfb-benefit-card:nth-child(even) svg {
          color: var(--mwfb-orange-light);
        }

        .mwfb-benefit-card h3 {
          margin: 0 0 10px;

          color: #fff;

          font-size: 18px;
        }

        .mwfb-benefit-card p {
          margin: 0;

          color: var(--mwfb-muted);

          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           SOCIAL BENEFITS
        ===================================================== */

        .mwfb-social-grid {
          display: grid;

          grid-template-columns:
            repeat(2,1fr);

          gap: 12px;

          margin-top: 27px;
        }

        .mwfb-social-card {
          padding: 23px;

          border: 1px solid var(--mwfb-border);
          border-radius: 13px;

          background: #071015;
        }

        .mwfb-social-card h3 {
          margin: 0 0 9px;

          color: var(--mwfb-blue-light);

          font-size: 18px;
        }

        .mwfb-social-card:nth-child(even) h3 {
          color: var(--mwfb-orange-light);
        }

        .mwfb-social-card p {
          margin: 0;

          color: var(--mwfb-muted);

          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           HUB FLOW
        ===================================================== */

        .mwfb-flow-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 12px;

          margin-top: 28px;
        }

        .mwfb-flow-card {
          min-height: 205px;

          padding: 22px;

          border: 1px solid rgba(8,185,244,.14);
          border-radius: 13px;

          background: #071015;
        }

        .mwfb-flow-card:nth-child(even) {
          border-color: rgba(255,121,0,.14);
        }

        .mwfb-flow-card h3 {
          margin: 0 0 10px;

          color: var(--mwfb-blue-light);

          font-size: 18px;
        }

        .mwfb-flow-card:nth-child(even) h3 {
          color: var(--mwfb-orange-light);
        }

        .mwfb-flow-card p {
          margin: 0;

          color: var(--mwfb-muted);

          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           CHECKLIST
        ===================================================== */

        .mwfb-checklist {
          display: grid;
          gap: 10px;

          margin: 25px 0;
          padding: 0;

          list-style: none;
        }

        .mwfb-checklist li {
          display: flex;
          align-items: flex-start;
          gap: 10px;

          padding: 13px 15px;

          border:
            1px solid rgba(255,255,255,.07);

          border-radius: 9px;

          color: #c0ccd2;

          background:
            rgba(255,255,255,.015);

          font-size: 13px;
          line-height: 1.55;
        }

        .mwfb-checklist svg {
          width: 17px;
          height: 17px;

          flex: 0 0 auto;

          margin-top: 1px;

          color: var(--mwfb-blue-light);
        }

        /* =====================================================
           CONTENT LOOP
        ===================================================== */

        .mwfb-process-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 12px;

          margin-top: 28px;
        }

        .mwfb-process-card {
          min-height: 225px;

          padding: 22px;

          border: 1px solid rgba(8,185,244,.14);
          border-radius: 13px;

          background: #071015;
        }

        .mwfb-process-card:nth-child(even) {
          border-color: rgba(255,121,0,.14);
        }

        .mwfb-process-number {
          margin-bottom: 14px;

          color: var(--mwfb-blue-light);

          font-size: 9px;
          font-weight: 950;
          letter-spacing: .1em;
        }

        .mwfb-process-card:nth-child(even)
          .mwfb-process-number {
          color: var(--mwfb-orange-light);
        }

        .mwfb-process-card h3 {
          margin: 0 0 9px;

          color: #fff;

          font-size: 18px;
        }

        .mwfb-process-card p {
          margin: 0;

          color: var(--mwfb-muted);

          font-size: 12px;
          line-height: 1.66;
        }

        /* =====================================================
           CALLOUT
        ===================================================== */

        .mwfb-callout {
          margin: 45px 0;

          padding: 30px;

          border: 1px solid rgba(255,121,0,.2);
          border-radius: 16px;

          background:
            radial-gradient(
              circle at 90% 20%,
              rgba(255,121,0,.06),
              transparent 35%
            ),
            #071015;
        }

        .mwfb-callout-icon {
          width: 48px;
          height: 48px;

          display: grid;
          place-items: center;

          margin-bottom: 15px;

          border: 1px solid rgba(255,121,0,.25);
          border-radius: 12px;

          color: var(--mwfb-orange-light);

          background: rgba(255,121,0,.045);
        }

        .mwfb-callout-icon svg {
          width: 24px;
          height: 24px;
        }

        .mwfb-callout h3 {
          margin: 0 0 10px;

          color: #fff;

          font-size: 22px;
        }

        .mwfb-callout p {
          margin: 0;

          color: var(--mwfb-muted);

          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           FAQ
        ===================================================== */

        .mwfb-faq-grid {
          display: grid;
          gap: 12px;

          margin-top: 27px;
        }

        .mwfb-faq-card {
          padding: 23px;

          border: 1px solid var(--mwfb-border);
          border-radius: 13px;

          background: #071015;
        }

        .mwfb-faq-card h3 {
          margin: 0 0 9px;

          color: var(--mwfb-blue-light);

          font-size: 17px;
        }

        .mwfb-faq-card:nth-child(even) h3 {
          color: var(--mwfb-orange-light);
        }

        .mwfb-faq-card p {
          margin: 0;

          color: var(--mwfb-muted);

          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           BUTTONS / CTA
        ===================================================== */

        .mwfb-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;

          margin-top: 25px;
        }

        .mwfb-btn {
          min-height: 51px;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          padding: 0 20px;

          border-radius: 9px;

          color: #fff;
          text-decoration: none;

          font-size: 13px;
          font-weight: 850;

          transition: transform .2s ease;
        }

        .mwfb-btn:hover {
          transform: translateY(-2px);
        }

        .mwfb-btn-blue {
          border: 1px solid rgba(56,215,255,.5);

          background:
            linear-gradient(
              180deg,
              #0ab6ed,
              #0789b6
            );
        }

        .mwfb-btn-orange {
          border: 1px solid rgba(255,176,49,.55);

          background:
            linear-gradient(
              180deg,
              #ff9519,
              #f16600
            );
        }

        .mwfb-btn-dark {
          border: 1px solid rgba(255,255,255,.12);

          background:
            rgba(255,255,255,.03);
        }

        .mwfb-btn svg {
          width: 17px;
          height: 17px;
        }

        .mwfb-article-cta {
          margin-top: 65px;

          padding:
            clamp(35px,5vw,55px);

          border: 1px solid rgba(8,185,244,.21);
          border-radius: 20px;

          background:
            radial-gradient(
              circle at 90% 50%,
              rgba(255,121,0,.065),
              transparent 31%
            ),
            linear-gradient(
              145deg,
              #0a151c,
              #04080b
            );
        }

        .mwfb-article-cta h2 {
          max-width: 850px;

          margin: 0;

          font-size:
            clamp(31px,4vw,49px);

          line-height: 1.05;
          letter-spacing: -.045em;
        }

        .mwfb-article-cta p {
          max-width: 790px;

          margin: 17px 0 0;

          color: var(--mwfb-muted);

          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           RELATED
        ===================================================== */

        .mwfb-related-section {
          padding:
            90px
            clamp(20px,5vw,80px);

          background:
            linear-gradient(
              180deg,
              #020304,
              #04090d,
              #020304
            );
        }

        .mwfb-related-inner {
          max-width: 1280px;

          margin: 0 auto;
        }

        .mwfb-related-title {
          margin-bottom: 32px;
        }

        .mwfb-related-title span {
          display: flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 9px;

          color: var(--mwfb-orange-light);

          font-size: 9px;
          font-weight: 900;

          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .mwfb-related-title svg {
          width: 16px;
          height: 16px;
        }

        .mwfb-related-title h2 {
          margin: 0;

          font-size:
            clamp(31px,4vw,49px);

          letter-spacing: -.045em;
        }

        .mwfb-related-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 14px;
        }

        .mwfb-related-card {
          min-height: 245px;

          display: flex;
          flex-direction: column;

          padding: 24px;

          border: 1px solid var(--mwfb-border);
          border-radius: 14px;

          color: #fff;
          text-decoration: none;

          background:
            linear-gradient(
              145deg,
              #0a1218,
              #04080b
            );

          transition:
            transform .2s ease,
            border-color .2s ease;
        }

        .mwfb-related-card:hover {
          transform: translateY(-4px);

          border-color: rgba(8,185,244,.3);
        }

        .mwfb-related-card:nth-child(even):hover {
          border-color: rgba(255,121,0,.3);
        }

        .mwfb-related-card h3 {
          margin: 0;

          font-size: 18px;
          line-height: 1.3;
        }

        .mwfb-related-card p {
          margin: 13px 0 0;

          color: var(--mwfb-muted);

          font-size: 12px;
          line-height: 1.65;
        }

        .mwfb-related-link {
          display: flex;
          align-items: center;
          gap: 7px;

          margin-top: auto;
          padding-top: 21px;

          color: var(--mwfb-blue-light);

          font-size: 11px;
          font-weight: 850;
        }

        .mwfb-related-card:nth-child(even)
          .mwfb-related-link {
          color: var(--mwfb-orange-light);
        }

        .mwfb-related-link svg {
          width: 15px;
          height: 15px;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1100px) {
          .mwfb-flow-grid,
          .mwfb-process-grid {
            grid-template-columns: repeat(2,1fr);
          }
        }

        @media (max-width: 1050px) {
          .mwfb-hero-inner {
            grid-template-columns: 1fr;
          }

          .mwfb-hero-copy {
            text-align: center;
          }

          .mwfb-label {
            margin-left: auto;
            margin-right: auto;
          }

          .mwfb-description {
            margin-left: auto;
            margin-right: auto;
          }

          .mwfb-meta {
            justify-content: center;
          }

          .mwfb-related-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .mwfb-related-card:last-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 850px) {
          .mwfb-layout {
            grid-template-columns: 1fr;
          }

          .mwfb-toc {
            position: static;

            display: grid;

            grid-template-columns:
              repeat(2,1fr);

            gap: 0 20px;
          }

          .mwfb-toc-title,
          .mwfb-toc-cta {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 700px) {
          .mwfb-hero-inner {
            padding: 70px 16px;
          }

          .mwfb-hero h1 {
            font-size:
              clamp(43px,13vw,65px);
          }

          .mwfb-article-section {
            padding: 70px 16px 85px;
          }

          .mwfb-benefit-grid,
          .mwfb-social-grid,
          .mwfb-flow-grid,
          .mwfb-process-grid,
          .mwfb-related-grid {
            grid-template-columns: 1fr;
          }

          .mwfb-related-card:last-child {
            grid-column: auto;
          }

          .mwfb-related-section {
            padding: 70px 16px;
          }
        }

        @media (max-width: 500px) {
          .mwfb-stage {
            min-height: 450px;

            transform: scale(.9);

            margin: -10px -20px;
          }

          .mwfb-channel-grid {
            grid-template-columns: 1fr;
          }

          .mwfb-toc {
            grid-template-columns: 1fr;
          }

          .mwfb-toc-title,
          .mwfb-toc-cta {
            grid-column: auto;
          }

          .mwfb-section p {
            font-size: 15px;
          }
        }
      `}</style>

      {/* ======================================================
          BREADCRUMBS
      ====================================================== */}

      <div className="mwfb-breadcrumb-wrap">
        <nav
          className="mwfb-breadcrumbs"
          aria-label="Breadcrumb"
        >
          <Link href="/">
            Home
          </Link>

          <ChevronRight />

          <Link href="/blog">
            Blog
          </Link>

          <ChevronRight />

          <span>
            Facebook Page vs Website
          </span>
        </nav>
      </div>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="mwfb-hero">
        <div className="mwfb-hero-inner">
          <div className="mwfb-hero-copy">
            <div className="mwfb-label">
              <BookOpen />
              Websites • Social Media • Business
            </div>

            <h1>
              Why a{" "}
              <span className="mwfb-blue">
                Facebook Page
              </span>{" "}
              Is Not a Substitute for a{" "}
              <span className="mwfb-orange">
                Website
              </span>
            </h1>

            <p className="mwfb-description">
              Facebook can be a useful business
              channel. But a social profile and a
              business website solve different
              problems. The strongest setup often
              uses social media for distribution
              and interaction while the website
              acts as the company&apos;s
              controlled digital hub.
            </p>

            <div className="mwfb-meta">
              <span>
                By Adam Matthew Charest
              </span>

              <span>
                Matthew Web
              </span>

              <span>
                Updated September 9, 2026
              </span>
            </div>
          </div>

          <div
            className="mwfb-stage"
            aria-hidden="true"
          >
            <div className="mwfb-console">
              <div className="mwfb-console-top">
                <strong>
                  DIGITAL PRESENCE // CHANNEL MAP
                </strong>

                <span className="mwfb-status">
                  CONNECTED
                </span>
              </div>

              <div className="mwfb-hub">
                <span>
                  BUSINESS HUB
                </span>

                <div className="mwfb-hub-title">
                  <Globe2 />
                  Website at the Center
                </div>

                <p>
                  Search + Social + Referrals →
                  Website → Lead → Customer
                </p>
              </div>

              <div className="mwfb-channel-grid">
                <div className="mwfb-channel">
                  <SearchCheck />
                  <strong>
                    SEARCH
                  </strong>
                </div>

                <div className="mwfb-channel">
                  <Share2 />
                  <strong>
                    SOCIAL
                  </strong>
                </div>

                <div className="mwfb-channel">
                  <Target />
                  <strong>
                    WEBSITE
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          ARTICLE
      ====================================================== */}

      <article className="mwfb-article-section">
        <div className="mwfb-layout">
          {/* ==================================================
              TOC
          ================================================== */}

          <aside className="mwfb-toc">
            <div className="mwfb-toc-title">
              <BookOpen />
              In This Article
            </div>

            <a href="#short-answer">
              Short Answer
            </a>

            <a href="#comparison">
              Facebook vs Website
            </a>

            <a href="#website-control">
              Why Website Control Matters
            </a>

            <a href="#facebook-useful">
              Where Facebook Helps
            </a>

            <a href="#hub">
              Website as the Hub
            </a>

            <a href="#social-only">
              Risks of Social-Only
            </a>

            <a href="#website-needs">
              What the Website Needs
            </a>

            <a href="#content">
              Social + Content Strategy
            </a>

            <a href="#platform-risk">
              Platform Dependency
            </a>

            <a href="#faq">
              FAQs
            </a>

            <div className="mwfb-toc-cta">
              <Link href="/small-business-websites">
                Small Business Websites →
              </Link>
            </div>
          </aside>

          <div className="mwfb-content">
            {/* =================================================
                SHORT ANSWER
            ================================================= */}

            <section
              className="mwfb-answer"
              id="short-answer"
            >
              <div className="mwfb-answer-label">
                <Zap />
                Short Answer
              </div>

              <h2>
                Is a Facebook Page Enough for a
                Small Business?
              </h2>

              <p>
                <strong>
                  A Facebook page can support
                  customer communication, social
                  discovery, updates, and content
                  distribution, but it does not
                  provide the same control over
                  branding, search architecture,
                  permanent business information,
                  lead capture, analytics,
                  integrations, and future
                  functionality as a dedicated
                  website.
                </strong>{" "}
                The two channels can work
                together rather than competing
                with each other.
              </p>
            </section>

            {/* =================================================
                COMPARISON
            ================================================= */}

            <section
              className="mwfb-section"
              id="comparison"
            >
              <h2>
                Facebook Page vs{" "}
                <span className="mwfb-blue">
                  Business Website
                </span>
              </h2>

              <p>
                A social profile lives inside a
                social network.
              </p>

              <p>
                A website can be designed around
                the company&apos;s own customer
                experience and technology
                requirements.
              </p>

              <div className="mwfb-table-wrap">
                <table className="mwfb-table">
                  <thead>
                    <tr>
                      <th>
                        Area
                      </th>

                      <th>
                        Facebook Page
                      </th>

                      <th>
                        Business Website
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {comparison.map(
                      (item) => (
                        <tr key={item.category}>
                          <td>
                            {item.category}
                          </td>

                          <td>
                            {item.facebook}
                          </td>

                          <td>
                            {item.website}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>

              <div className="mwfb-callout">
                <div className="mwfb-callout-icon">
                  <Share2 />
                </div>

                <h3>
                  This Is Not “Website Good,
                  Facebook Bad”
                </h3>

                <p>
                  Social platforms can provide
                  valuable reach, communication,
                  community interaction, and
                  distribution. The limitation
                  comes from depending on a
                  social platform to perform
                  every job in the company&apos;s
                  digital presence.
                </p>
              </div>
            </section>

            {/* =================================================
                WEBSITE CONTROL
            ================================================= */}

            <section
              className="mwfb-section"
              id="website-control"
            >
              <h2>
                Why Your Own Website Gives You{" "}
                <span className="mwfb-orange">
                  More Control
                </span>
              </h2>

              <div className="mwfb-benefit-grid">
                {websiteBenefits.map(
                  (item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        className="mwfb-benefit-card"
                        key={item.title}
                      >
                        <Icon />

                        <h3>
                          {item.title}
                        </h3>

                        <p>
                          {item.text}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>

              <div className="mwfb-callout">
                <div className="mwfb-callout-icon">
                  <LockKeyhole />
                </div>

                <h3>
                  Build the Core Somewhere You
                  Control
                </h3>

                <p>
                  A business will always depend
                  on outside providers to some
                  degree—domains, hosting,
                  payments, email, search engines,
                  social networks, and other
                  services. The goal is not total
                  independence. It is avoiding
                  unnecessary dependence on one
                  outside channel for the entire
                  customer experience.
                </p>
              </div>
            </section>

            {/* =================================================
                FACEBOOK HELPS
            ================================================= */}

            <section
              className="mwfb-section"
              id="facebook-useful"
            >
              <h2>
                Where Facebook Can Be{" "}
                <span className="mwfb-blue">
                  Very Useful
                </span>
              </h2>

              <p>
                Building a website does not make
                social media irrelevant.
              </p>

              <p>
                The channels simply serve
                different purposes.
              </p>

              <div className="mwfb-social-grid">
                {facebookBenefits.map(
                  (item) => (
                    <div
                      className="mwfb-social-card"
                      key={item.title}
                    >
                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.text}
                      </p>
                    </div>
                  )
                )}
              </div>

              <div className="mwfb-callout">
                <div className="mwfb-callout-icon">
                  <Megaphone />
                </div>

                <h3>
                  Social Media Is a Distribution
                  Channel
                </h3>

                <p>
                  Publish useful information
                  where it belongs, then use
                  social channels to help people
                  discover it. The website can
                  hold the deeper resource while
                  social posts create additional
                  ways to reach it.
                </p>
              </div>
            </section>

            {/* =================================================
                HUB
            ================================================= */}

            <section
              className="mwfb-section"
              id="hub"
            >
              <h2>
                Use the Website as the{" "}
                <span className="mwfb-orange">
                  Digital Hub
                </span>
              </h2>

              <p>
                A strong online presence can
                connect several discovery
                channels into one customer path.
              </p>

              <div className="mwfb-flow-grid">
                {hubSteps.map(
                  (item) => (
                    <div
                      className="mwfb-flow-card"
                      key={item.title}
                    >
                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.text}
                      </p>
                    </div>
                  )
                )}
              </div>

              <p>
                A Facebook post, Google search,
                referral, email, advertisement,
                directory listing, QR code, or
                printed card can all point toward
                the same website.
              </p>

              <p>
                That gives the business one place
                to maintain the deeper customer
                experience.
              </p>
            </section>

            {/* =================================================
                SOCIAL ONLY
            ================================================= */}

            <section
              className="mwfb-section"
              id="social-only"
            >
              <h2>
                What Can Go Wrong With a{" "}
                <span className="mwfb-blue">
                  Social-Only Presence?
                </span>
              </h2>

              <p>
                The problem is not that a social
                page is useless.
              </p>

              <p>
                The problem is trying to make it
                perform every function that a
                larger business web presence may
                eventually require.
              </p>

              <ul className="mwfb-checklist">
                {socialOnlyRisks.map(
                  (item) => (
                    <li key={item}>
                      <CheckCircle2 />
                      {item}
                    </li>
                  )
                )}
              </ul>

              <div className="mwfb-callout">
                <div className="mwfb-callout-icon">
                  <ExternalLink />
                </div>

                <h3>
                  Do Not Build the Entire Company
                  Around One External Channel
                </h3>

                <p>
                  The healthier model is usually
                  multiple discovery channels
                  leading into a business-owned
                  customer experience rather than
                  requiring one social network to
                  handle identity, content,
                  search, leads, sales, and
                  operations by itself.
                </p>
              </div>
            </section>

            {/* =================================================
                WEBSITE NEEDS
            ================================================= */}

            <section
              className="mwfb-section"
              id="website-needs"
            >
              <h2>
                What Should the{" "}
                <span className="mwfb-orange">
                  Website
                </span>{" "}
                Provide?
              </h2>

              <p>
                Simply having a domain is not
                enough.
              </p>

              <p>
                The website needs to be useful
                after customers leave the social
                platform and arrive there.
              </p>

              <ul className="mwfb-checklist">
                {websiteChecklist.map(
                  (item) => (
                    <li key={item}>
                      <CheckCircle2 />
                      {item}
                    </li>
                  )
                )}
              </ul>

              <div className="mwfb-buttons">
                <Link
                  href="/8-things-every-small-business-website-needs"
                  className="mwfb-btn mwfb-btn-blue"
                >
                  Small Business Website Checklist
                  <ArrowRight />
                </Link>

                <Link
                  href="/small-business-websites"
                  className="mwfb-btn mwfb-btn-dark"
                >
                  Small Business Websites
                </Link>
              </div>
            </section>

            {/* =================================================
                CONTENT STRATEGY
            ================================================= */}

            <section
              className="mwfb-section"
              id="content"
            >
              <h2>
                Let Social Media and the Website{" "}
                <span className="mwfb-blue">
                  Feed Each Other
                </span>
              </h2>

              <p>
                A company does not need to create
                completely separate content for
                every platform.
              </p>

              <p>
                One real piece of work can become
                several useful resources.
              </p>

              <div className="mwfb-process-grid">
                {contentLoop.map(
                  (step) => (
                    <div
                      className="mwfb-process-card"
                      key={step.number}
                    >
                      <div className="mwfb-process-number">
                        STEP {step.number}
                      </div>

                      <h3>
                        {step.title}
                      </h3>

                      <p>
                        {step.text}
                      </p>
                    </div>
                  )
                )}
              </div>

              <div className="mwfb-callout">
                <div className="mwfb-callout-icon">
                  <Link2 />
                </div>

                <h3>
                  Website + Social + Search
                </h3>

                <p>
                  These channels become more
                  valuable when they reinforce
                  each other instead of being
                  treated as unrelated marketing
                  projects.
                </p>
              </div>

              <div className="mwfb-buttons">
                <Link
                  href="/8-marketing-mistakes-small-businesses-make"
                  className="mwfb-btn mwfb-btn-blue"
                >
                  Marketing Strategy Guide
                  <ArrowRight />
                </Link>

                <Link
                  href="/website-traffic-stats-explained"
                  className="mwfb-btn mwfb-btn-dark"
                >
                  Website Analytics Guide
                </Link>
              </div>
            </section>

            {/* =================================================
                PLATFORM DEPENDENCY
            ================================================= */}

            <section
              className="mwfb-section"
              id="platform-risk"
            >
              <h2>
                Think About{" "}
                <span className="mwfb-orange">
                  Platform Dependency
                </span>
              </h2>

              <p>
                Any outside platform can change
                features, interfaces, policies,
                visibility systems, account
                processes, or available tools
                over time.
              </p>

              <p>
                That does not mean businesses
                should avoid third-party
                platforms.
              </p>

              <p>
                It means the business should
                understand what depends on them.
              </p>

              <div className="mwfb-callout">
                <div className="mwfb-callout-icon">
                  <ShieldCheck />
                </div>

                <h3>
                  Diversify the Customer Path
                </h3>

                <p>
                  A business with its own domain,
                  website, search presence,
                  direct contact information,
                  customer records where
                  appropriate, and multiple
                  discovery channels is generally
                  less dependent on any single
                  platform for its entire online
                  presence.
                </p>
              </div>
            </section>

            {/* =================================================
                FAQ
            ================================================= */}

            <section
              className="mwfb-section"
              id="faq"
            >
              <h2>
                Facebook vs Website{" "}
                <span className="mwfb-blue">
                  FAQs
                </span>
              </h2>

              <div className="mwfb-faq-grid">
                {faqs.map(
                  (item) => (
                    <div
                      className="mwfb-faq-card"
                      key={item.q}
                    >
                      <h3>
                        {item.q}
                      </h3>

                      <p>
                        {item.a}
                      </p>
                    </div>
                  )
                )}
              </div>
            </section>

            {/* =================================================
                CTA
            ================================================= */}

            <section className="mwfb-article-cta">
              <h2>
                Use Social Media to{" "}
                <span className="mwfb-orange">
                  Reach People.
                </span>{" "}
                Give Your Business a Website to{" "}
                <span className="mwfb-blue">
                  Send Them To.
                </span>
              </h2>

              <p>
                Matthew Web builds small-business
                websites that can serve as a
                central destination for services,
                content, project examples,
                customer information, forms,
                search visibility, analytics,
                integrations, and future business
                technology.
              </p>

              <div className="mwfb-buttons">
                <Link
                  href="/contact-us"
                  className="mwfb-btn mwfb-btn-orange"
                >
                  Discuss Your Website
                  <ArrowRight />
                </Link>

                <Link
                  href="/website-design"
                  className="mwfb-btn mwfb-btn-blue"
                >
                  Website Design
                </Link>

                <Link
                  href="/pricing"
                  className="mwfb-btn mwfb-btn-dark"
                >
                  View Pricing
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* ======================================================
          RELATED ARTICLES
      ====================================================== */}

      <section className="mwfb-related-section">
        <div className="mwfb-related-inner">
          <div className="mwfb-related-title">
            <span>
              <Sparkles />
              Continue Reading
            </span>

            <h2>
              Related{" "}
              <span className="mwfb-blue">
                Articles
              </span>
            </h2>
          </div>

          <div className="mwfb-related-grid">
            {relatedArticles.map(
              (article) => (
                <Link
                  href={article.href}
                  className="mwfb-related-card"
                  key={article.href}
                >
                  <h3>
                    {article.title}
                  </h3>

                  <p>
                    {article.text}
                  </p>

                  <div className="mwfb-related-link">
                    Read Article
                    <ArrowRight />
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
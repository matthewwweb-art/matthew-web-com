import Link from "next/link";

import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock3,
  HeartHandshake,
  MessageCircleReply,
  MessageSquare,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  ThumbsUp,
  UserCheck,
  XCircle,
  Zap,
} from "lucide-react";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/* ============================================================
   METADATA
============================================================ */

export const metadata = {
  title:
    "How to Respond to Online Reviews: Good and Bad | Matthew Web",

  description:
    "Learn how small businesses can respond professionally to positive reviews, negative reviews, misunderstandings, complaints, and suspicious reviews while protecting customer relationships and business credibility.",

  alternates: {
    canonical:
      "https://matthew-web.com/how-to-respond-to-online-reviews-good-and-bad",
  },

  openGraph: {
    title:
      "How to Respond to Online Reviews: Good and Bad | Matthew Web",

    description:
      "A practical small-business guide to responding to positive reviews, negative feedback, complaints, misunderstandings, and suspicious online reviews.",

    url:
      "https://matthew-web.com/how-to-respond-to-online-reviews-good-and-bad",

    siteName:
      "Matthew Web",

    type:
      "article",
  },
};

/* ============================================================
   RESPONSE PRINCIPLES
============================================================ */

const principles = [
  {
    icon:
      MessageCircleReply,

    title:
      "Respond to the Person, Not Just the Rating",

    text:
      "A review represents a customer experience or a claimed customer experience. Focus on the substance of what was said rather than treating the star count as the entire conversation.",
  },

  {
    icon:
      Clock3,

    title:
      "Respond in a Reasonable Time",

    text:
      "A business does not need to answer every review immediately, but leaving legitimate customer concerns unanswered indefinitely can make the company appear disengaged.",
  },

  {
    icon:
      ShieldCheck,

    title:
      "Stay Professional",

    text:
      "A public argument can easily become more damaging than the original review. Keep responses factual, calm, respectful, and focused on solving or clarifying the issue.",
  },

  {
    icon:
      UserCheck,

    title:
      "Protect Customer Privacy",

    text:
      "Do not publish private account details, payment information, personal information, internal records, or sensitive customer history simply to win a public disagreement.",
  },

  {
    icon:
      Target,

    title:
      "Move Complex Problems Offline",

    text:
      "When a complaint requires account details, project history, private records, or a longer conversation, invite the customer to continue through the appropriate private channel.",
  },

  {
    icon:
      HeartHandshake,

    title:
      "Treat Feedback as Business Information",

    text:
      "Reviews can reveal communication problems, service expectations, recurring customer questions, process weaknesses, or areas where the business is doing especially well.",
  },
];

/* ============================================================
   POSITIVE REVIEW PROCESS
============================================================ */

const positiveSteps = [
  {
    number:
      "01",

    title:
      "Thank the Customer",

    text:
      "Acknowledge that the customer took time to share feedback.",
  },

  {
    number:
      "02",

    title:
      "Make the Response Specific",

    text:
      "When appropriate, reference the general service or experience rather than posting the exact same generic response to everybody.",
  },

  {
    number:
      "03",

    title:
      "Keep It Natural",

    text:
      "The response does not need to become a sales pitch. A short, genuine reply is often enough.",
  },

  {
    number:
      "04",

    title:
      "Protect Privacy",

    text:
      "Do not add details about the customer or project that were not already appropriate for public discussion.",
  },
];

/* ============================================================
   NEGATIVE REVIEW PROCESS
============================================================ */

const negativeSteps = [
  {
    number:
      "01",

    title:
      "Read the Entire Review",

    text:
      "Understand the actual complaint before answering. The rating may be emotional, but the written explanation may contain a specific issue that can be addressed.",
  },

  {
    number:
      "02",

    title:
      "Check the Facts Internally",

    text:
      "Review the relevant customer history, project notes, communications, policies, or other legitimate records before making factual claims publicly.",
  },

  {
    number:
      "03",

    title:
      "Acknowledge the Concern",

    text:
      "Acknowledge what the customer is unhappy about without automatically admitting to facts the business has not verified.",
  },

  {
    number:
      "04",

    title:
      "Correct Clear Errors Carefully",

    text:
      "If important facts are incorrect, provide a brief factual clarification without exposing private information or attacking the reviewer.",
  },

  {
    number:
      "05",

    title:
      "Offer an Appropriate Next Step",

    text:
      "When the issue can be investigated or resolved privately, direct the customer to the correct contact method.",
  },

  {
    number:
      "06",

    title:
      "Stop Before It Becomes a Fight",

    text:
      "If the public exchange becomes repetitive or hostile, continuing to argue usually provides diminishing value. Preserve the record and use the platform's legitimate reporting or support processes where appropriate.",
  },
];

/* ============================================================
   REVIEW TYPES
============================================================ */

const reviewSituations = [
  {
    title:
      "Positive Review",

    approach:
      "Thank the customer, be specific where appropriate, keep the response natural, and avoid turning gratitude into an aggressive sales pitch.",
  },

  {
    title:
      "Fair Negative Review",

    approach:
      "Acknowledge the concern, verify what happened, explain the next step, and use the feedback to examine the underlying process.",
  },

  {
    title:
      "Mixed Review",

    approach:
      "Acknowledge both parts. Thank the customer for what went well and address the problem they identified.",
  },

  {
    title:
      "Customer Misunderstanding",

    approach:
      "Clarify the process or facts respectfully while avoiding language that makes the customer look foolish.",
  },

  {
    title:
      "Review With Incorrect Facts",

    approach:
      "Correct material inaccuracies briefly and factually, then invite private discussion if more detail is needed.",
  },

  {
    title:
      "Suspicious or Potentially Fake Review",

    approach:
      "Preserve the evidence, check internal records, avoid immediately accusing the reviewer publicly, and use the review platform's reporting process when the review appears to violate its rules.",
  },
];

/* ============================================================
   RESPONSE CHECKLIST
============================================================ */

const responseChecklist = [
  "Read the full review",
  "Check relevant business records",
  "Identify what actually needs a response",
  "Keep the tone professional",
  "Avoid insults or sarcasm",
  "Do not reveal private customer information",
  "Do not invent facts",
  "Do not threaten the reviewer",
  "Correct material errors carefully",
  "Provide a useful next step when appropriate",
  "Move detailed account discussions into a private channel",
  "Document recurring complaints internally",
];

/* ============================================================
   DO NOT DO
============================================================ */

const avoidItems = [
  {
    icon:
      XCircle,

    title:
      "Do Not Buy or Fabricate Reviews",

    text:
      "Businesses should not create fake customer identities, purchase invented feedback, manufacture star ratings, or ask someone to describe an experience they did not actually have.",
  },

  {
    icon:
      AlertTriangle,

    title:
      "Do Not Start a Public Argument",

    text:
      "Responding emotionally can turn one complaint into a larger public demonstration of how the business handles conflict.",
  },

  {
    icon:
      ShieldCheck,

    title:
      "Do Not Publish Private Information",

    text:
      "Customer contact information, financial details, private messages, account information, or other sensitive records should not be posted publicly to defend the business.",
  },

  {
    icon:
      MessageSquare,

    title:
      "Do Not Use the Same Robotic Response Everywhere",

    text:
      "Copying identical language onto every review can make the business appear less engaged. Templates can guide the process, but responses should still match the situation.",
  },

  {
    icon:
      Star,

    title:
      "Do Not Pressure Customers for a Specific Rating",

    text:
      "When requesting feedback, ask for an honest review rather than telling customers exactly what rating or statement they should provide.",
  },

  {
    icon:
      Target,

    title:
      "Do Not Ignore Patterns",

    text:
      "One unusual complaint may be isolated. Repeated complaints about the same issue can be valuable evidence that a business process needs attention.",
  },
];

/* ============================================================
   REVIEW REQUEST STRATEGY
============================================================ */

const reviewRequestSteps = [
  {
    title:
      "Use a Legitimate Customer Moment",

    text:
      "A completed project, successful service interaction, resolved support issue, or another genuine customer event can create a natural opportunity to request feedback.",
  },

  {
    title:
      "Ask for an Honest Review",

    text:
      "The request should invite the customer's actual opinion rather than asking only happy customers to manufacture a specific rating.",
  },

  {
    title:
      "Make the Process Easy",

    text:
      "When appropriate, provide a direct path to the legitimate review platform instead of making the customer search for the business.",
  },

  {
    title:
      "Do Not Invent Participation",

    text:
      "If customers have not left reviews yet, the correct solution is to earn and request real feedback—not populate the website with placeholders presented as real customers.",
  },
];

/* ============================================================
   BUSINESS LEARNING
============================================================ */

const learningSignals = [
  {
    signal:
      "Repeated praise for communication",

    possibleMeaning:
      "Communication may be a genuine strength worth preserving and explaining in the customer process.",
  },

  {
    signal:
      "Repeated confusion about pricing",

    possibleMeaning:
      "Pricing explanations, quotes, scope descriptions, or website messaging may need improvement.",
  },

  {
    signal:
      "Repeated scheduling complaints",

    possibleMeaning:
      "The booking, confirmation, expectation-setting, or follow-up process may need attention.",
  },

  {
    signal:
      "Customers repeatedly mention one service",

    possibleMeaning:
      "That service may deserve clearer website content, stronger examples, FAQs, or its own dedicated page.",
  },

  {
    signal:
      "Repeated compliments about speed or responsiveness",

    possibleMeaning:
      "Fast communication may be part of the company's actual customer value proposition.",
  },

  {
    signal:
      "Repeated complaints about the same failure",

    possibleMeaning:
      "The review problem may actually be an operations problem that should be fixed at the source.",
  },
];

/* ============================================================
   FAQ
============================================================ */

const faqs = [
  {
    q:
      "Should a business respond to every online review?",

    a:
      "Not every situation requires the same response, but acknowledging legitimate reviews can show that the business is engaged. Prioritize useful, professional responses rather than replying simply to increase the number of responses.",
  },

  {
    q:
      "How should a business respond to a negative review?",

    a:
      "Read the full complaint, verify the facts, acknowledge the customer's concern, correct important inaccuracies carefully, protect private information, and offer an appropriate next step when the issue can be investigated or resolved.",
  },

  {
    q:
      "What should I do if I think a review is fake?",

    a:
      "Check legitimate business records, preserve relevant evidence, avoid immediately attacking the reviewer publicly, and use the review platform's reporting process when the content appears to violate its rules.",
  },

  {
    q:
      "Can I ask customers for five-star reviews?",

    a:
      "A better practice is to ask legitimate customers for honest feedback rather than directing them toward a specific rating or statement.",
  },

  {
    q:
      "Should reviews be shown on a business website?",

    a:
      "Verified customer feedback can provide useful trust information when the business has an appropriate basis to publish it. Reviews, customer identities, ratings, and results should not be fabricated.",
  },

  {
    q:
      "Does Matthew Web offer reputation-management services?",

    a:
      "Matthew Web currently publishes business and website education about reviews, customer trust, websites, lead systems, and marketing. Any specific service request should be discussed and scoped rather than assuming reputation management is a standard Matthew Web service.",
  },
];

/* ============================================================
   RELATED ARTICLES
============================================================ */

const relatedArticles = [
  {
    title:
      "8 Marketing Mistakes Small Businesses Make",

    href:
      "/8-marketing-mistakes-small-businesses-make",

    text:
      "See how reviews fit into a broader marketing system involving trust, lead tracking, content, outreach, and measurement.",
  },

  {
    title:
      "8 Things Every Small Business Website Needs",

    href:
      "/8-things-every-small-business-website-needs",

    text:
      "Learn how legitimate customer feedback can support the trust layer of a small-business website.",
  },

  {
    title:
      "7 Reasons Why Small Business Websites Are Vital",

    href:
      "/7-reasons-why-small-business-websites-are-vital",

    text:
      "See how the business website, local search presence, customer information, and other marketing channels can work together.",
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
    "How to Respond to Online Reviews: Good and Bad",

  description:
    "A practical guide for small businesses responding to positive reviews, negative feedback, complaints, misunderstandings, incorrect claims, and suspicious reviews.",

  mainEntityOfPage: {
    "@type":
      "WebPage",

    "@id":
      "https://matthew-web.com/how-to-respond-to-online-reviews-good-and-bad",
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
        "How to Respond to Online Reviews: Good and Bad",

      item:
        "https://matthew-web.com/how-to-respond-to-online-reviews-good-and-bad",
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

export default function OnlineReviewsArticlePage() {
  return (
    <main className="mwreview-page">
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
          --mwreview-black: #020304;
          --mwreview-muted: #aebbc5;
          --mwreview-blue: #08b9f4;
          --mwreview-blue-light: #38d7ff;
          --mwreview-orange: #ff7900;
          --mwreview-orange-light: #ffab31;
          --mwreview-green: #35e07e;
          --mwreview-border: rgba(255,255,255,.09);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--mwreview-black);
        }

        .mwreview-page {
          min-height: 100vh;
          overflow: hidden;
          color: #fff;
          background: var(--mwreview-black);
        }

        .mwreview-blue {
          color: var(--mwreview-blue-light);
        }

        .mwreview-orange {
          color: var(--mwreview-orange);
        }

        /* =====================================================
           BREADCRUMBS
        ===================================================== */

        .mwreview-breadcrumb-wrap {
          border-bottom: 1px solid rgba(255,255,255,.06);
          background: #04080b;
        }

        .mwreview-breadcrumbs {
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

        .mwreview-breadcrumbs a {
          color: #8799a3;
          text-decoration: none;
        }

        .mwreview-breadcrumbs a:hover {
          color: var(--mwreview-blue-light);
        }

        .mwreview-breadcrumbs svg {
          width: 12px;
          height: 12px;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .mwreview-hero {
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

        .mwreview-hero::before {
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

        .mwreview-hero-inner {
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

        .mwreview-label {
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

        .mwreview-label svg {
          width: 16px;
          height: 16px;
        }

        .mwreview-hero h1 {
          max-width: 990px;
          margin: 0;

          font-size:
            clamp(48px,5.6vw,84px);

          line-height: .99;
          letter-spacing: -.06em;
        }

        .mwreview-description {
          max-width: 810px;
          margin: 25px 0 0;

          color: #b8c6cf;

          font-size:
            clamp(16px,1.4vw,20px);

          line-height: 1.75;
        }

        .mwreview-meta {
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
           HERO REVIEW CONSOLE
        ===================================================== */

        .mwreview-stage {
          min-height: 470px;
          display: grid;
          place-items: center;
        }

        .mwreview-console {
          width: min(100%,520px);

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

        .mwreview-console-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .mwreview-console-top strong {
          color: #81929d;
          font-size: 9px;
          letter-spacing: .12em;
        }

        .mwreview-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;

          color: #8da0aa;

          font-size: 8px;
          font-weight: 900;
        }

        .mwreview-status::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--mwreview-green);
          box-shadow: 0 0 7px rgba(53,224,126,.7);
        }

        .mwreview-main-card {
          padding: 19px;

          border: 1px solid rgba(255,121,0,.17);
          border-radius: 11px;

          background: #071015;
        }

        .mwreview-main-card span {
          color: #657984;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: .09em;
          text-transform: uppercase;
        }

        .mwreview-main-title {
          display: flex;
          align-items: center;
          gap: 9px;

          margin-top: 10px;

          color: var(--mwreview-orange-light);

          font-size: 15px;
          font-weight: 900;
        }

        .mwreview-main-title svg {
          width: 22px;
          height: 22px;
        }

        .mwreview-main-card p {
          margin: 10px 0 0;

          color: #788b95;

          font-size: 9px;
          line-height: 1.6;
        }

        .mwreview-preview-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 9px;
          margin-top: 10px;
        }

        .mwreview-preview-card {
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

        .mwreview-preview-card:nth-child(even) {
          border-color: rgba(255,121,0,.14);
        }

        .mwreview-preview-card svg {
          width: 22px;
          height: 22px;
          color: var(--mwreview-blue-light);
        }

        .mwreview-preview-card:nth-child(even) svg {
          color: var(--mwreview-orange-light);
        }

        .mwreview-preview-card strong {
          font-size: 8px;
          letter-spacing: .05em;
        }

        /* =====================================================
           ARTICLE
        ===================================================== */

        .mwreview-article-section {
          padding:
            95px
            clamp(20px,5vw,80px)
            110px;

          background: #020304;
        }

        .mwreview-layout {
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

        .mwreview-toc {
          position: sticky;
          top: 30px;

          padding: 23px;

          border: 1px solid var(--mwreview-border);
          border-radius: 14px;

          background:
            linear-gradient(
              145deg,
              #09131a,
              #04080b
            );
        }

        .mwreview-toc-title {
          display: flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 15px;

          font-size: 10px;
          font-weight: 900;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .mwreview-toc-title svg {
          width: 16px;
          height: 16px;
          color: var(--mwreview-blue-light);
        }

        .mwreview-toc a {
          display: block;
          padding: 8px 0;

          color: #8799a3;
          text-decoration: none;

          font-size: 12px;
          line-height: 1.45;
        }

        .mwreview-toc a:hover {
          color: var(--mwreview-blue-light);
        }

        .mwreview-toc-cta {
          margin-top: 18px;
          padding-top: 17px;

          border-top:
            1px solid rgba(255,255,255,.07);
        }

        .mwreview-toc-cta a {
          color: var(--mwreview-orange-light);
          font-weight: 850;
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .mwreview-content {
          min-width: 0;
        }

        .mwreview-section {
          margin-bottom: 62px;
          scroll-margin-top: 35px;
        }

        .mwreview-section h2 {
          margin: 0 0 20px;

          font-size:
            clamp(30px,3.5vw,48px);

          line-height: 1.08;
          letter-spacing: -.045em;
        }

        .mwreview-section h3 {
          margin: 32px 0 12px;

          color: var(--mwreview-blue-light);

          font-size: 21px;
          line-height: 1.3;
        }

        .mwreview-section p {
          margin: 0 0 19px;

          color: #b6c3ca;

          font-size: 16px;
          line-height: 1.85;
        }

        .mwreview-section strong {
          color: #fff;
        }

        /* =====================================================
           ANSWER
        ===================================================== */

        .mwreview-answer {
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

        .mwreview-answer-label {
          display: flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 12px;

          color: var(--mwreview-blue-light);

          font-size: 9px;
          font-weight: 950;
          letter-spacing: .11em;
          text-transform: uppercase;
        }

        .mwreview-answer-label svg {
          width: 17px;
          height: 17px;
        }

        .mwreview-answer h2 {
          margin: 0 0 12px;

          font-size:
            clamp(24px,3vw,36px);

          line-height: 1.1;
        }

        .mwreview-answer p {
          margin: 0;

          color: #b7c5cc;

          font-size: 15px;
          line-height: 1.75;
        }

        /* =====================================================
           PRINCIPLES
        ===================================================== */

        .mwreview-principle-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 14px;
          margin-top: 27px;
        }

        .mwreview-principle-card {
          min-height: 245px;
          padding: 23px;

          border: 1px solid rgba(8,185,244,.14);
          border-radius: 14px;

          background: rgba(8,185,244,.018);
        }

        .mwreview-principle-card:nth-child(even) {
          border-color: rgba(255,121,0,.14);
          background: rgba(255,121,0,.016);
        }

        .mwreview-principle-card svg {
          width: 30px;
          height: 30px;
          margin-bottom: 16px;
          color: var(--mwreview-blue-light);
        }

        .mwreview-principle-card:nth-child(even) svg {
          color: var(--mwreview-orange-light);
        }

        .mwreview-principle-card h3 {
          margin: 0 0 10px;
          color: #fff;
          font-size: 18px;
        }

        .mwreview-principle-card p {
          margin: 0;
          color: var(--mwreview-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           PROCESS CARDS
        ===================================================== */

        .mwreview-process-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 12px;
          margin-top: 28px;
        }

        .mwreview-process-card {
          min-height: 220px;
          padding: 22px;

          border: 1px solid rgba(8,185,244,.14);
          border-radius: 13px;

          background: #071015;
        }

        .mwreview-process-card:nth-child(even) {
          border-color: rgba(255,121,0,.14);
        }

        .mwreview-process-number {
          margin-bottom: 14px;

          color: var(--mwreview-blue-light);

          font-size: 9px;
          font-weight: 950;
          letter-spacing: .1em;
        }

        .mwreview-process-card:nth-child(even)
          .mwreview-process-number {
          color: var(--mwreview-orange-light);
        }

        .mwreview-process-card h3 {
          margin: 0 0 9px;
          color: #fff;
          font-size: 18px;
        }

        .mwreview-process-card p {
          margin: 0;

          color: var(--mwreview-muted);

          font-size: 12px;
          line-height: 1.66;
        }

        /* =====================================================
           SITUATION GRID
        ===================================================== */

        .mwreview-situation-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 12px;
          margin-top: 27px;
        }

        .mwreview-situation-card {
          padding: 23px;

          border: 1px solid var(--mwreview-border);
          border-radius: 13px;

          background: #071015;
        }

        .mwreview-situation-card h3 {
          margin: 0 0 10px;
          color: var(--mwreview-blue-light);
          font-size: 18px;
        }

        .mwreview-situation-card:nth-child(even) h3 {
          color: var(--mwreview-orange-light);
        }

        .mwreview-situation-card p {
          margin: 0;

          color: var(--mwreview-muted);

          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           CHECKLIST
        ===================================================== */

        .mwreview-checklist {
          display: grid;
          gap: 10px;

          margin: 25px 0;
          padding: 0;

          list-style: none;
        }

        .mwreview-checklist li {
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

        .mwreview-checklist svg {
          width: 17px;
          height: 17px;
          flex: 0 0 auto;
          margin-top: 1px;
          color: var(--mwreview-blue-light);
        }

        /* =====================================================
           AVOID
        ===================================================== */

        .mwreview-avoid-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 12px;
          margin-top: 27px;
        }

        .mwreview-avoid-card {
          min-height: 235px;
          padding: 23px;

          border: 1px solid rgba(255,121,0,.14);
          border-radius: 13px;

          background: rgba(255,121,0,.014);
        }

        .mwreview-avoid-card:nth-child(even) {
          border-color: rgba(8,185,244,.14);
          background: rgba(8,185,244,.014);
        }

        .mwreview-avoid-card svg {
          width: 28px;
          height: 28px;
          margin-bottom: 15px;
          color: var(--mwreview-orange-light);
        }

        .mwreview-avoid-card:nth-child(even) svg {
          color: var(--mwreview-blue-light);
        }

        .mwreview-avoid-card h3 {
          margin: 0 0 9px;
          color: #fff;
          font-size: 18px;
        }

        .mwreview-avoid-card p {
          margin: 0;

          color: var(--mwreview-muted);

          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           REQUEST REVIEWS
        ===================================================== */

        .mwreview-request-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 12px;
          margin-top: 27px;
        }

        .mwreview-request-card {
          padding: 23px;

          border: 1px solid var(--mwreview-border);
          border-radius: 13px;

          background: #071015;
        }

        .mwreview-request-card h3 {
          margin: 0 0 9px;
          color: var(--mwreview-blue-light);
          font-size: 18px;
        }

        .mwreview-request-card:nth-child(even) h3 {
          color: var(--mwreview-orange-light);
        }

        .mwreview-request-card p {
          margin: 0;

          color: var(--mwreview-muted);

          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           LEARNING TABLE
        ===================================================== */

        .mwreview-table-wrap {
          margin-top: 28px;
          overflow-x: auto;

          border: 1px solid var(--mwreview-border);
          border-radius: 15px;

          background: #071015;
        }

        .mwreview-table {
          width: 100%;
          min-width: 760px;

          border-collapse: collapse;
        }

        .mwreview-table th,
        .mwreview-table td {
          padding: 18px;

          border-bottom:
            1px solid rgba(255,255,255,.07);

          vertical-align: top;
          text-align: left;
        }

        .mwreview-table th {
          color: #fff;
          background: #0a151b;

          font-size: 10px;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .mwreview-table th:nth-child(2) {
          color: var(--mwreview-orange-light);
        }

        .mwreview-table td {
          color: #aebbc5;
          font-size: 12px;
          line-height: 1.65;
        }

        .mwreview-table td:first-child {
          color: #fff;
          font-weight: 800;
        }

        .mwreview-table tr:last-child td {
          border-bottom: 0;
        }

        /* =====================================================
           CALLOUT
        ===================================================== */

        .mwreview-callout {
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

        .mwreview-callout-icon {
          width: 48px;
          height: 48px;

          display: grid;
          place-items: center;

          margin-bottom: 15px;

          border: 1px solid rgba(255,121,0,.25);
          border-radius: 12px;

          color: var(--mwreview-orange-light);
          background: rgba(255,121,0,.045);
        }

        .mwreview-callout-icon svg {
          width: 24px;
          height: 24px;
        }

        .mwreview-callout h3 {
          margin: 0 0 10px;
          color: #fff;
          font-size: 22px;
        }

        .mwreview-callout p {
          margin: 0;
          color: var(--mwreview-muted);
          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           FAQ
        ===================================================== */

        .mwreview-faq-grid {
          display: grid;
          gap: 12px;
          margin-top: 27px;
        }

        .mwreview-faq-card {
          padding: 23px;

          border: 1px solid var(--mwreview-border);
          border-radius: 13px;

          background: #071015;
        }

        .mwreview-faq-card h3 {
          margin: 0 0 9px;
          color: var(--mwreview-blue-light);
          font-size: 17px;
        }

        .mwreview-faq-card:nth-child(even) h3 {
          color: var(--mwreview-orange-light);
        }

        .mwreview-faq-card p {
          margin: 0;

          color: var(--mwreview-muted);

          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           BUTTONS / CTA
        ===================================================== */

        .mwreview-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 25px;
        }

        .mwreview-btn {
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

        .mwreview-btn:hover {
          transform: translateY(-2px);
        }

        .mwreview-btn-blue {
          border: 1px solid rgba(56,215,255,.5);

          background:
            linear-gradient(
              180deg,
              #0ab6ed,
              #0789b6
            );
        }

        .mwreview-btn-orange {
          border: 1px solid rgba(255,176,49,.55);

          background:
            linear-gradient(
              180deg,
              #ff9519,
              #f16600
            );
        }

        .mwreview-btn-dark {
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.03);
        }

        .mwreview-btn svg {
          width: 17px;
          height: 17px;
        }

        .mwreview-article-cta {
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

        .mwreview-article-cta h2 {
          max-width: 830px;
          margin: 0;

          font-size:
            clamp(31px,4vw,49px);

          line-height: 1.05;
          letter-spacing: -.045em;
        }

        .mwreview-article-cta p {
          max-width: 790px;
          margin: 17px 0 0;

          color: var(--mwreview-muted);

          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           RELATED
        ===================================================== */

        .mwreview-related-section {
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

        .mwreview-related-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        .mwreview-related-title {
          margin-bottom: 32px;
        }

        .mwreview-related-title span {
          display: flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 9px;

          color: var(--mwreview-orange-light);

          font-size: 9px;
          font-weight: 900;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .mwreview-related-title svg {
          width: 16px;
          height: 16px;
        }

        .mwreview-related-title h2 {
          margin: 0;

          font-size:
            clamp(31px,4vw,49px);

          letter-spacing: -.045em;
        }

        .mwreview-related-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 14px;
        }

        .mwreview-related-card {
          min-height: 245px;

          display: flex;
          flex-direction: column;

          padding: 24px;

          border: 1px solid var(--mwreview-border);
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

        .mwreview-related-card:hover {
          transform: translateY(-4px);
          border-color: rgba(8,185,244,.3);
        }

        .mwreview-related-card:nth-child(even):hover {
          border-color: rgba(255,121,0,.3);
        }

        .mwreview-related-card h3 {
          margin: 0;
          font-size: 18px;
          line-height: 1.3;
        }

        .mwreview-related-card p {
          margin: 13px 0 0;
          color: var(--mwreview-muted);
          font-size: 12px;
          line-height: 1.65;
        }

        .mwreview-related-link {
          display: flex;
          align-items: center;
          gap: 7px;

          margin-top: auto;
          padding-top: 21px;

          color: var(--mwreview-blue-light);

          font-size: 11px;
          font-weight: 850;
        }

        .mwreview-related-card:nth-child(even)
          .mwreview-related-link {
          color: var(--mwreview-orange-light);
        }

        .mwreview-related-link svg {
          width: 15px;
          height: 15px;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1050px) {
          .mwreview-hero-inner {
            grid-template-columns: 1fr;
          }

          .mwreview-hero-copy {
            text-align: center;
          }

          .mwreview-label {
            margin-left: auto;
            margin-right: auto;
          }

          .mwreview-description {
            margin-left: auto;
            margin-right: auto;
          }

          .mwreview-meta {
            justify-content: center;
          }

          .mwreview-related-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .mwreview-related-card:last-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 850px) {
          .mwreview-layout {
            grid-template-columns: 1fr;
          }

          .mwreview-toc {
            position: static;

            display: grid;

            grid-template-columns:
              repeat(2,1fr);

            gap: 0 20px;
          }

          .mwreview-toc-title,
          .mwreview-toc-cta {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 700px) {
          .mwreview-hero-inner {
            padding: 70px 16px;
          }

          .mwreview-hero h1 {
            font-size: clamp(43px,13vw,65px);
          }

          .mwreview-article-section {
            padding: 70px 16px 85px;
          }

          .mwreview-principle-grid,
          .mwreview-process-grid,
          .mwreview-situation-grid,
          .mwreview-avoid-grid,
          .mwreview-request-grid,
          .mwreview-related-grid {
            grid-template-columns: 1fr;
          }

          .mwreview-related-card:last-child {
            grid-column: auto;
          }

          .mwreview-related-section {
            padding: 70px 16px;
          }
        }

        @media (max-width: 500px) {
          .mwreview-stage {
            min-height: 450px;
            transform: scale(.9);
            margin: -10px -20px;
          }

          .mwreview-preview-grid {
            grid-template-columns: 1fr;
          }

          .mwreview-toc {
            grid-template-columns: 1fr;
          }

          .mwreview-toc-title,
          .mwreview-toc-cta {
            grid-column: auto;
          }

          .mwreview-section p {
            font-size: 15px;
          }
        }
      `}</style>

      {/* ======================================================
          BREADCRUMBS
      ====================================================== */}

      <div className="mwreview-breadcrumb-wrap">
        <nav
          className="mwreview-breadcrumbs"
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
            How to Respond to Online Reviews
          </span>
        </nav>
      </div>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="mwreview-hero">
        <div className="mwreview-hero-inner">
          <div className="mwreview-hero-copy">
            <div className="mwreview-label">
              <BookOpen />
              Business • Reviews • Customer Trust
            </div>

            <h1>
              How to Respond to{" "}
              <span className="mwreview-blue">
                Online Reviews:
              </span>{" "}
              <span className="mwreview-orange">
                Good and Bad
              </span>
            </h1>

            <p className="mwreview-description">
              Positive reviews deserve
              appreciation. Negative reviews
              deserve attention rather than a
              public fight. The goal is to
              respond professionally, protect
              customer privacy, correct important
              facts when necessary, and learn
              from legitimate feedback.
            </p>

            <div className="mwreview-meta">
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
            className="mwreview-stage"
            aria-hidden="true"
          >
            <div className="mwreview-console">
              <div className="mwreview-console-top">
                <strong>
                  CUSTOMER FEEDBACK // RESPONSE
                </strong>

                <span className="mwreview-status">
                  LISTEN
                </span>
              </div>

              <div className="mwreview-main-card">
                <span>
                  REVIEW RESPONSE
                </span>

                <div className="mwreview-main-title">
                  <MessageCircleReply />
                  Respond With Professionalism
                </div>

                <p>
                  Listen → Verify → Respond →
                  Resolve → Learn
                </p>
              </div>

              <div className="mwreview-preview-grid">
                <div className="mwreview-preview-card">
                  <ThumbsUp />
                  <strong>
                    THANK
                  </strong>
                </div>

                <div className="mwreview-preview-card">
                  <ShieldCheck />
                  <strong>
                    PROTECT
                  </strong>
                </div>

                <div className="mwreview-preview-card">
                  <Target />
                  <strong>
                    IMPROVE
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

      <article className="mwreview-article-section">
        <div className="mwreview-layout">
          {/* ==================================================
              TOC
          ================================================== */}

          <aside className="mwreview-toc">
            <div className="mwreview-toc-title">
              <BookOpen />
              In This Article
            </div>

            <a href="#short-answer">
              Short Answer
            </a>

            <a href="#principles">
              Response Principles
            </a>

            <a href="#positive">
              Positive Reviews
            </a>

            <a href="#negative">
              Negative Reviews
            </a>

            <a href="#situations">
              Different Review Situations
            </a>

            <a href="#fake-reviews">
              Suspicious Reviews
            </a>

            <a href="#dont">
              What Not to Do
            </a>

            <a href="#requesting">
              Asking for Reviews
            </a>

            <a href="#learning">
              Learn From Feedback
            </a>

            <a href="#website">
              Reviews & Your Website
            </a>

            <a href="#faq">
              FAQs
            </a>

            <div className="mwreview-toc-cta">
              <Link href="/8-marketing-mistakes-small-businesses-make">
                Small Business Marketing →
              </Link>
            </div>
          </aside>

          <div className="mwreview-content">
            {/* =================================================
                SHORT ANSWER
            ================================================= */}

            <section
              className="mwreview-answer"
              id="short-answer"
            >
              <div className="mwreview-answer-label">
                <Zap />
                Short Answer
              </div>

              <h2>
                How Should a Business Respond to
                Online Reviews?
              </h2>

              <p>
                <strong>
                  Respond professionally, address
                  the actual feedback, protect
                  customer privacy, verify facts
                  before correcting them, move
                  detailed disputes into private
                  communication, and use recurring
                  feedback to improve the
                  business.
                </strong>{" "}
                Positive reviews should be
                acknowledged naturally, while
                negative reviews should not turn
                into public arguments.
              </p>
            </section>

            {/* =================================================
                PRINCIPLES
            ================================================= */}

            <section
              className="mwreview-section"
              id="principles"
            >
              <h2>
                Six Principles for{" "}
                <span className="mwreview-blue">
                  Review Responses
                </span>
              </h2>

              <p>
                An online review is visible to
                more people than the customer who
                wrote it.
              </p>

              <p>
                The business&apos;s response can
                also show future customers how
                the company communicates when
                somebody is happy, disappointed,
                confused, or upset.
              </p>

              <div className="mwreview-principle-grid">
                {principles.map(
                  (item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        className="mwreview-principle-card"
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
            </section>

            {/* =================================================
                POSITIVE
            ================================================= */}

            <section
              className="mwreview-section"
              id="positive"
            >
              <h2>
                How to Respond to a{" "}
                <span className="mwreview-orange">
                  Positive Review
                </span>
              </h2>

              <p>
                Positive feedback does not require
                a complicated response.
              </p>

              <p>
                The customer already had an
                experience worth sharing. The
                response should acknowledge that
                without sounding automated or
                turning the exchange into another
                sales pitch.
              </p>

              <div className="mwreview-process-grid">
                {positiveSteps.map(
                  (step) => (
                    <div
                      className="mwreview-process-card"
                      key={step.number}
                    >
                      <div className="mwreview-process-number">
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

              <div className="mwreview-callout">
                <div className="mwreview-callout-icon">
                  <ThumbsUp />
                </div>

                <h3>
                  Keep Gratitude Genuine
                </h3>

                <p>
                  A simple thank-you that reflects
                  the actual review can feel much
                  more human than a long response
                  packed with promotional
                  language.
                </p>
              </div>
            </section>

            {/* =================================================
                NEGATIVE
            ================================================= */}

            <section
              className="mwreview-section"
              id="negative"
            >
              <h2>
                How to Respond to a{" "}
                <span className="mwreview-blue">
                  Negative Review
                </span>
              </h2>

              <p>
                A negative review can be
                frustrating—especially when the
                business believes important
                details are missing or incorrect.
              </p>

              <p>
                The public response should still
                be deliberate.
              </p>

              <div className="mwreview-process-grid">
                {negativeSteps.map(
                  (step) => (
                    <div
                      className="mwreview-process-card"
                      key={step.number}
                    >
                      <div className="mwreview-process-number">
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

              <div className="mwreview-callout">
                <div className="mwreview-callout-icon">
                  <MessageCircleReply />
                </div>

                <h3>
                  Solve What Can Be Solved
                </h3>

                <p>
                  The purpose of the response
                  should be to clarify, resolve,
                  or appropriately close the
                  issue—not to publicly defeat
                  the customer in an argument.
                </p>
              </div>
            </section>

            {/* =================================================
                SITUATIONS
            ================================================= */}

            <section
              className="mwreview-section"
              id="situations"
            >
              <h2>
                Different Reviews Need{" "}
                <span className="mwreview-orange">
                  Different Responses
                </span>
              </h2>

              <div className="mwreview-situation-grid">
                {reviewSituations.map(
                  (item) => (
                    <div
                      className="mwreview-situation-card"
                      key={item.title}
                    >
                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.approach}
                      </p>
                    </div>
                  )
                )}
              </div>

              <h3>
                Before You Respond
              </h3>

              <ul className="mwreview-checklist">
                {responseChecklist.map(
                  (item) => (
                    <li key={item}>
                      <CheckCircle2 />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </section>

            {/* =================================================
                SUSPICIOUS / FAKE
            ================================================= */}

            <section
              className="mwreview-section"
              id="fake-reviews"
            >
              <h2>
                What if the Review Looks{" "}
                <span className="mwreview-blue">
                  Fake or Suspicious?
                </span>
              </h2>

              <p>
                A business may occasionally
                encounter a review it cannot
                connect to a customer, project,
                appointment, or other legitimate
                interaction.
              </p>

              <p>
                That alone does not prove the
                review is fake.
              </p>

              <p>
                The customer may have used a
                different account name, another
                person may have been involved in
                the transaction, or the business
                may simply need more information
                to identify what happened.
              </p>

              <p>
                A reasonable process is:
              </p>

              <ul className="mwreview-checklist">
                <li>
                  <CheckCircle2 />
                  Check legitimate customer and
                  project records
                </li>

                <li>
                  <CheckCircle2 />
                  Preserve screenshots or other
                  relevant evidence
                </li>

                <li>
                  <CheckCircle2 />
                  Avoid publishing private
                  customer records
                </li>

                <li>
                  <CheckCircle2 />
                  Ask for clarification when
                  appropriate
                </li>

                <li>
                  <CheckCircle2 />
                  Review the platform&apos;s
                  applicable review policies
                </li>

                <li>
                  <CheckCircle2 />
                  Use the platform&apos;s
                  reporting process when there is
                  a legitimate basis to do so
                </li>
              </ul>

              <div className="mwreview-callout">
                <div className="mwreview-callout-icon">
                  <AlertTriangle />
                </div>

                <h3>
                  Suspicious Does Not Automatically
                  Mean Fake
                </h3>

                <p>
                  Verify what you can before
                  publicly accusing someone of
                  dishonesty. A mistaken
                  accusation can create a new
                  problem instead of resolving
                  the original one.
                </p>
              </div>
            </section>

            {/* =================================================
                DON'T
            ================================================= */}

            <section
              className="mwreview-section"
              id="dont"
            >
              <h2>
                What Businesses Should{" "}
                <span className="mwreview-orange">
                  Avoid
                </span>
              </h2>

              <div className="mwreview-avoid-grid">
                {avoidItems.map(
                  (item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        className="mwreview-avoid-card"
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

              <div className="mwreview-callout">
                <div className="mwreview-callout-icon">
                  <Star />
                </div>

                <h3>
                  Earn Reviews. Do Not Manufacture
                  Them.
                </h3>

                <p>
                  Real customer feedback provides
                  useful evidence because it came
                  from a real customer
                  experience. Fabricated reviews
                  destroy the value that reviews
                  are supposed to provide.
                </p>
              </div>
            </section>

            {/* =================================================
                REQUESTING
            ================================================= */}

            <section
              className="mwreview-section"
              id="requesting"
            >
              <h2>
                When Should You{" "}
                <span className="mwreview-blue">
                  Ask for a Review?
                </span>
              </h2>

              <p>
                Review requests work best when
                they are connected to an actual
                customer event.
              </p>

              <p>
                That may be after a project has
                been completed, a service was
                delivered, or another legitimate
                interaction has created a natural
                opportunity for feedback.
              </p>

              <div className="mwreview-request-grid">
                {reviewRequestSteps.map(
                  (item) => (
                    <div
                      className="mwreview-request-card"
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

              <div className="mwreview-callout">
                <div className="mwreview-callout-icon">
                  <HeartHandshake />
                </div>

                <h3>
                  Ask for Honest Feedback
                </h3>

                <p>
                  The goal is not to tell the
                  customer what to say. The goal
                  is to make it easy for a real
                  customer to share their actual
                  experience.
                </p>
              </div>
            </section>

            {/* =================================================
                LEARNING
            ================================================= */}

            <section
              className="mwreview-section"
              id="learning"
            >
              <h2>
                Reviews Are Also{" "}
                <span className="mwreview-orange">
                  Business Data
                </span>
              </h2>

              <p>
                Individual reviews matter, but
                patterns across many customer
                interactions can be even more
                useful.
              </p>

              <div className="mwreview-table-wrap">
                <table className="mwreview-table">
                  <thead>
                    <tr>
                      <th>
                        Review Pattern
                      </th>

                      <th>
                        What It May Tell the Business
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {learningSignals.map(
                      (item) => (
                        <tr key={item.signal}>
                          <td>
                            {item.signal}
                          </td>

                          <td>
                            {item.possibleMeaning}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>

              <p>
                Reviews should not be treated as
                perfect research data. They
                represent individual experiences
                and can be incomplete or
                subjective.
              </p>

              <p>
                But recurring patterns can still
                help identify questions worth
                investigating.
              </p>
            </section>

            {/* =================================================
                WEBSITE
            ================================================= */}

            <section
              className="mwreview-section"
              id="website"
            >
              <h2>
                Reviews and Your{" "}
                <span className="mwreview-blue">
                  Business Website
                </span>
              </h2>

              <p>
                Real customer feedback can support
                the trust layer of a website.
              </p>

              <p>
                But the key word is
                <strong>
                  {" "}
                  real.
                </strong>
              </p>

              <p>
                A website should not invent names,
                customer photographs, star
                ratings, quotations, or outcomes
                simply because the page looks
                better with testimonials on it.
              </p>

              <p>
                If verified feedback is not
                available yet, it is better to
                build trust through:
              </p>

              <ul className="mwreview-checklist">
                <li>
                  <ShieldCheck />
                  Accurate business information
                </li>

                <li>
                  <ShieldCheck />
                  Real project examples
                </li>

                <li>
                  <ShieldCheck />
                  Clear pricing or scope
                  information where appropriate
                </li>

                <li>
                  <ShieldCheck />
                  A transparent customer process
                </li>

                <li>
                  <ShieldCheck />
                  Useful educational content
                </li>

                <li>
                  <ShieldCheck />
                  Clear communication
                </li>

                <li>
                  <ShieldCheck />
                  Verified reviews when they
                  become available
                </li>
              </ul>

              <div className="mwreview-buttons">
                <Link
                  href="/testimonials"
                  className="mwreview-btn mwreview-btn-blue"
                >
                  Matthew Web Customer Experience
                  <ArrowRight />
                </Link>

                <Link
                  href="/8-things-every-small-business-website-needs"
                  className="mwreview-btn mwreview-btn-dark"
                >
                  Website Trust Checklist
                </Link>
              </div>
            </section>

            {/* =================================================
                SEARCH / LOCAL
            ================================================= */}

            <section className="mwreview-section">
              <h2>
                Reviews Are One Piece of a{" "}
                <span className="mwreview-orange">
                  Larger Local Presence
                </span>
              </h2>

              <p>
                Customer feedback can support
                trust and local discovery, but a
                complete local presence also
                involves accurate business
                information, a useful website,
                legitimate service-area
                information, consistent contact
                details, relevant content, and
                properly maintained business
                profiles.
              </p>

              <p>
                Reviews should support that
                system—not replace it.
              </p>

              <div className="mwreview-callout">
                <div className="mwreview-callout-icon">
                  <SearchCheck />
                </div>

                <h3>
                  Reputation Starts With the
                  Actual Customer Experience
                </h3>

                <p>
                  Review responses can improve how
                  the business communicates
                  publicly, but the strongest
                  long-term strategy is still to
                  provide a customer experience
                  worth recommending.
                </p>
              </div>
            </section>

            {/* =================================================
                FAQ
            ================================================= */}

            <section
              className="mwreview-section"
              id="faq"
            >
              <h2>
                Online Review{" "}
                <span className="mwreview-blue">
                  FAQs
                </span>
              </h2>

              <div className="mwreview-faq-grid">
                {faqs.map(
                  (item) => (
                    <div
                      className="mwreview-faq-card"
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

            <section className="mwreview-article-cta">
              <h2>
                Build Trust Through{" "}
                <span className="mwreview-orange">
                  Real Customer Experiences.
                </span>
              </h2>

              <p>
                A professional website can help
                your business present accurate
                information, real work, useful
                customer content, clear contact
                paths, and verified feedback as
                it becomes available. Matthew Web
                builds websites and business
                systems around information that
                can actually be supported.
              </p>

              <div className="mwreview-buttons">
                <Link
                  href="/contact-us"
                  className="mwreview-btn mwreview-btn-orange"
                >
                  Discuss Your Website
                  <ArrowRight />
                </Link>

                <Link
                  href="/small-business-websites"
                  className="mwreview-btn mwreview-btn-blue"
                >
                  Small Business Websites
                </Link>

                <Link
                  href="/8-marketing-mistakes-small-businesses-make"
                  className="mwreview-btn mwreview-btn-dark"
                >
                  Marketing Guide
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* ======================================================
          RELATED ARTICLES
      ====================================================== */}

      <section className="mwreview-related-section">
        <div className="mwreview-related-inner">
          <div className="mwreview-related-title">
            <span>
              <Sparkles />
              Continue Reading
            </span>

            <h2>
              Related{" "}
              <span className="mwreview-blue">
                Articles
              </span>
            </h2>
          </div>

          <div className="mwreview-related-grid">
            {relatedArticles.map(
              (article) => (
                <Link
                  href={article.href}
                  className="mwreview-related-card"
                  key={article.href}
                >
                  <h3>
                    {article.title}
                  </h3>

                  <p>
                    {article.text}
                  </p>

                  <div className="mwreview-related-link">
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
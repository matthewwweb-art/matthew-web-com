"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Examples", href: "/examples" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact Us", href: "/contact-us" },
];

const images = {
  logo:
    "https://d14tal8bchn59o.cloudfront.net/pD8SMCm46GE9kXJfrsm-3pOgtGU_bUZ6M378zAftc-g/w:1920/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23501021/Screenshot_2025-12-19_174653_original.png",
};

const searchLinks = [
  {
    title: "Home",
    href: "/",
    description:
      "Matthew-web homepage with website design, digital agency services, free website demo, examples, pricing, FAQ, and contact form.",
    keywords:
      "home matthew web website design digital agency madison maine free demo small business websites",
  },
  {
    title: "About Us",
    href: "/about-us",
    description:
      "Learn about Matthew, Adam Matthew Charest, affordable website design, and how we help small businesses grow online.",
    keywords:
      "about us adam matthew charest matthew web designer madison maine small business affordable websites",
  },
  {
    title: "About Matthew",
    href: "/about-us#about-matthew",
    description:
      "Information about Matthew as a web design firm based in Madison, Maine.",
    keywords:
      "about matthew web design firm madison maine affordable website company",
  },
  {
    title: "A Little About Me",
    href: "/about-us#about-owner",
    description:
      "Learn more about Adam Matthew Charest and his website design work.",
    keywords:
      "adam matthew charest owner web designer coder about me",
  },
  {
    title: "FAQ",
    href: "/about-us#faq",
    description:
      "Common questions about website design, free demos, monthly service, SEO, domains, and mobile websites.",
    keywords:
      "faq questions answers free demo monthly service seo domain mobile website",
  },
  {
    title: "Services",
    href: "/services",
    description:
      "Website design, SEO, social media marketing, reputation management, branding, and digital strategy services.",
    keywords:
      "services website design seo social media reputation management branding digital strategy",
  },
  {
    title: "Affordable Website Design",
    href: "/services#website-design",
    description:
      "Professional website design for small businesses that need a clean, modern, affordable online presence.",
    keywords:
      "affordable website design professional web design small business site design custom website",
  },
  {
    title: "Search Engine Optimization",
    href: "/services#seo",
    description:
      "SEO services to help your website get discovered by customers searching online.",
    keywords:
      "seo search engine optimization google ranking keywords indexing website traffic search engines",
  },
  {
    title: "Social Media Marketing",
    href: "/services#social-media-marketing",
    description:
      "Social media marketing services for Facebook, Instagram, and other platforms.",
    keywords:
      "social media marketing facebook instagram twitter content ads promotion",
  },
  {
    title: "Reputation Management",
    href: "/services#reputation-management",
    description:
      "Review monitoring, reputation protection, and help increasing positive customer reviews.",
    keywords:
      "reputation management reviews online reviews five star reviews review monitoring",
  },
  {
    title: "Branding & Design",
    href: "/services#branding-design",
    description:
      "Brand identity, design, and creative services for small businesses.",
    keywords:
      "branding design logo brand identity business design visual identity",
  },
  {
    title: "Digital Strategy",
    href: "/services#digital-strategy",
    description:
      "Digital marketing strategy to help your business reach more customers online.",
    keywords:
      "digital strategy marketing strategy online business plan seo social media advertising",
  },
  {
    title: "Examples",
    href: "/examples",
    description:
      "Website examples and sample designs showing different industries and layouts.",
    keywords:
      "examples website examples gallery samples portfolio web design templates",
  },
  {
    title: "Website Examples Gallery",
    href: "/examples#website-examples",
    description:
      "View website example images for construction, restaurants, IT, repair, real estate, dentistry, and more.",
    keywords:
      "website examples gallery construction restaurant it repair real estate dentist portfolio",
  },
  {
    title: "Blog",
    href: "/blog",
    description:
      "Helpful website design and small business marketing articles.",
    keywords:
      "blog articles website tips small business marketing seo web design",
  },
  {
    title: "Why a Facebook Page is Not a Substitute for a Website",
    href: "/blog#facebook-page-not-website",
    description:
      "Article about why a Facebook page should not replace a professional website.",
    keywords:
      "facebook page substitute website business website social media online presence",
  },
  {
    title: "7 Signs You Need a New Website",
    href: "/blog#signs-you-need-new-website",
    description:
      "Article about signs your small business website may need to be redesigned.",
    keywords:
      "new website redesign outdated website signs website business website",
  },
  {
    title: "Why DIY Site Builders Are Bad for Small Businesses",
    href: "/blog#diy-site-builders",
    description:
      "Article about problems with DIY website builders for small businesses.",
    keywords:
      "diy site builders bad small business wix godaddy website builder",
  },
  {
    title: "8 Things Every Small Business Website Needs",
    href: "/blog#small-business-website-needs",
    description:
      "Article about important things every small business website should include.",
    keywords:
      "small business website needs website essentials contact seo mobile design",
  },
  {
    title: "How To Respond to Online Reviews",
    href: "/blog#respond-online-reviews",
    description:
      "Article about responding to good and bad online reviews.",
    keywords:
      "respond online reviews good reviews bad reviews reputation management",
  },
  {
    title: "Testimonials",
    href: "/testimonials",
    description:
      "Customer testimonials and five-star reviews for Matthew website design services.",
    keywords:
      "testimonials reviews customer reviews five star reviews feedback",
  },
  {
    title: "Five Star Reviews",
    href: "/testimonials#five-star-reviews",
    description:
      "Read customer reviews and testimonials about website design services.",
    keywords:
      "five star reviews testimonials customer reviews web design reviews",
  },
  {
    title: "Pricing",
    href: "/pricing",
    description:
      "Simple affordable pricing for website design, monthly service, reputation management, and additional services.",
    keywords:
      "pricing website cost affordable website monthly service setup fee",
  },
  {
    title: "Website Design & Setup",
    href: "/pricing#website-design-setup",
    description:
      "One-time website design and setup package with first five pages, mobile optimization, SEO, and domain connection.",
    keywords:
      "website design setup 499 five pages mobile optimization seo domain setup",
  },
  {
    title: "Website Monthly Service",
    href: "/pricing#website-monthly-service",
    description:
      "Monthly website service including hosting, SSL, updates, traffic stats, and support.",
    keywords:
      "monthly service 49 hosting ssl updates support traffic stats website maintenance",
  },
  {
    title: "Reputation Management Pricing",
    href: "/pricing#reputation-management-pricing",
    description:
      "Monthly reputation management service for review monitoring and improving customer reviews.",
    keywords:
      "reputation management pricing 99 reviews monitoring customer reviews",
  },
  {
    title: "Custom Software",
    href: "/pricing#custom-software",
    description:
      "Custom CRM systems, AI tools, dashboards, booking tools, lead tracking systems, and business software.",
    keywords:
      "custom software crm ai customer management dashboard booking admin panel lead tracking automation csm",
  },
  {
    title: "Basic Logo Creation",
    href: "/pricing#logo-creation",
    description:
      "Basic professional logo creation for your website, social media, and marketing materials.",
    keywords:
      "logo creation basic logo design branding business logo 399",
  },
  {
    title: "Website Indexing",
    href: "/pricing#website-indexing",
    description:
      "Website indexing help for Google and other search engines.",
    keywords:
      "website indexing google search console bing webmaster sitemap index seo 15",
  },
  {
    title: "Website Cost Comparison",
    href: "/pricing#website-cost-comparison",
    description:
      "Compare Matthew-web website pricing against traditional website design companies.",
    keywords:
      "website cost comparison affordable pricing competition web designer cost",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    description:
      "Contact Matthew-web to request your free website mockup and talk about your project.",
    keywords:
      "contact us contact matthew web phone email free website mockup form",
  },
  {
    title: "Contact Form",
    href: "/contact-us#contact-form",
    description:
      "Fill out the contact form to get started with a free website mockup.",
    keywords:
      "contact form submit form request website demo website mockup",
  },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filteredResults = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();

    if (!cleanQuery) {
      return searchLinks;
    }

    const words = cleanQuery.split(/\s+/).filter(Boolean);

    return searchLinks.filter((item) => {
      const searchableText = `${item.title} ${item.description} ${item.keywords}`.toLowerCase();

      return words.every((word) => searchableText.includes(word));
    });
  }, [query]);

  return (
    <main>
      <SiteHeader />

      <section className="page-title">
        <h1>Search</h1>
      </section>

      <section className="search-section">
        <div className="search-wrap">
          <h2>Search matthew-web</h2>
          <p>
            Type what you're looking for below. Results can take you directly to
            pages or specific sections.
          </p>

          <input
            className="search-input"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search website design, SEO, pricing, custom software..."
            autoFocus
          />

          <div className="result-count">
            {filteredResults.length} result
            {filteredResults.length === 1 ? "" : "s"} found
          </div>

          <div className="results-list">
            {filteredResults.length > 0 ? (
              filteredResults.map((item) => (
                <Link href={item.href} className="result-card" key={item.href}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span>Go to page →</span>
                </Link>
              ))
            ) : (
              <div className="no-results">
                <h3>No results found</h3>
                <p>
                  Try searching for website design, SEO, pricing, contact,
                  software, reviews, examples, or logo.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "SEO and Google Indexing Help for Small Businesses | matthew-web",
  description:
    "SEO and Google indexing help for small businesses. matthew-web helps with SEO-ready pages, metadata, sitemaps, robots.txt, Search Console, Bing Webmaster Tools, content structure, and indexing support.",
  alternates: {
    canonical: "https://matthew-web.com/seo-and-indexing",
  },
  openGraph: {
    title: "SEO and Google Indexing Help for Small Businesses | matthew-web",
    description:
      "matthew-web helps small businesses with SEO-ready pages, Google indexing, sitemaps, Search Console, Bing Webmaster Tools, metadata, and content structure.",
    url: "https://matthew-web.com/seo-and-indexing",
    siteName: "matthew-web",
    type: "website",
  },
};

export default function SeoAndIndexingPage() {
  return (
    <main>
      <style>{`
        .service-page {
          background: #ffffff;
          color: #1f2933;
          font-family: Arial, Helvetica, sans-serif;
        }

        .service-hero {
          background: #f57c00;
          color: #ffffff;
          text-align: center;
          padding: 76px 22px;
        }

        .service-hero h1 {
          max-width: 1100px;
          margin: 0 auto 18px;
          font-size: clamp(42px, 6vw, 72px);
          line-height: 1.05;
          font-weight: 900;
        }

        .service-hero p {
          max-width: 940px;
          margin: 0 auto;
          font-size: clamp(20px, 3vw, 28px);
          line-height: 1.35;
          font-weight: 600;
        }

        .service-wrap {
          max-width: 1080px;
          margin: 0 auto;
          padding: 70px 22px;
        }

        .intro-card,
        .content-card,
        .faq-card {
          background: #f8fafc;
          border: 1px solid #e5e7eb;
          border-radius: 24px;
          padding: 34px;
          margin-bottom: 30px;
          box-shadow: 0 10px 28px rgba(0,0,0,0.06);
        }

        .intro-card h2,
        .content-card h2,
        .faq-card h2 {
          color: #f57c00;
          font-size: clamp(30px, 4vw, 46px);
          line-height: 1.12;
          margin: 0 0 18px;
        }

        .content-card h3,
        .faq-card h3 {
          color: #0f83a6;
          font-size: 25px;
          margin: 28px 0 10px;
        }

        .intro-card p,
        .content-card p,
        .faq-card p {
          color: #374151;
          font-size: 20px;
          line-height: 1.7;
          margin: 0 0 20px;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          margin: 28px 0;
        }

        .feature-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 18px;
          padding: 22px;
        }

        .feature-card h3 {
          margin: 0 0 10px;
          color: #f57c00;
          font-size: 24px;
        }

        .feature-card p {
          margin: 0;
          font-size: 18px;
          line-height: 1.55;
        }

        .process-list {
          list-style: none;
          padding: 0;
          margin: 26px 0 0;
          display: grid;
          gap: 16px;
        }

        .process-list li {
          background: #ffffff;
          border-left: 6px solid #f57c00;
          border-radius: 14px;
          padding: 18px;
          color: #374151;
          font-size: 19px;
          line-height: 1.55;
        }

        .process-list strong {
          color: #111827;
        }

        .highlight-box {
          background: #0f83a6;
          color: #ffffff;
          border-radius: 22px;
          padding: 30px;
          margin: 34px 0;
        }

        .highlight-box p {
          color: #ffffff;
          margin: 0;
          font-size: clamp(22px, 3vw, 32px);
          line-height: 1.3;
          font-weight: 900;
        }

        .warning-box {
          background: #111827;
          color: #ffffff;
          border-radius: 22px;
          padding: 30px;
          margin: 34px 0;
        }

        .warning-box h2 {
          color: #ffffff;
          margin-top: 0;
        }

        .warning-box p,
        .warning-box li {
          color: #e5e7eb;
        }

        .warning-box ul {
          margin: 0;
          padding-left: 24px;
        }

        .warning-box li {
          font-size: 19px;
          line-height: 1.55;
          margin-bottom: 10px;
        }

        .cta-box {
          background: #111827;
          color: #ffffff;
          border-radius: 24px;
          padding: 42px;
          text-align: center;
          margin-top: 40px;
        }

        .cta-box h2 {
          color: #ffffff;
          margin: 0 0 16px;
          font-size: clamp(32px, 5vw, 52px);
        }

        .cta-box p {
          color: #e5e7eb;
          max-width: 780px;
          margin: 0 auto 28px;
          font-size: 21px;
          line-height: 1.5;
        }

        .cta-box a {
          display: inline-block;
          background: #f57c00;
          color: #ffffff;
          text-decoration: none;
          font-size: 20px;
          font-weight: 900;
          padding: 16px 30px;
          border-radius: 10px;
        }

        .cta-box a:hover {
          background: #d96d00;
        }

        .link-row {
          margin-top: 34px;
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .link-row a {
          color: #0f83a6;
          font-size: 18px;
          font-weight: 800;
        }

        @media (max-width: 760px) {
          .service-wrap {
            padding: 46px 16px;
          }

          .intro-card,
          .content-card,
          .faq-card,
          .warning-box,
          .cta-box {
            padding: 24px;
          }

          .feature-grid {
            grid-template-columns: 1fr;
          }

          .intro-card p,
          .content-card p,
          .faq-card p,
          .process-list li,
          .warning-box li {
            font-size: 18px;
          }
        }
      `}</style>

      <div className="service-page">
        <SiteHeader />

        <section className="service-hero">
          <h1>SEO and Google Indexing Help for Small Businesses</h1>
          <p>
            matthew-web helps small businesses build SEO-ready pages, submit
            sitemaps, use Google Search Console, set up Bing Webmaster Tools,
            and improve website structure so search engines can understand the
            site.
          </p>
        </section>

        <section className="service-wrap">
          <article className="intro-card">
            <h2>Launching a Website Is Not the Same as Being Found</h2>

            <p>
              A website can be live on the internet and still not be easy to
              find in search engines. Google and Bing need to discover the site,
              crawl the pages, understand the content, and decide which pages
              should be indexed. If a page is not indexed, customers usually
              cannot find it through normal search results.
            </p>

            <p>
              SEO and indexing help is about giving your website a better
              foundation. That includes clear page structure, useful content,
              page titles, meta descriptions, sitemaps, robots.txt settings,
              internal links, Search Console setup, Bing Webmaster Tools setup,
              and making sure important pages are not blocked from search
              engines.
            </p>

            <div className="highlight-box">
              <p>
                A good website should not just look finished. It should be built
                so customers and search engines can understand it.
              </p>
            </div>
          </article>

          <article className="content-card">
            <h2>What SEO and Indexing Setup Can Include</h2>

            <p>
              SEO is not just stuffing keywords into a page. A small business
              website needs a clear structure, useful information, good user
              experience, and technical setup that helps search engines crawl
              and understand the site.
            </p>

            <div className="feature-grid">
              <div className="feature-card">
                <h3>Google Search Console</h3>
                <p>
                  Verify the site, submit the sitemap, inspect important URLs,
                  request indexing, and monitor page indexing issues.
                </p>
              </div>

              <div className="feature-card">
                <h3>Bing Webmaster Tools</h3>
                <p>
                  Submit the sitemap, inspect URLs, check SEO reports, and help
                  Bing discover important website pages.
                </p>
              </div>

              <div className="feature-card">
                <h3>Sitemap Setup</h3>
                <p>
                  Create or update a sitemap that lists public pages search
                  engines should crawl, such as services, articles, and trust
                  pages.
                </p>
              </div>

              <div className="feature-card">
                <h3>Robots.txt Review</h3>
                <p>
                  Make sure public pages are allowed while private areas like
                  admin dashboards and API routes are not meant for indexing.
                </p>
              </div>

              <div className="feature-card">
                <h3>Page Metadata</h3>
                <p>
                  Add page titles, descriptions, canonical URLs, and social
                  sharing metadata that match the purpose of each page.
                </p>
              </div>

              <div className="feature-card">
                <h3>Internal Linking</h3>
                <p>
                  Connect related pages together so visitors and search engines
                  can move through the website more easily.
                </p>
              </div>
            </div>
          </article>

          <article className="content-card">
            <h2>Why Indexing Matters</h2>

            <p>
              Indexing matters because a page generally needs to be in a search
              engine’s index before it can show up for normal search results. A
              page can be beautifully designed, full of useful information, and
              connected to your business, but if Google never indexes it, that
              page may not bring organic search traffic.
            </p>

            <p>
              Search Console can show whether a URL is on Google, whether it was
              discovered but not crawled, whether it was crawled but not indexed,
              whether it is blocked, or whether it has another issue. This helps
              business owners understand what is happening instead of guessing.
            </p>

            <p>
              Indexing is not the same as ranking number one. Indexing gives the
              page a chance to appear. Ranking depends on competition, content
              quality, relevance, trust, backlinks, reviews, search intent,
              location, and ongoing improvements.
            </p>
          </article>

          <article className="content-card">
            <h2>Common Problems That Hurt Indexing</h2>

            <p>
              Many websites have indexing issues without the owner realizing it.
              Some problems are technical. Others are content-related. A page may
              be discovered by Google but not indexed because it looks thin,
              duplicated, low value, blocked, or not useful enough compared to
              other pages.
            </p>

            <ul className="process-list">
              <li>
                <strong>Thin content:</strong> Pages have only a few sentences
                and do not provide enough helpful information.
              </li>

              <li>
                <strong>Copied or generic content:</strong> Pages look too much
                like template text or content found elsewhere online.
              </li>

              <li>
                <strong>Weak page titles:</strong> Important pages have vague
                titles like “Home” or “Services” instead of specific business
                topics.
              </li>

              <li>
                <strong>No sitemap submitted:</strong> Search engines do not
                have a clear list of important public URLs.
              </li>

              <li>
                <strong>Blocked pages:</strong> Robots.txt, noindex tags, or
                headers accidentally prevent important pages from being indexed.
              </li>

              <li>
                <strong>Broken URLs:</strong> Old pages return 404 errors
                instead of redirecting to useful current pages.
              </li>

              <li>
                <strong>Poor internal links:</strong> Important pages are
                isolated and not easy to find from the website navigation or
                related pages.
              </li>
            </ul>
          </article>

          <article className="content-card">
            <h2>SEO-Ready Content Structure</h2>

            <p>
              Search engines need context. A small business website should have
              pages that explain what the business does, who it helps, where it
              works, what services are offered, what problems are solved, and
              what customers should do next.
            </p>

            <p>
              For matthew-web projects, this can mean creating pages for website
              design, custom software, SEO and indexing, small business
              websites, contractor websites, CRM dashboards, booking forms,
              pricing, examples, privacy policy, terms, and helpful articles.
            </p>

            <p>
              The goal is to avoid a thin website with only a homepage and short
              sales sections. Stronger content gives visitors more value and
              gives search engines more information to understand the site.
            </p>
          </article>

          <article className="content-card">
            <h2>How the SEO and Indexing Process Works</h2>

            <p>
              The best indexing work starts before and after launch. A website
              should be built with clear public pages, proper metadata, useful
              content, and a sitemap. Then the site should be submitted and
              checked through search engine tools.
            </p>

            <ul className="process-list">
              <li>
                <strong>1. Review the website structure:</strong> Check that
                important pages exist and are easy to find through navigation and
                internal links.
              </li>

              <li>
                <strong>2. Improve page content:</strong> Add useful, original
                writing that explains services, process, examples, FAQs, and
                customer benefits.
              </li>

              <li>
                <strong>3. Add metadata:</strong> Make sure each important page
                has a specific title, description, canonical URL, and basic
                openGraph information.
              </li>

              <li>
                <strong>4. Check robots and sitemap:</strong> Confirm public
                pages can be crawled and private pages are not meant to appear in
                search.
              </li>

              <li>
                <strong>5. Submit to search tools:</strong> Submit the sitemap
                and inspect important URLs in Google Search Console and Bing
                Webmaster Tools.
              </li>

              <li>
                <strong>6. Monitor results:</strong> Watch indexed pages,
                discovered pages, crawled-not-indexed pages, 404s, and search
                performance over time.
              </li>
            </ul>
          </article>

          <article className="warning-box">
            <h2>Honest SEO Expectations</h2>

            <p>
              SEO and indexing setup can improve the foundation of a website,
              but no honest business can guarantee instant first-page rankings.
              Search results depend on competition, time, content quality,
              backlinks, local signals, reviews, page usefulness, and search
              engine decisions.
            </p>

            <ul>
              <li>Indexing can take time after submitting pages.</li>
              <li>Requesting indexing does not guarantee immediate approval.</li>
              <li>New websites may need time to build trust.</li>
              <li>Strong content and internal links usually help more than thin pages.</li>
              <li>Ongoing updates can improve the site over time.</li>
            </ul>
          </article>

          <article className="faq-card">
            <h2>SEO and Indexing FAQs</h2>

            <h3>Does submitting a sitemap guarantee rankings?</h3>
            <p>
              No. A sitemap helps search engines discover pages, but rankings
              depend on many other factors. The sitemap is part of the technical
              setup, not a ranking guarantee.
            </p>

            <h3>What does “crawled but not indexed” mean?</h3>
            <p>
              It means Google visited the page but chose not to add it to the
              index at that time. This can happen with thin, duplicated, low
              value, or less important pages.
            </p>

            <h3>What does “discovered but not indexed” mean?</h3>
            <p>
              It means Google knows the URL exists but has not crawled and
              indexed it yet. Requesting indexing and improving internal links
              can sometimes help, but indexing is still Google’s decision.
            </p>

            <h3>Can matthew-web help with Bing too?</h3>
            <p>
              Yes. matthew-web can help submit sitemaps and URLs through Bing
              Webmaster Tools and review Bing SEO reports.
            </p>

            <h3>Should every page be indexed?</h3>
            <p>
              No. Public service pages, helpful articles, contact pages, and
              trust pages are usually good candidates. Private admin pages, API
              routes, dashboards, test pages, and duplicate pages should usually
              not be indexed.
            </p>
          </article>

          <section className="cta-box">
            <h2>Need Help With SEO and Indexing?</h2>
            <p>
              matthew-web helps small businesses with SEO-ready website
              structure, Google Search Console, Bing Webmaster Tools, sitemap
              setup, indexing support, internal links, content planning, lead
              forms, and custom-coded websites.
            </p>

            <Link href="/contact-us">Request SEO and Indexing Help</Link>
          </section>

          <nav className="link-row">
            <Link href="/website-design">Website Design</Link>
            <Link href="/custom-software">Custom Software</Link>
            <Link href="/services">View All Services</Link>
            <Link href="/pricing">View Pricing</Link>
            <Link href="/small-business-websites">Small Business Websites</Link>
          </nav>
        </section>
      </div>
    </main>
  );
}
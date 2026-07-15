import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Free Game Hub Project | matthew-web",
  description:
    "Learn about the matthew-web Free Game Hub Project, a planned free browser games section built to provide entertainment, original project value, and a future ad-supported resource.",
  alternates: {
    canonical: "https://matthew-web.com/free-game-hub-project",
  },
  openGraph: {
    title: "Free Game Hub Project | matthew-web",
    description:
      "The matthew-web Free Game Hub Project is a planned free browser games section focused on simple entertainment, user-friendly pages, and future ad-supported content.",
    url: "https://matthew-web.com/free-game-hub-project",
    siteName: "matthew-web",
    type: "website",
  },
};

export default function FreeGameHubProjectPage() {
  return (
    <main>
      <style>{`
        .project-page {
          background: #ffffff;
          color: #1f2933;
          font-family: Arial, Helvetica, sans-serif;
        }

        .project-hero {
          background: #f57c00;
          color: #ffffff;
          text-align: center;
          padding: 76px 22px;
        }

        .project-hero h1 {
          max-width: 1100px;
          margin: 0 auto 18px;
          font-size: clamp(42px, 6vw, 72px);
          line-height: 1.05;
          font-weight: 900;
        }

        .project-hero p {
          max-width: 940px;
          margin: 0 auto;
          font-size: clamp(20px, 3vw, 28px);
          line-height: 1.35;
          font-weight: 600;
        }

        .project-wrap {
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

        .status-box {
          background: #111827;
          color: #ffffff;
          border-radius: 22px;
          padding: 30px;
          margin: 34px 0;
        }

        .status-box h2 {
          color: #ffffff;
          margin-top: 0;
        }

        .status-box p,
        .status-box li {
          color: #e5e7eb;
        }

        .status-box ul {
          margin: 0;
          padding-left: 24px;
        }

        .status-box li {
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
          .project-wrap {
            padding: 46px 16px;
          }

          .intro-card,
          .content-card,
          .faq-card,
          .status-box,
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
          .status-box li {
            font-size: 18px;
          }
        }
      `}</style>

      <div className="project-page">
        <SiteHeader />

        <section className="project-hero">
          <h1>Free Game Hub Project</h1>
          <p>
            The matthew-web Free Game Hub Project is a planned entertainment
            section focused on free browser games, user-friendly pages, original
            project value, and future ad-supported content.
          </p>
        </section>

        <section className="project-wrap">
          <article className="intro-card">
            <h2>Why matthew-web Is Building a Free Game Hub</h2>

            <p>
              matthew-web is primarily a website design and custom software
              business, but part of building useful online projects is testing
              real websites, traffic systems, content structure, page speed,
              user experience, search indexing, and ad-supported content. The
              Free Game Hub Project is one of those real projects.
            </p>

            <p>
              The goal is to create a simple, easy-to-use section where visitors
              can find free browser games and entertainment content. Over time,
              the project can grow into a larger game hub with categories,
              search, featured games, game descriptions, and helpful navigation.
            </p>

            <div className="highlight-box">
              <p>
                This project is meant to be more than an empty ad page. The goal
                is to build a useful, organized, and visitor-friendly game hub.
              </p>
            </div>
          </article>

          <article className="content-card">
            <h2>What the Free Game Hub Will Include</h2>

            <p>
              The Free Game Hub is planned as a free browser game section that
              can be expanded over time. The project may include embedded games,
              game categories, descriptions, featured sections, search tools,
              and simple navigation that helps visitors find games quickly.
            </p>

            <div className="feature-grid">
              <div className="feature-card">
                <h3>Free Browser Games</h3>
                <p>
                  Games that visitors can play directly in the browser without
                  complicated downloads or setup.
                </p>
              </div>

              <div className="feature-card">
                <h3>Game Categories</h3>
                <p>
                  Organized sections for different game types, such as arcade,
                  puzzle, action, casual, sports, racing, and strategy.
                </p>
              </div>

              <div className="feature-card">
                <h3>Game Descriptions</h3>
                <p>
                  Helpful descriptions that explain what each game is, how it
                  works, and what type of player may enjoy it.
                </p>
              </div>

              <div className="feature-card">
                <h3>Search and Navigation</h3>
                <p>
                  Simple menus, search, and category links to help visitors find
                  games without getting lost.
                </p>
              </div>

              <div className="feature-card">
                <h3>Mobile-Friendly Pages</h3>
                <p>
                  Pages designed to be readable and usable across desktop,
                  tablet, and phone screens when possible.
                </p>
              </div>

              <div className="feature-card">
                <h3>Ad-Supported Growth</h3>
                <p>
                  The project may use advertising in the future to support free
                  content, hosting, development, and continued improvements.
                </p>
              </div>
            </div>
          </article>

          <article className="content-card">
            <h2>Why This Page Matters</h2>

            <p>
              A free game hub should have context and purpose. It should not be
              just a collection of random game embeds with no explanation. This
              page explains what the project is, why it exists, what it may
              include, and how it connects to matthew-web as a real website and
              software project.
            </p>

            <p>
              From a website quality standpoint, it is important that visitors
              can understand what the project is about. Search engines and ad
              review systems also need to see that the site has real navigation,
              original explanations, useful pages, policies, and a clear purpose.
            </p>

            <p>
              This project gives matthew-web a practical place to test content
              structure, indexing, page performance, ad readiness, and user
              experience while building something visitors can actually use.
            </p>
          </article>

          <article className="content-card">
            <h2>How the Game Hub Connects to Website Design</h2>

            <p>
              The Free Game Hub Project is also an example of how a website can
              grow beyond a basic business page. A game hub needs planning,
              layout, categories, metadata, search structure, internal links,
              page speed, mobile usability, content management, and possibly
              advertising setup.
            </p>

            <p>
              Those same ideas apply to many small business websites. A
              contractor website needs service categories. A custom software site
              needs pages that explain tools and workflows. A blog needs clear
              article structure. A game hub needs organized entertainment
              content and easy navigation.
            </p>

            <p>
              Building this type of project helps show how matthew-web thinks
              about websites: structure first, user experience second, and room
              to grow over time.
            </p>
          </article>

          <article className="content-card">
            <h2>Planned Project Structure</h2>

            <p>
              The Free Game Hub can start simple and expand in stages. The first
              version does not need every feature at once. A better approach is
              to build a strong foundation, test the pages, and improve the
              project based on what works.
            </p>

            <ul className="process-list">
              <li>
                <strong>1. Build the main game hub page:</strong> Create a clear
                landing page that explains the project and links to games or
                categories.
              </li>

              <li>
                <strong>2. Add game categories:</strong> Organize games by type
                so visitors can browse more easily.
              </li>

              <li>
                <strong>3. Add individual game pages:</strong> Give each game a
                title, description, instructions, category, and internal links.
              </li>

              <li>
                <strong>4. Improve navigation:</strong> Add search, featured
                games, popular categories, and related game links.
              </li>

              <li>
                <strong>5. Review performance:</strong> Make sure pages load
                reasonably well and do not feel cluttered.
              </li>

              <li>
                <strong>6. Add advertising carefully:</strong> If approved,
                advertising should support the project without making pages hard
                to use.
              </li>
            </ul>
          </article>

          <article className="status-box">
            <h2>Project Status</h2>

            <p>
              The Free Game Hub Project is planned as a growing matthew-web
              project. It may start with a small number of games and expand over
              time as the site structure, indexing, content, and monetization
              setup improve.
            </p>

            <ul>
              <li>The project is intended to provide free entertainment value.</li>
              <li>The site should include original descriptions and helpful navigation.</li>
              <li>The project should follow website policies and user experience standards.</li>
              <li>The game hub may later be connected to a dedicated subdomain.</li>
              <li>The project may become ad-supported if the site meets approval requirements.</li>
            </ul>
          </article>

          <article className="content-card">
            <h2>Advertising and User Experience</h2>

            <p>
              If advertising is added in the future, the goal is to keep the
              game hub usable. Ads should not replace the actual content, block
              navigation, or make the page feel unfinished. A visitor should be
              able to understand the game, play or access the content, and move
              around the site without confusion.
            </p>

            <p>
              The project should include enough original content, clear links,
              privacy information, and policy pages so visitors can understand
              the site and how it operates. This is important for trust and for
              any future ad-supported setup.
            </p>
          </article>

          <article className="faq-card">
            <h2>Free Game Hub FAQs</h2>

            <h3>Is the Free Game Hub live yet?</h3>
            <p>
              The project is being planned and built in stages. This page
              explains the purpose and structure before the full game hub is
              expanded.
            </p>

            <h3>Will the games be free?</h3>
            <p>
              The goal is to offer free browser-based entertainment. Some games
              may come from third-party game providers or embedded game sources
              depending on the final setup.
            </p>

            <h3>Will the game hub have ads?</h3>
            <p>
              It may become ad-supported in the future if the website meets ad
              approval requirements. The goal is to use ads responsibly without
              hurting the visitor experience.
            </p>

            <h3>Why is a web design business building a game hub?</h3>
            <p>
              The project gives matthew-web a real public website project for
              testing content structure, indexing, performance, user experience,
              and ad-supported pages while building something visitors can use.
            </p>

            <h3>Will this connect to custom software later?</h3>
            <p>
              It can. A game hub could eventually include search tools, admin
              management, categories, analytics, featured games, and other
              custom-coded features.
            </p>
          </article>

          <section className="cta-box">
            <h2>Need a Custom Website or Online Project?</h2>
            <p>
              matthew-web builds websites, content pages, custom-coded tools,
              CRM dashboards, lead forms, SEO-ready pages, and business software
              for small businesses and online projects.
            </p>

            <Link href="/contact-us">Contact matthew-web</Link>
          </section>

          <nav className="link-row">
            <Link href="/website-design">Website Design</Link>
            <Link href="/custom-software">Custom Software</Link>
            <Link href="/seo-and-indexing">SEO and Indexing</Link>
            <Link href="/small-business-websites">Small Business Websites</Link>
            <Link href="/services">View All Services</Link>
          </nav>
        </section>
      </div>
    </main>
  );
}
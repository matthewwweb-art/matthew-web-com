"use client";

import SafeExternalLink from "@/components/SafeExternalLink";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Clock3,
  DollarSign,
  ExternalLink,
  Flame,
  Globe2,
  LayoutGrid,
  Mail,
  MapPin,
  Phone,
  RefreshCw,
  Search,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

const statusOptions = [
  "new",
  "needs research",
  "contacted",
  "interested",
  "quote sent",
  "won",
  "lost",
  "follow up later",
];

function parseEstimatedValue(value) {
  if (!value) return 0;

  const numbers = String(value)
    .replace(/,/g, "")
    .match(/\d+/g)
    ?.map((num) => Number(num))
    .filter((num) => !Number.isNaN(num));

  if (!numbers || numbers.length === 0) return 0;

  if (numbers.length === 1) {
    return numbers[0];
  }

  return Math.round(
    numbers.reduce((sum, num) => sum + num, 0) / numbers.length
  );
}

function formatMoney(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount || 0);
}

function prettyStatus(status) {
  return String(status || "new")
    .split(" ")
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(" ");
}

function formatFollowup(value) {
  if (!value) {
    return "Not set";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Not set";
  }

  return date.toLocaleString();
}

export default function HotLeadsPage() {
  const [session, setSession] = useState(null);
  const [loadingSession, setLoadingSession] = useState(true);
  const [loadingLeads, setLoadingLeads] = useState(false);
  const [leads, setLeads] = useState([]);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState(null);

  useEffect(() => {
    async function loadSession() {
      const { data } = await supabase.auth.getSession();

      setSession(data.session || null);
      setLoadingSession(false);
    }

    loadSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        setSession(newSession);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (session) {
      loadLeads();
    }
  }, [session]);

  async function loadLeads() {
    setLoadingLeads(true);
    setError("");

    const { data, error: leadError } = await supabase
      .from("lead_finder_leads")
      .select("*")
      .order("lead_score", {
        ascending: false,
      })
      .order("created_at", {
        ascending: false,
      });

    if (leadError) {
      setError(leadError.message);
      setLoadingLeads(false);
      return;
    }

    setLeads(data || []);
    setLoadingLeads(false);
  }

  async function updateLeadStatus(id, status) {
    setUpdatingId(id);
    setError("");

    const { error: updateError } = await supabase
      .from("lead_finder_leads")
      .update({
        status,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (updateError) {
      setError(updateError.message);
      setUpdatingId(null);
      return;
    }

    const { error: activityError } = await supabase
      .from("lead_finder_activities")
      .insert({
        lead_id: id,
        activity_type: status,
        activity_text: `Status changed to ${status} from Hot Leads page.`,
      });

    if (activityError) {
      console.error(
        "Could not log Hot Leads status change:",
        activityError
      );
    }

    setLeads((current) =>
      current.map((lead) =>
        lead.id === id
          ? {
              ...lead,
              status,
            }
          : lead
      )
    );

    setUpdatingId(null);
  }

  const hotLeads = useMemo(() => {
    return leads
      .filter((lead) => {
        const status = lead.status || "new";
        const score = Number(lead.lead_score || 0);
        const value = parseEstimatedValue(
          lead.estimated_offer_value
        );

        if (status === "won" || status === "lost") {
          return false;
        }

        return score >= 50 || value >= 2500;
      })
      .sort((a, b) => {
        const scoreDiff =
          Number(b.lead_score || 0) -
          Number(a.lead_score || 0);

        if (scoreDiff !== 0) {
          return scoreDiff;
        }

        return (
          parseEstimatedValue(b.estimated_offer_value) -
          parseEstimatedValue(a.estimated_offer_value)
        );
      });
  }, [leads]);

  const hotStats = useMemo(() => {
    const totalValue = hotLeads.reduce(
      (sum, lead) =>
        sum +
        parseEstimatedValue(
          lead.estimated_offer_value
        ),
      0
    );

    const topScore =
      hotLeads.length > 0
        ? Math.max(
            ...hotLeads.map((lead) =>
              Number(lead.lead_score || 0)
            )
          )
        : 0;

    const followupsSet = hotLeads.filter(
      (lead) => Boolean(lead.next_followup_at)
    ).length;

    return {
      count: hotLeads.length,
      totalValue,
      topScore,
      followupsSet,
    };
  }, [hotLeads]);

  if (loadingSession) {
    return (
      <main className="hot-page">
        <style>{styles}</style>

        <section className="empty-box loading-box">
          <div className="loading-dot" />

          <h1>Loading Hot Leads</h1>

          <p>
            Verifying your Matthew Web admin session.
          </p>
        </section>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="hot-page">
        <style>{styles}</style>

        <section className="empty-box">
          <Flame size={42} />

          <h1>Hot Leads</h1>

          <p>
            You need to sign in through Mission Control first.
          </p>

          <Link href="/admin" className="primary-btn">
            Go to Admin Login
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="hot-page">
      <style>{styles}</style>

      <div className="hot-shell">
        <header className="hot-header">
          <div className="header-main">
            <div className="header-icon">
              <Flame size={29} />
            </div>

            <div>
              <p className="eyebrow">
                Matthew Web • Priority Sales
              </p>

              <h1>
                Hot <span>Leads</span>
              </h1>

              <p className="header-description">
                Focus on the strongest opportunities for website,
                CRM, SEO, booking, automation, or custom software
                sales.
              </p>
            </div>
          </div>

          <div className="header-actions">
            <Link
              href="/admin/lead-finder"
              className="secondary-btn"
            >
              <ArrowLeft size={16} />
              Lead Finder
            </Link>

            <Link
              href="/admin/lead-finder/board"
              className="secondary-btn"
            >
              <LayoutGrid size={16} />
              Pipeline
            </Link>

            <Link
              href="/admin/lead-finder/search"
              className="secondary-btn"
            >
              <Search size={16} />
              Google Search
            </Link>

            <button
              type="button"
              className="primary-btn"
              onClick={loadLeads}
              disabled={loadingLeads}
            >
              <RefreshCw
                size={16}
                className={loadingLeads ? "spin" : ""}
              />

              {loadingLeads ? "Refreshing" : "Refresh"}
            </button>
          </div>
        </header>

        {error ? (
          <div className="error-box">
            <strong>Hot Leads Error</strong>
            <span>{error}</span>
          </div>
        ) : null}

        <section className="hot-stats">
          <article className="stat-card red">
            <div className="stat-icon">
              <Flame size={24} strokeWidth={2.8} />
            </div>

            <div>
              <span>Hot Leads</span>

              <strong>{hotStats.count}</strong>

              <small>
                Open opportunities currently qualifying as hot
              </small>
            </div>
          </article>

          <article className="stat-card orange">
            <div className="stat-icon">
              <DollarSign size={24} strokeWidth={2.8} />
            </div>

            <div>
              <span>Potential Value</span>

              <strong>
                {formatMoney(hotStats.totalValue)}
              </strong>

              <small>
                Combined estimated average opportunity value
              </small>
            </div>
          </article>

          <article className="stat-card cyan">
            <div className="stat-icon">
              <Target size={24} strokeWidth={2.8} />
            </div>

            <div>
              <span>Top Score</span>

              <strong>{hotStats.topScore}</strong>

              <small>
                Highest lead score in the current priority list
              </small>
            </div>
          </article>

          <article className="stat-card green">
            <div className="stat-icon">
              <Clock3 size={24} strokeWidth={2.8} />
            </div>

            <div>
              <span>Follow-Ups Set</span>

              <strong>{hotStats.followupsSet}</strong>

              <small>
                Hot leads that already have a follow-up scheduled
              </small>
            </div>
          </article>
        </section>

        <section className="section-heading">
          <div>
            <p className="eyebrow">
              Priority Queue
            </p>

            <h2>Best Opportunities First</h2>

            <p>
              A lead appears here when it scores at least 50 or
              has an estimated value of at least $2,500. Won and
              lost leads are excluded.
            </p>
          </div>

          <div className="priority-badge">
            <Flame size={15} />

            <strong>
              {hotStats.count}
            </strong>

            <span>priority leads</span>
          </div>
        </section>

        {loadingLeads ? (
          <section className="loading-panel">
            <RefreshCw
              size={28}
              className="spin"
            />

            <strong>
              Loading priority leads...
            </strong>
          </section>
        ) : null}

        {!loadingLeads && hotLeads.length === 0 ? (
          <section className="empty-box inline-empty">
            <Target size={38} />

            <h2>No Hot Leads Yet</h2>

            <p>
              Add more leads, run website audits, or increase
              estimated opportunity values to surface priority
              prospects here.
            </p>

            <Link
              href="/admin/lead-finder"
              className="primary-btn"
            >
              Open Lead Finder
            </Link>
          </section>
        ) : null}

        {!loadingLeads && hotLeads.length > 0 ? (
          <section className="hot-list">
            {hotLeads.map((lead, index) => {
              const score = Number(
                lead.lead_score || 0
              );

              const parsedValue =
                parseEstimatedValue(
                  lead.estimated_offer_value
                );

              return (
                <article
                  className="hot-card"
                  key={lead.id}
                >
                  <div className="rank-badge">
                    <Trophy size={14} />
                    #{index + 1}
                  </div>

                  <div className="hot-top">
                    <div className="lead-heading">
                      <div className="lead-meta">
                        <span>
                          {lead.category ||
                            "No category"}
                        </span>

                        {lead.city || lead.state ? (
                          <span className="location-text">
                            <MapPin size={11} />

                            {[lead.city, lead.state]
                              .filter(Boolean)
                              .join(", ")}
                          </span>
                        ) : null}
                      </div>

                      <h2>{lead.business_name}</h2>

                      {lead.contact_name ? (
                        <p className="contact-name">
                          Contact: {lead.contact_name}
                        </p>
                      ) : null}
                    </div>

                    <div
                      className={`score-badge ${
                        score >= 75 ? "very-hot" : ""
                      }`}
                    >
                      <span>SCORE</span>
                      <strong>{score}</strong>
                      <small>/100</small>
                    </div>
                  </div>

                  <div className="details-grid">
                    <div className="detail-card value-detail">
                      <DollarSign size={17} />

                      <div>
                        <span>Potential Value</span>

                        <strong>
                          {lead.estimated_offer_value ||
                            "Not set"}
                        </strong>

                        {lead.estimated_offer_value ? (
                          <small>
                            {formatMoney(parsedValue)} average
                          </small>
                        ) : null}
                      </div>
                    </div>

                    <div className="detail-card">
                      <Target size={17} />

                      <div>
                        <span>Status</span>

                        <strong>
                          {prettyStatus(
                            lead.status || "new"
                          )}
                        </strong>
                      </div>
                    </div>

                    <div className="detail-card">
                      <Star size={17} />

                      <div>
                        <span>Google Rating</span>

                        <strong>
                          {lead.rating
                            ? `${lead.rating} stars`
                            : "Unknown"}
                        </strong>
                      </div>
                    </div>

                    <div className="detail-card">
                      <Users size={17} />

                      <div>
                        <span>Reviews</span>

                        <strong>
                          {lead.review_count ||
                            "Unknown"}
                        </strong>
                      </div>
                    </div>

                    <div className="detail-card">
                      <Clock3 size={17} />

                      <div>
                        <span>Follow-Up</span>

                        <strong>
                          {formatFollowup(
                            lead.next_followup_at
                          )}
                        </strong>
                      </div>
                    </div>

                    <div className="detail-card">
                      <ExternalLink size={17} />

                      <div>
                        <span>Source</span>

                        <strong>
                          {lead.source || "manual"}
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div className="summary-grid">
                    <div className="summary-box problem-summary">
                      <div className="summary-title">
                        <Target size={15} />
                        <strong>Problem Found</strong>
                      </div>

                      <p>
                        {lead.problem_summary ||
                          "No problem summary added."}
                      </p>
                    </div>

                    <div className="summary-box offer-summary">
                      <div className="summary-title">
                        <Flame size={15} />
                        <strong>Offer Idea</strong>
                      </div>

                      <p>
                        {lead.offer_idea ||
                          "No offer idea added."}
                      </p>
                    </div>
                  </div>

                  <div className="link-row">
                    {lead.phone ? (
                      <a href={`tel:${lead.phone}`}>
                        <Phone size={14} />
                        Call
                      </a>
                    ) : null}

                    {lead.email ? (
                      <a href={`mailto:${lead.email}`}>
                        <Mail size={14} />
                        Email
                      </a>
                    ) : null}

                    {lead.website_url ? (
                      <SafeExternalLink href={lead.website_url}>
                        <Globe2 size={14} />
                        Website
                      </SafeExternalLink>
                    ) : null}

                    {lead.google_maps_url ? (
                      <SafeExternalLink href={lead.google_maps_url}>
                        <MapPin size={14} />
                        Google Maps
                      </SafeExternalLink>
                    ) : null}

                    {lead.facebook_url ? (
                      <SafeExternalLink href={lead.facebook_url}>
                        Facebook
                      </SafeExternalLink>
                    ) : null}

                    {lead.yelp_url ? (
                      <SafeExternalLink href={lead.yelp_url}>
                        Yelp
                      </SafeExternalLink>
                    ) : null}
                  </div>

                  <div className="card-actions">
                    <div className="status-control">
                      <label>STATUS</label>

                      <select
                        value={lead.status || "new"}
                        disabled={updatingId === lead.id}
                        onChange={(e) =>
                          updateLeadStatus(
                            lead.id,
                            e.target.value
                          )
                        }
                      >
                        {statusOptions.map((status) => (
                          <option
                            key={status}
                            value={status}
                          >
                            {prettyStatus(status)}
                          </option>
                        ))}
                      </select>

                      {updatingId === lead.id ? (
                        <small>
                          Updating status...
                        </small>
                      ) : null}
                    </div>

                    <Link
                      href={`/admin/lead-finder/${lead.id}`}
                      className="open-lead-btn"
                    >
                      <ExternalLink size={15} />
                      Open Full Lead
                    </Link>
                  </div>
                </article>
              );
            })}
          </section>
        ) : null}
      </div>
    </main>
  );
}

const styles = `
  * {
    box-sizing: border-box;
  }

  html {
    background: #05070b;
  }

  body {
    margin: 0;
    background: #05070b;
    color: #f8fafc;
    font-family:
      Inter,
      ui-sans-serif,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      sans-serif;
  }

  button,
  select {
    font: inherit;
  }

  a,
  button,
  select {
    -webkit-tap-highlight-color: transparent;
  }

  .hot-page {
    position: relative;
    min-height: 100vh;
    overflow-x: hidden;
    background:
      radial-gradient(
        circle at 5% -5%,
        rgba(255, 76, 76, 0.1),
        transparent 26%
      ),
      radial-gradient(
        circle at 92% 0%,
        rgba(255, 132, 0, 0.12),
        transparent 28%
      ),
      radial-gradient(
        circle at 40% -10%,
        rgba(0, 194, 255, 0.07),
        transparent 28%
      ),
      linear-gradient(
        180deg,
        #06090f 0%,
        #05070b 50%,
        #06080d 100%
      );
  }

  .hot-page::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: 0.13;
    background-image:
      linear-gradient(
        rgba(255, 255, 255, 0.025) 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.025) 1px,
        transparent 1px
      );
    background-size: 42px 42px;
    mask-image:
      linear-gradient(
        to bottom,
        black,
        transparent 88%
      );
  }

  .hot-shell {
    position: relative;
    z-index: 1;
    width: min(
      1380px,
      calc(100% - 36px)
    );
    margin: 0 auto;
    padding: 32px 0 60px;
  }

  /* ==========================================================
     HEADER
  ========================================================== */

  .hot-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    margin-bottom: 15px;
    padding: 27px;
    border: 1px solid #202638;
    border-radius: 25px;
    background:
      linear-gradient(
        135deg,
        rgba(18, 20, 29, 0.98),
        rgba(9, 12, 18, 0.98)
      );
    box-shadow:
      0 20px 60px rgba(0, 0, 0, 0.29),
      inset 0 1px 0 rgba(255, 255, 255, 0.035);
  }

  .header-main {
    min-width: 0;
    display: flex;
    align-items: flex-start;
    gap: 18px;
  }

  .header-icon {
    flex: 0 0 auto;
    width: 58px;
    height: 58px;
    display: grid;
    place-items: center;
    border-radius: 18px;
    color: #090603;
    background:
      linear-gradient(
        145deg,
        #ff9b19,
        #ff5438
      );
    box-shadow:
      0 0 32px rgba(255, 94, 47, 0.22);
  }

  .eyebrow {
    margin: 0 0 8px;
    color: #35d4f4;
    font-size: 11px;
    line-height: 1;
    font-weight: 1000;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .hot-header h1 {
    margin: 0 0 8px;
    color: #ffffff;
    font-size:
      clamp(
        36px,
        4.5vw,
        54px
      );
    line-height: 1;
    letter-spacing: -0.05em;
  }

  .hot-header h1 span {
    color: #ff7900;
  }

  .header-description {
    max-width: 700px;
    margin: 0;
    color: #8c9aac;
    font-size: 14px;
    line-height: 1.55;
  }

  .header-actions {
    flex: 0 0 auto;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    flex-wrap: wrap;
  }

  .primary-btn,
  .secondary-btn,
  .open-lead-btn {
    min-height: 42px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    border-radius: 11px;
    padding: 0 14px;
    font-size: 11px;
    font-weight: 900;
    text-decoration: none;
    cursor: pointer;
    transition:
      transform 0.16s ease,
      border-color 0.16s ease,
      background 0.16s ease,
      box-shadow 0.16s ease;
  }

  .primary-btn {
    border: 1px solid transparent;
    color: #ffffff;
    background:
      linear-gradient(
        135deg,
        #ff8900,
        #ff5f00
      );
    box-shadow:
      0 8px 20px rgba(255, 105, 0, 0.18);
  }

  .primary-btn:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow:
      0 11px 26px rgba(255, 105, 0, 0.25);
  }

  .secondary-btn {
    border: 1px solid #26394a;
    color: #a8eafa;
    background: #0a141e;
  }

  .secondary-btn:hover {
    border-color: #29c9ee;
    color: #ffffff;
    background: #0c1d28;
    transform: translateY(-1px);
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* ==========================================================
     ERROR
  ========================================================== */

  .error-box {
    display: grid;
    gap: 4px;
    margin-bottom: 15px;
    padding: 14px 16px;
    border: 1px solid rgba(255, 75, 75, 0.3);
    border-radius: 13px;
    color: #ffb2b2;
    background: rgba(129, 24, 24, 0.19);
  }

  .error-box strong {
    color: #ff7474;
    font-size: 12px;
  }

  .error-box span {
    font-size: 12px;
  }

  /* ==========================================================
     STATS
  ========================================================== */

  .hot-stats {
    display: grid;
    grid-template-columns:
      repeat(4, minmax(0, 1fr));
    gap: 11px;
    margin-bottom: 28px;
  }

  .stat-card {
    --stat-accent: #ff6268;

    min-width: 0;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 18px;
    border: 1px solid #1c2938;
    border-radius: 18px;
    background:
      linear-gradient(
        145deg,
        #0e151e,
        #090e15
      );
  }

  .stat-card.red {
    --stat-accent: #ff6268;
  }

  .stat-card.orange {
    --stat-accent: #ff8b00;
  }

  .stat-card.cyan {
    --stat-accent: #29d0f1;
  }

  .stat-card.green {
    --stat-accent: #49df91;
  }

  .stat-icon {
    flex: 0 0 auto;
    width: 52px;
    height: 52px;
    display: grid;
    place-items: center;
    border-radius: 14px;
    color: #05090d;
    background: var(--stat-accent);
    box-shadow:
      0 0 20px
      color-mix(
        in srgb,
        var(--stat-accent) 25%,
        transparent
      );
  }

  .stat-icon svg {
    color: #05090d;
  }

  .stat-card > div:last-child {
    min-width: 0;
  }

  .stat-card span {
    display: block;
    margin-bottom: 5px;
    color: #8b99aa;
    font-size: 9px;
    font-weight: 1000;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .stat-card strong {
    display: block;
    color: #ffffff;
    font-size:
      clamp(
        24px,
        2.4vw,
        32px
      );
    line-height: 1;
    letter-spacing: -0.04em;
    overflow-wrap: anywhere;
  }

  .stat-card small {
    display: block;
    margin-top: 7px;
    color: #657488;
    font-size: 9px;
    line-height: 1.35;
  }

  /* ==========================================================
     SECTION HEADING
  ========================================================== */

  .section-heading {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 24px;
    margin-bottom: 15px;
  }

  .section-heading h2 {
    margin: 0 0 6px;
    color: #f6f8fb;
    font-size: 29px;
    letter-spacing: -0.035em;
  }

  .section-heading p:not(.eyebrow) {
    max-width: 760px;
    margin: 0;
    color: #758397;
    font-size: 12px;
    line-height: 1.5;
  }

  .priority-badge {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 9px 12px;
    border: 1px solid rgba(255, 102, 64, 0.26);
    border-radius: 11px;
    color: #ff9775;
    background: rgba(129, 39, 22, 0.11);
  }

  .priority-badge strong {
    color: #ffffff;
    font-size: 14px;
  }

  .priority-badge span {
    color: #9f695c;
    font-size: 9px;
    font-weight: 900;
    text-transform: uppercase;
  }

  /* ==========================================================
     HOT LEAD LIST
  ========================================================== */

  .hot-list {
    display: grid;
    gap: 17px;
  }

  .hot-card {
    position: relative;
    overflow: hidden;
    padding: 23px;
    border: 1px solid #202a39;
    border-radius: 21px;
    background:
      linear-gradient(
        145deg,
        rgba(16, 21, 29, 0.99),
        rgba(8, 12, 18, 0.99)
      );
    box-shadow:
      0 14px 36px rgba(0, 0, 0, 0.18),
      inset 0 1px 0 rgba(255, 255, 255, 0.025);
  }

  .hot-card::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background:
      linear-gradient(
        to bottom,
        #ff5438,
        #ff9800
      );
  }

  .rank-badge {
    position: absolute;
    right: 18px;
    top: 17px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 6px 9px;
    border: 1px solid rgba(255, 140, 0, 0.25);
    border-radius: 999px;
    color: #ffb04e;
    background: rgba(141, 77, 5, 0.11);
    font-size: 9px;
    font-weight: 1000;
  }

  .hot-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 22px;
    margin-bottom: 16px;
    padding-right: 65px;
  }

  .lead-heading {
    min-width: 0;
  }

  .lead-meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 7px;
  }

  .lead-meta > span:first-child {
    color: #44d4ef;
    font-size: 9px;
    font-weight: 1000;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .location-text {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: #6c7b8e;
    font-size: 9px;
    font-weight: 800;
  }

  .hot-card h2 {
    margin: 0;
    color: #f7f9fb;
    font-size:
      clamp(
        24px,
        3vw,
        31px
      );
    line-height: 1.1;
    letter-spacing: -0.035em;
  }

  .contact-name {
    margin: 6px 0 0;
    color: #6c7c8f;
    font-size: 10px;
  }

  .score-badge {
    flex: 0 0 auto;
    min-width: 84px;
    padding: 11px;
    border: 1px solid rgba(255, 133, 0, 0.27);
    border-radius: 14px;
    background: rgba(255, 128, 0, 0.075);
    text-align: center;
  }

  .score-badge span {
    display: block;
    margin-bottom: 2px;
    color: #aa7440;
    font-size: 7px;
    font-weight: 1000;
    letter-spacing: 0.08em;
  }

  .score-badge strong {
    display: inline;
    color: #ff9b34;
    font-size: 30px;
    line-height: 1;
  }

  .score-badge small {
    color: #77583d;
    font-size: 8px;
  }

  .score-badge.very-hot {
    border-color: rgba(255, 81, 81, 0.36);
    background: rgba(255, 65, 65, 0.075);
  }

  .score-badge.very-hot strong {
    color: #ff6e6e;
  }

  /* ==========================================================
     DETAILS
  ========================================================== */

  .details-grid {
    display: grid;
    grid-template-columns:
      repeat(3, minmax(0, 1fr));
    gap: 8px;
    margin-bottom: 12px;
  }

  .detail-card {
    min-width: 0;
    display: flex;
    align-items: flex-start;
    gap: 9px;
    padding: 11px;
    border: 1px solid #192634;
    border-radius: 11px;
    color: #30cce9;
    background: #080d13;
  }

  .detail-card > svg {
    flex: 0 0 auto;
    margin-top: 2px;
  }

  .detail-card > div {
    min-width: 0;
  }

  .detail-card span {
    display: block;
    margin-bottom: 4px;
    color: #617185;
    font-size: 7px;
    font-weight: 1000;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  .detail-card strong {
    display: block;
    color: #b3bfcb;
    font-size: 10px;
    line-height: 1.4;
    overflow-wrap: anywhere;
  }

  .detail-card small {
    display: block;
    margin-top: 3px;
    color: #5e6e80;
    font-size: 8px;
  }

  .value-detail {
    color: #ff960e;
  }

  /* ==========================================================
     SUMMARIES
  ========================================================== */

  .summary-grid {
    display: grid;
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
    gap: 9px;
    margin-bottom: 12px;
  }

  .summary-box {
    min-width: 0;
    padding: 13px;
    border: 1px solid #1c2938;
    border-radius: 12px;
    background: #090f16;
  }

  .problem-summary {
    border-color: rgba(49, 204, 234, 0.16);
  }

  .offer-summary {
    border-color: rgba(255, 131, 0, 0.2);
  }

  .summary-title {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 7px;
    color: #2fd0ed;
  }

  .offer-summary .summary-title {
    color: #ff940f;
  }

  .summary-title strong {
    color: #a8b4c0;
    font-size: 8px;
    font-weight: 1000;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  .summary-box p {
    margin: 0;
    color: #a0adba;
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
  }

  /* ==========================================================
     LINKS
  ========================================================== */

  .link-row {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 13px;
  }

  .link-row a {
    min-height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 0 10px;
    border: 1px solid #24394b;
    border-radius: 8px;
    color: #8ce9fa;
    background: #0a141d;
    text-decoration: none;
    font-size: 9px;
    font-weight: 900;
  }

  .link-row a:hover {
    color: #ffffff;
    border-color: #2bcbed;
    background: #0c1e29;
  }

  /* ==========================================================
     ACTIONS
  ========================================================== */

  .card-actions {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 12px;
    padding-top: 13px;
    border-top: 1px solid #192534;
  }

  .status-control {
    flex: 0 1 280px;
    display: grid;
    gap: 5px;
  }

  .status-control label {
    color: #627286;
    font-size: 7px;
    font-weight: 1000;
    letter-spacing: 0.08em;
  }

  .status-control select {
    width: 100%;
    min-height: 39px;
    border: 1px solid #2a3b4e;
    border-radius: 9px;
    outline: none;
    padding: 0 10px;
    color: #d9e4ed;
    background: #080e15;
    font-size: 9px;
    font-weight: 800;
  }

  .status-control select:focus {
    border-color: #29c9ee;
  }

  .status-control small {
    color: #ffab50;
    font-size: 7px;
  }

  .open-lead-btn {
    border: 1px solid rgba(255, 132, 0, 0.28);
    color: #ffffff;
    background:
      linear-gradient(
        135deg,
        #ff8b00,
        #ff6100
      );
    box-shadow:
      0 8px 20px rgba(255, 108, 0, 0.14);
  }

  .open-lead-btn:hover {
    transform: translateY(-1px);
    box-shadow:
      0 10px 25px rgba(255, 108, 0, 0.22);
  }

  /* ==========================================================
     EMPTY / LOADING
  ========================================================== */

  .loading-panel {
    min-height: 180px;
    display: grid;
    place-items: center;
    align-content: center;
    gap: 10px;
    border: 1px solid #1d2a3b;
    border-radius: 18px;
    color: #ff8b35;
    background: #090f16;
  }

  .loading-panel strong {
    color: #8c99aa;
    font-size: 12px;
  }

  .empty-box {
    position: relative;
    z-index: 2;
    width: min(520px, calc(100% - 30px));
    margin: 80px auto;
    padding: 34px;
    border: 1px solid #1d2a3b;
    border-radius: 22px;
    color: #7e8da0;
    background:
      linear-gradient(
        145deg,
        #0d141d,
        #080d13
      );
    text-align: center;
    box-shadow:
      0 25px 60px rgba(0, 0, 0, 0.3);
  }

  .empty-box > svg {
    margin-bottom: 13px;
    color: #ff7c35;
  }

  .empty-box h1,
  .empty-box h2 {
    margin: 0 0 8px;
    color: #f6f8fb;
  }

  .empty-box h1 {
    font-size: 30px;
  }

  .empty-box h2 {
    font-size: 23px;
  }

  .empty-box p {
    margin: 0 0 18px;
    font-size: 12px;
    line-height: 1.5;
  }

  .inline-empty {
    width: 100%;
    margin: 0;
  }

  .loading-dot {
    width: 15px;
    height: 15px;
    margin: 0 auto 14px;
    border-radius: 50%;
    background: #ff7c35;
    box-shadow:
      0 0 18px rgba(255, 92, 54, 0.7);
    animation: pulse 1s ease-in-out infinite alternate;
  }

  .spin {
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes pulse {
    from {
      opacity: 0.35;
      transform: scale(0.8);
    }

    to {
      opacity: 1;
      transform: scale(1.1);
    }
  }

  /* ==========================================================
     RESPONSIVE
  ========================================================== */

  @media (max-width: 1150px) {
    .hot-header {
      flex-direction: column;
      align-items: stretch;
    }

    .header-actions {
      justify-content: flex-start;
    }

    .hot-stats {
      grid-template-columns:
        repeat(2, minmax(0, 1fr));
    }

    .details-grid {
      grid-template-columns:
        repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 760px) {
    .hot-shell {
      width: calc(100% - 20px);
      padding-top: 10px;
    }

    .hot-header {
      padding: 20px;
      border-radius: 20px;
    }

    .header-main {
      gap: 13px;
    }

    .header-icon {
      width: 47px;
      height: 47px;
      border-radius: 14px;
    }

    .hot-header h1 {
      font-size: 35px;
    }

    .header-description {
      font-size: 12px;
    }

    .header-actions {
      display: grid;
      grid-template-columns:
        repeat(2, minmax(0, 1fr));
    }

    .header-actions a,
    .header-actions button {
      width: 100%;
    }

    .hot-stats {
      grid-template-columns: 1fr;
    }

    .section-heading {
      flex-direction: column;
      align-items: flex-start;
    }

    .priority-badge {
      width: 100%;
      justify-content: center;
    }

    .hot-card {
      padding: 18px;
    }

    .hot-top {
      flex-direction: column;
      padding-right: 0;
      padding-top: 27px;
    }

    .score-badge {
      width: 100%;
    }

    .rank-badge {
      left: 18px;
      right: auto;
    }

    .details-grid,
    .summary-grid {
      grid-template-columns: 1fr;
    }

    .card-actions {
      flex-direction: column;
      align-items: stretch;
    }

    .status-control {
      width: 100%;
      flex-basis: auto;
    }

    .open-lead-btn {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .header-main {
      flex-direction: column;
    }

    .header-actions {
      grid-template-columns: 1fr;
    }

    .hot-header h1 {
      font-size: 32px;
    }

    .stat-card {
      align-items: center;
    }

    .stat-icon {
      width: 50px;
      height: 50px;
    }

    .link-row {
      display: grid;
      grid-template-columns:
        repeat(2, minmax(0, 1fr));
    }

    .link-row a {
      width: 100%;
    }
  }

  @media (max-width: 360px) {
    .link-row {
      grid-template-columns: 1fr;
    }
  }
`;
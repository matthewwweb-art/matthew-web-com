"use client";

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
  Phone,
  RefreshCw,
  Search,
  Trophy,
  Users,
} from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

const columns = [
  {
    status: "new",
    label: "New",
    accent: "cyan",
  },
  {
    status: "needs research",
    label: "Needs Research",
    accent: "blue",
  },
  {
    status: "contacted",
    label: "Contacted",
    accent: "orange",
  },
  {
    status: "interested",
    label: "Interested",
    accent: "purple",
  },
  {
    status: "quote sent",
    label: "Quote Sent",
    accent: "yellow",
  },
  {
    status: "follow up later",
    label: "Follow Up Later",
    accent: "slate",
  },
  {
    status: "won",
    label: "Won",
    accent: "green",
  },
  {
    status: "lost",
    label: "Lost",
    accent: "red",
  },
];

function parseEstimatedValue(value) {
  if (!value) {
    return 0;
  }

  const numbers = String(value)
    .replace(/,/g, "")
    .match(/\d+/g)
    ?.map((num) => Number(num))
    .filter((num) => !Number.isNaN(num));

  if (!numbers || numbers.length === 0) {
    return 0;
  }

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

export default function LeadFinderBoardPage() {
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

  async function moveLead(leadId, newStatus) {
    setUpdatingId(leadId);
    setError("");

    const { error: updateError } = await supabase
      .from("lead_finder_leads")
      .update({
        status: newStatus,
        updated_at: new Date().toISOString(),
      })
      .eq("id", leadId);

    if (updateError) {
      setError(updateError.message);
      setUpdatingId(null);
      return;
    }

    const { error: activityError } = await supabase
      .from("lead_finder_activities")
      .insert({
        lead_id: leadId,
        activity_type: newStatus,
        activity_text: `Lead moved to ${prettyStatus(newStatus)}.`,
      });

    if (activityError) {
      console.error("Could not log pipeline move:", activityError);
    }

    setLeads((current) =>
      current.map((lead) =>
        lead.id === leadId
          ? {
              ...lead,
              status: newStatus,
            }
          : lead
      )
    );

    setUpdatingId(null);
  }

  const boardStats = useMemo(() => {
    const openLeads = leads.filter((lead) => {
      const status = lead.status || "new";

      return status !== "won" && status !== "lost";
    });

    const wonLeads = leads.filter((lead) => lead.status === "won");

    const highScoreLeads = leads.filter(
      (lead) =>
        Number(lead.lead_score || 0) >= 75 &&
        !["won", "lost"].includes(lead.status || "new")
    );

    const openValue = openLeads.reduce(
      (sum, lead) =>
        sum + parseEstimatedValue(lead.estimated_offer_value),
      0
    );

    const wonValue = wonLeads.reduce(
      (sum, lead) =>
        sum + parseEstimatedValue(lead.estimated_offer_value),
      0
    );

    return {
      total: leads.length,
      open: openLeads.length,
      won: wonLeads.length,
      highScore: highScoreLeads.length,
      openValue,
      wonValue,
    };
  }, [leads]);

  if (loadingSession) {
    return (
      <main className="board-page">
        <style>{styles}</style>

        <section className="empty-box loading-box">
          <div className="loading-dot" />

          <h1>Loading Pipeline</h1>

          <p>Verifying your Matthew Web admin session.</p>
        </section>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="board-page">
        <style>{styles}</style>

        <section className="empty-box">
          <LayoutGrid size={40} />

          <h1>Lead Pipeline Board</h1>

          <p>You need to sign in through Mission Control first.</p>

          <Link href="/admin" className="primary-btn">
            Go to Admin Login
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="board-page">
      <style>{styles}</style>

      <div className="board-shell">
        <header className="board-header">
          <div className="header-main">
            <div className="header-icon">
              <LayoutGrid size={28} />
            </div>

            <div>
              <p className="eyebrow">
                Matthew Web • Sales Operations
              </p>

              <h1>
                Lead Pipeline <span>Board</span>
              </h1>

              <p className="header-description">
                Move leads through the sales process, prioritize opportunities,
                and track estimated pipeline value.
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
              href="/admin/lead-finder/search"
              className="secondary-btn"
            >
              <Search size={16} />
              Google Search
            </Link>

            <Link
              href="/admin/lead-finder/hot"
              className="secondary-btn hot-link"
            >
              <Flame size={16} />
              Hot Leads
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
            <strong>Pipeline Error</strong>
            <span>{error}</span>
          </div>
        ) : null}

        <section className="board-stats">
          <article className="stat-card cyan">
            <div className="stat-icon">
              <Users size={23} strokeWidth={2.8} />
            </div>

            <div className="stat-content">
              <span>Total Leads</span>

              <strong>{boardStats.total}</strong>

              <small>{boardStats.open} currently open</small>
            </div>
          </article>

          <article className="stat-card orange">
            <div className="stat-icon">
              <DollarSign size={23} strokeWidth={2.8} />
            </div>

            <div className="stat-content">
              <span>Open Pipeline</span>

              <strong>{formatMoney(boardStats.openValue)}</strong>

              <small>
                Estimated value from active opportunities
              </small>
            </div>
          </article>

          <article className="stat-card green">
            <div className="stat-icon">
              <Trophy size={23} strokeWidth={2.8} />
            </div>

            <div className="stat-content">
              <span>Won Value</span>

              <strong>{formatMoney(boardStats.wonValue)}</strong>

              <small>
                {boardStats.won} lead
                {boardStats.won === 1 ? "" : "s"} marked won
              </small>
            </div>
          </article>

          <article className="stat-card red">
            <div className="stat-icon">
              <Flame size={23} strokeWidth={2.8} />
            </div>

            <div className="stat-content">
              <span>High-Score Leads</span>

              <strong>{boardStats.highScore}</strong>

              <small>Open leads scoring 75 or higher</small>
            </div>
          </article>
        </section>

        <section className="board-section-heading">
          <div>
            <p className="eyebrow">Live Pipeline</p>

            <h2>Sales Stages</h2>

            <p>
              Change a lead&apos;s stage with the selector on its card. Every
              move is recorded in the activity timeline.
            </p>
          </div>

          <div className="board-key">
            <span>{boardStats.total} leads</span>
            <span>8 stages</span>
          </div>
        </section>

        {loadingLeads ? (
          <section className="loading-panel">
            <RefreshCw size={26} className="spin" />

            <strong>Loading pipeline...</strong>
          </section>
        ) : null}

        {!loadingLeads ? (
          <section className="board-scroll">
            <div className="board-grid">
              {columns.map((column) => {
                const status = column.status;

                const columnLeads = leads.filter(
                  (lead) => (lead.status || "new") === status
                );

                const columnValue = columnLeads.reduce(
                  (sum, lead) =>
                    sum +
                    parseEstimatedValue(
                      lead.estimated_offer_value
                    ),
                  0
                );

                return (
                  <div
                    className={`board-column ${column.accent}`}
                    key={status}
                  >
                    <div className="column-accent" />

                    <div className="column-header">
                      <div>
                        <span className="column-stage">STAGE</span>

                        <h2>{column.label}</h2>
                      </div>

                      <span className="column-count">
                        {columnLeads.length}
                      </span>
                    </div>

                    <div className="column-value">
                      <DollarSign size={14} />

                      <div>
                        <span>ESTIMATED VALUE</span>

                        <strong>
                          {formatMoney(columnValue)}
                        </strong>
                      </div>
                    </div>

                    <div className="column-list">
                      {columnLeads.length === 0 ? (
                        <div className="mini-empty">
                          <span>Empty Stage</span>

                          <p>No leads here.</p>
                        </div>
                      ) : null}

                      {columnLeads.map((lead) => {
                        const score = Number(
                          lead.lead_score || 0
                        );

                        return (
                          <article
                            className="board-card"
                            key={lead.id}
                          >
                            <div className="card-top">
                              <div>
                                <span className="business-label">
                                  BUSINESS
                                </span>

                                <h3>{lead.business_name}</h3>
                              </div>

                              <div
                                className={`score-box ${
                                  score >= 75 ? "hot" : ""
                                }`}
                              >
                                <span>SCORE</span>

                                <strong>{score}</strong>
                              </div>
                            </div>

                            <div className="category-line">
                              <span>
                                {lead.category || "No category"}
                              </span>

                              {lead.city || lead.state ? (
                                <span>
                                  •{" "}
                                  {[lead.city, lead.state]
                                    .filter(Boolean)
                                    .join(", ")}
                                </span>
                              ) : null}
                            </div>

                            <div className="value-line">
                              <DollarSign size={15} />

                              <div>
                                <span>ESTIMATED OFFER</span>

                                <strong>
                                  {lead.estimated_offer_value ||
                                    "No value set"}
                                </strong>
                              </div>
                            </div>

                            {lead.next_followup_at ? (
                              <div className="followup-line">
                                <Clock3 size={14} />

                                <span>
                                  {new Date(
                                    lead.next_followup_at
                                  ).toLocaleString()}
                                </span>
                              </div>
                            ) : null}

                            <div className="problem-panel">
                              <span>OPPORTUNITY / PROBLEM</span>

                              <p>
                                {lead.problem_summary ||
                                  "No problem summary added."}
                              </p>
                            </div>

                            <div className="contact-row">
                              <Link
                                href={`/admin/lead-finder/${lead.id}`}
                                className="open-lead-link"
                              >
                                <ExternalLink size={13} />
                                Open
                              </Link>

                              {lead.phone ? (
                                <a href={`tel:${lead.phone}`}>
                                  <Phone size={13} />
                                  Call
                                </a>
                              ) : null}

                              {lead.email ? (
                                <a href={`mailto:${lead.email}`}>
                                  <Mail size={13} />
                                  Email
                                </a>
                              ) : null}

                              {lead.website_url ? (
                                <a
                                  href={lead.website_url}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <Globe2 size={13} />
                                  Site
                                </a>
                              ) : null}
                            </div>

                            <div className="stage-control">
                              <label>MOVE LEAD</label>

                              <select
                                value={lead.status || "new"}
                                disabled={updatingId === lead.id}
                                onChange={(e) =>
                                  moveLead(
                                    lead.id,
                                    e.target.value
                                  )
                                }
                              >
                                {columns.map((option) => (
                                  <option
                                    key={option.status}
                                    value={option.status}
                                  >
                                    {option.label}
                                  </option>
                                ))}
                              </select>

                              {updatingId === lead.id ? (
                                <span className="updating-message">
                                  Updating pipeline...
                                </span>
                              ) : null}
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
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

  .board-page {
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
    background:
      radial-gradient(
        circle at 8% -5%,
        rgba(0, 194, 255, 0.13),
        transparent 30%
      ),
      radial-gradient(
        circle at 96% 2%,
        rgba(255, 128, 0, 0.12),
        transparent 27%
      ),
      linear-gradient(
        180deg,
        #06090f 0%,
        #05070b 50%,
        #06080d 100%
      );
  }

  .board-page::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: 0.14;
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

  .board-shell {
    position: relative;
    z-index: 1;
    width: min(1580px, calc(100% - 36px));
    margin: 0 auto;
    padding: 32px 0 60px;
  }

  .board-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    margin-bottom: 15px;
    padding: 27px;
    border: 1px solid #192536;
    border-radius: 25px;
    background:
      linear-gradient(
        135deg,
        rgba(15, 22, 33, 0.97),
        rgba(8, 12, 19, 0.98)
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
    width: 56px;
    height: 56px;
    display: grid;
    place-items: center;
    border-radius: 17px;
    color: #ffffff;
    background:
      linear-gradient(
        145deg,
        #009fd0,
        #087df5
      );
    box-shadow:
      0 0 32px rgba(0, 182, 232, 0.2);
  }

  .eyebrow {
    margin: 0 0 8px;
    color: #32d7ff;
    font-size: 11px;
    line-height: 1;
    font-weight: 1000;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .board-header h1 {
    margin: 0 0 8px;
    color: #ffffff;
    font-size: clamp(35px, 4.5vw, 53px);
    line-height: 1;
    letter-spacing: -0.05em;
  }

  .board-header h1 span {
    color: #ff8300;
  }

  .header-description {
    max-width: 720px;
    margin: 0;
    color: #8998aa;
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
  .secondary-btn {
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
        #ff6600
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
    border: 1px solid #24394b;
    color: #a5eafb;
    background: #0a141e;
  }

  .secondary-btn:hover {
    border-color: #28c9ef;
    color: #ffffff;
    background: #0c1c27;
    transform: translateY(-1px);
  }

  .hot-link {
    color: #ffad78;
    border-color: rgba(255, 108, 56, 0.28);
    background: rgba(130, 45, 18, 0.12);
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

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
     FIXED STAT CARDS
  ========================================================== */

  .board-stats {
    display: grid;
    grid-template-columns:
      repeat(4, minmax(0, 1fr));
    gap: 11px;
    margin-bottom: 28px;
  }

  .stat-card {
    --stat-accent: #27d1f1;

    min-width: 0;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 18px;
    border: 1px solid #192535;
    border-radius: 18px;
    background:
      linear-gradient(
        145deg,
        #0e151f,
        #090e15
      );
  }

  .stat-card.cyan {
    --stat-accent: #27d1f1;
  }

  .stat-card.orange {
    --stat-accent: #ff8b00;
  }

  .stat-card.green {
    --stat-accent: #49df91;
  }

  .stat-card.red {
    --stat-accent: #ff666d;
  }

  .stat-icon {
    flex: 0 0 auto;
    width: 52px;
    height: 52px;
    display: grid;
    place-items: center;
    border-radius: 14px;
    background: var(--stat-accent);
    color: #05090d;
    box-shadow:
      0 0 20px
      color-mix(
        in srgb,
        var(--stat-accent) 25%,
        transparent
      );
  }

  .stat-icon svg {
    width: 25px;
    height: 25px;
    color: #05090d;
    stroke-width: 2.8;
  }

  .stat-content {
    min-width: 0;
  }

  .stat-card span {
    display: block;
    margin-bottom: 5px;
    color: #8d9bad;
    font-size: 10px;
    font-weight: 1000;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .stat-card strong {
    display: block;
    color: #ffffff;
    font-size: clamp(24px, 2.5vw, 32px);
    line-height: 1;
    letter-spacing: -0.04em;
    overflow-wrap: anywhere;
  }

  .stat-card small {
    display: block;
    margin-top: 7px;
    color: #69788c;
    font-size: 9px;
    line-height: 1.35;
  }

  .board-section-heading {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 25px;
    margin-bottom: 14px;
  }

  .board-section-heading h2 {
    margin: 0 0 5px;
    color: #f6f8fb;
    font-size: 28px;
    letter-spacing: -0.035em;
  }

  .board-section-heading p:not(.eyebrow) {
    max-width: 720px;
    margin: 0;
    color: #758397;
    font-size: 12px;
    line-height: 1.5;
  }

  .board-key {
    flex: 0 0 auto;
    display: flex;
    gap: 7px;
  }

  .board-key span {
    padding: 7px 10px;
    border: 1px solid #243649;
    border-radius: 9px;
    color: #7590a5;
    background: #090f17;
    font-size: 9px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .board-scroll {
    width: 100%;
    overflow-x: auto;
    padding: 2px 0 18px;
    scrollbar-width: thin;
    scrollbar-color: #30435a #0a1017;
  }

  .board-scroll::-webkit-scrollbar {
    height: 12px;
  }

  .board-scroll::-webkit-scrollbar-track {
    border-radius: 20px;
    background: #080d13;
  }

  .board-scroll::-webkit-scrollbar-thumb {
    border: 2px solid #080d13;
    border-radius: 20px;
    background: #30435a;
  }

  .board-scroll::-webkit-scrollbar-thumb:hover {
    background: #3e5772;
  }

  .board-grid {
    min-width: 2240px;
    display: grid;
    grid-template-columns:
      repeat(8, minmax(260px, 1fr));
    gap: 11px;
  }

  .board-column {
    --column-accent: #22d3ee;

    position: relative;
    overflow: hidden;
    min-width: 0;
    min-height: 560px;
    padding: 15px;
    border: 1px solid #192536;
    border-radius: 18px;
    background:
      linear-gradient(
        180deg,
        rgba(13, 20, 29, 0.99),
        rgba(7, 12, 18, 0.99)
      );
  }

  .board-column.cyan {
    --column-accent: #22d3ee;
  }

  .board-column.blue {
    --column-accent: #4d8dff;
  }

  .board-column.orange {
    --column-accent: #ff8800;
  }

  .board-column.purple {
    --column-accent: #a77cff;
  }

  .board-column.yellow {
    --column-accent: #f1c44d;
  }

  .board-column.slate {
    --column-accent: #8b9aad;
  }

  .board-column.green {
    --column-accent: #46dc8b;
  }

  .board-column.red {
    --column-accent: #ff6268;
  }

  .column-accent {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--column-accent);
  }

  .column-header {
    min-height: 57px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 10px;
  }

  .column-stage {
    display: block;
    margin-bottom: 5px;
    color: #57687a;
    font-size: 8px;
    font-weight: 1000;
    letter-spacing: 0.1em;
  }

  .column-header h2 {
    margin: 0;
    color: var(--column-accent);
    font-size: 17px;
    line-height: 1.15;
    letter-spacing: -0.025em;
  }

  .column-count {
    flex: 0 0 auto;
    min-width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    padding: 0 7px;
    border-radius: 10px;
    color: #06090d;
    background: var(--column-accent);
    font-size: 13px;
    font-weight: 1000;
  }

  .column-value {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
    padding: 9px 10px;
    border: 1px solid #1c2a3a;
    border-radius: 10px;
    color: var(--column-accent);
    background: #080e15;
  }

  .column-value > div {
    min-width: 0;
  }

  .column-value span {
    display: block;
    margin-bottom: 2px;
    color: #566679;
    font-size: 7px;
    font-weight: 1000;
    letter-spacing: 0.08em;
  }

  .column-value strong {
    display: block;
    color: #dbe5ed;
    font-size: 12px;
  }

  .column-list {
    display: grid;
    gap: 10px;
  }

  .board-card {
    min-width: 0;
    padding: 13px;
    border: 1px solid #1b2938;
    border-radius: 14px;
    background:
      linear-gradient(
        145deg,
        #0d141d,
        #080d13
      );
    box-shadow:
      0 8px 22px rgba(0, 0, 0, 0.16);
    transition:
      transform 0.16s ease,
      border-color 0.16s ease;
  }

  .board-card:hover {
    transform: translateY(-2px);
    border-color: #30445a;
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 9px;
    margin-bottom: 8px;
  }

  .card-top > div:first-child {
    min-width: 0;
  }

  .business-label {
    display: block;
    margin-bottom: 4px;
    color: #536477;
    font-size: 7px;
    font-weight: 1000;
    letter-spacing: 0.08em;
  }

  .card-top h3 {
    margin: 0;
    color: #f4f7fa;
    font-size: 15px;
    line-height: 1.25;
    overflow-wrap: anywhere;
  }

  .score-box {
    flex: 0 0 auto;
    min-width: 44px;
    padding: 7px 6px;
    border: 1px solid rgba(255, 139, 0, 0.22);
    border-radius: 10px;
    background: rgba(255, 126, 0, 0.07);
    text-align: center;
  }

  .score-box span {
    display: block;
    margin-bottom: 1px;
    color: #9a7048;
    font-size: 6px;
    font-weight: 1000;
  }

  .score-box strong {
    display: block;
    color: #ff9d37;
    font-size: 19px;
    line-height: 1;
  }

  .score-box.hot {
    border-color: rgba(255, 85, 85, 0.35);
    background: rgba(255, 61, 61, 0.07);
  }

  .score-box.hot strong {
    color: #ff7474;
  }

  .category-line {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin: 0 0 9px;
    color: #5fcde2;
    font-size: 9px;
    font-weight: 800;
    line-height: 1.35;
  }

  .category-line span:last-child:not(:first-child) {
    color: #6d7d90;
  }

  .value-line {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-bottom: 8px;
    padding: 8px 9px;
    border: 1px solid #1b2836;
    border-radius: 9px;
    color: #ff940f;
    background: #070c12;
  }

  .value-line > div {
    min-width: 0;
  }

  .value-line span {
    display: block;
    margin-bottom: 2px;
    color: #5a687a;
    font-size: 6px;
    font-weight: 1000;
    letter-spacing: 0.07em;
  }

  .value-line strong {
    display: block;
    color: #cbd5df;
    font-size: 10px;
    overflow-wrap: anywhere;
  }

  .followup-line {
    display: flex;
    align-items: flex-start;
    gap: 6px;
    margin-bottom: 8px;
    padding: 7px 8px;
    border-radius: 8px;
    color: #84dff2;
    background: rgba(20, 138, 164, 0.07);
    font-size: 8px;
    line-height: 1.35;
  }

  .followup-line svg {
    flex: 0 0 auto;
  }

  .problem-panel {
    margin-bottom: 9px;
    padding: 9px;
    border: 1px solid #1b2836;
    border-radius: 9px;
    background: #080d13;
  }

  .problem-panel > span {
    display: block;
    margin-bottom: 4px;
    color: #69788b;
    font-size: 7px;
    font-weight: 1000;
    letter-spacing: 0.07em;
  }

  .problem-panel p {
    display: -webkit-box;
    overflow: hidden;
    margin: 0;
    color: #9eabb8;
    font-size: 9px;
    line-height: 1.45;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  }

  .contact-row {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-bottom: 10px;
  }

  .contact-row a {
    min-height: 28px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 0 7px;
    border: 1px solid #233849;
    border-radius: 7px;
    color: #86e6f9;
    background: #0a141d;
    text-decoration: none;
    font-size: 8px;
    font-weight: 900;
  }

  .contact-row a:hover {
    color: #ffffff;
    border-color: #26c8ec;
    background: #0c1d28;
  }

  .contact-row .open-lead-link {
    color: #ffc27d;
    border-color: rgba(255, 139, 0, 0.25);
    background: rgba(152, 78, 0, 0.1);
  }

  .stage-control {
    padding-top: 9px;
    border-top: 1px solid #182432;
  }

  .stage-control label {
    display: block;
    margin-bottom: 5px;
    color: #607084;
    font-size: 7px;
    font-weight: 1000;
    letter-spacing: 0.08em;
  }

  .stage-control select {
    width: 100%;
    min-height: 36px;
    border: 1px solid #2a3b4e;
    border-radius: 9px;
    outline: none;
    padding: 0 9px;
    color: #d9e4ed;
    background: #080e15;
    font-size: 9px;
    font-weight: 800;
  }

  .stage-control select:focus {
    border-color: var(--column-accent);
  }

  .stage-control select:disabled {
    opacity: 0.5;
  }

  .updating-message {
    display: block;
    margin-top: 5px;
    color: #ffad56;
    font-size: 7px;
    font-weight: 800;
  }

  .mini-empty {
    padding: 25px 10px;
    border: 1px dashed #263548;
    border-radius: 12px;
    text-align: center;
    background: rgba(6, 10, 15, 0.5);
  }

  .mini-empty span {
    display: block;
    margin-bottom: 4px;
    color: #627286;
    font-size: 8px;
    font-weight: 1000;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  .mini-empty p {
    margin: 0;
    color: #49596c;
    font-size: 9px;
  }

  .loading-panel {
    min-height: 180px;
    display: grid;
    place-items: center;
    align-content: center;
    gap: 10px;
    border: 1px solid #1d2a3b;
    border-radius: 18px;
    color: #7be5f9;
    background: #090f16;
  }

  .loading-panel strong {
    color: #91a0b1;
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
    color: #30d1ef;
  }

  .empty-box h1 {
    margin: 0 0 8px;
    color: #f6f8fb;
    font-size: 30px;
  }

  .empty-box p {
    margin: 0 0 18px;
    font-size: 12px;
  }

  .loading-dot {
    width: 15px;
    height: 15px;
    margin: 0 auto 14px;
    border-radius: 50%;
    background: #28c9ef;
    box-shadow:
      0 0 18px rgba(40, 201, 239, 0.75);
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

  @media (max-width: 1180px) {
    .board-header {
      flex-direction: column;
      align-items: stretch;
    }

    .header-actions {
      justify-content: flex-start;
    }

    .board-stats {
      grid-template-columns:
        repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 760px) {
    .board-shell {
      width: calc(100% - 20px);
      padding-top: 10px;
    }

    .board-header {
      padding: 20px;
      border-radius: 20px;
    }

    .header-main {
      gap: 13px;
    }

    .header-icon {
      width: 46px;
      height: 46px;
      border-radius: 14px;
    }

    .board-header h1 {
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

    .board-stats {
      grid-template-columns: 1fr;
    }

    .board-section-heading {
      flex-direction: column;
      align-items: flex-start;
    }

    .board-key {
      width: 100%;
    }

    .board-key span {
      flex: 1;
      text-align: center;
    }

    .board-scroll {
      overflow-x: visible;
      padding-bottom: 0;
    }

    .board-grid {
      min-width: 0;
      grid-template-columns: 1fr;
    }

    .board-column {
      min-height: 0;
    }

    .column-list {
      grid-template-columns:
        repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 520px) {
    .header-main {
      flex-direction: column;
    }

    .header-actions {
      grid-template-columns: 1fr;
    }

    .board-header h1 {
      font-size: 32px;
    }

    .column-list {
      grid-template-columns: 1fr;
    }

    .stat-card {
      align-items: center;
    }

    .stat-icon {
      width: 50px;
      height: 50px;
    }
  }
`;
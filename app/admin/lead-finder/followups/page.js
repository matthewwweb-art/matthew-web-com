"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarClock,
  CheckCircle2,
  Clock3,
  ExternalLink,
  Flame,
  Globe2,
  LayoutGrid,
  Mail,
  MapPin,
  Phone,
  RefreshCw,
  Search,
  Target,
  TimerReset,
  Trash2,
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

function formatDate(value) {
  if (!value) {
    return "Not set";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Not set";
  }

  return date.toLocaleString();
}

function prettyStatus(status) {
  return String(status || "new")
    .split(" ")
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(" ");
}

function getFollowupState(value) {
  if (!value) {
    return "later";
  }

  const now = new Date();
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "later";
  }

  if (date <= now) {
    return "due";
  }

  const sevenDays = new Date(now);
  sevenDays.setDate(now.getDate() + 7);

  if (date <= sevenDays) {
    return "upcoming";
  }

  return "later";
}

export default function FollowUpsPage() {
  const [session, setSession] = useState(null);
  const [loadingSession, setLoadingSession] = useState(true);
  const [loadingLeads, setLoadingLeads] = useState(false);
  const [leads, setLeads] = useState([]);
  const [error, setError] = useState("");
  const [savingId, setSavingId] = useState(null);

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
      .not("next_followup_at", "is", null)
      .order("next_followup_at", {
        ascending: true,
      });

    if (leadError) {
      setError(leadError.message);
      setLoadingLeads(false);
      return;
    }

    setLeads(data || []);
    setLoadingLeads(false);
  }

  async function updateStatus(lead, status) {
    setSavingId(lead.id);
    setError("");

    const { error: updateError } = await supabase
      .from("lead_finder_leads")
      .update({
        status,
        updated_at: new Date().toISOString(),
      })
      .eq("id", lead.id);

    if (updateError) {
      setError(updateError.message);
      setSavingId(null);
      return;
    }

    const { error: activityError } = await supabase
      .from("lead_finder_activities")
      .insert({
        lead_id: lead.id,
        activity_type: status,
        activity_text: `Status changed to ${prettyStatus(
          status
        )} from Follow-Up Center.`,
      });

    if (activityError) {
      console.error(
        "Could not log follow-up status change:",
        activityError
      );
    }

    setLeads((current) =>
      current.map((item) =>
        item.id === lead.id
          ? {
              ...item,
              status,
            }
          : item
      )
    );

    setSavingId(null);
  }

  async function pushFollowUp(lead, days) {
    setSavingId(lead.id);
    setError("");

    const nextDate = new Date();

    nextDate.setDate(
      nextDate.getDate() + days
    );

    nextDate.setHours(9, 0, 0, 0);

    const isoDate = nextDate.toISOString();

    const { error: updateError } = await supabase
      .from("lead_finder_leads")
      .update({
        next_followup_at: isoDate,
        updated_at: new Date().toISOString(),
      })
      .eq("id", lead.id);

    if (updateError) {
      setError(updateError.message);
      setSavingId(null);
      return;
    }

    const { error: activityError } = await supabase
      .from("lead_finder_activities")
      .insert({
        lead_id: lead.id,
        activity_type: "follow up",
        activity_text: `Follow-up moved to ${nextDate.toLocaleString()}.`,
      });

    if (activityError) {
      console.error(
        "Could not log follow-up change:",
        activityError
      );
    }

    setLeads((current) =>
      current.map((item) =>
        item.id === lead.id
          ? {
              ...item,
              next_followup_at: isoDate,
            }
          : item
      )
    );

    setSavingId(null);
  }

  async function clearFollowUp(lead) {
    const confirmed = window.confirm(
      "Clear this follow-up date?"
    );

    if (!confirmed) {
      return;
    }

    setSavingId(lead.id);
    setError("");

    const { error: updateError } = await supabase
      .from("lead_finder_leads")
      .update({
        next_followup_at: null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", lead.id);

    if (updateError) {
      setError(updateError.message);
      setSavingId(null);
      return;
    }

    const { error: activityError } = await supabase
      .from("lead_finder_activities")
      .insert({
        lead_id: lead.id,
        activity_type: "follow up",
        activity_text:
          "Follow-up date cleared from Follow-Up Center.",
      });

    if (activityError) {
      console.error(
        "Could not log cleared follow-up:",
        activityError
      );
    }

    setLeads((current) =>
      current.filter(
        (item) => item.id !== lead.id
      )
    );

    setSavingId(null);
  }

  const groups = useMemo(() => {
    const now = new Date();

    const sevenDays = new Date(now);

    sevenDays.setDate(
      now.getDate() + 7
    );

    const active = leads.filter((lead) => {
      const status = lead.status || "new";

      return status !== "won" && status !== "lost";
    });

    const dueNow = active.filter(
      (lead) =>
        new Date(lead.next_followup_at) <= now
    );

    const upcoming = active.filter((lead) => {
      const date = new Date(
        lead.next_followup_at
      );

      return date > now && date <= sevenDays;
    });

    const later = active.filter((lead) => {
      const date = new Date(
        lead.next_followup_at
      );

      return date > sevenDays;
    });

    return {
      active,
      dueNow,
      upcoming,
      later,
    };
  }, [leads]);

  if (loadingSession) {
    return (
      <main className="followups-page">
        <style>{styles}</style>

        <section className="empty-box">
          <div className="loading-dot" />

          <h1>
            Loading Follow-Up Center
          </h1>

          <p>
            Verifying your Matthew Web admin session.
          </p>
        </section>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="followups-page">
        <style>{styles}</style>

        <section className="empty-box">
          <CalendarClock size={42} />

          <h1>Follow-Up Center</h1>

          <p>
            You need to sign in through Mission Control first.
          </p>

          <Link
            href="/admin"
            className="primary-btn"
          >
            Go to Admin Login
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="followups-page">
      <style>{styles}</style>

      <div className="followups-shell">
        <header className="followups-header">
          <div className="header-main">
            <div className="header-icon">
              <CalendarClock size={29} />
            </div>

            <div>
              <p className="eyebrow">
                Matthew Web • Sales Follow-Ups
              </p>

              <h1>
                Follow-Up <span>Center</span>
              </h1>

              <p className="header-description">
                See every Lead Finder follow-up that is overdue,
                due now, coming up this week, or scheduled for
                later.
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
              href="/admin/lead-finder/hot"
              className="secondary-btn hot-link"
            >
              <Flame size={16} />
              Hot Leads
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
              Search
            </Link>

            <button
              type="button"
              className="primary-btn"
              onClick={loadLeads}
              disabled={loadingLeads}
            >
              <RefreshCw
                size={16}
                className={
                  loadingLeads
                    ? "spin"
                    : ""
                }
              />

              {loadingLeads
                ? "Refreshing"
                : "Refresh"}
            </button>
          </div>
        </header>

        {error ? (
          <div className="error-box">
            <strong>
              Follow-Up Center Error
            </strong>

            <span>{error}</span>
          </div>
        ) : null}

        <section className="stats-grid">
          <article className="stat-card red">
            <div className="stat-icon">
              <Flame
                size={24}
                strokeWidth={2.8}
              />
            </div>

            <div>
              <span>Due Now</span>

              <strong>
                {groups.dueNow.length}
              </strong>

              <small>
                Due today or already overdue
              </small>
            </div>
          </article>

          <article className="stat-card cyan">
            <div className="stat-icon">
              <Clock3
                size={24}
                strokeWidth={2.8}
              />
            </div>

            <div>
              <span>
                Upcoming This Week
              </span>

              <strong>
                {groups.upcoming.length}
              </strong>

              <small>
                Scheduled during the next 7 days
              </small>
            </div>
          </article>

          <article className="stat-card purple">
            <div className="stat-icon">
              <CalendarClock
                size={24}
                strokeWidth={2.8}
              />
            </div>

            <div>
              <span>Scheduled Later</span>

              <strong>
                {groups.later.length}
              </strong>

              <small>
                More than 7 days from now
              </small>
            </div>
          </article>

          <article className="stat-card green">
            <div className="stat-icon">
              <CheckCircle2
                size={24}
                strokeWidth={2.8}
              />
            </div>

            <div>
              <span>
                Active Follow-Ups
              </span>

              <strong>
                {groups.active.length}
              </strong>

              <small>
                Total active scheduled follow-ups
              </small>
            </div>
          </article>
        </section>

        <section className="followup-overview">
          <div>
            <p className="eyebrow">
              Follow-Up Queue
            </p>

            <h2>
              Work the oldest due leads first
            </h2>

            <p>
              Contact the lead, update its sales status, then move
              the next follow-up date or clear it when no further
              reminder is needed.
            </p>
          </div>

          <div className="overview-status">
            <Target size={17} />

            <div>
              <strong>
                {groups.dueNow.length}
              </strong>

              <span>
                need attention now
              </span>
            </div>
          </div>
        </section>

        {loadingLeads ? (
          <section className="loading-panel">
            <RefreshCw
              size={28}
              className="spin"
            />

            <strong>
              Loading follow-ups...
            </strong>
          </section>
        ) : null}

        {!loadingLeads ? (
          <>
            <FollowUpGroup
              type="due"
              title="Due Now / Overdue"
              description="These leads need action first."
              leads={groups.dueNow}
              savingId={savingId}
              updateStatus={updateStatus}
              pushFollowUp={pushFollowUp}
              clearFollowUp={clearFollowUp}
              urgent
            />

            <FollowUpGroup
              type="upcoming"
              title="Upcoming This Week"
              description="These leads are coming up during the next 7 days."
              leads={groups.upcoming}
              savingId={savingId}
              updateStatus={updateStatus}
              pushFollowUp={pushFollowUp}
              clearFollowUp={clearFollowUp}
            />

            <FollowUpGroup
              type="later"
              title="Scheduled Later"
              description="These leads are scheduled more than 7 days out."
              leads={groups.later}
              savingId={savingId}
              updateStatus={updateStatus}
              pushFollowUp={pushFollowUp}
              clearFollowUp={clearFollowUp}
            />
          </>
        ) : null}
      </div>
    </main>
  );
}

function FollowUpGroup({
  type,
  title,
  description,
  leads,
  savingId,
  updateStatus,
  pushFollowUp,
  clearFollowUp,
  urgent,
}) {
  return (
    <section
      className={`followup-group ${type} ${
        urgent ? "urgent" : ""
      }`}
    >
      <div className="group-heading">
        <div className="group-title">
          <div className="group-icon">
            {type === "due" ? (
              <Flame size={22} />
            ) : type === "upcoming" ? (
              <Clock3 size={22} />
            ) : (
              <CalendarClock size={22} />
            )}
          </div>

          <div>
            <span className="group-label">
              {type === "due"
                ? "ACTION REQUIRED"
                : type === "upcoming"
                  ? "COMING UP"
                  : "PLANNED"}
            </span>

            <h2>{title}</h2>

            <p>{description}</p>
          </div>
        </div>

        <strong className="group-count">
          {leads.length}
        </strong>
      </div>

      {leads.length === 0 ? (
        <div className="mini-empty">
          <CheckCircle2 size={22} />

          <div>
            <strong>
              Nothing here right now
            </strong>

            <span>
              No leads are currently in this section.
            </span>
          </div>
        </div>
      ) : (
        <div className="followup-list">
          {leads.map((lead) => {
            const followupState =
              getFollowupState(
                lead.next_followup_at
              );

            return (
              <article
                className={`followup-card ${followupState}`}
                key={lead.id}
              >
                <div className="card-top">
                  <div className="business-area">
                    <div className="category-line">
                      <span>
                        {lead.category ||
                          "No category"}
                      </span>

                      {lead.city || lead.state ? (
                        <span className="location-line">
                          <MapPin size={11} />

                          {[lead.city, lead.state]
                            .filter(Boolean)
                            .join(", ")}
                        </span>
                      ) : null}
                    </div>

                    <h3>
                      {lead.business_name}
                    </h3>

                    {lead.contact_name ? (
                      <p className="contact-name">
                        Contact:{" "}
                        {lead.contact_name}
                      </p>
                    ) : null}
                  </div>

                  <div
                    className={`score-badge ${
                      Number(
                        lead.lead_score || 0
                      ) >= 75
                        ? "hot"
                        : ""
                    }`}
                  >
                    <span>SCORE</span>

                    <strong>
                      {lead.lead_score || 0}
                    </strong>

                    <small>/100</small>
                  </div>
                </div>

                <div className="info-grid">
                  <div className="info-card followup-date-card">
                    <CalendarClock size={17} />

                    <div>
                      <span>
                        Follow-Up
                      </span>

                      <strong>
                        {formatDate(
                          lead.next_followup_at
                        )}
                      </strong>
                    </div>
                  </div>

                  <div className="info-card">
                    <Target size={17} />

                    <div>
                      <span>Status</span>

                      <strong>
                        {prettyStatus(
                          lead.status
                        )}
                      </strong>
                    </div>
                  </div>

                  <div className="info-card">
                    <ExternalLink size={17} />

                    <div>
                      <span>
                        Potential Value
                      </span>

                      <strong>
                        {lead.estimated_offer_value ||
                          "Not set"}
                      </strong>
                    </div>
                  </div>

                  <div className="info-card">
                    <Globe2 size={17} />

                    <div>
                      <span>Source</span>

                      <strong>
                        {lead.source ||
                          "manual"}
                      </strong>
                    </div>
                  </div>
                </div>

                <div className="summary-box">
                  <div className="summary-title">
                    <Target size={15} />

                    <strong>
                      Problem / Opportunity
                    </strong>
                  </div>

                  <p>
                    {lead.problem_summary ||
                      "No problem summary added."}
                  </p>
                </div>

                <div className="quick-actions">
                  {lead.phone ? (
                    <a
                      href={`tel:${lead.phone}`}
                    >
                      <Phone size={14} />
                      Call
                    </a>
                  ) : null}

                  {lead.email ? (
                    <a
                      href={`mailto:${lead.email}`}
                    >
                      <Mail size={14} />
                      Email
                    </a>
                  ) : null}

                  {lead.website_url ? (
                    <a
                      href={lead.website_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Globe2 size={14} />
                      Website
                    </a>
                  ) : null}

                  <Link
                    href={`/admin/lead-finder/${lead.id}`}
                    className="open-lead-link"
                  >
                    <ExternalLink size={14} />
                    Open Lead
                  </Link>
                </div>

                <div className="action-panel">
                  <div className="status-control">
                    <label>
                      SALES STATUS
                    </label>

                    <select
                      value={lead.status || "new"}
                      disabled={
                        savingId === lead.id
                      }
                      onChange={(e) =>
                        updateStatus(
                          lead,
                          e.target.value
                        )
                      }
                    >
                      {statusOptions.map(
                        (status) => (
                          <option
                            key={status}
                            value={status}
                          >
                            {prettyStatus(status)}
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  <div className="reschedule-actions">
                    <span className="action-label">
                      RESCHEDULE
                    </span>

                    <div className="reschedule-buttons">
                      <button
                        type="button"
                        className="schedule-btn"
                        disabled={
                          savingId === lead.id
                        }
                        onClick={() =>
                          pushFollowUp(
                            lead,
                            1
                          )
                        }
                      >
                        <TimerReset size={14} />
                        Tomorrow
                      </button>

                      <button
                        type="button"
                        className="schedule-btn"
                        disabled={
                          savingId === lead.id
                        }
                        onClick={() =>
                          pushFollowUp(
                            lead,
                            3
                          )
                        }
                      >
                        <Clock3 size={14} />
                        3 Days
                      </button>

                      <button
                        type="button"
                        className="schedule-btn"
                        disabled={
                          savingId === lead.id
                        }
                        onClick={() =>
                          pushFollowUp(
                            lead,
                            7
                          )
                        }
                      >
                        <CalendarClock size={14} />
                        7 Days
                      </button>

                      <button
                        type="button"
                        className="clear-btn"
                        disabled={
                          savingId === lead.id
                        }
                        onClick={() =>
                          clearFollowUp(
                            lead
                          )
                        }
                      >
                        <Trash2 size={14} />
                        Clear
                      </button>
                    </div>
                  </div>
                </div>

                {savingId === lead.id ? (
                  <div className="saving-message">
                    <RefreshCw
                      size={13}
                      className="spin"
                    />

                    Saving follow-up changes...
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      )}
    </section>
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

  .followups-page {
    position: relative;
    min-height: 100vh;
    overflow-x: hidden;
    background:
      radial-gradient(
        circle at 8% -5%,
        rgba(0, 194, 255, 0.12),
        transparent 29%
      ),
      radial-gradient(
        circle at 96% 2%,
        rgba(255, 128, 0, 0.11),
        transparent 27%
      ),
      linear-gradient(
        180deg,
        #06090f 0%,
        #05070b 50%,
        #06080d 100%
      );
  }

  .followups-page::before {
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

  .followups-shell {
    position: relative;
    z-index: 1;
    width: min(
      1380px,
      calc(100% - 36px)
    );
    margin: 0 auto;
    padding: 32px 0 60px;
  }

  /* =========================================================
     HEADER
  ========================================================= */

  .followups-header {
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
    width: 58px;
    height: 58px;
    display: grid;
    place-items: center;
    border-radius: 18px;
    color: #05090d;
    background:
      linear-gradient(
        145deg,
        #28d4f2,
        #0784f6
      );
    box-shadow:
      0 0 32px rgba(0, 187, 232, 0.22);
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

  .followups-header h1 {
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

  .followups-header h1 span {
    color: #ff8300;
  }

  .header-description {
    max-width: 720px;
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

  /* =========================================================
     BUTTONS
  ========================================================= */

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
        #ff6200
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

  .hot-link {
    color: #ffae7b;
    border-color: rgba(255, 110, 58, 0.27);
    background: rgba(136, 46, 21, 0.11);
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* =========================================================
     ERROR
  ========================================================= */

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

  /* =========================================================
     STATS
  ========================================================= */

  .stats-grid {
    display: grid;
    grid-template-columns:
      repeat(4, minmax(0, 1fr));
    gap: 11px;
    margin-bottom: 28px;
  }

  .stat-card {
    --stat-accent: #29d0f1;

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

  .stat-card.cyan {
    --stat-accent: #29d0f1;
  }

  .stat-card.purple {
    --stat-accent: #a77cff;
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
  }

  .stat-card small {
    display: block;
    margin-top: 7px;
    color: #657488;
    font-size: 9px;
    line-height: 1.35;
  }

  /* =========================================================
     OVERVIEW
  ========================================================= */

  .followup-overview {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 24px;
    margin-bottom: 16px;
  }

  .followup-overview h2 {
    margin: 0 0 6px;
    color: #f6f8fb;
    font-size: 29px;
    letter-spacing: -0.035em;
  }

  .followup-overview p:not(.eyebrow) {
    max-width: 760px;
    margin: 0;
    color: #758397;
    font-size: 12px;
    line-height: 1.5;
  }

  .overview-status {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px 13px;
    border: 1px solid rgba(255, 91, 91, 0.24);
    border-radius: 12px;
    color: #ff7171;
    background: rgba(137, 28, 28, 0.1);
  }

  .overview-status > div {
    display: flex;
    align-items: baseline;
    gap: 5px;
  }

  .overview-status strong {
    color: #ffffff;
    font-size: 18px;
  }

  .overview-status span {
    color: #a66c6c;
    font-size: 9px;
    font-weight: 900;
  }

  /* =========================================================
     GROUPS
  ========================================================= */

  .followup-group {
    --group-accent: #29d0f1;

    margin-bottom: 17px;
    padding: 20px;
    border: 1px solid #1c2939;
    border-radius: 21px;
    background:
      linear-gradient(
        145deg,
        rgba(12, 19, 28, 0.99),
        rgba(8, 13, 20, 0.99)
      );
  }

  .followup-group.due {
    --group-accent: #ff6268;
    border-color: rgba(255, 92, 92, 0.22);
  }

  .followup-group.upcoming {
    --group-accent: #29d0f1;
  }

  .followup-group.later {
    --group-accent: #a77cff;
  }

  .group-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
    margin-bottom: 15px;
  }

  .group-title {
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 13px;
  }

  .group-icon {
    flex: 0 0 auto;
    width: 46px;
    height: 46px;
    display: grid;
    place-items: center;
    border-radius: 13px;
    color: #05090d;
    background: var(--group-accent);
  }

  .group-label {
    display: block;
    margin-bottom: 4px;
    color: var(--group-accent);
    font-size: 8px;
    font-weight: 1000;
    letter-spacing: 0.09em;
  }

  .group-heading h2 {
    margin: 0 0 4px;
    color: #f3f6f9;
    font-size: 24px;
    letter-spacing: -0.03em;
  }

  .group-heading p {
    margin: 0;
    color: #748397;
    font-size: 10px;
  }

  .group-count {
    flex: 0 0 auto;
    min-width: 49px;
    height: 49px;
    display: grid;
    place-items: center;
    padding: 0 10px;
    border-radius: 14px;
    color: #05090d;
    background: var(--group-accent);
    font-size: 20px;
  }

  .followup-list {
    display: grid;
    gap: 11px;
  }

  /* =========================================================
     FOLLOW-UP CARD
  ========================================================= */

  .followup-card {
    position: relative;
    min-width: 0;
    padding: 17px;
    border: 1px solid #1c2938;
    border-radius: 16px;
    background:
      linear-gradient(
        145deg,
        #0d141d,
        #080d13
      );
  }

  .followup-card.due {
    border-color: rgba(255, 86, 86, 0.25);
  }

  .followup-card.upcoming {
    border-color: rgba(40, 202, 238, 0.19);
  }

  .followup-card.later {
    border-color: rgba(167, 124, 255, 0.18);
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 13px;
  }

  .business-area {
    min-width: 0;
  }

  .category-line {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 7px;
    margin-bottom: 6px;
  }

  .category-line > span:first-child {
    color: #3dd1ec;
    font-size: 9px;
    font-weight: 1000;
    text-transform: uppercase;
  }

  .location-line {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: #6d7d90;
    font-size: 9px;
    font-weight: 800;
  }

  .followup-card h3 {
    margin: 0;
    color: #f5f8fa;
    font-size: 22px;
    line-height: 1.15;
    letter-spacing: -0.03em;
  }

  .contact-name {
    margin: 5px 0 0;
    color: #66768a;
    font-size: 9px;
  }

  .score-badge {
    flex: 0 0 auto;
    min-width: 68px;
    padding: 9px;
    border: 1px solid rgba(255, 139, 0, 0.23);
    border-radius: 12px;
    background: rgba(255, 128, 0, 0.065);
    text-align: center;
  }

  .score-badge span {
    display: block;
    margin-bottom: 2px;
    color: #996e45;
    font-size: 6px;
    font-weight: 1000;
    letter-spacing: 0.08em;
  }

  .score-badge strong {
    color: #ff9a32;
    font-size: 24px;
    line-height: 1;
  }

  .score-badge small {
    color: #71563e;
    font-size: 7px;
  }

  .score-badge.hot {
    border-color: rgba(255, 84, 84, 0.34);
    background: rgba(255, 58, 58, 0.07);
  }

  .score-badge.hot strong {
    color: #ff6f6f;
  }

  /* =========================================================
     INFO GRID
  ========================================================= */

  .info-grid {
    display: grid;
    grid-template-columns:
      repeat(4, minmax(0, 1fr));
    gap: 8px;
    margin-bottom: 10px;
  }

  .info-card {
    min-width: 0;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 10px;
    border: 1px solid #192635;
    border-radius: 10px;
    color: #32cfea;
    background: #080d13;
  }

  .info-card > svg {
    flex: 0 0 auto;
    margin-top: 2px;
  }

  .info-card > div {
    min-width: 0;
  }

  .info-card span {
    display: block;
    margin-bottom: 3px;
    color: #5f6f83;
    font-size: 7px;
    font-weight: 1000;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  .info-card strong {
    display: block;
    color: #aebac6;
    font-size: 9px;
    line-height: 1.4;
    overflow-wrap: anywhere;
  }

  .followup-card.due
  .followup-date-card {
    color: #ff7070;
    border-color: rgba(255, 86, 86, 0.18);
  }

  /* =========================================================
     SUMMARY
  ========================================================= */

  .summary-box {
    margin-bottom: 10px;
    padding: 11px;
    border: 1px solid #1b2937;
    border-radius: 10px;
    background: #090f16;
  }

  .summary-title {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 6px;
    color: #ff970e;
  }

  .summary-title strong {
    color: #a5b1bd;
    font-size: 8px;
    font-weight: 1000;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  .summary-box p {
    margin: 0;
    color: #9ba8b6;
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
  }

  /* =========================================================
     QUICK ACTIONS
  ========================================================= */

  .quick-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 12px;
  }

  .quick-actions a {
    min-height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 0 10px;
    border: 1px solid #24394b;
    border-radius: 8px;
    color: #87e7f9;
    background: #0a141d;
    text-decoration: none;
    font-size: 9px;
    font-weight: 900;
  }

  .quick-actions a:hover {
    color: #ffffff;
    border-color: #29c9ed;
    background: #0c1e29;
  }

  .quick-actions
  .open-lead-link {
    color: #ffc078;
    border-color: rgba(255, 139, 0, 0.25);
    background: rgba(146, 77, 0, 0.1);
  }

  /* =========================================================
     ACTION PANEL
  ========================================================= */

  .action-panel {
    display: grid;
    grid-template-columns:
      minmax(180px, 240px)
      minmax(0, 1fr);
    gap: 12px;
    align-items: end;
    padding-top: 11px;
    border-top: 1px solid #192534;
  }

  .status-control {
    display: grid;
    gap: 5px;
  }

  .status-control label,
  .action-label {
    color: #637387;
    font-size: 7px;
    font-weight: 1000;
    letter-spacing: 0.08em;
  }

  .status-control select {
    width: 100%;
    min-height: 38px;
    border: 1px solid #2a3b4e;
    border-radius: 9px;
    outline: none;
    padding: 0 10px;
    color: #dbe5ed;
    background: #080e15;
    font-size: 9px;
    font-weight: 800;
  }

  .status-control select:focus {
    border-color: #29c9ed;
  }

  .reschedule-actions {
    display: grid;
    gap: 5px;
  }

  .reschedule-buttons {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 6px;
  }

  .schedule-btn,
  .clear-btn {
    min-height: 38px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border-radius: 9px;
    padding: 0 11px;
    cursor: pointer;
    font-size: 9px;
    font-weight: 900;
  }

  .schedule-btn {
    color: #9ceafb;
    border: 1px solid #263e50;
    background: #0a1620;
  }

  .schedule-btn:hover:not(:disabled) {
    color: #ffffff;
    border-color: #29c9ed;
    background: #0d202c;
  }

  .clear-btn {
    color: #ffabab;
    border: 1px solid rgba(255, 75, 75, 0.24);
    background: rgba(143, 29, 29, 0.11);
  }

  .clear-btn:hover:not(:disabled) {
    color: #ffffff;
    border-color: rgba(255, 75, 75, 0.45);
    background: rgba(169, 36, 36, 0.2);
  }

  button:disabled,
  select:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .saving-message {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 9px;
    color: #ffad54;
    font-size: 8px;
    font-weight: 800;
  }

  /* =========================================================
     EMPTY / LOADING
  ========================================================= */

  .mini-empty {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 17px;
    border: 1px dashed #263548;
    border-radius: 12px;
    color: #597084;
    background: rgba(6, 10, 15, 0.5);
  }

  .mini-empty svg {
    flex: 0 0 auto;
    color: #4aaa79;
  }

  .mini-empty > div {
    display: grid;
    gap: 3px;
  }

  .mini-empty strong {
    color: #8392a4;
    font-size: 10px;
  }

  .mini-empty span {
    color: #536275;
    font-size: 8px;
  }

  .loading-panel {
    min-height: 180px;
    display: grid;
    place-items: center;
    align-content: center;
    gap: 10px;
    border: 1px solid #1d2a3b;
    border-radius: 18px;
    color: #30d1ef;
    background: #090f16;
  }

  .loading-panel strong {
    color: #8b99aa;
    font-size: 12px;
  }

  .empty-box {
    position: relative;
    z-index: 2;
    width: min(
      520px,
      calc(100% - 30px)
    );
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
    line-height: 1.5;
  }

  .loading-dot {
    width: 15px;
    height: 15px;
    margin: 0 auto 14px;
    border-radius: 50%;
    background: #28c9ef;
    box-shadow:
      0 0 18px rgba(40, 201, 239, 0.75);
    animation:
      pulse
      1s
      ease-in-out
      infinite
      alternate;
  }

  .spin {
    animation:
      spin
      0.8s
      linear
      infinite;
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

  /* =========================================================
     RESPONSIVE
  ========================================================= */

  @media (max-width: 1180px) {
    .followups-header {
      flex-direction: column;
      align-items: stretch;
    }

    .header-actions {
      justify-content: flex-start;
    }

    .stats-grid {
      grid-template-columns:
        repeat(2, minmax(0, 1fr));
    }

    .info-grid {
      grid-template-columns:
        repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 850px) {
    .action-panel {
      grid-template-columns: 1fr;
    }

    .reschedule-buttons {
      justify-content: flex-start;
    }

    .status-control {
      width: 100%;
    }
  }

  @media (max-width: 760px) {
    .followups-shell {
      width: calc(100% - 20px);
      padding-top: 10px;
    }

    .followups-header {
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

    .followups-header h1 {
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

    .stats-grid {
      grid-template-columns: 1fr;
    }

    .followup-overview {
      flex-direction: column;
      align-items: flex-start;
    }

    .overview-status {
      width: 100%;
      justify-content: center;
    }

    .followup-group {
      padding: 15px;
    }

    .group-heading {
      align-items: flex-start;
    }

    .card-top {
      flex-direction: column;
    }

    .score-badge {
      width: 100%;
    }

    .info-grid {
      grid-template-columns: 1fr;
    }

    .reschedule-buttons {
      display: grid;
      grid-template-columns:
        repeat(2, minmax(0, 1fr));
    }

    .schedule-btn,
    .clear-btn {
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

    .followups-header h1 {
      font-size: 32px;
    }

    .group-heading {
      flex-direction: column;
    }

    .group-title {
      align-items: flex-start;
    }

    .group-count {
      width: 100%;
    }

    .quick-actions {
      display: grid;
      grid-template-columns:
        repeat(2, minmax(0, 1fr));
    }

    .quick-actions a {
      width: 100%;
    }

    .reschedule-buttons {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 360px) {
    .quick-actions {
      grid-template-columns: 1fr;
    }
  }
`;
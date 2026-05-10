"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
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
  if (!value) return "Not set";
  return new Date(value).toLocaleString();
}

function prettyStatus(status) {
  return String(status || "new")
    .split(" ")
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(" ");
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
      .order("next_followup_at", { ascending: true });

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

    await supabase.from("lead_finder_activities").insert({
      lead_id: lead.id,
      activity_type: status,
      activity_text: `Status changed to ${prettyStatus(status)} from Follow-Up Center.`,
    });

    setLeads((current) =>
      current.map((item) => (item.id === lead.id ? { ...item, status } : item))
    );

    setSavingId(null);
  }

  async function pushFollowUp(lead, days) {
    setSavingId(lead.id);
    setError("");

    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + days);
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

    await supabase.from("lead_finder_activities").insert({
      lead_id: lead.id,
      activity_type: "follow up",
      activity_text: `Follow-up moved to ${nextDate.toLocaleString()}.`,
    });

    setLeads((current) =>
      current.map((item) =>
        item.id === lead.id ? { ...item, next_followup_at: isoDate } : item
      )
    );

    setSavingId(null);
  }

  async function clearFollowUp(lead) {
    const confirmed = window.confirm("Clear this follow-up date?");
    if (!confirmed) return;

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

    await supabase.from("lead_finder_activities").insert({
      lead_id: lead.id,
      activity_type: "follow up",
      activity_text: "Follow-up date cleared from Follow-Up Center.",
    });

    setLeads((current) => current.filter((item) => item.id !== lead.id));
    setSavingId(null);
  }

  const groups = useMemo(() => {
    const now = new Date();
    const sevenDays = new Date();
    sevenDays.setDate(now.getDate() + 7);

    const active = leads.filter((lead) => {
      const status = lead.status || "new";
      return status !== "won" && status !== "lost";
    });

    const dueNow = active.filter(
      (lead) => new Date(lead.next_followup_at) <= now
    );

    const upcoming = active.filter((lead) => {
      const date = new Date(lead.next_followup_at);
      return date > now && date <= sevenDays;
    });

    const later = active.filter((lead) => {
      const date = new Date(lead.next_followup_at);
      return date > sevenDays;
    });

    return { dueNow, upcoming, later };
  }, [leads]);

  if (loadingSession) {
    return (
      <main className="followups-page">
        <style>{styles}</style>
        <div className="empty-box">Loading...</div>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="followups-page">
        <style>{styles}</style>
        <section className="empty-box">
          <h1>Follow-Up Center</h1>
          <p>You need to sign in through your admin dashboard first.</p>
          <Link href="/admin" className="primary-btn">
            Go to Admin Login
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="followups-page">
      <style>{styles}</style>

      <header className="followups-header">
        <div>
          <p className="eyebrow">lead follow-ups</p>
          <h1>Follow-Up Center</h1>
          <p>See every Lead Finder follow-up that is due, upcoming, or scheduled later.</p>
        </div>

        <div className="header-actions">
          <Link href="/admin/lead-finder" className="secondary-btn">
            Back to Lead Finder
          </Link>

          <Link href="/admin/lead-finder/hot" className="secondary-btn">
            Hot Leads
          </Link>

          <Link href="/admin/lead-finder/board" className="secondary-btn">
            Pipeline Board
          </Link>

          <button type="button" onClick={loadLeads}>
            Refresh
          </button>
        </div>
      </header>

      {error ? <div className="error-box">{error}</div> : null}

      <section className="stats-grid">
        <div>
          <span>Due Now</span>
          <strong>{groups.dueNow.length}</strong>
        </div>

        <div>
          <span>Upcoming This Week</span>
          <strong>{groups.upcoming.length}</strong>
        </div>

        <div>
          <span>Later</span>
          <strong>{groups.later.length}</strong>
        </div>
      </section>

      {loadingLeads ? <div className="empty-box">Loading follow-ups...</div> : null}

      {!loadingLeads ? (
        <>
          <FollowUpGroup
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
            title="Upcoming This Week"
            description="These leads are coming up soon."
            leads={groups.upcoming}
            savingId={savingId}
            updateStatus={updateStatus}
            pushFollowUp={pushFollowUp}
            clearFollowUp={clearFollowUp}
          />

          <FollowUpGroup
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
    </main>
  );
}

function FollowUpGroup({
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
    <section className={urgent ? "followup-group urgent" : "followup-group"}>
      <div className="group-heading">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <strong>{leads.length}</strong>
      </div>

      {leads.length === 0 ? (
        <p className="mini-empty">No leads in this section.</p>
      ) : (
        <div className="followup-list">
          {leads.map((lead) => (
            <article className="followup-card" key={lead.id}>
              <div className="card-top">
                <div>
                  <p className="category-line">
                    {lead.category || "No category"}{" "}
                    {lead.city || lead.state
                      ? `• ${[lead.city, lead.state].filter(Boolean).join(", ")}`
                      : ""}
                  </p>

                  <h3>{lead.business_name}</h3>
                </div>

                <div className="score-badge">
                  <span>Score</span>
                  <strong>{lead.lead_score || 0}</strong>
                </div>
              </div>

              <div className="info-grid">
                <p>
                  <strong>Follow-Up:</strong> {formatDate(lead.next_followup_at)}
                </p>

                <p>
                  <strong>Status:</strong> {prettyStatus(lead.status)}
                </p>

                <p>
                  <strong>Value:</strong> {lead.estimated_offer_value || "Not set"}
                </p>

                <p>
                  <strong>Source:</strong> {lead.source || "manual"}
                </p>
              </div>

              <div className="summary-box">
                <strong>Problem Found:</strong>
                <p>{lead.problem_summary || "No problem summary added."}</p>
              </div>

              <div className="quick-actions">
                {lead.phone ? <a href={`tel:${lead.phone}`}>Call</a> : null}
                {lead.email ? <a href={`mailto:${lead.email}`}>Email</a> : null}

                {lead.website_url ? (
                  <a href={lead.website_url} target="_blank" rel="noreferrer">
                    Website
                  </a>
                ) : null}

                <Link href={`/admin/lead-finder/${lead.id}`}>Open Lead</Link>
              </div>

              <div className="action-row">
                <select
                  value={lead.status || "new"}
                  disabled={savingId === lead.id}
                  onChange={(e) => updateStatus(lead, e.target.value)}
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {prettyStatus(status)}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  disabled={savingId === lead.id}
                  onClick={() => pushFollowUp(lead, 1)}
                >
                  Tomorrow
                </button>

                <button
                  type="button"
                  disabled={savingId === lead.id}
                  onClick={() => pushFollowUp(lead, 3)}
                >
                  3 Days
                </button>

                <button
                  type="button"
                  disabled={savingId === lead.id}
                  onClick={() => pushFollowUp(lead, 7)}
                >
                  7 Days
                </button>

                <button
                  type="button"
                  className="danger-btn"
                  disabled={savingId === lead.id}
                  onClick={() => clearFollowUp(lead)}
                >
                  Clear
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

const styles = `
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #f4f6f8;
    color: #1f2933;
    font-family: Arial, Helvetica, sans-serif;
  }

  .followups-page {
    min-height: 100vh;
    background: #f4f6f8;
    padding: 36px 24px 70px;
  }

  .followups-header,
  .stats-grid,
  .followup-group,
  .error-box,
  .empty-box {
    max-width: 1220px;
    margin-left: auto;
    margin-right: auto;
  }

  .followups-header {
    background: #ffffff;
    border-radius: 22px;
    padding: 32px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    display: flex;
    justify-content: space-between;
    gap: 24px;
    align-items: center;
    margin-bottom: 24px;
  }

  .eyebrow {
    margin: 0 0 8px;
    color: #0f83a6;
    font-weight: 900;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-size: 13px;
  }

  .followups-header h1 {
    margin: 0 0 10px;
    color: #f57c00;
    font-size: clamp(38px, 5vw, 58px);
    line-height: 1;
  }

  .followups-header p {
    margin: 0;
    color: #4b5563;
    font-size: 18px;
    line-height: 1.4;
    max-width: 760px;
  }

  .header-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  button,
  .primary-btn,
  .secondary-btn {
    border: none;
    border-radius: 10px;
    background: #f57c00;
    color: #ffffff;
    padding: 14px 20px;
    font-size: 16px;
    font-weight: 900;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  button:hover,
  .primary-btn:hover {
    background: #d96d00;
  }

  button:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  .secondary-btn {
    background: #0f83a6;
  }

  .secondary-btn:hover {
    background: #0c6d8a;
  }

  .danger-btn {
    background: #dc2626;
  }

  .danger-btn:hover {
    background: #b91c1c;
  }

  .error-box {
    background: #fee2e2;
    color: #991b1b;
    border: 1px solid #fecaca;
    padding: 14px 18px;
    border-radius: 12px;
    font-weight: 800;
    margin-bottom: 20px;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }

  .stats-grid div {
    background: #ffffff;
    border-radius: 18px;
    padding: 20px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.07);
  }

  .stats-grid span {
    display: block;
    color: #4b5563;
    margin-bottom: 8px;
    font-size: 15px;
    font-weight: 800;
  }

  .stats-grid strong {
    display: block;
    color: #f57c00;
    font-size: 36px;
    line-height: 1;
  }

  .followup-group {
    background: #ffffff;
    border-radius: 22px;
    padding: 24px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    margin-bottom: 24px;
    border: 1px solid #e5e7eb;
  }

  .followup-group.urgent {
    background: #fff7ed;
    border-color: #fed7aa;
  }

  .group-heading {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    margin-bottom: 18px;
  }

  .group-heading h2 {
    margin: 0 0 6px;
    color: #f57c00;
    font-size: 30px;
  }

  .group-heading p {
    margin: 0;
    color: #4b5563;
    font-size: 16px;
  }

  .group-heading strong {
    background: #f57c00;
    color: #ffffff;
    border-radius: 16px;
    min-width: 58px;
    height: 58px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
  }

  .followup-list {
    display: grid;
    gap: 16px;
  }

  .followup-card {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 18px;
    padding: 20px;
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    align-items: flex-start;
    margin-bottom: 16px;
  }

  .category-line {
    margin: 0 0 8px;
    color: #0f83a6;
    font-weight: 900;
  }

  .followup-card h3 {
    margin: 0;
    color: #111827;
    font-size: 26px;
  }

  .score-badge {
    min-width: 88px;
    text-align: center;
    background: #f57c00;
    color: #ffffff;
    border-radius: 16px;
    padding: 11px;
  }

  .score-badge span {
    display: block;
    font-size: 13px;
    margin-bottom: 5px;
  }

  .score-badge strong {
    display: block;
    font-size: 32px;
    line-height: 1;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px 18px;
    margin-bottom: 16px;
  }

  .info-grid p {
    margin: 0;
    color: #374151;
    line-height: 1.4;
  }

  .summary-box {
    background: #f8fafc;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    padding: 15px;
    margin-bottom: 16px;
  }

  .summary-box p {
    margin: 8px 0 0;
    color: #374151;
    line-height: 1.5;
    white-space: pre-wrap;
  }

  .quick-actions,
  .action-row {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 14px;
  }

  .quick-actions a,
  .quick-actions a:visited {
    background: #0f83a6;
    color: #ffffff;
    border-radius: 9px;
    padding: 10px 13px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 900;
  }

  .quick-actions a:hover {
    background: #0c6d8a;
  }

  .action-row select {
    min-width: 220px;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    padding: 12px;
    font-size: 15px;
    background: #ffffff;
    color: #111827;
  }

  .empty-box,
  .mini-empty {
    background: #ffffff;
    border-radius: 18px;
    padding: 24px;
    text-align: center;
    box-shadow: 0 8px 24px rgba(0,0,0,0.07);
    color: #4b5563;
  }

  .mini-empty {
    box-shadow: none;
    background: #f8fafc;
    margin: 0;
  }

  .empty-box h1 {
    margin: 0 0 10px;
    color: #f57c00;
    font-size: 40px;
  }

  @media (max-width: 900px) {
    .followups-page {
      padding: 24px 14px 50px;
    }

    .followups-header {
      flex-direction: column;
      align-items: stretch;
      padding: 24px;
    }

    .header-actions {
      justify-content: stretch;
    }

    .header-actions button,
    .header-actions a {
      width: 100%;
    }

    .stats-grid {
      grid-template-columns: 1fr;
    }

    .group-heading,
    .card-top {
      flex-direction: column;
      align-items: stretch;
    }

    .score-badge {
      width: 100%;
    }

    .info-grid {
      grid-template-columns: 1fr;
    }

    .quick-actions,
    .action-row {
      flex-direction: column;
    }

    .quick-actions a,
    .action-row button,
    .action-row select {
      width: 100%;
      text-align: center;
    }
  }
`;
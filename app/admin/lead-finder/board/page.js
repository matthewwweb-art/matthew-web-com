"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

const columns = [
  "new",
  "needs research",
  "contacted",
  "interested",
  "quote sent",
  "follow up later",
  "won",
  "lost",
];

function parseEstimatedValue(value) {
  if (!value) return 0;

  const numbers = String(value)
    .replace(/,/g, "")
    .match(/\d+/g)
    ?.map((num) => Number(num))
    .filter((num) => !Number.isNaN(num));

  if (!numbers || numbers.length === 0) return 0;
  if (numbers.length === 1) return numbers[0];

  return Math.round(numbers.reduce((sum, num) => sum + num, 0) / numbers.length);
}

function formatMoney(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount || 0);
}

function prettyStatus(status) {
  return status
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
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
      .order("lead_score", { ascending: false })
      .order("created_at", { ascending: false });

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

    await supabase.from("lead_finder_activities").insert({
      lead_id: leadId,
      activity_type: newStatus,
      activity_text: `Lead moved to ${prettyStatus(newStatus)}.`,
    });

    setLeads((current) =>
      current.map((lead) =>
        lead.id === leadId ? { ...lead, status: newStatus } : lead
      )
    );

    setUpdatingId(null);
  }

  const boardStats = useMemo(() => {
    const openLeads = leads.filter((lead) => {
      const status = lead.status || "new";
      return status !== "won" && status !== "lost";
    });

    const openValue = openLeads.reduce(
      (sum, lead) => sum + parseEstimatedValue(lead.estimated_offer_value),
      0
    );

    const wonValue = leads
      .filter((lead) => lead.status === "won")
      .reduce(
        (sum, lead) => sum + parseEstimatedValue(lead.estimated_offer_value),
        0
      );

    return {
      total: leads.length,
      openValue,
      wonValue,
    };
  }, [leads]);

  if (loadingSession) {
    return (
      <main className="board-page">
        <style>{styles}</style>
        <div className="empty-box">Loading...</div>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="board-page">
        <style>{styles}</style>
        <section className="empty-box">
          <h1>Lead Pipeline Board</h1>
          <p>You need to sign in through your admin dashboard first.</p>
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

      <header className="board-header">
        <div>
          <p className="eyebrow">sales pipeline</p>
          <h1>Lead Pipeline Board</h1>
          <p>Move leads through your sales process and track potential value.</p>
        </div>

        <div className="header-actions">
          <Link href="/admin/lead-finder" className="secondary-btn">
            Back to Lead Finder
          </Link>

          <Link href="/admin/lead-finder/search" className="secondary-btn">
            Google Search
          </Link>

          <button type="button" onClick={loadLeads}>
            Refresh
          </button>
        </div>
      </header>

      {error ? <div className="error-box">{error}</div> : null}

      <section className="board-stats">
        <div>
          <span>Total Leads</span>
          <strong>{boardStats.total}</strong>
        </div>

        <div>
          <span>Open Pipeline</span>
          <strong>{formatMoney(boardStats.openValue)}</strong>
        </div>

        <div>
          <span>Won Value</span>
          <strong>{formatMoney(boardStats.wonValue)}</strong>
        </div>
      </section>

      {loadingLeads ? <div className="empty-box">Loading leads...</div> : null}

      {!loadingLeads ? (
        <section className="board-scroll">
          <div className="board-grid">
            {columns.map((status) => {
              const columnLeads = leads.filter(
                (lead) => (lead.status || "new") === status
              );

              const columnValue = columnLeads.reduce(
                (sum, lead) =>
                  sum + parseEstimatedValue(lead.estimated_offer_value),
                0
              );

              return (
                <div className="board-column" key={status}>
                  <div className="column-header">
                    <h2>{prettyStatus(status)}</h2>
                    <span>{columnLeads.length}</span>
                  </div>

                  <p className="column-value">{formatMoney(columnValue)}</p>

                  <div className="column-list">
                    {columnLeads.length === 0 ? (
                      <p className="mini-empty">No leads here.</p>
                    ) : null}

                    {columnLeads.map((lead) => (
                      <article className="board-card" key={lead.id}>
                        <div className="card-top">
                          <h3>{lead.business_name}</h3>
                          <strong>{lead.lead_score || 0}</strong>
                        </div>

                        <p className="category-line">
                          {lead.category || "No category"}{" "}
                          {lead.city || lead.state
                            ? `• ${[lead.city, lead.state]
                                .filter(Boolean)
                                .join(", ")}`
                            : ""}
                        </p>

                        <p className="value-line">
                          {lead.estimated_offer_value || "No value set"}
                        </p>

                        <p className="problem-line">
                          {lead.problem_summary || "No problem summary."}
                        </p>

                        <div className="contact-row">
                          {lead.phone ? <a href={`tel:${lead.phone}`}>Call</a> : null}
                          {lead.email ? (
                            <a href={`mailto:${lead.email}`}>Email</a>
                          ) : null}
                          {lead.website_url ? (
                            <a
                              href={lead.website_url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Site
                            </a>
                          ) : null}
                        </div>

                        <select
                          value={lead.status || "new"}
                          disabled={updatingId === lead.id}
                          onChange={(e) => moveLead(lead.id, e.target.value)}
                        >
                          {columns.map((option) => (
                            <option key={option} value={option}>
                              {prettyStatus(option)}
                            </option>
                          ))}
                        </select>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ) : null}
    </main>
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

  .board-page {
    min-height: 100vh;
    background: #f4f6f8;
    padding: 36px 24px 70px;
  }

  .board-header,
  .board-stats,
  .error-box,
  .empty-box {
    max-width: 1220px;
    margin-left: auto;
    margin-right: auto;
  }

  .board-header {
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

  .board-header h1 {
    margin: 0 0 10px;
    color: #f57c00;
    font-size: clamp(38px, 5vw, 58px);
    line-height: 1;
  }

  .board-header p {
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

  .secondary-btn {
    background: #0f83a6;
  }

  .secondary-btn:hover {
    background: #0c6d8a;
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

  .board-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }

  .board-stats div {
    background: #ffffff;
    border-radius: 18px;
    padding: 20px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.07);
  }

  .board-stats span {
    display: block;
    color: #4b5563;
    margin-bottom: 8px;
    font-size: 15px;
    font-weight: 800;
  }

  .board-stats strong {
    display: block;
    color: #f57c00;
    font-size: 34px;
    line-height: 1;
  }

  .board-scroll {
    overflow-x: auto;
    padding-bottom: 14px;
  }

  .board-grid {
    min-width: 1500px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 16px;
  }

  .board-column {
    background: #ffffff;
    border-radius: 18px;
    padding: 15px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.07);
    min-height: 500px;
  }

  .column-header {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: center;
    margin-bottom: 8px;
  }

  .column-header h2 {
    margin: 0;
    color: #f57c00;
    font-size: 19px;
  }

  .column-header span {
    background: #0f83a6;
    color: #ffffff;
    width: 34px;
    height: 34px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
  }

  .column-value {
    margin: 0 0 14px;
    color: #4b5563;
    font-weight: 900;
  }

  .column-list {
    display: grid;
    gap: 12px;
  }

  .board-card {
    background: #f8fafc;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    padding: 14px;
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: flex-start;
  }

  .card-top h3 {
    margin: 0;
    color: #111827;
    font-size: 17px;
    line-height: 1.2;
  }

  .card-top strong {
    background: #f57c00;
    color: #ffffff;
    border-radius: 10px;
    min-width: 42px;
    height: 42px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .category-line {
    color: #0f83a6;
    font-weight: 900;
    margin: 8px 0;
    font-size: 14px;
  }

  .value-line {
    margin: 0 0 8px;
    color: #111827;
    font-weight: 900;
  }

  .problem-line {
    color: #4b5563;
    font-size: 14px;
    line-height: 1.4;
    margin: 0 0 12px;
  }

  .contact-row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 12px;
  }

  .contact-row a {
    background: #0f83a6;
    color: #ffffff;
    border-radius: 8px;
    padding: 7px 9px;
    text-decoration: none;
    font-size: 13px;
    font-weight: 900;
  }

  .board-card select {
    width: 100%;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    padding: 10px;
    font-size: 14px;
    background: #ffffff;
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
    padding: 14px;
    box-shadow: none;
    background: #f8fafc;
  }

  .empty-box h1 {
    margin: 0 0 10px;
    color: #f57c00;
    font-size: 40px;
  }

  @media (max-width: 900px) {
    .board-page {
      padding: 24px 14px 50px;
    }

    .board-header {
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

    .board-stats {
      grid-template-columns: 1fr;
    }
  }
`;
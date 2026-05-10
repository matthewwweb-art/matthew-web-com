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

    await supabase.from("lead_finder_activities").insert({
      lead_id: id,
      activity_type: status,
      activity_text: `Status changed to ${status} from Hot Leads page.`,
    });

    setLeads((current) =>
      current.map((lead) => (lead.id === id ? { ...lead, status } : lead))
    );

    setUpdatingId(null);
  }

  const hotLeads = useMemo(() => {
    return leads
      .filter((lead) => {
        const status = lead.status || "new";
        const score = Number(lead.lead_score || 0);
        const value = parseEstimatedValue(lead.estimated_offer_value);

        if (status === "won" || status === "lost") return false;

        return score >= 50 || value >= 2500;
      })
      .sort((a, b) => {
        const scoreDiff = Number(b.lead_score || 0) - Number(a.lead_score || 0);

        if (scoreDiff !== 0) return scoreDiff;

        return (
          parseEstimatedValue(b.estimated_offer_value) -
          parseEstimatedValue(a.estimated_offer_value)
        );
      });
  }, [leads]);

  const hotStats = useMemo(() => {
    const totalValue = hotLeads.reduce(
      (sum, lead) => sum + parseEstimatedValue(lead.estimated_offer_value),
      0
    );

    const topScore = hotLeads[0]?.lead_score || 0;

    return {
      count: hotLeads.length,
      totalValue,
      topScore,
    };
  }, [hotLeads]);

  if (loadingSession) {
    return (
      <main className="hot-page">
        <style>{styles}</style>
        <div className="empty-box">Loading...</div>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="hot-page">
        <style>{styles}</style>
        <section className="empty-box">
          <h1>Hot Leads</h1>
          <p>You need to sign in through your admin dashboard first.</p>
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

      <header className="hot-header">
        <div>
          <p className="eyebrow">priority leads</p>
          <h1>Hot Leads</h1>
          <p>
            Focus on the leads most likely to turn into website, CRM, SEO,
            booking, or custom software sales.
          </p>
        </div>

        <div className="header-actions">
          <Link href="/admin/lead-finder" className="secondary-btn">
            Back to Lead Finder
          </Link>

          <Link href="/admin/lead-finder/board" className="secondary-btn">
            Pipeline Board
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

      <section className="hot-stats">
        <div>
          <span>Hot Leads</span>
          <strong>{hotStats.count}</strong>
        </div>

        <div>
          <span>Potential Value</span>
          <strong>{formatMoney(hotStats.totalValue)}</strong>
        </div>

        <div>
          <span>Top Score</span>
          <strong>{hotStats.topScore}</strong>
        </div>
      </section>

      {loadingLeads ? <div className="empty-box">Loading leads...</div> : null}

      {!loadingLeads && hotLeads.length === 0 ? (
        <div className="empty-box">
          No hot leads yet. Add more leads or run audits to increase scores.
        </div>
      ) : null}

      <section className="hot-list">
        {hotLeads.map((lead, index) => (
          <article className="hot-card" key={lead.id}>
            <div className="rank-badge">#{index + 1}</div>

            <div className="hot-top">
              <div>
                <p className="lead-category">
                  {lead.category || "No category"}{" "}
                  {lead.city || lead.state
                    ? `• ${[lead.city, lead.state].filter(Boolean).join(", ")}`
                    : ""}
                </p>

                <h2>{lead.business_name}</h2>
              </div>

              <div className="score-badge">
                <span>Score</span>
                <strong>{lead.lead_score || 0}</strong>
              </div>
            </div>

            <div className="details-grid">
              <p>
                <strong>Value:</strong>{" "}
                {lead.estimated_offer_value || "Not set"}{" "}
                {lead.estimated_offer_value
                  ? `(${formatMoney(
                      parseEstimatedValue(lead.estimated_offer_value)
                    )} avg)`
                  : ""}
              </p>

              <p>
                <strong>Status:</strong> {lead.status || "new"}
              </p>

              <p>
                <strong>Rating:</strong>{" "}
                {lead.rating ? `${lead.rating} stars` : "Unknown"}
              </p>

              <p>
                <strong>Reviews:</strong>{" "}
                {lead.review_count ? lead.review_count : "Unknown"}
              </p>

              <p>
                <strong>Follow-Up:</strong>{" "}
                {lead.next_followup_at
                  ? new Date(lead.next_followup_at).toLocaleString()
                  : "Not set"}
              </p>

              <p>
                <strong>Source:</strong> {lead.source || "manual"}
              </p>
            </div>

            <div className="summary-box">
              <strong>Problem Found:</strong>
              <p>{lead.problem_summary || "No problem summary added."}</p>
            </div>

            <div className="summary-box">
              <strong>Offer Idea:</strong>
              <p>{lead.offer_idea || "No offer idea added."}</p>
            </div>

            <div className="link-row">
              {lead.phone ? <a href={`tel:${lead.phone}`}>Call</a> : null}

              {lead.email ? <a href={`mailto:${lead.email}`}>Email</a> : null}

              {lead.website_url ? (
                <a href={lead.website_url} target="_blank" rel="noreferrer">
                  Website
                </a>
              ) : null}

              {lead.google_maps_url ? (
                <a href={lead.google_maps_url} target="_blank" rel="noreferrer">
                  Google Maps
                </a>
              ) : null}

              {lead.facebook_url ? (
                <a href={lead.facebook_url} target="_blank" rel="noreferrer">
                  Facebook
                </a>
              ) : null}

              {lead.yelp_url ? (
                <a href={lead.yelp_url} target="_blank" rel="noreferrer">
                  Yelp
                </a>
              ) : null}
            </div>

            <div className="card-actions">
              <select
                value={lead.status || "new"}
                disabled={updatingId === lead.id}
                onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>

              <Link href={`/admin/lead-finder/${lead.id}`} className="primary-btn">
                Open Lead
              </Link>
            </div>
          </article>
        ))}
      </section>
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

  .hot-page {
    min-height: 100vh;
    background: #f4f6f8;
    padding: 36px 24px 70px;
  }

  .hot-header,
  .hot-stats,
  .hot-list,
  .error-box,
  .empty-box {
    max-width: 1220px;
    margin-left: auto;
    margin-right: auto;
  }

  .hot-header {
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

  .hot-header h1 {
    margin: 0 0 10px;
    color: #f57c00;
    font-size: clamp(38px, 5vw, 58px);
    line-height: 1;
  }

  .hot-header p {
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

  .error-box {
    background: #fee2e2;
    color: #991b1b;
    border: 1px solid #fecaca;
    padding: 14px 18px;
    border-radius: 12px;
    font-weight: 800;
    margin-bottom: 20px;
  }

  .hot-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }

  .hot-stats div {
    background: #ffffff;
    border-radius: 18px;
    padding: 20px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.07);
  }

  .hot-stats span {
    display: block;
    color: #4b5563;
    margin-bottom: 8px;
    font-size: 15px;
    font-weight: 800;
  }

  .hot-stats strong {
    display: block;
    color: #f57c00;
    font-size: 34px;
    line-height: 1;
  }

  .hot-list {
    display: grid;
    gap: 18px;
  }

  .hot-card,
  .empty-box {
    position: relative;
    background: #ffffff;
    border-radius: 22px;
    padding: 26px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  }

  .rank-badge {
    position: absolute;
    top: -12px;
    left: 22px;
    background: #f57c00;
    color: #ffffff;
    border-radius: 999px;
    padding: 8px 14px;
    font-weight: 900;
    box-shadow: 0 6px 14px rgba(0,0,0,0.16);
  }

  .hot-top {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: flex-start;
    margin-bottom: 18px;
    padding-top: 8px;
  }

  .lead-category {
    margin: 0 0 8px;
    color: #0f83a6;
    font-weight: 900;
  }

  .hot-card h2 {
    margin: 0;
    font-size: 30px;
    color: #111827;
  }

  .score-badge {
    min-width: 92px;
    text-align: center;
    background: #f57c00;
    color: #ffffff;
    border-radius: 16px;
    padding: 12px;
  }

  .score-badge span {
    display: block;
    font-size: 13px;
    margin-bottom: 5px;
  }

  .score-badge strong {
    display: block;
    font-size: 34px;
    line-height: 1;
  }

  .details-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px 18px;
    margin-bottom: 18px;
  }

  .details-grid p {
    margin: 0;
    color: #374151;
    line-height: 1.4;
  }

  .summary-box {
    background: #f8fafc;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    padding: 15px;
    margin-bottom: 14px;
  }

  .summary-box strong {
    color: #111827;
  }

  .summary-box p {
    margin: 8px 0 0;
    color: #374151;
    font-size: 16px;
    line-height: 1.5;
    white-space: pre-wrap;
  }

  .link-row {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 18px;
  }

  .link-row a {
    background: #0f83a6;
    color: #ffffff;
    border-radius: 9px;
    padding: 10px 13px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 900;
  }

  .link-row a:hover {
    background: #0c6d8a;
  }

  .card-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .card-actions select {
    width: 220px;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    padding: 13px;
    font-size: 15px;
    background: #ffffff;
    color: #111827;
  }

  .empty-box {
    text-align: center;
    color: #4b5563;
    font-size: 18px;
  }

  .empty-box h1 {
    margin: 0 0 10px;
    color: #f57c00;
    font-size: 40px;
  }

  @media (max-width: 900px) {
    .hot-page {
      padding: 24px 14px 50px;
    }

    .hot-header {
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

    .hot-stats {
      grid-template-columns: 1fr;
    }

    .hot-top {
      flex-direction: column;
    }

    .score-badge {
      width: 100%;
    }

    .details-grid {
      grid-template-columns: 1fr;
    }

    .card-actions {
      flex-direction: column;
    }

    .card-actions select,
    .card-actions a {
      width: 100%;
    }
  }
`;
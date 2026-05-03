"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function AdminPage() {
  const [session, setSession] = useState(null);
  const [loadingSession, setLoadingSession] = useState(true);
  const [loadingLeads, setLoadingLeads] = useState(false);
  const [deletingLeadId, setDeletingLeadId] = useState("");
  const [error, setError] = useState("");
  const [leads, setLeads] = useState([]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

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

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    const { error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      setError(loginError.message);
      return;
    }

    setEmail("");
    setPassword("");
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    setSession(null);
    setLeads([]);
  }

  async function loadLeads() {
    setLoadingLeads(true);
    setError("");

    const { data, error: leadsError } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (leadsError) {
      setError(leadsError.message);
      setLoadingLeads(false);
      return;
    }

    setLeads(data || []);
    setLoadingLeads(false);
  }

  async function updateLeadStatus(id, newStatus) {
    setError("");

    const { error: updateError } = await supabase
      .from("leads")
      .update({ status: newStatus, updated_at: new Date().toISOString() })
      .eq("id", id);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    setLeads((current) =>
      current.map((lead) =>
        lead.id === id ? { ...lead, status: newStatus } : lead
      )
    );
  }

  async function deleteLead(id, leadName) {
    setError("");

    const confirmed = window.confirm(
      `Are you sure you want to delete this lead${
        leadName ? ` from ${leadName}` : ""
      }? This cannot be undone.`
    );

    if (!confirmed) {
      return;
    }

    setDeletingLeadId(id);

    const { error: deleteError } = await supabase
      .from("leads")
      .delete()
      .eq("id", id);

    setDeletingLeadId("");

    if (deleteError) {
      setError(deleteError.message);
      return;
    }

    setLeads((current) => current.filter((lead) => lead.id !== id));
  }

  const filteredLeads = useMemo(() => {
    const cleanSearch = search.toLowerCase().trim();

    return leads.filter((lead) => {
      const status = lead.status || "new";

      const matchesStatus =
        statusFilter === "all" ? true : status === statusFilter;

      const searchable = [
        lead.name,
        lead.email,
        lead.phone,
        lead.business_name,
        lead.message,
        lead.page_source,
        status,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch = cleanSearch
        ? searchable.includes(cleanSearch)
        : true;

      return matchesStatus && matchesSearch;
    });
  }, [leads, search, statusFilter]);

  if (loadingSession) {
    return (
      <main className="admin-page">
        <style>{adminStyles}</style>
        <div className="admin-card">
          <p>Loading admin...</p>
        </div>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="admin-page">
        <style>{adminStyles}</style>

        <section className="login-card">
          <h1>Admin Login</h1>
          <p>Sign in to view website leads from your contact forms.</p>

          {error ? <div className="error-box">{error}</div> : null}

          <form onSubmit={handleLogin} className="login-form">
            <label>
              Email
              <input
                type="email"
                value={email}
                placeholder="you@example.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label>
              Password
              <input
                type="password"
                value={password}
                placeholder="Your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>

            <button type="submit">Sign In</button>
          </form>
        </section>
      </main>
    );
  }

  return (
    <main className="admin-page">
      <style>{adminStyles}</style>

      <header className="admin-header">
        <div>
          <h1>Lead Dashboard</h1>
          <p>Track messages submitted through your website forms.</p>
        </div>

        <div className="admin-actions">
          <button onClick={loadLeads} type="button">
            Refresh
          </button>
          <button onClick={handleLogout} type="button" className="logout-btn">
            Sign Out
          </button>
        </div>
      </header>

      {error ? <div className="error-box">{error}</div> : null}

      <section className="stats-grid">
        <div className="stat-card">
          <span>Total Leads</span>
          <strong>{leads.length}</strong>
        </div>

        <div className="stat-card">
          <span>New</span>
          <strong>
            {leads.filter((lead) => (lead.status || "new") === "new").length}
          </strong>
        </div>

        <div className="stat-card">
          <span>Contacted</span>
          <strong>
            {leads.filter((lead) => lead.status === "contacted").length}
          </strong>
        </div>

        <div className="stat-card">
          <span>Closed</span>
          <strong>
            {leads.filter((lead) => lead.status === "closed").length}
          </strong>
        </div>
      </section>

      <section className="filters">
        <input
          type="text"
          value={search}
          placeholder="Search leads..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Statuses</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="closed">Closed</option>
        </select>
      </section>

      <section className="leads-section">
        {loadingLeads ? <p className="empty-text">Loading leads...</p> : null}

        {!loadingLeads && filteredLeads.length === 0 ? (
          <p className="empty-text">No leads found yet.</p>
        ) : null}

        {!loadingLeads &&
          filteredLeads.map((lead) => (
            <article className="lead-card" key={lead.id}>
              <div className="lead-top">
                <div>
                  <h2>{lead.name || "No Name"}</h2>
                  <p className="lead-business">
                    {lead.business_name || "No business name"}
                  </p>
                </div>

                <div className="lead-controls">
                  <select
                    value={lead.status || "new"}
                    onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="closed">Closed</option>
                  </select>

                  <button
                    type="button"
                    className="delete-lead-btn"
                    onClick={() => deleteLead(lead.id, lead.name)}
                    disabled={deletingLeadId === lead.id}
                  >
                    {deletingLeadId === lead.id ? "Deleting..." : "Delete Lead"}
                  </button>
                </div>
              </div>

              <div className="lead-info-grid">
                <p>
                  <strong>Email:</strong>{" "}
                  {lead.email ? (
                    <a href={`mailto:${lead.email}`}>{lead.email}</a>
                  ) : (
                    "Not provided"
                  )}
                </p>

                <p>
                  <strong>Phone:</strong>{" "}
                  {lead.phone ? (
                    <a href={`tel:${lead.phone}`}>{lead.phone}</a>
                  ) : (
                    "Not provided"
                  )}
                </p>

                <p>
                  <strong>Page:</strong> {lead.page_source || "Website form"}
                </p>

                <p>
                  <strong>Date:</strong>{" "}
                  {lead.created_at
                    ? new Date(lead.created_at).toLocaleString()
                    : "No date"}
                </p>
              </div>

              <div className="message-box">
                <strong>Message:</strong>
                <p>{lead.message || "No message included."}</p>
              </div>
            </article>
          ))}
      </section>
    </main>
  );
}

const adminStyles = `
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #f4f6f8;
    color: #1f2933;
    font-family: Arial, Helvetica, sans-serif;
  }

  .admin-page {
    min-height: 100vh;
    padding: 40px 24px;
    background: #f4f6f8;
  }

  .login-card,
  .admin-header,
  .stats-grid,
  .filters,
  .leads-section {
    max-width: 1180px;
    margin-left: auto;
    margin-right: auto;
  }

  .login-card {
    width: 100%;
    max-width: 460px;
    margin-top: 80px;
    background: #ffffff;
    padding: 36px;
    border-radius: 18px;
    box-shadow: 0 12px 35px rgba(0,0,0,0.12);
  }

  .login-card h1 {
    margin: 0 0 10px;
    font-size: 34px;
    color: #f57c00;
  }

  .login-card p {
    margin: 0 0 28px;
    font-size: 18px;
    line-height: 1.4;
    color: #4b5563;
  }

  .login-form {
    display: grid;
    gap: 18px;
  }

  .login-form label {
    display: grid;
    gap: 8px;
    font-size: 16px;
    font-weight: 700;
  }

  .login-form input,
  .filters input,
  .filters select,
  .lead-top select {
    width: 100%;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    padding: 14px 14px;
    font-size: 16px;
    background: #ffffff;
  }

  .login-form button,
  .admin-actions button {
    border: none;
    border-radius: 10px;
    background: #f57c00;
    color: #ffffff;
    padding: 14px 20px;
    font-size: 17px;
    font-weight: 800;
    cursor: pointer;
  }

  .login-form button:hover,
  .admin-actions button:hover {
    background: #d96d00;
  }

  .admin-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    margin-bottom: 28px;
    background: #ffffff;
    padding: 28px;
    border-radius: 18px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  }

  .admin-header h1 {
    margin: 0 0 8px;
    color: #f57c00;
    font-size: 42px;
  }

  .admin-header p {
    margin: 0;
    font-size: 18px;
    color: #4b5563;
  }

  .admin-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .admin-actions .logout-btn {
    background: #0f83a6;
  }

  .admin-actions .logout-btn:hover {
    background: #0c6d8a;
  }

  .error-box {
    max-width: 1180px;
    margin: 0 auto 24px;
    background: #fee2e2;
    color: #991b1b;
    border: 1px solid #fecaca;
    padding: 14px 18px;
    border-radius: 12px;
    font-weight: 700;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
    margin-bottom: 24px;
  }

  .stat-card {
    background: #ffffff;
    padding: 22px;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  }

  .stat-card span {
    display: block;
    color: #4b5563;
    font-size: 16px;
    margin-bottom: 8px;
  }

  .stat-card strong {
    display: block;
    color: #f57c00;
    font-size: 38px;
    line-height: 1;
  }

  .filters {
    display: grid;
    grid-template-columns: 1fr 220px;
    gap: 16px;
    margin-bottom: 24px;
  }

  .leads-section {
    display: grid;
    gap: 18px;
  }

  .lead-card {
    background: #ffffff;
    padding: 24px;
    border-radius: 18px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  }

  .lead-top {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    align-items: start;
    margin-bottom: 18px;
  }

  .lead-top h2 {
    margin: 0 0 5px;
    font-size: 28px;
    color: #1f2933;
  }

  .lead-business {
    margin: 0;
    color: #f57c00;
    font-weight: 800;
    font-size: 18px;
  }

  .lead-controls {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 180px;
  }

  .lead-top select {
    max-width: 180px;
  }

  .delete-lead-btn {
    width: 100%;
    border: none;
    border-radius: 10px;
    background: #dc2626;
    color: #ffffff;
    padding: 12px 14px;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
  }

  .delete-lead-btn:hover {
    background: #b91c1c;
  }

  .delete-lead-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .lead-info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px 24px;
    margin-bottom: 18px;
  }

  .lead-info-grid p {
    margin: 0;
    font-size: 16px;
    line-height: 1.4;
  }

  .lead-info-grid a {
    color: #0f83a6;
    font-weight: 700;
  }

  .message-box {
    background: #f8fafc;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    padding: 16px;
  }

  .message-box p {
    margin: 8px 0 0;
    color: #374151;
    font-size: 17px;
    line-height: 1.5;
  }

  .empty-text {
    text-align: center;
    background: #ffffff;
    padding: 28px;
    border-radius: 16px;
    color: #4b5563;
    font-size: 18px;
  }

  @media (max-width: 800px) {
    .admin-page {
      padding: 24px 16px;
    }

    .admin-header {
      flex-direction: column;
      align-items: stretch;
    }

    .admin-header h1 {
      font-size: 34px;
    }

    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .filters {
      grid-template-columns: 1fr;
    }

    .lead-top {
      flex-direction: column;
    }

    .lead-controls {
      width: 100%;
    }

    .lead-top select {
      max-width: 100%;
    }

    .lead-info-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 520px) {
    .stats-grid {
      grid-template-columns: 1fr;
    }

    .login-card {
      padding: 26px 20px;
      margin-top: 40px;
    }
  }
`;
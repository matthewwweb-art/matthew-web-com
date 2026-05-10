"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabaseClient";

export default function AdminPage() {
  const [testingReminder, setTestingReminder] = useState(false);
  const [reminderMessage, setReminderMessage] = useState("");
  const [session, setSession] = useState(null);
  const [loadingSession, setLoadingSession] = useState(true);
  const [loadingLeads, setLoadingLeads] = useState(false);
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

  async function testFollowupReminder() {
    setTestingReminder(true);
    setReminderMessage("");
    setError("");

    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const accessToken = sessionData?.session?.access_token;

    if (!accessToken) {
      setReminderMessage("You need to sign in again.");
      return;
    }

    const response = await fetch("/api/lead-finder/test-reminder", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const text = await response.text();

    let result;
    try {
      result = JSON.parse(text);
    } catch {
      setReminderMessage(
        "Test reminder route did not return JSON. Check that app/api/lead-finder/test-reminder/route.js exists."
      );
      return;
    }

    if (!response.ok || !result.ok) {
      setReminderMessage(result.error || "Reminder test failed.");
      return;
    }

    if (result.result?.sent) {
      setReminderMessage(
        `Reminder email sent. ${result.result.count || 0} follow-up(s) found.`
      );
    } else {
      setReminderMessage("No follow-ups due right now. No email was sent.");
    }
  } catch (err) {
    setReminderMessage(err?.message || "Reminder test crashed.");
  } finally {
    setTestingReminder(false);
  }
}

  async function updateLeadStatus(id, newStatus) {
    const { error: updateError } = await supabase
      .from("leads")
      .update({ status: newStatus })
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

  async function deleteLead(id) {
    const confirmed = window.confirm("Delete this website form lead?");
    if (!confirmed) return;

    const { error: deleteError } = await supabase
      .from("leads")
      .delete()
      .eq("id", id);

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
          <p>Sign in to view website leads and lead finder tools.</p>

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
          <h1>Admin Dashboard</h1>
          <p>Manage website form leads and your private lead finder CRM.</p>
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

      <section className="admin-tool-grid">
        <Link href="/admin/lead-finder" className="admin-tool-card">
          <span>🎯</span>
          <h2>Lead Finder CRM</h2>
          <p>View, score, audit, and manage sales leads.</p>
        </Link>

        <Link href="/admin/lead-finder/search" className="admin-tool-card">
          <span>🔎</span>
          <h2>Google Lead Search</h2>
          <p>Find businesses from Google Places and save them.</p>
        </Link>

        <Link href="/admin/lead-finder/import" className="admin-tool-card">
          <span>⚡</span>
          <h2>Quick Import</h2>
          <p>Paste business info and turn it into a lead fast.</p>
        </Link>

        <Link href="/admin/lead-finder/board" className="admin-tool-card">
          <span>📌</span>
          <h2>Pipeline Board</h2>
          <p>Move leads through your sales pipeline.</p>
        </Link>

        <Link href="/admin/lead-finder/hot" className="admin-tool-card">
          <span>🔥</span>
          <h2>Hot Leads</h2>
          <p>Focus on the best leads to contact first.</p>
        </Link>
      </section>

      <section className="admin-reminder-test">
        <div>
          <h2>Follow-Up Reminder Test</h2>
          <p>
            Send yourself a test email for any Lead Finder follow-ups that are
            due now or overdue.
          </p>
        </div>

        <button
          type="button"
          onClick={testFollowupReminder}
          disabled={testingReminder}
        >
          {testingReminder ? "Sending Test..." : "Send Test Follow-Up Reminder"}
        </button>

        {reminderMessage ? <p className="reminder-message">{reminderMessage}</p> : null}
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <span>Website Form Leads</span>
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
          placeholder="Search website form leads..."
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
        <div className="section-heading">
          <h2>Website Form Leads</h2>
          <p>These are leads submitted from your public website forms.</p>
        </div>

        {loadingLeads ? <p className="empty-text">Loading leads...</p> : null}

        {!loadingLeads && filteredLeads.length === 0 ? (
          <p className="empty-text">No website form leads found yet.</p>
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

                <select
                  value={lead.status || "new"}
                  onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="closed">Closed</option>
                </select>
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

              <div className="lead-actions-row">
                {lead.email ? (
                  <a href={`mailto:${lead.email}`}>Email Lead</a>
                ) : null}

                {lead.phone ? <a href={`tel:${lead.phone}`}>Call Lead</a> : null}

                <button
                  type="button"
                  className="delete-lead-btn"
                  onClick={() => deleteLead(lead.id)}
                >
                  Delete Lead
                </button>
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
  .admin-tool-grid,
  .admin-reminder-test,
  .stats-grid,
  .filters,
  .leads-section,
  .error-box {
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
  .admin-actions button,
  .admin-reminder-test button {
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
  .admin-actions button:hover,
  .admin-reminder-test button:hover {
    background: #d96d00;
  }

  .admin-reminder-test button:disabled {
    opacity: 0.65;
    cursor: not-allowed;
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

  .admin-tool-grid {
    margin-bottom: 28px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
  }

  .admin-tool-card {
    background: #ffffff;
    border-radius: 18px;
    padding: 22px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    text-decoration: none;
    color: #1f2933;
    border: 2px solid transparent;
    transition: 0.2s ease;
  }

  .admin-tool-card:hover {
    border-color: #f57c00;
    transform: translateY(-2px);
  }

  .admin-tool-card span {
    display: block;
    font-size: 32px;
    margin-bottom: 10px;
  }

  .admin-tool-card h2 {
    margin: 0 0 8px;
    color: #f57c00;
    font-size: 20px;
  }

  .admin-tool-card p {
    margin: 0;
    color: #4b5563;
    font-size: 15px;
    line-height: 1.4;
  }

  .admin-reminder-test {
    margin-bottom: 28px;
    background: #ffffff;
    border-radius: 18px;
    padding: 24px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    flex-wrap: wrap;
  }

  .admin-reminder-test h2 {
    margin: 0 0 8px;
    color: #f57c00;
    font-size: 24px;
  }

  .admin-reminder-test p {
    margin: 0;
    color: #4b5563;
    font-size: 16px;
    line-height: 1.4;
  }

  .admin-reminder-test .reminder-message {
    width: 100%;
    margin: 4px 0 0;
    color: #166534;
    background: #dcfce7;
    border: 1px solid #bbf7d0;
    border-radius: 12px;
    padding: 12px 14px;
    font-weight: 800;
  }

  .error-box {
    margin-bottom: 24px;
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

  .section-heading {
    background: #ffffff;
    padding: 24px;
    border-radius: 18px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  }

  .section-heading h2 {
    margin: 0 0 8px;
    color: #f57c00;
    font-size: 30px;
  }

  .section-heading p {
    margin: 0;
    color: #4b5563;
    font-size: 17px;
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

  .lead-top select {
    max-width: 180px;
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
    white-space: pre-wrap;
  }

  .lead-actions-row {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 18px;
  }

  .lead-actions-row a,
  .lead-actions-row button {
    border: none;
    border-radius: 10px;
    background: #0f83a6;
    color: #ffffff;
    padding: 11px 15px;
    font-size: 15px;
    font-weight: 800;
    text-decoration: none;
    cursor: pointer;
  }

  .lead-actions-row a:hover,
  .lead-actions-row button:hover {
    background: #0c6d8a;
  }

  .lead-actions-row .delete-lead-btn {
    background: #dc2626;
  }

  .lead-actions-row .delete-lead-btn:hover {
    background: #b91c1c;
  }

  .empty-text {
    text-align: center;
    background: #ffffff;
    padding: 28px;
    border-radius: 16px;
    color: #4b5563;
    font-size: 18px;
  }

  .admin-card {
    max-width: 600px;
    margin: 80px auto;
    background: #ffffff;
    padding: 30px;
    border-radius: 18px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    text-align: center;
  }

  @media (max-width: 1000px) {
    .admin-tool-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .admin-reminder-test {
      align-items: stretch;
    }

    .admin-reminder-test button {
      width: 100%;
    }
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

    .admin-actions button {
      width: 100%;
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

    .lead-top select {
      max-width: 100%;
    }

    .lead-info-grid {
      grid-template-columns: 1fr;
    }

    .lead-actions-row {
      flex-direction: column;
    }

    .lead-actions-row a,
    .lead-actions-row button {
      width: 100%;
      text-align: center;
      justify-content: center;
    }
  }

  @media (max-width: 560px) {
    .admin-tool-grid {
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
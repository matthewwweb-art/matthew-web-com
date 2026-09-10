"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Building2,
  CalendarClock,
  CircleCheck,
  Clock3,
  Database,
  ExternalLink,
  Flame,
  Inbox,
  LayoutDashboard,
  LayoutGrid,
  LoaderCircle,
  LockKeyhole,
  LogOut,
  Mail,
  MessageSquare,
  Phone,
  RefreshCw,
  Search,
  ShieldCheck,
  Target,
  Trash2,
  UserPlus,
  Zap,
} from "lucide-react";
import { supabase } from "../../lib/supabaseClient";

/* ============================================================
   MATTHEW WEB — PRIVATE MISSION CONTROL
============================================================ */

const TOOL_CARDS = [
  {
    href: "/admin/lead-finder",
    title: "Lead Finder CRM",
    description:
      "View, score, audit, organize, and work every sales lead.",
    icon: Target,
    accent: "blue",
    tag: "CRM",
  },
  {
    href: "/admin/lead-finder/search",
    title: "Google Lead Search",
    description:
      "Find real businesses through Google Places and save opportunities.",
    icon: Search,
    accent: "cyan",
    tag: "DISCOVERY",
  },
  {
    href: "/admin/lead-finder/import",
    title: "Quick Import",
    description:
      "Paste business information and turn it into a CRM lead fast.",
    icon: Zap,
    accent: "orange",
    tag: "INTAKE",
  },
  {
    href: "/admin/lead-finder/board",
    title: "Pipeline Board",
    description:
      "Move prospects through the Matthew Web sales pipeline.",
    icon: LayoutGrid,
    accent: "purple",
    tag: "PIPELINE",
  },
  {
    href: "/admin/lead-finder/hot",
    title: "Hot Leads",
    description:
      "Surface high-score and higher-value opportunities first.",
    icon: Flame,
    accent: "red",
    tag: "PRIORITY",
  },
  {
    href: "/admin/lead-finder/followups",
    title: "Follow-Up Center",
    description:
      "Work overdue, current, and upcoming follow-up activity.",
    icon: CalendarClock,
    accent: "green",
    tag: "FOLLOW-UP",
  },
];

function getStatusLabel(status) {
  if (!status) return "New";

  return status
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getStatusClass(status) {
  return String(status || "new")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");
}

function formatDate(value) {
  if (!value) return "No date";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "No date";
  }

  return date.toLocaleString();
}

export default function AdminPage() {
  const [testingReminder, setTestingReminder] = useState(false);
  const [reminderMessage, setReminderMessage] = useState("");
  const [reminderType, setReminderType] = useState("info");

  const [session, setSession] = useState(null);
  const [loadingSession, setLoadingSession] = useState(true);
  const [loadingLeads, setLoadingLeads] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);

  const [convertingLeadId, setConvertingLeadId] = useState(null);
  const [updatingLeadId, setUpdatingLeadId] = useState(null);
  const [deletingLeadId, setDeletingLeadId] = useState(null);

  const [error, setError] = useState("");
  const [leads, setLeads] = useState([]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const [lastRefreshedAt, setLastRefreshedAt] = useState(null);

  /* ==========================================================
     AUTH SESSION
  ========================================================== */

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

  /* ==========================================================
     LOGIN
  ========================================================== */

  async function handleLogin(e) {
    e.preventDefault();

    setLoggingIn(true);
    setError("");

    const { error: loginError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (loginError) {
      setError(loginError.message);
      setLoggingIn(false);
      return;
    }

    setEmail("");
    setPassword("");
    setLoggingIn(false);
  }

  /* ==========================================================
     LOGOUT
  ========================================================== */

  async function handleLogout() {
    setError("");

    const { error: logoutError } =
      await supabase.auth.signOut();

    if (logoutError) {
      setError(logoutError.message);
      return;
    }

    setSession(null);
    setLeads([]);
    setReminderMessage("");
  }

  /* ==========================================================
     WEBSITE FORM LEADS
  ========================================================== */

  async function loadLeads() {
    setLoadingLeads(true);
    setError("");

    const { data, error: leadsError } =
      await supabase
        .from("leads")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

    if (leadsError) {
      setError(leadsError.message);
      setLoadingLeads(false);
      return;
    }

    setLeads(data || []);
    setLastRefreshedAt(new Date());
    setLoadingLeads(false);
  }

  /* ==========================================================
     TEST FOLLOW-UP REMINDER
  ========================================================== */

  async function testFollowupReminder() {
    setTestingReminder(true);
    setReminderMessage("");
    setReminderType("info");
    setError("");

    try {
      const { data: sessionData } =
        await supabase.auth.getSession();

      const accessToken =
        sessionData?.session?.access_token;

      if (!accessToken) {
        setReminderMessage(
          "Your admin session has expired. Sign in again."
        );
        setReminderType("error");
        setTestingReminder(false);
        return;
      }

      const response = await fetch(
        "/api/lead-finder/test-reminder",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const result = await response.json();

      if (!response.ok || !result?.ok) {
        setReminderMessage(
          result?.error || "Reminder test failed."
        );

        setReminderType("error");
        setTestingReminder(false);
        return;
      }

      const sent =
        result?.sent ??
        result?.result?.sent ??
        false;

      const count =
        result?.count ??
        result?.result?.count ??
        0;

      if (sent) {
        setReminderMessage(
          `Reminder email sent successfully. ${count} follow-up${
            Number(count) === 1 ? "" : "s"
          } found.`
        );

        setReminderType("success");
      } else {
        setReminderMessage(
          result?.message ||
            result?.result?.message ||
            "No follow-ups are due right now. No email was sent."
        );

        setReminderType("info");
      }
    } catch (reminderError) {
      console.error(
        "Reminder test error:",
        reminderError
      );

      setReminderMessage(
        "The reminder test could not be completed."
      );

      setReminderType("error");
    }

    setTestingReminder(false);
  }

  /* ==========================================================
     UPDATE WEBSITE LEAD STATUS
  ========================================================== */

  async function updateLeadStatus(id, newStatus) {
    setError("");
    setUpdatingLeadId(id);

    const { error: updateError } =
      await supabase
        .from("leads")
        .update({
          status: newStatus,
        })
        .eq("id", id);

    if (updateError) {
      setError(updateError.message);
      setUpdatingLeadId(null);
      return;
    }

    setLeads((current) =>
      current.map((lead) =>
        lead.id === id
          ? {
              ...lead,
              status: newStatus,
            }
          : lead
      )
    );

    setUpdatingLeadId(null);
  }

  /* ==========================================================
     DELETE WEBSITE LEAD
  ========================================================== */

  async function deleteLead(id) {
    const confirmed =
      window.confirm(
        "Delete this website form lead? This cannot be undone."
      );

    if (!confirmed) {
      return;
    }

    setError("");
    setDeletingLeadId(id);

    const { error: deleteError } =
      await supabase
        .from("leads")
        .delete()
        .eq("id", id);

    if (deleteError) {
      setError(deleteError.message);
      setDeletingLeadId(null);
      return;
    }

    setLeads((current) =>
      current.filter((lead) => lead.id !== id)
    );

    setDeletingLeadId(null);
  }

  /* ==========================================================
     CONVERT WEBSITE FORM LEAD TO LEAD FINDER CRM
  ========================================================== */

  async function convertToLeadFinder(lead) {
    setError("");
    setConvertingLeadId(lead.id);

    if (lead.lead_finder_id) {
      window.location.href =
        `/admin/lead-finder/${lead.lead_finder_id}`;

      return;
    }

    const businessName =
      lead.business_name ||
      lead.name ||
      lead.email ||
      "Website Form Lead";

    const payload = {
      business_name: businessName,
      contact_name: lead.name || null,
      phone: lead.phone || null,
      email: lead.email || null,

      source:
        lead.page_source ||
        "website form",

      problem_summary:
        lead.message ||
        "Website form lead submitted.",

      offer_idea:
        "Follow up from website form. Qualify the lead, then offer website design, SEO, CRM, booking, automation, or custom software depending on their needs.",

      estimated_offer_value:
        "$1,500–$7,500",

      lead_score: 65,

      status: "new",

      notes:
        `Converted from website form lead.${
          lead.created_at
            ? ` Original form date: ${new Date(
                lead.created_at
              ).toLocaleString()}`
            : ""
        }`,

      updated_at:
        new Date().toISOString(),
    };

    const {
      data,
      error: insertError,
    } = await supabase
      .from("lead_finder_leads")
      .insert(payload)
      .select()
      .single();

    if (insertError) {
      setError(insertError.message);
      setConvertingLeadId(null);
      return;
    }

    const { error: activityError } =
      await supabase
        .from("lead_finder_activities")
        .insert({
          lead_id: data.id,
          activity_type: "note",
          activity_text:
            "Converted from website form lead.",
        });

    if (activityError) {
      console.error(
        "Could not create conversion activity:",
        activityError
      );
    }

    const {
      error: originalLeadUpdateError,
    } = await supabase
      .from("leads")
      .update({
        status: "contacted",
        lead_finder_id: data.id,
      })
      .eq("id", lead.id);

    if (originalLeadUpdateError) {
      setError(
        `CRM record was created, but the original website lead could not be linked: ${originalLeadUpdateError.message}`
      );

      setConvertingLeadId(null);
      return;
    }

    setLeads((current) =>
      current.map((item) =>
        item.id === lead.id
          ? {
              ...item,
              status: "contacted",
              lead_finder_id: data.id,
            }
          : item
      )
    );

    window.location.href =
      `/admin/lead-finder/${data.id}`;
  }

  /* ==========================================================
     FILTERED LEADS
  ========================================================== */

  const filteredLeads =
    useMemo(() => {
      const cleanSearch =
        search.toLowerCase().trim();

      return leads.filter((lead) => {
        const status =
          lead.status || "new";

        const matchesStatus =
          statusFilter === "all"
            ? true
            : status === statusFilter;

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

        const matchesSearch =
          cleanSearch
            ? searchable.includes(cleanSearch)
            : true;

        return (
          matchesStatus &&
          matchesSearch
        );
      });
    }, [
      leads,
      search,
      statusFilter,
    ]);

  /* ==========================================================
     DASHBOARD STATS
  ========================================================== */

  const stats =
    useMemo(() => {
      const newCount =
        leads.filter(
          (lead) =>
            (lead.status || "new") ===
            "new"
        ).length;

      const contactedCount =
        leads.filter(
          (lead) =>
            lead.status ===
            "contacted"
        ).length;

      const closedCount =
        leads.filter(
          (lead) =>
            lead.status ===
            "closed"
        ).length;

      const convertedCount =
        leads.filter(
          (lead) =>
            Boolean(
              lead.lead_finder_id
            )
        ).length;

      return [
        {
          label: "Website Leads",
          value: leads.length,
          icon: Inbox,
          accent: "cyan",
        },
        {
          label: "New",
          value: newCount,
          icon: Activity,
          accent: "orange",
        },
        {
          label: "Contacted",
          value: contactedCount,
          icon: Clock3,
          accent: "blue",
        },
        {
          label: "CRM Converted",
          value: convertedCount,
          icon: Database,
          accent: "purple",
        },
        {
          label: "Closed",
          value: closedCount,
          icon: CircleCheck,
          accent: "green",
        },
      ];
    }, [leads]);

  /* ==========================================================
     LOADING
  ========================================================== */

  if (loadingSession) {
    return (
      <main className="mw-admin-page">
        <style>
          {adminStyles}
        </style>

        <section className="loading-screen">
          <div className="loading-logo">
            MW
          </div>

          <LoaderCircle
            size={30}
            className="spin"
          />

          <h1>
            Loading Mission Control
          </h1>

          <p>
            Verifying your private
            Matthew Web session.
          </p>
        </section>
      </main>
    );
  }

  /* ==========================================================
     LOGIN SCREEN
  ========================================================== */

  if (!session) {
    return (
      <main className="mw-admin-page login-page">
        <style>
          {adminStyles}
        </style>

        <section className="login-shell">
          <div className="login-brand">
            <div className="login-brand-mark">
              MW
            </div>

            <div>
              <span className="eyebrow">
                Matthew Web
              </span>

              <h1>
                Mission Control
              </h1>

              <p>
                Private business
                operations, lead
                management, sales
                tools, and automation.
              </p>
            </div>
          </div>

          <div className="security-banner">
            <ShieldCheck
              size={20}
            />

            <span>
              Protected private
              administration system
            </span>
          </div>

          {error ? (
            <div className="error-box login-error">
              {error}
            </div>
          ) : null}

          <form
            onSubmit={handleLogin}
            className="login-form"
          >
            <label>
              <span>
                Admin Email
              </span>

              <input
                type="email"
                value={email}
                placeholder="admin@example.com"
                autoComplete="email"
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                required
              />
            </label>

            <label>
              <span>
                Password
              </span>

              <input
                type="password"
                value={password}
                placeholder="Enter password"
                autoComplete="current-password"
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                required
              />
            </label>

            <button
              type="submit"
              className="primary-button login-button"
              disabled={loggingIn}
            >
              {loggingIn ? (
                <>
                  <LoaderCircle
                    size={18}
                    className="spin"
                  />

                  Signing In
                </>
              ) : (
                <>
                  <LockKeyhole
                    size={18}
                  />

                  Enter Mission
                  Control
                </>
              )}
            </button>
          </form>

          <div className="login-footer">
            <LockKeyhole
              size={14}
            />

            Authorized Matthew Web
            administration only
          </div>
        </section>
      </main>
    );
  }

  /* ==========================================================
     MISSION CONTROL
  ========================================================== */

  return (
    <main className="mw-admin-page">
      <style>
        {adminStyles}
      </style>

      <div className="admin-shell">

        {/* ====================================================
            TOP HEADER
        ==================================================== */}

        <header className="mission-header">
          <div className="mission-header-main">
            <div className="mission-icon">
              <LayoutDashboard
                size={30}
              />
            </div>

            <div>
              <div className="header-eyebrow-row">
                <span className="eyebrow">
                  Matthew Web Private
                  Operations
                </span>

                <span className="live-dot">
                  <span />
                  ONLINE
                </span>
              </div>

              <h1>
                Mission{" "}
                <span>
                  Control
                </span>
              </h1>

              <p>
                Business operations,
                lead intake, sales
                pipeline, follow-ups,
                audits, and private
                tools.
              </p>
            </div>
          </div>

          <div className="mission-header-actions">
            <button
              type="button"
              className="secondary-button"
              onClick={loadLeads}
              disabled={loadingLeads}
            >
              <RefreshCw
                size={17}
                className={
                  loadingLeads
                    ? "spin"
                    : ""
                }
              />

              {loadingLeads
                ? "Refreshing"
                : "Refresh Data"}
            </button>

            <button
              type="button"
              className="danger-outline-button"
              onClick={handleLogout}
            >
              <LogOut
                size={17}
              />

              Sign Out
            </button>
          </div>
        </header>

        {/* ====================================================
            SESSION / SECURITY STRIP
        ==================================================== */}

        <section className="system-strip">
          <div className="system-strip-item">
            <ShieldCheck
              size={18}
            />

            <div>
              <span>
                Security
              </span>

              <strong>
                Admin Protected
              </strong>
            </div>
          </div>

          <div className="system-strip-item">
            <Database
              size={18}
            />

            <div>
              <span>
                Database
              </span>

              <strong>
                RLS Hardened
              </strong>
            </div>
          </div>

          <div className="system-strip-item session-item">
            <LockKeyhole
              size={18}
            />

            <div>
              <span>
                Signed In
              </span>

              <strong>
                {session?.user?.email ||
                  "Admin"}
              </strong>
            </div>
          </div>

          <div className="system-strip-item">
            <Clock3
              size={18}
            />

            <div>
              <span>
                Last Refresh
              </span>

              <strong>
                {lastRefreshedAt
                  ? lastRefreshedAt.toLocaleTimeString(
                      [],
                      {
                        hour: "numeric",
                        minute: "2-digit",
                      }
                    )
                  : "Waiting"}
              </strong>
            </div>
          </div>
        </section>

        {error ? (
          <div className="error-box">
            <strong>
              Mission Control Error
            </strong>

            <span>
              {error}
            </span>
          </div>
        ) : null}

        {/* ====================================================
            OPERATIONS SNAPSHOT
        ==================================================== */}

        <section className="section-block">
          <div className="section-title-row">
            <div>
              <span className="eyebrow">
                Live Operations
              </span>

              <h2>
                Intake Snapshot
              </h2>
            </div>

            <span className="section-note">
              Public website form
              leads
            </span>
          </div>

          <div className="stats-grid">
            {stats.map((stat) => {
              const Icon =
                stat.icon;

              return (
                <article
                  className={`stat-card ${stat.accent}`}
                  key={stat.label}
                >
                  <div className="stat-card-top">
                    <div className="stat-icon">
                      <Icon
                        size={23}
                        strokeWidth={2.8}
                      />
                    </div>

                    <span>
                      LIVE
                    </span>
                  </div>

                  <strong className="stat-number">
                    {stat.value}
                  </strong>

                  <p>
                    {stat.label}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* ====================================================
            PRIVATE TOOLS
        ==================================================== */}

        <section className="section-block">
          <div className="section-title-row">
            <div>
              <span className="eyebrow">
                Operations Suite
              </span>

              <h2>
                Private Business
                Tools
              </h2>
            </div>

            <span className="section-note">
              Lead Finder + Sales
              Operations
            </span>
          </div>

          <div className="tool-grid">
            {TOOL_CARDS.map((tool) => {
              const Icon =
                tool.icon;

              return (
                <Link
                  href={tool.href}
                  className={`tool-card ${tool.accent}`}
                  key={tool.href}
                >
                  <div className="tool-card-head">
                    <div className="tool-icon">
                      <Icon
                        size={23}
                      />
                    </div>

                    <span className="tool-tag">
                      {tool.tag}
                    </span>
                  </div>

                  <h3>
                    {tool.title}
                  </h3>

                  <p>
                    {tool.description}
                  </p>

                  <div className="tool-open">
                    Open Tool
                    <ArrowRight
                      size={16}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ====================================================
            FOLLOW-UP AUTOMATION
        ==================================================== */}

        <section className="automation-card">
          <div className="automation-left">
            <div className="automation-icon">
              <CalendarClock
                size={27}
              />
            </div>

            <div>
              <span className="eyebrow">
                Automation
              </span>

              <h2>
                Follow-Up Reminder
                System
              </h2>

              <p>
                Run the private
                follow-up reminder
                process manually and
                check for CRM leads
                that are due or
                overdue.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="primary-button automation-button"
            onClick={testFollowupReminder}
            disabled={testingReminder}
          >
            {testingReminder ? (
              <>
                <LoaderCircle
                  size={18}
                  className="spin"
                />

                Running Test
              </>
            ) : (
              <>
                <Zap
                  size={18}
                />

                Run Reminder Test
              </>
            )}
          </button>

          {reminderMessage ? (
            <div
              className={`reminder-message ${reminderType}`}
            >
              {reminderType ===
              "success" ? (
                <CircleCheck
                  size={18}
                />
              ) : reminderType ===
                "error" ? (
                <Activity
                  size={18}
                />
              ) : (
                <Clock3
                  size={18}
                />
              )}

              <span>
                {reminderMessage}
              </span>
            </div>
          ) : null}
        </section>

        {/* ====================================================
            WEBSITE LEAD WORKSPACE
        ==================================================== */}

        <section className="lead-workspace">
          <div className="lead-workspace-header">
            <div>
              <span className="eyebrow">
                Incoming Business
              </span>

              <h2>
                Website Form Leads
              </h2>

              <p>
                Review inquiries from
                the public Matthew Web
                website and convert
                qualified prospects
                into Lead Finder CRM
                records.
              </p>
            </div>

            <div className="lead-count-badge">
              <Inbox
                size={18}
              />

              <strong>
                {filteredLeads.length}
              </strong>

              <span>
                shown
              </span>
            </div>
          </div>

          <div className="lead-filter-bar">
            <div className="search-field">
              <Search
                size={18}
              />

              <input
                type="text"
                value={search}
                placeholder="Search name, business, email, phone, message..."
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(
                  e.target.value
                )
              }
            >
              <option value="all">
                All Statuses
              </option>

              <option value="new">
                New
              </option>

              <option value="contacted">
                Contacted
              </option>

              <option value="closed">
                Closed
              </option>
            </select>
          </div>

          {loadingLeads ? (
            <div className="empty-state">
              <LoaderCircle
                size={30}
                className="spin"
              />

              <h3>
                Loading Leads
              </h3>

              <p>
                Syncing website
                inquiries from
                Supabase.
              </p>
            </div>
          ) : null}

          {!loadingLeads &&
          filteredLeads.length === 0 ? (
            <div className="empty-state">
              <Inbox
                size={34}
              />

              <h3>
                No Leads Found
              </h3>

              <p>
                No website form leads
                match the current
                search and filter.
              </p>
            </div>
          ) : null}

          {!loadingLeads &&
            filteredLeads.map((lead) => {
              const status =
                lead.status ||
                "new";

              const converted =
                Boolean(
                  lead.lead_finder_id
                );

              return (
                <article
                  className="lead-card"
                  key={lead.id}
                >
                  <div className="lead-card-header">
                    <div className="lead-identity">
                      <div className="lead-avatar">
                        <Building2
                          size={23}
                        />
                      </div>

                      <div>
                        <div className="lead-title-line">
                          <h3>
                            {lead.name ||
                              "No Name"}
                          </h3>

                          <span
                            className={`status-badge status-${getStatusClass(
                              status
                            )}`}
                          >
                            {getStatusLabel(
                              status
                            )}
                          </span>

                          {converted ? (
                            <span className="converted-badge">
                              <Database
                                size={13}
                              />

                              CRM
                            </span>
                          ) : null}
                        </div>

                        <p className="lead-business">
                          {lead.business_name ||
                            "No business name provided"}
                        </p>
                      </div>
                    </div>

                    <div className="lead-status-control">
                      <label>
                        Status
                      </label>

                      <select
                        value={status}
                        disabled={
                          updatingLeadId ===
                          lead.id
                        }
                        onChange={(e) =>
                          updateLeadStatus(
                            lead.id,
                            e.target.value
                          )
                        }
                      >
                        <option value="new">
                          New
                        </option>

                        <option value="contacted">
                          Contacted
                        </option>

                        <option value="closed">
                          Closed
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="lead-info-grid">
                    <div className="lead-info-item">
                      <Mail
                        size={16}
                      />

                      <div>
                        <span>
                          Email
                        </span>

                        {lead.email ? (
                          <a
                            href={`mailto:${lead.email}`}
                          >
                            {lead.email}
                          </a>
                        ) : (
                          <strong>
                            Not provided
                          </strong>
                        )}
                      </div>
                    </div>

                    <div className="lead-info-item">
                      <Phone
                        size={16}
                      />

                      <div>
                        <span>
                          Phone
                        </span>

                        {lead.phone ? (
                          <a
                            href={`tel:${lead.phone}`}
                          >
                            {lead.phone}
                          </a>
                        ) : (
                          <strong>
                            Not provided
                          </strong>
                        )}
                      </div>
                    </div>

                    <div className="lead-info-item">
                      <ExternalLink
                        size={16}
                      />

                      <div>
                        <span>
                          Source
                        </span>

                        <strong>
                          {lead.page_source ||
                            "Website form"}
                        </strong>
                      </div>
                    </div>

                    <div className="lead-info-item">
                      <Clock3
                        size={16}
                      />

                      <div>
                        <span>
                          Submitted
                        </span>

                        <strong>
                          {formatDate(
                            lead.created_at
                          )}
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div className="message-panel">
                    <div className="message-panel-title">
                      <MessageSquare
                        size={17}
                      />

                      Inquiry Message
                    </div>

                    <p>
                      {lead.message ||
                        "No message included."}
                    </p>
                  </div>

                  {converted ? (
                    <div className="conversion-panel">
                      <CircleCheck
                        size={18}
                      />

                      <div>
                        <strong>
                          Connected to
                          Lead Finder
                        </strong>

                        <span>
                          This inquiry
                          already has a
                          CRM record.
                        </span>
                      </div>
                    </div>
                  ) : null}

                  <div className="lead-actions-row">
                    {lead.email ? (
                      <a
                        href={`mailto:${lead.email}`}
                        className="action-button cyan"
                      >
                        <Mail
                          size={16}
                        />

                        Email
                      </a>
                    ) : null}

                    {lead.phone ? (
                      <a
                        href={`tel:${lead.phone}`}
                        className="action-button blue"
                      >
                        <Phone
                          size={16}
                        />

                        Call
                      </a>
                    ) : null}

                    <button
                      type="button"
                      className="action-button orange"
                      onClick={() =>
                        convertToLeadFinder(
                          lead
                        )
                      }
                      disabled={
                        convertingLeadId ===
                        lead.id
                      }
                    >
                      {convertingLeadId ===
                      lead.id ? (
                        <>
                          <LoaderCircle
                            size={16}
                            className="spin"
                          />

                          Converting
                        </>
                      ) : converted ? (
                        <>
                          <ExternalLink
                            size={16}
                          />

                          Open CRM Record
                        </>
                      ) : (
                        <>
                          <UserPlus
                            size={16}
                          />

                          Convert to CRM
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      className="action-button delete"
                      onClick={() =>
                        deleteLead(
                          lead.id
                        )
                      }
                      disabled={
                        deletingLeadId ===
                        lead.id
                      }
                    >
                      {deletingLeadId ===
                      lead.id ? (
                        <>
                          <LoaderCircle
                            size={16}
                            className="spin"
                          />

                          Deleting
                        </>
                      ) : (
                        <>
                          <Trash2
                            size={16}
                          />

                          Delete
                        </>
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
        </section>

        <footer className="mission-footer">
          <div>
            <div className="footer-brand-mark">
              MW
            </div>

            <div>
              <strong>
                Matthew Web Mission
                Control
              </strong>

              <span>
                Private internal
                operations system
              </span>
            </div>
          </div>

          <div className="footer-security">
            <ShieldCheck
              size={16}
            />

            RLS + Admin API
            Protection Active
          </div>
        </footer>
      </div>
    </main>
  );
}

/* ============================================================
   MISSION CONTROL STYLES
============================================================ */

const adminStyles = `
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
  input,
  select {
    font: inherit;
  }

  button,
  a,
  select {
    -webkit-tap-highlight-color: transparent;
  }

  .mw-admin-page {
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
    background:
      radial-gradient(
        circle at 10% -10%,
        rgba(0, 192, 255, 0.13),
        transparent 34%
      ),
      radial-gradient(
        circle at 95% 4%,
        rgba(255, 119, 0, 0.12),
        transparent 28%
      ),
      linear-gradient(
        180deg,
        #06090f 0%,
        #05070b 48%,
        #06080d 100%
      );
  }

  .mw-admin-page::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: 0.16;
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
        transparent 85%
      );
  }

  .admin-shell {
    position: relative;
    z-index: 1;
    width: min(1480px, calc(100% - 40px));
    margin: 0 auto;
    padding: 34px 0 50px;
  }

  .eyebrow {
    display: inline-block;
    color: #32d7ff;
    font-size: 12px;
    line-height: 1;
    font-weight: 900;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  /* ==========================================================
     LOADING SCREEN
  ========================================================== */

  .loading-screen {
    position: relative;
    z-index: 2;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 30px;
    color: #ffffff;
  }

  .loading-logo,
  .login-brand-mark,
  .footer-brand-mark {
    display: grid;
    place-items: center;
    background:
      linear-gradient(
        135deg,
        #00bce8,
        #087cff
      );
    color: #ffffff;
    font-weight: 1000;
    box-shadow:
      0 0 36px rgba(0, 194, 255, 0.28);
  }

  .loading-logo {
    width: 78px;
    height: 78px;
    border-radius: 24px;
    font-size: 25px;
    margin-bottom: 22px;
  }

  .loading-screen svg {
    color: #ff8300;
  }

  .loading-screen h1 {
    margin: 18px 0 7px;
    font-size: 28px;
  }

  .loading-screen p {
    margin: 0;
    color: #8f9caf;
  }

  .spin {
    animation: mw-spin 0.8s linear infinite;
  }

  @keyframes mw-spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* ==========================================================
     LOGIN
  ========================================================== */

  .login-page {
    display: grid;
    place-items: center;
    padding: 30px 18px;
  }

  .login-shell {
    position: relative;
    z-index: 2;
    width: min(100%, 520px);
    padding: 34px;
    border: 1px solid rgba(120, 175, 215, 0.18);
    border-radius: 28px;
    background:
      linear-gradient(
        145deg,
        rgba(15, 21, 31, 0.96),
        rgba(8, 12, 19, 0.98)
      );
    box-shadow:
      0 30px 80px rgba(0, 0, 0, 0.48),
      inset 0 1px 0 rgba(255, 255, 255, 0.04);
  }

  .login-brand {
    display: flex;
    gap: 18px;
    align-items: flex-start;
    margin-bottom: 24px;
  }

  .login-brand-mark {
    flex: 0 0 auto;
    width: 62px;
    height: 62px;
    border-radius: 18px;
    font-size: 19px;
  }

  .login-brand h1 {
    margin: 7px 0 8px;
    font-size: clamp(31px, 7vw, 43px);
    letter-spacing: -0.04em;
    line-height: 1;
  }

  .login-brand p {
    margin: 0;
    color: #9aa8ba;
    font-size: 15px;
    line-height: 1.55;
  }

  .security-banner {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
    border: 1px solid rgba(46, 214, 255, 0.18);
    background: rgba(0, 181, 230, 0.07);
    color: #9eeeff;
    padding: 12px 14px;
    border-radius: 13px;
    font-size: 13px;
    font-weight: 800;
  }

  .login-form {
    display: grid;
    gap: 18px;
  }

  .login-form label {
    display: grid;
    gap: 8px;
  }

  .login-form label > span {
    color: #dbe7f1;
    font-size: 13px;
    font-weight: 800;
  }

  .login-form input {
    width: 100%;
    min-height: 50px;
    border-radius: 13px;
    border: 1px solid #273344;
    background: #080d14;
    color: #ffffff;
    padding: 0 15px;
    outline: none;
    transition:
      border-color 0.18s ease,
      box-shadow 0.18s ease;
  }

  .login-form input:focus {
    border-color: #21cffa;
    box-shadow:
      0 0 0 3px rgba(33, 207, 250, 0.1);
  }

  .login-form input::placeholder {
    color: #596575;
  }

  .login-button {
    width: 100%;
    margin-top: 3px;
  }

  .login-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    margin-top: 20px;
    color: #697688;
    font-size: 12px;
    text-align: center;
  }

  /* ==========================================================
     HEADER
  ========================================================== */

  .mission-header {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
    padding: 28px;
    margin-bottom: 14px;
    border: 1px solid #192332;
    border-radius: 26px;
    background:
      linear-gradient(
        135deg,
        rgba(15, 22, 33, 0.96),
        rgba(8, 12, 19, 0.96)
      );
    box-shadow:
      0 20px 60px rgba(0, 0, 0, 0.28),
      inset 0 1px 0 rgba(255, 255, 255, 0.035);
  }

  .mission-header-main {
    display: flex;
    gap: 19px;
    align-items: flex-start;
    min-width: 0;
  }

  .mission-icon {
    flex: 0 0 auto;
    width: 58px;
    height: 58px;
    border-radius: 18px;
    display: grid;
    place-items: center;
    color: #ffffff;
    background:
      linear-gradient(
        145deg,
        #009fd0,
        #087df5
      );
    box-shadow:
      0 0 35px rgba(0, 182, 232, 0.2);
  }

  .header-eyebrow-row {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  .live-dot {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #6be9a4;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.1em;
  }

  .live-dot > span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #35dd86;
    box-shadow:
      0 0 11px rgba(53, 221, 134, 0.72);
  }

  .mission-header h1 {
    margin: 7px 0 8px;
    color: #ffffff;
    font-size: clamp(34px, 4vw, 52px);
    line-height: 1;
    letter-spacing: -0.045em;
  }

  .mission-header h1 span {
    color: #ff8300;
  }

  .mission-header p {
    max-width: 730px;
    margin: 0;
    color: #909daf;
    font-size: 15px;
    line-height: 1.55;
  }

  .mission-header-actions {
    flex: 0 0 auto;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  /* ==========================================================
     BUTTONS
  ========================================================== */

  .primary-button,
  .secondary-button,
  .danger-outline-button {
    min-height: 44px;
    border-radius: 12px;
    border: 1px solid transparent;
    padding: 0 17px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 900;
    cursor: pointer;
    transition:
      transform 0.18s ease,
      background 0.18s ease,
      border-color 0.18s ease,
      box-shadow 0.18s ease;
  }

  .primary-button {
    color: #ffffff;
    background:
      linear-gradient(
        135deg,
        #ff8700,
        #ff6400
      );
    box-shadow:
      0 10px 25px rgba(255, 108, 0, 0.17);
  }

  .primary-button:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow:
      0 12px 28px rgba(255, 108, 0, 0.25);
  }

  .secondary-button {
    color: #caeff8;
    background: #0b131d;
    border-color: #24394a;
  }

  .secondary-button:hover:not(:disabled) {
    border-color: #24c9f4;
    background: #0c1924;
  }

  .danger-outline-button {
    color: #ffb2b2;
    background: rgba(124, 23, 23, 0.08);
    border-color: rgba(255, 89, 89, 0.25);
  }

  .danger-outline-button:hover:not(:disabled) {
    border-color: rgba(255, 89, 89, 0.55);
    background: rgba(154, 31, 31, 0.15);
  }

  button:disabled {
    opacity: 0.52;
    cursor: not-allowed;
  }

  /* ==========================================================
     SYSTEM STRIP
  ========================================================== */

  .system-strip {
    display: grid;
    grid-template-columns:
      minmax(0, 0.8fr)
      minmax(0, 0.8fr)
      minmax(0, 1.4fr)
      minmax(0, 0.8fr);
    gap: 1px;
    margin-bottom: 28px;
    overflow: hidden;
    border: 1px solid #17212f;
    border-radius: 15px;
    background: #17212f;
  }

  .system-strip-item {
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 13px 16px;
    background: #090e15;
  }

  .system-strip-item svg {
    flex: 0 0 auto;
    color: #21cdf4;
  }

  .system-strip-item div {
    min-width: 0;
    display: grid;
    gap: 2px;
  }

  .system-strip-item span {
    color: #637184;
    font-size: 10px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.09em;
  }

  .system-strip-item strong {
    min-width: 0;
    overflow: hidden;
    color: #dce7ef;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* ==========================================================
     ERROR
  ========================================================== */

  .error-box {
    display: grid;
    gap: 4px;
    margin: 0 0 24px;
    border: 1px solid rgba(255, 72, 72, 0.35);
    border-radius: 14px;
    background: rgba(117, 19, 19, 0.18);
    color: #ffb4b4;
    padding: 14px 16px;
  }

  .error-box strong {
    color: #ff7777;
    font-size: 13px;
  }

  .error-box span,
  .login-error {
    font-size: 13px;
    line-height: 1.45;
  }

  /* ==========================================================
     SECTIONS
  ========================================================== */

  .section-block {
    margin-bottom: 30px;
  }

  .section-title-row {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: flex-end;
    margin-bottom: 15px;
  }

  .section-title-row h2 {
    margin: 5px 0 0;
    color: #f5f8fb;
    font-size: clamp(24px, 3vw, 31px);
    letter-spacing: -0.035em;
  }

  .section-note {
    color: #667487;
    font-size: 12px;
    font-weight: 800;
  }

  /* ==========================================================
     STATS
  ========================================================== */

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 12px;
  }

  .stat-card {
    position: relative;
    overflow: hidden;
    min-width: 0;
    padding: 18px;
    border: 1px solid #192535;
    border-radius: 18px;
    background:
      linear-gradient(
        145deg,
        #0e151f,
        #090e15
      );
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.025);
  }

  .stat-card::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    top: -50px;
    right: -50px;
    border-radius: 50%;
    filter: blur(8px);
    opacity: 0.08;
    background: currentColor;
  }

  .stat-card.cyan {
    color: #24d2f4;
  }

  .stat-card.orange {
    color: #ff8b00;
  }

  .stat-card.blue {
    color: #4d8dff;
  }

  .stat-card.purple {
    color: #a77cff;
  }

  .stat-card.green {
    color: #48df91;
  }

  .stat-card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
  }

  .stat-icon {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    border-radius: 13px;
    background: currentColor;
    box-shadow:
      0 0 18px rgba(255, 255, 255, 0.08);
  }

  .stat-icon svg {
    width: 23px;
    height: 23px;
    color: #05090d;
    stroke-width: 2.8;
  }

  .stat-card-top > span {
    color: #718198;
    font-size: 9px;
    font-weight: 1000;
    letter-spacing: 0.12em;
  }

  .stat-number {
    display: block;
    color: #ffffff;
    font-size: 36px;
    line-height: 1;
    letter-spacing: -0.05em;
  }

  .stat-card p {
    margin: 8px 0 0;
    color: #9ba8ba;
    font-size: 12px;
    font-weight: 800;
  }

  /* ==========================================================
     TOOL GRID
  ========================================================== */

  .tool-grid {
    display: grid;
    grid-template-columns:
      repeat(3, minmax(0, 1fr));
    gap: 13px;
  }

  .tool-card {
    position: relative;
    overflow: hidden;
    min-width: 0;
    display: flex;
    flex-direction: column;
    min-height: 205px;
    padding: 21px;
    border: 1px solid #192536;
    border-radius: 19px;
    background:
      linear-gradient(
        145deg,
        rgba(15, 22, 32, 0.96),
        rgba(8, 13, 20, 0.98)
      );
    color: #ffffff;
    text-decoration: none;
    transition:
      transform 0.2s ease,
      border-color 0.2s ease,
      box-shadow 0.2s ease;
  }

  .tool-card::before {
    content: "";
    position: absolute;
    height: 3px;
    left: 0;
    right: 0;
    top: 0;
    background: var(--tool-accent);
    opacity: 0.75;
  }

  .tool-card:hover {
    transform: translateY(-3px);
    border-color: var(--tool-accent);
    box-shadow:
      0 16px 35px rgba(0, 0, 0, 0.23);
  }

  .tool-card.blue {
    --tool-accent: #4c8fff;
  }

  .tool-card.cyan {
    --tool-accent: #22d3ee;
  }

  .tool-card.orange {
    --tool-accent: #ff8200;
  }

  .tool-card.purple {
    --tool-accent: #a77cff;
  }

  .tool-card.red {
    --tool-accent: #ff5c62;
  }

  .tool-card.green {
    --tool-accent: #43dc88;
  }

  .tool-card-head {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: center;
    margin-bottom: 19px;
  }

  .tool-icon {
    width: 43px;
    height: 43px;
    display: grid;
    place-items: center;
    border-radius: 13px;
    color: var(--tool-accent);
    background: #0b121b;
    border: 1px solid #263447;
  }

  .tool-tag {
    color: #657489;
    font-size: 9px;
    font-weight: 1000;
    letter-spacing: 0.11em;
  }

  .tool-card h3 {
    margin: 0 0 8px;
    color: #f5f7fb;
    font-size: 20px;
    letter-spacing: -0.025em;
  }

  .tool-card p {
    margin: 0;
    color: #8492a5;
    font-size: 13px;
    line-height: 1.5;
  }

  .tool-open {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: auto;
    padding-top: 19px;
    color: var(--tool-accent);
    font-size: 12px;
    font-weight: 900;
  }

  /* ==========================================================
     AUTOMATION
  ========================================================== */

  .automation-card {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 20px;
    align-items: center;
    margin-bottom: 32px;
    padding: 23px;
    border: 1px solid #233142;
    border-radius: 20px;
    background:
      linear-gradient(
        135deg,
        rgba(12, 21, 30, 0.98),
        rgba(13, 14, 18, 0.98)
      );
  }

  .automation-left {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .automation-icon {
    flex: 0 0 auto;
    width: 54px;
    height: 54px;
    display: grid;
    place-items: center;
    border-radius: 16px;
    color: #ff8a00;
    background: rgba(255, 128, 0, 0.09);
    border: 1px solid rgba(255, 128, 0, 0.2);
  }

  .automation-card h2 {
    margin: 5px 0 6px;
    color: #f5f7fa;
    font-size: 21px;
  }

  .automation-card p {
    max-width: 780px;
    margin: 0;
    color: #8190a2;
    font-size: 13px;
    line-height: 1.5;
  }

  .automation-button {
    white-space: nowrap;
  }

  .reminder-message {
    grid-column: 1 / -1;
    display: flex;
    gap: 9px;
    align-items: flex-start;
    border-radius: 12px;
    padding: 12px 14px;
    font-size: 13px;
    line-height: 1.45;
  }

  .reminder-message.success {
    color: #a7f3c9;
    background: rgba(23, 122, 70, 0.14);
    border: 1px solid rgba(70, 224, 137, 0.25);
  }

  .reminder-message.info {
    color: #a6eafa;
    background: rgba(15, 125, 153, 0.12);
    border: 1px solid rgba(55, 207, 240, 0.22);
  }

  .reminder-message.error {
    color: #ffb4b4;
    background: rgba(143, 31, 31, 0.15);
    border: 1px solid rgba(255, 84, 84, 0.27);
  }

  /* ==========================================================
     LEAD WORKSPACE
  ========================================================== */

  .lead-workspace {
    margin-bottom: 30px;
    padding: 22px;
    border: 1px solid #182434;
    border-radius: 24px;
    background:
      linear-gradient(
        145deg,
        rgba(10, 15, 23, 0.98),
        rgba(7, 11, 17, 0.98)
      );
  }

  .lead-workspace-header {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: flex-start;
    margin-bottom: 18px;
  }

  .lead-workspace-header h2 {
    margin: 5px 0 7px;
    color: #f6f8fb;
    font-size: 29px;
    letter-spacing: -0.035em;
  }

  .lead-workspace-header p {
    max-width: 760px;
    margin: 0;
    color: #7f8ea1;
    font-size: 13px;
    line-height: 1.55;
  }

  .lead-count-badge {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    gap: 7px;
    border: 1px solid #26374a;
    border-radius: 13px;
    padding: 10px 13px;
    color: #7ddff5;
    background: #0a1119;
  }

  .lead-count-badge strong {
    color: #ffffff;
    font-size: 18px;
  }

  .lead-count-badge span {
    color: #69788b;
    font-size: 11px;
    font-weight: 800;
  }

  /* ==========================================================
     FILTERS
  ========================================================== */

  .lead-filter-bar {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 190px;
    gap: 10px;
    margin-bottom: 18px;
  }

  .search-field {
    min-width: 0;
    height: 47px;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 1px solid #253345;
    border-radius: 12px;
    background: #080d13;
    padding: 0 13px;
  }

  .search-field svg {
    flex: 0 0 auto;
    color: #5f7084;
  }

  .search-field:focus-within {
    border-color: #1fc9ee;
    box-shadow:
      0 0 0 3px rgba(31, 201, 238, 0.07);
  }

  .search-field input {
    min-width: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    color: #ffffff;
    background: transparent;
    font-size: 13px;
  }

  .search-field input::placeholder {
    color: #556274;
  }

  .lead-filter-bar > select,
  .lead-status-control select {
    border: 1px solid #263548;
    border-radius: 12px;
    outline: none;
    background: #090f17;
    color: #dbe5ee;
    padding: 0 12px;
  }

  .lead-filter-bar > select {
    min-height: 47px;
  }

  /* ==========================================================
     LEAD CARD
  ========================================================== */

  .lead-card {
    margin-top: 12px;
    padding: 20px;
    border: 1px solid #1a2636;
    border-radius: 18px;
    background:
      linear-gradient(
        145deg,
        #0e151e,
        #090e15
      );
    transition:
      border-color 0.18s ease,
      transform 0.18s ease;
  }

  .lead-card:hover {
    border-color: #2b3a4f;
  }

  .lead-card-header {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: flex-start;
    margin-bottom: 18px;
  }

  .lead-identity {
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 13px;
  }

  .lead-avatar {
    flex: 0 0 auto;
    width: 46px;
    height: 46px;
    display: grid;
    place-items: center;
    border-radius: 14px;
    color: #25d0f5;
    background: rgba(27, 183, 220, 0.08);
    border: 1px solid rgba(38, 200, 237, 0.18);
  }

  .lead-title-line {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .lead-title-line h3 {
    margin: 0;
    color: #f7f9fb;
    font-size: 20px;
    letter-spacing: -0.025em;
  }

  .lead-business {
    margin: 4px 0 0;
    color: #ff8b00;
    font-size: 13px;
    font-weight: 800;
  }

  .status-badge,
  .converted-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    border-radius: 999px;
    padding: 4px 8px;
    font-size: 9px;
    font-weight: 1000;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .status-new {
    color: #93eaff;
    background: rgba(18, 162, 198, 0.12);
    border: 1px solid rgba(38, 200, 237, 0.2);
  }

  .status-contacted {
    color: #ffc16e;
    background: rgba(205, 113, 13, 0.12);
    border: 1px solid rgba(255, 139, 0, 0.2);
  }

  .status-closed {
    color: #9cf1c0;
    background: rgba(34, 160, 87, 0.12);
    border: 1px solid rgba(67, 220, 136, 0.2);
  }

  .converted-badge {
    color: #cbb5ff;
    background: rgba(132, 87, 225, 0.11);
    border: 1px solid rgba(170, 125, 255, 0.22);
  }

  .lead-status-control {
    flex: 0 0 155px;
    display: grid;
    gap: 6px;
  }

  .lead-status-control label {
    color: #667487;
    font-size: 10px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .lead-status-control select {
    min-height: 39px;
  }

  .lead-info-grid {
    display: grid;
    grid-template-columns:
      repeat(4, minmax(0, 1fr));
    gap: 9px;
    margin-bottom: 13px;
  }

  .lead-info-item {
    min-width: 0;
    display: flex;
    gap: 9px;
    align-items: flex-start;
    padding: 11px;
    border: 1px solid #192432;
    border-radius: 12px;
    background: #080d13;
  }

  .lead-info-item > svg {
    flex: 0 0 auto;
    margin-top: 2px;
    color: #31ccec;
  }

  .lead-info-item div {
    min-width: 0;
    display: grid;
    gap: 3px;
  }

  .lead-info-item span {
    color: #5f6d7f;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .lead-info-item strong,
  .lead-info-item a {
    min-width: 0;
    overflow-wrap: anywhere;
    color: #cbd7e0;
    font-size: 11px;
    font-weight: 700;
    text-decoration: none;
  }

  .lead-info-item a:hover {
    color: #41d9fa;
  }

  .message-panel {
    margin-top: 12px;
    padding: 14px;
    border: 1px solid #1d2938;
    border-radius: 13px;
    background: #090f16;
  }

  .message-panel-title {
    display: flex;
    align-items: center;
    gap: 7px;
    color: #9eacba;
    font-size: 11px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .message-panel-title svg {
    color: #ff8a00;
  }

  .message-panel p {
    margin: 9px 0 0;
    color: #aab6c3;
    font-size: 13px;
    line-height: 1.55;
    white-space: pre-wrap;
  }

  .conversion-panel {
    display: flex;
    align-items: center;
    gap: 9px;
    margin-top: 12px;
    padding: 11px 13px;
    border-radius: 12px;
    color: #72e7a7;
    background: rgba(37, 145, 82, 0.09);
    border: 1px solid rgba(64, 218, 132, 0.18);
  }

  .conversion-panel div {
    display: grid;
    gap: 2px;
  }

  .conversion-panel strong {
    color: #9bf0bf;
    font-size: 11px;
  }

  .conversion-panel span {
    color: #6d9d80;
    font-size: 10px;
  }

  /* ==========================================================
     LEAD ACTIONS
  ========================================================== */

  .lead-actions-row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 15px;
  }

  .action-button {
    min-height: 37px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    border: 1px solid transparent;
    border-radius: 10px;
    padding: 0 12px;
    cursor: pointer;
    text-decoration: none;
    font-size: 11px;
    font-weight: 900;
    transition:
      transform 0.16s ease,
      background 0.16s ease,
      border-color 0.16s ease;
  }

  .action-button:hover:not(:disabled) {
    transform: translateY(-1px);
  }

  .action-button.cyan {
    color: #9becff;
    background: rgba(12, 144, 177, 0.1);
    border-color: rgba(40, 203, 240, 0.18);
  }

  .action-button.blue {
    color: #a9c6ff;
    background: rgba(53, 105, 203, 0.1);
    border-color: rgba(77, 143, 255, 0.2);
  }

  .action-button.orange {
    color: #ffc57f;
    background: rgba(183, 98, 0, 0.12);
    border-color: rgba(255, 139, 0, 0.2);
  }

  .action-button.delete {
    margin-left: auto;
    color: #ffabab;
    background: rgba(153, 32, 32, 0.1);
    border-color: rgba(255, 73, 73, 0.18);
  }

  .action-button.delete:hover:not(:disabled) {
    border-color: rgba(255, 73, 73, 0.38);
    background: rgba(170, 38, 38, 0.16);
  }

  /* ==========================================================
     EMPTY STATE
  ========================================================== */

  .empty-state {
    display: grid;
    justify-items: center;
    gap: 8px;
    padding: 50px 20px;
    margin-top: 12px;
    border: 1px dashed #273446;
    border-radius: 16px;
    color: #526276;
    text-align: center;
    background: rgba(6, 10, 16, 0.45);
  }

  .empty-state svg {
    color: #4f657c;
  }

  .empty-state h3 {
    margin: 2px 0 0;
    color: #a8b4c1;
    font-size: 17px;
  }

  .empty-state p {
    margin: 0;
    color: #647286;
    font-size: 12px;
  }

  /* ==========================================================
     FOOTER
  ========================================================== */

  .mission-footer {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    padding: 17px 4px 0;
    color: #576477;
  }

  .mission-footer > div:first-child {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .footer-brand-mark {
    width: 33px;
    height: 33px;
    border-radius: 10px;
    font-size: 10px;
  }

  .mission-footer > div:first-child > div:last-child {
    display: grid;
    gap: 2px;
  }

  .mission-footer strong {
    color: #8795a7;
    font-size: 11px;
  }

  .mission-footer span {
    font-size: 9px;
  }

  .footer-security {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #4f8d6d;
    font-size: 10px;
    font-weight: 800;
  }

  /* ==========================================================
     RESPONSIVE
  ========================================================== */

  @media (max-width: 1180px) {
    .stats-grid {
      grid-template-columns:
        repeat(3, minmax(0, 1fr));
    }

    .tool-grid {
      grid-template-columns:
        repeat(2, minmax(0, 1fr));
    }

    .lead-info-grid {
      grid-template-columns:
        repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 900px) {
    .admin-shell {
      width: min(
        100% - 28px,
        1480px
      );
      padding-top: 20px;
    }

    .mission-header {
      align-items: stretch;
      flex-direction: column;
    }

    .mission-header-actions {
      width: 100%;
    }

    .mission-header-actions button {
      flex: 1;
    }

    .system-strip {
      grid-template-columns:
        repeat(2, minmax(0, 1fr));
    }

    .automation-card {
      grid-template-columns: 1fr;
    }

    .automation-button {
      width: 100%;
    }

    .lead-workspace-header {
      align-items: stretch;
      flex-direction: column;
    }

    .lead-count-badge {
      width: fit-content;
    }
  }

  @media (max-width: 680px) {
    .admin-shell {
      width: calc(100% - 20px);
      padding-top: 10px;
    }

    .mission-header {
      padding: 20px;
      border-radius: 20px;
    }

    .mission-header-main {
      gap: 13px;
    }

    .mission-icon {
      width: 46px;
      height: 46px;
      border-radius: 14px;
    }

    .mission-icon svg {
      width: 23px;
      height: 23px;
    }

    .mission-header h1 {
      font-size: 35px;
    }

    .mission-header p {
      font-size: 13px;
    }

    .system-strip {
      grid-template-columns: 1fr;
    }

    .stats-grid {
      grid-template-columns:
        repeat(2, minmax(0, 1fr));
    }

    .tool-grid {
      grid-template-columns: 1fr;
    }

    .section-title-row {
      align-items: flex-start;
      flex-direction: column;
      gap: 5px;
    }

    .section-note {
      display: none;
    }

    .automation-card {
      padding: 18px;
    }

    .automation-left {
      align-items: flex-start;
    }

    .lead-workspace {
      padding: 15px;
      border-radius: 19px;
    }

    .lead-filter-bar {
      grid-template-columns: 1fr;
    }

    .lead-filter-bar > select {
      width: 100%;
    }

    .lead-card {
      padding: 15px;
    }

    .lead-card-header {
      flex-direction: column;
      gap: 14px;
    }

    .lead-status-control {
      width: 100%;
      flex-basis: auto;
    }

    .lead-status-control select {
      width: 100%;
    }

    .lead-info-grid {
      grid-template-columns: 1fr;
    }

    .lead-actions-row {
      display: grid;
      grid-template-columns:
        repeat(2, minmax(0, 1fr));
    }

    .action-button {
      width: 100%;
    }

    .action-button.delete {
      margin-left: 0;
    }

    .mission-footer {
      align-items: flex-start;
      flex-direction: column;
    }
  }

  @media (max-width: 470px) {
    .login-shell {
      padding: 24px 19px;
      border-radius: 21px;
    }

    .login-brand {
      flex-direction: column;
    }

    .mission-header-main {
      flex-direction: column;
    }

    .mission-header-actions {
      display: grid;
      grid-template-columns: 1fr;
    }

    .stats-grid {
      grid-template-columns: 1fr;
    }

    .automation-left {
      flex-direction: column;
    }

    .lead-identity {
      align-items: flex-start;
    }

    .lead-avatar {
      width: 40px;
      height: 40px;
    }

    .lead-actions-row {
      grid-template-columns: 1fr;
    }
  }
`;
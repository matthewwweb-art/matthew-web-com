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

const categoryOptions = [
  "Contractor",
  "Roofer",
  "Landscaper",
  "Painter",
  "Concrete Company",
  "Tree Service",
  "HVAC",
  "Plumber",
  "Electrician",
  "Flooring",
  "Fence Company",
  "Junk Removal",
  "Auto Detailer",
  "Med Spa",
  "Dentist",
  "Law Firm",
  "Realtor",
  "Property Manager",
  "Restaurant",
  "Barber",
  "Gym",
  "Cleaner",
  "Other",
];

function calculateLeadScore(form) {
  let score = 0;

  const problemText = `${form.problem_summary || ""} ${
    form.notes || ""
  }`.toLowerCase();
  const category = (form.category || "").toLowerCase();
  const rating = Number(form.rating || 0);
  const reviews = Number(form.review_count || 0);

  if (!form.website_url) score += 30;
  if (problemText.includes("no website")) score += 30;
  if (
    problemText.includes("bad website") ||
    problemText.includes("old website")
  )
    score += 25;
  if (problemText.includes("no booking")) score += 15;
  if (problemText.includes("no contact form")) score += 15;
  if (
    problemText.includes("facebook only") ||
    problemText.includes("only facebook")
  )
    score += 15;
  if (rating >= 4) score += 15;
  if (reviews >= 25) score += 15;
  if (reviews >= 75) score += 10;

  const highValueCategories = [
    "contractor",
    "roofer",
    "landscaper",
    "painter",
    "concrete",
    "tree",
    "hvac",
    "plumber",
    "electrician",
    "flooring",
    "fence",
    "junk",
    "med spa",
    "dentist",
    "law",
    "property",
  ];

  if (highValueCategories.some((item) => category.includes(item))) {
    score += 15;
  }

  return Math.min(score, 100);
}

function buildOfferIdea(form, score) {
  const problemText = `${form.problem_summary || ""} ${
    form.notes || ""
  }`.toLowerCase();

  if (!form.website_url || problemText.includes("no website")) {
    return "Offer a $1,500–$3,500 starter website with lead form, SEO setup, mobile layout, Google indexing, and hosting support.";
  }

  if (problemText.includes("booking")) {
    return "Offer a $2,500–$7,500 website rebuild with online booking, quote form, email notifications, and lead tracking dashboard.";
  }

  if (problemText.includes("crm") || problemText.includes("follow up")) {
    return "Offer a $5,000–$15,000 custom CRM or missed-lead follow-up system.";
  }

  if (problemText.includes("seo") || problemText.includes("google")) {
    return "Offer a $750–$2,500 SEO cleanup, sitemap/indexing setup, page titles, meta descriptions, and local SEO improvements.";
  }

  if (score >= 75) {
    return "High-value lead. Offer a full website rebuild plus lead form, CRM dashboard, SEO setup, and automated follow-up.";
  }

  return "Offer a free website audit first, then pitch website improvements, lead forms, SEO cleanup, or custom software based on their needs.";
}

function getFirstProblem(problemSummary) {
  const text = problemSummary || "";

  if (!text.trim()) {
    return "I noticed a few areas where your online presence could potentially be improved";
  }

  const clean = text.replaceAll("\n", " ").replace("Website audit:", "").trim();

  if (clean.length > 160) {
    return clean.slice(0, 160) + "...";
  }

  return clean;
}

function buildOutreachMessages(lead) {
  const businessName = lead.business_name || "your business";
  const category = lead.category || "business";
  const problem = getFirstProblem(lead.problem_summary);
  const offerIdea =
    lead.offer_idea ||
    "I help small businesses improve their websites, lead forms, SEO, booking systems, and follow-up process.";
  const cityState = [lead.city, lead.state].filter(Boolean).join(", ");
  const locationLine = cityState ? ` in ${cityState}` : "";

  const facebookDm = `Hey ${businessName}, I came across your ${category.toLowerCase()} business${locationLine} and wanted to reach out. ${problem}. I build affordable websites, lead forms, SEO-ready pages, and simple business tools that help small businesses get more leads and look more professional online. Would you want me to send over a quick free website audit or a few ideas for improving your online presence?`;

  const emailSubject = `Quick website idea for ${businessName}`;

  const emailMessage = `Hi ${businessName},

I came across your ${category.toLowerCase()} business${locationLine} and wanted to reach out.

${problem}.

${offerIdea}

I build affordable websites, lead forms, SEO-ready pages, CRM dashboards, booking systems, and custom software tools for small businesses.

Would you be open to me sending over a quick free website audit or a few simple ideas that could help your business get more leads online?

Thanks,
Adam
matthew-web
https://matthew-web.com`;

  const phoneScript = `Hi, this is Adam from matthew-web. I help small businesses with websites, lead forms, SEO, booking tools, and simple custom software.

I came across ${businessName} and noticed ${problem}.

I was calling to see if you’d be interested in a free quick website audit or a few ideas to help bring in more leads online. Is that something you’d want me to send over?`;

  const followUpMessage = `Hey ${businessName}, just following up on my last message. I help small businesses improve their websites, lead forms, SEO, booking systems, and follow-up tools. I noticed ${problem}. Would you like me to send over a quick free audit or a few ideas?`;

  return [
    {
      channel: "facebook dm",
      message: facebookDm,
      status: "draft",
    },
    {
      channel: "email",
      message: `Subject: ${emailSubject}\n\n${emailMessage}`,
      status: "draft",
    },
    {
      channel: "phone script",
      message: phoneScript,
      status: "draft",
    },
    {
      channel: "follow up",
      message: followUpMessage,
      status: "draft",
    },
  ];
}

const emptyForm = {
  business_name: "",
  category: "",
  contact_name: "",
  phone: "",
  email: "",
  website_url: "",
  google_maps_url: "",
  facebook_url: "",
  yelp_url: "",
  city: "",
  state: "",
  source: "manual",
  rating: "",
  review_count: "",
  problem_summary: "",
  offer_idea: "",
  estimated_offer_value: "",
  lead_score: 0,
  status: "new",
  notes: "",
  next_followup_at: "",
};

export default function LeadFinderPage() {
  const [session, setSession] = useState(null);
  const [loadingSession, setLoadingSession] = useState(true);
  const [loadingLeads, setLoadingLeads] = useState(false);
  const [saving, setSaving] = useState(false);
  const [auditingId, setAuditingId] = useState(null);
  const [generatingId, setGeneratingId] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [leads, setLeads] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
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

  async function loadLeads() {
    setLoadingLeads(true);
    setError("");

    const { data, error: leadError } = await supabase
      .from("lead_finder_leads")
      .select(
        `
        *,
        lead_finder_outreach (
          id,
          channel,
          message,
          status,
          sent_at,
          created_at
        )
      `
      )
      .order("created_at", { ascending: false });

    if (leadError) {
      setError(leadError.message);
      setLoadingLeads(false);
      return;
    }

    setLeads(data || []);
    setLoadingLeads(false);
  }

  function updateForm(field, value) {
    setForm((current) => {
      const updated = { ...current, [field]: value };
      const score = calculateLeadScore(updated);

      return {
        ...updated,
        lead_score: score,
        offer_idea: updated.offer_idea || buildOfferIdea(updated, score),
      };
    });
  }

  function resetForm() {
    setForm(emptyForm);
    setEditingId(null);
    setShowForm(false);
    setError("");
    setSuccess("");
  }

  function startEdit(lead) {
    setEditingId(lead.id);
    setForm({
      business_name: lead.business_name || "",
      category: lead.category || "",
      contact_name: lead.contact_name || "",
      phone: lead.phone || "",
      email: lead.email || "",
      website_url: lead.website_url || "",
      google_maps_url: lead.google_maps_url || "",
      facebook_url: lead.facebook_url || "",
      yelp_url: lead.yelp_url || "",
      city: lead.city || "",
      state: lead.state || "",
      source: lead.source || "manual",
      rating: lead.rating || "",
      review_count: lead.review_count || "",
      problem_summary: lead.problem_summary || "",
      offer_idea: lead.offer_idea || "",
      estimated_offer_value: lead.estimated_offer_value || "",
      lead_score: lead.lead_score || 0,
      status: lead.status || "new",
      notes: lead.notes || "",
      next_followup_at: lead.next_followup_at
        ? lead.next_followup_at.slice(0, 16)
        : "",
    });

    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function saveLead(e) {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSuccess("");

    const score = calculateLeadScore(form);

    const payload = {
      business_name: form.business_name.trim(),
      category: form.category || null,
      contact_name: form.contact_name || null,
      phone: form.phone || null,
      email: form.email || null,
      website_url: form.website_url || null,
      google_maps_url: form.google_maps_url || null,
      facebook_url: form.facebook_url || null,
      yelp_url: form.yelp_url || null,
      city: form.city || null,
      state: form.state || null,
      source: form.source || "manual",
      rating: form.rating ? Number(form.rating) : null,
      review_count: form.review_count ? Number(form.review_count) : null,
      problem_summary: form.problem_summary || null,
      offer_idea: form.offer_idea || buildOfferIdea(form, score),
      estimated_offer_value: form.estimated_offer_value || null,
      lead_score: score,
      status: form.status || "new",
      notes: form.notes || null,
      next_followup_at: form.next_followup_at || null,
      updated_at: new Date().toISOString(),
    };

    if (!payload.business_name) {
      setError("Business name is required.");
      setSaving(false);
      return;
    }

    let result;

    if (editingId) {
      result = await supabase
        .from("lead_finder_leads")
        .update(payload)
        .eq("id", editingId)
        .select()
        .single();
    } else {
      result = await supabase
        .from("lead_finder_leads")
        .insert(payload)
        .select()
        .single();
    }

    if (result.error) {
      setError(result.error.message);
      setSaving(false);
      return;
    }

    setSuccess(editingId ? "Lead updated." : "Lead saved.");
    resetForm();
    await loadLeads();
    setSaving(false);
  }

  async function updateLeadStatus(id, status) {
    const { error: updateError } = await supabase
      .from("lead_finder_leads")
      .update({
        status,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    setLeads((current) =>
      current.map((lead) => (lead.id === id ? { ...lead, status } : lead))
    );
  }

  async function runWebsiteAudit(lead) {
    setError("");
    setSuccess("");

    if (!lead.website_url) {
      setError("This lead does not have a website URL to audit.");
      return;
    }

    setAuditingId(lead.id);

    const { data: sessionData } = await supabase.auth.getSession();
    const accessToken = sessionData?.session?.access_token;

    if (!accessToken) {
      setError("You need to sign in again before running an audit.");
      setAuditingId(null);
      return;
    }

    const response = await fetch("/api/lead-finder/audit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        website_url: lead.website_url,
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.ok) {
      setError(result.error || "Website audit failed.");
      setAuditingId(null);
      return;
    }

    const audit = result.audit;

    const { error: auditInsertError } = await supabase
      .from("lead_finder_audits")
      .insert({
        lead_id: lead.id,
        has_website: audit.has_website,
        has_https: audit.has_https,
        has_contact_form: audit.has_contact_form,
        has_booking: audit.has_booking,
        has_phone_number: audit.has_phone_number,
        has_meta_title: audit.has_meta_title,
        has_meta_description: audit.has_meta_description,
        has_favicon: audit.has_favicon,
        mobile_issue: audit.mobile_issue,
        speed_issue: audit.speed_issue,
        outdated_design: audit.outdated_design,
        issues_json: audit.issues_json,
        audit_summary: audit.audit_summary,
      });

    if (auditInsertError) {
      setError(auditInsertError.message);
      setAuditingId(null);
      return;
    }

    const newProblemSummary = lead.problem_summary
      ? `${lead.problem_summary}\n\nWebsite audit: ${audit.audit_summary}`
      : `Website audit: ${audit.audit_summary}`;

    const updatedLeadForScore = {
      ...lead,
      problem_summary: newProblemSummary,
    };

    const newScore = calculateLeadScore(updatedLeadForScore);

    const { error: leadUpdateError } = await supabase
      .from("lead_finder_leads")
      .update({
        problem_summary: newProblemSummary,
        lead_score: newScore,
        offer_idea:
          lead.offer_idea || buildOfferIdea(updatedLeadForScore, newScore),
        updated_at: new Date().toISOString(),
      })
      .eq("id", lead.id);

    if (leadUpdateError) {
      setError(leadUpdateError.message);
      setAuditingId(null);
      return;
    }

    setSuccess("Website audit complete.");
    setAuditingId(null);
    await loadLeads();
  }

  async function generateOutreachMessages(lead) {
    setError("");
    setSuccess("");
    setGeneratingId(lead.id);

    const messages = buildOutreachMessages(lead);

    const rows = messages.map((item) => ({
      lead_id: lead.id,
      channel: item.channel,
      message: item.message,
      status: item.status,
    }));

    const { error: insertError } = await supabase
      .from("lead_finder_outreach")
      .insert(rows);

    if (insertError) {
      setError(insertError.message);
      setGeneratingId(null);
      return;
    }

    setSuccess("Outreach messages generated.");
    setGeneratingId(null);
    await loadLeads();
  }

  async function deleteLead(id) {
    const confirmed = window.confirm("Delete this lead?");
    if (!confirmed) return;

    const { error: deleteError } = await supabase
      .from("lead_finder_leads")
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
      const matchesStatus = statusFilter === "all" || status === statusFilter;

      const searchable = [
        lead.business_name,
        lead.category,
        lead.contact_name,
        lead.phone,
        lead.email,
        lead.website_url,
        lead.city,
        lead.state,
        lead.problem_summary,
        lead.offer_idea,
        lead.notes,
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

  const stats = useMemo(() => {
    return {
      total: leads.length,
      newLeads: leads.filter((lead) => (lead.status || "new") === "new").length,
      contacted: leads.filter((lead) => lead.status === "contacted").length,
      interested: leads.filter((lead) => lead.status === "interested").length,
      won: leads.filter((lead) => lead.status === "won").length,
      highScore: leads.filter((lead) => Number(lead.lead_score || 0) >= 75)
        .length,
    };
  }, [leads]);

  const followUpsDue = useMemo(() => {
  const now = new Date();

  return leads
    .filter((lead) => {
      if (!lead.next_followup_at) return false;

      const followUpDate = new Date(lead.next_followup_at);
      const status = lead.status || "new";

      if (status === "won" || status === "lost") {
        return false;
      }

      return followUpDate <= now;
    })
    .sort(
      (a, b) =>
        new Date(a.next_followup_at).getTime() -
        new Date(b.next_followup_at).getTime()
    );
}, [leads]);

const upcomingFollowUps = useMemo(() => {
  const now = new Date();
  const sevenDaysFromNow = new Date();
  sevenDaysFromNow.setDate(now.getDate() + 7);

  return leads
    .filter((lead) => {
      if (!lead.next_followup_at) return false;

      const followUpDate = new Date(lead.next_followup_at);
      const status = lead.status || "new";

      if (status === "won" || status === "lost") {
        return false;
      }

      return followUpDate > now && followUpDate <= sevenDaysFromNow;
    })
    .sort(
      (a, b) =>
        new Date(a.next_followup_at).getTime() -
        new Date(b.next_followup_at).getTime()
    );
}, [leads]);

  if (loadingSession) {
    return (
      <main className="lead-finder-page">
        <style>{leadFinderStyles}</style>
        <p className="empty-box">Loading...</p>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="lead-finder-page">
        <style>{leadFinderStyles}</style>
        <section className="empty-box">
          <h1>Lead Finder CRM</h1>
          <p>You need to sign in through your admin dashboard first.</p>
          <Link href="/admin" className="primary-link">
            Go to Admin Login
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="lead-finder-page">
      <style>{leadFinderStyles}</style>

      <header className="lead-header">
        <div>
          <p className="eyebrow">matthew-web private tool</p>
          <h1>Lead Finder CRM</h1>
          <p>
            Save businesses that may need websites, software, CRMs, booking
            tools, SEO, or lead follow-up systems.
          </p>
        </div>

        <div className="header-actions">
          <Link href="/admin" className="secondary-btn">
            Main Admin
          </Link>

          <Link href="/admin/lead-finder/import" className="secondary-btn">
            Quick Import
          </Link>

          <button type="button" onClick={loadLeads}>
            Refresh
          </button>

          <button
            type="button"
            className="primary-btn"
            onClick={() => {
              setShowForm(true);
              setEditingId(null);
              setForm(emptyForm);
            }}
          >
            Add Lead
          </button>
        </div>
      </header>

      {error ? <div className="error-box">{error}</div> : null}
      {success ? <div className="success-box">{success}</div> : null}

      <section className="stats-grid">
        <div>
          <span>Total Leads</span>
          <strong>{stats.total}</strong>
        </div>
        <div>
          <span>New</span>
          <strong>{stats.newLeads}</strong>
        </div>
        <div>
          <span>Contacted</span>
          <strong>{stats.contacted}</strong>
        </div>
        <div>
          <span>Interested</span>
          <strong>{stats.interested}</strong>
        </div>
        <div>
          <span>Won</span>
          <strong>{stats.won}</strong>
        </div>
        <div>
          <span>High Score</span>
          <strong>{stats.highScore}</strong>
        </div>
      </section>

      <section className="followup-panel">
  <div className="followup-column urgent">
    <div className="followup-title-row">
      <div>
        <h2>Follow-Ups Due Now</h2>
        <p>Leads that are due today or overdue.</p>
      </div>

      <strong>{followUpsDue.length}</strong>
    </div>

    {followUpsDue.length === 0 ? (
      <p className="mini-empty">No follow-ups due right now.</p>
    ) : (
      <div className="followup-list">
        {followUpsDue.slice(0, 6).map((lead) => (
          <div className="followup-item" key={lead.id}>
            <div>
              <h3>{lead.business_name}</h3>
              <p>
                {lead.category || "Lead"}{" "}
                {lead.city || lead.state
                  ? `• ${[lead.city, lead.state].filter(Boolean).join(", ")}`
                  : ""}
              </p>
              <span>
                Due: {new Date(lead.next_followup_at).toLocaleString()}
              </span>
            </div>

            <div className="followup-actions">
              {lead.phone ? (
                <a href={`tel:${lead.phone}`}>Call</a>
              ) : null}

              {lead.email ? (
                <a href={`mailto:${lead.email}`}>Email</a>
              ) : null}

              <button type="button" onClick={() => startEdit(lead)}>
                Open
              </button>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>

  <div className="followup-column">
    <div className="followup-title-row">
      <div>
        <h2>Upcoming Follow-Ups</h2>
        <p>Follow-ups due in the next 7 days.</p>
      </div>

      <strong>{upcomingFollowUps.length}</strong>
    </div>

    {upcomingFollowUps.length === 0 ? (
      <p className="mini-empty">No upcoming follow-ups in the next week.</p>
    ) : (
      <div className="followup-list">
        {upcomingFollowUps.slice(0, 6).map((lead) => (
          <div className="followup-item" key={lead.id}>
            <div>
              <h3>{lead.business_name}</h3>
              <p>
                {lead.category || "Lead"}{" "}
                {lead.city || lead.state
                  ? `• ${[lead.city, lead.state].filter(Boolean).join(", ")}`
                  : ""}
              </p>
              <span>
                Due: {new Date(lead.next_followup_at).toLocaleString()}
              </span>
            </div>

            <div className="followup-actions">
              {lead.phone ? (
                <a href={`tel:${lead.phone}`}>Call</a>
              ) : null}

              {lead.email ? (
                <a href={`mailto:${lead.email}`}>Email</a>
              ) : null}

              <button type="button" onClick={() => startEdit(lead)}>
                Open
              </button>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
</section>

      {showForm ? (
        <section className="lead-form-card">
          <div className="form-title-row">
            <div>
              <h2>{editingId ? "Edit Lead" : "Add New Lead"}</h2>
              <p>
                Add a business from Google, Facebook, Yelp, a referral, or
                anywhere you find one.
              </p>
            </div>

            <button type="button" className="text-btn" onClick={resetForm}>
              Cancel
            </button>
          </div>

          <form onSubmit={saveLead} className="lead-form">
            <label>
              Business Name *
              <input
                value={form.business_name}
                onChange={(e) => updateForm("business_name", e.target.value)}
                required
              />
            </label>

            <label>
              Category
              <select
                value={form.category}
                onChange={(e) => updateForm("category", e.target.value)}
              >
                <option value="">Choose category</option>
                {categoryOptions.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Contact Name
              <input
                value={form.contact_name}
                onChange={(e) => updateForm("contact_name", e.target.value)}
              />
            </label>

            <label>
              Phone
              <input
                value={form.phone}
                onChange={(e) => updateForm("phone", e.target.value)}
              />
            </label>

            <label>
              Email
              <input
                type="email"
                value={form.email}
                onChange={(e) => updateForm("email", e.target.value)}
              />
            </label>

            <label>
              Website URL
              <input
                value={form.website_url}
                placeholder="https://example.com"
                onChange={(e) => updateForm("website_url", e.target.value)}
              />
            </label>

            <label>
              Google Maps URL
              <input
                value={form.google_maps_url}
                onChange={(e) => updateForm("google_maps_url", e.target.value)}
              />
            </label>

            <label>
              Facebook URL
              <input
                value={form.facebook_url}
                onChange={(e) => updateForm("facebook_url", e.target.value)}
              />
            </label>

            <label>
              Yelp URL
              <input
                value={form.yelp_url}
                onChange={(e) => updateForm("yelp_url", e.target.value)}
              />
            </label>

            <label>
              City
              <input
                value={form.city}
                onChange={(e) => updateForm("city", e.target.value)}
              />
            </label>

            <label>
              State
              <input
                value={form.state}
                onChange={(e) => updateForm("state", e.target.value)}
              />
            </label>

            <label>
              Source
              <input
                value={form.source}
                onChange={(e) => updateForm("source", e.target.value)}
              />
            </label>

            <label>
              Google Rating
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                value={form.rating}
                onChange={(e) => updateForm("rating", e.target.value)}
              />
            </label>

            <label>
              Review Count
              <input
                type="number"
                min="0"
                value={form.review_count}
                onChange={(e) => updateForm("review_count", e.target.value)}
              />
            </label>

            <label>
              Estimated Offer Value
              <input
                placeholder="$2,500–$7,500"
                value={form.estimated_offer_value}
                onChange={(e) =>
                  updateForm("estimated_offer_value", e.target.value)
                }
              />
            </label>

            <label>
              Status
              <select
                value={form.status}
                onChange={(e) => updateForm("status", e.target.value)}
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Next Follow-Up
              <input
                type="datetime-local"
                value={form.next_followup_at}
                onChange={(e) =>
                  updateForm("next_followup_at", e.target.value)
                }
              />
            </label>

            <label className="full">
              Problem Found
              <textarea
                rows="4"
                placeholder="Example: No website, old design, no booking button, weak SEO, only Facebook page..."
                value={form.problem_summary}
                onChange={(e) => updateForm("problem_summary", e.target.value)}
              />
            </label>

            <label className="full">
              Offer Idea
              <textarea
                rows="4"
                value={form.offer_idea}
                onChange={(e) => updateForm("offer_idea", e.target.value)}
              />
            </label>

            <label className="full">
              Notes
              <textarea
                rows="5"
                value={form.notes}
                onChange={(e) => updateForm("notes", e.target.value)}
              />
            </label>

            <div className="score-preview">
              <span>Lead Score</span>
              <strong>{calculateLeadScore(form)}/100</strong>
            </div>

            <button type="submit" className="primary-btn" disabled={saving}>
              {saving ? "Saving..." : editingId ? "Update Lead" : "Save Lead"}
            </button>
          </form>
        </section>
      ) : null}

      <section className="filters">
        <input
          value={search}
          placeholder="Search lead finder..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Statuses</option>
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </section>

      <section className="lead-list">
        {loadingLeads ? <p className="empty-box">Loading leads...</p> : null}

        {!loadingLeads && filteredLeads.length === 0 ? (
          <p className="empty-box">No lead finder leads yet.</p>
        ) : null}

        {!loadingLeads &&
          filteredLeads.map((lead) => (
            <article className="lead-card" key={lead.id}>
              <div className="lead-card-top">
                <div>
                  <p className="lead-category">
                    {lead.category || "No category"}{" "}
                    {lead.city || lead.state
                      ? `• ${[lead.city, lead.state]
                          .filter(Boolean)
                          .join(", ")}`
                      : ""}
                  </p>
                  <h2>{lead.business_name}</h2>
                </div>

                <div className="score-badge">
                  <span>Score</span>
                  <strong>{lead.lead_score || 0}</strong>
                </div>
              </div>

              <div className="lead-details">
                <p>
                  <strong>Phone:</strong>{" "}
                  {lead.phone ? (
                    <a href={`tel:${lead.phone}`}>{lead.phone}</a>
                  ) : (
                    "None"
                  )}
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  {lead.email ? (
                    <a href={`mailto:${lead.email}`}>{lead.email}</a>
                  ) : (
                    "None"
                  )}
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
                  <strong>Source:</strong> {lead.source || "manual"}
                </p>

                <p>
                  <strong>Follow-Up:</strong>{" "}
                  {lead.next_followup_at
                    ? new Date(lead.next_followup_at).toLocaleString()
                    : "Not set"}
                </p>
              </div>

              <div className="link-row">
                {lead.website_url ? (
                  <a href={lead.website_url} target="_blank" rel="noreferrer">
                    Website
                  </a>
                ) : null}

                {lead.google_maps_url ? (
                  <a
                    href={lead.google_maps_url}
                    target="_blank"
                    rel="noreferrer"
                  >
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

              <div className="summary-box">
                <strong>Problem Found:</strong>
                <p>{lead.problem_summary || "No problem summary added."}</p>
              </div>

              <div className="summary-box">
                <strong>Offer Idea:</strong>
                <p>{lead.offer_idea || "No offer idea added."}</p>
              </div>

              {lead.notes ? (
                <div className="summary-box">
                  <strong>Notes:</strong>
                  <p>{lead.notes}</p>
                </div>
              ) : null}

              {lead.lead_finder_outreach &&
              lead.lead_finder_outreach.length > 0 ? (
                <div className="outreach-box">
                  <strong>Outreach Messages:</strong>

                  {lead.lead_finder_outreach.map((item) => (
                    <div className="outreach-message" key={item.id}>
                      <div className="outreach-message-top">
                        <span>{item.channel}</span>
                        <button
                          type="button"
                          onClick={() =>
                            navigator.clipboard.writeText(item.message)
                          }
                        >
                          Copy
                        </button>
                      </div>

                      <pre>{item.message}</pre>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="card-actions">
                <select
                  value={lead.status || "new"}
                  onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  onClick={() => runWebsiteAudit(lead)}
                  disabled={auditingId === lead.id}
                >
                  {auditingId === lead.id ? "Auditing..." : "Run Audit"}
                </button>

                <button
                  type="button"
                  onClick={() => generateOutreachMessages(lead)}
                  disabled={generatingId === lead.id}
                >
                  {generatingId === lead.id
                    ? "Generating..."
                    : "Generate Outreach"}
                </button>

                <button type="button" onClick={() => startEdit(lead)}>
                  Edit
                </button>

                <button
                  type="button"
                  className="danger-btn"
                  onClick={() => deleteLead(lead.id)}
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
      </section>
    </main>
  );
}

const leadFinderStyles = `
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #f4f6f8;
    color: #1f2933;
    font-family: Arial, Helvetica, sans-serif;
  }

  .lead-finder-page {
    min-height: 100vh;
    background: #f4f6f8;
    padding: 36px 24px 70px;
  }

  .lead-header,
  .stats-grid,
  .lead-form-card,
  .filters,
  .lead-list,
  .error-box,
  .success-box,
  .empty-box {
    max-width: 1220px;
    margin-left: auto;
    margin-right: auto;
  }

  .lead-header {
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

  .lead-header h1 {
    margin: 0 0 10px;
    color: #f57c00;
    font-size: clamp(38px, 5vw, 58px);
    line-height: 1;
  }

  .lead-header p {
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
  .secondary-btn,
  .primary-link {
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
  .primary-btn:hover,
  .primary-link:hover {
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

  .text-btn {
    background: transparent;
    color: #0f83a6;
    padding: 0;
  }

  .text-btn:hover {
    background: transparent;
    color: #f57c00;
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

  .success-box {
    background: #dcfce7;
    color: #166534;
    border: 1px solid #bbf7d0;
    padding: 14px 18px;
    border-radius: 12px;
    font-weight: 800;
    margin-bottom: 20px;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
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
  }

  .stats-grid strong {
    display: block;
    color: #f57c00;
    font-size: 34px;
    line-height: 1;
  }

  .lead-form-card {
    background: #ffffff;
    border-radius: 22px;
    padding: 28px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    margin-bottom: 24px;
  }

  .form-title-row {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: flex-start;
    margin-bottom: 22px;
  }

  .form-title-row h2 {
    margin: 0 0 8px;
    color: #f57c00;
    font-size: 32px;
  }

  .form-title-row p {
    margin: 0;
    color: #4b5563;
    font-size: 17px;
  }

  .lead-form {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  .lead-form label {
    display: grid;
    gap: 8px;
    font-weight: 800;
    color: #374151;
  }

  .lead-form input,
  .lead-form select,
  .lead-form textarea,
  .filters input,
  .filters select,
  .card-actions select {
    width: 100%;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    padding: 13px;
    font-size: 15px;
    background: #ffffff;
    color: #111827;
  }

  .lead-form textarea {
    resize: vertical;
    font-family: Arial, Helvetica, sans-serif;
  }

  .lead-form .full {
    grid-column: 1 / -1;
  }

  .score-preview {
    background: #f8fafc;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    padding: 16px;
  }

  .score-preview span {
    display: block;
    color: #4b5563;
    font-size: 14px;
    margin-bottom: 6px;
  }

  .score-preview strong {
    color: #f57c00;
    font-size: 30px;
  }

  .filters {
    display: grid;
    grid-template-columns: 1fr 230px;
    gap: 16px;
    margin-bottom: 24px;
  }

  .lead-list {
    display: grid;
    gap: 18px;
  }

  .lead-card {
    background: #ffffff;
    border-radius: 22px;
    padding: 26px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  }

  .lead-card-top {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: flex-start;
    margin-bottom: 18px;
  }

  .lead-category {
    margin: 0 0 8px;
    color: #0f83a6;
    font-weight: 900;
  }

  .lead-card h2 {
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

  .lead-details {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px 18px;
    margin-bottom: 18px;
  }

  .lead-details p {
    margin: 0;
    color: #374151;
    line-height: 1.4;
  }

  .lead-details a,
  .link-row a {
    color: #0f83a6;
    font-weight: 800;
  }

  .link-row {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    margin-bottom: 18px;
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

  .outreach-box {
    background: #fff7ed;
    border: 1px solid #fed7aa;
    border-radius: 14px;
    padding: 15px;
    margin-bottom: 14px;
  }

  .outreach-box > strong {
    color: #111827;
    display: block;
    margin-bottom: 12px;
  }

  .outreach-message {
    background: #ffffff;
    border: 1px solid #ffedd5;
    border-radius: 12px;
    padding: 14px;
    margin-top: 12px;
  }

  .outreach-message-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    margin-bottom: 10px;
  }

  .outreach-message-top span {
    color: #f57c00;
    font-weight: 900;
    text-transform: capitalize;
  }

  .outreach-message-top button {
    padding: 8px 12px;
    font-size: 14px;
  }

  .outreach-message pre {
    white-space: pre-wrap;
    word-break: break-word;
    margin: 0;
    color: #374151;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    line-height: 1.5;
  }

  .card-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 18px;
  }

  .card-actions select {
    max-width: 220px;
  }

  .empty-box {
    background: #ffffff;
    border-radius: 18px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 8px 24px rgba(0,0,0,0.07);
  }

  .empty-box h1 {
    margin: 0 0 10px;
    color: #f57c00;
    font-size: 40px;
  }

  .empty-box p {
    color: #4b5563;
    font-size: 18px;
  }

  @media (max-width: 1050px) {
    .stats-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .lead-form {
      grid-template-columns: repeat(2, 1fr);
    }

    .lead-details {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 760px) {
    .lead-finder-page {
      padding: 24px 14px 50px;
    }

    .lead-header {
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
      grid-template-columns: repeat(2, 1fr);
    }

    .lead-form {
      grid-template-columns: 1fr;
    }

    .filters {
      grid-template-columns: 1fr;
    }

    .lead-card-top {
      flex-direction: column;
    }

    .score-badge {
      width: 100%;
    }

    .lead-details {
      grid-template-columns: 1fr;
    }

    .card-actions {
      flex-direction: column;
    }

    .card-actions select,
    .card-actions button {
      width: 100%;
      max-width: none;
    }
  }

  @media (max-width: 480px) {
    .stats-grid {
      grid-template-columns: 1fr;
    }

    .lead-form-card,
    .lead-card {
      padding: 20px;
    }
  }

    .followup-panel {
    max-width: 1220px;
    margin: 0 auto 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
  }

  .followup-column {
    background: #ffffff;
    border-radius: 20px;
    padding: 22px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    border: 1px solid #e5e7eb;
  }

  .followup-column.urgent {
    border-color: #fed7aa;
    background: #fff7ed;
  }

  .followup-title-row {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    align-items: flex-start;
    margin-bottom: 16px;
  }

  .followup-title-row h2 {
    margin: 0 0 6px;
    color: #f57c00;
    font-size: 25px;
  }

  .followup-title-row p {
    margin: 0;
    color: #4b5563;
    font-size: 15px;
    line-height: 1.4;
  }

  .followup-title-row strong {
    background: #f57c00;
    color: #ffffff;
    border-radius: 14px;
    min-width: 52px;
    height: 52px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
  }

  .mini-empty {
    margin: 0;
    background: #f8fafc;
    border-radius: 14px;
    padding: 16px;
    color: #4b5563;
    text-align: center;
  }

  .followup-list {
    display: grid;
    gap: 12px;
  }

  .followup-item {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 15px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    gap: 14px;
    align-items: flex-start;
  }

  .followup-item h3 {
    margin: 0 0 5px;
    color: #111827;
    font-size: 19px;
  }

  .followup-item p {
    margin: 0 0 6px;
    color: #0f83a6;
    font-weight: 800;
    font-size: 14px;
  }

  .followup-item span {
    color: #6b7280;
    font-size: 13px;
  }

  .followup-actions {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .followup-actions a,
  .followup-actions button {
    border: none;
    border-radius: 9px;
    background: #0f83a6;
    color: #ffffff;
    padding: 9px 12px;
    font-size: 13px;
    font-weight: 900;
    text-decoration: none;
    cursor: pointer;
  }

  .followup-actions a:hover,
  .followup-actions button:hover {
    background: #0c6d8a;
  }

  @media (max-width: 900px) {
    .followup-panel {
      grid-template-columns: 1fr;
    }

    .followup-item {
      flex-direction: column;
    }

    .followup-actions {
      justify-content: flex-start;
      width: 100%;
    }

    .followup-actions a,
    .followup-actions button {
      flex: 1;
      text-align: center;
      justify-content: center;
    }
  }
`;
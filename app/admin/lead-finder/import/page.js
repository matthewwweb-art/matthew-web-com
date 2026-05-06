"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

const emptyLead = {
  business_name: "",
  category: "",
  phone: "",
  email: "",
  website_url: "",
  google_maps_url: "",
  facebook_url: "",
  yelp_url: "",
  city: "",
  state: "",
  source: "quick import",
  rating: "",
  review_count: "",
  problem_summary: "",
  estimated_offer_value: "",
  status: "new",
  notes: "",
};

const categories = [
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

function calculateLeadScore(lead) {
  let score = 0;

  const problemText = `${lead.problem_summary || ""} ${lead.notes || ""}`.toLowerCase();
  const category = (lead.category || "").toLowerCase();
  const rating = Number(lead.rating || 0);
  const reviews = Number(lead.review_count || 0);

  if (!lead.website_url) score += 30;
  if (problemText.includes("no website")) score += 30;
  if (problemText.includes("bad website") || problemText.includes("old website")) score += 25;
  if (problemText.includes("no booking")) score += 15;
  if (problemText.includes("no contact form")) score += 15;
  if (problemText.includes("facebook only") || problemText.includes("only facebook")) score += 15;
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

function buildOfferIdea(lead, score) {
  const problemText = `${lead.problem_summary || ""} ${lead.notes || ""}`.toLowerCase();

  if (!lead.website_url || problemText.includes("no website")) {
    return "Offer a $1,500–$3,500 starter website with lead form, SEO setup, mobile layout, Google indexing, and hosting support.";
  }

  if (problemText.includes("booking")) {
    return "Offer a $2,500–$7,500 website rebuild with booking, quote form, email notifications, and lead tracking dashboard.";
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

function parseQuickPaste(text) {
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const lead = { ...emptyLead };

  for (const line of lines) {
    const lower = line.toLowerCase();

    if (!lead.website_url && line.match(/^https?:\/\//i)) {
      if (lower.includes("google.com/maps") || lower.includes("maps.app.goo.gl")) {
        lead.google_maps_url = line;
      } else if (lower.includes("facebook.com")) {
        lead.facebook_url = line;
      } else if (lower.includes("yelp.com") || lower.includes("biz.yelp.com")) {
        lead.yelp_url = line;
      } else {
        lead.website_url = line;
      }
    }

    if (!lead.phone) {
      const phoneMatch = line.match(/(\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/);
      if (phoneMatch) lead.phone = phoneMatch[0];
    }

    if (!lead.email) {
      const emailMatch = line.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
      if (emailMatch) lead.email = emailMatch[0];
    }

    if (lower.includes("no website")) {
      lead.problem_summary = "No website found.";
    }

    if (lower.includes("old website") || lower.includes("bad website")) {
      lead.problem_summary = lead.problem_summary
        ? `${lead.problem_summary} Old/bad website.`
        : "Old/bad website.";
    }

    if (lower.includes("no booking")) {
      lead.problem_summary = lead.problem_summary
        ? `${lead.problem_summary} No booking option.`
        : "No booking option.";
    }

    if (lower.includes("no contact form")) {
      lead.problem_summary = lead.problem_summary
        ? `${lead.problem_summary} No contact form.`
        : "No contact form.";
    }

    if (!lead.business_name && !line.match(/^https?:\/\//i) && !line.includes("@") && !line.match(/\d{3}/)) {
      lead.business_name = line;
    }
  }

  return lead;
}

export default function LeadImportPage() {
  const [session, setSession] = useState(null);
  const [loadingSession, setLoadingSession] = useState(true);
  const [quickPaste, setQuickPaste] = useState("");
  const [lead, setLead] = useState(emptyLead);
  const [saving, setSaving] = useState(false);
  const [savedCount, setSavedCount] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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

  const leadScore = useMemo(() => calculateLeadScore(lead), [lead]);
  const offerIdea = useMemo(() => buildOfferIdea(lead, leadScore), [lead, leadScore]);

  function updateLead(field, value) {
    setLead((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleParsePaste() {
    setError("");
    setSuccess("");

    if (!quickPaste.trim()) {
      setError("Paste business info first.");
      return;
    }

    const parsed = parseQuickPaste(quickPaste);
    setLead((current) => ({
      ...current,
      ...parsed,
      notes: quickPaste,
    }));
    setSuccess("Parsed the pasted info. Review it, then click Save Lead.");
  }

  async function saveLead(event) {
    event.preventDefault();
    setSaving(true);
    setError("");
    setSuccess("");

    if (!lead.business_name.trim()) {
      setError("Business name is required.");
      setSaving(false);
      return;
    }

    const score = calculateLeadScore(lead);

    const payload = {
      business_name: lead.business_name.trim(),
      category: lead.category || null,
      phone: lead.phone || null,
      email: lead.email || null,
      website_url: lead.website_url || null,
      google_maps_url: lead.google_maps_url || null,
      facebook_url: lead.facebook_url || null,
      yelp_url: lead.yelp_url || null,
      city: lead.city || null,
      state: lead.state || null,
      source: lead.source || "quick import",
      rating: lead.rating ? Number(lead.rating) : null,
      review_count: lead.review_count ? Number(lead.review_count) : null,
      problem_summary: lead.problem_summary || null,
      estimated_offer_value: lead.estimated_offer_value || null,
      offer_idea: offerIdea,
      lead_score: score,
      status: lead.status || "new",
      notes: lead.notes || null,
      updated_at: new Date().toISOString(),
    };

    const { error: insertError } = await supabase
      .from("lead_finder_leads")
      .insert(payload);

    if (insertError) {
      setError(insertError.message);
      setSaving(false);
      return;
    }

    setSavedCount((current) => current + 1);
    setSuccess("Lead saved to Lead Finder CRM.");
    setQuickPaste("");
    setLead(emptyLead);
    setSaving(false);
  }

  if (loadingSession) {
    return (
      <main className="import-page">
        <style>{styles}</style>
        <div className="empty-box">Loading...</div>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="import-page">
        <style>{styles}</style>
        <section className="empty-box">
          <h1>Lead Import</h1>
          <p>You need to sign in through your admin dashboard first.</p>
          <Link href="/admin" className="primary-btn">
            Go to Admin Login
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="import-page">
      <style>{styles}</style>

      <header className="import-header">
        <div>
          <p className="eyebrow">quick import</p>
          <h1>Lead Search Starter</h1>
          <p>
            Paste a business name, phone number, website, Google Maps link,
            Facebook link, or notes. The tool will turn it into a saved lead.
          </p>
        </div>

        <div className="header-actions">
          <Link href="/admin/lead-finder" className="secondary-btn">
            Back to Lead Finder
          </Link>
          <Link href="/admin" className="secondary-btn">
            Main Admin
          </Link>
        </div>
      </header>

      {error ? <div className="error-box">{error}</div> : null}
      {success ? <div className="success-box">{success}</div> : null}

      <section className="quick-grid">
        <div className="paste-card">
          <h2>Paste Lead Info</h2>
          <p>
            Example: paste a Google result, Facebook post, business card info,
            or notes you copied while researching.
          </p>

          <textarea
            value={quickPaste}
            onChange={(e) => setQuickPaste(e.target.value)}
            rows="14"
            placeholder={`Example:
Joe's Roofing
Allentown, PA
(555) 123-4567
https://joesroofing.com
4.8 stars
97 reviews
Old website, no booking, no contact form`}
          />

          <button type="button" onClick={handleParsePaste}>
            Parse Pasted Info
          </button>

          <div className="saved-count">
            Saved this session: <strong>{savedCount}</strong>
          </div>
        </div>

        <form className="lead-card" onSubmit={saveLead}>
          <div className="form-title-row">
            <div>
              <h2>Review & Save</h2>
              <p>Clean up the info before saving it.</p>
            </div>

            <div className="score-badge">
              <span>Score</span>
              <strong>{leadScore}</strong>
            </div>
          </div>

          <div className="lead-form">
            <label>
              Business Name *
              <input
                value={lead.business_name}
                onChange={(e) => updateLead("business_name", e.target.value)}
                required
              />
            </label>

            <label>
              Category
              <select
                value={lead.category}
                onChange={(e) => updateLead("category", e.target.value)}
              >
                <option value="">Choose category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Phone
              <input
                value={lead.phone}
                onChange={(e) => updateLead("phone", e.target.value)}
              />
            </label>

            <label>
              Email
              <input
                type="email"
                value={lead.email}
                onChange={(e) => updateLead("email", e.target.value)}
              />
            </label>

            <label>
              Website URL
              <input
                value={lead.website_url}
                onChange={(e) => updateLead("website_url", e.target.value)}
              />
            </label>

            <label>
              Google Maps URL
              <input
                value={lead.google_maps_url}
                onChange={(e) => updateLead("google_maps_url", e.target.value)}
              />
            </label>

            <label>
              Facebook URL
              <input
                value={lead.facebook_url}
                onChange={(e) => updateLead("facebook_url", e.target.value)}
              />
            </label>

            <label>
              Yelp URL
              <input
                value={lead.yelp_url}
                onChange={(e) => updateLead("yelp_url", e.target.value)}
              />
            </label>

            <label>
              City
              <input
                value={lead.city}
                onChange={(e) => updateLead("city", e.target.value)}
              />
            </label>

            <label>
              State
              <input
                value={lead.state}
                onChange={(e) => updateLead("state", e.target.value)}
              />
            </label>

            <label>
              Rating
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                value={lead.rating}
                onChange={(e) => updateLead("rating", e.target.value)}
              />
            </label>

            <label>
              Review Count
              <input
                type="number"
                min="0"
                value={lead.review_count}
                onChange={(e) => updateLead("review_count", e.target.value)}
              />
            </label>

            <label>
              Estimated Offer Value
              <input
                placeholder="$2,500–$7,500"
                value={lead.estimated_offer_value}
                onChange={(e) =>
                  updateLead("estimated_offer_value", e.target.value)
                }
              />
            </label>

            <label className="full">
              Problem Found
              <textarea
                rows="4"
                value={lead.problem_summary}
                onChange={(e) =>
                  updateLead("problem_summary", e.target.value)
                }
                placeholder="No website, old website, no booking, weak SEO, only Facebook page..."
              />
            </label>

            <label className="full">
              Offer Idea
              <textarea rows="4" value={offerIdea} readOnly />
            </label>

            <label className="full">
              Notes
              <textarea
                rows="5"
                value={lead.notes}
                onChange={(e) => updateLead("notes", e.target.value)}
              />
            </label>
          </div>

          <button type="submit" className="primary-btn" disabled={saving}>
            {saving ? "Saving..." : "Save Lead"}
          </button>
        </form>
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

  .import-page {
    min-height: 100vh;
    background: #f4f6f8;
    padding: 36px 24px 70px;
  }

  .import-header,
  .quick-grid,
  .error-box,
  .success-box,
  .empty-box {
    max-width: 1220px;
    margin-left: auto;
    margin-right: auto;
  }

  .import-header {
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

  .import-header h1 {
    margin: 0 0 10px;
    color: #f57c00;
    font-size: clamp(38px, 5vw, 58px);
    line-height: 1;
  }

  .import-header p {
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

  .success-box {
    background: #dcfce7;
    color: #166534;
    border: 1px solid #bbf7d0;
    padding: 14px 18px;
    border-radius: 12px;
    font-weight: 800;
    margin-bottom: 20px;
  }

  .quick-grid {
    display: grid;
    grid-template-columns: 0.9fr 1.4fr;
    gap: 22px;
  }

  .paste-card,
  .lead-card,
  .empty-box {
    background: #ffffff;
    border-radius: 22px;
    padding: 28px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  }

  .paste-card h2,
  .lead-card h2 {
    margin: 0 0 8px;
    color: #f57c00;
    font-size: 32px;
  }

  .paste-card p,
  .lead-card p {
    margin: 0 0 18px;
    color: #4b5563;
    font-size: 17px;
    line-height: 1.4;
  }

  .paste-card textarea,
  .lead-form input,
  .lead-form select,
  .lead-form textarea {
    width: 100%;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    padding: 13px;
    font-size: 15px;
    background: #ffffff;
    color: #111827;
    font-family: Arial, Helvetica, sans-serif;
  }

  .paste-card textarea {
    resize: vertical;
    min-height: 320px;
    margin-bottom: 14px;
  }

  .saved-count {
    margin-top: 18px;
    background: #f8fafc;
    border-radius: 12px;
    padding: 14px;
    color: #4b5563;
  }

  .saved-count strong {
    color: #f57c00;
    font-size: 24px;
  }

  .form-title-row {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    align-items: flex-start;
    margin-bottom: 20px;
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

  .lead-form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
    margin-bottom: 22px;
  }

  .lead-form label {
    display: grid;
    gap: 8px;
    font-weight: 800;
    color: #374151;
  }

  .lead-form .full {
    grid-column: 1 / -1;
  }

  .empty-box {
    text-align: center;
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

  @media (max-width: 980px) {
    .import-header {
      flex-direction: column;
      align-items: stretch;
    }

    .header-actions {
      justify-content: stretch;
    }

    .header-actions a {
      width: 100%;
    }

    .quick-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 620px) {
    .import-page {
      padding: 24px 14px 50px;
    }

    .paste-card,
    .lead-card,
    .empty-box {
      padding: 20px;
    }

    .lead-form {
      grid-template-columns: 1fr;
    }

    .form-title-row {
      flex-direction: column;
    }

    .score-badge {
      width: 100%;
    }
  }
`;
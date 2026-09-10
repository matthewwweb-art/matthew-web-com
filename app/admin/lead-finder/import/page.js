"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  CheckCircle2,
  ClipboardPaste,
  FileInput,
  Gauge,
  Globe2,
  Import,
  Mail,
  MapPin,
  Phone,
  RefreshCw,
  Save,
  Search,
  Star,
  Target,
} from "lucide-react";
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

  const problemText = `${lead.problem_summary || ""} ${
    lead.notes || ""
  }`.toLowerCase();

  const category = (lead.category || "").toLowerCase();
  const rating = Number(lead.rating || 0);
  const reviews = Number(lead.review_count || 0);

  if (!lead.website_url) score += 30;
  if (problemText.includes("no website")) score += 30;

  if (
    problemText.includes("bad website") ||
    problemText.includes("old website")
  ) {
    score += 25;
  }

  if (problemText.includes("no booking")) score += 15;
  if (problemText.includes("no contact form")) score += 15;

  if (
    problemText.includes("facebook only") ||
    problemText.includes("only facebook")
  ) {
    score += 15;
  }

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

  if (
    highValueCategories.some((item) =>
      category.includes(item)
    )
  ) {
    score += 15;
  }

  return Math.min(score, 100);
}

function buildOfferIdea(lead, score) {
  const problemText = `${lead.problem_summary || ""} ${
    lead.notes || ""
  }`.toLowerCase();

  if (
    !lead.website_url ||
    problemText.includes("no website")
  ) {
    return "Offer a $1,500–$3,500 starter website with lead form, SEO setup, mobile layout, Google indexing, and hosting support.";
  }

  if (problemText.includes("booking")) {
    return "Offer a $2,500–$7,500 website rebuild with booking, quote form, email notifications, and lead tracking dashboard.";
  }

  if (
    problemText.includes("crm") ||
    problemText.includes("follow up")
  ) {
    return "Offer a $5,000–$15,000 custom CRM or missed-lead follow-up system.";
  }

  if (
    problemText.includes("seo") ||
    problemText.includes("google")
  ) {
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

  const lead = {
    ...emptyLead,
  };

  for (const line of lines) {
    const lower = line.toLowerCase();

    if (
      !lead.website_url &&
      line.match(/^https?:\/\//i)
    ) {
      if (
        lower.includes("google.com/maps") ||
        lower.includes("maps.app.goo.gl")
      ) {
        lead.google_maps_url = line;
      } else if (
        lower.includes("facebook.com")
      ) {
        lead.facebook_url = line;
      } else if (
        lower.includes("yelp.com") ||
        lower.includes("biz.yelp.com")
      ) {
        lead.yelp_url = line;
      } else {
        lead.website_url = line;
      }
    }

    if (!lead.phone) {
      const phoneMatch = line.match(
        /(\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/
      );

      if (phoneMatch) {
        lead.phone = phoneMatch[0];
      }
    }

    if (!lead.email) {
      const emailMatch = line.match(
        /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i
      );

      if (emailMatch) {
        lead.email = emailMatch[0];
      }
    }

    if (lower.includes("no website")) {
      lead.problem_summary =
        "No website found.";
    }

    if (
      lower.includes("old website") ||
      lower.includes("bad website")
    ) {
      lead.problem_summary =
        lead.problem_summary
          ? `${lead.problem_summary} Old/bad website.`
          : "Old/bad website.";
    }

    if (lower.includes("no booking")) {
      lead.problem_summary =
        lead.problem_summary
          ? `${lead.problem_summary} No booking option.`
          : "No booking option.";
    }

    if (
      lower.includes("no contact form")
    ) {
      lead.problem_summary =
        lead.problem_summary
          ? `${lead.problem_summary} No contact form.`
          : "No contact form.";
    }

    if (
      !lead.business_name &&
      !line.match(/^https?:\/\//i) &&
      !line.includes("@") &&
      !line.match(/\d{3}/)
    ) {
      lead.business_name = line;
    }
  }

  return lead;
}

export default function LeadImportPage() {
  const [session, setSession] =
    useState(null);

  const [
    loadingSession,
    setLoadingSession,
  ] = useState(true);

  const [
    quickPaste,
    setQuickPaste,
  ] = useState("");

  const [lead, setLead] =
    useState(emptyLead);

  const [saving, setSaving] =
    useState(false);

  const [
    savedCount,
    setSavedCount,
  ] = useState(0);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  useEffect(() => {
    async function loadSession() {
      const { data } =
        await supabase.auth.getSession();

      setSession(
        data.session || null
      );

      setLoadingSession(false);
    }

    loadSession();

    const { data: listener } =
      supabase.auth.onAuthStateChange(
        (_event, newSession) => {
          setSession(newSession);
        }
      );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const leadScore = useMemo(
    () => calculateLeadScore(lead),
    [lead]
  );

  const offerIdea = useMemo(
    () =>
      buildOfferIdea(
        lead,
        leadScore
      ),
    [lead, leadScore]
  );

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
      setError(
        "Paste business info first."
      );

      return;
    }

    const parsed =
      parseQuickPaste(
        quickPaste
      );

    setLead((current) => ({
      ...current,
      ...parsed,
      notes: quickPaste,
    }));

    setSuccess(
      "Parsed the pasted info. Review it, then click Save Lead."
    );
  }

  function clearForm() {
    setQuickPaste("");
    setLead(emptyLead);
    setError("");
    setSuccess("");
  }

  async function saveLead(event) {
    event.preventDefault();

    setSaving(true);
    setError("");
    setSuccess("");

    if (
      !lead.business_name.trim()
    ) {
      setError(
        "Business name is required."
      );

      setSaving(false);
      return;
    }

    const score =
      calculateLeadScore(
        lead
      );

    const payload = {
      business_name:
        lead.business_name.trim(),

      category:
        lead.category ||
        null,

      phone:
        lead.phone ||
        null,

      email:
        lead.email ||
        null,

      website_url:
        lead.website_url ||
        null,

      google_maps_url:
        lead.google_maps_url ||
        null,

      facebook_url:
        lead.facebook_url ||
        null,

      yelp_url:
        lead.yelp_url ||
        null,

      city:
        lead.city ||
        null,

      state:
        lead.state ||
        null,

      source:
        lead.source ||
        "quick import",

      rating:
        lead.rating
          ? Number(
              lead.rating
            )
          : null,

      review_count:
        lead.review_count
          ? Number(
              lead.review_count
            )
          : null,

      problem_summary:
        lead.problem_summary ||
        null,

      estimated_offer_value:
        lead.estimated_offer_value ||
        null,

      offer_idea:
        offerIdea,

      lead_score:
        score,

      status:
        lead.status ||
        "new",

      notes:
        lead.notes ||
        null,

      updated_at:
        new Date().toISOString(),
    };

    const {
      error: insertError,
    } = await supabase
      .from(
        "lead_finder_leads"
      )
      .insert(payload);

    if (insertError) {
      setError(
        insertError.message
      );

      setSaving(false);
      return;
    }

    setSavedCount(
      (current) =>
        current + 1
    );

    setSuccess(
      "Lead saved to Lead Finder CRM."
    );

    setQuickPaste("");
    setLead(emptyLead);
    setSaving(false);
  }

  if (loadingSession) {
    return (
      <main className="import-page">
        <style>{styles}</style>

        <section className="empty-box">
          <div className="loading-dot" />

          <h1>
            Loading Quick Import
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
      <main className="import-page">
        <style>{styles}</style>

        <section className="empty-box">
          <Import size={42} />

          <h1>Quick Import</h1>

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
    <main className="import-page">
      <style>{styles}</style>

      <div className="import-shell">
        <header className="import-header">
          <div className="header-main">
            <div className="header-icon">
              <Import size={29} />
            </div>

            <div>
              <p className="eyebrow">
                Matthew Web • Lead Intake
              </p>

              <h1>
                Quick <span>Import</span>
              </h1>

              <p className="header-description">
                Paste business information from your research,
                automatically pull out useful details, review the
                lead, and save it directly into Lead Finder CRM.
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
              href="/admin"
              className="secondary-btn"
            >
              Mission Control
            </Link>
          </div>
        </header>

        {error ? (
          <div className="error-box">
            <strong>
              Quick Import Error
            </strong>

            <span>{error}</span>
          </div>
        ) : null}

        {success ? (
          <div className="success-box">
            <CheckCircle2 size={17} />

            <span>{success}</span>
          </div>
        ) : null}

        <section className="import-stats">
          <article className="stat-card cyan">
            <div className="stat-icon">
              <ClipboardPaste
                size={24}
                strokeWidth={2.8}
              />
            </div>

            <div>
              <span>
                Import Method
              </span>

              <strong>
                Quick Paste
              </strong>

              <small>
                Paste copied business research
              </small>
            </div>
          </article>

          <article className="stat-card orange">
            <div className="stat-icon">
              <Gauge
                size={24}
                strokeWidth={2.8}
              />
            </div>

            <div>
              <span>
                Current Score
              </span>

              <strong>
                {leadScore}
              </strong>

              <small>
                Calculated from the current lead
              </small>
            </div>
          </article>

          <article className="stat-card green">
            <div className="stat-icon">
              <Save
                size={24}
                strokeWidth={2.8}
              />
            </div>

            <div>
              <span>
                Saved This Session
              </span>

              <strong>
                {savedCount}
              </strong>

              <small>
                Leads added during this session
              </small>
            </div>
          </article>
        </section>

        <section className="section-heading">
          <div>
            <p className="eyebrow">
              Fast Lead Entry
            </p>

            <h2>
              Paste, Review, Save
            </h2>

            <p>
              The left side holds your copied research. The right
              side lets you verify and clean the information
              before anything is written to your CRM.
            </p>
          </div>

          <div className="workflow-chip">
            <FileInput size={16} />

            <span>
              Manual Review Before Save
            </span>
          </div>
        </section>

        <section className="quick-grid">
          <div className="paste-card">
            <div className="card-heading">
              <div className="card-heading-icon paste-icon">
                <ClipboardPaste
                  size={22}
                />
              </div>

              <div>
                <span>
                  STEP 1
                </span>

                <h2>
                  Paste Lead Info
                </h2>
              </div>
            </div>

            <p className="card-description">
              Paste a Google result, Facebook business listing,
              website information, business-card details, or your
              own research notes.
            </p>

            <label className="paste-label">
              <span>
                RAW BUSINESS INFORMATION
              </span>

              <textarea
                value={quickPaste}
                onChange={(e) =>
                  setQuickPaste(
                    e.target.value
                  )
                }
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
            </label>

            <div className="paste-actions">
              <button
                type="button"
                className="parse-btn"
                onClick={
                  handleParsePaste
                }
              >
                <Target size={16} />
                Parse Pasted Info
              </button>

              <button
                type="button"
                className="clear-btn"
                onClick={clearForm}
                disabled={
                  !quickPaste &&
                  lead === emptyLead
                }
              >
                Clear
              </button>
            </div>

            <div className="parser-info">
              <strong>
                Quick Parser
              </strong>

              <p>
                It looks for business name, phone, email,
                website links, Maps/Facebook/Yelp links, and
                problem phrases such as no website, old website,
                no booking, and no contact form.
              </p>
            </div>
          </div>

          <form
            className="lead-card"
            onSubmit={saveLead}
          >
            <div className="form-title-row">
              <div className="form-title-main">
                <div className="card-heading-icon review-icon">
                  <Building2 size={22} />
                </div>

                <div>
                  <span>
                    STEP 2
                  </span>

                  <h2>
                    Review & Save
                  </h2>

                  <p>
                    Clean up the information before saving it.
                  </p>
                </div>
              </div>

              <div
                className={`score-badge ${
                  leadScore >= 75
                    ? "very-hot"
                    : leadScore >= 50
                      ? "hot"
                      : ""
                }`}
              >
                <span>SCORE</span>

                <strong>
                  {leadScore}
                </strong>

                <small>
                  /100
                </small>
              </div>
            </div>

            <div className="lead-form">
              <label>
                <span>
                  Business Name *
                </span>

                <div className="input-with-icon">
                  <Building2 size={15} />

                  <input
                    value={
                      lead.business_name
                    }
                    onChange={(e) =>
                      updateLead(
                        "business_name",
                        e.target.value
                      )
                    }
                    required
                  />
                </div>
              </label>

              <label>
                <span>
                  Category
                </span>

                <select
                  value={
                    lead.category
                  }
                  onChange={(e) =>
                    updateLead(
                      "category",
                      e.target.value
                    )
                  }
                >
                  <option value="">
                    Choose category
                  </option>

                  {categories.map(
                    (category) => (
                      <option
                        key={category}
                        value={category}
                      >
                        {category}
                      </option>
                    )
                  )}
                </select>
              </label>

              <label>
                <span>
                  Phone
                </span>

                <div className="input-with-icon">
                  <Phone size={15} />

                  <input
                    value={
                      lead.phone
                    }
                    onChange={(e) =>
                      updateLead(
                        "phone",
                        e.target.value
                      )
                    }
                  />
                </div>
              </label>

              <label>
                <span>
                  Email
                </span>

                <div className="input-with-icon">
                  <Mail size={15} />

                  <input
                    type="email"
                    value={
                      lead.email
                    }
                    onChange={(e) =>
                      updateLead(
                        "email",
                        e.target.value
                      )
                    }
                  />
                </div>
              </label>

              <label>
                <span>
                  Website URL
                </span>

                <div className="input-with-icon">
                  <Globe2 size={15} />

                  <input
                    value={
                      lead.website_url
                    }
                    onChange={(e) =>
                      updateLead(
                        "website_url",
                        e.target.value
                      )
                    }
                  />
                </div>
              </label>

              <label>
                <span>
                  Google Maps URL
                </span>

                <div className="input-with-icon">
                  <MapPin size={15} />

                  <input
                    value={
                      lead.google_maps_url
                    }
                    onChange={(e) =>
                      updateLead(
                        "google_maps_url",
                        e.target.value
                      )
                    }
                  />
                </div>
              </label>

              <label>
                <span>
                  Facebook URL
                </span>

                <input
                  value={
                    lead.facebook_url
                  }
                  onChange={(e) =>
                    updateLead(
                      "facebook_url",
                      e.target.value
                    )
                  }
                />
              </label>

              <label>
                <span>
                  Yelp URL
                </span>

                <input
                  value={
                    lead.yelp_url
                  }
                  onChange={(e) =>
                    updateLead(
                      "yelp_url",
                      e.target.value
                    )
                  }
                />
              </label>

              <label>
                <span>
                  City
                </span>

                <input
                  value={
                    lead.city
                  }
                  onChange={(e) =>
                    updateLead(
                      "city",
                      e.target.value
                    )
                  }
                />
              </label>

              <label>
                <span>
                  State
                </span>

                <input
                  value={
                    lead.state
                  }
                  onChange={(e) =>
                    updateLead(
                      "state",
                      e.target.value
                    )
                  }
                />
              </label>

              <label>
                <span>
                  Rating
                </span>

                <div className="input-with-icon">
                  <Star size={15} />

                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    value={
                      lead.rating
                    }
                    onChange={(e) =>
                      updateLead(
                        "rating",
                        e.target.value
                      )
                    }
                  />
                </div>
              </label>

              <label>
                <span>
                  Review Count
                </span>

                <input
                  type="number"
                  min="0"
                  value={
                    lead.review_count
                  }
                  onChange={(e) =>
                    updateLead(
                      "review_count",
                      e.target.value
                    )
                  }
                />
              </label>

              <label className="full">
                <span>
                  Estimated Offer Value
                </span>

                <input
                  placeholder="$2,500–$7,500"
                  value={
                    lead.estimated_offer_value
                  }
                  onChange={(e) =>
                    updateLead(
                      "estimated_offer_value",
                      e.target.value
                    )
                  }
                />
              </label>

              <label className="full">
                <span>
                  Problem Found
                </span>

                <textarea
                  rows="4"
                  value={
                    lead.problem_summary
                  }
                  onChange={(e) =>
                    updateLead(
                      "problem_summary",
                      e.target.value
                    )
                  }
                  placeholder="No website, old website, no booking, weak SEO, only Facebook page..."
                />
              </label>

              <label className="full">
                <span>
                  Suggested Offer Idea
                </span>

                <textarea
                  rows="4"
                  value={offerIdea}
                  readOnly
                  className="readonly-field"
                />
              </label>

              <label className="full">
                <span>
                  Notes
                </span>

                <textarea
                  rows="5"
                  value={
                    lead.notes
                  }
                  onChange={(e) =>
                    updateLead(
                      "notes",
                      e.target.value
                    )
                  }
                />
              </label>
            </div>

            <div className="save-area">
              <div className="save-preview">
                <CheckCircle2 size={18} />

                <div>
                  <strong>
                    Ready for CRM
                  </strong>

                  <span>
                    Review the fields above before saving.
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="save-lead-btn"
                disabled={saving}
              >
                {saving ? (
                  <>
                    <RefreshCw
                      size={16}
                      className="spin"
                    />

                    Saving Lead
                  </>
                ) : (
                  <>
                    <Save size={16} />
                    Save Lead
                  </>
                )}
              </button>
            </div>
          </form>
        </section>
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
  input,
  select,
  textarea {
    font: inherit;
  }

  a,
  button,
  input,
  select,
  textarea {
    -webkit-tap-highlight-color: transparent;
  }

  .import-page {
    position: relative;
    min-height: 100vh;
    overflow-x: hidden;
    background:
      radial-gradient(
        circle at 8% -5%,
        rgba(0, 194, 255, 0.13),
        transparent 30%
      ),
      radial-gradient(
        circle at 96% 2%,
        rgba(255, 128, 0, 0.11),
        transparent 28%
      ),
      linear-gradient(
        180deg,
        #06090f 0%,
        #05070b 50%,
        #06080d 100%
      );
  }

  .import-page::before {
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

  .import-shell {
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

  .import-header {
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
        #28d5f2,
        #087ef6
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

  .import-header h1 {
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

  .import-header h1 span {
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
  }

  .primary-btn:hover {
    transform: translateY(-1px);
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

  /* =========================================================
     ALERTS
  ========================================================= */

  .error-box,
  .success-box {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 15px;
    padding: 14px 16px;
    border-radius: 13px;
    font-size: 12px;
  }

  .error-box {
    display: grid;
    gap: 4px;
    color: #ffb2b2;
    background: rgba(129, 24, 24, 0.19);
    border: 1px solid rgba(255, 75, 75, 0.3);
  }

  .error-box strong {
    color: #ff7474;
  }

  .success-box {
    color: #94edba;
    background: rgba(25, 120, 67, 0.13);
    border: 1px solid rgba(65, 219, 132, 0.25);
    font-weight: 800;
  }

  /* =========================================================
     STATS
  ========================================================= */

  .import-stats {
    display: grid;
    grid-template-columns:
      repeat(3, minmax(0, 1fr));
    gap: 11px;
    margin-bottom: 27px;
  }

  .stat-card {
    --stat-accent: #29d0f1;

    min-width: 0;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 17px;
    border: 1px solid #1c2938;
    border-radius: 17px;
    background:
      linear-gradient(
        145deg,
        #0e151e,
        #090e15
      );
  }

  .stat-card.cyan {
    --stat-accent: #29d0f1;
  }

  .stat-card.orange {
    --stat-accent: #ff8b00;
  }

  .stat-card.green {
    --stat-accent: #49df91;
  }

  .stat-icon {
    flex: 0 0 auto;
    width: 50px;
    height: 50px;
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
    margin-bottom: 4px;
    color: #8998aa;
    font-size: 8px;
    font-weight: 1000;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .stat-card strong {
    display: block;
    color: #ffffff;
    font-size: 26px;
    line-height: 1;
    letter-spacing: -0.03em;
    overflow-wrap: anywhere;
  }

  .stat-card small {
    display: block;
    margin-top: 6px;
    color: #637286;
    font-size: 8px;
    line-height: 1.35;
  }

  /* =========================================================
     HEADING
  ========================================================= */

  .section-heading {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 24px;
    margin-bottom: 14px;
  }

  .section-heading h2 {
    margin: 0 0 6px;
    color: #f5f8fb;
    font-size: 29px;
    letter-spacing: -0.035em;
  }

  .section-heading p:not(.eyebrow) {
    max-width: 760px;
    margin: 0;
    color: #758397;
    font-size: 11px;
    line-height: 1.5;
  }

  .workflow-chip {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 9px 11px;
    border: 1px solid #263a4c;
    border-radius: 10px;
    color: #85e4f7;
    background: #09141d;
  }

  .workflow-chip span {
    font-size: 8px;
    font-weight: 900;
    text-transform: uppercase;
  }

  /* =========================================================
     MAIN GRID
  ========================================================= */

  .quick-grid {
    display: grid;
    grid-template-columns:
      minmax(330px, 0.85fr)
      minmax(0, 1.45fr);
    gap: 14px;
    align-items: start;
  }

  .paste-card,
  .lead-card {
    min-width: 0;
    padding: 20px;
    border: 1px solid #1c2939;
    border-radius: 20px;
    background:
      linear-gradient(
        145deg,
        rgba(14, 21, 30, 0.99),
        rgba(8, 13, 20, 0.99)
      );
    box-shadow:
      0 14px 34px rgba(0, 0, 0, 0.16);
  }

  .paste-card {
    position: sticky;
    top: 16px;
  }

  .card-heading {
    display: flex;
    align-items: center;
    gap: 11px;
    margin-bottom: 9px;
  }

  .card-heading-icon {
    flex: 0 0 auto;
    width: 43px;
    height: 43px;
    display: grid;
    place-items: center;
    border-radius: 12px;
    color: #05090d;
  }

  .paste-icon {
    background: #29d0f1;
  }

  .review-icon {
    background: #ff8b00;
  }

  .card-heading span,
  .form-title-main span {
    display: block;
    margin-bottom: 3px;
    color: #68798d;
    font-size: 7px;
    font-weight: 1000;
    letter-spacing: 0.1em;
  }

  .paste-card h2,
  .lead-card h2 {
    margin: 0;
    color: #f5f8fb;
    font-size: 23px;
    letter-spacing: -0.03em;
  }

  .card-description {
    margin: 0 0 14px;
    color: #748397;
    font-size: 10px;
    line-height: 1.5;
  }

  /* =========================================================
     PASTE SIDE
  ========================================================= */

  .paste-label {
    display: grid;
    gap: 6px;
  }

  .paste-label > span {
    color: #6f8094;
    font-size: 7px;
    font-weight: 1000;
    letter-spacing: 0.08em;
  }

  .paste-card textarea {
    width: 100%;
    min-height: 340px;
    resize: vertical;
    border: 1px solid #29394c;
    border-radius: 12px;
    outline: none;
    padding: 13px;
    color: #dbe5ed;
    background: #070c12;
    font-size: 11px;
    line-height: 1.55;
  }

  .paste-card textarea:focus {
    border-color: #29c9ed;
    box-shadow:
      0 0 0 3px
      rgba(41, 201, 237, 0.07);
  }

  .paste-card textarea::placeholder {
    color: #4d5b6c;
  }

  .paste-actions {
    display: grid;
    grid-template-columns:
      minmax(0, 1fr)
      auto;
    gap: 7px;
    margin-top: 9px;
  }

  .parse-btn,
  .clear-btn {
    min-height: 41px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    border-radius: 9px;
    cursor: pointer;
    font-size: 9px;
    font-weight: 900;
  }

  .parse-btn {
    border: 1px solid transparent;
    color: #ffffff;
    background:
      linear-gradient(
        135deg,
        #ff8b00,
        #ff6200
      );
  }

  .parse-btn:hover {
    filter: brightness(1.08);
  }

  .clear-btn {
    padding: 0 13px;
    border: 1px solid #2a3b4c;
    color: #95a5b7;
    background: #0a1119;
  }

  .clear-btn:hover:not(:disabled) {
    color: #ffffff;
    border-color: #526277;
  }

  .parser-info {
    margin-top: 13px;
    padding: 11px;
    border: 1px solid #1b2c3b;
    border-radius: 10px;
    background: #08111a;
  }

  .parser-info strong {
    display: block;
    margin-bottom: 4px;
    color: #73def3;
    font-size: 9px;
  }

  .parser-info p {
    margin: 0;
    color: #637387;
    font-size: 8px;
    line-height: 1.5;
  }

  /* =========================================================
     FORM HEADER
  ========================================================= */

  .form-title-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 16px;
    padding-bottom: 14px;
    border-bottom: 1px solid #192536;
  }

  .form-title-main {
    min-width: 0;
    display: flex;
    align-items: flex-start;
    gap: 11px;
  }

  .form-title-main p {
    margin: 5px 0 0;
    color: #718195;
    font-size: 9px;
  }

  .score-badge {
    flex: 0 0 auto;
    min-width: 76px;
    padding: 9px;
    border: 1px solid #2b3b4d;
    border-radius: 12px;
    background: #090f16;
    text-align: center;
  }

  .score-badge span {
    display: block;
    margin-bottom: 2px;
    color: #657487;
    font-size: 6px;
    font-weight: 1000;
    letter-spacing: 0.08em;
  }

  .score-badge strong {
    color: #98a7b7;
    font-size: 27px;
    line-height: 1;
  }

  .score-badge small {
    color: #59697b;
    font-size: 7px;
  }

  .score-badge.hot {
    border-color:
      rgba(
        255,
        139,
        0,
        0.3
      );
    background:
      rgba(
        255,
        128,
        0,
        0.06
      );
  }

  .score-badge.hot strong {
    color: #ff9b34;
  }

  .score-badge.very-hot {
    border-color:
      rgba(
        255,
        85,
        85,
        0.35
      );
    background:
      rgba(
        255,
        61,
        61,
        0.065
      );
  }

  .score-badge.very-hot strong {
    color: #ff7070;
  }

  /* =========================================================
     FORM
  ========================================================= */

  .lead-form {
    display: grid;
    grid-template-columns:
      repeat(
        2,
        minmax(0, 1fr)
      );
    gap: 11px;
  }

  .lead-form label {
    min-width: 0;
    display: grid;
    gap: 6px;
  }

  .lead-form label > span {
    color: #8998aa;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 0.04em;
  }

  .lead-form .full {
    grid-column:
      1 / -1;
  }

  .lead-form input,
  .lead-form select,
  .lead-form textarea {
    width: 100%;
    border: 1px solid #29394c;
    border-radius: 10px;
    outline: none;
    padding: 10px 11px;
    color: #dfe7ee;
    background: #070c12;
    font-size: 10px;
  }

  .lead-form input,
  .lead-form select {
    min-height: 41px;
  }

  .lead-form textarea {
    min-height: 92px;
    resize: vertical;
    line-height: 1.5;
  }

  .lead-form input:focus,
  .lead-form select:focus,
  .lead-form textarea:focus {
    border-color: #29c9ed;
    box-shadow:
      0 0 0 3px
      rgba(41, 201, 237, 0.07);
  }

  .lead-form input::placeholder,
  .lead-form textarea::placeholder {
    color: #4c5a6b;
  }

  .input-with-icon {
    min-height: 41px;
    display: flex;
    align-items: center;
    gap: 7px;
    padding-left: 10px;
    border: 1px solid #29394c;
    border-radius: 10px;
    color: #30cde9;
    background: #070c12;
  }

  .input-with-icon:focus-within {
    border-color: #29c9ed;
    box-shadow:
      0 0 0 3px
      rgba(41, 201, 237, 0.07);
  }

  .input-with-icon svg {
    flex: 0 0 auto;
  }

  .input-with-icon input {
    min-height: 39px;
    border: none;
    padding-left: 0;
    box-shadow: none !important;
    background: transparent;
  }

  .readonly-field {
    color: #aab7c3 !important;
    border-color:
      rgba(
        255,
        139,
        0,
        0.18
      ) !important;
    background:
      rgba(
        255,
        127,
        0,
        0.035
      ) !important;
  }

  /* =========================================================
     SAVE AREA
  ========================================================= */

  .save-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 13px;
    margin-top: 15px;
    padding-top: 13px;
    border-top: 1px solid #192536;
  }

  .save-preview {
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #49df91;
  }

  .save-preview > div {
    display: grid;
    gap: 2px;
  }

  .save-preview strong {
    color: #a8b5c2;
    font-size: 9px;
  }

  .save-preview span {
    color: #5c6c80;
    font-size: 7px;
  }

  .save-lead-btn {
    min-height: 42px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 0 15px;
    border: 1px solid transparent;
    border-radius: 10px;
    color: #ffffff;
    background:
      linear-gradient(
        135deg,
        #ff8b00,
        #ff6200
      );
    cursor: pointer;
    font-size: 9px;
    font-weight: 900;
    box-shadow:
      0 8px 20px
      rgba(
        255,
        105,
        0,
        0.13
      );
  }

  .save-lead-btn:hover:not(:disabled) {
    filter: brightness(1.08);
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* =========================================================
     EMPTY / LOADING
  ========================================================= */

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
      0 25px 60px
      rgba(
        0,
        0,
        0,
        0.3
      );
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
    color: #7e8da0;
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
      0 0 18px
      rgba(
        40,
        201,
        239,
        0.75
      );
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
      transform:
        rotate(360deg);
    }
  }

  @keyframes pulse {
    from {
      opacity: 0.35;
      transform:
        scale(0.8);
    }

    to {
      opacity: 1;
      transform:
        scale(1.1);
    }
  }

  /* =========================================================
     RESPONSIVE
  ========================================================= */

  @media (max-width: 1120px) {
    .import-header {
      flex-direction: column;
      align-items: stretch;
    }

    .header-actions {
      justify-content: flex-start;
    }

    .quick-grid {
      grid-template-columns: 1fr;
    }

    .paste-card {
      position: static;
    }
  }

  @media (max-width: 850px) {
    .import-stats {
      grid-template-columns: 1fr;
    }

    .section-heading {
      flex-direction: column;
      align-items: flex-start;
    }

    .workflow-chip {
      width: 100%;
      justify-content: center;
    }
  }

  @media (max-width: 680px) {
    .import-shell {
      width:
        calc(
          100% - 20px
        );
      padding-top: 10px;
    }

    .import-header {
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

    .import-header h1 {
      font-size: 35px;
    }

    .header-description {
      font-size: 12px;
    }

    .header-actions {
      display: grid;
      grid-template-columns:
        repeat(
          2,
          minmax(
            0,
            1fr
          )
        );
    }

    .header-actions a {
      width: 100%;
    }

    .paste-card,
    .lead-card {
      padding: 16px;
    }

    .lead-form {
      grid-template-columns: 1fr;
    }

    .lead-form .full {
      grid-column: auto;
    }

    .form-title-row {
      flex-direction: column;
    }

    .score-badge {
      width: 100%;
    }

    .save-area {
      flex-direction: column;
      align-items: stretch;
    }

    .save-lead-btn {
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

    .import-header h1 {
      font-size: 32px;
    }

    .stat-card {
      align-items: center;
    }

    .stat-icon {
      width: 50px;
      height: 50px;
    }

    .paste-actions {
      grid-template-columns: 1fr;
    }

    .clear-btn {
      width: 100%;
    }
  }
`;
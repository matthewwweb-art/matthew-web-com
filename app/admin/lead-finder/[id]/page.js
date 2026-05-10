"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
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

const activityOptions = [
  "note",
  "call",
  "email",
  "facebook dm",
  "quote sent",
  "follow up",
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
  return String(status || "new")
    .split(" ")
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(" ");
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
    { channel: "facebook dm", message: facebookDm, status: "draft" },
    {
      channel: "email",
      message: `Subject: ${emailSubject}\n\n${emailMessage}`,
      status: "draft",
    },
    { channel: "phone script", message: phoneScript, status: "draft" },
    { channel: "follow up", message: followUpMessage, status: "draft" },
  ];
}

export default function LeadDetailPage() {
  const params = useParams();
  const leadId = params?.id;

  const [session, setSession] = useState(null);
  const [loadingSession, setLoadingSession] = useState(true);
  const [loadingLead, setLoadingLead] = useState(false);
  const [lead, setLead] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [savingStatus, setSavingStatus] = useState(false);
  const [savingFollowUp, setSavingFollowUp] = useState(false);
  const [savingActivity, setSavingActivity] = useState(false);
  const [deletingActivityId, setDeletingActivityId] = useState(null);
  const [generating, setGenerating] = useState(false);
  const [generatingAi, setGeneratingAi] = useState(false);
  const [auditing, setAuditing] = useState(false);

  const [status, setStatus] = useState("new");
  const [nextFollowUp, setNextFollowUp] = useState("");
  const [activityType, setActivityType] = useState("note");
  const [activityText, setActivityText] = useState("");

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
    if (session && leadId) {
      loadLead();
    }
  }, [session, leadId]);

  async function loadLead() {
    setLoadingLead(true);
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
        ),
        lead_finder_activities (
          id,
          activity_type,
          activity_text,
          created_at
        ),
        lead_finder_audits (
          id,
          audit_summary,
          issues_json,
          has_website,
          has_https,
          has_contact_form,
          has_booking,
          has_phone_number,
          has_meta_title,
          has_meta_description,
          has_favicon,
          created_at
        )
      `
      )
      .eq("id", leadId)
      .single();

    if (leadError) {
      setError(leadError.message);
      setLoadingLead(false);
      return;
    }

    setLead(data);
    setStatus(data.status || "new");
    setNextFollowUp(
      data.next_followup_at ? data.next_followup_at.slice(0, 16) : ""
    );
    setLoadingLead(false);
  }

  async function updateStatus() {
    if (!lead) return;

    setSavingStatus(true);
    setError("");
    setSuccess("");

    const { error: updateError } = await supabase
      .from("lead_finder_leads")
      .update({
        status,
        updated_at: new Date().toISOString(),
      })
      .eq("id", lead.id);

    if (updateError) {
      setError(updateError.message);
      setSavingStatus(false);
      return;
    }

    await supabase.from("lead_finder_activities").insert({
      lead_id: lead.id,
      activity_type: status,
      activity_text: `Status changed to ${prettyStatus(status)}.`,
    });

    setSuccess("Status updated.");
    setSavingStatus(false);
    await loadLead();
  }

  async function updateFollowUp() {
    if (!lead) return;

    setSavingFollowUp(true);
    setError("");
    setSuccess("");

    const { error: updateError } = await supabase
      .from("lead_finder_leads")
      .update({
        next_followup_at: nextFollowUp || null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", lead.id);

    if (updateError) {
      setError(updateError.message);
      setSavingFollowUp(false);
      return;
    }

    await supabase.from("lead_finder_activities").insert({
      lead_id: lead.id,
      activity_type: "follow up",
      activity_text: nextFollowUp
        ? `Follow-up set for ${new Date(nextFollowUp).toLocaleString()}.`
        : "Follow-up date cleared.",
    });

    setSuccess("Follow-up updated.");
    setSavingFollowUp(false);
    await loadLead();
  }

  async function addActivity() {
    if (!lead) return;

    if (!activityText.trim()) {
      setError("Activity text is required.");
      return;
    }

    setSavingActivity(true);
    setError("");
    setSuccess("");

    const { error: insertError } = await supabase
      .from("lead_finder_activities")
      .insert({
        lead_id: lead.id,
        activity_type: activityType || "note",
        activity_text: activityText.trim(),
      });

    if (insertError) {
      setError(insertError.message);
      setSavingActivity(false);
      return;
    }

    setActivityType("note");
    setActivityText("");
    setSuccess("Activity added.");
    setSavingActivity(false);
    await loadLead();
  }

  async function deleteActivity(activityId) {
    const confirmed = window.confirm("Delete this activity?");
    if (!confirmed) return;

    setDeletingActivityId(activityId);
    setError("");
    setSuccess("");

    const { error: deleteError } = await supabase
      .from("lead_finder_activities")
      .delete()
      .eq("id", activityId);

    if (deleteError) {
      setError(deleteError.message);
      setDeletingActivityId(null);
      return;
    }

    setSuccess("Activity deleted.");
    setDeletingActivityId(null);
    await loadLead();
  }

  async function generateOutreach() {
    if (!lead) return;

    setGenerating(true);
    setError("");
    setSuccess("");

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
      setGenerating(false);
      return;
    }

    await supabase.from("lead_finder_activities").insert({
      lead_id: lead.id,
      activity_type: "note",
      activity_text: "Template outreach messages generated.",
    });

    setSuccess("Template outreach messages generated.");
    setGenerating(false);
    await loadLead();
  }

  async function generateAiOutreach() {
    if (!lead) return;

    setGeneratingAi(true);
    setError("");
    setSuccess("");

    const { data: sessionData } = await supabase.auth.getSession();
    const accessToken = sessionData?.session?.access_token;

    if (!accessToken) {
      setError("You need to sign in again before generating AI outreach.");
      setGeneratingAi(false);
      return;
    }

    const response = await fetch("/api/lead-finder/ai-outreach", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ lead }),
    });

    const result = await response.json();

    if (!response.ok || !result.ok) {
      setError(result.error || "AI outreach failed.");
      setGeneratingAi(false);
      return;
    }

    const outreach = result.outreach || {};

    const rows = [
      {
        lead_id: lead.id,
        channel: "ai facebook dm",
        message: outreach.facebook_dm || "",
        status: "draft",
      },
      {
        lead_id: lead.id,
        channel: "ai email",
        message: `Subject: ${outreach.email_subject || "Quick idea"}\n\n${
          outreach.email_message || ""
        }`,
        status: "draft",
      },
      {
        lead_id: lead.id,
        channel: "ai phone script",
        message: outreach.phone_script || "",
        status: "draft",
      },
      {
        lead_id: lead.id,
        channel: "ai follow up",
        message: outreach.follow_up || "",
        status: "draft",
      },
    ].filter((row) => row.message.trim());

    if (rows.length === 0) {
      setError("AI did not return any outreach messages.");
      setGeneratingAi(false);
      return;
    }

    const { error: insertError } = await supabase
      .from("lead_finder_outreach")
      .insert(rows);

    if (insertError) {
      setError(insertError.message);
      setGeneratingAi(false);
      return;
    }

    await supabase.from("lead_finder_activities").insert({
      lead_id: lead.id,
      activity_type: "note",
      activity_text: `AI outreach generated.

Sales angle: ${outreach.sales_angle || "Not provided"}

Recommended offer: ${outreach.recommended_offer || "Not provided"}`,
    });

    setSuccess("AI outreach generated.");
    setGeneratingAi(false);
    await loadLead();
  }

  async function runWebsiteAudit() {
    if (!lead) return;

    setError("");
    setSuccess("");

    if (!lead.website_url) {
      setError("This lead does not have a website URL to audit.");
      return;
    }

    setAuditing(true);

    const { data: sessionData } = await supabase.auth.getSession();
    const accessToken = sessionData?.session?.access_token;

    if (!accessToken) {
      setError("You need to sign in again before running an audit.");
      setAuditing(false);
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
      setAuditing(false);
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
      setAuditing(false);
      return;
    }

    const newProblemSummary = lead.problem_summary
      ? `${lead.problem_summary}\n\nWebsite audit: ${audit.audit_summary}`
      : `Website audit: ${audit.audit_summary}`;

    const { error: leadUpdateError } = await supabase
      .from("lead_finder_leads")
      .update({
        problem_summary: newProblemSummary,
        updated_at: new Date().toISOString(),
      })
      .eq("id", lead.id);

    if (leadUpdateError) {
      setError(leadUpdateError.message);
      setAuditing(false);
      return;
    }

    await supabase.from("lead_finder_activities").insert({
      lead_id: lead.id,
      activity_type: "note",
      activity_text: `Website audit completed. ${audit.audit_summary}`,
    });

    setSuccess("Website audit complete.");
    setAuditing(false);
    await loadLead();
  }

  const sortedActivities = useMemo(() => {
    return [...(lead?.lead_finder_activities || [])].sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
  }, [lead]);

  const sortedAudits = useMemo(() => {
    return [...(lead?.lead_finder_audits || [])].sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
  }, [lead]);

  const averageValue = parseEstimatedValue(lead?.estimated_offer_value);

  if (loadingSession) {
    return (
      <main className="detail-page">
        <style>{styles}</style>
        <div className="empty-box">Loading...</div>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="detail-page">
        <style>{styles}</style>
        <section className="empty-box">
          <h1>Lead Detail</h1>
          <p>You need to sign in through your admin dashboard first.</p>
          <Link href="/admin" className="primary-btn">
            Go to Admin Login
          </Link>
        </section>
      </main>
    );
  }

  if (loadingLead) {
    return (
      <main className="detail-page">
        <style>{styles}</style>
        <div className="empty-box">Loading lead...</div>
      </main>
    );
  }

  if (!lead) {
    return (
      <main className="detail-page">
        <style>{styles}</style>
        <section className="empty-box">
          <h1>Lead Not Found</h1>
          <Link href="/admin/lead-finder" className="primary-btn">
            Back to Lead Finder
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="detail-page">
      <style>{styles}</style>

      <header className="detail-header">
        <div>
          <p className="eyebrow">lead detail</p>
          <h1>{lead.business_name}</h1>
          <p>
            {lead.category || "No category"}{" "}
            {lead.city || lead.state
              ? `• ${[lead.city, lead.state].filter(Boolean).join(", ")}`
              : ""}
          </p>
        </div>

        <div className="header-actions">
          <Link href="/admin/lead-finder" className="secondary-btn">
            Back to CRM
          </Link>

          <Link href="/admin/lead-finder/board" className="secondary-btn">
            Pipeline Board
          </Link>

          <Link href="/admin/lead-finder/hot" className="secondary-btn">
            Hot Leads
          </Link>

          <button type="button" onClick={loadLead}>
            Refresh
          </button>
        </div>
      </header>

      {error ? <div className="error-box">{error}</div> : null}
      {success ? <div className="success-box">{success}</div> : null}

      <section className="score-grid">
        <div>
          <span>Lead Score</span>
          <strong>{lead.lead_score || 0}/100</strong>
        </div>

        <div>
          <span>Status</span>
          <strong>{prettyStatus(lead.status)}</strong>
        </div>

        <div>
          <span>Estimated Value</span>
          <strong>{averageValue ? formatMoney(averageValue) : "Not Set"}</strong>
        </div>
      </section>

      <section className="detail-grid">
        <div className="main-column">
          <section className="card">
            <h2>Lead Information</h2>

            <div className="info-grid">
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
                <strong>Contact:</strong> {lead.contact_name || "None"}
              </p>

              <p>
                <strong>Rating:</strong>{" "}
                {lead.rating ? `${lead.rating} stars` : "Unknown"}
              </p>

              <p>
                <strong>Reviews:</strong> {lead.review_count || "Unknown"}
              </p>

              <p>
                <strong>Source:</strong> {lead.source || "manual"}
              </p>

              <p>
                <strong>Offer Value:</strong>{" "}
                {lead.estimated_offer_value || "Not set"}
              </p>

              <p>
                <strong>Created:</strong>{" "}
                {lead.created_at
                  ? new Date(lead.created_at).toLocaleString()
                  : "Unknown"}
              </p>
            </div>

            <div className="link-row">
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
          </section>

          <section className="card">
            <h2>Problem Found</h2>
            <p className="big-text">
              {lead.problem_summary || "No problem summary added."}
            </p>
          </section>

          <section className="card">
            <h2>Offer Idea</h2>
            <p className="big-text">{lead.offer_idea || "No offer idea added."}</p>
          </section>

          {lead.notes ? (
            <section className="card">
              <h2>Notes</h2>
              <p className="big-text">{lead.notes}</p>
            </section>
          ) : null}

          <section className="card">
            <div className="section-title-row">
              <div>
                <h2>Outreach Messages</h2>
                <p>
                  Generate and copy template or AI messages for DMs, email,
                  calls, and follow-up.
                </p>
              </div>

              <div className="button-row">
                <button
                  type="button"
                  onClick={generateOutreach}
                  disabled={generating}
                >
                  {generating ? "Generating..." : "Template Outreach"}
                </button>

                <button
                  type="button"
                  onClick={generateAiOutreach}
                  disabled={generatingAi}
                >
                  {generatingAi ? "Thinking..." : "AI Outreach"}
                </button>
              </div>
            </div>

            {lead.lead_finder_outreach &&
            lead.lead_finder_outreach.length > 0 ? (
              <div className="outreach-list">
                {lead.lead_finder_outreach.map((item) => (
                  <div className="outreach-message" key={item.id}>
                    <div className="outreach-message-top">
                      <span>{item.channel}</span>
                      <button
                        type="button"
                        onClick={() => navigator.clipboard.writeText(item.message)}
                      >
                        Copy
                      </button>
                    </div>

                    <pre>{item.message}</pre>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mini-empty">No outreach messages generated yet.</p>
            )}
          </section>

          <section className="card">
            <div className="section-title-row">
              <div>
                <h2>Website Audits</h2>
                <p>Run a website audit and save the results to this lead.</p>
              </div>

              <button type="button" onClick={runWebsiteAudit} disabled={auditing}>
                {auditing ? "Auditing..." : "Run Audit"}
              </button>
            </div>

            {sortedAudits.length > 0 ? (
              <div className="audit-list">
                {sortedAudits.map((audit) => (
                  <div className="audit-item" key={audit.id}>
                    <strong>{audit.audit_summary || "Website audit saved."}</strong>

                    <div className="audit-checks">
                      <span>HTTPS: {audit.has_https ? "Yes" : "No"}</span>
                      <span>Title: {audit.has_meta_title ? "Yes" : "No"}</span>
                      <span>
                        Description: {audit.has_meta_description ? "Yes" : "No"}
                      </span>
                      <span>Form: {audit.has_contact_form ? "Yes" : "No"}</span>
                      <span>Booking: {audit.has_booking ? "Yes" : "No"}</span>
                      <span>Phone: {audit.has_phone_number ? "Yes" : "No"}</span>
                      <span>Favicon: {audit.has_favicon ? "Yes" : "No"}</span>
                    </div>

                    <small>
                      {audit.created_at
                        ? new Date(audit.created_at).toLocaleString()
                        : ""}
                    </small>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mini-empty">No website audits yet.</p>
            )}
          </section>
        </div>

        <aside className="side-column">
          <section className="card">
            <h2>Quick Controls</h2>

            <label className="control-label">
              Status
              <select value={status} onChange={(e) => setStatus(e.target.value)}>
                {statusOptions.map((option) => (
                  <option key={option} value={option}>
                    {prettyStatus(option)}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="button"
              onClick={updateStatus}
              disabled={savingStatus}
              className="full-btn"
            >
              {savingStatus ? "Saving..." : "Save Status"}
            </button>

            <label className="control-label">
              Next Follow-Up
              <input
                type="datetime-local"
                value={nextFollowUp}
                onChange={(e) => setNextFollowUp(e.target.value)}
              />
            </label>

            <button
              type="button"
              onClick={updateFollowUp}
              disabled={savingFollowUp}
              className="full-btn"
            >
              {savingFollowUp ? "Saving..." : "Save Follow-Up"}
            </button>

            <Link href="/admin/lead-finder" className="secondary-btn full-btn">
              Edit Full Lead
            </Link>
          </section>

          <section className="card">
            <h2>Add Activity</h2>

            <label className="control-label">
              Type
              <select
                value={activityType}
                onChange={(e) => setActivityType(e.target.value)}
              >
                {activityOptions.map((option) => (
                  <option key={option} value={option}>
                    {prettyStatus(option)}
                  </option>
                ))}
              </select>
            </label>

            <label className="control-label">
              Activity Note
              <textarea
                rows="5"
                value={activityText}
                placeholder="Example: Called and left voicemail. Follow up Friday."
                onChange={(e) => setActivityText(e.target.value)}
              />
            </label>

            <button
              type="button"
              onClick={addActivity}
              disabled={savingActivity}
              className="full-btn"
            >
              {savingActivity ? "Saving..." : "Add Activity"}
            </button>
          </section>

          <section className="card">
            <h2>Activity Timeline</h2>

            {sortedActivities.length > 0 ? (
              <div className="activity-list">
                {sortedActivities.map((activity) => (
                  <div className="activity-item" key={activity.id}>
                    <span>{prettyStatus(activity.activity_type)}</span>
                    <p>{activity.activity_text}</p>
                    <small>
                      {activity.created_at
                        ? new Date(activity.created_at).toLocaleString()
                        : ""}
                    </small>

                    <button
                      type="button"
                      className="danger-small"
                      onClick={() => deleteActivity(activity.id)}
                      disabled={deletingActivityId === activity.id}
                    >
                      {deletingActivityId === activity.id ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mini-empty">No activity logged yet.</p>
            )}
          </section>
        </aside>
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

  .detail-page {
    min-height: 100vh;
    background: #f4f6f8;
    padding: 36px 24px 70px;
  }

  .detail-header,
  .score-grid,
  .detail-grid,
  .error-box,
  .success-box,
  .empty-box {
    max-width: 1220px;
    margin-left: auto;
    margin-right: auto;
  }

  .detail-header {
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

  .detail-header h1 {
    margin: 0 0 10px;
    color: #f57c00;
    font-size: clamp(36px, 5vw, 56px);
    line-height: 1;
  }

  .detail-header p {
    margin: 0;
    color: #4b5563;
    font-size: 18px;
    line-height: 1.4;
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
    padding: 13px 18px;
    font-size: 15px;
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

  .full-btn {
    width: 100%;
    margin-top: 12px;
  }

  .button-row {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .button-row button {
    flex: 1;
    white-space: nowrap;
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

  .score-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }

  .score-grid div {
    background: #ffffff;
    border-radius: 18px;
    padding: 20px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.07);
  }

  .score-grid span {
    display: block;
    color: #4b5563;
    margin-bottom: 8px;
    font-size: 15px;
    font-weight: 800;
  }

  .score-grid strong {
    display: block;
    color: #f57c00;
    font-size: 34px;
    line-height: 1;
  }

  .detail-grid {
    display: grid;
    grid-template-columns: 1.45fr 0.75fr;
    gap: 22px;
    align-items: start;
  }

  .main-column,
  .side-column {
    display: grid;
    gap: 18px;
  }

  .card,
  .empty-box {
    background: #ffffff;
    border-radius: 22px;
    padding: 24px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  }

  .card h2 {
    margin: 0 0 14px;
    color: #f57c00;
    font-size: 28px;
  }

  .section-title-row {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    align-items: flex-start;
    margin-bottom: 16px;
  }

  .section-title-row h2 {
    margin-bottom: 6px;
  }

  .section-title-row p {
    margin: 0;
    color: #6b7280;
    line-height: 1.4;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px 18px;
    margin-bottom: 18px;
  }

  .info-grid p {
    margin: 0;
    color: #374151;
    line-height: 1.5;
  }

  a {
    color: #0f83a6;
    font-weight: 800;
  }

  .link-row {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
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

  .big-text {
    color: #374151;
    font-size: 17px;
    line-height: 1.55;
    white-space: pre-wrap;
    margin: 0;
  }

  .outreach-list,
  .audit-list,
  .activity-list {
    display: grid;
    gap: 12px;
  }

  .outreach-message,
  .audit-item,
  .activity-item {
    background: #f8fafc;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    padding: 14px;
  }

  .outreach-message-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    margin-bottom: 10px;
  }

  .outreach-message-top span,
  .activity-item span {
    display: inline-flex;
    background: #0f83a6;
    color: #ffffff;
    border-radius: 999px;
    padding: 6px 10px;
    font-size: 12px;
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

  .audit-item strong {
    display: block;
    color: #111827;
    margin-bottom: 12px;
    line-height: 1.4;
  }

  .audit-checks {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  .audit-checks span {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 999px;
    padding: 6px 9px;
    color: #374151;
    font-size: 13px;
    font-weight: 800;
  }

  .audit-item small,
  .activity-item small {
    color: #6b7280;
    font-size: 12px;
  }

  .control-label {
    display: grid;
    gap: 8px;
    margin-bottom: 14px;
    color: #374151;
    font-weight: 900;
  }

  .control-label input,
  .control-label select,
  .control-label textarea {
    width: 100%;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    padding: 13px;
    font-size: 15px;
    background: #ffffff;
    color: #111827;
    font-family: Arial, Helvetica, sans-serif;
  }

  .control-label textarea {
    resize: vertical;
  }

  .activity-item p {
    color: #374151;
    font-size: 15px;
    line-height: 1.5;
    white-space: pre-wrap;
    margin: 10px 0 8px;
  }

  .danger-small {
    background: #dc2626;
    padding: 8px 10px;
    font-size: 13px;
    margin-top: 10px;
  }

  .danger-small:hover {
    background: #b91c1c;
  }

  .mini-empty {
    background: #f8fafc;
    color: #4b5563;
    border-radius: 14px;
    padding: 16px;
    text-align: center;
    margin: 0;
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

  @media (max-width: 1000px) {
    .detail-header {
      flex-direction: column;
      align-items: stretch;
    }

    .header-actions {
      justify-content: stretch;
    }

    .header-actions button,
    .header-actions a {
      width: 100%;
    }

    .score-grid {
      grid-template-columns: 1fr;
    }

    .detail-grid {
      grid-template-columns: 1fr;
    }

    .section-title-row {
      flex-direction: column;
    }

    .section-title-row button,
    .button-row {
      width: 100%;
    }

    .button-row {
      flex-direction: column;
    }

    .button-row button {
      width: 100%;
    }
  }

  @media (max-width: 650px) {
    .detail-page {
      padding: 24px 14px 50px;
    }

    .detail-header,
    .card,
    .empty-box {
      padding: 20px;
    }

    .info-grid {
      grid-template-columns: 1fr;
    }

    .link-row a {
      width: 100%;
      text-align: center;
    }
  }
`;
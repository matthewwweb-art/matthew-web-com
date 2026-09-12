"use client";

import SafeExternalLink from "@/components/SafeExternalLink";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Activity,
  ArrowLeft,
  Bot,
  Building2,
  CalendarClock,
  CheckCircle2,
  Clipboard,
  DollarSign,
  ExternalLink,
  Flame,
  Globe2,
  History,
  LayoutGrid,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  RefreshCw,
  Search,
  Sparkles,
  Star,
  Target,
  Trash2,
} from "lucide-react";
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

  if (!numbers || numbers.length === 0) {
    return 0;
  }

  if (numbers.length === 1) {
    return numbers[0];
  }

  return Math.round(
    numbers.reduce((sum, num) => sum + num, 0) / numbers.length
  );
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

function formatDate(value) {
  if (!value) return "Not set";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Not set";
  }

  return date.toLocaleString();
}

function getFirstProblem(problemSummary) {
  const text = problemSummary || "";

  if (!text.trim()) {
    return "I noticed a few areas where your online presence could potentially be improved";
  }

  const clean = text
    .replaceAll("\n", " ")
    .replace("Website audit:", "")
    .trim();

  if (clean.length > 160) {
    return `${clean.slice(0, 160)}...`;
  }

  return clean;
}

function buildOutreachMessages(lead) {
  const businessName =
    lead.business_name || "your business";

  const category =
    lead.category || "business";

  const problem =
    getFirstProblem(
      lead.problem_summary
    );

  const offerIdea =
    lead.offer_idea ||
    "I help small businesses improve their websites, lead forms, SEO, booking systems, and follow-up process.";

  const cityState = [
    lead.city,
    lead.state,
  ]
    .filter(Boolean)
    .join(", ");

  const locationLine =
    cityState
      ? ` in ${cityState}`
      : "";

  const facebookDm =
    `Hey ${businessName}, I came across your ${category.toLowerCase()} business${locationLine} and wanted to reach out. ${problem}. I build affordable websites, lead forms, SEO-ready pages, and simple business tools that help small businesses get more leads and look more professional online. Would you want me to send over a quick free website audit or a few ideas for improving your online presence?`;

  const emailSubject =
    `Quick website idea for ${businessName}`;

  const emailMessage =
    `Hi ${businessName},

I came across your ${category.toLowerCase()} business${locationLine} and wanted to reach out.

${problem}.

${offerIdea}

I build affordable websites, lead forms, SEO-ready pages, CRM dashboards, booking systems, and custom software tools for small businesses.

Would you be open to me sending over a quick free website audit or a few simple ideas that could help your business get more leads online?

Thanks,
Adam
Matthew Web
https://matthew-web.com`;

  const phoneScript =
    `Hi, this is Adam from Matthew Web. I help small businesses with websites, lead forms, SEO, booking tools, and simple custom software.

I came across ${businessName} and noticed ${problem}.

I was calling to see if you’d be interested in a free quick website audit or a few ideas to help bring in more leads online. Is that something you’d want me to send over?`;

  const followUpMessage =
    `Hey ${businessName}, just following up on my last message. I help small businesses improve their websites, lead forms, SEO, booking systems, and follow-up tools. I noticed ${problem}. Would you like me to send over a quick free audit or a few ideas?`;

  return [
    {
      channel: "facebook dm",
      message: facebookDm,
      status: "draft",
    },
    {
      channel: "email",
      message:
        `Subject: ${emailSubject}\n\n${emailMessage}`,
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

function getAuditIssues(value) {
  if (!value) return {};

  if (
    typeof value === "object" &&
    !Array.isArray(value)
  ) {
    return value;
  }

  if (typeof value === "string") {
    try {
      const parsed =
        JSON.parse(value);

      if (
        parsed &&
        typeof parsed === "object" &&
        !Array.isArray(parsed)
      ) {
        return parsed;
      }
    } catch {
      return {};
    }
  }

  return {};
}

export default function LeadDetailPage() {
  const params = useParams();

  const leadId =
    Array.isArray(params?.id)
      ? params.id[0]
      : params?.id;

  const [session, setSession] =
    useState(null);

  const [
    loadingSession,
    setLoadingSession,
  ] = useState(true);

  const [
    loadingLead,
    setLoadingLead,
  ] = useState(false);

  const [lead, setLead] =
    useState(null);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  const [
    savingStatus,
    setSavingStatus,
  ] = useState(false);

  const [
    savingFollowUp,
    setSavingFollowUp,
  ] = useState(false);

  const [
    savingActivity,
    setSavingActivity,
  ] = useState(false);

  const [
    deletingActivityId,
    setDeletingActivityId,
  ] = useState(null);

  const [
    generating,
    setGenerating,
  ] = useState(false);

  const [
    generatingAi,
    setGeneratingAi,
  ] = useState(false);

  const [
    auditing,
    setAuditing,
  ] = useState(false);

  const [
    copiedId,
    setCopiedId,
  ] = useState(null);

  const [status, setStatus] =
    useState("new");

  const [
    nextFollowUp,
    setNextFollowUp,
  ] = useState("");

  const [
    activityType,
    setActivityType,
  ] = useState("note");

  const [
    activityText,
    setActivityText,
  ] = useState("");

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

    const {
      data: listener,
    } =
      supabase.auth.onAuthStateChange(
        (_event, newSession) => {
          setSession(
            newSession
          );
        }
      );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (
      session &&
      leadId
    ) {
      loadLead();
    }
  }, [
    session,
    leadId,
  ]);

  async function loadLead() {
    if (!leadId) return;

    setLoadingLead(true);
    setError("");

    const {
      data,
      error: leadError,
    } = await supabase
      .from(
        "lead_finder_leads"
      )
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
      .eq(
        "id",
        leadId
      )
      .single();

    if (leadError) {
      setError(
        leadError.message
      );

      setLead(null);
      setLoadingLead(false);
      return;
    }

    setLead(data);

    setStatus(
      data.status ||
        "new"
    );

    setNextFollowUp(
      data.next_followup_at
        ? data.next_followup_at.slice(
            0,
            16
          )
        : ""
    );

    setLoadingLead(false);
  }

  async function updateStatus() {
    if (!lead) return;

    setSavingStatus(true);
    setError("");
    setSuccess("");

    const {
      error: updateError,
    } = await supabase
      .from(
        "lead_finder_leads"
      )
      .update({
        status,
        updated_at:
          new Date().toISOString(),
      })
      .eq(
        "id",
        lead.id
      );

    if (updateError) {
      setError(
        updateError.message
      );

      setSavingStatus(false);
      return;
    }

    const {
      error: activityError,
    } = await supabase
      .from(
        "lead_finder_activities"
      )
      .insert({
        lead_id:
          lead.id,

        activity_type:
          status,

        activity_text:
          `Status changed to ${prettyStatus(
            status
          )}.`,
      });

    if (activityError) {
      console.error(
        "Could not log status activity:",
        activityError
      );
    }

    setSuccess(
      "Status updated."
    );

    setSavingStatus(false);

    await loadLead();
  }

  async function updateFollowUp() {
    if (!lead) return;

    setSavingFollowUp(true);
    setError("");
    setSuccess("");

    const {
      error: updateError,
    } = await supabase
      .from(
        "lead_finder_leads"
      )
      .update({
        next_followup_at:
          nextFollowUp ||
          null,

        updated_at:
          new Date().toISOString(),
      })
      .eq(
        "id",
        lead.id
      );

    if (updateError) {
      setError(
        updateError.message
      );

      setSavingFollowUp(false);
      return;
    }

    const {
      error: activityError,
    } = await supabase
      .from(
        "lead_finder_activities"
      )
      .insert({
        lead_id:
          lead.id,

        activity_type:
          "follow up",

        activity_text:
          nextFollowUp
            ? `Follow-up set for ${new Date(
                nextFollowUp
              ).toLocaleString()}.`
            : "Follow-up date cleared.",
      });

    if (activityError) {
      console.error(
        "Could not log follow-up activity:",
        activityError
      );
    }

    setSuccess(
      "Follow-up updated."
    );

    setSavingFollowUp(false);

    await loadLead();
  }

  async function addActivity() {
    if (!lead) return;

    if (
      !activityText.trim()
    ) {
      setError(
        "Activity text is required."
      );

      return;
    }

    setSavingActivity(true);
    setError("");
    setSuccess("");

    const {
      error: insertError,
    } = await supabase
      .from(
        "lead_finder_activities"
      )
      .insert({
        lead_id:
          lead.id,

        activity_type:
          activityType ||
          "note",

        activity_text:
          activityText.trim(),
      });

    if (insertError) {
      setError(
        insertError.message
      );

      setSavingActivity(false);
      return;
    }

    setActivityType(
      "note"
    );

    setActivityText("");

    setSuccess(
      "Activity added."
    );

    setSavingActivity(false);

    await loadLead();
  }

  async function deleteActivity(
    activityId
  ) {
    const confirmed =
      window.confirm(
        "Delete this activity?"
      );

    if (!confirmed) {
      return;
    }

    setDeletingActivityId(
      activityId
    );

    setError("");
    setSuccess("");

    const {
      error: deleteError,
    } = await supabase
      .from(
        "lead_finder_activities"
      )
      .delete()
      .eq(
        "id",
        activityId
      );

    if (deleteError) {
      setError(
        deleteError.message
      );

      setDeletingActivityId(
        null
      );

      return;
    }

    setSuccess(
      "Activity deleted."
    );

    setDeletingActivityId(
      null
    );

    await loadLead();
  }

  async function generateOutreach() {
    if (!lead) return;

    setGenerating(true);
    setError("");
    setSuccess("");

    const messages =
      buildOutreachMessages(
        lead
      );

    const rows =
      messages.map(
        (item) => ({
          lead_id:
            lead.id,

          channel:
            item.channel,

          message:
            item.message,

          status:
            item.status,
        })
      );

    const {
      error: insertError,
    } = await supabase
      .from(
        "lead_finder_outreach"
      )
      .insert(rows);

    if (insertError) {
      setError(
        insertError.message
      );

      setGenerating(false);
      return;
    }

    const {
      error: activityError,
    } = await supabase
      .from(
        "lead_finder_activities"
      )
      .insert({
        lead_id:
          lead.id,

        activity_type:
          "note",

        activity_text:
          "Template outreach messages generated.",
      });

    if (activityError) {
      console.error(
        "Could not log outreach generation:",
        activityError
      );
    }

    setSuccess(
      "Template outreach messages generated."
    );

    setGenerating(false);

    await loadLead();
  }

  async function generateAiOutreach() {
    if (!lead) return;

    setGeneratingAi(true);
    setError("");
    setSuccess("");

    try {
      const {
        data: sessionData,
      } =
        await supabase.auth.getSession();

      const accessToken =
        sessionData?.session
          ?.access_token;

      if (!accessToken) {
        setError(
          "You need to sign in again before generating AI outreach."
        );

        setGeneratingAi(false);
        return;
      }

      const response =
        await fetch(
          "/api/lead-finder/ai-outreach",
          {
            method:
              "POST",

            headers: {
              "Content-Type":
                "application/json",

              Authorization:
                `Bearer ${accessToken}`,
            },

            body:
              JSON.stringify({
                lead,
              }),
          }
        );

      const result =
        await response.json();

      if (
        !response.ok ||
        !result.ok
      ) {
        setError(
          result.error ||
            "AI outreach failed."
        );

        setGeneratingAi(false);
        return;
      }

      const outreach =
        result.outreach ||
        {};

      const rows = [
        {
          lead_id:
            lead.id,

          channel:
            "ai facebook dm",

          message:
            outreach.facebook_dm ||
            "",

          status:
            "draft",
        },
        {
          lead_id:
            lead.id,

          channel:
            "ai email",

          message:
            `Subject: ${
              outreach.email_subject ||
              "Quick idea"
            }\n\n${
              outreach.email_message ||
              ""
            }`,

          status:
            "draft",
        },
        {
          lead_id:
            lead.id,

          channel:
            "ai phone script",

          message:
            outreach.phone_script ||
            "",

          status:
            "draft",
        },
        {
          lead_id:
            lead.id,

          channel:
            "ai follow up",

          message:
            outreach.follow_up ||
            "",

          status:
            "draft",
        },
      ].filter(
        (row) =>
          row.message.trim()
      );

      const {
        error: insertError,
      } = await supabase
        .from(
          "lead_finder_outreach"
        )
        .insert(rows);

      if (insertError) {
        setError(
          insertError.message
        );

        setGeneratingAi(false);
        return;
      }

      const {
        error: activityError,
      } = await supabase
        .from(
          "lead_finder_activities"
        )
        .insert({
          lead_id:
            lead.id,

          activity_type:
            "note",

          activity_text:
            `AI outreach generated.

Sales angle: ${
              outreach.sales_angle ||
              "Not provided"
            }

Recommended offer: ${
              outreach.recommended_offer ||
              "Not provided"
            }`,
        });

      if (activityError) {
        console.error(
          "Could not log AI outreach:",
          activityError
        );
      }

      setSuccess(
        "AI outreach generated."
      );

      setGeneratingAi(false);

      await loadLead();
    } catch (aiError) {
      console.error(
        "AI outreach error:",
        aiError
      );

      setError(
        "AI outreach could not be completed."
      );

      setGeneratingAi(false);
    }
  }

  async function runWebsiteAudit() {
    if (!lead) return;

    setError("");
    setSuccess("");

    if (
      !lead.website_url
    ) {
      setError(
        "This lead does not have a website URL to audit."
      );

      return;
    }

    setAuditing(true);

    try {
      const {
        data: sessionData,
      } =
        await supabase.auth.getSession();

      const accessToken =
        sessionData?.session
          ?.access_token;

      if (!accessToken) {
        setError(
          "You need to sign in again before running an audit."
        );

        setAuditing(false);
        return;
      }

      const response =
        await fetch(
          "/api/lead-finder/audit",
          {
            method:
              "POST",

            headers: {
              "Content-Type":
                "application/json",

              Authorization:
                `Bearer ${accessToken}`,
            },

            body:
              JSON.stringify({
                website_url:
                  lead.website_url,
              }),
          }
        );

      const result =
        await response.json();

      if (
        !response.ok ||
        !result.ok
      ) {
        setError(
          result.error ||
            "Website audit failed."
        );

        setAuditing(false);
        return;
      }

      const audit =
        result.audit;

      const {
        error:
          auditInsertError,
      } = await supabase
        .from(
          "lead_finder_audits"
        )
        .insert({
          lead_id:
            lead.id,

          has_website:
            audit.has_website,

          has_https:
            audit.has_https,

          has_contact_form:
            audit.has_contact_form,

          has_booking:
            audit.has_booking,

          has_phone_number:
            audit.has_phone_number,

          has_meta_title:
            audit.has_meta_title,

          has_meta_description:
            audit.has_meta_description,

          has_favicon:
            audit.has_favicon,

          mobile_issue:
            audit.mobile_issue,

          speed_issue:
            audit.speed_issue,

          outdated_design:
            audit.outdated_design,

          issues_json:
            audit.issues_json,

          audit_summary:
            audit.audit_summary,
        });

      if (
        auditInsertError
      ) {
        setError(
          auditInsertError.message
        );

        setAuditing(false);
        return;
      }

      const newProblemSummary =
        lead.problem_summary
          ? `${lead.problem_summary}\n\nWebsite audit: ${audit.audit_summary}`
          : `Website audit: ${audit.audit_summary}`;

      const {
        error:
          leadUpdateError,
      } = await supabase
        .from(
          "lead_finder_leads"
        )
        .update({
          problem_summary:
            newProblemSummary,

          updated_at:
            new Date().toISOString(),
        })
        .eq(
          "id",
          lead.id
        );

      if (
        leadUpdateError
      ) {
        setError(
          leadUpdateError.message
        );

        setAuditing(false);
        return;
      }

      const {
        error: activityError,
      } = await supabase
        .from(
          "lead_finder_activities"
        )
        .insert({
          lead_id:
            lead.id,

          activity_type:
            "note",

          activity_text:
            `Website audit completed. ${audit.audit_summary}`,
        });

      if (activityError) {
        console.error(
          "Could not log website audit:",
          activityError
        );
      }

      setSuccess(
        "Website audit complete."
      );

      setAuditing(false);

      await loadLead();
    } catch (auditError) {
      console.error(
        "Website audit error:",
        auditError
      );

      setError(
        "Website audit could not be completed."
      );

      setAuditing(false);
    }
  }

  async function copyMessage(
    item
  ) {
    try {
      await navigator.clipboard.writeText(
        item.message
      );

      setCopiedId(
        item.id
      );

      window.setTimeout(
        () => {
          setCopiedId(
            null
          );
        },
        1500
      );
    } catch {
      setError(
        "Could not copy the outreach message."
      );
    }
  }

  const sortedActivities =
    useMemo(() => {
      return [
        ...(
          lead?.lead_finder_activities ||
          []
        ),
      ].sort(
        (a, b) =>
          new Date(
            b.created_at
          ) -
          new Date(
            a.created_at
          )
      );
    }, [lead]);

  const sortedAudits =
    useMemo(() => {
      return [
        ...(
          lead?.lead_finder_audits ||
          []
        ),
      ].sort(
        (a, b) =>
          new Date(
            b.created_at
          ) -
          new Date(
            a.created_at
          )
      );
    }, [lead]);

  const sortedOutreach =
    useMemo(() => {
      return [
        ...(
          lead?.lead_finder_outreach ||
          []
        ),
      ].sort(
        (a, b) =>
          new Date(
            b.created_at
          ) -
          new Date(
            a.created_at
          )
      );
    }, [lead]);

  const averageValue =
    parseEstimatedValue(
      lead?.estimated_offer_value
    );

  const leadScore =
    Number(
      lead?.lead_score ||
        0
    );

  if (loadingSession) {
    return (
      <main className="detail-page">
        <style>{styles}</style>

        <section className="empty-box">
          <div className="loading-dot" />

          <h1>
            Loading Lead Workspace
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
      <main className="detail-page">
        <style>{styles}</style>

        <section className="empty-box">
          <Building2 size={42} />

          <h1>
            Lead Workspace
          </h1>

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

  if (loadingLead) {
    return (
      <main className="detail-page">
        <style>{styles}</style>

        <section className="empty-box">
          <div className="loading-dot" />

          <h1>
            Loading Lead
          </h1>

          <p>
            Loading CRM information, activities, outreach, and audits.
          </p>
        </section>
      </main>
    );
  }

  if (!lead) {
    return (
      <main className="detail-page">
        <style>{styles}</style>

        <section className="empty-box">
          <Search size={42} />

          <h1>
            Lead Not Found
          </h1>

          <p>
            This lead could not be loaded from the CRM.
          </p>

          <Link
            href="/admin/lead-finder"
            className="primary-btn"
          >
            Back to Lead Finder
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="detail-page">
      <style>{styles}</style>

      <div className="detail-shell">
        <header className="detail-header">
          <div className="header-main">
            <div className="header-icon">
              <Building2
                size={30}
              />
            </div>

            <div>
              <p className="eyebrow">
                Matthew Web • Lead Workspace
              </p>

              <h1>
                {lead.business_name}
              </h1>

              <div className="header-meta">
                <span>
                  {lead.category ||
                    "No category"}
                </span>

                {lead.city ||
                lead.state ? (
                  <span>
                    <MapPin
                      size={13}
                    />

                    {[
                      lead.city,
                      lead.state,
                    ]
                      .filter(
                        Boolean
                      )
                      .join(
                        ", "
                      )}
                  </span>
                ) : null}
              </div>
            </div>
          </div>

          <div className="header-actions">
            <Link
              href="/admin/lead-finder"
              className="secondary-btn"
            >
              <ArrowLeft
                size={16}
              />
              CRM
            </Link>

            <Link
              href="/admin/lead-finder/board"
              className="secondary-btn"
            >
              <LayoutGrid
                size={16}
              />
              Pipeline
            </Link>

            <Link
              href="/admin/lead-finder/hot"
              className="secondary-btn hot-link"
            >
              <Flame
                size={16}
              />
              Hot Leads
            </Link>

            <button
              type="button"
              className="primary-btn"
              onClick={
                loadLead
              }
              disabled={
                loadingLead
              }
            >
              <RefreshCw
                size={16}
                className={
                  loadingLead
                    ? "spin"
                    : ""
                }
              />

              Refresh
            </button>
          </div>
        </header>

        {error ? (
          <div className="error-box">
            <strong>
              Lead Workspace Error
            </strong>

            <span>
              {error}
            </span>
          </div>
        ) : null}

        {success ? (
          <div className="success-box">
            <CheckCircle2
              size={17}
            />

            <span>
              {success}
            </span>
          </div>
        ) : null}

        <section className="score-grid">
          <article className="stat-card orange">
            <div className="stat-icon">
              <Target
                size={24}
                strokeWidth={2.8}
              />
            </div>

            <div>
              <span>
                Lead Score
              </span>

              <strong>
                {leadScore}/100
              </strong>

              <small>
                Current opportunity score
              </small>
            </div>
          </article>

          <article className="stat-card cyan">
            <div className="stat-icon">
              <Activity
                size={24}
                strokeWidth={2.8}
              />
            </div>

            <div>
              <span>
                Status
              </span>

              <strong className="status-stat">
                {prettyStatus(
                  lead.status
                )}
              </strong>

              <small>
                Current pipeline stage
              </small>
            </div>
          </article>

          <article className="stat-card green">
            <div className="stat-icon">
              <DollarSign
                size={24}
                strokeWidth={2.8}
              />
            </div>

            <div>
              <span>
                Estimated Value
              </span>

              <strong>
                {averageValue
                  ? formatMoney(
                      averageValue
                    )
                  : "Not Set"}
              </strong>

              <small>
                Average of saved value range
              </small>
            </div>
          </article>

          <article className="stat-card purple">
            <div className="stat-icon">
              <CalendarClock
                size={24}
                strokeWidth={2.8}
              />
            </div>

            <div>
              <span>
                Next Follow-Up
              </span>

              <strong className="date-stat">
                {lead.next_followup_at
                  ? formatDate(
                      lead.next_followup_at
                    )
                  : "Not Set"}
              </strong>

              <small>
                Next scheduled sales touch
              </small>
            </div>
          </article>
        </section>

        <section className="workspace-heading">
          <div>
            <p className="eyebrow">
              Prospect Intelligence
            </p>

            <h2>
              Sales Workspace
            </h2>

            <p>
              Review the lead, create outreach, run website audits,
              schedule follow-ups, and keep a complete activity history.
            </p>
          </div>

          <div className="workspace-badges">
            <span>
              {sortedActivities.length} activities
            </span>

            <span>
              {sortedOutreach.length} outreach
            </span>

            <span>
              {sortedAudits.length} audits
            </span>
          </div>
        </section>

        <section className="detail-grid">
          <div className="main-column">
            <section className="card info-card-main">
              <div className="section-header-simple">
                <div className="section-icon cyan-icon">
                  <Building2
                    size={21}
                  />
                </div>

                <div>
                  <span>
                    BUSINESS PROFILE
                  </span>

                  <h2>
                    Lead Information
                  </h2>
                </div>
              </div>

              <div className="info-grid">
                <InfoItem
                  icon={
                    <Phone
                      size={16}
                    />
                  }
                  label="Phone"
                >
                  {lead.phone ? (
                    <a
                      href={`tel:${lead.phone}`}
                    >
                      {lead.phone}
                    </a>
                  ) : (
                    "None"
                  )}
                </InfoItem>

                <InfoItem
                  icon={
                    <Mail
                      size={16}
                    />
                  }
                  label="Email"
                >
                  {lead.email ? (
                    <a
                      href={`mailto:${lead.email}`}
                    >
                      {lead.email}
                    </a>
                  ) : (
                    "None"
                  )}
                </InfoItem>

                <InfoItem
                  icon={
                    <Building2
                      size={16}
                    />
                  }
                  label="Contact"
                >
                  {lead.contact_name ||
                    "None"}
                </InfoItem>

                <InfoItem
                  icon={
                    <Star
                      size={16}
                    />
                  }
                  label="Rating"
                >
                  {lead.rating
                    ? `${lead.rating} stars`
                    : "Unknown"}
                </InfoItem>

                <InfoItem
                  icon={
                    <MessageSquare
                      size={16}
                    />
                  }
                  label="Reviews"
                >
                  {lead.review_count ??
                    "Unknown"}
                </InfoItem>

                <InfoItem
                  icon={
                    <Globe2
                      size={16}
                    />
                  }
                  label="Source"
                >
                  {lead.source ||
                    "manual"}
                </InfoItem>

                <InfoItem
                  icon={
                    <DollarSign
                      size={16}
                    />
                  }
                  label="Offer Value"
                >
                  {lead.estimated_offer_value ||
                    "Not set"}
                </InfoItem>

                <InfoItem
                  icon={
                    <CalendarClock
                      size={16}
                    />
                  }
                  label="Created"
                >
                  {formatDate(
                    lead.created_at
                  )}
                </InfoItem>
              </div>

              <div className="link-row">
                {lead.website_url ? (
                  <SafeExternalLink href={lead.website_url}>
                    <Globe2
                      size={14}
                    />
                    Website
                  </SafeExternalLink>
                ) : null}

                {lead.google_maps_url ? (
                  <SafeExternalLink href={lead.google_maps_url}>
                    <MapPin
                      size={14}
                    />
                    Google Maps
                  </SafeExternalLink>
                ) : null}

                {lead.facebook_url ? (
                  <SafeExternalLink href={lead.facebook_url}>
                    Facebook
                  </SafeExternalLink>
                ) : null}

                {lead.yelp_url ? (
                  <SafeExternalLink href={lead.yelp_url}>
                    Yelp
                  </SafeExternalLink>
                ) : null}
              </div>
            </section>

            <section className="insight-grid">
              <article className="card insight-card problem-card">
                <div className="section-header-simple">
                  <div className="section-icon red-icon">
                    <Target
                      size={20}
                    />
                  </div>

                  <div>
                    <span>
                      OPPORTUNITY
                    </span>

                    <h2>
                      Problem Found
                    </h2>
                  </div>
                </div>

                <p className="big-text">
                  {lead.problem_summary ||
                    "No problem summary added."}
                </p>
              </article>

              <article className="card insight-card offer-card">
                <div className="section-header-simple">
                  <div className="section-icon orange-icon">
                    <Sparkles
                      size={20}
                    />
                  </div>

                  <div>
                    <span>
                      SALES DIRECTION
                    </span>

                    <h2>
                      Offer Idea
                    </h2>
                  </div>
                </div>

                <p className="big-text">
                  {lead.offer_idea ||
                    "No offer idea added."}
                </p>
              </article>
            </section>

            {lead.notes ? (
              <section className="card">
                <div className="section-header-simple">
                  <div className="section-icon purple-icon">
                    <Clipboard
                      size={20}
                    />
                  </div>

                  <div>
                    <span>
                      RESEARCH NOTES
                    </span>

                    <h2>
                      Notes
                    </h2>
                  </div>
                </div>

                <p className="big-text">
                  {lead.notes}
                </p>
              </section>
            ) : null}

            <section className="card">
              <div className="section-title-row">
                <div className="section-heading-with-icon">
                  <div className="section-icon cyan-icon">
                    <MessageSquare
                      size={21}
                    />
                  </div>

                  <div>
                    <span>
                      SALES COMMUNICATION
                    </span>

                    <h2>
                      Outreach Messages
                    </h2>

                    <p>
                      Generate reusable templates or AI-assisted
                      outreach for this lead.
                    </p>
                  </div>
                </div>

                <div className="button-row">
                  <button
                    type="button"
                    className="secondary-action-btn"
                    onClick={
                      generateOutreach
                    }
                    disabled={
                      generating
                    }
                  >
                    {generating ? (
                      <>
                        <RefreshCw
                          size={15}
                          className="spin"
                        />
                        Generating
                      </>
                    ) : (
                      <>
                        <MessageSquare
                          size={15}
                        />
                        Template Outreach
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    className="ai-btn"
                    onClick={
                      generateAiOutreach
                    }
                    disabled={
                      generatingAi
                    }
                  >
                    {generatingAi ? (
                      <>
                        <RefreshCw
                          size={15}
                          className="spin"
                        />
                        Thinking
                      </>
                    ) : (
                      <>
                        <Bot
                          size={15}
                        />
                        AI Outreach
                      </>
                    )}
                  </button>
                </div>
              </div>

              {sortedOutreach.length >
              0 ? (
                <div className="outreach-list">
                  {sortedOutreach.map(
                    (item) => (
                      <article
                        className="outreach-message"
                        key={
                          item.id
                        }
                      >
                        <div className="outreach-message-top">
                          <div>
                            <span className="channel-badge">
                              {prettyStatus(
                                item.channel
                              )}
                            </span>

                            <small>
                              {formatDate(
                                item.created_at
                              )}
                            </small>
                          </div>

                          <button
                            type="button"
                            className="copy-btn"
                            onClick={() =>
                              copyMessage(
                                item
                              )
                            }
                          >
                            {copiedId ===
                            item.id ? (
                              <>
                                <CheckCircle2
                                  size={13}
                                />
                                Copied
                              </>
                            ) : (
                              <>
                                <Clipboard
                                  size={13}
                                />
                                Copy
                              </>
                            )}
                          </button>
                        </div>

                        <pre>
                          {item.message}
                        </pre>
                      </article>
                    )
                  )}
                </div>
              ) : (
                <div className="mini-empty">
                  <MessageSquare
                    size={21}
                  />

                  <div>
                    <strong>
                      No outreach yet
                    </strong>

                    <span>
                      Generate templates or AI outreach above.
                    </span>
                  </div>
                </div>
              )}
            </section>

            <section className="card">
              <div className="section-title-row">
                <div className="section-heading-with-icon">
                  <div className="section-icon orange-icon">
                    <Search
                      size={21}
                    />
                  </div>

                  <div>
                    <span>
                      WEBSITE INTELLIGENCE
                    </span>

                    <h2>
                      Website Audits
                    </h2>

                    <p>
                      Analyze the prospect&apos;s website and save
                      the findings to this lead.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="audit-btn"
                  onClick={
                    runWebsiteAudit
                  }
                  disabled={
                    auditing ||
                    !lead.website_url
                  }
                >
                  {auditing ? (
                    <>
                      <RefreshCw
                        size={15}
                        className="spin"
                      />
                      Auditing
                    </>
                  ) : (
                    <>
                      <Search
                        size={15}
                      />
                      Run Audit
                    </>
                  )}
                </button>
              </div>

              {!lead.website_url ? (
                <div className="audit-warning">
                  This lead does not have a website URL yet, so an
                  automated website audit cannot run.
                </div>
              ) : null}

              {sortedAudits.length >
              0 ? (
                <div className="audit-list">
                  {sortedAudits.map(
                    (
                      audit,
                      index
                    ) => {
                      const issues =
                        getAuditIssues(
                          audit.issues_json
                        );

                      const problems =
                        Array.isArray(
                          issues.problems
                        )
                          ? issues.problems
                          : [];

                      return (
                        <article
                          className="audit-item"
                          key={
                            audit.id
                          }
                        >
                          <div className="audit-top">
                            <div>
                              <span className="audit-number">
                                AUDIT #
                                {sortedAudits.length -
                                  index}
                              </span>

                              <strong>
                                Website Audit
                              </strong>
                            </div>

                            <small>
                              {formatDate(
                                audit.created_at
                              )}
                            </small>
                          </div>

                          <div className="audit-score-grid">
                            <AuditScore
                              label="Website"
                              value={
                                issues.website_score
                              }
                            />

                            <AuditScore
                              label="SEO"
                              value={
                                issues.seo_score
                              }
                            />

                            <AuditScore
                              label="Conversion"
                              value={
                                issues.conversion_score
                              }
                            />

                            <AuditScore
                              label="Trust"
                              value={
                                issues.trust_score
                              }
                            />
                          </div>

                          <AuditSummaryBlock
                            title="Audit Summary"
                            text={
                              audit.audit_summary ||
                              "Website audit saved."
                            }
                          />

                          {issues.sales_angle ? (
                            <AuditSummaryBlock
                              title="Sales Angle"
                              text={
                                issues.sales_angle
                              }
                              accent="cyan"
                            />
                          ) : null}

                          {issues.recommended_offer ? (
                            <AuditSummaryBlock
                              title="Recommended Offer"
                              text={
                                issues.recommended_offer
                              }
                              accent="orange"
                            />
                          ) : null}

                          {issues.suggested_price_range ? (
                            <AuditSummaryBlock
                              title="Suggested Package"
                              text={
                                issues.suggested_price_range
                              }
                              accent="green"
                            />
                          ) : null}

                          {problems.length >
                          0 ? (
                            <div className="audit-summary-block problems-block">
                              <strong>
                                Problems Found
                              </strong>

                              <ul>
                                {problems.map(
                                  (
                                    problem,
                                    problemIndex
                                  ) => (
                                    <li
                                      key={`${audit.id}-problem-${problemIndex}`}
                                    >
                                      {problem}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          ) : null}

                          <div className="audit-checks">
                            <AuditCheck
                              label="HTTPS"
                              value={
                                audit.has_https
                              }
                            />

                            <AuditCheck
                              label="Title"
                              value={
                                audit.has_meta_title
                              }
                            />

                            <AuditCheck
                              label="Description"
                              value={
                                audit.has_meta_description
                              }
                            />

                            <AuditCheck
                              label="Contact Form"
                              value={
                                audit.has_contact_form
                              }
                            />

                            <AuditCheck
                              label="Booking"
                              value={
                                audit.has_booking
                              }
                            />

                            <AuditCheck
                              label="Phone"
                              value={
                                audit.has_phone_number
                              }
                            />

                            <AuditCheck
                              label="Favicon"
                              value={
                                audit.has_favicon
                              }
                            />
                          </div>
                        </article>
                      );
                    }
                  )}
                </div>
              ) : (
                <div className="mini-empty">
                  <Search
                    size={21}
                  />

                  <div>
                    <strong>
                      No website audits yet
                    </strong>

                    <span>
                      Run an audit to build website intelligence
                      for this prospect.
                    </span>
                  </div>
                </div>
              )}
            </section>
          </div>

          <aside className="side-column">
            <section className="card sticky-controls">
              <div className="section-header-simple">
                <div className="section-icon orange-icon">
                  <Target
                    size={20}
                  />
                </div>

                <div>
                  <span>
                    SALES MANAGEMENT
                  </span>

                  <h2>
                    Quick Controls
                  </h2>
                </div>
              </div>

              <label className="control-label">
                <span>
                  PIPELINE STATUS
                </span>

                <select
                  value={status}
                  onChange={(e) =>
                    setStatus(
                      e.target.value
                    )
                  }
                >
                  {statusOptions.map(
                    (option) => (
                      <option
                        key={
                          option
                        }
                        value={
                          option
                        }
                      >
                        {prettyStatus(
                          option
                        )}
                      </option>
                    )
                  )}
                </select>
              </label>

              <button
                type="button"
                onClick={
                  updateStatus
                }
                disabled={
                  savingStatus
                }
                className="full-btn save-control-btn"
              >
                {savingStatus ? (
                  <>
                    <RefreshCw
                      size={15}
                      className="spin"
                    />
                    Saving Status
                  </>
                ) : (
                  <>
                    <CheckCircle2
                      size={15}
                    />
                    Save Status
                  </>
                )}
              </button>

              <div className="control-divider" />

              <label className="control-label">
                <span>
                  NEXT FOLLOW-UP
                </span>

                <input
                  type="datetime-local"
                  value={
                    nextFollowUp
                  }
                  onChange={(e) =>
                    setNextFollowUp(
                      e.target.value
                    )
                  }
                />
              </label>

              <button
                type="button"
                onClick={
                  updateFollowUp
                }
                disabled={
                  savingFollowUp
                }
                className="full-btn followup-btn"
              >
                {savingFollowUp ? (
                  <>
                    <RefreshCw
                      size={15}
                      className="spin"
                    />
                    Saving
                  </>
                ) : (
                  <>
                    <CalendarClock
                      size={15}
                    />
                    Save Follow-Up
                  </>
                )}
              </button>

              <Link
                href="/admin/lead-finder"
                className="crm-editor-link full-btn"
              >
                <Building2
                  size={15}
                />
                Open CRM Editor
              </Link>
            </section>

            <section className="card">
              <div className="section-header-simple">
                <div className="section-icon cyan-icon">
                  <Activity
                    size={20}
                  />
                </div>

                <div>
                  <span>
                    CRM HISTORY
                  </span>

                  <h2>
                    Add Activity
                  </h2>
                </div>
              </div>

              <label className="control-label">
                <span>
                  ACTIVITY TYPE
                </span>

                <select
                  value={
                    activityType
                  }
                  onChange={(e) =>
                    setActivityType(
                      e.target.value
                    )
                  }
                >
                  {activityOptions.map(
                    (option) => (
                      <option
                        key={
                          option
                        }
                        value={
                          option
                        }
                      >
                        {prettyStatus(
                          option
                        )}
                      </option>
                    )
                  )}
                </select>
              </label>

              <label className="control-label">
                <span>
                  ACTIVITY NOTE
                </span>

                <textarea
                  rows="5"
                  value={
                    activityText
                  }
                  placeholder="Example: Called and left voicemail. Follow up Friday."
                  onChange={(e) =>
                    setActivityText(
                      e.target.value
                    )
                  }
                />
              </label>

              <button
                type="button"
                onClick={
                  addActivity
                }
                disabled={
                  savingActivity
                }
                className="full-btn save-control-btn"
              >
                {savingActivity ? (
                  <>
                    <RefreshCw
                      size={15}
                      className="spin"
                    />
                    Saving
                  </>
                ) : (
                  <>
                    <Activity
                      size={15}
                    />
                    Add Activity
                  </>
                )}
              </button>
            </section>

            <section className="card">
              <div className="section-header-simple">
                <div className="section-icon purple-icon">
                  <History
                    size={20}
                  />
                </div>

                <div>
                  <span>
                    COMPLETE HISTORY
                  </span>

                  <h2>
                    Activity Timeline
                  </h2>
                </div>
              </div>

              {sortedActivities.length >
              0 ? (
                <div className="activity-list">
                  {sortedActivities.map(
                    (
                      activity,
                      index
                    ) => (
                      <article
                        className="activity-item"
                        key={
                          activity.id
                        }
                      >
                        <div className="activity-marker">
                          <span />
                        </div>

                        <div className="activity-content">
                          <div className="activity-top">
                            <span className="activity-badge">
                              {prettyStatus(
                                activity.activity_type
                              )}
                            </span>

                            <small>
                              #{sortedActivities.length -
                                index}
                            </small>
                          </div>

                          <p>
                            {activity.activity_text}
                          </p>

                          <time>
                            {formatDate(
                              activity.created_at
                            )}
                          </time>

                          <button
                            type="button"
                            className="danger-small"
                            onClick={() =>
                              deleteActivity(
                                activity.id
                              )
                            }
                            disabled={
                              deletingActivityId ===
                              activity.id
                            }
                          >
                            <Trash2
                              size={12}
                            />

                            {deletingActivityId ===
                            activity.id
                              ? "Deleting"
                              : "Delete"}
                          </button>
                        </div>
                      </article>
                    )
                  )}
                </div>
              ) : (
                <div className="mini-empty">
                  <History
                    size={21}
                  />

                  <div>
                    <strong>
                      No activity yet
                    </strong>

                    <span>
                      Add the first note, call, email, or follow-up.
                    </span>
                  </div>
                </div>
              )}
            </section>
          </aside>
        </section>
      </div>
    </main>
  );
}

function InfoItem({
  icon,
  label,
  children,
}) {
  return (
    <div className="info-item">
      <div className="info-item-icon">
        {icon}
      </div>

      <div>
        <span>
          {label}
        </span>

        <strong>
          {children}
        </strong>
      </div>
    </div>
  );
}

function AuditScore({
  label,
  value,
}) {
  const number =
    Number(value);

  const hasScore =
    Number.isFinite(
      number
    );

  const score =
    hasScore
      ? number
      : null;

  return (
    <div
      className={`audit-score ${
        score !== null &&
        score >= 75
          ? "good"
          : score !== null &&
              score < 50
            ? "poor"
            : ""
      }`}
    >
      <span>
        {label}
      </span>

      <strong>
        {score !== null
          ? `${score}/100`
          : "?/100"}
      </strong>
    </div>
  );
}

function AuditSummaryBlock({
  title,
  text,
  accent = "",
}) {
  return (
    <div
      className={`audit-summary-block ${accent}`}
    >
      <strong>
        {title}
      </strong>

      <p>
        {text}
      </p>
    </div>
  );
}

function AuditCheck({
  label,
  value,
}) {
  return (
    <span
      className={
        value
          ? "check-good"
          : "check-bad"
      }
    >
      {value ? (
        <CheckCircle2
          size={12}
        />
      ) : (
        <span className="check-x">
          ×
        </span>
      )}

      {label}:{" "}
      {value
        ? "Yes"
        : "No"}
    </span>
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

  .detail-page {
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
        circle at 96% 1%,
        rgba(255, 128, 0, 0.11),
        transparent 27%
      ),
      linear-gradient(
        180deg,
        #06090f 0%,
        #05070b 50%,
        #06080d 100%
      );
  }

  .detail-page::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: 0.13;
    background-image:
      linear-gradient(
        rgba(255,255,255,0.025) 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        rgba(255,255,255,0.025) 1px,
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

  .detail-shell {
    position: relative;
    z-index: 1;
    width: min(
      1420px,
      calc(100% - 36px)
    );
    margin: 0 auto;
    padding: 32px 0 65px;
  }

  /* ==========================================================
     HEADER
  ========================================================== */

  .detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 28px;
    margin-bottom: 15px;
    padding: 27px;
    border: 1px solid #192536;
    border-radius: 25px;
    background:
      linear-gradient(
        135deg,
        rgba(15,22,33,0.98),
        rgba(8,12,19,0.98)
      );
    box-shadow:
      0 20px 60px rgba(0,0,0,0.29),
      inset 0 1px 0 rgba(255,255,255,0.035);
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
        #29d4f2,
        #087ef6
      );
    box-shadow:
      0 0 32px rgba(0,187,232,0.22);
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

  .detail-header h1 {
    max-width: 790px;
    margin: 0 0 9px;
    color: #ffffff;
    font-size:
      clamp(
        33px,
        4.4vw,
        52px
      );
    line-height: 1;
    letter-spacing: -0.05em;
    overflow-wrap: anywhere;
  }

  .header-meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }

  .header-meta span {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: #8291a3;
    font-size: 10px;
    font-weight: 800;
  }

  .header-meta span:first-child {
    color: #3bd1ed;
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
    box-shadow:
      0 8px 20px rgba(255,105,0,0.18);
  }

  .primary-btn:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow:
      0 11px 26px rgba(255,105,0,0.25);
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

  .hot-link {
    color: #ffac77;
    border-color: rgba(255,105,61,0.27);
    background: rgba(132,42,18,0.11);
  }

  /* ==========================================================
     ALERTS
  ========================================================== */

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
    border: 1px solid rgba(255,75,75,0.3);
    background: rgba(129,24,24,0.19);
  }

  .error-box strong {
    color: #ff7474;
  }

  .success-box {
    color: #93efb9;
    border: 1px solid rgba(65,219,132,0.25);
    background: rgba(25,120,67,0.13);
    font-weight: 800;
  }

  /* ==========================================================
     TOP STATS
  ========================================================== */

  .score-grid {
    display: grid;
    grid-template-columns:
      repeat(4, minmax(0,1fr));
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

  .stat-card.orange {
    --stat-accent: #ff8b00;
  }

  .stat-card.cyan {
    --stat-accent: #29d0f1;
  }

  .stat-card.green {
    --stat-accent: #49df91;
  }

  .stat-card.purple {
    --stat-accent: #a77cff;
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
    font-size: 27px;
    line-height: 1.05;
    letter-spacing: -0.035em;
    overflow-wrap: anywhere;
  }

  .stat-card small {
    display: block;
    margin-top: 6px;
    color: #637286;
    font-size: 8px;
    line-height: 1.35;
  }

  .status-stat {
    font-size: 20px !important;
  }

  .date-stat {
    font-size: 13px !important;
    line-height: 1.3 !important;
  }

  /* ==========================================================
     WORKSPACE HEADING
  ========================================================== */

  .workspace-heading {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 24px;
    margin-bottom: 14px;
  }

  .workspace-heading h2 {
    margin: 0 0 6px;
    color: #f5f8fb;
    font-size: 29px;
    letter-spacing: -0.035em;
  }

  .workspace-heading p:not(.eyebrow) {
    max-width: 760px;
    margin: 0;
    color: #758397;
    font-size: 11px;
    line-height: 1.5;
  }

  .workspace-badges {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 6px;
  }

  .workspace-badges span {
    padding: 7px 9px;
    border: 1px solid #25384a;
    border-radius: 8px;
    color: #708399;
    background: #090f17;
    font-size: 7px;
    font-weight: 900;
    text-transform: uppercase;
  }

  /* ==========================================================
     MAIN LAYOUT
  ========================================================== */

  .detail-grid {
    display: grid;
    grid-template-columns:
      minmax(0,1.55fr)
      minmax(300px,0.62fr);
    gap: 14px;
    align-items: start;
  }

  .main-column,
  .side-column {
    min-width: 0;
    display: grid;
    gap: 13px;
  }

  .card {
    min-width: 0;
    padding: 19px;
    border: 1px solid #1c2939;
    border-radius: 19px;
    background:
      linear-gradient(
        145deg,
        rgba(14,21,30,0.99),
        rgba(8,13,20,0.99)
      );
    box-shadow:
      0 12px 32px rgba(0,0,0,0.15);
  }

  .section-header-simple,
  .section-heading-with-icon {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  .section-header-simple {
    margin-bottom: 14px;
  }

  .section-icon {
    flex: 0 0 auto;
    width: 41px;
    height: 41px;
    display: grid;
    place-items: center;
    border-radius: 11px;
    color: #05090d;
  }

  .cyan-icon {
    background: #29d0f1;
  }

  .orange-icon {
    background: #ff8b00;
  }

  .purple-icon {
    background: #a77cff;
  }

  .red-icon {
    background: #ff666d;
  }

  .section-header-simple > div:last-child > span,
  .section-heading-with-icon > div:last-child > span {
    display: block;
    margin-bottom: 3px;
    color: #68798d;
    font-size: 7px;
    font-weight: 1000;
    letter-spacing: 0.09em;
  }

  .card h2 {
    margin: 0;
    color: #f3f6f9;
    font-size: 22px;
    line-height: 1.1;
    letter-spacing: -0.03em;
  }

  /* ==========================================================
     LEAD INFORMATION
  ========================================================== */

  .info-grid {
    display: grid;
    grid-template-columns:
      repeat(4,minmax(0,1fr));
    gap: 8px;
    margin-bottom: 11px;
  }

  .info-item {
    min-width: 0;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 10px;
    border: 1px solid #192635;
    border-radius: 10px;
    background: #080d13;
  }

  .info-item-icon {
    flex: 0 0 auto;
    color: #30cde9;
    margin-top: 1px;
  }

  .info-item > div:last-child {
    min-width: 0;
  }

  .info-item span {
    display: block;
    margin-bottom: 3px;
    color: #617185;
    font-size: 7px;
    font-weight: 1000;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  .info-item strong,
  .info-item a {
    display: block;
    color: #aebbc7;
    font-size: 9px;
    font-weight: 800;
    line-height: 1.4;
    overflow-wrap: anywhere;
    text-decoration: none;
  }

  .info-item a:hover {
    color: #78e4f7;
  }

  .link-row {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .link-row a {
    min-height: 31px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 0 9px;
    border: 1px solid #253a4b;
    border-radius: 8px;
    color: #88e7f8;
    background: #0a141d;
    text-decoration: none;
    font-size: 8px;
    font-weight: 900;
  }

  .link-row a:hover {
    color: #ffffff;
    border-color: #29c9ed;
    background: #0c1e29;
  }

  /* ==========================================================
     PROBLEM / OFFER
  ========================================================== */

  .insight-grid {
    display: grid;
    grid-template-columns:
      repeat(2,minmax(0,1fr));
    gap: 13px;
  }

  .problem-card {
    border-color: rgba(255,93,93,0.18);
  }

  .offer-card {
    border-color: rgba(255,139,0,0.2);
  }

  .big-text {
    margin: 0;
    color: #9eabb9;
    font-size: 10px;
    line-height: 1.6;
    white-space: pre-wrap;
  }

  /* ==========================================================
     SECTION TITLE / ACTIONS
  ========================================================== */

  .section-title-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 14px;
  }

  .section-heading-with-icon {
    min-width: 0;
  }

  .section-heading-with-icon p {
    max-width: 590px;
    margin: 5px 0 0;
    color: #6f7f92;
    font-size: 9px;
    line-height: 1.45;
  }

  .button-row {
    flex: 0 0 auto;
    display: flex;
    gap: 6px;
  }

  .secondary-action-btn,
  .ai-btn,
  .audit-btn,
  .copy-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
    font-size: 8px;
    font-weight: 900;
  }

  .secondary-action-btn,
  .ai-btn,
  .audit-btn {
    min-height: 38px;
    padding: 0 11px;
    border-radius: 9px;
  }

  .secondary-action-btn {
    color: #94e9f8;
    border: 1px solid #263e50;
    background: #0a1620;
  }

  .ai-btn {
    color: #dbc8ff;
    border: 1px solid rgba(167,124,255,0.28);
    background: rgba(83,56,136,0.13);
  }

  .audit-btn {
    color: #ffffff;
    border: 1px solid transparent;
    background:
      linear-gradient(
        135deg,
        #ff8b00,
        #ff6200
      );
  }

  .secondary-action-btn:hover:not(:disabled),
  .ai-btn:hover:not(:disabled),
  .audit-btn:hover:not(:disabled) {
    filter: brightness(1.12);
  }

  /* ==========================================================
     OUTREACH
  ========================================================== */

  .outreach-list,
  .audit-list {
    display: grid;
    gap: 9px;
  }

  .outreach-message {
    padding: 12px;
    border: 1px solid #1b2938;
    border-radius: 11px;
    background: #080d13;
  }

  .outreach-message-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
  }

  .outreach-message-top > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 7px;
  }

  .channel-badge {
    display: inline-flex;
    padding: 5px 8px;
    border: 1px solid rgba(41,208,241,0.2);
    border-radius: 999px;
    color: #81e6f8;
    background: rgba(31,144,166,0.08);
    font-size: 7px;
    font-weight: 1000;
  }

  .outreach-message-top small {
    color: #536376;
    font-size: 7px;
  }

  .copy-btn {
    min-height: 29px;
    padding: 0 8px;
    border: 1px solid #2b3b4d;
    border-radius: 7px;
    color: #a7b7c8;
    background: #0c1219;
  }

  .copy-btn:hover {
    color: #ffffff;
    border-color: #29c9ed;
  }

  .outreach-message pre {
    margin: 0;
    color: #a1adba;
    font-family: inherit;
    font-size: 9px;
    line-height: 1.55;
    white-space: pre-wrap;
    word-break: break-word;
  }

  /* ==========================================================
     AUDITS
  ========================================================== */

  .audit-warning {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid rgba(255,139,0,0.2);
    border-radius: 9px;
    color: #dba664;
    background: rgba(130,75,11,0.08);
    font-size: 8px;
    line-height: 1.45;
  }

  .audit-item {
    padding: 13px;
    border: 1px solid #1b2938;
    border-radius: 12px;
    background: #080d13;
  }

  .audit-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 10px;
  }

  .audit-top > div {
    display: grid;
    gap: 3px;
  }

  .audit-number {
    color: #ff940f;
    font-size: 7px;
    font-weight: 1000;
    letter-spacing: 0.08em;
  }

  .audit-top strong {
    color: #c0ccd7;
    font-size: 12px;
  }

  .audit-top small {
    color: #59697b;
    font-size: 7px;
  }

  .audit-score-grid {
    display: grid;
    grid-template-columns:
      repeat(4,minmax(0,1fr));
    gap: 7px;
    margin-bottom: 9px;
  }

  .audit-score {
    padding: 9px;
    border: 1px solid #1f2d3c;
    border-radius: 9px;
    background: #0a1017;
  }

  .audit-score span {
    display: block;
    margin-bottom: 4px;
    color: #637286;
    font-size: 7px;
    font-weight: 1000;
    text-transform: uppercase;
  }

  .audit-score strong {
    color: #b5c0cc;
    font-size: 15px;
  }

  .audit-score.good strong {
    color: #52dc91;
  }

  .audit-score.poor strong {
    color: #ff6d6d;
  }

  .audit-summary-block {
    margin-bottom: 7px;
    padding: 10px;
    border: 1px solid #1b2938;
    border-radius: 9px;
    background: #0a1017;
  }

  .audit-summary-block.cyan {
    border-color: rgba(41,208,241,0.16);
  }

  .audit-summary-block.orange {
    border-color: rgba(255,139,0,0.2);
  }

  .audit-summary-block.green {
    border-color: rgba(73,223,145,0.18);
  }

  .audit-summary-block strong {
    display: block;
    margin-bottom: 5px;
    color: #b0bcc8;
    font-size: 8px;
    text-transform: uppercase;
  }

  .audit-summary-block p,
  .audit-summary-block li {
    color: #96a4b2;
    font-size: 9px;
    line-height: 1.5;
  }

  .audit-summary-block p {
    margin: 0;
    white-space: pre-wrap;
  }

  .audit-summary-block ul {
    margin: 6px 0 0;
    padding-left: 17px;
  }

  .audit-summary-block li {
    margin-bottom: 4px;
  }

  .problems-block {
    border-color: rgba(255,94,94,0.16);
  }

  .audit-checks {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  .audit-checks > span {
    min-height: 25px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 0 7px;
    border-radius: 999px;
    font-size: 7px;
    font-weight: 800;
  }

  .check-good {
    color: #74dfa3;
    border: 1px solid rgba(73,223,145,0.18);
    background: rgba(38,136,78,0.08);
  }

  .check-bad {
    color: #ef8888;
    border: 1px solid rgba(255,94,94,0.17);
    background: rgba(139,36,36,0.08);
  }

  .check-x {
    font-size: 13px;
    line-height: 1;
  }

  /* ==========================================================
     SIDE CONTROLS
  ========================================================== */

  .sticky-controls {
    position: sticky;
    top: 14px;
    z-index: 2;
  }

  .control-label {
    display: grid;
    gap: 6px;
    margin-bottom: 10px;
  }

  .control-label > span {
    color: #718195;
    font-size: 7px;
    font-weight: 1000;
    letter-spacing: 0.08em;
  }

  .control-label input,
  .control-label select,
  .control-label textarea {
    width: 100%;
    border: 1px solid #29394c;
    border-radius: 9px;
    outline: none;
    padding: 10px;
    color: #dce5ed;
    background: #070c12;
    font-size: 9px;
  }

  .control-label input,
  .control-label select {
    min-height: 39px;
  }

  .control-label textarea {
    min-height: 105px;
    resize: vertical;
    line-height: 1.5;
  }

  .control-label input:focus,
  .control-label select:focus,
  .control-label textarea:focus {
    border-color: #29c9ed;
    box-shadow:
      0 0 0 3px rgba(41,201,237,0.07);
  }

  .full-btn {
    width: 100%;
    min-height: 39px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    border-radius: 9px;
    padding: 0 10px;
    font-size: 8px;
    font-weight: 900;
    text-decoration: none;
    cursor: pointer;
  }

  .save-control-btn {
    color: #ffffff;
    border: 1px solid transparent;
    background:
      linear-gradient(
        135deg,
        #ff8b00,
        #ff6200
      );
  }

  .followup-btn {
    color: #071016;
    border: 1px solid transparent;
    background:
      linear-gradient(
        135deg,
        #31d2ef,
        #1289e9
      );
  }

  .crm-editor-link {
    margin-top: 7px;
    color: #9fe8f7;
    border: 1px solid #273b4d;
    background: #09141d;
  }

  .control-divider {
    height: 1px;
    margin: 13px 0;
    background: #192636;
  }

  button:disabled,
  select:disabled,
  input:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* ==========================================================
     ACTIVITY TIMELINE
  ========================================================== */

  .activity-list {
    display: grid;
    gap: 0;
  }

  .activity-item {
    position: relative;
    display: grid;
    grid-template-columns:
      17px minmax(0,1fr);
    gap: 7px;
  }

  .activity-marker {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .activity-marker::after {
    content: "";
    position: absolute;
    top: 12px;
    bottom: -2px;
    width: 1px;
    background: #263647;
  }

  .activity-item:last-child
  .activity-marker::after {
    display: none;
  }

  .activity-marker span {
    position: relative;
    z-index: 1;
    width: 8px;
    height: 8px;
    margin-top: 5px;
    border: 2px solid #0a1118;
    border-radius: 50%;
    background: #29d0f1;
    box-shadow:
      0 0 8px rgba(41,208,241,0.35);
  }

  .activity-content {
    margin-bottom: 9px;
    padding: 9px;
    border: 1px solid #1b2938;
    border-radius: 9px;
    background: #080d13;
  }

  .activity-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 7px;
  }

  .activity-badge {
    display: inline-flex;
    padding: 4px 7px;
    border: 1px solid rgba(41,208,241,0.17);
    border-radius: 999px;
    color: #7ee3f7;
    background: rgba(35,131,153,0.08);
    font-size: 6px;
    font-weight: 1000;
  }

  .activity-top small {
    color: #4f5f72;
    font-size: 6px;
  }

  .activity-content p {
    margin: 7px 0 5px;
    color: #99a7b5;
    font-size: 8px;
    line-height: 1.5;
    white-space: pre-wrap;
  }

  .activity-content time {
    display: block;
    color: #536376;
    font-size: 7px;
  }

  .danger-small {
    min-height: 27px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-top: 7px;
    padding: 0 7px;
    border: 1px solid rgba(255,83,83,0.2);
    border-radius: 7px;
    color: #ef9393;
    background: rgba(134,31,31,0.08);
    cursor: pointer;
    font-size: 7px;
    font-weight: 900;
  }

  .danger-small:hover:not(:disabled) {
    color: #ffffff;
    border-color: rgba(255,83,83,0.4);
    background: rgba(158,39,39,0.17);
  }

  /* ==========================================================
     EMPTY STATES
  ========================================================== */

  .mini-empty {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 14px;
    border: 1px dashed #263548;
    border-radius: 10px;
    color: #4f7786;
    background: rgba(6,10,15,0.5);
  }

  .mini-empty > div {
    display: grid;
    gap: 2px;
  }

  .mini-empty strong {
    color: #8493a4;
    font-size: 9px;
  }

  .mini-empty span {
    color: #526275;
    font-size: 7px;
  }

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
      0 25px 60px rgba(0,0,0,0.3);
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
      0 0 18px rgba(40,201,239,0.75);
    animation:
      pulse 1s ease-in-out infinite alternate;
  }

  .spin {
    animation:
      spin 0.8s linear infinite;
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

  /* ==========================================================
     RESPONSIVE
  ========================================================== */

  @media (max-width: 1180px) {
    .detail-header {
      flex-direction: column;
      align-items: stretch;
    }

    .header-actions {
      justify-content: flex-start;
    }

    .score-grid {
      grid-template-columns:
        repeat(2,minmax(0,1fr));
    }

    .info-grid {
      grid-template-columns:
        repeat(2,minmax(0,1fr));
    }
  }

  @media (max-width: 980px) {
    .detail-grid {
      grid-template-columns: 1fr;
    }

    .sticky-controls {
      position: static;
    }

    .side-column {
      grid-template-columns:
        repeat(2,minmax(0,1fr));
    }

    .side-column
    .card:last-child {
      grid-column: 1 / -1;
    }

    .activity-list {
      grid-template-columns:
        repeat(2,minmax(0,1fr));
      gap: 8px;
    }

    .activity-marker {
      display: none;
    }

    .activity-item {
      display: block;
    }

    .activity-content {
      height: 100%;
      margin: 0;
    }
  }

  @media (max-width: 760px) {
    .detail-shell {
      width:
        calc(100% - 20px);
      padding-top: 10px;
    }

    .detail-header {
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

    .detail-header h1 {
      font-size: 34px;
    }

    .header-actions {
      display: grid;
      grid-template-columns:
        repeat(2,minmax(0,1fr));
    }

    .header-actions a,
    .header-actions button {
      width: 100%;
    }

    .score-grid {
      grid-template-columns: 1fr;
    }

    .workspace-heading {
      flex-direction: column;
      align-items: flex-start;
    }

    .workspace-badges {
      width: 100%;
      justify-content: flex-start;
    }

    .insight-grid {
      grid-template-columns: 1fr;
    }

    .section-title-row {
      flex-direction: column;
    }

    .button-row {
      width: 100%;
    }

    .button-row button,
    .audit-btn {
      flex: 1;
    }

    .audit-score-grid {
      grid-template-columns:
        repeat(2,minmax(0,1fr));
    }

    .side-column {
      grid-template-columns: 1fr;
    }

    .side-column
    .card:last-child {
      grid-column: auto;
    }

    .activity-list {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 520px) {
    .header-main {
      flex-direction: column;
    }

    .header-actions {
      grid-template-columns: 1fr;
    }

    .detail-header h1 {
      font-size: 31px;
    }

    .card {
      padding: 15px;
    }

    .info-grid {
      grid-template-columns: 1fr;
    }

    .button-row {
      display: grid;
      grid-template-columns: 1fr;
    }

    .audit-score-grid {
      grid-template-columns: 1fr;
    }

    .outreach-message-top {
      align-items: flex-start;
    }

    .workspace-badges {
      display: grid;
      grid-template-columns: 1fr;
    }

    .workspace-badges span {
      text-align: center;
    }

    .stat-card {
      align-items: center;
    }

    .stat-icon {
      width: 50px;
      height: 50px;
    }
  }
`;
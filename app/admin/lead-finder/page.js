"use client";

import SafeExternalLink from "@/components/SafeExternalLink";
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

function calculateLeadScore(form) {
  let score = 0;

  const problemText = `${form.problem_summary || ""} ${
    form.notes || ""
  }`.toLowerCase();

  const category = (form.category || "").toLowerCase();
  const rating = Number(form.rating || 0);
  const reviews = Number(form.review_count || 0);

  if (!form.website_url) score += 30;

  if (problemText.includes("no website")) {
    score += 30;
  }

  if (
    problemText.includes("bad website") ||
    problemText.includes("old website")
  ) {
    score += 25;
  }

  if (problemText.includes("no booking")) {
    score += 15;
  }

  if (problemText.includes("no contact form")) {
    score += 15;
  }

  if (
    problemText.includes("facebook only") ||
    problemText.includes("only facebook")
  ) {
    score += 15;
  }

  if (rating >= 4) {
    score += 15;
  }

  if (reviews >= 25) {
    score += 15;
  }

  if (reviews >= 75) {
    score += 10;
  }

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

function buildOfferIdea(form, score) {
  const problemText = `${form.problem_summary || ""} ${
    form.notes || ""
  }`.toLowerCase();

  if (
    !form.website_url ||
    problemText.includes("no website")
  ) {
    return "Offer a $1,500–$3,500 starter website with lead form, SEO setup, mobile layout, Google indexing, and hosting support.";
  }

  if (problemText.includes("booking")) {
    return "Offer a $2,500–$7,500 website rebuild with online booking, quote form, email notifications, and lead tracking dashboard.";
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

function parseEstimatedValue(value) {
  if (!value) {
    return 0;
  }

  const numbers = String(value)
    .replace(/,/g, "")
    .match(/\d+/g)
    ?.map(Number)
    .filter(
      (num) =>
        !Number.isNaN(num)
    );

  if (!numbers?.length) {
    return 0;
  }

  if (numbers.length === 1) {
    return numbers[0];
  }

  return Math.round(
    numbers.reduce(
      (sum, num) =>
        sum + num,
      0
    ) / numbers.length
  );
}

function formatMoney(amount) {
  return new Intl.NumberFormat(
    "en-US",
    {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }
  ).format(amount || 0);
}

function formatDate(value) {
  if (!value) {
    return "Not set";
  }

  const date =
    new Date(value);

  return Number.isNaN(
    date.getTime()
  )
    ? "Not set"
    : date.toLocaleString();
}

function titleCase(value) {
  return String(value || "")
    .replace(
      /[-_]/g,
      " "
    )
    .replace(
      /\b\w/g,
      (letter) =>
        letter.toUpperCase()
    );
}

function getFirstProblem(
  problemSummary
) {
  const text =
    problemSummary || "";

  if (!text.trim()) {
    return "I noticed a few areas where your online presence could potentially be improved";
  }

  const clean = text
    .replaceAll(
      "\n",
      " "
    )
    .replace(
      "Website audit:",
      ""
    )
    .trim();

  return clean.length > 160
    ? `${clean.slice(
        0,
        160
      )}...`
    : clean;
}

function buildOutreachMessages(
  lead
) {
  const businessName =
    lead.business_name ||
    "your business";

  const category =
    lead.category ||
    "business";

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
      channel:
        "facebook dm",
      message:
        facebookDm,
      status:
        "draft",
    },
    {
      channel:
        "email",
      message:
        `Subject: ${emailSubject}\n\n${emailMessage}`,
      status:
        "draft",
    },
    {
      channel:
        "phone script",
      message:
        phoneScript,
      status:
        "draft",
    },
    {
      channel:
        "follow up",
      message:
        followUpMessage,
      status:
        "draft",
    },
  ];
}

export default function LeadFinderPage() {
  const [session, setSession] =
    useState(null);

  const [
    loadingSession,
    setLoadingSession,
  ] = useState(true);

  const [
    loadingLeads,
    setLoadingLeads,
  ] = useState(false);

  const [
    saving,
    setSaving,
  ] = useState(false);

  const [
    auditingId,
    setAuditingId,
  ] = useState(null);

  const [
    generatingId,
    setGeneratingId,
  ] = useState(null);

  const [
    savingActivityId,
    setSavingActivityId,
  ] = useState(null);

  const [
    deletingActivityId,
    setDeletingActivityId,
  ] = useState(null);

  const [
    deletingLeadId,
    setDeletingLeadId,
  ] = useState(null);

  const [
    updatingLeadId,
    setUpdatingLeadId,
  ] = useState(null);

  const [
    error,
    setError,
  ] = useState("");

  const [
    success,
    setSuccess,
  ] = useState("");

  const [
    leads,
    setLeads,
  ] = useState([]);

  const [
    showForm,
    setShowForm,
  ] = useState(false);

  const [
    editingId,
    setEditingId,
  ] = useState(null);

  const [
    form,
    setForm,
  ] = useState(
    emptyForm
  );

  const [
    search,
    setSearch,
  ] = useState("");

  const [
    statusFilter,
    setStatusFilter,
  ] = useState("all");

  const [
    activityForms,
    setActivityForms,
  ] = useState({});

  useEffect(() => {
    async function loadSession() {
      const { data } =
        await supabase.auth.getSession();

      setSession(
        data.session ||
          null
      );

      setLoadingSession(
        false
      );
    }

    loadSession();

    const {
      data: listener,
    } =
      supabase.auth.onAuthStateChange(
        (
          _event,
          newSession
        ) => {
          setSession(
            newSession
          );
        }
      );

    return () =>
      listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) {
      loadLeads();
    }
  }, [session]);

  async function loadLeads() {
    setLoadingLeads(
      true
    );

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
        )
      `
      )
      .order(
        "created_at",
        {
          ascending:
            false,
        }
      )
      .order(
        "created_at",
        {
          foreignTable:
            "lead_finder_activities",
          ascending:
            false,
        }
      );

    if (leadError) {
      setError(
        leadError.message
      );

      setLoadingLeads(
        false
      );

      return;
    }

    setLeads(
      data || []
    );

    setLoadingLeads(
      false
    );
  }

  function updateForm(
    field,
    value
  ) {
    setForm(
      (current) => {
        const updated = {
          ...current,
          [field]:
            value,
        };

        const score =
          calculateLeadScore(
            updated
          );

        return {
          ...updated,

          lead_score:
            score,

          offer_idea:
            updated.offer_idea ||
            buildOfferIdea(
              updated,
              score
            ),
        };
      }
    );
  }

  function updateActivityForm(
    leadId,
    field,
    value
  ) {
    setActivityForms(
      (current) => ({
        ...current,

        [leadId]: {
          activity_type:
            current[
              leadId
            ]
              ?.activity_type ||
            "note",

          activity_text:
            current[
              leadId
            ]
              ?.activity_text ||
            "",

          [field]:
            value,
        },
      })
    );
  }

  function resetForm() {
    setForm(
      emptyForm
    );

    setEditingId(
      null
    );

    setShowForm(
      false
    );
  }

  function startNewLead() {
    setError("");
    setSuccess("");

    setEditingId(
      null
    );

    setForm(
      emptyForm
    );

    setShowForm(
      true
    );

    window.scrollTo({
      top: 0,
      behavior:
        "smooth",
    });
  }

  function startEdit(
    lead
  ) {
    setError("");
    setSuccess("");

    setEditingId(
      lead.id
    );

    setForm({
      business_name:
        lead.business_name ||
        "",

      category:
        lead.category ||
        "",

      contact_name:
        lead.contact_name ||
        "",

      phone:
        lead.phone ||
        "",

      email:
        lead.email ||
        "",

      website_url:
        lead.website_url ||
        "",

      google_maps_url:
        lead.google_maps_url ||
        "",

      facebook_url:
        lead.facebook_url ||
        "",

      yelp_url:
        lead.yelp_url ||
        "",

      city:
        lead.city ||
        "",

      state:
        lead.state ||
        "",

      source:
        lead.source ||
        "manual",

      rating:
        lead.rating ||
        "",

      review_count:
        lead.review_count ||
        "",

      problem_summary:
        lead.problem_summary ||
        "",

      offer_idea:
        lead.offer_idea ||
        "",

      estimated_offer_value:
        lead.estimated_offer_value ||
        "",

      lead_score:
        lead.lead_score ||
        0,

      status:
        lead.status ||
        "new",

      notes:
        lead.notes ||
        "",

      next_followup_at:
        lead.next_followup_at
          ? lead.next_followup_at.slice(
              0,
              16
            )
          : "",
    });

    setShowForm(
      true
    );

    window.scrollTo({
      top: 0,
      behavior:
        "smooth",
    });
  }

  async function saveLead(
    e
  ) {
    e.preventDefault();

    setSaving(true);
    setError("");
    setSuccess("");

    const score =
      calculateLeadScore(
        form
      );

    const payload = {
      business_name:
        form.business_name.trim(),

      category:
        form.category ||
        null,

      contact_name:
        form.contact_name ||
        null,

      phone:
        form.phone ||
        null,

      email:
        form.email ||
        null,

      website_url:
        form.website_url ||
        null,

      google_maps_url:
        form.google_maps_url ||
        null,

      facebook_url:
        form.facebook_url ||
        null,

      yelp_url:
        form.yelp_url ||
        null,

      city:
        form.city ||
        null,

      state:
        form.state ||
        null,

      source:
        form.source ||
        "manual",

      rating:
        form.rating
          ? Number(
              form.rating
            )
          : null,

      review_count:
        form.review_count
          ? Number(
              form.review_count
            )
          : null,

      problem_summary:
        form.problem_summary ||
        null,

      offer_idea:
        form.offer_idea ||
        buildOfferIdea(
          form,
          score
        ),

      estimated_offer_value:
        form.estimated_offer_value ||
        null,

      lead_score:
        score,

      status:
        form.status ||
        "new",

      notes:
        form.notes ||
        null,

      next_followup_at:
        form.next_followup_at ||
        null,

      updated_at:
        new Date().toISOString(),
    };

    if (
      !payload.business_name
    ) {
      setError(
        "Business name is required."
      );

      setSaving(false);

      return;
    }

    const result =
      editingId
        ? await supabase
            .from(
              "lead_finder_leads"
            )
            .update(
              payload
            )
            .eq(
              "id",
              editingId
            )
            .select()
            .single()
        : await supabase
            .from(
              "lead_finder_leads"
            )
            .insert(
              payload
            )
            .select()
            .single();

    if (result.error) {
      setError(
        result.error.message
      );

      setSaving(false);

      return;
    }

    const message =
      editingId
        ? "Lead updated."
        : "Lead saved.";

    resetForm();

    setSuccess(
      message
    );

    await loadLeads();

    setSaving(false);
  }

  function exportLeadsToCsv() {
    const rows =
      filteredLeads.map(
        (lead) => ({
          business_name:
            lead.business_name ||
            "",

          category:
            lead.category ||
            "",

          contact_name:
            lead.contact_name ||
            "",

          phone:
            lead.phone ||
            "",

          email:
            lead.email ||
            "",

          website_url:
            lead.website_url ||
            "",

          google_maps_url:
            lead.google_maps_url ||
            "",

          facebook_url:
            lead.facebook_url ||
            "",

          yelp_url:
            lead.yelp_url ||
            "",

          city:
            lead.city ||
            "",

          state:
            lead.state ||
            "",

          source:
            lead.source ||
            "",

          rating:
            lead.rating ||
            "",

          review_count:
            lead.review_count ||
            "",

          problem_summary:
            lead.problem_summary ||
            "",

          offer_idea:
            lead.offer_idea ||
            "",

          estimated_offer_value:
            lead.estimated_offer_value ||
            "",

          parsed_estimated_value:
            parseEstimatedValue(
              lead.estimated_offer_value
            ),

          lead_score:
            lead.lead_score ||
            0,

          status:
            lead.status ||
            "new",

          notes:
            lead.notes ||
            "",

          next_followup_at:
            lead.next_followup_at ||
            "",

          created_at:
            lead.created_at ||
            "",
        })
      );

    if (!rows.length) {
      setError(
        "No leads to export."
      );

      return;
    }

    const headers =
      Object.keys(
        rows[0]
      );

    const csv = [
      headers.join(","),

      ...rows.map(
        (row) =>
          headers
            .map(
              (header) =>
                `"${String(
                  row[
                    header
                  ] ?? ""
                ).replaceAll(
                  '"',
                  '""'
                )}"`
            )
            .join(",")
      ),
    ].join("\n");

    const blob =
      new Blob(
        [csv],
        {
          type:
            "text/csv;charset=utf-8;",
        }
      );

    const url =
      URL.createObjectURL(
        blob
      );

    const link =
      document.createElement(
        "a"
      );

    link.href =
      url;

    link.download =
      `matthew-web-leads-${new Date()
        .toISOString()
        .slice(
          0,
          10
        )}.csv`;

    link.click();

    URL.revokeObjectURL(
      url
    );
  }

  async function updateLeadStatus(
    id,
    status
  ) {
    setUpdatingLeadId(
      id
    );

    setError("");

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
        id
      );

    if (updateError) {
      setError(
        updateError.message
      );

      setUpdatingLeadId(
        null
      );

      return;
    }

    await supabase
      .from(
        "lead_finder_activities"
      )
      .insert({
        lead_id:
          id,

        activity_type:
          status,

        activity_text:
          `Status changed to ${status}.`,
      });

    setLeads(
      (current) =>
        current.map(
          (lead) =>
            lead.id ===
            id
              ? {
                  ...lead,
                  status,
                }
              : lead
        )
    );

    setUpdatingLeadId(
      null
    );
  }

  async function runWebsiteAudit(
    lead
  ) {
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

    setAuditingId(
      lead.id
    );

    try {
      const {
        data:
          sessionData,
      } =
        await supabase.auth.getSession();

      const accessToken =
        sessionData
          ?.session
          ?.access_token;

      if (
        !accessToken
      ) {
        setError(
          "You need to sign in again before running an audit."
        );

        setAuditingId(
          null
        );

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

        setAuditingId(
          null
        );

        return;
      }

      const audit =
        result.audit;

      const {
        error:
          auditInsertError,
      } =
        await supabase
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

        setAuditingId(
          null
        );

        return;
      }

      const newProblemSummary =
        lead.problem_summary
          ? `${lead.problem_summary}\n\nWebsite audit: ${audit.audit_summary}`
          : `Website audit: ${audit.audit_summary}`;

      const updatedLeadForScore =
        {
          ...lead,

          problem_summary:
            newProblemSummary,
        };

      const newScore =
        calculateLeadScore(
          updatedLeadForScore
        );

      const {
        error:
          leadUpdateError,
      } =
        await supabase
          .from(
            "lead_finder_leads"
          )
          .update({
            problem_summary:
              newProblemSummary,

            lead_score:
              newScore,

            offer_idea:
              lead.offer_idea ||
              buildOfferIdea(
                updatedLeadForScore,
                newScore
              ),

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

        setAuditingId(
          null
        );

        return;
      }

      await supabase
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

      setSuccess(
        "Website audit complete."
      );

      await loadLeads();
    } catch (
      auditError
    ) {
      console.error(
        "Website audit error:",
        auditError
      );

      setError(
        "Website audit failed."
      );
    }

    setAuditingId(
      null
    );
  }

  async function generateOutreachMessages(
    lead
  ) {
    setError("");
    setSuccess("");

    setGeneratingId(
      lead.id
    );

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
      error:
        insertError,
    } =
      await supabase
        .from(
          "lead_finder_outreach"
        )
        .insert(
          rows
        );

    if (insertError) {
      setError(
        insertError.message
      );

      setGeneratingId(
        null
      );

      return;
    }

    await supabase
      .from(
        "lead_finder_activities"
      )
      .insert({
        lead_id:
          lead.id,

        activity_type:
          "note",

        activity_text:
          "Outreach messages generated.",
      });

    setSuccess(
      "Outreach messages generated."
    );

    setGeneratingId(
      null
    );

    await loadLeads();
  }

  async function addActivity(
    leadId
  ) {
    const current =
      activityForms[
        leadId
      ] || {
        activity_type:
          "note",

        activity_text:
          "",
      };

    if (
      !current.activity_text.trim()
    ) {
      setError(
        "Activity text is required."
      );

      return;
    }

    setError("");
    setSuccess("");

    setSavingActivityId(
      leadId
    );

    const {
      error:
        insertError,
    } =
      await supabase
        .from(
          "lead_finder_activities"
        )
        .insert({
          lead_id:
            leadId,

          activity_type:
            current.activity_type ||
            "note",

          activity_text:
            current.activity_text.trim(),
        });

    if (insertError) {
      setError(
        insertError.message
      );

      setSavingActivityId(
        null
      );

      return;
    }

    setActivityForms(
      (forms) => ({
        ...forms,

        [leadId]: {
          activity_type:
            "note",

          activity_text:
            "",
        },
      })
    );

    setSuccess(
      "Activity added."
    );

    setSavingActivityId(
      null
    );

    await loadLeads();
  }

  async function deleteActivity(
    activityId
  ) {
    if (
      !window.confirm(
        "Delete this activity?"
      )
    ) {
      return;
    }

    setDeletingActivityId(
      activityId
    );

    setError("");

    const {
      error:
        deleteError,
    } =
      await supabase
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

    await loadLeads();
  }

  async function deleteLead(
    id
  ) {
    if (
      !window.confirm(
        "Delete this lead? This cannot be undone."
      )
    ) {
      return;
    }

    setDeletingLeadId(
      id
    );

    setError("");

    const {
      error:
        deleteError,
    } =
      await supabase
        .from(
          "lead_finder_leads"
        )
        .delete()
        .eq(
          "id",
          id
        );

    if (deleteError) {
      setError(
        deleteError.message
      );

      setDeletingLeadId(
        null
      );

      return;
    }

    setLeads(
      (current) =>
        current.filter(
          (lead) =>
            lead.id !== id
        )
    );

    setDeletingLeadId(
      null
    );

    setSuccess(
      "Lead deleted."
    );
  }

  const filteredLeads =
    useMemo(() => {
      const cleanSearch =
        search
          .toLowerCase()
          .trim();

      return leads.filter(
        (lead) => {
          const status =
            lead.status ||
            "new";

          const matchesStatus =
            statusFilter ===
              "all" ||
            status ===
              statusFilter;

          const activityText =
            (
              lead.lead_finder_activities ||
              []
            )
              .map(
                (item) =>
                  `${item.activity_type} ${item.activity_text}`
              )
              .join(
                " "
              );

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
            activityText,
            status,
          ]
            .filter(
              Boolean
            )
            .join(" ")
            .toLowerCase();

          return (
            matchesStatus &&
            (
              !cleanSearch ||
              searchable.includes(
                cleanSearch
              )
            )
          );
        }
      );
    }, [
      leads,
      search,
      statusFilter,
    ]);

  const stats =
    useMemo(() => {
      const openLeads =
        leads.filter(
          (lead) =>
            ![
              "won",
              "lost",
            ].includes(
              lead.status ||
                "new"
            )
        );

      const wonLeads =
        leads.filter(
          (lead) =>
            lead.status ===
            "won"
        );

      const highScoreLeads =
        leads.filter(
          (lead) =>
            Number(
              lead.lead_score ||
                0
            ) >= 75 &&
            ![
              "won",
              "lost",
            ].includes(
              lead.status ||
                "new"
            )
        );

      return {
        total:
          leads.length,

        newLeads:
          leads.filter(
            (lead) =>
              (
                lead.status ||
                "new"
              ) === "new"
          ).length,

        contacted:
          leads.filter(
            (lead) =>
              lead.status ===
              "contacted"
          ).length,

        interested:
          leads.filter(
            (lead) =>
              lead.status ===
              "interested"
          ).length,

        won:
          wonLeads.length,

        highScore:
          highScoreLeads.length,

        pipelineValue:
          openLeads.reduce(
            (
              sum,
              lead
            ) =>
              sum +
              parseEstimatedValue(
                lead.estimated_offer_value
              ),
            0
          ),

        wonValue:
          wonLeads.reduce(
            (
              sum,
              lead
            ) =>
              sum +
              parseEstimatedValue(
                lead.estimated_offer_value
              ),
            0
          ),

        highScoreValue:
          highScoreLeads.reduce(
            (
              sum,
              lead
            ) =>
              sum +
              parseEstimatedValue(
                lead.estimated_offer_value
              ),
            0
          ),
      };
    }, [leads]);

  const followUpsDue =
    useMemo(() => {
      const now =
        new Date();

      return leads
        .filter(
          (lead) => {
            if (
              !lead.next_followup_at ||
              [
                "won",
                "lost",
              ].includes(
                lead.status ||
                  "new"
              )
            ) {
              return false;
            }

            return (
              new Date(
                lead.next_followup_at
              ) <= now
            );
          }
        )
        .sort(
          (
            a,
            b
          ) =>
            new Date(
              a.next_followup_at
            ) -
            new Date(
              b.next_followup_at
            )
        );
    }, [leads]);

  const upcomingFollowUps =
    useMemo(() => {
      const now =
        new Date();

      const sevenDaysFromNow =
        new Date(
          now
        );

      sevenDaysFromNow.setDate(
        now.getDate() +
          7
      );

      return leads
        .filter(
          (lead) => {
            if (
              !lead.next_followup_at ||
              [
                "won",
                "lost",
              ].includes(
                lead.status ||
                  "new"
              )
            ) {
              return false;
            }

            const followUpDate =
              new Date(
                lead.next_followup_at
              );

            return (
              followUpDate >
                now &&
              followUpDate <=
                sevenDaysFromNow
            );
          }
        )
        .sort(
          (
            a,
            b
          ) =>
            new Date(
              a.next_followup_at
            ) -
            new Date(
              b.next_followup_at
            )
        );
    }, [leads]);

  if (
    loadingSession
  ) {
    return (
      <main className="lead-finder-page">
        <style>
          {leadFinderStyles}
        </style>

        <section className="empty-box">
          <div className="loading-dot" />

          <h1>
            Loading Lead Finder
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
      <main className="lead-finder-page">
        <style>
          {leadFinderStyles}
        </style>

        <section className="empty-box">
          <h1>
            Lead Finder CRM
          </h1>

          <p>
            You need to sign in through Mission Control first.
          </p>

          <Link
            href="/admin"
            className="primary-link"
          >
            Go to Admin Login
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="lead-finder-page">
      <style>
        {leadFinderStyles}
      </style>

      <header className="lead-header">
        <div>
          <p className="eyebrow">
            Matthew Web • Private Sales Operations
          </p>

          <h1>
            Lead Finder CRM
          </h1>

          <p>
            Find, qualify, audit, contact, track, and convert business opportunities from one private workspace.
          </p>
        </div>

        <div className="header-actions">
          <Link
            href="/admin"
            className="secondary-btn"
          >
            Mission Control
          </Link>

          <Link
            href="/admin/lead-finder/import"
            className="secondary-btn"
          >
            Quick Import
          </Link>

          <Link
            href="/admin/lead-finder/search"
            className="secondary-btn"
          >
            Google Search
          </Link>

          <Link
            href="/admin/lead-finder/board"
            className="secondary-btn"
          >
            Pipeline Board
          </Link>

          <Link
            href="/admin/lead-finder/hot"
            className="secondary-btn"
          >
            Hot Leads
          </Link>

          <Link
            href="/admin/lead-finder/followups"
            className="secondary-btn"
          >
            Follow-Ups
          </Link>

          <button
            type="button"
            className="secondary-btn"
            onClick={
              loadLeads
            }
            disabled={
              loadingLeads
            }
          >
            {loadingLeads
              ? "Refreshing..."
              : "Refresh"}
          </button>

          <button
            type="button"
            className="secondary-btn"
            onClick={
              exportLeadsToCsv
            }
          >
            Export CSV
          </button>

          <button
            type="button"
            className="primary-btn"
            onClick={
              startNewLead
            }
          >
            Add Lead
          </button>
        </div>
      </header>

      {error ? (
        <div className="error-box">
          {error}
        </div>
      ) : null}

      {success ? (
        <div className="success-box">
          {success}
        </div>
      ) : null}

      <section className="stats-grid">
        <div className="stat-card cyan">
          <span>
            Total Leads
          </span>

          <strong>
            {stats.total}
          </strong>
        </div>

        <div className="stat-card orange">
          <span>
            New
          </span>

          <strong>
            {stats.newLeads}
          </strong>
        </div>

        <div className="stat-card blue">
          <span>
            Contacted
          </span>

          <strong>
            {stats.contacted}
          </strong>
        </div>

        <div className="stat-card purple">
          <span>
            Interested
          </span>

          <strong>
            {stats.interested}
          </strong>
        </div>

        <div className="stat-card green">
          <span>
            Won
          </span>

          <strong>
            {stats.won}
          </strong>
        </div>

        <div className="stat-card red">
          <span>
            High Score
          </span>

          <strong>
            {stats.highScore}
          </strong>
        </div>
      </section>

      <section className="value-grid">
        <div className="value-card cyan">
          <span>
            Open Pipeline Value
          </span>

          <strong>
            {formatMoney(
              stats.pipelineValue
            )}
          </strong>

          <p>
            Estimated value from open leads, excluding won and lost.
          </p>
        </div>

        <div className="value-card orange">
          <span>
            High-Score Pipeline
          </span>

          <strong>
            {formatMoney(
              stats.highScoreValue
            )}
          </strong>

          <p>
            Estimated value from open leads scoring 75 or higher.
          </p>
        </div>

        <div className="value-card green">
          <span>
            Won Value
          </span>

          <strong>
            {formatMoney(
              stats.wonValue
            )}
          </strong>

          <p>
            Estimated value from leads marked as won.
          </p>
        </div>
      </section>

      <section className="followup-panel">
        <FollowUpColumn
          title="Follow-Ups Due Now"
          description="Leads that are due today or overdue."
          leads={
            followUpsDue
          }
          urgent
          onEdit={
            startEdit
          }
        />

        <FollowUpColumn
          title="Upcoming Follow-Ups"
          description="Follow-ups due in the next 7 days."
          leads={
            upcomingFollowUps
          }
          onEdit={
            startEdit
          }
        />
      </section>

      {showForm ? (
        <section className="lead-form-card">
          <div className="form-title-row">
            <div>
              <p className="eyebrow">
                Lead Record
              </p>

              <h2>
                {editingId
                  ? "Edit Lead"
                  : "Add New Lead"}
              </h2>

              <p>
                Add or update the business information used by Lead Finder.
              </p>
            </div>

            <button
              type="button"
              className="text-btn"
              onClick={
                resetForm
              }
            >
              Cancel
            </button>
          </div>

          <form
            onSubmit={
              saveLead
            }
            className="lead-form"
          >
            <Field label="Business Name *">
              <input
                value={
                  form.business_name
                }
                onChange={(
                  e
                ) =>
                  updateForm(
                    "business_name",
                    e.target.value
                  )
                }
                required
              />
            </Field>

            <Field label="Category">
              <select
                value={
                  form.category
                }
                onChange={(
                  e
                ) =>
                  updateForm(
                    "category",
                    e.target.value
                  )
                }
              >
                <option value="">
                  Choose category
                </option>

                {categoryOptions.map(
                  (
                    category
                  ) => (
                    <option
                      key={
                        category
                      }
                      value={
                        category
                      }
                    >
                      {
                        category
                      }
                    </option>
                  )
                )}
              </select>
            </Field>

            <Field label="Contact Name">
              <input
                value={
                  form.contact_name
                }
                onChange={(
                  e
                ) =>
                  updateForm(
                    "contact_name",
                    e.target.value
                  )
                }
              />
            </Field>

            <Field label="Phone">
              <input
                value={
                  form.phone
                }
                onChange={(
                  e
                ) =>
                  updateForm(
                    "phone",
                    e.target.value
                  )
                }
              />
            </Field>

            <Field label="Email">
              <input
                type="email"
                value={
                  form.email
                }
                onChange={(
                  e
                ) =>
                  updateForm(
                    "email",
                    e.target.value
                  )
                }
              />
            </Field>

            <Field label="Website URL">
              <input
                value={
                  form.website_url
                }
                placeholder="https://example.com"
                onChange={(
                  e
                ) =>
                  updateForm(
                    "website_url",
                    e.target.value
                  )
                }
              />
            </Field>

            <Field label="Google Maps URL">
              <input
                value={
                  form.google_maps_url
                }
                onChange={(
                  e
                ) =>
                  updateForm(
                    "google_maps_url",
                    e.target.value
                  )
                }
              />
            </Field>

            <Field label="Facebook URL">
              <input
                value={
                  form.facebook_url
                }
                onChange={(
                  e
                ) =>
                  updateForm(
                    "facebook_url",
                    e.target.value
                  )
                }
              />
            </Field>

            <Field label="Yelp URL">
              <input
                value={
                  form.yelp_url
                }
                onChange={(
                  e
                ) =>
                  updateForm(
                    "yelp_url",
                    e.target.value
                  )
                }
              />
            </Field>

            <Field label="City">
              <input
                value={
                  form.city
                }
                onChange={(
                  e
                ) =>
                  updateForm(
                    "city",
                    e.target.value
                  )
                }
              />
            </Field>

            <Field label="State">
              <input
                value={
                  form.state
                }
                onChange={(
                  e
                ) =>
                  updateForm(
                    "state",
                    e.target.value
                  )
                }
              />
            </Field>

            <Field label="Source">
              <input
                value={
                  form.source
                }
                onChange={(
                  e
                ) =>
                  updateForm(
                    "source",
                    e.target.value
                  )
                }
              />
            </Field>

            <Field label="Google Rating">
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                value={
                  form.rating
                }
                onChange={(
                  e
                ) =>
                  updateForm(
                    "rating",
                    e.target.value
                  )
                }
              />
            </Field>

            <Field label="Review Count">
              <input
                type="number"
                min="0"
                value={
                  form.review_count
                }
                onChange={(
                  e
                ) =>
                  updateForm(
                    "review_count",
                    e.target.value
                  )
                }
              />
            </Field>

            <Field label="Estimated Offer Value">
              <input
                placeholder="$2,500–$7,500"
                value={
                  form.estimated_offer_value
                }
                onChange={(
                  e
                ) =>
                  updateForm(
                    "estimated_offer_value",
                    e.target.value
                  )
                }
              />
            </Field>

            <Field label="Status">
              <select
                value={
                  form.status
                }
                onChange={(
                  e
                ) =>
                  updateForm(
                    "status",
                    e.target.value
                  )
                }
              >
                {statusOptions.map(
                  (
                    status
                  ) => (
                    <option
                      key={
                        status
                      }
                      value={
                        status
                      }
                    >
                      {titleCase(
                        status
                      )}
                    </option>
                  )
                )}
              </select>
            </Field>

            <Field label="Next Follow-Up">
              <input
                type="datetime-local"
                value={
                  form.next_followup_at
                }
                onChange={(
                  e
                ) =>
                  updateForm(
                    "next_followup_at",
                    e.target.value
                  )
                }
              />
            </Field>

            <Field
              label="Problem Found"
              full
            >
              <textarea
                rows="4"
                placeholder="Example: No website, old design, no booking button, weak SEO, only Facebook page..."
                value={
                  form.problem_summary
                }
                onChange={(
                  e
                ) =>
                  updateForm(
                    "problem_summary",
                    e.target.value
                  )
                }
              />
            </Field>

            <Field
              label="Offer Idea"
              full
            >
              <textarea
                rows="4"
                value={
                  form.offer_idea
                }
                onChange={(
                  e
                ) =>
                  updateForm(
                    "offer_idea",
                    e.target.value
                  )
                }
              />
            </Field>

            <Field
              label="Notes"
              full
            >
              <textarea
                rows="5"
                value={
                  form.notes
                }
                onChange={(
                  e
                ) =>
                  updateForm(
                    "notes",
                    e.target.value
                  )
                }
              />
            </Field>

            <div className="score-preview">
              <span>
                Lead Score
              </span>

              <strong>
                {calculateLeadScore(
                  form
                )}
                /100
              </strong>
            </div>

            <button
              type="submit"
              className="primary-btn save-lead-btn"
              disabled={
                saving
              }
            >
              {saving
                ? "Saving..."
                : editingId
                  ? "Update Lead"
                  : "Save Lead"}
            </button>
          </form>
        </section>
      ) : null}

      <section className="filters">
        <div className="filter-search">
          <span>
            SEARCH
          </span>

          <input
            value={
              search
            }
            placeholder="Business, contact, phone, email, problem, notes..."
            onChange={(
              e
            ) =>
              setSearch(
                e.target.value
              )
            }
          />
        </div>

        <div className="filter-status">
          <span>
            STATUS
          </span>

          <select
            value={
              statusFilter
            }
            onChange={(
              e
            ) =>
              setStatusFilter(
                e.target.value
              )
            }
          >
            <option value="all">
              All Statuses
            </option>

            {statusOptions.map(
              (
                status
              ) => (
                <option
                  key={
                    status
                  }
                  value={
                    status
                  }
                >
                  {titleCase(
                    status
                  )}
                </option>
              )
            )}
          </select>
        </div>

        <div className="filter-count">
          {
            filteredLeads.length
          }{" "}
          shown
        </div>
      </section>

      <section className="lead-list">
        {loadingLeads ? (
          <div className="empty-box compact">
            <div className="loading-dot" />

            <h2>
              Loading leads...
            </h2>
          </div>
        ) : null}

        {!loadingLeads &&
        filteredLeads.length ===
          0 ? (
          <div className="empty-box compact">
            <h2>
              No leads found.
            </h2>

            <p>
              Try a different search or status filter.
            </p>
          </div>
        ) : null}

        {!loadingLeads &&
          filteredLeads.map(
            (lead) => {
              const activityForm =
                activityForms[
                  lead.id
                ] || {
                  activity_type:
                    "note",

                  activity_text:
                    "",
                };

              const statusClass =
                String(
                  lead.status ||
                    "new"
                ).replaceAll(
                  " ",
                  "-"
                );

              return (
                <article
                  className="lead-card"
                  key={
                    lead.id
                  }
                >
                  <div className="lead-card-top">
                    <div>
                      <div className="lead-meta-row">
                        <span className="lead-category">
                          {lead.category ||
                            "No category"}
                        </span>

                        {lead.city ||
                        lead.state ? (
                          <span className="lead-location">
                            •{" "}
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

                        <span
                          className={`status-chip status-${statusClass}`}
                        >
                          {titleCase(
                            lead.status ||
                              "new"
                          )}
                        </span>
                      </div>

                      <h2>
                        {
                          lead.business_name
                        }
                      </h2>

                      {lead.contact_name ? (
                        <p className="contact-name">
                          Contact:{" "}
                          {
                            lead.contact_name
                          }
                        </p>
                      ) : null}
                    </div>

                    <div
                      className={`score-badge ${
                        Number(
                          lead.lead_score ||
                            0
                        ) >= 75
                          ? "hot"
                          : ""
                      }`}
                    >
                      <span>
                        Score
                      </span>

                      <strong>
                        {lead.lead_score ||
                          0}
                      </strong>

                      <small>
                        /100
                      </small>
                    </div>
                  </div>

                  <div className="lead-details">
                    <Info label="Phone">
                      {lead.phone ? (
                        <a
                          href={`tel:${lead.phone}`}
                        >
                          {
                            lead.phone
                          }
                        </a>
                      ) : (
                        "None"
                      )}
                    </Info>

                    <Info label="Email">
                      {lead.email ? (
                        <a
                          href={`mailto:${lead.email}`}
                        >
                          {
                            lead.email
                          }
                        </a>
                      ) : (
                        "None"
                      )}
                    </Info>

                    <Info label="Rating">
                      {lead.rating
                        ? `${lead.rating} stars`
                        : "Unknown"}
                    </Info>

                    <Info label="Reviews">
                      {lead.review_count ||
                        "Unknown"}
                    </Info>

                    <Info label="Value">
                      {lead.estimated_offer_value
                        ? `${lead.estimated_offer_value} (${formatMoney(
                            parseEstimatedValue(
                              lead.estimated_offer_value
                            )
                          )} avg)`
                        : "Not set"}
                    </Info>

                    <Info label="Source">
                      {lead.source ||
                        "manual"}
                    </Info>

                    <Info label="Follow-Up">
                      {formatDate(
                        lead.next_followup_at
                      )}
                    </Info>
                  </div>

                  <div className="link-row">
                    {lead.website_url ? (
                      <SafeExternalLink
                        href={
                          lead.website_url
                        }
                      >
                        Website
                      </SafeExternalLink>
                    ) : null}

                    {lead.google_maps_url ? (
                      <SafeExternalLink
                        href={
                          lead.google_maps_url
                        }
                      >
                        Google Maps
                      </SafeExternalLink>
                    ) : null}

                    {lead.facebook_url ? (
                      <SafeExternalLink
                        href={
                          lead.facebook_url
                        }
                      >
                        Facebook
                      </SafeExternalLink>
                    ) : null}

                    {lead.yelp_url ? (
                      <SafeExternalLink
                        href={
                          lead.yelp_url
                        }
                      >
                        Yelp
                      </SafeExternalLink>
                    ) : null}
                  </div>

                  <div className="summary-grid">
                    <Summary
                      title="Problem Found"
                      text={
                        lead.problem_summary ||
                        "No problem summary added."
                      }
                    />

                    <Summary
                      title="Offer Idea"
                      text={
                        lead.offer_idea ||
                        "No offer idea added."
                      }
                    />

                    {lead.notes ? (
                      <Summary
                        title="Notes"
                        text={
                          lead.notes
                        }
                      />
                    ) : null}
                  </div>

                  {lead
                    .lead_finder_outreach
                    ?.length ? (
                    <div className="outreach-box">
                      <div className="panel-heading">
                        <div>
                          <span>
                            OUTREACH
                          </span>

                          <strong>
                            Saved Outreach Messages
                          </strong>
                        </div>

                        <small>
                          {
                            lead
                              .lead_finder_outreach
                              .length
                          }{" "}
                          draft(s)
                        </small>
                      </div>

                      <div className="outreach-grid">
                        {lead.lead_finder_outreach.map(
                          (
                            item
                          ) => (
                            <div
                              className="outreach-message"
                              key={
                                item.id
                              }
                            >
                              <div className="outreach-message-top">
                                <span>
                                  {titleCase(
                                    item.channel
                                  )}
                                </span>

                                <button
                                  type="button"
                                  onClick={() =>
                                    navigator.clipboard.writeText(
                                      item.message
                                    )
                                  }
                                >
                                  Copy
                                </button>
                              </div>

                              <pre>
                                {
                                  item.message
                                }
                              </pre>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  ) : null}

                  <div className="activity-box">
                    <div className="panel-heading">
                      <div>
                        <span>
                          ACTIVITY
                        </span>

                        <strong>
                          Activity Timeline
                        </strong>
                      </div>

                      <small>
                        Calls, DMs, emails, quotes and follow-ups
                      </small>
                    </div>

                    <div className="activity-form">
                      <select
                        value={
                          activityForm.activity_type
                        }
                        onChange={(
                          e
                        ) =>
                          updateActivityForm(
                            lead.id,
                            "activity_type",
                            e.target.value
                          )
                        }
                      >
                        {activityOptions.map(
                          (
                            option
                          ) => (
                            <option
                              key={
                                option
                              }
                              value={
                                option
                              }
                            >
                              {titleCase(
                                option
                              )}
                            </option>
                          )
                        )}
                      </select>

                      <textarea
                        rows="3"
                        placeholder="Example: Called and left voicemail. Follow up Friday."
                        value={
                          activityForm.activity_text
                        }
                        onChange={(
                          e
                        ) =>
                          updateActivityForm(
                            lead.id,
                            "activity_text",
                            e.target.value
                          )
                        }
                      />

                      <button
                        type="button"
                        onClick={() =>
                          addActivity(
                            lead.id
                          )
                        }
                        disabled={
                          savingActivityId ===
                          lead.id
                        }
                      >
                        {savingActivityId ===
                        lead.id
                          ? "Saving..."
                          : "Add Activity"}
                      </button>
                    </div>

                    {lead
                      .lead_finder_activities
                      ?.length ? (
                      <div className="activity-list">
                        {lead.lead_finder_activities.map(
                          (
                            activity
                          ) => (
                            <div
                              className="activity-item"
                              key={
                                activity.id
                              }
                            >
                              <div>
                                <span>
                                  {titleCase(
                                    activity.activity_type
                                  )}
                                </span>

                                <p>
                                  {
                                    activity.activity_text
                                  }
                                </p>

                                <small>
                                  {formatDate(
                                    activity.created_at
                                  )}
                                </small>
                              </div>

                              <button
                                type="button"
                                className="activity-delete"
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
                                {deletingActivityId ===
                                activity.id
                                  ? "Deleting..."
                                  : "Delete"}
                              </button>
                            </div>
                          )
                        )}
                      </div>
                    ) : (
                      <p className="mini-empty">
                        No activity logged yet.
                      </p>
                    )}
                  </div>

                  <div className="card-actions">
                    <select
                      value={
                        lead.status ||
                        "new"
                      }
                      disabled={
                        updatingLeadId ===
                        lead.id
                      }
                      onChange={(
                        e
                      ) =>
                        updateLeadStatus(
                          lead.id,
                          e.target.value
                        )
                      }
                    >
                      {statusOptions.map(
                        (
                          status
                        ) => (
                          <option
                            key={
                              status
                            }
                            value={
                              status
                            }
                          >
                            {titleCase(
                              status
                            )}
                          </option>
                        )
                      )}
                    </select>

                    <Link
                      href={`/admin/lead-finder/${lead.id}`}
                      className="secondary-btn"
                    >
                      Open Lead
                    </Link>

                    <button
                      type="button"
                      onClick={() =>
                        runWebsiteAudit(
                          lead
                        )
                      }
                      disabled={
                        auditingId ===
                        lead.id
                      }
                    >
                      {auditingId ===
                      lead.id
                        ? "Auditing..."
                        : "Run Audit"}
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        generateOutreachMessages(
                          lead
                        )
                      }
                      disabled={
                        generatingId ===
                        lead.id
                      }
                    >
                      {generatingId ===
                      lead.id
                        ? "Generating..."
                        : "Generate Outreach"}
                    </button>

                    <button
                      type="button"
                      className="secondary-btn"
                      onClick={() =>
                        startEdit(
                          lead
                        )
                      }
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      className="danger-btn"
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
                      lead.id
                        ? "Deleting..."
                        : "Delete"}
                    </button>
                  </div>
                </article>
              );
            }
          )}
      </section>
    </main>
  );
}

function Field({
  label,
  children,
  full = false,
}) {
  return (
    <label
      className={
        full
          ? "full"
          : ""
      }
    >
      <span>
        {label}
      </span>

      {children}
    </label>
  );
}

function Info({
  label,
  children,
}) {
  return (
    <div className="info-card">
      <span>
        {label}
      </span>

      <strong>
        {children}
      </strong>
    </div>
  );
}

function Summary({
  title,
  text,
}) {
  return (
    <div className="summary-box">
      <strong>
        {title}
      </strong>

      <p>
        {text}
      </p>
    </div>
  );
}

function FollowUpColumn({
  title,
  description,
  leads,
  urgent = false,
  onEdit,
}) {
  return (
    <div
      className={`followup-column ${
        urgent
          ? "urgent"
          : ""
      }`}
    >
      <div className="followup-title-row">
        <div>
          <h2>
            {title}
          </h2>

          <p>
            {description}
          </p>
        </div>

        <strong>
          {leads.length}
        </strong>
      </div>

      {!leads.length ? (
        <p className="mini-empty">
          {urgent
            ? "No follow-ups due right now."
            : "No upcoming follow-ups in the next week."}
        </p>
      ) : (
        <div className="followup-list">
          {leads
            .slice(
              0,
              6
            )
            .map(
              (
                lead
              ) => (
                <div
                  className="followup-item"
                  key={
                    lead.id
                  }
                >
                  <div>
                    <h3>
                      {
                        lead.business_name
                      }
                    </h3>

                    <p>
                      {lead.category ||
                        "Lead"}

                      {lead.city ||
                      lead.state
                        ? ` • ${[
                            lead.city,
                            lead.state,
                          ]
                            .filter(
                              Boolean
                            )
                            .join(
                              ", "
                            )}`
                        : ""}
                    </p>

                    <span>
                      Due:{" "}
                      {formatDate(
                        lead.next_followup_at
                      )}
                    </span>
                  </div>

                  <div className="followup-actions">
                    <Link
                      href={`/admin/lead-finder/${lead.id}`}
                    >
                      Open
                    </Link>

                    {lead.phone ? (
                      <a
                        href={`tel:${lead.phone}`}
                      >
                        Call
                      </a>
                    ) : null}

                    {lead.email ? (
                      <a
                        href={`mailto:${lead.email}`}
                      >
                        Email
                      </a>
                    ) : null}

                    <button
                      type="button"
                      onClick={() =>
                        onEdit(
                          lead
                        )
                      }
                    >
                      Edit
                    </button>
                  </div>
                </div>
              )
            )}
        </div>
      )}
    </div>
  );
}

const leadFinderStyles = `
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
  textarea,
  select {
    font: inherit;
  }

  button,
  a,
  select {
    -webkit-tap-highlight-color: transparent;
  }

  .lead-finder-page {
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
    padding: 34px 20px 70px;
    background:
      radial-gradient(
        circle at 8% -5%,
        rgba(0, 194, 255, 0.13),
        transparent 31%
      ),
      radial-gradient(
        circle at 96% 2%,
        rgba(255, 128, 0, 0.12),
        transparent 28%
      ),
      linear-gradient(
        180deg,
        #06090f 0%,
        #05070b 48%,
        #06080d 100%
      );
  }

  .lead-finder-page::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: 0.14;
    background-image:
      linear-gradient(
        rgba(255, 255, 255, 0.026) 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.026) 1px,
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

  .lead-header,
  .stats-grid,
  .value-grid,
  .followup-panel,
  .lead-form-card,
  .filters,
  .lead-list,
  .error-box,
  .success-box,
  .empty-box {
    position: relative;
    z-index: 1;
    width: min(
      100%,
      1480px
    );
    margin-left: auto;
    margin-right: auto;
  }

  .eyebrow {
    margin: 0 0 8px;
    color: #32d7ff;
    font-size: 11px;
    font-weight: 1000;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  .lead-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 28px;
    margin-bottom: 15px;
    padding: 28px;
    border: 1px solid #192536;
    border-radius: 26px;
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

  .lead-header h1 {
    margin: 0 0 9px;
    color: #ffffff;
    font-size:
      clamp(
        36px,
        5vw,
        55px
      );
    line-height: 1;
    letter-spacing: -0.05em;
  }

  .lead-header p:not(.eyebrow) {
    max-width: 720px;
    margin: 0;
    color: #8f9daf;
    font-size: 14px;
    line-height: 1.55;
  }

  .header-actions {
    flex: 0 1 720px;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 8px;
  }

  button,
  .primary-btn,
  .secondary-btn,
  .primary-link {
    min-height: 42px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    border-radius: 11px;
    padding: 0 14px;
    color: #ffffff;
    background:
      linear-gradient(
        135deg,
        #ff8900,
        #ff6700
      );
    box-shadow:
      0 7px 18px rgba(255, 111, 0, 0.11);
    cursor: pointer;
    text-decoration: none;
    font-size: 12px;
    font-weight: 900;
    transition: 0.16s ease;
  }

  button:hover:not(:disabled),
  .primary-btn:hover,
  .primary-link:hover {
    transform:
      translateY(-1px);
    box-shadow:
      0 10px 25px rgba(255, 111, 0, 0.2);
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  .secondary-btn {
    color: #a9eefe;
    background: #0a141e;
    border-color: #233849;
    box-shadow: none;
  }

  .secondary-btn:hover {
    color: #ffffff;
    background: #0b1b27;
    border-color: #28c9ef;
  }

  .danger-btn {
    color: #ffb5b5;
    background:
      rgba(
        158,
        28,
        28,
        0.12
      );
    border-color:
      rgba(
        255,
        80,
        80,
        0.25
      );
    box-shadow: none;
  }

  .danger-btn:hover:not(:disabled) {
    color: #ffffff;
    background:
      rgba(
        188,
        35,
        35,
        0.22
      );
    border-color:
      rgba(
        255,
        80,
        80,
        0.48
      );
    box-shadow: none;
  }

  .text-btn {
    min-height: 36px;
    color: #8be9fb;
    background: transparent;
    border-color: #25384a;
    box-shadow: none;
  }

  .error-box,
  .success-box {
    margin-bottom: 16px;
    padding: 14px 16px;
    border-radius: 13px;
    font-size: 13px;
    font-weight: 800;
  }

  .error-box {
    color: #ffb2b2;
    background:
      rgba(
        129,
        24,
        24,
        0.19
      );
    border:
      1px solid
      rgba(
        255,
        75,
        75,
        0.3
      );
  }

  .success-box {
    color: #9af0bf;
    background:
      rgba(
        25,
        120,
        67,
        0.13
      );
    border:
      1px solid
      rgba(
        65,
        219,
        132,
        0.25
      );
  }

  .stats-grid {
    display: grid;
    grid-template-columns:
      repeat(
        6,
        minmax(
          0,
          1fr
        )
      );
    gap: 11px;
    margin-bottom: 14px;
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
  }

  .stat-card::before {
    content: "";
    display: block;
    width: 38px;
    height: 5px;
    margin-bottom: 19px;
    border-radius: 999px;
    background: currentColor;
    box-shadow:
      0 0 18px currentColor;
  }

  .stat-card.cyan {
    color: #25d4f4;
  }

  .stat-card.orange {
    color: #ff8a00;
  }

  .stat-card.blue {
    color: #4d8dff;
  }

  .stat-card.purple {
    color: #a77cff;
  }

  .stat-card.green {
    color: #47de8d;
  }

  .stat-card.red {
    color: #ff6268;
  }

  .stat-card span {
    display: block;
    margin-bottom: 8px;
    color: #8492a5;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  .stat-card strong {
    color: #ffffff;
    font-size: 35px;
    line-height: 1;
  }

  .value-grid {
    display: grid;
    grid-template-columns:
      repeat(
        3,
        minmax(
          0,
          1fr
        )
      );
    gap: 12px;
    margin-bottom: 25px;
  }

  .value-card {
    padding: 20px;
    border: 1px solid #1b2a3a;
    border-radius: 19px;
    background:
      linear-gradient(
        145deg,
        rgba(12, 19, 28, 0.98),
        rgba(8, 13, 20, 0.98)
      );
  }

  .value-card span {
    display: block;
    margin-bottom: 8px;
    color: #7d8a9b;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .value-card strong {
    display: block;
    margin-bottom: 8px;
    font-size:
      clamp(
        28px,
        3vw,
        39px
      );
    line-height: 1;
  }

  .value-card.cyan strong {
    color: #71e8ff;
  }

  .value-card.orange strong {
    color: #ffad51;
  }

  .value-card.green strong {
    color: #7aefad;
  }

  .value-card p {
    margin: 0;
    color: #6e7d90;
    font-size: 11px;
    line-height: 1.45;
  }

  .followup-panel {
    display: grid;
    grid-template-columns:
      repeat(
        2,
        minmax(
          0,
          1fr
        )
      );
    gap: 13px;
    margin-bottom: 25px;
  }

  .followup-column {
    padding: 20px;
    border: 1px solid #1c2939;
    border-radius: 20px;
    background:
      linear-gradient(
        145deg,
        #0c131c,
        #080d14
      );
  }

  .followup-column.urgent {
    border-color:
      rgba(
        255,
        130,
        0,
        0.28
      );
    background:
      linear-gradient(
        145deg,
        rgba(29, 18, 9, 0.94),
        rgba(11, 13, 17, 0.98)
      );
  }

  .followup-title-row {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 14px;
  }

  .followup-title-row h2 {
    margin: 0 0 5px;
    color: #f6f8fb;
    font-size: 20px;
  }

  .urgent
  .followup-title-row h2 {
    color: #ffad52;
  }

  .followup-title-row p {
    margin: 0;
    color: #748397;
    font-size: 11px;
  }

  .followup-title-row > strong {
    min-width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    border-radius: 13px;
    color: #051016;
    background: #2bd2f2;
    font-size: 20px;
  }

  .urgent
  .followup-title-row > strong {
    background: #ff8900;
    color: #0c0803;
  }

  .followup-list {
    display: grid;
    gap: 9px;
  }

  .followup-item {
    display: flex;
    justify-content: space-between;
    gap: 13px;
    padding: 13px;
    border: 1px solid #192635;
    border-radius: 14px;
    background: #080e15;
  }

  .followup-item h3 {
    margin: 0 0 4px;
    color: #eef3f7;
    font-size: 14px;
  }

  .followup-item p {
    margin: 0 0 5px;
    color: #40cfea;
    font-size: 10px;
    font-weight: 800;
  }

  .followup-item span {
    color: #68778b;
    font-size: 10px;
  }

  .followup-actions {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .followup-actions a,
  .followup-actions button {
    min-height: 31px;
    padding: 0 9px;
    border: 1px solid #233a4b;
    border-radius: 8px;
    color: #9ceafd;
    background: #0b1721;
    box-shadow: none;
    font-size: 9px;
    font-weight: 900;
    text-decoration: none;
  }

  .mini-empty {
    margin: 0;
    padding: 15px;
    border: 1px dashed #263446;
    border-radius: 13px;
    color: #667589;
    background:
      rgba(
        6,
        10,
        15,
        0.6
      );
    text-align: center;
    font-size: 11px;
  }

  .lead-form-card {
    margin-bottom: 22px;
    padding: 23px;
    border: 1px solid #1c2a3a;
    border-radius: 22px;
    background:
      linear-gradient(
        145deg,
        #0d151e,
        #080d14
      );
  }

  .form-title-row {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    margin-bottom: 20px;
    padding-bottom: 17px;
    border-bottom:
      1px solid #182536;
  }

  .form-title-row h2 {
    margin: 0 0 5px;
    color: #f5f8fb;
    font-size: 26px;
  }

  .form-title-row p:not(.eyebrow) {
    margin: 0;
    color: #738296;
    font-size: 11px;
  }

  .lead-form {
    display: grid;
    grid-template-columns:
      repeat(
        3,
        minmax(
          0,
          1fr
        )
      );
    gap: 13px;
  }

  .lead-form label {
    display: grid;
    gap: 7px;
    min-width: 0;
  }

  .lead-form label > span {
    color: #9eacbd;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.035em;
  }

  .lead-form input,
  .lead-form select,
  .lead-form textarea,
  .filters input,
  .filters select,
  .card-actions select,
  .activity-form select,
  .activity-form textarea {
    width: 100%;
    border: 1px solid #263548;
    border-radius: 11px;
    outline: none;
    background: #070c12;
    color: #eaf0f5;
    padding: 12px 13px;
    font-size: 12px;
  }

  .lead-form input,
  .lead-form select {
    min-height: 45px;
  }

  .lead-form textarea,
  .activity-form textarea {
    resize: vertical;
    min-height: 100px;
    line-height: 1.5;
  }

  .lead-form input:focus,
  .lead-form select:focus,
  .lead-form textarea:focus,
  .filters input:focus,
  .filters select:focus,
  .card-actions select:focus,
  .activity-form select:focus,
  .activity-form textarea:focus {
    border-color: #27cdec;
    box-shadow:
      0 0 0 3px rgba(39, 205, 236, 0.07);
  }

  .lead-form input::placeholder,
  .lead-form textarea::placeholder,
  .filters input::placeholder,
  .activity-form textarea::placeholder {
    color: #4c596a;
  }

  .lead-form .full {
    grid-column:
      1 / -1;
  }

  .score-preview {
    min-height: 77px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 13px 16px;
    border:
      1px solid
      rgba(
        255,
        133,
        0,
        0.22
      );
    border-radius: 13px;
    background:
      rgba(
        255,
        127,
        0,
        0.055
      );
  }

  .score-preview span {
    margin-bottom: 5px;
    color: #a77f5c;
    font-size: 9px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .score-preview strong {
    color: #ff9a32;
    font-size: 27px;
  }

  .save-lead-btn {
    min-height: 77px;
  }

  .filters {
    display: grid;
    grid-template-columns:
      minmax(
        0,
        1fr
      )
      220px
      auto;
    gap: 10px;
    align-items: end;
    margin-bottom: 17px;
    padding: 13px;
    border: 1px solid #192536;
    border-radius: 16px;
    background: #090f16;
  }

  .filter-search,
  .filter-status {
    display: grid;
    gap: 6px;
  }

  .filter-search > span,
  .filter-status > span {
    color: #657589;
    font-size: 9px;
    font-weight: 1000;
    letter-spacing: 0.09em;
  }

  .filters input,
  .filters select {
    min-height: 45px;
  }

  .filter-count {
    min-height: 45px;
    display: grid;
    place-items: center;
    padding: 0 14px;
    border: 1px solid #233849;
    border-radius: 11px;
    color: #86e8fa;
    background: #0a141d;
    font-size: 11px;
    font-weight: 900;
    white-space: nowrap;
  }

  .lead-list {
    display: grid;
    gap: 14px;
  }

  .lead-card {
    min-width: 0;
    padding: 20px;
    border: 1px solid #1b293a;
    border-radius: 20px;
    background:
      linear-gradient(
        145deg,
        rgba(14, 21, 31, 0.98),
        rgba(8, 13, 20, 0.99)
      );
    box-shadow:
      0 14px 35px rgba(0, 0, 0, 0.17),
      inset 0 1px 0 rgba(255, 255, 255, 0.025);
  }

  .lead-card:hover {
    border-color: #2a4054;
  }

  .lead-card-top {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom:
      1px solid #172434;
  }

  .lead-meta-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 7px;
    margin-bottom: 6px;
  }

  .lead-category {
    color: #31cfee;
    font-size: 10px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .lead-location {
    color: #69798c;
    font-size: 10px;
    font-weight: 700;
  }

  .status-chip {
    display: inline-flex;
    padding: 4px 7px;
    border: 1px solid #2b3c50;
    border-radius: 999px;
    color: #9ba9b9;
    background: #0a1119;
    font-size: 8px;
    font-weight: 1000;
    text-transform: uppercase;
  }

  .status-new {
    color: #83eaff;
    border-color:
      rgba(
        39,
        205,
        236,
        0.28
      );
  }

  .status-contacted,
  .status-quote-sent,
  .status-follow-up-later {
    color: #ffbd73;
    border-color:
      rgba(
        255,
        139,
        0,
        0.28
      );
  }

  .status-interested {
    color: #cbb5ff;
    border-color:
      rgba(
        167,
        124,
        255,
        0.3
      );
  }

  .status-won {
    color: #8bf0b5;
    border-color:
      rgba(
        71,
        222,
        141,
        0.3
      );
  }

  .status-lost {
    color: #ff9c9c;
    border-color:
      rgba(
        255,
        98,
        104,
        0.3
      );
  }

  .lead-card h2 {
    margin: 0;
    color: #f7f9fb;
    font-size:
      clamp(
        22px,
        3vw,
        29px
      );
    line-height: 1.1;
  }

  .contact-name {
    margin: 5px 0 0;
    color: #718095;
    font-size: 11px;
  }

  .score-badge {
    min-width: 82px;
    padding: 11px;
    border:
      1px solid
      rgba(
        255,
        133,
        0,
        0.22
      );
    border-radius: 14px;
    text-align: center;
    background:
      rgba(
        255,
        126,
        0,
        0.06
      );
  }

  .score-badge span {
    display: block;
    color: #a9784d;
    font-size: 8px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .score-badge strong {
    color: #ff9c35;
    font-size: 30px;
    line-height: 1;
  }

  .score-badge small {
    color: #74593f;
    font-size: 8px;
  }

  .score-badge.hot {
    border-color:
      rgba(
        255,
        85,
        85,
        0.33
      );
    background:
      rgba(
        255,
        61,
        61,
        0.06
      );
  }

  .score-badge.hot strong {
    color: #ff7474;
  }

  .lead-details {
    display: grid;
    grid-template-columns:
      repeat(
        4,
        minmax(
          0,
          1fr
        )
      );
    gap: 8px;
    margin-bottom: 13px;
  }

  .info-card {
    min-width: 0;
    padding: 10px 11px;
    border: 1px solid #192534;
    border-radius: 11px;
    background: #080d13;
  }

  .info-card > span {
    display: block;
    margin-bottom: 4px;
    color: #65768a;
    font-size: 8px;
    font-weight: 1000;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .info-card > strong {
    display: block;
    color: #a8b5c3;
    font-size: 10px;
    line-height: 1.45;
    overflow-wrap: anywhere;
  }

  .info-card a {
    color: #7ce6fa;
    text-decoration: none;
  }

  .link-row {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 13px;
  }

  .link-row a {
    min-height: 31px;
    display: inline-flex;
    align-items: center;
    padding: 0 10px;
    border: 1px solid #23394a;
    border-radius: 8px;
    color: #8be9fb;
    background: #09141d;
    font-size: 9px;
    font-weight: 900;
    text-decoration: none;
  }

  .summary-grid {
    display: grid;
    grid-template-columns:
      repeat(
        2,
        minmax(
          0,
          1fr
        )
      );
    gap: 9px;
    margin-bottom: 10px;
  }

  .summary-grid
  .summary-box:last-child:nth-child(3) {
    grid-column:
      1 / -1;
  }

  .summary-box {
    padding: 13px;
    border: 1px solid #1a2736;
    border-radius: 12px;
    background: #090f16;
  }

  .summary-box strong {
    color: #ff9d39;
    font-size: 9px;
    font-weight: 1000;
    text-transform: uppercase;
    letter-spacing: 0.07em;
  }

  .summary-box p {
    margin: 7px 0 0;
    color: #a4b0be;
    font-size: 11px;
    line-height: 1.52;
    white-space: pre-wrap;
  }

  .outreach-box,
  .activity-box {
    margin-top: 10px;
    padding: 14px;
    border: 1px solid #1e3040;
    border-radius: 14px;
    background:
      linear-gradient(
        145deg,
        rgba(9, 22, 30, 0.8),
        rgba(8, 13, 19, 0.96)
      );
  }

  .outreach-box {
    border-color:
      rgba(
        255,
        132,
        0,
        0.19
      );
  }

  .panel-heading {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    align-items: end;
    margin-bottom: 11px;
  }

  .panel-heading > div {
    display: grid;
    gap: 3px;
  }

  .panel-heading span {
    color: #43d7f1;
    font-size: 8px;
    font-weight: 1000;
    letter-spacing: 0.09em;
  }

  .outreach-box
  .panel-heading span {
    color: #ff9d39;
  }

  .panel-heading strong {
    color: #eef4f8;
    font-size: 13px;
  }

  .panel-heading small {
    color: #617186;
    font-size: 9px;
  }

  .outreach-grid {
    display: grid;
    grid-template-columns:
      repeat(
        2,
        minmax(
          0,
          1fr
        )
      );
    gap: 9px;
  }

  .outreach-message {
    padding: 12px;
    border: 1px solid #26313d;
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

  .outreach-message-top span {
    color: #ffad57;
    font-size: 9px;
    font-weight: 1000;
    text-transform: uppercase;
  }

  .outreach-message-top button {
    min-height: 28px;
    padding: 0 9px;
    color: #afeffc;
    background: #0b1720;
    border-color: #314252;
    box-shadow: none;
    font-size: 9px;
  }

  .outreach-message pre {
    margin: 0;
    color: #aab5c1;
    white-space: pre-wrap;
    word-break: break-word;
    font-family: inherit;
    font-size: 10px;
    line-height: 1.55;
  }

  .activity-form {
    display: grid;
    grid-template-columns:
      155px
      minmax(
        0,
        1fr
      )
      auto;
    gap: 8px;
    align-items: start;
    margin-bottom: 11px;
  }

  .activity-form select {
    min-height: 40px;
  }

  .activity-form textarea {
    min-height: 73px;
  }

  .activity-form button {
    min-height: 40px;
    white-space: nowrap;
  }

  .activity-list {
    display: grid;
    gap: 7px;
  }

  .activity-item {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 10px;
    border: 1px solid #1b2938;
    border-radius: 10px;
    background: #080d13;
  }

  .activity-item > div {
    min-width: 0;
  }

  .activity-item span {
    display: inline-flex;
    margin-bottom: 5px;
    padding: 4px 7px;
    border:
      1px solid
      rgba(
        44,
        207,
        238,
        0.18
      );
    border-radius: 999px;
    color: #84e9fa;
    background:
      rgba(
        28,
        174,
        204,
        0.08
      );
    font-size: 8px;
    font-weight: 1000;
  }

  .activity-item p {
    margin: 0 0 5px;
    color: #9eabb9;
    font-size: 10px;
    line-height: 1.45;
    white-space: pre-wrap;
  }

  .activity-item small {
    color: #546478;
    font-size: 8px;
  }

  .activity-delete {
    min-height: 28px;
    padding: 0 8px;
    color: #ffaaaa;
    background:
      rgba(
        143,
        29,
        29,
        0.11
      );
    border-color:
      rgba(
        255,
        74,
        74,
        0.2
      );
    box-shadow: none;
    font-size: 8px;
  }

  .card-actions {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 7px;
    margin-top: 12px;
    padding-top: 13px;
    border-top:
      1px solid #192536;
  }

  .card-actions select {
    width: auto;
    min-width: 165px;
    min-height: 39px;
  }

  .card-actions button,
  .card-actions a {
    min-height: 39px;
  }

  .card-actions
  .danger-btn {
    margin-left: auto;
  }

  .empty-box {
    margin-top: 50px;
    padding: 35px;
    border: 1px solid #1d2a39;
    border-radius: 20px;
    color: #758397;
    background:
      linear-gradient(
        145deg,
        #0d141d,
        #080d13
      );
    box-shadow:
      0 20px 50px rgba(0, 0, 0, 0.25);
    text-align: center;
  }

  .empty-box.compact {
    margin-top: 0;
    padding: 28px;
  }

  .empty-box h1,
  .empty-box h2 {
    margin: 0 0 8px;
    color: #f6f8fb;
  }

  .empty-box h1 {
    font-size: 32px;
  }

  .empty-box h2 {
    font-size: 20px;
  }

  .empty-box p {
    margin: 0 0 17px;
    color: #718094;
    font-size: 13px;
  }

  .loading-dot {
    width: 14px;
    height: 14px;
    margin: 0 auto 14px;
    border-radius: 50%;
    background: #28c9ef;
    box-shadow:
      0 0 18px rgba(40, 201, 239, 0.75);
    animation:
      pulse
      1s
      ease-in-out
      infinite
      alternate;
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

  @media (max-width: 1250px) {
    .lead-header {
      align-items:
        flex-start;
      flex-direction:
        column;
    }

    .header-actions {
      flex: none;
      width: 100%;
      justify-content:
        flex-start;
    }

    .stats-grid {
      grid-template-columns:
        repeat(
          3,
          minmax(
            0,
            1fr
          )
        );
    }

    .lead-details {
      grid-template-columns:
        repeat(
          3,
          minmax(
            0,
            1fr
          )
        );
    }
  }

  @media (max-width: 1050px) {
    .value-grid,
    .followup-panel {
      grid-template-columns:
        1fr;
    }

    .lead-form {
      grid-template-columns:
        repeat(
          2,
          minmax(
            0,
            1fr
          )
        );
    }

    .lead-details {
      grid-template-columns:
        repeat(
          2,
          minmax(
            0,
            1fr
          )
        );
    }

    .outreach-grid {
      grid-template-columns:
        1fr;
    }

    .activity-form {
      grid-template-columns:
        1fr;
    }

    .activity-form button {
      width: 100%;
    }
  }

  @media (max-width: 760px) {
    .lead-finder-page {
      padding:
        14px
        10px
        50px;
    }

    .lead-header {
      padding: 20px;
      border-radius: 20px;
    }

    .lead-header h1 {
      font-size: 36px;
    }

    .lead-header p:not(.eyebrow) {
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

    .header-actions button,
    .header-actions a {
      width: 100%;
    }

    .stats-grid {
      grid-template-columns:
        repeat(
          2,
          minmax(
            0,
            1fr
          )
        );
    }

    .lead-form {
      grid-template-columns:
        1fr;
    }

    .lead-form .full {
      grid-column: auto;
    }

    .filters {
      grid-template-columns:
        1fr;
    }

    .filter-count {
      width: 100%;
    }

    .followup-item,
    .activity-item {
      flex-direction:
        column;
    }

    .followup-actions {
      width: 100%;
      justify-content:
        flex-start;
    }

    .followup-actions a,
    .followup-actions button,
    .activity-delete {
      flex: 1;
      width: 100%;
    }

    .lead-card {
      padding: 15px;
      border-radius: 17px;
    }

    .lead-card-top {
      flex-direction:
        column;
    }

    .score-badge {
      width: 100%;
    }

    .lead-details,
    .summary-grid {
      grid-template-columns:
        1fr;
    }

    .summary-grid
    .summary-box:last-child:nth-child(3) {
      grid-column: auto;
    }

    .card-actions {
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

    .card-actions select,
    .card-actions button,
    .card-actions a {
      width: 100%;
      min-width: 0;
      max-width: none;
    }

    .card-actions
    .danger-btn {
      margin-left: 0;
    }
  }

  @media (max-width: 480px) {
    .header-actions,
    .stats-grid,
    .card-actions {
      grid-template-columns:
        1fr;
    }

    .value-card,
    .followup-column,
    .lead-form-card {
      padding: 16px;
    }

    .form-title-row {
      flex-direction:
        column;
    }

    .form-title-row
    .text-btn {
      width: 100%;
    }

    .lead-card h2 {
      font-size: 22px;
    }
  }
`;
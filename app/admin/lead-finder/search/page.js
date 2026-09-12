"use client";

import SafeExternalLink from "@/components/SafeExternalLink";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  CheckCircle2,
  ExternalLink,
  Flame,
  Globe2,
  Import,
  MapPin,
  Phone,
  RefreshCw,
  Save,
  Search,
  Star,
  Target,
  Users,
  X,
} from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

/* ============================================================
   MATTHEW WEB — GOOGLE PLACES LEAD SEARCH
============================================================ */

export default function LeadFinderSearchPage() {
  const [session, setSession] = useState(null);
  const [loadingSession, setLoadingSession] = useState(true);

  const [query, setQuery] = useState("");
  const [places, setPlaces] = useState([]);

  const [searching, setSearching] = useState(false);
  const [savingId, setSavingId] = useState(null);
  const [bulkSaving, setBulkSaving] = useState(false);

  const [savedIds, setSavedIds] = useState([]);
  const [existingKeys, setExistingKeys] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  /* ==========================================================
     SESSION
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

  /* ==========================================================
     DUPLICATE HELPERS
  ========================================================== */

  function makeLeadKey(place) {
    const website = (place.website_url || "")
      .toLowerCase()
      .trim();

    const maps = (place.google_maps_url || "")
      .toLowerCase()
      .trim();

    const name = (place.business_name || "")
      .toLowerCase()
      .trim();

    const phone = (place.phone || "")
      .replace(/\D/g, "");

    return {
      website,
      maps,
      name,
      phone,
    };
  }

  function isExistingLead(place) {
    const key = makeLeadKey(place);

    return existingKeys.some((existing) => {
      if (
        key.website &&
        existing.website &&
        key.website === existing.website
      ) {
        return true;
      }

      if (
        key.maps &&
        existing.maps &&
        key.maps === existing.maps
      ) {
        return true;
      }

      if (
        key.phone &&
        existing.phone &&
        key.phone === existing.phone
      ) {
        return true;
      }

      if (
        key.name &&
        existing.name &&
        key.name === existing.name
      ) {
        return true;
      }

      return false;
    });
  }

  /* ==========================================================
     SELECTION
  ========================================================== */

  function toggleSelected(placeId) {
    setSelectedIds((current) =>
      current.includes(placeId)
        ? current.filter((id) => id !== placeId)
        : [...current, placeId]
    );
  }

  function selectHighScoreLeads() {
    const ids = places
      .filter(
        (place) =>
          Number(place.lead_score || 0) >= 50
      )
      .filter(
        (place) =>
          !savedIds.includes(place.place_id)
      )
      .filter(
        (place) =>
          !isExistingLead(place)
      )
      .map(
        (place) =>
          place.place_id
      );

    setSelectedIds(ids);
  }

  function selectAllNewLeads() {
    const ids = places
      .filter(
        (place) =>
          !savedIds.includes(place.place_id)
      )
      .filter(
        (place) =>
          !isExistingLead(place)
      )
      .map(
        (place) =>
          place.place_id
      );

    setSelectedIds(ids);
  }

  function clearSelected() {
    setSelectedIds([]);
  }

  /* ==========================================================
     GOOGLE PLACES SEARCH
  ========================================================== */

  async function searchPlaces(e) {
    e.preventDefault();

    setError("");
    setSuccess("");
    setSearching(true);
    setPlaces([]);
    setSelectedIds([]);

    try {
      const { data: sessionData } =
        await supabase.auth.getSession();

      const accessToken =
        sessionData?.session?.access_token;

      if (!accessToken) {
        setError(
          "You need to sign in again."
        );

        setSearching(false);
        return;
      }

      const response = await fetch(
        "/api/lead-finder/places-search",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Authorization:
              `Bearer ${accessToken}`,
          },

          body: JSON.stringify({
            query,
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
            "Search failed."
        );

        setSearching(false);
        return;
      }

      const foundPlaces =
        result.places || [];

      setPlaces(foundPlaces);

      const {
        data: existingLeads,
        error: existingError,
      } = await supabase
        .from(
          "lead_finder_leads"
        )
        .select(
          "business_name, phone, website_url, google_maps_url"
        );

      if (existingError) {
        setError(
          existingError.message
        );

        setSearching(false);
        return;
      }

      setExistingKeys(
        (existingLeads || []).map(
          (lead) => ({
            name:
              (
                lead.business_name ||
                ""
              )
                .toLowerCase()
                .trim(),

            phone:
              (
                lead.phone ||
                ""
              ).replace(
                /\D/g,
                ""
              ),

            website:
              (
                lead.website_url ||
                ""
              )
                .toLowerCase()
                .trim(),

            maps:
              (
                lead.google_maps_url ||
                ""
              )
                .toLowerCase()
                .trim(),
          })
        )
      );

      setSuccess(
        `Found ${foundPlaces.length} businesses.`
      );
    } catch (searchError) {
      console.error(
        "Google Places search error:",
        searchError
      );

      setError(
        "Google Places search could not be completed."
      );
    }

    setSearching(false);
  }

  /* ==========================================================
     SAVE ONE LEAD
  ========================================================== */

  async function saveLead(place) {
    setError("");
    setSuccess("");
    setSavingId(place.place_id);

    if (isExistingLead(place)) {
      setError(
        "This business already looks like it exists in your Lead Finder CRM."
      );

      setSavingId(null);
      return;
    }

    const payload = {
      business_name:
        place.business_name,

      category:
        place.category ||
        null,

      phone:
        place.phone ||
        null,

      website_url:
        place.website_url ||
        null,

      google_maps_url:
        place.google_maps_url ||
        null,

      city:
        place.city ||
        null,

      state:
        place.state ||
        null,

      source:
        place.source ||
        "Google Places",

      rating:
        place.rating ||
        null,

      review_count:
        place.review_count ||
        null,

      problem_summary:
        place.problem_summary ||
        null,

      offer_idea:
        place.offer_idea ||
        null,

      lead_score:
        place.lead_score ||
        0,

      status:
        "new",

      notes:
        place.address
          ? `Address: ${place.address}`
          : null,

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

      setSavingId(null);
      return;
    }

    setSavedIds(
      (current) => [
        ...current,
        place.place_id,
      ]
    );

    setSelectedIds(
      (current) =>
        current.filter(
          (id) =>
            id !== place.place_id
        )
    );

    setExistingKeys(
      (current) => [
        ...current,
        makeLeadKey(place),
      ]
    );

    setSuccess(
      `${place.business_name} saved to Lead Finder CRM.`
    );

    setSavingId(null);
  }

  /* ==========================================================
     BULK SAVE
  ========================================================== */

  async function saveSelectedLeads() {
    setError("");
    setSuccess("");

    const selectedPlaces =
      places
        .filter(
          (place) =>
            selectedIds.includes(
              place.place_id
            )
        )
        .filter(
          (place) =>
            !savedIds.includes(
              place.place_id
            )
        )
        .filter(
          (place) =>
            !isExistingLead(place)
        );

    if (
      selectedPlaces.length ===
      0
    ) {
      setError(
        "Select at least one new lead to save."
      );

      return;
    }

    setBulkSaving(true);

    const rows =
      selectedPlaces.map(
        (place) => ({
          business_name:
            place.business_name,

          category:
            place.category ||
            null,

          phone:
            place.phone ||
            null,

          website_url:
            place.website_url ||
            null,

          google_maps_url:
            place.google_maps_url ||
            null,

          city:
            place.city ||
            null,

          state:
            place.state ||
            null,

          source:
            place.source ||
            "Google Places",

          rating:
            place.rating ||
            null,

          review_count:
            place.review_count ||
            null,

          problem_summary:
            place.problem_summary ||
            null,

          offer_idea:
            place.offer_idea ||
            null,

          lead_score:
            place.lead_score ||
            0,

          status:
            "new",

          notes:
            place.address
              ? `Address: ${place.address}`
              : null,

          updated_at:
            new Date().toISOString(),
        })
      );

    const {
      error: insertError,
    } = await supabase
      .from(
        "lead_finder_leads"
      )
      .insert(rows);

    if (insertError) {
      setError(
        insertError.message
      );

      setBulkSaving(false);
      return;
    }

    setSavedIds(
      (current) => [
        ...current,

        ...selectedPlaces.map(
          (place) =>
            place.place_id
        ),
      ]
    );

    setExistingKeys(
      (current) => [
        ...current,

        ...selectedPlaces.map(
          (place) =>
            makeLeadKey(place)
        ),
      ]
    );

    setSelectedIds([]);

    setSuccess(
      `${selectedPlaces.length} leads saved to Lead Finder CRM.`
    );

    setBulkSaving(false);
  }

  /* ==========================================================
     RESULT STATS
  ========================================================== */

  const stats = useMemo(() => {
    const alreadySaved =
      places.filter(
        (place) =>
          savedIds.includes(
            place.place_id
          ) ||
          isExistingLead(place)
      ).length;

    const highScore =
      places.filter(
        (place) =>
          Number(
            place.lead_score ||
              0
          ) >= 50 &&
          !savedIds.includes(
            place.place_id
          ) &&
          !isExistingLead(place)
      ).length;

    const newLeads =
      Math.max(
        places.length -
          alreadySaved,
        0
      );

    return {
      found:
        places.length,

      newLeads,

      highScore,

      selected:
        selectedIds.length,
    };
  }, [
    places,
    savedIds,
    existingKeys,
    selectedIds,
  ]);

  /* ==========================================================
     LOADING SESSION
  ========================================================== */

  if (loadingSession) {
    return (
      <main className="places-page">
        <style>{styles}</style>

        <section className="empty-box">
          <div className="loading-dot" />

          <h1>
            Loading Lead Search
          </h1>

          <p>
            Verifying your Matthew Web admin session.
          </p>
        </section>
      </main>
    );
  }

  /* ==========================================================
     NOT SIGNED IN
  ========================================================== */

  if (!session) {
    return (
      <main className="places-page">
        <style>{styles}</style>

        <section className="empty-box">
          <Search size={42} />

          <h1>
            Google Places Lead Search
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

  /* ==========================================================
     PAGE
  ========================================================== */

  return (
    <main className="places-page">
      <style>{styles}</style>

      <div className="places-shell">

        {/* ====================================================
            HEADER
        ==================================================== */}

        <header className="places-header">
          <div className="header-main">
            <div className="header-icon">
              <Search size={29} />
            </div>

            <div>
              <p className="eyebrow">
                Matthew Web • Lead Discovery
              </p>

              <h1>
                Google Lead{" "}
                <span>
                  Search
                </span>
              </h1>

              <p className="header-description">
                Search real businesses through Google Places,
                review their opportunity score, avoid duplicates,
                and save qualified prospects directly into Lead
                Finder CRM.
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
              href="/admin/lead-finder/import"
              className="secondary-btn"
            >
              <Import size={16} />
              Quick Import
            </Link>
          </div>
        </header>

        {/* ====================================================
            ALERTS
        ==================================================== */}

        {error ? (
          <div className="error-box">
            <strong>
              Lead Search Error
            </strong>

            <span>{error}</span>
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

        {/* ====================================================
            SEARCH
        ==================================================== */}

        <section className="search-card">
          <div className="search-heading">
            <div>
              <p className="eyebrow">
                Google Places
              </p>

              <h2>
                Find Businesses Fast
              </h2>

              <p>
                Enter a business type and location. Results can be
                reviewed and saved directly into your private CRM.
              </p>
            </div>

            <div className="search-status">
              <Globe2 size={18} />

              <div>
                <span>
                  SEARCH SOURCE
                </span>

                <strong>
                  Google Places
                </strong>
              </div>
            </div>
          </div>

          <form
            onSubmit={searchPlaces}
            className="search-form"
          >
            <label>
              <span>
                BUSINESS SEARCH
              </span>

              <div className="search-input-wrap">
                <Search size={19} />

                <input
                  value={query}
                  onChange={(e) =>
                    setQuery(
                      e.target.value
                    )
                  }
                  placeholder="Example: roofers in Allentown PA"
                  required
                />
              </div>
            </label>

            <button
              type="submit"
              className="primary-btn search-submit"
              disabled={searching}
            >
              {searching ? (
                <>
                  <RefreshCw
                    size={17}
                    className="spin"
                  />

                  Searching
                </>
              ) : (
                <>
                  <Search size={17} />
                  Search Businesses
                </>
              )}
            </button>
          </form>

          <div className="example-area">
            <span className="example-label">
              QUICK SEARCH EXAMPLES
            </span>

            <div className="examples">
              <button
                type="button"
                onClick={() =>
                  setQuery(
                    "roofers in Allentown PA"
                  )
                }
              >
                roofers in Allentown PA
              </button>

              <button
                type="button"
                onClick={() =>
                  setQuery(
                    "contractors in Lehigh Valley PA"
                  )
                }
              >
                contractors in Lehigh Valley PA
              </button>

              <button
                type="button"
                onClick={() =>
                  setQuery(
                    "landscapers in Madison ME"
                  )
                }
              >
                landscapers in Madison ME
              </button>
            </div>
          </div>
        </section>

        {/* ====================================================
            RESULT STATS
        ==================================================== */}

        {places.length > 0 ? (
          <section className="stats-grid">
            <article className="stat-card cyan">
              <div className="stat-icon">
                <Building2
                  size={24}
                  strokeWidth={2.8}
                />
              </div>

              <div>
                <span>
                  Businesses Found
                </span>

                <strong>
                  {stats.found}
                </strong>

                <small>
                  Results returned from Google Places
                </small>
              </div>
            </article>

            <article className="stat-card green">
              <div className="stat-icon">
                <Target
                  size={24}
                  strokeWidth={2.8}
                />
              </div>

              <div>
                <span>
                  New Prospects
                </span>

                <strong>
                  {stats.newLeads}
                </strong>

                <small>
                  Not currently matched to your CRM
                </small>
              </div>
            </article>

            <article className="stat-card orange">
              <div className="stat-icon">
                <Flame
                  size={24}
                  strokeWidth={2.8}
                />
              </div>

              <div>
                <span>
                  High Score
                </span>

                <strong>
                  {stats.highScore}
                </strong>

                <small>
                  New prospects scoring 50 or higher
                </small>
              </div>
            </article>

            <article className="stat-card purple">
              <div className="stat-icon">
                <CheckCircle2
                  size={24}
                  strokeWidth={2.8}
                />
              </div>

              <div>
                <span>
                  Selected
                </span>

                <strong>
                  {stats.selected}
                </strong>

                <small>
                  Ready for bulk CRM import
                </small>
              </div>
            </article>
          </section>
        ) : null}

        {/* ====================================================
            BULK ACTIONS
        ==================================================== */}

        {places.length > 0 ? (
          <section className="bulk-actions">
            <div className="bulk-status">
              <div className="bulk-icon">
                <Users size={21} />
              </div>

              <div>
                <span>
                  CURRENT SELECTION
                </span>

                <strong>
                  {selectedIds.length} selected
                </strong>
              </div>
            </div>

            <div className="bulk-buttons">
              <button
                type="button"
                className="secondary-action"
                onClick={selectAllNewLeads}
              >
                <CheckCircle2 size={14} />
                Select All New
              </button>

              <button
                type="button"
                className="hot-action"
                onClick={selectHighScoreLeads}
              >
                <Flame size={14} />
                Select High Score
              </button>

              <button
                type="button"
                className="clear-action"
                onClick={clearSelected}
                disabled={
                  selectedIds.length === 0
                }
              >
                <X size={14} />
                Clear
              </button>

              <button
                type="button"
                className="save-selected"
                onClick={saveSelectedLeads}
                disabled={
                  bulkSaving ||
                  selectedIds.length === 0
                }
              >
                {bulkSaving ? (
                  <>
                    <RefreshCw
                      size={14}
                      className="spin"
                    />

                    Saving
                  </>
                ) : (
                  <>
                    <Save size={14} />
                    Save Selected
                  </>
                )}
              </button>
            </div>
          </section>
        ) : null}

        {/* ====================================================
            RESULT HEADING
        ==================================================== */}

        <section className="results-heading">
          <div>
            <p className="eyebrow">
              Prospect Results
            </p>

            <h2>
              Business Opportunities
            </h2>

            <p>
              Review the score, business information, website
              status, problem summary, and recommended offer
              before saving each prospect.
            </p>
          </div>

          {places.length > 0 ? (
            <div className="results-count">
              <strong>
                {places.length}
              </strong>

              <span>
                results
              </span>
            </div>
          ) : null}
        </section>

        {/* ====================================================
            RESULTS
        ==================================================== */}

        <section className="places-list">
          {places.length === 0 ? (
            <div className="empty-results">
              <Search size={34} />

              <h3>
                No Search Results Yet
              </h3>

              <p>
                Search for a business type and location to start
                building your Lead Finder prospect list.
              </p>
            </div>
          ) : null}

          {places.map((place) => {
            const alreadySaved =
              savedIds.includes(
                place.place_id
              ) ||
              isExistingLead(place);

            const selected =
              selectedIds.includes(
                place.place_id
              );

            const score =
              Number(
                place.lead_score ||
                  0
              );

            return (
              <article
                className={`place-card ${
                  selected
                    ? "selected"
                    : ""
                } ${
                  alreadySaved
                    ? "saved"
                    : ""
                }`}
                key={place.place_id}
              >
                <div className="place-top">
                  <label className="select-lead-box">
                    <input
                      type="checkbox"
                      checked={selected}
                      disabled={
                        alreadySaved
                      }
                      onChange={() =>
                        toggleSelected(
                          place.place_id
                        )
                      }
                    />

                    <span>
                      {alreadySaved
                        ? "Already Saved"
                        : selected
                          ? "Selected"
                          : "Select Lead"}
                    </span>
                  </label>

                  <div className="place-main">
                    <div className="place-meta">
                      <span className="place-category">
                        {place.category ||
                          "Business"}
                      </span>

                      {place.city ||
                      place.state ? (
                        <span className="place-location">
                          <MapPin
                            size={12}
                          />

                          {[
                            place.city,
                            place.state,
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

                    <h2>
                      {place.business_name}
                    </h2>

                    {place.address ? (
                      <p className="address">
                        <MapPin
                          size={14}
                        />

                        {place.address}
                      </p>
                    ) : null}
                  </div>

                  <div
                    className={`score-badge ${
                      score >= 75
                        ? "very-hot"
                        : score >= 50
                          ? "hot"
                          : ""
                    }`}
                  >
                    <span>
                      SCORE
                    </span>

                    <strong>
                      {score}
                    </strong>

                    <small>
                      /100
                    </small>
                  </div>
                </div>

                <div className="details-grid">
                  <div className="detail-card">
                    <Phone size={17} />

                    <div>
                      <span>
                        Phone
                      </span>

                      {place.phone ? (
                        <a
                          href={`tel:${place.phone}`}
                        >
                          {place.phone}
                        </a>
                      ) : (
                        <strong>
                          None found
                        </strong>
                      )}
                    </div>
                  </div>

                  <div className="detail-card rating-detail">
                    <Star size={17} />

                    <div>
                      <span>
                        Rating
                      </span>

                      <strong>
                        {place.rating
                          ? `${place.rating} stars`
                          : "Unknown"}
                      </strong>
                    </div>
                  </div>

                  <div className="detail-card">
                    <Users size={17} />

                    <div>
                      <span>
                        Reviews
                      </span>

                      <strong>
                        {place.review_count ||
                          "Unknown"}
                      </strong>
                    </div>
                  </div>

                  <div
                    className={`detail-card ${
                      place.website_url
                        ? "website-found"
                        : "website-missing"
                    }`}
                  >
                    <Globe2 size={17} />

                    <div>
                      <span>
                        Website
                      </span>

                      <strong>
                        {place.website_url
                          ? "Found"
                          : "Missing"}
                      </strong>
                    </div>
                  </div>
                </div>

                <div className="link-row">
                  {place.phone ? (
                    <a
                      href={`tel:${place.phone}`}
                    >
                      <Phone size={14} />
                      Call
                    </a>
                  ) : null}

                  {place.website_url ? (
                    <SafeExternalLink href={place.website_url}>
                      <Globe2 size={14} />
                      Website
                    </SafeExternalLink>
                  ) : null}

                  {place.google_maps_url ? (
                    <SafeExternalLink href={place.google_maps_url}>
                      <MapPin size={14} />
                      Google Maps
                    </SafeExternalLink>
                  ) : null}
                </div>

                <div className="summary-grid">
                  <div className="summary-box problem-summary">
                    <div className="summary-title">
                      <Target size={15} />

                      <strong>
                        Problem Found
                      </strong>
                    </div>

                    <p>
                      {place.problem_summary ||
                        "No problem summary generated."}
                    </p>
                  </div>

                  <div className="summary-box offer-summary">
                    <div className="summary-title">
                      <Flame size={15} />

                      <strong>
                        Offer Idea
                      </strong>
                    </div>

                    <p>
                      {place.offer_idea ||
                        "No offer idea generated."}
                    </p>
                  </div>
                </div>

                <div className="save-row">
                  <div className="save-status">
                    {alreadySaved ? (
                      <>
                        <CheckCircle2
                          size={17}
                        />

                        <div>
                          <strong>
                            Already in CRM
                          </strong>

                          <span>
                            Duplicate protection is active
                          </span>
                        </div>
                      </>
                    ) : selected ? (
                      <>
                        <Target size={17} />

                        <div>
                          <strong>
                            Selected for bulk save
                          </strong>

                          <span>
                            Use Save Selected above
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <Building2
                          size={17}
                        />

                        <div>
                          <strong>
                            New Prospect
                          </strong>

                          <span>
                            Available to save into Lead Finder
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  <button
                    type="button"
                    className={
                      alreadySaved
                        ? "saved-button"
                        : "save-button"
                    }
                    onClick={() =>
                      saveLead(place)
                    }
                    disabled={
                      savingId ===
                        place.place_id ||
                      alreadySaved
                    }
                  >
                    {alreadySaved ? (
                      <>
                        <CheckCircle2
                          size={15}
                        />

                        Already Saved
                      </>
                    ) : savingId ===
                      place.place_id ? (
                      <>
                        <RefreshCw
                          size={15}
                          className="spin"
                        />

                        Saving
                      </>
                    ) : (
                      <>
                        <Save size={15} />
                        Save Lead
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}

/* ============================================================
   STYLES
============================================================ */

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
  input {
    font: inherit;
  }

  a,
  button,
  input {
    -webkit-tap-highlight-color: transparent;
  }

  .places-page {
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

  .places-page::before {
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

  .places-shell {
    position: relative;
    z-index: 1;
    width: min(
      1380px,
      calc(100% - 36px)
    );
    margin: 0 auto;
    padding: 32px 0 60px;
  }

  /* ==========================================================
     HEADER
  ========================================================== */

  .places-header {
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

  .places-header h1 {
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

  .places-header h1 span {
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

  /* ==========================================================
     BUTTONS
  ========================================================== */

  .primary-btn,
  .secondary-btn,
  .search-submit {
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

  .primary-btn,
  .search-submit {
    border: 1px solid transparent;
    color: #ffffff;
    background:
      linear-gradient(
        135deg,
        #ff8900,
        #ff6200
      );
    box-shadow:
      0 8px 20px rgba(255, 105, 0, 0.18);
  }

  .primary-btn:hover:not(:disabled),
  .search-submit:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow:
      0 11px 26px rgba(255, 105, 0, 0.25);
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

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
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

  /* ==========================================================
     SEARCH CARD
  ========================================================== */

  .search-card {
    margin-bottom: 17px;
    padding: 23px;
    border: 1px solid #1b2939;
    border-radius: 22px;
    background:
      linear-gradient(
        145deg,
        #0d151e,
        #080d14
      );
  }

  .search-heading {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 18px;
  }

  .search-heading h2 {
    margin: 0 0 6px;
    color: #f5f8fb;
    font-size: 27px;
    letter-spacing: -0.035em;
  }

  .search-heading p:not(.eyebrow) {
    max-width: 720px;
    margin: 0;
    color: #768599;
    font-size: 11px;
    line-height: 1.5;
  }

  .search-status {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 9px 12px;
    border: 1px solid #25394a;
    border-radius: 11px;
    color: #31cdea;
    background: #08121a;
  }

  .search-status div {
    display: grid;
    gap: 2px;
  }

  .search-status span {
    color: #536579;
    font-size: 7px;
    font-weight: 1000;
  }

  .search-status strong {
    color: #a7dbe6;
    font-size: 9px;
  }

  .search-form {
    display: grid;
    grid-template-columns:
      minmax(0, 1fr)
      auto;
    gap: 10px;
    align-items: end;
  }

  .search-form label {
    display: grid;
    gap: 6px;
  }

  .search-form label > span {
    color: #738296;
    font-size: 8px;
    font-weight: 1000;
    letter-spacing: 0.08em;
  }

  .search-input-wrap {
    min-height: 51px;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 0 13px;
    border: 1px solid #29394c;
    border-radius: 12px;
    background: #070c12;
  }

  .search-input-wrap svg {
    flex: 0 0 auto;
    color: #30cce9;
  }

  .search-input-wrap:focus-within {
    border-color: #29c9ed;
    box-shadow:
      0 0 0 3px rgba(41, 201, 237, 0.07);
  }

  .search-input-wrap input {
    min-width: 0;
    width: 100%;
    height: 49px;
    border: none;
    outline: none;
    color: #f2f6fa;
    background: transparent;
    font-size: 13px;
  }

  .search-input-wrap input::placeholder {
    color: #4e5c6d;
  }

  .search-submit {
    min-height: 51px;
    padding: 0 18px;
  }

  .example-area {
    margin-top: 16px;
    padding-top: 14px;
    border-top: 1px solid #182536;
  }

  .example-label {
    display: block;
    margin-bottom: 8px;
    color: #56677b;
    font-size: 7px;
    font-weight: 1000;
    letter-spacing: 0.08em;
  }

  .examples {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .examples button {
    min-height: 32px;
    padding: 0 10px;
    border: 1px solid #26394b;
    border-radius: 8px;
    color: #86e4f7;
    background: #09141d;
    cursor: pointer;
    font-size: 8px;
    font-weight: 900;
  }

  .examples button:hover {
    color: #ffffff;
    border-color: #29c9ed;
    background: #0c1d28;
  }

  /* ==========================================================
     STATS
  ========================================================== */

  .stats-grid {
    display: grid;
    grid-template-columns:
      repeat(4, minmax(0, 1fr));
    gap: 11px;
    margin-bottom: 17px;
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

  .stat-card.green {
    --stat-accent: #49df91;
  }

  .stat-card.orange {
    --stat-accent: #ff8b00;
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
    font-size: 29px;
    line-height: 1;
  }

  .stat-card small {
    display: block;
    margin-top: 6px;
    color: #637286;
    font-size: 8px;
    line-height: 1.35;
  }

  /* ==========================================================
     BULK ACTIONS
  ========================================================== */

  .bulk-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    margin-bottom: 25px;
    padding: 15px;
    border: 1px solid #1c2939;
    border-radius: 16px;
    background: #090f16;
  }

  .bulk-status {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .bulk-icon {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    color: #05090d;
    background: #29d0f1;
  }

  .bulk-status > div:last-child {
    display: grid;
    gap: 2px;
  }

  .bulk-status span {
    color: #5d6d80;
    font-size: 7px;
    font-weight: 1000;
    letter-spacing: 0.08em;
  }

  .bulk-status strong {
    color: #dde6ee;
    font-size: 11px;
  }

  .bulk-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .bulk-buttons button {
    min-height: 34px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 0 10px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 8px;
    font-weight: 900;
  }

  .secondary-action {
    color: #8ae8fa;
    border: 1px solid #273c4e;
    background: #0a151e;
  }

  .hot-action {
    color: #ffc078;
    border: 1px solid rgba(255, 139, 0, 0.27);
    background: rgba(151, 77, 0, 0.1);
  }

  .clear-action {
    color: #a4b1bf;
    border: 1px solid #2b3948;
    background: #0a0f15;
  }

  .save-selected {
    color: #ffffff;
    border: 1px solid transparent;
    background:
      linear-gradient(
        135deg,
        #ff8b00,
        #ff6200
      );
  }

  .bulk-buttons button:hover:not(:disabled) {
    filter: brightness(1.12);
  }

  /* ==========================================================
     RESULT HEADING
  ========================================================== */

  .results-heading {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 13px;
  }

  .results-heading h2 {
    margin: 0 0 5px;
    color: #f5f8fb;
    font-size: 28px;
    letter-spacing: -0.035em;
  }

  .results-heading p:not(.eyebrow) {
    max-width: 740px;
    margin: 0;
    color: #738296;
    font-size: 11px;
    line-height: 1.5;
  }

  .results-count {
    flex: 0 0 auto;
    display: flex;
    align-items: baseline;
    gap: 5px;
    padding: 8px 11px;
    border: 1px solid #243749;
    border-radius: 10px;
    background: #090f17;
  }

  .results-count strong {
    color: #ffffff;
    font-size: 17px;
  }

  .results-count span {
    color: #66778a;
    font-size: 8px;
    font-weight: 900;
    text-transform: uppercase;
  }

  /* ==========================================================
     PLACES
  ========================================================== */

  .places-list {
    display: grid;
    gap: 13px;
  }

  .place-card {
    position: relative;
    overflow: hidden;
    padding: 20px;
    border: 1px solid #1c2939;
    border-radius: 19px;
    background:
      linear-gradient(
        145deg,
        #0e151e,
        #080d13
      );
    box-shadow:
      0 12px 32px rgba(0, 0, 0, 0.16);
    transition:
      border-color 0.16s ease,
      transform 0.16s ease;
  }

  .place-card:hover {
    border-color: #2c4054;
  }

  .place-card.selected {
    border-color: rgba(41, 208, 241, 0.4);
    box-shadow:
      0 0 0 1px rgba(41, 208, 241, 0.07),
      0 12px 32px rgba(0, 0, 0, 0.16);
  }

  .place-card.saved {
    border-color: rgba(73, 223, 145, 0.22);
  }

  .place-card::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: #29d0f1;
  }

  .place-card.selected::before {
    background: #29d0f1;
    box-shadow:
      0 0 15px rgba(41, 208, 241, 0.5);
  }

  .place-card.saved::before {
    background: #49df91;
  }

  .place-top {
    display: grid;
    grid-template-columns:
      125px
      minmax(0, 1fr)
      auto;
    gap: 16px;
    align-items: flex-start;
    margin-bottom: 13px;
  }

  /* ==========================================================
     SELECT BOX
  ========================================================== */

  .select-lead-box {
    min-height: 74px;
    display: grid;
    place-items: center;
    align-content: center;
    gap: 7px;
    padding: 10px;
    border: 1px solid #263647;
    border-radius: 11px;
    color: #8896a8;
    background: #080e15;
    cursor: pointer;
    text-align: center;
  }

  .select-lead-box input {
    width: 20px;
    height: 20px;
    accent-color: #29d0f1;
    cursor: pointer;
  }

  .select-lead-box input:disabled {
    cursor: not-allowed;
  }

  .select-lead-box span {
    font-size: 8px;
    font-weight: 1000;
    text-transform: uppercase;
  }

  /* ==========================================================
     BUSINESS INFO
  ========================================================== */

  .place-main {
    min-width: 0;
  }

  .place-meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 7px;
    margin-bottom: 6px;
  }

  .place-category {
    color: #39d0eb;
    font-size: 9px;
    font-weight: 1000;
    text-transform: capitalize;
  }

  .place-location {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: #68788b;
    font-size: 9px;
    font-weight: 800;
  }

  .place-card h2 {
    margin: 0;
    color: #f6f8fa;
    font-size:
      clamp(
        22px,
        3vw,
        29px
      );
    line-height: 1.12;
    letter-spacing: -0.035em;
  }

  .address {
    display: flex;
    align-items: flex-start;
    gap: 5px;
    margin: 6px 0 0;
    color: #718195;
    font-size: 9px;
    line-height: 1.4;
  }

  .address svg {
    flex: 0 0 auto;
    margin-top: 1px;
  }

  /* ==========================================================
     SCORE
  ========================================================== */

  .score-badge {
    flex: 0 0 auto;
    min-width: 77px;
    padding: 10px;
    border: 1px solid #2b3c4e;
    border-radius: 13px;
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
    color: #93a2b2;
    font-size: 27px;
    line-height: 1;
  }

  .score-badge small {
    color: #586779;
    font-size: 7px;
  }

  .score-badge.hot {
    border-color: rgba(255, 139, 0, 0.3);
    background: rgba(255, 128, 0, 0.06);
  }

  .score-badge.hot strong {
    color: #ff9c36;
  }

  .score-badge.very-hot {
    border-color: rgba(255, 85, 85, 0.35);
    background: rgba(255, 61, 61, 0.065);
  }

  .score-badge.very-hot strong {
    color: #ff7070;
  }

  /* ==========================================================
     DETAILS
  ========================================================== */

  .details-grid {
    display: grid;
    grid-template-columns:
      repeat(4, minmax(0, 1fr));
    gap: 8px;
    margin-bottom: 10px;
  }

  .detail-card {
    min-width: 0;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 10px;
    border: 1px solid #192635;
    border-radius: 10px;
    color: #31cfea;
    background: #080d13;
  }

  .detail-card > svg {
    flex: 0 0 auto;
    margin-top: 2px;
  }

  .detail-card > div {
    min-width: 0;
  }

  .detail-card span {
    display: block;
    margin-bottom: 3px;
    color: #607084;
    font-size: 7px;
    font-weight: 1000;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  .detail-card strong,
  .detail-card a {
    display: block;
    color: #adb9c5;
    font-size: 9px;
    font-weight: 800;
    line-height: 1.4;
    text-decoration: none;
    overflow-wrap: anywhere;
  }

  .detail-card a:hover {
    color: #83eafa;
  }

  .rating-detail {
    color: #ffc14c;
  }

  .website-found {
    color: #49df91;
  }

  .website-missing {
    color: #ff6969;
  }

  /* ==========================================================
     LINKS
  ========================================================== */

  .link-row {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 10px;
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
     SUMMARIES
  ========================================================== */

  .summary-grid {
    display: grid;
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
    gap: 8px;
    margin-bottom: 11px;
  }

  .summary-box {
    min-width: 0;
    padding: 11px;
    border: 1px solid #1b2938;
    border-radius: 10px;
    background: #090f16;
  }

  .problem-summary {
    border-color: rgba(41, 208, 241, 0.15);
  }

  .offer-summary {
    border-color: rgba(255, 139, 0, 0.18);
  }

  .summary-title {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 6px;
    color: #31cfea;
  }

  .offer-summary .summary-title {
    color: #ff960e;
  }

  .summary-title strong {
    color: #a5b1bd;
    font-size: 8px;
    font-weight: 1000;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  .summary-box p {
    margin: 0;
    color: #9ba8b6;
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
  }

  /* ==========================================================
     SAVE ROW
  ========================================================== */

  .save-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding-top: 11px;
    border-top: 1px solid #192534;
  }

  .save-status {
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #31cfea;
  }

  .saved .save-status {
    color: #49df91;
  }

  .save-status > div {
    min-width: 0;
    display: grid;
    gap: 2px;
  }

  .save-status strong {
    color: #a8b5c2;
    font-size: 9px;
  }

  .save-status span {
    color: #5c6c80;
    font-size: 7px;
  }

  .save-button,
  .saved-button {
    min-height: 38px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 0 12px;
    border-radius: 9px;
    font-size: 9px;
    font-weight: 900;
  }

  .save-button {
    color: #ffffff;
    border: 1px solid transparent;
    background:
      linear-gradient(
        135deg,
        #ff8b00,
        #ff6200
      );
    cursor: pointer;
  }

  .save-button:hover:not(:disabled) {
    filter: brightness(1.08);
  }

  .saved-button {
    color: #89e9af;
    border: 1px solid rgba(73, 223, 145, 0.2);
    background: rgba(35, 132, 76, 0.1);
  }

  /* ==========================================================
     EMPTY
  ========================================================== */

  .empty-results {
    display: grid;
    justify-items: center;
    gap: 7px;
    padding: 50px 20px;
    border: 1px dashed #273648;
    border-radius: 17px;
    color: #53687c;
    background: rgba(6, 10, 15, 0.5);
    text-align: center;
  }

  .empty-results svg {
    color: #4b7f8e;
  }

  .empty-results h3 {
    margin: 2px 0 0;
    color: #9aa8b6;
    font-size: 17px;
  }

  .empty-results p {
    max-width: 470px;
    margin: 0;
    color: #5f6e81;
    font-size: 10px;
    line-height: 1.5;
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
      0 25px 60px rgba(0, 0, 0, 0.3);
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
      0 0 18px rgba(40, 201, 239, 0.75);
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
      transform: rotate(360deg);
    }
  }

  @keyframes pulse {
    from {
      opacity: 0.35;
      transform: scale(0.8);
    }

    to {
      opacity: 1;
      transform: scale(1.1);
    }
  }

  /* ==========================================================
     RESPONSIVE
  ========================================================== */

  @media (max-width: 1150px) {
    .places-header {
      flex-direction: column;
      align-items: stretch;
    }

    .header-actions {
      justify-content: flex-start;
    }

    .stats-grid {
      grid-template-columns:
        repeat(2, minmax(0, 1fr));
    }

    .details-grid {
      grid-template-columns:
        repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 850px) {
    .search-heading {
      flex-direction: column;
      align-items: flex-start;
    }

    .search-status {
      width: 100%;
    }

    .search-form {
      grid-template-columns: 1fr;
    }

    .search-submit {
      width: 100%;
    }

    .place-top {
      grid-template-columns:
        1fr
        auto;
    }

    .select-lead-box {
      grid-column: 1 / -1;
      min-height: 48px;
      display: flex;
      justify-content: flex-start;
    }

    .bulk-actions {
      flex-direction: column;
      align-items: stretch;
    }

    .bulk-buttons {
      width: 100%;
    }
  }

  @media (max-width: 680px) {
    .places-shell {
      width: calc(100% - 20px);
      padding-top: 10px;
    }

    .places-header {
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

    .places-header h1 {
      font-size: 35px;
    }

    .header-description {
      font-size: 12px;
    }

    .header-actions {
      display: grid;
      grid-template-columns:
        repeat(2, minmax(0, 1fr));
    }

    .header-actions a {
      width: 100%;
    }

    .search-card {
      padding: 17px;
    }

    .stats-grid {
      grid-template-columns: 1fr;
    }

    .bulk-buttons {
      display: grid;
      grid-template-columns:
        repeat(2, minmax(0, 1fr));
    }

    .bulk-buttons button {
      width: 100%;
    }

    .results-heading {
      flex-direction: column;
      align-items: flex-start;
    }

    .results-count {
      width: 100%;
      justify-content: center;
    }

    .place-card {
      padding: 15px;
    }

    .place-top {
      grid-template-columns: 1fr;
    }

    .score-badge {
      width: 100%;
    }

    .details-grid,
    .summary-grid {
      grid-template-columns: 1fr;
    }

    .save-row {
      flex-direction: column;
      align-items: stretch;
    }

    .save-button,
    .saved-button {
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

    .places-header h1 {
      font-size: 32px;
    }

    .examples {
      display: grid;
      grid-template-columns: 1fr;
    }

    .examples button {
      width: 100%;
    }

    .bulk-buttons {
      grid-template-columns: 1fr;
    }

    .stat-card {
      align-items: center;
    }

    .stat-icon {
      width: 50px;
      height: 50px;
    }

    .link-row {
      display: grid;
      grid-template-columns:
        repeat(2, minmax(0, 1fr));
    }

    .link-row a {
      width: 100%;
    }
  }

  @media (max-width: 360px) {
    .link-row {
      grid-template-columns: 1fr;
    }
  }
`;
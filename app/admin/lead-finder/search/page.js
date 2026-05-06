"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

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

  function makeLeadKey(place) {
    const website = (place.website_url || "").toLowerCase().trim();
    const maps = (place.google_maps_url || "").toLowerCase().trim();
    const name = (place.business_name || "").toLowerCase().trim();
    const phone = (place.phone || "").replace(/\D/g, "");

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
      if (key.website && existing.website && key.website === existing.website) {
        return true;
      }

      if (key.maps && existing.maps && key.maps === existing.maps) {
        return true;
      }

      if (key.phone && existing.phone && key.phone === existing.phone) {
        return true;
      }

      if (key.name && existing.name && key.name === existing.name) {
        return true;
      }

      return false;
    });
  }

  function toggleSelected(placeId) {
    setSelectedIds((current) =>
      current.includes(placeId)
        ? current.filter((id) => id !== placeId)
        : [...current, placeId]
    );
  }

  function selectHighScoreLeads() {
  const ids = places
    .filter((place) => Number(place.lead_score || 0) >= 50)
    .filter((place) => !savedIds.includes(place.place_id))
    .filter((place) => !isExistingLead(place))
    .map((place) => place.place_id);

  setSelectedIds(ids);
}

function selectAllNewLeads() {
  const ids = places
    .filter((place) => !savedIds.includes(place.place_id))
    .filter((place) => !isExistingLead(place))
    .map((place) => place.place_id);

  setSelectedIds(ids);
}

  function clearSelected() {
    setSelectedIds([]);
  }

  async function searchPlaces(e) {
    e.preventDefault();

    setError("");
    setSuccess("");
    setSearching(true);
    setPlaces([]);
    setSelectedIds([]);

    const { data: sessionData } = await supabase.auth.getSession();
    const accessToken = sessionData?.session?.access_token;

    if (!accessToken) {
      setError("You need to sign in again.");
      setSearching(false);
      return;
    }

    const response = await fetch("/api/lead-finder/places-search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ query }),
    });

    const result = await response.json();

    if (!response.ok || !result.ok) {
      setError(result.error || "Search failed.");
      setSearching(false);
      return;
    }

    const foundPlaces = result.places || [];
    setPlaces(foundPlaces);

    const { data: existingLeads, error: existingError } = await supabase
      .from("lead_finder_leads")
      .select("business_name, phone, website_url, google_maps_url");

    if (existingError) {
      setError(existingError.message);
      setSearching(false);
      return;
    }

    setExistingKeys(
      (existingLeads || []).map((lead) => ({
        name: (lead.business_name || "").toLowerCase().trim(),
        phone: (lead.phone || "").replace(/\D/g, ""),
        website: (lead.website_url || "").toLowerCase().trim(),
        maps: (lead.google_maps_url || "").toLowerCase().trim(),
      }))
    );

    setSuccess(`Found ${foundPlaces.length} businesses.`);
    setSearching(false);
  }

  async function saveLead(place) {
    setError("");
    setSuccess("");
    setSavingId(place.place_id);

    if (isExistingLead(place)) {
      setError("This business already looks like it exists in your Lead Finder CRM.");
      setSavingId(null);
      return;
    }

    const payload = {
      business_name: place.business_name,
      category: place.category || null,
      phone: place.phone || null,
      website_url: place.website_url || null,
      google_maps_url: place.google_maps_url || null,
      city: place.city || null,
      state: place.state || null,
      source: place.source || "Google Places",
      rating: place.rating || null,
      review_count: place.review_count || null,
      problem_summary: place.problem_summary || null,
      offer_idea: place.offer_idea || null,
      lead_score: place.lead_score || 0,
      status: "new",
      notes: place.address ? `Address: ${place.address}` : null,
      updated_at: new Date().toISOString(),
    };

    const { error: insertError } = await supabase
      .from("lead_finder_leads")
      .insert(payload);

    if (insertError) {
      setError(insertError.message);
      setSavingId(null);
      return;
    }

    setSavedIds((current) => [...current, place.place_id]);
    setSelectedIds((current) => current.filter((id) => id !== place.place_id));
    setExistingKeys((current) => [...current, makeLeadKey(place)]);
    setSuccess(`${place.business_name} saved to Lead Finder CRM.`);
    setSavingId(null);
  }

  async function saveSelectedLeads() {
    setError("");
    setSuccess("");

    const selectedPlaces = places
      .filter((place) => selectedIds.includes(place.place_id))
      .filter((place) => !savedIds.includes(place.place_id))
      .filter((place) => !isExistingLead(place));

    if (selectedPlaces.length === 0) {
      setError("Select at least one new lead to save.");
      return;
    }

    setBulkSaving(true);

    const rows = selectedPlaces.map((place) => ({
      business_name: place.business_name,
      category: place.category || null,
      phone: place.phone || null,
      website_url: place.website_url || null,
      google_maps_url: place.google_maps_url || null,
      city: place.city || null,
      state: place.state || null,
      source: place.source || "Google Places",
      rating: place.rating || null,
      review_count: place.review_count || null,
      problem_summary: place.problem_summary || null,
      offer_idea: place.offer_idea || null,
      lead_score: place.lead_score || 0,
      status: "new",
      notes: place.address ? `Address: ${place.address}` : null,
      updated_at: new Date().toISOString(),
    }));

    const { error: insertError } = await supabase
      .from("lead_finder_leads")
      .insert(rows);

    if (insertError) {
      setError(insertError.message);
      setBulkSaving(false);
      return;
    }

    setSavedIds((current) => [
      ...current,
      ...selectedPlaces.map((place) => place.place_id),
    ]);

    setExistingKeys((current) => [
      ...current,
      ...selectedPlaces.map((place) => makeLeadKey(place)),
    ]);

    setSelectedIds([]);
    setSuccess(`${selectedPlaces.length} leads saved to Lead Finder CRM.`);
    setBulkSaving(false);
  }

  if (loadingSession) {
    return (
      <main className="places-page">
        <style>{styles}</style>
        <div className="empty-box">Loading...</div>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="places-page">
        <style>{styles}</style>
        <section className="empty-box">
          <h1>Google Places Lead Search</h1>
          <p>You need to sign in through your admin dashboard first.</p>
          <Link href="/admin" className="primary-btn">
            Go to Admin Login
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="places-page">
      <style>{styles}</style>

      <header className="places-header">
        <div>
          <p className="eyebrow">Google Places search</p>
          <h1>Find Businesses Fast</h1>
          <p>
            Search real businesses from Google Places, then save the best ones
            into your Lead Finder CRM.
          </p>
        </div>

        <div className="header-actions">
          <Link href="/admin/lead-finder" className="secondary-btn">
            Back to Lead Finder
          </Link>

          <Link href="/admin/lead-finder/import" className="secondary-btn">
            Quick Import
          </Link>
        </div>
      </header>

      {error ? <div className="error-box">{error}</div> : null}
      {success ? <div className="success-box">{success}</div> : null}

      <section className="search-card">
        <form onSubmit={searchPlaces}>
          <label>
            Search Google Places
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Example: roofers in Allentown PA"
              required
            />
          </label>

          <button type="submit" disabled={searching}>
            {searching ? "Searching..." : "Search Businesses"}
          </button>
        </form>

        <div className="examples">
          <button type="button" onClick={() => setQuery("roofers in Allentown PA")}>
            roofers in Allentown PA
          </button>

          <button
            type="button"
            onClick={() => setQuery("contractors in Lehigh Valley PA")}
          >
            contractors in Lehigh Valley PA
          </button>

          <button
            type="button"
            onClick={() => setQuery("landscapers in Madison ME")}
          >
            landscapers in Madison ME
          </button>
        </div>
      </section>

      {places.length > 0 ? (
        <section className="bulk-actions">
          <div>
            <strong>{selectedIds.length}</strong> selected
          </div>

          <div className="bulk-buttons">
            <button type="button" onClick={selectAllNewLeads}>
              Select All New
            </button>

            <button type="button" onClick={selectHighScoreLeads}>
              Select High Score
            </button>

            <button type="button" onClick={clearSelected}>
              Clear
            </button>

            <button type="button" onClick={saveSelectedLeads} disabled={bulkSaving}>
              {bulkSaving ? "Saving..." : "Save Selected"}
            </button>
          </div>
        </section>
      ) : null}

      <section className="places-list">
        {places.length === 0 ? (
          <p className="empty-box">
            No results yet. Search for a business type and city.
          </p>
        ) : null}

        {places.map((place) => {
          const alreadySaved =
            savedIds.includes(place.place_id) || isExistingLead(place);

          const selected = selectedIds.includes(place.place_id);

          return (
            <article className="place-card" key={place.place_id}>
              <div className="place-top">
                <label className="select-lead-box">
                  <input
                    type="checkbox"
                    checked={selected}
                    disabled={alreadySaved}
                    onChange={() => toggleSelected(place.place_id)}
                  />
                  <span>{alreadySaved ? "Already Saved" : "Select"}</span>
                </label>

                <div className="place-main">
                  <p className="place-category">
                    {place.category || "Business"}{" "}
                    {place.city || place.state
                      ? `• ${[place.city, place.state].filter(Boolean).join(", ")}`
                      : ""}
                  </p>

                  <h2>{place.business_name}</h2>

                  <p className="address">{place.address}</p>
                </div>

                <div className="score-badge">
                  <span>Score</span>
                  <strong>{place.lead_score}</strong>
                </div>
              </div>

              <div className="details-grid">
                <p>
                  <strong>Phone:</strong>{" "}
                  {place.phone ? (
                    <a href={`tel:${place.phone}`}>{place.phone}</a>
                  ) : (
                    "None found"
                  )}
                </p>

                <p>
                  <strong>Rating:</strong>{" "}
                  {place.rating ? `${place.rating} stars` : "Unknown"}
                </p>

                <p>
                  <strong>Reviews:</strong>{" "}
                  {place.review_count ? place.review_count : "Unknown"}
                </p>

                <p>
                  <strong>Website:</strong>{" "}
                  {place.website_url ? "Found" : "Missing"}
                </p>
              </div>

              <div className="link-row">
                {place.website_url ? (
                  <a href={place.website_url} target="_blank" rel="noreferrer">
                    Website
                  </a>
                ) : null}

                {place.google_maps_url ? (
                  <a href={place.google_maps_url} target="_blank" rel="noreferrer">
                    Google Maps
                  </a>
                ) : null}
              </div>

              <div className="summary-box">
                <strong>Problem Found:</strong>
                <p>{place.problem_summary}</p>
              </div>

              <div className="summary-box">
                <strong>Offer Idea:</strong>
                <p>{place.offer_idea}</p>
              </div>

              <button
                type="button"
                onClick={() => saveLead(place)}
                disabled={savingId === place.place_id || alreadySaved}
              >
                {alreadySaved
                  ? "Already Saved"
                  : savingId === place.place_id
                    ? "Saving..."
                    : "Save Lead"}
              </button>
            </article>
          );
        })}
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

  .places-page {
    min-height: 100vh;
    background: #f4f6f8;
    padding: 36px 24px 70px;
  }

  .places-header,
  .search-card,
  .places-list,
  .error-box,
  .success-box,
  .empty-box,
  .bulk-actions {
    max-width: 1220px;
    margin-left: auto;
    margin-right: auto;
  }

  .places-header {
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

  .places-header h1 {
    margin: 0 0 10px;
    color: #f57c00;
    font-size: clamp(38px, 5vw, 58px);
    line-height: 1;
  }

  .places-header p {
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

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
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

  .search-card {
    background: #ffffff;
    border-radius: 22px;
    padding: 28px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    margin-bottom: 24px;
  }

  .search-card form {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 16px;
    align-items: end;
  }

  .search-card label {
    display: grid;
    gap: 8px;
    color: #374151;
    font-weight: 900;
  }

  .search-card input {
    width: 100%;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    padding: 14px;
    font-size: 17px;
  }

  .examples {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 18px;
  }

  .examples button {
    background: #0f83a6;
    padding: 10px 13px;
    font-size: 14px;
  }

  .examples button:hover {
    background: #0c6d8a;
  }

  .bulk-actions {
    margin-bottom: 24px;
    background: #ffffff;
    border-radius: 18px;
    padding: 18px 22px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.07);
    display: flex;
    justify-content: space-between;
    gap: 16px;
    align-items: center;
  }

  .bulk-actions strong {
    color: #f57c00;
    font-size: 28px;
  }

  .bulk-buttons {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .bulk-buttons button:nth-child(1),
  .bulk-buttons button:nth-child(2) {
    background: #0f83a6;
  }

  .bulk-buttons button:nth-child(1):hover,
  .bulk-buttons button:nth-child(2):hover {
    background: #0c6d8a;
  }

  .places-list {
    display: grid;
    gap: 18px;
  }

  .place-card,
  .empty-box {
    background: #ffffff;
    border-radius: 22px;
    padding: 26px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  }

  .place-top {
    display: grid;
    grid-template-columns: 130px 1fr 92px;
    gap: 20px;
    align-items: flex-start;
    margin-bottom: 18px;
  }

  .select-lead-box {
    min-width: 120px;
    background: #f8fafc;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 12px;
    display: grid;
    gap: 8px;
    justify-items: center;
    color: #374151;
    font-weight: 900;
  }

  .select-lead-box input {
    width: 22px;
    height: 22px;
    accent-color: #f57c00;
  }

  .select-lead-box span {
    font-size: 13px;
    text-align: center;
  }

  .place-category {
    margin: 0 0 8px;
    color: #0f83a6;
    font-weight: 900;
    text-transform: capitalize;
  }

  .place-card h2 {
    margin: 0 0 8px;
    font-size: 30px;
    color: #111827;
  }

  .address {
    margin: 0;
    color: #4b5563;
    font-size: 16px;
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

  .details-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px 18px;
    margin-bottom: 18px;
  }

  .details-grid p {
    margin: 0;
    color: #374151;
    line-height: 1.4;
  }

  .details-grid a,
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

  @media (max-width: 980px) {
    .places-header {
      flex-direction: column;
      align-items: stretch;
    }

    .header-actions {
      justify-content: stretch;
    }

    .header-actions a {
      width: 100%;
    }

    .search-card form {
      grid-template-columns: 1fr;
    }

    .details-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .place-top {
      grid-template-columns: 1fr;
    }

    .select-lead-box {
      width: 100%;
      grid-template-columns: auto 1fr;
      justify-items: start;
    }

    .score-badge {
      width: 100%;
    }
  }

  @media (max-width: 620px) {
    .places-page {
      padding: 24px 14px 50px;
    }

    .search-card,
    .place-card,
    .empty-box {
      padding: 20px;
    }

    .bulk-actions {
      flex-direction: column;
      align-items: stretch;
    }

    .bulk-buttons {
      flex-direction: column;
    }

    .bulk-buttons button {
      width: 100%;
    }

    .details-grid {
      grid-template-columns: 1fr;
    }

    .examples button {
      width: 100%;
    }
  }
`;
"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const STORAGE_KEY =
  "matthew-web-analytics-consent";

const GA_ID =
  "G-4HBVKXBRL2";

export default function CookieAnalyticsConsent() {
  const [consent, setConsent] =
    useState(null);

  const [ready, setReady] =
    useState(false);

  const [settingsOpen, setSettingsOpen] =
    useState(false);

  useEffect(() => {
    const saved =
      window.localStorage.getItem(
        STORAGE_KEY
      );

    if (
      saved === "accepted" ||
      saved === "rejected"
    ) {
      setConsent(saved);
    }

    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) {
      return;
    }

    window[`ga-disable-${GA_ID}`] =
      consent !== "accepted";
  }, [consent, ready]);

  function acceptAnalytics() {
    window.localStorage.setItem(
      STORAGE_KEY,
      "accepted"
    );

    window[`ga-disable-${GA_ID}`] =
      false;

    setConsent("accepted");
    setSettingsOpen(false);
  }

  function rejectAnalytics() {
    const wasAccepted =
      consent === "accepted";

    window.localStorage.setItem(
      STORAGE_KEY,
      "rejected"
    );

    window[`ga-disable-${GA_ID}`] =
      true;

    setConsent("rejected");
    setSettingsOpen(false);

    if (wasAccepted) {
      window.location.reload();
    }
  }

  if (!ready) {
    return null;
  }

  const showPanel =
    consent === null ||
    settingsOpen;

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />

          <Script
            id="google-analytics-consented"
            strategy="afterInteractive"
          >
            {`
              window.dataLayer =
                window.dataLayer || [];

              function gtag() {
                dataLayer.push(arguments);
              }

              window.gtag = gtag;

              gtag(
                "consent",
                "default",
                {
                  analytics_storage: "granted",
                  ad_storage: "denied",
                  ad_user_data: "denied",
                  ad_personalization: "denied",
                }
              );

              gtag(
                "set",
                "ads_data_redaction",
                true
              );

              gtag(
                "set",
                "allow_google_signals",
                false
              );

              gtag(
                "set",
                "allow_ad_personalization_signals",
                false
              );

              gtag(
                "js",
                new Date()
              );

              gtag(
                "config",
                "${GA_ID}"
              );
            `}
          </Script>
        </>
      )}

      {showPanel && (
        <div
          role="dialog"
          aria-label="Cookie and analytics settings"
          style={{
            position: "fixed",
            left: "16px",
            right: "16px",
            bottom: "16px",
            zIndex: 99999,
            maxWidth: "620px",
            margin: "0 auto",
            padding: "18px",
            borderRadius: "16px",
            border:
              "1px solid rgba(255,255,255,0.16)",
            background:
              "rgba(10, 15, 28, 0.98)",
            color: "#ffffff",
            boxShadow:
              "0 18px 50px rgba(0,0,0,0.4)",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              fontWeight: 800,
              marginBottom: "8px",
            }}
          >
            Cookie & Analytics Settings
          </div>

          <p
            style={{
              margin: "0 0 14px 0",
              lineHeight: 1.55,
              color:
                "rgba(255,255,255,0.88)",
            }}
          >
            Matthew Web uses optional Google
            Analytics to understand website
            usage and improve the site.
            Google Analytics will not load
            unless you accept it. Security
            and essential website
            technologies may still operate.
          </p>

          <p
            style={{
              margin: "0 0 16px 0",
              fontSize: "14px",
            }}
          >
            <a
              href="/privacy-policy#cookies"
              style={{
                color: "#8ec5ff",
                textDecoration: "underline",
              }}
            >
              Read the Privacy Policy
            </a>
          </p>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              onClick={acceptAnalytics}
              style={{
                border: 0,
                borderRadius: "10px",
                padding: "11px 16px",
                fontWeight: 800,
                cursor: "pointer",
                background: "#ffffff",
                color: "#111827",
              }}
            >
              Accept Analytics
            </button>

            <button
              type="button"
              onClick={rejectAnalytics}
              style={{
                border:
                  "1px solid rgba(255,255,255,0.35)",
                borderRadius: "10px",
                padding: "11px 16px",
                fontWeight: 800,
                cursor: "pointer",
                background: "transparent",
                color: "#ffffff",
              }}
            >
              Reject Analytics
            </button>
          </div>
        </div>
      )}

      {consent !== null &&
        !settingsOpen && (
          <button
            type="button"
            onClick={() =>
              setSettingsOpen(true)
            }
            aria-label="Open cookie settings"
            style={{
              position: "fixed",
              right: "14px",
              bottom: "14px",
              zIndex: 99998,
              border:
                "1px solid rgba(255,255,255,0.22)",
              borderRadius: "999px",
              padding: "9px 13px",
              cursor: "pointer",
              background:
                "rgba(10, 15, 28, 0.94)",
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: 700,
              boxShadow:
                "0 8px 24px rgba(0,0,0,0.28)",
            }}
          >
            Cookie Settings
          </button>
        )}
    </>
  );
}
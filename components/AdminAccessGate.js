"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { supabase } from "../lib/supabaseClient";

/* ============================================================
   MATTHEW WEB — CENTRAL ADMIN ACCESS GATE

   Purpose:
   - Allow signed-out users to reach the /admin login screen
   - Prevent signed-in NON-ADMIN users from rendering admin pages
   - Verify admin_users membership through the protected server API
   - Fail closed if authorization cannot be verified

   Important:
   - RLS and protected API authorization remain the primary
     security boundaries.
   - This gate adds another defense layer around the admin UI.
============================================================ */

export default function AdminAccessGate({
  children,
}) {
  const [status, setStatus] =
    useState("loading");

  const [message, setMessage] =
    useState("");

  const mountedRef = useRef(true);

  /* ==========================================================
     VERIFY ADMIN ACCESS
  ========================================================== */

  const verifyAdminAccess =
    useCallback(async (session) => {
      if (!session?.access_token) {
        if (mountedRef.current) {
          setStatus("signed-out");
          setMessage("");
        }

        return;
      }

      if (mountedRef.current) {
        setStatus("checking");
        setMessage("");
      }

      try {
        const response = await fetch(
          "/api/admin/check",
          {
            method: "GET",

            headers: {
              Authorization:
                `Bearer ${session.access_token}`,
            },

            cache: "no-store",
          }
        );

        let result = null;

        try {
          result = await response.json();
        } catch {
          result = null;
        }

        if (!mountedRef.current) {
          return;
        }

        if (
          response.ok &&
          result?.ok === true
        ) {
          setStatus("authorized");
          setMessage("");
          return;
        }

        if (response.status === 401) {
          await supabase.auth.signOut();

          if (mountedRef.current) {
            setStatus("signed-out");
            setMessage("");
          }

          return;
        }

        if (response.status === 403) {
          setStatus("forbidden");

          setMessage(
            result?.error ||
              "This account is not authorized for Matthew Web administration."
          );

          return;
        }

        setStatus("error");

        setMessage(
          result?.error ||
            "Admin authorization could not be verified."
        );
      } catch (error) {
        console.error(
          "Admin access verification error:",
          error
        );

        if (!mountedRef.current) {
          return;
        }

        setStatus("error");

        setMessage(
          "Admin authorization could not be verified."
        );
      }
    }, []);

  /* ==========================================================
     INITIAL SESSION + AUTH LISTENER
  ========================================================== */

  useEffect(() => {
    mountedRef.current = true;

    let cancelled = false;

    async function initializeAuth() {
      try {
        const {
          data,
          error,
        } =
          await supabase.auth.getSession();

        if (
          cancelled ||
          !mountedRef.current
        ) {
          return;
        }

        if (error) {
          console.error(
            "Admin session check error:",
            error
          );

          setStatus("error");

          setMessage(
            "Your admin session could not be checked."
          );

          return;
        }

        const session =
          data?.session || null;

        if (!session) {
          setStatus("signed-out");
          setMessage("");
          return;
        }

        await verifyAdminAccess(
          session
        );
      } catch (error) {
        console.error(
          "Admin initialization error:",
          error
        );

        if (
          cancelled ||
          !mountedRef.current
        ) {
          return;
        }

        setStatus("error");

        setMessage(
          "Your admin session could not be checked."
        );
      }
    }

    initializeAuth();

    const {
      data: authListener,
    } =
      supabase.auth.onAuthStateChange(
        async (
          event,
          newSession
        ) => {
          if (
            cancelled ||
            !mountedRef.current
          ) {
            return;
          }

          if (
            event === "SIGNED_OUT" ||
            !newSession
          ) {
            setStatus(
              "signed-out"
            );

            setMessage("");

            return;
          }

          if (
            event === "SIGNED_IN" ||
            event ===
              "TOKEN_REFRESHED" ||
            event ===
              "INITIAL_SESSION"
          ) {
            await verifyAdminAccess(
              newSession
            );
          }
        }
      );

    return () => {
      cancelled = true;

      mountedRef.current = false;

      authListener?.subscription
        ?.unsubscribe();
    };
  }, [verifyAdminAccess]);

  /* ==========================================================
     SIGN OUT
  ========================================================== */

  async function handleSignOut() {
    setStatus("checking");
    setMessage("");

    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error(
        "Admin sign-out error:",
        error
      );
    }

    if (mountedRef.current) {
      setStatus("signed-out");
      setMessage("");
    }
  }

  /* ==========================================================
     SIGNED OUT

     Allow children through so /admin can display its login form.

     Individual admin pages already handle signed-out sessions,
     while this gate prevents signed-in unauthorized accounts
     from rendering private admin interfaces.
  ========================================================== */

  if (status === "signed-out") {
    return children;
  }

  /* ==========================================================
     AUTHORIZED
  ========================================================== */

  if (status === "authorized") {
    return children;
  }

  /* ==========================================================
     LOADING / CHECKING
  ========================================================== */

  if (
    status === "loading" ||
    status === "checking"
  ) {
    return (
      <main className="mw-admin-gate">
        <style>
          {gateStyles}
        </style>

        <section className="gate-card">
          <div className="gate-logo">
            MW
          </div>

          <div className="gate-spinner" />

          <span className="gate-eyebrow">
            Matthew Web
          </span>

          <h1>
            Verifying Admin Access
          </h1>

          <p>
            Checking your private
            Mission Control
            authorization.
          </p>
        </section>
      </main>
    );
  }

  /* ==========================================================
     FORBIDDEN
  ========================================================== */

  if (status === "forbidden") {
    return (
      <main className="mw-admin-gate">
        <style>
          {gateStyles}
        </style>

        <section className="gate-card gate-denied">
          <div className="gate-lock">
            !
          </div>

          <span className="gate-eyebrow">
            Access Denied
          </span>

          <h1>
            Not an Authorized
            Administrator
          </h1>

          <p>
            {message}
          </p>

          <button
            type="button"
            className="gate-button"
            onClick={
              handleSignOut
            }
          >
            Sign Out
          </button>
        </section>
      </main>
    );
  }

  /* ==========================================================
     AUTHORIZATION ERROR

     Fail closed. Never render the private admin UI when the
     authorization server cannot confirm access.
  ========================================================== */

  return (
    <main className="mw-admin-gate">
      <style>
        {gateStyles}
      </style>

      <section className="gate-card gate-error">
        <div className="gate-lock">
          !
        </div>

        <span className="gate-eyebrow">
          Security Check
        </span>

        <h1>
          Admin Access
          Unavailable
        </h1>

        <p>
          {message ||
            "Admin authorization could not be verified."}
        </p>

        <div className="gate-actions">
          <button
            type="button"
            className="gate-button"
            onClick={() =>
              window.location.reload()
            }
          >
            Try Again
          </button>

          <button
            type="button"
            className="gate-button secondary"
            onClick={
              handleSignOut
            }
          >
            Sign Out
          </button>
        </div>
      </section>
    </main>
  );
}

/* ============================================================
   STYLES
============================================================ */

const gateStyles = `
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    background: #05070b;
    color: #ffffff;
  }

  .mw-admin-gate {
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 28px 18px;
    background:
      radial-gradient(
        circle at 12% -10%,
        rgba(0, 192, 255, 0.15),
        transparent 34%
      ),
      radial-gradient(
        circle at 92% 5%,
        rgba(255, 119, 0, 0.12),
        transparent 30%
      ),
      linear-gradient(
        180deg,
        #06090f 0%,
        #05070b 100%
      );
    font-family:
      Inter,
      ui-sans-serif,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      sans-serif;
  }

  .gate-card {
    width: min(100%, 520px);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 38px 32px;
    border: 1px solid #1d2c3c;
    border-radius: 26px;
    background:
      linear-gradient(
        145deg,
        rgba(15, 21, 31, 0.98),
        rgba(8, 12, 19, 0.99)
      );
    box-shadow:
      0 30px 90px rgba(0, 0, 0, 0.5),
      inset 0 1px 0
        rgba(255, 255, 255, 0.04);
  }

  .gate-logo {
    width: 72px;
    height: 72px;
    display: grid;
    place-items: center;
    margin-bottom: 20px;
    border-radius: 21px;
    background:
      linear-gradient(
        135deg,
        #00bce8,
        #087cff
      );
    color: #ffffff;
    font-size: 23px;
    font-weight: 1000;
    box-shadow:
      0 0 38px
        rgba(0, 194, 255, 0.25);
  }

  .gate-spinner {
    width: 27px;
    height: 27px;
    margin-bottom: 20px;
    border: 3px solid
      rgba(255, 255, 255, 0.13);
    border-top-color: #ff8300;
    border-radius: 999px;
    animation:
      mw-gate-spin 0.75s
      linear infinite;
  }

  @keyframes mw-gate-spin {
    to {
      transform:
        rotate(360deg);
    }
  }

  .gate-lock {
    width: 64px;
    height: 64px;
    display: grid;
    place-items: center;
    margin-bottom: 20px;
    border-radius: 19px;
    background:
      rgba(255, 80, 80, 0.1);
    border: 1px solid
      rgba(255, 80, 80, 0.3);
    color: #ff7d7d;
    font-size: 30px;
    font-weight: 1000;
  }

  .gate-eyebrow {
    color: #31d5ff;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  .gate-card h1 {
    margin:
      10px 0 11px;
    color: #ffffff;
    font-size:
      clamp(
        29px,
        7vw,
        40px
      );
    line-height: 1.05;
    letter-spacing:
      -0.04em;
  }

  .gate-card p {
    max-width: 430px;
    margin: 0;
    color: #94a2b5;
    font-size: 14px;
    line-height: 1.65;
  }

  .gate-denied {
    border-color:
      rgba(255, 92, 92, 0.3);
  }

  .gate-error {
    border-color:
      rgba(255, 168, 70, 0.3);
  }

  .gate-actions {
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 25px;
    flex-wrap: wrap;
  }

  .gate-button {
    min-height: 45px;
    margin-top: 25px;
    padding: 0 20px;
    border: 1px solid
      #ff7900;
    border-radius: 12px;
    background:
      linear-gradient(
        135deg,
        #ff8700,
        #ff6500
      );
    color: #ffffff;
    font: inherit;
    font-size: 13px;
    font-weight: 900;
    cursor: pointer;
  }

  .gate-actions
    .gate-button {
    margin-top: 0;
  }

  .gate-button.secondary {
    border-color:
      #29465c;
    background:
      #0b151f;
    color: #cdeef7;
  }

  .gate-button:hover {
    filter:
      brightness(1.08);
  }

  @media (
    max-width: 560px
  ) {
    .gate-card {
      padding:
        32px 20px;
      border-radius:
        21px;
    }

    .gate-actions {
      flex-direction:
        column;
    }

    .gate-actions
      .gate-button {
      width: 100%;
    }
  }
`;
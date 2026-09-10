"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  KeyRound,
  LockKeyhole,
  LogIn,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      setStatus(error.message);
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <main className="admin-login-page">
      <style>{styles}</style>

      <div className="login-shell">
        <section className="login-card">
          <div className="brand-row">
            <div className="brand-icon">
              <LockKeyhole
                size={29}
                strokeWidth={2.6}
              />
            </div>

            <div>
              <span>
                MATTHEW WEB
              </span>

              <strong>
                Mission Control
              </strong>
            </div>
          </div>

          <div className="login-heading">
            <p className="eyebrow">
              Private Administration
            </p>

            <h1>
              Admin <span>Login</span>
            </h1>

            <p>
              Sign in to access website leads, Lead Finder,
              pipeline tools, follow-ups, outreach, audits, and
              private business controls.
            </p>
          </div>

          <div className="security-strip">
            <ShieldCheck size={17} />

            <div>
              <strong>
                Protected Admin Area
              </strong>

              <span>
                Authentication is required before private CRM
                data can be accessed.
              </span>
            </div>
          </div>

          <form
            className="login-form"
            onSubmit={handleLogin}
          >
            <label htmlFor="email">
              <span>
                EMAIL ADDRESS
              </span>

              <div className="input-wrap">
                <Mail size={17} />

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                  autoComplete="email"
                  required
                  disabled={loading}
                />
              </div>
            </label>

            <label htmlFor="password">
              <span>
                PASSWORD
              </span>

              <div className="input-wrap">
                <KeyRound size={17} />

                <input
                  id="password"
                  type="password"
                  placeholder="Your admin password"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  autoComplete="current-password"
                  required
                  disabled={loading}
                />
              </div>
            </label>

            <button
              className="login-btn"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner" />
                  Signing In
                </>
              ) : (
                <>
                  <LogIn size={17} />
                  Enter Mission Control
                </>
              )}
            </button>

            {status ? (
              <div
                className="status-message"
                role="alert"
              >
                <strong>
                  Sign In Failed
                </strong>

                <span>
                  {status}
                </span>
              </div>
            ) : null}
          </form>

          <div className="login-footer">
            <Link
              href="/"
              className="back-link"
            >
              <ArrowLeft size={15} />
              Back to Matthew Web
            </Link>

            <span>
              Private administration system
            </span>
          </div>
        </section>

        <aside className="side-panel">
          <div className="side-glow" />

          <p className="eyebrow">
            Internal Systems
          </p>

          <h2>
            Matthew Web
            <br />
            <span>
              Business Operations
            </span>
          </h2>

          <p className="side-description">
            One private workspace for managing incoming website
            leads, prospect research, follow-up activity, sales
            pipeline movement, website audits, and outreach.
          </p>

          <div className="system-list">
            <div>
              <span className="system-dot cyan" />

              <div>
                <strong>
                  Website Lead Intake
                </strong>

                <small>
                  Review and convert public form submissions.
                </small>
              </div>
            </div>

            <div>
              <span className="system-dot orange" />

              <div>
                <strong>
                  Lead Finder CRM
                </strong>

                <small>
                  Research, score, organize, and work prospects.
                </small>
              </div>
            </div>

            <div>
              <span className="system-dot green" />

              <div>
                <strong>
                  Pipeline & Follow-Ups
                </strong>

                <small>
                  Track sales stages and scheduled contact.
                </small>
              </div>
            </div>

            <div>
              <span className="system-dot purple" />

              <div>
                <strong>
                  Outreach & Audits
                </strong>

                <small>
                  Build sales messages and website intelligence.
                </small>
              </div>
            </div>
          </div>

          <div className="private-notice">
            <ShieldCheck size={18} />

            <span>
              Authorized access only
            </span>
          </div>
        </aside>
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
  input {
    font: inherit;
  }

  a,
  button,
  input {
    -webkit-tap-highlight-color: transparent;
  }

  .admin-login-page {
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    display: grid;
    place-items: center;
    padding: 28px;
    background:
      radial-gradient(
        circle at 8% 5%,
        rgba(0, 194, 255, 0.14),
        transparent 31%
      ),
      radial-gradient(
        circle at 95% 5%,
        rgba(255, 128, 0, 0.14),
        transparent 30%
      ),
      radial-gradient(
        circle at 50% 115%,
        rgba(91, 73, 255, 0.08),
        transparent 37%
      ),
      linear-gradient(
        180deg,
        #06090f 0%,
        #05070b 100%
      );
  }

  .admin-login-page::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.15;
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
  }

  .login-shell {
    position: relative;
    z-index: 1;
    width: min(
      1000px,
      100%
    );
    display: grid;
    grid-template-columns:
      minmax(0, 1fr)
      minmax(330px, 0.8fr);
    overflow: hidden;
    border: 1px solid #202b3a;
    border-radius: 28px;
    background: #080d13;
    box-shadow:
      0 35px 100px rgba(0, 0, 0, 0.52),
      0 0 70px rgba(25, 170, 215, 0.045);
  }

  /* =========================================================
     LOGIN CARD
  ========================================================= */

  .login-card {
    min-width: 0;
    padding: 42px;
    background:
      linear-gradient(
        145deg,
        rgba(14, 21, 30, 0.995),
        rgba(8, 13, 20, 0.995)
      );
  }

  .brand-row {
    display: flex;
    align-items: center;
    gap: 11px;
    margin-bottom: 43px;
  }

  .brand-icon {
    width: 46px;
    height: 46px;
    display: grid;
    place-items: center;
    border-radius: 13px;
    color: #05090d;
    background:
      linear-gradient(
        145deg,
        #29d4f2,
        #0b8bf4
      );
    box-shadow:
      0 0 23px rgba(41, 208, 241, 0.18);
  }

  .brand-row > div:last-child {
    display: grid;
    gap: 2px;
  }

  .brand-row span {
    color: #68798d;
    font-size: 8px;
    font-weight: 1000;
    letter-spacing: 0.15em;
  }

  .brand-row strong {
    color: #dce6ee;
    font-size: 13px;
  }

  .eyebrow {
    margin: 0 0 8px;
    color: #35d4f4;
    font-size: 9px;
    line-height: 1;
    font-weight: 1000;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .login-heading h1 {
    margin: 0 0 10px;
    color: #ffffff;
    font-size:
      clamp(
        38px,
        5vw,
        52px
      );
    line-height: 1;
    letter-spacing: -0.055em;
  }

  .login-heading h1 span {
    color: #ff8300;
  }

  .login-heading > p:last-child {
    max-width: 510px;
    margin: 0;
    color: #8493a6;
    font-size: 12px;
    line-height: 1.6;
  }

  /* =========================================================
     SECURITY STRIP
  ========================================================= */

  .security-strip {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 23px 0;
    padding: 11px;
    border: 1px solid rgba(73, 223, 145, 0.17);
    border-radius: 11px;
    color: #49df91;
    background: rgba(31, 122, 69, 0.07);
  }

  .security-strip svg {
    flex: 0 0 auto;
  }

  .security-strip > div {
    display: grid;
    gap: 2px;
  }

  .security-strip strong {
    color: #99dcb5;
    font-size: 8px;
  }

  .security-strip span {
    color: #5d7e6a;
    font-size: 7px;
    line-height: 1.4;
  }

  /* =========================================================
     FORM
  ========================================================= */

  .login-form {
    display: grid;
    gap: 15px;
  }

  .login-form label {
    display: grid;
    gap: 6px;
  }

  .login-form label > span {
    color: #7e8da0;
    font-size: 8px;
    font-weight: 1000;
    letter-spacing: 0.08em;
  }

  .input-wrap {
    min-height: 49px;
    display: flex;
    align-items: center;
    gap: 9px;
    padding-left: 12px;
    border: 1px solid #29394c;
    border-radius: 11px;
    color: #30cde9;
    background: #070c12;
    transition:
      border-color 0.16s ease,
      box-shadow 0.16s ease;
  }

  .input-wrap:focus-within {
    border-color: #29c9ed;
    box-shadow:
      0 0 0 3px rgba(41, 201, 237, 0.07);
  }

  .input-wrap svg {
    flex: 0 0 auto;
  }

  .input-wrap input {
    min-width: 0;
    width: 100%;
    height: 47px;
    border: none;
    outline: none;
    padding: 0 12px 0 0;
    color: #e2e9ef;
    background: transparent;
    font-size: 11px;
  }

  .input-wrap input::placeholder {
    color: #4b596a;
  }

  .input-wrap input:disabled {
    opacity: 0.6;
  }

  .login-btn {
    min-height: 49px;
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    margin-top: 4px;
    border: 1px solid transparent;
    border-radius: 11px;
    color: #ffffff;
    background:
      linear-gradient(
        135deg,
        #ff8b00,
        #ff6100
      );
    box-shadow:
      0 10px 25px rgba(255, 105, 0, 0.17);
    cursor: pointer;
    font-size: 10px;
    font-weight: 1000;
    transition:
      transform 0.16s ease,
      box-shadow 0.16s ease,
      filter 0.16s ease;
  }

  .login-btn:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow:
      0 13px 30px rgba(255, 105, 0, 0.24);
    filter: brightness(1.05);
  }

  .login-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .spinner {
    width: 14px;
    height: 14px;
    border: 2px solid rgba(255,255,255,0.28);
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }

  /* =========================================================
     ERROR
  ========================================================= */

  .status-message {
    display: grid;
    gap: 3px;
    padding: 11px;
    border: 1px solid rgba(255, 85, 85, 0.27);
    border-radius: 10px;
    color: #ffb4b4;
    background: rgba(135, 30, 30, 0.13);
  }

  .status-message strong {
    color: #ff7777;
    font-size: 8px;
  }

  .status-message span {
    font-size: 8px;
    line-height: 1.4;
  }

  /* =========================================================
     FOOTER
  ========================================================= */

  .login-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    margin-top: 27px;
    padding-top: 17px;
    border-top: 1px solid #192536;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: #88e7f8;
    font-size: 8px;
    font-weight: 900;
    text-decoration: none;
  }

  .back-link:hover {
    color: #ffffff;
  }

  .login-footer > span {
    color: #4f5d6d;
    font-size: 7px;
  }

  /* =========================================================
     SIDE PANEL
  ========================================================= */

  .side-panel {
    position: relative;
    overflow: hidden;
    min-width: 0;
    padding: 47px 37px;
    border-left: 1px solid #1c2939;
    background:
      radial-gradient(
        circle at 90% 5%,
        rgba(255, 128, 0, 0.13),
        transparent 35%
      ),
      radial-gradient(
        circle at 5% 100%,
        rgba(0, 194, 255, 0.1),
        transparent 39%
      ),
      #070b11;
  }

  .side-glow {
    position: absolute;
    top: -140px;
    right: -120px;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    background: rgba(255, 117, 0, 0.07);
    filter: blur(10px);
    pointer-events: none;
  }

  .side-panel > *:not(.side-glow) {
    position: relative;
    z-index: 1;
  }

  .side-panel h2 {
    margin: 0 0 16px;
    color: #ffffff;
    font-size:
      clamp(
        27px,
        3.4vw,
        38px
      );
    line-height: 1.08;
    letter-spacing: -0.045em;
  }

  .side-panel h2 span {
    color: #ff8300;
  }

  .side-description {
    margin: 0 0 28px;
    color: #748397;
    font-size: 10px;
    line-height: 1.6;
  }

  .system-list {
    display: grid;
    gap: 9px;
  }

  .system-list > div {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 11px;
    border: 1px solid #182535;
    border-radius: 10px;
    background: rgba(9, 15, 22, 0.7);
  }

  .system-dot {
    flex: 0 0 auto;
    width: 8px;
    height: 8px;
    margin-top: 4px;
    border-radius: 50%;
  }

  .system-dot.cyan {
    background: #29d0f1;
    box-shadow:
      0 0 9px rgba(41, 208, 241, 0.5);
  }

  .system-dot.orange {
    background: #ff8b00;
    box-shadow:
      0 0 9px rgba(255, 139, 0, 0.5);
  }

  .system-dot.green {
    background: #49df91;
    box-shadow:
      0 0 9px rgba(73, 223, 145, 0.5);
  }

  .system-dot.purple {
    background: #a77cff;
    box-shadow:
      0 0 9px rgba(167, 124, 255, 0.5);
  }

  .system-list > div > div {
    display: grid;
    gap: 2px;
  }

  .system-list strong {
    color: #aebbc7;
    font-size: 9px;
  }

  .system-list small {
    color: #5c6c7e;
    font-size: 7px;
    line-height: 1.4;
  }

  .private-notice {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-top: 24px;
    padding-top: 16px;
    border-top: 1px solid #182434;
    color: #557866;
  }

  .private-notice svg {
    color: #49df91;
  }

  .private-notice span {
    font-size: 7px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* =========================================================
     RESPONSIVE
  ========================================================= */

  @media (max-width: 830px) {
    .admin-login-page {
      padding: 18px;
      overflow-y: auto;
    }

    .login-shell {
      grid-template-columns: 1fr;
      max-width: 560px;
    }

    .side-panel {
      border-left: none;
      border-top: 1px solid #1c2939;
    }
  }

  @media (max-width: 520px) {
    .admin-login-page {
      padding: 10px;
      align-items: start;
    }

    .login-shell {
      border-radius: 21px;
    }

    .login-card {
      padding: 25px 19px;
    }

    .side-panel {
      padding: 27px 19px;
    }

    .brand-row {
      margin-bottom: 31px;
    }

    .login-heading h1 {
      font-size: 38px;
    }

    .login-footer {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  @media (max-width: 350px) {
    .login-heading h1 {
      font-size: 34px;
    }
  }
`;
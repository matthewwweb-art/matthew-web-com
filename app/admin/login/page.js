"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../lib/supabaseClient";

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

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setStatus(error.message);
      setLoading(false);
      return;
    }

    router.push("/admin");
  }

  return (
    <main className="admin-login-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #f4f6f8;
          color: #202124;
        }

        .admin-login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px 18px;
          background:
            linear-gradient(rgba(15, 131, 166, 0.85), rgba(245, 124, 0, 0.85)),
            #f4f6f8;
        }

        .login-card {
          width: 100%;
          max-width: 460px;
          background: #ffffff;
          border-radius: 18px;
          padding: 38px 32px;
          box-shadow: 0 18px 55px rgba(0, 0, 0, 0.22);
        }

        .login-card h1 {
          margin: 0 0 10px;
          color: #f57c00;
          font-size: 38px;
          line-height: 1.1;
          text-align: center;
        }

        .login-card p {
          margin: 0 0 28px;
          color: #4b5563;
          font-size: 18px;
          line-height: 1.4;
          text-align: center;
        }

        .login-form label {
          display: block;
          color: #202124;
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .login-form input {
          width: 100%;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          padding: 15px 14px;
          font-size: 17px;
          margin-bottom: 18px;
          outline: none;
        }

        .login-form input:focus {
          border-color: #0f83a6;
          box-shadow: 0 0 0 3px rgba(15, 131, 166, 0.16);
        }

        .login-btn {
          width: 100%;
          border: none;
          border-radius: 8px;
          background: #f57c00;
          color: #ffffff;
          padding: 16px 20px;
          font-size: 20px;
          font-weight: 800;
          cursor: pointer;
          margin-top: 8px;
        }

        .login-btn:hover {
          background: #d96d00;
        }

        .login-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .status-message {
          margin-top: 18px;
          color: #b42318;
          background: #fff1f0;
          border: 1px solid #ffccc7;
          padding: 12px 14px;
          border-radius: 8px;
          font-size: 15px;
          text-align: center;
        }

        .back-link {
          display: block;
          margin-top: 24px;
          text-align: center;
          color: #0f83a6;
          font-size: 16px;
          text-decoration: none;
          font-weight: 700;
        }

        .back-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 520px) {
          .login-card {
            padding: 32px 22px;
          }

          .login-card h1 {
            font-size: 32px;
          }
        }
      `}</style>

      <section className="login-card">
        <h1>Admin Login</h1>
        <p>Sign in to view and track website leads.</p>

        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Your admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="login-btn" type="submit" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </button>

          {status ? <div className="status-message">{status}</div> : null}
        </form>

        <Link href="/" className="back-link">
          ← Back to Website
        </Link>
      </section>
    </main>
  );
}
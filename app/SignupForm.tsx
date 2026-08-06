"use client";

import { FormEvent, useState } from "react";

const subscribeEndpoint = "https://ashokmehan.com/api/subscribe";

export default function SignupForm({ idPrefix = "signup" }: { idPrefix?: string }) {
  const [status, setStatus] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(event.currentTarget);
    setState("sending");
    setStatus("");

    try {
      const response = await fetch(subscribeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.get("email"), name: data.get("name"), website: data.get("website") }),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.error || "Could not complete signup.");
      setState("success");
      setStatus(result.message || "Check your inbox to confirm your subscription.");
      form.reset();
    } catch (error) {
      setState("error");
      setStatus(error instanceof Error ? error.message : "Could not complete signup. Please try again.");
    }
  }

  return (
    <form className="signup-form" onSubmit={submit}>
      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor={`${idPrefix}-website`}>Website</label>
        <input id={`${idPrefix}-website`} name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="signup-name-field">
        <label htmlFor={`${idPrefix}-name`}>Your name</label>
        <input id={`${idPrefix}-name`} name="name" type="text" autoComplete="name" placeholder="First and last name" required />
      </div>
      <label htmlFor={`${idPrefix}-email`}>Email address</label>
      <div className="signup-email-row">
        <input id={`${idPrefix}-email`} name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        <button type="submit" disabled={state === "sending"}>{state === "sending" ? "Signing up…" : "Sign up →"}</button>
      </div>
      <small>We&apos;ll send a confirmation link. No spam, and you can unsubscribe at any time.</small>
      <p className={`form-status ${state}`} aria-live="polite">{status}</p>
    </form>
  );
}

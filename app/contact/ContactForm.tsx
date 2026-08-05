"use client";

import { FormEvent, useState } from "react";

const contactEndpoint = "https://ashokmehan.com/api/contact";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(event.currentTarget);
    setState("sending");
    setStatus("");

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: `[Mehan Observatory] ${data.get("topic") || "General inquiry"}`,
          message: data.get("message"),
          website: data.get("website"),
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.error || "Could not send your message.");
      setState("success");
      setStatus(result.message || "Message sent — Ashok will be in touch.");
      form.reset();
    } catch (error) {
      setState("error");
      setStatus(error instanceof Error ? error.message : "Could not send your message. Please try again.");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-name">Your name</label>
        <input id="contact-name" name="name" autoComplete="name" required />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-email">Email address</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-topic">What is this about?</label>
        <select id="contact-topic" name="topic" defaultValue="General inquiry">
          <option>General inquiry</option>
          <option>Research collaboration</option>
          <option>Media or press</option>
          <option>Speaking invitation</option>
          <option>Feedback on History&apos;s Future</option>
        </select>
      </div>
      <div className="contact-field">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows={8} required />
      </div>
      <button className="primary-action" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Send message →"}
      </button>
      <p className={`form-status ${state}`} aria-live="polite">{status}</p>
    </form>
  );
}

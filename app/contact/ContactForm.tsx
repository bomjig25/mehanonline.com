"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const topic = String(data.get("topic") || "General inquiry");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`[Mehan Observatory] ${topic}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    setStatus("Your email application is opening with this message ready to send.");
    window.location.href = `mailto:ashok@ashokmehan.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={submit}>
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
      <button className="primary-action" type="submit">Prepare message →</button>
      <p className="form-status" aria-live="polite">{status}</p>
    </form>
  );
}

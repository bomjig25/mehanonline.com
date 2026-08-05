"use client";

import { FormEvent } from "react";

export default function SignupForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") || "");
    const subject = encodeURIComponent("Subscribe me to Mehan Observatory field notes");
    const body = encodeURIComponent(`Please add ${email} to the Mehan Observatory / Mehan Dispatch update list.`);
    window.location.href = `mailto:ashok@ashokmehan.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="signup-form" onSubmit={submit}>
      <label htmlFor="signup-email">Email address</label>
      <div>
        <input id="signup-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        <button type="submit">Sign up →</button>
      </div>
      <small>Your email application will open with a subscription request ready to send.</small>
    </form>
  );
}

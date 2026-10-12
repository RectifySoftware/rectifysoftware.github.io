"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "hello@rectify.getanchor.site";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (!name.trim()) next.name = "Enter your name.";
    if (!email.trim()) {
      next.email = "Enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (!message.trim()) next.message = "Enter a message.";
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-6">
      <Field label="Name" error={errors.name}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-line bg-paper px-4 py-3 text-ink outline-none focus:border-red"
          autoComplete="name"
        />
      </Field>
      <Field label="Email" error={errors.email}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-line bg-paper px-4 py-3 text-ink outline-none focus:border-red"
          autoComplete="email"
        />
      </Field>
      <Field label="Message" error={errors.message}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className="w-full border border-line bg-paper px-4 py-3 text-ink outline-none focus:border-red"
        />
      </Field>

      <button
        type="submit"
        className="bg-gradient-to-b from-red-light to-red px-6 py-3 text-sm font-medium text-paper shadow-sm transition-all hover:from-red hover:to-red-dark"
      >
        Send message
      </button>

      {sent && (
        <p className="text-sm text-ink-soft" role="status">
          Your email client should have opened with this message addressed to{" "}
          {CONTACT_EMAIL}. Send it from there to reach us.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-ink">
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-sm text-red">{error}</span>}
    </label>
  );
}

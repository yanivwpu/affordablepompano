"use client";

import { CONTACT_EMAIL } from "@/lib/navigation";
import { FormEvent, useState } from "react";

const subjectLabels: Record<string, string> = {
  general: "General Question",
  "real-estate": "Real Estate",
  advertising: "Advertising / Sponsorship",
  restaurant: "Restaurant Listing",
  excursion: "Excursion Listing",
  business: "Local Business Listing",
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subjectLabel = subjectLabels[form.subject] ?? form.subject;
    const subject = encodeURIComponent(
      `Contact Form — ${subjectLabel} — ${form.name}`,
    );
    const body = encodeURIComponent(
      [
        `Message from AffordablePompano.com (${subjectLabel})`,
        "",
        `Name: ${form.name}`,
        `Reply email: ${form.email}`,
        `Subject: ${subjectLabel}`,
        "",
        "Message:",
        form.message,
      ].join("\n"),
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-teal/30 bg-teal/10 px-6 py-8 text-center">
        <p className="font-display text-xl text-navy">Message sent!</p>
        <p className="mt-2 text-sm text-navy/70">
          Your email app should open with your message ready to send. We&apos;ll
          get back to you within 1–2 business days.
        </p>
      </div>
    );
  }

  const inputClass =
    "mt-1.5 w-full rounded-sm border border-sand-dark bg-cream px-4 py-3 text-sm text-navy focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-navy">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-navy">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium text-navy">
          Subject
        </label>
        <select
          id="contact-subject"
          required
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className={inputClass}
        >
          <option value="">What can we help with?</option>
          <option value="general">General Question</option>
          <option value="real-estate">Real Estate</option>
          <option value="advertising">Advertising / Sponsorship</option>
          <option value="restaurant">Restaurant Listing</option>
          <option value="excursion">Excursion Listing</option>
          <option value="business">Local Business Listing</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-navy">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={inputClass}
          placeholder="How can we help?"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-sm bg-coral px-6 py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-coral-light sm:w-auto"
      >
        Send Message
      </button>

      <p className="text-xs text-navy/50">
        Prefer email? Reach us at{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-medium text-teal hover:text-teal-light"
        >
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </form>
  );
}

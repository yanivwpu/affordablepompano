"use client";

import { REALTOR_EMAIL } from "@/lib/images";
import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-teal/30 bg-teal/10 px-6 py-8 text-center">
        <p className="font-display text-xl text-navy">Message sent!</p>
        <p className="mt-2 text-sm text-navy/70">
          Thanks for reaching out — we&apos;ll get back to you within 1–2
          business days.
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
            className={inputClass}
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium text-navy">
          Subject
        </label>
        <select id="contact-subject" required className={inputClass}>
          <option value="">What can we help with?</option>
          <option value="homes">Homes & real estate</option>
          <option value="food">Restaurant recommendation</option>
          <option value="excursions">Things to do</option>
          <option value="advertise">Advertising & sponsorship</option>
          <option value="other">Something else</option>
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
          href={`mailto:${REALTOR_EMAIL}`}
          className="font-medium text-teal hover:text-teal-light"
        >
          {REALTOR_EMAIL}
        </a>
      </p>
    </form>
  );
}

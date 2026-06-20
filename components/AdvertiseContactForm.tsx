"use client";

import { advertisePackages } from "@/lib/advertise";
import { ADVERTISE_EMAIL } from "@/lib/navigation";
import { FormEvent, useEffect, useState } from "react";

export default function AdvertiseContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    package: "",
    message: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pkg = params.get("package");
    if (pkg && advertisePackages.some((p) => p.id === pkg)) {
      setForm((prev) => ({ ...prev, package: pkg }));
    }
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-teal/30 bg-teal/10 px-6 py-8 text-center">
        <p className="font-display text-xl text-navy">You&apos;re on the list!</p>
        <p className="mt-2 text-sm text-navy/70">
          Thanks for applying — we&apos;ll confirm availability and next steps
          within 1–2 business days. Questions? Email us at{" "}
          <a
            href={`mailto:${ADVERTISE_EMAIL}`}
            className="font-semibold text-teal hover:text-teal-light"
          >
            {ADVERTISE_EMAIL}
          </a>
          .
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
          <label htmlFor="name" className="block text-sm font-medium text-navy">
            Your name
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label
            htmlFor="business"
            className="block text-sm font-medium text-navy"
          >
            Business name
          </label>
          <input
            id="business"
            type="text"
            required
            value={form.business}
            onChange={(e) => setForm({ ...form, business: e.target.value })}
            className={inputClass}
            placeholder="Your Pompano business"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass}
          placeholder="you@yourbusiness.com"
        />
      </div>

      <div>
        <label
          htmlFor="package"
          className="block text-sm font-medium text-navy"
        >
          Package you&apos;re interested in
        </label>
        <select
          id="package"
          required
          value={form.package}
          onChange={(e) => setForm({ ...form, package: e.target.value })}
          className={inputClass}
        >
          <option value="">Select a package</option>
          {advertisePackages.map((pkg) => (
            <option key={pkg.id} value={pkg.id}>
              {pkg.title} — {pkg.price}
              {pkg.period}
            </option>
          ))}
          <option value="custom">Custom partnership</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-navy"
        >
          Tell us about your business
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={inputClass}
          placeholder="What would you like to promote? Any questions about placement or timing?"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-sm bg-coral px-6 py-3.5 text-sm font-bold tracking-wide text-cream shadow-sm transition-colors hover:bg-coral-light sm:w-auto"
      >
        Apply to Sponsor
      </button>
    </form>
  );
}

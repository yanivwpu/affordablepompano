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
        <p className="font-display text-xl text-navy">Thanks for reaching out!</p>
        <p className="mt-2 text-sm text-navy/70">
          We&apos;ll get back to you within 1–2 business days with pricing and
          next steps. You can also email us directly at{" "}
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
            className="mt-1.5 w-full rounded-sm border border-sand-dark bg-cream px-4 py-3 text-sm text-navy focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
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
            className="mt-1.5 w-full rounded-sm border border-sand-dark bg-cream px-4 py-3 text-sm text-navy focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
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
          className="mt-1.5 w-full rounded-sm border border-sand-dark bg-cream px-4 py-3 text-sm text-navy focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
          placeholder="you@yourbusiness.com"
        />
      </div>

      <div>
        <label
          htmlFor="package"
          className="block text-sm font-medium text-navy"
        >
          Interested in
        </label>
        <select
          id="package"
          required
          value={form.package}
          onChange={(e) => setForm({ ...form, package: e.target.value })}
          className="mt-1.5 w-full rounded-sm border border-sand-dark bg-cream px-4 py-3 text-sm text-navy focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
        >
          <option value="">Select a package</option>
          {advertisePackages.map((pkg) => (
            <option key={pkg.id} value={pkg.id}>
              {pkg.title}
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
          className="mt-1.5 w-full rounded-sm border border-sand-dark bg-cream px-4 py-3 text-sm text-navy focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
          placeholder="What are you hoping to promote? Any questions about pricing?"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center rounded-sm bg-coral px-6 py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-coral-light"
        >
          Apply to Sponsor
        </button>
        <a
          href={`mailto:${ADVERTISE_EMAIL}?subject=${encodeURIComponent("Pricing Request - Affordable Pompano")}`}
          className="inline-flex flex-1 items-center justify-center rounded-sm border border-navy/20 bg-transparent px-6 py-3.5 text-sm font-semibold tracking-wide text-navy transition-colors hover:border-teal hover:text-teal"
        >
          Get Pricing
        </a>
      </div>
    </form>
  );
}

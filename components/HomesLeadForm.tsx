"use client";

import { REALTOR_EMAIL, REALTOR_PHONE } from "@/lib/images";
import { FormEvent, useState } from "react";

type FormType = "alerts" | "showing" | "contact";

const formConfig: Record<
  FormType,
  { title: string; description: string; submitLabel: string }
> = {
  alerts: {
    title: "Get Property Alerts",
    description:
      "New listings, price drops, and off-market deals — straight to your inbox.",
    submitLabel: "Sign Up for Alerts",
  },
  showing: {
    title: "Schedule a Showing",
    description:
      "Tell us what you're looking for and we'll set up a walk-through.",
    submitLabel: "Request Showing",
  },
  contact: {
    title: "Contact a Realtor",
    description:
      "Questions about buying, renting, or selling in Pompano? We're here to help.",
    submitLabel: "Send Message",
  },
};

export default function HomesLeadForm({ type }: { type: FormType }) {
  const [submitted, setSubmitted] = useState(false);
  const config = formConfig[type];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-teal/30 bg-teal/10 px-6 py-8 text-center">
        <p className="font-display text-xl text-navy">Thanks — we got it!</p>
        <p className="mt-2 text-sm text-navy/70">
          A local Pompano expert will reach out within 24 hours. You can also
          email{" "}
          <a
            href={`mailto:${REALTOR_EMAIL}`}
            className="font-semibold text-teal hover:text-teal-light"
          >
            {REALTOR_EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  const inputClass =
    "mt-1.5 w-full rounded-sm border border-sand-dark bg-cream px-4 py-3 text-sm text-navy focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal";

  return (
    <div>
      <h3 className="font-display text-2xl font-medium text-navy">
        {config.title}
      </h3>
      <p className="mt-2 text-sm text-navy/70">{config.description}</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor={`${type}-name`} className="block text-sm font-medium text-navy">
              Name
            </label>
            <input
              id={`${type}-name`}
              type="text"
              required
              className={inputClass}
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor={`${type}-email`} className="block text-sm font-medium text-navy">
              Email
            </label>
            <input
              id={`${type}-email`}
              type="email"
              required
              className={inputClass}
              placeholder="you@email.com"
            />
          </div>
        </div>

        {type === "alerts" && (
          <>
            <div>
              <label htmlFor="alerts-type" className="block text-sm font-medium text-navy">
                Looking for
              </label>
              <select id="alerts-type" required className={inputClass}>
                <option value="">Select type</option>
                <option value="buy">Buy a home</option>
                <option value="long-term">Long-term rental</option>
                <option value="vacation">Vacation rental</option>
              </select>
            </div>
            <div>
              <label htmlFor="alerts-budget" className="block text-sm font-medium text-navy">
                Budget range
              </label>
              <input
                id="alerts-budget"
                type="text"
                className={inputClass}
                placeholder="e.g. $250k–$400k or $2,000/mo"
              />
            </div>
          </>
        )}

        {type === "showing" && (
          <>
            <div>
              <label htmlFor="showing-phone" className="block text-sm font-medium text-navy">
                Phone
              </label>
              <input
                id="showing-phone"
                type="tel"
                required
                className={inputClass}
                placeholder={REALTOR_PHONE}
              />
            </div>
            <div>
              <label htmlFor="showing-date" className="block text-sm font-medium text-navy">
                Preferred date
              </label>
              <input id="showing-date" type="date" className={inputClass} />
            </div>
            <div>
              <label htmlFor="showing-property" className="block text-sm font-medium text-navy">
                Property or area of interest
              </label>
              <input
                id="showing-property"
                type="text"
                className={inputClass}
                placeholder="Address, neighborhood, or listing link"
              />
            </div>
          </>
        )}

        {type === "contact" && (
          <>
            <div>
              <label htmlFor="contact-phone" className="block text-sm font-medium text-navy">
                Phone
              </label>
              <input
                id="contact-phone"
                type="tel"
                className={inputClass}
                placeholder={REALTOR_PHONE}
              />
            </div>
            <div>
              <label htmlFor="contact-interest" className="block text-sm font-medium text-navy">
                I&apos;m interested in
              </label>
              <select id="contact-interest" required className={inputClass}>
                <option value="">Select one</option>
                <option value="buy">Buying a home</option>
                <option value="long-term">Long-term rental</option>
                <option value="vacation">Vacation rental</option>
                <option value="sell">Selling my home</option>
              </select>
            </div>
          </>
        )}

        <div>
          <label htmlFor={`${type}-message`} className="block text-sm font-medium text-navy">
            {type === "contact" ? "How can we help?" : "Anything else?"}
          </label>
          <textarea
            id={`${type}-message`}
            rows={3}
            className={inputClass}
            placeholder={
              type === "showing"
                ? "Best times to visit, must-haves, etc."
                : "Tell us what you're looking for..."
            }
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-sm bg-coral px-6 py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-coral-light sm:w-auto"
        >
          {config.submitLabel}
        </button>
      </form>
    </div>
  );
}

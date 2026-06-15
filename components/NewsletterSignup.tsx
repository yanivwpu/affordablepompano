"use client";

import { FormEvent, useState } from "react";

type NewsletterSignupProps = {
  variant?: "full" | "compact";
};

export default function NewsletterSignup({
  variant = "full",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  }

  if (variant === "compact") {
    return (
      <div>
        <p className="font-display text-lg font-medium text-navy">
          The Pompano Post
        </p>
        <p className="mt-1 text-xs leading-relaxed text-navy/60">
          Weekly picks on food, homes, and things to do.
        </p>
        {submitted ? (
          <p className="mt-3 text-xs text-teal">You&apos;re subscribed — thanks!</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-3 flex flex-col gap-2">
            <label htmlFor="footer-newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full rounded-sm border border-sand-dark bg-cream px-3 py-2 text-sm text-navy placeholder:text-navy/40 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
            />
            <button
              type="submit"
              className="rounded-sm bg-coral px-4 py-2 text-xs font-semibold text-cream transition-colors hover:bg-coral-light"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <section className="border-t border-sand-dark/50 bg-navy py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sunset">
            The Pompano Post
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium text-cream sm:text-4xl">
            Your Weekly Sunny Roundup
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-cream/75 sm:text-base">
            Restaurant picks, property alerts, excursion deals, and local event
            news — a friendly weekly note from your Pompano Beach guide.
          </p>

          {submitted ? (
            <p className="mt-8 rounded-sm border border-teal-light/30 bg-teal/20 px-6 py-4 text-sm text-cream">
              You&apos;re on the list! Thanks for subscribing — see you in
              paradise.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-0"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full rounded-sm border border-cream/20 bg-cream/10 px-5 py-3.5 text-sm text-cream placeholder:text-cream/40 focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral sm:rounded-r-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-sm bg-coral px-7 py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-coral-light sm:rounded-l-none"
              >
                Subscribe Free
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-cream/45">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

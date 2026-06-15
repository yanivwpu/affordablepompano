import Link from "next/link";
import { REALTOR_EMAIL } from "@/lib/images";

type ContactRealtorCTAProps = {
  variant?: "full" | "compact" | "banner";
  headline?: string;
  description?: string;
};

export default function ContactRealtorCTA({
  variant = "full",
  headline = "Ready to find your place in paradise?",
  description = "Reach out today — we'll connect you with a friendly local realtor who knows Pompano Beach.",
}: ContactRealtorCTAProps) {
  if (variant === "banner") {
    return (
      <div className="rounded-sm border border-teal/30 bg-teal/10 px-5 py-4 sm:flex sm:items-center sm:justify-between sm:gap-6">
        <p className="text-sm font-medium text-navy sm:text-base">{headline}</p>
        <div className="mt-3 flex flex-col gap-2 sm:mt-0 sm:flex-row">
          <Link
            href="/homes#browse"
            className="inline-flex items-center justify-center rounded-sm bg-teal px-5 py-2.5 text-sm font-semibold text-cream hover:bg-teal-light"
          >
            Browse Homes
          </Link>
          <a
            href={`mailto:${REALTOR_EMAIL}`}
            className="inline-flex items-center justify-center rounded-sm bg-coral px-5 py-2.5 text-sm font-semibold text-cream hover:bg-coral-light"
          >
            Contact Realtor
          </a>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/homes#browse"
          className="inline-flex items-center justify-center rounded-sm bg-teal px-7 py-3.5 text-sm font-semibold tracking-wide text-cream transition-all hover:bg-teal-light"
        >
          Browse Homes
        </Link>
        <a
          href={`mailto:${REALTOR_EMAIL}`}
          className="inline-flex items-center justify-center rounded-sm bg-coral px-7 py-3.5 text-sm font-semibold tracking-wide text-cream transition-all hover:bg-coral-light"
        >
          Contact Realtor
        </a>
      </div>
    );
  }

  return (
    <section className="bg-navy py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sunset">
          Get in Touch
        </p>
        <h2 className="font-display mt-3 text-3xl font-medium text-cream sm:text-4xl">
          {headline}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-cream/75 sm:text-base">
          {description}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/homes#browse"
            className="inline-flex items-center justify-center rounded-sm bg-teal px-8 py-3.5 text-sm font-semibold tracking-wide text-cream transition-all hover:bg-teal-light"
          >
            Browse Homes
          </Link>
          <a
            href={`mailto:${REALTOR_EMAIL}`}
            className="inline-flex items-center justify-center rounded-sm bg-coral px-8 py-3.5 text-sm font-semibold tracking-wide text-cream transition-all hover:bg-coral-light"
          >
            Contact Realtor
          </a>
        </div>
        <a
          href={`mailto:${REALTOR_EMAIL}`}
          className="mt-5 inline-block text-sm text-cream/60 transition-colors hover:text-coral-light"
        >
          {REALTOR_EMAIL}
        </a>
      </div>
    </section>
  );
}

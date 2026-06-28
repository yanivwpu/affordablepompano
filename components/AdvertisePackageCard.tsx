import Link from "next/link";
import type { VisibilityPackage } from "@/lib/advertise";

type VisibilityPackageCardProps = {
  pkg: VisibilityPackage;
  compact?: boolean;
};

function cardShellClass(pkg: VisibilityPackage): string {
  if (pkg.variant === "realtor") {
    return "border-navy/20 bg-gradient-to-b from-navy/[0.04] to-cream ring-1 ring-navy/10";
  }
  if (pkg.variant === "premium") {
    return "border-teal/25 bg-teal/[0.04] ring-1 ring-teal/15";
  }
  if (pkg.highlighted) {
    return "border-teal ring-2 ring-teal/20";
  }
  return "border-sand-dark/60 bg-cream";
}

export function VisibilityPackageCard({ pkg, compact = false }: VisibilityPackageCardProps) {
  const padding = compact ? "p-4 sm:p-5" : "p-5 sm:p-6";

  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-sm border shadow-sm ${cardShellClass(pkg)}`}
    >
      {pkg.badge && (
        <p className="bg-teal px-3 py-1.5 text-center text-[10px] font-bold uppercase tracking-widest text-cream">
          {pkg.badge}
        </p>
      )}

      <div className={`flex flex-1 flex-col ${padding}`}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3
            className={`font-display font-medium leading-snug text-navy ${
              compact ? "text-lg" : "text-xl sm:text-2xl"
            }`}
          >
            {pkg.title}
          </h3>
          <div className="shrink-0 text-right">
            <div className="flex items-baseline justify-end gap-1">
              <span className="font-display text-3xl text-coral">{pkg.price}</span>
              {pkg.priceNote && (
                <span className="text-[11px] font-medium text-navy/50">{pkg.priceNote}</span>
              )}
            </div>
            <span className="text-xs font-medium text-navy/50">{pkg.period}</span>
          </div>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-navy/65">{pkg.tagline}</p>

        <ul className="mt-4 flex-1 space-y-2">
          {pkg.perks.map((perk) => (
            <li
              key={perk}
              className="flex items-start gap-2.5 text-sm text-navy/70"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal"
                aria-hidden="true"
              />
              {perk}
            </li>
          ))}
        </ul>

        {pkg.note && (
          <p className="mt-3 text-xs font-medium text-teal">{pkg.note}</p>
        )}

        <Link
          href={`/advertise?package=${pkg.id}#contact`}
          className="mt-4 inline-flex w-full items-center justify-center rounded-sm bg-coral px-4 py-2.5 text-sm font-bold tracking-wide text-cream shadow-sm transition-colors hover:bg-coral-light"
        >
          {pkg.ctaLabel}
        </Link>
      </div>
    </article>
  );
}

export function NewsletterSpotlightCard({ pkg }: VisibilityPackageCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-sm border border-sand-dark/60 bg-sand/30 shadow-sm">
      <div className="flex flex-1 flex-col p-5 sm:flex-row sm:items-center sm:gap-8 sm:p-6">
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-teal">
            Newsletter
          </p>
          <h3 className="font-display mt-1 text-lg font-medium text-navy sm:text-xl">
            {pkg.title}
          </h3>
          <p className="mt-1.5 text-sm text-navy/65">{pkg.tagline}</p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
            {pkg.perks.map((perk) => (
              <li
                key={perk}
                className="flex items-center gap-2 text-sm text-navy/70"
              >
                <span className="h-1 w-1 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                {perk}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex shrink-0 flex-col items-stretch sm:mt-0 sm:w-44">
          <div className="text-center sm:text-right">
            <span className="font-display text-3xl text-coral">{pkg.price}</span>
            <span className="ml-1 text-xs font-medium text-navy/50">{pkg.period}</span>
          </div>
          <Link
            href={`/advertise?package=${pkg.id}#contact`}
            className="mt-3 inline-flex items-center justify-center rounded-sm border-2 border-teal/30 bg-cream px-4 py-2.5 text-sm font-semibold text-teal transition-colors hover:border-teal hover:bg-teal hover:text-cream"
          >
            {pkg.ctaLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}

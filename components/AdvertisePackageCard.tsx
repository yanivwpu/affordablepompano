import Link from "next/link";
import {
  FEATURED_PLACEMENT_NOTE,
  STANDARD_PLACEMENT_NOTE,
  type AdvertiseAddOn,
  type AdvertisePackageGroup,
} from "@/lib/advertise";

type ListingPackageCardProps = {
  pkg: AdvertisePackageGroup;
};

type AddOnPackageCardProps = {
  pkg: AdvertiseAddOn;
};

export function ListingPackageCard({ pkg }: ListingPackageCardProps) {
  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-sm border bg-cream shadow-sm ${
        pkg.highlighted
          ? "border-teal ring-2 ring-teal/20"
          : "border-sand-dark/60"
      }`}
    >
      {pkg.highlighted && (
        <p className="bg-teal px-4 py-2 text-center text-[10px] font-bold uppercase tracking-widest text-cream">
          Most Popular
        </p>
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-xl font-medium leading-snug text-navy sm:text-2xl">
          {pkg.title}
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-navy/70">
          {pkg.description}
        </p>

        <div className="mt-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-navy/45">
            Best For
          </p>
          <p className="mt-1.5 text-xs leading-relaxed text-navy/60">
            {pkg.bestFor}
          </p>
        </div>

        <div className="mt-6 space-y-5">
          {pkg.tiers.map((tier) => {
            const placementNote =
              tier.placementTier === "featured"
                ? FEATURED_PLACEMENT_NOTE
                : STANDARD_PLACEMENT_NOTE;

            return (
              <div
                key={tier.id}
                className={`rounded-sm border p-5 ${
                  tier.placementTier === "featured"
                    ? "border-teal/30 bg-teal/5"
                    : "border-sand-dark/50 bg-sand/20"
                }`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">
                    {tier.label}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-3xl text-coral">
                      {tier.price}
                    </span>
                    <span className="text-sm font-medium text-navy/55">
                      {tier.period}
                    </span>
                  </div>
                </div>

                <p className="mt-2 text-xs leading-relaxed text-navy/65">
                  {tier.subtitle}
                </p>

                <p className="mt-2 text-xs font-semibold text-teal">
                  {tier.inventory}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-navy/60">
                  {tier.includes}
                </p>

                <ul className="mt-4 space-y-2">
                  {tier.perks.map((perk) => (
                    <li
                      key={perk}
                      className="flex items-start gap-2.5 text-sm text-navy/65"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                      {perk}
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-xs leading-relaxed text-navy/50">
                  {placementNote}
                </p>

                <Link
                  href={`/advertise?package=${tier.id}#contact`}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-sm bg-coral px-4 py-3 text-sm font-bold tracking-wide text-cream shadow-sm transition-colors hover:bg-coral-light"
                >
                  Reserve {tier.label} Spot
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export function AddOnPackageCard({ pkg }: AddOnPackageCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-sm border border-sand-dark/60 bg-cream shadow-sm">
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-xl font-medium leading-snug text-navy sm:text-2xl">
          {pkg.title}
        </h3>
        {pkg.tagline && (
          <p className="mt-1.5 text-xs font-medium text-teal">{pkg.tagline}</p>
        )}

        <div className="mt-4 flex flex-col gap-1 border-b border-sand-dark/30 pb-4">
          <div className="flex items-baseline gap-1">
            <span className="font-display text-4xl text-coral">{pkg.price}</span>
            <span className="text-sm font-medium text-navy/55">{pkg.period}</span>
          </div>
          <p className="text-xs font-semibold text-teal">{pkg.inventory}</p>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-navy/70">
          {pkg.description}
        </p>

        <div className="mt-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-navy/45">
            Best For
          </p>
          <p className="mt-1.5 text-xs leading-relaxed text-navy/60">
            {pkg.bestFor}
          </p>
        </div>

        <ul className="mt-5 flex-1 space-y-2.5">
          {pkg.perks.map((perk) => (
            <li
              key={perk}
              className="flex items-start gap-2.5 text-sm text-navy/65"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
              {perk}
            </li>
          ))}
        </ul>

        <Link
          href={`/advertise?package=${pkg.id}#contact`}
          className="mt-6 inline-flex w-full items-center justify-center rounded-sm bg-coral px-4 py-3.5 text-sm font-bold tracking-wide text-cream shadow-sm transition-colors hover:bg-coral-light"
        >
          Reserve Your Spot
        </Link>
      </div>
    </article>
  );
}

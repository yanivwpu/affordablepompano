import Link from "next/link";
import {
  EXCLUSIVE_PLACEMENT_NOTE,
  FEATURED_PLACEMENT_NOTE,
  STANDARD_PLACEMENT_NOTE,
  type AdvertiseAddOn,
  type AdvertisePackageGroup,
  type AdvertiseTier,
} from "@/lib/advertise";

type ListingPackageCardProps = {
  pkg: AdvertisePackageGroup;
};

type AddOnPackageCardProps = {
  pkg: AdvertiseAddOn;
};

function tierSurfaceClass(placementTier: AdvertiseTier["placementTier"]): string {
  if (placementTier === "exclusive") {
    return "border-coral/35 bg-coral/5 ring-1 ring-coral/15";
  }
  if (placementTier === "featured") {
    return "border-teal/30 bg-teal/5";
  }
  return "border-sand-dark/50 bg-sand/20";
}

function tierPlacementNote(tier: AdvertiseTier): string | null {
  if (tier.placementTier === "standard") return null;
  if (tier.placementNote) return tier.placementNote;
  if (tier.placementTier === "exclusive") return EXCLUSIVE_PLACEMENT_NOTE;
  if (tier.placementTier === "featured") return FEATURED_PLACEMENT_NOTE;
  return STANDARD_PLACEMENT_NOTE;
}

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
        <p className="bg-teal px-3 py-1.5 text-center text-[10px] font-bold uppercase tracking-widest text-cream">
          Most Popular
        </p>
      )}

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-display text-lg font-medium leading-snug text-navy xl:text-xl">
          {pkg.title}
        </h3>

        <p className="mt-2 text-xs leading-relaxed text-navy/70 sm:text-sm">
          {pkg.description}
        </p>

        <div className="mt-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-navy/45">
            Best For
          </p>
          <p className="mt-1 text-[11px] leading-relaxed text-navy/60 sm:text-xs">
            {pkg.bestFor}
          </p>
        </div>

        <div className="mt-4 flex flex-1 flex-col gap-3">
          {pkg.tiers.map((tier) => {
            const placementNote = tierPlacementNote(tier);

            return (
              <div
                key={tier.id}
                className={`flex flex-1 flex-col rounded-sm border p-3.5 sm:p-4 ${tierSurfaceClass(tier.placementTier)}`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-teal sm:text-xs">
                    {tier.label}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-2xl text-coral sm:text-3xl">
                      {tier.price}
                    </span>
                    <span className="text-xs font-medium text-navy/55">
                      {tier.period}
                    </span>
                  </div>
                </div>

                {tier.subtitle && (
                  <p className="mt-1.5 text-[11px] leading-relaxed text-navy/65 sm:text-xs">
                    {tier.subtitle}
                  </p>
                )}

                <p className="mt-1.5 text-[11px] font-semibold text-teal sm:text-xs">
                  {tier.inventory}
                </p>
                <p className="mt-1.5 text-[11px] leading-relaxed text-navy/60 sm:text-xs">
                  {tier.includes}
                </p>

                <ul className="mt-2.5 flex-1 space-y-1.5">
                  {tier.perks.map((perk) => (
                    <li
                      key={perk}
                      className="flex items-start gap-2 text-[11px] text-navy/65 sm:text-xs"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal" />
                      {perk}
                    </li>
                  ))}
                </ul>

                {placementNote && (
                  <p className="mt-2 text-[10px] leading-relaxed text-navy/50 sm:text-[11px]">
                    {placementNote}
                  </p>
                )}

                <Link
                  href={`/advertise?package=${tier.id}#contact`}
                  className="mt-3 inline-flex w-full items-center justify-center rounded-sm bg-coral px-3 py-2.5 text-xs font-bold tracking-wide text-cream shadow-sm transition-colors hover:bg-coral-light sm:text-sm"
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

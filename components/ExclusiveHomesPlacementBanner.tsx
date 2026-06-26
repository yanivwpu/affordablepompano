import { exclusiveHomesPagePlacement } from "@/lib/advertise";
import Link from "next/link";

export default function ExclusiveHomesPlacementBanner() {
  const pkg = exclusiveHomesPagePlacement;

  return (
    <div className="mt-8">
      <article className="overflow-hidden rounded-sm border border-coral/35 bg-gradient-to-r from-navy via-navy to-[#1a2f4a] shadow-lg ring-1 ring-coral/25">
        <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_auto] lg:items-center lg:gap-8">
          <div className="min-w-0">
            <h3 className="font-display text-xl font-medium leading-snug text-cream sm:text-2xl">
              {pkg.title}
            </h3>
            <p className="mt-1.5 text-xs font-semibold text-coral-light sm:text-sm">
              {pkg.subtitle}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-cream/75 sm:text-sm">
              {pkg.description}
            </p>
            <div className="mt-4 flex flex-wrap items-baseline gap-2">
              <span className="font-display text-4xl text-coral sm:text-5xl">
                {pkg.price}
              </span>
              <span className="text-sm font-medium text-cream/70">
                {pkg.period}
              </span>
            </div>
            <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-teal-light/90 sm:text-xs">
              {pkg.inventory}
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
            {pkg.perks.map((perk) => (
              <li
                key={perk}
                className="flex items-start gap-2 text-xs text-cream/90 sm:text-sm"
              >
                <span
                  className="mt-0.5 shrink-0 text-coral"
                  aria-hidden="true"
                >
                  ✓
                </span>
                {perk}
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-stretch justify-center gap-3 lg:items-end">
            <Link
              href={`/advertise?package=${pkg.id}#contact`}
              className="inline-flex items-center justify-center rounded-sm bg-coral px-6 py-3.5 text-sm font-bold tracking-wide text-cream shadow-md transition-colors hover:bg-coral-light lg:min-w-[220px]"
            >
              {pkg.ctaLabel}
            </Link>
            <p className="max-w-xs text-[10px] leading-relaxed text-cream/50 lg:text-right sm:text-xs">
              {pkg.placementNote}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

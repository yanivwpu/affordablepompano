import Link from "next/link";
import type { advertisePackages } from "@/lib/advertise";

type Package = (typeof advertisePackages)[number];

export default function AdvertisePackageCard({ pkg }: { pkg: Package }) {
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
        <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-teal">
          <span className="text-[8px] text-coral" aria-hidden="true">
            &#9670;
          </span>
          {pkg.idealFor}
        </p>

        <h3 className="font-display mt-3 text-xl font-medium leading-snug text-navy sm:text-2xl">
          {pkg.title}
        </h3>

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

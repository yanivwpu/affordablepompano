import Link from "next/link";
import type { advertisePackages } from "@/lib/advertise";

type Package = (typeof advertisePackages)[number];

export default function AdvertisePackageCard({ pkg }: { pkg: Package }) {
  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-sm border bg-cream ${
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

        <h3 className="font-display mt-3 text-2xl font-medium text-navy">
          {pkg.title}
        </h3>

        <div className="mt-3 flex items-baseline gap-1">
          <span className="font-display text-3xl text-coral">{pkg.price}</span>
          <span className="text-sm text-navy/50">{pkg.period}</span>
        </div>
        <p className="mt-1 text-xs italic text-navy/45">
          Introductory rates — custom quotes welcome
        </p>

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

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Link
            href={`/advertise?package=${pkg.id}#contact`}
            className="inline-flex flex-1 items-center justify-center rounded-sm bg-teal px-4 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-teal-light"
          >
            Apply to Sponsor
          </Link>
          <Link
            href="#contact"
            className="inline-flex flex-1 items-center justify-center rounded-sm border border-coral/40 px-4 py-2.5 text-sm font-semibold text-coral transition-colors hover:bg-coral hover:text-cream"
          >
            Get Pricing
          </Link>
        </div>
      </div>
    </article>
  );
}

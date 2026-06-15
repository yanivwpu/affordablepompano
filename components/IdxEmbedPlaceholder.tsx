import { MLS_PLACEHOLDER } from "@/lib/images";

export default function IdxEmbedPlaceholder() {
  return (
    <div
      id="idx-search"
      className="scroll-mt-24 rounded-sm border-2 border-dashed border-teal/35 bg-gradient-to-b from-sand/80 to-cream p-6 sm:p-10"
    >
      <div className="text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-teal">
          Live Property Search
        </p>
        <h2 className="font-display mt-2 text-2xl font-medium text-navy sm:text-3xl">
          Browse Pompano Beach Listings
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-navy/65 sm:text-base">
          {MLS_PLACEHOLDER}. This area is ready for your IDX or BoldTrail MLS
          embed widget.
        </p>
      </div>

      <div
        className="mt-8 flex min-h-[420px] flex-col items-center justify-center rounded-sm border border-sand-dark/50 bg-cream/90 px-6 py-12"
        aria-label="IDX or BoldTrail embed placeholder"
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-sm bg-teal/10 px-3 py-1.5 text-xs font-semibold text-teal">
            IDX Widget
          </span>
          <span className="rounded-sm bg-coral/10 px-3 py-1.5 text-xs font-semibold text-coral">
            BoldTrail Ready
          </span>
        </div>
        <p className="mt-6 max-w-md text-center text-sm text-navy/45">
          Paste your MLS search embed code here. Property filters, map view, and
          listing cards will display in this zone.
        </p>
        <div className="mt-8 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
          {["Search by Price", "Map View", "Save Favorites"].map((label) => (
            <div
              key={label}
              className="rounded-sm border border-dashed border-sand-dark/60 bg-sand/40 px-4 py-6 text-center text-xs font-medium text-navy/35"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

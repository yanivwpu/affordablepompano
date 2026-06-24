import DirectoryListingCard from "@/components/DirectoryListingCard";
import { getListingsByType } from "@/lib/directory";
import Link from "next/link";

export default function FeaturedExcursionPartnerSlot() {
  const featuredListing = getListingsByType("excursion").find(
    (listing) => listing.plan === "featured",
  );

  return (
    <section
      className="border-b border-sand-dark/40 bg-cream py-12 sm:py-14"
      aria-labelledby="featured-excursion-partner-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {featuredListing ? (
          <div>
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-teal">
              Featured Excursion Partner
            </p>
            <DirectoryListingCard listing={featuredListing} />
          </div>
        ) : (
          <aside
            className="overflow-hidden rounded-sm border border-sand-dark/45 bg-sand/40"
            aria-label="Featured excursion partner placement"
          >
            <div className="flex items-center justify-center border-b border-sand-dark/25 bg-cream/60 px-4 py-2.5">
              <span className="text-[10px] font-medium tracking-[0.18em] text-navy/45">
                Featured Placement Available
              </span>
            </div>

            <div className="bg-gradient-to-b from-cream/90 to-sand/30 px-6 py-10 text-center sm:px-10 sm:py-12">
              <div className="mx-auto flex max-w-lg flex-col items-center gap-4">
                <div className="h-px w-12 bg-sand-dark/40" aria-hidden="true" />
                <h2
                  id="featured-excursion-partner-heading"
                  className="font-display text-2xl font-medium text-navy sm:text-3xl"
                >
                  Featured Excursion Partner
                </h2>
                <p className="text-sm leading-relaxed text-navy/65 sm:text-base">
                  Want your fishing charter, boat tour, rental company, or local
                  attraction featured here?
                </p>
                <Link
                  href="/advertise?package=excursion-listing-featured#contact"
                  className="mt-2 inline-flex items-center justify-center rounded-sm bg-teal px-6 py-3 text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-teal-light"
                >
                  Advertise With Us
                </Link>
                <div className="h-px w-12 bg-sand-dark/40" aria-hidden="true" />
              </div>
            </div>
          </aside>
        )}
      </div>
    </section>
  );
}

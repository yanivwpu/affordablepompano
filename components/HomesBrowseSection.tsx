"use client";

import WhachatListingsEmbed from "@/components/WhachatListingsEmbed";
import { REALTOR_EMAIL } from "@/lib/images";
import type { WhachatListingType } from "@/lib/whachatcrm";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

type BrowseTab = WhachatListingType | "vacation";

const TABS: { id: BrowseTab; label: string }[] = [
  { id: "for_sale", label: "Homes for Sale" },
  { id: "for_rent", label: "Long-term Rentals" },
  { id: "vacation", label: "Vacation Stays" },
];

export default function HomesBrowseSection() {
  const [activeTab, setActiveTab] = useState<BrowseTab>("for_sale");
  const [scrollTarget, setScrollTarget] = useState<BrowseTab | null>(null);
  const listingsRef = useRef<HTMLDivElement>(null);
  const vacationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!scrollTarget) return;

    const element =
      scrollTarget === "vacation" ? vacationRef.current : listingsRef.current;

    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setScrollTarget(null);
  }, [scrollTarget, activeTab]);

  const selectTab = useCallback((tab: BrowseTab) => {
    setActiveTab(tab);
    setScrollTarget(tab);
  }, []);

  const showMlsListings =
    activeTab === "for_sale" || activeTab === "for_rent";

  return (
    <>
      <div className="mb-8 text-center sm:mb-10">
        <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal">
          <span className="text-[8px] text-coral" aria-hidden="true">
            &#9670;
          </span>
          Pompano Beach Real Estate
          <span className="text-[8px] text-coral" aria-hidden="true">
            &#9670;
          </span>
        </p>
        <h2 className="font-display mt-3 text-3xl font-medium text-navy sm:text-4xl">
          Live Homes &amp; Rentals in Pompano Beach
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-navy/70">
          Search current MLS inventory, compare neighborhoods, and connect with
          a local expert when you&apos;re ready to tour.
        </p>
      </div>

      <div
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        role="tablist"
        aria-label="Listing type"
      >
        {TABS.map((tab) => {
          const selected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => selectTab(tab.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                selected
                  ? "bg-teal text-cream shadow-sm"
                  : "border border-sand-dark/60 bg-cream text-navy/75 hover:border-teal/40 hover:text-teal"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {showMlsListings && (
        <div
          ref={listingsRef}
          className="relative left-1/2 mt-8 w-screen max-w-[100vw] -translate-x-1/2 sm:mt-10"
        >
          <div className="mx-auto w-full max-w-[min(1600px,calc(100vw-1rem))] px-2 sm:px-3">
            <WhachatListingsEmbed listingType={activeTab} />
          </div>
        </div>
      )}

      {activeTab === "vacation" && (
        <section
          ref={vacationRef}
          id="vacation-stays"
          className="scroll-mt-28 mt-8 rounded-sm border border-sand-dark/60 bg-cream p-6 sm:mt-10 sm:p-8"
        >
          <h3 className="font-display text-xl font-medium text-navy sm:text-2xl">
            Short-term &amp; Vacation Rentals
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-navy/70 sm:text-base">
            Beach-week getaways and snowbird stays are booked outside our MLS
            search. Contact us for hand-picked vacation rental recommendations
            across Pompano Beach and the South Florida coast.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-sm bg-teal px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-teal-light"
            >
              Ask About Vacation Stays
            </Link>
            <a
              href={`mailto:${REALTOR_EMAIL}?subject=${encodeURIComponent("Vacation rental inquiry — Pompano Beach")}`}
              className="inline-flex items-center justify-center rounded-sm border border-coral/30 px-6 py-3 text-sm font-semibold text-coral transition-colors hover:bg-coral hover:text-cream"
            >
              Email Realtor
            </a>
          </div>
        </section>
      )}
    </>
  );
}

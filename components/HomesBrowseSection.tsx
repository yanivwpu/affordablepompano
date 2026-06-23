"use client";

import Stay22VacationEmbed from "@/components/Stay22VacationEmbed";
import WhachatListingsEmbed from "@/components/WhachatListingsEmbed";
import type { WhachatListingType } from "@/lib/whachatcrm";
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
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.location.hash === "#vacation-stays") {
      setActiveTab("vacation");
    }
  }, []);

  useEffect(() => {
    if (!scrollTarget) return;
    if (!contentRef.current) return;

    contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
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
      <div className="mb-4 text-center sm:mb-5">
        <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal">
          <span className="text-[8px] text-coral" aria-hidden="true">
            &#9670;
          </span>
          Pompano Beach Real Estate
          <span className="text-[8px] text-coral" aria-hidden="true">
            &#9670;
          </span>
        </p>
        <h2 className="font-display mt-2 text-2xl font-medium text-navy sm:text-3xl">
          Live Homes &amp; Rentals in Pompano Beach
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-navy/70 sm:text-base">
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

      <div
        ref={contentRef}
        id="vacation-stays"
        className="scroll-mt-28 relative left-1/2 mt-5 w-screen max-w-[100vw] -translate-x-1/2"
      >
        <div className="mx-auto w-full max-w-[min(1600px,calc(100vw-1rem))] px-2 sm:px-3">
          {showMlsListings && (
            <WhachatListingsEmbed listingType={activeTab} />
          )}

          {activeTab === "vacation" && <Stay22VacationEmbed />}
        </div>
      </div>
    </>
  );
}

"use client";

import ServiceCategoryCard from "@/components/ServiceCategoryCard";
import WhachatListingsEmbed from "@/components/WhachatListingsEmbed";
import { REALTOR_EMAIL } from "@/lib/images";
import type { WhachatListingType } from "@/lib/whachatcrm";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

type HomeCategory = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: readonly string[];
};

type HomesBrowseSectionProps = {
  categories: readonly HomeCategory[];
};

export default function HomesBrowseSection({
  categories,
}: HomesBrowseSectionProps) {
  const [activeListing, setActiveListing] =
    useState<WhachatListingType | null>(null);
  const [scrollTarget, setScrollTarget] = useState<
    "listings" | "vacation" | null
  >(null);
  const embedRef = useRef<HTMLElement>(null);
  const vacationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!scrollTarget) return;

    const element =
      scrollTarget === "listings" ? embedRef.current : vacationRef.current;

    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setScrollTarget(null);
  }, [scrollTarget, activeListing]);

  const showListings = useCallback((listingType: WhachatListingType) => {
    setActiveListing(listingType);
    setScrollTarget("listings");
  }, []);

  const showVacationFlow = useCallback(() => {
    setScrollTarget("vacation");
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        {categories.map((category) => (
          <ServiceCategoryCard
            key={category.id}
            {...category}
            onSearchListings={
              category.id === "buy"
                ? () => showListings("for_sale")
                : category.id === "long-term"
                  ? () => showListings("for_rent")
                  : category.id === "vacation"
                    ? showVacationFlow
                    : undefined
            }
            searchListingsLabel={
              category.id === "vacation" ? "Browse Vacation Stays" : undefined
            }
          />
        ))}
      </div>

      {activeListing && (
        <div className="relative left-1/2 mt-12 w-screen max-w-[100vw] -translate-x-1/2 sm:mt-14">
          <div className="mx-auto w-full max-w-[min(1600px,calc(100vw-1rem))] px-2 sm:px-3">
            <WhachatListingsEmbed ref={embedRef} listingType={activeListing} />
          </div>
        </div>
      )}

      <section
        ref={vacationRef}
        id="vacation-stays"
        className={`scroll-mt-28 rounded-sm border border-sand-dark/60 bg-cream p-6 sm:p-8 ${
          activeListing ? "mt-10 sm:mt-12" : "mt-12 sm:mt-14"
        }`}
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-teal">
          Vacation Stays
        </p>
        <h3 className="font-display mt-2 text-2xl font-medium text-navy sm:text-3xl">
          Short-term &amp; Vacation Rentals
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-navy/70 sm:text-base">
          Beach-week getaways and snowbird stays are booked separately from MLS
          listings. We&apos;re connecting affiliate options through Stay22 and
          partner platforms — contact us for hand-picked recommendations in the
          meantime.
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
    </>
  );
}

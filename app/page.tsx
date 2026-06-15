import ContentCard from "@/components/ContentCard";
import EditorialCard from "@/components/EditorialCard";
import Hero from "@/components/Hero";
import HomesSection from "@/components/HomesSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import SectionHeader from "@/components/SectionHeader";
import {
  excursions,
  featuredGuides,
  foodSpots,
} from "@/lib/content";
import { SITE_TITLE } from "@/lib/seo";
import { siteTagline } from "@/lib/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE },
  description:
    "Your sunny local guide to Pompano Beach, Florida — affordable homes, great restaurants, things to do, and honest tips for locals and visitors.",
};

export default function Home() {
  return (
    <>
      <Hero />

      <section className="border-b border-sand-dark/40 bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="coastal-rule mx-auto mb-6 max-w-xs text-foreground/25">
              <span aria-hidden="true">&#9670;</span>
            </div>
            <p className="font-display text-2xl font-medium leading-relaxed text-navy sm:text-3xl">
              Great value in paradise
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy/70 sm:text-lg">
              {siteTagline}. Affordable Pompano is your sunny, trustworthy
              local magazine — honest tips on where to live, eat, and explore
              along Florida&apos;s Atlantic coast.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Featured Guides"
            title="Helpful Guides for Every Visit"
            description="Practical guides from people who live here — save money, skip the tourist traps, and enjoy Pompano like a local."
            linkHref="/guides"
            linkLabel="All Guides"
          />
          <div className="masonry-grid">
            {featuredGuides.slice(0, 4).map((guide) => (
              <ContentCard key={guide.title} {...guide} href="/guides" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Food & Eats"
            title="Great Local Food, Fair Prices"
            description="Pier-side seafood, sunny cafés, and casual taco spots — the places locals love, at prices that make sense."
            linkHref="/food"
            linkLabel="All Restaurants"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {foodSpots.slice(0, 4).map((spot) => {
              const { actionLabel: _a, actionHref: _b, ...preview } = spot;
              return (
                <EditorialCard key={spot.title} {...preview} href="/food" />
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Excursions"
            title="Sunny Adventures Await"
            description="Snorkeling, fishing, kayaking, and more — bright-day fun on the water for every budget."
            linkHref="/excursions"
            linkLabel="All Excursions"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {excursions.slice(0, 4).map((excursion) => {
              const { actionLabel: _a, actionHref: _b, ...preview } = excursion;
              return (
                <EditorialCard
                  key={excursion.title}
                  {...preview}
                  href="/excursions"
                />
              );
            })}
          </div>
        </div>
      </section>

      <HomesSection />
      <NewsletterSignup />
    </>
  );
}

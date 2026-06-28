import ContentCard from "@/components/ContentCard";
import DirectoryListingCard from "@/components/DirectoryListingCard";
import EditorialCard from "@/components/EditorialCard";
import Hero from "@/components/Hero";
import HomesSection from "@/components/HomesSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import SectionHeader from "@/components/SectionHeader";
import {
  excursions,
  foodSpots,
} from "@/lib/content";
import {
  getFeaturedListings,
} from "@/lib/directory";
import { featuredGuides } from "@/lib/guides";
import { metadataForPage } from "@/lib/seo";
import { siteTagline } from "@/lib/navigation";
import Link from "next/link";

export const metadata = metadataForPage("home");

export default function Home() {
  const featuredRestaurants = getFeaturedListings("restaurant", 3);
  const featuredExcursions = getFeaturedListings("excursion", 3);
  const featuredBusinesses = getFeaturedListings("business", 3);
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
          <div className="guide-cards-grid">
            {featuredGuides.slice(0, 6).map((guide) => (
              <ContentCard
                key={guide.slug}
                {...guide}
                comingSoon={false}
              />
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
            linkLabel="Food Hub"
          />
          {featuredRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featuredRestaurants.map((listing) => (
                <DirectoryListingCard
                  key={listing.id}
                  listing={listing}
                  featuredLayout="vertical"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {foodSpots.slice(0, 3).map((spot) => {
                const { whyLocalsLove: _why, bestDishes: _dishes, ...preview } = spot;
                return (
                  <EditorialCard key={spot.title} {...preview} href="/food" />
                );
              })}
            </div>
          )}
          <p className="mt-8 text-center">
            <Link
              href="/guides/best-seafood-restaurants-pompano-beach"
              className="text-sm font-semibold text-coral transition-colors hover:text-coral-light"
            >
              Read our seafood guide &rarr;
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Excursions"
            title="Sunny Adventures Await"
            description="Snorkeling, fishing, kayaking, and more — bright-day fun on the water for every budget."
            linkHref="/excursions"
            linkLabel="Excursions Hub"
          />
          {featuredExcursions.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featuredExcursions.map((listing) => (
                <DirectoryListingCard
                  key={listing.id}
                  listing={listing}
                  featuredLayout="vertical"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {excursions.slice(0, 3).map((excursion) => (
                <EditorialCard
                  key={excursion.title}
                  {...excursion}
                  href="/excursions"
                />
              ))}
            </div>
          )}
          <p className="mt-8 text-center">
            <Link
              href="/guides/best-things-to-do-pompano-beach"
              className="text-sm font-semibold text-coral transition-colors hover:text-coral-light"
            >
              See our things-to-do guide &rarr;
            </Link>
          </p>
        </div>
      </section>

      {featuredBusinesses.length > 0 && (
        <section className="border-t border-sand-dark/40 bg-sand py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Local Businesses"
              title="Trusted Pompano Pros"
              description="Real estate, title, insurance, and home services for residents and newcomers."
              linkHref="/businesses"
              linkLabel="Business Directory"
            />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featuredBusinesses.map((listing) => (
                <DirectoryListingCard
                  key={listing.id}
                  listing={listing}
                  featuredLayout="vertical"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <HomesSection />
      <NewsletterSignup />
    </>
  );
}

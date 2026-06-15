import AdSensePlaceholder from "@/components/AdSensePlaceholder";
import AffiliateDisclaimer from "@/components/AffiliateDisclaimer";
import ContentNotice from "@/components/ContentNotice";
import EditorialCard from "@/components/EditorialCard";
import ImagePageHero from "@/components/ImagePageHero";
import SectionIntro from "@/components/SectionIntro";
import { foodCategories, foodSpots } from "@/lib/content";
import { images } from "@/lib/images";
import { pageTitle } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pageTitle("Best Restaurants & Cheap Eats in Pompano Beach"),
  description:
    "Waterfront seafood, local favorites, and affordable eats in Pompano Beach, Florida. Honest restaurant picks with fair prices near the pier and beach.",
};

export default function FoodPage() {
  return (
    <>
      <ImagePageHero
        eyebrow="Food & Eats"
        title="Great Local Food, Fair Prices"
        description="Sunny waterfront seafood, neighborhood grills, and cheap beach bites — the flavors of Pompano Beach."
        image={images.pierDining}
        imageAlt={images.pierDiningAlt}
        primaryCta={{ label: "Waterfront Picks", href: "#waterfront" }}
        secondaryCta={{ label: "Cheap Eats", href: "#cheap" }}
      />

      <ContentNotice />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AdSensePlaceholder size="leaderboard" className="mb-12" />

          {foodCategories.map((cat, index) => {
            const spots = foodSpots.filter((s) => s.group === cat.id);
            if (spots.length === 0) return null;

            return (
              <div key={cat.id}>
                <div
                  id={cat.id}
                  className={`scroll-mt-28 ${index > 0 ? "mt-16" : ""}`}
                >
                  <SectionIntro title={cat.title} description={cat.description} />
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {spots.map((spot) => (
                      <EditorialCard
                        key={spot.title}
                        {...spot}
                        comingSoon={false}
                        href={`/food#${cat.id}`}
                      />
                    ))}
                  </div>
                </div>

                {index === 0 && (
                  <AdSensePlaceholder
                    label="Sponsored"
                    size="rectangle"
                    className="mt-12"
                  />
                )}
              </div>
            );
          })}

          <div className="mt-16">
            <AffiliateDisclaimer />
          </div>
        </div>
      </section>
    </>
  );
}

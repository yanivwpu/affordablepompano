import AffiliateDisclaimer from "@/components/AffiliateDisclaimer";
import CategoryPills from "@/components/CategoryPills";
import ContentNotice from "@/components/ContentNotice";
import FeaturedRestaurantCard from "@/components/FeaturedRestaurantCard";
import FoodSpotCard from "@/components/FoodSpotCard";
import ImagePageHero from "@/components/ImagePageHero";
import SectionIntro from "@/components/SectionIntro";
import { foodCategories, foodSpots } from "@/lib/content";
import { getListingsByType } from "@/lib/directory";
import { foodImages } from "@/lib/foodImages";
import { metadataForPage } from "@/lib/seo";

export const metadata = metadataForPage("food");

const featuredRestaurants = getListingsByType("restaurant").filter(
  (listing) => listing.plan === "featured",
);
const categoriesWithSpots = foodCategories.filter((cat) =>
  foodSpots.some((s) => s.group === cat.id),
);

export default function FoodPage() {
  return (
    <>
      <ImagePageHero
        eyebrow="Food & Eats"
        title="Where to Eat in Pompano Beach"
        description="Honest local picks for seafood, waterfront sunsets, budget tacos, and weekend brunch — with must-try dishes, local tips, and booking links."
        image={foodImages.foodHero.src}
        imageAlt={foodImages.foodHero.alt}
        primaryCta={{ label: "Seafood Picks", href: "#seafood" }}
        secondaryCta={{ label: "Cheap Eats", href: "#cheap-eats" }}
      />

      <ContentNotice />

      <section className="border-b border-sand-dark/40 bg-cream py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            Browse by Category
          </p>
          <CategoryPills categories={categoriesWithSpots} />
        </div>
      </section>

      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {featuredRestaurants.length > 0 && (
            <div id="featured-restaurants" className="scroll-mt-28">
              <p className="mb-6 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal">
                <span className="text-[8px] text-coral" aria-hidden="true">
                  &#9670;
                </span>
                Featured Restaurants
                <span className="text-[8px] text-coral" aria-hidden="true">
                  &#9670;
                </span>
              </p>
              <div className="mx-auto max-w-5xl space-y-6">
                {featuredRestaurants.map((listing) => (
                  <FeaturedRestaurantCard key={listing.id} listing={listing} />
                ))}
              </div>
            </div>
          )}

          {categoriesWithSpots.map((cat, index) => {
            const spots = foodSpots.filter((s) => s.group === cat.id);
            if (spots.length === 0) return null;

            return (
              <div
                key={cat.id}
                id={cat.id}
                className={`scroll-mt-28 ${
                  index > 0 || featuredRestaurants.length > 0
                    ? "mt-14 sm:mt-16"
                    : ""
                }`}
              >
                <SectionIntro title={cat.title} description={cat.description} />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {spots.map((spot) => (
                    <FoodSpotCard key={spot.title} {...spot} />
                  ))}
                </div>
              </div>
            );
          })}

          <div className="mt-14 sm:mt-16">
            <AffiliateDisclaimer />
          </div>
        </div>
      </section>
    </>
  );
}

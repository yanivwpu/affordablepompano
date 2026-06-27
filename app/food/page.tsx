import AffiliateDisclaimer from "@/components/AffiliateDisclaimer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CategoryPills from "@/components/CategoryPills";
import ContentNotice from "@/components/ContentNotice";
import FoodSpotCard from "@/components/FoodSpotCard";
import ImagePageHero from "@/components/ImagePageHero";
import PillarHubSection from "@/components/PillarHubSection";
import PillarIntro, { PillarMoreGuidesTeaser } from "@/components/PillarIntro";
import SectionIntro from "@/components/SectionIntro";
import { foodCategories, foodSpots } from "@/lib/content";
import { foodPillar } from "@/lib/guides/pillarContent";
import { foodPillarEditorial } from "@/lib/guides/pillarEditorial";
import { foodImages } from "@/lib/foodImages";
import { metadataForPage } from "@/lib/seo";

export const metadata = metadataForPage("food");

const categoriesWithSpots = foodCategories.filter((cat) =>
  foodSpots.some((s) => s.group === cat.id),
);

export default function FoodPage() {
  return (
    <>
      <div className="border-b border-sand-dark/40 bg-cream py-4">
        <Breadcrumbs
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          items={[
            { label: "Home", href: "/" },
            { label: "Food & Eats" },
          ]}
        />
      </div>

      <ImagePageHero
        eyebrow="Food & Eats"
        title="Where to Eat in Pompano Beach"
        description="Honest local picks for seafood, waterfront sunsets, budget tacos, and weekend brunch — with must-try dishes, local tips, and booking links."
        image={foodImages.foodHero.src}
        imageAlt={foodImages.foodHero.alt}
        primaryCta={{ label: "Local Food Guides", href: "#food-guides" }}
        secondaryCta={{ label: "Editorial Picks", href: "#seafood" }}
      />

      <ContentNotice />

      <PillarIntro editorial={foodPillarEditorial} />

      <div id="food-guides">
        <PillarHubSection pillar={foodPillar} />
      </div>

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
          {categoriesWithSpots.map((cat, index) => {
            const spots = foodSpots.filter((s) => s.group === cat.id);
            if (spots.length === 0) return null;

            return (
              <div
                key={cat.id}
                id={cat.id}
                className={`scroll-mt-28 ${index > 0 ? "mt-14 sm:mt-16" : ""}`}
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

      <PillarMoreGuidesTeaser labels={foodPillarEditorial.futureGuideLabels} />
    </>
  );
}

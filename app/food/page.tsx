import AffiliateDisclaimer from "@/components/AffiliateDisclaimer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContentNotice from "@/components/ContentNotice";
import FoodSpotCard from "@/components/FoodSpotCard";
import HubCategoryGrid from "@/components/hub/HubCategoryGrid";
import HubDirectorySection from "@/components/hub/HubDirectorySection";
import HubFeaturedSection from "@/components/hub/HubFeaturedSection";
import HubGuidesSection from "@/components/hub/HubGuidesSection";
import ImagePageHero from "@/components/ImagePageHero";
import NewsletterSignup from "@/components/NewsletterSignup";
import PillarIntro, { PillarMoreGuidesTeaser } from "@/components/PillarIntro";
import SectionIntro from "@/components/SectionIntro";
import { hubSectionSpacing } from "@/lib/hubLayout";
import { foodCategories, foodSpots } from "@/lib/content";
import {
  getCategoriesForType,
  getHubListings,
} from "@/lib/directory";
import { guides } from "@/lib/guides";
import { foodPillar, pillarGuideCards } from "@/lib/guides/pillarContent";
import { foodPillarEditorial } from "@/lib/guides/pillarEditorial";
import { dedupeGuideCardImages } from "@/lib/guides/uniqueGuideImages";
import { foodImages } from "@/lib/foodImages";
import { metadataForPage } from "@/lib/seo";

export const metadata = metadataForPage("food");

const categoriesWithSpots = foodCategories.filter((cat) =>
  foodSpots.some((s) => s.group === cat.id),
);

const foodCategoryNav = getCategoriesForType("restaurant").filter((cat) =>
  foodPillar.directoryCategoryIds.includes(cat.id),
);

const restaurantListings = getHubListings(
  foodPillar.directoryType,
  foodPillar.directoryCategoryIds,
);

const foodGuideCards = dedupeGuideCardImages(
  pillarGuideCards(guides, foodPillar.guides),
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
        primaryCta={{ label: "Browse Restaurants", href: "#featured-restaurants" }}
        secondaryCta={{ label: "Browse by Category", href: "#browse-categories" }}
      />

      <PillarIntro editorial={foodPillarEditorial} mode="teaser" />

      <ContentNotice />

      <HubFeaturedSection
        listings={restaurantListings}
        id="featured-restaurants"
        eyebrow="Premium Picks"
        title="Featured Restaurants"
        description="Partner restaurants we recommend — each with a dedicated page, hours, maps, and direct contact links."
        advertisePackageId={foodPillar.advertisePackageId}
        advertiseCtaLabel={foodPillar.advertiseCtaLabel}
        showActions
      />

      <HubCategoryGrid
        type="restaurant"
        categories={foodCategoryNav}
        eyebrow="Find Your Craving"
        title="Browse by Category"
        description="Jump straight to the style of meal you want — seafood decks, morning diners, happy hour patios, and more."
      />

      <HubDirectorySection
        listings={restaurantListings}
        id="restaurant-directory"
        eyebrow="Full Directory"
        title="Restaurant Directory"
        description="Every partner listing in our Pompano Beach restaurant directory — browse profiles, menus, and contact details."
        advertisePackageId={foodPillar.advertisePackageId}
        showActions
      />

      <HubGuidesSection
        guides={foodGuideCards}
        id="food-guides"
        eyebrow="Editorial"
        title={foodPillar.guidesTitle}
        description={foodPillar.guidesDescription}
      />

      <PillarIntro
        editorial={foodPillarEditorial}
        mode="article"
        id="dining-guide"
      />

      <section
        id="editorial-picks"
        className={`scroll-mt-28 border-b border-sand-dark/30 bg-background ${hubSectionSpacing}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            title="Editor's Restaurant Picks"
            description="Handpicked spots across Pompano Beach — grouped by craving, with dishes locals order and tips for timing your visit."
          />

          {categoriesWithSpots.map((cat, index) => {
            const spots = foodSpots.filter((s) => s.group === cat.id);
            if (spots.length === 0) return null;

            return (
              <div
                key={cat.id}
                id={cat.id}
                className={`scroll-mt-28 ${index > 0 ? "mt-16 sm:mt-20" : ""}`}
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

          <div className="mt-16 sm:mt-20">
            <AffiliateDisclaimer />
          </div>
        </div>
      </section>

      <NewsletterSignup />

      <PillarMoreGuidesTeaser labels={foodPillarEditorial.futureGuideLabels} />
    </>
  );
}

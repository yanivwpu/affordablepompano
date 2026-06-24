import AdSensePlaceholder from "@/components/AdSensePlaceholder";
import AffiliateDisclaimer from "@/components/AffiliateDisclaimer";
import CategoryPills from "@/components/CategoryPills";
import ContentNotice from "@/components/ContentNotice";
import EditorialCard from "@/components/EditorialCard";
import FeaturedExperiencesSection from "@/components/FeaturedExperiencesSection";
import ImagePageHero from "@/components/ImagePageHero";
import SectionIntro from "@/components/SectionIntro";
import { excursionCategories, excursions } from "@/lib/content";
import { images } from "@/lib/images";
import { metadataForPage } from "@/lib/seo";

export const metadata = metadataForPage("excursions");

const featuredExcursion = excursions.find((e) => e.featured);
const categoriesWithItems = excursionCategories.filter((cat) =>
  excursions.some((e) => e.group === cat.id),
);

export default function ExcursionsPage() {
  return (
    <>
      <ImagePageHero
        eyebrow="Excursions"
        title="Things To Do in Pompano Beach"
        description="From pier fishing and parasailing to Hillsboro Inlet boat tours and reef snorkeling — the best Pompano Beach activities with real prices and local tips."
        image={images.goldenBeach}
        imageAlt={images.goldenBeachAlt}
        primaryCta={{ label: "Water Adventures", href: "#water" }}
        secondaryCta={{ label: "Fishing Charters", href: "#fishing" }}
      />

      <ContentNotice />

      <FeaturedExperiencesSection />

      <section className="border-b border-sand-dark/40 bg-cream py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            Browse by Activity
          </p>
          <CategoryPills categories={categoriesWithItems} />
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AdSensePlaceholder size="leaderboard" label="Advertisement" />

          {featuredExcursion && (
            <div className="mt-12">
              <p className="mb-6 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal">
                <span className="text-[8px] text-coral" aria-hidden="true">
                  &#9670;
                </span>
                Top Experience
                <span className="text-[8px] text-coral" aria-hidden="true">
                  &#9670;
                </span>
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <EditorialCard
                  {...featuredExcursion}
                  featured
                  comingSoon={false}
                  href={`/excursions#${featuredExcursion.group}`}
                />
              </div>
              <AdSensePlaceholder
                label="Sponsored"
                size="rectangle"
                className="mt-12 sm:mt-16"
              />
            </div>
          )}

          {categoriesWithItems.map((cat, index) => {
            const items = excursions.filter(
              (e) => e.group === cat.id && !e.featured,
            );
            if (items.length === 0) return null;

            return (
              <div key={cat.id}>
                <div
                  id={cat.id}
                  className={`scroll-mt-28 ${index > 0 || featuredExcursion ? "mt-16 sm:mt-20" : "mt-12"}`}
                >
                  <SectionIntro
                    title={cat.title}
                    description={cat.description}
                  />
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((excursion) => (
                      <EditorialCard
                        key={excursion.title}
                        {...excursion}
                        comingSoon={false}
                        href={`/excursions#${cat.id}`}
                      />
                    ))}
                  </div>
                </div>

                {index === 0 && (
                  <AdSensePlaceholder
                    label="Advertisement"
                    size="banner"
                    className="mt-12 sm:mt-16"
                  />
                )}

                {index === 2 && (
                  <AdSensePlaceholder
                    label="Sponsored"
                    size="rectangle"
                    className="mt-12 sm:mt-16"
                  />
                )}
              </div>
            );
          })}

          <div className="mt-16 sm:mt-20">
            <AffiliateDisclaimer />
          </div>
        </div>
      </section>
    </>
  );
}

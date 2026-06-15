import AdSensePlaceholder from "@/components/AdSensePlaceholder";
import AffiliateDisclaimer from "@/components/AffiliateDisclaimer";
import ContentNotice from "@/components/ContentNotice";
import EditorialCard from "@/components/EditorialCard";
import ImagePageHero from "@/components/ImagePageHero";
import SectionIntro from "@/components/SectionIntro";
import { excursionCategories, excursions } from "@/lib/content";
import { images } from "@/lib/images";
import { pageTitle } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pageTitle("Things To Do in Pompano Beach"),
  description:
    "Snorkeling, fishing charters, kayaking, and sunny adventures in Pompano Beach, Florida. Book experiences and explore the Atlantic coast.",
};

export default function ExcursionsPage() {
  return (
    <>
      <ImagePageHero
        eyebrow="Excursions"
        title="Things To Do in Pompano Beach"
        description="Snorkeling, pier fishing, kayaking, and golden-hour cruises — bright-day fun on the Florida coast."
        image={images.goldenBeach}
        imageAlt={images.goldenBeachAlt}
        primaryCta={{ label: "On the Water", href: "#water" }}
        secondaryCta={{ label: "Fishing & Boating", href: "#fishing" }}
      />

      <ContentNotice />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AdSensePlaceholder size="leaderboard" className="mb-12" />

          {excursionCategories.map((cat, index) => {
            const items = excursions.filter((e) => e.group === cat.id);
            if (items.length === 0) return null;

            return (
              <div key={cat.id}>
                <div
                  id={cat.id}
                  className={`scroll-mt-28 ${index > 0 ? "mt-16" : ""}`}
                >
                  <SectionIntro title={cat.title} description={cat.description} />
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

                {index === 1 && (
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

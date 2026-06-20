import AdSensePlaceholder from "@/components/AdSensePlaceholder";
import AffiliateDisclaimer from "@/components/AffiliateDisclaimer";
import ContentCard from "@/components/ContentCard";
import ContentNotice from "@/components/ContentNotice";
import ImagePageHero from "@/components/ImagePageHero";
import SectionIntro from "@/components/SectionIntro";
import { featuredGuides, guideCategories } from "@/lib/content";
import { images } from "@/lib/images";
import { metadataForPage } from "@/lib/seo";

export const metadata = metadataForPage("guides");

export default function GuidesPage() {
  return (
    <>
      <ImagePageHero
        eyebrow="Guides"
        title="Helpful Guides for Every Visit"
        description="Practical guides from people who live here — first trips, neighborhoods, free activities, and everyday Pompano life."
        image={images.pompanoPier}
        imageAlt={images.pompanoPierAlt}
        primaryCta={{ label: "Visiting Guides", href: "#visiting" }}
        secondaryCta={{ label: "Budget Tips", href: "#budget" }}
      />

      <ContentNotice />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AdSensePlaceholder size="leaderboard" label="Advertisement" />

          {guideCategories.map((cat, index) => {
            const guides = featuredGuides.filter((g) => g.group === cat.id);
            if (guides.length === 0) return null;

            return (
              <div key={cat.id}>
                <div
                  id={cat.id}
                  className={`scroll-mt-28 ${index > 0 ? "mt-16 sm:mt-20" : "mt-12"}`}
                >
                  <SectionIntro title={cat.title} description={cat.description} />
                  <div className="masonry-grid">
                    {guides.map((guide) => (
                      <ContentCard key={guide.title} {...guide} />
                    ))}
                  </div>
                </div>

                {index === 0 && (
                  <AdSensePlaceholder
                    label="Sponsored"
                    size="rectangle"
                    className="mt-12 sm:mt-16"
                  />
                )}

                {index === 1 && (
                  <AdSensePlaceholder
                    label="Advertisement"
                    size="banner"
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

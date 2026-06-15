import AdSensePlaceholder from "@/components/AdSensePlaceholder";
import ContentCard from "@/components/ContentCard";
import ContentNotice from "@/components/ContentNotice";
import ImagePageHero from "@/components/ImagePageHero";
import SectionIntro from "@/components/SectionIntro";
import { featuredGuides, guideCategories } from "@/lib/content";
import { images } from "@/lib/images";
import { pageTitle } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pageTitle("Pompano Beach Local Guides & Tips"),
  description:
    "Helpful guides for visiting, living, and exploring Pompano Beach on a budget. Neighborhood tips, free activities, and insider advice.",
};

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
          <AdSensePlaceholder size="leaderboard" className="mb-12" />

          {guideCategories.map((cat, index) => {
            const guides = featuredGuides.filter((g) => g.group === cat.id);
            if (guides.length === 0) return null;

            return (
              <div key={cat.id}>
                <div
                  id={cat.id}
                  className={`scroll-mt-28 ${index > 0 ? "mt-16" : ""}`}
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
                    label="Advertisement"
                    size="rectangle"
                    className="mt-12"
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

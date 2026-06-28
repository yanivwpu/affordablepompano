import AffiliateDisclaimer from "@/components/AffiliateDisclaimer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContentCard from "@/components/ContentCard";
import ImagePageHero from "@/components/ImagePageHero";
import SectionIntro from "@/components/SectionIntro";
import { guideCategories } from "@/lib/content";
import { featuredGuides } from "@/lib/guides";
import { images } from "@/lib/images";
import { metadataForPage } from "@/lib/seo";

export const metadata = metadataForPage("guides");

export default function GuidesPage() {
  return (
    <>
      <div className="border-b border-sand-dark/40 bg-cream py-4">
        <Breadcrumbs
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          items={[
            { label: "Home", href: "/" },
            { label: "Guides" },
          ]}
        />
      </div>

      <ImagePageHero
        eyebrow="Guides"
        title="Helpful Guides for Every Visit"
        description="Practical guides from people who live here — first trips, neighborhoods, free activities, and everyday Pompano life."
        image={images.pompanoPier}
        imageAlt={images.pompanoPierAlt}
        primaryCta={{ label: "Visiting Guides", href: "#visiting" }}
        secondaryCta={{ label: "Budget Tips", href: "#budget" }}
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {guideCategories.map((cat, index) => {
            const guides = featuredGuides.filter((g) => g.group === cat.id);
            if (guides.length === 0) return null;

            return (
              <div key={cat.id}>
                <div
                  id={cat.id}
                  className={`scroll-mt-28 ${index > 0 ? "mt-16 sm:mt-20" : ""}`}
                >
                  <SectionIntro title={cat.title} description={cat.description} />
                  <div className="guide-cards-grid">
                    {guides.map((guide) => (
                      <ContentCard
                        key={guide.slug}
                        {...guide}
                        comingSoon={false}
                      />
                    ))}
                  </div>
                </div>
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

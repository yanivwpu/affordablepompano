import Breadcrumbs from "@/components/Breadcrumbs";
import FeaturedExcursionPartnerSlot from "@/components/FeaturedExcursionPartnerSlot";
import FeaturedExperiencesSection from "@/components/FeaturedExperiencesSection";
import ImagePageHero from "@/components/ImagePageHero";
import PillarHubSection from "@/components/PillarHubSection";
import PillarIntro, { PillarMoreGuidesTeaser } from "@/components/PillarIntro";
import PopularWaysToExplore from "@/components/PopularWaysToExplore";
import { excursionsPillar } from "@/lib/guides/pillarContent";
import { excursionsPillarEditorial } from "@/lib/guides/pillarEditorial";
import { images } from "@/lib/images";
import { metadataForPage } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = metadataForPage("excursions");

export default function ExcursionsPage() {
  return (
    <>
      <div className="border-b border-sand-dark/40 bg-cream py-4">
        <Breadcrumbs
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          items={[
            { label: "Home", href: "/" },
            { label: "Excursions" },
          ]}
        />
      </div>

      <ImagePageHero
        eyebrow="Excursions"
        title="Things To Do in Pompano Beach"
        description="From pier fishing and parasailing to Hillsboro Inlet boat tours and reef snorkeling — the best Pompano Beach activities with real prices and local tips."
        image={images.goldenBeach}
        imageAlt={images.goldenBeachAlt}
        primaryCta={{
          label: "Book Experiences",
          href: "#featured-experiences",
        }}
        secondaryCta={{
          label: "Local Guides",
          href: "#excursion-guides",
        }}
      />

      <PillarIntro editorial={excursionsPillarEditorial} />

      <FeaturedExperiencesSection />

      <FeaturedExcursionPartnerSlot />

      <div id="excursion-guides">
        <PillarHubSection pillar={excursionsPillar} />
      </div>

      <PopularWaysToExplore />

      <PillarMoreGuidesTeaser labels={excursionsPillarEditorial.futureGuideLabels} />

      <section className="relative min-h-[280px] overflow-hidden sm:min-h-[300px]">
        <Image
          src={images.pompanoPier}
          alt={images.pompanoPierAlt}
          fill
          sizes="100vw"
          className="object-cover brightness-110 saturate-[1.06]"
        />
        <div className="absolute inset-0 bg-navy/45" />
        <div className="relative z-10 flex min-h-[280px] flex-col items-center justify-center px-4 text-center sm:min-h-[300px]">
          <p className="font-display max-w-2xl text-2xl font-medium text-cream sm:text-3xl">
            Plan your perfect Pompano Beach day
          </p>
          <p className="mt-3 max-w-lg text-sm text-cream/85 sm:text-base">
            Book tours and activities through our featured experiences, or dig
            deeper with local guides written for visitors and newcomers.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#featured-experiences"
              className="inline-flex items-center justify-center rounded-sm bg-coral px-8 py-3.5 text-sm font-bold tracking-wide text-cream shadow-md transition-colors hover:bg-coral-light"
            >
              Browse Experiences
            </Link>
            <Link
              href="/guides"
              className="inline-flex items-center justify-center rounded-sm border-2 border-cream/70 bg-cream/10 px-8 py-3.5 text-sm font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-cream hover:text-navy"
            >
              Read Local Guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

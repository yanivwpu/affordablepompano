import Breadcrumbs from "@/components/Breadcrumbs";
import FeaturedExperiencesSection from "@/components/FeaturedExperiencesSection";
import HubCategoryGrid from "@/components/hub/HubCategoryGrid";
import HubDirectorySection from "@/components/hub/HubDirectorySection";
import HubFeaturedSection from "@/components/hub/HubFeaturedSection";
import HubGuidesSection from "@/components/hub/HubGuidesSection";
import ImagePageHero from "@/components/ImagePageHero";
import NewsletterSignup from "@/components/NewsletterSignup";
import PillarIntro, { PillarMoreGuidesTeaser } from "@/components/PillarIntro";
import {
  getCategoriesForType,
  getHubListings,
} from "@/lib/directory";
import { guides } from "@/lib/guides";
import { excursionsPillar, pillarGuideCards } from "@/lib/guides/pillarContent";
import { excursionsPillarEditorial } from "@/lib/guides/pillarEditorial";
import { dedupeGuideCardImages } from "@/lib/guides/uniqueGuideImages";
import { images } from "@/lib/images";
import { metadataForPage } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = metadataForPage("excursions");

const excursionCategoryNav = getCategoriesForType("excursion").filter((cat) =>
  excursionsPillar.directoryCategoryIds.includes(cat.id),
);

const excursionListings = getHubListings(
  excursionsPillar.directoryType,
  excursionsPillar.directoryCategoryIds,
);

const excursionGuideCards = dedupeGuideCardImages(
  pillarGuideCards(guides, excursionsPillar.guides),
);

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
          label: "Partner Listings",
          href: "#featured-listings",
        }}
      />

      <PillarIntro editorial={excursionsPillarEditorial} mode="teaser" />

      <FeaturedExperiencesSection />

      <HubFeaturedSection
        listings={excursionListings}
        id="featured-listings"
        eyebrow="Premium Picks"
        title="Featured Excursions"
        description="Partner charters and tour operators with dedicated listing pages, maps, and direct booking links."
        advertisePackageId={excursionsPillar.advertisePackageId}
        advertiseCtaLabel={excursionsPillar.advertiseCtaLabel}
      />

      <HubCategoryGrid
        type="excursion"
        categories={excursionCategoryNav}
        eyebrow="Plan Your Day"
        title="Browse by Activity"
        description="Fishing charters, boat tours, snorkeling, kayaking, and family-friendly outings along the Pompano coast."
      />

      <HubDirectorySection
        listings={excursionListings}
        id="excursion-directory"
        eyebrow="Full Directory"
        title="Excursion Directory"
        description="Every partner excursion in our Pompano Beach directory — compare operators, contact details, and listing pages."
        advertisePackageId={excursionsPillar.advertisePackageId}
      />

      <HubGuidesSection
        guides={excursionGuideCards}
        id="excursion-guides"
        eyebrow="Editorial"
        title={excursionsPillar.guidesTitle}
        description={excursionsPillar.guidesDescription}
      />

      <PillarIntro editorial={excursionsPillarEditorial} mode="article" id="excursions-guide" />

      <NewsletterSignup />

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
              href="#excursion-guides"
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

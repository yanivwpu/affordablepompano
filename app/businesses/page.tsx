import Breadcrumbs from "@/components/Breadcrumbs";
import HubCategoryGrid from "@/components/hub/HubCategoryGrid";
import HubCategoryListingsSection from "@/components/hub/HubCategoryListingsSection";
import HubDirectorySection from "@/components/hub/HubDirectorySection";
import HubFeaturedSection from "@/components/hub/HubFeaturedSection";
import HubGuidesSection from "@/components/hub/HubGuidesSection";
import ImagePageHero from "@/components/ImagePageHero";
import NewsletterSignup from "@/components/NewsletterSignup";
import PillarIntro from "@/components/PillarIntro";
import { hubSectionSpacing } from "@/lib/hubLayout";
import {
  getCategoriesForType,
  getHubListings,
  getListingsByCategory,
} from "@/lib/directory";
import { guides } from "@/lib/guides";
import { businessesPillar, pillarGuideCards } from "@/lib/guides/pillarContent";
import { businessesPillarEditorial } from "@/lib/guides/pillarEditorial";
import { dedupeGuideCardImages } from "@/lib/guides/uniqueGuideImages";
import { images } from "@/lib/images";
import { metadataForPage } from "@/lib/seo";
import Link from "next/link";

export const metadata = metadataForPage("businesses");

const businessCategoryNav = getCategoriesForType("business").filter((cat) =>
  businessesPillar.directoryCategoryIds.includes(cat.id),
);

const businessListings = getHubListings(
  businessesPillar.directoryType,
  businessesPillar.directoryCategoryIds,
);

const businessGuideCards = dedupeGuideCardImages(
  pillarGuideCards(guides, businessesPillar.guides),
);

const populatedBusinessCategoryIds = new Set(
  businessCategoryNav
    .filter((cat) => getListingsByCategory("business", cat.id).length > 0)
    .map((cat) => cat.id),
);

export default function BusinessesPage() {
  return (
    <>
      <div className="border-b border-sand-dark/40 bg-cream py-4">
        <Breadcrumbs
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          items={[
            { label: "Home", href: "/" },
            { label: "Local Businesses" },
          ]}
        />
      </div>

      <ImagePageHero
        eyebrow="Local Businesses"
        title="Who Should You Hire in Pompano Beach?"
        description="Attorneys, insurance agents, contractors, medical practices, and local services — trusted businesses serving Pompano Beach residents and newcomers."
        image={images.palmBeach}
        imageAlt={images.palmBeachAlt}
        primaryCta={{ label: "Partner Listings", href: "#featured-listings" }}
        secondaryCta={{
          label: "Browse Categories",
          href: "#browse-categories",
        }}
      />

      <PillarIntro editorial={businessesPillarEditorial} mode="teaser" />

      <HubFeaturedSection
        listings={businessListings}
        id="featured-listings"
        eyebrow="Premium Picks"
        title="Featured Local Businesses"
        description="Vetted partners with dedicated profile pages, direct contact links, and clear sponsorship labels."
        advertisePackageId={businessesPillar.advertisePackageId}
        advertiseCtaLabel={businessesPillar.advertiseCtaLabel}
      />

      <HubCategoryGrid
        type="business"
        categories={businessCategoryNav}
        eyebrow="Find a Pro"
        title="Browse by Category"
        description="Real estate, mortgage, title, insurance, contractors, and everyday services for Pompano homeowners and relocators."
        populatedCategoryIds={populatedBusinessCategoryIds}
      />

      <HubCategoryListingsSection
        type="business"
        categories={businessCategoryNav}
      />

      <HubDirectorySection
        listings={businessListings}
        id="business-directory"
        eyebrow="Full Directory"
        title="Business Directory"
        description="Every partner listing in our Pompano Beach business directory — browse profiles and contact details by category."
        advertisePackageId={businessesPillar.advertisePackageId}
      />

      <HubGuidesSection
        guides={businessGuideCards}
        id="business-guides"
        eyebrow="Editorial"
        title={businessesPillar.guidesTitle}
        description={businessesPillar.guidesDescription}
      />

      <PillarIntro editorial={businessesPillarEditorial} mode="article" id="businesses-guide" />

      <section className={`border-b border-sand-dark/30 bg-cream ${hubSectionSpacing}`}>
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-2xl font-medium text-navy sm:text-3xl">
            List your Pompano Beach business
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-navy/65">
            Standard listings start at $29/month with a dedicated page and
            directory placement. Upgrade to featured for premium styling and top
            placement.
          </p>
          <Link
            href="/advertise?package=business-listing#contact"
            className="mt-6 inline-flex items-center justify-center rounded-sm bg-coral px-8 py-3.5 text-sm font-bold tracking-wide text-cream shadow-sm transition-colors hover:bg-coral-light"
          >
            Advertise With Us
          </Link>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}

import Breadcrumbs from "@/components/Breadcrumbs";
import CategoryPills from "@/components/CategoryPills";
import ImagePageHero from "@/components/ImagePageHero";
import PillarHubSection from "@/components/PillarHubSection";
import PillarIntro from "@/components/PillarIntro";
import SectionIntro from "@/components/SectionIntro";
import {
  businessCategories,
  getCategoriesForType,
} from "@/lib/directory";
import { businessesPillar } from "@/lib/guides/pillarContent";
import { businessesPillarEditorial } from "@/lib/guides/pillarEditorial";
import { images } from "@/lib/images";
import { metadataForPage } from "@/lib/seo";
import Link from "next/link";

export const metadata = metadataForPage("businesses");

export default function BusinessesPage() {
  const allCategories = getCategoriesForType("business");

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
        title="Pompano Beach Business Directory"
        description="Attorneys, insurance agents, contractors, medical practices, and local services — trusted businesses serving Pompano Beach residents and newcomers."
        image={images.palmBeach}
        imageAlt={images.palmBeachAlt}
        primaryCta={{ label: "Partner Listings", href: "#partner-listings" }}
        secondaryCta={{
          label: "Browse Categories",
          href: "#categories",
        }}
      />

      <PillarIntro editorial={businessesPillarEditorial} />

      <div id="partner-listings">
        <PillarHubSection pillar={businessesPillar} maxCategories={8} />
      </div>

      <section
        id="categories"
        className="scroll-mt-28 border-b border-sand-dark/40 bg-cream py-8"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            All Categories
          </p>
          <CategoryPills
            categories={businessCategories.map((cat) => ({
              id: cat.id,
              title: cat.title,
            }))}
          />
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            title="Directory Categories"
            description="Every category supports dedicated partner listings as local businesses join the directory."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allCategories.map((cat) => (
              <div
                key={cat.id}
                id={cat.id}
                className="scroll-mt-28 rounded-sm border border-sand-dark/50 bg-cream p-6"
              >
                <h2 className="font-display text-lg font-medium text-navy">
                  {cat.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-navy/65">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-sm border border-teal/20 bg-teal/5 px-6 py-10 text-center sm:px-10">
            <h2 className="font-display text-2xl font-medium text-navy sm:text-3xl">
              List your Pompano Beach business
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-navy/65 sm:text-base">
              Standard listings start at $29/month with a dedicated page and
              directory placement. Upgrade to featured for top placement and
              extra visibility.
            </p>
            <Link
              href="/advertise?package=business-listing-standard#contact"
              className="mt-6 inline-flex items-center justify-center rounded-sm bg-coral px-8 py-3.5 text-sm font-bold tracking-wide text-cream shadow-sm transition-colors hover:bg-coral-light"
            >
              Advertise With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

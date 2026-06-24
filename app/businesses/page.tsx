import CategoryPills from "@/components/CategoryPills";
import DirectoryListingGrid from "@/components/DirectoryListingGrid";
import ImagePageHero from "@/components/ImagePageHero";
import SectionIntro from "@/components/SectionIntro";
import { businessCategories, getListingsByType } from "@/lib/directory";
import { images } from "@/lib/images";
import { metadataForPage } from "@/lib/seo";
import Link from "next/link";

export const metadata = metadataForPage("businesses");

export default function BusinessesPage() {
  const allListings = getListingsByType("business");

  return (
    <>
      <ImagePageHero
        eyebrow="Local Businesses"
        title="Pompano Beach Business Directory"
        description="Attorneys, insurance agents, contractors, medical practices, and local services — trusted businesses serving Pompano Beach residents and newcomers."
        image={images.palmBeach}
        imageAlt={images.palmBeachAlt}
        primaryCta={{ label: "Browse Categories", href: "#categories" }}
        secondaryCta={{
          label: "List Your Business",
          href: "/advertise?package=business-listing-standard#contact",
        }}
      />

      <section
        id="categories"
        className="scroll-mt-28 border-b border-sand-dark/40 bg-cream py-8"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            Browse by Category
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
            title="Partner Listings"
            description="Paid directory listings with dedicated business pages. Featured partners appear first with larger cards and a featured badge."
          />
          <DirectoryListingGrid
            listings={allListings}
            advertisePackageId="business-listing-standard"
          />

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {businessCategories.map((cat) => (
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

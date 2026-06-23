import AdSensePlaceholder from "@/components/AdSensePlaceholder";
import HomesBrowseSection from "@/components/HomesBrowseSection";
import HomesLeadForm from "@/components/HomesLeadForm";
import ImagePageHero from "@/components/ImagePageHero";
import { images, REALTOR_EMAIL } from "@/lib/images";
import { metadataForPage } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = metadataForPage("homes");

export default function HomesPage() {
  return (
    <>
      <ImagePageHero
        eyebrow="Homes"
        title="Pompano Beach Homes & Rentals"
        description="Search live MLS listings, schedule showings, and get property alerts from a local realtor who knows every neighborhood."
        image={images.pompanoPier}
        imageAlt={images.pompanoPierAlt}
        primaryCta={{ label: "Search Listings", href: "#listings" }}
        secondaryCta={{ label: "Get Property Alerts", href: "#alerts" }}
      />

      <div className="border-b border-sand-dark/40 bg-navy py-3.5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2.5 px-4 sm:flex-row sm:gap-4 sm:px-6 lg:px-8">
          <Link
            href="#showing"
            className="inline-flex w-full items-center justify-center rounded-sm bg-coral px-6 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-coral-light sm:w-auto"
          >
            Schedule a Showing
          </Link>
          <Link
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-sm border border-cream/30 px-6 py-2.5 text-sm font-semibold text-cream transition-colors hover:border-coral hover:text-coral-light sm:w-auto"
          >
            Contact Realtor
          </Link>
          <a
            href="tel:+19545550100"
            className="text-sm font-medium text-cream/70 transition-colors hover:text-cream"
          >
            (954) 555-0100
          </a>
        </div>
      </div>

      <section
        id="listings"
        className="scroll-mt-24 bg-background py-10 sm:py-14"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HomesBrowseSection />
        </div>
      </section>

      <section className="border-y border-sand-dark/40 bg-sand py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                value: "$0",
                label: "Buyer Consultation",
                note: "Neighborhood guidance and honest budget advice",
              },
              {
                value: "24h",
                label: "Response Time",
                note: "Quick replies from a local Pompano expert",
              },
              {
                value: "100%",
                label: "Local Focus",
                note: "Pompano Beach inventory — not generic national feeds",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-sm border border-sand-dark/60 bg-cream p-5 text-center sm:p-6"
              >
                <p className="font-display text-3xl font-medium text-teal sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-navy">
                  {stat.label}
                </p>
                <p className="mt-2 text-xs text-navy/60">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-warm-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal">
              <span className="text-[8px] text-coral" aria-hidden="true">
                &#9670;
              </span>
              Work With a Local Expert
              <span className="text-[8px] text-coral" aria-hidden="true">
                &#9670;
              </span>
            </p>
            <h2 className="font-display mt-3 text-2xl font-medium text-navy sm:text-3xl">
              Get Alerts, Schedule a Tour, or Ask a Question
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div
              id="alerts"
              className="scroll-mt-28 rounded-sm border border-sand-dark/60 bg-cream p-6 sm:p-8"
            >
              <HomesLeadForm type="alerts" />
            </div>
            <div
              id="showing"
              className="scroll-mt-28 rounded-sm border border-teal/30 bg-cream p-6 ring-2 ring-teal/10 sm:p-8"
            >
              <HomesLeadForm type="showing" />
            </div>
            <div
              id="contact"
              className="scroll-mt-28 rounded-sm border border-sand-dark/60 bg-cream p-6 sm:p-8"
            >
              <HomesLeadForm type="contact" />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AdSensePlaceholder
          size="banner"
          label="Sponsored"
          className="my-10 sm:my-12"
        />
      </div>

      <section className="relative min-h-[280px] overflow-hidden">
        <Image
          src={images.goldenBeach}
          alt={images.goldenBeachAlt}
          fill
          sizes="100vw"
          className="object-cover brightness-110 saturate-[1.06]"
        />
        <div className="absolute inset-0 bg-navy/45" />
        <div className="relative z-10 flex min-h-[280px] flex-col items-center justify-center px-4 py-12 text-center">
          <h2 className="font-display max-w-2xl text-2xl font-medium text-cream sm:text-3xl">
            Ready to find your sunny South Florida home?
          </h2>
          <p className="mt-3 max-w-lg text-sm text-cream/85 sm:text-base">
            Browse live listings above, or reach out for off-market opportunities
            and personalized neighborhood recommendations.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#listings"
              className="inline-flex items-center justify-center rounded-sm bg-coral px-8 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-coral-light"
            >
              Search Listings
            </Link>
            <Link
              href="#alerts"
              className="inline-flex items-center justify-center rounded-sm border border-cream/40 px-8 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-coral hover:text-coral-light"
            >
              Get Property Alerts
            </Link>
            <a
              href={`mailto:${REALTOR_EMAIL}`}
              className="inline-flex items-center justify-center rounded-sm border border-cream/40 px-8 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-coral hover:text-coral-light"
            >
              Email Realtor
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

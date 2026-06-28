import AdvertiseContactForm from "@/components/AdvertiseContactForm";
import {
  NewsletterSpotlightCard,
  VisibilityPackageCard,
} from "@/components/AdvertisePackageCard";
import ImagePageHero from "@/components/ImagePageHero";
import {
  advertiseBenefits,
  advertiseTrustStats,
  advertiseWhyUs,
  categoryLeaderExamples,
  categoryLeaderPackage,
  featuredRealtorPackage,
  newsletterSpotlightPackage,
  visibilityPackages,
} from "@/lib/advertise";
import { images } from "@/lib/images";
import { metadataForPage } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = metadataForPage("advertise");

export default function AdvertisePage() {
  return (
    <>
      <ImagePageHero
        eyebrow="Local Visibility"
        title="Get Your Business Featured in Affordable Pompano"
        description="Reach locals, visitors, home buyers, and new residents exploring the best of Pompano Beach."
        image={images.pompanoPier}
        imageAlt={images.pompanoPierAlt}
        primaryCta={{ label: "Get Started", href: "#contact" }}
        secondaryCta={{ label: "See Packages", href: "#packages" }}
      />

      <section className="border-b border-sand-dark/40 bg-cream py-10 sm:py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-base leading-relaxed text-navy/70 sm:text-lg">
            Choose the visibility level that fits your business. We help local
            restaurants, excursions, service pros, and real estate experts get
            discovered — not lost in a generic ad network.
          </p>
        </div>
      </section>

      <section className="bg-background py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
              Your Audience
            </p>
            <h2 className="font-display mt-2 text-2xl font-medium text-navy sm:text-3xl">
              The right people, at the right moment
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {advertiseBenefits.map((item) => (
              <div
                key={item.title}
                className="rounded-sm border border-sand-dark/50 bg-cream p-5"
              >
                <h3 className="font-display text-base font-medium text-navy">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-sand-dark/40 bg-sand py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {advertiseTrustStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-sm border border-sand-dark/50 bg-cream px-5 py-4 text-center"
              >
                <p className="font-display text-xl font-medium text-coral sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-navy/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="scroll-mt-24 bg-warm-white py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
              Visibility Packages
            </p>
            <h2 className="font-display mt-2 text-2xl font-medium text-navy sm:text-3xl">
              Get discovered. Stand out. Be the first choice.
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-navy/65">
              Local business listings for restaurants, excursions, and service
              pros — plus premium placements when you&apos;re ready to lead your
              category.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-3 md:gap-5">
            {visibilityPackages.map((pkg) => (
              <VisibilityPackageCard key={pkg.id} pkg={pkg} compact />
            ))}
          </div>

          <div className="mt-5 grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-5">
            <VisibilityPackageCard pkg={featuredRealtorPackage} compact />
            <VisibilityPackageCard pkg={categoryLeaderPackage} compact />
          </div>

          <p className="mt-4 text-center text-xs text-navy/50">
            Category Leader examples:{" "}
            {categoryLeaderExamples.join(" · ")}
          </p>

          <div className="mt-10 border-t border-sand-dark/40 pt-8">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-teal">
              Also Available
            </p>
            <div className="mx-auto mt-4 max-w-3xl">
              <NewsletterSpotlightCard pkg={newsletterSpotlightPackage} />
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-navy/45">
            All prices in USD. Cancel anytime with 30 days notice. Founding-member
            rates available while Affordable Pompano grows its local audience.
          </p>
        </div>
      </section>

      <section className="bg-cream py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
                Why It Works
              </p>
              <h2 className="font-display mt-2 text-2xl font-medium text-navy sm:text-3xl">
                Local visibility that builds trust
              </h2>
              <ul className="mt-5 space-y-3">
                {advertiseWhyUs.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-navy/70"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-sand-dark/60">
              <Image
                src={images.palmBeach}
                alt={images.palmBeachAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover brightness-110 saturate-[1.06]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[240px] overflow-hidden sm:min-h-[280px]">
        <Image
          src={images.goldenBeach}
          alt={images.goldenBeachAlt}
          fill
          sizes="100vw"
          className="object-cover brightness-110 saturate-[1.06]"
        />
        <div className="absolute inset-0 bg-navy/45" />
        <div className="relative z-10 flex min-h-[240px] flex-col items-center justify-center px-4 text-center sm:min-h-[280px]">
          <p className="font-display max-w-xl text-xl font-medium text-cream sm:text-2xl">
            Ready to get in front of your next customer?
          </p>
          <p className="mt-2 max-w-md text-sm text-cream/85">
            Spots are limited while we grow — reserve yours today.
          </p>
          <Link
            href="#contact"
            className="mt-5 inline-flex items-center justify-center rounded-sm bg-coral px-7 py-3 text-sm font-bold tracking-wide text-cream shadow-md transition-colors hover:bg-coral-light"
          >
            Get Started
          </Link>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-background py-14 sm:py-16">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
              Get Started
            </p>
            <h2 className="font-display mt-2 text-2xl font-medium text-navy sm:text-3xl">
              Apply for a listing or feature
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-navy/70">
              Tell us about your business and which package fits best. We&apos;ll
              confirm availability — usually within 1–2 business days.
            </p>
          </div>
          <div className="mt-6 rounded-sm border border-sand-dark/60 bg-cream p-6 sm:p-8">
            <AdvertiseContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

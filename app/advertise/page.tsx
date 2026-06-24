import AdvertiseContactForm from "@/components/AdvertiseContactForm";
import AdvertisePackageCard from "@/components/AdvertisePackageCard";
import ImagePageHero from "@/components/ImagePageHero";
import {
  advertiseBenefits,
  advertisePackages,
  advertisePackagesIntro,
  advertiseTrustStats,
  advertiseWhyUs,
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
        eyebrow="Partner With Us"
        title="Advertise With Affordable Pompano"
        description="Put your business in front of people who are already looking — home buyers, hungry locals, vacationers, and snowbirds planning life in sunny Pompano Beach."
        image={images.pompanoPier}
        imageAlt={images.pompanoPierAlt}
        primaryCta={{ label: "Reserve Your Spot", href: "#contact" }}
        secondaryCta={{ label: "See Packages", href: "#packages" }}
      />

      {/* Opening value prop */}
      <section className="border-b border-sand-dark/40 bg-cream py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="coastal-rule mx-auto mb-6 max-w-xs text-foreground/25">
            <span aria-hidden="true">&#9670;</span>
          </div>
          <p className="font-display text-2xl font-medium leading-relaxed text-navy sm:text-3xl">
            Local visibility that actually matters
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy/70 sm:text-lg">
            Affordable Pompano is a growing local guide built for one audience:
            people who care about Pompano Beach. When you sponsor with us,
            you&apos;re not competing for attention on a national platform — you&apos;re
            showing up exactly where high-intent visitors are planning homes,
            meals, and things to do.
          </p>
        </div>
      </section>

      {/* Who you reach */}
      <section className="bg-background py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
              Your Audience
            </p>
            <h2 className="font-display mt-3 text-3xl font-medium text-navy sm:text-4xl">
              The right people, at the right moment
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-navy/70">
              Our readers aren&apos;t casually scrolling — they&apos;re deciding where
              to live, where to eat tonight, and what to do this weekend in
              Pompano Beach.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advertiseBenefits.map((item) => (
              <div
                key={item.title}
                className="rounded-sm border border-sand-dark/50 bg-cream p-6"
              >
                <h3 className="font-display text-lg font-medium text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/65">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section className="border-y border-sand-dark/40 bg-sand py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm leading-relaxed text-navy/75 sm:text-base">
            We&apos;re a new but fast-growing Pompano Beach guide — and early
            partners get{" "}
            <span className="font-semibold text-teal">
              founding-member placement
            </span>{" "}
            at rates that won&apos;t last forever.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {advertiseTrustStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-sm border border-sand-dark/50 bg-cream px-6 py-5 text-center"
              >
                <p className="font-display text-2xl font-medium text-coral sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-navy/65">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="packages" className="scroll-mt-24 bg-warm-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal">
              <span className="text-[8px] text-coral" aria-hidden="true">
                &#9670;
              </span>
              Clear, Simple Pricing
              <span className="text-[8px] text-coral" aria-hidden="true">
                &#9670;
              </span>
            </p>
            <h2 className="font-display mt-3 text-3xl font-medium text-navy sm:text-4xl">
              Packages that fit your business
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-navy/70">
              {advertisePackagesIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advertisePackages.map((pkg) => (
              <AdvertisePackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-navy/50">
            All prices in USD. Cancel anytime with 30 days notice. Founding
            partner rates locked in for your first 6 months.
          </p>
        </div>
      </section>

      {/* Why partner */}
      <section className="bg-cream py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
                Why It Works
              </p>
              <h2 className="font-display mt-3 text-3xl font-medium text-navy sm:text-4xl">
                A smarter way to reach Pompano customers
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy/70">
                Big ad platforms spread your budget across millions of strangers.
                We do the opposite — one city, one audience, one goal: connect
                local businesses with people who are ready to choose.
              </p>
              <ul className="mt-6 space-y-4">
                {advertiseWhyUs.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-navy/70 sm:text-base"
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

      {/* CTA strip */}
      <section className="relative min-h-[280px] overflow-hidden sm:min-h-[320px]">
        <Image
          src={images.goldenBeach}
          alt={images.goldenBeachAlt}
          fill
          sizes="100vw"
          className="object-cover brightness-110 saturate-[1.06]"
        />
        <div className="absolute inset-0 bg-navy/45" />
        <div className="relative z-10 flex min-h-[280px] flex-col items-center justify-center px-4 text-center sm:min-h-[320px]">
          <p className="font-display max-w-2xl text-2xl font-medium text-cream sm:text-3xl">
            Ready to get in front of your next customer?
          </p>
          <p className="mt-3 max-w-lg text-sm text-cream/85 sm:text-base">
            Spots are limited while we grow — reserve yours today and become a
            founding partner on Pompano&apos;s local guide.
          </p>
          <Link
            href="#contact"
            className="mt-6 inline-flex items-center justify-center rounded-sm bg-coral px-8 py-3.5 text-sm font-bold tracking-wide text-cream shadow-md transition-colors hover:bg-coral-light"
          >
            Reserve Your Spot
          </Link>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="scroll-mt-24 bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
              Get Started
            </p>
            <h2 className="font-display mt-3 text-3xl font-medium text-navy sm:text-4xl">
              Apply to sponsor
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
              Tell us about your business and which package fits best. We&apos;ll
              confirm availability and get you set up — usually within 1–2
              business days.
            </p>
          </div>
          <div className="mt-8 rounded-sm border border-sand-dark/60 bg-cream p-6 sm:p-8">
            <AdvertiseContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

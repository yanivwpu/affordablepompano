import AdvertiseContactForm from "@/components/AdvertiseContactForm";
import AdvertisePackageCard from "@/components/AdvertisePackageCard";
import ImagePageHero from "@/components/ImagePageHero";
import { advertisePackages, advertiseTrustStats } from "@/lib/advertise";
import { images } from "@/lib/images";
import { pageTitle } from "@/lib/seo";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pageTitle("Advertise With Us — Sponsor & Partner"),
  description:
    "Reach locals, snowbirds, and newcomers in Pompano Beach. Featured restaurant, excursion, real estate, and newsletter sponsorship packages.",
};

export default function AdvertisePage() {
  return (
    <>
      <ImagePageHero
        eyebrow="Partner With Us"
        title="Advertise With Affordable Pompano"
        description="Reach locals, snowbirds, and people moving to Pompano who are looking for homes, restaurants, and things to do — right when they're ready to decide."
        image={images.pompanoPier}
        imageAlt={images.pompanoPierAlt}
        primaryCta={{ label: "Apply to Sponsor", href: "#contact" }}
        secondaryCta={{ label: "View Packages", href: "#packages" }}
      />

      {/* Value proposition */}
      <section className="border-b border-sand-dark/40 bg-cream py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="coastal-rule mx-auto mb-6 max-w-xs text-foreground/25">
            <span aria-hidden="true">&#9670;</span>
          </div>
          <p className="font-display text-2xl font-medium leading-relaxed text-navy sm:text-3xl">
            Your neighbors are already here — meet them where they&apos;re
            looking
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy/70 sm:text-lg">
            Affordable Pompano is a sunny local guide for homes, food,
            excursions, and everyday life. When you sponsor with us, you&apos;re
            not shouting into the void — you&apos;re showing up for people who
            already care about this community.
          </p>
        </div>
      </section>

      {/* Trust signals */}
      <section className="bg-sand py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-navy/80 sm:text-base">
            Join local businesses already reaching{" "}
            <span className="font-semibold text-teal">
              thousands of monthly visitors
            </span>{" "}
            planning their Pompano Beach life.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {advertiseTrustStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-sm border border-sand-dark/50 bg-cream px-6 py-5 text-center"
              >
                <p className="font-display text-3xl font-medium text-coral sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-navy/65">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing packages */}
      <section id="packages" className="scroll-mt-24 bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal">
              <span className="text-[8px] text-coral" aria-hidden="true">
                &#9670;
              </span>
              Sponsorship Packages
              <span className="text-[8px] text-coral" aria-hidden="true">
                &#9670;
              </span>
            </p>
            <h2 className="font-display mt-3 text-3xl font-medium text-navy sm:text-4xl">
              Simple, Friendly Pricing
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-navy/70">
              Pick the package that fits your business — or mix and match. Every
              plan includes a real person on the other end, not a corporate
              call center.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advertisePackages.map((pkg) => (
              <AdvertisePackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          <p className="mt-8 text-center text-sm italic text-navy/50">
            All rates are introductory. Bundle discounts available for
            multi-month commitments.
          </p>
        </div>
      </section>

      {/* Sunny Florida image break */}
      <section className="relative min-h-[280px] overflow-hidden sm:min-h-[340px]">
        <Image
          src={images.goldenBeach}
          alt={images.goldenBeachAlt}
          fill
          sizes="100vw"
          className="object-cover brightness-110 saturate-[1.06]"
        />
        <div className="absolute inset-0 bg-navy/40" />
        <div className="relative z-10 flex min-h-[280px] flex-col items-center justify-center px-4 text-center sm:min-h-[340px]">
          <p className="font-display max-w-2xl text-2xl font-medium text-cream sm:text-3xl">
            Put your business in front of people who love Pompano as much as you
            do.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center justify-center rounded-sm bg-coral px-8 py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-coral-light"
          >
            Apply to Sponsor
          </a>
        </div>
      </section>

      {/* Why partner */}
      <section className="bg-warm-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-3xl font-medium text-navy sm:text-4xl">
                Why local businesses choose us
              </h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Readers searching for homes, not just vacation photos",
                  "Food lovers comparing real local spots, not chain restaurants",
                  "Families and snowbirds planning weekly activities",
                  "Newcomers who need trusted recommendations fast",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-navy/70 sm:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sunset" />
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

      {/* Contact form */}
      <section id="contact" className="scroll-mt-24 bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
              Get Started
            </p>
            <h2 className="font-display mt-3 text-3xl font-medium text-navy sm:text-4xl">
              Let&apos;s grow together
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
              Tell us a little about your business and we&apos;ll send pricing,
              availability, and next steps — usually within 1–2 business days.
            </p>
          </div>
          <div className="mt-8 rounded-sm border border-sand-dark/60 bg-warm-white p-6 sm:p-8">
            <AdvertiseContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

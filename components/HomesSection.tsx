import Image from "next/image";
import Link from "next/link";
import { images, REALTOR_EMAIL } from "@/lib/images";

const homeOptions = [
  {
    id: "buy",
    title: "Buy Homes",
    description:
      "Condos and homes near the beach and Intracoastal — smart value in sunny Pompano.",
    image: images.buyHome,
    imageAlt: images.buyHomeAlt,
    href: "/homes#listings",
  },
  {
    id: "long-term",
    title: "Long Term Rentals",
    description:
      "Monthly and annual leases across Pompano neighborhoods — pet-friendly options available.",
    image: images.longTermRental,
    imageAlt: images.longTermRentalAlt,
    href: "/homes#listings",
  },
  {
    id: "vacation",
    title: "Short Term / Vacation Rentals",
    description:
      "Beach-week getaways and snowbird stays steps from the Atlantic — seasonal availability.",
    image: images.vacationRental,
    imageAlt: images.vacationRentalAlt,
    href: "/homes#vacation-stays",
  },
];

export default function HomesSection() {
  return (
    <section className="bg-warm-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-12">
          <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal">
            <span className="text-[8px] text-coral" aria-hidden="true">
              &#9670;
            </span>
            Homes
            <span className="text-[8px] text-coral" aria-hidden="true">
              &#9670;
            </span>
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium text-navy sm:text-4xl">
            Find Your Sunny South Florida Home
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-navy/70">
            Search live MLS homes and rentals in Pompano Beach — plus local
            expert help when you&apos;re ready to tour.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {homeOptions.map((option) => (
            <article
              key={option.id}
              className="group card-hover overflow-hidden rounded-sm border border-sand-dark/60 bg-cream"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={option.image}
                  alt={option.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover brightness-110 saturate-[1.06] transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
                <h3 className="font-display absolute bottom-4 left-4 right-4 text-xl font-medium text-cream sm:text-2xl">
                  {option.title}
                </h3>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-navy/70">
                  {option.description}
                </p>
                <Link
                  href={option.href}
                  className="mt-4 inline-flex text-sm font-semibold text-coral transition-colors hover:text-coral-light"
                >
                  Learn more &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/homes#listings"
            className="inline-flex w-full items-center justify-center rounded-sm bg-teal px-8 py-4 text-sm font-semibold tracking-wide text-cream shadow-md transition-all hover:bg-teal-light sm:w-auto"
          >
            Browse Homes
          </Link>
          <a
            href={`mailto:${REALTOR_EMAIL}`}
            className="inline-flex w-full items-center justify-center rounded-sm bg-coral px-8 py-4 text-sm font-semibold tracking-wide text-cream shadow-md transition-all hover:bg-coral-light sm:w-auto"
          >
            Contact Realtor
          </a>
        </div>
      </div>
    </section>
  );
}

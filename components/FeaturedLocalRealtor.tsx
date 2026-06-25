import {
  featuredRealtor,
  type FeaturedRealtorData,
  type RealtorCta,
} from "@/lib/realtor";
import Image from "next/image";
import Link from "next/link";

type FeaturedLocalRealtorProps = {
  realtor?: FeaturedRealtorData;
};

const ctaClassNames: Record<RealtorCta["variant"], string> = {
  primary:
    "inline-flex items-center justify-center rounded-sm bg-coral px-5 py-3 text-sm font-bold tracking-wide text-cream shadow-sm transition-colors hover:bg-coral-light",
  secondary:
    "inline-flex items-center justify-center rounded-sm border-2 border-teal/25 bg-white/60 px-5 py-3 text-sm font-semibold text-teal transition-colors hover:border-teal hover:bg-teal hover:text-cream",
  outline:
    "inline-flex items-center justify-center rounded-sm border border-sand-dark/60 px-5 py-3 text-sm font-semibold text-navy/75 transition-colors hover:border-teal hover:text-teal",
};

function RealtorCtaButton({ cta }: { cta: RealtorCta }) {
  const className = ctaClassNames[cta.variant];
  const isExternal =
    cta.href.startsWith("mailto:") ||
    cta.href.startsWith("tel:") ||
    cta.href.startsWith("http");

  if (isExternal) {
    return (
      <a href={cta.href} className={className}>
        {cta.label}
      </a>
    );
  }

  return (
    <Link href={cta.href} className={className}>
      {cta.label}
    </Link>
  );
}

export default function FeaturedLocalRealtor({
  realtor = featuredRealtor,
}: FeaturedLocalRealtorProps) {
  return (
    <section
      aria-labelledby="featured-realtor-heading"
      className="border-y border-sand-dark/40 bg-cream py-10 sm:py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal">
          <span className="text-[8px] text-coral" aria-hidden="true">
            &#9670;
          </span>
          {realtor.sectionTitle}
          <span className="text-[8px] text-coral" aria-hidden="true">
            &#9670;
          </span>
        </p>

        <article className="mx-auto max-w-5xl overflow-hidden rounded-sm border border-teal/25 bg-background shadow-sm ring-1 ring-teal/10">
          <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:gap-8 sm:p-8">
            <div className="flex shrink-0 flex-col items-center sm:items-start">
              <div
                className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-cream shadow-md ring-2 ring-teal/15 sm:h-40 sm:w-40"
                style={{ backgroundColor: realtor.headshotBackground }}
              >
                <Image
                  src={realtor.headshot}
                  alt={realtor.headshotAlt}
                  fill
                  sizes="(max-width: 640px) 128px, 160px"
                  className="object-contain object-center"
                  priority
                />
              </div>
              <span className="mt-3 rounded-sm bg-coral px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cream">
                {realtor.badgeLabel}
              </span>
            </div>

            <div className="min-w-0 flex-1 text-center sm:text-left">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2
                    id="featured-realtor-heading"
                    className="font-display text-2xl font-medium text-navy sm:text-3xl"
                  >
                    {realtor.name}
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-teal">
                    {realtor.market}
                  </p>
                  <p className="mt-1 text-xs font-medium tracking-wide text-navy/55">
                    {realtor.credentials}
                  </p>
                </div>
                <Image
                  src={realtor.logo}
                  alt={realtor.logoAlt}
                  width={210}
                  height={52}
                  className="h-9 w-auto max-w-[175px] sm:mt-1 sm:h-[42px] sm:max-w-[205px]"
                />
              </div>

              <p className="mt-4 text-sm leading-relaxed text-navy/70 sm:text-base">
                {realtor.bio}
              </p>

              <dl className="mt-5 flex flex-col gap-2 text-sm text-navy/60 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-1">
                <div>
                  <dt className="sr-only">Phone</dt>
                  <dd>
                    <a
                      href={realtor.phoneHref}
                      className="font-medium text-navy/75 transition-colors hover:text-teal"
                    >
                      {realtor.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <a
                      href={realtor.emailHref}
                      className="break-all font-medium text-navy/75 transition-colors hover:text-teal sm:break-normal"
                    >
                      {realtor.email}
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                {realtor.ctaLinks.map((cta) => (
                  <RealtorCtaButton key={cta.label} cta={cta} />
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

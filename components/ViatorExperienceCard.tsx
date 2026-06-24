import Image from "next/image";

type ViatorExperienceCardProps = {
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
  image: string;
  imageAlt: string;
};

export default function ViatorExperienceCard({
  title,
  description,
  buttonLabel,
  href,
  image,
  imageAlt,
}: ViatorExperienceCardProps) {
  return (
    <article className="group card-hover florida-border-top flex h-full flex-col overflow-hidden rounded-sm border border-sand-dark/60 bg-cream shadow-sm">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover brightness-110 saturate-[1.08] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-navy/10 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl font-medium leading-snug text-navy transition-colors group-hover:text-teal sm:text-2xl">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/70">
          {description}
        </p>
        <a
          href={href}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-coral px-4 py-3.5 text-sm font-bold tracking-wide text-cream shadow-sm transition-colors hover:bg-coral-light"
        >
          {buttonLabel}
          <span aria-hidden="true" className="text-cream/80">
            &rarr;
          </span>
        </a>
      </div>
    </article>
  );
}

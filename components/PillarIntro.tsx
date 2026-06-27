import { GuideRichText } from "@/components/GuideRichText";
import Link from "next/link";
import type { PillarEditorial } from "@/lib/guides/pillarEditorial";

type PillarIntroProps = {
  editorial: PillarEditorial;
};

export default function PillarIntro({ editorial }: PillarIntroProps) {
  return (
    <section className="border-b border-sand-dark/40 bg-background py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-5 text-base leading-relaxed text-navy/75">
          {editorial.introParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>
              <GuideRichText text={paragraph} />
            </p>
          ))}
        </div>

        {editorial.sections.map((section) => (
          <div key={section.heading ?? section.paragraphs[0].slice(0, 32)} className="mt-10">
            {section.heading && (
              <h2 className="font-display text-2xl font-medium text-navy sm:text-3xl">
                {section.heading}
              </h2>
            )}
            <div className={`space-y-4 ${section.heading ? "mt-4" : ""}`}>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="text-base leading-relaxed text-navy/75">
                  <GuideRichText text={paragraph} />
                </p>
              ))}
            </div>
          </div>
        ))}

        {editorial.quickLinks.length > 0 && (
          <nav
            aria-label="Quick links"
            className="mt-10 rounded-sm border border-teal/20 bg-cream p-6 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
              Start Here
            </p>
            <ul className="mt-4 space-y-3">
              {editorial.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group block rounded-sm border border-sand-dark/40 bg-warm-white p-4 transition-colors hover:border-teal/40"
                  >
                    <span className="font-semibold text-coral group-hover:text-coral-light">
                      {link.label}
                      <span aria-hidden="true" className="ml-1">
                        &rarr;
                      </span>
                    </span>
                    <p className="mt-1 text-sm text-navy/65">{link.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
}

type PillarMoreGuidesTeaserProps = {
  labels?: string[];
};

export function PillarMoreGuidesTeaser({ labels }: PillarMoreGuidesTeaserProps) {
  if (!labels || labels.length === 0) return null;

  const topicList = labels.join(", ");

  return (
    <aside className="border-t border-sand-dark/40 bg-sand/40 py-8">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-sm leading-relaxed text-navy/60">
          More local guides coming soon — including {topicList}. Browse{" "}
          <Link href="/guides" className="font-semibold text-coral hover:text-coral-light">
            all guides
          </Link>{" "}
          for everything published today.
        </p>
      </div>
    </aside>
  );
}

import EditorialGuideCard from "@/components/hub/EditorialGuideCard";
import HubSectionHeader from "@/components/hub/HubSectionHeader";
import HubSectionShell from "@/components/hub/HubSectionShell";
import Link from "next/link";

type HubGuideCard = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  imageAlt: string;
  href: string;
};

type HubGuidesSectionProps = {
  guides: HubGuideCard[];
  title?: string;
  description?: string;
  eyebrow?: string;
  id?: string;
};

export default function HubGuidesSection({
  guides,
  title = "Local Guides",
  description = "In-depth local guides that support your search — written for visitors and residents who want context, not clutter.",
  eyebrow = "Editorial",
  id = "hub-guides",
}: HubGuidesSectionProps) {
  if (guides.length === 0) return null;

  return (
    <HubSectionShell id={id} variant="guides">
      <HubSectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <div className="mx-auto max-w-4xl space-y-8 sm:space-y-10">
        {guides.map((guide) => (
          <EditorialGuideCard key={guide.slug} {...guide} />
        ))}
      </div>

      <p className="mt-10 text-center">
        <Link
          href="/guides"
          className="text-sm font-semibold text-navy/55 transition-colors hover:text-teal"
        >
          Browse all guides &rarr;
        </Link>
      </p>
    </HubSectionShell>
  );
}

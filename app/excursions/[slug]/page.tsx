import DirectoryListingDetail from "@/components/DirectoryListingDetail";
import {
  getAllListingSlugs,
  getListingBySlug,
} from "@/lib/directory";
import { createListingMetadata } from "@/lib/directory/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type ExcursionListingPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllListingSlugs("excursion").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ExcursionListingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const listing = getListingBySlug("excursion", slug);
  if (!listing) return {};

  return createListingMetadata(listing);
}

export default async function ExcursionListingPage({
  params,
}: ExcursionListingPageProps) {
  const { slug } = await params;
  const listing = getListingBySlug("excursion", slug);
  if (!listing) notFound();

  return (
    <DirectoryListingDetail
      listing={listing}
      sectionLabel="Excursions"
      sectionPath="/excursions"
      claimPackageId="excursion-listing-standard"
    />
  );
}

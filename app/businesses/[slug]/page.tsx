import DirectoryListingDetail from "@/components/DirectoryListingDetail";
import {
  getAllListingSlugs,
  getListingBySlug,
} from "@/lib/directory";
import { createListingMetadata } from "@/lib/directory/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type BusinessListingPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllListingSlugs("business").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BusinessListingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const listing = getListingBySlug("business", slug);
  if (!listing) return {};

  return createListingMetadata(listing);
}

export default async function BusinessListingPage({
  params,
}: BusinessListingPageProps) {
  const { slug } = await params;
  const listing = getListingBySlug("business", slug);
  if (!listing) notFound();

  return (
    <DirectoryListingDetail
      listing={listing}
      sectionLabel="Local Businesses"
      sectionPath="/businesses"
      claimPackageId="business-listing-standard"
    />
  );
}

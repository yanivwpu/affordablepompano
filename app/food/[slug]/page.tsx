import DirectoryListingDetail from "@/components/DirectoryListingDetail";
import {
  getAllListingSlugs,
  getListingBySlug,
} from "@/lib/directory";
import { createListingMetadata } from "@/lib/directory/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type RestaurantListingPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllListingSlugs("restaurant").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: RestaurantListingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const listing = getListingBySlug("restaurant", slug);
  if (!listing) return {};

  return createListingMetadata(listing);
}

export default async function RestaurantListingPage({
  params,
}: RestaurantListingPageProps) {
  const { slug } = await params;
  const listing = getListingBySlug("restaurant", slug);
  if (!listing) notFound();

  return (
    <DirectoryListingDetail
      listing={listing}
      sectionLabel="Food & Eats"
      sectionPath="/food"
      claimPackageId="restaurant-listing-standard"
    />
  );
}

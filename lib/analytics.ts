/**
 * GA4 measurement ID for Affordable Pompano.
 * Set NEXT_PUBLIC_GA_MEASUREMENT_ID in .env.local (dev) and Vercel project env (production).
 */
export function getGaMeasurementId(): string | undefined {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  return id || undefined;
}

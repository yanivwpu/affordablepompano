import type { ReactNode } from "react";
import type { HubSectionVariant } from "@/lib/hubLayout";
import { hubSectionSpacing, hubSectionSurface } from "@/lib/hubLayout";

type HubSectionShellProps = {
  id?: string;
  variant: HubSectionVariant;
  children: ReactNode;
  className?: string;
};

export default function HubSectionShell({
  id,
  variant,
  children,
  className = "",
}: HubSectionShellProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 ${hubSectionSurface[variant]} ${hubSectionSpacing} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

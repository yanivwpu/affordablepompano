import { MLS_PLACEHOLDER } from "@/lib/images";

export default function MlsBanner() {
  return (
    <div className="border-y border-sand-dark/50 bg-sand py-5">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 text-center sm:px-6 lg:px-8">
        <p className="flex items-center gap-2 text-sm font-semibold text-navy sm:text-base">
          <span className="text-coral" aria-hidden="true">
            &#9670;
          </span>
          {MLS_PLACEHOLDER}
          <span className="text-coral" aria-hidden="true">
            &#9670;
          </span>
        </p>
      </div>
    </div>
  );
}

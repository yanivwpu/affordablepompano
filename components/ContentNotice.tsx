import { CONTENT_PLACEHOLDER } from "@/lib/navigation";

export default function ContentNotice() {
  return (
    <div className="border-y border-sand-dark/50 bg-sand py-4">
      <p className="mx-auto max-w-3xl px-4 text-center text-sm text-navy/70">
        <span className="mr-2 text-coral" aria-hidden="true">
          &#9670;
        </span>
        {CONTENT_PLACEHOLDER}
        <span className="ml-2 text-coral" aria-hidden="true">
          &#9670;
        </span>
      </p>
    </div>
  );
}

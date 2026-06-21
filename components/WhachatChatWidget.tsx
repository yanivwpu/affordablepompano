"use client";

import { whachatWidgetFrameUrl } from "@/lib/whachatcrm";
import { useCallback, useEffect, useId, useState } from "react";

export default function WhachatChatWidget() {
  const [open, setOpen] = useState(false);
  const [frameSrc, setFrameSrc] = useState<string | null>(null);
  const titleId = useId();

  const closeChat = useCallback(() => {
    setOpen(false);
  }, []);

  const openChat = useCallback(() => {
    setFrameSrc(whachatWidgetFrameUrl(window.location.href));
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeChat();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, closeChat]);

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby={titleId}
          className="whachat-chat-panel flex flex-col rounded-2xl border border-sand-dark/60 bg-cream shadow-[0_20px_50px_-12px_rgba(27,58,75,0.35)]"
        >
          <div className="flex shrink-0 items-center justify-between border-b border-sand-dark/50 bg-cream px-4 py-3">
            <div className="min-w-0 pr-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-teal">
                Affordable Pompano
              </p>
              <h2
                id={titleId}
                className="font-display truncate text-base font-medium text-navy sm:text-lg"
              >
                Chat With a Local Expert
              </h2>
            </div>
            <button
              type="button"
              onClick={closeChat}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sand-dark/60 bg-cream text-lg font-semibold leading-none text-navy/70 transition-colors hover:border-teal/40 hover:bg-teal/10 hover:text-teal"
              aria-label="Close chat panel"
            >
              ×
            </button>
          </div>

          <div className="min-h-0 flex-1 overflow-hidden bg-white">
            {frameSrc && (
              <iframe
                src={frameSrc}
                title="WhachatCRM chat"
                className="block h-full w-full max-w-full border-0 bg-white"
                allow="clipboard-write"
              />
            )}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={open ? closeChat : openChat}
        className="whachat-chat-bubble flex items-center gap-2 rounded-full bg-teal px-5 py-3.5 text-sm font-semibold text-cream shadow-[0_12px_28px_-8px_rgba(27,58,75,0.35)] transition-all hover:bg-teal-light hover:shadow-[0_16px_32px_-8px_rgba(42,139,139,0.45)]"
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        <span
          className="flex h-2 w-2 rounded-full bg-coral"
          aria-hidden="true"
        />
        Let&apos;s Chat
      </button>
    </>
  );
}

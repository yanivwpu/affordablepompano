"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-[100] border-b border-sand-dark/60 bg-cream/95 backdrop-blur-md">
      <div
        className="h-0.5 bg-gradient-to-r from-teal via-coral to-sunset"
        aria-hidden="true"
      />
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="/" className="group shrink-0">
          <span className="font-display text-xl font-medium tracking-tight text-navy transition-colors group-hover:text-teal sm:text-2xl">
            Affordable Pompano
          </span>
          <span className="mt-0.5 block text-[11px] italic tracking-wide text-foreground/55 sm:text-xs">
            Pompano Beach, Florida
          </span>
        </Link>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              pathname.startsWith(`${link.href}/`);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-sm font-medium tracking-wide transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-coral after:transition-all hover:after:w-full ${
                    isActive
                      ? "text-teal after:w-full"
                      : "text-navy/75 hover:text-teal"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm p-2 text-navy lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-sand-dark/50 bg-cream px-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                pathname.startsWith(`${link.href}/`);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-sm px-3 py-2.5 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-sand text-teal"
                        : "text-navy/80 hover:bg-sand/70 hover:text-teal"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}

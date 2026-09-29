import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group inline-flex flex-col leading-none ${className}`}
    >
      <span className="font-display text-[22px] font-normal tracking-[0.14em] uppercase sm:text-[26px] sm:tracking-[0.18em]">
        {site.name}
      </span>
      <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.5em] opacity-70 transition-opacity group-hover:opacity-100">
        {site.tagline}
      </span>
    </Link>
  );
}

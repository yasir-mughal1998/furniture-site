"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe ${
        solid
          ? "bg-ivory/90 py-4 text-charcoal shadow-[0_1px_0_rgba(28,26,24,0.08)] backdrop-blur-md"
          : "py-6 text-ivory sm:py-8"
      }`}
    >
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-16">
        <Logo className="relative z-10" />

        <ul className="hidden items-center gap-10 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className="group relative py-2 text-[12px] font-medium uppercase tracking-[0.22em]"
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-gold transition-transform duration-500 ease-luxe ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className={`hidden border px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] transition-all duration-500 ease-luxe lg:inline-flex ${
            solid
              ? "border-charcoal/20 hover:border-charcoal hover:bg-charcoal hover:text-ivory"
              : "border-ivory/40 hover:border-ivory hover:bg-ivory hover:text-charcoal"
          }`}
        >
          Start a Project
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-10 -mr-2 flex size-11 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`block h-px w-7 bg-current transition-transform duration-500 ease-luxe ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-7 bg-current transition-transform duration-500 ease-luxe ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-espresso text-ivory transition-[opacity,visibility] duration-500 ease-luxe lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-between px-6 pt-32 pb-10 sm:px-10">
          <ul className="space-y-2">
            {[{ label: "Home", href: "/" }, ...navigation].map((item, i) => (
              <li
                key={item.href}
                className={`transition-all duration-700 ease-luxe ${
                  open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              >
                <Link
                  href={item.href}
                  className={`font-display text-5xl font-light sm:text-6xl ${
                    pathname === item.href ? "text-gold-light italic" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-2 border-t border-ivory/15 pt-8 text-sm text-ivory/70">
            <a href={site.phoneHref} className="block hover:text-gold-light">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="block hover:text-gold-light">
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

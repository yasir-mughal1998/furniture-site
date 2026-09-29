import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "./Icons";

type Variant = "solid" | "outline-light" | "outline-dark" | "gold";

const variants: Record<Variant, string> = {
  solid: "bg-charcoal text-ivory hover:bg-walnut",
  gold: "bg-gold text-charcoal hover:bg-gold-light",
  "outline-light":
    "border border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory hover:text-charcoal",
  "outline-dark":
    "border border-charcoal/25 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  external?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "solid",
  arrow = false,
  external = false,
  className = "",
}: ButtonLinkProps) {
  const classes = `group inline-flex items-center justify-center gap-3 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.22em] transition-all duration-500 ease-luxe ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {arrow && (
        <ArrowIcon className="size-4 transition-transform duration-500 ease-luxe group-hover:translate-x-1" />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  tone = "dark",
}: {
  href: string;
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 border-b pb-1.5 text-[12px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 ${
        tone === "light"
          ? "border-ivory/30 text-ivory hover:border-gold-light hover:text-gold-light"
          : "border-charcoal/25 text-charcoal hover:border-gold hover:text-walnut"
      }`}
    >
      {children}
      <ArrowIcon className="size-4 transition-transform duration-500 ease-luxe group-hover:translate-x-1" />
    </Link>
  );
}

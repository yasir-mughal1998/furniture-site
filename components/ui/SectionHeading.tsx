import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <p
      className={`flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.32em] ${
        tone === "light" ? "text-gold-light" : "text-gold"
      }`}
    >
      <span aria-hidden className="h-px w-10 bg-current" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal
      className={`${centered ? "mx-auto flex flex-col items-center text-center" : ""} max-w-3xl ${className}`}
    >
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-6 font-display text-4xl leading-[1.05] font-light tracking-tight text-balance sm:text-5xl lg:text-6xl ${
          tone === "light" ? "text-ivory" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 max-w-xl text-base leading-relaxed text-pretty sm:text-lg ${
            tone === "light" ? "text-ivory/70" : "text-stone"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

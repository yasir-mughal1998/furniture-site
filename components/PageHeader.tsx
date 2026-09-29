import Image from "next/image";
import type { ReactNode } from "react";
import { img } from "@/lib/images";
import { Container } from "./ui/Container";

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  image: string;
  imageAlt: string;
};

export function PageHeader({ eyebrow, title, description, image, imageAlt }: PageHeaderProps) {
  return (
    <section className="relative flex min-h-[78svh] items-end overflow-hidden bg-espresso text-ivory sm:min-h-[70vh]">
      <div className="absolute inset-0 animate-hero-zoom">
        <Image src={img(image)} alt={imageAlt} fill preload sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/45 to-espresso/50" />

      <Container className="relative pt-40 pb-16 sm:pb-20">
        <p
          className="flex animate-fade-up items-center gap-4 text-[11px] font-medium uppercase tracking-[0.36em] text-gold-light"
          style={{ animationDelay: "150ms" }}
        >
          <span aria-hidden className="h-px w-10 bg-current" />
          {eyebrow}
        </p>
        <h1
          className="mt-6 max-w-5xl animate-fade-up font-display text-5xl leading-[0.98] font-light tracking-tight text-balance sm:text-7xl lg:text-8xl"
          style={{ animationDelay: "300ms" }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="mt-8 max-w-xl animate-fade-up text-base leading-relaxed text-ivory/75 sm:text-lg"
            style={{ animationDelay: "450ms" }}
          >
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}

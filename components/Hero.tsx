import Image from "next/image";
import { img } from "@/lib/images";
import { ButtonLink } from "./ui/ButtonLink";
import { Container } from "./ui/Container";

type HeroProps = {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function Hero({ image, imageAlt, eyebrow, title, subtitle }: HeroProps) {
  return (
    <section className="relative flex min-h-svh items-end overflow-hidden bg-espresso text-ivory">
      <div className="absolute inset-0 animate-hero-zoom">
        <Image
          src={img(image)}
          alt={imageAlt}
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/35 to-espresso/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/60 to-transparent" />

      <Container className="relative pt-40 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-4xl">
          <p
            className="flex animate-fade-up items-center gap-4 text-[11px] font-medium uppercase tracking-[0.36em] text-gold-light"
            style={{ animationDelay: "200ms" }}
          >
            <span aria-hidden className="h-px w-10 bg-current" />
            {eyebrow}
          </p>
          <h1
            className="mt-8 animate-fade-up font-display text-[3.2rem] leading-[0.95] font-light tracking-tight text-balance sm:text-7xl lg:text-8xl xl:text-[7.5rem]"
            style={{ animationDelay: "350ms" }}
          >
            {title}
          </h1>
          <p
            className="mt-8 max-w-xl animate-fade-up text-base leading-relaxed text-ivory/80 sm:text-lg"
            style={{ animationDelay: "550ms" }}
          >
            {subtitle}
          </p>
          <div
            className="mt-12 flex animate-fade-up flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "700ms" }}
          >
            <ButtonLink href="/portfolio" variant="gold" arrow>
              View Our Work
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline-light">
              Contact Us
            </ButtonLink>
          </div>
        </div>

        <div
          className="mt-20 hidden animate-fade-up items-end justify-between border-t border-ivory/15 pt-6 text-[11px] uppercase tracking-[0.28em] text-ivory/60 md:flex"
          style={{ animationDelay: "900ms" }}
        >
          <span>Handmade solid-wood furniture</span>
          <span>Residential · Commercial · Brand</span>
          <span className="flex items-center gap-3">
            Scroll
            <span className="relative block h-10 w-px overflow-hidden bg-ivory/20">
              <span className="absolute inset-x-0 top-0 h-1/2 animate-[fade-up_2s_ease-in-out_infinite] bg-gold-light" />
            </span>
          </span>
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { img, images } from "@/lib/images";
import { site, whatsappLink } from "@/lib/site";
import { ButtonLink } from "./ui/ButtonLink";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

type ContactCTAProps = {
  title?: string;
  description?: string;
  image?: string;
};

export function ContactCTA({
  title = "Let's build something that lasts generations.",
  description = "Share your idea, a sketch or a room photo. We'll reply within one working day with honest advice, a consultation time and a clear next step.",
  image = images.toolWall,
}: ContactCTAProps) {
  return (
    <section className="relative overflow-hidden bg-espresso text-ivory">
      <Image src={img(image)} alt="" fill sizes="100vw" className="object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/85 to-espresso/40" />
      <Container className="relative py-28 sm:py-36 lg:py-44">
        <Reveal className="max-w-3xl">
          <p className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.32em] text-gold-light">
            <span aria-hidden className="h-px w-10 bg-current" />
            Begin a commission
          </p>
          <h2 className="mt-8 font-display text-5xl leading-[1.02] font-light tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {title}
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg">{description}</p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/contact" variant="gold" arrow>
              Start Your Project
            </ButtonLink>
            <ButtonLink href={whatsappLink()} variant="outline-light" external>
              WhatsApp {site.phone}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

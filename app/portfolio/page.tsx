import type { Metadata } from "next";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHeader } from "@/components/PageHeader";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Residential furniture, commercial interiors, brand manufacturing and one-off custom designs — a selection of Ardenwood commissions.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title={
          <>
            Work that speaks <em className="text-gold-light">in grain and joinery.</em>
          </>
        }
        description="A selection of homes, restaurants, hotels, offices and brand collections we have had the privilege to furnish."
        image={images.diningGarden}
        imageAlt="Walnut dining table in a garden-facing dining room"
      />

      <section className="py-24 sm:py-32">
        <Container>
          <Reveal className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
            <p className="font-display text-3xl leading-snug font-light text-charcoal sm:text-4xl">
              Every project begins with a conversation and ends with a piece built for one place only.
            </p>
            <p className="max-w-md text-stone md:justify-self-end">
              Filter by discipline to explore our residential furniture, commercial fit-outs, manufacturing for
              brands and bespoke one-off designs.
            </p>
          </Reveal>
          <PortfolioGrid projects={projects} />
        </Container>
      </section>

      <ContactCTA
        title="Have a project in mind?"
        description="Tell us about your space, your timeline and the feeling you want to create. We'll take it from there."
        image={images.livingWalnut}
      />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHeader } from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { serviceGroups } from "@/data/services";
import { img, images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom furniture for homes, commercial furniture for offices, restaurants and hotels, and white-label manufacturing for furniture brands.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            From a single heirloom <em className="text-gold-light">to five hundred pieces.</em>
          </>
        }
        description="Three disciplines, one workshop and the same uncompromising standard at every scale."
        image={images.livingOak}
        imageAlt="Bright living room furnished with custom wooden furniture"
      />

      <nav aria-label="Service categories" className="sticky top-[72px] z-30 border-b border-charcoal/10 bg-ivory/90 backdrop-blur-md">
        <Container>
          <ul className="-mx-6 flex gap-8 overflow-x-auto px-6 py-5 [scrollbar-width:none] sm:mx-0 sm:gap-12 sm:px-0 [&::-webkit-scrollbar]:hidden">
            {serviceGroups.map((g) => (
              <li key={g.id} className="shrink-0">
                <Link
                  href={`#${g.id}`}
                  className="text-[12px] font-medium whitespace-nowrap uppercase tracking-[0.22em] text-stone transition-colors hover:text-charcoal"
                >
                  <span className="mr-2 font-display text-gold italic">{g.index}</span>
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {serviceGroups.map((group, gi) => (
        <section
          key={group.id}
          id={group.id}
          className={`scroll-mt-32 py-28 sm:py-36 ${gi % 2 === 1 ? "bg-sand" : ""}`}
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <Reveal>
                  <Eyebrow>{`${group.index} — Service`}</Eyebrow>
                  <h2 className="mt-6 font-display text-5xl leading-[1.02] font-light tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
                    {group.title}
                  </h2>
                  <p className="mt-6 font-display text-2xl leading-snug font-light text-walnut italic">
                    {group.lead}
                  </p>
                  <p className="mt-6 max-w-lg leading-relaxed text-stone">{group.description}</p>
                </Reveal>
                <Reveal delay={100}>
                  <ul className="mt-10 space-y-4 border-t border-charcoal/10 pt-8">
                    {group.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-4 text-sm text-charcoal">
                        <span aria-hidden className="mt-2 h-px w-5 shrink-0 bg-gold" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <ButtonLink href="/contact" variant="outline-dark" arrow>
                      Discuss your project
                    </ButtonLink>
                  </div>
                </Reveal>
              </div>
              <Reveal delay={150} className="relative aspect-[4/3] overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[560px]">
                <Image
                  src={img(group.image)}
                  alt={group.title}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </Reveal>
            </div>

            <div
              className={`mt-20 grid gap-x-8 gap-y-14 sm:grid-cols-2 ${
                group.items.length > 3 ? "lg:grid-cols-5" : "lg:grid-cols-3"
              }`}
            >
              {group.items.map((item, i) => (
                <Reveal key={item.title} delay={(i % 5) * 80}>
                  <ServiceCard
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    aspect={group.items.length > 3 ? "aspect-[3/4]" : "aspect-[4/5]"}
                    compact={group.items.length > 3}
                  />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <ContactCTA
        title="Not sure where your project fits?"
        description="Most of our best work started with a simple question. Tell us what you have in mind and we'll recommend the right approach."
        image={images.mitreSaw}
      />
    </>
  );
}

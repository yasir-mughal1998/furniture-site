import type { Metadata } from "next";
import Image from "next/image";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { milestones, processSteps, stats, team } from "@/data/content";
import { img, images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the Workshop",
  description:
    "Meet the craftsmen behind Ardenwood — a furniture atelier combining traditional joinery with modern design since 2009.",
};

const workshopPhotos = [
  { src: images.toolWall, alt: "Hand-tool wall in the Ardenwood workshop", className: "col-span-2 row-span-2 aspect-square sm:aspect-auto" },
  { src: images.mitreSaw, alt: "Precision cutting on the mitre saw", className: "aspect-square" },
  { src: images.toolsOnOak, alt: "Tools laid out on an oak bench", className: "aspect-square" },
  { src: images.hammerOak, alt: "Reclaimed timber awaiting finishing", className: "aspect-square" },
  { src: images.toolsHanging, alt: "Clamps and fixtures in the workshop", className: "aspect-square" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the Workshop"
        title={
          <>
            Traditional craftsmanship, <em className="text-gold-light">combined with modern design.</em>
          </>
        }
        description={`Since ${site.founded}, a small team of master craftsmen has been building furniture the way it used to be made — and designing it for the way we live now.`}
        image={images.craftsmanCutting}
        imageAlt="Ardenwood craftsman at work in the workshop"
      />

      {/* Introduction */}
      <section className="py-28 sm:py-36 lg:py-44">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Our Story"
                title={
                  <>
                    A workshop, <em className="text-walnut">not a factory.</em>
                  </>
                }
              />
            </div>
            <div className="space-y-8 text-lg leading-relaxed text-stone lg:col-span-6 lg:col-start-7">
              <Reveal>
                <p className="font-display text-3xl leading-snug font-light text-charcoal">
                  Ardenwood began with one carpenter, one bench and a belief that good furniture should outlive
                  the people who buy it.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <p>
                  Our founder, Tariq Mahmood, trained under his father in the traditional joinery of the
                  subcontinent — mortise and tenon, hand-cut dovetails, pegged frames. In {site.founded} he opened a
                  two-man workshop making dining tables and beds for neighbours. Word travelled.
                </p>
              </Reveal>
              <Reveal delay={150}>
                <p>
                  Today we are a team of seven, working from a 6,000 sq ft workshop with a dedicated timber store
                  and finishing room. We build for private homes, restaurants, offices and hotels, and we
                  manufacture collections for furniture brands at home and abroad. The tools have evolved;
                  the standards have not.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Workshop photos */}
      <section className="pb-28 sm:pb-36 lg:pb-44">
        <Container>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
            {workshopPhotos.map((p, i) => (
              <Reveal key={p.src} delay={i * 80} className={`relative overflow-hidden bg-linen ${p.className}`}>
                <Image
                  src={img(p.src)}
                  alt={p.alt}
                  fill
                  sizes={i === 0 ? "(min-width: 640px) 50vw, 100vw" : "(min-width: 640px) 25vw, 50vw"}
                  className="object-cover transition-transform duration-[1.6s] ease-luxe hover:scale-105"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Experience */}
      <section className="bg-sand py-28 sm:py-36 lg:py-44">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Experience"
                title={
                  <>
                    Sixteen years of <em className="text-walnut">learning the grain.</em>
                  </>
                }
                description="Every commission has taught us something — about timber, about people, about what makes furniture feel right."
              />
              <Reveal delay={100} className="mt-14 grid grid-cols-2 gap-y-10 border-t border-charcoal/10 pt-10">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-5xl font-light text-charcoal">{s.value}</p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-stone">{s.label}</p>
                  </div>
                ))}
              </Reveal>
            </div>
            <ol className="relative lg:col-span-6 lg:col-start-7">
              <span aria-hidden className="absolute top-2 bottom-2 left-[5px] w-px bg-charcoal/15" />
              {milestones.map((m, i) => (
                <Reveal as="li" key={m.year} delay={i * 100} className="relative pb-14 pl-12 last:pb-0">
                  <span aria-hidden className="absolute top-2.5 left-0 size-[11px] rounded-full border border-gold bg-sand" />
                  <p className="font-display text-xl text-gold italic">{m.year}</p>
                  <h3 className="mt-2 font-display text-3xl font-light text-charcoal">{m.title}</h3>
                  <p className="mt-3 max-w-md leading-relaxed text-stone">{m.description}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-28 sm:py-36 lg:py-44">
        <Container>
          <SectionHeading
            eyebrow="The Craftsmen"
            title={
              <>
                The hands behind <em className="text-walnut">every piece.</em>
              </>
            }
            description="Seven people, over a hundred combined years at the bench. The same team that designs your piece builds and installs it."
          />
          <div className="mt-20 grid grid-cols-2 gap-x-5 gap-y-14 sm:gap-x-8 md:grid-cols-3 lg:grid-cols-5">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 80} className={`group ${i % 2 === 1 ? "lg:mt-16" : ""}`}>
                <div className="relative aspect-[3/4] overflow-hidden bg-linen">
                  <Image
                    src={img(member.image)}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover grayscale sepia-[25%] transition-all duration-[1.2s] ease-luxe group-hover:scale-105 group-hover:grayscale-0 group-hover:sepia-0"
                  />
                </div>
                <h3 className="mt-5 font-display text-2xl font-normal text-charcoal">{member.name}</h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-gold">{member.role}</p>
                <p className="mt-2 text-sm text-stone">{member.years}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Manufacturing process */}
      <section id="process" className="scroll-mt-24 bg-espresso py-28 text-ivory sm:py-36 lg:py-44">
        <Container>
          <SectionHeading
            tone="light"
            eyebrow="Manufacturing Process"
            title={
              <>
                Old methods, <em className="text-gold-light">modern precision.</em>
              </>
            }
            description="CNC accuracy where it matters, hand tools where it counts. Here is how every Ardenwood piece is made."
          />
          <div className="mt-20 space-y-24 lg:space-y-32">
            {processSteps.map((s, i) => (
              <div key={s.step} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                <Reveal
                  className={`relative aspect-[4/3] overflow-hidden lg:col-span-7 ${i % 2 === 1 ? "lg:order-2 lg:col-start-6" : ""}`}
                >
                  <Image
                    src={img(s.image)}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover"
                  />
                </Reveal>
                <Reveal delay={120} className={`lg:col-span-4 ${i % 2 === 1 ? "lg:order-1 lg:col-start-1" : "lg:col-start-9"}`}>
                  <p className="font-display text-7xl font-light text-gold-light/40 italic">{s.step}</p>
                  <h3 className="mt-4 font-display text-4xl font-light sm:text-5xl">{s.title}</h3>
                  <p className="mt-6 leading-relaxed text-ivory/70">{s.description}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-28 sm:py-36">
        <Container>
          <Reveal className="mx-auto max-w-4xl text-center">
            <div className="flex justify-center">
              <Eyebrow>Our Philosophy</Eyebrow>
            </div>
            <p className="mt-10 font-display text-4xl leading-[1.15] font-light text-charcoal text-balance sm:text-5xl">
              “We don&apos;t build furniture for a season. We build it for the dinner your grandchildren will
              have around it.”
            </p>
            <p className="mt-10 text-[11px] uppercase tracking-[0.26em] text-stone">
              Tariq Mahmood — Founder & Master Carpenter
            </p>
          </Reveal>
        </Container>
      </section>

      <ContactCTA image={images.toolsOnOak} />
    </>
  );
}

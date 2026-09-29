import Image from "next/image";
import Link from "next/link";
import { ContactCTA } from "@/components/ContactCTA";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ButtonLink, TextLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { clients, processSteps, reasons, stats, testimonials } from "@/data/content";
import { featuredProjects } from "@/data/projects";
import { serviceOverview } from "@/data/services";
import { img, images } from "@/lib/images";

export default function HomePage() {
  const [lead, second, third, ...rest] = featuredProjects;

  return (
    <>
      <Hero
        image={images.hero}
        imageAlt="Warm living room with a handcrafted solid-wood coffee table"
        eyebrow="Bespoke Furniture Atelier · Est. 2009"
        title="Crafting Timeless Furniture With Precision"
        subtitle="Handmade custom furniture in solid walnut, oak and teak — designed around your space and built by our master craftsmen for homes, hospitality and brands."
      />

      {/* Introduction */}
      <section className="py-28 sm:py-36 lg:py-44">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-4">
              <Eyebrow>The Atelier</Eyebrow>
            </Reveal>
            <div className="lg:col-span-8">
              <Reveal>
                <p className="font-display text-3xl leading-[1.2] font-light text-charcoal text-balance sm:text-4xl lg:text-[3.25rem]">
                  We are a small workshop of seven craftsmen. Every table, bed and cabinet leaves our bench
                  shaped by hand, <em className="text-walnut">built to be lived with</em> — and passed on.
                </p>
              </Reveal>
              <Reveal delay={120} className="mt-16 grid grid-cols-2 gap-y-12 border-t border-charcoal/10 pt-12 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-5xl font-light text-charcoal lg:text-6xl">{s.value}</p>
                    <p className="mt-3 pr-4 text-[11px] uppercase tracking-[0.22em] text-stone">{s.label}</p>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured projects */}
      <section className="pb-28 sm:pb-36 lg:pb-44">
        <Container>
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Selected Work"
              title={
                <>
                  Recent commissions, <em className="text-walnut">made by hand.</em>
                </>
              }
            />
            <Reveal>
              <TextLink href="/portfolio">View full portfolio</TextLink>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-x-10 gap-y-20 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <ProjectCard project={lead} shape="landscape" sizes="(min-width: 768px) 58vw, 100vw" index={0} />
            </Reveal>
            <Reveal delay={120} className="md:col-span-5 md:mt-40">
              <ProjectCard project={second} shape="portrait" sizes="(min-width: 768px) 42vw, 100vw" index={1} />
            </Reveal>
            <Reveal className="md:col-span-5">
              <ProjectCard project={third} shape="portrait" sizes="(min-width: 768px) 42vw, 100vw" index={2} />
            </Reveal>
            <Reveal delay={120} className="md:col-span-7 md:mt-32">
              <ProjectCard project={rest[0]} shape="landscape" sizes="(min-width: 768px) 58vw, 100vw" index={3} />
            </Reveal>
            <Reveal className="md:col-span-10 md:col-start-2">
              <ProjectCard project={rest[1]} shape="wide" sizes="(min-width: 768px) 84vw, 100vw" index={4} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Why choose us */}
      <section className="bg-sand py-28 sm:py-36 lg:py-44">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <SectionHeading
                eyebrow="Why Ardenwood"
                title={
                  <>
                    Furniture built the <em className="text-walnut">slow, honest</em> way.
                  </>
                }
                description="Mass-produced furniture is designed to be replaced. Ours is designed to be repaired, refinished and handed down."
              />
              <Reveal delay={100} className="relative mt-16 aspect-[4/5] overflow-hidden">
                <Image
                  src={img(images.craftsmanCutting)}
                  alt="Craftsman cutting a board in the Ardenwood workshop"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </Reveal>
            </div>
            <ul className="flex flex-col justify-end divide-y divide-charcoal/10 border-y border-charcoal/10">
              {reasons.map((r, i) => (
                <Reveal as="li" key={r.title} delay={i * 90} className="group grid grid-cols-[auto_1fr] gap-8 py-10 sm:py-12">
                  <span className="font-display text-lg text-gold italic">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-3xl font-light text-charcoal transition-colors duration-500 group-hover:text-walnut sm:text-4xl">
                      {r.title}
                    </h3>
                    <p className="mt-4 max-w-md leading-relaxed text-stone">{r.description}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-espresso py-28 text-ivory sm:py-36 lg:py-44">
        <Container>
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <SectionHeading
              tone="light"
              eyebrow="Our Craftsmanship Process"
              title={
                <>
                  From raw timber to <em className="text-gold-light">heirloom.</em>
                </>
              }
              description="Six deliberate stages, each overseen by the craftsman responsible for your piece."
            />
            <Reveal>
              <TextLink href="/about#process" tone="light">
                Inside the workshop
              </TextLink>
            </Reveal>
          </div>

          <ol className="mt-20 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s, i) => (
              <Reveal as="li" key={s.step} delay={(i % 3) * 100} className="group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={img(s.image)}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover opacity-80 grayscale-[35%] transition-all duration-[1.4s] ease-luxe group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
                <div className="mt-6 flex items-baseline gap-5 border-t border-ivory/15 pt-6">
                  <span className="font-display text-lg text-gold-light italic">{s.step}</span>
                  <div>
                    <h3 className="font-display text-2xl font-light sm:text-3xl">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ivory/65">{s.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Services overview */}
      <section className="py-28 sm:py-36 lg:py-44">
        <Container>
          <SectionHeading
            eyebrow="What We Make"
            title={
              <>
                One workshop, <em className="text-walnut">three disciplines.</em>
              </>
            }
            description="Whether it's a single heirloom table or five hundred chairs for a brand, every piece gets the same care at the bench."
          />
          <div className="mt-20 grid gap-x-8 gap-y-16 md:grid-cols-3">
            {serviceOverview.map((s, i) => (
              <Reveal key={s.id} delay={i * 120}>
                <ServiceCard
                  title={s.title}
                  description={s.description}
                  image={s.image}
                  index={s.index}
                  tags={s.items}
                  href={`/services#${s.id}`}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Client trust */}
      <section className="border-y border-charcoal/10 bg-ivory py-20 sm:py-24">
        <Container>
          <Reveal className="text-center">
            <Eyebrow>Trusted by homeowners, hoteliers & brands</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <ul className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
              {clients.map((c) => (
                <li
                  key={c}
                  className="text-center font-display text-2xl font-light tracking-wide text-charcoal/45 transition-colors duration-500 hover:text-charcoal sm:text-3xl"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-28 sm:py-36 lg:py-44">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Kind Words"
                title={
                  <>
                    In our <em className="text-walnut">clients&apos;</em> words.
                  </>
                }
              />
              <Reveal delay={100} className="mt-12 hidden lg:block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={img(images.diningHeritage)}
                    alt="Heritage trestle dining table"
                    fill
                    sizes="30vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
            <div className="grid gap-x-12 gap-y-16 sm:grid-cols-2 lg:col-span-8">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={(i % 2) * 120} className={i % 2 === 1 ? "sm:mt-24" : ""}>
                  <TestimonialCard {...t} />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery strip */}
      <section className="pb-28 sm:pb-36">
        <Container>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
            {[images.toolWall, images.mitreSaw, images.toolsOnOak, images.chairSaddle].map((src, i) => (
              <Reveal key={src} delay={i * 80} className={i % 2 === 1 ? "md:mt-16" : ""}>
                <Link
                  href="/gallery"
                  aria-label="Open the workshop gallery"
                  className="group relative block aspect-[3/4] overflow-hidden bg-linen"
                >
                  <Image
                    src={img(src)}
                    alt="Inside the Ardenwood workshop"
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover transition-transform duration-[1.6s] ease-luxe group-hover:scale-105"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 flex justify-center">
            <ButtonLink href="/gallery" variant="outline-dark" arrow>
              Visit the gallery
            </ButtonLink>
          </Reveal>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}

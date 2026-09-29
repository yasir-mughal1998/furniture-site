import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Inquiries",
  description:
    "Start a custom furniture commission with Ardenwood. Call, WhatsApp, email or visit our workshop.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk about <em className="text-gold-light">your piece.</em>
          </>
        }
        description="Share your idea, a sketch or a photo of your room. We reply to every inquiry within one working day."
        image={images.toolsOnOak}
        imageAlt="Hand tools on an oak workbench"
      />

      <section className="py-24 sm:py-32 lg:py-40">
        <Container>
          <div className="grid gap-20 lg:grid-cols-12 lg:gap-16">
            <aside className="lg:col-span-4">
              <Reveal>
                <Eyebrow>Reach the studio</Eyebrow>
                <h2 className="mt-6 font-display text-4xl leading-tight font-light text-charcoal sm:text-5xl">
                  Speak directly with our craftsmen.
                </h2>
              </Reveal>

              <Reveal delay={100}>
                <ul className="mt-12 divide-y divide-charcoal/10 border-y border-charcoal/10">
                  <ContactRow icon={<PhoneIcon />} label="Phone" href={site.phoneHref}>
                    {site.phone}
                  </ContactRow>
                  <ContactRow icon={<WhatsAppIcon className="size-5" />} label="WhatsApp" href={whatsappLink()} external>
                    Message us instantly
                  </ContactRow>
                  <ContactRow icon={<MailIcon />} label="Email" href={`mailto:${site.email}`}>
                    {site.email}
                  </ContactRow>
                  <ContactRow icon={<PinIcon />} label="Workshop" href={site.address.mapUrl} external>
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                  </ContactRow>
                </ul>
              </Reveal>

              <Reveal delay={150} className="mt-12">
                <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-stone">
                  <ClockIcon className="size-4" />
                  Workshop hours
                </div>
                <dl className="mt-5 space-y-3 text-sm">
                  {site.hours.map((h) => (
                    <div key={h.days} className="flex justify-between gap-6 border-b border-dashed border-charcoal/10 pb-3">
                      <dt className="text-charcoal">{h.days}</dt>
                      <dd className="text-stone">{h.time}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 text-sm leading-relaxed text-stone">
                  Visits to the workshop are welcome by appointment — see timber, finishes and work in progress
                  in person.
                </p>
              </Reveal>
            </aside>

            <Reveal delay={100} className="lg:col-span-7 lg:col-start-6">
              <div className="bg-white/60 p-6 shadow-[0_40px_80px_-40px_rgba(43,33,26,0.25)] sm:p-12 lg:p-16">
                <Eyebrow>Project inquiry</Eyebrow>
                <h2 className="mt-6 mb-12 font-display text-4xl font-light text-charcoal sm:text-5xl">
                  Tell us what you&apos;d like made.
                </h2>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal className="relative overflow-hidden bg-sand">
            <iframe
              title="Ardenwood workshop location"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(site.address.line2)}&z=13&output=embed`}
              className="h-[380px] w-full border-0 grayscale sepia-[30%] sm:h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  href,
  external = false,
  children,
}: {
  icon: ReactNode;
  label: string;
  href: string;
  external?: boolean;
  children: ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group flex items-start gap-5 py-6 transition-colors"
      >
        <span className="mt-0.5 text-gold">{icon}</span>
        <span>
          <span className="block text-[11px] font-medium uppercase tracking-[0.24em] text-stone">{label}</span>
          <span className="mt-2 block text-lg text-charcoal transition-colors group-hover:text-walnut">
            {children}
          </span>
        </span>
      </a>
    </li>
  );
}

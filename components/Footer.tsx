import Link from "next/link";
import type { ReactNode } from "react";
import { navigation, site, whatsappLink } from "@/lib/site";
import { serviceGroups } from "@/data/services";
import { Container } from "./ui/Container";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-ivory">
      <Container className="pt-24 pb-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-8 max-w-sm font-display text-2xl leading-snug font-light text-ivory/80">
              Traditional craftsmanship, modern design — handmade in our workshop since {site.founded}.
            </p>
            <div className="mt-10 flex gap-6">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] uppercase tracking-[0.22em] text-ivory/60 transition-colors hover:text-gold-light"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-12 sm:grid-cols-3 lg:col-span-7">
            <FooterColumn title="Studio">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-gold-light">
                    {item.label}
                  </Link>
                </li>
              ))}
            </FooterColumn>

            <FooterColumn title="Services">
              {serviceGroups.map((g) => (
                <li key={g.id}>
                  <Link href={`/services#${g.id}`} className="transition-colors hover:text-gold-light">
                    {g.title}
                  </Link>
                </li>
              ))}
            </FooterColumn>

            <FooterColumn title="Workshop">
              <li>{site.address.line1}</li>
              <li>{site.address.line2}</li>
              <li className="pt-3">
                <a href={site.phoneHref} className="transition-colors hover:text-gold-light">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold-light">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-light"
                >
                  WhatsApp
                </a>
              </li>
            </FooterColumn>
          </div>
        </div>

        <div className="mt-24 overflow-hidden" aria-hidden>
          <p className="font-display text-[22vw] leading-[0.8] font-light tracking-tight text-ivory/[0.06] select-none lg:text-[17rem]">
            {site.name}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-[11px] uppercase tracking-[0.2em] text-ivory/45 sm:flex-row sm:justify-between">
          <p>
            © {year} {site.name} {site.tagline}. All rights reserved.
          </p>
          <p>Handcrafted with care</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold-light">{title}</h3>
      <ul className="mt-6 space-y-3 text-sm text-ivory/70">{children}</ul>
    </div>
  );
}

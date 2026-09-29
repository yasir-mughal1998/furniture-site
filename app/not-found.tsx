import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-svh items-center bg-espresso text-ivory">
      <Container className="py-40">
        <p className="text-[11px] font-medium uppercase tracking-[0.36em] text-gold-light">Error 404</p>
        <h1 className="mt-6 max-w-3xl font-display text-6xl leading-none font-light sm:text-8xl">
          This piece isn&apos;t in our collection.
        </h1>
        <p className="mt-8 max-w-md text-ivory/70">
          The page you&apos;re looking for may have moved. Let us guide you back to the workshop.
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="/" variant="gold" arrow>
            Return home
          </ButtonLink>
          <ButtonLink href="/portfolio" variant="outline-light">
            View portfolio
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col justify-between border-t border-charcoal/15 pt-10 transition-colors duration-500 hover:border-gold">
      <div>
        <span aria-hidden className="block font-display text-6xl leading-none text-gold">
          “
        </span>
        <blockquote className="mt-2 font-display text-2xl leading-snug font-light text-charcoal text-pretty sm:text-[1.7rem]">
          {quote}
        </blockquote>
      </div>
      <figcaption className="mt-10">
        <p className="text-sm font-medium text-charcoal">{name}</p>
        <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-stone">{role}</p>
      </figcaption>
    </figure>
  );
}

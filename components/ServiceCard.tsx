import Image from "next/image";
import Link from "next/link";
import { img } from "@/lib/images";
import { ArrowIcon } from "./ui/Icons";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  href?: string;
  index?: string;
  tags?: string[];
  aspect?: string;
  compact?: boolean;
};

export function ServiceCard({
  title,
  description,
  image,
  href,
  index,
  tags,
  aspect = "aspect-[4/5]",
  compact = false,
}: ServiceCardProps) {
  const body = (
    <>
      <div className={`relative overflow-hidden bg-linen ${aspect}`}>
        <Image
          src={img(image)}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1.6s] ease-luxe group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
        {index && (
          <span className="absolute top-6 left-6 font-display text-lg text-ivory italic">{index}</span>
        )}
        <h3
          className={`absolute right-6 bottom-6 left-6 font-display font-light text-ivory ${
            compact ? "text-3xl lg:text-[1.75rem]" : "text-3xl sm:text-4xl"
          }`}
        >
          {title}
        </h3>
      </div>
      <div className="pt-6">
        <p className="text-sm leading-relaxed text-stone sm:text-base">{description}</p>
        {tags && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="border border-charcoal/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-charcoal/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
        {href && (
          <span className="mt-6 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal transition-colors group-hover:text-walnut">
            Explore
            <ArrowIcon className="size-4 transition-transform duration-500 ease-luxe group-hover:translate-x-1" />
          </span>
        )}
      </div>
    </>
  );

  return href ? (
    <Link href={href} className="group block">
      {body}
    </Link>
  ) : (
    <article className="group">{body}</article>
  );
}

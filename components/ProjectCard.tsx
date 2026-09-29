import Image from "next/image";
import type { Project } from "@/data/projects";
import { img } from "@/lib/images";
import { shapeClass, type Shape } from "@/lib/shapes";

type ProjectCardProps = {
  project: Project;
  sizes?: string;
  shape?: Shape;
  index?: number;
};

export function ProjectCard({
  project,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  shape,
  index,
}: ProjectCardProps) {
  return (
    <article className="group">
      <div className={`relative overflow-hidden bg-linen ${shapeClass[shape ?? project.shape]}`}>
        <Image
          src={img(project.image)}
          alt={`${project.title} — ${project.material}`}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[1.6s] ease-luxe group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-espresso/0 transition-colors duration-700 group-hover:bg-espresso/25" />
        <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-700 ease-luxe group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-[11px] uppercase tracking-[0.22em] text-ivory/90">{project.material}</p>
        </div>
        {typeof index === "number" && (
          <span className="absolute top-5 left-5 font-display text-sm text-ivory/90 italic">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>

      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-gold">
            {project.category}
          </p>
          <h3 className="mt-3 font-display text-2xl leading-tight font-normal text-charcoal transition-colors duration-500 group-hover:text-walnut sm:text-[1.75rem]">
            {project.title}
          </h3>
        </div>
        <span className="mt-1 shrink-0 text-xs text-stone">{project.year}</span>
      </div>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-stone">{project.description}</p>
    </article>
  );
}

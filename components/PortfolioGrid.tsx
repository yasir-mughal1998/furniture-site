"use client";

import { useMemo, useState } from "react";
import { projectCategories, type Project, type ProjectCategory } from "@/data/projects";
import { FilterTabs } from "./FilterTabs";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./ui/Reveal";

export function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<ProjectCategory | "All">("All");

  const counts = useMemo(() => {
    const result: Record<string, number> = { All: projects.length };
    for (const c of projectCategories) result[c] = projects.filter((p) => p.category === c).length;
    return result;
  }, [projects]);

  const visible = category === "All" ? projects : projects.filter((p) => p.category === category);

  return (
    <div>
      <div className="border-b border-charcoal/10">
        <FilterTabs
          label="Filter projects by category"
          options={projectCategories}
          value={category}
          onChange={setCategory}
          counts={counts}
        />
      </div>

      <div key={category} className="mt-14 columns-1 gap-x-8 sm:columns-2 lg:columns-3 lg:gap-x-10">
        {visible.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 90} className="mb-16 break-inside-avoid">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

import type { Project } from "@/lib/types";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FadeUp } from "@/components/ui/FadeUp";
import { Smartphone } from "lucide-react";

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section
      id="projects"
      className="py-24 px-4 md:px-8 max-w-[1100px] mx-auto border-t border-edge-subtle"
    >
      <FadeUp delay={0}>
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs font-semibold tracking-widest uppercase text-accent">
              Production Portfolio
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Featured Applications & Products
          </h2>
          <p className="text-[15px] text-muted max-w-xl">
            Live fintech super apps, SME systems, and commercial cloud platforms shipped with React Native, NestJS, and relational databases.
          </p>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full">
        {projects.map((p, i) => (
          <FadeUp key={p.id} delay={(i % 2) * 100} className="h-full">
            <ProjectCard project={p} />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}


import type { Project } from "@/lib/types";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FadeUp } from "@/components/ui/FadeUp";

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section
      id="projects"
      className="py-24 px-4 md:px-8 max-w-[1000px] mx-auto border-t border-edge-subtle"
    >
      <FadeUp delay={0}>
        <div className="flex items-center gap-4 mb-14">
          <div className="w-[10px] h-[10px] rounded-full bg-primary" />
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            What I've Built
          </h2>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[860px] mx-auto">
        {projects.map((p, i) => (
          <FadeUp key={p.id} delay={(i % 2) * 100}>
            <ProjectCard project={p} />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

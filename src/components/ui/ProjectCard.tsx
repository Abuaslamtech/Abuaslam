import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { BrowserMockup } from "./BrowserMockup";
import { PhoneMockup } from "./PhoneMockup";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-surface border border-edge rounded-[20px] overflow-hidden transition-all duration-200 hover:border-primary hover:-translate-y-0.5 group">
      {project.type === "mobile" ? (
        <PhoneMockup pic={project.pic} name={project.name} />
      ) : (
        <BrowserMockup
          pic={project.pic}
          name={project.name}
          url={project.demo}
        />
      )}

      <div className="p-5 px-6 pb-5 flex items-start justify-between gap-4">
        <div>
          <div className="font-display text-[22px] font-bold text-ink mb-1">
            {project.name}
          </div>
          <div className="text-[14px] text-muted">{project.tagline}</div>
        </div>
        {project.type === "mobile" ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wider uppercase text-primary no-underline py-[7px] px-3.5 rounded-full border border-primary/30 transition-all duration-150 mt-1 hover:bg-primary/10 hover:border-primary"
          >
            Expo <ArrowUpRight size={14} />
          </a>
        ) : (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[42px] h-[42px] rounded-full shrink-0 bg-surface-alt border border-edge flex items-center justify-center text-subtle transition-all duration-200 group-hover:bg-primary group-hover:border-primary group-hover:text-bg"
          >
            <ArrowUpRight size={18} />
          </a>
        )}
      </div>
    </div>
  );
}

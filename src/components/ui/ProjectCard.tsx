import { ArrowUpRight, ExternalLink, Github, Smartphone } from "lucide-react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import type { Project } from "@/lib/types";
import { BrowserMockup } from "./BrowserMockup";
import { PhoneMockup } from "./PhoneMockup";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-surface border border-edge rounded-[22px] overflow-hidden transition-all duration-300 hover:border-accent/60 hover:-translate-y-1 group flex flex-col h-full shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
      {/* Mockup Preview */}
      {project.type === "mobile" ? (
        <PhoneMockup pic={project.pic} name={project.name} />
      ) : (
        <BrowserMockup
          pic={project.pic}
          name={project.name}
          url={project.demo}
        />
      )}

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1 justify-between gap-5">
        <div className="flex flex-col gap-3">
          {/* Status & Platform Badges */}
          <div className="flex flex-wrap items-center gap-2">
            {project.status && (
              <span className="font-mono text-[10px] uppercase tracking-wider font-semibold py-1 px-2.5 rounded-full bg-accent/10 border border-accent/30 text-accent flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {project.status}
              </span>
            )}
            {project.platform && (
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted py-1 px-2.5 rounded-full bg-surface-alt border border-edge">
                {project.platform}
              </span>
            )}
          </div>

          <div>
            <h3 className="text-[22px] font-bold text-white tracking-tight mb-1 group-hover:text-accent transition-colors">
              {project.name}
            </h3>
            <p className="text-[14px] font-medium text-accent-muted/90">
              {project.tagline}
            </p>
          </div>

          {project.description && (
            <p className="text-[13px] text-muted leading-relaxed line-clamp-3">
              {project.description}
            </p>
          )}

          {/* Tech stack pills */}
          {project.tech && project.tech.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[11px] bg-surface-alt/80 border border-edge/80 text-muted px-2.5 py-0.5 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-edge-subtle flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            {project.playStoreUrl ? (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold tracking-wider uppercase text-white bg-primary hover:bg-primary-hover px-4 py-2 rounded-full transition-all shadow-[0_0_16px_rgba(37,99,235,0.3)]"
              >
                <FaGooglePlay size={13} /> View on Play Store <ExternalLink size={12} />
              </a>
            ) : project.id === "billbolt" ? (
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold tracking-wider uppercase text-accent bg-accent/10 border border-accent/30 hover:bg-accent/20 px-4 py-2 rounded-full transition-all"
              >
                Request Beta Access <ArrowUpRight size={13} />
              </a>
            ) : (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold tracking-wider uppercase text-white bg-primary/80 hover:bg-primary px-4 py-2 rounded-full transition-all"
              >
                Live Platform <ArrowUpRight size={14} />
              </a>
            )}

            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Source Code"
                className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted hover:text-white bg-surface-alt border border-edge px-3 py-2 rounded-full transition-colors"
              >
                <Github size={13} /> Code
              </a>
            )}
          </div>

          <a
            href={project.playStoreUrl || project.demo}
            target={project.demo.startsWith("#") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            aria-label={`Open ${project.name}`}
            className="w-9 h-9 rounded-full shrink-0 bg-surface-alt border border-edge flex items-center justify-center text-muted transition-all duration-200 group-hover:bg-accent group-hover:border-accent group-hover:text-[#070D1D]"
          >
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}



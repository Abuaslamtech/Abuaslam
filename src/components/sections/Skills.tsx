import type { StackItem } from "@/lib/types";
import { StackRow } from "@/components/ui/StackRow";
import { FadeUp } from "@/components/ui/FadeUp";

export function Skills({ stack }: { stack: StackItem[] }) {
  return (
    <section
      id="skills"
      className="py-24 px-4 md:px-8 max-w-[1100px] mx-auto border-t border-edge-subtle"
    >
      <FadeUp delay={0}>
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs font-semibold tracking-widest uppercase text-accent">
              Architecture & Stack
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Core Engineering Toolkit
          </h2>
          <p className="text-[15px] text-muted max-w-xl">
            Production-tested technologies across cross-platform mobile, enterprise REST APIs, relational databases, and cloud infrastructure.
          </p>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stack.map((item, i) => (
          <FadeUp key={item.name} delay={(i % 2) * 50}>
            <StackRow item={item} />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}


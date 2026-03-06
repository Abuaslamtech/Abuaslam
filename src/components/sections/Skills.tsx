import type { StackItem } from "@/lib/types";
import { StackRow } from "@/components/ui/StackRow";
import { FadeUp } from "@/components/ui/FadeUp";

export function Skills({ stack }: { stack: StackItem[] }) {
  return (
    <section
      id="skills"
      className="py-24 px-4 md:px-8 max-w-[1000px] mx-auto border-t border-edge-subtle"
    >
      <FadeUp delay={0}>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-[10px] h-[10px] rounded-full bg-primary" />
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Tech Toolkit
          </h2>
        </div>
      </FadeUp>
      <FadeUp delay={100}>
        <p className="font-mono text-[13px] text-muted tracking-wide mb-14 uppercase">
          Weapons of choice for building modern apps
        </p>
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

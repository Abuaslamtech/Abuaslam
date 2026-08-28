import type { Service } from "@/lib/types";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { FadeUp } from "@/components/ui/FadeUp";

export function Services({ services }: { services: Service[] }) {
  return (
    <section
      id="services"
      className="py-24 px-4 md:px-8 max-w-[1100px] mx-auto border-t border-edge-subtle"
    >
      <FadeUp delay={0}>
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs font-semibold tracking-widest uppercase text-accent">
              Capabilities & Offerings
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Engineering Services & Solutions
          </h2>
          <p className="text-[15px] text-muted max-w-xl">
            From initial product architecture to app store deployment and regulatory fintech compliance.
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={100} className="flex flex-col bg-surface/50 border border-edge rounded-[22px] p-6 sm:p-8">
        {services.map((s, i) => (
          <AccordionItem key={i} service={s} />
        ))}
      </FadeUp>
    </section>
  );
}


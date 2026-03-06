import type { Service } from "@/lib/types";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { FadeUp } from "@/components/ui/FadeUp";

export function Services({ services }: { services: Service[] }) {
  return (
    <section
      id="services"
      className="py-24 px-4 md:px-8 max-w-[1000px] mx-auto border-t border-edge-subtle"
    >
      <FadeUp delay={0}>
        <div className="flex items-center gap-4 mb-14">
          <div className="w-[10px] h-[10px] rounded-full bg-primary" />
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            My Expertise
          </h2>
        </div>
      </FadeUp>

      <FadeUp delay={100} className="flex flex-col">
        {services.map((s, i) => (
          <AccordionItem key={i} service={s} />
        ))}
      </FadeUp>
    </section>
  );
}

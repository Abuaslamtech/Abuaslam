"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { Service } from "@/lib/types";

export function AccordionItem({ service }: { service: Service }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-edge-subtle first:border-t">
      <button
        className="w-full bg-transparent border-none cursor-pointer flex items-center gap-4 py-6 text-left transition-colors duration-150 group"
        onClick={() => setOpen(!open)}
      >
        <div className="w-11 h-11 rounded-xl shrink-0 bg-surface border border-edge flex items-center justify-center text-[20px]">
          {service.icon}
        </div>
        <span className="font-display text-[18px] font-semibold text-ink flex-1 transition-colors duration-150 group-hover:text-primary">
          {service.title}
        </span>
        <div className="w-7 h-7 rounded-full bg-surface border border-edge flex items-center justify-center shrink-0 text-muted transition-colors duration-150 group-hover:border-primary group-hover:text-primary">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? "max-h-[200px]" : "max-h-0"}`}
      >
        <p className="pb-6 pl-[60px] text-[14px] text-subtle leading-relaxed">
          {service.desc}
        </p>
      </div>
    </div>
  );
}

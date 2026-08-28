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
        <div className="w-11 h-11 rounded-xl shrink-0 bg-surface border border-edge flex items-center justify-center text-[20px] shadow-sm group-hover:border-accent/50 group-hover:bg-surface-alt transition-colors">
          {service.icon}
        </div>
        <span className="text-[17px] font-bold text-white flex-1 transition-colors duration-150 group-hover:text-accent">
          {service.title}
        </span>
        <div className="w-7 h-7 rounded-full bg-surface border border-edge flex items-center justify-center shrink-0 text-muted transition-colors duration-150 group-hover:border-accent group-hover:text-accent">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? "max-h-[240px]" : "max-h-0"}`}
      >
        <p className="pb-6 pl-[60px] text-[14px] text-muted leading-relaxed">
          {service.desc}
        </p>
      </div>
    </div>
  );
}


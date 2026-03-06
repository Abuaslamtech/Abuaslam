import type { StackItem } from "@/lib/types";
import { STACK_ICONS } from "@/lib/icons";

export function StackRow({ item }: { item: StackItem }) {
  return (
    <div className="bg-surface border border-edge rounded-[14px] p-4 px-5 flex items-center gap-4 transition-colors duration-200 hover:border-primary group">
      <div className="w-[42px] h-[42px] rounded-[10px] shrink-0 bg-primary/10 border border-primary/20 flex items-center justify-center text-[20px] text-primary transition-transform duration-200 group-hover:scale-110">
        {STACK_ICONS[item.icon]}
      </div>
      <div className="flex-1">
        <div className="text-[15px] font-semibold text-ink mb-0.5">
          {item.name}
        </div>
        <div className="text-[13px] text-muted">{item.desc}</div>
      </div>
      <span className="font-mono text-[11px] tracking-wider bg-surface-alt border border-edge rounded-full py-1 px-3 text-muted shrink-0 transition-colors duration-200 group-hover:border-primary/50 group-hover:text-ink">
        Since {item.since}
      </span>
    </div>
  );
}

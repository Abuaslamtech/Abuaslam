import type { StackItem } from "@/lib/types";
import { STACK_ICONS } from "@/lib/icons";

export function StackRow({ item }: { item: StackItem }) {
  return (
    <div className="bg-surface border border-edge rounded-[16px] p-4 px-5 flex items-center gap-4 transition-all duration-200 hover:border-accent/50 hover:-translate-y-0.5 group shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
      <div className="w-[44px] h-[44px] rounded-[12px] shrink-0 bg-accent/10 border border-accent/25 flex items-center justify-center text-[22px] text-accent transition-transform duration-200 group-hover:scale-110 shadow-[0_0_12px_rgba(56,189,248,0.15)]">
        {STACK_ICONS[item.icon] || <span className="text-sm">⚡</span>}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[15px] font-bold text-white mb-0.5 group-hover:text-accent transition-colors flex items-center gap-2">
          <span>{item.name}</span>
          {item.category && (
            <span className="font-mono text-[9px] uppercase tracking-wider text-muted bg-surface-alt px-1.5 py-0.5 rounded border border-edge">
              {item.category}
            </span>
          )}
        </div>
        <div className="text-[12.5px] text-muted truncate">{item.desc}</div>
      </div>
      <span className="font-mono text-[10.5px] tracking-wider bg-surface-alt border border-edge rounded-full py-1 px-3 text-muted shrink-0 transition-colors duration-200 group-hover:border-accent/40 group-hover:text-white">
        Since {item.since}
      </span>
    </div>
  );
}


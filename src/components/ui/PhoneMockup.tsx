import Image from "next/image";

export function PhoneMockup({ pic, name }: { pic: string; name: string }) {
  return (
    <div className="pt-6 bg-surface-alt border-b border-edge flex justify-center">
      <div className="relative w-[200px] h-[400px] bg-[#0A0A0A] rounded-[36px] border-2 border-[#333] shadow-[0_0_0_1px_#1a1a1a,inset_0_0_0_1px_#222,0_24px_64px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col">
        {/* Dynamic island */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[80px] h-[26px] bg-[#0A0A0A] rounded-[20px] z-[3] shadow-[0_0_0_1px_#222] border border-[#222]" />

        {/* iOS status bar */}
        <div className="h-[46px] bg-transparent flex items-end justify-between px-3.5 pb-1.5 text-[9px] font-bold text-white/70 font-body tracking-wider relative z-[2]">
          <span>9:41</span>
          <div className="flex items-center gap-[3px]">
            <div className="w-[3px] h-[4px] rounded-[1px] bg-white/70" />
            <div className="w-[3px] h-[6px] rounded-[1px] bg-white/70" />
            <div className="w-[3px] h-[9px] rounded-[1px] bg-white/70" />
            <div className="w-[3px] h-[11px] rounded-[1px] bg-white/70" />
            <span className="ml-1 text-[9px]">▲ 100%</span>
          </div>
        </div>

        {/* Phone screen area */}
        <div className="relative flex-1 min-h-0 overflow-hidden bg-surface-alt">
          <Image
            src={pic}
            alt={name}
            fill
            style={{ objectFit: "cover" }}
            sizes="200px"
          />
        </div>

        {/* Home indicator */}
        <div className="h-[28px] bg-transparent flex items-center justify-center">
          <div className="w-[80px] h-[4px] rounded-full bg-white/25" />
        </div>
      </div>
    </div>
  );
}

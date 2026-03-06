import Image from "next/image";

export function BrowserMockup({
  pic,
  name,
  url,
}: {
  pic: string;
  name: string;
  url: string;
}) {
  return (
    <>
      <div className="bg-surface-alt border-b border-edge py-2.5 px-3.5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 h-[22px] bg-white/5 border border-edge rounded-md flex items-center px-2.5 font-mono text-[10px] text-muted tracking-wider">
          {url.replace("https://", "")}
        </div>
      </div>
      <div className="relative aspect-video overflow-hidden bg-surface-alt">
        <Image
          src={pic}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width:768px)100vw,860px"
        />
      </div>
    </>
  );
}

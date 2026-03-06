import Image from "next/image";
import {
  ArrowRight,
  Download,
  Github,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";

export function Hero() {
  return (
    <section
      id="home"
      className=" min-h-screen pt-24 pb-16 px-4 md:px-8 justify-self-end max-w-[1280px] mx-auto flex flex-col justify-center items-center relative"
    >
      <div className="flex flex-col xl:flex-row gap-6 items-stretch w-full mb-6">
        <FadeUp
          delay={0}
          className="w-full xl:w-[320px] shrink-0 flex flex-col gap-6"
        >
          <div className="bg-surface border border-edge rounded-[24px] p-6 flex flex-col items-center justify-center text-center h-full relative overflow-hidden group">
            <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-primary mb-5 shadow-[0_0_20px_rgba(217,119,87,0.2)]">
              <Image
                src="/assets/abuaslam.png"
                alt="Abdullahi"
                fill
                style={{ objectFit: "cover" }}
                sizes="120px"
                priority
              />
            </div>
            <h2 className="font-display text-[26px] font-bold text-ink mb-1">
              Abdullahi
            </h2>
            <p className="font-mono text-[12px] text-primary tracking-[0.1em] uppercase">
              Full Stack Developer
            </p>
            <div className="absolute top-4 right-4 bg-green-500/10 border border-green-500/20 text-green-500 font-mono text-[9px] uppercase tracking-wider py-1 px-2.5 rounded-full flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 pulse-green" />
              Available
            </div>
          </div>
          <div className="flex gap-4">
            {[
              {
                icon: <Github size={20} />,
                url: "https://github.com/Abuaslamtech",
              },
              {
                icon: <Twitter size={20} />,
                url: "https://x.com/Abuaslam_tech",
              },
              {
                icon: <Linkedin size={20} />,
                url: "https://linkedin.com/in/abdullahi-ismail-b17b2b291",
              },
              {
                icon: <Facebook size={20} />,
                url: "https://facebook.com/abuaslamtech",
              },
            ].map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-surface border border-edge rounded-[16px] py-4 flex justify-center text-muted hover:text-primary hover:border-primary transition-colors duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </FadeUp>

        <FadeUp
          delay={100}
          className="flex-1 bg-surface border border-edge rounded-[24px] p-8 md:p-12 xl:p-16 flex flex-col justify-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,_rgba(217,119,87,0.05),_transparent_50%)]" />
          <h1 className="font-display text-5xl md:text-7xl lg:text-[84px] leading-[1.05] tracking-tight font-semibold text-ink max-w-[800px] mb-8 relative z-10 ">
            Engineering{" "}
            <span className="text-muted italic font-normal">digital</span>{" "}
            experiences.
          </h1>
          <p className="text-[18px] md:text-[20px] text-muted max-w-[540px] leading-relaxed mb-10 relative z-10 font-normal">
            I build fast, scalable, and responsive web & mobile applications
            specializing in the MERN stack and React Native.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 relative z-10">
            <a
              href="#projects"
              className="bg-primary text-[#0C0A08] px-8 py-3.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors hover:bg-[#E38565] w-full"
            >
              View Work <ArrowRight size={16} />
            </a>
            <a
              href="mailto:abdullahiismail202@gmail.com"
              className="bg-transparent border border-edge text-ink px-8 py-3.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors hover:border-primary hover:text-primary w-full"
            >
              Hire Me <Download size={16} />
            </a>
          </div>
        </FadeUp>
      </div>

      <FadeUp
        delay={200}
        className="flex flex-wrap xl:flex-nowrap gap-6 w-full"
      >
        {[
          { label: "EXPERIENCE", val: "3+ Years" },
          { label: "PROJECTS", val: "15+ Shipped" },
          { label: "CLIENTS", val: "10+ Worldwide" },
        ].map((s, i) => (
          <div
            key={i}
            className="flex-1 bg-surface border border-edge rounded-[16px] p-6 flex flex-col gap-2"
          >
            <span className="font-mono text-[10px] text-muted tracking-widest">
              {s.label}
            </span>
            <span className="font-display text-4xl text-ink">{s.val}</span>
          </div>
        ))}
      </FadeUp>
    </section>
  );
}

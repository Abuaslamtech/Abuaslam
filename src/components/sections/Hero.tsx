import Image from "next/image";
import {
  ArrowRight,
  Download,
  Github,
  Twitter,
  Linkedin,
  Smartphone,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { FaGooglePlay } from "react-icons/fa";
import { FadeUp } from "@/components/ui/FadeUp";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-16 px-4 md:px-8 max-w-[1240px] mx-auto flex flex-col justify-center items-center relative"
    >
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="flex flex-col xl:flex-row gap-6 items-stretch w-full mb-6">
        {/* Left Profile Card */}
        <FadeUp
          delay={0}
          className="w-full xl:w-[320px] shrink-0 flex flex-col gap-6"
        >
          <div className="bg-surface border border-edge rounded-[24px] p-6 flex flex-col items-center justify-center text-center h-full relative overflow-hidden group shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
            <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

            <div className="relative w-[124px] h-[124px] rounded-full overflow-hidden border-2 border-accent mb-5 shadow-[0_0_24px_rgba(56,189,248,0.25)]">
              <Image
                src="/assets/abuaslam.png"
                alt="Abdullahi Ismail"
                fill
                style={{ objectFit: "cover" }}
                sizes="124px"
                priority
              />
            </div>
            
            <h2 className="text-[24px] font-bold text-ink tracking-tight mb-1">
              Abdullahi Ismail
            </h2>
            <p className="font-mono text-[11px] text-accent tracking-widest uppercase font-semibold">
              Founder @ AtlabX Technologies
            </p>
            <p className="text-[13px] text-muted mt-1">
              Mobile & Fintech Systems Engineer
            </p>

            <div className="mt-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px] uppercase tracking-wider py-1 px-3 rounded-full flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-emerald" />
              Available for Projects
            </div>
          </div>

          <div className="flex gap-3">
            {[
              {
                icon: <Github size={18} />,
                url: "https://github.com/Abuaslamtech",
                label: "GitHub",
              },
              {
                icon: <Twitter size={18} />,
                url: "https://x.com/Abuaslam_tech",
                label: "Twitter",
              },
              {
                icon: <Linkedin size={18} />,
                url: "https://linkedin.com/in/abdullahi-ismail-b17b2b291",
                label: "LinkedIn",
              },
              {
                icon: <FaGooglePlay size={16} />,
                url: "https://play.google.com/store/apps/details?id=com.scath.app",
                label: "Play Store",
              },
            ].map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex-1 bg-surface border border-edge rounded-[14px] py-3.5 flex justify-center items-center text-muted hover:text-accent hover:border-accent/60 hover:bg-surface-alt transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </FadeUp>

        {/* Right Main Hero Banner */}
        <FadeUp
          delay={100}
          className="flex-1 bg-surface border border-edge rounded-[24px] p-8 md:p-12 xl:p-14 flex flex-col justify-center relative overflow-hidden group shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
        >
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          {/* Pre-badge */}
          <div className="flex items-center gap-2 mb-4 relative z-10">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs font-semibold tracking-widest uppercase text-accent">
              Zaria, Nigeria · Production Mobile & Cloud
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-[850px] leading-[1.12] mb-6 relative z-10">
            Engineering Production Mobile &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-primary">
              Fintech Systems
            </span>
          </h1>

          <p className="text-[16px] md:text-[18px] text-muted max-w-[620px] leading-relaxed mb-8 relative z-10 font-normal">
            I architect and ship full-stack applications specializing in{" "}
            <strong className="text-ink font-semibold">React Native (Expo)</strong>,{" "}
            <strong className="text-ink font-semibold">NestJS</strong>,{" "}
            <strong className="text-ink font-semibold">PostgreSQL & MySQL</strong>, and{" "}
            <strong className="text-ink font-semibold">DigitalOcean Cloud Infrastructure</strong>. Lead engineer on client fintech apps and founder of AtlabX Technologies.
          </p>

          <div className="flex flex-wrap items-center gap-4 relative z-10">
            <a
              href="#projects"
              className="bg-primary hover:bg-primary-hover text-white px-7 py-3.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2.5 transition-all shadow-[0_0_24px_rgba(37,99,235,0.4)]"
            >
              Explore Featured Work <ArrowRight size={15} />
            </a>
            <a
              href="#contact"
              className="bg-surface-alt border border-edge text-ink hover:text-accent hover:border-accent/60 px-7 py-3.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all"
            >
              Discuss a Project / Hire <ArrowRight size={15} />
            </a>
          </div>
        </FadeUp>
      </div>

      {/* Stat Bar */}
      <FadeUp
        delay={200}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full"
      >
        {[
          { label: "PRODUCTION MOBILE", val: "Android & iOS", sub: "React Native, Expo & Kotlin" },
          { label: "BACKEND ARCHITECTURE", val: "NestJS APIs", sub: "Modular microservices & auth" },
          { label: "RELATIONAL DATABASES", val: "PostgreSQL & MySQL", sub: "TypeORM schema & migrations" },
          { label: "COMPANY", val: "AtlabX Technologies", sub: "Software & fintech solutions" },
        ].map((s, i) => (
          <div
            key={i}
            className="bg-surface border border-edge rounded-[18px] p-5 flex flex-col gap-1.5 transition-all hover:border-accent/50 group"
          >
            <span className="font-mono text-[10px] text-accent tracking-widest uppercase font-semibold">
              {s.label}
            </span>
            <span className="text-xl font-bold text-white tracking-tight">{s.val}</span>
            <span className="text-[12px] text-muted">{s.sub}</span>
          </div>
        ))}
      </FadeUp>
    </section>
  );
}



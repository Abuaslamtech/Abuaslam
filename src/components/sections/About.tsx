import { ArrowUpRight, Briefcase, GraduationCap, MapPin, Globe, Award } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";

export function About() {
  const experiences = [
    {
      period: "2025 – Present",
      role: "Founder & Full-Stack Mobile Developer",
      company: "AtlabX Technologies",
      desc: "Architect and ship client systems (Scath Fintech Super App) and own products (BillBolt, Eivia). Manage full lifecycle across React Native/Kotlin on mobile, NestJS backends, PostgreSQL/MySQL data layers, and DigitalOcean infrastructure.",
      highlight: "Shipped Scath to Google Play & TestFlight",
    },
    {
      period: "2025 – 2026",
      role: "Mobile Developer",
      company: "Aeko (Web3 Startup)",
      desc: "Built scalable mobile interfaces and features using Expo React Native for Android and iOS, integrating decentralized services and responsive UI flows.",
      highlight: "Web3 mobile social platform",
    },
    {
      period: "Sep 2024 – Dec 2024",
      role: "Frontend Development Intern",
      company: "QA School",
      desc: "Contributed to core service marketplace frontend. Optimized bundle size and asset loading, achieving a 40% reduction in initial load time.",
      highlight: "40% performance optimization",
    },
  ];

  const credentials = [
    {
      year: "2024",
      title: "BSc. Computer Science and IT",
      issuer: "Federal University Dutsin-Ma, Katsina State",
      type: "Degree",
    },
    {
      year: "2023",
      title: "Meta Front-End Developer Certificate",
      issuer: "Meta Elevate",
      type: "Certification",
    },
    {
      year: "2023",
      title: "Responsive Web Design & Algorithms",
      issuer: "FreeCodeCamp",
      type: "Certification",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-[1100px] mx-auto border-t border-edge-subtle">
      <FadeUp delay={0}>
        <div className="flex flex-col gap-2 mb-14">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs font-semibold tracking-widest uppercase text-accent">
              Experience & Background
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Proven Track Record & Experience
          </h2>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
        {/* Left Bio Info */}
        <FadeUp delay={100} className="flex flex-col gap-5">
          <div className="bg-surface border border-edge rounded-[20px] p-6 flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Engineering Philosophy
            </h3>
            <p className="text-[14px] leading-relaxed text-muted">
              I specialize in bridging the gap between rigorous systems architecture and slick mobile user experience. From CBN-compliant KYC and banking integrations to high-performance database queries and native mobile animations.
            </p>

            <div className="pt-2 flex flex-col gap-2.5">
              <div className="flex items-center gap-2.5 text-[13px] text-ink font-medium">
                <MapPin size={15} className="text-accent shrink-0" />
                <span>Zaria & Kaduna State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2.5 text-[13px] text-ink font-medium">
                <Globe size={15} className="text-accent shrink-0" />
                <span>Available for Global Remote Work</span>
              </div>
              <div className="flex items-center gap-2.5 text-[13px] text-ink font-medium">
                <Briefcase size={15} className="text-accent shrink-0" />
                <span>Founder @ AtlabX Technologies</span>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Right Work History & Education */}
        <div className="flex flex-col gap-10">
          {/* Work Experience */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Briefcase size={18} className="text-accent" /> Professional Experience
            </h3>

            <div className="flex flex-col gap-6">
              {experiences.map((exp, i) => (
                <FadeUp
                  key={i}
                  delay={200 + i * 80}
                  className="bg-surface border border-edge rounded-[18px] p-6 hover:border-accent/40 transition-all duration-200"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        {exp.role}
                      </h4>
                      <span className="text-[14px] font-semibold text-accent">
                        {exp.company}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] tracking-wider text-muted bg-surface-alt border border-edge px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-[13px] text-muted leading-relaxed mt-2">
                    {exp.desc}
                  </p>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div className="flex flex-col gap-4 pt-4 border-t border-edge-subtle">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <GraduationCap size={18} className="text-accent" /> Education & Credentials
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {credentials.map((ed, i) => (
                <div
                  key={i}
                  className="bg-surface border border-edge rounded-[16px] p-4 flex flex-col justify-between gap-2"
                >
                  <div>
                    <span className="font-mono text-[10px] text-accent tracking-widest uppercase font-semibold">
                      {ed.year} · {ed.type}
                    </span>
                    <h5 className="text-[14px] font-bold text-white mt-1">
                      {ed.title}
                    </h5>
                  </div>
                  <span className="text-[12px] text-muted">{ed.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


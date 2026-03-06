import { ArrowUpRight } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";

export function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-[1000px] mx-auto">
      <FadeUp delay={0}>
        <div className="flex items-center gap-4 mb-16">
          <div className="w-[10px] h-[10px] rounded-full bg-primary" />
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Background
          </h2>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
        <FadeUp delay={100} className="flex flex-col gap-4">
          <div className="text-[13px] text-muted font-mono tracking-wider uppercase mb-2">
            Profile
          </div>
          <div className="inline-flex items-center gap-2 bg-surface border border-edge px-4 py-2 rounded-full text-[14px] text-ink w-fit">
            📍 Based in Kaduna, Nigeria
          </div>
          <div className="inline-flex items-center gap-2 bg-surface border border-edge px-4 py-2 rounded-full text-[14px] text-ink w-fit">
            🌍 Open to Remote Work
          </div>
          <div className="inline-flex items-center gap-2 bg-surface border border-edge px-4 py-2 rounded-full text-[14px] text-ink w-fit">
            🎓 BSc. Comp. Science & IT
          </div>
        </FadeUp>

        <div className="flex flex-col gap-8">
          <FadeUp delay={200}>
            <p className="text-[18px] md:text-[22px] leading-relaxed text-muted font-display italic">
              "I bridge the gap between complex logic and beautiful design. My
              focus is on creating scalable, user-centric applications that
              solve real problems."
            </p>
          </FadeUp>

          <FadeUp delay={300}>
            <div className="w-full h-px bg-edge-subtle my-2" />
          </FadeUp>

          <div className="flex flex-col gap-8">
            {[
              {
                year: "2024",
                degree: "BSc. Computer Science and IT",
                school: "Federal University Dutsin-ma, Katsina State",
                link: "",
              },
              {
                year: "2023",
                degree: "Meta Front-End Developer Certificate",
                school: "Meta Elevate",
                link: "#",
                certAction: "View certificate",
              },
              {
                year: "2023",
                degree: "HTML, CSS, and JavaScript for Web Developers",
                school: "Johns Hopkins University",
                link: "#",
                certAction: "View certificate",
              },
              {
                year: "2023",
                degree: "Responsive Web Design, DS & Algorithms, React",
                school: "FreeCodeCamp",
                link: "#",
                certAction: "View certificate",
              },
            ].map((ed, i) => (
              <FadeUp
                key={i}
                delay={400 + i * 100}
                className="flex items-start gap-6 group"
              >
                <div className="font-mono text-[13px] text-primary pt-1 shrink-0 w-[100px]">
                  {ed.year}
                </div>
                <div>
                  <div className="text-[18px] font-semibold text-ink mb-1">
                    {ed.degree}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[15px] text-muted">{ed.school}</span>
                    {ed.link && ed.certAction && (
                      <a
                        href={ed.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[13px] text-primary no-underline transition-colors hover:text-primary/80 w-fit"
                      >
                        {ed.certAction} <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

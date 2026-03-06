"use client";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 md:px-8 max-w-[1000px] mx-auto border-t border-edge-subtle"
    >
      <FadeUp delay={0}>
        <div className="flex items-center gap-4 mb-14">
          <div className="w-[10px] h-[10px] rounded-full bg-primary" />
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Let's Connect
          </h2>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <FadeUp delay={100} className="flex flex-col gap-8">
          <div>
            <h3 className="font-display text-2xl font-semibold text-ink mb-4">
              Got a project in mind?
            </h3>
            <p className="text-muted leading-relaxed">
              I'm currently available for freelance work and full-time
              opportunities. Whether you have a question or just want to say hi,
              I'll try my best to get back to you!
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:abdullahiismail202@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-edge transition-colors hover:border-primary group no-underline"
            >
              <div className="w-10 h-10 rounded-lg bg-surface-alt border border-edge flex flex-shrink-0 items-center justify-center text-muted group-hover:text-primary transition-colors">
                <Mail size={18} />
              </div>
              <div>
                <div className="text-[12px] font-mono tracking-wider text-subtle mb-1 uppercase">
                  Email
                </div>
                <div className="text-ink font-medium">
                  abdullahiismail202@gmail.com
                </div>
              </div>
            </a>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-edge">
              <div className="w-10 h-10 rounded-lg bg-surface-alt border border-edge flex flex-shrink-0 items-center justify-center text-muted">
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-[12px] font-mono tracking-wider text-subtle mb-1 uppercase">
                  Location
                </div>
                <div className="text-ink font-medium">Kano, Nigeria</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-edge">
              <div className="w-10 h-10 rounded-lg bg-surface-alt border border-edge flex flex-shrink-0 items-center justify-center text-muted">
                <MessageSquare size={18} />
              </div>
              <div>
                <div className="text-[12px] font-mono tracking-wider text-subtle mb-1 uppercase">
                  Socials
                </div>
                <div className="flex gap-4 mt-1">
                  <a
                    href="https://github.com/Abuaslamtech"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted text-[14px] no-underline hover:text-primary transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://x.com/Abuaslam_tech"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted text-[14px] no-underline hover:text-primary transition-colors"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://linkedin.com/in/abdullahi-ismail-b17b2b291"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted text-[14px] no-underline hover:text-primary transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={200}>
          <form
            className="bg-surface border border-edge rounded-[24px] p-6 flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-[13px] font-mono tracking-wider text-muted uppercase"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="bg-surface-alt border border-edge rounded-xl px-4 py-3.5 text-ink outline-none transition-colors focus:border-primary placeholder:text-subtle font-body"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-[13px] font-mono tracking-wider text-muted uppercase"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                className="bg-surface-alt border border-edge rounded-xl px-4 py-3.5 text-ink outline-none transition-colors focus:border-primary placeholder:text-subtle font-body"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-[13px] font-mono tracking-wider text-muted uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Hello Abdullahi..."
                className="bg-surface-alt border border-edge rounded-xl px-4 py-3.5 text-ink outline-none transition-colors focus:border-primary min-h-[120px] resize-y placeholder:text-subtle font-body"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-2 bg-primary text-[#0C0A08] font-mono text-[13px] tracking-wider uppercase font-semibold py-4 rounded-xl flex items-center justify-center gap-2 border-none cursor-pointer transition-colors hover:bg-[#E38565]"
            >
              Send Message <Send size={16} />
            </button>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}

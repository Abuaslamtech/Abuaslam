"use client";
import { Mail, MapPin, Send, MessageSquare, Phone, Globe } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 md:px-8 max-w-[1100px] mx-auto border-t border-edge-subtle"
    >
      <FadeUp delay={0}>
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs font-semibold tracking-widest uppercase text-accent">
              Direct Contact
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Let's Build Something High-Impact
          </h2>
          <p className="text-[15px] text-muted max-w-xl">
            Available for production mobile app architecture, fintech integrations, backend engineering, or technical advisory under AtlabX.
          </p>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <FadeUp delay={100} className="flex flex-col gap-6">
          <div className="bg-surface border border-edge rounded-[22px] p-6 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-white mb-1">
              Contact Channels
            </h3>
            <p className="text-muted text-[14px] leading-relaxed">
              Whether you need to ship a React Native mobile application to Google Play, architect a NestJS + PostgreSQL system, or integrate banking APIs, reach out directly:
            </p>

            <div className="flex flex-col gap-3 pt-2">
              <a
                href="mailto:abdullahabuaslam@gmail.com"
                className="flex items-center gap-4 p-3.5 rounded-xl bg-surface-alt border border-edge transition-all hover:border-accent/60 group no-underline"
              >
                <div className="w-10 h-10 rounded-lg bg-surface border border-edge flex flex-shrink-0 items-center justify-center text-muted group-hover:text-accent transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono tracking-wider text-muted uppercase">
                    Primary Email
                  </div>
                  <div className="text-white text-[14px] font-medium group-hover:text-accent transition-colors">
                    abdullahabuaslam@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+2347035974746"
                className="flex items-center gap-4 p-3.5 rounded-xl bg-surface-alt border border-edge transition-all hover:border-accent/60 group no-underline"
              >
                <div className="w-10 h-10 rounded-lg bg-surface border border-edge flex flex-shrink-0 items-center justify-center text-muted group-hover:text-accent transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono tracking-wider text-muted uppercase">
                    Direct Phone / WhatsApp
                  </div>
                  <div className="text-white text-[14px] font-medium group-hover:text-accent transition-colors">
                    +234 703 597 4746
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-surface-alt border border-edge">
                <div className="w-10 h-10 rounded-lg bg-surface border border-edge flex flex-shrink-0 items-center justify-center text-muted">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono tracking-wider text-muted uppercase">
                    Location
                  </div>
                  <div className="text-white text-[14px] font-medium">
                    Zaria, Kaduna State, Nigeria
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-surface-alt border border-edge">
                <div className="w-10 h-10 rounded-lg bg-surface border border-edge flex flex-shrink-0 items-center justify-center text-muted">
                  <Globe size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono tracking-wider text-muted uppercase">
                    AtlabX Technologies
                  </div>
                  <div className="text-white text-[14px] font-medium">
                    <a href="https://atlabx.com" target="_blank" rel="noreferrer" className="text-accent hover:underline">
                      atlabx.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={200}>
          <form
            className="bg-surface border border-edge rounded-[22px] p-6 sm:p-8 flex flex-col gap-4 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-xl font-bold text-white mb-1">
              Send a Direct Message
            </h3>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-[12px] font-mono tracking-wider text-muted uppercase"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Alex Morgan"
                className="bg-surface-alt border border-edge rounded-xl px-4 py-3 text-white outline-none transition-colors focus:border-accent placeholder:text-subtle font-body text-sm"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-[12px] font-mono tracking-wider text-muted uppercase"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="alex@company.com"
                className="bg-surface-alt border border-edge rounded-xl px-4 py-3 text-white outline-none transition-colors focus:border-accent placeholder:text-subtle font-body text-sm"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-[12px] font-mono tracking-wider text-muted uppercase"
              >
                Project Details
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell me about your mobile app, backend architecture, or timeline..."
                className="bg-surface-alt border border-edge rounded-xl px-4 py-3 text-white outline-none transition-colors focus:border-accent min-h-[110px] resize-y placeholder:text-subtle font-body text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-2 bg-primary hover:bg-primary-hover text-white font-mono text-[13px] tracking-wider uppercase font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 border-none cursor-pointer transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              Send Message <Send size={15} />
            </button>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}


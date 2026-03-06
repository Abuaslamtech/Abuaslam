"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { Testimonial } from "@/lib/types";
import { FadeUp } from "@/components/ui/FadeUp";

export function Testimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 px-4 md:px-8 max-w-[1000px] mx-auto border-t border-edge-subtle">
      <FadeUp delay={0}>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-[10px] h-[10px] rounded-full bg-primary" />
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Client Feedback
          </h2>
        </div>
      </FadeUp>
      <FadeUp delay={100}>
        <p className="font-mono text-[13px] text-muted tracking-wide mb-14 uppercase">
          Don't just take my word for it
        </p>
      </FadeUp>

      <FadeUp
        delay={200}
        className="relative bg-surface border border-edge rounded-[24px] p-8 md:p-12 overflow-hidden mx-auto max-w-[860px]"
      >
        <div className="absolute top-8 right-8 text-[#2A2520] font-display text-9xl leading-none select-none opacity-50">
          &ldquo;
        </div>
        <div className="relative z-10 min-h-[160px] flex flex-col justify-center">
          <p className="text-[18px] md:text-[24px] font-display leading-[1.6] text-ink mb-8 italic">
            "{testimonials[currentIndex]?.quote || ""}"
          </p>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-ink text-[16px] mb-1">
                {testimonials[currentIndex]?.name || ""}
              </div>
              <div className="text-[13px] text-muted">
                {testimonials[currentIndex]?.role || ""}
              </div>
            </div>
            <div className="flex gap-1 text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 border-none cursor-pointer ${i === currentIndex ? "w-8 bg-primary" : "bg-edge hover:bg-muted"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        {testimonials.length > 1 && (
          <>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface-alt border border-edge hidden md:flex items-center justify-center text-muted cursor-pointer hover:text-primary hover:border-primary transition-colors"
              onClick={() =>
                setCurrentIndex(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length,
                )
              }
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface-alt border border-edge hidden md:flex items-center justify-center text-muted cursor-pointer hover:text-primary hover:border-primary transition-colors"
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % testimonials.length)
              }
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </FadeUp>
    </section>
  );
}

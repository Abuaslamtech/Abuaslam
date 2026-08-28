"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
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
    <section className="py-24 px-4 md:px-8 max-w-[1100px] mx-auto border-t border-edge-subtle">
      <FadeUp delay={0}>
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs font-semibold tracking-widest uppercase text-accent">
              Endorsements & Feedback
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Client & Collaborator Words
          </h2>
        </div>
      </FadeUp>

      <FadeUp
        delay={200}
        className="relative bg-surface border border-edge rounded-[24px] p-8 md:p-12 overflow-hidden mx-auto max-w-[860px] shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
      >
        <div className="absolute top-6 right-8 text-accent/10 select-none">
          <Quote size={80} />
        </div>
        <div className="relative z-10 min-h-[160px] flex flex-col justify-center">
          <p className="text-[17px] md:text-[21px] leading-[1.6] text-white/95 mb-8 font-normal">
            "{testimonials[currentIndex]?.quote || ""}"
          </p>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-bold text-white text-[16px] mb-0.5">
                {testimonials[currentIndex]?.name || ""}
              </div>
              <div className="text-[13px] text-accent font-medium">
                {testimonials[currentIndex]?.role || ""}
              </div>
            </div>
            <div className="flex gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-2.5 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 border-none cursor-pointer ${
                i === currentIndex ? "w-8 bg-accent" : "w-2 bg-edge hover:bg-muted"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        {testimonials.length > 1 && (
          <>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface-alt border border-edge hidden md:flex items-center justify-center text-muted cursor-pointer hover:text-accent hover:border-accent transition-colors"
              onClick={() =>
                setCurrentIndex(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length,
                )
              }
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface-alt border border-edge hidden md:flex items-center justify-center text-muted cursor-pointer hover:text-accent hover:border-accent transition-colors"
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % testimonials.length)
              }
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </FadeUp>
    </section>
  );
}


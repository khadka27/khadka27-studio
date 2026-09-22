"use client";

import { useEffect, useRef } from "react";
import { testimonials } from "@/data/portfolio";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".testimonial-card");
      if (cards) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              cards,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" }
            );
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="bg-[#050505] py-[clamp(80px,12vw,140px)] text-[#F1F1EB] relative overflow-hidden border-t border-white/[0.06]"
    >
      <div className="grain" />
      <div className="max-w-[1340px] mx-auto px-[clamp(20px,4vw,60px)] relative z-10">
        {/* Section Header */}
        <div className="mb-[clamp(48px,6vw,80px)] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-white/40 mb-3 font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B2020]" />
              Endorsements/
            </p>
            <h2
              className="font-display font-bold text-[#F1F1EB] leading-none"
              style={{ fontSize: "clamp(2.2rem,5.5vw,4.5rem)", letterSpacing: "-0.02em" }}
            >
              WHAT COLLABORATORS{" "}
              <span className="font-serif italic font-normal text-[#8B2020] block sm:inline">
                Say
              </span>
            </h2>
          </div>
          <p className="font-body text-[14px] text-[#8D8D87] max-w-[360px] leading-relaxed">
            Feedback from academic leaders, marketing directors, and creative collaborators.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="testimonial-card border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] p-8 sm:p-10 rounded-2xl flex flex-col justify-between transition-all duration-400 group"
            >
              <div>
                {/* Quotation mark */}
                <span className="font-serif text-[42px] leading-none text-[#8B2020]/60 block mb-4 select-none">
                  &ldquo;
                </span>
                <p className="font-body text-[clamp(14px,1.2vw,16px)] text-[#F1F1EB]/90 leading-[1.8] italic mb-8">
                  {t.content}
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/[0.08]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/20 grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div>
                  <h4 className="font-display font-bold text-[15px] text-[#F1F1EB] leading-tight">
                    {t.name}
                  </h4>
                  <p className="font-body text-[12px] text-[#8D8D87] mt-0.5">
                    {t.role} · <span className="text-white/40">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

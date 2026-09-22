"use client";

import { useEffect, useRef, useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const serviceVisuals = [
  {
    id: "01",
    tag: "MULTI-FORMAT PRODUCTION & STORYTELLING",
    title: "Content Creation",
    description: "End-to-end production across text, image, and video tailored for high engagement and platform resonance.",
    gradient: "from-[#1a1c18] via-[#121411] to-[#0a0c09]",
    badge: "01 / CONTENT",
  },
  {
    id: "02",
    tag: "SHORT-FORM PACING & MOTION DESIGN",
    title: "Video Editing",
    description: "Viral short-form storytelling using Premiere Pro and CapCut for TikTok, Reels, and YouTube Shorts.",
    gradient: "from-[#17191d] via-[#101216] to-[#090b0d]",
    badge: "02 / VIDEO",
  },
  {
    id: "03",
    tag: "DATA ANALYTICS & AUDIENCE TARGETING",
    title: "Social Media Strategy",
    description: "Analytics-backed growth strategies powered by Meta Business Suite, Instagram Insights, and Google Analytics.",
    gradient: "from-[#1d1719] via-[#141012] to-[#0d090a]",
    badge: "03 / STRATEGY",
  },
  {
    id: "04",
    tag: "PAID CAMPAIGNS & A/B TESTING",
    title: "Paid Advertising",
    description: "High-ROI Facebook and Instagram ad campaigns optimized through strategic audience segmentation and testing.",
    gradient: "from-[#161a1d] via-[#0f1316] to-[#080b0d]",
    badge: "04 / PAID ADS",
  },
];

export default function WhatIDo() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isManual = useRef(false);
  const manualTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      // Header entrance
      gsap.fromTo(
        ".what-header",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Match media for responsive pinning
      const mm = gsap.matchMedia();

      // Desktop: pin and auto-cycle through services smoothly
      mm.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "+=1400",
          pin: true,
          scrub: 0.4,
          anticipatePin: 1,
          onUpdate: (self) => {
            setScrollProgress(self.progress);

            if (isManual.current) return;

            const p = self.progress;
            const total = portfolioData.services.length;
            // 0 -> 0.33 => 0, 0.33 -> 0.66 => 1, 0.66 -> 1.0 => 2
            const target = Math.min(Math.floor(p * total), total - 1);
            setOpenIndex(target);
          },
        });
      });

      // Mobile: naturally trigger as user scrolls down without pin locking
      mm.add("(max-width: 767px)", () => {
        document.querySelectorAll(".service-row").forEach((row, i) => {
          ScrollTrigger.create({
            trigger: row,
            start: "top 70%",
            end: "bottom 30%",
            onEnter: () => setOpenIndex(i),
            onEnterBack: () => setOpenIndex(i),
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleRowClick = (index: number) => {
    isManual.current = true;
    if (manualTimeout.current) clearTimeout(manualTimeout.current);

    setOpenIndex((prev) => (prev === index ? -1 : index));

    // Re-enable auto scroll progression after user stops interacting
    manualTimeout.current = setTimeout(() => {
      isManual.current = false;
    }, 2800);
  };

  const activeVisual = serviceVisuals[openIndex] || serviceVisuals[0];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-[#050505] text-[#F1F1EB] relative min-h-screen flex flex-col justify-center overflow-hidden py-16 md:py-0"
    >
      <div className="grain" />

      <div className="max-w-[1340px] mx-auto w-full px-[clamp(20px,4vw,60px)] relative z-10 flex flex-col justify-center">
        {/* Top Area: Clean Editorial Split */}
        <div className="what-header grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end mb-12 md:mb-14">
          {/* Left: What I Do label & refined description */}
          <div className="md:col-span-6 lg:col-span-7">
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-white/40 mb-4 font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B2020]" />
              What I Do/
            </p>
            <p className="font-body text-[clamp(14px,1.4vw,17px)] leading-[1.8] text-[#8D8D87] max-w-[500px]">
              I craft engaging content and data-backed digital marketing strategies —
              from viral short-form video to targeted ad campaigns that drive measurable growth.
            </p>
          </div>

          {/* Right: Sleek Monochrome Dynamic Preview Panel */}
          <div className="md:col-span-6 lg:col-span-5">
            <div
              className={`relative bg-gradient-to-br ${activeVisual.gradient} rounded-lg p-5 sm:p-6 border border-white/[0.09] shadow-2xl transition-all duration-700 overflow-hidden`}
            >
              {/* Architectural Grid Overlay */}
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#8B2020] uppercase font-semibold">
                    {activeVisual.badge}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {portfolioData.services.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          openIndex === i ? "w-5 bg-[#F1F1EB]" : "w-1.5 bg-white/20"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <h4 className="font-display font-bold text-[clamp(1.1rem,1.8vw,1.4rem)] text-[#F1F1EB] tracking-tight leading-tight mb-1">
                  {activeVisual.title}
                </h4>
                <p className="font-body text-[12px] text-[#8D8D87] leading-relaxed line-clamp-2">
                  {activeVisual.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hairline Progress Indicator */}
        <div className="w-full h-[1px] bg-white/[0.08] relative mb-1">
          <div
            className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#8B2020] via-white/80 to-[#F1F1EB] transition-all duration-200 -translate-y-1/2"
            style={{ width: `${Math.max(scrollProgress * 100, 2)}%` }}
          />
        </div>

        {/* Oversized Editorial Accordion Rows */}
        <div className="border-t border-white/[0.08]">
          {portfolioData.services.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={service.id}
                className={`service-row border-b border-white/[0.08] transition-colors duration-400 ${
                  isOpen ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
                }`}
              >
                {/* Trigger Button */}
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`accordion-body-${service.id}`}
                  onClick={() => handleRowClick(index)}
                  className="w-full flex items-center justify-between py-6 sm:py-8 bg-transparent border-none cursor-pointer text-left group"
                >
                  <div className="flex items-center gap-[clamp(20px,4.5vw,56px)]">
                    {/* Index */}
                    <span
                      className={`font-mono text-[13px] sm:text-[14px] tracking-[0.15em] transition-colors duration-300 min-w-[28px] ${
                        isOpen ? "text-[#8B2020]" : "text-white/30 group-hover:text-white/50"
                      }`}
                    >
                      {service.id}
                    </span>

                    {/* Title */}
                    <h3
                      className={`font-display font-bold text-[clamp(1.8rem,4.2vw,3.4rem)] leading-none tracking-tight transition-all duration-400 ${
                        isOpen
                          ? "text-[#F1F1EB] translate-x-2 sm:translate-x-3"
                          : "text-white/40 group-hover:text-white/80"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Indicator Icon */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all duration-400 shrink-0 ${
                        isOpen
                          ? "border-white/40 bg-white/[0.06] text-[#F1F1EB] rotate-45"
                          : "border-white/15 text-white/40 group-hover:border-white/40 group-hover:text-white rotate-0"
                      }`}
                    >
                      <span className="text-[20px] font-light leading-none select-none">+</span>
                    </div>
                  </div>
                </button>

                {/* Smooth Expandable Content with CSS Grid Template Rows */}
                <div
                  id={`accordion-body-${service.id}`}
                  className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`pb-9 pt-1 pl-[clamp(48px,7.5vw,84px)] pr-4 transition-all duration-400 ${
                        isOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      {/* Description */}
                      <p className="font-body text-[14px] sm:text-[15px] leading-[1.8] text-[#8D8D87] max-w-[580px] mb-6">
                        {service.description}
                      </p>

                      {/* Capabilities Tag Pills */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 shrink-0">
                          Capabilities:
                        </span>
                        <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                          {service.capabilities.map((cap) => (
                            <li
                              key={cap}
                              className="font-body text-[12px] tracking-[0.03em] text-[#F1F1EB]/85 border border-white/[0.12] bg-white/[0.025] hover:border-white/40 hover:bg-white/[0.06] rounded-full px-3.5 py-1 transition-all duration-300 select-none"
                            >
                              {cap}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Subtext */}
        <div className="mt-8 flex justify-between items-center text-[11px] font-mono tracking-widest text-white/25 uppercase">
          <span>[Scroll to explore services]</span>
          <span>0{openIndex + 1} / 0{portfolioData.services.length}</span>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const line = lineRef.current;
      if (!line) return;

      gsap.set(line, { scaleY: 0, transformOrigin: "top center" });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 80%",
        scrub: 0.8,
        onUpdate: (self) => {
          gsap.set(line, { scaleY: self.progress });
        },
      });

      // Animate experience items
      const items = sectionRef.current?.querySelectorAll(".exp-item");
      items?.forEach((item, i) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 82%",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              item,
              { opacity: 0, y: 28 },
              { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: i * 0.08 }
            );
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="bg-[#050505] py-[clamp(100px,14vw,180px)] text-[#F1F1EB] relative overflow-hidden"
    >
      <div className="grain" />
      <div className="max-w-[1340px] mx-auto px-[clamp(20px,4vw,60px)] relative z-10">
        {/* Section Heading */}
        <div className="mb-[clamp(60px,8vw,100px)] max-w-[760px]">
          <p className="font-body text-[12px] tracking-[0.2em] uppercase text-[#8D8D87] mb-5">
            Experience/
          </p>
          <h2 className="font-display font-bold text-[clamp(2.5rem,6.5vw,5.5rem)] leading-none tracking-tight text-[#F1F1EB]">
            WHERE IDEAS BECOME{" "}
            <span className="font-serif italic font-normal text-[#8B2020]">
              Digital Experiences
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-10 md:pl-12">
          {/* Vertical progress line */}
          <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-white/[0.08] overflow-hidden">
            <div
              ref={lineRef}
              className="absolute inset-0 bg-white/40 origin-top"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-14">
            {portfolioData.experience.map((exp, i) => (
              <div
                key={i}
                className="exp-item grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-4 sm:gap-10 relative opacity-0 group"
              >
                {/* Node dot on the line */}
                <div className="absolute -left-[44px] md:-left-[52px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#F1F1EB] border-2 border-[#050505] ring-2 ring-white/20 transition-transform duration-300 group-hover:scale-125" />

                {/* Year tag */}
                <p className="font-body text-[13px] tracking-[0.08em] text-[#8D8D87] pt-1 font-mono">
                  {exp.year}
                </p>

                {/* Content */}
                <div>
                  <h3 className="font-display font-bold text-[clamp(1.25rem,2.2vw,1.6rem)] tracking-tight text-[#F1F1EB] mb-1">
                    {exp.title}
                  </h3>
                  <p className="font-body text-[14px] text-[#8D8D87] tracking-wider uppercase mb-3">
                    {exp.company}
                  </p>
                  <p className="font-body text-[14px] leading-relaxed text-[#8D8D87]/80 max-w-[540px]">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

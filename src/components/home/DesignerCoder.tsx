"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function DesignerCoder() {
  const sectionRef = useRef<HTMLElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  const arcRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const circle = circleRef.current;
      const arc = arcRef.current;
      if (!circle || !arc) return;

      const circumference = 2 * Math.PI * 80;
      gsap.set(arc, { strokeDasharray: circumference, strokeDashoffset: circumference });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
        onEnter: () => {
          gsap.to(arc, {
            strokeDashoffset: circumference * 0.35,
            duration: 1.6,
            ease: "power3.out",
          });
          gsap.fromTo(
            ".designer-coder-item",
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
          );
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F1F1EB] py-[clamp(80px,10vw,140px)] relative overflow-hidden"
    >
      <div className="grain" />
      <div className="max-w-[1340px] mx-auto px-[clamp(20px,4vw,60px)] relative z-10">
        <div className="flex flex-col items-center text-center gap-14">
          <p className="font-body text-[12px] tracking-[0.2em] uppercase text-[#8D8D87]">
            The Discipline/
          </p>

          <div className="flex items-center justify-center gap-[clamp(40px,8vw,100px)] flex-wrap">
            {/* Left — Designer */}
            <div className="designer-coder-item text-right opacity-0">
              <p className="font-body text-[11px] tracking-[0.16em] uppercase text-[#8D8D87] mb-2">
                Part
              </p>
              <h3 className="font-serif italic text-[clamp(2.2rem,5vw,4.2rem)] text-[#050505] leading-none tracking-tight">
                Designer
              </h3>
              <p className="font-body text-[13px] text-[#8D8D87] mt-3 max-w-[200px] leading-relaxed ml-auto">
                UI/UX, Visual Systems,
                <br />
                Figma &amp; Micro-Interactions
              </p>
            </div>

            {/* Center SVG balance circle */}
            <div className="designer-coder-item relative opacity-0 shrink-0">
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                className="-rotate-90"
              >
                <circle
                  ref={circleRef}
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="rgba(0,0,0,0.08)"
                  strokeWidth="2"
                />
                <path
                  ref={arcRef}
                  d="M100,20 A80,80 0 1,1 99.999,20"
                  fill="none"
                  stroke="#050505"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-body text-[10px] text-[#8D8D87] tracking-[0.2em] uppercase font-semibold">
                  Balance
                </span>
                <span className="font-display text-[15px] text-[#050505] tracking-wider mt-0.5">
                  65 / 35
                </span>
              </div>
            </div>

            {/* Right — Coder */}
            <div className="designer-coder-item text-left opacity-0">
              <p className="font-body text-[11px] tracking-[0.16em] uppercase text-[#8D8D87] mb-2">
                Part
              </p>
              <h3 className="font-display font-bold text-[clamp(2.2rem,5vw,4.2rem)] text-[#050505] leading-none tracking-tighter">
                CODER
              </h3>
              <p className="font-body text-[13px] text-[#8D8D87] mt-3 max-w-[200px] leading-relaxed">
                Next.js, TypeScript,
                <br />
                GSAP &amp; Creative Code
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

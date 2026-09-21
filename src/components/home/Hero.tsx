"use client";

import { useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import PlaceholderImage, { gradients } from "@/components/ui/PlaceholderImage";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const portraitWrapRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const availRef = useRef<HTMLDivElement>(null);
  const scrollSvgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const nameWords = nameRef.current?.querySelectorAll(".hero-word-inner");
      if (nameWords) gsap.set(nameWords, { yPercent: 110 });

      gsap.set(portraitWrapRef.current, { clipPath: "inset(100% 0% 0% 0%)" });
      gsap.set(portraitRef.current, { scale: 1.08 });

      const tl = gsap.timeline({ delay: 1.5 });

      if (nameWords) {
        tl.to(nameWords, { yPercent: 0, duration: 0.9, stagger: 0.06, ease: "power3.out" });
      }

      tl.to(portraitWrapRef.current, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.1, ease: "power4.inOut" }, "-=0.5")
        .to(portraitRef.current, { scale: 1, duration: 1.3, ease: "power3.out" }, "<")
        .fromTo(copyRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6")
        .fromTo(availRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.5");

      // Scroll indicator spin
      gsap.to(scrollSvgRef.current, { rotation: 360, duration: 16, repeat: -1, ease: "none", transformOrigin: "center center" });

      // Parallax
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress;
          gsap.set(portraitWrapRef.current, { y: p * -60 });
          gsap.set(nameRef.current, { y: p * -30 });
          gsap.set(copyRef.current, { y: p * -20 });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const words = portfolioData.name.split(" ");

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen bg-[#F1F1EB] flex flex-col justify-end pb-14 overflow-hidden"
    >
      <div className="grain" />

      {/* Giant name */}
      <div
        ref={nameRef}
        className="absolute inset-x-0 top-1/2 -translate-y-[58%] px-[clamp(20px,4vw,60px)] pointer-events-none select-none"
      >
        <h1
          className="flex flex-wrap font-display text-[#050505] leading-none"
          style={{
            fontSize: "clamp(4.5rem,10vw,11rem)",
            letterSpacing: "-0.03em",
            gap: "0 0.15em",
          }}
        >
          {words.map((word, i) => (
            <span key={i} className="overflow-hidden inline-block align-bottom">
              <span className="hero-word-inner block will-change-transform">{word}</span>
            </span>
          ))}
        </h1>
      </div>

      {/* Portrait */}
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 z-10">
        <div
          ref={portraitWrapRef}
          className="overflow-hidden rounded"
          style={{ width: "clamp(200px,18vw,300px)", aspectRatio: "3/4" }}
        >
          <div ref={portraitRef} className="w-full h-full will-change-transform">
            <PlaceholderImage
              gradient={gradients.portrait}
              className="w-full h-full grayscale"
              aspectRatio=""
              label="Portrait"
            />
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="relative z-20 max-w-[1340px] mx-auto w-full px-[clamp(20px,4vw,60px)] flex justify-between items-end">
        {/* Left copy */}
        <div ref={copyRef} className="max-w-[220px]">
          <div className="flex items-start gap-2.5 mb-4">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-1 shrink-0">
              <path d="M8 1v14M8 15l6-6M8 15l-6-6" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="font-body text-[13px] leading-[1.65] text-[#3A3A38]">
              {portfolioData.introduction}
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="relative w-[60px] h-[60px] mt-6">
            <svg ref={scrollSvgRef} viewBox="0 0 60 60" className="absolute inset-0 w-full h-full">
              <path id="circlePath" d="M30,30 m-22,0 a22,22 0 1,1 44,0 a22,22 0 1,1 -44,0" fill="none" />
              <text style={{ fontSize: "8.5px", fill: "#8D8D87", letterSpacing: "2px" }}>
                <textPath href="#circlePath">SCROLL TO EXPLORE • SCROLL TO EXPLORE •</textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                <path d="M5 1v12M1 9l4 4 4-4" stroke="#050505" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right availability */}
        <div ref={availRef} className="text-right">
          <p className="font-body text-[10px] tracking-[0.18em] uppercase text-[#8D8D87] mb-1.5">
            {portfolioData.availability}
          </p>
          <p
            className="font-display font-bold text-[#050505] leading-none"
            style={{ fontSize: "clamp(1.6rem,3.5vw,2.8rem)", letterSpacing: "-0.02em" }}
          >
            {portfolioData.availabilityDate}
          </p>
        </div>
      </div>
    </section>
  );
}

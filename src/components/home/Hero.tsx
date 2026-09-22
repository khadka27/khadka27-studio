"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const nameLeftRef = useRef<HTMLDivElement>(null);
  const nameRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Initial states
      gsap.set(headlineRef.current, { y: 35, opacity: 0 });
      gsap.set([nameLeftRef.current, nameRightRef.current], { opacity: 0, y: 30 });
      gsap.set(card1Ref.current, { opacity: 0, scale: 0.85, rotate: -25, x: -40 });
      gsap.set(card2Ref.current, { opacity: 0, scale: 0.85, rotate: -5, x: 0 });
      gsap.set(card3Ref.current, { opacity: 0, scale: 0.85, rotate: 25, x: 40 });

      tl.to(headlineRef.current, { y: 0, opacity: 1, duration: 1, delay: 0.15 })
        .to(card1Ref.current, { opacity: 1, scale: 1, rotate: -15, x: -16, duration: 0.9, ease: "back.out(1.4)" }, "-=0.6")
        .to(card2Ref.current, { opacity: 1, scale: 1, rotate: -1, x: 0, duration: 0.9, ease: "back.out(1.4)" }, "-=0.7")
        .to(card3Ref.current, { opacity: 1, scale: 1, rotate: 12, x: 22, duration: 0.9, ease: "back.out(1.4)" }, "-=0.7")
        .to([nameLeftRef.current, nameRightRef.current], { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }, "-=0.5");

      // Subtle interactive mouse tilt on the cards
      const handleMouseMove = (e: MouseEvent) => {
        if (!stackRef.current) return;
        const rect = stackRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) / 28;
        const deltaY = (e.clientY - centerY) / 28;

        gsap.to(card1Ref.current, { x: -16 + deltaX * 0.8, y: deltaY * 0.8, duration: 0.8, ease: "power2.out" });
        gsap.to(card2Ref.current, { x: deltaX * 1.2, y: deltaY * 1.2, duration: 0.8, ease: "power2.out" });
        gsap.to(card3Ref.current, { x: 22 + deltaX * 1.6, y: deltaY * 1.6, duration: 0.8, ease: "power2.out" });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen bg-[#ECECE7] text-[#111] pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-8 overflow-hidden flex flex-col justify-between"
    >

      {/* Subtle Grain Overlay */}
      <div className="grain opacity-[0.025]" />

      {/* ══════════════════════════════════════════════════════════════
          TOP HEADLINE BLOCK (Balanced Editorial Grotesque)
      ══════════════════════════════════════════════════════════════ */}
      <div ref={headlineRef} className="relative z-10 w-fit mx-auto text-center px-4 mt-2 sm:mt-4">
        <h1
          className="font-['Hanken_Grotesk',sans-serif] font-[800] text-[#111] leading-[0.91] tracking-[-0.028em] uppercase select-none"
          style={{ fontSize: "clamp(3rem, 6.6vw, 6.2rem)" }}
        >
          CONTENT CREATOR<br />
          &amp; STRATEGIST.
        </h1>

        {/* Sub-caption row matching exact bounding box of headline */}
        <div className="w-full flex justify-between items-start mt-5 sm:mt-6 text-[#222]">
          <div className="text-left font-['Hanken_Grotesk',sans-serif] text-[13px] sm:text-[14px] leading-[1.35] font-medium tracking-tight">
            Currently Crafting Engaging<br />
            Content &amp; Campaigns
          </div>
          <div className="text-right font-['Hanken_Grotesk',sans-serif] text-[13px] sm:text-[14px] leading-[1.35] font-medium tracking-tight">
            (2023 – Present)
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          CENTERPIECE: RAJ + LAYERED PHOTO STACK + GUPTA
          (BANKOLE [STACK] WELLINGTON style)
      ══════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1340px] mx-auto w-full flex items-center justify-center my-4 sm:my-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 lg:gap-14 w-full">
          {/* Left Name: RAJ (clean regular/medium sans, matching BANKOLE) */}
          <div
            ref={nameLeftRef}
            className="order-2 md:order-1 flex-1 text-center md:text-right select-none"
          >
            <h2
              className="font-['Hanken_Grotesk',sans-serif] font-[500] text-[#111] uppercase tracking-[0.02em] leading-none"
              style={{ fontSize: "clamp(3.2rem, 6.5vw, 5.8rem)" }}
            >
              RAJ
            </h2>
          </div>

          {/* Center: Overlapping Tilted Photos Collage */}
          <div
            ref={stackRef}
            className="order-1 md:order-2 relative w-[320px] sm:w-[370px] h-[350px] sm:h-[400px] shrink-0 flex items-center justify-center cursor-pointer"
          >
            {/* Card 1: Back tilted metallic / texture card */}
            <div
              ref={card1Ref}
              className="absolute w-[210px] sm:w-[240px] h-[270px] sm:h-[310px] rounded overflow-hidden shadow-2xl border border-black/15 origin-bottom-left will-change-transform"
              style={{
                boxShadow: "-15px 25px 50px -10px rgba(0, 0, 0, 0.45)",
              }}
            >
              <div className="w-full h-full relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/marquee/dream-big-eat-well.jpg"
                  alt="Campaign Media"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/10 to-white/30" />
              </div>
            </div>

            {/* Card 2: Middle dark square portrait */}
            <div
              ref={card2Ref}
              className="absolute w-[225px] sm:w-[255px] h-[275px] sm:h-[315px] rounded overflow-hidden shadow-2xl border border-black/20 bg-[#0f0f0f] origin-bottom will-change-transform"
              style={{
                boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.55)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Images/raj_gupta.png"
                alt="Raj Gupta Portrait"
                className="w-full h-full object-cover grayscale contrast-130 brightness-90"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Card 3: Front tilted high-contrast photo (matching the guy in hoodie) */}
            <div
              ref={card3Ref}
              className="absolute w-[215px] sm:w-[245px] h-[275px] sm:h-[315px] rounded overflow-hidden shadow-2xl border border-black/25 bg-black origin-bottom-right will-change-transform"
              style={{
                boxShadow: "15px 30px 65px -12px rgba(0, 0, 0, 0.6)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Images/raj_gupta.png"
                alt="Raj Gupta"
                className="w-full h-full object-cover grayscale contrast-140 brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Name: GUPTA (clean regular/medium sans, matching WELLINGTON) */}
          <div
            ref={nameRightRef}
            className="order-3 flex-1 text-center md:text-left select-none"
          >
            <h2
              className="font-['Hanken_Grotesk',sans-serif] font-[500] text-[#111] uppercase tracking-[0.02em] leading-none"
              style={{ fontSize: "clamp(3.2rem, 6.5vw, 5.8rem)" }}
            >
              GUPTA
            </h2>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          BOTTOM STATUS STRIP
      ══════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1340px] mx-auto w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-[#444] text-[11px] tracking-[0.14em] uppercase font-medium">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#30A46C] animate-pulse" />
          <span>Available for Brand &amp; Digital Collaborations</span>
        </div>
        <div>
          <span>London, UK · MSc Digital Marketing</span>
        </div>
      </div>
    </section>
  );
}

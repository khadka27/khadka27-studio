"use client";

import { useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import PlaceholderImage, { gradients } from "@/components/ui/PlaceholderImage";

const pillPositions = [
  "top-[8%] left-[8%] -rotate-3",
  "top-[12%] left-[25%] rotate-2",
  "top-[15%] right-[20%] -rotate-1",
  "top-[8%] right-[8%] rotate-3",
  "top-[40%] left-[4%] -rotate-2",
  "top-[45%] right-[5%] rotate-2",
  "bottom-[30%] left-[8%] rotate-1",
  "bottom-[20%] left-[22%] -rotate-2",
  "bottom-[15%] right-[15%] rotate-2",
  "bottom-[28%] right-[6%] -rotate-1",
  "top-[30%] left-[18%] rotate-1",
  "top-[35%] right-[14%] -rotate-2",
];

export default function BehindScenes() {
  const sectionRef = useRef<HTMLElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const pillsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pills = pillsContainerRef.current?.querySelectorAll(".skill-pill");
      if (pills) {
        gsap.set(pills, { opacity: 0, scale: 0.8, y: 20 });
        ScrollTrigger.create({
          trigger: pillsContainerRef.current,
          start: "top 75%",
          once: true,
          onEnter: () => {
            gsap.to(pills, { opacity: 1, scale: 1, y: 0, duration: 0.7, stagger: 0.05, ease: "power3.out" });
            pills.forEach((pill, i) => {
              gsap.to(pill, {
                y: `${(i % 2 === 0 ? -1 : 1) * 8}px`,
                duration: 2.5 + (i % 3) * 0.7,
                repeat: -1, yoyo: true, ease: "sine.inOut", delay: i * 0.1,
              });
            });
          },
        });
      }

      const handleMouseMove = (e: MouseEvent) => {
        const xRatio = (e.clientX / window.innerWidth - 0.5) * 15;
        const yRatio = (e.clientY / window.innerHeight - 0.5) * 15;
        gsap.to(centerRef.current, { x: xRatio, y: yRatio, duration: 0.8, ease: "power2.out" });
      };

      const el = sectionRef.current;
      el?.addEventListener("mousemove", handleMouseMove);
      return () => el?.removeEventListener("mousemove", handleMouseMove);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="behind-scenes" className="bg-[#0A0A0A] py-[clamp(100px,14vw,180px)] relative overflow-hidden">
      <div className="relative max-w-[800px] mx-auto px-6 text-center">
        {/* Floating pills */}
        <div ref={pillsContainerRef} className="absolute pointer-events-none" style={{ inset: "-100px -120px", zIndex: 1 }}>
          {portfolioData.skills.slice(0, 12).map((skill, i) => (
            <div
              key={skill}
              className={`skill-pill absolute ${pillPositions[i]} border border-white/[0.12] bg-white/[0.03] text-white/65 rounded-full px-4 py-1.5 font-body text-[12px] tracking-[0.04em] backdrop-blur-sm whitespace-nowrap will-change-transform`}
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Heading */}
        <div className="relative z-10 mb-12">
          <h2
            className="font-display font-bold text-[#F1F1EB] uppercase leading-[0.9]"
            style={{ fontSize: "clamp(3rem,8vw,7rem)", letterSpacing: "-0.03em" }}
          >
            BEHIND THE
          </h2>
          <h2
            className="font-serif italic text-[#8B2020] leading-[0.9] mt-1"
            style={{ fontSize: "clamp(3rem,8vw,7rem)", letterSpacing: "-0.02em" }}
          >
            Scenes/
          </h2>
        </div>

        {/* Center image placeholder */}
        <div
          ref={centerRef}
          className="relative z-10 mx-auto overflow-hidden rounded-lg border border-white/[0.08] shadow-2xl will-change-transform"
          style={{ width: "clamp(220px,30vw,360px)", aspectRatio: "3/4" }}
        >
          <PlaceholderImage
            src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Behind the scenes content creation"
            gradient={gradients.behind}
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            aspectRatio=""
            label="Behind the Scenes"
          />
        </div>
      </div>
    </section>
  );
}

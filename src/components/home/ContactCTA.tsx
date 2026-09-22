"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { portfolioData } from "@/data/portfolio";
import MagneticButton from "@/components/motion/MagneticButton";

export default function ContactCTA() {
  const panelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const title = titleRef.current;
      if (!panel) return;

      gsap.set(panel, { scale: 0.97, opacity: 0 });

      ScrollTrigger.create({
        trigger: panel,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(panel, {
            scale: 1,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
          });
        },
      });

      // Title words
      if (title) {
        const words = title.querySelectorAll(".cta-word");
        gsap.set(words, { yPercent: 110 });
        ScrollTrigger.create({
          trigger: panel,
          start: "top 75%",
          once: true,
          onEnter: () => {
            gsap.to(words, {
              yPercent: 0,
              duration: 0.8,
              stagger: 0.08,
              ease: "power3.out",
              delay: 0.2,
            });
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#F1F1EB] py-[clamp(60px,8vw,100px)] relative overflow-hidden">
      <div className="grain" />
      <div className="max-w-[1340px] mx-auto px-[clamp(20px,4vw,60px)] relative z-10">
        <div
          ref={panelRef}
          className="bg-[#080808] rounded-[36px] sm:rounded-[48px] py-[clamp(80px,12vw,140px)] px-6 sm:px-12 flex flex-col items-center justify-center text-center relative overflow-hidden border border-white/[0.08] shadow-2xl"
        >
          {/* Subtle noise/grain texture */}
          <div className="grain opacity-15" />

          <p className="font-body text-[11px] tracking-[0.22em] uppercase text-[#8D8D87] mb-8 relative z-10 font-medium">
            Have a project in mind?
          </p>

          <div ref={titleRef} className="relative z-10 overflow-hidden mb-6">
            <h2 className="text-[#F1F1EB] text-[clamp(3.5rem,11vw,8.5rem)] font-display font-bold tracking-tighter leading-[0.88] flex flex-wrap justify-center gap-x-4">
              {["LET'S", "CONNECT"].map((word, i) => (
                <span key={i} className="overflow-hidden inline-block">
                  <span className="cta-word block will-change-transform">
                    {word}
                  </span>
                </span>
              ))}
            </h2>
          </div>

          <p className="font-body text-[clamp(14px,1.4vw,17px)] leading-relaxed text-[#8D8D87] max-w-[440px] mb-12 relative z-10">
            I&apos;m available for social media management, high-impact content production, and data-driven growth campaigns.
          </p>

          <div className="relative z-10">
            <MagneticButton strength={10} onClick={handleContactClick}>
              <div className="w-[130px] h-[130px] rounded-full border border-white/20 bg-white/[0.03] hover:bg-[#F1F1EB] text-[#F1F1EB] hover:text-[#050505] flex items-center justify-center font-body text-[12px] tracking-[0.16em] uppercase transition-all duration-500 cursor-pointer shadow-lg hover:scale-105">
                Say Hello
              </div>
            </MagneticButton>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-16 relative z-10">
            {[
              { label: "TikTok", href: portfolioData.socialLinks.tiktok },
              { label: "Instagram", href: portfolioData.socialLinks.instagram },
              { label: "LinkedIn", href: portfolioData.socialLinks.linkedin },
              { label: "YouTube", href: portfolioData.socialLinks.youtube },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[11px] tracking-[0.14em] uppercase text-white/40 hover:text-[#F1F1EB] transition-colors duration-300 border-b border-transparent hover:border-white/40 pb-0.5"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

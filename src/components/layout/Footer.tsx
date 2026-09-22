"use client";

import { useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import { gsap } from "@/lib/gsap";
import { ArrowUp } from "lucide-react";

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

function YouTubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(arrowRef.current, { rotation: 360, duration: 12, repeat: -1, ease: "none" });
  }, []);

  return (
    <footer id="footer" className="bg-[#080808] border-t border-white/[0.06] pt-20 pb-12">
      <div className="max-w-[1340px] mx-auto px-[clamp(20px,4vw,60px)]">
        {/* Center CTA */}
        <div className="text-center mb-16">
          <p className="font-body text-[12px] tracking-[0.15em] uppercase text-[#8D8D87]/50 mb-6">
            Ready to collaborate?
          </p>
          <h2 className="font-display font-bold text-[#F1F1EB] mb-6" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", letterSpacing: "-0.02em" }}>
            LET&apos;S CONNECT
          </h2>
          <a
            href={`mailto:${portfolioData.email}`}
            className="font-serif italic text-[#F1F1EB] no-underline border-b border-white/25 pb-0.5 hover:border-white/60 transition-colors"
            style={{ fontSize: "clamp(1rem,2.5vw,1.4rem)" }}
          >
            {portfolioData.email}
          </a>
        </div>

        <div className="border-t border-white/[0.08] mb-12" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <a href={portfolioData.socialLinks.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="social-icon" title="TikTok"><TikTokIcon size={18} /></a>
            <a href={portfolioData.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon" title="Instagram"><InstagramIcon size={18} /></a>
            <a href={portfolioData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon" title="LinkedIn"><LinkedInIcon size={18} /></a>
            <a href={portfolioData.socialLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon" title="YouTube"><YouTubeIcon size={18} /></a>
          </div>

          <p className="font-body text-[12px] tracking-[0.08em] text-white/30">
            © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="back-to-top"
          >
            <div ref={arrowRef} className="flex"><ArrowUp size={16} /></div>
          </button>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuLinks = [
  { href: "#works", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
  { href: "/resume.pdf", label: "Resume", external: true },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const links = linksRef.current?.querySelectorAll(".menu-link-inner");
    if (!overlay || !links) return;

    if (isOpen) {
      gsap.set(overlay, { display: "flex", pointerEvents: "all" });
      gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: "power2.out" });
      gsap.fromTo(
        links,
        { yPercent: 110 },
        { yPercent: 0, duration: 0.65, stagger: 0.08, delay: 0.15, ease: "power3.out" }
      );
    } else {
      gsap.to(links, { yPercent: 110, duration: 0.4, stagger: 0.05, ease: "power2.in" });
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.4,
        delay: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(overlay, { display: "none", pointerEvents: "none" });
        },
      });
    }
  }, [isOpen]);

  const handleLinkClick = (href: string, external?: boolean) => {
    onClose();
    if (!external) {
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }, 600);
    }
  };

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "#050505",
        display: "none",
        pointerEvents: "none",
        flexDirection: "column",
        padding: "24px",
      }}
    >
      {/* Close */}
      <div className="flex justify-between items-center mb-16">
        <span style={{ color: "#F1F1EB", fontSize: "13px", letterSpacing: "0.1em", opacity: 0.5 }}>
          MENU
        </span>
        <button
          onClick={onClose}
          aria-label="Close menu"
          style={{
            color: "#F1F1EB",
            fontSize: "28px",
            background: "none",
            border: "none",
            cursor: "pointer",
            lineHeight: 1,
          }}
        >
          ×
        </button>
      </div>

      {/* Links */}
      <div ref={linksRef} className="flex flex-col gap-2 mt-auto mb-auto">
        {menuLinks.map((link) => (
          <div key={link.href} style={{ overflow: "hidden" }}>
            <div className="menu-link-inner" style={{ transform: "translateY(110%)" }}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    color: "#F1F1EB",
                    textDecoration: "none",
                    fontSize: "clamp(2.5rem, 10vw, 5rem)",
                    fontWeight: 700,
                    fontFamily: "var(--font-display)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                    paddingBottom: "8px",
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <button
                  onClick={() => handleLinkClick(link.href)}
                  style={{
                    display: "block",
                    color: "#F1F1EB",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    fontSize: "clamp(2.5rem, 10vw, 5rem)",
                    fontWeight: 700,
                    fontFamily: "var(--font-display)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                    paddingBottom: "8px",
                    padding: 0,
                  }}
                >
                  {link.label}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom socials */}
      <div className="flex gap-6 mt-8">
        {[
          { label: "TikTok", href: "https://www.tiktok.com/@thefoodiety" },
          { label: "Instagram", href: "https://www.instagram.com/thefoodiety/" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/raj-gupta-3b88102b3/" },
          { label: "YouTube", href: "https://youtube.com" },
        ].map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(241,241,235,0.4)",
              fontSize: "12px",
              letterSpacing: "0.1em",
              textDecoration: "none",
              textTransform: "uppercase",
            }}
          >
            {social.label}
          </a>
        ))}
      </div>
    </div>
  );
}

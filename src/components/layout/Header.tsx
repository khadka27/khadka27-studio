"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { gsap } from "@/lib/gsap";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "#works", label: "Works" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function RollingLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="rolling-link"
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <span className="rolling-link__inner">
        <span className="rolling-link__top">{label}</span>
        <span className="rolling-link__bottom" aria-hidden>{label}</span>
      </span>
    </a>
  );
}

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(headerRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 1.8, ease: "power3.out" });
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-[clamp(20px,4vw,60px)] ${
          scrolled ? "py-3 backdrop-blur-md bg-[#F1F1EB]/85 border-b border-black/10" : "py-5"
        }`}
        style={{ opacity: 0 }}
      >
        <div className="max-w-[1340px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group no-underline">
            <div className="w-8 h-8 rounded-full bg-[#050505] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
              <span className="font-display text-[#F1F1EB] text-[11px] font-bold tracking-[0.04em]">
                {portfolioData.initials}
              </span>
            </div>
            <span className="hidden sm:block font-body text-[11px] tracking-[0.12em] uppercase text-[#8D8D87] font-medium">
              {portfolioData.tagline}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <RollingLink key={link.href} {...link} />
            ))}
            <a
              href={portfolioData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#050505] text-[#F1F1EB] rounded-full px-[22px] py-[10px] font-body text-[12px] tracking-[0.08em] no-underline font-medium hover:bg-[#222] transition-colors"
            >
              Resume
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-none"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="w-6 h-px bg-[#050505] block" />
            <span className="w-4 h-px bg-[#050505] block" />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

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
          {/* Logo matching r.R */}
          <Link href="/" className="group no-underline">
            <span className="font-['Hanken_Grotesk',sans-serif] text-[clamp(1.25rem,1.8vw,1.55rem)] font-black tracking-tight text-[#050505]">
              r.G
            </span>
          </Link>

          {/* Desktop Nav - Centered */}
          <nav className="hidden md:flex items-center gap-9" aria-label="Main navigation">
            <a
              href="#works"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#works")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-body text-[12px] tracking-[0.14em] uppercase font-semibold text-[#222] hover:text-[#050505] transition-colors no-underline"
            >
              Work
            </a>
            <a
              href={portfolioData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[12px] tracking-[0.14em] uppercase font-semibold text-[#222] hover:text-[#050505] transition-colors no-underline"
            >
              Resume
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-body text-[12px] tracking-[0.14em] uppercase font-semibold text-[#222] hover:text-[#050505] transition-colors no-underline"
            >
              About
            </a>
          </nav>

          {/* Right Action: CONTACT ME */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-body text-[12px] tracking-[0.14em] uppercase font-semibold text-[#050505] hover:opacity-70 transition-opacity no-underline"
            >
              Contact Me
            </a>
          </div>

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

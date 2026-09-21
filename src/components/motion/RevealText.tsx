"use client";

import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface RevealTextProps {
  children: string;
  mode?: "words" | "lines" | "chars";
  delay?: number;
  stagger?: number;
  className?: string;
  as?: React.ElementType;
  once?: boolean;
}

export default function RevealText({
  children,
  mode = "words",
  delay = 0,
  stagger = 0.055,
  className = "",
  as: Tag = "div",
  once = true,
}: RevealTextProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = containerRef.current;
    if (!el) return;
    if (prefersReducedMotion) { el.style.opacity = "1"; return; }

    const text = el.textContent || "";
    const words = text.split(" ").filter(Boolean);

    el.innerHTML = "";
    words.forEach((word, wi) => {
      const wrapper = document.createElement("span");
      wrapper.style.cssText = `display:inline-block;overflow:hidden;vertical-align:bottom;margin-right:${wi < words.length - 1 ? "0.25em" : "0"}`;
      const inner = document.createElement("span");
      inner.style.cssText = "display:inline-block;will-change:transform";
      inner.textContent = word;
      wrapper.appendChild(inner);
      el.appendChild(wrapper);
    });

    const targets = el.querySelectorAll("span > span");
    gsap.set(targets, { yPercent: 110, rotateX: 10 });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once,
        onEnter: () => {
          gsap.to(targets, { yPercent: 0, rotateX: 0, duration: 0.9, stagger, delay, ease: "power3.out" });
        },
      });
    });

    return () => ctx.revert();
  }, [children, mode, delay, stagger, once]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp = Tag as any;
  return (
    <Comp ref={containerRef} className={className} style={{ perspective: "1000px" }}>
      {children}
    </Comp>
  );
}

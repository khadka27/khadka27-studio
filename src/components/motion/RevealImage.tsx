"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface RevealImageProps {
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
  delay?: number;
  direction?: "bottom" | "left" | "right";
}

export default function RevealImage({
  children,
  className = "",
  wrapperClassName = "",
  delay = 0,
  direction = "bottom",
}: RevealImageProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;

    if (prefersReducedMotion) {
      gsap.set(wrapper, { clipPath: "inset(0% 0% 0% 0%)" });
      gsap.set(inner, { scale: 1 });
      return;
    }

    const initialClip =
      direction === "bottom"
        ? "inset(100% 0% 0% 0%)"
        : direction === "left"
          ? "inset(0% 100% 0% 0%)"
          : "inset(0% 0% 0% 100%)";

    gsap.set(wrapper, { clipPath: initialClip });
    gsap.set(inner, { scale: 1.12 });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrapper,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(wrapper, {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.2,
            delay,
            ease: "power4.inOut",
          });
          gsap.to(inner, {
            scale: 1,
            duration: 1.4,
            delay,
            ease: "power3.out",
          });
        },
      });
    });

    return () => ctx.revert();
  }, [delay, direction]);

  return (
    <div ref={wrapperRef} className={`overflow-hidden ${wrapperClassName}`}>
      <div ref={innerRef} className={`w-full h-full ${className}`}>
        {children}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "@/lib/gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const viewTextRef = useRef<HTMLSpanElement>(null);
  const isHoveringProject = useRef(false);
  const isHoveringLink = useRef(false);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

  const render = useCallback(() => {
    pos.current.x = lerp(pos.current.x, mouse.current.x, 0.12);
    pos.current.y = lerp(pos.current.y, mouse.current.y, 0.12);

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
    }
    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px) translate(-50%, -50%)`;
    }

    rafRef.current = requestAnimationFrame(render);
  }, []);

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouchDevice || prefersReducedMotion) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    cursor.style.display = "block";
    dot.style.display = "block";
    document.body.style.cursor = "none";

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onMouseEnterProject = () => {
      isHoveringProject.current = true;
      gsap.to(cursor, {
        scale: 4,
        duration: 0.5,
        ease: "expo.out",
        backgroundColor: "rgba(5,5,5,0.85)",
      });
      if (viewTextRef.current) {
        gsap.to(viewTextRef.current, { opacity: 1, duration: 0.3, delay: 0.1 });
      }
    };

    const onMouseLeaveProject = () => {
      isHoveringProject.current = false;
      gsap.to(cursor, {
        scale: 1,
        duration: 0.5,
        ease: "expo.out",
        backgroundColor: "rgba(5,5,5,0.85)",
      });
      if (viewTextRef.current) {
        gsap.to(viewTextRef.current, { opacity: 0, duration: 0.2 });
      }
    };

    const onMouseEnterLink = () => {
      if (isHoveringProject.current) return;
      isHoveringLink.current = true;
      gsap.to(cursor, { scale: 1.8, duration: 0.3, ease: "power2.out" });
    };

    const onMouseLeaveLink = () => {
      isHoveringLink.current = false;
      if (!isHoveringProject.current) {
        gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out" });
      }
    };

    document.addEventListener("mousemove", onMouseMove);

    const projectCards = document.querySelectorAll("[data-cursor='project']");
    projectCards.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterProject);
      el.addEventListener("mouseleave", onMouseLeaveProject);
    });

    const links = document.querySelectorAll("a, button, [data-cursor='link']");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterLink);
      el.addEventListener("mouseleave", onMouseLeaveLink);
    });

    rafRef.current = requestAnimationFrame(render);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.body.style.cursor = "";
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [render]);

  return (
    <>
      {/* Trailing circle */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden"
        style={{
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          backgroundColor: "rgba(5,5,5,0.85)",
          willChange: "transform",
          mixBlendMode: "multiply",
          display: "none",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          ref={viewTextRef}
          style={{
            opacity: 0,
            color: "#F1F1EB",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            userSelect: "none",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          VIEW
        </span>
      </div>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden"
        style={{
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          backgroundColor: "#050505",
          willChange: "transform",
          display: "none",
        }}
      />
    </>
  );
}

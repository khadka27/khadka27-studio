"use client";

import { useRef, useCallback } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  as?: "button" | "a" | "div";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className = "",
  strength = 6,
  as: Tag = "button",
  href,
  target,
  rel,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const animRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(null);
  const current = useRef({ x: 0, y: 0 });

  const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

  const animate = useCallback(
    (targetX: number, targetY: number) => {
      current.current.x = lerp(current.current.x, targetX, 0.18);
      current.current.y = lerp(current.current.y, targetY, 0.18);
      if (ref.current) {
        ref.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`;
      }
      if (
        Math.abs(current.current.x - targetX) > 0.1 ||
        Math.abs(current.current.y - targetY) > 0.1
      ) {
        animRef.current = requestAnimationFrame(() =>
          animate(targetX, targetY)
        );
      }
    },
    []
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = ((e.clientX - centerX) / rect.width) * strength * 2;
      const dy = ((e.clientY - centerY) / rect.height) * strength * 2;
      if (animRef.current) cancelAnimationFrame(animRef.current);
      animate(dx, dy);
    },
    [animate, strength]
  );

  const handleMouseLeave = useCallback(() => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    animate(0, 0);
  }, [animate]);

  const TagComp = Tag as React.ElementType;

  return (
    <TagComp
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...(href && { href })}
      {...(target && { target })}
      {...(rel && { rel })}
      style={{ display: "inline-block", willChange: "transform" }}
    >
      {children}
    </TagComp>
  );
}

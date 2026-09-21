"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import PlaceholderImage, { gradients } from "@/components/ui/PlaceholderImage";

const MARQUEE_GRADIENTS = [
  gradients.marquee,
  "from-stone-500 via-zinc-600 to-neutral-700",
  "from-neutral-600 via-stone-500 to-zinc-600",
  "from-zinc-700 via-neutral-600 to-stone-600",
  "from-stone-600 via-zinc-500 to-neutral-600",
  "from-neutral-700 via-stone-600 to-zinc-700",
];

interface CurvedMarqueeProps {
  count?: number;
  speed?: number;
  direction?: "left" | "right";
  label?: string;
  colorSet?: string[];
}

export default function CurvedMarquee({
  count = 6,
  speed = 1,
  direction = "left",
  label,
  colorSet,
}: CurvedMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const velocityRef = useRef(0);
  const colors = colorSet ?? MARQUEE_GRADIENTS;
  const allColors = [...colors, ...colors, ...colors];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const totalW = track.scrollWidth / 3;
      const dir = direction === "left" ? -1 : 1;
      xRef.current += (speed * 0.5 + Math.abs(velocityRef.current) * 0.4) * dir;

      if (direction === "left" && xRef.current < -totalW) xRef.current += totalW;
      if (direction === "right" && xRef.current > 0) xRef.current -= totalW;

      gsap.set(track, { x: xRef.current });
      velocityRef.current *= 0.92;
    };

    gsap.ticker.add(update);

    let lastY = window.scrollY;
    const onScroll = () => {
      velocityRef.current += (window.scrollY - lastY) * 0.1;
      lastY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      gsap.ticker.remove(update);
      window.removeEventListener("scroll", onScroll);
    };
  }, [speed, direction]);

  return (
    <div className="bg-[#050505] pb-[clamp(60px,8vw,100px)] overflow-hidden relative">
      {label && (
        <div className="max-w-[1340px] mx-auto px-[clamp(20px,4vw,60px)] mb-10">
          <p className="font-body text-[11px] tracking-[0.2em] uppercase text-white/30">{label}</p>
        </div>
      )}

      <div className="relative overflow-hidden">
        {/* Top curve */}
        <div className="absolute -top-px left-[-5%] w-[110%] h-20 bg-[#050505] z-10 pointer-events-none rounded-b-[50%]" />
        {/* Bottom curve */}
        <div className="absolute -bottom-px left-[-5%] w-[110%] h-20 bg-[#050505] z-10 pointer-events-none rounded-t-[50%]" />

        <div className="py-20 flex cursor-grab">
          <div ref={trackRef} className="flex gap-3 shrink-0 items-center will-change-transform">
            {allColors.map((gradient, i) => (
              <div
                key={i}
                className="shrink-0 rounded overflow-hidden border border-white/[0.06]"
                style={{ width: "clamp(220px,22vw,320px)", height: "clamp(150px,16vw,220px)" }}
              >
                <PlaceholderImage gradient={gradient} className="w-full h-full" aspectRatio="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

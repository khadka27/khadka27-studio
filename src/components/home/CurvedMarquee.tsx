"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import PlaceholderImage, { gradients } from "@/components/ui/PlaceholderImage";

export const MARQUEE_IMAGES = [
  { src: "/images/marquee/blueberry-croissant.jpg", label: "Blueberry Croissant" },
  { src: "/images/marquee/cloud9-special-khaja-set.jpg", label: "Cloud 9 Khaja Set" },
  { src: "/images/marquee/dream-big-eat-well.jpg", label: "Dream Big Eat Well" },
  { src: "/images/marquee/buffalo-wings.jpg", label: "Buffalo Wings" },
  { src: "/images/marquee/juju-dhaau-french-toast.jpg", label: "Juju Dhaau French Toast" },
  { src: "/images/marquee/cream-latte.jpg", label: "Cream Latte" },
  { src: "/images/marquee/grilled-chicken.jpg", label: "Grilled Chicken" },
  { src: "/images/marquee/laphing.jpg", label: "Laphing" },
  { src: "/images/marquee/chicken-cordon-bleu.jpg", label: "Chicken Cordon Bleu" },
  { src: "/images/marquee/granola.jpg", label: "Granola Bowl" },
  { src: "/images/marquee/murgi-kebab.jpg", label: "Murgi Kebab" },
  { src: "/images/marquee/melon-fresh.jpg", label: "Melon Fresh" },
  { src: "/images/marquee/paneer-tikka.jpg", label: "Paneer Tikka" },
  { src: "/images/marquee/refreshing-juice.jpg", label: "Refreshing Juice" },
];

interface MarqueeItem {
  src: string;
  label?: string;
}

interface CurvedMarqueeProps {
  count?: number;
  speed?: number;
  direction?: "left" | "right";
  label?: string;
  items?: MarqueeItem[];
}

export default function CurvedMarquee({
  speed = 1,
  direction = "left",
  label,
  items = MARQUEE_IMAGES,
}: CurvedMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const velocityRef = useRef(0);

  // Triple items array for seamless infinite looping
  const allItems = [...items, ...items, ...items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const totalW = track.scrollWidth / 3;
      if (totalW === 0) return;

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
          <p className="font-body text-[11px] tracking-[0.2em] uppercase text-white/30 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B2020]" />
            {label}
          </p>
        </div>
      )}

      <div className="relative overflow-hidden">
        {/* Top curve */}
        <div className="absolute -top-px left-[-5%] w-[110%] h-20 bg-[#050505] z-10 pointer-events-none rounded-b-[50%]" />
        {/* Bottom curve */}
        <div className="absolute -bottom-px left-[-5%] w-[110%] h-20 bg-[#050505] z-10 pointer-events-none rounded-t-[50%]" />

        <div className="py-20 flex cursor-grab">
          <div ref={trackRef} className="flex gap-4 shrink-0 items-center will-change-transform">
            {allItems.map((item, i) => (
              <div
                key={i}
                className="shrink-0 rounded-lg overflow-hidden border border-white/[0.08] shadow-2xl relative group"
                style={{ width: "clamp(220px,22vw,320px)", height: "clamp(150px,16vw,220px)" }}
              >
                <PlaceholderImage
                  src={item.src}
                  alt={item.label}
                  gradient={gradients.marquee}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  aspectRatio=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3.5 pointer-events-none">
                  <span className="font-body text-[11px] text-[#F1F1EB] font-medium tracking-wide">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

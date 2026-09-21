"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const ellipseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const ellipse = ellipseRef.current;
    if (!loader || !ellipse) return;

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(loader, { display: "none", pointerEvents: "none" });
        onComplete?.();
      },
    });

    tl.set(ellipse, { yPercent: 0 })
      .to(ellipse, { yPercent: -120, duration: 1.1, ease: "power4.inOut", delay: 0.1 })
      .to(loader, { opacity: 0, duration: 0.3, ease: "power2.out" }, "-=0.2");

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-[#050505] flex items-end justify-center overflow-hidden"
    >
      <div
        ref={ellipseRef}
        className="absolute bg-[#F1F1EB]"
        style={{
          width: "160vw",
          height: "130vh",
          borderRadius: "50% 50% 0 0 / 40% 40% 0 0",
          bottom: "-110vh",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
}

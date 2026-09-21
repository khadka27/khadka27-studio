"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "@/lib/gsap";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const ellipseRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current === pathname) return;
    prevPathname.current = pathname;

    const overlay = overlayRef.current;
    const ellipse = ellipseRef.current;
    if (!overlay || !ellipse) return;

    // Enter animation — overlay exits upward
    gsap.set(overlay, { display: "flex", pointerEvents: "none" });
    gsap.set(ellipse, { yPercent: 0 });

    gsap.to(ellipse, {
      yPercent: -130,
      duration: 0.9,
      ease: "power4.inOut",
      onComplete: () => {
        gsap.set(overlay, { display: "none" });
        setIsAnimating(false);
      },
    });
  }, [pathname]);

  // Export transition trigger for link clicks
  useEffect(() => {
    const handleTransitionStart = () => {
      const overlay = overlayRef.current;
      const ellipse = ellipseRef.current;
      if (!overlay || !ellipse) return;

      setIsAnimating(true);
      gsap.set(overlay, { display: "flex", pointerEvents: "all" });
      gsap.set(ellipse, { yPercent: 120 });

      gsap.to(ellipse, {
        yPercent: 0,
        duration: 0.85,
        ease: "power4.inOut",
      });
    };

    window.addEventListener("page-transition-start", handleTransitionStart);
    return () =>
      window.removeEventListener("page-transition-start", handleTransitionStart);
  }, []);

  return (
    <>
      {/* Transition overlay */}
      <div
        ref={overlayRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 10000,
          display: "none",
          alignItems: "flex-end",
          justifyContent: "center",
          overflow: "hidden",
          background: "transparent",
          pointerEvents: "none",
        }}
      >
        <div
          ref={ellipseRef}
          style={{
            width: "160vw",
            height: "130vh",
            borderRadius: "50% 50% 0 0 / 40% 40% 0 0",
            backgroundColor: "#050505",
            position: "absolute",
            bottom: "-10vh",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </div>
      {children}
    </>
  );
}

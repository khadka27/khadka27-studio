"use client";

interface CurvedTransitionProps {
  from?: "light" | "dark";
  to?: "light" | "dark";
  className?: string;
}

export default function CurvedTransition({
  from = "light",
  to = "dark",
  className = "",
}: CurvedTransitionProps) {
  const bgColor = to === "dark" ? "#050505" : "#F1F1EB";
  const parentBg = from === "light" ? "#F1F1EB" : "#050505";

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ background: parentBg, marginBottom: -1 }}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%", height: "100px" }}
      >
        <path
          d={
            to === "dark"
              ? "M0,100 L0,50 Q720,0 1440,50 L1440,100 Z"
              : "M0,0 L0,50 Q720,100 1440,50 L1440,0 Z"
          }
          fill={bgColor}
        />
      </svg>
    </div>
  );
}

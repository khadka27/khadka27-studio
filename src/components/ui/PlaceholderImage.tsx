"use client";

interface PlaceholderImageProps {
  className?: string;
  gradient?: string;
  label?: string;
  aspectRatio?: string;
}

// Editorial monochromatic & warm neutral presets matching the reference palette
export const gradients = {
  portrait: "from-[#dcdcd4] via-[#cacac2] to-[#b8b8b0]",
  sathi: "from-[#1a1a18] via-[#121210] to-[#0a0a09]",
  smartDocs: "from-[#222220] via-[#181816] to-[#0e0e0d]",
  futsal: "from-[#181a17] via-[#111310] to-[#080907]",
  playlist: "from-[#20181b] via-[#161013] to-[#0c080a]",
  cars: "from-[#1c1c1c] via-[#141414] to-[#080808]",
  about: "from-[#dedece] via-[#d0d0c4] to-[#c4c4b8]",
  moment: "from-[#242422] via-[#1a1a18] to-[#10100f]",
  service: "from-[#1c1c1a] via-[#141413] to-[#0a0a09]",
  behind: "from-[#1e1c18] via-[#141210] to-[#0a0908]",
  marquee: "from-[#282824] via-[#1c1c1a] to-[#121210]",
};

export default function PlaceholderImage({
  className = "",
  gradient = "from-[#d8d8ce] via-[#c8c8be] to-[#b8b8ae]",
  label,
  aspectRatio = "aspect-video",
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative bg-gradient-to-br ${gradient} ${aspectRatio} ${className} overflow-hidden border border-white/[0.05]`}
    >
      {/* Subtle fine architectural grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {label && (
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <span className="font-body text-[11px] tracking-[0.24em] uppercase text-white/40 font-mono text-center select-none">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}

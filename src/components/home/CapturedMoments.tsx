"use client";

import PlaceholderImage, { gradients } from "@/components/ui/PlaceholderImage";

const momentGradients = [
  "from-stone-700 via-neutral-700 to-zinc-800",
  "from-zinc-700 via-stone-600 to-neutral-700",
  "from-neutral-600 via-zinc-600 to-stone-700",
  "from-stone-600 via-neutral-600 to-zinc-700",
  "from-zinc-600 via-stone-700 to-neutral-800",
  "from-neutral-700 via-stone-600 to-zinc-600",
];

export default function CapturedMoments() {
  return (
    <section id="moments" className="bg-[#0A0A0A] py-[clamp(80px,10vw,140px)]">
      <div className="max-w-[1340px] mx-auto px-[clamp(20px,4vw,60px)]">
        <div className="mb-[clamp(48px,6vw,80px)]">
          <h2
            className="font-display font-bold text-[#F1F1EB] leading-none"
            style={{ fontSize: "clamp(1.8rem,5vw,4rem)", letterSpacing: "-0.02em" }}
          >
            Captured
            <span className="font-serif italic font-normal block">Moments!</span>
          </h2>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {/* Tall left */}
          <div className="row-span-2 overflow-hidden rounded group">
            <PlaceholderImage gradient={momentGradients[0]} aspectRatio="aspect-[3/5]" className="w-full group-hover:scale-[1.04] transition-transform duration-700" />
          </div>
          {/* Top mid */}
          <div className="overflow-hidden rounded group">
            <PlaceholderImage gradient={momentGradients[1]} aspectRatio="aspect-square" className="w-full group-hover:scale-[1.04] transition-transform duration-700" />
          </div>
          {/* Top right */}
          <div className="overflow-hidden rounded group">
            <PlaceholderImage gradient={momentGradients[2]} aspectRatio="aspect-square" className="w-full group-hover:scale-[1.04] transition-transform duration-700" />
          </div>
          {/* Wide bottom right */}
          <div className="col-span-2 overflow-hidden rounded group">
            <PlaceholderImage gradient={momentGradients[3]} aspectRatio="aspect-[16/7]" className="w-full group-hover:scale-[1.04] transition-transform duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
}

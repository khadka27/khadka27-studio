"use client";

import PlaceholderImage, { gradients } from "@/components/ui/PlaceholderImage";

const momentPhotos = [
  {
    src: "/images/moments/cloud9-special-khaja-set.jpg",
    label: "Cloud 9 Special Khaja Set",
  },
  {
    src: "/images/moments/blueberry-croissant.jpg",
    label: "Artisan Blueberry Croissant",
  },
  {
    src: "/images/moments/juju-dhaau-french-toast.jpg",
    label: "Juju Dhaau French Toast",
  },
  {
    src: "/images/moments/dream-big-eat-well.jpg",
    label: "The Foodiety Campaign",
  },
];

export default function CapturedMoments() {
  return (
    <section id="moments" className="bg-[#0A0A0A] py-[clamp(80px,10vw,140px)]">
      <div className="max-w-[1340px] mx-auto px-[clamp(20px,4vw,60px)]">
        <div className="mb-[clamp(48px,6vw,80px)]">
          <p className="font-body text-[11px] tracking-[0.2em] uppercase text-white/40 mb-3 font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B2020]" />
            Visual Diary/
          </p>
          <h2
            className="font-display font-bold text-[#F1F1EB] leading-none"
            style={{ fontSize: "clamp(1.8rem,5vw,4rem)", letterSpacing: "-0.02em" }}
          >
            Captured
            <span className="font-serif italic font-normal block text-[#8B2020]">Moments!</span>
          </h2>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {/* Tall left */}
          <div className="row-span-2 overflow-hidden rounded-lg group">
            <PlaceholderImage
              src={momentPhotos[0].src}
              alt={momentPhotos[0].label}
              gradient={gradients.moment}
              aspectRatio="aspect-[3/5]"
              className="w-full h-full group-hover:scale-[1.04] transition-transform duration-700"
              label={momentPhotos[0].label}
            />
          </div>
          {/* Top mid */}
          <div className="overflow-hidden rounded-lg group">
            <PlaceholderImage
              src={momentPhotos[1].src}
              alt={momentPhotos[1].label}
              gradient={gradients.moment}
              aspectRatio="aspect-square"
              className="w-full h-full group-hover:scale-[1.04] transition-transform duration-700"
              label={momentPhotos[1].label}
            />
          </div>
          {/* Top right */}
          <div className="overflow-hidden rounded-lg group">
            <PlaceholderImage
              src={momentPhotos[2].src}
              alt={momentPhotos[2].label}
              gradient={gradients.moment}
              aspectRatio="aspect-square"
              className="w-full h-full group-hover:scale-[1.04] transition-transform duration-700"
              label={momentPhotos[2].label}
            />
          </div>
          {/* Wide bottom right */}
          <div className="col-span-2 overflow-hidden rounded-lg group">
            <PlaceholderImage
              src={momentPhotos[3].src}
              alt={momentPhotos[3].label}
              gradient={gradients.moment}
              aspectRatio="aspect-[16/7]"
              className="w-full h-full group-hover:scale-[1.04] transition-transform duration-700"
              label={momentPhotos[3].label}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

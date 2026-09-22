"use client";

import { portfolioData, stats } from "@/data/portfolio";
import PlaceholderImage, { gradients } from "@/components/ui/PlaceholderImage";

export default function About() {
  return (
    <section id="about" className="bg-[#F1F1EB] py-[clamp(100px,14vw,180px)] relative">
      <div className="grain" />
      <div className="max-w-[1340px] mx-auto px-[clamp(20px,4vw,60px)] relative z-10">
        {/* Heading */}
        <div className="mb-[clamp(60px,8vw,100px)]">
          <p className="font-body text-[11px] tracking-[0.2em] uppercase text-[#8D8D87] mb-4 font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B2020]" />
            About Me/
          </p>
          <h2
            className="font-display font-bold text-[#050505] leading-[0.95]"
            style={{ fontSize: "clamp(2.5rem,7vw,6rem)", letterSpacing: "-0.03em" }}
          >
            About {portfolioData.firstName}!
          </h2>
          <p className="font-body text-[#8D8D87] text-[clamp(14px,1.4vw,17px)] leading-[1.75] max-w-[580px] mt-6">
            {portfolioData.introduction}
          </p>
        </div>

        {/* Photo composition & Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 items-start">
          {/* Left vertical portrait */}
          <div className="overflow-hidden rounded-xl border border-black/[0.08] shadow-sm">
            <PlaceholderImage
              src={portfolioData.image}
              alt={portfolioData.name}
              gradient={gradients.about}
              aspectRatio="aspect-[3/4]"
              className="w-full grayscale hover:grayscale-0 transition-all duration-700"
              label="Raj Gupta"
            />
          </div>

          {/* Right column: Bio + Stats + Strengths */}
          <div className="flex flex-col gap-6">
            {/* Editorial Bio Card */}
            <div className="border border-black/[0.08] bg-white/[0.4] backdrop-blur-sm rounded-xl p-6 sm:p-8">
              <p className="font-body text-[clamp(14px,1.4vw,16px)] leading-[1.85] text-[#3A3A38]">
                {portfolioData.about}
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 mt-8 border-t border-black/[0.08]">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="font-display font-bold text-[clamp(1.8rem,3vw,2.5rem)] text-[#050505] leading-none tracking-tight">
                      {stat.value}
                    </span>
                    <span className="font-body text-[11px] tracking-[0.05em] uppercase text-[#8D8D87] mt-1.5 leading-tight">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Strengths Pills */}
              <div className="mt-8 pt-6 border-t border-black/[0.08]">
                <p className="font-body text-[10px] tracking-[0.16em] uppercase text-[#8D8D87] font-semibold mb-3">
                  Core Strengths &amp; Disciplines
                </p>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.strengths.map((s) => (
                    <span
                      key={s.title}
                      className="font-body text-[12px] tracking-[0.03em] text-[#3A3A38] border border-black/[0.12] bg-white/[0.6] rounded-full px-3.5 py-1"
                    >
                      {s.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* University & Location snippet card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-black/[0.08] bg-white/[0.3] rounded-xl p-5">
                <p className="font-body text-[10px] tracking-[0.15em] uppercase text-[#8D8D87] mb-1 font-semibold">
                  Education
                </p>
                <h4 className="font-display font-bold text-[15px] text-[#050505] mb-0.5">
                  MSc Digital Marketing
                </h4>
                <p className="font-body text-[12px] text-[#8D8D87]">
                  University of West London, UK
                </p>
              </div>

              <div className="border border-black/[0.08] bg-white/[0.3] rounded-xl p-5">
                <p className="font-body text-[10px] tracking-[0.15em] uppercase text-[#8D8D87] mb-1 font-semibold">
                  Engineering Roots
                </p>
                <h4 className="font-display font-bold text-[15px] text-[#050505] mb-0.5">
                  BSc Computer Systems
                </h4>
                <p className="font-body text-[12px] text-[#8D8D87]">
                  ISMT College
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

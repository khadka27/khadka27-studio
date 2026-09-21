"use client";

import { portfolioData } from "@/data/portfolio";
import PlaceholderImage, { gradients } from "@/components/ui/PlaceholderImage";

export default function About() {
  return (
    <section id="about" className="bg-[#F1F1EB] py-[clamp(100px,14vw,180px)] relative">
      <div className="grain" />
      <div className="max-w-[1340px] mx-auto px-[clamp(20px,4vw,60px)] relative z-10">

        {/* Heading */}
        <div className="mb-[clamp(60px,8vw,100px)]">
          <h2
            className="font-display font-bold text-[#050505] leading-[0.95]"
            style={{ fontSize: "clamp(2.5rem,7vw,6rem)", letterSpacing: "-0.03em" }}
          >
            About {portfolioData.firstName}!
          </h2>
          <p className="font-body text-[#8D8D87] text-[clamp(14px,1.4vw,16px)] leading-[1.75] max-w-[480px] mt-6">
            {portfolioData.introduction}
          </p>
        </div>

        {/* Photo composition */}
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.6fr] gap-4 items-start">
          {/* Left vertical */}
          <div className="overflow-hidden rounded">
            <PlaceholderImage
              gradient={gradients.about}
              aspectRatio="aspect-[3/4]"
              className="w-full"
              label="Portrait"
            />
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded">
              <PlaceholderImage
                gradient="from-stone-200 via-neutral-200 to-stone-300"
                aspectRatio="aspect-[16/10]"
                className="w-full"
                label="Work"
              />
            </div>

            <div className="border border-black/[0.08] rounded p-8">
              <p className="font-body text-[clamp(15px,1.5vw,17px)] leading-[1.8] text-[#3A3A38] whitespace-pre-line">
                {portfolioData.about}
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {portfolioData.skills.slice(0, 8).map((skill) => (
                  <span
                    key={skill}
                    className="font-body text-[12px] tracking-[0.04em] text-[#8D8D87] border border-black/[0.12] rounded-full px-3.5 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

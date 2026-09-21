"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import PlaceholderImage, { gradients } from "@/components/ui/PlaceholderImage";

const projectGradients = [
  gradients.sathi,
  gradients.smartDocs,
  gradients.futsal,
  gradients.playlist,
  gradients.cars,
];

function ProjectBlock({ project, index }: { project: typeof projects[0]; index: number }) {
  const blockRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const imgInnerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(imgWrapRef.current, { clipPath: "inset(100% 0% 0% 0%)" });
      gsap.set(imgInnerRef.current, { scale: 1.1 });
      gsap.set(titleRef.current, { y: 50, opacity: 0 });
      gsap.set(metaRef.current, { opacity: 0 });

      ScrollTrigger.create({
        trigger: blockRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.timeline({ defaults: { ease: "power3.out" } })
            .to(imgWrapRef.current, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power4.inOut" })
            .to(imgInnerRef.current, { scale: 1, duration: 1.4, ease: "power3.out" }, "<")
            .to(titleRef.current, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
            .to(metaRef.current, { opacity: 1, duration: 0.6 }, "-=0.4");
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div ref={blockRef} className="mb-[clamp(80px,12vw,160px)]">
      <Link href={`/work/${project.slug}`} data-cursor="project" className="block no-underline proj-card">
        {/* Meta */}
        <div ref={metaRef} className="flex justify-between items-center mb-5 opacity-0">
          <div className="flex gap-3 items-center">
            <span className="font-body text-[11px] tracking-[0.12em] text-[#8D8D87]/50">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-body text-[11px] tracking-[0.08em] border border-white/[0.12] text-white/50 rounded-full px-3 py-0.5">
              {project.type}
            </span>
          </div>
          <span className="font-body text-[11px] text-[#8D8D87]/40">{project.year}</span>
        </div>

        {/* Image */}
        <div
          ref={imgWrapRef}
          className="overflow-hidden rounded"
          style={{ aspectRatio: isEven ? "16/9" : "21/9" }}
        >
          <div ref={imgInnerRef} className="w-full h-full will-change-transform">
            <PlaceholderImage
              gradient={projectGradients[index % projectGradients.length]}
              className="w-full h-full proj-img"
              aspectRatio=""
              label={project.title}
            />
          </div>
        </div>

        {/* Title row */}
        <div ref={titleRef} className="flex justify-between items-center mt-6 opacity-0">
          <h3
            className="font-display font-bold text-[#F1F1EB] leading-none"
            style={{ fontSize: "clamp(1.5rem,4vw,3rem)", letterSpacing: "-0.02em" }}
          >
            {project.title}
          </h3>
          <div className="proj-arrow w-11 h-11 rounded-full border border-white/[0.15] flex items-center justify-center shrink-0 transition-all duration-300">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="-rotate-45">
              <path d="M1 13L13 1M13 1H5M13 1V9" stroke="#F1F1EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <p className="font-body text-[14px] leading-[1.7] text-[#8D8D87]/70 mt-3 max-w-[560px]">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tools.slice(0, 4).map((tool) => (
            <span key={tool} className="font-body text-[11px] border border-white/[0.1] text-white/35 rounded-full px-3 py-1">
              {tool}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
}

export default function WorkSection() {
  return (
    <section id="works" className="bg-[#050505] py-[clamp(80px,12vw,140px)]">
      <div className="max-w-[1340px] mx-auto px-[clamp(20px,4vw,60px)]">
        <div className="flex justify-between items-center mb-[clamp(60px,8vw,100px)] border-b border-white/[0.08] pb-6">
          <p className="font-body text-[12px] tracking-[0.15em] uppercase text-white/40">My Works/</p>
          <Link href="/work" className="font-body text-[12px] tracking-[0.1em] uppercase text-white/40 border-b border-white/[0.15] pb-0.5 no-underline hover:text-[#F1F1EB] transition-colors">
            View all →
          </Link>
        </div>
        {projects.map((project, i) => (
          <ProjectBlock key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

import Link from "next/link";
import { type Project } from "@/data/projects";
import PlaceholderImage, { gradients } from "@/components/ui/PlaceholderImage";

const projectGradients: Record<string, string> = {
  sathi: gradients.sathi,
  "smart-docs": gradients.smartDocs,
  "futsal-nepal": gradients.futsal,
  "song-playlist": gradients.playlist,
  "car-collection": gradients.cars,
};

interface ProjectCardProps {
  project: Project;
  index: number;
  variant?: "large" | "small";
}

export default function ProjectCard({ project, index, variant = "large" }: ProjectCardProps) {
  const grad = projectGradients[project.slug] ?? gradients.marquee;

  if (variant === "small") {
    return (
      <div className="flex-1 min-w-[300px]">
        <Link href={`/work/${project.slug}`} className="no-underline block" data-cursor="project">
          <div className="overflow-hidden rounded aspect-[4/3] group">
            <PlaceholderImage gradient={grad} className="w-full h-full proj-img group-hover:scale-[1.04] transition-transform duration-700" aspectRatio="" label={project.title} />
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center mb-1.5">
              <span className="font-body text-[11px] tracking-[0.1em] text-[#8D8D87]/50">{project.type}</span>
              <span className="font-body text-[11px] text-[#8D8D87]/40">{project.year}</span>
            </div>
            <h3 className="font-display font-bold text-[#050505] leading-none" style={{ fontSize: "clamp(1.2rem,2.5vw,1.8rem)", letterSpacing: "-0.02em" }}>
              {project.title}
            </h3>
          </div>
        </Link>
      </div>
    );
  }

  const isEven = index % 2 === 0;
  return (
    <div className="mb-[clamp(60px,10vw,120px)]">
      <Link href={`/work/${project.slug}`} className="no-underline block proj-card" data-cursor="project">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-3 items-center">
            <span className="font-body text-[11px] tracking-[0.1em] text-[#8D8D87]/40">{String(index + 1).padStart(2, "0")}</span>
            <span className="font-body text-[11px] border border-black/[0.1] text-[#8D8D87] rounded-full px-3 py-0.5">{project.type}</span>
          </div>
          <span className="font-body text-[11px] text-[#8D8D87]/40">{project.year}</span>
        </div>
        <div className="overflow-hidden rounded" style={{ aspectRatio: isEven ? "16/9" : "21/9" }}>
          <PlaceholderImage gradient={grad} className="w-full h-full proj-img" aspectRatio="" label={project.title} />
        </div>
        <div className="flex justify-between items-center mt-5">
          <h3 className="font-display font-bold text-[#F1F1EB] leading-none" style={{ fontSize: "clamp(1.5rem,4vw,3rem)", letterSpacing: "-0.02em" }}>{project.title}</h3>
          <div className="proj-arrow w-11 h-11 rounded-full border border-white/[0.15] flex items-center justify-center shrink-0 transition-all duration-300">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="-rotate-45">
              <path d="M1 13L13 1M13 1H5M13 1V9" stroke="#F1F1EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <p className="font-body text-[13px] leading-[1.7] text-[#8D8D87]/65 mt-2.5 max-w-[500px]">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mt-3.5">
          {project.tools.slice(0, 4).map((t) => (
            <span key={t} className="font-body text-[11px] border border-white/[0.08] text-white/35 rounded-full px-3 py-1">{t}</span>
          ))}
        </div>
      </Link>
    </div>
  );
}

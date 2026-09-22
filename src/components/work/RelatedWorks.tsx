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

export default function RelatedWorks({ projects }: { projects: Project[] }) {
  if (!projects.length) return null;

  return (
    <section className="border-t border-black/[0.08] pt-[clamp(60px,8vw,100px)] mt-[clamp(60px,8vw,100px)]">
      <div className="flex justify-between items-center mb-[clamp(40px,5vw,64px)]">
        <h2 className="font-display font-bold text-[#050505] leading-none" style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)", letterSpacing: "-0.02em" }}>
          Related Works
        </h2>
        <Link href="/work" className="font-body text-[12px] tracking-[0.1em] uppercase text-[#8D8D87] border-b border-black/[0.15] pb-0.5 no-underline hover:text-[#050505] transition-colors">
          View all works →
        </Link>
      </div>

      <div className="flex gap-[clamp(16px,3vw,32px)] flex-wrap">
        {projects.slice(0, 2).map((project) => (
          <div key={project.slug} className="flex-1 min-w-[280px]">
            <Link href={`/work/${project.slug}`} className="block no-underline related-wrap" data-cursor="project">
              <div className="overflow-hidden rounded aspect-[4/3] mb-4">
                <PlaceholderImage
                  src={project.thumbnail || project.heroImage}
                  alt={project.title}
                  gradient={gradients.marquee}
                  className="w-full h-full related-img"
                  aspectRatio=""
                  label={project.title}
                />
              </div>
              <div className="flex justify-between items-center mb-1.5">
                <span className="font-body text-[11px] uppercase tracking-[0.08em] text-[#8D8D87]">{project.type}</span>
                <span className="font-body text-[11px] text-[#8D8D87]">{project.year}</span>
              </div>
              <h3 className="font-display font-bold text-[#050505] leading-none" style={{ fontSize: "clamp(1.2rem,2.5vw,1.8rem)", letterSpacing: "-0.02em" }}>
                {project.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PlaceholderImage, { gradients } from "@/components/ui/PlaceholderImage";

export const metadata: Metadata = {
  title: "Works — Roshan Khadka",
  description: "Selected design and development projects by Roshan Khadka — UI/UX Designer & Developer based in Kathmandu, Nepal.",
};

const projectGradients: Record<string, string> = {
  sathi: gradients.sathi,
  "smart-docs": gradients.smartDocs,
  "futsal-nepal": gradients.futsal,
  "song-playlist": gradients.playlist,
  "car-collection": gradients.cars,
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="bg-[#050505] min-h-screen pt-[120px]">
        <div className="max-w-[1340px] mx-auto px-[clamp(20px,4vw,60px)] pb-[120px]">
          {/* Heading */}
          <div className="mb-[clamp(60px,8vw,100px)] border-b border-white/[0.08] pb-8">
            <h1 className="font-display font-bold text-[#F1F1EB] leading-[0.9]" style={{ fontSize: "clamp(3rem,9vw,8rem)", letterSpacing: "-0.03em" }}>
              MY WORKS
            </h1>
            <p className="font-body text-[#8D8D87] text-[14px] leading-[1.7] max-w-[440px] mt-5">
              A selection of design and development projects spanning web apps, mobile design, and digital products.
            </p>
          </div>

          {/* Project list */}
          <div>
            {projects.map((project, i) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                data-cursor="project"
                className="no-underline grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10 border-b border-white/[0.07] work-list-item"
              >
                <div>
                  <div className="flex gap-3 items-center mb-3">
                    <span className="font-body text-[11px] tracking-[0.12em] text-[#8D8D87]/40">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-body text-[11px] border border-white/[0.1] text-white/35 rounded-full px-3 py-0.5">{project.type}</span>
                  </div>
                  <h2 className="font-display font-bold text-[#F1F1EB] leading-none mb-3" style={{ fontSize: "clamp(1.5rem,4vw,2.8rem)", letterSpacing: "-0.02em" }}>
                    {project.title}
                  </h2>
                  <p className="font-body text-[13px] leading-[1.7] text-[#8D8D87]/60 max-w-[400px]">
                    {project.shortDescription}
                  </p>
                </div>
                <div className="overflow-hidden rounded aspect-video">
                  <PlaceholderImage
                    gradient={projectGradients[project.slug] ?? gradients.marquee}
                    className="w-full h-full work-list-img"
                    aspectRatio=""
                    label={project.title}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

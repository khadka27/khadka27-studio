import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PlaceholderImage, { gradients } from "@/components/ui/PlaceholderImage";

export const metadata: Metadata = {
  title: "Works & Campaigns — Raj Gupta",
  description:
    "Selected social media campaigns, video productions, and content strategies by Raj Gupta — Content Creator & Digital Marketing Specialist based in London, UK.",
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="bg-[#050505] min-h-screen pt-[120px]">
        <div className="max-w-[1340px] mx-auto px-[clamp(20px,4vw,60px)] pb-[120px]">
          {/* Heading */}
          <div className="mb-[clamp(60px,8vw,100px)] border-b border-white/[0.08] pb-8">
            <h1
              className="font-display font-bold text-[#F1F1EB] leading-[0.9]"
              style={{ fontSize: "clamp(3rem,9vw,8rem)", letterSpacing: "-0.03em" }}
            >
              MY WORKS
            </h1>
            <p className="font-body text-[#8D8D87] text-[14px] leading-[1.7] max-w-[500px] mt-5">
              A curated selection of campaigns, video content strategies, and paid advertising initiatives across major platforms.
            </p>
          </div>

          {/* Project list */}
          <div>
            {projects.map((project, i) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                data-cursor="project"
                className="no-underline grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10 border-b border-white/[0.07] work-list-item group"
              >
                <div>
                  <div className="flex gap-3 items-center mb-3">
                    <span className="font-body text-[11px] tracking-[0.12em] text-[#8D8D87]/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-body text-[11px] border border-white/[0.1] text-white/40 rounded-full px-3 py-0.5">
                      {project.type}
                    </span>
                    {project.client && (
                      <span className="font-body text-[11px] text-[#8D8D87]/50">
                        {project.client}
                      </span>
                    )}
                  </div>
                  <h2
                    className="font-display font-bold text-[#F1F1EB] group-hover:text-white leading-none mb-3 transition-colors"
                    style={{ fontSize: "clamp(1.5rem,4vw,2.8rem)", letterSpacing: "-0.02em" }}
                  >
                    {project.title}
                  </h2>
                  <p className="font-body text-[13px] leading-[1.7] text-[#8D8D87]/70 max-w-[440px] mb-4">
                    {project.shortDescription}
                  </p>
                  {project.results && project.results[0] && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[#F1F1EB] text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B2020]" />
                      {project.results[0]}
                    </div>
                  )}
                </div>
                <div className="overflow-hidden rounded-lg aspect-video border border-white/10">
                  <PlaceholderImage
                    src={project.thumbnail || project.heroImage}
                    alt={project.title}
                    gradient={gradients.marquee}
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

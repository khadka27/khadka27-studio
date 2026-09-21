import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getRelatedProjects, projects } from "@/data/projects";
import ProjectSidebar from "@/components/work/ProjectSidebar";
import RelatedWorks from "@/components/work/RelatedWorks";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PlaceholderImage, { gradients } from "@/components/ui/PlaceholderImage";

const projectGradients: Record<string, string> = {
  sathi: gradients.sathi,
  "smart-docs": gradients.smartDocs,
  "futsal-nepal": gradients.futsal,
  "song-playlist": gradients.playlist,
  "car-collection": gradients.cars,
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Roshan Khadka`,
    description: project.shortDescription,
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project.relatedProjects);
  const grad = projectGradients[slug] ?? gradients.marquee;

  return (
    <>
      <Header />
      <main className="bg-[#F1F1EB] min-h-screen">
        {/* Hero */}
        <div className="bg-[#F1F1EB] pt-[120px]">
          <div className="max-w-[1340px] mx-auto px-[clamp(20px,4vw,60px)]">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 mb-12 font-body text-[12px] text-[#8D8D87] tracking-[0.08em]" aria-label="Breadcrumb">
              <Link href="/" className="no-underline text-[#8D8D87] hover:text-[#050505] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/work" className="no-underline text-[#8D8D87] hover:text-[#050505] transition-colors">Work</Link>
              <span>/</span>
              <span className="text-[#050505]">{project.title}</span>
            </nav>

            <h1 className="font-display font-bold text-[#050505] leading-[0.9] mb-[clamp(60px,8vw,100px)]" style={{ fontSize: "clamp(3rem,10vw,9rem)", letterSpacing: "-0.03em" }}>
              {project.title}
            </h1>
          </div>

          {/* Full-width hero */}
          <div className="w-full aspect-[21/9] overflow-hidden">
            <PlaceholderImage gradient={grad} className="w-full h-full" aspectRatio="" label={project.title} />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-[1340px] mx-auto px-[clamp(20px,4vw,60px)] pt-[clamp(60px,8vw,100px)] pb-[clamp(80px,10vw,140px)]">
          <div className="grid gap-[clamp(40px,6vw,80px)]" style={{ gridTemplateColumns: "240px 1fr" }}>
            {/* Sidebar */}
            <ProjectSidebar project={project} />

            {/* Article */}
            <article>
              <blockquote className="font-serif italic text-[#050505] leading-[1.4] mb-[clamp(40px,5vw,60px)] border-l-2 border-black/[0.12] pl-7" style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)" }}>
                &ldquo;{project.shortDescription}&rdquo;
              </blockquote>

              <Section title="Overview">
                <p className={bodyClass}>{project.description}</p>
              </Section>

              <div className="my-12 overflow-hidden rounded aspect-video">
                <PlaceholderImage gradient={grad} className="w-full h-full" aspectRatio="" label="Overview" />
              </div>

              <Section title="The Challenge">
                <p className={bodyClass}>{project.challenge}</p>
              </Section>

              <Section title="The Solution">
                <p className={bodyClass}>{project.solution}</p>
              </Section>

              {/* Gallery grid */}
              <div className="grid grid-cols-2 gap-3 my-12">
                {[0, 1].map((i) => (
                  <div key={i} className="overflow-hidden rounded aspect-[4/3]">
                    <PlaceholderImage gradient={i === 0 ? grad : "from-stone-400 via-neutral-400 to-zinc-500"} className="w-full h-full" aspectRatio="" label={`Gallery ${i + 1}`} />
                  </div>
                ))}
              </div>

              <Section title="Design Details">
                <p className={bodyClass}>{project.designDetails}</p>
              </Section>

              <Section title="Outcome">
                <p className={bodyClass}>{project.outcome}</p>
              </Section>

              {/* Tools */}
              <div className="mt-12 pt-8 border-t border-black/[0.08]">
                <p className="font-body text-[11px] tracking-[0.15em] uppercase text-[#8D8D87] mb-4">Built with</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="font-body text-[12px] tracking-[0.04em] text-[#8D8D87] border border-black/[0.12] rounded-full px-3.5 py-1.5">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <RelatedWorks projects={related} />
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-[clamp(32px,5vw,48px)]">
      <h2 className="font-body text-[11px] tracking-[0.18em] uppercase text-[#8D8D87] mb-4 font-medium">{title}</h2>
      {children}
    </div>
  );
}

const bodyClass = "font-body text-[clamp(14px,1.4vw,16px)] leading-[1.8] text-[#3A3A38]";

import Link from "next/link";
import { projects, type Project } from "@/lib/content";
import { Art } from "./Art";
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className={`project project-${index % 3}`} data-reveal>
      <Link
        href={`/portfolio/${project.slug}`}
        className="project-link"
        aria-label={`Prohlédnout projekt ${project.name}`}
      >
        <div className="project-image">
          <Art project={project} />
          <span className="view-project">Prohlédnout ↗</span>
        </div>
        <div className="project-caption">
          <h3>
            {project.name}
            <span>↗</span>
          </h3>
          <div>
            <p>{project.category}</p>
            <span>{project.year}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
export default function Work({ all = false }: { all?: boolean }) {
  return (
    <section id="prace" className="work section">
      <div className="section-top">
        <p className="eyebrow">01 / Vybrané práce</p>
        <span className="muted">{all ? "05" : "04"} projektů · 2025—2026</span>
      </div>
      <div className="work-intro">
        <h2>
          Každý projekt.
          <br />
          Vlastní <em>charakter.</em>
        </h2>
        <p>
          Od první myšlenky k poslednímu detailu.
          <br />
          Výběr konceptů napříč disciplínami.
          <span className="demo-note">Ukázkové projekty / vlastní tvorba</span>
        </p>
      </div>
      <div className="project-grid">
        {projects.slice(0, all ? 5 : 4).map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
      {!all && (
        <Link href="/portfolio" className="text-link">
          Všechny projekty <span>↗</span>
        </Link>
      )}
    </section>
  );
}

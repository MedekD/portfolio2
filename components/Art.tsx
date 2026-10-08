import Image from "next/image";
import type { Project } from "@/lib/content";
export function Art({
  project,
  priority = false,
  variant = false,
}: {
  project: Project;
  priority?: boolean;
  variant?: boolean;
}) {
  return (
    <div
      className={`art art-${project.kind} ${variant ? "art-alt" : ""}`}
      style={{ background: project.color }}
    >
      <Image
        src={`/projects/${project.slug}.svg`}
        alt={`Autorský demo návrh projektu ${project.name}: ${project.category}`}
        fill
        sizes="(max-width: 760px) 100vw, 80vw"
        priority={priority}
      />
    </div>
  );
}

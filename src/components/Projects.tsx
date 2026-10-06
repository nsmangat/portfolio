import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const [index, setIndex] = useState(0);
  const count = projects.length;
  const project = projects[index];

  const showPrevious = () => setIndex((i) => (i - 1 + count) % count);
  const showNext = () => setIndex((i) => (i + 1) % count);

  return (
    <section
      id="projects"
      className="mx-auto flex max-w-4xl scroll-mt-16 flex-col gap-6 border-t border-line px-6 py-20"
    >
      <h2 className="text-2xl font-bold text-ink">Projects</h2>
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous project"
          className="shrink-0 text-muted transition-colors hover:text-signal"
        >
          <FaChevronLeft className="h-5 w-5" />
        </button>
        <div className="min-w-0 flex-1">
          <ProjectCard {...project} />
        </div>
        <button
          type="button"
          onClick={showNext}
          aria-label="Next project"
          className="shrink-0 text-muted transition-colors hover:text-signal"
        >
          <FaChevronRight className="h-5 w-5" />
        </button>
      </div>
      <div className="flex justify-center gap-2">
        {projects.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show ${p.name}`}
            aria-current={i === index}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === index ? "bg-signal" : "bg-line"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

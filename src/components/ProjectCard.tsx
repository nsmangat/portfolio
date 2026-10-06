import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import type { Project } from "../data/types";

export function ProjectCard({
  name,
  description,
  tags,
  link,
  image,
  video,
}: Project) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-line bg-surface">
      {image && (
        <img
          src={image}
          alt={`${name} image`}
          className="aspect-video w-full object-cover"
        />
      )}
      {video && (
        <div className="flex justify-center bg-bg">
          <video
            src={video}
            aria-label={`${name} demo`}
            controls
            muted
            playsInline
            preload="metadata"
            className="max-h-120 max-w-full"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="text-lg font-semibold text-ink">{name}</h3>
        <p className="text-sm text-ink/90">{description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-signal/40 bg-line px-3 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-signal"
        >
          View project
          <FaArrowUpRightFromSquare className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}

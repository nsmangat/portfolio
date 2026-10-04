import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import type { Experience } from "../data/types";

export function ExperienceCard({
  title,
  company,
  companyUrl,
  location,
  startDate,
  endDate,
  description,
  tags,
  logo,
}: Experience) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-line bg-surface p-6">
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          {logo && (
            <img
              src={logo}
              alt={`${company} logo`}
              className="h-8 w-8 shrink-0 rounded object-contain"
            />
          )}
          <h3 className="text-lg font-semibold text-ink">
            {title}
            {company && (
              <>
                {" "}
                · <span className="italic">{company}</span>
                {companyUrl && (
                  <a
                    href={companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${company} website`}
                    className="ml-3 inline-block align-middle text-muted transition-colors hover:text-signal"
                  >
                    <FaArrowUpRightFromSquare className="h-3 w-3" />
                  </a>
                )}
              </>
            )}
          </h3>
        </div>
        <span className="text-sm text-muted">
          {startDate} – {endDate}
        </span>
      </div>
      <p className="text-sm text-muted">{location}</p>
      <ul className="list-inside list-disc space-y-1 text-ink/90">
        {description.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
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
    </div>
  );
}

import type { Experience } from "@/data/experiences";
import { cn } from "@/lib/utils";

type ExperienceDetailProps = {
  experience: Experience;
  compact?: boolean;
};

export function ExperienceDetail({
  experience,
  compact = false,
}: ExperienceDetailProps) {
  return (
    <article
      className={cn(
        compact
          ? "border-accent border-l-2 pb-2 pl-4"
          : "mt-10 grid gap-8 border-foreground/20 border-t pt-7 lg:grid-cols-[minmax(14rem,0.65fr)_minmax(0,1.35fr)] lg:gap-16",
      )}
    >
      {compact ? null : (
        <header>
          <p className="font-mono text-label tracking-label text-accent uppercase">
            Selected role
          </p>
          <h3 className="mt-4 text-5xl leading-none tracking-[-0.03em] sm:text-6xl">
            {experience.company}
          </h3>
          <p className="mt-4 text-base text-foreground/75">{experience.role}</p>
          <p className="mt-2 font-mono text-label text-foreground/60">
            {experience.dates}
          </p>
        </header>
      )}

      <div>
        <p
          className={cn(
            "text-foreground/80",
            compact
              ? "text-sm leading-6"
              : "max-w-[62ch] text-base leading-7 sm:text-lg sm:leading-8",
          )}
        >
          {experience.summary}
        </p>
        <ul
          className={cn(
            "grid",
            compact ? "mt-4 gap-3" : "mt-6 gap-4 sm:grid-cols-2",
          )}
        >
          {experience.highlights.map((highlight) => (
            <li
              key={highlight}
              className={cn(
                "border-foreground/15 border-t text-sm leading-6 text-foreground/65",
                compact ? "pt-3" : "pt-4",
              )}
            >
              <span aria-hidden="true" className="mr-2 text-accent">
                ↳
              </span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

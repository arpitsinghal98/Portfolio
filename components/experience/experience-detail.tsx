import type { Experience } from "@/data/experiences";

export function ExperienceDetail({ experience }: { experience: Experience }) {
  return (
    <article
      id="experience-detail"
      className="mt-10 grid gap-8 border-foreground/20 border-t pt-7 lg:grid-cols-[minmax(14rem,0.65fr)_minmax(0,1.35fr)] lg:gap-16"
    >
      <header>
        <p className="font-mono text-[0.6875rem] tracking-[0.14em] text-accent uppercase">
          Selected role
        </p>
        <h3 className="mt-4 text-5xl leading-none tracking-[-0.03em] sm:text-6xl">
          {experience.company}
        </h3>
        <p className="mt-4 text-base text-foreground/75">{experience.role}</p>
        <p className="mt-2 font-mono text-[0.6875rem] text-foreground/50">
          {experience.dates}
        </p>
      </header>

      <div>
        <p className="max-w-[62ch] text-base leading-7 text-foreground/80 sm:text-lg sm:leading-8">
          {experience.summary}
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {experience.highlights.map((highlight) => (
            <li
              key={highlight}
              className="border-foreground/15 border-t pt-4 text-sm leading-6 text-foreground/65"
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

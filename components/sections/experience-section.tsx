import { ExperienceTimeline } from "@/components/experience/experience-timeline";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="dark scroll-mt-[4.5rem] bg-card px-5 py-[6.875rem] text-foreground sm:px-8"
    >
      <div className="mx-auto w-full max-w-[97.5rem]">
        <header className="flex items-baseline gap-5">
          <h2
            id="experience-heading"
            className="font-mono text-[0.6875rem] tracking-[0.18em] text-foreground/55 uppercase"
          >
            Seven years
          </h2>
          <span aria-hidden="true" className="h-px flex-1 bg-foreground/20" />
          <p className="font-mono text-xs text-accent">Jul 2019 — Present</p>
        </header>

        <ExperienceTimeline />
      </div>
    </section>
  );
}

import { ExperienceTimeline } from "@/components/experience/experience-timeline";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="page-gutter dark bg-card py-20 text-foreground sm:py-24 lg:py-[6.875rem]"
    >
      <div className="site-container">
        <header className="flex items-baseline gap-5">
          <h2
            id="experience-heading"
            className="font-mono text-label tracking-wide text-foreground/55 uppercase"
          >
            Experience
          </h2>
          <span aria-hidden="true" className="h-px flex-1 bg-foreground/20" />
          <p className="font-mono text-xs text-accent">Jul 2019 — Present</p>
        </header>

        <ExperienceTimeline />
      </div>
    </section>
  );
}

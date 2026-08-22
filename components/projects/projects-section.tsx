import { HalfLifeProject } from "@/components/projects/featured/half-life-project";
import { PaperTrailProject } from "@/components/projects/featured/papertrail-project";

export function ProjectsSection() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-[4.5rem] bg-background text-foreground"
    >
      <div className="mx-auto max-w-[97.5rem] px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
        <header className="grid gap-8 border-t border-foreground/80 pt-6 lg:grid-cols-[10rem_minmax(0,1fr)_28rem] lg:gap-12">
          <p className="font-mono text-[0.62rem] tracking-[0.15em] text-accent uppercase">
            01 / Work
          </p>
          <h2
            id="work-heading"
            className="max-w-[9ch] text-[clamp(3.5rem,6.5vw,7rem)] leading-[0.9] tracking-[-0.04em]"
          >
            Selected systems.
          </h2>
          <p className="self-end text-base leading-8 text-muted-foreground sm:text-lg">
            Two products shaped around the same belief: AI is most useful when
            the system around it is legible, grounded, and intentional.
          </p>
        </header>

        <div className="mt-24 space-y-32 sm:mt-32 sm:space-y-44">
          <HalfLifeProject />
          <PaperTrailProject />
        </div>
      </div>
    </section>
  );
}

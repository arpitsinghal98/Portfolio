import { HalfLifeProject } from "@/components/projects/half-life-project";
import { MailIqProject } from "@/components/projects/mail-iq-project";
import { PaperTrailProject } from "@/components/projects/paper-trail-project";
import { WhisprProject } from "@/components/projects/whispr-project";

export function SelectedWorkSection() {
  return (
    <section
      id="work"
      aria-labelledby="selected-work-heading"
      className="page-gutter bg-background pt-20 text-foreground sm:pt-24 lg:pt-[7.5rem]"
    >
      <div className="site-container">
        <header className="flex items-baseline gap-5 border-border border-b pb-2.5">
          <h2
            id="selected-work-heading"
            className="font-mono text-label tracking-wide text-muted-foreground uppercase"
          >
            Selected work
          </h2>
          <span aria-hidden="true" className="flex-1" />
          <p className="font-mono text-label tracking-wide text-muted-foreground uppercase">
            01 — 04
          </p>
        </header>

        <div className="mt-10 lg:mt-[3.75rem] lg:space-y-36">
          <div className="border-border border-b pb-12 lg:border-0 lg:pb-0">
            <HalfLifeProject />
          </div>
          <div className="pt-12 lg:pt-0">
            <PaperTrailProject />
          </div>
        </div>

        <div className="mt-20 flex items-baseline gap-5 border-border border-b pb-2.5 sm:mt-24 lg:mt-36">
          <p className="font-mono text-label tracking-wide text-muted-foreground uppercase">
            More projects
          </p>
          <span aria-hidden="true" className="flex-1" />
          <p className="font-mono text-label tracking-wide text-muted-foreground uppercase">
            03 — 04
          </p>
        </div>

        <div className="grid pb-20 sm:pb-24 md:grid-cols-2 md:gap-10 md:pt-10 lg:pb-[7.5rem]">
          <MailIqProject />
          <WhisprProject />
        </div>
      </div>
    </section>
  );
}

import { HalfLifeProject } from "@/components/projects/half-life-project";
import { MailIqProject } from "@/components/projects/mail-iq-project";
import { PaperTrailProject } from "@/components/projects/paper-trail-project";
import { WhisprProject } from "@/components/projects/whispr-project";

export function SelectedWorkSection() {
  return (
    <section
      id="work"
      aria-labelledby="selected-work-heading"
      className="scroll-mt-[4.5rem] bg-background px-5 pt-[7.5rem] text-foreground sm:px-8"
    >
      <div className="mx-auto w-full max-w-[97.5rem]">
        <header className="flex items-baseline gap-5 border-border border-b pb-2.5">
          <h2
            id="selected-work-heading"
            className="font-mono text-[0.6875rem] tracking-[0.18em] text-muted-foreground uppercase"
          >
            Selected work
          </h2>
          <span aria-hidden="true" className="flex-1" />
          <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-muted-foreground uppercase">
            01 — 04
          </p>
        </header>

        <div className="mt-[3.75rem] space-y-28 sm:space-y-36">
          <HalfLifeProject />
          <PaperTrailProject />
        </div>

        <div className="grid gap-10 pt-28 pb-[7.5rem] sm:pt-36 md:grid-cols-2">
          <MailIqProject />
          <WhisprProject />
        </div>
      </div>
    </section>
  );
}

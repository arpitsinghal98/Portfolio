import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="dark relative isolate min-h-svh overflow-hidden bg-background text-foreground"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[62%] bg-secondary/35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-background/20 via-background/70 to-background"
      />

      <div className="relative mx-auto flex min-h-svh w-full max-w-[97.5rem] flex-col px-5 sm:px-8">
        <header className="flex items-baseline justify-between gap-5 py-6 font-mono text-[0.68rem] tracking-[0.18em] uppercase">
          <span>Arpit Singhal</span>
          <span className="hidden text-foreground/80 sm:inline">
            Software Engineer · SF Bay Area
          </span>
          <span className="text-accent">Open to work</span>
        </header>

        <div className="mt-auto pb-8 sm:pb-9">
          <h1
            id="hero-heading"
            className="max-w-[15ch] text-[clamp(3.125rem,8.4vw,9rem)] leading-[0.88] tracking-[-0.03em] text-shadow-lg"
          >
            I build the parts <em className="text-accent">underneath</em> the
            feature.
          </h1>

          <div className="mt-7 flex flex-col gap-6 border-t border-foreground/30 pt-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-[46ch] text-base leading-[1.6] text-foreground/90">
              Founding engineer at TwinMind — AI memory for 400,000 people.
              Before that: eighteen enterprise systems in sync, and a regulated
              pharma platform that could not go down.
            </p>

            <div className="flex items-center justify-between gap-6 sm:justify-end">
              <span className="font-mono text-[0.68rem] tracking-[0.16em] text-foreground/70 uppercase">
                Scroll ↓
              </span>
              <Button
                render={
                  <a
                    href="mailto:arpitsinghal98@outlook.com"
                    aria-label="Email Arpit Singhal"
                  >
                    Email me
                    <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
                  </a>
                }
                size="lg"
                className="bg-accent px-5 font-mono text-[0.68rem] tracking-[0.12em] text-accent-foreground uppercase hover:bg-accent/90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

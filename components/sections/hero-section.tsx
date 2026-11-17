import { ArrowUpRight } from "lucide-react";
import { LinkList } from "@/components/link-list";
import { Button } from "@/components/ui/button";
import { createEmailHref, professionalLinks, siteConfig } from "@/config/site";
import { impactMetrics } from "@/data/metrics";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="dark relative isolate overflow-hidden bg-background text-foreground"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[62%] bg-linear-to-b from-secondary/0 to-secondary/35 to-[6rem]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-background/20 via-background/70 to-background"
      />

      <div className="site-container page-gutter relative flex min-h-[calc(82svh-var(--site-header-offset))] flex-col">
        <div className="mt-auto pt-14 pb-10 sm:pt-20 sm:pb-12">
          <h1
            id="hero-heading"
            className="max-w-[15ch] text-[clamp(3.125rem,8.4vw,9rem)] leading-[0.88] tracking-[-0.03em] text-shadow-lg"
          >
            I build the parts <em className="text-accent">underneath</em> the
            feature.
          </h1>

          <div className="mt-7 flex flex-col gap-6 border-t border-foreground/30 pt-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-[46ch] text-base leading-[1.6] text-foreground/90">
              Founding engineer at TwinMind — AI memory for{" "}
              {impactMetrics.productReach.value} people. Before that:{" "}
              {impactMetrics.connectedSystems.value} enterprise systems in sync
              and a medical information platform in regulated pharma.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:justify-end">
              <LinkList label="Professional links" links={professionalLinks} />
              <Button
                nativeButton={false}
                role="link"
                render={
                  <a
                    href={createEmailHref()}
                    aria-label={`Email ${siteConfig.name}`}
                  >
                    Email me
                    <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
                  </a>
                }
                size="lg"
                className="min-h-11 bg-accent px-4 font-mono text-label tracking-label text-accent-foreground uppercase hover:bg-accent/90 sm:px-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

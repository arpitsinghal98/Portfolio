import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createEmailHref, siteConfig } from "@/config/site";

const professionalLinks = [
  { label: "GitHub", href: siteConfig.links.github },
  { label: "LinkedIn", href: siteConfig.links.linkedin },
] as const;

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

      <div className="site-container page-gutter relative flex min-h-svh flex-col">
        <header className="flex items-baseline justify-between gap-5 py-6 font-mono text-label tracking-wide uppercase">
          <span>{siteConfig.name}</span>
          <span className="hidden text-foreground/80 md:inline">
            {siteConfig.role} · {siteConfig.location}
          </span>
          <span className="text-accent">{siteConfig.availability}</span>
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

            <div className="flex items-center justify-end gap-6">
              <span className="hidden font-mono text-label tracking-emphasis text-foreground/70 uppercase lg:inline">
                Scroll ↓
              </span>
              <nav
                aria-label="Professional links"
                className="flex min-w-0 items-center gap-1 sm:gap-3"
              >
                {professionalLinks.map((link) => (
                  <Button
                    key={link.label}
                    nativeButton={false}
                    render={
                      <a href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    }
                    variant="link"
                    className="h-11 rounded-none px-1.5 font-mono text-label tracking-label text-foreground/75 uppercase hover:text-accent hover:no-underline sm:px-2"
                  />
                ))}

                <Button
                  nativeButton={false}
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
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

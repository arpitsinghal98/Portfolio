import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createEmailHref, siteConfig } from "@/config/site";

const socialLinks = [
  { label: "GitHub", href: siteConfig.links.github },
  { label: "LinkedIn", href: siteConfig.links.linkedin },
] as const;

export function ContactSection() {
  const emailHref = createEmailHref("Portfolio inquiry");

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="page-gutter dark scroll-mt-[4.5rem] bg-background text-foreground"
    >
      <div className="site-container py-20 sm:py-24 lg:pt-28 lg:pb-10">
        <header className="flex items-baseline gap-5">
          <p className="font-mono text-label tracking-wide text-foreground/55 uppercase">
            Contact
          </p>
          <span aria-hidden="true" className="h-px flex-1 bg-foreground/20" />
          <p className="font-mono text-label tracking-wide text-accent uppercase">
            {siteConfig.availability}
          </p>
        </header>

        <div className="pt-16 sm:pt-20">
          <p className="max-w-[56ch] text-base leading-[1.65] text-foreground/70">
            Looking for founding, product, and forward-deployed engineering
            roles where backend systems, AI workflows, and reliability matter.
          </p>

          <a
            href={emailHref}
            aria-label={`Email ${siteConfig.name}`}
            className="group mt-10 block w-fit"
          >
            <h2
              id="contact-heading"
              className="text-[clamp(4.5rem,12vw,12rem)] leading-[0.86] tracking-[-0.035em] transition-colors group-hover:text-accent"
            >
              Let&apos;s <em>talk.</em>
            </h2>
          </a>
        </div>

        <footer className="mt-16 flex flex-col gap-6 border-foreground/20 border-t pt-6 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <nav
            aria-label="Contact links"
            className="flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <Button
              nativeButton={false}
              render={<a href={emailHref}>{siteConfig.email}</a>}
              variant="link"
              className="h-11 rounded-none px-0 font-mono text-label tracking-label text-foreground/75 uppercase hover:text-accent hover:no-underline"
            />

            {socialLinks.map((link) => (
              <Button
                key={link.label}
                nativeButton={false}
                render={
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                    <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
                  </a>
                }
                variant="link"
                className="h-11 rounded-none px-0 font-mono text-label tracking-label text-foreground/75 uppercase hover:text-accent hover:no-underline"
              />
            ))}
          </nav>

          <p className="font-mono text-micro tracking-emphasis text-foreground/45 uppercase">
            {siteConfig.location}
          </p>
        </footer>
      </div>
    </section>
  );
}

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SiteLink } from "@/config/site";
import { cn } from "@/lib/utils";

type LinkListProps = {
  label: string;
  links: readonly SiteLink[];
  className?: string;
  showIcons?: boolean;
};

export function LinkList({
  label,
  links,
  className,
  showIcons = false,
}: LinkListProps) {
  return (
    <nav
      aria-label={label}
      className={cn("flex flex-wrap items-center gap-x-5 gap-y-1", className)}
    >
      {links.map((link) => (
        <Button
          key={link.href}
          nativeButton={false}
          role="link"
          render={
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              {link.label}
              {showIcons && link.external ? (
                <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
              ) : null}
            </a>
          }
          variant="link"
          className="min-h-11 px-0 font-mono text-label tracking-compact text-muted-foreground uppercase hover:text-accent hover:no-underline"
        />
      ))}
    </nav>
  );
}

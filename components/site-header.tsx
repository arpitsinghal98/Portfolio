"use client";

import { useEffect, useRef, useState } from "react";
import { LinkList } from "@/components/link-list";
import { MobileNavigation } from "@/components/mobile-navigation";
import { navigationLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const sections = document.querySelectorAll("main > section");

    function updateTheme() {
      if (!headerRef.current) return;
      const { top, height } = headerRef.current.getBoundingClientRect();
      const midpoint = top + height / 2;

      // At the top of the page the header sits just above the hero.
      for (const section of sections) {
        if (section.getBoundingClientRect().bottom > midpoint) {
          setIsDark(section.classList.contains("dark"));
          break;
        }
      }
    }

    updateTheme();
    window.addEventListener("scroll", updateTheme, { passive: true });
    const resizeObserver = new ResizeObserver(updateTheme);
    resizeObserver.observe(header);

    return () => {
      window.removeEventListener("scroll", updateTheme);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 bg-background/70 text-foreground backdrop-blur-md",
        isDark && "dark",
      )}
    >
      <div className="site-container page-gutter py-2 sm:py-3">
        <div className="flex items-center justify-between gap-4 font-mono text-label tracking-compact uppercase sm:items-baseline">
          <span>{siteConfig.name}</span>
          <span className="hidden text-accent sm:inline">
            {siteConfig.availability}
          </span>
          <MobileNavigation />
        </div>
        <div className="mt-3 hidden items-center justify-between gap-6 sm:flex">
          <p className="text-sm leading-6 text-muted-foreground">
            {siteConfig.role}
            <span className="block sm:inline">
              <span aria-hidden="true" className="hidden sm:inline">
                {" · "}
              </span>
              {siteConfig.location}
            </span>
          </p>
          <LinkList label="Page sections" links={navigationLinks} />
        </div>
      </div>
    </header>
  );
}

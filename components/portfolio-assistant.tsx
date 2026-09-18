"use client";

import { UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function PortfolioAssistant() {
  const [isReady, setIsReady] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    const contactSection = document.getElementById("contact");
    const revealTimer = window.setTimeout(() => setIsReady(true), 700);
    const contactObserver = contactSection
      ? new IntersectionObserver(
          ([entry]) => {
            setIsContactVisible(entry.isIntersecting);
          },
          { threshold: 0.1 },
        )
      : null;

    if (contactSection) {
      contactObserver?.observe(contactSection);
    }

    return () => {
      window.clearTimeout(revealTimer);
      contactObserver?.disconnect();
    };
  }, []);

  const isVisible = isReady && !isContactVisible;

  return (
    <aside
      aria-label="Ask Arpit preview"
      aria-hidden={!isVisible}
      className={cn(
        "pointer-events-none fixed right-5 bottom-5 z-50 transition duration-300 motion-reduce:transition-none sm:right-8 sm:bottom-8",
        isVisible
          ? "visible translate-y-0 opacity-100"
          : "invisible translate-y-3 opacity-0",
      )}
    >
      <Button
        type="button"
        variant="outline"
        disabled
        aria-label={`Ask ${siteConfig.name}`}
        className="h-auto gap-3 rounded-full border-foreground/15 bg-background/95 p-1.5 pr-4 opacity-100 shadow-sm backdrop-blur-sm disabled:opacity-100"
      >
        <span className="relative">
          <span
            aria-hidden="true"
            className="absolute -inset-1 rounded-full border border-accent/45"
          />
          <Avatar className="size-11 sm:size-12">
            <AvatarFallback
              aria-label="Portrait placeholder"
              className="bg-secondary text-accent"
            >
              <UserRound aria-hidden="true" className="size-5 sm:size-6" />
            </AvatarFallback>
          </Avatar>
        </span>
        <span className="pr-0.5 text-sm font-medium text-foreground">
          Ask Arpit
        </span>
      </Button>
    </aside>
  );
}

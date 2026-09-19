"use client";

import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

type ProjectCaseStudyProps = {
  children: ReactNode;
};

export function ProjectCaseStudy({ children }: ProjectCaseStudyProps) {
  return (
    <Collapsible className="mt-8 lg:hidden">
      <CollapsibleTrigger
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "group/case-study min-h-11 w-full justify-between border-border bg-transparent px-4 font-mono text-label tracking-compact uppercase",
        )}
      >
        <span className="group-data-[panel-open]/case-study:hidden">
          View case study
        </span>
        <span className="hidden group-data-[panel-open]/case-study:inline">
          Close case study
        </span>
        <ChevronDown
          aria-hidden="true"
          className="transition-transform group-data-[panel-open]/case-study:rotate-180"
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-8">{children}</CollapsibleContent>
    </Collapsible>
  );
}

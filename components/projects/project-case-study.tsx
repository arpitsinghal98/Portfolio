"use client";

import { ChevronDown } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

type ProjectCaseStudyProps = {
  projectId: string;
  projectName: string;
  children: ReactNode;
  className?: string;
};

export function ProjectCaseStudy({
  projectId,
  projectName,
  children,
  className,
}: ProjectCaseStudyProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openLinkedProject = () => {
      if (window.location.hash === `#${projectId}`) {
        setOpen(true);
      }
    };

    openLinkedProject();
    window.addEventListener("hashchange", openLinkedProject);
    return () => window.removeEventListener("hashchange", openLinkedProject);
  }, [projectId]);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className={cn("mt-7", className)}
    >
      <CollapsibleTrigger
        aria-label={`${open ? "Hide" : "Read"} ${projectName} engineering notes`}
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "group/case-study min-h-11 w-full justify-between border-border bg-transparent px-4 text-sm",
        )}
      >
        <span>
          {open ? "Hide engineering notes" : "Read engineering notes"}
        </span>
        <ChevronDown
          aria-hidden="true"
          className="transition-transform duration-200 group-data-[panel-open]/case-study:rotate-180"
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden opacity-100 transition-[height,opacity] duration-200 ease-out data-ending-style:h-0 data-ending-style:opacity-0 data-starting-style:h-0 data-starting-style:opacity-0 motion-reduce:transition-none">
        <div className="pt-6">{children}</div>
      </CollapsibleContent>
    </Collapsible>
  );
}

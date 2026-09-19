import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { ProjectCaseStudy } from "@/components/projects/project-case-study";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectLayoutProps = {
  project: Project;
  children: ReactNode;
};

function ProjectDetails({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <dl className={cn("space-y-5", className)}>
      {project.details.map(({ label, description }) => (
        <div key={label}>
          <dt className="text-sm font-medium text-foreground">{label}</dt>
          <dd className="mt-1.5 text-sm leading-7 text-muted-foreground">
            {description}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function ProjectTechnologies({ project }: { project: Project }) {
  return (
    <p className="mt-6 text-sm leading-6 text-muted-foreground">
      <span className="sr-only">{project.name} technologies: </span>
      {project.technologies.join(" · ")}
    </p>
  );
}

function ProjectDecision({ project }: { project: Project }) {
  return (
    <div className="border-border border-t pt-5">
      <p className="text-sm text-muted-foreground">Engineering decision</p>
      <p className="mt-3 font-heading text-3xl leading-[1.1]">
        {project.decision}
      </p>
    </div>
  );
}

export function ProjectVisual({
  project,
  children,
  className,
}: ProjectLayoutProps & { className?: string }) {
  return (
    <Card
      role="img"
      aria-label={`${project.name}: illustrative system diagram, not a product screenshot`}
      className={cn(
        "@container/project gap-0 rounded-3xl border border-foreground/10 py-0 shadow-none ring-0",
        className,
      )}
    >
      <CardHeader className="flex shrink-0 items-center justify-between gap-3 rounded-none border-border border-b px-5 py-4 sm:px-7">
        <p className="font-mono text-label tracking-emphasis uppercase">
          {project.name}
        </p>
        <p className="text-xs text-muted-foreground">System illustration</p>
      </CardHeader>
      {children}
    </Card>
  );
}

export function FlagshipProject({ project, children }: ProjectLayoutProps) {
  return (
    <article
      id={project.id}
      aria-labelledby={`${project.id}-title`}
      className="grid items-start gap-10 lg:grid-cols-[minmax(16rem,0.34fr)_minmax(0,0.66fr)] lg:gap-16"
    >
      <div>
        <p className="font-mono text-label tracking-label text-accent uppercase">
          Flagship project · {project.number}
        </p>
        <h3
          id={`${project.id}-title`}
          className="mt-5 text-5xl tracking-[-0.035em] sm:text-7xl"
        >
          {project.name}
        </h3>
        <p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground">
          {project.summary}
        </p>
        <div className="mt-9 hidden lg:block">
          <ProjectDecision project={project} />
        </div>
        <ProjectTechnologies project={project} />
        <ProjectCaseStudy
          projectId={project.id}
          projectName={project.name}
          className="lg:hidden"
        >
          <div className="space-y-6">
            <ProjectDecision project={project} />
            <ProjectDetails project={project} />
          </div>
        </ProjectCaseStudy>
      </div>
      <div className="hidden lg:block">
        {children}
        <div className="mt-5">
          <ProjectDetails
            project={project}
            className="grid grid-cols-2 gap-6 space-y-0"
          />
        </div>
      </div>
    </article>
  );
}

export function SupportingProject({ project, children }: ProjectLayoutProps) {
  return (
    <article
      id={project.id}
      aria-labelledby={`${project.id}-title`}
      className="flex flex-col border-border border-b py-7 md:border-0 md:py-0"
    >
      <div className="mb-6 hidden md:block">{children}</div>
      <header className="flex items-baseline gap-3.5">
        <span className="font-mono text-label tracking-emphasis text-accent">
          {project.number}
        </span>
        <h3
          id={`${project.id}-title`}
          className="text-3xl leading-none tracking-[-0.02em] md:text-[2.5rem]"
        >
          {project.name}
        </h3>
      </header>
      <p className="mt-4 max-w-[46ch] text-body-sm leading-[1.6] text-foreground/80">
        {project.summary}
      </p>
      <ProjectTechnologies project={project} />
      <ProjectCaseStudy projectId={project.id} projectName={project.name}>
        <ProjectDetails project={project} />
      </ProjectCaseStudy>
      {project.sourceUrl ? (
        <Button
          nativeButton={false}
          role="link"
          render={
            <a href={project.sourceUrl} target="_blank" rel="noreferrer">
              View {project.name} source
              <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
            </a>
          }
          variant="link"
          className="mt-3 min-h-11 self-start px-0"
        />
      ) : null}
    </article>
  );
}

import {
  ProjectVisual,
  SupportingProject,
} from "@/components/projects/project-layout";
import { projects } from "@/data/projects";

export function WhisprProject() {
  return (
    <SupportingProject project={projects.whispr}>
      <ProjectVisual
        project={projects.whispr}
        className="dark aspect-3/2 rounded-2xl bg-card text-foreground"
      >
        <div className="grid min-h-0 flex-1 @md/project:grid-cols-[minmax(0,1.25fr)_minmax(9rem,0.75fr)]">
          <div className="p-4 @md/project:p-5">
            <p className="font-heading text-2xl">Live transcript</p>
            <div className="mt-4 space-y-3 text-xs leading-5 text-foreground/80 @md/project:mt-6 @md/project:space-y-4">
              <p>
                <span className="mr-3 font-mono text-xs text-muted-foreground">
                  10:42
                </span>
                Keep the decision with its context.
              </p>
              <p>
                <span className="mr-3 font-mono text-xs text-muted-foreground">
                  10:43
                </span>
                Give each action item an owner.
              </p>
            </div>
          </div>
          <aside className="hidden border-border border-l bg-secondary/55 p-5 @md/project:block">
            <p className="font-mono text-label tracking-label text-muted-foreground uppercase">
              Memory bank
            </p>
            <dl className="mt-5 space-y-4 text-xs">
              <div className="border-t border-border pt-3">
                <dt className="text-muted-foreground">Decisions</dt>
                <dd className="mt-2">Saved with context</dd>
              </div>
              <div className="border-t border-border pt-3">
                <dt className="text-muted-foreground">Action items</dt>
                <dd className="mt-2">Extracted from the meeting</dd>
              </div>
            </dl>
          </aside>
        </div>
      </ProjectVisual>
    </SupportingProject>
  );
}

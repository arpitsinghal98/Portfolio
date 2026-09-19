import {
  ProjectVisual,
  SupportingProject,
} from "@/components/projects/project-layout";
import { projects } from "@/data/projects";

const inboxExamples = [
  { category: "Product updates", action: "Archive" },
  { category: "Receipts", action: "Label" },
  { category: "Needs reply", action: "Keep" },
];

export function MailIqProject() {
  return (
    <SupportingProject project={projects.mailIq}>
      <ProjectVisual
        project={projects.mailIq}
        className="aspect-3/2 rounded-2xl bg-popover"
      >
        <div className="grid min-h-0 flex-1 @md/project:grid-cols-[7.5rem_minmax(0,1fr)]">
          <aside className="hidden border-r border-foreground/10 bg-secondary/60 p-4 @md/project:block">
            <p className="font-mono text-label tracking-label text-muted-foreground uppercase">
              Views
            </p>
            <ul className="mt-5 space-y-3 text-xs">
              <li className="border-l-2 border-accent pl-2.5">Priority</li>
              <li className="border-l-2 border-transparent pl-2.5 text-muted-foreground">
                Newsletters
              </li>
              <li className="border-l-2 border-transparent pl-2.5 text-muted-foreground">
                Receipts
              </li>
            </ul>
          </aside>
          <div className="p-3 @md/project:p-5">
            <p className="font-heading text-2xl">Triage queue</p>
            <ul className="mt-3 border-t border-foreground/10 text-xs @md/project:mt-6">
              {inboxExamples.map(({ category, action }) => (
                <li
                  key={category}
                  className="flex justify-between gap-3 border-b border-foreground/10 py-1.5 @md/project:py-3.5"
                >
                  <span>{category}</span>
                  <span className="text-muted-foreground">{action}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ProjectVisual>
    </SupportingProject>
  );
}

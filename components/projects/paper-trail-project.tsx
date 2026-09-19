import {
  FlagshipProject,
  ProjectVisual,
} from "@/components/projects/project-layout";
import { projects } from "@/data/projects";

export function PaperTrailProject() {
  return (
    <FlagshipProject project={projects.paperTrail}>
      <ProjectVisual
        project={projects.paperTrail}
        className="bg-popover lg:h-[36rem]"
      >
        <div className="grid min-h-0 flex-1 grid-cols-[9rem_minmax(0,1fr)] @2xl/project:grid-cols-[11rem_minmax(0,1fr)]">
          <aside className="border-foreground/10 border-r bg-secondary/60 p-5 @2xl/project:p-6">
            <p className="font-mono text-label tracking-label text-muted-foreground uppercase">
              Sources
            </p>
            <ul className="mt-7 space-y-3 text-sm">
              <li className="border-l-2 border-accent py-1 pl-3">PubMed</li>
              <li className="border-l-2 border-transparent py-1 pl-3 text-muted-foreground">
                arXiv
              </li>
              <li className="border-l-2 border-transparent py-1 pl-3 text-muted-foreground">
                Uploaded PDFs
              </li>
            </ul>
            <p className="mt-12 text-xs leading-5 text-muted-foreground">
              Dense + sparse retrieval
            </p>
          </aside>
          <div className="flex flex-col p-6 @2xl/project:p-10">
            <div>
              <p className="font-mono text-label tracking-label text-accent uppercase">
                Research question
              </p>
              <p className="mt-4 max-w-2xl font-heading text-3xl leading-tight @2xl/project:text-4xl @3xl/project:text-5xl">
                How do the selected sources differ in methodology?
              </p>
            </div>
            <div className="mt-6 border-t border-foreground/10 pt-5 @2xl/project:mt-8">
              <p className="text-sm text-muted-foreground">Grounded response</p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/80">
                Relevant passages from research papers and uploaded documents
                provide the context for an answer, with citations back to the
                sources.
              </p>
              <p className="mt-4 text-xs text-muted-foreground">
                [1] PubMed · [2] arXiv · [3] Document
              </p>
            </div>
            <p className="mt-auto border-t border-foreground/10 pt-5 text-xs leading-5 text-muted-foreground">
              Parse → chunk → embed → retrieve → generate → cite
            </p>
          </div>
        </div>
      </ProjectVisual>
    </FlagshipProject>
  );
}

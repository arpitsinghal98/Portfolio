import {
  FlagshipProject,
  ProjectVisual,
} from "@/components/projects/project-layout";
import { projects } from "@/data/projects";

const analysisSteps = [
  { label: "Describe the work week", source: "Input" },
  { label: "Decompose into 12–22 tasks", source: "Claude" },
  { label: "Score six qualitative axes", source: "Rubric" },
];

export function HalfLifeProject() {
  return (
    <FlagshipProject project={projects.halfLife}>
      <ProjectVisual
        project={projects.halfLife}
        className="dark bg-card text-foreground lg:h-[36rem]"
      >
        <div className="grid min-h-0 flex-1 lg:grid-cols-[minmax(0,1.45fr)_minmax(15rem,0.72fr)]">
          <div className="p-6 sm:p-10 lg:p-12">
            <p className="font-mono text-label tracking-label text-muted-foreground uppercase">
              Work-week analysis
            </p>
            <p className="mt-7 max-w-lg font-heading text-[clamp(2.8rem,5vw,5.25rem)] leading-[0.92] tracking-[-0.035em]">
              Your work,
              <br />
              decomposed.
            </p>
            <ol className="mt-12 border-t border-border">
              {analysisSteps.map((step, index) => (
                <li
                  key={step.label}
                  className="grid grid-cols-[2rem_1fr_auto] items-center gap-3 border-b border-border py-5"
                >
                  <span className="font-mono text-label text-accent">
                    0{index + 1}
                  </span>
                  <span className="text-sm">{step.label}</span>
                  <span className="text-xs text-muted-foreground">
                    {step.source}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <aside className="flex flex-col justify-between bg-accent p-6 text-accent-foreground sm:p-10 lg:p-9">
            <div>
              <p className="font-mono text-label tracking-label uppercase opacity-80">
                System boundary
              </p>
              <p className="mt-6 font-heading text-4xl leading-[0.98] tracking-[-0.025em]">
                Judgment is flexible. The math is not.
              </p>
            </div>
            <dl className="mt-16 space-y-5 border-t border-current/25 pt-5">
              <div className="flex justify-between gap-4 text-xs">
                <dt>Model</dt>
                <dd className="text-right">Qualitative sub-scores</dd>
              </div>
              <div className="flex justify-between gap-4 text-xs">
                <dt>Code</dt>
                <dd className="text-right">Exposure + half-life</dd>
              </div>
              <div className="flex justify-between gap-4 text-xs">
                <dt>Delivery</dt>
                <dd className="text-right">Live via SSE</dd>
              </div>
            </dl>
          </aside>
        </div>
      </ProjectVisual>
    </FlagshipProject>
  );
}

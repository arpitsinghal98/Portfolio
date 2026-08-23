export function HalfLifeProject() {
  return (
    <article
      aria-labelledby="half-life-title"
      className="grid items-start gap-10 lg:grid-cols-[minmax(16rem,0.34fr)_minmax(0,0.66fr)] lg:gap-16"
    >
      <div>
        <p className="font-mono text-[0.6rem] tracking-[0.15em] text-accent uppercase">
          Flagship project · 01
        </p>
        <h3
          id="half-life-title"
          className="mt-5 text-5xl tracking-[-0.035em] sm:text-7xl"
        >
          Half-Life
        </h3>
        <p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground">
          A work-week analysis tool that evaluates AI exposure at the task
          level, then turns the result into a practical handoff plan.
        </p>

        <div className="mt-10 border-t border-border pt-5">
          <p className="font-mono text-[0.6rem] tracking-[0.13em] text-muted-foreground uppercase">
            Design decision
          </p>
          <p className="mt-4 font-heading text-3xl leading-[1.05]">
            LLM for judgment.
            <br />
            Code for arithmetic.
          </p>
        </div>

        <ul
          aria-label="Half-Life technologies"
          className="mt-9 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[0.58rem] tracking-[0.11em] text-muted-foreground uppercase"
        >
          <li>Node.js</li>
          <li>Anthropic SDK</li>
          <li>SSE</li>
          <li>Structured output</li>
        </ul>
      </div>

      <div>
        <div className="dark flex flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#151411] text-foreground lg:h-[38rem]">
          <div className="flex shrink-0 items-center justify-between border-b border-border px-5 py-4 sm:px-7">
            <p className="font-mono text-[0.6rem] tracking-[0.16em] uppercase">
              Half-Life
            </p>
            <p className="font-mono text-[0.55rem] tracking-[0.13em] text-accent uppercase">
              Analysis streaming
            </p>
          </div>

          <div className="grid min-h-0 flex-1 lg:grid-cols-[minmax(0,1.45fr)_minmax(15rem,0.72fr)]">
            <div className="p-6 sm:p-10 lg:p-12">
              <p className="font-mono text-[0.58rem] tracking-[0.14em] text-muted-foreground uppercase">
                Work-week analysis
              </p>
              <p className="mt-7 max-w-lg font-heading text-[clamp(2.8rem,5vw,5.25rem)] leading-[0.92] tracking-[-0.035em]">
                Your work,
                <br />
                decomposed.
              </p>

              <ol className="mt-12 border-t border-border">
                <li className="grid grid-cols-[2rem_1fr_auto] items-center gap-3 border-b border-border py-5">
                  <span className="font-mono text-[0.58rem] text-accent">
                    01
                  </span>
                  <span className="text-sm">Describe the work week</span>
                  <span className="font-mono text-[0.52rem] tracking-[0.1em] text-muted-foreground uppercase">
                    Input
                  </span>
                </li>
                <li className="grid grid-cols-[2rem_1fr_auto] items-center gap-3 border-b border-border py-5">
                  <span className="font-mono text-[0.58rem] text-accent">
                    02
                  </span>
                  <span className="text-sm">Decompose into 12–22 tasks</span>
                  <span className="font-mono text-[0.52rem] tracking-[0.1em] text-muted-foreground uppercase">
                    Claude
                  </span>
                </li>
                <li className="grid grid-cols-[2rem_1fr_auto] items-center gap-3 border-b border-border py-5">
                  <span className="font-mono text-[0.58rem] text-accent">
                    03
                  </span>
                  <span className="text-sm">Score six qualitative axes</span>
                  <span className="font-mono text-[0.52rem] tracking-[0.1em] text-muted-foreground uppercase">
                    Streaming
                  </span>
                </li>
              </ol>
            </div>

            <aside className="flex flex-col justify-between bg-accent p-6 text-accent-foreground sm:p-10 lg:p-9">
              <div>
                <p className="font-mono text-[0.56rem] tracking-[0.14em] uppercase opacity-65">
                  System boundary
                </p>
                <p className="mt-6 font-heading text-4xl leading-[0.98] tracking-[-0.025em]">
                  Judgment is flexible. The math is not.
                </p>
              </div>
              <dl className="mt-16 space-y-5 border-t border-current/25 pt-5">
                <div className="flex justify-between gap-4 text-xs">
                  <dt className="opacity-60">Model</dt>
                  <dd className="text-right">Qualitative sub-scores</dd>
                </div>
                <div className="flex justify-between gap-4 text-xs">
                  <dt className="opacity-60">Code</dt>
                  <dd className="text-right">Exposure + half-life</dd>
                </div>
                <div className="flex justify-between gap-4 text-xs">
                  <dt className="opacity-60">Delivery</dt>
                  <dd className="text-right">Live via SSE</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>

        <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-foreground">
          The scoring boundary makes every result easier to inspect:
          disagreements trace back to a specific qualitative axis, while the
          calculation remains deterministic.
        </p>
      </div>
    </article>
  );
}

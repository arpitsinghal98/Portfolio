export function PaperTrailProject() {
  return (
    <article
      aria-labelledby="papertrail-title"
      className="grid items-start gap-10 lg:grid-cols-[minmax(16rem,0.34fr)_minmax(0,0.66fr)] lg:gap-16"
    >
      <div className="lg:order-2">
        <div className="flex flex-col overflow-hidden rounded-[1.5rem] border border-foreground/10 bg-[#f8f6ef] lg:h-[38rem]">
          <div className="flex shrink-0 items-center justify-between border-b border-foreground/10 px-5 py-4 sm:px-7">
            <p className="font-mono text-[0.6rem] tracking-[0.16em] uppercase">
              PaperTrail
            </p>
            <p className="font-mono text-[0.55rem] tracking-[0.13em] text-muted-foreground uppercase">
              Research workspace
            </p>
          </div>

          <div className="grid min-h-[34rem] flex-1 md:grid-cols-[11rem_minmax(0,1fr)] lg:min-h-0">
            <aside className="border-b border-foreground/10 bg-secondary/60 p-5 md:border-r md:border-b-0 sm:p-6">
              <p className="font-mono text-[0.55rem] tracking-[0.14em] text-muted-foreground uppercase">
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
              <p className="mt-12 font-mono text-[0.52rem] leading-5 tracking-[0.09em] text-muted-foreground uppercase">
                Dense + sparse retrieval
              </p>
            </aside>

            <div className="flex flex-col p-6 sm:p-10 lg:p-12">
              <div>
                <p className="font-mono text-[0.55rem] tracking-[0.14em] text-accent uppercase">
                  Research question
                </p>
                <p className="mt-5 max-w-2xl font-heading text-3xl leading-tight sm:text-5xl">
                  How do the selected sources differ in methodology?
                </p>
              </div>

              <div className="mt-12 border-t border-foreground/10 pt-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-[0.55rem] tracking-[0.14em] text-muted-foreground uppercase">
                    Grounded response
                  </p>
                  <span className="font-mono text-[0.52rem] tracking-[0.1em] text-accent uppercase">
                    Streaming
                  </span>
                </div>
                <p className="mt-6 max-w-2xl text-sm leading-7 text-foreground/80 sm:text-base sm:leading-8">
                  PaperTrail retrieves relevant passages across published
                  research and uploaded documents before generating an answer.
                  Each claim stays connected to its source context.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="rounded-full border border-foreground/15 px-3 py-1.5 font-mono text-[0.52rem] tracking-[0.08em] uppercase">
                    [1] PubMed
                  </span>
                  <span className="rounded-full border border-foreground/15 px-3 py-1.5 font-mono text-[0.52rem] tracking-[0.08em] uppercase">
                    [2] arXiv
                  </span>
                  <span className="rounded-full border border-foreground/15 px-3 py-1.5 font-mono text-[0.52rem] tracking-[0.08em] uppercase">
                    [3] Document
                  </span>
                </div>
              </div>

              <p className="mt-auto border-t border-foreground/10 pt-6 font-mono text-[0.5rem] leading-5 tracking-[0.09em] text-muted-foreground uppercase">
                Parse → chunk → embed / index → hybrid retrieve → generate →
                cite / export
              </p>
            </div>
          </div>
        </div>

        <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-foreground">
          A single deployment handles ingestion and background jobs, with a
          containerized architecture that can move from Docker Compose to
          Kubernetes.
        </p>
      </div>

      <div className="lg:order-1">
        <p className="font-mono text-[0.6rem] tracking-[0.15em] text-accent uppercase">
          Flagship project · 02
        </p>
        <h3
          id="papertrail-title"
          className="mt-5 text-5xl tracking-[-0.035em] sm:text-7xl"
        >
          PaperTrail
        </h3>
        <p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground">
          A research RAG workspace that combines PubMed, arXiv, and user
          documents to stream grounded answers with citations.
        </p>

        <div className="mt-10 border-t border-border pt-5">
          <p className="font-mono text-[0.6rem] tracking-[0.13em] text-muted-foreground uppercase">
            Design decision
          </p>
          <p className="mt-4 font-heading text-3xl leading-[1.05]">
            Retrieval should make every answer traceable.
          </p>
        </div>

        <ul
          aria-label="PaperTrail technologies"
          className="mt-9 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[0.58rem] tracking-[0.11em] text-muted-foreground uppercase"
        >
          <li>Next.js</li>
          <li>PostgreSQL</li>
          <li>Qdrant / pgvector</li>
          <li>Redis</li>
        </ul>
      </div>
    </article>
  );
}

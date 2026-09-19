export function WhisprProject() {
  return (
    <article className="border-border border-b md:border-0">
      <a
        href="https://whispr-beta.vercel.app"
        target="_blank"
        rel="noreferrer"
        aria-label="Open the Whispr live project"
        className="group flex flex-col gap-5 py-7 md:py-0"
      >
        <figure className="dark hidden min-h-[22rem] flex-col overflow-hidden rounded-2xl border border-white/10 bg-card text-foreground transition-colors group-hover:border-accent/40 md:flex md:aspect-3/2 md:min-h-0">
          <figcaption className="sr-only">
            Whispr — live transcript + memory bank
          </figcaption>

          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <span className="font-mono text-label tracking-label uppercase">
              Whispr
            </span>
            <span className="font-mono text-micro tracking-compact text-accent uppercase">
              System walkthrough
            </span>
          </div>

          <div className="grid min-h-0 flex-1 sm:grid-cols-[minmax(0,1.25fr)_minmax(9rem,0.75fr)]">
            <div className="p-5">
              <div className="flex items-center justify-between gap-4">
                <p className="font-heading text-2xl">Live transcript</p>
                <span className="flex items-center gap-2 font-mono text-micro text-accent uppercase">
                  <span className="size-1.5 rounded-full bg-accent" />
                  Recording
                </span>
              </div>

              <div className="mt-6 space-y-4 text-xs leading-5 text-foreground/80">
                <p>
                  <span className="mr-3 font-mono text-micro text-muted-foreground">
                    10:42
                  </span>
                  We should keep the decision attached to the meeting context.
                </p>
                <p>
                  <span className="mr-3 font-mono text-micro text-muted-foreground">
                    10:43
                  </span>
                  Turn that into an action item and assign an owner.
                </p>
              </div>
            </div>

            <aside className="border-border border-t bg-secondary/55 p-5 sm:border-t-0 sm:border-l">
              <p className="font-mono text-micro tracking-label text-muted-foreground uppercase">
                Memory bank
              </p>
              <dl className="mt-5 space-y-4 text-xs">
                <div className="border-t border-border pt-3">
                  <dt className="text-muted-foreground">Decisions</dt>
                  <dd className="mt-1 font-heading text-xl">08</dd>
                </div>
                <div className="border-t border-border pt-3">
                  <dt className="text-muted-foreground">Action items</dt>
                  <dd className="mt-1 font-heading text-xl">05</dd>
                </div>
              </dl>
            </aside>
          </div>
        </figure>

        <div className="flex flex-col gap-3">
          <header className="flex items-baseline gap-3.5">
            <span className="font-mono text-label tracking-emphasis text-accent">
              04
            </span>
            <h3 className="text-3xl leading-none tracking-[-0.02em] md:text-[2.5rem]">
              Whispr
            </h3>
            <span aria-hidden="true" className="flex-1" />
            <span className="font-mono text-xs text-muted-foreground">
              Live ↗
            </span>
          </header>

          <p className="max-w-[46ch] text-body-sm leading-[1.6] text-foreground/75">
            Live meeting transcription with a memory bank you can question
            afterwards — built in a weekend, and the first draft of what I now
            work on full time.
          </p>

          <p className="font-mono text-label text-muted-foreground">
            Remix · Firebase · Google Generative AI
          </p>
        </div>
      </a>
    </article>
  );
}

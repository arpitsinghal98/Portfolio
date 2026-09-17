export function MailIqProject() {
  return (
    <article>
      <a
        href="https://mail-iq-jump.vercel.app"
        target="_blank"
        rel="noreferrer"
        aria-label="Open the MailIQ live project"
        className="group flex flex-col gap-5"
      >
        <figure className="flex min-h-[22rem] flex-col overflow-hidden rounded-[1.25rem] border border-foreground/10 bg-popover transition-colors group-hover:border-accent/35 md:aspect-3/2 md:min-h-0">
          <figcaption className="sr-only">
            MailIQ — three-panel inbox
          </figcaption>

          <div className="flex items-center justify-between border-b border-foreground/10 px-5 py-4">
            <span className="font-mono text-[0.6875rem] tracking-[0.14em] uppercase">
              MailIQ
            </span>
            <span className="font-mono text-[0.625rem] tracking-[0.1em] text-muted-foreground uppercase">
              System walkthrough
            </span>
          </div>

          <div className="grid min-h-0 flex-1 grid-cols-[7.5rem_minmax(0,1fr)]">
            <aside className="border-r border-foreground/10 bg-secondary/60 p-4">
              <p className="font-mono text-[0.625rem] tracking-[0.12em] text-muted-foreground uppercase">
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

            <div className="p-5">
              <div className="flex items-center justify-between gap-4">
                <p className="font-heading text-2xl">Triage queue</p>
                <span className="font-mono text-[0.625rem] text-accent uppercase">
                  Live sync
                </span>
              </div>
              <ul className="mt-6 border-t border-foreground/10 text-xs">
                <li className="flex justify-between gap-3 border-b border-foreground/10 py-3.5">
                  <span>Product updates</span>
                  <span className="text-muted-foreground">Archive 24</span>
                </li>
                <li className="flex justify-between gap-3 border-b border-foreground/10 py-3.5">
                  <span>Receipts</span>
                  <span className="text-muted-foreground">Label 11</span>
                </li>
                <li className="flex justify-between gap-3 border-b border-foreground/10 py-3.5">
                  <span>Needs reply</span>
                  <span className="text-muted-foreground">Keep 06</span>
                </li>
              </ul>
            </div>
          </div>
        </figure>

        <div className="flex flex-col gap-3">
          <header className="flex items-baseline gap-3.5">
            <span className="font-mono text-[0.6875rem] tracking-[0.16em] text-accent">
              03
            </span>
            <h3 className="text-[2.5rem] leading-none tracking-[-0.02em]">
              MailIQ
            </h3>
            <span aria-hidden="true" className="flex-1" />
            <span className="font-mono text-xs text-muted-foreground">
              Live ↗
            </span>
          </header>

          <p className="max-w-[46ch] text-[0.9375rem] leading-[1.6] text-foreground/75">
            Gmail made bulk-operable. Built on an API that fails often, so the
            test layer is the product — Jest, Playwright, and MSW cover the
            failure paths.
          </p>

          <p className="font-mono text-[0.6875rem] text-muted-foreground">
            Remix · Gmail API · Neon Postgres · Gemini
          </p>
        </div>
      </a>
    </article>
  );
}

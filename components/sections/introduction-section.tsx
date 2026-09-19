export function IntroductionSection() {
  return (
    <section
      id="about"
      aria-labelledby="introduction-heading"
      className="page-gutter bg-background py-16 text-foreground sm:py-20 lg:py-24"
    >
      <div className="site-container grid items-start gap-10 lg:grid-cols-[11.25rem_minmax(0,1fr)] lg:gap-14">
        <p className="font-mono text-label tracking-wide text-muted-foreground uppercase">
          How I work
        </p>

        <div className="space-y-7">
          <h2
            id="introduction-heading"
            className="max-w-[26ch] text-[clamp(1.625rem,3vw,2.875rem)] leading-[1.2] tracking-[-0.015em]"
          >
            Nobody asks for APIs, state, sync, or release quality. Everybody
            notices the day they&apos;re wrong.
          </h2>

          <div className="grid max-w-[62.5rem] gap-7 text-body-sm leading-[1.65] text-muted-foreground sm:grid-cols-2">
            <p>
              I do my best work on small teams where the problem is real and the
              requirements aren&apos;t settled. Lately that&apos;s meant memory
              systems — products that shouldn&apos;t meet you for the first time
              every time.
            </p>
            <p>
              Users should stay in control of what a product remembers,
              corrects, or forgets. That boundary between product decisions and
              backend systems is the work I enjoy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

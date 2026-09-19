const profileDetails = [
  {
    label: "Stack",
    lines: [
      "TypeScript · Python · Node.js · React · PostgreSQL · Redis · AWS · Docker · pgvector",
    ],
  },
  {
    label: "Off the clock",
    lines: [
      "Learning pickleball. Still trying to survive in the swimming pool.",
    ],
  },
] as const;

export function ProfileDetailsSection() {
  return (
    <section
      aria-label="Profile details"
      className="page-gutter border-border border-t bg-background py-16 text-foreground sm:py-20"
    >
      <div className="site-container grid gap-8 md:grid-cols-2 md:gap-16">
        {profileDetails.map((detail) => (
          <article key={detail.label} className="space-y-3">
            <h2 className="font-mono text-label tracking-emphasis text-muted-foreground uppercase">
              {detail.label}
            </h2>
            <p className="max-w-[52ch] text-body-sm leading-[1.7] text-foreground/80">
              {detail.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

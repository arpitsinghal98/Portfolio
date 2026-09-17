import { education } from "@/data/experiences";

const profileDetails = [
  {
    label: "Stack",
    lines: [
      "TypeScript · Python · Node.js · React · PostgreSQL · Redis · AWS · Docker · pgvector",
    ],
  },
  {
    label: "Study",
    lines: [
      education.degree,
      education.institution,
      "Nine Salesforce and Copado certifications",
    ],
  },
  {
    label: "Off the clock",
    lines: [
      "New to pickleball. Currently trying to survive in the swimming pool.",
    ],
  },
] as const;

export function ProfileDetailsSection() {
  return (
    <section
      aria-label="Profile details"
      className="page-gutter bg-background py-20 text-foreground sm:py-24 lg:py-28"
    >
      <div className="site-container grid gap-10 md:grid-cols-3 md:gap-12">
        {profileDetails.map((detail) => (
          <article key={detail.label} className="space-y-3">
            <h2 className="font-mono text-label tracking-emphasis text-muted-foreground uppercase">
              {detail.label}
            </h2>
            <p className="text-body-sm leading-[1.7] text-foreground/80">
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

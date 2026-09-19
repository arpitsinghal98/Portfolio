import { careerMetrics } from "@/data/metrics";

export function MetricsSection() {
  return (
    <section
      aria-label="Career impact metrics"
      className="page-gutter dark bg-card py-[2.125rem] text-foreground"
    >
      <dl className="site-container grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-4 md:gap-7">
        {careerMetrics.map((metric) => (
          <div
            key={metric.label}
            className="flex min-w-0 flex-col-reverse justify-end gap-1.5"
          >
            <dt className="font-mono text-label tracking-label text-foreground/55 uppercase">
              {metric.label}
            </dt>
            <dd className="flex flex-wrap items-baseline gap-x-2 gap-y-1 font-heading text-[clamp(2.375rem,4.4vw,3.875rem)] leading-none">
              {metric.value}
              {metric.qualifier ? (
                <span className="font-sans text-sm text-foreground/70">
                  {metric.qualifier}
                </span>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

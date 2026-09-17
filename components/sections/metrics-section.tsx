const metrics = [
  { label: "People on the product", value: "400k" },
  { label: "Lower transcription cost", value: "80%" },
  { label: "Fewer chat failures", value: "30%" },
  { label: "Systems kept in sync", value: "18" },
];

export function MetricsSection() {
  return (
    <section
      aria-label="Career impact metrics"
      className="page-gutter dark bg-card py-[2.125rem] text-foreground"
    >
      <dl className="site-container grid grid-cols-[repeat(auto-fit,minmax(11.875rem,1fr))] gap-[1.875rem]">
        {metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col-reverse gap-1.5">
            <dt className="font-mono text-label tracking-label text-foreground/55 uppercase">
              {metric.label}
            </dt>
            <dd className="font-heading text-[clamp(2.375rem,4.4vw,3.875rem)] leading-none">
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

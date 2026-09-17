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
      className="dark bg-card px-5 py-[2.125rem] text-foreground sm:px-8"
    >
      <dl className="mx-auto grid w-full max-w-[97.5rem] grid-cols-[repeat(auto-fit,minmax(11.875rem,1fr))] gap-[1.875rem]">
        {metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col-reverse gap-1.5">
            <dt className="font-mono text-[0.6875rem] tracking-[0.12em] text-foreground/55 uppercase">
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

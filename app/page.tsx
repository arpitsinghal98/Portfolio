import { ArrowDown, ArrowUpRight, Mail, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [{ href: "#work", label: "Work" }];

const halfLifeFlow = [
  "Work week",
  "Task decomposition",
  "6-axis judgment",
  "Deterministic scoring",
  "Exposure + half-life",
  "Action plan",
];

const paperTrailFlow = [
  "Sources",
  "Parse + chunk",
  "Embed + index",
  "Dense + sparse",
  "Grounded answer",
  "Citations + exports",
];

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed top-3 left-3 z-[100] -translate-y-20 bg-accent px-4 py-2 font-mono text-xs tracking-[0.12em] text-accent-foreground uppercase transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <header className="dark fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/88 text-foreground backdrop-blur-md">
        <div className="mx-auto flex h-[4.5rem] max-w-[97.5rem] items-center gap-6 px-5 sm:px-8">
          <Link
            href="/"
            className="font-mono text-[0.68rem] font-medium tracking-[0.18em] uppercase transition-colors hover:text-accent"
          >
            Arpit Singhal
          </Link>

          <span className="hidden font-mono text-[0.62rem] tracking-[0.14em] text-muted-foreground uppercase xl:inline">
            Software Engineer · SF Bay Area
          </span>

          <nav
            aria-label="Primary navigation"
            className="ml-auto hidden items-center gap-7 md:flex"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-[0.68rem] tracking-[0.11em] text-muted-foreground uppercase transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              variant="ghost"
              className="h-9 rounded-none border border-accent/60 px-4 font-mono text-[0.68rem] tracking-[0.12em] text-accent uppercase hover:bg-accent hover:text-accent-foreground"
            >
              <a href="mailto:arpitsinghal98@outlook.com">Contact</a>
            </Button>
          </nav>

          <div className="ml-auto md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation"
                  className="rounded-none text-foreground hover:bg-secondary"
                >
                  <Menu aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent className="dark w-full border-border bg-background p-0 text-foreground sm:max-w-md">
                <SheetHeader className="border-b border-border px-6 py-6 text-left">
                  <SheetTitle className="font-mono text-xs tracking-[0.16em] text-foreground uppercase">
                    Arpit Singhal
                  </SheetTitle>
                  <SheetDescription className="font-mono text-[0.65rem] tracking-[0.1em] uppercase">
                    Product-minded software engineer
                  </SheetDescription>
                </SheetHeader>
                <nav
                  aria-label="Mobile navigation"
                  className="flex flex-1 flex-col px-6 py-8"
                >
                  {navigation.map((item, index) => (
                    <SheetClose key={item.href} asChild>
                      <Link
                        href={item.href}
                        className="group flex items-baseline gap-4 border-b border-border py-5"
                      >
                        <span className="font-mono text-[0.62rem] text-accent">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-heading text-4xl tracking-[-0.02em] text-foreground transition-colors group-hover:text-accent">
                          {item.label}
                        </span>
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="border-t border-border p-6">
                  <SheetClose asChild>
                    <Button
                      asChild
                      className="h-12 w-full rounded-none bg-accent font-mono text-xs tracking-[0.12em] text-accent-foreground uppercase hover:bg-accent/90"
                    >
                      <a href="mailto:arpitsinghal98@outlook.com">Contact me</a>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="dark relative isolate flex min-h-svh overflow-hidden bg-background pt-[4.5rem] text-foreground">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(240_238_230/0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgb(240_238_230/0.035)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"
          />

          <div className="mx-auto flex w-full max-w-[97.5rem] flex-col px-5 sm:px-8">
            <div className="flex items-center gap-4 border-b border-border py-5 font-mono text-[0.62rem] tracking-[0.14em] uppercase sm:py-6">
              <span className="text-accent">Founding Engineer</span>
              <span className="h-px flex-1 bg-border" />
              <span className="hidden text-muted-foreground sm:inline">
                TwinMind · Menlo Park
              </span>
              <span className="text-muted-foreground">2025 — Now</span>
            </div>

            <div className="grid flex-1 items-end gap-12 py-14 sm:py-16 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16 lg:py-20">
              <div>
                <p className="mb-7 max-w-xl font-mono text-[0.68rem] leading-6 tracking-[0.13em] text-muted-foreground uppercase sm:mb-9">
                  Backend systems · AI workflows · Product infrastructure
                </p>
                <h1 className="max-w-[9.7ch] text-[clamp(4.2rem,9.4vw,9.4rem)] leading-[0.84] tracking-[-0.047em]">
                  I build the <em className="text-accent">systems</em> behind AI
                  products.
                </h1>
              </div>

              <aside className="border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                <p className="font-mono text-[0.62rem] tracking-[0.14em] text-accent uppercase">
                  Current focus
                </p>
                <p className="mt-4 text-base leading-7 text-foreground/88">
                  Building AI memory infrastructure at TwinMind for 400,000+
                  professionals and students.
                </p>
                <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6 lg:grid-cols-1">
                  <div>
                    <dt className="font-mono text-[0.6rem] tracking-[0.12em] text-muted-foreground uppercase">
                      Based in
                    </dt>
                    <dd className="mt-2 text-sm">San Francisco Bay Area</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.6rem] tracking-[0.12em] text-muted-foreground uppercase">
                      Open to
                    </dt>
                    <dd className="mt-2 text-sm">Startup engineering roles</dd>
                  </div>
                </dl>
              </aside>
            </div>

            <div className="grid gap-8 border-t border-border py-7 md:grid-cols-[minmax(0,44rem)_auto] md:items-end md:py-8">
              <div>
                <p className="max-w-2xl text-base leading-7 text-foreground/82 sm:text-lg sm:leading-8">
                  Product-minded software engineer working across backend
                  systems, AI workflows, APIs, data infrastructure, reliability,
                  and performance.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    className="h-11 rounded-none bg-accent px-5 font-mono text-[0.68rem] tracking-[0.11em] text-accent-foreground uppercase hover:bg-accent/90"
                  >
                    <Link href="#work">
                      Explore my work
                      <ArrowDown aria-hidden="true" data-icon="inline-end" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 rounded-none border-border bg-transparent px-5 font-mono text-[0.68rem] tracking-[0.11em] text-foreground uppercase hover:bg-secondary"
                  >
                    <a href="mailto:arpitsinghal98@outlook.com">Email me</a>
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-4 md:justify-end">
                <a
                  href="mailto:arpitsinghal98@outlook.com"
                  className="inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.1em] text-muted-foreground uppercase transition-colors hover:text-accent"
                >
                  <Mail aria-hidden="true" className="size-3.5" />
                  Email
                </a>
                <a
                  href="https://github.com/arpitsinghal98"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] tracking-[0.1em] text-muted-foreground uppercase transition-colors hover:text-accent"
                >
                  GitHub
                  <ArrowUpRight aria-hidden="true" className="size-3.5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/arpitsinghal98"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] tracking-[0.1em] text-muted-foreground uppercase transition-colors hover:text-accent"
                >
                  LinkedIn
                  <ArrowUpRight aria-hidden="true" className="size-3.5" />
                </a>
                <Link
                  href="#work"
                  aria-label="Scroll to selected work"
                  className="ml-auto inline-flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.12em] text-muted-foreground uppercase transition-colors hover:text-foreground md:ml-2"
                >
                  Scroll
                  <ArrowDown aria-hidden="true" className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="work"
          aria-labelledby="work-heading"
          className="scroll-mt-[4.5rem] bg-background text-foreground"
        >
          <div className="mx-auto max-w-[97.5rem] px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
            <header className="grid gap-8 border-t border-foreground pt-6 lg:grid-cols-[minmax(0,1fr)_32rem] lg:gap-16">
              <div>
                <p className="font-mono text-[0.65rem] tracking-[0.15em] text-accent uppercase">
                  01 · Selected work
                </p>
                <h2
                  id="work-heading"
                  className="mt-5 max-w-[8ch] text-[clamp(4rem,8vw,8rem)] leading-[0.87] tracking-[-0.045em]"
                >
                  Systems with a point of view.
                </h2>
              </div>
              <p className="self-end text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                Two AI products built around a deliberate boundary: models
                handle interpretation, while the surrounding system makes
                results useful, grounded, and inspectable.
              </p>
            </header>

            <div className="mt-20 space-y-28 sm:mt-28 sm:space-y-36">
              <article aria-labelledby="half-life-title">
                <div className="grid gap-8 border-t border-border pt-5 lg:grid-cols-[11rem_minmax(0,1fr)_22rem] lg:gap-12">
                  <p className="font-mono text-[0.62rem] tracking-[0.13em] text-muted-foreground uppercase">
                    Flagship · 01
                  </p>
                  <div>
                    <h3
                      id="half-life-title"
                      className="text-5xl tracking-[-0.035em] sm:text-7xl"
                    >
                      Half-Life
                    </h3>
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                      An interactive tool that evaluates a person’s work week
                      task-by-task for AI-automation exposure—then turns the
                      result into an actionable handoff plan.
                    </p>
                  </div>
                  <div className="lg:text-right">
                    <p className="font-mono text-[0.62rem] tracking-[0.13em] text-accent uppercase">
                      Core principle
                    </p>
                    <p className="mt-3 font-heading text-2xl leading-tight sm:text-3xl">
                      LLM for judgment. Code for arithmetic.
                    </p>
                  </div>
                </div>

                <div className="dark relative mt-10 overflow-hidden bg-background p-5 text-foreground sm:p-8 lg:p-12">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(240_238_230/0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgb(240_238_230/0.045)_1px,transparent_1px)] bg-[size:4rem_4rem]"
                  />
                  <div className="relative flex items-center justify-between gap-4 border-b border-border pb-5">
                    <p className="font-mono text-[0.62rem] tracking-[0.14em] text-accent uppercase">
                      Evaluation pipeline
                    </p>
                    <p className="font-mono text-[0.6rem] tracking-[0.12em] text-muted-foreground uppercase">
                      SSE · Structured output · Auditable scoring
                    </p>
                  </div>

                  <ol className="relative mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
                    {halfLifeFlow.map((step, index) => (
                      <li
                        key={step}
                        className="min-h-36 bg-background p-5 sm:min-h-44 sm:p-6"
                      >
                        <span className="font-mono text-[0.62rem] text-accent">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="mt-12 max-w-[12rem] font-heading text-2xl leading-tight sm:text-3xl">
                          {step}
                        </p>
                      </li>
                    ))}
                  </ol>

                  <div className="relative mt-8 grid gap-6 border-t border-border pt-6 lg:grid-cols-[minmax(0,1fr)_28rem]">
                    <p className="max-w-3xl text-base leading-7 text-foreground/82">
                      Claude decomposes a described week into 12–22 tasks and
                      supplies qualitative sub-scores across six axes. A small,
                      deterministic scoring layer computes exposure percentage
                      and the point where cumulative displaceable hours cross
                      50%.
                    </p>
                    <p className="font-mono text-[0.64rem] leading-6 tracking-[0.08em] text-muted-foreground uppercase lg:text-right">
                      If a score feels wrong, the disagreement has a visible
                      axis—not a hidden calculation.
                    </p>
                  </div>
                </div>

                <ul
                  aria-label="Half-Life technologies"
                  className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[0.62rem] tracking-[0.12em] text-muted-foreground uppercase"
                >
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>Anthropic SDK</li>
                  <li>SSE streaming</li>
                </ul>
              </article>

              <article aria-labelledby="papertrail-title">
                <div className="grid gap-8 border-t border-border pt-5 lg:grid-cols-[11rem_minmax(0,1fr)_22rem] lg:gap-12">
                  <p className="font-mono text-[0.62rem] tracking-[0.13em] text-muted-foreground uppercase">
                    Flagship · 02
                  </p>
                  <div>
                    <h3
                      id="papertrail-title"
                      className="text-5xl tracking-[-0.035em] sm:text-7xl"
                    >
                      PaperTrail
                    </h3>
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                      A research RAG application that combines published
                      literature with user documents to stream grounded answers,
                      citations, and portable exports.
                    </p>
                  </div>
                  <div className="lg:text-right">
                    <p className="font-mono text-[0.62rem] tracking-[0.13em] text-accent uppercase">
                      Core principle
                    </p>
                    <p className="mt-3 font-heading text-2xl leading-tight sm:text-3xl">
                      Retrieval should make every answer traceable.
                    </p>
                  </div>
                </div>

                <div className="relative mt-10 overflow-hidden border border-foreground bg-secondary p-5 sm:p-8 lg:p-12">
                  <div className="flex flex-col gap-4 border-b border-foreground/20 pb-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-mono text-[0.62rem] tracking-[0.14em] text-accent uppercase">
                      Retrieval architecture
                    </p>
                    <p className="font-mono text-[0.6rem] tracking-[0.12em] text-muted-foreground uppercase">
                      PubMed · arXiv · User documents
                    </p>
                  </div>

                  <ol className="mt-12 grid gap-px overflow-hidden border border-foreground/15 bg-foreground/15 md:grid-cols-3">
                    {paperTrailFlow.map((step, index) => (
                      <li
                        key={step}
                        className="relative min-h-36 bg-secondary p-5 sm:min-h-44 sm:p-6"
                      >
                        <span className="font-mono text-[0.62rem] text-accent">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="mt-12 max-w-[12rem] font-heading text-2xl leading-tight sm:text-3xl">
                          {step}
                        </p>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-8 grid gap-6 border-t border-foreground/20 pt-6 lg:grid-cols-[minmax(0,1fr)_28rem]">
                    <p className="max-w-3xl text-base leading-7 text-foreground/82">
                      One deployment handles ingestion, chunking, embedding, and
                      background jobs. Hybrid dense and sparse retrieval
                      supplies grounded context before answers stream with
                      source citations.
                    </p>
                    <p className="font-mono text-[0.64rem] leading-6 tracking-[0.08em] text-muted-foreground uppercase lg:text-right">
                      Containerized locally with a cloud-agnostic path from
                      Docker Compose to Kubernetes.
                    </p>
                  </div>
                </div>

                <ul
                  aria-label="PaperTrail technologies"
                  className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[0.62rem] tracking-[0.12em] text-muted-foreground uppercase"
                >
                  <li>Next.js</li>
                  <li>PostgreSQL</li>
                  <li>Qdrant / pgvector</li>
                  <li>Redis</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

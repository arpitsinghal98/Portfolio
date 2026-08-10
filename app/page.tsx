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

const navigation = [
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
  { href: "/resume", label: "Resume" },
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
              <Link href="/#ask">✦ Ask</Link>
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
                      <Link href="/#ask">✦ Ask my portfolio</Link>
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
                    <Link href="/work">
                      Explore my work
                      <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 rounded-none border-border bg-transparent px-5 font-mono text-[0.68rem] tracking-[0.11em] text-foreground uppercase hover:bg-secondary"
                  >
                    <Link href="/#ask">✦ Ask my portfolio</Link>
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
                  href="/work"
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
      </main>
    </>
  );
}

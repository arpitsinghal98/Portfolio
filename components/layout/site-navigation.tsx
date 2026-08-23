import { Menu } from "lucide-react";
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

export function SiteNavigation() {
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
    </>
  );
}

import { Dialog } from "@base-ui/react/dialog";
import { Menu, X } from "lucide-react";
import { createEmailHref, navigationLinks, siteConfig } from "@/config/site";

export function MobileNavigation() {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        aria-label="Open navigation"
        className="grid size-11 place-items-center hover:text-accent sm:hidden"
      >
        <Menu aria-hidden="true" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-[60] bg-black/35 transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <Dialog.Popup className="dark fixed inset-y-0 right-0 z-[61] flex w-full max-w-md flex-col overflow-y-auto overscroll-contain bg-background text-foreground transition-transform duration-200 ease-out data-ending-style:translate-x-full data-starting-style:translate-x-full">
          <div className="relative border-border border-b px-6 py-6 pr-20">
            <Dialog.Title className="font-mono text-label tracking-emphasis uppercase">
              {siteConfig.name}
            </Dialog.Title>
            <Dialog.Description className="mt-2 font-mono text-xs leading-relaxed tracking-compact text-muted-foreground uppercase">
              {siteConfig.role} · {siteConfig.location}
            </Dialog.Description>
            <Dialog.Close
              aria-label="Close navigation"
              className="absolute top-3 right-4 grid size-11 place-items-center hover:text-accent"
            >
              <X aria-hidden="true" />
            </Dialog.Close>
          </div>
          <nav
            aria-label="Mobile navigation"
            className="flex flex-1 flex-col px-6 py-6"
          >
            {navigationLinks.map(({ href, label }) => (
              <Dialog.Close
                key={href}
                nativeButton={false}
                role="link"
                render={<a href={href}>{label}</a>}
                className="border-border border-b py-5 font-heading text-4xl leading-tight tracking-[-0.02em] transition-colors hover:text-accent"
              />
            ))}
          </nav>
          <div className="border-border border-t p-6">
            <Dialog.Close
              nativeButton={false}
              role="link"
              render={<a href={createEmailHref()}>Email me</a>}
              className="flex min-h-12 items-center justify-center bg-accent px-4 font-mono text-label tracking-label text-accent-foreground uppercase hover:bg-accent/90"
            />
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

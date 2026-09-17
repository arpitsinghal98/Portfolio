# Arpit Singhal — Portfolio

Personal portfolio for Arpit Singhal, built as a statically rendered Next.js App Router site.

## Stack

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui with Base UI primitives
- Biome
- Bun

## Local development

Install dependencies and start the development server:

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
bun run lint
bun run typecheck
bun run validate:content
bun run build
```

Run the complete verification sequence with:

```bash
bun run check
```

## Deployment URL

Vercel deployments use `VERCEL_PROJECT_PRODUCTION_URL` automatically. For another host, set `SITE_URL` to the production origin so canonical metadata, robots, and the sitemap use the correct URL.

## Structure

```text
app/          Routes, global styles, and metadata files
components/   Page sections, project presentations, and shadcn UI
config/       Site-wide identity, contact, and URL configuration
data/         Structured portfolio content
docs/         Source material and design references
scripts/      Repository validation scripts
```

The implementation follows the content and design direction recorded in `docs/`.

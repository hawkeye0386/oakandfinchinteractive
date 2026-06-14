# Oak & Finch Interactive

Marketing site for Oak & Finch Interactive, a boutique software consultancy.
Built with the Next.js App Router, TypeScript, and Tailwind CSS v4.

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS v4 (via `@tailwindcss/postcss`)

## Local development

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

## Scripts

| Script           | Description                          |
| ---------------- | ------------------------------------ |
| `npm run dev`    | Start the local dev server           |
| `npm run build`  | Create a production build            |
| `npm run start`  | Serve the production build           |
| `npm run lint`   | Type-check the project (`tsc --noEmit`) |

## Deployment

Deployment is configured for [Render](https://render.com/) via `render.yaml`:

- **Build:** `npm ci && npm run build`
- **Start:** `npm run start`
- **Node:** 20+

## Project structure

```
app/         Routes, layout, metadata, sitemap & robots
components/   Shared UI (Navbar, Footer, etc.)
lib/site.ts  Site content and configuration
```

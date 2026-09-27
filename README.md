# portfolio-v2

Personal portfolio of **Hoang Kim** — Frontend Developer.

🔗 **Live:** https://ngthhoangkim-v2.vercel.app

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** (Radix primitives)
- **lucide-react** / **tech-stack-icons** for icons
- **Vercel Analytics**

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx            # fonts, metadata (SEO + Open Graph), analytics
│   ├── page.tsx              # page shell: sidebar + tabbed content
│   ├── opengraph-image.tsx   # social share card, generated at build time
│   └── spotlight.tsx         # cursor-following glow
├── components/
│   ├── Info.tsx              # sidebar: name, avatar, tabs, social links
│   ├── sections/             # About / Projects / Experience
│   ├── ui/                   # shadcn/ui components
│   └── css/globals.css       # Tailwind theme + spotlight styles
├── data/
│   └── content.json          # all site content
└── lib/utils.ts              # cn() class helper
```

## Editing the content

All text lives in [`src/data/content.json`](src/data/content.json) — no need to
touch any component:

| Key | What it controls |
| --- | --- |
| `profile` | Name, role, education, the About paragraph |
| `techStack` | Tech Stack chips, grouped by category |
| `experienceItems` | Experience entries |
| `projectItems` | Project entries (`href` may be `""` to hide the link) |

`profile.summary` is reused as the meta description and the Open Graph
description, so it is the one paragraph worth keeping polished.

### Adding a tech stack chip

Add an entry to the relevant group's `items`:

```json
{ "name": "Zod", "icon": "zod" }
```

`icon` is a [`tech-stack-icons`](https://www.npmjs.com/package/tech-stack-icons)
name. A group's `accent` must be one of `sky`, `emerald`, `violet` or `amber`,
and `icon` one of `code`, `braces`, `server`, `wrench`.

## Responsive behaviour

Below `lg` (1024px) all three sections are stacked on one page. From `lg` up the
sidebar tabs pick one section at a time. The switch is pure CSS, so every
section stays in the server-rendered HTML for crawlers and there is no layout
flash on load.

## Deployment

Deployed on Vercel — pushes to `main` ship to production.

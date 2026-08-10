# Maulana Jidan Azizi — Portfolio

A minimalist, content-first personal portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Stack

- **Next.js 14** (App Router)
- **React 18** + **TypeScript**
- **Tailwind CSS**
- **Geist Sans / Geist Mono** — official Vercel typefaces, loaded via `next/font`

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx      — fonts, metadata, global shell
  page.tsx         — assembles all sections
  globals.css      — base styles, focus rings, reveal-on-scroll, reduced-motion
components/
  Navbar.tsx        — sticky nav, scroll-aware, mobile menu
  Hero.tsx           — staged fade-in intro
  About.tsx
  Experience.tsx    — timeline, AI Engineering entry marked "featured"
  Education.tsx
  Skills.tsx         — categorized tag pills
  Achievements.tsx   — certifications + awards
  Contact.tsx        — contact links + simple mailto-based form
  Footer.tsx
  Reveal.tsx          — IntersectionObserver fade-up wrapper
  SectionHeading.tsx  — shared eyebrow + heading pattern
  Icons.tsx            — small inline SVG icon set
lib/
  data.ts   — all CV-sourced content lives here (single source of truth)
```

## Editing content

All text (name, about, experience, education, skills, certifications, awards, contact info) lives in **`lib/data.ts`**. Update that file and every section updates automatically.

### Things worth double-checking

- `profile.linkedinUrl` in `lib/data.ts` was inferred from the name on the CV (the CV lists a display name, not a URL/slug). Please verify or replace it with your real LinkedIn profile link.
- The contact form uses a `mailto:` link (opens the visitor's email client) since there's no backend — swap in a form service (e.g. Formspree, Resend) if you want submissions handled server-side.

## Deploying

The project deploys as-is to [Vercel](https://vercel.com/new) (recommended for Next.js), Netlify, or any Node hosting provider.

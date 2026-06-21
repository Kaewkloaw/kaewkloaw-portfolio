# Project Memory / Engineering Guide

This file is the working memory for AI agents and future maintainers. Read it before making changes to this repository.

## Project Identity

This is a personal portfolio website for Kaewkloaw / Punchaya Chancharoen. The site should feel polished, dreamy, ocean-inspired, and personal while still being fast and maintainable.

The main user-facing goals are:

- Present profile, skills, experience, projects, competitions, and contact links in one portfolio page.
- Preserve the established visual language: dark ocean/twilight gradients, glossy pink/cyan accents, glass panels, rounded media cards, soft motion, and playful but professional copy.
- Keep the site responsive on mobile and desktop.
- Avoid changes that make the UI generic, flat, or inconsistent with the current brand.

## Tech Stack

- Framework: Next.js `16.2.9` with App Router.
- React: `19.2.4`.
- Styling: Tailwind CSS v4 via `@import "tailwindcss"` in `src/app/globals.css`.
- Icons: `react-icons`.
- Package manager: npm, with `package-lock.json`.

Important: This repository uses a newer Next.js version with breaking changes. Before editing Next.js code, read the relevant guide in `node_modules/next/dist/docs/` as instructed by `AGENTS.md`.

## Repository Map

- `src/app/layout.tsx`: root document shell and metadata.
- `src/app/page.tsx`: one-page composition of all portfolio sections.
- `src/app/globals.css`: global theme variables, shared utility classes, animations, and mobile tweaks.
- `src/components/`: visual sections and reusable UI components.
- `src/data/`: structured content arrays for skills, experience, projects, and competitions.
- `public/images/`: project, competition, and profile images used by `next/image`.
- `public/audio/ocean.mp3`: background audio for the intro gate.
- `public/document/CV_Punchaya_Chancharoen.pdf`: downloadable CV.

## Architecture Rules

- Keep page composition simple. `src/app/page.tsx` should stay mostly as section ordering, not business logic.
- Put repeated content in `src/data/*` instead of hardcoding lists inside components.
- Keep section-level layout in section components such as `Hero`, `Skills`, `Experience`, `Projects`, `Competitions`, `Contact`, and `Footer`.
- Use small reusable components for repeated card patterns, such as `ProjectCard`, `CompetitionCard`, `SectionHeader`, and `AutoScrollRail`.
- Prefer Server Components by default. Add `"use client"` only when a component needs state, effects, event handlers, browser APIs, or refs.
- Do not move browser-only code into Server Components. `window`, `document`, `localStorage`, audio playback, pointer events, and animation frame logic belong in Client Components.

## Visual / UX Rules

- Preserve the current brand direction: ocean/twilight gradients, glassy surfaces, soft pink/cyan accents, rounded cards, and gentle motion.
- Reuse existing global theme variables from `src/app/globals.css` before inventing new colors.
- Keep card designs stable unless the task explicitly asks for a redesign.
- Avoid clipping hover animations. When cards lift or scale on hover, ensure parent containers have enough vertical padding or visible overflow.
- Maintain mobile behavior. Any horizontal rail, grid, or fixed-size card must be checked at narrow widths.
- Do not add generic landing-page sections or marketing filler. This is already the portfolio experience.
- Avoid broad design rewrites unless the user explicitly requests them.

## Component Notes

### `Navbar`

- Client component.
- Tracks active section with `IntersectionObserver`.
- Stores selected theme in `localStorage` under `kaewkloaw-theme`.
- Applies theme through `document.documentElement.dataset.theme`.
- Be careful with hydration. Browser-only reads should happen safely on the client.

### `AudioGate`

- Client component.
- Shows the full-screen "Enter Ocean" overlay until the user starts the audio.
- Uses `public/audio/ocean.mp3`.
- Do not auto-play audio without user action.

### `AutoScrollRail`

- Shared horizontal rail used by Projects and Competitions when there are more than the threshold number of items.
- Current implementation is a Client Component with auto-scroll, pause/drag/touch state, wheel handling, pointer drag, and flick-style manual motion.
- It loops by rendering multiple copies of the same item set and normalizing `scrollLeft`.
- Any change here affects both Projects and Competitions. Verify hover clipping, mobile scrolling, wheel/trackpad behavior, pointer drag, and auto-scroll pause behavior.

### Cards

- `ProjectCard` and `CompetitionCard` define the visual card identity. Preserve their dimensions, rounded corners, image treatment, and hover behavior unless the task is a card redesign.
- Images are served from `public/images/*` and rendered with `next/image`.

## Data Rules

- Add or edit portfolio content in `src/data/*` whenever possible.
- Preserve object shapes unless all consuming components are updated.
- Use stable keys such as `title` only when titles are unique.
- Keep image paths rooted at `/images/...` for public assets.
- Do not silently remove existing items, awards, tags, or descriptions.

## Styling Rules

- Global reusable styles and keyframes live in `src/app/globals.css`.
- Component-specific layout should usually stay in Tailwind class names.
- Prefer existing classes such as `theme-surface`, `theme-subtitle-blush`, `theme-title-soft-pink`, `theme-accent-cyan`, and `theme-muted`.
- `.no-scrollbar` is used for horizontal rails that must remain scrollable without visible scrollbars.
- Be careful with global CSS changes because they can affect every section.
- Do not delete keyframes or theme variables unless no component uses them. Search first with `rg`.

## Next.js / React Rules

- Read the relevant local Next.js docs before editing framework-specific code.
- `next/image` requires correct `src`, `alt`, and sizing strategy.
- Props passed from Server Components into Client Components must be serializable.
- Do not introduce package dependencies casually. Prefer existing React, Next.js, Tailwind, and `react-icons` capabilities.
- If a dependency is truly needed, explain why and update both `package.json` and `package-lock.json` through npm.

## Agent Workflow

Before editing:

- Run `git status --short` and note whether the tree is already dirty.
- Read the files directly involved in the requested change.
- Search with `rg` before changing shared classes, component APIs, or data shapes.
- For Next.js framework changes, read the relevant docs under `node_modules/next/dist/docs/`.

While editing:

- Keep the patch scoped to the request.
- Do not rewrite unrelated sections.
- Do not reformat whole files just because you touched a small area.
- Preserve existing user changes. Never revert files casually.
- Use `apply_patch` for manual file edits.

After editing:

- Run `npm run lint`.
- Run `npm run build` for user-facing UI, framework, or type-sensitive changes.
- For visual or interaction changes, start `npm run dev` and verify the page in a browser when possible.
- Clean up temporary logs, screenshots, test profiles, or debug artifacts before finishing.

## Common Pitfalls

- Do not edit `package.json` with temporary tooling commands such as `npm init` in the project root.
- Do not add browser automation artifacts such as `.chrome-debug/`, logs, or screenshots to the repo.
- Do not assume training-data Next.js behavior applies. This project explicitly warns that the installed Next.js docs are the source of truth.
- Do not convert large static sections into Client Components unless interactivity requires it.
- Do not put `window`, `document`, or `localStorage` access in Server Components.
- Do not hide overflow around cards that have hover lift or image scaling unless clipping is intended.
- Do not change the brand palette or visual tone as a side effect of a functional task.

## Verification Commands

Use these as the default close-out checks:

```bash
npm run lint
npm run build
```

For local visual verification:

```bash
npm run dev
```

Then open the local URL shown by Next.js, usually `http://localhost:3000`.

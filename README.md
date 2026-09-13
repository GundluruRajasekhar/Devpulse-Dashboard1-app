# DevPulse — Developer Productivity Dashboard

A responsive developer productivity dashboard built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. It's meant to look and behave like a real internal tool: a dashboard homepage, accessible navigation, a profile section, project/task cards with a consistent visual system, progress indicators, search & filtering, and deliberate loading/empty/error states.

## Live preview note

There's a **"Preview state"** control in the top nav (desktop: top-right dropdown, mobile: inside the menu). It lets you switch the whole dashboard between `Populated`, `Loading`, `Empty`, and `Error` on demand — useful for demoing/reviewing state handling without needing a real backend or dev tools.

## Tech stack

- **Next.js 14** (App Router, `"use client"` where interactivity is needed)
- **TypeScript** throughout, with shared types in `lib/types.ts`
- **Tailwind CSS** with a small custom design-token layer (`tailwind.config.ts`) — no default shadcn/Bootstrap look
- No UI kit dependency — every component (badges, progress bar/ring, avatars, skeletons, empty/error states) is hand-built and reusable
- Mock data (`lib/mockData.ts`) simulated through a data hook (`hooks/useDashboardData.ts`) that mimics an async fetch, so the loading state is real, not just a spinner for show

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The first build needs internet access once, to fetch the Inter and JetBrains Mono font files via `next/font/google` (self-hosted afterwards, no runtime calls to Google).

```bash
npm run build   # production build
npm run start   # run the production build locally
```

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Dashboard homepage — composes everything below
  globals.css         Design tokens, focus states, reduced-motion handling
components/
  layout/
    TopNav.tsx         Nav bar: wayfinding, mobile menu, skip link, state preview
    ProfileMenu.tsx     Profile dropdown (name, role, contact, sign out)
  dashboard/
    ProfileSummary.tsx  Homepage greeting/profile panel with focus-goal ring
    StatsRow.tsx / StatCard.tsx   Top-line metrics with their own loading state
    ProjectsSection.tsx / ProjectCard.tsx
    TasksSection.tsx / TaskCard.tsx
    SearchFilterBar.tsx  Reusable search + toggleable filter chips
  ui/
    ProgressBar.tsx, ProgressRing.tsx   Reusable progress indicators
    Badge.tsx            Status badges + priority tag (shared color system)
    Avatar.tsx            Avatar + stacked avatars
    Skeleton.tsx           Loading skeletons per card/row type
    EmptyState.tsx / ErrorState.tsx     Shared empty/error treatments
hooks/
  useDashboardData.ts   Simulated async data source (loading/ready/empty/error)
lib/
  types.ts               Shared TypeScript types
  mockData.ts             Mock projects, tasks, and current user
```

## Design decisions

- **Dark, tool-like palette** (charcoal base, amber primary accent, teal/coral/violet for status) rather than a generic light SaaS card kit — deliberately chosen for a tool developers would keep open all day.
- **Two type families with distinct jobs**: Inter for UI text, JetBrains Mono reserved for genuinely technical strings (repo names, commit timestamps, percentages) — not used as generic label decoration.
- **State handling is a first-class feature, not an afterthought.** Every dynamic view (stats, projects, tasks) has its own loading skeleton, its own empty state copy, and its own error state — wired through one `DataState` type so it's easy to reason about.
- **Component reuse**: `ProgressBar`/`ProgressRing`, `Badge`, `Avatar`, `SearchFilterBar`, `EmptyState`, and `ErrorState` are all generic and reused across the Projects and Tasks sections rather than duplicated per section.
- **Accessibility**: skip-to-content link, visible focus rings, `aria-current`/`aria-pressed`/`aria-expanded` on interactive nav/filter elements, `role="progressbar"` with value attributes on both progress components.
- **Responsive**: single-column on mobile, 2-column projects grid on tablet, 3-column on desktop; nav collapses to a mobile menu; profile panel and stats stack instead of overflowing.

## Deploying

This is a standard Next.js app — it deploys as-is to **Vercel** (recommended), or any Node hosting that supports Next.js. No environment variables are required since all data is mocked client-side.

## Suggested next steps (not built, intentionally out of scope for this brief)

- Wire `hooks/useDashboardData.ts` to a real API route instead of mock data
- "Reports" nav item is present but marked "Soon" — a real analytics view would live there
- Persisted filters/search in the URL query string for shareable links

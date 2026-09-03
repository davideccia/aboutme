# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a single-page, print-friendly Astro resume site, styled with `github-markdown-css`. Content is data-driven: editing the resume means editing files under `src/content/`, not the page markup in `src/pages/index.astro`.

## Commands

Package manager is **pnpm** (`pnpm-lock.yaml` / `pnpm-workspace.yaml` present).

| Command             | Action                                                          |
| :------------------- | :--------------------------------------------------------------- |
| `pnpm install`       | Install dependencies                                            |
| `pnpm run dev`       | Start local dev server at `localhost:4321`                      |
| `pnpm run build`     | Build production site to `./dist/`                              |
| `pnpm run preview`   | Preview a production build locally                               |
| `pnpm run check`     | Run `astro check` (types/content schemas) + `prettier . --check` |
| `pnpm run build:pdf` | Install Playwright's Chromium, then run `bin/build-pdf.ts`       |

There is no test suite. `pnpm run check` is the correctness gate — run it after any content or component change.

`pnpm run build:pdf` requires the site to already be served at `localhost:4321` (via `dev` or `preview`); it navigates there with Playwright and writes `pdf-exports/resume-<date>-<short-sha>.pdf`. The commit SHA is baked into the file name, so commit changes first if the export needs to match a specific state.

## Architecture

- **`src/pages/index.astro`** is the entire page — header/contact info, Summary, Experience, Stack, Projects, Education. All resume layout and print/screen CSS lives here (as a single global `<style>` block). Section order and structure changes happen here; content changes should not.
- **`src/content.config.ts`** defines Astro content collections with Zod schemas: `personal_projects`, `copyright_projects`, and `work`. Both project collections share the same schema (`title`, `icon`, `link`, optional `stack`) and are rendered in separate "Personal" / "Copyright" subsections under Projects.
  - `work` entries have a `period` field (e.g. `"Oct 2024 - Present"`) that is transformed/validated into `{ raw, start, end }` — parsing splits on `-`, so free text must follow that exact separator convention, and `Present` resolves to today's date for sorting.
  - Collection files are sorted differently: `personal_projects`/`copyright_projects` sort by file name (hence the `NN-slug.md` naming), `work` sorts by parsed `period.end` (reverse chronological) in `index.astro` — file name has no bearing on ordering there.
- **`src/content/data.ts`** holds resume data that isn't Markdown-collection-shaped: `summary` (name/contact/title), `frameworksStack`/`techonologiesStack` (skill badges with icon URLs + a 1-5 `level`), and `education`. It's typed with `as const satisfies {...}` against local types — keep new fields consistent with those types.
- **`src/content/summary.md`** is rendered directly as the "Summary" section's prose via `Content as Summary`.
- **Icons** come from `@mdi/js` (Material Design Icons), not a component library. `src/lib/mdi-icons.ts` builds a `Record<kebab-case-name, svgPath>` map by introspecting all `mdi*` named exports and converting `mdiMapMarker` → `map-marker`, etc. `content.config.ts` derives the Zod `icon` enum from this map's keys, so **any valid MDI icon name works in project frontmatter without touching the schema** — see the full list at https://pictogrammers.com/library/mdi/. `src/components/Info.astro` resolves an icon name to a path and renders inline `<svg><path>`; the `linkedin` icon is a special case rendered as an `<img>` pointing at a `dashboard-icons`/`simple-icons` CDN URL (the same pattern skill icons in `data.ts` use), not an MDI icon.
- **`src/components/SkillBadge.astro`** renders the framework/technology pills, taking an external `iconUrl` (CDN-hosted SVG) rather than a bundled icon.
- **`astro.config.mjs`** sets `compressHTML: false` deliberately — needed so skill badges wrap correctly; don't remove without checking that layout.

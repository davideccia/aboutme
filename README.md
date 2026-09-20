# aboutme

A single-page, print-friendly resume site built with [Astro](https://astro.build/), styled with [`github-markdown-css`](https://github.com/sindresorhus/github-markdown-css). Content lives in typed Markdown collections and a small data file, so updating the resume is a content change, not a layout change.

> [!NOTE]
> This repository is based on [`kanadgupta/astro-resume-minimal-template`](https://github.com/kanadgupta/astro-resume-minimal-template) and populated with my own résumé content.

## Features

- **Content-driven** — Experience, Projects, and Education are edited as data (Markdown frontmatter + a typed `data.ts` file), not by touching page markup.
- **Schema-validated content** — Astro content collections with Zod schemas catch malformed frontmatter (bad icon names, unparsable date ranges) at build/check time.
- **Icon system** — any [Material Design Icon](https://pictogrammers.com/library/mdi/) name works in project frontmatter out of the box, resolved against a generated icon map.
- **Print-aware styling** — a single global stylesheet handles both the on-screen layout and print output.

## Getting started

Prerequisites: Node.js (see [Astro's requirements](https://docs.astro.build/en/install-and-setup/#prerequisites)) and [pnpm](https://pnpm.io/).

```sh
pnpm install
pnpm run dev
```

The site is served at `localhost:4321`.

## Editing content

Resume content lives under `src/content/`, not in `src/pages/index.astro` (that file holds layout and styling only).

| Collection                     | Section     | Notes                                                                                                |
| :------------------------------ | :---------- | :---------------------------------------------------------------------------------------------------- |
| `src/content/work/`             | Experience  | Sorted by parsed `period.end` (reverse chronological); file name doesn't affect order.                |
| `src/content/personal_projects/`| Projects → Personal | Sorted by file name — hence the `NN-slug.md` naming.                                        |
| `src/content/copyright_projects/`| Projects → Copyright | Same schema and sorting as personal projects.                                             |
| `src/content/summary.md`        | Summary     | Rendered directly as prose.                                                                          |
| `src/content/data.ts`           | Header, Stack, Education | Contact info, skill badges (with a 1-5 proficiency level), and education entries.       |

> [!NOTE]
> The `work` collection's `period` field (e.g. `"Oct 2024 - Present"`) must use a literal hyphen separator — it's parsed and validated into start/end dates for sorting. `Present` resolves to today's date.

Project frontmatter accepts an `icon` field with any name from the [MDI icon library](https://pictogrammers.com/library/mdi/) (kebab-case, e.g. `github`, `map-marker`); the schema's enum is generated from that library automatically.

After editing content, run:

```sh
pnpm run check
```

This runs `astro check` (types and content schema validation) plus a Prettier format check — it's the correctness gate for any content or component change.

## Commands

| Command             | Action                                                            |
| :------------------- | :------------------------------------------------------------------ |
| `pnpm install`       | Install dependencies                                               |
| `pnpm run dev`       | Start the local dev server at `localhost:4321`                      |
| `pnpm run build`     | Build the production site to `./dist/`                              |
| `pnpm run preview`   | Preview a production build locally                                  |
| `pnpm run check`     | Run `astro check` (types/content schemas) + `prettier . --check`    |

There is no test suite; `pnpm run check` is the correctness gate.

## Deployment

This project deploys to AWS Amplify (`amplify.yml`): `pnpm install --frozen-lockfile` then `pnpm run build`, publishing the `dist/` directory.

## License

[MIT](LICENSE)

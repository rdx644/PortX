# Portfolio graph — start here

This folder is the persistent map for Shubham Putitundi's current portfolio. Read `../docs/HANDOFF.md` for task history, environment constraints, and pending deployment approval.

## Navigate

- `graph.html`: interactive searchable community graph.
- `graph.json`: standard graphify node-link export for retrieval.
- `extraction.json`: complete directed relationships, parallel relation types, and semantic hyperedges.
- `GRAPH_REPORT.md`: community cohesion, highly connected nodes, cross-community connections, and suggested questions.
- `coverage.json`: source, configuration, documentation, and asset inventory with hashes and extraction modes.
- `source-manifest.json`: input hashes used for freshness checking.
- `semantic.json`: reviewed document and SVG concepts, with source hashes.

## Useful starting files

| Request | Follow these files |
| --- | --- |
| Change project content | `src/data/projects.ts` → `ProjectExplorer.tsx` / shared case-study page |
| Update personal details | `src/data/profile.ts` → homepage sections, navigation, contact |
| Adjust hero motion | `HeroVisual.tsx` → `CircularText.tsx` / `ScrollVelocity.tsx`; `ScrollReveals.tsx` for page reveals |
| Change Anime.js interactions | `AnimeEffects.tsx` → lazy `anime-effects.ts`; HeroVisual/Expertise/Architecture targets and MotionPreferences; `.codex/config.toml` for local MCP |
| Change scrolling text | `ScrollReveal.tsx` → `scroll-reveal-runtime.ts`, About/Expertise/Experience and shared case-study paragraphs; `MotionPreferences.tsx` for Pause/reduced motion |
| Change GitHub activity | `github-schema.ts` → API route → `GitHubActivity.tsx` → boundary tests |
| Change project globe | `ProjectExplorer.tsx` → `InfiniteMenu.tsx`, project data and local SVG tiles |
| Change dark theme | Root tokens in `globals.css` → hero/interaction styles; `ProjectExplorer.tsx`/`HeroName.tsx` color settings and layout/social metadata |
| Change responsive design | `src/app/globals.css` → affected component → browser evidence |
| Review publication status | `docs/HANDOFF.md` → `docs/verification.md` |

## Refresh

Run `python scripts/refresh_graph.py --check` from the checkout. A nonzero exit with changed paths means source changed. Run `python scripts/refresh_graph.py` to rebuild structure, communities, HTML, report, and inventory.

The tool retains document/SVG semantics while source hashes match. Changed semantic sources are omitted and reported; use the graphify skill to regenerate the relevant fragment and refresh again. Review source files when changing behavior.

EXTRACTED, INFERRED, and AMBIGUOUS labels describe evidence strength. Static calls and render references describe source structure. Historical verification results remain dated evidence. Exact extraction-agent token counts were unavailable and are recorded as unavailable.

Generated dependencies, builds, browser traces and secrets are excluded. The résumé and lockfile have metadata/hash entries only. The global reference indexes this project; unrelated projects were not scanned.

## Saved handoff verification

The 2026-10-31 handoff includes the global discovery reference, repository instructions, reviewed document/SVG extraction, compiler-resolved imports, CSS tokens, source inventory, and an offline viewer. The viewer's canvas and search were exercised with external requests blocked; no external requests were needed. The graph's endpoints, confidence scores, semantic source hashes, and freshness check passed. The original handoff task did not change application source. Subsequent design integrations and their current QA are recorded in `../docs/HANDOFF.md` and `../docs/verification.md`; the report and manifest contain current graph counts.

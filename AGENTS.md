# Portfolio working context

Applies only to this repository. Read `docs/HANDOFF.md` before modifying it.

## Project identity

- Owner: Shubham Putitundi; source profile: https://github.com/rdx644.
- Canonical checkout: `D:\CodexProjects\shubham-portfolio`.
- User-facing alias: `C:\Users\putit\shubham-portfolio` (directory junction to the same checkout).
- Do not confuse this project with `my-portfolio`, `Portofolio_V5`, or the `PortX` GitHub repository. No remote is configured for this checkout.

## Context before changes

1. Check `git status` and the current branch; preserve user changes.
2. Read `docs/HANDOFF.md` for state, commands, and outstanding work.
3. Read `graphify-out/CONTEXT.md` and `graphify-out/GRAPH_REPORT.md`; query `graphify-out/graph.json` for affected relationships.
4. Run `python scripts/refresh_graph.py --check` to detect stale graph inputs. Source files are authoritative when graph and source disagree.
5. Read the relevant source modules and `docs/content-and-decisions.md`; the graph is a navigation aid, not a substitute for source review.

## Preserve the design and truthfulness

Keep the user-approved dark neo-brutalist design: charcoal backgrounds, warm off-white type, periwinkle accents, yellow/pink stamps, heavy name-first typography, visible slate borders, and hard ink shadows. The latest dark-theme request supersedes the earlier cream-background palette; retain cream only as text or isolated artwork. Preserve typed component boundaries, accessible semantics, responsive layouts, and reduced-motion/static fallbacks. The 2026-10-31 redesign in `docs/content-and-decisions.md` supersedes the blueprint’s original editorial styling and cube sculpture. Never invent metrics, production adoption, direct employment, credentials, or successful external portal submissions. Keep prototype limitations visible.

## Verification and graph maintenance

- Use `npm test`, `npm run lint`, and `npm run build` for relevant code changes; browser-check affected interactions and viewports.
- After changes, run `python scripts/refresh_graph.py` to refresh structural relationships, file coverage, and stale-semantic warnings.
- If documentation changes, use the graphify skill for semantic re-extraction, replace `graphify-out/semantic.json`, then refresh. Never relabel an old semantic fragment as current without reviewing its sources.
- Update `docs/HANDOFF.md` and `docs/verification.md` with material state changes and actual evidence. Do not claim previous Lighthouse scores as fresh results.
- The graph excludes generated dependencies/builds and resume text. Tracked files, including excluded assets/configuration, remain represented in the coverage inventory.

## Environment and publication boundary

C: has little free space. Prefer the canonical D: checkout and the cache/temp paths in the handoff. Do not delete unrelated files or move other projects to make room.

No external deployment or GitHub push has occurred. Prior Vercel authentication was invalid; automatic approval review rejected the fallback upload of the source and personal résumé. Publishing is pending explicit user approval and a suitable authenticated destination. This handoff is not deployment authorization.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

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

Keep the warm off-white/cobalt editorial design, typed component boundaries, accessible semantics, responsive layouts, and reduced-motion/WebGL fallbacks. Follow `docs/implementation-blueprint.md`. Never invent metrics, production adoption, direct employment, credentials, or successful external portal submissions. Keep prototype limitations visible.

## Verification and graph maintenance

- Use `npm test`, `npm run lint`, and `npm run build` for relevant code changes; browser-check affected interactions and viewports.
- After changes, run `python scripts/refresh_graph.py` to refresh structural relationships, file coverage, and stale-semantic warnings.
- If documentation changes, use the graphify skill for semantic re-extraction, replace `graphify-out/semantic.json`, then refresh. Never relabel an old semantic fragment as current without reviewing its sources.
- Update `docs/HANDOFF.md` and `docs/verification.md` with material state changes and actual evidence. Do not claim previous Lighthouse scores as fresh results.
- The graph excludes generated dependencies/builds and resume text. Tracked files, including excluded assets/configuration, remain represented in the coverage inventory.

## Environment and publication boundary

C: has little free space. Prefer the canonical D: checkout and the cache/temp paths in the handoff. Do not delete unrelated files or move other projects to make room.

No external deployment or GitHub push has occurred. Prior Vercel authentication was invalid; automatic approval review rejected the fallback upload of the source and personal résumé. Publishing is pending explicit user approval and a suitable authenticated destination. This handoff is not deployment authorization.

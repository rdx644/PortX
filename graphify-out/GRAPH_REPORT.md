# Graph Report - D:\CodexProjects\shubham-portfolio  (2026-10-31)

## Corpus Check
- Corpus is ~16,800 words - fits in a single context window. You may not need a graph.

## Summary
- 298 nodes · 613 edges · 11 communities detected
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.81)
- Token cost: unavailable (in-session extraction-agent counters were not exposed)

## Community Hubs (Navigation)
- [[_COMMUNITY_Metadata and navigation|Metadata and navigation]]
- [[_COMMUNITY_Project decisions 1|Project decisions 1]]
- [[_COMMUNITY_Visual identity|Visual identity]]
- [[_COMMUNITY_Engineering decisions|Engineering decisions]]
- [[_COMMUNITY_Workspace and delivery|Workspace and delivery]]
- [[_COMMUNITY_TypeScript graph extraction|TypeScript graph extraction]]
- [[_COMMUNITY_Project case studies|Project case studies]]
- [[_COMMUNITY_GitHub data validation|GitHub data validation]]
- [[_COMMUNITY_Dependencies and build tools|Dependencies and build tools]]
- [[_COMMUNITY_Project decisions 9|Project decisions 9]]
- [[_COMMUNITY_Graph refresh workflow|Graph refresh workflow]]

## God Nodes (most connected - your core abstractions)
1. `docs/HANDOFF.md` - 44 edges
2. `docs/content-and-decisions.md` - 34 edges
3. `scripts/extract_structure.mjs` - 22 edges
4. `next` - 20 edges
5. `src/app/globals.css` - 19 edges
6. `docs/verification.md` - 18 edges
7. `react` - 18 edges
8. `src/data/profile.ts` - 14 edges
9. `src/app/layout.tsx` - 12 edges
10. `src/lib/use-reduced-motion.ts` - 12 edges

## Surprising Connections (you probably didn't know these)
- `docs/HANDOFF.md` --references--> `public/resume/shubham-putitundi.pdf`  [EXTRACTED]
  docs/HANDOFF.md → public/resume/shubham-putitundi.pdf
- `docs/HANDOFF.md` --references--> `scripts/refresh_graph.py`  [EXTRACTED]
  docs/HANDOFF.md → scripts/refresh_graph.py
- `docs/HANDOFF.md` --references--> `src/app/api/github/route.ts`  [EXTRACTED]
  docs/HANDOFF.md → src/app/api/github/route.ts
- `docs/HANDOFF.md` --references--> `src/app/layout.tsx`  [EXTRACTED]
  docs/HANDOFF.md → src/app/layout.tsx
- `docs/HANDOFF.md` --references--> `src/app/opengraph-image.tsx`  [EXTRACTED]
  docs/HANDOFF.md → src/app/opengraph-image.tsx

## Hyperedges (group relationships)
- **Durable context and freshness workflow for future modifications** — doc_handoff, doc_graph_context, doc_graph_maintenance, doc_source_review [EXTRACTED 1.00]
- **Decorative motion stays optional across offscreen pause OS changes and no-JavaScript output** — doc_reactbits_adaptations, doc_motion_controls, doc_live_reduced_motion, doc_scroll_reveals, doc_initial_independence [EXTRACTED 1.00]
- **Evidence-constrained project storytelling preserves prototype and credential limits** — doc_authenticity, doc_projects_data, doc_prototype_limits, doc_case_template, doc_credentials [INFERRED 0.90]

## Communities

### Community 0 - "Metadata and navigation"
Cohesion: 0.07
Nodes (63): src/components, src/components/hero, src/components/navigation, src/components/react-bits, src/components/sections, src/components/ui, src/app/layout.tsx, src/app/not-found.tsx (+55 more)

### Community 1 - "Project decisions 1"
Cohesion: 0.1
Nodes (41): Source-backed claims and visible prototype limits, Portfolio implementation blueprint requirements, Hourly cache and six-second request timeout, Public CircularText registry: https://reactbits.dev/r/CircularText-TS-CSS.json, CircularText: evenly spaced ring letters with CSS rotation, Small typed component boundaries and accessible responsive semantics, Email contact through mailto; no message-collection backend, Resume-sourced credential names/dates and issuer links; not independently authenticated (+33 more)

### Community 2 - "Visual identity"
Cohesion: 0.06
Nodes (39): --accent = #244bd7, --background = #faf7ed, --blue-light = #dbe4fa, --border = #242424, --dark = #191919, --font-sans = var(--font-body), --foreground = #191919, --muted = #57574f (+31 more)

### Community 3 - "Engineering decisions"
Cohesion: 0.12
Nodes (35): Canonical checkout: D:/CodexProjects/shubham-portfolio, Shared statically generated case-study template, Four GitHub boundary tests lint typecheck build and diff checks passed, Ignored neo screenshots and lighthouse-neo-mobile.json provide local evidence, Keyboard menu Escape focus accordions diagrams cursor and resume download checked, 2026-10-31 isolated local mobile Lighthouse 100/100/100/100; LCP 0.80s TBT 42ms CLS 0, Pause/Play and live reduced-motion changes pass; finite reveals cancel, 390px JavaScript-disabled content visible with named h1 links and paused ring (+27 more)

### Community 4 - "Workspace and delivery"
Cohesion: 0.09
Nodes (15): Shubham portfolio checkout, .codex, .github, .github/workflows, docs, docs/licenses, public, public/resume (+7 more)

### Community 5 - "TypeScript graph extraction"
Cohesion: 0.14
Nodes (22): scripts/extract_structure.mjs, node:fs, node:path, addNode, config, declarations, declaredName, edge (+14 more)

### Community 6 - "Project case studies"
Cohesion: 0.17
Nodes (20): src/components/projects, src/app/projects/[slug]/page.tsx, src/components/projects/Architecture.tsx, src/components/projects/CursorDemo.tsx, src/components/projects/ProjectVisual.tsx, src/components/projects/Projects.tsx, src/data/projects.ts, CaseStudy (+12 more)

### Community 7 - "GitHub data validation"
Cohesion: 0.12
Nodes (17): src/app/api, src/app/api/github, tests, src/app/api/github/route.ts, src/lib/github-schema.ts, tests/github.test.ts, node:assert/strict, node:test (+9 more)

### Community 8 - "Dependencies and build tools"
Cohesion: 0.15
Nodes (15): src/lib/utils.ts, @fontsource/geist, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom, clsx, eslint (+7 more)

### Community 9 - "Project decisions 9"
Cohesion: 0.46
Nodes (8): React Bits MIT + Commons Clause License Condition v1.0; copyright 2026 David Haz, React Bits use/copy/modify/distribute within applications websites or products including commercial use, May not sell sublicense or redistribute components themselves alone bundled or ported, Exports usable in personal/commercial products; no standalone export sales or redistribution as packs/products, Copyright and permission notices required in copies or substantial portions, Tools and sounds may not be sold sublicensed redistributed or offered as substantially similar hosted tools, Software provided as-is without warranty or author liability, docs/licenses/react-bits.md

### Community 10 - "Graph refresh workflow"
Cohesion: 0.43
Nodes (8): scripts/refresh_graph.py, Refresh local architecture context. Run from any directory; no model/API credent, digest(), inventory(), main(), node_id(), read_json(), write_json()

## Knowledge Gaps
- **72 isolated node(s):** `.github/workflows/ci.yml`, `config`, `config`, `root`, `files` (+67 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **How does src/data/projects.ts feed homepage previews and generated case studies?**
  _The content model is imported by both presentation paths._
- **How do reduced-motion, no-JavaScript, and GitHub fallbacks preserve usable homepage content?**
  _This connects optional motion, data validation, and the documented initial-content requirement._
- **Why does `docs/HANDOFF.md` connect `Engineering decisions` to `Metadata and navigation`, `Project decisions 1`, `Visual identity`, `Workspace and delivery`, `Project case studies`, `GitHub data validation`, `Graph refresh workflow`?**
  _High betweenness centrality (0.367) - this node is a cross-community bridge._
- **Why does `docs/content-and-decisions.md` connect `Project decisions 1` to `Metadata and navigation`, `Visual identity`, `Engineering decisions`, `Workspace and delivery`, `Project decisions 9`?**
  _High betweenness centrality (0.162) - this node is a cross-community bridge._
- **Why does `src/app/globals.css` connect `Visual identity` to `Metadata and navigation`, `Project decisions 1`, `Engineering decisions`?**
  _High betweenness centrality (0.116) - this node is a cross-community bridge._
## Extraction audit

- Full source inventory: 62 files with SHA-256 hashes; parser corpus: 48 supported files.
- Generic graphify AST plus TypeScript compiler resolution of local imports, TSX render references, and static call references. References describe source structure, not proof of runtime execution.
- Semantic fragments were authored by graphify extraction agents. Exact model token usage was unavailable; zeros in the standard token fields mean unavailable, not zero cost.
- Graphify exports an undirected analysis graph; original edge directions and parallel relations are preserved in extraction.json.
- Community cohesion and suggested refactoring questions are graph heuristics, not findings that the application needs refactoring.
- Dependencies, builds, browser traces and private environment files are outside the corpus. The resume and dependency lockfile are represented by metadata/hash only.
- Stale semantic sources omitted: none.

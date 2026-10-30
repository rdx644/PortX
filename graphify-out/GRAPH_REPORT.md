# Graph Report - D:\CodexProjects\shubham-portfolio  (2026-10-31)

## Corpus Check
- Corpus is ~15,195 words - fits in a single context window. You may not need a graph.

## Summary
- 251 nodes · 490 edges · 9 communities detected
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.78)
- Token cost: unavailable (in-session extraction-agent counters were not exposed)

## Community Hubs (Navigation)
- [[_COMMUNITY_Metadata and navigation|Metadata and navigation]]
- [[_COMMUNITY_Engineering decisions|Engineering decisions]]
- [[_COMMUNITY_TypeScript graph extraction|TypeScript graph extraction]]
- [[_COMMUNITY_Homepage composition|Homepage composition]]
- [[_COMMUNITY_Workspace and delivery|Workspace and delivery]]
- [[_COMMUNITY_Project case studies|Project case studies]]
- [[_COMMUNITY_WebGL and interactions|WebGL and interactions]]
- [[_COMMUNITY_Dependencies and build tools|Dependencies and build tools]]
- [[_COMMUNITY_GitHub data validation|GitHub data validation]]

## God Nodes (most connected - your core abstractions)
1. `docs/HANDOFF.md` - 40 edges
2. `scripts/extract_structure.mjs` - 22 edges
3. `next` - 20 edges
4. `src/app/globals.css` - 14 edges
5. `src/data/profile.ts` - 14 edges
6. `react` - 13 edges
7. `scripts/refresh_graph.py` - 11 edges
8. `src/app/layout.tsx` - 11 edges
9. `src/app/page.tsx` - 11 edges
10. `src/app/projects/[slug]/page.tsx` - 11 edges

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
- **Optional visuals preserve useful initial content** — doc_r3f, doc_on_demand, doc_svg_fallback, doc_initial_independence [EXTRACTED 1.00]
- **Durable context for future modification** — doc_handoff, doc_graph_context, doc_graph_maintenance, doc_source_review [EXTRACTED 1.00]
- **Evidence-constrained project storytelling** — doc_authenticity, doc_projects_data, doc_prototype_limits, doc_case_template [INFERRED 0.85]

## Communities

### Community 0 - "Metadata and navigation"
Cohesion: 0.06
Nodes (48): --accent = #315cdb, --background = #f5f5f0, --border = #dedfd8, --dark = #151817, --font-sans = var(--font-body), --foreground = #171918, --muted = #60645e, --space = clamp(24px, 5.5vw, 88px) (+40 more)

### Community 1 - "Engineering decisions"
Cohesion: 0.1
Nodes (42): Source-backed claims and visible prototype limits, Portfolio implementation blueprint requirements, Hourly cache and six-second request timeout, Canonical D: portfolio checkout, Shared statically generated case-study template, Small typed component boundaries, Email contact through mailto, Clearly labeled local cursor simulation (+34 more)

### Community 2 - "TypeScript graph extraction"
Cohesion: 0.1
Nodes (31): scripts, scripts/extract_structure.mjs, scripts/refresh_graph.py, node:fs, node:path, addNode, config, declarations (+23 more)

### Community 3 - "Homepage composition"
Cohesion: 0.14
Nodes (26): src/components/sections, src/components/ui, src/app/page.tsx, src/components/hero/Hero.tsx, src/components/sections/About.tsx, src/components/sections/ContactAction.tsx, src/components/sections/Experience.tsx, src/components/sections/Expertise.tsx (+18 more)

### Community 4 - "Workspace and delivery"
Cohesion: 0.1
Nodes (13): Shubham portfolio checkout, .codex, .github, .github/workflows, docs, public, public/resume, .codex/config.toml (+5 more)

### Community 5 - "Project case studies"
Cohesion: 0.17
Nodes (22): src/components/projects, src/app/projects/[slug]/page.tsx, src/components/projects/Architecture.tsx, src/components/projects/CursorDemo.tsx, src/components/projects/ProjectVisual.tsx, src/components/projects/Projects.tsx, src/data/projects.ts, react (+14 more)

### Community 6 - "WebGL and interactions"
Cohesion: 0.16
Nodes (18): src/components, src/components/hero, src/components/navigation, src/components/three, src/components/hero/HeroVisual.tsx, src/components/hero/NetworkFallback.tsx, src/components/three/HeroScene.tsx, @react-three/drei (+10 more)

### Community 7 - "Dependencies and build tools"
Cohesion: 0.13
Nodes (17): src/lib/utils.ts, @fontsource/geist, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom, @types/three, clsx (+9 more)

### Community 8 - "GitHub data validation"
Cohesion: 0.12
Nodes (17): src/app/api, src/app/api/github, tests, src/app/api/github/route.ts, src/lib/github-schema.ts, tests/github.test.ts, node:assert/strict, node:test (+9 more)

## Knowledge Gaps
- **70 isolated node(s):** `.github/workflows/ci.yml`, `config`, `config`, `root`, `files` (+65 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **How does src/data/projects.ts feed homepage previews and generated case studies?**
  _The content model is imported by both presentation paths._
- **How do the WebGL and GitHub fallbacks preserve usable homepage content?**
  _This connects graphics, data validation, and the documented initial-content requirement._
- **Why does `docs/HANDOFF.md` connect `Engineering decisions` to `Metadata and navigation`, `TypeScript graph extraction`, `Homepage composition`, `Workspace and delivery`, `Project case studies`, `WebGL and interactions`, `GitHub data validation`?**
  _High betweenness centrality (0.409) - this node is a cross-community bridge._
- **Why does `scripts/extract_structure.mjs` connect `TypeScript graph extraction` to `Dependencies and build tools`?**
  _High betweenness centrality (0.137) - this node is a cross-community bridge._
- **Why does `next` connect `Metadata and navigation` to `Workspace and delivery`, `Project case studies`, `WebGL and interactions`, `Dependencies and build tools`?**
  _High betweenness centrality (0.121) - this node is a cross-community bridge._
## Extraction audit

- Full source inventory: 57 files with SHA-256 hashes; parser corpus: 44 supported files.
- Generic graphify AST plus TypeScript compiler resolution of local imports, TSX render references, and static call references. References describe source structure, not proof of runtime execution.
- Semantic fragments were authored by graphify extraction agents. Exact model token usage was unavailable; zeros in the standard token fields mean unavailable, not zero cost.
- Graphify exports an undirected analysis graph; original edge directions and parallel relations are preserved in extraction.json.
- Community cohesion and suggested refactoring questions are graph heuristics, not findings that the application needs refactoring.
- Dependencies, builds, browser traces and private environment files are outside the corpus. The resume and dependency lockfile are represented by metadata/hash only.
- Stale semantic sources omitted: none.

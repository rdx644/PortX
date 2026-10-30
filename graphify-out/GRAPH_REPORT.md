# Graph Report - D:\CodexProjects\shubham-portfolio  (2026-10-31)

## Corpus Check
- Corpus is ~29,400 words - fits in a single context window. You may not need a graph.

## Summary
- 418 nodes · 901 edges · 14 communities detected
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.82)
- Token cost: unavailable (in-session extraction-agent counters were not exposed)

## Community Hubs (Navigation)
- [[_COMMUNITY_Project decisions 0|Project decisions 0]]
- [[_COMMUNITY_Metadata and navigation|Metadata and navigation]]
- [[_COMMUNITY_Visual identity|Visual identity]]
- [[_COMMUNITY_Dependencies and build tools|Dependencies and build tools]]
- [[_COMMUNITY_Homepage composition|Homepage composition]]
- [[_COMMUNITY_GitHub data validation|GitHub data validation]]
- [[_COMMUNITY_Application foundation 6|Application foundation 6]]
- [[_COMMUNITY_Application foundation 7|Application foundation 7]]
- [[_COMMUNITY_Engineering decisions|Engineering decisions]]
- [[_COMMUNITY_Project decisions 9|Project decisions 9]]
- [[_COMMUNITY_TypeScript graph extraction|TypeScript graph extraction]]
- [[_COMMUNITY_Project case studies 11|Project case studies 11]]
- [[_COMMUNITY_Project case studies 12|Project case studies 12]]
- [[_COMMUNITY_Project decisions 13|Project decisions 13]]

## God Nodes (most connected - your core abstractions)
1. `docs/content-and-decisions.md` - 61 edges
2. `docs/HANDOFF.md` - 50 edges
3. `react` - 36 edges
4. `docs/verification.md` - 32 edges
5. `src/components/react-bits/TechText.tsx` - 27 edges
6. `src/components/react-bits/InfiniteMenu.tsx` - 26 edges
7. `next` - 23 edges
8. `scripts/extract_structure.mjs` - 22 edges
9. `src/app/globals.css` - 19 edges
10. `src/components/ui/MotionPreferences.tsx` - 17 edges

## Surprising Connections (you probably didn't know these)
- `loadFeatures` --lazy_imports--> `motion`  [EXTRACTED]
  src/components/sections/ContactAction.tsx → package.json
- `docs/HANDOFF.md` --references--> `public/resume/shubham-putitundi.pdf`  [EXTRACTED]
  docs/HANDOFF.md → public/resume/shubham-putitundi.pdf
- `docs/HANDOFF.md` --references--> `scripts/refresh_graph.py`  [EXTRACTED]
  docs/HANDOFF.md → scripts/refresh_graph.py
- `docs/HANDOFF.md` --references--> `src/app/api/github/route.ts`  [EXTRACTED]
  docs/HANDOFF.md → src/app/api/github/route.ts
- `docs/HANDOFF.md` --references--> `src/app/layout.tsx`  [EXTRACTED]
  docs/HANDOFF.md → src/app/layout.tsx

## Hyperedges (group relationships)
- **Durable context and freshness workflow for future modifications** — doc_handoff, doc_graph_context, doc_graph_maintenance, doc_source_review [EXTRACTED 1.00]
- **Shared motion preference and optional failure boundaries preserve usable static content** — doc_motion_preferences, doc_motion_controls, doc_live_reduced_motion, doc_optional_boundary, doc_initial_independence [EXTRACTED 1.00]
- **Default-open viewport-loaded globe and six compact links form one resilient primary project browser** — doc_infinite_menu, doc_globe_default_open, doc_globe_viewport_loading, doc_globe_navigation, doc_globe_fallback, doc_case_content_preserved [EXTRACTED 1.00]
- **Evidence-constrained project storytelling preserves prototype and credential limits** — doc_authenticity, doc_projects_data, doc_prototype_limits, doc_case_template, doc_credentials [INFERRED 0.90]

## Communities

### Community 0 - "Project decisions 0"
Cohesion: 0.07
Nodes (73): Source-backed claims and visible prototype limits, Public React Bits references: tech-text target-cursor click-spark infinite-menu and gooey-nav, Portfolio implementation blueprint requirements, Hourly cache and six-second request timeout, Six dedicated case-study pages retain content source links diagrams and scope notes, Shared statically generated case-study template, Public CircularText registry: https://reactbits.dev/r/CircularText-TS-CSS.json, CircularText: evenly spaced ring letters with CSS rotation (+65 more)

### Community 1 - "Metadata and navigation"
Cohesion: 0.09
Nodes (55): src/components, src/components/hero, src/components/navigation, src/components/react-bits, src/components/ui, src/app/layout.tsx, src/app/not-found.tsx, src/components/hero/Hero.tsx (+47 more)

### Community 2 - "Visual identity"
Cohesion: 0.05
Nodes (44): --accent = #244bd7, --background = #faf7ed, --blue-light = #dbe4fa, --border = #242424, --dark = #191919, --font-sans = var(--font-body), --foreground = #191919, --muted = #57574f (+36 more)

### Community 3 - "Dependencies and build tools"
Cohesion: 0.06
Nodes (27): Shubham portfolio checkout, .codex, .github, .github/workflows, docs, docs/licenses, scripts, .codex/config.toml (+19 more)

### Community 4 - "Homepage composition"
Cohesion: 0.15
Nodes (27): src/components/sections, src/app/page.tsx, src/components/projects/Projects.tsx, src/components/sections/About.tsx, src/components/sections/Contact.tsx, src/components/sections/ContactAction.tsx, src/components/sections/Experience.tsx, src/components/sections/Expertise.tsx (+19 more)

### Community 5 - "GitHub data validation"
Cohesion: 0.11
Nodes (25): tests, scripts/refresh_graph.py, src/app/api/github/route.ts, src/lib/github-schema.ts, tests/github.test.ts, node:assert/strict, node:test, zod (+17 more)

### Community 6 - "Application foundation 6"
Cohesion: 0.11
Nodes (24): src/components/react-bits/TechText.tsx, Art, Band, Box, Cell, FALLOFF_STEPS, Glyph, INHERIT (+16 more)

### Community 7 - "Application foundation 7"
Cohesion: 0.14
Nodes (23): src/components/react-bits/InfiniteMenu.tsx, ArrowIcon, Engine, FOV, FRAGMENT, FRONT, GRID, InfiniteMenu (+15 more)

### Community 8 - "Engineering decisions"
Cohesion: 0.16
Nodes (21): Canonical checkout: D:/CodexProjects/shubham-portfolio, Small typed component boundaries and accessible responsive semantics, C: disk-space constraint, Final domain Sentry and analytics still unconfigured, Persistent graph context and source/config/document/asset coverage inventory, Structural refresh and source-hash-based semantic freshness checks, Durable project handoff, C: project path is a local directory junction (+13 more)

### Community 9 - "Project decisions 9"
Cohesion: 0.18
Nodes (22): Historical bits screenshots and lighthouse-bits-mobile.json under ignored output/playwright, Historical supplied-design local mobile Lighthouse 93/100/100/100; LCP 1.21s TBT 308ms CLS 0, Historical supplied-design QA: shared Pause/Play and live reduced motion disable animations canvases and brackets, Historical supplied-design QA: globe drag arrow keys Enter and touch/menu checked, Historical supplied-design production-preview Chromium QA on feat/react-bits-interactions, Historical supplied-design QA: blocked TechText chunk preserved h1 DOM name main content and then-present cards, Current production build with strict TypeScript lint four tests and diff checks passed, Current globe-primary desktop/mobile screenshots and lighthouse-globe-primary-mobile.json (+14 more)

### Community 10 - "TypeScript graph extraction"
Cohesion: 0.14
Nodes (21): scripts/extract_structure.mjs, node:fs, node:path, addNode, config, declarations, declaredName, edge (+13 more)

### Community 11 - "Project case studies 11"
Cohesion: 0.15
Nodes (20): src/app/projects, src/app/projects/[slug], src/components/projects, src/app/projects/[slug]/page.tsx, src/components/projects/Architecture.tsx, src/components/projects/CursorDemo.tsx, src/components/projects/ProjectVisual.tsx, src/data/projects.ts (+12 more)

### Community 12 - "Project case studies 12"
Cohesion: 0.18
Nodes (11): public, public/projects, public/projects/tiles, public/resume, public/projects/tiles/agentic-commerce.svg, public/projects/tiles/cybershield.svg, public/projects/tiles/haveloc-agent.svg, public/projects/tiles/multiplayer-cursor.svg (+3 more)

### Community 13 - "Project decisions 13"
Cohesion: 0.46
Nodes (8): React Bits MIT + Commons Clause License Condition v1.0; copyright 2026 David Haz, React Bits use/copy/modify/distribute within applications websites or products including commercial use, May not sell sublicense or redistribute components themselves alone bundled or ported, Exports usable in personal/commercial products; no standalone export sales or redistribution as packs/products, Copyright and permission notices required in copies or substantial portions, Tools and sounds may not be sold sublicensed redistributed or offered as substantially similar hosted tools, Software provided as-is without warranty or author liability, docs/licenses/react-bits.md

## Knowledge Gaps
- **107 isolated node(s):** `.github/workflows/ci.yml`, `public/projects/tiles/agentic-commerce.svg`, `public/projects/tiles/cybershield.svg`, `public/projects/tiles/haveloc-agent.svg`, `public/projects/tiles/multiplayer-cursor.svg` (+102 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **How does src/data/projects.ts feed the default-open globe and dedicated case-study pages?**
  _The content model is imported by both presentation paths._
- **How do reduced-motion, no-JavaScript, and GitHub fallbacks preserve usable homepage content?**
  _This connects optional motion, data validation, and the documented initial-content requirement._
- **Why does `docs/HANDOFF.md` connect `Engineering decisions` to `Project decisions 0`, `Metadata and navigation`, `Visual identity`, `Dependencies and build tools`, `Homepage composition`, `GitHub data validation`, `Project decisions 9`, `Project case studies 11`, `Project case studies 12`?**
  _High betweenness centrality (0.325) - this node is a cross-community bridge._
- **Why does `react` connect `Metadata and navigation` to `Visual identity`, `Dependencies and build tools`, `Homepage composition`, `Application foundation 6`, `Application foundation 7`, `Project case studies 11`?**
  _High betweenness centrality (0.261) - this node is a cross-community bridge._
- **Why does `docs/content-and-decisions.md` connect `Project decisions 0` to `Metadata and navigation`, `Visual identity`, `Dependencies and build tools`, `Engineering decisions`, `Project decisions 9`, `Project decisions 13`?**
  _High betweenness centrality (0.232) - this node is a cross-community bridge._
## Extraction audit

- Full source inventory: 80 files with SHA-256 hashes; parser corpus: 63 supported files.
- Generic graphify AST plus TypeScript compiler resolution of local imports, TSX render references, and static call references. References describe source structure, not proof of runtime execution.
- Semantic fragments were authored by graphify extraction agents. Exact model token usage was unavailable; zeros in the standard token fields mean unavailable, not zero cost.
- Graphify exports an undirected analysis graph; original edge directions and parallel relations are preserved in extraction.json.
- Community cohesion and suggested refactoring questions are graph heuristics, not findings that the application needs refactoring.
- Dependencies, builds, browser traces and private environment files are outside the corpus. The resume and dependency lockfile are represented by metadata/hash only.
- Stale semantic sources omitted: none.

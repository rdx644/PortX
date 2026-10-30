# Graph Report - D:\CodexProjects\shubham-portfolio  (2026-10-31)

## Corpus Check
- Corpus is ~28,888 words - fits in a single context window. You may not need a graph.

## Summary
- 405 nodes · 863 edges · 13 communities detected
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.81)
- Token cost: unavailable (in-session extraction-agent counters were not exposed)

## Community Hubs (Navigation)
- [[_COMMUNITY_Metadata and navigation|Metadata and navigation]]
- [[_COMMUNITY_Project decisions 1|Project decisions 1]]
- [[_COMMUNITY_Visual identity|Visual identity]]
- [[_COMMUNITY_Dependencies and build tools|Dependencies and build tools]]
- [[_COMMUNITY_Homepage composition|Homepage composition]]
- [[_COMMUNITY_Application foundation 5|Application foundation 5]]
- [[_COMMUNITY_GitHub data validation|GitHub data validation]]
- [[_COMMUNITY_Application foundation 7|Application foundation 7]]
- [[_COMMUNITY_TypeScript graph extraction|TypeScript graph extraction]]
- [[_COMMUNITY_Engineering decisions|Engineering decisions]]
- [[_COMMUNITY_Project decisions 10|Project decisions 10]]
- [[_COMMUNITY_Project case studies|Project case studies]]
- [[_COMMUNITY_Project decisions 12|Project decisions 12]]

## God Nodes (most connected - your core abstractions)
1. `docs/content-and-decisions.md` - 55 edges
2. `docs/HANDOFF.md` - 50 edges
3. `react` - 36 edges
4. `src/components/react-bits/TechText.tsx` - 27 edges
5. `src/components/react-bits/InfiniteMenu.tsx` - 26 edges
6. `docs/verification.md` - 25 edges
7. `next` - 25 edges
8. `scripts/extract_structure.mjs` - 22 edges
9. `src/app/globals.css` - 19 edges
10. `src/components/ui/MotionPreferences.tsx` - 17 edges

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
- **Shared motion preference and optional failure boundaries preserve usable static content** — doc_motion_preferences, doc_motion_controls, doc_live_reduced_motion, doc_optional_boundary, doc_initial_independence [EXTRACTED 1.00]
- **Five supplied designs adapt to portfolio controls while preserving ordinary navigation** — doc_supplied_designs, doc_tech_text, doc_target_cursor, doc_click_spark, doc_gooey_nav, doc_infinite_menu [EXTRACTED 1.00]
- **Evidence-constrained project storytelling preserves prototype and credential limits** — doc_authenticity, doc_projects_data, doc_prototype_limits, doc_case_template, doc_credentials [INFERRED 0.90]

## Communities

### Community 0 - "Metadata and navigation"
Cohesion: 0.08
Nodes (57): src/components/projects, src/components/ui, src/app/layout.tsx, src/app/not-found.tsx, src/app/projects/[slug]/page.tsx, src/components/hero/HeroName.tsx, src/components/navigation/Navigation.tsx, src/components/projects/Architecture.tsx (+49 more)

### Community 1 - "Project decisions 1"
Cohesion: 0.08
Nodes (59): Source-backed claims and visible prototype limits, Public React Bits references: tech-text target-cursor click-spark infinite-menu and gooey-nav, Portfolio implementation blueprint requirements, Shared statically generated case-study template, Public CircularText registry: https://reactbits.dev/r/CircularText-TS-CSS.json, CircularText: evenly spaced ring letters with CSS rotation, Selected control ClickSpark uses finite Web Animations eight sparks deduplication and maximum five bursts, Email contact through mailto; no message-collection backend (+51 more)

### Community 2 - "Visual identity"
Cohesion: 0.05
Nodes (44): --accent = #244bd7, --background = #faf7ed, --blue-light = #dbe4fa, --border = #242424, --dark = #191919, --font-sans = var(--font-body), --foreground = #191919, --muted = #57574f (+36 more)

### Community 3 - "Dependencies and build tools"
Cohesion: 0.06
Nodes (28): Shubham portfolio checkout, .codex, .github, .github/workflows, docs, docs/licenses, Hourly cache and six-second request timeout, Server-side public GitHub endpoint without required token (+20 more)

### Community 4 - "Homepage composition"
Cohesion: 0.09
Nodes (42): src, src/components, src/components/hero, src/components/navigation, src/components/sections, src/data, src/app/page.tsx, src/components/hero/Hero.tsx (+34 more)

### Community 5 - "Application foundation 5"
Cohesion: 0.09
Nodes (28): src/components/react-bits, src/components/react-bits/InfiniteMenu.css, src/components/react-bits/TechText.css, src/components/react-bits/TechText.tsx, src/components/react-bits/interactions.css, Art, Band, Box (+20 more)

### Community 6 - "GitHub data validation"
Cohesion: 0.1
Nodes (26): scripts, tests, scripts/refresh_graph.py, src/app/api/github/route.ts, src/lib/github-schema.ts, tests/github.test.ts, node:assert/strict, node:test (+18 more)

### Community 7 - "Application foundation 7"
Cohesion: 0.14
Nodes (23): src/components/react-bits/InfiniteMenu.tsx, ArrowIcon, Engine, FOV, FRAGMENT, FRONT, GRID, InfiniteMenu (+15 more)

### Community 8 - "TypeScript graph extraction"
Cohesion: 0.13
Nodes (22): scripts/extract_structure.mjs, node:fs, node:path, typescript, addNode, config, declarations, declaredName (+14 more)

### Community 9 - "Engineering decisions"
Cohesion: 0.17
Nodes (21): Canonical checkout: D:/CodexProjects/shubham-portfolio, Small typed component boundaries and accessible responsive semantics, C: disk-space constraint, Final domain Sentry and analytics still unconfigured, Persistent graph context and source/config/document/asset coverage inventory, Structural refresh and source-hash-based semantic freshness checks, Durable project handoff, Historical cube sculpture removed at owner's request (+13 more)

### Community 10 - "Project decisions 10"
Cohesion: 0.2
Nodes (19): Blocked actual TechText chunk preserves h1 visible DOM name main content and cards, Current build lint typecheck four tests diff checks and six SVG XML validation passed, Ignored bits screenshots and lighthouse-bits-mobile.json record current local evidence, Current globe drag arrow-key Enter navigation and touch/mobile-menu checks passed, Current supplied-design local mobile Lighthouse 93/100/100/100; LCP 1.21s TBT 308ms CLS 0, Global Pause/Play and live reduced motion disable canvases brackets and running animations, 390px no-JavaScript disclosure exposes six links with intact named heading and no overflow, Current supplied-design production-preview Chromium verification on feat/react-bits-interactions (+11 more)

### Community 11 - "Project case studies"
Cohesion: 0.18
Nodes (11): public, public/projects, public/projects/tiles, public/resume, public/projects/tiles/agentic-commerce.svg, public/projects/tiles/cybershield.svg, public/projects/tiles/haveloc-agent.svg, public/projects/tiles/multiplayer-cursor.svg (+3 more)

### Community 12 - "Project decisions 12"
Cohesion: 0.46
Nodes (8): React Bits MIT + Commons Clause License Condition v1.0; copyright 2026 David Haz, React Bits use/copy/modify/distribute within applications websites or products including commercial use, May not sell sublicense or redistribute components themselves alone bundled or ported, Exports usable in personal/commercial products; no standalone export sales or redistribution as packs/products, Copyright and permission notices required in copies or substantial portions, Tools and sounds may not be sold sublicensed redistributed or offered as substantially similar hosted tools, Software provided as-is without warranty or author liability, docs/licenses/react-bits.md

## Knowledge Gaps
- **107 isolated node(s):** `.github/workflows/ci.yml`, `public/projects/tiles/agentic-commerce.svg`, `public/projects/tiles/cybershield.svg`, `public/projects/tiles/haveloc-agent.svg`, `public/projects/tiles/multiplayer-cursor.svg` (+102 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **How does src/data/projects.ts feed homepage previews and generated case studies?**
  _The content model is imported by both presentation paths._
- **How do reduced-motion, no-JavaScript, and GitHub fallbacks preserve usable homepage content?**
  _This connects optional motion, data validation, and the documented initial-content requirement._
- **Why does `docs/HANDOFF.md` connect `Engineering decisions` to `Metadata and navigation`, `Project decisions 1`, `Visual identity`, `Dependencies and build tools`, `Homepage composition`, `GitHub data validation`, `Project decisions 10`, `Project case studies`?**
  _High betweenness centrality (0.324) - this node is a cross-community bridge._
- **Why does `react` connect `Metadata and navigation` to `Visual identity`, `Dependencies and build tools`, `Homepage composition`, `Application foundation 5`, `Application foundation 7`?**
  _High betweenness centrality (0.266) - this node is a cross-community bridge._
- **Why does `docs/content-and-decisions.md` connect `Project decisions 1` to `Metadata and navigation`, `Visual identity`, `Dependencies and build tools`, `Homepage composition`, `Engineering decisions`, `Project decisions 10`, `Project decisions 12`?**
  _High betweenness centrality (0.215) - this node is a cross-community bridge._
## Extraction audit

- Full source inventory: 80 files with SHA-256 hashes; parser corpus: 63 supported files.
- Generic graphify AST plus TypeScript compiler resolution of local imports, TSX render references, and static call references. References describe source structure, not proof of runtime execution.
- Semantic fragments were authored by graphify extraction agents. Exact model token usage was unavailable; zeros in the standard token fields mean unavailable, not zero cost.
- Graphify exports an undirected analysis graph; original edge directions and parallel relations are preserved in extraction.json.
- Community cohesion and suggested refactoring questions are graph heuristics, not findings that the application needs refactoring.
- Dependencies, builds, browser traces and private environment files are outside the corpus. The resume and dependency lockfile are represented by metadata/hash only.
- Stale semantic sources omitted: none.

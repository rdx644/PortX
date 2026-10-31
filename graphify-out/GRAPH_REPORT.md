# Graph Report - D:\CodexProjects\shubham-portfolio  (2026-10-31)

## Corpus Check
- Corpus is ~32,124 words - fits in a single context window. You may not need a graph.

## Summary
- 468 nodes · 1018 edges · 13 communities detected
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 9 edges (avg confidence: 0.83)
- Token cost: unavailable (in-session extraction-agent counters were not exposed)

## Community Hubs (Navigation)
- [[_COMMUNITY_Project decisions 0|Project decisions 0]]
- [[_COMMUNITY_Metadata and navigation|Metadata and navigation]]
- [[_COMMUNITY_Dependencies and build tools|Dependencies and build tools]]
- [[_COMMUNITY_GitHub data validation|GitHub data validation]]
- [[_COMMUNITY_Project decisions 4|Project decisions 4]]
- [[_COMMUNITY_TypeScript graph extraction|TypeScript graph extraction]]
- [[_COMMUNITY_Application foundation 6|Application foundation 6]]
- [[_COMMUNITY_Application foundation 7|Application foundation 7]]
- [[_COMMUNITY_Application foundation 8|Application foundation 8]]
- [[_COMMUNITY_Engineering decisions|Engineering decisions]]
- [[_COMMUNITY_Project case studies|Project case studies]]
- [[_COMMUNITY_Application foundation 11|Application foundation 11]]
- [[_COMMUNITY_Project decisions 12|Project decisions 12]]

## God Nodes (most connected - your core abstractions)
1. `docs/content-and-decisions.md` - 74 edges
2. `docs/HANDOFF.md` - 52 edges
3. `docs/verification.md` - 42 edges
4. `react` - 38 edges
5. `src/components/react-bits/ScrollReveal.tsx` - 30 edges
6. `src/components/react-bits/TechText.tsx` - 27 edges
7. `src/components/react-bits/InfiniteMenu.tsx` - 26 edges
8. `next` - 23 edges
9. `scripts/extract_structure.mjs` - 22 edges
10. `src/app/globals.css` - 19 edges

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
- **Viewport-deferred word scrubbing preserves semantic static text through motion preferences and engine failure** — doc_scroll_reveal, doc_scroll_reveal_a11y, doc_scroll_reveal_deferred, doc_scroll_reveal_runtime, doc_scroll_reveal_static, doc_motion_preferences [EXTRACTED 1.00]
- **Default-open viewport-loaded globe and six compact links form one resilient primary project browser** — doc_infinite_menu, doc_globe_default_open, doc_globe_viewport_loading, doc_globe_navigation, doc_globe_fallback, doc_case_content_preserved [EXTRACTED 1.00]
- **Fixed final samples retained with below-target first run host variation and historical optimization comparison** — doc_current_lighthouse, doc_scroll_reveal_samples, doc_scroll_reveal_variation, doc_scroll_reveal_preoptimization, doc_qa_limits [EXTRACTED 1.00]

## Communities

### Community 0 - "Project decisions 0"
Cohesion: 0.06
Nodes (85): Source-backed claims and visible prototype limits, Public React Bits references: tech-text target-cursor click-spark infinite-menu and gooey-nav, Portfolio implementation blueprint requirements, Hourly cache and six-second request timeout, Six dedicated case-study pages retain content source links diagrams and scope notes, Shared statically generated case-study template, Historical supplied-design QA: blocked TechText chunk preserved h1 DOM name main content and then-present cards, Public CircularText registry: https://reactbits.dev/r/CircularText-TS-CSS.json (+77 more)

### Community 1 - "Metadata and navigation"
Cohesion: 0.07
Nodes (78): src/components, src/components/hero, src/components/navigation, src/components/sections, src/components/ui, src/app/layout.tsx, src/app/not-found.tsx, src/app/page.tsx (+70 more)

### Community 2 - "Dependencies and build tools"
Cohesion: 0.05
Nodes (37): Shubham portfolio checkout, .codex, .github, .github/workflows, docs, docs/licenses, public, public/projects (+29 more)

### Community 3 - "GitHub data validation"
Cohesion: 0.05
Nodes (43): src, src/app, src/app/api, src/app/api/github, src/data, src/lib, tests, src/app/api/github/route.ts (+35 more)

### Community 4 - "Project decisions 4"
Cohesion: 0.12
Nodes (33): Historical bits screenshots and lighthouse-bits-mobile.json under ignored output/playwright, Historical supplied-design local mobile Lighthouse 93/100/100/100; LCP 1.21s TBT 308ms CLS 0, Historical supplied-design QA: shared Pause/Play and live reduced motion disable animations canvases and brackets, Historical supplied-design QA: globe drag arrow keys Enter and touch/menu checked, Historical supplied-design production-preview Chromium QA on feat/react-bits-interactions, Current strict TypeScript build lint four GitHub boundary tests and diff checks pass; GSAP pinned, Current reveal screenshots and all three lighthouse-scroll-reveal-deferred-mobile reports retained, Historical globe-first QA: selected-project action and six compact route links returned HTTP 200 (+25 more)

### Community 5 - "TypeScript graph extraction"
Cohesion: 0.1
Nodes (32): scripts, scripts/extract_structure.mjs, scripts/refresh_graph.py, node:fs, node:path, addNode, config, declarations (+24 more)

### Community 6 - "Application foundation 6"
Cohesion: 0.09
Nodes (29): src/components/react-bits, src/components/react-bits/InfiniteMenu.css, src/components/react-bits/ScrollReveal.css, src/components/react-bits/TechText.css, src/components/react-bits/TechText.tsx, src/components/react-bits/interactions.css, Art, Band (+21 more)

### Community 7 - "Application foundation 7"
Cohesion: 0.11
Nodes (26): src/components/react-bits/ScrollReveal.tsx, src/lib/scroll-reveal-runtime.ts, gsap, RISE_MASK, RevealEffect, RevealLook, RevealMode, RevealSplit (+18 more)

### Community 8 - "Application foundation 8"
Cohesion: 0.14
Nodes (23): src/components/react-bits/InfiniteMenu.tsx, ArrowIcon, Engine, FOV, FRAGMENT, FRONT, GRID, InfiniteMenu (+15 more)

### Community 9 - "Engineering decisions"
Cohesion: 0.17
Nodes (21): Canonical checkout: D:/CodexProjects/shubham-portfolio, C: disk-space constraint, Final domain Sentry and analytics still unconfigured, Persistent graph context and source/config/document/asset coverage inventory, Structural refresh and source-hash-based semantic freshness checks, Durable project handoff, Historical cube sculpture removed at owner's request, C: project path is a local directory junction (+13 more)

### Community 10 - "Project case studies"
Cohesion: 0.15
Nodes (20): src/app/projects, src/app/projects/[slug], src/components/projects, src/app/projects/[slug]/page.tsx, src/components/projects/Architecture.tsx, src/components/projects/CursorDemo.tsx, src/components/projects/ProjectVisual.tsx, src/data/projects.ts (+12 more)

### Community 11 - "Application foundation 11"
Cohesion: 0.12
Nodes (16): --accent = #244bd7, --background = #faf7ed, --blue-light = #dbe4fa, --border = #242424, --dark = #191919, --font-sans = var(--font-body), --foreground = #191919, --muted = #57574f (+8 more)

### Community 12 - "Project decisions 12"
Cohesion: 0.46
Nodes (8): React Bits MIT + Commons Clause License Condition v1.0; copyright 2026 David Haz, React Bits use/copy/modify/distribute within applications websites or products including commercial use, May not sell sublicense or redistribute components themselves alone bundled or ported, Exports usable in personal/commercial products; no standalone export sales or redistribution as packs/products, Copyright and permission notices required in copies or substantial portions, Tools and sounds may not be sold sublicensed redistributed or offered as substantially similar hosted tools, Software provided as-is without warranty or author liability, docs/licenses/react-bits.md

## Knowledge Gaps
- **120 isolated node(s):** `.github/workflows/ci.yml`, `public/projects/tiles/agentic-commerce.svg`, `public/projects/tiles/cybershield.svg`, `public/projects/tiles/haveloc-agent.svg`, `public/projects/tiles/multiplayer-cursor.svg` (+115 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **How does src/data/projects.ts feed the default-open globe and dedicated case-study pages?**
  _The content model is imported by both presentation paths._
- **How do reduced-motion, no-JavaScript, and GitHub fallbacks preserve usable homepage content?**
  _This connects optional motion, data validation, and the documented initial-content requirement._
- **Why does `docs/HANDOFF.md` connect `Engineering decisions` to `Project decisions 0`, `Metadata and navigation`, `Dependencies and build tools`, `GitHub data validation`, `Project decisions 4`, `TypeScript graph extraction`, `Application foundation 7`, `Project case studies`, `Application foundation 11`?**
  _High betweenness centrality (0.319) - this node is a cross-community bridge._
- **Why does `docs/content-and-decisions.md` connect `Project decisions 0` to `Metadata and navigation`, `Dependencies and build tools`, `GitHub data validation`, `Project decisions 4`, `Application foundation 7`, `Engineering decisions`, `Application foundation 11`, `Project decisions 12`?**
  _High betweenness centrality (0.265) - this node is a cross-community bridge._
- **Why does `react` connect `Metadata and navigation` to `Dependencies and build tools`, `GitHub data validation`, `Application foundation 6`, `Application foundation 7`, `Application foundation 8`, `Project case studies`?**
  _High betweenness centrality (0.231) - this node is a cross-community bridge._
## Extraction audit

- Full source inventory: 83 files with SHA-256 hashes; parser corpus: 65 supported files.
- Generic graphify AST plus TypeScript compiler resolution of local imports, TSX render references, and static call references. References describe source structure, not proof of runtime execution.
- Semantic fragments were authored by graphify extraction agents. Exact model token usage was unavailable; zeros in the standard token fields mean unavailable, not zero cost.
- Graphify exports an undirected analysis graph; original edge directions and parallel relations are preserved in extraction.json.
- Community cohesion and suggested refactoring questions are graph heuristics, not findings that the application needs refactoring.
- Dependencies, builds, browser traces and private environment files are outside the corpus. The resume and dependency lockfile are represented by metadata/hash only.
- Stale semantic sources omitted: none.

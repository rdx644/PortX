# Graph Report - D:\CodexProjects\shubham-portfolio  (2026-10-31)

## Corpus Check
- Corpus is ~36,082 words - fits in a single context window. You may not need a graph.

## Summary
- 545 nodes · 1235 edges · 13 communities detected
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.84)
- Token cost: unavailable (in-session extraction-agent counters were not exposed)

## Community Hubs (Navigation)
- [[_COMMUNITY_Project decisions 0|Project decisions 0]]
- [[_COMMUNITY_Metadata and navigation|Metadata and navigation]]
- [[_COMMUNITY_Engineering decisions|Engineering decisions]]
- [[_COMMUNITY_Project decisions 3|Project decisions 3]]
- [[_COMMUNITY_Dependencies and build tools|Dependencies and build tools]]
- [[_COMMUNITY_GitHub data validation|GitHub data validation]]
- [[_COMMUNITY_Visual identity|Visual identity]]
- [[_COMMUNITY_Application foundation 7|Application foundation 7]]
- [[_COMMUNITY_Application foundation 8|Application foundation 8]]
- [[_COMMUNITY_Application foundation 9|Application foundation 9]]
- [[_COMMUNITY_Project case studies 10|Project case studies 10]]
- [[_COMMUNITY_Project case studies 11|Project case studies 11]]
- [[_COMMUNITY_Project decisions 12|Project decisions 12]]

## God Nodes (most connected - your core abstractions)
1. `docs/content-and-decisions.md` - 107 edges
2. `docs/verification.md` - 69 edges
3. `docs/HANDOFF.md` - 62 edges
4. `react` - 40 edges
5. `src/components/react-bits/ScrollReveal.tsx` - 30 edges
6. `src/components/react-bits/TechText.tsx` - 27 edges
7. `src/components/react-bits/InfiniteMenu.tsx` - 26 edges
8. `next` - 25 edges
9. `scripts/extract_structure.mjs` - 22 edges
10. `src/app/globals.css` - 21 edges

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
- **Named destination authorization preserves PortX history and connects main to dedicated Netlify hosting with scoped credentials** — doc_publication_authorization, doc_portx_history, doc_no_remote, doc_netlify_site, doc_netlify_git_cd, doc_publication_secret_boundary [EXTRACTED 1.00]
- **Explicit Next.js adapter corrects ready-but404 output and produces the accepted deployment with verified HTTPS routes and metadata** — doc_netlify_raw_failure, doc_netlify_adapter, doc_netlify_build, doc_netlify_accepted_deploy, doc_current_responsive, doc_live_https_metadata [EXTRACTED 1.00]
- **Docs/graph maintenance skips redundant Netlify build while keeping CI and accepted app identity intact** — doc_skip_netlify, doc_deployed_code_identity, doc_netlify_git_cd, doc_publication_ci, doc_netlify_accepted_deploy [EXTRACTED 1.00]

## Communities

### Community 0 - "Project decisions 0"
Cohesion: 0.05
Nodes (95): Owner explicitly requested additional Anime.js animations through MCP, Architecture selection springs node/caption and decorative segmented strip; shows selected step rather than live execution, All six diagrams keyboard-select aria-pressed spring and sequential segment scaling; chips show stagger at100ms, Scoped finite AnimeEffects hero skill-tag and selected-diagram feedback enhancement, Hero sequence springs ring/star/cloud and staggers brackets; first pointer/keyboard Replay requests engine without gating name/actions, Optional import uses idle1200ms timeout or600ms fallback; untouched homepage fetches no Anime runtime, Runtime waits actual scroll/keyboard/playground/Replay intent plus eligible region within300px and idle scheduling, Untouched page zero Anime requests; first Replay changes transforms; keyboard/eight replays/six rapid toggles settle without app errors (+87 more)

### Community 1 - "Metadata and navigation"
Cohesion: 0.06
Nodes (87): src/components, src/components/hero, src/components/navigation, src/components/react-bits, src/components/sections, src/components/ui, src/app/layout.tsx, src/app/not-found.tsx (+79 more)

### Community 2 - "Engineering decisions"
Cohesion: 0.07
Nodes (58): Anime.js4.5.0 pinned as the only new app dependency, Source-backed claims and visible prototype limits, Portfolio implementation blueprint requirements, Hourly cache and six-second request timeout, Canonical checkout: D:/CodexProjects/shubham-portfolio, src/lib/site.ts prioritizes NEXT_PUBLIC_SITE_URL then stable NetlifyURL/deploy fallbacks then Vercel/local behavior, Shared statically generated case-study template, Small typed component boundaries and accessible responsive semantics (+50 more)

### Community 3 - "Project decisions 3"
Cohesion: 0.07
Nodes (52): Historical local anime frames MCP guidance and lighthouse-anime-intent-mobile.json retained, Historical local Anime.js/MCP QA at cfedc9c/1ff5c6a before publication, Actual runtime chunk aborted twice; heading/content remain usable and Replay disables without unhandled errors, Historical pre-intent host indices603/2281/1808; not all variation attributable to code; retained reports prompted intent fix, Historical near-viewport/idle build performance76/85/88 median85; LCP1.816/1.157/1.128s TBT1000.3/571/464ms CLS0, Historical bits screenshots and lighthouse-bits-mobile.json under ignored output/playwright, Historical supplied-design local mobile Lighthouse 93/100/100/100; LCP 1.21s TBT 308ms CLS 0, Historical supplied-design QA: shared Pause/Play and live reduced motion disable animations canvases and brackets (+44 more)

### Community 4 - "Dependencies and build tools"
Cohesion: 0.05
Nodes (37): Shubham portfolio checkout, .codex, .github, .github/workflows, docs, docs/licenses, src, src/data (+29 more)

### Community 5 - "GitHub data validation"
Cohesion: 0.06
Nodes (49): scripts, src/app/api, src/app/api/github, tests, scripts/extract_structure.mjs, scripts/refresh_graph.py, src/app/api/github/route.ts, src/lib/github-schema.ts (+41 more)

### Community 6 - "Visual identity"
Cohesion: 0.06
Nodes (37): --accent = #a6b6ff, --background = #151619, --blue-light = #242b40, --border = #7e8492, --dark = #101114, --font-sans = var(--font-body), --foreground = #f4f0e6, --ink = #151619 (+29 more)

### Community 7 - "Application foundation 7"
Cohesion: 0.11
Nodes (26): src/components/react-bits/ScrollReveal.tsx, src/lib/scroll-reveal-runtime.ts, gsap, RISE_MASK, RevealEffect, RevealLook, RevealMode, RevealSplit (+18 more)

### Community 8 - "Application foundation 8"
Cohesion: 0.11
Nodes (24): src/components/react-bits/TechText.tsx, Art, Band, Box, Cell, FALLOFF_STEPS, Glyph, INHERIT (+16 more)

### Community 9 - "Application foundation 9"
Cohesion: 0.14
Nodes (23): src/components/react-bits/InfiniteMenu.tsx, ArrowIcon, Engine, FOV, FRAGMENT, FRONT, GRID, InfiniteMenu (+15 more)

### Community 10 - "Project case studies 10"
Cohesion: 0.15
Nodes (20): src/app/projects, src/app/projects/[slug], src/components/projects, src/app/projects/[slug]/page.tsx, src/components/projects/Architecture.tsx, src/components/projects/CursorDemo.tsx, src/components/projects/ProjectVisual.tsx, src/data/projects.ts (+12 more)

### Community 11 - "Project case studies 11"
Cohesion: 0.18
Nodes (11): public, public/projects, public/projects/tiles, public/resume, public/projects/tiles/agentic-commerce.svg, public/projects/tiles/cybershield.svg, public/projects/tiles/haveloc-agent.svg, public/projects/tiles/multiplayer-cursor.svg (+3 more)

### Community 12 - "Project decisions 12"
Cohesion: 0.46
Nodes (8): React Bits MIT + Commons Clause License Condition v1.0; copyright 2026 David Haz, React Bits use/copy/modify/distribute within applications websites or products including commercial use, May not sell sublicense or redistribute components themselves alone bundled or ported, Exports usable in personal/commercial products; no standalone export sales or redistribution as packs/products, Copyright and permission notices required in copies or substantial portions, Tools and sounds may not be sold sublicensed redistributed or offered as substantially similar hosted tools, Software provided as-is without warranty or author liability, docs/licenses/react-bits.md

## Knowledge Gaps
- **123 isolated node(s):** `.github/workflows/ci.yml`, `public/projects/tiles/agentic-commerce.svg`, `public/projects/tiles/cybershield.svg`, `public/projects/tiles/haveloc-agent.svg`, `public/projects/tiles/multiplayer-cursor.svg` (+118 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **How does src/data/projects.ts feed the default-open globe and dedicated case-study pages?**
  _The content model is imported by both presentation paths._
- **How do reduced-motion, no-JavaScript, and GitHub fallbacks preserve usable homepage content?**
  _This connects optional motion, data validation, and the documented initial-content requirement._
- **Why does `docs/HANDOFF.md` connect `Engineering decisions` to `Project decisions 0`, `Metadata and navigation`, `Project decisions 3`, `Dependencies and build tools`, `GitHub data validation`, `Visual identity`, `Application foundation 7`, `Project case studies 10`, `Project case studies 11`?**
  _High betweenness centrality (0.322) - this node is a cross-community bridge._
- **Why does `docs/content-and-decisions.md` connect `Project decisions 0` to `Metadata and navigation`, `Engineering decisions`, `Project decisions 3`, `Dependencies and build tools`, `Visual identity`, `Application foundation 7`, `Project decisions 12`?**
  _High betweenness centrality (0.322) - this node is a cross-community bridge._
- **Why does `react` connect `Metadata and navigation` to `Dependencies and build tools`, `Application foundation 7`, `Application foundation 8`, `Application foundation 9`, `Project case studies 10`?**
  _High betweenness centrality (0.202) - this node is a cross-community bridge._
## Extraction audit

- Full source inventory: 86 files with SHA-256 hashes; parser corpus: 67 supported files.
- Generic graphify AST plus TypeScript compiler resolution of local imports, TSX render references, and static call references. References describe source structure, not proof of runtime execution.
- Semantic fragments were authored by graphify extraction agents. Exact model token usage was unavailable; zeros in the standard token fields mean unavailable, not zero cost.
- Graphify exports an undirected analysis graph; original edge directions and parallel relations are preserved in extraction.json.
- Community cohesion and suggested refactoring questions are graph heuristics, not findings that the application needs refactoring.
- Dependencies, builds, browser traces and private environment files are outside the corpus. The resume and dependency lockfile are represented by metadata/hash only.
- Stale semantic sources omitted: none.

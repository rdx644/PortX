# Shubham portfolio — durable handoff

Updated: 2026-10-31. Read alongside `AGENTS.md`; confirm current Git state before editing.

## Identity and location

The user requested a new robust, attractive portfolio based on the Downloads file `# SHUBHAM PUTITUNDI.md`, then explicitly selected a **new shubham-portfolio project** and asked to use https://github.com/rdx644 as the reference. The blueprint is preserved at `docs/implementation-blueprint.md`.

| Item | Location / state |
| --- | --- |
| Canonical checkout | `D:\CodexProjects\shubham-portfolio` |
| User-facing path | `C:\Users\putit\shubham-portfolio`, a junction to the canonical checkout |
| Runtime/cache directory | `D:\CodexProjects\shubham-portfolio-runtime` |
| Baseline implementation | Commit `93263aa`; current branch `feat/animejs-interactions` |
| Git remote | None configured at handoff creation; do not infer a repository from the owner's profile |
| Local preview | `http://127.0.0.1:3001`, production preview for the redesign; process survival across sessions is not guaranteed |
| Baseline source ZIP | `D:\CodexProjects\shubham-portfolio-runtime\shubham-portfolio-source.zip` (implementation checkpoint; not automatically updated) |
| Global discovery pointer | `C:\Users\putit\.codex\projects\shubham-portfolio.md` |

Older projects `C:\Users\putit\my-portfolio` and `C:\Users\putit\Portofolio_V5` were inspected only for context. This implementation is separate.

## Current Anime.js interactions and MCP

The owner requested Anime.js through MCP. Pinned community `anime-js-mcp-server@1.0.0` was inspected, installed outside the app and actually queried over local MCP stdio for timeline/stagger/performance guidance. Its examples target v3; the implementation uses official v4.5 APIs. Evidence: `output/playwright/anime-mcp-guidance.json`. `.codex/config.toml` saves the tested pinned npx command and D: cache with quiet logging/no GitHub token. Restart Codex for native tool exposure in a future session; local MCP calls already worked. No website runtime calls the MCP server.

Anime.js 4.5.0 is the only new app dependency. `src/components/ui/AnimeEffects.tsx` lazily loads `src/lib/anime-effects.ts` after scroll, keyboard or playground interaction near eligible content during idle time. It sequences the hero graphic with Replay, cascades opened skill tags and springs selected architecture nodes/captions with a decorative selected-step strip. Scopes are replaced per region, keeping repeat interactions bounded. Pause/live reduced motion and navigation revert animated styles and detach listeners/observers. Reduced-motion visits skip the runtime; no JavaScript or an aborted runtime chunk preserves readable content and ordinary controls with Replay disabled. The star's old CSS entrance was removed to prevent transform conflicts. Existing GSAP text reveal, Motion parallax, dark theme and globe-first projects remain.

Implementation checkpoints: `cfedc9c` (interactions) and `1ff5c6a` (intent loading). Details and actual QA are in `docs/content-and-decisions.md` and `docs/verification.md`.

## Current visual theme

The owner subsequently requested a dark neo-brutalist background. The default palette is charcoal `#151619`, warm off-white text `#f4f0e6`, periwinkle `#a6b6ff`, slate outlines, yellow/pink stamps and hard black offset shadows. Raised panels are `#22242a`; navy About/expanded panels are `#242b40`. Large section backgrounds now stay dark. Bright isolated stamps/buttons use ink text, including selected architecture nodes and navigation states. The dark globe retains colorful original tiles with opaque dark info plates. The social image and browser theme metadata match. This explicitly supersedes the earlier cream/cobalt palette; prior design sections and scores remain historical.

Start with tokens and component rules in `src/app/globals.css`, `src/components/hero/hero.css`, and `src/components/react-bits/interactions.css`; globe settings are in `ProjectExplorer.tsx`, the name accent in `HeroName.tsx`, and metadata/social colors in `layout.tsx`/`opengraph-image.tsx`. No dependency or interaction model was added. ScrollReveal, Pause/reduced motion, globe-first project links and all six case studies remain available.

## Current scrolling text

The owner explicitly supplied and requested React Bits ScrollReveal. Its typed adaptation now reveals About, Expertise/Experience introduction text, internship descriptions and shared case-study narrative paragraphs as scrolling sharpens/fades words into place. Scroll backward to reverse. Defaults retain the requested words/fade/0.1 opacity/4px blur/3-degree rotation/zero smoothing; portfolio prose finishes at `bottom 65%` for a visible reading interval. The About lead is larger.

Start with `src/components/react-bits/ScrollReveal.tsx`, its CSS and `src/lib/scroll-reveal-runtime.ts`. GSAP 3.15.0 is pinned and dynamically loaded. Word splitting is deferred until 600px before the viewport, preserving simple initial server/hydration text. Shared Pause and live reduced motion clear blur/opacity/transforms; no JavaScript and failed engine imports leave readable text. Semantic paragraphs and unsplit screen-reader text preserve accessibility. Existing finite entrances skip parents containing this effect. A shared layout observer handles changing globe/disclosure heights. This explicit request supersedes the earlier no-GSAP decision for this component; AnimatedContent is still absent.

## Current project navigation

The owner approved globe-first browsing: the six duplicate homepage cards are removed, and `ProjectExplorer.tsx` renders its native disclosure expanded by default. The graphics chunk loads as the Work section approaches the viewport (250px margin). Six compact case-study links remain available before/loading the graphic and for Pause/reduced motion, no JavaScript, WebGL/context loss or chunk failure. Each globe selection can open its dedicated `/projects/[slug]` page via the open arrow or Enter. All six case-study pages retain their original content, diagrams and source links. TargetCursor is scoped to the globe action and fallback links.

## Historical supplied-design integration checkpoint

The owner’s Downloads `React bits .txt` supplies five designs. The following describes that earlier checkpoint; globe-first navigation and ScrollReveal above supersede its card, loading and dependency details. Current integration adds intent-loaded TechText to the name; focused TargetCursor/ClickSpark/GooeyNav adaptations to appropriate controls; and an optional InfiniteMenu project globe above the unchanged case-study card flow. Six original project tile SVGs live in `public/projects/tiles/`. No dependencies were added.

Start with `src/components/hero/HeroName.tsx`, `src/components/projects/ProjectExplorer.tsx`, `src/components/react-bits/`, `src/components/ui/MotionPreferences.tsx` and `src/components/ui/OptionalEffectBoundary.tsx`. The existing Pause button now shares its state across the effects; OS reduced motion remains live. Static links/heading remain available for reduced motion, graphics failure, chunk failure, and no-JavaScript use. The globe has no autoplay and is only loaded after expansion. See `docs/content-and-decisions.md` for the component-by-component decisions.

## Delivered implementation

Next.js 16.4.3 App Router, React 19.2, strict TypeScript, Tailwind 4, locally hosted Geist (body 400/display 900), Motion, and Zod. Exact installed versions are in `package-lock.json`.

The homepage has sticky responsive navigation; a name-first neo-brutalist hero; a React Bits motion playground; a default-open globe project browser; about, expertise, virtual internship and credential sections; cached GitHub activity; email/LinkedIn/GitHub contact; and résumé download.

Six statically generated case studies share `src/app/projects/[slug]/page.tsx`: `agentic-commerce`, `zeropatch`, `multiplayer-cursor`, `cybershield`, `wellify-ai`, and `haveloc-agent`. Diagrams are explanatory illustrations. The cursor demonstration is explicitly a local simulation.

The cube, SVG sculpture fallback, and exclusive Three.js dependencies were removed at the owner’s request. Adapted React Bits CircularText and ScrollVelocity supply the decorative ring and scroll-responsive strip, with pause and reduced-motion handling. Finite intersection reveals and rolling hover/focus labels adapt the DevFest reference. The heading/actions and server content remain usable without JavaScript or GitHub availability.

`/api/github` validates and normalizes public REST responses, excludes forks from highlights, uses timeouts and hourly caching, and returns a usable failure state. No GitHub secret is required. Email uses `mailto:`; no form-delivery service exists.

## Where to make changes

| Change | Start here |
| --- | --- |
| Project copy, stacks, repository links, demo URLs, scope | `src/data/projects.ts` |
| Email, social links, résumé route, expertise, background, credentials | `src/data/profile.ts` |
| Homepage composition | `src/app/page.tsx`, `src/components/sections/` |
| Shared case-study layout | `src/app/projects/[slug]/page.tsx` |
| Design tokens and responsive styling | `src/app/globals.css` |
| Navigation and mobile menu | `src/components/navigation/Navigation.tsx` |
| Name hierarchy and motion playground | `src/components/hero/` |
| React Bits engines and focused adaptations | `src/components/react-bits/` |
| Optional project globe and static fallback | `src/components/projects/ProjectExplorer.tsx`, `public/projects/tiles/` |
| Shared pause/reduced motion and optional chunk fallback | `src/components/ui/MotionPreferences.tsx`, `src/components/ui/OptionalEffectBoundary.tsx` |
| Anime.js hero/skill/diagram interactions | `src/components/ui/AnimeEffects.tsx`, `src/lib/anime-effects.ts`; `.codex/config.toml` for MCP |
| Scroll-scrubbed detail text | `src/components/react-bits/ScrollReveal.tsx`, `src/lib/scroll-reveal-runtime.ts` |
| Finite scroll entrances and rolling labels | `src/components/ui/ScrollReveals.tsx`, `src/components/ui/RollLabel.tsx` |
| Architecture interactions and cursor simulation | `src/components/projects/` |
| GitHub schema, fetching, rendering | `src/lib/github-schema.ts`, `src/app/api/github/route.ts`, `src/components/sections/GitHubActivity.tsx` |
| Metadata, domain, sitemap, social image | `src/app/layout.tsx`, `src/lib/site.ts`, `src/app/sitemap.ts`, `src/app/opengraph-image.tsx` |
| Downloadable résumé | `public/resume/shubham-putitundi.pdf` |

## Commands and disk constraints

```powershell
Set-Location 'D:\CodexProjects\shubham-portfolio'
$env:TEMP='D:\CodexProjects\shubham-portfolio-runtime\temp'
$env:TMP=$env:TEMP
npm ci --cache 'D:\CodexProjects\shubham-portfolio-runtime\npm-cache'
npm test
npm run lint
npm run build
npm start -- --hostname 127.0.0.1 --port 3001
```

Use Node 22.13+; development used Node 26.3.0. Build output is locally linked to the runtime directory. Do not assume junctions exist in a fresh clone. Python 3.12 with `graphifyy` is already installed on this machine; graph refresh also uses the project's TypeScript compiler for accurate alias resolution.

C: ran out of space during dependency installation and Chromium tracing. Keep tooling caches and temporary files on D:. Avoid launching visible background helpers unless requested.

## Verification already performed

Current Anime.js/MCP integration: direct local MCP calls and configured version command succeed; typecheck/build/lint/four tests and production dependency audit pass. Browser checks cover first-click Replay, zero untouched-page runtime requests, finite/staggered transforms, rapid/keyboard interactions, Pause/live reduced motion, runtime chunk failure, no JavaScript, seven widths and six case studies. Fresh optimized mobile Lighthouse: 100 performance/accessibility/best practices/SEO, LCP ~0.914s, TBT 59ms, CLS 0. The prior near-viewport-only implementation scored 76/85/88 and was corrected with intent loading; retain those reports as historical evidence. See `docs/verification.md` for all samples and limits.

Historical dark-theme checkpoint: production build/TypeScript, lint, four tests, seven responsive widths, all six case-study routes, mobile navigation, dark/no-JavaScript output, motion controls and forward/reverse ScrollReveal passed. Automated text-contrast checks report zero violations on the homepage and six case studies, with decorative/manual items separately reviewed. Fresh isolated local mobile Lighthouse: 100 performance/accessibility/best practices/SEO; LCP ~0.914s, TBT 66ms, CLS 0. This is one local sample, not field metrics. Implementation checkpoint `2b224ad`; detailed evidence is in `docs/verification.md`. Older scores below remain historical.

Historical ScrollReveal checkpoint: production build/TypeScript, lint, four tests, forward/reverse scroll progression, Pause/Play, live reduced motion, no-JavaScript and engine-failure readability, seven homepage widths and all six case-study routes passed. Initial homepage has zero split words or GSAP engine requests; text prepares near the viewport. Final fixed three-sample mobile Lighthouse performance was 88 / 100 / 100 (median 100), with accessibility/best practices/SEO 100 throughout, LCP 1.208 / 0.914 / 0.928s, TBT 482.5 / 78 / 81ms and CLS 0. The 88 sample is below the 90 target; retain the full range rather than promising a consistent 100. Evidence and historical pre-optimization 84 are in `docs/verification.md`. Implementation checkpoint: `e221742`.

Historical globe-first layout checkpoint: build/TypeScript, lint, four tests, default-open/zero-card checks, selected-project navigation, all six route/link checks, collapse/reopen, seven widths, reduced motion, no JavaScript and forced graphics failure passed. Fresh local mobile Lighthouse: 92 performance / 100 accessibility / 100 best practices / 100 SEO; LCP ~1.06s, TBT 354.5ms, CLS 0. Evidence is in `docs/verification.md` and `output/playwright/lighthouse-globe-primary-mobile.json`.

Earlier integration checkpoint:

Current supplied-design integration: production build, lint, typecheck, all four tests, seven-width expanded-explorer checks, all six mobile case studies, intent loading, stable h1 dimensions, global Pause/Play, live reduced motion, keyboard/drag/Enter project navigation, touch/menu, no-JavaScript, forced WebGL/context-loss and name-chunk fallback checks pass. Fresh mobile Lighthouse is 93 performance / 100 accessibility / 100 best practices / 100 SEO (LCP ~1.21s, TBT 308ms, CLS 0). See `docs/verification.md` and `output/playwright/lighthouse-bits-mobile.json`.

The following redesign verification is historical:

Current redesign (2026-10-31): production build, typecheck, lint, all four tests, seven-width checks, six mobile case studies, motion pause and live reduced-motion toggles, no-JavaScript rendering, keyboard navigation/controls, résumé download, GitHub failure fallback, metadata routes, and screenshots passed. Fresh isolated production mobile Lighthouse returned 100 performance / 100 accessibility / 100 best practices / 100 SEO (LCP ~0.80s, TBT 42ms, CLS 0). See `docs/verification.md` for current evidence and historical results.

The reduced-motion subscription is in `src/lib/use-reduced-motion.ts`; the installed Motion hook was found to snapshot only the initial setting. Hero styles are colocated in `src/components/hero/hero.css`, imported by `src/app/globals.css`.

Historical baseline:

At implementation commit `93263aa`: production build and ESLint passed, four GitHub boundary tests passed, production npm audit reported zero known vulnerabilities. All seven requested widths (360, 390, 430, 768, 1024, 1440, 1920) had no horizontal overflow. Mobile menu/Escape, section anchors, diagram controls, keyboard cursor control, résumé download, live GitHub data, reduced motion, WebGL failure and GitHub network failure were checked. All six case studies passed at 360px.

The final **local mobile Lighthouse** run scored 100 performance / 100 accessibility / 100 best practices / 100 SEO. These are historical local lab results, not field metrics. Chromium on Windows was tested; Safari, Firefox and physical devices were not. A Three.js `Clock` dependency deprecation warning remains, without observed normal application console errors.

Evidence: `docs/verification.md`, ignored `output/playwright/lighthouse-mobile.json`, and screenshots under `output/playwright/`. Application code need not be rebuilt for purely documentary graph updates unless its inputs change.

## Content and design constraints

Keep the current charcoal/off-white/periwinkle neo-brutalist palette, yellow/pink accents, heavy name-first type, hard ink shadows, and visible slate borders. The dark-theme section above supersedes the earlier cream backgrounds. The owner’s 2026-10-31 request supersedes the blueprint’s original styling and cube. Keep source-backed technical descriptions. The résumé is the owner's supplied `(3).pdf`; it includes personal contact details. Do not reproduce its phone/address in the graph or global index.

CyberShield uses synthetic data. Disease prediction has code artifacts and documented AWS architecture, not a verified clinical or live deployment. Haveloc's mock portal does not prove external submissions. ZeroPatch outputs drafts and cannot merge. Agentic Commerce is a controlled single-merchant demo. Virtual internships must not become claims of direct company employment. Credentials are résumé-sourced, with issuer links, not independently authenticated here.

## Pending external work — not completed or authorized by this handoff

- Nothing was published or pushed. The installed Vercel CLI reported an invalid token.
- Automatic approval review rejected a fallback upload via the deployment skill because it would send source and the personal résumé to an unverified destination without explicit approval. Do not retry or bypass it based on this context file. The user has not yet approved publication.
- For approved deployment, use an authenticated, user-approved destination and set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain. Preview metadata can use `VERCEL_URL`.
- Custom domain, Sentry, and Vercel Analytics are not configured.
- `.codex/config.toml` configures the shadcn MCP server, but connection verification requires a client restart. React Bits public CircularText and ScrollVelocity are now adapted locally with attribution/license. AnimatedContent remains absent after its historical review. The owner explicitly authorized GSAP for the separate ScrollReveal integration above, with readable SSR and lazy engine loading. No Pro integration is installed.

## Persistent graph and future sessions

Start with `graphify-out/CONTEXT.md`, then `GRAPH_REPORT.md`, `graph.html`, or `graph.json`. `coverage.json` accounts for all source/config/document/asset files, while excluding generated dependencies, build caches, private environment files, browser traces and résumé text from extraction.

Run `python scripts/refresh_graph.py --check` before relying on the graph. Run `python scripts/refresh_graph.py` after source changes. Documentation semantic fragments must be regenerated through the graphify skill when their recorded source hashes change. EXTRACTED, INFERRED, and AMBIGUOUS relationships remain distinct; the audit states extraction limits and token-accounting availability.

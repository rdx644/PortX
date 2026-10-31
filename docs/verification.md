# Verification

## Netlify production and PortX publication — 2026-10-31 (current)

- Published source to `https://github.com/rdx644/PortX` on `main` without force. The repository’s original README commit `cbe0aae` remains in ancestry through merge `5528f6d`. Application/config commits are `d3dc71c` and `13ad043`.
- GitHub Actions passed for the initial publication commit: https://github.com/rdx644/PortX/actions/runs/41205020207. Local four tests, lint, strict TypeScript/production build and diff checks passed for hosting preparation. Six URL environment scenarios pass: local fallback, stable Netlify production canonical under previews, explicit custom-domain override, deploy URL fallback, Vercel fallback and unrelated URL-variable isolation.
- Netlify account authorization/link succeeded. Dedicated project `shubham-putitundi-portx` uses repository-scoped read-only key access and automatic `main` push builds. Existing unrelated sites were not changed. A push of adapter fix `13ad043` automatically produced ready deploy `6ae5f3f88379a648046e44a1`. [Deploy logs](https://app.netlify.com/projects/shubham-putitundi-portx/deploys/6ae5f3f88379a648046e44a1).
- The first raw `.next` deployment returned 404 despite a ready status; it is not the accepted deployment. Adding explicit `@netlify/plugin-nextjs` fixed provisioning. The accepted live site is `https://shubham-putitundi-portx.netlify.app`.
- Real Chromium checks on the live domain: homepage and all six `/projects/[slug]` pages return **200**; six cases have no horizontal overflow at 390px. `/api/github` returns **200 JSON**, `/sitemap.xml` **200 XML**, `/robots.txt` **200 text**, `/opengraph-image` **200 PNG**, `/icon.svg` **200 SVG**, and `/resume/shubham-putitundi.pdf` **200 PDF**.
- Canonical link is `https://shubham-putitundi-portx.netlify.app/`; profile structured data and Open Graph image use the same HTTPS domain. Sitemap contains the home and six correct case URLs; robots references its real HTTPS sitemap rather than localhost.
- Replay enters its playing state on the deployed site; globe action opens the Agentic Commerce case study; mobile section navigation closes its menu; live reduced motion exposes six static project links. Normal accepted-deploy checks report **zero application page errors**. Desktop/mobile production screenshots: `output/playwright/netlify-home-desktop.png` and `netlify-home-mobile.png`.
- No fresh production Lighthouse score is claimed; scores below are previous local builds. This deployment QA uses Chromium on Windows and emulated mobile, not physical devices or a multi-browser audit. Metadata and route status were inspected after the corrected deploy.
- Final docs/graph-only maintenance is pushed with `[skip netlify]`; application files remain identical to accepted app commit `13ad043`, and GitHub Actions is not skipped. The public production deployment and GitHub push are completed, superseding the historical no-deployment section below.

## Anime.js via MCP — 2026-10-31 (historical local checkpoint)

Production build on `feat/animejs-interactions`, checkpoints `cfedc9c` and `1ff5c6a`, at `http://127.0.0.1:3001`:

- Actual MCP SDK stdio connection to pinned community `anime-js-mcp-server@1.0.0` succeeded. `tools/list` exposed five tools; `get_anime_example` (`timeline-sequence`), `get_anime_component` (`stagger`), and `get_anime_docs` (`performance`) all returned guidance. Saved evidence: `output/playwright/anime-mcp-guidance.json`. The server supplies v3 examples; the app implements official v4.5 APIs. No portfolio files or GitHub token were sent. The configured pinned npx command returned version 1.0.0. Native Codex tool exposure requires restarting the client; local MCP was already used.
- Anime.js 4.5.0 is pinned. Strict TypeScript, production build, ESLint, four existing tests and diff checks pass. The production npm audit reports zero known vulnerabilities; no unrelated dependency upgrades or check suppressions were introduced.
- Untouched homepage: zero optional Anime.js runtime requests, no `data-anime-ready`, and an enabled hydrated Replay button. The first Replay click loads the engine and produces the hero's playing state; measured star/bracket matrices confirm actual changing transforms. Hero, skill and diagram effects settle to idle. Keyboard Replay and skill disclosure activation work. Eight repeated Replay activations and six rapid skill toggles settle correctly without app errors; scopes replace prior instances per region.
- Shared Pause reverts the star/bracket inline styles, marks the hero static and disables Replay. Play restores eligibility. Live reduced motion clears chip transform/opacity styles. A reduced-motion visit makes zero optional runtime requests and leaves Replay disabled. Deliberately aborting the actual runtime chunk twice leaves the heading/content usable and disables Replay without unhandled normal page errors.
- Skill chips show distinct staggered transform matrices at 100ms. Every case-study diagram responds to keyboard step selection with `aria-pressed=true`, a playing spring and sequential segment scaling; the strip is decorative selection feedback. All six routes return HTTP 200 at 390px without horizontal overflow. Client-side next-case navigation works.
- Homepage widths 360, 390, 430, 768, 1024, 1440 and 1920 have no horizontal overflow. Final JavaScript-disabled 390px output retains eight readable narrative blocks, six project links, disabled Replay and no overflow. The new controls do not gate the name or actions. Normal browser checks collected zero application page errors.
- Fresh optimized-build mobile Lighthouse: **100 performance / 100 accessibility / 100 best practices / 100 SEO**, LCP ~0.914s, TBT 59ms, CLS 0. Its request log confirms the Anime.js runtime was not fetched before interaction. Report: `output/playwright/lighthouse-anime-intent-mobile.json`. This is one local lab sample, not field performance.

The earlier near-viewport/idle-only build measured **76 / 85 / 88 performance** (median 85), with the other three categories 100 throughout. LCP 1.816 / 1.157 / 1.128s; TBT 1000.3 / 571 / 464ms; CLS 0. Host benchmark indices also varied (603 / 2281 / 1808), so not all variation can be attributed to code. These results prompted the intent-loading correction, and all three reports remain saved as `lighthouse-anime-mobile.json`, `lighthouse-anime-mobile-2.json`, `lighthouse-anime-mobile-3.json`. The optimized initial page now verifiably omits that engine. Previous dark/ScrollReveal scores below describe their historical builds.

Inspected animation frames and mobile screenshots under ignored `output/playwright/`: `anime-hero-motion.png`, `anime-skills-motion.png`, `anime-diagram-motion.png`, `anime-hero-mobile.png`, `anime-skills-mobile.png`. Chromium on Windows and emulated mobile only; Safari, Firefox and physical devices were not tested. No external publication occurred.

## Dark neo-brutalist theme — 2026-10-31 (historical checkpoint)

Production build on `feat/dark-neo-brutalist`, implementation checkpoint `2b224ad`, at `http://127.0.0.1:3001`:

- Production build (including strict TypeScript), ESLint, four existing tests and diff checks pass. This theme adds no dependencies or test suppressions.
- Body computes to `rgb(21, 22, 25)` with `color-scheme: dark`. About is navy `rgb(36, 43, 64)` and Contact raised charcoal `rgb(34, 36, 42)`. The same dark background remains under light and dark OS preferences and without JavaScript. Metadata and Open Graph image match the dark palette.
- Automated axe text-contrast checks found zero violations on the homepage and all six case-study routes with motion stopped/reduced for stable reading states. Axe's manual-review items concern decorative circular text, dot-pattern captions and the scroll arrow. Visual inspection and calculated color pairs cover those: off-white on the lightest dot color 6.15:1, ink on pink 10.93:1, ink on yellow 12.7:1. Muted text on navy measures 7.2:1. These checks do not establish full WCAG conformance.
- Seven homepage widths (360, 390, 430, 768, 1024, 1440, 1920) have no horizontal overflow. All six case-study routes return HTTP 200 at 390px with dark backgrounds and no overflow. Selected architecture nodes use ink text on yellow; the dark patch illustration and cursor demo retain readable labels. Mobile menu opens and selecting About closes it (`aria-expanded=false`).
- The globe's dark renderer loads with colorful original tiles and opaque dark information plates; its action uses ink text on periwinkle. Compact links remain available when motion is stopped. Existing project-card grids remain removed.
- Actual wheel scrolling still changes About words from opacity 0.1–0.861 through all 1, then back to 0.1–0.861 when reversed. Pause leaves zero dim/blurred words. Live reduced motion restores the static reading state. JavaScript-disabled output at 390px has the dark background, all eight readable narrative blocks, six project links and no overflow. Normal browser checks reported zero application page errors.
- Fresh isolated local mobile Lighthouse: **100 performance / 100 accessibility / 100 best practices / 100 SEO**, LCP ~0.914s, TBT 66ms, CLS 0. Report: `output/playwright/lighthouse-dark-mobile.json`. This is a single local lab measurement, not field performance; prior scores below are historical builds.

Inspected evidence under ignored `output/playwright/`: `dark-hero-desktop.png`, `dark-hero-mobile.png`, `dark-globe-desktop.png`, `dark-about-desktop.png`, `dark-about-mobile.png`, `dark-expertise-desktop.png`, `dark-contact-desktop.png`, `dark-menu-mobile.png`, `dark-case-mobile.png`, `dark-patch-mobile.png`, and `dark-opengraph.png`. Chromium on Windows and emulated mobile only; Safari, Firefox and physical devices were not tested. No external publication occurred.

## ScrollReveal portfolio text — 2026-10-31 (historical checkpoint)

Production build on `feat/scroll-reveal-text`, implementation checkpoint `e221742`, at `http://127.0.0.1:3001`:

- Strict TypeScript production build, lint, four GitHub boundary tests and diff checks pass. GSAP 3.15.0 is pinned. No checks or assertions were weakened.
- Eight homepage narrative paragraphs use the supplied React Bits engine; each of the six case studies has eight narrative placements. Existing heading levels, actions, source links, scope notes, lists and credential controls retain their semantics.
- Actual wheel scrolling at 1440px measured dim/4px-blurred words before entry, staggered opacities ranging from 0.815 down to 0.1 partway through, then every word at opacity 1 and zero blur by a 480px viewport top. Reverse scrolling restored the staggered partial state. This verifies scroll-linked scrubbing rather than just a one-time entrance.
- Pause clears custom styles: zero dim/blurred words. Play restores the effect. Live reduced-motion changes likewise restore clarity; reduced-motion visits do not request either GSAP chunk. Engine failure was deliberately injected by aborting both actual GSAP/ScrollTrigger chunks: text remained static and fully clear.
- The optimized build starts with zero split-word nodes and zero GSAP engine requests on the homepage. Words are prepared near the viewport. JavaScript-disabled 390px output has all eight readable ordinary narrative paragraphs, zero word spans, and six project links. This preserves useful server output without animation code.
- Homepage widths 360, 390, 430, 768, 1024, 1440 and 1920px have no horizontal overflow. All six case-study routes return HTTP 200 at 390px with no overflow and activate nearby narrative reveals. The existing globe still loads and duplicate project-card grids remain absent. Normal interaction checks reported zero application page errors.
- Fresh final-build mobile Lighthouse used a fixed three-sample set, retaining every result: performance **88 / 100 / 100** (median 100); accessibility, best practices and SEO **100 in all three**. LCP **1.208 / 0.914 / 0.928 seconds**; TBT **482.5 / 78 / 81ms**; CLS **0 throughout**. Host benchmark indices varied (1676 / 2747 / 2310.5), so these local samples are not a stable field-performance claim. The initial 88 sample is below the blueprint's 90 target; the median meets it. Reports: `lighthouse-scroll-reveal-deferred-mobile.json`, `lighthouse-scroll-reveal-deferred-mobile-2.json`, `lighthouse-scroll-reveal-deferred-mobile-3.json` under `output/playwright/`.

An earlier implementation split words during initial hydration and scored 84 (`lighthouse-scroll-reveal-mobile.json`). Splitting was deferred before final verification; the initial DOM now stays unsplit. Audit variation prevents attributing the entire score change to that adjustment. Prior globe/design audit scores below describe their historical builds.

Inspected screenshots: `reveal-about-progress-desktop.png`, `reveal-about-desktop.png`, `reveal-about-mobile.png`, and `reveal-case-mobile.png` under ignored `output/playwright/`. Chromium on Windows only; Safari, Firefox and physical devices were not tested. No deployment or external publication occurred.

## Globe-first project navigation — 2026-10-31 (historical checkpoint)

Production validation at `http://127.0.0.1:3001` on `feat/globe-project-navigation`:

- Production build (including strict TypeScript validation), lint, all four tests and diff checks pass.
- Native project disclosure is open by default; the homepage contains zero `.project`/`.project-grid` cards. The graphics chunk loads automatically as Work approaches the viewport, with ordinary links covering the waiting/loading state.
- Clicking Work loads the globe without another expansion step. Its selected-project open action navigated to `/projects/agentic-commerce`. All six compact project links target the existing case-study routes and each returned HTTP 200. Case-study content/diagrams/source links were not edited.
- Collapse removes the globe; reopening restores it. Expanded project view has no horizontal overflow at 360, 390, 430, 768, 1024, 1440 or 1920px.
- Live reduced motion leaves zero canvases and six compact project links. A JavaScript-disabled 390px browser has an open disclosure and all six links visible without expansion; no project-card grid remains. Forced WebGL unavailability was checked after one actual context request and preserved all six links.
- Normal navigation reported zero application page errors. Desktop/mobile screenshots were inspected: `output/playwright/globe-primary-desktop.png` and `globe-primary-mobile.png`.
- Fresh local mobile Lighthouse: **92 performance / 100 accessibility / 100 best practices / 100 SEO**; LCP ~1.06s, total blocking time 354.5ms, CLS 0. Report: `output/playwright/lighthouse-globe-primary-mobile.json`. Earlier scores below remain historical. Chromium/Windows only; no physical-device or cross-browser claim.

## Supplied React Bits integration — 2026-10-31 (historical checkpoint)

Validated against production `http://127.0.0.1:3001` on branch `feat/react-bits-interactions`. Earlier sections below describe earlier checkpoints, not fresh results for this integration.

- `npm run build`, `npm run lint`, `npm run typecheck`, all four `npm test` cases, and `git diff --check` pass. The six new SVG tiles parse as valid XML. No quality thresholds, assertions, or tests were weakened.
- Initial desktop homepage has zero canvases. Hovering the name loads its separate TechText chunk and two 2D canvases. The h1’s measured box remains exactly 762.109375 × 230.09375px at 1440px before/after activation; no layout jump. Heading text and accessible name stay available independently of the effect.
- Gooey navigation indicator becomes visible behind the hovered link while original links and section navigation remain usable. Target brackets appear on project links while the native cursor remains `pointer`; touch mode hides the brackets.
- Keyboard activation of a CTA produces eight sparks; all burst elements are removed after 550ms. The effect has finite animations and bounded concurrent bursts.
- InfiniteMenu loads only after native disclosure expansion. Dragging changed Agentic Commerce to Chronic Disease Prediction; ArrowRight changed Agentic Commerce to Haveloc Placement Agent. Enter opened `/projects/agentic-commerce`. Closing removes the globe. No autoplay is configured.
- Expanded explorer at 360, 390, 430, 768, 1024, 1440 and 1920px: no horizontal overflow or clipped name lines. Desktop/mobile globe screenshots show solid readable project info panels.
- Global Pause removes interactive canvases, hides brackets, stops continuous effects, and exposes six ordinary explorer links. Play restores the eligible effects. Switching reduced motion live leaves zero running animations and zero canvases, exposes six links, and disables the Pause control. Restoring no-preference re-enables the eligible interaction.
- Forced WebGL failure was confirmed after an actual intercepted context request: one attempt, six ordinary links and zero canvases. Forcing a running context loss also exposes six links. No blank explorer is required to navigate projects.
- Blocking the actual TechText chunk leaves the h1, visible DOM name, main content, and project cards intact with no TechText canvas. OptionalEffectBoundary contains the failure.
- JavaScript-disabled 390px context: native project disclosure expands to six visible case-study links; the named heading is intact and no horizontal overflow occurs.
- Touch-enabled 390px context: tapping the heading creates no canvas; target cursor is hidden; opening mobile navigation and choosing About closes it correctly (`aria-expanded=false`); no overflow.
- All six case studies return HTTP 200 without horizontal overflow at 360px. Normal happy-path checks collected zero application page errors. Forced chunk/context failures are deliberate fault-injection cases, not normal runtime errors.
- Fresh local mobile Lighthouse: **93 performance / 100 accessibility / 100 best practices / 100 SEO**. LCP ~1.21s, total blocking time 308ms, CLS 0. Report: `output/playwright/lighthouse-bits-mobile.json`. The preceding redesign’s 100 performance score is historical; this report is the measurement for the current integration. These are local lab results, not field metrics.

Evidence: `bits-home-desktop.png`, `bits-home-mobile.png`, `bits-tech-name.png`, `bits-gooey-nav.png`, `bits-target-cursor.png`, `bits-globe-desktop.png` and `bits-globe-mobile.png` under ignored `output/playwright/`. Review notes and exact supplied-file SHA-256 are in `docs/content-and-decisions.md`.

Limits: Chromium on Windows and emulated touch only. Safari, Firefox and physical devices have not been exercised. No external deployment or uptime/credential validation is claimed. No npm dependencies were added.

## Neo-brutalist redesign — 2026-10-31

Historical redesign checkpoint validated against the production build at `http://127.0.0.1:3001`, using Chromium on Windows. The current supplied-design integration is recorded above.

- `npm test`: all four GitHub boundary tests pass. `npm run lint`, `npm run typecheck`, `npm run build`, and `git diff --check` pass. No tests or quality thresholds were removed or weakened.
- All seven homepage widths (360, 390, 430, 768, 1024, 1440, 1920): no horizontal overflow or clipped name lines. Name/role font sizes span 58/18px on phones to 142/24px at 1920px.
- All six case studies return HTTP 200 at 360px without horizontal overflow. The shared section treatment has a 2px bottom rule and no unintended left border.
- Mobile menu opens; Escape closes it and restores focus. Section navigation, keyboard accordion expansion, diagram selection, and keyboard cursor movement work. Downloaded résumé filename is `shubham-putitundi.pdf`.
- Decorative strip moves normally; Pause motion freezes it and pauses the ring; Play resumes. Reduced-motion changes while the page remains open disable both effects and cancel finite reveals. No active work-section animations remain under reduced motion.
- Browser QA caught the installed Motion hook snapshotting the OS preference only on mount. `src/lib/use-reduced-motion.ts` uses a live media-query subscription with a static server snapshot; the previously failing live-toggle scenario now passes. Both hero and contact use it.
- A JavaScript-disabled 390px browser context has a visible, named h1, primary links, no overflow, and a paused decorative ring. No intro gate or canvas is present.
- Forced GitHub request failure shows the usable repository fallback. Sitemap, robots, résumé, Open Graph image, and GitHub endpoint return HTTP 200 with appropriate content types.
- Normal runtime checks reported no application page errors. The intentionally aborted GitHub request generates the expected network failure.
- Final local mobile Lighthouse: **100 performance / 100 accessibility / 100 best practices / 100 SEO**. LCP ~0.80s, total blocking time 42ms, CLS 0. The report is `output/playwright/lighthouse-neo-mobile.json`. An earlier 84 performance sample was taken with development/browser work active; isolated production measurements after stopping development returned 100, including after the final CSS correction. These remain local lab results.
- Removing the exclusive Three.js/Fiber/Drei stack removed 57 packages; npm reported zero known vulnerabilities at uninstall time.

Visual evidence inspected: `neo-desktop.png`, `neo-work.png`, `neo-about.png`, `neo-contact.png`, `neo-mobile.png`, `neo-case-mobile.png`, and `neo-opengraph.png` under ignored `output/playwright/`. DevFest reference screenshots are saved alongside them. React Bits attribution/license is tracked in `docs/licenses/react-bits.md`.

Limits: Chromium on Windows only; Safari, Firefox and physical devices were not tested. No public deployment, issuer verification, or external-service uptime claim is made. The prior Three.js warning no longer applies because its rendering path and dependencies were removed.

## Baseline checks — 2026-10-30

- Production Next.js build: homepage, six case-study routes, GitHub endpoint, sitemap, robots, and icon.
- ESLint: no errors or warnings after fixes.
- Four data-boundary tests: fork filtering, URL namespace rejection, malformed payload rejection, and unrelated event tolerance.
- Production dependency audit: zero known vulnerabilities at the time of the audit.
- Chromium responsive checks at 360, 390, 430, 768, 1024, 1440, and 1920 pixels: no horizontal overflow.
- Mobile menu opening, Escape closing, and section navigation.
- Diagram selection and keyboard cursor movement.
- Actual résumé download returns `shubham-putitundi.pdf`.
- Live GitHub endpoint and six rendered repository highlights.
- Reduced-motion mode removes the WebGL canvas.
- HTTP 200 for all six case-study routes, sitemap, robots, and résumé.
- Desktop homepage, mobile homepage, and case-study screenshots inspected.
- All six case studies return HTTP 200 at 360px without horizontal overflow.
- Forced GitHub network failure shows the repository fallback; forced WebGL unavailability shows the SVG sculpture.

## Historical Lighthouse audit — 2026-10-30

The final production mobile Lighthouse run returned **100 performance, 100 accessibility, 100 best practices, and 100 SEO**. All blueprint thresholds were met. Color-contrast and accessible-name checks pass. The report is saved at `output/playwright/lighthouse-mobile.json`. These are local lab measurements, not field Core Web Vitals or a production uptime guarantee. Scores can vary across environments.

The generated Open Graph image returns HTTP 200 with image/png content. Final desktop, selected-work, and mobile screenshots are in `output/playwright/`.

## Deployment status

**Completed:** source `https://github.com/rdx644/PortX` (`main`) and live production `https://shubham-putitundi-portx.netlify.app`. Deploy and verification details are at the top of this document. The earlier Vercel invalid-token/fallback-upload rejection was historical; the owner later explicitly authorized this Netlify/GitHub destination and completed CLI login.

## Historical limits

Browser QA uses Chromium on Windows. Safari, Firefox, and physical mobile devices have not been tested. Three.js emits a dependency deprecation warning for `Clock`; no application console errors were observed in normal navigation. Credential issuer verification and external deployment uptime are not established by the local checks.

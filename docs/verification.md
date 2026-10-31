# Verification

## ScrollReveal portfolio text — 2026-10-31 (current)

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

No external deployment was created. The installed Vercel CLI reported an invalid saved token. Automatic approval review rejected the skill's fallback upload because it would disclose the project, résumé, and contact information to an unverified deployment destination without explicit approval. Local implementation and verification are complete; publishing requires the owner's approval and a suitable deployment destination.

## Historical limits

Browser QA uses Chromium on Windows. Safari, Firefox, and physical mobile devices have not been tested. Three.js emits a dependency deprecation warning for `Clock`; no application console errors were observed in normal navigation. Credential issuer verification and external deployment uptime are not established by the local checks.

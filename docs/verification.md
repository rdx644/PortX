# Verification

## Neo-brutalist redesign — 2026-10-31

Validated against the production build at `http://127.0.0.1:3001`, using Chromium on Windows. This section is current; the earlier results below describe the original implementation.

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

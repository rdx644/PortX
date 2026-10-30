# Verification

## Completed

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

## Final Lighthouse audit

The final production mobile Lighthouse run returned **100 performance, 100 accessibility, 100 best practices, and 100 SEO**. All blueprint thresholds were met. Color-contrast and accessible-name checks pass. The report is saved at `output/playwright/lighthouse-mobile.json`. These are local lab measurements, not field Core Web Vitals or a production uptime guarantee. Scores can vary across environments.

The generated Open Graph image returns HTTP 200 with image/png content. Final desktop, selected-work, and mobile screenshots are in `output/playwright/`.

## Deployment status

No external deployment was created. The installed Vercel CLI reported an invalid saved token. Automatic approval review rejected the skill's fallback upload because it would disclose the project, résumé, and contact information to an unverified deployment destination without explicit approval. Local implementation and verification are complete; publishing requires the owner's approval and a suitable deployment destination.

## Limits

Browser QA uses Chromium on Windows. Safari, Firefox, and physical mobile devices have not been tested. Three.js emits a dependency deprecation warning for `Clock`; no application console errors were observed in normal navigation. Credential issuer verification and external deployment uptime are not established by the local checks.

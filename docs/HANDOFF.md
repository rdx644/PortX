# Shubham portfolio — durable handoff

Updated: 2026-10-31. Read alongside `AGENTS.md`; confirm current Git state before editing.

## Identity and location

The user requested a new robust, attractive portfolio based on the Downloads file `# SHUBHAM PUTITUNDI.md`, then explicitly selected a **new shubham-portfolio project** and asked to use https://github.com/rdx644 as the reference. The blueprint is preserved at `docs/implementation-blueprint.md`.

| Item | Location / state |
| --- | --- |
| Canonical checkout | `D:\CodexProjects\shubham-portfolio` |
| User-facing path | `C:\Users\putit\shubham-portfolio`, a junction to the canonical checkout |
| Runtime/cache directory | `D:\CodexProjects\shubham-portfolio-runtime` |
| Baseline implementation | Commit `93263aa`; current redesign branch `feat/neo-brutalist-motion` |
| Git remote | None configured at handoff creation; do not infer a repository from the owner's profile |
| Local preview | `http://127.0.0.1:3001`, production preview for the redesign; process survival across sessions is not guaranteed |
| Baseline source ZIP | `D:\CodexProjects\shubham-portfolio-runtime\shubham-portfolio-source.zip` (implementation checkpoint; not automatically updated) |
| Global discovery pointer | `C:\Users\putit\.codex\projects\shubham-portfolio.md` |

Older projects `C:\Users\putit\my-portfolio` and `C:\Users\putit\Portofolio_V5` were inspected only for context. This implementation is separate.

## Delivered implementation

Next.js 16.4.3 App Router, React 19.2, strict TypeScript, Tailwind 4, locally hosted Geist (body 400/display 900), Motion, and Zod. Exact installed versions are in `package-lock.json`.

The homepage has sticky responsive navigation; a name-first neo-brutalist hero; a React Bits motion playground; six project previews; about, expertise, virtual internship and credential sections; cached GitHub activity; email/LinkedIn/GitHub contact; and résumé download.

Six statically generated case studies share `src/app/projects/[slug]/page.tsx`: `agentic-commerce`, `zeropatch`, `multiplayer-cursor`, `cybershield`, `wellify-ai`, and `haveloc-agent`. Diagrams are explanatory illustrations. The cursor demonstration is explicitly a local simulation.

The cube, SVG sculpture fallback, and exclusive 3D dependencies were removed at the owner’s request. Adapted React Bits CircularText and ScrollVelocity supply the decorative ring and scroll-responsive strip, with pause and reduced-motion handling. Finite intersection reveals and rolling hover/focus labels adapt the DevFest reference. The heading/actions and server content remain usable without JavaScript or GitHub availability.

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
| React Bits adaptations | `src/components/react-bits/` |
| Progressive scroll reveals and rolling labels | `src/components/ui/ScrollReveals.tsx`, `src/components/ui/RollLabel.tsx` |
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

Current redesign (2026-10-31): production build, typecheck, lint, all four tests, seven-width checks, six mobile case studies, motion pause and live reduced-motion toggles, no-JavaScript rendering, keyboard navigation/controls, résumé download, GitHub failure fallback, metadata routes, and screenshots passed. Fresh isolated production mobile Lighthouse returned 100 performance / 100 accessibility / 100 best practices / 100 SEO (LCP ~0.80s, TBT 42ms, CLS 0). See `docs/verification.md` for current evidence and historical results.

The reduced-motion subscription is in `src/lib/use-reduced-motion.ts`; the installed Motion hook was found to snapshot only the initial setting. Hero styles are colocated in `src/components/hero/hero.css`, imported by `src/app/globals.css`.

Historical baseline:

At implementation commit `93263aa`: production build and ESLint passed, four GitHub boundary tests passed, production npm audit reported zero known vulnerabilities. All seven requested widths (360, 390, 430, 768, 1024, 1440, 1920) had no horizontal overflow. Mobile menu/Escape, section anchors, diagram controls, keyboard cursor control, résumé download, live GitHub data, reduced motion, WebGL failure and GitHub network failure were checked. All six case studies passed at 360px.

The final **local mobile Lighthouse** run scored 100 performance / 100 accessibility / 100 best practices / 100 SEO. These are historical local lab results, not field metrics. Chromium on Windows was tested; Safari, Firefox and physical devices were not. A Three.js `Clock` dependency deprecation warning remains, without observed normal application console errors.

Evidence: `docs/verification.md`, ignored `output/playwright/lighthouse-mobile.json`, and screenshots under `output/playwright/`. Application code need not be rebuilt for purely documentary graph updates unless its inputs change.

## Content and design constraints

Keep the neo-brutalist cream/ink/cobalt system, yellow/pink accents, heavy name-first type, hard shadows, and consistent borders. The owner’s 2026-10-31 request supersedes the blueprint’s original styling and cube. Keep source-backed technical descriptions. The résumé is the owner's supplied `(3).pdf`; it includes personal contact details. Do not reproduce its phone/address in the graph or global index.

CyberShield uses synthetic data. Disease prediction has code artifacts and documented AWS architecture, not a verified clinical or live deployment. Haveloc's mock portal does not prove external submissions. ZeroPatch outputs drafts and cannot merge. Agentic Commerce is a controlled single-merchant demo. Virtual internships must not become claims of direct company employment. Credentials are résumé-sourced, with issuer links, not independently authenticated here.

## Pending external work — not completed or authorized by this handoff

- Nothing was published or pushed. The installed Vercel CLI reported an invalid token.
- Automatic approval review rejected a fallback upload via the deployment skill because it would send source and the personal résumé to an unverified destination without explicit approval. Do not retry or bypass it based on this context file. The user has not yet approved publication.
- For approved deployment, use an authenticated, user-approved destination and set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain. Preview metadata can use `VERCEL_URL`.
- Custom domain, Sentry, and Vercel Analytics are not configured.
- `.codex/config.toml` configures the shadcn MCP server, but connection verification requires a client restart. React Bits public CircularText and ScrollVelocity are now adapted locally with attribution/license. AnimatedContent remains rejected because it adds GSAP and hides SSR content. No Pro integration is installed.

## Persistent graph and future sessions

Start with `graphify-out/CONTEXT.md`, then `GRAPH_REPORT.md`, `graph.html`, or `graph.json`. `coverage.json` accounts for all source/config/document/asset files, while excluding generated dependencies, build caches, private environment files, browser traces and résumé text from extraction.

Run `python scripts/refresh_graph.py --check` before relying on the graph. Run `python scripts/refresh_graph.py` after source changes. Documentation semantic fragments must be regenerated through the graphify skill when their recorded source hashes change. EXTRACTED, INFERRED, and AMBIGUOUS relationships remain distinct; the audit states extraction limits and token-accounting availability.

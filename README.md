# Shubham Putitundi — engineering portfolio

A Next.js App Router portfolio built from `docs/implementation-blueprint.md`, the owner's résumé, and public repositories at [github.com/rdx644](https://github.com/rdx644).

## Future changes and project context

Start with [the handoff](docs/HANDOFF.md) and [repository instructions](AGENTS.md). The [graph context](graphify-out/CONTEXT.md), [interactive map](graphify-out/graph.html), and [audit report](graphify-out/GRAPH_REPORT.md) preserve architecture and decision context. Run `python scripts/refresh_graph.py --check` to check freshness, or `python scripts/refresh_graph.py` after code changes. Documentation semantic updates use the graphify skill. Source files remain authoritative.

## Run locally

Requires Node.js 22.13+ and npm.

```powershell
cd C:\Users\putit\shubham-portfolio
npm ci
npm run dev
```

Open http://localhost:3000. For a production preview, use `npm run build` followed by `npm start`.

On this computer, the C: project directory is a junction to `D:\CodexProjects\shubham-portfolio` because C: lacked installation space. Build output is linked to `D:\CodexProjects\shubham-portfolio-runtime\.next`. These junctions are local conveniences, not repository requirements. A fresh clone works on any supported platform.

If C: remains low on space, use the local package cache on D:

```powershell
npm ci --cache D:\CodexProjects\shubham-portfolio-runtime\npm-cache
```

## Architecture

- Server-rendered homepage and six statically generated `/projects/[slug]` case studies.
- Centralized project content in `src/data/projects.ts`; background, links, and credentials in `src/data/profile.ts`.
- Small client components for navigation, architecture diagrams, the local cursor demo, and GitHub activity.
- Name-first neo-brutalist hero with intent-loaded TechText, CircularText/ScrollVelocity, focused navigation/cursor/click effects, shared Pause motion controls, and reduced-motion/static fallbacks. The old cube and Three.js dependencies remain removed.
- Default-open native-WebGL InfiniteMenu is the homepage project browser; duplicate project cards are removed. Graphics load near the Work viewport; six compact case-study links cover loading, reduced motion, no JavaScript and graphics failures. Dedicated case-study pages retain their diagrams and source links.
- React Bits ScrollReveal scrubs words from dim/blurred to clear in About, section introductions, experience descriptions and case-study narratives. Word splitting and GSAP/ScrollTrigger are deferred until text approaches the viewport; Pause/reduced motion and no-JavaScript output stay fully readable.
- GitHub API access stays on the server, with Zod validation, six-second request timeouts, hourly caching, and a usable failure state. No GitHub token is required.
- Geist body and heavy display fonts are self-hosted. Motion handles scroll/spring effects; finite progressive reveals keep SSR content visible. No remote font requests.
- Email contact uses `mailto:`. There is no message-collection backend or implied delivery confirmation.
- Sitemap, robots, route metadata, profile structured data, generated Open Graph image, and response security headers.

## Checks

```powershell
npm test
npm run lint
npm run build
```

The GitHub Actions workflow runs these checks on pushes and pull requests. Browser evidence and Lighthouse reports are local, ignored artifacts under `output/playwright/`. See `docs/verification.md` for the measured results and limitations.

## Content editing

Update project copy and stacks in `src/data/projects.ts`; the shared template updates every case study. Set a `demo` URL only for a supplied deployment. Keep scope notes that distinguish prototypes, synthetic data, and documented designs from verified production use. Credentials are sourced from the supplied résumé and link to issuer verification pages; they are not represented as independently authenticated badges.

Replace `public/resume/shubham-putitundi.pdf` to update the downloadable résumé. This is the supplied PDF, including the contact details it contains.

## Deployment

The application is compatible with Vercel's Next.js preset. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain before the production build. Preview deployments use `VERCEL_URL` automatically; local development defaults to localhost.

```powershell
vercel login
vercel deploy
```

Custom-domain configuration, authenticated ownership of the final deployment, Sentry monitoring, and analytics require the owner's service setup. They are not silently provisioned or represented as active. Add a Sentry DSN or analytics only when those services are intentionally configured.

## Component registry

`components.json` supplies shadcn-compatible aliases, styling configuration, and the public React Bits registry. `.codex/config.toml` configures the shadcn MCP server for a future session; restart the client to connect it. The current session did not expose that MCP tool.

CircularText/ScrollVelocity and the five designs in the owner’s supplied `React bits .txt` are integrated under `src/components/react-bits/`; attribution and current license conditions are in `docs/licenses/react-bits.md`. The owner subsequently requested ScrollReveal explicitly; its GSAP 3.15.0 dependency is pinned and code-split. No Pro components are used. See `docs/content-and-decisions.md` for the reference review and design contract.

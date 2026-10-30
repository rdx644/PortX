# Content and implementation decisions

## Sources reviewed on 2026-10-30

- Owner's Downloads: `# SHUBHAM PUTITUNDI.md` and `SHUBHAM PUTITUNDI (3).pdf`.
- Profile: https://github.com/rdx644, read through GitHub's public REST API.
- Repository READMEs: Agentic-Commerce-, ZeroPatch-CI, Real-Time-Multiplayer-Cursor-State-Sync, CyberShield-AI, Chronic-Disease-Risk-Prediction, Haveloc-Platform-Assistant-.
- Repository tree for Chronic-Disease-Risk-Prediction: notebooks, Glue script, Lambda ZIP artifacts, frontend files, and sample outputs. ZIP artifacts were not executed and no AWS deployment was authenticated.
- Credential URLs were extracted from the supplied résumé. Issuer pages could not be independently verified in this environment. Dates and names remain explicitly résumé-sourced.

## Accuracy boundaries

No fabricated usage, latency, revenue, accuracy, or employment claims. Virtual internships are labeled as such. Forked repositories are excluded from authored GitHub highlights. The live activity section describes public events, not a full annual contribution count.

CyberShield uses synthetic datasets and simulated events. The disease-risk case study describes source artifacts and a documented cloud design, not proven clinical validity or a verified live service. Haveloc's mock portal does not prove successful external submissions. ZeroPatch produces drafts and has no merge authority. Agentic Commerce is a controlled single-merchant demonstration. The cursor project is a small single-process room implementation.

The two demo links come from the owner's plan and repository references. Their deployment uptime is not guaranteed. Diagrams are explanatory portfolio illustrations, not screenshots of a running backend. No credentials from repositories are copied into the website.

## Design and performance — redesign approved 2026-10-31

The owner explicitly requested a high-grade neo-brutalist redesign inspired by https://devfest.gdgchennai.in/, larger name typography instead of a large role title, and React Bits animations in place of the cube. This direction supersedes the original blueprint’s editorial styling and sculpture. Content accuracy boundaries above remain in force.

Hero styling is colocated in `src/components/hero/hero.css`, imported from `src/app/globals.css`. The design contract is a cream/ink/cobalt system with yellow and pink accents, heavy locally hosted Geist display type, visible borders, square controls, and hard offset shadows. Shubham Putitundi is the homepage h1; the engineering role is supporting text. Responsive composition prioritizes the name, description, and work action before the decorative playground. Case studies, cards, diagrams, navigation, accordions, GitHub states, contact, and social preview use the same language.

Reference patterns adapted: finite staggered letter entrances, rolling link labels on hover/focus, section/card reveals on intersection, and playful geometric movement. The portfolio keeps ordinary document scrolling and immediate navigation. No reference branding, imagery, intro gate, audio, or content was copied.

`src/components/ui/ScrollReveals.tsx` enhances visible SSR content using IntersectionObserver and finite Web Animations. Reduced-motion changes cancel active reveals. `src/lib/use-reduced-motion.ts` shares a live OS-preference subscription across the hero and contact because the installed Motion hook only snapshots its initial setting. The hero name also renders immediately; its entrance changes transforms rather than hiding the heading. No-JavaScript output remains usable.

The contact section uses email and professional profile links. No message-collection backend is present.

## React Bits integration — 2026-10-31

Reviewed the public TypeScript/CSS registry sources for CircularText, ScrollVelocity, DecryptedText, and Magnet. Integrated focused adaptations of **CircularText** and **ScrollVelocity** in `src/components/react-bits/`. CircularText retains the evenly spaced ring-letter construction with a CSS rotation. ScrollVelocity retains Motion scroll velocity, spring smoothing, and wrapped repeated text. It suspends its update callback offscreen and while paused. The ring stops offscreen; both stop for reduced motion and the visible Pause motion control. Coarse/touch pointers do not move the decorative code sticker.

Sources: https://reactbits.dev/r/CircularText-TS-CSS.json and https://reactbits.dev/r/ScrollVelocity-TS-CSS.json. The copyright and current MIT + Commons Clause conditions are preserved in `docs/licenses/react-bits.md`. These are adaptations, not unmodified registry installations. No Pro components, GSAP, additional animation engine, or remote runtime requests were added.

At that redesign checkpoint, HeroScene, NetworkFallback and their exclusive Three.js/Drei/Fiber dependencies were removed. The later supplied-design integration below introduces only the optional native-WebGL project explorer. The existing Motion dependency drives scroll and spring interactions. Decorative repeated text and glyphs are hidden from assistive technology; the name has a single accessible label.

The previous AnimatedContent review remains a historical decision: it was rejected because it required GSAP and initially hid content. It is still not installed.

## Supplied React Bits designs — 2026-10-31

Source reviewed: the owner’s Downloads file `React bits .txt` (149,986 bytes, SHA-256 `5b4a50a2b5e8bc696eb1a693c7aa63b5c906cb1bdb052e7565543b4843b3d0ef`). It contains complete JavaScript/CSS examples for TechText, TargetCursor, ClickSpark, InfiniteMenu, and GooeyNav. Matching public TypeScript/CSS registry variants were reviewed where typed engines were needed. The file’s examples are design references; its demonstration copy is not portfolio content.

| Supplied design | Portfolio decision | Boundary |
| --- | --- | --- |
| TechText | Dashed glyph outlines/selection frame on the large name for fine-pointer hover | `HeroName.tsx` intent-loads the typed `TechText.tsx` canvas engine; the real h1 stays visible until a font-ready canvas has drawn. No sweep, drag, click kick, or intro on the name. |
| TargetCursor | Cobalt brackets on project title/action links | Focused typed geometry adaptation; never hides the native cursor, covers no text, and is disabled for touch/reduced motion. No roaming spin. |
| ClickSpark | Short radial bursts on selected CTAs, disclosure controls, and contact action | Focused typed adaptation with finite Web Animations, eight sparks, input deduplication, and at most five concurrent bursts. It does not decorate arbitrary paragraph clicks. |
| GooeyNav | Yellow merging pill/droplets behind the existing desktop navigation | Focused SVG/CSS adaptation preserves Next links, section tracking, native focus and the mobile menu. No WebGL navbar or second navigation model. |
| InfiniteMenu | Optional “Explore the project globe” disclosure above the case-study cards | Typed native-WebGL engine loads only on explicit expansion. No autoplay/intro spin, 36 tiles, bounded DPR, six original local SVG project tiles, drag/arrow-key/Enter access, offscreen suspension and GPU cleanup. |

The normal cards and case-study links remain the primary project presentation. The native disclosure also provides six ordinary project links without JavaScript. Under reduced motion or global pause, or if WebGL/context creation is unavailable or the context is lost, the globe becomes that ordinary link view. No Three.js, GSAP, new npm dependencies, remote images or runtime API keys were added. The previous cube remains removed; the new optional globe is the supplied navigation design, not a replacement hero sculpture.

`MotionPreferences.tsx` shares the existing live OS-preference subscription and a single Pause/Play state across the hero, name, cursor, sparks, navigation animation, reveals, globe and contact. `OptionalEffectBoundary.tsx` contains failures of intent-loaded decorative chunks: a failed name effect leaves the h1 intact, and a failed globe leaves project links. Heading dimensions do not depend on animation readiness. Active project details have opaque cream information plates to remain readable over moving tiles.

The supplied InfiniteMenu originally wrote mutable refs during render; its typed integration updates those refs in an effect to meet the project’s React rules. GPU resources are deleted on cleanup; forcing `WEBGL_lose_context` during cleanup was rejected because React development remounts can reuse that canvas/context. Context-loss recovery remains explicit. All adapted source files reference `docs/licenses/react-bits.md`.

Public references: https://reactbits.dev/text-animations/tech-text, https://reactbits.dev/animations/target-cursor, https://reactbits.dev/animations/click-spark, https://reactbits.dev/components/infinite-menu, and https://reactbits.dev/components/gooey-nav.

## External configuration still required

An owned Vercel deployment and final domain; optional Sentry and Vercel Analytics activation; issuer-side credential review. These are separate from the functioning local implementation and must be verified before claiming the blueprint's complete production definition of done.

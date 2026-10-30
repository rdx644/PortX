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

The old HeroScene and NetworkFallback modules and their exclusive Three.js/Drei/Fiber dependencies were removed; no WebGL path remains. The existing Motion dependency drives scroll and spring interactions. Decorative repeated text and glyphs are hidden from assistive technology; the name has a single accessible label.

The previous AnimatedContent review remains a historical decision: it was rejected because it required GSAP and initially hid content. It is still not installed.

## External configuration still required

An owned Vercel deployment and final domain; optional Sentry and Vercel Analytics activation; issuer-side credential review. These are separate from the functioning local implementation and must be verified before claiming the blueprint's complete production definition of done.

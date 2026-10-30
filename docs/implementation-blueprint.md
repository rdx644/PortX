# SHUBHAM PUTITUNDI

# Personal Engineering Portfolio

## Complete Design, Architecture & Implementation Blueprint

**Project Type:** Personal Portfolio Website
**Owner:** Shubham Putitundi
**Project Classification:** Professional Developer / Software Engineering Portfolio
**Development Approach:** Design-led, component-driven, performance-conscious engineering
**Primary Objective:** Build a premium, technically sophisticated, visually distinctive personal portfolio.

---

# 1. PROJECT VISION

## 1.1 Objective

Design and develop a premium personal portfolio website that communicates the owner's engineering capabilities, technical experience, projects, and professional identity through a sophisticated frontend experience.

The website must demonstrate both:

1. The owner's technical capabilities through real projects, engineering decisions, architecture, and implementation details.
2. Strong frontend engineering and visual design capabilities through exceptional typography, composition, interactions, animation, and responsive layouts.

The website must not resemble a conventional student portfolio, generic developer template, or AI-generated landing page.

It should feel like a professionally art-directed digital experience designed and implemented by an experienced product designer and senior frontend engineer.

## 1.2 Core Design Philosophy

**Modern Engineering Editorial**

The visual identity should combine:

* Editorial typography.
* Minimalist layouts.
* Strong visual hierarchy.
* Asymmetric compositions.
* Restrained colour usage.
* Purposeful motion.
* Carefully implemented 3D experiences.
* Technically meaningful project visualizations.
* Consistent spacing and component design.

The interface must prioritize content clarity, visual balance, usability, and engineering credibility.

## 1.3 Professional Positioning

The portfolio should position Shubham as an engineer working across:

* Software Engineering.
* Cloud Infrastructure.
* Distributed Systems.
* AI and Machine Learning.
* Cybersecurity.
* Backend Engineering.
* Intelligent Automation.

Avoid positioning the website exclusively around AI/ML.

The overall identity should communicate broad software and infrastructure engineering capabilities.

---

# 2. NON-NEGOTIABLE DESIGN INSTRUCTIONS

These instructions are mandatory throughout the development process.

They must not be compromised for development convenience or automated code-generation speed.

## 2.1 No Generic AI-Generated Design

STRICTLY AVOID:

* Generic AI portfolio templates.
* Purple and blue gradient-heavy backgrounds.
* Random floating particles.
* Glowing AI brains.
* Robot illustrations.
* Excessive glassmorphism.
* Unnecessary neon borders.
* Repetitive gradient cards.
* Generic technology illustrations.
* Random floating icons.
* Overused dashboard aesthetics.
* Excessive rounded containers.
* Artificial-looking animated backgrounds.
* Unnecessary AI-generated decorative images.

The website must not look like a typical website generated from a generic AI landing-page prompt.

## 2.2 No Vibe-Coded Implementation

The implementation must follow established frontend engineering practices.

Mandatory requirements:

1. Maintain a well-defined component architecture.
2. Use TypeScript consistently.
3. Avoid unnecessary dependencies.
4. Avoid duplicating components.
5. Maintain separation of concerns.
6. Use reusable design tokens.
7. Follow accessible HTML semantics.
8. Implement proper error handling.
9. Maintain responsive layouts.
10. Avoid unnecessary client-side rendering.
11. Keep third-party dependencies under control.
12. Ensure every interactive element has a defined purpose.

Do not generate an entire application in one enormous component.

Do not blindly install libraries or components without reviewing their implementation.

Every installed component must be evaluated for design compatibility, accessibility, bundle size, and maintainability.

## 2.3 Design Consistency

Maintain a single visual language across the entire website.

Typography, spacing, borders, colours, button styles, transitions, and interaction patterns must follow the established design system.

Do not introduce a new visual style for individual sections without a deliberate design reason.

## 2.4 Content Authenticity

Use actual information from the owner's GitHub repositories, verified credentials, and supplied professional details.

Never fabricate:

* Employment experience.
* Internship responsibilities.
* Project deployment status.
* Performance metrics.
* Certifications.
* Awards.
* User counts.
* Production usage.
* Technical achievements.

If a project has not been deployed, do not display a fabricated live demonstration.

If a project metric has not been measured, do not invent it.

---

# 3. CREATIVE DIRECTION AND VISUAL IDENTITY

## 3.1 Design Concept

**Modern Engineering Editorial**

The website should combine the sophistication of an editorial publication with the technical precision of a professional engineering product.

Design inspiration:

* Linear: Layout precision and restrained interactions.
* Vercel: Minimalism and visual hierarchy.
* Raycast: Refined interaction design.
* Apple: Product storytelling and visual composition.
* Resend: Typography and editorial presentation.

These are references for design quality, not templates to reproduce.

## 3.2 Colour System

Primary theme: Warm off-white.

| Token           | Colour  | Application                  |
| --------------- | ------- | ---------------------------- |
| Background      | #F5F5F0 | Main background              |
| Primary Text    | #171918 | Headings                     |
| Secondary Text  | #777A76 | Supporting text              |
| Accent          | #315CDB | Interactive highlights       |
| Border          | #DEDFD8 | Dividers                     |
| Dark Background | #151817 | Dark sections                |
| Dark Foreground | #F2F3EE | Dark-section text            |
| Muted Surface   | #ECEDE7 | Cards and secondary surfaces |

Use colour consistently.

Do not introduce additional accent colours without justification.

## 3.3 Typography

Preferred typeface direction:

* Geist.
* Satoshi.
* Inter Tight.

Recommended hierarchy:

| Element          | Typography                 |
| ---------------- | -------------------------- |
| Hero heading     | Large display typography   |
| Section headings | Bold editorial typography  |
| Body             | Highly readable sans-serif |
| Technical labels | Monospaced typography      |
| Metadata         | Small uppercase typography |

Typography should create the visual personality of the website.

Avoid making every heading excessively bold or oversized.

Use a deliberate combination of font weight, line height, letter spacing, and whitespace.

## 3.4 Layout System

Use:

* 12-column desktop grid.
* Consistent horizontal margins.
* Controlled content widths.
* Asymmetric project layouts.
* Generous vertical spacing.
* Responsive grid adaptation.
* Consistent section boundaries.

Avoid placing everything inside centred cards.

The website should have a strong sense of composition.

---

# 4. WEBSITE INFORMATION ARCHITECTURE

The website should use a single-page homepage supported by dedicated project-detail routes.

## 4.1 Sitemap

```text
/
│
├── Home
│
├── About
│
├── Projects
│   ├── Agentic Commerce
│   ├── ZeroPatch CI
│   ├── CyberShield AI
│   ├── Multiplayer Cursor
│   ├── Chronic Disease Prediction
│   └── Haveloc Placement Agent
│
├── Technical Expertise
│
├── Experience & Certifications
│
├── GitHub Activity
│
└── Contact
```

## 4.2 Project Routes

```text
/projects/agentic-commerce
/projects/zeropatch
/projects/cybershield
/projects/multiplayer-cursor
/projects/wellify-ai
/projects/haveloc-agent
```

Each route should use a reusable case-study layout.

---

# 5. HOMEPAGE DESIGN SPECIFICATION

## SECTION 01 — NAVIGATION

### Objective

Create a minimal, professional navigation system that provides straightforward access to the website's important sections.

### Layout

```text
--------------------------------------------------------
SP.                Work   About   Expertise   Resume ↗
--------------------------------------------------------
```

### Requirements

* SP. personal monogram.
* Sticky navigation.
* Transparent initial state.
* Subtle backdrop blur after scrolling.
* Smooth section navigation.
* Active navigation indicator.
* Resume download action.
* Responsive mobile menu.
* Keyboard-accessible navigation.

### Interaction

On scroll:

* Navigation background becomes slightly opaque.
* Border appears subtly.
* Navigation height remains consistent.
* No excessive animation.

---

## SECTION 02 — HERO

### Objective

Communicate the owner's engineering identity immediately.

### Proposed content

Eyebrow:

SHUBHAM PUTITUNDI

Primary heading:

SOFTWARE ENGINEER
& CLOUD SYSTEMS

Supporting description:

Building reliable systems at the intersection of software engineering, cloud infrastructure, and intelligent applications.

Primary actions:

* Explore My Work.
* Download Resume.

Supporting metadata:

* Based in India.
* Computer Science — Cloud Computing.
* SRM Institute of Science and Technology.

### Layout

Desktop:

* Left: 55% typography and content.
* Right: 45% interactive visual.
* Large typography.
* Strong whitespace.
* Restrained accent colour.

Mobile:

* Stacked content.
* Smaller typography.
* 3D visual reduced in complexity.
* Primary CTA remains immediately accessible.

### Hero Animation

Implement a controlled introductory sequence:

1. Navigation appears.
2. Eyebrow text enters.
3. Main heading reveals.
4. Supporting description appears.
5. CTA buttons appear.
6. 3D scene gradually becomes visible.

Animations must be short, purposeful, and non-blocking.

---

# 6. THREE.JS HERO EXPERIENCE

## 6.1 Concept

Create a custom interactive geometric network sculpture.

The visual should represent interconnected systems and infrastructure.

It should not resemble:

* An AI brain.
* A robot.
* A generic glowing planet.
* A stock 3D illustration.

## 6.2 Technology

* Three.js.
* React Three Fiber.
* Drei.
* Custom shaders only where justified.

## 6.3 Visual Requirements

* Geometric nodes.
* Thin connecting structures.
* Subtle cobalt highlights.
* Controlled depth.
* Organic rotation.
* Mouse-responsive movement.
* Soft lighting.
* Carefully controlled camera perspective.

## 6.4 Performance Requirements

* Lazy-load the canvas.
* Limit device pixel ratio.
* Avoid unnecessary continuous rendering.
* Use instancing where appropriate.
* Avoid excessive geometry.
* Dispose of materials and geometries.
* Provide a static fallback.
* Disable expensive effects on low-powered devices.
* Respect reduced-motion preferences.

The hero must remain usable when WebGL is unavailable.

The heading and CTA must render independently of the 3D scene.

---

# 7. ABOUT SECTION

## Objective

Introduce the owner's technical background and engineering philosophy.

### Proposed copy

Building systems that solve real engineering problems.

I'm Shubham, a Computer Science undergraduate specializing in Cloud Computing at SRM Institute of Science and Technology.

My work revolves around software engineering, cloud infrastructure, AI-driven applications, and cybersecurity.

I enjoy solving problems involving distributed systems, automation, intelligent decision-making, and reliable application architecture.

My focus is on developing solutions that are maintainable, scalable, secure, and technically meaningful.

### Layout

Two-column editorial composition.

Left:

* Large heading.
* Introduction.
* Engineering philosophy.

Right:

* Academic background.
* Technical interests.
* Current focus.
* Professional links.

Do not use generic biography cards.

---

# 8. PROJECT SHOWCASE

## 8.1 Objective

The project section must be the strongest part of the website.

The website should demonstrate actual engineering capability rather than simply display project names and technology logos.

Use large, editorial project compositions.

Avoid identical project cards.

## 8.2 Featured Project Priority

### PROJECT 01 — AGENTIC COMMERCE

Repository:

https://github.com/rdx644/Agentic-Commerce-

Live demonstration:

https://agentic-commerce-zyoy.onrender.com/dashboard

Category:

Agentic Systems / FinTech / Backend Engineering.

Key architectural highlights:

* Agentic checkout.
* Deterministic payment authorization.
* Zero-trust capability tokens.
* Cryptographic catalog snapshotting.
* Atomic budget ledger.
* Central payment state machine.
* Webhook verification.
* Audit dashboard.

Visual treatment:

* Large architecture preview.
* Dashboard screenshots.
* Technical architecture visualization.
* Interactive component highlighting.
* Repository and live-demo actions.

The central architectural concept should be emphasized:

"Probabilistic AI decides what the buyer intends. Deterministic systems decide whether money may move."

Do not expose credentials, API keys, tokens, or other secrets from the repository.

### PROJECT 02 — ZEROPATCH CI

Repository:

https://github.com/rdx644/ZeroPatch-CI

Category:

DevSecOps / Supply Chain Security.

Highlights:

* GitHub Actions workflow analysis.
* Security control detection.
* Constrained remediation.
* YAML structural validation.
* Evidence-based remediation.
* Draft-only security fixes.

Visual treatment:

* Workflow preview.
* Security findings.
* Before/after remediation.
* Architecture illustration.

Do not imply that the system executes or automatically merges arbitrary repository changes.

### PROJECT 03 — REAL-TIME MULTIPLAYER CURSOR

Repository:

https://github.com/rdx644/Real-Time-Multiplayer-Cursor-State-Sync

Live demonstration:

https://multiplayer-cursor-frontend.onrender.com/

Category:

Distributed Systems / Real-Time Communication.

Highlights:

* Native WebSockets.
* Shared rooms.
* Real-time cursor synchronization.
* Presence management.
* Reconnection handling.
* Interpolation.
* Message validation.
* RTT and jitter telemetry.

Special requirement:

Create an interactive demonstration window.

Visitors should be able to understand cursor synchronization through a simulated shared canvas or actual live demonstration.

Show the architecture:

```text
Pointer Input
     |
     v
Latest-Value Throttler
     |
     v
Typed WebSocket Protocol
     |
     v
Room Manager
     |
     v
Validated Server Events
     |
     v
Interpolation Buffer
     |
     v
Canvas Rendering
```

Do not claim latency or scalability numbers without verified measurements.

### PROJECT 04 — CYBERSHIELD AI

Repository:

https://github.com/rdx644/CyberShield-AI

Category:

Cybersecurity / Machine Learning.

Highlights:

* Phishing detection.
* Network anomaly detection.
* User behaviour analysis.
* Malicious document detection.
* Risk scoring.
* Policy enforcement.

Visual treatment:

A professional security architecture visualization.

Avoid generic glowing security dashboards.

### PROJECT 05 — CHRONIC DISEASE RISK PREDICTION

Repository:

https://github.com/rdx644/Chronic-Disease-Risk-Prediction

Category:

Cloud Engineering / Machine Learning.

Highlights:

* AWS S3.
* API Gateway.
* Lambda.
* DynamoDB.
* AWS Glue.
* PySpark.
* Amazon SageMaker.
* Random Forest model.

Visual treatment:

Create a clean AWS architecture diagram showing the data flow from ingestion to prediction.

Clearly distinguish actual implementation from proposed architecture.

### PROJECT 06 — HAVELOC PLACEMENT AGENT

Repository:

https://github.com/rdx644/Haveloc-Platform-Assistant-

Category:

Browser Automation / Workflow Engineering.

Highlights:

* Browser extension architecture.
* Eligibility validation.
* Deadline management.
* Resume selection.
* Pre-submission verification.
* Submission lifecycle.
* Audit logging.

Visual treatment:

Show the application lifecycle as a clear state diagram.

Do not claim successful external portal submissions unless supported by verified evidence.

## 8.3 Project Card Design

Each project should include:

* Project title.
* Category.
* Short engineering description.
* Relevant technologies.
* Visual preview.
* Repository link.
* Live demonstration, when available.
* Case-study navigation.

## 8.4 Project Case Study Template

Every project-detail page must contain:

1. Project introduction.
2. Problem statement.
3. Engineering objectives.
4. System architecture.
5. Technology stack.
6. Implementation details.
7. Important engineering decisions.
8. Challenges encountered.
9. Security and performance considerations.
10. Screenshots or demonstrations.
11. Results and verified metrics.
12. Repository and deployment links.

Create reusable case-study components rather than duplicating page implementations.

---

# 9. TECHNICAL EXPERTISE SECTION

## Objective

Present technical capabilities in a structured, professional manner.

### Categories

**Programming**

* Java.
* C++.
* Python.
* JavaScript.
* TypeScript.

**Frontend**

* React.
* Next.js.
* Tailwind CSS.
* HTML.
* CSS.

**Cloud & Infrastructure**

* AWS.
* Google Cloud.
* Docker.
* Linux.
* Cloud Architecture.

**Backend**

* Node.js.
* FastAPI.
* PostgreSQL.
* REST APIs.

**AI & Machine Learning**

* Scikit-learn.
* PyTorch.
* TensorFlow.
* Generative AI.
* Machine Learning.

**Security Engineering**

* Zero Trust Architecture.
* Threat Detection.
* DevSecOps.
* Security Automation.

Additional categories may include distributed systems, databases, and embedded systems.

### Interaction

Use expandable category rows or editorial technology lists.

Avoid percentage-based skill indicators.

Do not use arbitrary proficiency scores.

---

# 10. EXPERIENCE, CERTIFICATIONS & ACHIEVEMENTS

Implement a vertical timeline.

Potential entries:

* Zscaler Zero Trust Cyber Associate.
* Zscaler Zero Trust Cloud Security Virtual Internship.
* Google Cloud AI Lab.
* Google Cloud Innovator.
* AICTE Eduskills Generative AI Internship.
* AICTE Eduskills Cloud Internship.
* Verified hackathon achievements.

Requirements:

* Exact credential names.
* Verified dates.
* Issuing organization.
* Certificate links.
* Supporting descriptions.

Do not invent missing dates or award positions.

---

# 11. GITHUB ACTIVITY

Integrate GitHub data using a server-side data-fetching strategy.

GitHub profile:

https://github.com/rdx644

LinkedIn:

https://www.linkedin.com/in/shubham-putitundi-b41a802b1

### Display

* Public repositories.
* Contribution activity.
* Repository highlights.
* Programming languages.
* Recent public activity, where available.

### Architecture

```text
GitHub API
    |
    v
Server-side data fetching
    |
    v
Validation and normalization
    |
    v
Caching
    |
    v
React components
    |
    v
GitHub activity section
```

### Important

* Never expose GitHub access tokens in frontend code.
* Do not request unnecessary API permissions.
* Cache data appropriately.
* Handle rate limits.
* Display fallback content if the API is unavailable.
* Do not make the entire homepage dependent on GitHub API availability.

Create custom-designed GitHub components instead of embedding conventional GitHub statistics cards.

---

# 12. CONTACT SECTION

The final section should provide a strong closing experience.

Suggested heading:

HAVE A PROJECT IN MIND?

Let's build something worth engineering.

Actions:

* Contact via email.
* LinkedIn.
* GitHub.
* Resume download.

Optional:

A lightweight contact form using a server-side endpoint and Resend.

Requirements:

* Input validation.
* Spam protection.
* Error handling.
* Success feedback.
* Secure environment configuration.

---

# 13. TECHNOLOGY STACK

## 13.1 Core Stack

| Layer              | Technology        |
| ------------------ | ----------------- |
| Framework          | Next.js           |
| React              | React             |
| Language           | TypeScript        |
| Styling            | Tailwind CSS      |
| UI Components      | shadcn/ui         |
| Component Registry | React Bits MCP    |
| Animation          | Motion for React  |
| 3D                 | Three.js          |
| React 3D           | React Three Fiber |
| 3D Utilities       | Drei              |
| Icons              | Lucide React      |
| Form Management    | React Hook Form   |
| Validation         | Zod               |
| Deployment         | Vercel            |
| Monitoring         | Sentry            |
| Analytics          | Vercel Analytics  |

Use compatible, stable package versions at implementation time.

Do not arbitrarily upgrade major framework versions during development.

## 13.2 Optional Services

Supabase:

Use only if database-backed contact submissions or dynamic content management become necessary.

Resend:

Use for contact form email delivery.

Sentry:

Use for production error monitoring.

Do not introduce backend infrastructure without a clear requirement.

---

# 14. REACT BITS MCP INTEGRATION

## 14.1 Objective

Use React Bits MCP to discover, evaluate, and integrate selected components into the website.

React Bits must support the design system, not dictate the entire design.

## 14.2 Setup Requirements

Before using the MCP integration:

1. Create the React/Next.js project.
2. Initialize shadcn/ui.
3. Ensure the project has `components.json`.
4. Configure React Bits registries.
5. Add the required license key if using Pro features.
6. Configure the MCP client.
7. Restart the MCP client.
8. Verify registry access.

Reference:

https://pro.reactbits.dev/docs/mcp

## 14.3 Components to Explore

| Section    | Component direction  |
| ---------- | -------------------- |
| Hero       | Split Text           |
| Hero       | Blur Text            |
| Hero       | Animated Content     |
| Navigation | Animated indicator   |
| Projects   | Spotlight Card       |
| Projects   | Tilted Card          |
| About      | Text Reveal          |
| Expertise  | Animated List        |
| Contact    | Magnetic interaction |

These are candidates, not mandatory installations.

## 14.4 Component Installation Rules

Before installing a component:

* Search the actual registry.
* Inspect its implementation.
* Check dependencies.
* Review its styling.
* Verify responsive behaviour.
* Check accessibility.
* Check mobile interaction.
* Evaluate bundle-size impact.
* Test compatibility with the existing design system.

Prefer Tailwind-compatible variants where appropriate.

Avoid installing multiple components that perform nearly identical functions.

Do not use every available React Bits component simply because it exists.

## 14.5 MCP Security

* Never commit license keys.
* Keep secrets in `.env.local`.
* Add `.env.local` to `.gitignore`.
* Never expose credentials in client components.
* Review installed component source code.
* Review dependencies before accepting installation changes.

---

# 15. THREE.JS IMPLEMENTATION STRATEGY

Three.js must be used selectively.

## 15.1 Hero Scene

Primary 3D experience:

Interactive network sculpture.

## 15.2 Architecture Visualization

Optional 3D representation of Agentic Commerce or distributed systems.

However, a clean 2D architecture diagram should remain available.

## 15.3 Transition Effects

Use subtle WebGL or CSS transitions only where they improve the experience.

## 15.4 Rendering Rules

* Lazy-load Three.js.
* Separate 3D code from the main application.
* Use React Three Fiber.
* Avoid unnecessary React state updates inside animation loops.
* Use refs for high-frequency rendering state.
* Use instanced geometry for repeated objects.
* Limit shader complexity.
* Avoid excessive post-processing.
* Dispose of GPU resources.
* Stop or reduce rendering when appropriate.
* Provide a static fallback.

## 15.5 Mobile Behaviour

On mobile devices:

* Reduce geometry complexity.
* Disable expensive effects.
* Limit pixel ratio.
* Simplify camera movement.
* Provide a static visual fallback when necessary.

A mobile visitor must never receive an unusable experience because of the desktop 3D scene.

---

# 16. ANIMATION AND INTERACTION SYSTEM

## Technology

Motion for React.

## Principles

Animations should communicate hierarchy, feedback, and transitions.

They should never exist merely to make the website appear more animated.

### Approved Animation Types

* Text reveal.
* Fade transitions.
* Subtle entrance movement.
* Button interaction.
* Navigation indicator.
* Project image reveal.
* Small hover transformations.
* Controlled scroll-based reveals.

### Avoid

* Constant movement.
* Excessive parallax.
* Large-scale bouncing.
* Aggressive scroll hijacking.
* Unnecessary cursor-following effects.
* Continuous background animations.
* Excessive page transitions.

### Accessibility

Implement reduced-motion support.

When the visitor prefers reduced motion:

* Disable parallax.
* Reduce transform-based animations.
* Stop autoplay effects.
* Replace large movements with opacity transitions.
* Simplify the 3D scene.

Reference:

https://motion.dev/docs/react-accessibility

---

# 17. FRONTEND ARCHITECTURE

## 17.1 Recommended Folder Structure

```text
shubham-portfolio/
│
├── public/
│   ├── images/
│   ├── projects/
│   ├── certificates/
│   ├── models/
│   └── resume/
│
├── src/
│   │
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   │
│   │   ├── projects/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   │
│   │   └── api/
│   │       ├── contact/
│   │       │   └── route.ts
│   │       └── github/
│   │           └── route.ts
│   │
│   ├── components/
│   │   ├── navigation/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── projects/
│   │   ├── expertise/
│   │   ├── experience/
│   │   ├── github/
│   │   ├── contact/
│   │   │
│   │   ├── three/
│   │   │   ├── HeroScene.tsx
│   │   │   ├── NetworkGeometry.tsx
│   │   │   └── ArchitectureScene.tsx
│   │   │
│   │   └── ui/
│   │
│   ├── data/
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   └── certifications.ts
│   │
│   ├── hooks/
│   ├── lib/
│   ├── types/
│   └── styles/
│
├── .env.local
├── .gitignore
├── components.json
├── package.json
├── next.config.ts
└── tsconfig.json
```

## 17.2 Component Architecture Rules

* Use Server Components by default.
* Use Client Components only for interactive functionality.
* Keep client boundaries small.
* Keep Three.js components isolated.
* Use reusable project templates.
* Use centralized content data.
* Maintain strict TypeScript types.
* Avoid unnecessary global state.
* Avoid oversized components.
* Avoid duplicated business logic.

Reference:

https://nextjs.org/docs/app/getting-started/server-and-client-components

---

# 18. RESPONSIVE DESIGN

The website must be designed for multiple screen sizes.

### Desktop

* Full editorial composition.
* Asymmetric project grid.
* Interactive 3D scene.
* Large typography.

### Tablet

* Simplified grid.
* Reduced 3D complexity.
* Controlled typography scaling.
* Responsive navigation.

### Mobile

* Single-column layout.
* Simplified hero.
* Static 3D fallback if necessary.
* Touch-friendly buttons.
* No hover-dependent functionality.
* No horizontal overflow.
* Readable project content.
* Reduced animation complexity.

Test at representative viewport widths, including:

* 360px.
* 390px.
* 430px.
* 768px.
* 1024px.
* 1440px.
* 1920px.

Do not simply shrink the desktop design to fit mobile.

Mobile must be treated as a separate layout composition.

---

# 19. PERFORMANCE ENGINEERING

Performance must be considered during implementation, not added as a final optimization exercise.

## Targets

| Metric                 |      Target |
| ---------------------- | ----------: |
| Lighthouse Performance |         90+ |
| Accessibility          |         95+ |
| SEO                    |         95+ |
| Best Practices         |         95+ |
| Core Web Vitals        |        Good |
| Layout Stability       | Minimal CLS |

These are target thresholds, not guaranteed scores.

## Required Practices

1. Use Next.js image optimization.
2. Prefer AVIF/WebP.
3. Optimize font loading.
4. Lazy-load 3D scenes.
5. Use dynamic imports where appropriate.
6. Avoid unnecessary JavaScript.
7. Minimize third-party packages.
8. Prevent layout shifts.
9. Cache external data.
10. Optimize images and video.
11. Avoid excessive DOM complexity.
12. Monitor production performance.

## Special Attention

The initial viewport must render meaningful content without waiting for:

* Three.js initialization.
* GitHub API responses.
* External analytics.
* Large animation libraries.
* Third-party widgets.

The website should remain useful even when optional services fail.

---

# 20. SECURITY AND RELIABILITY

Implement the following:

* No secrets in client-side bundles.
* No API keys in GitHub.
* Environment variable validation.
* Input validation using Zod.
* Server-side validation for contact forms.
* Spam protection.
* Safe external links.
* Proper error handling.
* Secure HTTP headers.
* Dependency review.
* No unnecessary API permissions.

GitHub data must be fetched through a controlled server-side mechanism if authentication is required.

Do not expose personal or confidential information through project screenshots.

Inspect all repository content before displaying it publicly.

---

# 21. SEO AND ACCESSIBILITY

## SEO

Implement:

* Unique page titles.
* Meta descriptions.
* Open Graph metadata.
* Twitter/X card metadata.
* Sitemap.
* Robots configuration.
* Canonical URLs.
* Structured data where appropriate.
* Descriptive image alt text.

Use appropriate structured data for a personal professional profile.

## Accessibility

Implement:

* Semantic HTML.
* Keyboard navigation.
* Visible focus states.
* Accessible buttons.
* Proper heading hierarchy.
* Image alternative text.
* Sufficient colour contrast.
* Accessible form errors.
* Reduced-motion support.
* Screen-reader-friendly labels.

Accessibility is a development requirement, not an optional enhancement.

---

# 22. TESTING STRATEGY

## 22.1 Functional Testing

Test:

* Navigation.
* Section links.
* Project routes.
* Resume download.
* External links.
* Contact form.
* GitHub data fetching.
* Mobile navigation.
* Interactive components.

## 22.2 Responsive Testing

Verify the entire website on:

* Desktop Chrome.
* Firefox.
* Safari.
* Mobile Chrome.
* Mobile Safari.

## 22.3 Performance Testing

Use:

* Lighthouse.
* Chrome DevTools.
* Web Vitals.
* Bundle analysis.

## 22.4 Code Quality

Use:

* ESLint.
* TypeScript strict mode.
* Prettier.
* Automated build checks.
* Component testing where useful.
* End-to-end tests for critical workflows.

Every major development phase must finish with a successful production build.

---

# 23. DEPLOYMENT STRATEGY

## Hosting

Vercel.

## Deployment Pipeline

```text
Developer Changes
       |
       v
GitHub Repository
       |
       v
Automated Checks
       |
       v
Build Verification
       |
       v
Vercel Deployment
       |
       v
Production Website
```

## Requirements

* Production environment variables.
* Secure secret management.
* Custom domain configuration.
* HTTPS.
* Error monitoring.
* Analytics configuration.
* Deployment verification.
* Rollback capability.

The production website must not depend on local development configuration.

---

# 24. IMPLEMENTATION ROADMAP

Development should follow the sequence below.

## PHASE 01 — PROJECT INITIALIZATION

Tasks:

* Create Next.js application.
* Configure TypeScript.
* Configure Tailwind CSS.
* Initialize shadcn/ui.
* Configure path aliases.
* Configure ESLint.
* Configure Prettier.
* Establish Git workflow.
* Create initial folder structure.

Deliverable:

A clean, working frontend foundation.

## PHASE 02 — DESIGN SYSTEM

Tasks:

* Define colour tokens.
* Configure typography.
* Establish spacing scale.
* Define grid system.
* Create button components.
* Create reusable layout components.
* Define border and surface treatments.
* Define animation conventions.

Deliverable:

A consistent visual design system.

## PHASE 03 — REACT BITS MCP

Tasks:

* Configure React Bits registries.
* Connect MCP.
* Search relevant components.
* Evaluate implementations.
* Install selected components.
* Adapt styles to the design system.
* Test responsive behaviour.

Deliverable:

A controlled set of reusable visual components.

## PHASE 04 — CORE HOMEPAGE

Tasks:

* Navigation.
* Hero.
* About.
* Projects overview.
* Technical expertise.
* Experience.
* GitHub activity.
* Contact.
* Footer.

Deliverable:

Complete responsive homepage.

## PHASE 05 — THREE.JS

Tasks:

* Develop network geometry.
* Configure camera.
* Configure lighting.
* Implement controlled interaction.
* Optimize rendering.
* Implement mobile fallback.
* Test WebGL failure handling.

Deliverable:

Optimized interactive hero experience.

## PHASE 06 — PROJECT CASE STUDIES

Tasks:

* Create reusable case-study template.
* Implement six project routes.
* Add project screenshots.
* Add architecture diagrams.
* Add technology metadata.
* Add repository links.
* Add live demonstrations where available.

Deliverable:

Complete engineering project showcase.

## PHASE 07 — ANIMATIONS AND POLISH

Tasks:

* Navigation transitions.
* Hero reveal.
* Project hover interactions.
* Scroll reveals.
* Page transitions where appropriate.
* Reduced-motion support.
* Micro-interactions.

Deliverable:

Polished interaction experience.

## PHASE 08 — QUALITY ASSURANCE

Tasks:

* Functional testing.
* Responsive testing.
* Accessibility audit.
* Lighthouse testing.
* Bundle analysis.
* Security review.
* Content verification.
* Production build verification.

Deliverable:

Release-ready website.

## PHASE 09 — PRODUCTION DEPLOYMENT

Tasks:

* Configure Vercel.
* Connect GitHub.
* Configure environment variables.
* Configure domain.
* Enable HTTPS.
* Configure monitoring.
* Verify production functionality.

Deliverable:

Publicly accessible portfolio.

---

# 25. DEFINITION OF DONE

The project should not be considered complete until the following conditions are met.

### Design

* [ ] Consistent design system.
* [ ] Professional typography.
* [ ] Strong visual hierarchy.
* [ ] Editorial project layouts.
* [ ] No generic AI template aesthetics.
* [ ] No unnecessary decorative effects.
* [ ] Consistent spacing and alignment.

### Frontend

* [ ] TypeScript configured.
* [ ] Reusable components.
* [ ] Responsive layouts.
* [ ] Accessible navigation.
* [ ] Reusable project templates.
* [ ] No major console errors.
* [ ] Successful production build.

### React Bits

* [ ] MCP configured.
* [ ] Components reviewed.
* [ ] Dependencies reviewed.
* [ ] Components adapted to the design system.
* [ ] No unnecessary component duplication.

### Three.js

* [ ] Hero scene implemented.
* [ ] Lazy loading implemented.
* [ ] Mobile fallback implemented.
* [ ] GPU resources managed.
* [ ] Reduced-motion support.
* [ ] Performance tested.

### Content

* [ ] All project descriptions verified.
* [ ] GitHub links working.
* [ ] LinkedIn link working.
* [ ] Resume accessible.
* [ ] Credentials verified.
* [ ] No fabricated metrics.
* [ ] No exposed secrets.

### Production

* [ ] SEO implemented.
* [ ] Accessibility reviewed.
* [ ] Performance tested.
* [ ] HTTPS enabled.
* [ ] Environment variables secured.
* [ ] Deployment verified.
* [ ] Error monitoring configured.

---

# 26. FINAL DEVELOPMENT DIRECTIVE

The following instructions must guide the entire development process.

1. Think like a senior frontend engineer and experienced digital product designer.

2. Design before implementing. Establish the complete visual system before building individual sections.

3. Prioritize original design composition over generic templates.

4. Use React Bits selectively. Do not turn the website into a demonstration of how many animated components can be installed.

5. Use Three.js only when it provides meaningful visual value.

6. Keep the application architecture modular, typed, maintainable, and scalable.

7. Do not compromise performance for decorative animation.

8. Do not compromise accessibility for visual effects.

9. Treat every project as an engineering case study, not merely a card containing a title and description.

10. Use actual repository information and verified project details.

11. Do not fabricate technical achievements, performance statistics, certifications, or professional experience.

12. Maintain consistent typography, spacing, colour, and interaction patterns.

13. Ensure that the website works correctly on mobile devices, including devices with limited graphics capabilities.

14. Review generated code before accepting it. Do not blindly trust automated component installation or code generation.

15. Every section must have a clear purpose. Remove elements that do not improve communication, usability, or visual quality.

16. Ensure that the initial viewport loads meaningful content independently of optional 3D scenes and external services.

17. Complete and test one development phase before introducing unnecessary complexity into the next.

18. Never allow the design to become visually overloaded.

19. Prefer carefully designed custom visuals over generic stock graphics.

20. The final result must communicate engineering maturity, visual sophistication, and professional credibility.

---

# 27. EXPECTED FINAL OUTCOME

The completed website should communicate three things immediately:

**01 — Engineering Capability**

The owner can architect, develop, and implement technically meaningful software systems.

**02 — Technical Breadth**

The owner's experience spans software engineering, cloud infrastructure, distributed systems, AI/ML, and cybersecurity.

**03 — Design and Execution Quality**

The owner understands modern frontend engineering, visual hierarchy, interaction design, performance, and production-quality implementation.

The final experience should be:

* Visually distinctive.
* Technically robust.
* Professionally credible.
* Responsive.
* Accessible.
* Fast.
* Maintainable.
* Easy to extend.

**Final design principle:**

Build a portfolio that demonstrates engineering quality through its own implementation.

The website itself should be the strongest demonstration of the owner's ability to combine engineering precision with thoughtful design.

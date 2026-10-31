import ScrollReveal from '@/components/react-bits/ScrollReveal';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects, repositoryUrl } from '@/data/projects';
import { ProjectVisual } from '@/components/projects/ProjectVisual';
import { Architecture } from '@/components/projects/Architecture';
import { Arrow } from '@/components/ui/Arrow';
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return project
    ? {
        title: project.title,
        description: project.summary,
        alternates: { canonical: `/projects/${slug}` },
        openGraph: { title: project.title, description: project.summary, url: `/projects/${slug}` },
      }
    : {};
}
export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <main id="main" className="case-study wrap">
      <Link className="text-link case-back" href="/#work">
        ← Back to selected work
      </Link>
      <header className="case-header">
        <p className="eyebrow">ENGINEERING CASE STUDY / {project.number}</p>
        <h1>
          {project.title}
          <span className="accent">.</span>
        </h1>
        <ScrollReveal as="p" containerClassName="case-summary" wordAnimationEnd="bottom 65%">
          {project.summary}
        </ScrollReveal>
        <div className="case-meta">
          <span className="mono">{project.category}</span>
          <div className="tags">
            {project.stack.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="case-actions">
          <a
            className="button button-primary"
            href={repositoryUrl(project)}
            target="_blank"
            rel="noopener noreferrer"
          >
            View source <Arrow diagonal />
          </a>
          {project.demo && (
            <a
              className="button button-outline"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open project demo <Arrow diagonal />
            </a>
          )}
        </div>
      </header>
      <div className="case-visual">
        <ProjectVisual project={project} />
      </div>
      <p className="scope-note">
        <span className="mono">PROJECT SCOPE</span>
        {project.scope}
      </p>
      <div className="case-body">
        <aside className="case-index mono" aria-label="Case study sections">
          <a href="#problem">01 / THE PROBLEM</a>
          <a href="#architecture">02 / ARCHITECTURE</a>
          <a href="#decisions">03 / DECISIONS</a>
          <a href="#outcome">04 / OUTCOME</a>
        </aside>
        <div>
          <section id="problem" className="case-section">
            <p className="eyebrow">01 / CONTEXT</p>
            <h2>The problem worth solving.</h2>
            <ScrollReveal as="p" containerClassName="lead" wordAnimationEnd="bottom 65%">
              {project.problem}
            </ScrollReveal>
            <h3>Engineering objectives</h3>
            <ul className="objectives">
              {project.objectives.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </section>
          <section id="architecture" className="case-section">
            <p className="eyebrow">02 / SYSTEM DESIGN</p>
            <h2>Follow the flow.</h2>
            <Architecture steps={project.flow} title="LOGICAL DATA FLOW" />
            <h3>Implementation details</h3>
            <ul className="objectives">
              {project.details.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </section>
          <section id="decisions" className="case-section">
            <p className="eyebrow">03 / TRADEOFFS</p>
            <h2>The reasoning behind the code.</h2>
            {project.decisions.map((decision, index) => (
              <div className="decision" key={decision.title}>
                <span className="mono">0{index + 1}</span>
                <div>
                  <h3>{decision.title}</h3>
                  <ScrollReveal as="p" wordAnimationEnd="bottom 65%">
                    {decision.text}
                  </ScrollReveal>
                </div>
              </div>
            ))}
            <h3>Engineering challenges</h3>
            <ScrollReveal as="p" wordAnimationEnd="bottom 65%">
              {project.challenges}
            </ScrollReveal>
            <h3>Security & performance boundaries</h3>
            <ScrollReveal as="p" wordAnimationEnd="bottom 65%">
              {project.security}
            </ScrollReveal>
          </section>
          <section id="outcome" className="case-section">
            <p className="eyebrow">04 / EVIDENCE</p>
            <h2>What’s there. What’s next.</h2>
            <ScrollReveal as="p" containerClassName="lead" wordAnimationEnd="bottom 65%">
              {project.result}
            </ScrollReveal>
            <ScrollReveal as="p" wordAnimationEnd="bottom 65%">
              Explore the source, documentation, and tests to inspect the implementation and its
              current boundaries.
            </ScrollReveal>
            <a
              className="text-link"
              href={repositoryUrl(project)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the repository <Arrow diagonal />
            </a>
          </section>
        </div>
      </div>
      <Link href={`/projects/${next.slug}`} className="next-project">
        <span className="mono">NEXT CASE STUDY / {next.number}</span>
        <span>
          {next.title}
          <Arrow />
        </span>
      </Link>
    </main>
  );
}

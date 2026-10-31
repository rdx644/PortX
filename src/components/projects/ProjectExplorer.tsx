'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useInView } from 'motion/react';
import { projects } from '@/data/projects';
import { OptionalEffectBoundary } from '@/components/ui/OptionalEffectBoundary';
import { useMotionSettings } from '@/components/ui/MotionPreferences';
import { Arrow } from '@/components/ui/Arrow';

const InfiniteMenu = dynamic(() => import('@/components/react-bits/InfiniteMenu'), {
  ssr: false,
  loading: () => <ProjectLinks />,
});
const items = projects.map((project) => ({
  image: `/projects/tiles/${project.slug}.svg`,
  link: `/projects/${project.slug}`,
  title: project.title,
  description: project.category.replace(' / ', ' · '),
}));
function ProjectLinks() {
  return (
    <div className="explorer-fallback">
      {projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project.slug}>
          <span className="mono">/{project.number}</span>
          <strong>{project.title}</strong>
          <Arrow diagonal />
        </Link>
      ))}
    </div>
  );
}
export function ProjectExplorer() {
  const root = useRef<HTMLDetailsElement>(null);
  const nearby = useInView(root, { once: true, margin: '250px' });
  const [open, setOpen] = useState(true);
  const [unavailable, setUnavailable] = useState(false);
  const { stopped } = useMotionSettings();
  const interactive = open && nearby && !stopped && !unavailable;
  return (
    <details
      ref={root}
      open={open}
      className="project-explorer"
      onToggle={(event) => setOpen(event.currentTarget.open)}
    >
      <summary>
        <span>
          <span className="mono">SIX SELECTED PROJECTS</span>
          <strong>Explore my projects</strong>
        </span>
        <span className="explorer-toggle" aria-hidden="true">
          ↗
        </span>
      </summary>
      <div className="explorer-body">
        <div className="explorer-meta mono">
          <span>SIX PROJECTS. DIFFERENT PERSPECTIVES.</span>
          <span>DRAG / EXPLORE / OPEN</span>
        </div>
        {interactive ? (
          <div className="explorer-stage">
            <OptionalEffectBoundary fallback={<ProjectLinks />}>
              <InfiniteMenu
                items={items}
                count={36}
                tileSize={0.72}
                roundness={0.04}
                zoom={1.2}
                pullBack={0.5}
                stretch={0.15}
                inertia={0.35}
                autoplay={0}
                intro={false}
                grayscale={false}
                dim={0.2}
                theme="dark"
                accentColor="#a6b6ff"
                backgroundColor="#22242a"
                onUnavailable={() => setUnavailable(true)}
              />
            </OptionalEffectBoundary>
          </div>
        ) : (
          <ProjectLinks />
        )}
        <p className="explorer-help">
          {interactive
            ? 'Drag to rotate, or focus the globe and use the arrow keys. Press Enter to open a project.'
            : 'Choose a project to explore its case study.'}
        </p>
      </div>
    </details>
  );
}

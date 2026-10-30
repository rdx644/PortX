import Link from 'next/link';
import { projects, repositoryUrl } from '@/data/projects';
import { Arrow } from '@/components/ui/Arrow';
import { ProjectExplorer } from './ProjectExplorer';
import { ProjectVisual } from './ProjectVisual';
export function Projects() {
  return (
    <section id="work" className="section wrap" aria-labelledby="work-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / SELECTED WORK</p>
          <h2 id="work-heading">
            Built to solve.
            <br />
            <span className="muted">Engineered to last.</span>
          </h2>
        </div>
        <p className="section-intro">
          Six explorations in reliable software.
          <br />
          The decisions behind the code.
        </p>
      </div>
      <ProjectExplorer />
      <div className="project-grid">
        {projects.map((project, index) => (
          <article
            className={`project project-${project.kind} ${index === 0 ? 'project-featured' : ''}`}
            key={project.slug}
          >
            <div className="project-art">
              <ProjectVisual project={project} />
            </div>
            <div className="project-content">
              <div className="project-category mono">
                <span>{project.category}</span>
                <span>/{project.number}</span>
              </div>
              <h3>
                <Link href={`/projects/${project.slug}`}>
                  {project.title} <Arrow diagonal />
                </Link>
              </h3>
              <p>{project.summary}</p>
              <div className="tags">
                {project.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-actions">
                <Link className="text-link" href={`/projects/${project.slug}`}>
                  Explore case study <Arrow />
                </Link>
                <a
                  href={repositoryUrl(project)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="source-link"
                  aria-label={`${project.title} source on GitHub`}
                >
                  Source ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <a
        className="all-work text-link"
        href="https://github.com/rdx644?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        More experiments, more ideas. Find them on GitHub. <Arrow diagonal />
      </a>
    </section>
  );
}

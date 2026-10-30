import { Arrow } from '@/components/ui/Arrow';
import { ProjectExplorer } from './ProjectExplorer';
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
          Explore six engineering projects.
          <br />
          Select one to open its case study.
        </p>
      </div>
      <ProjectExplorer />
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

import type { Project } from '@/data/projects';
import { Architecture } from './Architecture';
import { CursorDemo } from './CursorDemo';
export function ProjectVisual({ project }: { project: Project }) {
  if (project.kind === 'cursor') return <CursorDemo />;
  if (project.kind === 'commerce')
    return (
      <Architecture steps={project.flow} title="CHECKOUT AUTHORIZATION / SYSTEM OVERVIEW" dark />
    );
  if (project.kind === 'patch')
    return (
      <div className="patch-visual">
        <div className="diagram-top mono">
          <span>RELEASE.YML</span>
          <span>DRAFT PATCH</span>
        </div>
        <div className="code-window mono">
          <div className="code-muted">permissions:</div>
          <div className="code-remove">− &nbsp;contents: write</div>
          <div className="code-add">+ &nbsp;contents: read</div>
          <br />
          <div className="code-muted">on:</div>
          <div className="code-remove">− &nbsp;pull_request_target:</div>
          <div className="code-add">+ &nbsp;pull_request:</div>
        </div>
        <div className="diagram-bottom mono">
          <span>ILLUSTRATIVE DIFF</span>
          <span>HUMAN REVIEW REQUIRED ↗</span>
        </div>
      </div>
    );
  return (
    <Architecture
      steps={project.flow}
      title={project.kind === 'cloud' ? 'DOCUMENTED AWS ARCHITECTURE' : 'SYSTEM ARCHITECTURE'}
    />
  );
}

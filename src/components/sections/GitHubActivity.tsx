'use client';
import { useEffect, useRef, useState } from 'react';
import { Arrow } from '@/components/ui/Arrow';
import type { GitHubData } from '@/lib/github-schema';
export function GitHubActivity() {
  const section = useRef<HTMLElement>(null);
  const [data, setData] = useState<GitHubData | null>(null);
  const [status, setStatus] = useState('Recent work, in the open.');
  useEffect(() => {
    const controller = new AbortController();
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        fetch('/api/github', { signal: controller.signal })
          .then((r) => r.json())
          .then((result) => {
            if (result.available) {
              setData(result);
              setStatus('Public GitHub activity · refreshed hourly');
            } else
              setStatus('Live activity is temporarily unavailable. Explore the source on GitHub.');
          })
          .catch(() => {
            if (!controller.signal.aborted)
              setStatus('Live activity is temporarily unavailable. Explore the source on GitHub.');
          });
      },
      { rootMargin: '300px' },
    );
    if (section.current) observer.observe(section.current);
    return () => {
      observer.disconnect();
      controller.abort();
    };
  }, []);
  return (
    <section
      ref={section}
      id="github"
      className="section wrap github-section"
      aria-labelledby="github-heading"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">05 / BUILDING IN THE OPEN</p>
          <h2 id="github-heading">
            The work continues<span className="accent">.</span>
          </h2>
        </div>
        <a
          className="text-link"
          href="https://github.com/rdx644"
          target="_blank"
          rel="noopener noreferrer"
        >
          @rdx644 <Arrow diagonal />
        </a>
      </div>
      <div className="github-status mono" role="status">
        <span className="status-dot" /> {status}
        {data && <span className="repo-count">{data.publicRepos} PUBLIC REPOSITORIES</span>}
      </div>
      <div className="repo-grid">
        {data ? (
          data.repositories.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-item"
            >
              <span className="repo-icon" aria-hidden="true">
                ↳
              </span>
              <div>
                <h3>{repo.name.replaceAll('-', ' ')}</h3>
                <p className="mono">
                  {repo.language ?? 'SOURCE & DOCUMENTATION'}{' '}
                  <span>
                    UPDATED{' '}
                    {new Date(repo.updated).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                      timeZone: 'UTC',
                    })}
                  </span>
                </p>
              </div>
              <Arrow diagonal />
            </a>
          ))
        ) : (
          <div className="github-fallback">
            <span className="git-glyph" aria-hidden="true">
              git_
            </span>
            <p>
              Ideas become experiments.
              <br />
              Experiments become working systems.
            </p>
            <a
              className="text-link"
              href="https://github.com/rdx644?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore the repositories <Arrow diagonal />
            </a>
          </div>
        )}
      </div>
      {data && data.events.length > 0 && (
        <details className="activity-details">
          <summary className="mono">RECENT PUBLIC ACTIVITY +</summary>
          <ul>
            {data.events.map((event, index) => (
              <li key={`${event.repo}-${index}`}>
                <span>
                  {event.type.replace('Event', '')} · {event.repo.replace('rdx644/', '')}
                </span>
                <time dateTime={event.date}>
                  {new Date(event.date).toLocaleDateString('en-GB', { timeZone: 'UTC' })}
                </time>
              </li>
            ))}
          </ul>
        </details>
      )}
    </section>
  );
}

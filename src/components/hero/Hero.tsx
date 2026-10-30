import { Arrow } from '@/components/ui/Arrow';
import { profile } from '@/data/profile';
import { HeroVisual } from './HeroVisual';
export function Hero() {
  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow entrance">
          <span className="tiny-square" /> SHUBHAM PUTITUNDI <span className="eyebrow-rule" />
        </div>
        <h1 id="hero-title" className="entrance">
          Software
          <br />
          engineer<span className="accent">.</span>
          <br />
          <span className="hero-secondary">Cloud thinker.</span>
        </h1>
        <p className="hero-description entrance">
          Building reliable systems at the intersection of software, cloud infrastructure, and
          intelligent applications.
        </p>
        <div className="hero-actions entrance">
          <a className="button button-primary" href="#work">
            Explore my work <Arrow />
          </a>
          <a className="text-link" href={profile.resume} download>
            Download résumé <Arrow diagonal />
          </a>
        </div>
        <div className="hero-location mono">
          <span className="status-dot" /> BASED IN INDIA <span className="muted">/</span> BUILDING
          BEYOND BOUNDARIES
        </div>
      </div>
      <HeroVisual />
      <div className="hero-bottom mono">
        <span>SOFTWARE · CLOUD · INTELLIGENT SYSTEMS</span>
        <a href="#work">
          SCROLL TO EXPLORE <span>↓</span>
        </a>
        <span className="hero-index">PORTFOLIO / 2026</span>
      </div>
    </section>
  );
}

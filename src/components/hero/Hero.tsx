import type { CSSProperties } from 'react';
import { RollLabel } from '@/components/ui/RollLabel';
import { Arrow } from '@/components/ui/Arrow';
import { profile } from '@/data/profile';
import { HeroVisual } from './HeroVisual';

export function Hero() {
  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="tiny-square" /> THE PORTFOLIO OF{' '}
          <span className="hero-edition">2026 / INDIA</span>
        </p>
        <h1 id="hero-title" className="hero-name" aria-label="Shubham Putitundi">
          {['Shubham', 'Putitundi'].map((word, wordIndex) => (
            <span className="name-line" aria-hidden="true" key={word}>
              {Array.from(word).map((letter, index) => (
                <span
                  className="name-letter"
                  style={{ '--letter': index + wordIndex * 4 } as CSSProperties}
                  key={index}
                >
                  {letter}
                </span>
              ))}
              {wordIndex === 1 && <span className="name-period">.</span>}
            </span>
          ))}
        </h1>
        <p className="hero-role">
          Software engineer. <span>Cloud thinker.</span>
        </p>
        <p className="hero-description">
          Building reliable systems at the intersection of software, cloud infrastructure, and
          intelligent applications.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            <RollLabel>Explore my work</RollLabel>
            <Arrow />
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
        <span>THOUGHTFUL SYSTEMS. PLAYFUL POSSIBILITIES.</span>
        <a href="#work">
          SCROLL TO EXPLORE <span>↓</span>
        </a>
        <span className="hero-index">PORTFOLIO / 2026</span>
      </div>
    </section>
  );
}

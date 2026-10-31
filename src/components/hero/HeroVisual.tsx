'use client';

import { useRef } from 'react';
import { motion, useInView, useSpring } from 'motion/react';
import { useMotionSettings } from '@/components/ui/MotionPreferences';
import { CircularText } from '@/components/react-bits/CircularText';
import { ScrollVelocity } from '@/components/react-bits/ScrollVelocity';

export function HeroVisual() {
  const root = useRef<HTMLDivElement>(null);
  const visible = useInView(root);
  const { reduced, paused, stopped, setPaused } = useMotionSettings();
  const x = useSpring(0, { stiffness: 160, damping: 18 });
  const y = useSpring(0, { stiffness: 160, damping: 18 });
  return (
    <>
      <div
        ref={root}
        className="hero-visual"
        data-motion={stopped || !visible ? 'paused' : 'playing'}
      >
        <div className="visual-meta mono">
          <span>IDEAS → WORKING SYSTEMS</span>
          <span>01 / SP</span>
        </div>
        <div
          className="playground"
          onPointerMove={(event) => {
            if (stopped || event.pointerType !== 'mouse') return;
            const rect = event.currentTarget.getBoundingClientRect();
            x.set((event.clientX - rect.left - rect.width / 2) / 18);
            y.set((event.clientY - rect.top - rect.height / 2) / 18);
          }}
          onPointerLeave={() => {
            x.set(0);
            y.set(0);
          }}
        >
          <span className="graphic-label mono">A LITTLE CURIOUS. ALWAYS BUILDING.</span>
          <div className="orbit-stamp">
            <CircularText text="CURIOUS MIND • INTENTIONAL CODE • " />
            <span>↗</span>
          </div>
          <motion.div
            className="code-sticker"
            style={{ x: stopped ? 0 : x, y: stopped ? 0 : y }}
            aria-hidden="true"
          >
            <div className="sticker-chrome">
              <span />
              <span />
              <span />
              <span className="mono">build.ts</span>
            </div>
            <div className="sticker-code">
              <span className="code-bracket">{'{'}</span>
              <span>
                think.
                <br />
                build.
                <br />
                <em>iterate.</em>
              </span>
              <span className="code-bracket">{'}'}</span>
            </div>
            <div className="sticker-footer mono">
              <span>IDEA IN. IMPACT OUT.</span>
              <span>↗</span>
            </div>
          </motion.div>
          <svg className="graphic-star" viewBox="0 0 100 100" aria-hidden="true">
            <path d="M50 2 60 30 85 15 70 40 98 50 70 60 85 85 60 70 50 98 40 70 15 85 30 60 2 50 30 40 15 15 40 30Z" />
          </svg>
          <span className="cloud-sticker mono" aria-hidden="true">
            ☁ CLOUD THINKER
          </span>
          <span className="graphic-coordinate mono">EXPLORE. CONNECT. CREATE.</span>
        </div>
        <div className="visual-caption">
          <span className="mono">
            SMALL DETAILS.
            <br />
            CONSIDERED CONNECTIONS.
          </span>
          <div className="visual-controls">
            <button
              className="motion-toggle mono"
              type="button"
              data-anime-replay
              disabled={stopped}
              aria-label="Replay hero animation"
            >
              REPLAY ↻
            </button>
            <button
              className="motion-toggle mono"
              disabled={reduced === true}
              aria-pressed={paused || reduced === true}
              onClick={() => setPaused(!paused)}
            >
              {reduced ? 'REDUCED MOTION' : paused ? 'PLAY MOTION ↗' : 'PAUSE MOTION Ⅱ'}
            </button>
          </div>
        </div>
      </div>
      <ScrollVelocity paused={stopped} />
    </>
  );
}

'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { OptionalEffectBoundary } from '@/components/ui/OptionalEffectBoundary';
import { useMotionSettings } from '@/components/ui/MotionPreferences';
const TechText = dynamic(() => import('@/components/react-bits/TechText'), { ssr: false });

export function HeroName() {
  const root = useRef<HTMLHeadingElement>(null);
  const [engaged, setEngaged] = useState(false);
  const [fontSize, setFontSize] = useState(142);
  const { stopped } = useMotionSettings();
  useEffect(() => {
    const heading = root.current;
    if (!heading || !engaged) return;
    const observer = new ResizeObserver(() =>
      setFontSize(parseFloat(getComputedStyle(heading).fontSize)),
    );
    observer.observe(heading);
    return () => observer.disconnect();
  }, [engaged]);
  return (
    <h1
      ref={root}
      id="hero-title"
      className="hero-name"
      aria-label="Shubham Putitundi"
      onPointerEnter={(event) => {
        if (
          stopped ||
          event.pointerType !== 'mouse' ||
          !window.matchMedia('(hover: hover) and (pointer: fine)').matches
        )
          return;
        setFontSize(parseFloat(getComputedStyle(event.currentTarget).fontSize));
        setEngaged(true);
      }}
    >
      {['Shubham', 'Putitundi'].map((word, wordIndex) => (
        <span className="name-line" aria-hidden="true" key={word}>
          <span className="name-ink">
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
          {engaged && !stopped && (
            <span className="name-tech">
              <OptionalEffectBoundary>
                <TechText
                  text={word.toUpperCase() + (wordIndex ? '.' : '')}
                  fontSize={fontSize}
                  fontWeight={900}
                  letterSpacing={-0.075}
                  align="left"
                  accentColor="#a6b6ff"
                  sweep={false}
                  draggable={false}
                  clickKick={false}
                  specks={4}
                  labels={false}
                  guides={false}
                  selection={true}
                  intro="none"
                />
              </OptionalEffectBoundary>
            </span>
          )}
        </span>
      ))}
    </h1>
  );
}

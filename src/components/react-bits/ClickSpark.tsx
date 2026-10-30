'use client';

// Adapted from the supplied React Bits ClickSpark radial burst and input deduplication.
// Copyright (c) 2026 David Haz. License: docs/licenses/react-bits.md.
// Uses bounded DOM bursts and finite Web Animations; no persistent canvas or loop.
import { useEffect, useRef } from 'react';
import { useMotionSettings } from '@/components/ui/MotionPreferences';

export function ClickSpark() {
  const root = useRef<HTMLDivElement>(null);
  const { stopped } = useMotionSettings();
  useEffect(() => {
    const layer = root.current;
    if (!layer || stopped) return;
    const bursts = new Map<HTMLElement, ReturnType<typeof setTimeout>>();
    let lastPress = -Infinity;
    const remove = (burst: HTMLElement) => {
      clearTimeout(bursts.get(burst));
      burst.remove();
      bursts.delete(burst);
    };
    const spawn = (event: PointerEvent | MouseEvent) => {
      const control =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>(
              '.hero-actions .button, .motion-toggle, .project-explorer summary, .expertise-list summary, .contact-arrow',
            )
          : null;
      if (!control || control.matches(':disabled')) return;
      if (event.type === 'click' && event.detail > 0 && performance.now() - lastPress < 700) return;
      if (event.type === 'pointerdown') {
        if (event.button !== 0) return;
        lastPress = performance.now();
      }
      const r = control.getBoundingClientRect();
      const x = event.type === 'click' && event.detail === 0 ? r.left + r.width / 2 : event.clientX;
      const y = event.type === 'click' && event.detail === 0 ? r.top + r.height / 2 : event.clientY;
      const burst = document.createElement('span');
      burst.className = 'click-spark-burst';
      burst.style.left = `${x}px`;
      burst.style.top = `${y}px`;
      layer.appendChild(burst);
      for (let i = 0; i < 8; i++) {
        const spark = document.createElement('i');
        burst.appendChild(spark);
        const angle = i * 45;
        spark.animate(
          [
            { transform: `rotate(${angle}deg) translateX(4px) scaleX(1)`, opacity: 1 },
            { transform: `rotate(${angle}deg) translateX(28px) scaleX(0.1)`, opacity: 0 },
          ],
          { duration: 420, easing: 'cubic-bezier(.16, 1, .3, 1)', fill: 'forwards' },
        );
      }
      bursts.set(
        burst,
        setTimeout(() => remove(burst), 450),
      );
      if (bursts.size > 5) remove(bursts.keys().next().value!);
    };
    document.addEventListener('pointerdown', spawn);
    document.addEventListener('click', spawn);
    return () => {
      document.removeEventListener('pointerdown', spawn);
      document.removeEventListener('click', spawn);
      for (const burst of bursts.keys()) remove(burst);
    };
  }, [stopped]);
  return <div ref={root} className="click-spark-layer" aria-hidden="true" />;
}

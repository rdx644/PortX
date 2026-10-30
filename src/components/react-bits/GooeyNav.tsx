'use client';

// React Bits GooeyNav adaptation: a merging pill/droplet indicator behind real links.
// Copyright (c) 2026 David Haz. License: docs/licenses/react-bits.md.
// Keeps the existing Next links, scroll tracking, and mobile disclosure semantics.
import { useEffect, useId, useRef } from 'react';
import { useMotionSettings } from '@/components/ui/MotionPreferences';

export function GooeyNav({ activeId }: { activeId: string }) {
  const root = useRef<HTMLSpanElement>(null);
  const filter = useId().replace(/:/g, '');
  const { stopped } = useMotionSettings();
  useEffect(() => {
    const indicator = root.current;
    const nav = indicator?.parentElement;
    if (!indicator || !nav) return;
    let alive = true;
    const paint = (target: HTMLElement | null) => {
      if (!target || !window.matchMedia('(min-width: 601px)').matches) {
        indicator.style.opacity = '0';
        return;
      }
      const r = target.getBoundingClientRect();
      const parent = nav.getBoundingClientRect();
      indicator.style.transform = `translate(${r.left - parent.left}px, ${r.top - parent.top}px)`;
      indicator.style.width = `${r.width}px`;
      indicator.style.height = `${r.height}px`;
      indicator.style.opacity = '1';
      if (!stopped)
        indicator
          .querySelectorAll('i')
          .forEach((drop, index) =>
            drop.animate(
              [
                { transform: 'scale(0.8, 1.1)' },
                { transform: `translateX(${(index - 1) * 7}px) scale(1.15, .8)`, offset: 0.4 },
                { transform: 'none' },
              ],
              { duration: 380, easing: 'cubic-bezier(.22, 1, .36, 1)' },
            ),
          );
    };
    const selected = () => paint(nav.querySelector<HTMLElement>(`[data-nav-id="${activeId}"]`));
    const over = (event: Event) => {
      const target =
        event.target instanceof Element ? event.target.closest<HTMLElement>('[data-nav-id]') : null;
      if (target) paint(target);
    };
    selected();
    nav.addEventListener('pointerover', over);
    nav.addEventListener('focusin', over);
    nav.addEventListener('pointerleave', selected);
    nav.addEventListener('focusout', selected);
    const resize = new ResizeObserver(selected);
    resize.observe(nav);
    document.fonts.ready.then(() => {
      if (alive) selected();
    });
    return () => {
      alive = false;
      resize.disconnect();
      nav.removeEventListener('pointerover', over);
      nav.removeEventListener('focusin', over);
      nav.removeEventListener('pointerleave', selected);
      nav.removeEventListener('focusout', selected);
      indicator.getAnimations({ subtree: true }).forEach((animation) => animation.cancel());
    };
  }, [activeId, stopped]);
  return (
    <>
      <svg className="gooey-filter" aria-hidden="true">
        <defs>
          <filter id={filter} x="-30%" y="-50%" width="160%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -9" />
          </filter>
        </defs>
      </svg>
      <span
        ref={root}
        className="gooey-nav-indicator"
        aria-hidden="true"
        data-stopped={stopped}
        style={{ filter: `url(#${filter})` }}
      >
        <i />
        <i />
        <i />
      </span>
    </>
  );
}

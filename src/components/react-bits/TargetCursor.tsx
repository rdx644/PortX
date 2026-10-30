'use client';

// Focused adaptation of the supplied React Bits TargetCursor bracket geometry.
// Copyright (c) 2026 David Haz. License: docs/licenses/react-bits.md.
// Enhances project links only; the native pointer and keyboard focus remain visible.
import { useEffect, useRef } from 'react';
import { useMotionSettings } from '@/components/ui/MotionPreferences';

export function TargetCursor() {
  const root = useRef<HTMLDivElement>(null);
  const { stopped } = useMotionSettings();
  useEffect(() => {
    const cursor = root.current;
    if (!cursor || stopped) return;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    let target: HTMLElement | null = null;
    const hide = () => {
      target = null;
      cursor.style.opacity = '0';
    };
    const place = () => {
      if (!target?.isConnected || !fine.matches) return hide();
      const r = target.getBoundingClientRect();
      cursor.style.transform = `translate(${r.left - 6}px, ${r.top - 6}px)`;
      cursor.style.width = `${r.width + 12}px`;
      cursor.style.height = `${r.height + 12}px`;
      cursor.style.opacity = '1';
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' || !fine.matches) return hide();
      const element =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>('#work .project h3 a, #work .project-actions a')
          : null;
      if (!element) return hide();
      if (element !== target) {
        target = element;
        place();
      }
    };
    const key = (event: KeyboardEvent) => {
      if (event.key === 'Tab') hide();
    };
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('scroll', hide, { passive: true });
    window.addEventListener('blur', hide);
    window.addEventListener('keydown', key);
    document.documentElement.addEventListener('pointerleave', hide);
    fine.addEventListener('change', hide);
    return () => {
      hide();
      window.removeEventListener('pointermove', move);
      window.removeEventListener('scroll', hide);
      window.removeEventListener('blur', hide);
      window.removeEventListener('keydown', key);
      document.documentElement.removeEventListener('pointerleave', hide);
      fine.removeEventListener('change', hide);
    };
  }, [stopped]);
  return (
    <div ref={root} className="target-cursor" aria-hidden="true" data-disabled={stopped}>
      <i />
      <i />
      <i />
      <i />
    </div>
  );
}

'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useMotionSettings } from './MotionPreferences';

// Keep the extra engine off the startup path; prepare it when visitors explore eligible content.
export function AnimeEffects() {
  const pathname = usePathname();
  const { stopped } = useMotionSettings();
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('main');
    if (!root || stopped) return;
    let disposed = false;
    let scheduled = false;
    let interested = false;
    const nearby = new Set<Element>();
    let idle: number | undefined;
    let timer: number | undefined;
    let cleanup = () => {};
    const load = () => {
      void import('@/lib/anime-effects')
        .then(({ mountAnimeEffects }) => {
          if (!disposed) cleanup = mountAnimeEffects(root);
        })
        .catch(() => {
          if (!disposed)
            root.querySelectorAll<HTMLButtonElement>('[data-anime-replay]').forEach((button) => {
              button.disabled = true;
            });
        });
    };
    const detachIntent = () => {
      root.removeEventListener('pointerover', localIntent);
      root.removeEventListener('focusin', localIntent);
      root.removeEventListener('click', localIntent);
      window.removeEventListener('scroll', pageIntent);
      window.removeEventListener('keydown', pageIntent);
    };
    const schedule = () => {
      if (scheduled || !interested || !nearby.size) return;
      scheduled = true;
      observer.disconnect();
      detachIntent();
      if (typeof window.requestIdleCallback === 'function')
        idle = window.requestIdleCallback(load, { timeout: 1200 });
      else timer = window.setTimeout(load, 600);
    };
    const localIntent = (event: Event) => {
      if (
        !(event.target instanceof Element) ||
        !event.target.closest('.hero-visual, .expertise-list, .architecture')
      )
        return;
      interested = true;
      schedule();
    };
    const pageIntent = () => {
      interested = true;
      schedule();
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) nearby.add(entry.target);
          else nearby.delete(entry.target);
        });
        schedule();
      },
      { rootMargin: '300px 0px' },
    );
    root
      .querySelectorAll('.hero-visual, .expertise-list, .architecture')
      .forEach((el) => observer.observe(el));
    root.addEventListener('pointerover', localIntent);
    root.addEventListener('focusin', localIntent);
    root.addEventListener('click', localIntent);
    window.addEventListener('scroll', pageIntent, { passive: true });
    window.addEventListener('keydown', pageIntent);
    return () => {
      disposed = true;
      observer.disconnect();
      detachIntent();
      if (idle !== undefined) window.cancelIdleCallback(idle);
      if (timer !== undefined) window.clearTimeout(timer);
      cleanup();
    };
  }, [pathname, stopped]);
  return null;
}

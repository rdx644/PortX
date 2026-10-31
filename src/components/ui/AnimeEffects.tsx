'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useMotionSettings } from './MotionPreferences';

// Progressive enhancement: the library loads near eligible content, after critical rendering.
export function AnimeEffects() {
  const pathname = usePathname();
  const { stopped } = useMotionSettings();
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('main');
    if (!root || stopped) return;
    let disposed = false;
    let scheduled = false;
    let idle: number | undefined;
    let timer: number | undefined;
    let cleanup = () => {};
    const load = () => {
      void import('@/lib/anime-effects')
        .then(({ mountAnimeEffects }) => {
          if (!disposed) cleanup = mountAnimeEffects(root);
        })
        .catch(() => {
          /* Static content and native controls remain usable. */
        });
    };
    const observer = new IntersectionObserver(
      (entries) => {
        if (scheduled || !entries.some((entry) => entry.isIntersecting)) return;
        scheduled = true;
        observer.disconnect();
        if (typeof window.requestIdleCallback === 'function')
          idle = window.requestIdleCallback(load, { timeout: 1200 });
        else timer = window.setTimeout(load, 600);
      },
      { rootMargin: '300px 0px' },
    );
    root
      .querySelectorAll('.hero-visual, .expertise-list, .architecture')
      .forEach((el) => observer.observe(el));
    return () => {
      disposed = true;
      observer.disconnect();
      if (idle !== undefined) window.cancelIdleCallback(idle);
      if (timer !== undefined) window.clearTimeout(timer);
      cleanup();
    };
  }, [pathname, stopped]);
  return null;
}

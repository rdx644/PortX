'use client';

import { useEffect } from 'react';
import { useMotionSettings } from './MotionPreferences';
import { usePathname } from 'next/navigation';

// Progressive enhancement: server-rendered content is always visible without JavaScript.
export function ScrollReveals() {
  const pathname = usePathname();
  const { stopped } = useMotionSettings();
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;
    const configure = () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
      if (media.matches || stopped) return;
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            observer?.unobserve(entry.target);
            const animation = entry.target.animate(
              [
                { transform: 'translateY(28px)', opacity: 0.35 },
                { transform: 'none', opacity: 1 },
              ],
              { duration: 550, easing: 'cubic-bezier(.22, 1, .36, 1)' },
            );
            animations.add(animation);
            animation.onfinish = () => animations.delete(animation);
          }
        },
        { threshold: 0.08 },
      );
      document
        .querySelectorAll(
          'main .section-heading, main .project, .about-grid > div, .experience-grid > div, .case-section',
        )
        .forEach((element) => observer?.observe(element));
    };
    configure();
    media.addEventListener('change', configure);
    return () => {
      observer?.disconnect();
      media.removeEventListener('change', configure);
      animations.forEach((animation) => animation.cancel());
    };
  }, [pathname, stopped]);
  return null;
}

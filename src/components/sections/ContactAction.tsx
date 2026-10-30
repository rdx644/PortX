'use client';
import { LazyMotion, m } from 'motion/react';
import { useMotionSettings } from '@/components/ui/MotionPreferences';
import { Arrow } from '@/components/ui/Arrow';
import { profile } from '@/data/profile';
const loadFeatures = () => import('motion/react').then((module) => module.domAnimation);
export function ContactAction() {
  const { stopped: reduce } = useMotionSettings();
  return (
    <LazyMotion features={loadFeatures}>
      <m.a
        className="contact-arrow"
        href={`mailto:${profile.email}`}
        aria-label="Email Shubham"
        whileHover={reduce ? undefined : { scale: 1.06 }}
        whileTap={reduce ? undefined : { scale: 0.96 }}
        transition={{ duration: 0.2 }}
      >
        <Arrow diagonal />
      </m.a>
    </LazyMotion>
  );
}

'use client';
import { LazyMotion, m, useReducedMotion } from 'motion/react';
import { Arrow } from '@/components/ui/Arrow';
import { profile } from '@/data/profile';
const loadFeatures = () => import('motion/react').then((module) => module.domAnimation);
export function ContactAction() {
  const reduce = useReducedMotion();
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

'use client';

// Adapted from React Bits ScrollVelocity: https://reactbits.dev/text-animations/scroll-velocity
// Copyright (c) 2026 David Haz. License: docs/licenses/react-bits.md.
// Keeps velocity/spring/wrap behavior; adds offscreen suspension and explicit pause.
import { useEffect, useRef, useState } from 'react';
import {
  cancelFrame,
  frame,
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  type FrameData,
} from 'motion/react';

export function ScrollVelocity({ paused }: { paused: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLSpanElement>(null);
  const visible = useInView(root);
  const [width, setWidth] = useState(0);
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { damping: 50, stiffness: 400 });
  const x = useTransform(baseX, (value) =>
    width ? `${((value % width) - width) % width}px` : '0px',
  );

  useEffect(() => {
    const element = copy.current;
    if (!element) return;
    const observer = new ResizeObserver(() => setWidth(element.getBoundingClientRect().width));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !visible || !width) return;
    const update = ({ delta }: FrameData) => {
      const boost = Math.min(Math.abs(smoothVelocity.get()) / 500, 4);
      baseX.set(baseX.get() - (35 * (1 + boost) * Math.min(delta, 64)) / 1000);
    };
    frame.update(update, true);
    return () => cancelFrame(update);
  }, [paused, visible, width, baseX, smoothVelocity]);

  return (
    <div ref={root} className="velocity-strip" aria-hidden="true">
      <motion.div className="velocity-track" style={{ x: paused ? 0 : x }}>
        {Array.from({ length: 6 }, (_, index) => (
          <span ref={index === 0 ? copy : undefined} key={index}>
            SOFTWARE <b>✳</b> CLOUD <b>✳</b> INTELLIGENT SYSTEMS <b>✳</b> BUILT WITH INTENT <b>✳</b>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

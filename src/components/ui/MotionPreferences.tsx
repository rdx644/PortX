'use client';

import {
  createContext,
  useEffect,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';
import { useReducedMotionPreference } from '@/lib/use-reduced-motion';

type MotionSettings = {
  reduced: boolean;
  paused: boolean;
  stopped: boolean;
  setPaused: Dispatch<SetStateAction<boolean>>;
};
const MotionContext = createContext<MotionSettings | null>(null);
export function MotionPreferences({ children }: { children: ReactNode }) {
  const reduced = useReducedMotionPreference();
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    document.documentElement.dataset.motion = reduced || paused ? 'paused' : 'playing';
    return () => {
      delete document.documentElement.dataset.motion;
    };
  }, [reduced, paused]);
  return (
    <MotionContext.Provider value={{ reduced, paused, stopped: reduced || paused, setPaused }}>
      {children}
    </MotionContext.Provider>
  );
}
export function useMotionSettings() {
  const context = useContext(MotionContext);
  if (!context) throw new Error('Motion preferences require the portfolio provider.');
  return context;
}

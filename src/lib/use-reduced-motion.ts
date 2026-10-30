'use client';

import { useSyncExternalStore } from 'react';

const query = '(prefers-reduced-motion: reduce)';
function subscribe(listener: () => void) {
  const media = window.matchMedia(query);
  media.addEventListener('change', listener);
  return () => media.removeEventListener('change', listener);
}
const snapshot = () => window.matchMedia(query).matches;
const serverSnapshot = () => true;

// The installed Motion hook snapshots only the initial preference. This also
// responds to live OS changes and keeps the server/hydration output static.
export function useReducedMotionPreference() {
  return useSyncExternalStore(subscribe, snapshot, serverSnapshot);
}

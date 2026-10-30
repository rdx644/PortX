'use client';

import { Component, type ReactNode } from 'react';

// Decorative chunks must never replace the usable page when they fail to load.
export class OptionalEffectBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? (this.props.fallback ?? null) : this.props.children;
  }
}

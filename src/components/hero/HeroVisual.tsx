'use client';
import dynamic from 'next/dynamic';
import { Component, useEffect, useState, type ReactNode } from 'react';
import { NetworkFallback } from './NetworkFallback';
const Scene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => <NetworkFallback />,
});
class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? <NetworkFallback /> : this.props.children;
  }
}
export function HeroVisual() {
  const [enabled, setEnabled] = useState(false);
  const [angle, setAngle] = useState(0);
  useEffect(() => {
    const media = window.matchMedia(
      '(min-width: 900px) and (prefers-reduced-motion: no-preference)',
    );
    const check = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('webgl2');
      const connection = navigator as Navigator & {
        connection?: { saveData?: boolean };
        deviceMemory?: number;
      };
      setEnabled(
        Boolean(
          media.matches &&
          context &&
          !connection.connection?.saveData &&
          (connection.deviceMemory ?? 8) >= 4,
        ),
      );
      context?.getExtension('WEBGL_lose_context')?.loseContext();
    };
    check();
    media.addEventListener('change', check);
    return () => media.removeEventListener('change', check);
  }, []);
  return (
    <div className="hero-visual">
      <div className="visual-meta mono">
        <span>FIG. 01 — CONNECTED SYSTEMS</span>
        <span>XYZ / 003</span>
      </div>
      <div
        className="scene-frame"
        role="img"
        aria-label="Geometric network of connected cubes representing software infrastructure"
      >
        {enabled ? (
          <SceneBoundary>
            <Scene angle={angle} />
          </SceneBoundary>
        ) : (
          <NetworkFallback />
        )}
      </div>
      <div className="visual-caption">
        <span className="mono">
          INDEPENDENT PARTS.
          <br />
          INTELLIGENT CONNECTIONS.
        </span>
        {enabled ? (
          <button className="scene-control mono" onClick={() => setAngle((v) => v + Math.PI / 4)}>
            ROTATE ↻
          </button>
        ) : (
          <span className="mono muted">SYSTEM STUDY 01</span>
        )}
      </div>
    </div>
  );
}

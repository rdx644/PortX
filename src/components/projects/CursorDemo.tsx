'use client';
import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent, PointerEvent } from 'react';
type Point = { x: number; y: number };
export function CursorDemo() {
  const [point, setPoint] = useState<Point>({ x: 31, y: 43 });
  const [remote, setRemote] = useState<Point>({ x: 59, y: 62 });
  const [active, setActive] = useState(false);
  const latest = useRef(point);
  useEffect(() => {
    if (!active) return;
    const timer = window.setInterval(() => setRemote({ ...latest.current }), 180);
    return () => window.clearInterval(timer);
  }, [active]);
  const update = (next: Point) => {
    latest.current = next;
    setPoint(next);
    setActive(true);
  };
  const move = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    update({
      x: Math.min(88, Math.max(5, ((event.clientX - rect.left) / rect.width) * 100)),
      y: Math.min(78, Math.max(20, ((event.clientY - rect.top) / rect.height) * 100)),
    });
  };
  const key = (event: KeyboardEvent<HTMLDivElement>) => {
    const directions: Record<string, Point> = {
      ArrowLeft: { x: -5, y: 0 },
      ArrowRight: { x: 5, y: 0 },
      ArrowUp: { x: 0, y: -5 },
      ArrowDown: { x: 0, y: 5 },
    };
    const delta = directions[event.key];
    if (delta) {
      event.preventDefault();
      update({
        x: Math.max(5, Math.min(88, point.x + delta.x)),
        y: Math.max(20, Math.min(78, point.y + delta.y)),
      });
    }
  };
  return (
    <div
      className="cursor-demo"
      tabIndex={0}
      role="group"
      aria-label="Cursor synchronization simulation. Move your pointer or use arrow keys."
      onPointerMove={move}
      onPointerLeave={() => setActive(false)}
      onBlur={() => setActive(false)}
      onKeyDown={key}
    >
      <div className="diagram-top mono">
        <span>
          <span className="status-dot" /> SHARED CANVAS
        </span>
        <span>LOCAL SIMULATION</span>
      </div>
      <div className="canvas-cross" aria-hidden="true">
        +
      </div>
      <span className="demo-cursor local" style={{ left: `${point.x}%`, top: `${point.y}%` }}>
        <Cursor />
        <span>You</span>
      </span>
      <span className="demo-cursor remote" style={{ left: `${remote.x}%`, top: `${remote.y}%` }}>
        <Cursor />
        <span>Remote</span>
      </span>
      <div className="diagram-bottom mono">
        <span>MOVE YOUR POINTER OR USE ARROW KEYS</span>
        <span>2 SIMULATED PEERS</span>
      </div>
    </div>
  );
}
function Cursor() {
  return (
    <svg width="23" height="29" viewBox="0 0 23 29" aria-hidden="true">
      <path
        d="M2 2v23l6-7 5 10 4-2-5-10 9-1Z"
        fill="currentColor"
        stroke="#f5f5f0"
        strokeWidth="1.5"
      />
    </svg>
  );
}

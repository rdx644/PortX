'use client';
import { useState } from 'react';
export function Architecture({
  steps,
  title,
  dark = false,
}: {
  steps: string[];
  title: string;
  dark?: boolean;
}) {
  const [selected, setSelected] = useState(0);
  return (
    <div className={`architecture ${dark ? 'architecture-dark' : ''}`}>
      <div className="diagram-top mono">
        <span>{title}</span>
        <span>FLOW / {String(steps.length).padStart(2, '0')}</span>
      </div>
      <ol className="flow-nodes">
        {steps.map((step, index) => (
          <li key={step}>
            <button aria-pressed={selected === index} onClick={() => setSelected(index)}>
              <span className="mono">{String(index + 1).padStart(2, '0')}</span>
              <span>{step}</span>
              <span aria-hidden="true">{index < steps.length - 1 ? '→' : '↗'}</span>
            </button>
          </li>
        ))}
      </ol>
      <div className="diagram-bottom mono" aria-live="polite">
        <span>
          STEP {selected + 1} — {steps[selected].toUpperCase()}
        </span>
        <span>
          {selected === 0
            ? 'INPUT BOUNDARY'
            : selected === steps.length - 1
              ? 'OUTPUT BOUNDARY'
              : `FROM ${steps[selected - 1].toUpperCase()}`}
        </span>
      </div>
    </div>
  );
}

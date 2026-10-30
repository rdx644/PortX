'use client';

// Adapted from React Bits CircularText: https://reactbits.dev/text-animations/circular-text
// Copyright (c) 2026 David Haz. License: docs/licenses/react-bits.md.
// Retains the evenly spaced glyph ring; CSS handles composited rotation and pause states.
export function CircularText({ text }: { text: string }) {
  const letters = Array.from(text);
  return (
    <div className="circular-text" aria-hidden="true">
      {letters.map((letter, index) => (
        <span key={index} style={{ transform: `rotate(${(360 / letters.length) * index}deg)` }}>
          {letter}
        </span>
      ))}
    </div>
  );
}

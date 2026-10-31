import { ImageResponse } from 'next/og';
export const alt = 'Shubham Putitundi — Software engineer. Cloud thinker.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#151619',
        color: '#f4f0e6',
        display: 'flex',
        flexDirection: 'column',
        padding: '50px 65px',
        border: '8px solid #7e8492',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20 }}>
        <span
          style={{
            background: '#f9d648',
            color: '#151619',
            border: '2px solid #191919',
            padding: '8px 12px',
          }}
        >
          SP.
        </span>
        <span>SOFTWARE · CLOUD · INTELLIGENT SYSTEMS</span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: 65,
          fontSize: 102,
          fontWeight: 900,
          letterSpacing: -5,
          lineHeight: 1.05,
        }}
      >
        <span>SHUBHAM</span>
        <span style={{ color: '#a6b6ff' }}>PUTITUNDI.</span>
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: 40,
          borderTop: '3px solid #7e8492',
          paddingTop: 25,
          fontSize: 18,
          color: '#b9bab6',
        }}
      >
        Software engineer. Cloud thinker.
      </div>
    </div>,
    size,
  );
}

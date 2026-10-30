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
        background: '#faf7ed',
        color: '#191919',
        display: 'flex',
        flexDirection: 'column',
        padding: '50px 65px',
        border: '8px solid #191919',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20 }}>
        <span style={{ background: '#f9d648', border: '2px solid #191919', padding: '8px 12px' }}>
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
        <span style={{ color: '#244bd7' }}>PUTITUNDI.</span>
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: 40,
          borderTop: '3px solid #191919',
          paddingTop: 25,
          fontSize: 18,
          color: '#60645e',
        }}
      >
        Software engineer. Cloud thinker.
      </div>
    </div>,
    size,
  );
}

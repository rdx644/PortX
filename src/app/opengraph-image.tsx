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
        background: '#f5f5f0',
        color: '#171918',
        display: 'flex',
        flexDirection: 'column',
        padding: '65px 75px',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20 }}>
        <span>SP.</span>
        <span>SHUBHAM PUTITUNDI</span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: 90,
          fontSize: 88,
          letterSpacing: -5,
          lineHeight: 1.05,
        }}
      >
        <span>Software engineer.</span>
        <span style={{ color: '#315cdb' }}>Cloud thinker.</span>
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: 65,
          borderTop: '1px solid #dedfd8',
          paddingTop: 25,
          fontSize: 18,
          color: '#60645e',
        }}
      >
        SOFTWARE · CLOUD · INTELLIGENT SYSTEMS
      </div>
    </div>,
    size,
  );
}

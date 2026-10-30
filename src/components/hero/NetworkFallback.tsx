const nodes = [
  [260, 55],
  [140, 125],
  [370, 125],
  [75, 245],
  [255, 225],
  [440, 245],
  [140, 355],
  [365, 355],
  [255, 440],
];
const edges = [
  [0, 1],
  [0, 2],
  [0, 4],
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [2, 5],
  [3, 4],
  [3, 6],
  [4, 5],
  [4, 6],
  [4, 7],
  [4, 8],
  [5, 7],
  [6, 7],
  [6, 8],
  [7, 8],
];
export function NetworkFallback() {
  return (
    <svg className="network-fallback" viewBox="0 0 520 490" aria-hidden="true">
      <ellipse cx="260" cy="450" rx="140" ry="18" fill="#171918" opacity=".04" />
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke={i % 5 === 0 ? '#315cdb' : '#b5b9b0'}
          strokeWidth="1"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <g key={i} transform={`translate(${x},${y})`}>
          <path
            d="m0 -16 14 8v16l-14 8-14-8V-8Z"
            fill={i === 4 ? '#315cdb' : '#e1e3db'}
            stroke={i === 4 ? '#315cdb' : '#959b90'}
          />
          <path d="M-14-8 0 0l14-8M0 0v16" fill="none" stroke={i === 4 ? '#91a8ed' : '#b5b9b0'} />
        </g>
      ))}
    </svg>
  );
}

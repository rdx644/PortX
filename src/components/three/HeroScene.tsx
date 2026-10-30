'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Line, Edges } from '@react-three/drei';
import { useState } from 'react';
import { NetworkFallback } from '@/components/hero/NetworkFallback';
const points: [number, number, number][] = [
  [-1.2, 1.2, -1.2],
  [1.2, 1.2, -1.2],
  [1.2, -1.2, -1.2],
  [-1.2, -1.2, -1.2],
  [-1.2, 1.2, 1.2],
  [1.2, 1.2, 1.2],
  [1.2, -1.2, 1.2],
  [-1.2, -1.2, 1.2],
  [0, 0, 0],
  [0, 2.1, 0],
  [0, -2.1, 0],
  [-2.1, 0, 0],
  [2.1, 0, 0],
];
const connections = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 4],
  [0, 4],
  [1, 5],
  [2, 6],
  [3, 7],
  [9, 0],
  [9, 1],
  [9, 4],
  [9, 5],
  [10, 2],
  [10, 3],
  [10, 6],
  [10, 7],
  [11, 0],
  [11, 3],
  [11, 4],
  [11, 7],
  [12, 1],
  [12, 2],
  [12, 5],
  [12, 6],
  [8, 0],
  [8, 2],
  [8, 5],
  [8, 7],
];
export default function HeroScene({ angle }: { angle: number }) {
  const [lost, setLost] = useState(false);
  if (lost) return <NetworkFallback />;
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.5]}
      camera={{ position: [5, 3.5, 7], fov: 36 }}
      gl={{ antialias: true, alpha: true }}
      fallback={<NetworkFallback />}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener(
          'webglcontextlost',
          (event) => {
            event.preventDefault();
            setLost(true);
          },
          { once: true },
        );
      }}
    >
      <ambientLight intensity={1.7} />
      <directionalLight position={[5, 8, 5]} intensity={3} />
      <group rotation={[0.08, angle, -0.08]}>
        {connections.map(([a, b], i) => (
          <Line
            key={i}
            points={[points[a], points[b]]}
            color={i > 27 ? '#315cdb' : '#aeb3a8'}
            lineWidth={0.8}
            transparent
            opacity={0.85}
          />
        ))}
        {points.map((point, i) => (
          <mesh key={i} position={point} scale={i === 8 ? 0.48 : 0.21}>
            <boxGeometry />
            <meshStandardMaterial
              color={i === 8 || i === 9 ? '#315cdb' : '#d9ddd1'}
              roughness={0.42}
              metalness={0.16}
            />
            <Edges color={i === 8 || i === 9 ? '#234ab9' : '#919889'} />
          </mesh>
        ))}
      </group>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={0.5}
        maxPolarAngle={2.3}
        enableDamping
        dampingFactor={0.1}
      />
    </Canvas>
  );
}

'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import HeadModel from './HeadModel';
import type { ParallaxPos } from '@/lib/useParallax';

function HeadRig({ parallax }: { parallax: ParallaxPos }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const targetY = parallax.x * 1.05 + Math.sin(t * 0.22) * 0.05;
    const targetX = parallax.y * -0.5 + Math.sin(t * 0.18) * 0.03;
    ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.1;
    ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.1;
  });

  return (
    <group ref={ref} scale={4.3} position={[0, 0.18, 0]}>
      <HeadModel url="/models/head.obj" />
    </group>
  );
}

export default function HumanoidMesh({ parallax }: { parallax: ParallaxPos }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.6], fov: 34 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 4, 5]} intensity={1.4} color="#FFFFFF" />
      <directionalLight position={[-4, -1, 2]} intensity={0.35} color="#BEDFF5" />
      <Suspense fallback={null}>
        <HeadRig parallax={parallax} />
      </Suspense>
    </Canvas>
  );
}

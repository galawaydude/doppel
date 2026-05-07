'use client';

import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { Edges } from '@react-three/drei';
import { useMemo } from 'react';
import * as THREE from 'three';

const TOON_COLOR = '#7BBEEC';
const EDGE_COLOR = '#0B3D6B';

function makeToonGradient() {
  const data = new Uint8Array([60, 130, 200, 255]);
  const tex = new THREE.DataTexture(data, data.length, 1, THREE.RedFormat);
  tex.needsUpdate = true;
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  return tex;
}

export default function HeadModel({ url }: { url: string }) {
  const obj = useLoader(OBJLoader, url);

  const geometry = useMemo<THREE.BufferGeometry | null>(() => {
    let geo: THREE.BufferGeometry | null = null;
    obj.traverse((child) => {
      if (!geo && (child as THREE.Mesh).isMesh) {
        geo = (child as THREE.Mesh).geometry.clone();
      }
    });
    if (geo) {
      const g = geo as THREE.BufferGeometry;
      g.computeVertexNormals();
      g.center();
    }
    return geo;
  }, [obj]);

  const gradientMap = useMemo(() => makeToonGradient(), []);

  if (!geometry) return null;

  return (
    <mesh geometry={geometry}>
      <meshToonMaterial color={TOON_COLOR} gradientMap={gradientMap} />
      <Edges threshold={18} color={EDGE_COLOR} lineWidth={1} />
    </mesh>
  );
}

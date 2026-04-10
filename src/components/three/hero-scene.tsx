"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function FloatingObject() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.12;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.18;
  });

  return (
    <mesh ref={meshRef} position={[1.6, 0, 0]}>
      <icosahedronGeometry args={[1.25, 3]} />
      <meshStandardMaterial
        color="#2D8EFF"
        emissive="#1B2D5B"
        metalness={0.8}
        roughness={0.12}
      />
    </mesh>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 opacity-95">
      <Canvas camera={{ position: [0, 0, 5], fov: 55 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.45} />
          <directionalLight position={[6, 6, 4]} intensity={1.1} color="#2D8EFF" />
          <directionalLight position={[-6, -4, -3]} intensity={0.6} color="#E8511A" />
          <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.8}>
            <FloatingObject />
          </Float>
          <Stars radius={80} depth={40} count={2500} factor={4} saturation={0} fade speed={1} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
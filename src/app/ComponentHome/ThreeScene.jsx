"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

// Subtle particle field
function Particles() {
  const points = useRef();
  const particleCount = 500;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
      points.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#22c55e"
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Rotating globe
function Globe() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[5, 0, -8]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial
        color="#22c55e"
        emissive="#16a34a"
        emissiveIntensity={0.3}
        roughness={0.5}
        metalness={0.5}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

// Main scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#22c55e" />
      
      <Stars radius={50} depth={50} count={800} factor={2} fade speed={0.5} />
      <Particles />
      <Globe />
    </>
  );
}

// Main component export
export default function ThreeScene() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}


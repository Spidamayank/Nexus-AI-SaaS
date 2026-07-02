"use client";

import { Canvas, useFrame} from "@react-three/fiber";
import { useRef } from "react";
import { Float } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import Ring from "./Ring";


function Cube() {
  const cubeRef = useRef<any>(null);

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.003;
      cubeRef.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshPhysicalMaterial
        color="#60a5fa"
        metalness={0.2}
        roughness={0}
        transmission={1}
        thickness={1.5}
        clearcoat={1}
        clearcoatRoughness={0}
        ior={1.5}
    />
    </mesh>
  );
}


export default function HeroScene() {
  return (
    <Canvas 
        camera={{
            position: [0, 0, 6],
            fov: 60,
        }}
    >
        <ambientLight intensity={2} />
        <directionalLight position={[2, 2, 5]} />
        <pointLight 
            position={[0, 3, 3]}
            intensity={20}
            color="#60a5fa"
        />
        
        <Float
            speed={2}
            rotationIntensity={1}
            floatIntensity={2}
        >
            <Cube />
            <Ring />
            <Environment preset="city" />
        </Float>
      
    </Canvas>
  );
}
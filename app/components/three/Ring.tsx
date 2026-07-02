"use client";

export default function Ring() {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[2.5, 0.05, 16, 100]} />
      <meshStandardMaterial
        color="#60a5fa"
        emissive="#2563eb"
        emissiveIntensity={1}
      />
    </mesh>
  );
}
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Tomato({ url }: { url: string }) {
  const ref = useRef<THREE.Object3D>(null);
  const [spin, setSpin] = useState(false);
  const gltf = useGLTF(url);

  // Spin animation
  useFrame(() => {
    if (spin && ref.current) {
      ref.current.rotation.y += 0.05;
    }
  });

  return (
    <primitive
      object={gltf.scene}
      ref={ref}
      onClick={() => setSpin(!spin)}
      scale={1.5}
      position={[0, 0, 0]}
    />
  );
}

export default function Hero3D() {
  return (
    <div className="h-screen w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Tomato url="/tomato.glb" />
      </Canvas>
    </div>
  );
}

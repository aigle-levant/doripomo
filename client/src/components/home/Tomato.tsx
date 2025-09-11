import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Tomato({ url, onClick }: { url: string; onClick?: () => void }) {
  const ref = useRef<THREE.Object3D>(null);
  const [spin, setSpin] = useState(false);
  const gltf = useGLTF(url);

  useFrame(() => {
    if (spin && ref.current) {
      ref.current.rotation.y += 0.05;
    }
  });

  return (
    <primitive
      object={gltf.scene}
      ref={ref}
      scale={0.4}
      position={[0, -2.3, 0]}
      onClick={() => {
        setSpin(!spin);
        if (onClick) onClick();
      }}
    />
  );
}

export default function Hero3D({
  onTomatoClick,
}: {
  onTomatoClick?: () => void;
}) {
  return (
    <div
      id="3d-component-wrapper"
      className="relative flex items-center justify-center h-[300px] w-full"
    >
      <div
        id="canvas-wrapper"
        className="relative z-2 h-full w-full max-w-[400px] mx-auto"
      >
        <Canvas
          camera={{ position: [0, 0, 4] }} // move camera back
          id="canvas"
          className="w-full h-full"
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <Tomato url="/tomato.glb" onClick={onTomatoClick} />
        </Canvas>
      </div>
    </div>
  );
}

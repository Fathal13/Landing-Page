"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Bounds, Center } from "@react-three/drei";
import PizzaModel from "./PizzaModel";

export default function Scene() {
  return (
    <Canvas
      frameloop="demand"
      camera={ { position: [0, 1, 1], fov: 30} }
      dpr={[1, 1.5]}
      className="h-full w-full"
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} intensity={1} />

      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.2}>
            <Center>
                <PizzaModel />
            </Center>
        </Bounds>
      </Suspense>

      <OrbitControls makeDefault enableZoom={false} />
    </Canvas>
  );
}
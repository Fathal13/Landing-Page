"use client";

import { useGLTF } from "@react-three/drei";

export default function PizzaModel() {
  const { scene } = useGLTF("/models/pizza-optimized.glb");
  return <primitive object={scene}/>;
}

useGLTF.preload("/models/pizza-optimized.glb");
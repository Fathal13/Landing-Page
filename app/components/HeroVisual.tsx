"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import PizzaPoster from "./PizzaPoster";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

export default function HeroVisual() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof requestIdleCallback !== "undefined") {
      const id = requestIdleCallback(() => setReady(true), { timeout: 2500 });
      return () => cancelIdleCallback(id);
    }
    const t = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return ready ? <Scene /> : <PizzaPoster />;
}
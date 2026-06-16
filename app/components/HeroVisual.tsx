"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useIsDesktop } from "../lib/useIsDesktop";
import PizzaPoster from "./PizzaPoster";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

export default function HeroVisual() {
  const isDesktop = useIsDesktop();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!isDesktop) return; // mobile: three.js TIDAK akan pernah dimuat
    if (typeof requestIdleCallback !== "undefined") {
      const id = requestIdleCallback(() => setReady(true), { timeout: 2500 });
      return () => cancelIdleCallback(id);
    }
    const t = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(t);
  }, [isDesktop]);

  if (!isDesktop || !ready) {
    return <PizzaPoster />;
  }
  return <Scene />;
}
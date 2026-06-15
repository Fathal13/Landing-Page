"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { getWhatsAppLink } from "../lib/whatsapp";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

function PizzaPoster() {
  return (
    <div className="flex h-full w-full items-center justify-center text-7xl">
      🍕
    </div>
  );
}

// Loads the 3D only once the browser is idle, so it doesn't block first paint
function Pizza3D() {
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

export default function Hero() {
  return (
    <section className="min-h-screen bg-cream flex flex-col items-center justify-center px-6 text-center">
      <div className="mb-8 h-64 w-64 sm:h-80 sm:w-80">
        <Pizza3D />
      </div>

      <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl md:text-6xl">
        Your pizza, <span className="text-primary">one message away.</span>
      </h1>

      <p className="mt-4 max-w-md text-base text-ink/70 sm:text-lg">
        Skip the apps and the wait — just chat and we'll handle the rest.
      </p>

      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        Chat to order 🍕
      </a>
    </section>
  );
}
import { headers } from "next/headers";
import { getWhatsAppLink } from "../lib/whatsapp";
import PizzaPoster from "./PizzaPoster";
import HeroVisual from "./HeroVisual";

export default async function Hero() {
  const userAgent = (await headers()).get("user-agent") ?? "";
  const isMobile = /Android|iPhone|iPad|iPod|Mobile|Opera Mini|IEMobile/i.test(userAgent);

  return (
    <section className="min-h-screen bg-cream flex flex-col items-center justify-center px-6 text-center">
      <div className="mb-8 h-64 w-64 sm:h-80 sm:w-80">
        {isMobile ? <PizzaPoster /> : <HeroVisual />}
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
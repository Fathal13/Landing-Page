import { getWhatsAppLink } from "../lib/whatsapp";

export default function Reinforcement() {
  return (
    <section className="bg-gradient-to-br from-secondary via-primary to-accent px-6 py-20 text-center text-white">
      <h2 className="mx-auto max-w-2xl text-3xl font-extrabold sm:text-4xl">
        Hot, fresh, and made just for you 🍕
      </h2>
      <p className="mx-auto mt-4 max-w-md text-white/90">
        Hundreds of happy customers order in seconds. No apps, no accounts —
        just a quick message and your pizza's on the way.
      </p>

      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        Chat to order now
      </a>
    </section>
  );
}
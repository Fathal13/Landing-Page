import { getWhatsAppLink } from "../lib/whatsapp";

export default function ContactButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat to order on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
    >
      <span className="text-xl">💬</span>
      <span className="hidden sm:inline">Chat to order</span>
    </a>
  );
}
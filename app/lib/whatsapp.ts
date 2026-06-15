// Your WhatsApp number in international format, digits only.
// Example: Indonesia 0812-3456-7890 → "6281234567890"
const PHONE_NUMBER = "62895338204435"; // 👈 replace with your real number

const MESSAGE = "Hi! 🍕 I'd like to order a pizza. Can you help me?";

export function getWhatsAppLink() {
  const encoded = encodeURIComponent(MESSAGE);
  return `https://wa.me/${PHONE_NUMBER}?text=${encoded}`;
}
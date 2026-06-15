const benefits = [
  { icon: "⚡", title: "Fast", text: "Order in seconds, delivered while it's hot." },
  { icon: "😋", title: "Tasty", text: "Fresh, made-to-order, always satisfying." },
  { icon: "😊", title: "Happy", text: "No apps, no hassle — just pizza that makes your day." },
];

export default function Benefits() {
  return (
    <section className="bg-white px-6 py-16 sm:py-24">
      <h2 className="text-center text-3xl font-bold text-ink sm:text-4xl">
        Why you'll love it
      </h2>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="rounded-2xl bg-cream p-8 text-center shadow-sm transition-transform hover:-translate-y-1"
          >
            <div className="text-5xl">{b.icon}</div>
            <h3 className="mt-4 text-xl font-bold text-primary">{b.title}</h3>
            <p className="mt-2 text-ink/70">{b.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
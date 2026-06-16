export default function PizzaPoster() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <img
        src="/images/pizza-poster.webp"
        alt="Pizza pepperoni yang menggugah selera"
        width={320}
        height={320}
        fetchPriority="high"
        decoding="async"
        className="pizza-float h-full w-full object-contain"
      />
    </div>
  );
}
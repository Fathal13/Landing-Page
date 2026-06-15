import Image from "next/image";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import ContactButton from "./components/ContactButton";
import Reinforcement from "./components/Reinforcement";

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Reinforcement />
      <ContactButton />
    </main>
  );
}

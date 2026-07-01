import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import Pricing from "./components/home/Pricing";

export default function Home() {
  return (
    <main className="pt-24">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
}
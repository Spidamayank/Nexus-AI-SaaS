import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import Pricing from "./components/home/Pricing";
import Testimonials from "./components/home/Testimonials";
import Footer from "./components/home/Footer";

export default function Home() {
  return (
    <main className="pt-24">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
}
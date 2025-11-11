import Navbar from "./ComponentHome/Navbar";
import Hero from "./ComponentHome/Hero";
import Features from "./ComponentHome/Features";
import Impact from "./ComponentHome/Impact";
import Footer from "./ComponentHome/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Impact />

      <Footer />
    </div>
  );
}

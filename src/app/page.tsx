import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Goals from "@/components/Goals";
import Gallery from "@/components/Gallery";
import Sponsorship from "@/components/Sponsorship";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <Achievements />
      <Goals />
      <Gallery />
      <Sponsorship />
      <Contact />
      <Footer />
    </main>
  );
}

import { AboutUs } from "@/components/sections/AboutUs";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <AboutUs />
      <Footer />
    </main>
  );
}

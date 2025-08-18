import { Footer } from "@/components/Footer";
import { GemCard } from "@/components/GemCard";
import { Hero } from "@/components/Hero";
import  Navbar  from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <GemCard />
      <Footer />
    </div>
  );
}

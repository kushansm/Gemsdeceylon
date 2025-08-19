import { AboutUs } from "@/components/AboutUs";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import  Navbar  from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Footer />
    </div>
  );
}

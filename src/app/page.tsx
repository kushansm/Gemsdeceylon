import { AboutUs } from "@/components/sections/AboutUs";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/layout/Hero";
import  Navbar  from "@/components/layout/Navbar";

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

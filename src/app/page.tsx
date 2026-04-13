import { AboutUs } from "@/components/sections/AboutUs";
import { GemShopSection } from "@/components/sections/GemShopSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CustomerRequirement } from "@/components/sections/CustomerRequirement";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <AboutUs />
      <GemShopSection />
      <BlogSection />
      <CustomerRequirement />
      <Footer />
    </main>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GemImg from "../../../public/assets/home/bluesapphire.png";

export const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-screen h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Immersive Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.05),transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent,#0A0A0A)] z-10" />

      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center max-w-[1600px] mx-auto px-8 lg:px-16 w-full gap-12 lg:gap-24">

        {/* Left Text Content */}
        <div className={`flex-1 flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-yellow-500/50" />
            <span className="text-yellow-500 font-bold uppercase tracking-[0.8em] text-[10px]">Pure Legacy since 1970</span>
          </div>

          <h1 className="mozilla-headline-main text-4xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-8">
            GEMS DE <br /> <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">CEYLON</span>
          </h1>

          <p className="text-base md:text-2xl text-white/40 font-light max-w-xl leading-relaxed mb-12 uppercase tracking-[0.2em]">
            Sapphires from the source. <br />
            <span className="text-white/20">Where nature meets master craftsmanship.</span>
          </p>

          <Link href="/shop" className="group relative">
            <div className="absolute -inset-1 bg-yellow-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative px-12 py-5 bg-white text-black font-black rounded-full text-xs uppercase tracking-[0.5em] hover:bg-yellow-500 transition-all shadow-2xl flex items-center gap-4">
              Explore Collection
              <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </Link>
        </div>

        {/* Right Gem Image */}
        <div className={`flex-1 relative w-full transition-all duration-1000 delay-300 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="relative w-full aspect-square max-w-[600px] mx-auto">
            {/* Ambient Image Glow */}
            <div className="absolute inset-0 bg-yellow-500/10 blur-[100px] rounded-full scale-75 animate-pulse" />

            <Image
              src={GemImg}
              alt="Ceylon Sapphire"
              fill
              className="object-contain drop-shadow-[0_0_80px_rgba(255,255,255,0.08)] relative z-10"
              priority
            />
          </div>

          {/* Decorative Corner Element */}
          <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-white/5 pointer-events-none" />
        </div>
      </div>

      {/* Brand Heritage Indicators */}
      <div className="absolute bottom-12 left-0 w-full z-20 px-8 lg:px-16 grid grid-cols-2 md:flex md:justify-between items-end gap-y-8 md:gap-0 opacity-70 select-none pointer-events-none">
        {[
          "Ethically Mined",
          "Fair Trade",
          "Trust Worthy",
          "Expertly Cut",
          "Story Documentary"
        ].map((text) => (
          <div key={text} className="flex flex-col items-center gap-2 md:gap-4">
            <span className="text-[7px] lg:text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.5em] text-white text-center">{text}</span>
            <div className="w-px h-4 lg:h-12 bg-gradient-to-b from-white to-transparent opacity-50" />
          </div>
        ))}
      </div>
    </section>
  );
};

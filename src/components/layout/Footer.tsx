"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/logo2.png";

export const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5">
      {/* Immersive Top Section */}
      <div className="max-w-[1600px] mx-auto pt-32 pb-24 px-8 lg:px-16 flex flex-col lg:flex-row justify-between gap-16 lg:gap-32">

        {/* Brand Soul */}
        <div className="flex-1 max-w-xl">
          <Link href="/" className="flex items-center gap-4 mb-10 group">
            <div className="relative w-16 h-16 transition-transform group-hover:scale-110">
              <Image
                src={Logo}
                alt="Gems De Ceylon Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white tracking-widest uppercase leading-none underline decoration-yellow-500 decoration-4 underline-offset-8">Gems De Ceylon</span>
              <span className="text-[10px] font-bold text-white/30 tracking-[0.5em] uppercase mt-2">Private Limited</span>
            </div>
          </Link>
          <p className="text-white/30 text-lg font-light leading-relaxed">
            From deep within Sri Lanka’s earth to the heights of global luxury,
            Gems De Ceylon preserves the legacy of authentic mining and
            precision cutting.
          </p>
        </div>

        {/* Global Boutique Info */}
        <div className="flex flex-col md:flex-row gap-16 lg:gap-32">
          <div className="space-y-8">
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.5em]">The Flagship</h4>
            <div className="text-white/40 text-[11px] uppercase tracking-widest leading-loose">
              <p>No.35, Sri Mahindarama Mawatha</p>
              <p>Dandeniya, Opanayaka</p>
              <p>Sri Lanka, 70350</p>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.5em]">Concierge</h4>
            <div className="flex flex-col gap-4 text-white text-[11px] font-black uppercase tracking-widest">
              <a href="#" className="hover:text-yellow-500 transition-colors">WhatsApp</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">Instagram</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">YouTube</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">Email Us</a>
            </div>
          </div>
        </div>
      </div>

      {/* Minimalism Branding Footer */}
      <div className="px-8 lg:px-16 py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-[11px] font-black text-white uppercase tracking-[0.8em]">
        <span>Exclusive Source</span>
        <span>Premium Grade</span>
        <span className="opacity-100">Gems De Ceylon</span>
        <span className="opacity-100">© 2019</span>
      </div>
    </footer>
  );
};

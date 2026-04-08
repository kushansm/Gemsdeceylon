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
              <span className="text-[10px] font-bold text-white/30 tracking-[0.5em] uppercase mt-4">Private Limited</span>
            </div>
          </Link>
          <p className="text-white/30 text-lg font-light leading-relaxed">
            From deep within Sri Lanka’s earth to the heights of global luxury,
            Gems De Ceylon preserves the legacy of authentic mining and
            precision cutting.
          </p>
        </div>

        {/* Global Boutique Info */}
        <div className="flex flex-col md:flex-row gap-16 lg:gap-32 items-start">
          <div className="space-y-6 text-center">
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.5em]">The Flagship</h4>
            <div className="w-full h-48 rounded-[2rem] overflow-hidden border border-white/10 group relative">
              <iframe
                src="https://maps.google.com/maps?q=6.4600,80.6600&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.5)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a
                href="https://maps.app.goo.gl/BAmSVNotfsk6JwGM8"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[10px] font-black text-white uppercase tracking-widest backdrop-blur-sm"
              >
                Expand on Google Maps ↗
              </a>
            </div>
          </div>

          <div className="h-36 mt-7 flex flex-col justify-between">
            <a href="https://wa.me/94713085242" target="_blank" rel="noopener noreferrer" className="text-white text-[11px] font-black uppercase tracking-widest hover:text-yellow-500 transition-colors">WhatsApp</a>
            <a href="https://www.instagram.com/gems_de_ceylon/" target="_blank" rel="noopener noreferrer" className="text-white text-[11px] font-black uppercase tracking-widest hover:text-yellow-500 transition-colors">Instagram</a>
            <a href="https://www.facebook.com/ceylongemsinternational/" target="_blank" rel="noopener noreferrer" className="text-white text-[11px] font-black uppercase tracking-widest hover:text-yellow-500 transition-colors">Facebook</a>
            <a href="mailto:ceylongemsinternationalinfo@gmail.com" className="text-white text-[11px] font-black uppercase tracking-widest hover:text-yellow-500 transition-colors">Email Us</a>
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

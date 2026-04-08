"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/logo2.png";

type NavLink = {
  name: string;
  href: string;
};

const LINKS: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About Us", href: "/#aboutus" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 lg:px-16 ${isScrolled ? "py-4 bg-[#0A0A0A]/80 backdrop-blur-2xl border-b border-white/5" : "py-10 bg-transparent"
        }`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-12 h-12 lg:w-16 lg:h-16 transition-transform group-hover:scale-110">
            <Image
              src={Logo}
              alt="Gems De Ceylon Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg lg:text-2xl font-black text-white tracking-widest uppercase leading-none">Gems De <span className="text-yellow-500">Ceylon</span></span>
            <span className="text-[10px] font-bold text-white/30 tracking-[0.4em] uppercase">Private Limited</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50 hover:text-yellow-500 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-yellow-500 transition-all group-hover:w-full" />
            </Link>
          ))}

          <Link href="/shop">
            <button className="px-10 py-4 bg-white text-black font-black text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-yellow-500 transition-all shadow-xl shadow-white/5">
              Boutique
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <div className={`w-8 h-[1px] bg-white transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-8 h-[1px] bg-white transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`} />
          <div className={`w-8 h-[1px] bg-white transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#0A0A0A] flex flex-col items-center justify-center gap-10 transition-transform duration-700 z-[60] ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-10 right-10 text-4xl text-white">×</button>
        {LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-4xl font-black text-white uppercase tracking-tighter hover:text-yellow-500 transition-all"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

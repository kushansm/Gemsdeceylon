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
  { name: "Blog", href: "/#blog" },
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
            <span className="text-base lg:text-2xl font-black text-white tracking-widest uppercase leading-none">Gems De <span className="text-yellow-500">Ceylon</span></span>
            <span className="text-[8px] lg:text-[10px] font-bold text-white/30 tracking-[0.4em] uppercase mt-2 lg:mt-3">Private Limited</span>
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
          className="md:hidden w-12 h-12 flex flex-col items-center justify-center gap-2 relative z-[70]"
          aria-label="Toggle Menu"
        >
          <div className={`w-8 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
          <div className={`w-8 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
          <div className={`w-8 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu - Glassy Appearance */}
      <div className={`fixed inset-0 bg-[#0A0A0A]/40 backdrop-blur-2xl flex flex-col items-center justify-center gap-12 transition-all duration-700 z-[60] ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        {/* Subtle decorative glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

        {LINKS.map((link, index) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-5xl font-black text-white uppercase tracking-tighter hover:text-yellow-500 transition-all transform ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {link.name}
          </Link>
        ))}
        <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)}>
          <button className={`mt-8 px-12 py-5 bg-white text-black font-black text-xs uppercase tracking-[0.4em] rounded-full hover:bg-yellow-500 transition-all transform ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            style={{ transitionDelay: `${LINKS.length * 100}ms` }}>
            Explore Boutique
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

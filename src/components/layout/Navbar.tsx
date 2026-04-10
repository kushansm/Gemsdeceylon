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
  { name: "Inquiry", href: "/#requirement" },
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
              sizes="(max-width: 1024px) 48px, 64px"
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
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative z-[100] bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
          aria-label="Toggle Menu"
        >
          <div className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
          <div className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Modern Glassmorphism Mobile Menu */}
      <div
        className={`fixed inset-0 z-[80] transition-all duration-500 ${isMobileMenuOpen ? "visible" : "invisible"}`}
      >
        {/* Backdrop overlay with blur */}
        <div
          className={`absolute inset-0 bg-[#0A0A0A]/40 backdrop-blur-sm transition-opacity duration-500 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[280px] bg-black/40 backdrop-blur-2xl border-l border-white/5 shadow-2xl flex flex-col pt-32 px-8 transition-transform duration-500 ease-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em] mb-4">Navigations</span>

            {LINKS.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`group flex items-center gap-4 py-4 px-5 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-300 transform ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"}`}
                style={{ transitionDelay: `${index * 50 + 200}ms` }}
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-yellow-500/10 transition-colors duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-white/40 group-hover:text-yellow-500 transition-colors duration-300"
                  >
                    {link.name === "Home" && <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />}
                    {link.name === "Shop" && <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />}
                    {link.name === "About Us" && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />}
                    {link.name === "Blog" && <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />}
                    {link.name === "Inquiry" && <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />}
                  </svg>
                </div>
                <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors tracking-tight">
                  {link.name}
                </span>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-500 text-xs">→</span>
              </Link>
            ))}
          </div>

          <div className="mt-auto mb-10 space-y-8">
            <div className="h-px bg-white/5 w-full" />
            <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)}>
              <button className={`w-full py-5 bg-white text-black font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-yellow-500 transition-all shadow-xl shadow-white/5 transform ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                style={{ transitionDelay: `${LINKS.length * 50 + 300}ms` }}>
                Explore Boutique
              </button>
            </Link>

            <div className={`flex flex-col gap-2 transform ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${LINKS.length * 50 + 400}ms` }}>
              <span className="text-[8px] font-bold text-white/10 uppercase tracking-[0.3em]">Exotic Gem Mining Since 1970</span>
              <span className="text-[8px] font-bold text-white/10 uppercase tracking-[0.3em]">SRI LANKA</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

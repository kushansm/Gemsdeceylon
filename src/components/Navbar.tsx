"use client";

import { useState } from "react";
import Image from "next/image";

type NavLink = { name: string; href: string };

const LINKS: NavLink[] = [
  { name: "Home", href: "#hero" },
  { name: "GemCard", href: "#gemcard" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black backdrop-blur-sm shadow z-50">
      <div className="max-w-8xl mx-auto px-8 py-3 flex items-center justify-between">
        {/* Logo + Brand (always visible left side) */}
        <a
          href="#hero"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="bg-white hover:bg-yellow-400 p-2 rounded-full">
            <Image
              src="/assets/logo2.png"
              alt="logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="text-xl md:text-2xl font-bold text-white hover:text-yellow-400 transition-colors">
            Gems De Ceylon
          </span>
        </a>

        {/* Desktop menu (right side) */}
        <ul className="hidden md:flex gap-8">
          {LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-white hover:text-yellow-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger menu button (right side) */}
        <button
          className="md:hidden p-2 rounded bg-white hover:bg-yellow-400 text-white"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d={
                open
                  ? "M6 18L18 6M6 6l12 12" // X icon
                  : "M4 6h16M4 12h16M4 18h16" // hamburger icon
              }
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 z-50">
          <ul className="flex flex-col">
            {LINKS.map((link) => (
              <li key={link.name} className="border-b border-gray-800">
                <a
                  href={link.href}
                  className="block px-6 py-3 text-white hover:text-yellow-400 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

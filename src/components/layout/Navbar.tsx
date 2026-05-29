"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE, NAV_LINKS } from "@/lib/constants";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary-dark/95 backdrop-blur-xl shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo.png"
            alt={SITE.name}
            width={48}
            height={48}
            className="mix-blend-screen transition-transform duration-300 group-hover:scale-110"
            priority
          />
          <div className="flex flex-col">
            <span
              className={`text-lg font-bold font-[var(--font-heading)] tracking-wide transition-colors duration-300 ${
                scrolled ? "text-cream" : "text-white"
              }`}
            >
              {SITE.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-medium">
              Tinteggiature
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 cursor-pointer group ${
                scrolled
                  ? "text-cream/80 hover:text-gold"
                  : "text-white/80 hover:text-gold"
              }`}
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-3/4" />
            </Link>
          ))}
          <a
            href={SITE.phoneLink}
            className="ml-4 flex items-center gap-2 btn-gold px-5 py-2.5 rounded text-sm font-semibold tracking-wide cursor-pointer"
          >
            <Phone size={14} />
            {SITE.phone}
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors cursor-pointer ${
            scrolled ? "text-cream" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-primary-dark/98 backdrop-blur-xl border-t border-gold/10 mx-4 mt-2 rounded-lg overflow-hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-3.5 text-cream/80 hover:text-gold hover:bg-white/5 transition-all cursor-pointer border-b border-white/5 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE.phoneLink}
            className="flex items-center gap-2 px-6 py-3.5 bg-gold text-primary-dark font-semibold cursor-pointer"
          >
            <Phone size={16} />
            Chiama Ora
          </a>
        </div>
      </div>
    </nav>
  );
}

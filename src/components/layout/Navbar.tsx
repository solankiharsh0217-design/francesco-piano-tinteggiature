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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt={SITE.name}
            width={50}
            height={50}
            className={`mix-blend-screen ${scrolled ? "" : ""}`}
            priority
          />
          <span
            className={`text-xl font-bold font-[var(--font-heading)] ${
              scrolled ? "text-primary-dark" : "text-white"
            }`}
          >
            {SITE.name}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-cta cursor-pointer ${
                scrolled ? "text-primary-dark" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE.phoneLink}
            className="flex items-center gap-2 bg-cta hover:bg-cta-hover text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200 cursor-pointer"
          >
            <Phone size={16} />
            {SITE.phone}
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 rounded-lg cursor-pointer ${
            scrolled ? "text-primary-dark" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2 mx-4 rounded-lg overflow-hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-3 text-primary-dark hover:bg-bg transition-colors cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE.phoneLink}
            className="flex items-center gap-2 px-6 py-3 bg-cta text-white font-semibold cursor-pointer"
          >
            <Phone size={16} />
            Chiama Ora
          </a>
        </div>
      )}
    </nav>
  );
}

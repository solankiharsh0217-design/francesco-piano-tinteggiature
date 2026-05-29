import Link from "next/link";
import Image from "next/image";
import { SITE, NAV_LINKS } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark relative overflow-hidden">
      {/* Decorative gold line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.png"
                alt={SITE.name}
                width={44}
                height={44}
                className="mix-blend-screen"
              />
              <div>
                <h3 className="text-xl font-bold text-cream font-[var(--font-heading)] tracking-wide">
                  {SITE.name}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium">
                  Tinteggiature
                </span>
              </div>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed max-w-sm mb-8">
              Tinteggiature, verniciature, stucchi, decorazioni, pitture ed
              intonaci. Artigiano con sede a Bergamo, lavoro con passione,
              impegno e puntualità da oltre 20 anni.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={SITE.phoneLink}
                className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm font-medium"
              >
                <Phone size={14} />
                {SITE.phone}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-6 font-semibold">
              Navigazione
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/50 hover:text-gold transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-6 font-semibold">
              Contatti
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={SITE.phoneLink}
                  className="flex items-start gap-3 text-sm text-cream/50 hover:text-gold transition-colors group"
                >
                  <Phone size={14} className="mt-0.5 shrink-0 text-gold/60" />
                  <span>{SITE.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailLink}
                  className="flex items-start gap-3 text-sm text-cream/50 hover:text-gold transition-colors group break-all"
                >
                  <Mail size={14} className="mt-0.5 shrink-0 text-gold/60" />
                  <span>{SITE.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-cream/50 hover:text-gold transition-colors group"
                >
                  <MapPin size={14} className="mt-0.5 shrink-0 text-gold/60" />
                  <span>{SITE.address}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-cream/50">
                  <Clock size={14} className="mt-0.5 shrink-0 text-gold/60" />
                  <span>{SITE.hours}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs">
            © {new Date().getFullYear()} {SITE.fullName}. Tutti i diritti
            riservati.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-cream/20 text-xs">
              P.IVA: {SITE.piva}
            </p>
            <a
              href={SITE.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/30 hover:text-gold text-xs flex items-center gap-1 transition-colors"
            >
              Sito Ufficiale
              <ArrowUpRight size={10} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 font-[var(--font-heading)]">
              {SITE.name}
            </h3>
            <p className="text-blue-200 text-sm leading-relaxed">
              Tinteggiature, verniciature, stucchi, decorazioni, pitture ed
              intonaci. Artigiano con sede a Bergamo, lavoro con passione,
              impegno e puntualità.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-[var(--font-heading)]">
              Navigazione
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-[var(--font-heading)]">
              Contatti
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-blue-200">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <a href={SITE.phoneLink} className="hover:text-white transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-blue-200">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <a href={SITE.emailLink} className="hover:text-white transition-colors break-all">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-blue-200">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {SITE.address}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-blue-200">
                <Clock size={16} className="mt-0.5 shrink-0" />
                <span>{SITE.hours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-[var(--font-heading)]">
              Orari
            </h4>
            <p className="text-blue-200 text-sm mb-4">{SITE.hours}</p>
            <p className="text-blue-300 text-xs">
              P.IVA: {SITE.piva}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} {SITE.fullName}. Tutti i diritti riservati.
          </p>
          <p className="text-blue-400 text-xs">
            {SITE.address} - P.IVA: {SITE.piva}
          </p>
        </div>
      </div>
    </footer>
  );
}

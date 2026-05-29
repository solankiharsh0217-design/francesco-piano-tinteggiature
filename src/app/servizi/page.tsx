import Image from "next/image";
import { SERVICES } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Paintbrush, Brush, Palette, Hammer, Home, Layers, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

const SERVICE_ICONS = [Paintbrush, Brush, Palette, Hammer, Home, Layers];

export const metadata: Metadata = {
  title: "Servizi | Francesco Piano Tinteggiature",
  description:
    "Scopri tutti i servizi di Francesco Piano: tinteggiature, verniciature, decorazioni, imbiancature, isolamenti e pavimentazioni a Bergamo.",
};

export default function ServiziPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">
                Servizi
              </span>
              <div className="h-[1px] w-12 bg-gold" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-cream mb-6 font-[var(--font-heading)]">
              I Nostri <span className="text-gold-gradient">Servizi</span>
            </h1>
            <p className="text-cream/50 text-lg max-w-2xl mx-auto">
              Tinteggiature, verniciature, decorazioni e molto altro. Materiali
              innovativi e sistemi di applicazione all&apos;avanguardia.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {SERVICES.map((service, i) => {
              const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal key={service.title}>
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}
                  >
                    <div className={`${isEven ? "" : "lg:order-2"}`}>
                      <div className="relative rounded-xl overflow-hidden shadow-2xl img-zoom">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={600}
                          height={400}
                          className="object-cover w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent" />
                      </div>
                    </div>
                    <div className={`${isEven ? "" : "lg:order-1"}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-primary-dark flex items-center justify-center shadow-lg">
                          <Icon size={24} className="text-gold" />
                        </div>
                        <div>
                          <span className="text-gold text-xs font-medium tracking-[0.2em] uppercase block mb-1">
                            Servizio {String(i + 1).padStart(2, "0")}
                          </span>
                          <h2 className="text-3xl md:text-4xl font-bold text-primary font-[var(--font-heading)]">
                            {service.title}
                          </h2>
                        </div>
                      </div>
                      <div className="w-16 h-[2px] bg-gold/30 mb-6" />
                      <p className="text-text-muted leading-relaxed mb-8 text-lg">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-center gap-4 text-text-muted"
                          >
                            <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contatti"
                        className="inline-flex items-center gap-3 btn-gold px-8 py-3.5 font-semibold tracking-wide cursor-pointer"
                      >
                        Richiedi Preventivo
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import { SERVICES } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Paintbrush, Brush, Palette, Hammer, Home, Layers } from "lucide-react";
import type { Metadata } from "next";

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
      <section className="relative pt-32 pb-20 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[var(--font-heading)]">
              I Nostri Servizi
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Tinteggiature, verniciature, decorazioni e molto altro. Materiali
              innovativi e sistemi di applicazione all&apos;avanguardia.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {SERVICES.map((service, i) => {
              const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal key={service.title}>
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      isEven ? "" : "lg:direction-rtl"
                    }`}
                  >
                    <div className={isEven ? "" : "lg:order-2"}>
                      <div className="relative h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className={isEven ? "" : "lg:order-1"}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-white shadow-md flex items-center justify-center">
                          <Icon size={24} className="text-primary" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary-dark font-[var(--font-heading)]">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-text-muted leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-center gap-3 text-text-muted"
                          >
                            <span className="w-2 h-2 rounded-full bg-cta shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
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

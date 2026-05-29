import Image from "next/image";
import Link from "next/link";
import { SITE, SERVICES, STATS, GALLERY_IMAGES } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Phone,
  ArrowRight,
  Paintbrush,
  Brush,
  Palette,
  Hammer,
  Home,
  Layers,
} from "lucide-react";

const SERVICE_ICONS = [Paintbrush, Brush, Palette, Hammer, Home, Layers];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero1.jpg"
            alt="Francesco Piano Tinteggiature"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <ScrollReveal>
            <p className="text-blue-200 text-lg mb-4 font-medium tracking-wide uppercase">
              Artigiano a Bergamo
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[var(--font-heading)] leading-tight">
              Francesco Piano
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-2xl">
              Tinteggiature, verniciature, stucchi, decorazioni, pitture ed
              intonaci
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="text-blue-200 mb-8 max-w-xl">
              Imbiancature civili e industriali, restauri conservativi attraverso
              l&apos;uso di materiali innovativi e sistemi di applicazione
              all&apos;avanguardia.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={SITE.phoneLink}
                className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 animate-pulse-glow cursor-pointer"
              >
                <Phone size={20} />
                Chiama Ora
              </a>
              <Link
                href="/servizi"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-primary-dark px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 cursor-pointer"
              >
                Scopri i Servizi
                <ArrowRight size={20} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-[var(--font-heading)]">
                    {stat.value}
                  </div>
                  <div className="text-text-muted text-sm">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-cta font-semibold text-sm uppercase tracking-wider mb-2">
                Servizi
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark font-[var(--font-heading)]">
                I Nostri Servizi
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => {
              const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
              return (
                <ScrollReveal key={service.title} delay={i * 100}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover h-full">
                    <div className="relative h-48">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-bg flex items-center justify-center">
                          <Icon size={20} className="text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-primary-dark font-[var(--font-heading)]">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-text-muted text-sm mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-1">
                        {service.features.map((f) => (
                          <li
                            key={f}
                            className="text-sm text-text-muted flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cta shrink-0" />
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

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <Image
                  src="/images/hero5.jpg"
                  alt="Francesco Piano al lavoro"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-cta text-white px-6 py-3 rounded-lg shadow-lg">
                  <span className="text-2xl font-bold font-[var(--font-heading)]">
                    20+
                  </span>
                  <span className="text-sm block">Anni di Esperienza</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <p className="text-cta font-semibold text-sm uppercase tracking-wider mb-2">
                  Chi Siamo
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6 font-[var(--font-heading)]">
                  Francesco Piano
                </h2>
                <p className="text-text-muted mb-4 leading-relaxed">
                  Un artigiano con sede a Bergamo che svolge il proprio lavoro
                  con passione, impegno e puntualità. Insieme a Francesco potrai
                  decidere di imbiancare i muri della tua abitazione o ufficio,
                  valutare se alcune pareti possono stare bene con una certa
                  sfumatura o stile, verniciare serramenti o altri elementi
                  d&apos;arredo.
                </p>
                <p className="text-text-muted mb-6 leading-relaxed">
                  Grazie ai tanti materiali e colori a disposizione puoi dare
                  libero spazio alla tua immaginazione. I tanti anni di
                  esperienza in questo campo consentono a Francesco di poter
                  assecondare le tante e uniche richieste di tutti i Clienti
                  soddisfatti.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={SITE.phoneLink}
                    className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 cursor-pointer"
                  >
                    <Phone size={18} />
                    Contattaci
                  </a>
                  <Link
                    href="/gallery"
                    className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer"
                  >
                    Vedi Lavori
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-cta font-semibold text-sm uppercase tracking-wider mb-2">
                Portfolio
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark font-[var(--font-heading)]">
                Alcuni Lavori
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY_IMAGES.slice(0, 8).map((img, i) => (
              <ScrollReveal key={img.src} delay={i * 50}>
                <div className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                      {img.alt}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-8">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 cursor-pointer"
              >
                Vedi Tutta la Gallery
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero3.jpg"
            alt="Contattaci"
            fill
            className="object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-[var(--font-heading)]">
              Hai un Progetto in Mente?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Contattaci per un preventivo gratuito. Francesco è a tua
              disposizione per trasformare i tuoi ambienti.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={SITE.phoneLink}
                className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 cursor-pointer"
              >
                <Phone size={20} />
                {SITE.phone}
              </a>
              <Link
                href="/contatti"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-primary-dark px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 cursor-pointer"
              >
                Richiedi Preventivo
                <ArrowRight size={20} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

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
  Star,
  CheckCircle2,
  Award,
  Clock,
} from "lucide-react";

const SERVICE_ICONS = [Paintbrush, Brush, Palette, Hammer, Home, Layers];

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Cinematic */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero1.jpg"
            alt="Francesco Piano Tinteggiature"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay-dark absolute inset-0" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-gold" />
                <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">
                  Artigiano a Bergamo
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-[var(--font-heading)] leading-[1.1]">
                Francesco
                <span className="block text-gold-gradient">Piano</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-xl md:text-2xl text-cream/70 mb-4 font-light tracking-wide">
                Tinteggiature, verniciature, stucchi, decorazioni
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-cream/50 mb-10 max-w-xl text-lg leading-relaxed">
                Imbiancature civili e industriali, restauri conservativi
                attraverso l&apos;uso di materiali innovativi e sistemi di
                applicazione all&apos;avanguardia.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={SITE.phoneLink}
                  className="inline-flex items-center justify-center gap-3 btn-gold px-8 py-4 text-lg font-semibold tracking-wide cursor-pointer"
                >
                  <Phone size={20} />
                  Chiama Ora
                </a>
                <Link
                  href="/servizi"
                  className="inline-flex items-center justify-center gap-3 btn-outline-gold px-8 py-4 text-lg font-semibold tracking-wide cursor-pointer"
                >
                  Scopri i Servizi
                  <ArrowRight size={20} />
                </Link>
              </div>
            </ScrollReveal>

            {/* Trust Badges */}
            <ScrollReveal delay={500}>
              <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 text-cream/40 text-sm">
                  <CheckCircle2 size={16} className="text-gold/60" />
                  Preventivo Gratuito
                </div>
                <div className="flex items-center gap-2 text-cream/40 text-sm">
                  <Clock size={16} className="text-gold/60" />
                  Puntualità Garantita
                </div>
                <div className="flex items-center gap-2 text-cream/40 text-sm">
                  <Award size={16} className="text-gold/60" />
                  20+ Anni di Esperienza
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-cream/30 text-xs tracking-[0.2em] uppercase">
            Scorri
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-gold/50 to-transparent" />
        </div>
      </section>

      {/* Stats Section - Premium Dark */}
      <section className="bg-primary-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="text-center group">
                  <div className="stat-number text-4xl md:text-5xl lg:text-6xl mb-3">
                    {stat.value}
                  </div>
                  <div className="text-cream/40 text-sm tracking-wide uppercase">
                    {stat.label}
                  </div>
                  <div className="w-8 h-[1px] bg-gold/30 mx-auto mt-4 group-hover:w-16 transition-all duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase block mb-4">
                Servizi
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary font-[var(--font-heading)] mb-6">
                I Nostri Servizi
              </h2>
              <div className="w-16 h-[2px] bg-gold mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
              return (
                <ScrollReveal key={service.title} delay={i * 80}>
                  <div className="card-premium rounded-xl overflow-hidden h-full group">
                    <div className="relative h-56 img-zoom">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded bg-gold/20 backdrop-blur-sm flex items-center justify-center">
                            <Icon size={16} className="text-gold" />
                          </div>
                          <h3 className="text-xl font-bold text-white font-[var(--font-heading)]">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-text-muted text-sm mb-5 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2.5">
                        {service.features.map((f) => (
                          <li
                            key={f}
                            className="text-sm text-text-muted flex items-center gap-3"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 pt-5 border-t border-gray-100">
                        <Link
                          href="/contatti"
                          className="text-gold text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer"
                        >
                          Richiedi Preventivo
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section - Split */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/hero5.jpg"
                    alt="Francesco Piano al lavoro"
                    width={600}
                    height={450}
                    className="object-cover w-full h-auto"
                  />
                </div>
                {/* Floating Experience Badge */}
                <div className="absolute -bottom-6 -right-6 md:right-6">
                  <div className="bg-primary-dark text-cream px-8 py-5 rounded-xl shadow-2xl">
                    <div className="stat-number text-3xl font-bold font-[var(--font-heading)]">
                      20+
                    </div>
                    <div className="text-cream/60 text-xs tracking-wider uppercase mt-1">
                      Anni di Esperienza
                    </div>
                  </div>
                </div>
                {/* Decorative frame */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/30 rounded-tl-xl" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase block mb-4">
                  Chi Siamo
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-[var(--font-heading)] leading-tight">
                  L&apos;Arte della
                  <span className="text-gold-gradient block">Tinteggiatura</span>
                </h2>
                <div className="space-y-5 mb-10">
                  <p className="text-text-muted leading-relaxed">
                    Un artigiano con sede a Bergamo che svolge il proprio lavoro
                    con passione, impegno e puntualità. Insieme a Francesco
                    potrai decidere di imbiancare i muri della tua abitazione o
                    ufficio, valutare se alcune pareti possono stare bene con una
                    certa sfumatura o stile.
                  </p>
                  <p className="text-text-muted leading-relaxed">
                    Grazie ai tanti materiali e colori a disposizione puoi dare
                    libero spazio alla tua immaginazione. I tanti anni di
                    esperienza in questo campo consentono a Francesco di poter
                    assecondare le tante e uniche richieste di tutti i Clienti
                    soddisfatti.
                  </p>
                </div>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {[
                    "Materiali Premium",
                    "Consulenza Gratuita",
                    "Puntualità Garantita",
                    "Risultati Perfetti",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-text-muted"
                    >
                      <Star size={14} className="text-gold shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={SITE.phoneLink}
                    className="inline-flex items-center justify-center gap-3 btn-gold px-8 py-4 font-semibold tracking-wide cursor-pointer"
                  >
                    <Phone size={18} />
                    Contattaci
                  </a>
                  <Link
                    href="/gallery"
                    className="inline-flex items-center justify-center gap-3 btn-outline-gold px-8 py-4 font-semibold tracking-wide cursor-pointer"
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

      {/* Gallery Preview - Masonry Style */}
      <section className="py-24 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase block mb-4">
                Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-cream font-[var(--font-heading)] mb-6">
                Alcuni Lavori
              </h2>
              <div className="w-16 h-[2px] bg-gold mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {GALLERY_IMAGES.slice(0, 8).map((img, i) => (
              <ScrollReveal key={img.src} delay={i * 60}>
                <div
                  className={`relative overflow-hidden group cursor-pointer ${
                    i === 0 || i === 5 ? "row-span-2 aspect-[3/4]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-5">
                    <div>
                      <div className="w-8 h-[1px] bg-gold mb-3 group-hover:w-12 transition-all duration-500" />
                      <span className="text-cream text-sm font-medium block">
                        {img.alt}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-3 btn-gold px-10 py-4 font-semibold tracking-wide cursor-pointer"
              >
                Vedi Tutta la Gallery
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonial / Trust Section */}
      <section className="py-24 bg-bg relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-gold fill-gold" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-[var(--font-heading)] text-primary leading-relaxed mb-8 italic">
              &ldquo;Grazie ai tanti anni di esperienza, Francesco riesce ad
              assecondare le tante e uniche richieste di tutti i Clienti
              soddisfatti.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[1px] bg-gold/30" />
              <span className="text-text-muted text-sm tracking-wider uppercase">
                Clienti Soddisfatti
              </span>
              <div className="w-12 h-[1px] bg-gold/30" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section - Cinematic */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero3.jpg"
            alt="Contattaci"
            fill
            className="object-cover"
          />
          <div className="hero-overlay-dark absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase block mb-6">
              Prevendita
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-6 font-[var(--font-heading)]">
              Hai un Progetto in Mente?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-cream/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Contattaci per un preventivo gratuito. Francesco è a tua
              disposizione per trasformare i tuoi ambienti con creatività e
              professionalità.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={SITE.phoneLink}
                className="inline-flex items-center justify-center gap-3 btn-gold px-10 py-5 text-lg font-semibold tracking-wide cursor-pointer"
              >
                <Phone size={22} />
                {SITE.phone}
              </a>
              <Link
                href="/contatti"
                className="inline-flex items-center justify-center gap-3 btn-outline-gold px-10 py-5 text-lg font-semibold tracking-wide cursor-pointer"
              >
                Richiedi Preventivo
                <ArrowRight size={22} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

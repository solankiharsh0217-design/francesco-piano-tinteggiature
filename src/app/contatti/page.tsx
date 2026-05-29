import { SITE } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti | Francesco Piano Tinteggiature",
  description:
    "Contatta Francesco Piano per tinteggiature, verniciature e decorazioni a Bergamo. Preventivo gratuito.",
};

export default function ContattiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">
                Contatti
              </span>
              <div className="h-[1px] w-12 bg-gold" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-cream mb-6 font-[var(--font-heading)]">
              <span className="text-gold-gradient">Contattaci</span>
            </h1>
            <p className="text-cream/50 text-lg max-w-2xl mx-auto">
              Francesco è a tua disposizione. Di seguito le informazioni di
              contatto.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <ScrollReveal>
              <div className="card-premium rounded-2xl p-10 h-full">
                <h2 className="text-2xl font-bold text-primary mb-2 font-[var(--font-heading)]">
                  Informazioni di Contatto
                </h2>
                <div className="w-12 h-[2px] bg-gold mb-8" />
                <div className="space-y-8">
                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-primary-dark flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Phone size={18} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1 text-sm uppercase tracking-wider">
                        Telefono
                      </h3>
                      <a
                        href={SITE.phoneLink}
                        className="text-text-muted hover:text-gold transition-colors text-lg"
                      >
                        {SITE.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-primary-dark flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Mail size={18} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1 text-sm uppercase tracking-wider">
                        Email
                      </h3>
                      <a
                        href={SITE.emailLink}
                        className="text-text-muted hover:text-gold transition-colors block break-all"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-primary-dark flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin size={18} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1 text-sm uppercase tracking-wider">
                        Indirizzo
                      </h3>
                      <a
                        href={SITE.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-gold transition-colors"
                      >
                        {SITE.address}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-primary-dark flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1 text-sm uppercase tracking-wider">
                        Orari
                      </h3>
                      <p className="text-text-muted">{SITE.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA Card */}
            <ScrollReveal delay={100}>
              <div className="bg-primary-dark rounded-2xl p-10 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-cream mb-2 font-[var(--font-heading)]">
                    Richiedi Preventivo
                  </h2>
                  <div className="w-12 h-[2px] bg-gold mb-8" />
                  <p className="text-cream/50 mb-8 leading-relaxed">
                    Contattaci per preventivo gratuito o per qualsiasi
                    informazione sui nostri servizi.
                  </p>
                  <div className="space-y-4">
                    <a
                      href={SITE.phoneLink}
                      className="flex items-center gap-4 btn-gold px-6 py-4 rounded-xl font-semibold cursor-pointer"
                    >
                      <Phone size={20} />
                      Chiama Ora
                      <ArrowUpRight size={16} className="ml-auto" />
                    </a>
                    <a
                      href={SITE.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 bg-green-600 hover:bg-green-500 text-white px-6 py-4 rounded-xl font-semibold transition-colors cursor-pointer"
                    >
                      <MessageCircle size={20} />
                      WhatsApp
                      <ArrowUpRight size={16} className="ml-auto" />
                    </a>
                    <a
                      href={SITE.emailLink}
                      className="flex items-center gap-4 btn-outline-gold px-6 py-4 rounded-xl font-semibold cursor-pointer"
                    >
                      <Mail size={20} />
                      Invia Email
                      <ArrowUpRight size={16} className="ml-auto" />
                    </a>
                  </div>

                  <div className="mt-10 pt-8 border-t border-white/10">
                    <p className="text-cream/30 text-sm">
                      <strong className="text-gold/60">P.IVA:</strong>{" "}
                      {SITE.piva}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Map */}
          <ScrollReveal>
            <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2785.5!2d9.66!3d45.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQxJzI0LjAiTiA5wrAzOSczNi4wIkU!5e0!3m2!1sit!2sit!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa - Francesco Piano Tinteggiature"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

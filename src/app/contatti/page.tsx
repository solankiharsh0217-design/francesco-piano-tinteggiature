import { SITE } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
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
      <section className="relative pt-32 pb-20 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[var(--font-heading)]">
              Contatti
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Francesco è a tua disposizione. Di seguito le informazioni di
              contatto.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-bold text-primary-dark mb-6 font-[var(--font-heading)]">
                  Informazioni di Contatto
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-bg flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-dark mb-1">
                        Telefono
                      </h3>
                      <a
                        href={SITE.phoneLink}
                        className="text-text-muted hover:text-cta transition-colors"
                      >
                        {SITE.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-bg flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-dark mb-1">
                        Email
                      </h3>
                      <a
                        href={SITE.emailLink}
                        className="text-text-muted hover:text-cta transition-colors block break-all"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-bg flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-dark mb-1">
                        Indirizzo
                      </h3>
                      <a
                        href={SITE.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-cta transition-colors"
                      >
                        {SITE.address}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-bg flex items-center justify-center shrink-0">
                      <Clock size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-dark mb-1">
                        Orari
                      </h3>
                      <p className="text-text-muted">{SITE.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-bold text-primary-dark mb-6 font-[var(--font-heading)]">
                  Richiedi Preventivo
                </h2>
                <p className="text-text-muted mb-6">
                  Contattaci per preventivo gratuito o per qualsiasi
                  informazione sui nostri servizi.
                </p>
                <div className="space-y-4">
                  <a
                    href={SITE.phoneLink}
                    className="flex items-center gap-3 bg-cta hover:bg-cta-hover text-white px-6 py-4 rounded-lg font-semibold transition-colors duration-200 cursor-pointer"
                  >
                    <Phone size={20} />
                    Chiama Ora
                  </a>
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-semibold transition-colors duration-200 cursor-pointer"
                  >
                    <MessageCircle size={20} />
                    WhatsApp
                  </a>
                  <a
                    href={SITE.emailLink}
                    className="flex items-center gap-3 border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-4 rounded-lg font-semibold transition-all duration-200 cursor-pointer"
                  >
                    <Mail size={20} />
                    Invia Email
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-text-muted text-sm">
                    <strong>P.IVA:</strong> {SITE.piva}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Map */}
          <ScrollReveal>
            <div className="mt-12 rounded-xl overflow-hidden shadow-md">
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

import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Francesco Piano Tinteggiature",
  description:
    "Visualizza i lavori realizzati da Francesco Piano: tinteggiature, verniciature, decorazioni e imbiancature a Bergamo.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">
                Portfolio
              </span>
              <div className="h-[1px] w-12 bg-gold" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-cream mb-6 font-[var(--font-heading)]">
              La Nostra <span className="text-gold-gradient">Gallery</span>
            </h1>
            <p className="text-cream/50 text-lg max-w-2xl mx-auto">
              Alcune fotografie realizzate ai lavori di Francesco.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {GALLERY_IMAGES.map((img, i) => {
              const isLarge = i === 0 || i === 4 || i === 8 || i === 12;
              return (
                <ScrollReveal key={img.src} delay={i * 40}>
                  <div
                    className={`relative overflow-hidden group cursor-pointer ${
                      isLarge ? "md:row-span-2 aspect-[3/4]" : "aspect-square"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-5">
                      <div>
                        <div className="w-8 h-[1px] bg-gold mb-3 group-hover:w-12 transition-all duration-500" />
                        <span className="text-cream text-sm font-medium block">
                          {img.alt}
                        </span>
                      </div>
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

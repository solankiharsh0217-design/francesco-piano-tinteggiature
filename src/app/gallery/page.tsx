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
      <section className="relative pt-32 pb-20 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[var(--font-heading)]">
              Gallery
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Alcuni fotografie realizzate ai lavori di Francesco.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <ScrollReveal key={img.src} delay={i * 50}>
                <div className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer shadow-md">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">
                      {img.alt}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export const SITE = {
  name: "Francesco Piano",
  fullName: "Francesco Piano Tinteggiature",
  tagline: "Tinteggiature, verniciature, decorazioni a Bergamo",
  phone: "+39 333 444 8757",
  phoneLink: "tel:+393334448757",
  email: "info@pianofrancescotinteggiature.com",
  emailLink: "mailto:info@pianofrancescotinteggiature.com",
  whatsapp: "https://wa.me/393334448757",
  address: "Via Umberto Giordano, 1 - 24129 Bergamo (BG)",
  mapsUrl: "https://maps.google.com/?q=Via+Umberto+Giordano+1+Bergamo",
  piva: "03461770160",
  hours: "Lun - Ven: 8:00 - 18:00",
  website: "https://pianofrancescotinteggiature.com",
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
} as const;

export const SERVICES = [
  {
    title: "Imbiancatura",
    description: "Ridona il bianco alle tue pareti. Dopo un po' di tempo, il bianco delle nostre pareti subisce inevitabilmente le condizioni del tempo. Sistemazione intonaco, imbiancatura e decorazione.",
    image: "/images/imbiancatura.jpg",
    features: ["Sistemazione intonaco", "Imbiancatura", "Decorazione"],
  },
  {
    title: "Verniciatura",
    description: "Colore e protezione per le tue superfici. La verniciatura può essere effettuata non solo per colorare una superficie, ma anche per creare una sottile pellicola protettiva.",
    image: "/images/verniciatura.jpg",
    features: ["Verniciatura pareti", "Verniciatura serramenti", "Verniciatura metallo"],
  },
  {
    title: "Decorazione",
    description: "Creatività senza limiti. Tutti possono dare libero sfogo alla propria creatività con colori ed elementi decorativi personalizzati.",
    image: "/images/decorazione.jpg",
    features: ["Carta da parati", "Decorazioni personalizzate", "Strisce e forme"],
  },
  {
    title: "Tinteggiature",
    description: "Tinteggiature di esterni e interni con materiali innovativi e sistemi di applicazione all'avanguardia per risultati perfetti.",
    image: "/images/hero1.jpg",
    features: ["Tinteggiatura esterni", "Tinteggiatura interni", "Materiali innovativi"],
  },
  {
    title: "Isolamenti a Cappotto",
    description: "Isolamenti a cappotto termico coibentato per efficientamento energetico e comfort abitativo.",
    image: "/images/hero2.jpg",
    features: ["Cappotto termico", "Coibentazione", "Efficienza energetica"],
  },
  {
    title: "Pavimentazioni",
    description: "Pavimentazioni in resina e microcemento per ambienti moderni e funzionali.",
    image: "/images/hero3.jpg",
    features: ["Pavimentazioni resina", "Microcemento", "Rivestimenti"],
  },
] as const;

export const STATS = [
  { value: "20+", label: "Anni di Esperienza" },
  { value: "500+", label: "Lavori Realizzati" },
  { value: "100%", label: "Clienti Soddisfatti" },
  { value: "24h", label: "Tempo di Risposta" },
] as const;

export const GALLERY_IMAGES = [
  { src: "/images/gallery1.jpg", alt: "Lavoro di tinteggiatura - 1" },
  { src: "/images/gallery2.jpg", alt: "Lavoro di tinteggiatura - 2" },
  { src: "/images/gallery3.jpg", alt: "Lavoro di verniciatura - 1" },
  { src: "/images/gallery4.jpg", alt: "Lavoro di verniciatura - 2" },
  { src: "/images/gallery5.jpg", alt: "Lavoro di decorazione - 1" },
  { src: "/images/gallery6.jpg", alt: "Lavoro di decorazione - 2" },
  { src: "/images/gallery7.jpg", alt: "Lavoro di imbiancatura - 1" },
  { src: "/images/gallery8.jpg", alt: "Lavoro di imbiancatura - 2" },
  { src: "/images/gallery9.jpg", alt: "Lavoro di tinteggiatura esterni - 1" },
  { src: "/images/gallery10.jpg", alt: "Lavoro di tinteggiatura esterni - 2" },
  { src: "/images/gallery11.jpg", alt: "Lavoro di verniciatura esterni" },
  { src: "/images/gallery12.jpg", alt: "Lavoro di decorazione pareti" },
  { src: "/images/gallery13.jpg", alt: "Lavoro di imbiancatura esterni" },
  { src: "/images/hero4.jpg", alt: "Cantiere tinteggiatura" },
  { src: "/images/hero5.jpg", alt: "Lavoro completato" },
  { src: "/images/hero6.jpg", alt: "Dettaglio lavorazione" },
  { src: "/images/hero7.jpg", alt: "Risultato finale" },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/servizi", label: "Servizi" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contatti", label: "Contatti" },
] as const;

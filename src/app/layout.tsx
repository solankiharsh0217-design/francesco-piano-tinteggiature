import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Francesco Piano | Tinteggiature di Lusso a Bergamo",
  description:
    "Tinteggiature, verniciature, stucchi e decorazioni di alto livello a Bergamo. Artigiano con oltre 20 anni di esperienza in lavorazioni premium.",
  keywords: [
    "tinteggiatura Bergamo",
    "verniciatura Bergamo",
    "decorazioni Bergamo",
    "imbiancatura Bergamo",
    "tinteggiatura di lusso",
    "pintor Bergamo",
  ],
  openGraph: {
    title: "Francesco Piano | Tinteggiature di Lusso a Bergamo",
    description:
      "Tinteggiature, verniciature, stucchi e decorazioni di alto livello a Bergamo",
    url: "https://pianofrancescotinteggiature.com",
    siteName: "Francesco Piano Tinteggiature",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${bodoni.variable} ${jost.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

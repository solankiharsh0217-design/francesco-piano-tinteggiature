import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Francesco Piano Tinteggiature | Bergamo",
  description:
    "Tinteggiature, verniciature, stucchi, decorazioni, pitture ed intonaci a Bergamo. Artigiano con oltre 20 anni di esperienza.",
  keywords: [
    "tinteggiatura Bergamo",
    "verniciatura Bergamo",
    "decorazioni Bergamo",
    "imbiancatura Bergamo",
    "pintor Bergamo",
  ],
  openGraph: {
    title: "Francesco Piano Tinteggiature | Bergamo",
    description:
      "Tinteggiature, verniciature, stucchi, decorazioni a Bergamo",
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
    <html lang="it" className={`${poppins.variable} ${openSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

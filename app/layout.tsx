import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Instrument_Serif, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beeldenbank — De beeldenbank voor architectenbureaus",
  description:
    "Organiseer, vind en deel al je projectfoto's in seconden. Automatisch getagd en vindbaar in gewone taal. Gebouwd voor architectenbureaus.",
  openGraph: {
    title: "Beeldenbank — De beeldenbank voor architectenbureaus",
    description:
      "Organiseer, vind en deel al je projectfoto's in seconden. Automatisch getagd en vindbaar in gewone taal.",
    type: "website",
    locale: "nl_NL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.variable} ${plusJakarta.variable} ${instrumentSerif.variable} ${caveat.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

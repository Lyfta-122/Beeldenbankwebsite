import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Beeldenbank — AI-beeldenbank voor architectenbureaus",
  description:
    "Organiseer, vind en deel al je projectfoto's in seconden met AI-tagging en semantic search. Gebouwd voor architectenbureaus.",
  openGraph: {
    title: "Beeldenbank — AI-beeldenbank voor architectenbureaus",
    description:
      "Organiseer, vind en deel al je projectfoto's in seconden met AI-tagging en semantic search.",
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
    <html lang="nl" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

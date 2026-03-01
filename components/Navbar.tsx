"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, ImageIcon } from "lucide-react";
import Button from "./Button";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Over ons", href: "/over-ons" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 right-0 left-0 z-30 transition-all duration-300 ${
          scrolled
            ? "border-b border-border/50 bg-surface/90 shadow-[0_1px_8px_rgba(27,59,42,0.06)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-accent transition-transform duration-200 group-hover:scale-105">
              <ImageIcon size={18} strokeWidth={2} />
            </div>
            <span className="font-heading text-xl font-bold tracking-tight text-primary">
              Beeldenbank
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-text-muted transition-colors duration-200 hover:bg-tag-bg hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:opacity-80"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#"
              className="text-sm font-medium text-text-muted transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:opacity-80"
            >
              Inloggen
            </a>
            <Button variant="primary" size="sm" href="#">
              Vraag een demo aan
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-text-muted transition-colors duration-200 hover:bg-border-light hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:opacity-80 md:hidden cursor-pointer"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

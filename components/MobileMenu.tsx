"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Button from "./Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Over ons", href: "/over-ons" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-primary-dark/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Menu panel */}
          <motion.div
            className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-surface shadow-[-8px_0_30px_rgba(27,59,42,0.1)]"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <div className="flex items-center justify-end p-5">
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-text-muted transition-colors duration-200 hover:bg-border-light hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:opacity-80 cursor-pointer"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 px-5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-base font-medium text-text transition-colors duration-200 hover:bg-tag-bg hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:opacity-80"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  onClick={onClose}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="p-5">
              <Button variant="primary" size="md" href="#" className="w-full">
                Vraag een demo aan
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

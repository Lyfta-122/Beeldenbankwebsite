"use client";

import { motion } from "framer-motion";
import { Search, Tag, FolderOpen, Star, Camera } from "lucide-react";

export default function DashboardMockup() {
  const tags = [
    "Gevel", "Baksteen", "Modern", "Duurzaam", "Groen dak",
    "Interieur", "Hout", "Beton",
  ];

  const images = [
    { w: 280, h: 200, label: "Villa Parkzicht" },
    { w: 280, h: 200, label: "Kantoor West" },
    { w: 280, h: 200, label: "Stadsappartement" },
    { w: 280, h: 200, label: "Museum Oost" },
    { w: 280, h: 200, label: "Schoolgebouw" },
    { w: 280, h: 200, label: "Woontoren Zuid" },
  ];

  return (
    <motion.div
      className="relative mx-auto w-full max-w-4xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Glow effect behind */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 via-primary/10 to-transparent blur-2xl" />

      {/* Dashboard frame */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_20px_60px_rgba(27,59,42,0.12),0_4px_16px_rgba(27,59,42,0.06)]">
        {/* Top bar */}
        <div className="flex items-center gap-3 border-b border-border px-5 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400/70" />
            <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
            <div className="h-3 w-3 rounded-full bg-green-400/70" />
          </div>
          <div className="flex-1">
            <div className="mx-auto flex max-w-md items-center gap-2 rounded-lg bg-background px-3 py-1.5">
              <Search size={14} className="text-text-muted" />
              <span className="text-xs text-text-muted">
                Zoek op &quot;moderne gevel baksteen&quot;...
              </span>
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="flex">
          {/* Sidebar */}
          <div className="hidden w-48 shrink-0 border-r border-border bg-background/50 p-4 sm:block">
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-primary">
              <FolderOpen size={14} />
              Projecten
            </div>
            {["Villa Parkzicht", "Kantoor West", "Museum Oost", "Alle projecten"].map(
              (item, i) => (
                <div
                  key={i}
                  className={`mb-1 rounded-lg px-3 py-2 text-xs ${
                    i === 0
                      ? "bg-tag-bg font-medium text-primary"
                      : "text-text-muted"
                  }`}
                >
                  {item}
                </div>
              )
            )}
            <div className="mt-6 mb-3 flex items-center gap-2 text-xs font-semibold text-primary">
              <Star size={14} />
              Favorieten
            </div>
            <div className="mb-1 rounded-lg px-3 py-2 text-xs text-text-muted">
              3 afbeeldingen
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-4">
            {/* Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 rounded-full bg-tag-bg px-2.5 py-1 text-[11px] font-medium text-tag-text"
                >
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>

            {/* Image grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-tag-bg to-accent/10"
                >
                  <div className="flex aspect-[4/3] items-center justify-center">
                    <Camera
                      size={24}
                      className="text-primary/30"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-2.5 pb-2 pt-6">
                    <p className="text-[11px] font-medium text-white">
                      {img.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

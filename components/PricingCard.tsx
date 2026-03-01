"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "./Button";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
  ctaHref?: string;
  index?: number;
}

export default function PricingCard({
  name,
  price,
  period = "/maand",
  description,
  features,
  highlighted = false,
  ctaText = "Vraag een demo aan",
  ctaHref = "#",
  index = 0,
}: PricingCardProps) {
  return (
    <motion.div
      className={`relative flex flex-col rounded-2xl border p-8 ${
        highlighted
          ? "border-primary bg-surface shadow-[0_8px_40px_rgba(27,59,42,0.12),0_2px_12px_rgba(27,59,42,0.06)] scale-[1.02]"
          : "border-border bg-surface"
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
          Meest gekozen
        </div>
      )}
      <div className="mb-6">
        <h3 className="mb-1 text-lg font-semibold text-text">{name}</h3>
        <p className="text-sm text-text-muted">{description}</p>
      </div>
      <div className="mb-6">
        <span className="text-4xl font-bold tracking-tight text-text">
          {price}
        </span>
        {period && (
          <span className="ml-1 text-sm text-text-muted">{period}</span>
        )}
      </div>
      <ul className="mb-8 flex-1 space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
            <Check
              size={18}
              className="mt-0.5 shrink-0 text-accent-dark"
              strokeWidth={2.5}
            />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        variant={highlighted ? "primary" : "outline"}
        size="md"
        href={ctaHref}
        className="w-full"
      >
        {ctaText}
      </Button>
    </motion.div>
  );
}

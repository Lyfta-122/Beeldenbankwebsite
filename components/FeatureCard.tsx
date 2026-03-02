"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      className="group relative rounded-2xl border border-border bg-white p-7 shadow-[0_1px_3px_rgba(27,59,42,0.04)] transition-all duration-200 ease-out hover:border-primary/20 hover:shadow-[0_8px_30px_rgba(27,59,42,0.08),0_2px_8px_rgba(27,59,42,0.04)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-tag-bg text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-accent">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <h3 className="mb-2 text-lg font-semibold tracking-tight text-text">
        {title}
      </h3>
      <p className="text-[15px] leading-relaxed text-text-muted">{description}</p>
    </motion.div>
  );
}

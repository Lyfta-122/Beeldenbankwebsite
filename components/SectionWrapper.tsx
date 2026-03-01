"use client";

import { motion } from "framer-motion";
import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgColor?: string;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  bgColor = "bg-background",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`${bgColor} py-20 md:py-28 ${className}`}>
      <motion.div
        className="mx-auto max-w-7xl px-5 sm:px-8"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}

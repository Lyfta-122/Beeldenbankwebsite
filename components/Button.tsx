"use client";

import { motion } from "framer-motion";
import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-primary-dark font-semibold shadow-[0_2px_8px_rgba(74,222,128,0.3),0_1px_2px_rgba(74,222,128,0.2)] hover:shadow-[0_4px_16px_rgba(74,222,128,0.4),0_2px_4px_rgba(74,222,128,0.3)] hover:bg-accent-dark",
  secondary:
    "bg-primary text-white font-semibold shadow-[0_2px_8px_rgba(27,59,42,0.2),0_1px_2px_rgba(27,59,42,0.1)] hover:shadow-[0_4px_16px_rgba(27,59,42,0.3),0_2px_4px_rgba(27,59,42,0.2)] hover:bg-primary-light",
  outline:
    "border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 transition-all duration-200 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 active:scale-[0.97]";

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedStyles}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}

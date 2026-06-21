"use client";

import { motion, type Variants } from "framer-motion";
import React from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}

const makeVariants = (y: number, delay: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

export default function ScrollReveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: ScrollRevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={makeVariants(y, delay)}
    >
      {children}
    </MotionTag>
  );
}

"use client";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

interface MotionProviderProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function MotionProvider({ children, className = "", delay = 0 }: MotionProviderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

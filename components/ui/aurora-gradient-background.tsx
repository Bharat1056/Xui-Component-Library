"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AuroraGradientBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export function AuroraGradientBackground({
  className,
  children,
}: AuroraGradientBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient - more greenish and shadowy in light mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-green-50 to-lime-100 dark:from-emerald-950/20 dark:via-teal-950/20 dark:to-cyan-950/20 shadow-[inset_0_0_80px_rgba(0,128,0,0.15)]" />

        {/* Animated aurora orbs */}
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-r from-emerald-400/40 to-teal-400/40 blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -top-20 -right-40 w-96 h-96 rounded-full bg-gradient-to-r from-teal-400/30 to-cyan-400/30 blur-3xl"
          animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1, 0.8, 1] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />

        <motion.div
          className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-gradient-to-r from-green-400/35 to-emerald-400/35 blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
        />

        <motion.div
          className="absolute top-1/2 -left-20 w-64 h-64 rounded-full bg-gradient-to-r from-lime-400/25 to-teal-400/25 blur-3xl"
          animate={{ x: [0, 120, 0], y: [0, -30, 0], scale: [1, 0.9, 1] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 15,
          }}
        />

        <motion.div
          className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-gradient-to-r from-emerald-400/20 to-green-400/20 blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.3, 1] }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8,
          }}
        />

        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20 dark:bg-black/10 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      {children}
    </div>
  );
}

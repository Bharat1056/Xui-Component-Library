"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`
        relative flex items-center justify-center
        h-10 w-10 rounded-full cursor-pointer
        transition-all duration-500
        ${
          isDark
            ? "bg-green-500/10 shadow-[0_0_15px_3px_rgba(34,197,94,0.4)]"
            : "bg-green-100 shadow-[0_0_12px_2px_rgba(34,197,94,0.25)]"
        }
      `}
    >
      <motion.div
        key={isDark ? "moon" : "sun"}
        initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {isDark ? (
          <Moon className="h-5 w-5 text-green-400" />
        ) : (
          <Sun className="h-5 w-5 text-green-600" />
        )}
      </motion.div>
    </motion.div>
  );
}

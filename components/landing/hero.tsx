"use client";

import TailwindCSS from "@/components/icons/tailwindcss";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { BrowseBlocksButton } from "../ui/browse-blocks";
import { BrowseComponentsButton } from "../ui/browse-button";

export function HeroSection() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 md:py-16 lg:py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto space-y-8"
      >
        <h1 className="text-5xl sm:text-6xl lg:text-7xl sm:leading-[1.15] md:leading-[1.2] lg:leading-24 font-[var(--font-instrument-serif)] tracking-tight leading-tight text-zinc-900 dark:text-zinc-100">
          Think{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 dark:from-emerald-400 dark:via-teal-400 dark:to-green-400 font-[var(--font-dancing-script)] italic">
            boldly
          </span>{" "}
          and Design{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 dark:from-green-400 dark:via-emerald-400 dark:to-teal-400 font-[var(--font-dancing-script)] text-6xl sm:text-7xl lg:text-8xl relative italic">
            beautifully
          </span>
          ,
          <br />
          Build{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-green-500 to-emerald-500 dark:from-teal-400 dark:via-green-400 dark:to-emerald-400 font-[var(--font-dancing-script)] italic">
            powerfully
          </span>{" "}
          with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 dark:from-emerald-400 dark:via-green-400 dark:to-teal-400 font-[var(--font-instrument-serif)] italic">
            Xui
          </span>
          .
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-center w-full space-y-4"
        >
          <span className="text-sm text-zinc-500 dark:text-zinc-300 flex items-center gap-2">
            <TailwindCSS className="w-4 h-4" />
            <span className="flex items-center gap-1.5">
              Now updated for Tailwind CSS 4.0!
              <span className="inline-flex items-center rounded-md bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                <Sparkles className="h-3 w-3 mr-1" />
                New
              </span>
            </span>
          </span>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <BrowseComponentsButton />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

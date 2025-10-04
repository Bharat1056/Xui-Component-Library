import { ThemeToggle } from "@/lib/theme-toggle";
import { LoaderPinwheel } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <div className="sticky top-4 z-50 flex justify-center">
      <div
        className={`
          flex items-center justify-between
          w-[92%] sm:w-[800px] lg:w-[1100px]
          px-5 py-3
          rounded-[28px]
          border border-zinc-200/60 dark:border-zinc-700/60
          bg-white/70 dark:bg-zinc-900/60
          backdrop-blur-xl
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          transition-all duration-300 ease-in-out
          hover:shadow-[0_10px_40px_rgba(0,0,0,0.12)]
        `}
      >
        {/* Left side */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <LoaderPinwheel className="w-6 h-6 text-green-500 dark:text-green-400" />
            <span className="font-semibold text-zinc-800 dark:text-zinc-100 text-base">
              Xui
            </span>
          </Link>

          <span className="hidden sm:block text-zinc-300 dark:text-zinc-700">
            |
          </span>

          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/docs/components/background-paths"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
            >
              Components
            </Link>
            <Link
              href="/docs"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
            >
              Docs
            </Link>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:block text-zinc-300 dark:text-zinc-700">
            |
          </span>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { toggleTheme } from "@/lib/redux/slices/theme-slice";
import { Sun, Moon, Zap } from "lucide-react";

export function Navbar() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.mode);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand/Logo */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <Zap className="h-5 w-5 fill-white" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              LionCode
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-muted-foreground">
            <Link href="/services" className="transition-colors hover:text-foreground">
              Services
            </Link>
            <Link href="/industries" className="transition-colors hover:text-foreground">
              Industries
            </Link>
            <Link href="/projects" className="transition-colors hover:text-foreground">
              Projects
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground">
              About
            </Link>
            <Link href="/careers" className="transition-colors hover:text-foreground">
              Careers
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => dispatch(toggleTheme())}
            aria-label="Toggle Theme"
            className="rounded-full relative w-9 h-9 flex items-center justify-center border border-border/40 hover:bg-muted"
          >
            {theme === "dark" ? (
              <Sun className="h-[1.2rem] w-[1.2rem] text-amber-500 transition-all duration-300" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-neutral-200 transition-all duration-300" />
            )}
          </Button>

          <Button
            size="sm"
            asChild
            className="rounded-xl px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all"
          >
            <Link href="/start-project">Start a Project</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { toggleTheme } from "@/lib/redux/slices/theme-slice";
import { Sun, Moon } from "lucide-react";

export function Navbar() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.mode);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand/Logo */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="bg-gradient-to-r from-neutral-900 to-neutral-500 bg-clip-text text-xl font-extrabold tracking-tight text-transparent dark:from-neutral-100 dark:to-neutral-400">
              LionCode
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="#features" className="transition-colors hover:text-foreground">
              Features
            </Link>
            <Link href="#services" className="transition-colors hover:text-foreground">
              Services
            </Link>
            <Link href="#pricing" className="transition-colors hover:text-foreground">
              Pricing
            </Link>
            <Link href="#about" className="transition-colors hover:text-foreground">
              About
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

          <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
            <Link href="/login">Sign In</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

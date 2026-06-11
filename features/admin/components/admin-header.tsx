"use client";

import React from "react";
import { Bell, Search, Menu, Sun, Moon } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { toggleTheme } from "@/lib/redux/slices/theme-slice";

interface AdminHeaderProps {
  activeTab: string;
  onMenuToggle?: () => void;
}

export function AdminHeader({ activeTab, onMenuToggle }: AdminHeaderProps) {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.mode);

  const getTitle = () => {
    switch (activeTab) {
      case "dashboard":
        return "Dashboard Overview";
      case "jobs":
        return "Job Openings";
      case "industries":
        return "Target Industries";
      case "services":
        return "Core Services";
      case "staff":
        return "Staff & Permissions";
      case "queries":
        return "Customer Queries & Leads";
      case "settings":
        return "System Settings";
      default:
        return "Admin Portal";
    }
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-border/40 bg-background/50 px-6 backdrop-blur-md sticky top-0 z-30">
      <div className="flex items-center gap-4">
        {onMenuToggle && (
          <button
            onClick={onMenuToggle}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground"
          >
            <Menu className="h-5 w-5" />
          </button>
        )}
        <h1 className="text-lg font-extrabold tracking-tight text-foreground sm:text-xl">
          {getTitle()}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden sm:block w-64">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Quick search..."
            className="w-full rounded-xl border border-border/60 bg-muted/20 pl-9 pr-4 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
          />
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => dispatch(toggleTheme())}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/40 hover:bg-muted/60 transition-colors text-muted-foreground hover:text-foreground"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
        </button>

        {/* Notifications */}
        <div className="relative">
          <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/40 hover:bg-muted/60 transition-colors text-muted-foreground hover:text-foreground">
            <Bell className="h-4.5 w-4.5" />
            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-indigo-600 animate-ping" />
            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-indigo-600" />
          </button>
        </div>

        {/* Status Indicator */}
        <div className="hidden sm:flex items-center gap-2 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40 px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
            Live
          </span>
        </div>
      </div>
    </header>
  );
}

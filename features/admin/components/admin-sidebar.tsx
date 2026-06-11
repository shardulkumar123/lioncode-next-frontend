"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/common/logo";
import {
  LayoutDashboard,
  Briefcase,
  Building2,
  Cpu,
  Users,
  MessageSquare,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export type AdminTab = "dashboard" | "jobs" | "industries" | "services" | "staff" | "queries" | "settings";

interface AdminSidebarProps {
  activeTab: AdminTab;
  setActiveTab: (tab: AdminTab) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export function AdminSidebar({ activeTab, setActiveTab, collapsed, setCollapsed }: AdminSidebarProps) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "jobs", label: "Manage Jobs", icon: Briefcase },
    { id: "industries", label: "Industries", icon: Building2 },
    { id: "services", label: "Services", icon: Cpu },
    { id: "staff", label: "Staff & Roles", icon: Users },
    { id: "queries", label: "Queries", icon: MessageSquare },
    { id: "settings", label: "Portal Settings", icon: Settings },
  ] as const;

  return (
    <aside
      className={`relative flex flex-col border-r border-border/40 bg-card/60 backdrop-blur-md transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Header section */}
      <div className="flex h-16 items-center justify-between px-4 border-b border-border/40">
        <Link href="/" className="flex items-center gap-3">
          <Logo size={collapsed ? 28 : 34} />
          {!collapsed && (
            <span className="font-extrabold text-sm tracking-tight bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              LIONCODE
            </span>
          )}
        </Link>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden md:flex h-6 w-6 items-center justify-center rounded-md border border-border bg-background hover:bg-muted text-muted-foreground transition-colors absolute -right-3 top-5 z-20"
        >
          {collapsed ? <ChevronRight className="h-3.5 w-3.5" /> : <ChevronLeft className="h-3.5 w-3.5" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1.5 p-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/15"
                  : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
              }`}
            >
              <Icon className="h-4.5 w-4.5 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Footer Profile */}
      <div className="border-t border-border/40 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-400 text-white font-bold text-sm">
            SK
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold truncate text-foreground">Shardul Kumar</p>
              <p className="text-[10px] text-muted-foreground truncate">Super Admin</p>
            </div>
          )}
        </div>
        {!collapsed && (
          <Link
            href="/"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-border/40 hover:border-destructive/30 hover:bg-destructive/5 py-2 text-xs font-bold text-muted-foreground hover:text-destructive transition-all"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span>Exit Portal</span>
          </Link>
        )}
      </div>
    </aside>
  );
}

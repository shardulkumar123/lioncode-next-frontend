"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { Button } from "@/components/ui/button";
import {
  Utensils,
  BedDouble,
  Factory,
  Package,
  CalendarDays,
  GitMerge,
  ShoppingBag,
  LayoutDashboard,
  ArrowRight,
  TrendingUp,
  Shield,
  Zap,
  Building,
  Truck,
  Users,
  CheckCircle,
} from "lucide-react";

const industriesData = [
  {
    id: "hospitality",
    name: "Hospitality & Food Service",
    tagline: "Speed, Guest Satisfaction, and Zero Friction",
    desc: "From busy local cafes to multi-property hotels and resorts, we build the digital backbone that keeps guest experiences seamless and kitchen staff coordinated.",
    icon: Utensils,
    color: "from-orange-500 to-rose-500",
    stats: { value: "40%", label: "Faster order fulfillment" },
    solutions: [
      "Integrated POS & Kitchen Displays",
      "Direct commission-free Hotel Booking Engines",
      "QR Code Table Ordering & Loyalty Apps",
      "Real-time Inventory & Ingredient Audits",
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Supply Chain",
    tagline: "Efficiency, Automation, and Real-Time Visibility",
    desc: "We digitize the factory floor, sync warehouse operations, and automate quality control steps to eliminate manual logging and reduce material waste.",
    icon: Factory,
    color: "from-blue-600 to-indigo-600",
    stats: { value: "99.9%", label: "Inventory sync accuracy" },
    solutions: [
      "Live Production Line Monitoring Dashboards",
      "Dynamic Bill of Materials (BOM) Engines",
      "Automated Stock Level Alerts & Supplier Sync",
      "Compliance Audits & Operator Logs",
    ],
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    tagline: "Headless Performance and Higher Conversions",
    desc: "We build modern retail environments, including fast B2C headless storefronts, custom CRM architectures, and complex wholesale B2B checkout portals.",
    icon: ShoppingBag,
    color: "from-purple-500 to-pink-500",
    stats: { value: "2.4x", label: "Average page-speed boost" },
    solutions: [
      "Blazing fast Headless Shopify/Next.js stores",
      "Granular Customer Segment Pricing for B2B",
      "Automatic Abandoned Cart Recovery Sequences",
      "Omnichannel Stock & Fulfillment Sync",
    ],
  },
  {
    id: "services",
    name: "Professional & Booking Services",
    tagline: "Optimized Calendars and Higher Utilization",
    desc: "Designed for medical clinics, consultancies, and service-based teams to optimize scheduling, minimize no-shows, and accept secure payments.",
    icon: CalendarDays,
    color: "from-emerald-500 to-teal-500",
    stats: { value: "-60%", label: "Reduction in appointment no-shows" },
    solutions: [
      "Multi-provider Calendars & Room Booking",
      "SMS & WhatsApp Automated Reminders",
      "Secure Online Deposits & Invoicing",
      "Staff Scheduling & Utilization Metrics",
    ],
  },
];

export default function IndustriesPage() {
  const [activeTab, setActiveTab] = useState("hospitality");
  const selectedIndustry = industriesData.find((ind) => ind.id === activeTab) || industriesData[0];
  const SelectedIcon = selectedIndustry.icon;

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased transition-colors duration-300">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 py-20 lg:py-24 border-b border-border/40">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_80%,transparent_100%)] opacity-80" />
          
          <div className="mx-auto max-w-5xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 dark:bg-indigo-950/40 px-3.5 py-1.5 text-xs font-bold tracking-wide text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/40">
              Industry Verticals
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-neutral-900 dark:text-white">
              Tailored Solutions for{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent font-black">
                Your Industry
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              We design software based on the unique realities of your business domain, avoiding generic templates.
            </p>
          </div>
        </section>

        {/* Interactive Industry Showcase */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Industry Selection Tabs */}
          <div className="flex flex-wrap justify-center gap-3 border-b border-border/60 pb-8">
            {industriesData.map((ind) => {
              const TabIcon = ind.icon;
              const isActive = activeTab === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveTab(ind.id)}
                  className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-bold tracking-wide border transition-all duration-300 ${
                    isActive
                      ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-600/10"
                      : "bg-card border-border/80 text-muted-foreground hover:text-foreground hover:bg-muted/40"
                  }`}
                >
                  <TabIcon className="h-4.5 w-4.5" />
                  {ind.name.split(" & ")[0]}
                </button>
              );
            })}
          </div>

          {/* Active Industry Content Card */}
          <div className="mt-12 mx-auto max-w-5xl rounded-3xl border border-border/60 bg-card p-8 sm:p-12 shadow-md relative overflow-hidden transition-all duration-300">
            {/* Soft decorative background glow */}
            <div className={`absolute -top-12 -right-12 h-64 w-64 bg-gradient-to-br ${selectedIndustry.color} opacity-5 blur-3xl`} />

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${selectedIndustry.color} text-white shadow-md`}>
                  <SelectedIcon className="h-6 w-6" />
                </div>
                
                <div>
                  <h2 className="text-2xl font-black text-neutral-900 dark:text-white sm:text-3xl">
                    {selectedIndustry.name}
                  </h2>
                  <p className="mt-1.5 text-sm font-bold text-indigo-600 dark:text-indigo-400">
                    {selectedIndustry.tagline}
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {selectedIndustry.desc}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Core Solutions Provided:
                  </h4>
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {selectedIndustry.solutions.map((sol, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                        <CheckCircle className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Stats Callout */}
              <div className="lg:col-span-5 flex flex-col justify-center items-center p-8 rounded-2xl bg-muted/20 border border-border/40 text-center space-y-3">
                <span className="text-6xl font-black bg-gradient-to-br from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
                  {selectedIndustry.stats.value}
                </span>
                <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wide max-w-[200px]">
                  {selectedIndustry.stats.label}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Architecture Trust / Focus */}
        <section className="border-t border-b border-border/40 bg-muted/10 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-12 sm:grid-cols-3">
            <div className="text-center space-y-3">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold">Compliant & Secure</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Our code conforms to modern data standards, incorporating secure uploads, RBAC systems, and encryption.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold">Performance First</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Utilizing Server-Side Rendering (SSR) and edge configurations to achieve sub-second content loads.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
                <GitMerge className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold">Flexible APIs</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Custom GraphQL or REST interfaces that sync seamlessly with your accounting and inventory tools.
              </p>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="mx-auto max-w-5xl px-4 py-20 sm:py-28 text-center space-y-8">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Let&apos;s Customize a Platform for You
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-sm leading-relaxed">
            Contact our engineering team to design a secure digital architecture built specifically for your industry&apos;s requirements.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="rounded-xl px-7 bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-12 shadow-lg shadow-indigo-600/10"
            >
              <Link href="/start-project" className="flex items-center gap-2">
                Start a Project <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

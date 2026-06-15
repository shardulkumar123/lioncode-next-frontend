"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/lib/redux/hooks";
import {
  Cpu,
  Star,
  ArrowRight,
  Quote,
  Play,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  Users,
  Utensils,
  BedDouble,
  Factory,
  Package,
  CalendarDays,
  GitMerge,
  ShoppingBag,
  LayoutDashboard,
} from "lucide-react";

// Portfolio project data
const projects = [
  {
    title: "Justravels Booking Engine",
    category: "Web Apps",
    desc: "Scalable Nest.js backend architecture with integrated platform dues calculations.",
    stats: "2.5M+ requests/day",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Aegis AI Agent",
    category: "AI/ML",
    desc: "Context-aware coding assistant executing automated codebase modifications safely.",
    stats: "99.8% precision",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Vatsalya Portal",
    category: "Web Apps",
    desc: "Unified secure portal for state welfare distribution with encrypted uploads.",
    stats: "500k+ active users",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "HopesStream Edge Cache",
    category: "Cloud API",
    desc: "Edge-routing middleware caching dynamic API responses under 10ms.",
    stats: "15ms avg latency",
    color: "from-amber-500 to-orange-500",
  },
];

// Testimonials data
const testimonials = [
  {
    quote:
      "Hopes Technologies transformed our backend system into a high-performance engine. Their architecture scales seamlessly and their attention to detail is outstanding.",
    author: "Elena Rostova",
    role: "VP of Engineering, Justravels",
    stars: 5,
  },
  {
    quote:
      "The Redux-driven configurations and clean Next.js structure they built for our team decreased our time-to-market by nearly 40%. Highly recommended.",
    author: "Marcus Chen",
    role: "Co-Founder, Aegis Systems",
    stars: 5,
  },
];

// Services data matching mockup
const services = [
  {
    title: "Restaurants",
    tag: "Hospitality",
    desc: "POS, table ordering, kitchen display, delivery integration, and loyalty programs.",
    icon: Utensils,
    color: "bg-orange-500/10 text-orange-500 dark:bg-orange-500/20",
  },
  {
    title: "Hotels",
    tag: "Hospitality",
    desc: "Booking engines, front desk systems, housekeeping apps, and guest portals.",
    icon: BedDouble,
    color: "bg-blue-500/10 text-blue-500 dark:bg-blue-500/20",
  },
  {
    title: "Manufacturing",
    tag: "Enterprise",
    desc: "Production tracking, quality control, shift management, and supply chain dashboards.",
    icon: Factory,
    color: "bg-slate-500/10 text-slate-500 dark:bg-slate-500/20",
  },
  {
    title: "Inventory Systems",
    tag: "Operations",
    desc: "Real-time stock management, barcode scanning, reorder alerts, and supplier portals.",
    icon: Package,
    color: "bg-amber-500/10 text-amber-500 dark:bg-amber-500/20",
  },
  {
    title: "Booking Platforms",
    tag: "Service",
    desc: "Appointment scheduling, resource booking, calendar sync, and customer reminders.",
    icon: CalendarDays,
    color: "bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20",
  },
  {
    title: "Business Automation",
    tag: "Enterprise",
    desc: "Workflow automation, data pipelines, API integrations, and process digitization.",
    icon: GitMerge,
    color: "bg-purple-500/10 text-purple-500 dark:bg-purple-500/20",
  },
  {
    title: "E-Commerce",
    tag: "Retail",
    desc: "B2C and B2B online stores with catalog management, payments, and logistics.",
    icon: ShoppingBag,
    color: "bg-rose-500/10 text-rose-500 dark:bg-rose-500/20",
  },
  {
    title: "Custom Portals",
    tag: "Enterprise",
    desc: "Partner portals, employee intranets, client dashboards, and reporting platforms.",
    icon: LayoutDashboard,
    color: "bg-teal-500/10 text-teal-500 dark:bg-teal-500/20",
  },
];

export default function Home() {
  const config = useAppSelector((state) => state.config);
  const [activeTab, setActiveTab] = useState<string>("All");

  // Filter projects by category
  const filteredProjects =
    activeTab === "All" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased transition-colors duration-300">
      <Navbar />

      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <section className="relative overflow-hidden px-4 py-20 lg:py-28 border-b border-border/40">
          {/* Custom Grid Pattern matching the mockup */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_80%,transparent_100%)] opacity-80 dark:opacity-40" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
              {/* Left Column (Copy and Stats) */}
              <div className="lg:col-span-7 space-y-8 text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 dark:bg-indigo-950/40 px-3.5 py-1.5 text-xs font-bold tracking-wide text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/40">
                  <span className="h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
                  Trusted by 50+ businesses across India
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-6xl lg:text-[4rem] leading-[1.1] max-w-2xl">
                  Software & Websites{" "}
                  <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent font-black mt-2">
                    Built For Real
                  </span>{" "}
                  Businesses
                </h1>

                {/* Subtitle Description */}
                <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                  From cafes and hotels to enterprise operations — we build digital systems that
                  simplify business and help companies grow.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    size="lg"
                    asChild
                    className="rounded-xl px-7 bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-12 shadow-lg shadow-indigo-600/10"
                  >
                    <Link href="#work" className="flex items-center gap-2">
                      View Our Work <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="rounded-xl px-6 h-12 border-border/80 font-bold bg-background hover:bg-muted"
                  >
                    <Link
                      href="#contact"
                      className="flex items-center gap-2 text-neutral-800 dark:text-neutral-200"
                    >
                      <Play className="h-4 w-4 fill-current text-indigo-600" /> Book Free
                      Consultation
                    </Link>
                  </Button>
                </div>

                {/* Metric Statistics Row */}
                <div className="pt-8 border-t border-border/40 grid grid-cols-2 gap-y-6 sm:grid-cols-4 gap-x-4">
                  <div>
                    <div className="text-3xl font-extrabold text-neutral-900 dark:text-white">
                      150+
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-neutral-900 dark:text-white">
                      50+
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-neutral-900 dark:text-white">
                      5+
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-neutral-900 dark:text-white">
                      99%
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Client Retention</div>
                  </div>
                </div>
              </div>

              {/* Right Column (Layered Floating Mockup Dashboard UI) */}
              <div className="lg:col-span-5 relative flex justify-center items-center py-10 lg:py-0">
                {/* Layer 1: Floating Widget - Top Left (ERP System) */}
                <div className="absolute top-0 left-4 sm:-left-6 z-20 flex items-center gap-3 rounded-2xl border border-border/60 bg-white/90 dark:bg-zinc-900/90 p-4 shadow-xl backdrop-blur-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-neutral-900 dark:text-white">
                      ERP System
                    </div>
                    <div className="text-[11px] text-muted-foreground">Live & running</div>
                  </div>
                </div>

                {/* Layer 2: Main Business Dashboard Card */}
                <div className="w-full max-w-[420px] rounded-3xl border border-border/80 bg-white/70 dark:bg-zinc-950/70 shadow-2xl backdrop-blur-md overflow-hidden relative z-10">
                  {/* Browser Mockup Header */}
                  <div className="flex items-center px-4 py-3 bg-neutral-50/50 dark:bg-zinc-900/40 border-b border-border/60">
                    <div className="flex gap-1.5 mr-4">
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-200 dark:bg-zinc-700" />
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-200 dark:bg-zinc-700" />
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-200 dark:bg-zinc-700" />
                    </div>
                    <div className="flex-1 text-center bg-white dark:bg-zinc-900 border border-border/50 rounded-md text-[10px] text-muted-foreground py-1 select-none font-mono">
                      {config.appName.toLowerCase().replace(/\s+/g, "")}.in/dashboard
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-6 space-y-6">
                    {/* Welcome Row */}
                    <div className="flex justify-between items-center">
                      <div className="text-left">
                        <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
                          Good morning
                        </div>
                        <h3 className="text-base font-extrabold text-neutral-900 dark:text-white">
                          Business Dashboard for {config.userName}
                        </h3>
                      </div>
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-950/30 px-2.5 py-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live
                      </div>
                    </div>

                    {/* Metric Cards Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      {/* Revenue */}
                      <div className="rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100/40 dark:border-indigo-900/20 p-3 text-left">
                        <BarChart3 className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                        <div className="text-[10px] text-muted-foreground mt-2">Revenue</div>
                        <div className="text-sm font-black text-indigo-700 dark:text-indigo-300">
                          ₹2.4L
                        </div>
                      </div>

                      {/* Orders */}
                      <div className="rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100/40 dark:border-emerald-900/20 p-3 text-left">
                        <Cpu className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        <div className="text-[10px] text-muted-foreground mt-2">Orders</div>
                        <div className="text-sm font-black text-emerald-700 dark:text-emerald-300">
                          1,284
                        </div>
                      </div>

                      {/* Clients */}
                      <div className="rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-100/40 dark:border-purple-900/20 p-3 text-left">
                        <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        <div className="text-[10px] text-muted-foreground mt-2">Clients</div>
                        <div className="text-sm font-black text-purple-700 dark:text-purple-300">
                          342
                        </div>
                      </div>
                    </div>

                    {/* Miniature Bar Chart Columns */}
                    <div className="pt-2">
                      <div className="flex items-end justify-between gap-1.5 h-16 w-full">
                        <span className="w-full bg-indigo-100 dark:bg-indigo-950/30 rounded-t-md h-6" />
                        <span className="w-full bg-indigo-200 dark:bg-indigo-900/40 rounded-t-md h-10" />
                        <span className="w-full bg-indigo-100 dark:bg-indigo-950/30 rounded-t-md h-8" />
                        <span className="w-full bg-indigo-400 dark:bg-indigo-600 rounded-t-md h-12" />
                        <span className="w-full bg-indigo-200 dark:bg-indigo-900/40 rounded-t-md h-10" />
                        <span className="w-full bg-indigo-500 dark:bg-indigo-500 rounded-t-md h-14" />
                        <span className="w-full bg-indigo-100 dark:bg-indigo-950/30 rounded-t-md h-9" />
                        <span className="w-full bg-indigo-200 dark:bg-indigo-900/40 rounded-t-md h-11" />
                        <span className="w-full bg-indigo-300 dark:bg-indigo-700 rounded-t-md h-13" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Layer 3: Floating Widget - Bottom Right (Order Placed) */}
                <div className="absolute -bottom-6 right-4 sm:-right-6 z-20 flex items-center gap-3 rounded-2xl border border-border/60 bg-white/90 dark:bg-zinc-900/90 p-4 shadow-xl backdrop-blur-md">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white">
                    <CheckCircle2 className="h-5 w-5 fill-white text-indigo-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-neutral-900 dark:text-white">
                      Order placed
                    </div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">Table 4 — ₹840</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SERVICES SECTION */}
        <div id="services" className="scroll-mt-20" />
        <section
          id="industries"
          className="mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:px-8 border-b border-border/40 scroll-mt-20"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-xs font-semibold leading-7 text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
              Industry Solutions
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-neutral-900 dark:text-white">
              We know your industry
            </p>
            <p className="mt-4 text-base text-muted-foreground">
              {
                "We don't build generic software. Every solution is designed around the real problems of your specific business."
              }
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const IconComp = service.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div>
                    {/* Header Row: Icon + Tag */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl ${service.color}`}
                      >
                        <IconComp className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-neutral-100 dark:bg-zinc-800 text-muted-foreground">
                        {service.tag}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="mt-6 text-base font-extrabold text-neutral-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. OUR WORK SECTION */}
        <section
          id="work"
          className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 border-b border-border/40 bg-muted/10 scroll-mt-20"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest">
              Our Work
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Proven Production Deployments
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              A record of scaling microservices and crafting seamless, modern user interfaces.
            </p>

            {/* Categories filter tabs */}
            <div className="mt-8 flex justify-center gap-2 flex-wrap">
              {["All", "AI/ML", "Web Apps", "Cloud API"].map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveTab(category);
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 ${
                    activeTab === category
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-background text-muted-foreground border-border hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-5xl grid grid-cols-1 gap-8 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-3xl border border-border/60 bg-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Decorative category badge overlay */}
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border/50">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono bg-background px-2 py-0.5 rounded border border-border/20">
                      {project.stats}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="p-6 pt-0 mt-auto border-t border-border/20 flex items-center justify-between">
                  <span className="text-xs font-semibold group-hover:underline flex items-center gap-1 cursor-pointer">
                    View Case Study{" "}
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${project.color}`} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. TESTIMONIALS SECTION */}
        <section
          id="testimonials"
          className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 border-b border-border/40 scroll-mt-20"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Trusted by Product Leaders
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Read how our production code helps tech engineering departments succeed.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-sm relative overflow-hidden"
              >
                {/* Background quote icon */}
                <Quote className="absolute right-6 top-6 h-20 w-20 text-muted/5 -z-0 pointer-events-none" />

                <div className="relative z-10">
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-sm italic text-muted-foreground leading-relaxed">
                    &quot;{t.quote}&quot;
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-border/30 flex items-center gap-3 relative z-10">
                  {/* Avatar mockup */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">{t.author}</h4>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

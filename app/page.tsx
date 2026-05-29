"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { toggleTheme } from "@/lib/redux/slices/theme-slice";
import { updateAppName, updateUserName } from "@/lib/redux/slices/config-slice";
import {
  Terminal,
  Settings,
  RefreshCw,
  Sparkles,
  Code,
  Star,
  ArrowRight,
  Server,
  Database,
  BrainCircuit,
  Quote,
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
    title: "LionStream Edge Cache",
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
      "LionCode transformed our backend system into a high-performance engine. Their architecture scales seamlessly and their attention to detail is outstanding.",
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

export default function Home() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.mode);
  const config = useAppSelector((state) => state.config);

  // Hydration-safe local state for action logs
  const [actionLogs, setActionLogs] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<string>("All");

  const logAction = (actionType: string, payload?: unknown) => {
    const timestamp = new Date().toLocaleTimeString();
    const payloadStr = payload
      ? ` with payload: ${JSON.stringify(payload)}`
      : "";
    setActionLogs((prev) => [
      `[${timestamp}] ${actionType}${payloadStr}`,
      ...prev.slice(0, 5),
    ]);
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
    logAction("theme/toggleTheme");
  };

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(updateUserName(value));
    logAction("config/updateUserName", value);
  };

  const handleAppNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(updateAppName(value));
    logAction("config/updateAppName", value);
  };

  // Filter projects by category
  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased transition-colors duration-300">
      <Navbar />

      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8 border-b border-border/40">
          {/* Subtle background grid pattern */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 dark:opacity-20" />

          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
                <Sparkles className="h-3.5 w-3.5 text-amber-500 animate-spin-slow" />
                <span>Next.js 16 + Redux Toolkit Theming</span>
              </div>

              {/* Dynamic Title */}
              <h1 className="mt-8 text-5xl font-extrabold tracking-tight sm:text-7xl bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-neutral-100 dark:to-neutral-400">
                {config.appName}
              </h1>

              {/* Dynamic Greeting */}
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Welcome back,{" "}
                <span className="font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4">
                  {config.userName}
                </span>
                ! We build enterprise-grade software architectures, clean global
                states, and high-performance server systems.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex items-center justify-center gap-4">
                <Button
                  size="lg"
                  onClick={handleToggleTheme}
                  className="shadow-lg shadow-primary/10"
                >
                  Toggle Redux Theme
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#console">Open Live Console</a>
                </Button>
              </div>
            </div>

            {/* Interactive Control Dashboard */}
            <div
              id="console"
              className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch max-w-5xl mx-auto"
            >
              {/* Control Panel Card */}
              <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-border/80 bg-card/50 p-8 backdrop-blur-xl shadow-lg">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Settings className="h-5 w-5 animate-spin-slow" />
                    </div>
                    <div>
                      <h2 className="text-base font-bold">State Customizer</h2>
                      <p className="text-xs text-muted-foreground">
                        Modify global store variables
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-5">
                    <div className="space-y-2">
                      <label
                        htmlFor="appName"
                        className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                      >
                        Workspace Title
                      </label>
                      <input
                        id="appName"
                        type="text"
                        value={config.appName}
                        onChange={handleAppNameChange}
                        placeholder="Type app name..."
                        className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm font-medium outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="userName"
                        className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                      >
                        Client Username
                      </label>
                      <input
                        id="userName"
                        type="text"
                        value={config.userName}
                        onChange={handleUserNameChange}
                        placeholder="Type username..."
                        className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm font-medium outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border/50 text-xs text-muted-foreground flex items-center justify-between">
                  <span>
                    Active Theme: <strong>{theme.toUpperCase()}</strong>
                  </span>
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </div>

              {/* DevConsole Logger Widget */}
              <div className="lg:col-span-7 rounded-3xl border border-border/80 bg-zinc-950 p-6 text-zinc-300 font-mono shadow-xl flex flex-col justify-between min-h-[350px]">
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-zinc-400">
                      REDUX_DEV_TOOLS
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-500/60" />
                    <span className="h-2 w-2 rounded-full bg-yellow-500/60" />
                    <span className="h-2 w-2 rounded-full bg-green-500/60" />
                  </div>
                </div>

                <div className="flex-1 py-4 space-y-4 overflow-y-auto">
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">
                      State Object
                    </span>
                    <pre className="text-[11px] text-emerald-400/90 leading-relaxed bg-zinc-900/40 p-3 rounded-lg border border-zinc-900 overflow-x-auto">
                      {JSON.stringify(
                        { theme: { mode: theme }, config },
                        null,
                        2,
                      )}
                    </pre>
                  </div>

                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1 flex items-center gap-1">
                      <RefreshCw className="h-3 w-3 animate-spin-slow" />{" "}
                      Dispatches log
                    </span>
                    <div className="text-[11px] text-zinc-400 space-y-1 bg-zinc-900/30 p-2.5 rounded-lg border border-zinc-900 max-h-[100px] overflow-y-auto">
                      {actionLogs.length > 0 ? (
                        actionLogs.map((log, index) => (
                          <div key={index} className="truncate">
                            <span className="text-emerald-500/50 font-semibold">{`>>>`}</span>{" "}
                            {log}
                          </div>
                        ))
                      ) : (
                        <div className="text-zinc-600 italic">
                          No dispatches yet...
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-900 text-[10px] text-zinc-500 flex justify-between">
                  <span>GLOBAL_REDUCERS: 2</span>
                  <span>CLIENT_HYDRATED: TRUE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SERVICES SECTION */}
        <section
          id="services"
          className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 border-b border-border/40"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest">
              Our Capabilities
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              High-Performance Engineering Services
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              We design and construct software solutions that deliver high
              performance, absolute security, and architectural purity.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Service 1 */}
            <div className="flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500">
                  <BrainCircuit className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold">AI & Agentic Systems</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Custom LLM agents, automated reasoning loops, and prompt
                  fine-tuning tailored for business logic automation.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold">Full-Stack Apps</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Interactive React layouts, responsive components, and robust
                  Next.js server actions optimized for latency.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                  <Server className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold">Cloud & Edge Routing</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Sub-second edge functions, secure API routing gates,
                  serverless scale-outs, and Kubernetes cluster setups.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold">Database Systems</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Complex index optimizations, real-time message stream
                  channels, transaction safety layers, and vector stores.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OUR WORK SECTION */}
        <section
          id="work"
          className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 border-b border-border/40 bg-muted/10"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest">
              Our Work
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Proven Production Deployments
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              A record of scaling microservices and crafting seamless, modern
              user interfaces.
            </p>

            {/* Categories filter tabs */}
            <div className="mt-8 flex justify-center gap-2 flex-wrap">
              {["All", "AI/ML", "Web Apps", "Cloud API"].map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveTab(category);
                    logAction("ui/filterPortfolio", category);
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
                  <span className="text-xs font-semibold group-hover:underline flex items-center gap-1">
                    View Case Study{" "}
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span
                    className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${project.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. TESTIMONIALS SECTION */}
        <section
          id="testimonials"
          className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 border-b border-border/40"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Trusted by Product Leaders
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Read how our production code helps tech engineering departments
              succeed.
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
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
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

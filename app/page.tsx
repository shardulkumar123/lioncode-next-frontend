"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { toggleTheme } from "@/lib/redux/slices/theme-slice";
import { updateAppName, updateUserName } from "@/lib/redux/slices/config-slice";
import { Terminal, Settings, RefreshCw, Cpu, Layers, Sparkles } from "lucide-react";

export default function Home() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.mode);
  const config = useAppSelector((state) => state.config);
  
  // Local state to keep track of dispatched actions for the demo console
  const [actionLogs, setActionLogs] = useState<string[]>([
    `[${new Date().toLocaleTimeString()}] store/initialize - Initialized Redux state`,
  ]);

  const logAction = (actionType: string, payload?: unknown) => {
    const timestamp = new Date().toLocaleTimeString();
    const payloadStr = payload ? ` with payload: ${JSON.stringify(payload)}` : "";
    setActionLogs((prev) => [`[${timestamp}] ${actionType}${payloadStr}`, ...prev.slice(0, 5)]);
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

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased transition-colors duration-300">
      <Navbar />

      <main className="flex-1">
        {/* Aesthetic Modern Hero Section */}
        <section className="relative overflow-hidden px-6 py-20 lg:px-8 border-b border-border/40 bg-radial-gradient">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 dark:opacity-20" />
          
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
                <Sparkles className="h-3 w-3 text-amber-500 animate-spin-slow" />
                <span>Powered by Next.js 16 + Redux Toolkit</span>
              </div>

              {/* Dynamic App Title */}
              <h1 className="mt-8 text-5xl font-extrabold tracking-tight sm:text-7xl bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-400 bg-clip-text text-transparent dark:from-white dark:via-neutral-200 dark:to-neutral-500">
                {config.appName}
              </h1>

              {/* Dynamic Greeting */}
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Welcome back, <span className="font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4">{config.userName}</span>! Explore our state-of-the-art developer platform designed for blazing-fast operations and seamless scalability.
              </p>

              {/* Hero Call to Action Buttons */}
              <div className="mt-10 flex items-center justify-center gap-4">
                <Button size="lg" onClick={handleToggleTheme} className="shadow-lg shadow-primary/10">
                  Toggle Redux Theme
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#console">Open State Console</a>
                </Button>
              </div>
            </div>

            {/* Interactive Customizer & Redux state visualizer */}
            <div id="console" className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
              
              {/* Form Customizer (Client Action) */}
              <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-border/80 bg-card/60 p-8 backdrop-blur-xl shadow-xl">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Settings className="h-5 w-5 animate-spin-slow" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold">State Customizer</h2>
                      <p className="text-xs text-muted-foreground">Modify global store parameters</p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="appName" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Workspace Name
                      </label>
                      <input
                        id="appName"
                        type="text"
                        value={config.appName}
                        onChange={handleAppNameChange}
                        placeholder="Type new app name..."
                        className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm font-medium outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="userName" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Client Username
                      </label>
                      <input
                        id="userName"
                        type="text"
                        value={config.userName}
                        onChange={handleUserNameChange}
                        placeholder="Type username..."
                        className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm font-medium outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border/50 text-xs text-muted-foreground flex items-center justify-between">
                  <span>Current Theme Mode: <strong>{theme.toUpperCase()}</strong></span>
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                </div>
              </div>

              {/* Live Redux Console (Visual Output) */}
              <div className="lg:col-span-7 rounded-3xl border border-border/80 bg-zinc-950 p-6 text-zinc-300 font-mono shadow-2xl flex flex-col justify-between min-h-[400px]">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-emerald-500" />
                    <span className="text-xs font-bold text-zinc-400">REDUX_DEV_TOOLS_CONSOLE</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-500/80" />
                    <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
                    <span className="h-2 w-2 rounded-full bg-green-500/80" />
                  </div>
                </div>

                {/* State Dump */}
                <div className="flex-1 py-4 overflow-y-auto space-y-4">
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">State Tree</span>
                    <pre className="text-xs text-emerald-400/90 leading-relaxed bg-zinc-900/50 p-3 rounded-lg border border-zinc-900 overflow-x-auto">
                      {JSON.stringify({ theme: { mode: theme }, config }, null, 2)}
                    </pre>
                  </div>

                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1 flex items-center gap-1">
                      <RefreshCw className="h-3 w-3 animate-spin-slow" /> Action Dispatches (Latest first)
                    </span>
                    <div className="text-[11px] text-zinc-400 space-y-1 bg-zinc-900/30 p-3 rounded-lg border border-zinc-900 max-h-[140px] overflow-y-auto">
                      {actionLogs.map((log, index) => (
                        <div key={index} className="truncate">
                          <span className="text-emerald-500/60 font-semibold">{`>>>`}</span> {log}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-3 border-t border-zinc-800/80 text-[10px] text-zinc-500 flex justify-between">
                  <span>ACTIVE_REDUCERS: 2</span>
                  <span>RTK_VERSION: ^2.x.x</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Feature Cards Grid */}
        <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Deploy Instantly</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Engineered for scalable application structures
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Built on clean conventions, optimized providers, and dynamic theming, ensuring lightning-fast page loading and developer delight.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="flex flex-col rounded-3xl border border-border/60 bg-card p-8 shadow-sm hover:shadow-md transition-shadow">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Cpu className="h-5 w-5" />
                  </div>
                  Redux Global Store
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    Manage global application state securely with Redux Toolkit. Built-in hooks provide instant, memoized selectors for real-time reactivity.
                  </p>
                </dd>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col rounded-3xl border border-border/60 bg-card p-8 shadow-sm hover:shadow-md transition-shadow">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Layers className="h-5 w-5" />
                  </div>
                  Scalable Feature Modules
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    Keep your application maintainable using our scream modular architectural pattern. Organize resources logically by business domain.
                  </p>
                </dd>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col rounded-3xl border border-border/60 bg-card p-8 shadow-sm hover:shadow-md transition-shadow">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  Tailwind v4 Adaptations
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    Clean, high-performance styling using Tailwind CSS v4 variables with dynamic dark mode switching and compact design presets.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

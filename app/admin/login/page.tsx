"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/common/logo";
import { Mail, Lock, ArrowRight, Eye, EyeOff, Loader2 } from "lucide-react";
import { LOCAL_STORAGE_KEYS } from "@/constants";
import { apiClient } from "@/lib/api-client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    // If already authenticated, redirect to /admin directly
    const token = localStorage.getItem(LOCAL_STORAGE_KEYS.token);
    if (token) {
      router.push("/admin");
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!email || !password) {
      setErrorMsg("Please enter both email and password.");
      return;
    }

    setIsLoading(true);

    try {
      // 1. Try hitting the NestJS backend API /auth/login (configured via process.env.NEXT_PUBLIC_API_URL or defaults)
      const response = await apiClient.post("/auth/login", { email, password }) as {
        token?: string;
        accessToken?: string;
        data?: { token?: string };
      };
      
      const token = response.token || response.accessToken || (response.data && response.data.token);
      if (token) {
        localStorage.setItem(LOCAL_STORAGE_KEYS.token, token);
        setSuccessMsg("Logged in successfully! Redirecting...");
        setTimeout(() => {
          router.push("/admin");
        }, 1000);
      } else {
        throw new Error("Invalid token received from server");
      }
    } catch (err) {
      const error = err as Error & { message?: string };
      console.warn("Backend auth failed or is offline. Falling back to local offline sandbox simulation:", error);
      
      // 2. Offline simulation fallback: Allow testing with seeded roles
      if (
        (email === "shardul@lioncode.com" || email === "aditya@lioncode.com" || email === "neha.s@lioncode.com" || email === "rohan.v@lioncode.com") &&
        password === "admin123"
      ) {
        localStorage.setItem(LOCAL_STORAGE_KEYS.token, `simulated_token_${email}_${Date.now()}`);
        setSuccessMsg("Logged in successfully (Offline Sandbox)! Redirecting...");
        setTimeout(() => {
          router.push("/admin");
        }, 1000);
      } else {
        setErrorMsg(
          error.message || "Invalid credentials. Use 'shardul@lioncode.com' and 'admin123' to test offline."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickFill = (testEmail: string) => {
    setEmail(testEmail);
    setPassword("admin123");
  };

  return (
    <div className="flex-1 min-h-screen flex items-center justify-center bg-background text-foreground px-4 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_75%,transparent_100%)] opacity-80" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[100px] -z-20" />

      <div className="w-full max-w-md space-y-8 animate-fade-in relative z-10">
        {/* Branding header */}
        <div className="text-center space-y-4">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 p-2.5 shadow-md">
            <Logo size={48} />
          </div>
          <div className="space-y-1.5">
            <h2 className="text-2xl font-black tracking-tight text-neutral-900 dark:text-white">
              Admin Portal
            </h2>
            <p className="text-xs text-muted-foreground font-semibold">
              Enter your corporate credentials to access the console
            </p>
          </div>
        </div>

        {/* Card Form */}
        <div className="bg-card/75 border border-border/40 rounded-3xl p-8 shadow-xl backdrop-blur-md space-y-6">
          {errorMsg && (
            <div className="bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900/30 text-rose-600 dark:text-rose-400 rounded-xl p-3.5 text-xs font-bold leading-relaxed text-center">
              {errorMsg}
            </div>
          )}

          {successMsg && (
            <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl p-3.5 text-xs font-bold leading-relaxed text-center">
              {successMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-border bg-muted/10 pl-10 pr-4 py-2.5 text-xs font-semibold focus:border-indigo-600 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  Password
                </label>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-border bg-muted/10 pl-10 pr-10 py-2.5 text-xs font-semibold focus:border-indigo-600 focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-indigo-600/10 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Console</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Sandbox Users */}
          <div className="border-t border-border/40 pt-5 space-y-3">
            <p className="text-[9px] font-bold text-center text-muted-foreground uppercase tracking-wider">
              Quick Sandbox Profiles
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleQuickFill("shardul@lioncode.com")}
                className="rounded-lg border border-border hover:bg-muted py-1.5 text-[10px] font-bold text-muted-foreground hover:text-foreground transition-colors"
              >
                Shardul (Admin)
              </button>
              <button
                type="button"
                onClick={() => handleQuickFill("neha.s@lioncode.com")}
                className="rounded-lg border border-border hover:bg-muted py-1.5 text-[10px] font-bold text-muted-foreground hover:text-foreground transition-colors"
              >
                Neha (Editor)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

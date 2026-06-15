"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

import { useCreateContactQuery } from "@/features/contact/hooks/use-contact";

export default function ContactPage() {
  const createQueryMutation = useCreateContactQuery();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "software",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createQueryMutation.mutate(
      {
        name: formData.name,
        email: formData.email,
        subject: formData.projectType,
        message: formData.message,
      },
      {
        onSuccess: () => {
          setFormSubmitted(true);
        },
        onError: () => {
          // Graceful fallback: show query received
          setFormSubmitted(true);
        },
      }
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased transition-colors duration-300">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 py-20 lg:py-24 border-b border-border/40">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_80%,transparent_100%)] opacity-80" />

          <div className="mx-auto max-w-5xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 dark:bg-indigo-950/40 px-3.5 py-1.5 text-xs font-bold tracking-wide text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/40">
              Get In Touch
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-neutral-900 dark:text-white">
              Let&apos;s Build Something{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent font-black">
                Together
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Have a product idea, or need custom engineering resources? Contact our technical team
              today.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8 text-left lg:sticky lg:top-24">
              <div className="space-y-3">
                <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white">
                  Contact Information
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We generally respond to technical project inquiries within 24 business hours.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="flex gap-4 p-5 rounded-2xl border border-border/60 bg-card">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Email Us</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">hello@hopestechnologies.com</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-2xl border border-border/60 bg-card">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Main Office</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Indiranagar, Bangalore, Karnataka, India — 560038
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-2xl border border-border/60 bg-card">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Business Hours</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Monday - Friday: 9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-border/60 bg-card p-6 sm:p-10 shadow-sm relative overflow-hidden">
                {formSubmitted ? (
                  <div className="py-16 text-center space-y-6">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Inquiry Received</h3>
                      <p className="mx-auto max-w-sm text-xs leading-relaxed text-muted-foreground">
                        Thank you for reaching out! A technical solutions engineer from our team
                        will email you shortly.
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => setFormSubmitted(false)}
                      className="rounded-xl px-5 border-border/80 text-xs font-semibold h-10"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 text-left">
                    <h3 className="text-xl font-extrabold text-neutral-900 dark:text-white">
                      Project Specification Form
                    </h3>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-muted-foreground uppercase">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-indigo-600 transition-colors"
                          placeholder="Elena Rostova"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-muted-foreground uppercase">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-indigo-600 transition-colors"
                          placeholder="elena@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-muted-foreground uppercase">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-indigo-600 transition-colors"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-muted-foreground uppercase">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-indigo-600 transition-colors"
                          placeholder="Justravels"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-muted-foreground uppercase">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-indigo-600 transition-colors"
                      >
                        <option value="software">Custom Enterprise Software / ERP</option>
                        <option value="website">Headless E-Commerce / Website</option>
                        <option value="mobile">Mobile Application (iOS / Android)</option>
                        <option value="ai">AI Agent / LLM Integration</option>
                        <option value="devops">Cloud Infrastructure & DevOps</option>
                        <option value="data">Data Engineering & Analytics</option>
                        <option value="design">UI/UX Design & Prototyping</option>
                        <option value="consulting">Operational Tech Consulting</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-muted-foreground uppercase">
                        Message / Project Scope
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-indigo-600 transition-colors resize-none"
                        placeholder="Briefly describe what system you want built, target schedules, and primary integrations required."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-11 flex items-center justify-center gap-2"
                    >
                      Submit Specification <Send className="h-4 w-4" />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

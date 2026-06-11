"use client";

import React, { useState, useEffect } from "react";
import { AdminSidebar, AdminTab } from "@/features/admin/components/admin-sidebar";
import { AdminHeader } from "@/features/admin/components/admin-header";
import { JobsTab } from "@/features/admin/components/jobs-tab";
import { IndustriesTab } from "@/features/admin/components/industries-tab";
import { ServicesTab } from "@/features/admin/components/services-tab";
import { StaffTab } from "@/features/admin/components/staff-tab";
import { QueriesTab } from "@/features/admin/components/queries-tab";
import { SettingsTab } from "@/features/admin/components/settings-tab";
import { ProjectsTab } from "@/features/admin/components/projects-tab";

// KPI Icons
import { Briefcase, Building2, Cpu, Users, MessageSquare, ArrowUpRight, Clock, Loader2, FolderGit } from "lucide-react";
import { getJobs, getIndustries, getServices, getStaff, getQueries, getProjects } from "@/features/admin/services/mock-data";
import { Job, ContactQuery } from "@/features/admin/types";
import { useRouter } from "next/navigation";
import { LOCAL_STORAGE_KEYS } from "@/constants";

export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const token = localStorage.getItem(LOCAL_STORAGE_KEYS.token);
      if (!token) {
        router.push("/admin/login");
      } else {
        setIsAuthenticated(true);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [router]);

  // Dashboard stats
  const [stats, setStats] = useState({
    activeJobs: 0,
    industries: 0,
    services: 0,
    staffCount: 0,
    unreadQueries: 0,
    projectsCount: 0
  });

  const [recentQueries, setRecentQueries] = useState<ContactQuery[]>([]);
  const [recentJobs, setRecentJobs] = useState<Job[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Read stats from localStorage (or defaults)
      const jobs = getJobs();
      const inds = getIndustries();
      const srvs = getServices();
      const stf = getStaff();
      const qrs = getQueries();
      const projs = getProjects();

      setStats({
        activeJobs: jobs.filter((j) => j.status === "Active").length,
        industries: inds.filter((i) => i.status === "Active").length,
        services: srvs.filter((s) => s.status === "Active").length,
        staffCount: stf.filter((s) => s.status === "Active").length,
        unreadQueries: qrs.filter((q) => q.status === "New").length,
        projectsCount: projs.length
      });

      setRecentQueries(qrs.slice(0, 3));
      setRecentJobs(jobs.slice(0, 2));
    }, 0);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return renderDashboardOverview();
      case "jobs":
        return <JobsTab />;
      case "industries":
        return <IndustriesTab />;
      case "services":
        return <ServicesTab />;
      case "projects":
        return <ProjectsTab />;
      case "staff":
        return <StaffTab />;
      case "queries":
        return <QueriesTab />;
      case "settings":
        return <SettingsTab />;
      default:
        return renderDashboardOverview();
    }
  };

  const renderDashboardOverview = () => {
    const kpiCards = [
      {
        title: "Active Jobs",
        value: stats.activeJobs,
        icon: Briefcase,
        color: "indigo",
        desc: "Live portal listings"
      },
      {
        title: "Industries",
        value: stats.industries,
        icon: Building2,
        color: "indigo",
        desc: "Target industry segments"
      },
      {
        title: "Active Services",
        value: stats.services,
        icon: Cpu,
        color: "indigo",
        desc: "Service offerings listed"
      },
      {
        title: "Staff Count",
        value: stats.staffCount,
        icon: Users,
        color: "indigo",
        desc: "Enrolled admin staff"
      },
      {
        title: "Unread Queries",
        value: stats.unreadQueries,
        icon: MessageSquare,
        color: stats.unreadQueries > 0 ? "rose" : "indigo",
        desc: "New contact leads waiting"
      },
      {
        title: "Projects",
        value: stats.projectsCount,
        icon: FolderGit,
        color: "indigo",
        desc: "Case studies listed"
      }
    ];

    return (
      <div className="space-y-8 animate-fade-in">
        {/* KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {kpiCards.map((kpi, idx) => {
            const Icon = kpi.icon;
            const isRose = kpi.color === "rose";
            return (
              <div
                key={idx}
                className="p-5 bg-card border border-border/40 rounded-2xl relative overflow-hidden shadow-sm flex flex-col justify-between h-32"
              >
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    {kpi.title}
                  </span>
                  <div
                    className={`h-9 w-9 rounded-xl flex items-center justify-center ${
                      isRose
                        ? "bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400"
                        : "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400"
                    }`}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-2xl font-black text-neutral-900 dark:text-white">
                    {kpi.value}
                  </div>
                  <div className="text-[10px] text-muted-foreground font-semibold truncate">
                    {kpi.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Double Column Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Queries */}
          <div className="lg:col-span-2 rounded-2xl border border-border/40 bg-card p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-border/20 pb-4">
              <div className="space-y-0.5">
                <h3 className="text-sm font-extrabold text-neutral-900 dark:text-white">
                  Incoming Business Queries
                </h3>
                <p className="text-[11px] text-muted-foreground">
                  Latest contact form submissions from clients
                </p>
              </div>
              <button
                onClick={() => setActiveTab("queries")}
                className="inline-flex items-center gap-1 text-[10px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <span>View All</span>
                <ArrowUpRight className="h-3 w-3" />
              </button>
            </div>

            <div className="space-y-3">
              {recentQueries.length > 0 ? (
                recentQueries.map((q) => (
                  <div
                    key={q.id}
                    className="flex justify-between items-start p-4 rounded-xl border border-border/20 bg-muted/5 hover:bg-muted/10 transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-neutral-900 dark:text-white">
                          {q.name}
                        </span>
                        {q.company && (
                          <span className="text-[10px] text-muted-foreground">
                            ({q.company})
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        {q.message}
                      </p>
                    </div>

                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[9px] font-bold shrink-0 ${
                        q.status === "New"
                          ? "bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-900/30"
                          : "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/30"
                      }`}
                    >
                      {q.status}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-xs text-muted-foreground text-center py-6">
                  No inquiries recorded.
                </p>
              )}
            </div>
          </div>

          {/* Quick Stats list / Active Listings */}
          <div className="rounded-2xl border border-border/40 bg-card p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-border/20 pb-4">
              <div className="space-y-0.5">
                <h3 className="text-sm font-extrabold text-neutral-900 dark:text-white">
                  Active Careers
                </h3>
                <p className="text-[11px] text-muted-foreground">
                  Currently hiring job roles
                </p>
              </div>
              <button
                onClick={() => setActiveTab("jobs")}
                className="inline-flex items-center gap-1 text-[10px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <span>Manage</span>
                <ArrowUpRight className="h-3 w-3" />
              </button>
            </div>

            <div className="space-y-3">
              {recentJobs.length > 0 ? (
                recentJobs.map((job) => (
                  <div
                    key={job.id}
                    className="p-3.5 rounded-xl border border-border/20 bg-muted/5 space-y-1.5"
                  >
                    <div className="font-bold text-xs text-neutral-900 dark:text-white">
                      {job.title}
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-muted-foreground font-semibold">
                      <span>{job.department}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-xs text-muted-foreground text-center py-6">
                  No jobs posted yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="flex-1 min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
          <span className="text-xs font-bold text-muted-foreground tracking-wide">
            Checking administrative session...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex min-h-screen overflow-hidden bg-background">
      {/* Sidebar - Desktop */}
      <div className="hidden md:flex">
        <AdminSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          collapsed={sidebarCollapsed}
          setCollapsed={setSidebarCollapsed}
        />
      </div>

      {/* Sidebar - Mobile Drawer Overlay */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileSidebarOpen(false)}
          />
          {/* Menu Drawer */}
          <div className="relative flex w-64 max-w-xs flex-col bg-card animate-slide-in">
            <AdminSidebar
              activeTab={activeTab}
              setActiveTab={(tab) => {
                setActiveTab(tab);
                setMobileSidebarOpen(false);
              }}
              collapsed={false}
              setCollapsed={() => {}}
            />
          </div>
        </div>
      )}

      {/* Main Content Pane */}
      <div className="flex-1 flex flex-col overflow-y-auto min-w-0">
        <AdminHeader
          activeTab={activeTab}
          onMenuToggle={() => setMobileSidebarOpen(true)}
        />
        <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto">
          {renderTabContent()}
        </main>
      </div>
    </div>
  );
}

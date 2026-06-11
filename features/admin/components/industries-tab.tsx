"use client";

import React, { useState, useEffect } from "react";
import { Industry } from "../types";
import { getIndustries, saveIndustries } from "../services/mock-data";
import {
  Plus,
  Search,
  Edit,
  Trash2,
  X,
  CreditCard,
  Activity,
  ShoppingBag,
  ShieldCheck,
  Globe,
  Database,
  Network,
  Terminal,
  Cloud,
  Layers
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  CreditCard,
  Activity,
  ShoppingBag,
  ShieldCheck,
  Globe,
  Database,
  Network,
  Terminal,
  Cloud,
  Layers
};

export function IndustriesTab() {
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndustry, setEditingIndustry] = useState<Industry | null>(null);

  // Form states
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("Globe");
  const [status, setStatus] = useState<"Active" | "Inactive">("Active");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndustries(getIndustries());
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const openCreateModal = () => {
    setEditingIndustry(null);
    setName("");
    setSlug("");
    setDescription("");
    setIcon("Globe");
    setStatus("Active");
    setIsModalOpen(true);
  };

  const openEditModal = (ind: Industry) => {
    setEditingIndustry(ind);
    setName(ind.name);
    setSlug(ind.slug);
    setDescription(ind.description);
    setIcon(ind.icon);
    setStatus(ind.status);
    setIsModalOpen(true);
  };

  const handleNameChange = (val: string) => {
    setName(val);
    setSlug(
      val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
    );
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this industry?")) {
      const updated = industries.filter((ind) => ind.id !== id);
      setIndustries(updated);
      saveIndustries(updated);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description || !slug) {
      alert("Please enter required fields.");
      return;
    }

    if (editingIndustry) {
      const updated = industries.map((ind) =>
        ind.id === editingIndustry.id
          ? { ...ind, name, slug, description, icon, status }
          : ind
      );
      setIndustries(updated);
      saveIndustries(updated);
    } else {
      const newInd: Industry = {
        id: `ind-${Date.now()}`,
        name,
        slug,
        description,
        icon,
        status,
        createdAt: new Date().toISOString()
      };
      const updated = [...industries, newInd];
      setIndustries(updated);
      saveIndustries(updated);
    }

    setIsModalOpen(false);
  };

  const filtered = industries.filter((ind) =>
    ind.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Search & Actions Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative flex-1 max-w-md w-full">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search industry name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-border bg-card pl-10 pr-4 py-2.5 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
          />
        </div>

        <button
          onClick={openCreateModal}
          className="flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 px-4.5 py-2.5 text-xs font-bold text-white shadow-lg shadow-indigo-600/10 transition-all w-full sm:w-auto justify-center"
        >
          <Plus className="h-4 w-4" />
          <span>Add Industry</span>
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((ind) => {
            const IndustryIcon = ICON_MAP[ind.icon] || Globe;
            return (
              <div
                key={ind.id}
                className="flex flex-col justify-between p-6 bg-card border border-border/40 rounded-2xl relative group shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
                      <IndustryIcon className="h-5 w-5" />
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                        ind.status === "Active"
                          ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30"
                          : "bg-neutral-50 dark:bg-neutral-900/50 text-neutral-500 dark:text-neutral-400 border border-neutral-200/40"
                      }`}
                    >
                      {ind.status}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-sm font-extrabold text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-[10px] font-bold text-muted-foreground font-mono">
                      /{ind.slug}
                    </p>
                  </div>

                  <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-6 flex justify-end gap-2 border-t border-border/20 pt-4">
                  <button
                    onClick={() => openEditModal(ind)}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-600/30 transition-all"
                  >
                    <Edit className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => handleDelete(ind.id)}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:text-destructive hover:border-destructive/30 transition-all"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full py-12 text-center text-muted-foreground text-xs font-semibold">
            No industries found.
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg rounded-2xl border border-border/40 bg-card p-6 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-border/40 pb-4">
              <h3 className="text-base font-extrabold text-neutral-900 dark:text-white">
                {editingIndustry ? "Modify Industry Profile" : "Create Targeted Industry"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                  Industry Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  placeholder="e.g. Fintech & Digital Banking"
                  className="w-full rounded-xl border border-border bg-muted/10 px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                    Slug *
                  </label>
                  <input
                    type="text"
                    required
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="w-full rounded-xl border border-border bg-muted/10 px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                    Status
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as "Active" | "Inactive")}
                    className="w-full rounded-xl border border-border bg-muted/10 px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                  Visual Icon Representing Industry
                </label>
                <select
                  value={icon}
                  onChange={(e) => setIcon(e.target.value)}
                  className="w-full rounded-xl border border-border bg-muted/10 px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                >
                  {Object.keys(ICON_MAP).map((k) => (
                    <option key={k} value={k}>
                      {k}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                  Description *
                </label>
                <textarea
                  required
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Detail the industry scope, pain points we address, and value proposition..."
                  className="w-full rounded-xl border border-border bg-muted/10 px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-border/40">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl border border-border hover:bg-muted px-5 py-2.5 text-xs font-bold text-muted-foreground hover:text-foreground transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-indigo-600 hover:bg-indigo-700 px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-indigo-600/10 transition-all"
                >
                  {editingIndustry ? "Update Profile" : "Add Industry"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { SystemSettings } from "../types";
import { getSettings, saveSettings } from "../services/mock-data";
import { Save, Info, Sliders, ToggleLeft, ToggleRight, Mail, Phone, MapPin } from "lucide-react";

export function SettingsTab() {
  const [settings, setSettings] = useState<SystemSettings | null>(null);

  // Form states
  const [siteName, setSiteName] = useState("");
  const [siteEmail, setSiteEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [address, setAddress] = useState("");
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [allowPublicApplications, setAllowPublicApplications] = useState(true);
  const [maxUploadSizeMb, setMaxUploadSizeMb] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      const s = getSettings();
      setSettings(s);
      setSiteName(s.siteName);
      setSiteEmail(s.siteEmail);
      setContactPhone(s.contactPhone);
      setAddress(s.address);
      setMaintenanceMode(s.maintenanceMode);
      setAllowPublicApplications(s.allowPublicApplications);
      setMaxUploadSizeMb(s.maxUploadSizeMb);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: SystemSettings = {
      siteName,
      siteEmail,
      contactPhone,
      address,
      maintenanceMode,
      allowPublicApplications,
      maxUploadSizeMb
    };
    saveSettings(updated);
    setSettings(updated);
    alert("Portal system settings saved successfully!");
  };

  if (!settings) return null;

  return (
    <div className="space-y-6 max-w-4xl">
      <form onSubmit={handleSave} className="space-y-6">
        {/* Portal Branding */}
        <div className="rounded-2xl border border-border/40 bg-card p-6 space-y-4">
          <h3 className="text-sm font-extrabold text-neutral-900 dark:text-white flex items-center gap-2">
            <Sliders className="h-4.5 w-4.5 text-indigo-600 dark:text-indigo-400" />
            <span>General Portal Configuration</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                Portal Application Name *
              </label>
              <input
                type="text"
                required
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                placeholder="e.g. Hopes Technologies Portal"
                className="w-full rounded-xl border border-border bg-muted/10 px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                Max Attachment Upload Size (MB) *
              </label>
              <input
                type="number"
                required
                value={maxUploadSizeMb}
                onChange={(e) => setMaxUploadSizeMb(Number(e.target.value))}
                placeholder="e.g. 10"
                className="w-full rounded-xl border border-border bg-muted/10 px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="rounded-2xl border border-border/40 bg-card p-6 space-y-4">
          <h3 className="text-sm font-extrabold text-neutral-900 dark:text-white flex items-center gap-2">
            <Info className="h-4.5 w-4.5 text-indigo-600 dark:text-indigo-400" />
            <span>Public Contact Metadata</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                <Mail className="h-3 w-3 text-muted-foreground" /> Admin Support Email *
              </label>
              <input
                type="email"
                required
                value={siteEmail}
                onChange={(e) => setSiteEmail(e.target.value)}
                placeholder="admin@hopestechnologies.com"
                className="w-full rounded-xl border border-border bg-muted/10 px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                <Phone className="h-3 w-3 text-muted-foreground" /> Contact Telephone *
              </label>
              <input
                type="text"
                required
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full rounded-xl border border-border bg-muted/10 px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
              <MapPin className="h-3 w-3 text-muted-foreground" /> Registered Address *
            </label>
            <input
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Full physical office location"
              className="w-full rounded-xl border border-border bg-muted/10 px-3 py-2 text-xs font-semibold focus:border-indigo-600 focus:outline-none"
            />
          </div>
        </div>

        {/* Feature Toggles */}
        <div className="rounded-2xl border border-border/40 bg-card p-6 space-y-5">
          <h3 className="text-sm font-extrabold text-neutral-900 dark:text-white">
            Security & System Toggles
          </h3>

          <div className="space-y-4">
            {/* Toggle 1 */}
            <div className="flex items-center justify-between border-b border-border/10 pb-4">
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-neutral-800 dark:text-white">Maintenance Mode</p>
                <p className="text-[11px] text-muted-foreground">
                  Lock all client portal traffic and display a static maintenance message.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setMaintenanceMode(!maintenanceMode)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {maintenanceMode ? (
                  <ToggleRight className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                ) : (
                  <ToggleLeft className="h-8 w-8 text-muted-foreground" />
                )}
              </button>
            </div>

            {/* Toggle 2 */}
            <div className="flex items-center justify-between pb-2">
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-neutral-800 dark:text-white">Allow Public Job Applications</p>
                <p className="text-[11px] text-muted-foreground">
                  If deactivated, public users can view jobs but cannot submit resumes.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setAllowPublicApplications(!allowPublicApplications)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {allowPublicApplications ? (
                  <ToggleRight className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                ) : (
                  <ToggleLeft className="h-8 w-8 text-muted-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end pt-4 border-t border-border/40">
          <button
            type="submit"
            className="flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-indigo-600/10 transition-all"
          >
            <Save className="h-4 w-4" />
            <span>Save Portal Settings</span>
          </button>
        </div>
      </form>
    </div>
  );
}

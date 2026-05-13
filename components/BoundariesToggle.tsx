"use client";

import { CheckCircle2, ShieldMinus } from "lucide-react";
import { useState } from "react";
import { valkorDoes, valkorDoesNot } from "@/lib/siteData";

const tabs = [
  {
    id: "does",
    label: "Valkor Does",
    items: valkorDoes,
    icon: CheckCircle2,
    tone: "text-emerald-600",
    card: "border-emerald-200 bg-emerald-50/70"
  },
  {
    id: "does-not",
    label: "Valkor Does Not",
    items: valkorDoesNot,
    icon: ShieldMinus,
    tone: "text-valkor-orange",
    card: "border-orange-200 bg-orange-50/70"
  }
] as const;

export function BoundariesToggle() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("does");
  const active = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];
  const Icon = active.icon;

  return (
    <div className="mx-auto mt-12 max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-200/70">
      <div
        className="grid gap-2 rounded-[1.5rem] bg-slate-100 p-1 sm:grid-cols-2"
        role="tablist"
        aria-label="Valkor operational boundaries"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`boundaries-panel-${tab.id}`}
            id={`boundaries-tab-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-[1.25rem] px-5 py-3 text-sm font-bold transition duration-200 focus:outline-none focus:ring-2 focus:ring-valkor-orange focus:ring-offset-2 ${
              activeTab === tab.id
                ? "bg-white text-slate-950 shadow-sm"
                : "text-slate-500 hover:bg-white/60 hover:text-slate-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        id={`boundaries-panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`boundaries-tab-${active.id}`}
        className={`mt-3 rounded-[1.5rem] border p-5 transition duration-300 ${active.card}`}
      >
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
            <Icon className={`h-5 w-5 ${active.tone}`} aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-xl font-semibold tracking-tight text-slate-950">{active.label}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              {active.id === "does"
                ? "Operational capabilities Valkor is designed to support in controlled, school-approved pilots."
                : "Boundaries Valkor keeps clear so schools can evaluate it responsibly and explainably."}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {active.items.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/80 p-4 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-200/50">
                  <Icon className={`h-4 w-4 shrink-0 ${active.tone}`} aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

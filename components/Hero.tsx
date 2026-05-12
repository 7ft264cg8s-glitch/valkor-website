import Image from "next/image";
import { CircleDot, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { heroPreviewRows, heroTrustPills } from "@/lib/siteData";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-5 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_18%_12%,rgba(249,115,22,0.14),transparent_30%),radial-gradient(circle_at_76%_8%,rgba(30,64,175,0.09),transparent_34%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/85 px-3 py-1.5 text-sm font-semibold text-orange-700 shadow-sm backdrop-blur">
            <CircleDot className="h-4 w-4" aria-hidden="true" />
            From scattered hallway activity to structured operational awareness
          </div>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-slate-950 sm:text-6xl lg:text-7xl">
            A controlled operational layer for school movement.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Valkor gives approved administrators a school-hours view of zone-level movement, pass
            activity, overdue trips, incident signals, receiver health, and confidence state from one
            calm command dashboard.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#request-pilot" showArrow>
              Request a Controlled Pilot Review
            </Button>
            <Button href="#product-views" variant="secondary">
              Schedule a 15-Minute Operational Walkthrough
            </Button>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {heroTrustPills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur"
              >
                {pill}
              </span>
            ))}
          </div>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-500">
            Zone-level operational visibility during school-controlled hours. No GPS, cameras,
            biometrics, or home tracking.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-5 top-14 z-10 hidden w-56 rounded-3xl border border-slate-200 bg-white/92 p-4 shadow-2xl shadow-slate-300/60 backdrop-blur-xl xl:block">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Pilot Mode</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">Pilot-ready</p>
            <p className="mt-2 text-sm leading-5 text-slate-500">Admin-only operational view</p>
          </div>
          <div className="absolute -bottom-8 right-4 z-10 hidden w-72 rounded-3xl border border-orange-200 bg-white/94 p-4 shadow-2xl shadow-orange-200/50 backdrop-blur-xl md:block">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-slate-950">Human-controlled workflow</p>
                <p className="mt-1 text-sm leading-5 text-slate-500">
                  Valkor surfaces context. Approved staff decide next steps.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-300/70">
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950">
              <div className="flex items-center justify-between border-b border-white/10 bg-slate-900 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                  Valkor console preview
                </span>
              </div>
              <Image
                src="/product/overview.png"
                alt="Valkor command center dashboard showing demo mode, receiver health, system confidence, and incident controls."
                width={1800}
                height={1015}
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="aspect-[16/10] w-full object-cover object-left-top"
              />
            </div>
            <div className="grid gap-3 px-2 pt-4 sm:grid-cols-3">
              {heroPreviewRows.slice(0, 6).map((row) => (
                <div key={row.label} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">{row.label}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-950">{row.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

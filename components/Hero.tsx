import Image from "next/image";
import { CircleDot, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { heroPreviewRows, heroTrustPills } from "@/lib/siteData";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-5 pb-14 pt-12 text-slate-950 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8 lg:pb-16 lg:pt-16">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_18%_10%,rgba(249,115,22,0.105),transparent_30%),radial-gradient(circle_at_78%_22%,rgba(249,115,22,0.055),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.86)_0%,rgba(255,255,255,0.96)_48%,#ffffff_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-28 bg-gradient-to-t from-white to-transparent" />
      <div className="relative z-10 mx-auto grid w-full min-w-0 max-w-[calc(100vw-2.5rem)] items-center gap-10 sm:max-w-7xl lg:grid-cols-[0.9fr_1.1fr]">
        <div className="min-w-0 max-w-full">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/90 px-4 py-2 text-sm font-semibold text-orange-700 shadow-sm shadow-orange-100/50 backdrop-blur-xl">
            <CircleDot className="h-4 w-4" aria-hidden="true" />
            School-controlled movement awareness
          </div>
          <h1 className="max-w-[22rem] text-balance break-words text-3xl font-semibold leading-[1.08] tracking-[-0.025em] text-slate-950 sm:max-w-4xl sm:text-5xl lg:text-[3.35rem] lg:leading-[1.06]">
            Operational awareness for school movement, passes, and incident follow-up.
          </h1>
          <p className="mt-5 max-w-[22rem] text-base leading-8 text-slate-600 sm:max-w-2xl sm:text-lg">
            Valkor Systems helps approved administrators review pass activity, movement exceptions,
            receiver health, and incident follow-up from one calm school-hours dashboard.
          </p>
          <div className="mt-7 flex max-w-[22rem] flex-col gap-3 sm:max-w-none sm:flex-row">
            <Button href="#request-pilot" showArrow className="w-full sm:w-auto">
              Request Pilot Review
            </Button>
            <Button href="#product-views" variant="secondary" className="w-full sm:w-auto">
              View Product Demo
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {heroTrustPills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-slate-200 bg-white/85 px-3.5 py-1.5 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-200/60 backdrop-blur-xl"
              >
                {pill}
              </span>
            ))}
          </div>
          <p className="mt-4 max-w-[22rem] text-sm leading-6 text-slate-500 sm:max-w-2xl">
            Decision support only. Approved staff verify facts and decide next steps.
          </p>
        </div>

        <div className="relative min-w-0 max-w-[22rem] overflow-visible sm:max-w-full lg:-mt-4 xl:-mr-6">
          <div className="w-full min-w-0 max-w-full rounded-[2rem] border border-white bg-white/90 p-3 shadow-[0_30px_90px_rgba(15,23,42,0.2)] backdrop-blur-2xl">
            <div className="min-w-0 overflow-hidden rounded-[1.65rem] border border-slate-200/80 bg-slate-950 ring-1 ring-white/70">
              <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/95 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="hidden rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 sm:inline-flex">
                  Valkor command view
                </span>
              </div>
              <Image
                src="/product/overview.png"
                alt="Valkor command center dashboard showing demo mode, receiver health, system confidence, and incident controls."
                width={1800}
                height={1015}
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="aspect-[16/10] w-full min-w-0 object-cover object-left-top"
              />
            </div>
            <div className="grid gap-3 px-2 pt-4 sm:grid-cols-3">
              {heroPreviewRows.slice(0, 3).map((row) => (
                <div key={row.label} className="rounded-2xl border border-slate-200/80 bg-white p-3 shadow-sm shadow-slate-200/60">
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">{row.label}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-950">{row.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-24 right-5 z-10 hidden max-w-xs rounded-2xl border border-slate-200 bg-white/95 p-4 text-slate-950 shadow-2xl shadow-slate-300/50 backdrop-blur-xl md:block">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
              <p className="text-sm leading-6 text-slate-600">
                Review-ready context for approved staff. No automatic discipline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

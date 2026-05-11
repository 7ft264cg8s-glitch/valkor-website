import { Activity, AlertTriangle, CircleDot, Radio, ShieldCheck } from "lucide-react";
import { MotionDiv } from "@/components/Motion";
import { Section } from "@/components/ui/Section";
import { receiverHealth, systemAlerts, timelineEvents, zoneActivity } from "@/lib/siteData";

function toneClasses(tone: string) {
  if (tone === "success") return "bg-valkor-success/10 text-valkor-success border-valkor-success/25";
  if (tone === "warning") return "bg-valkor-warning/10 text-valkor-warning border-valkor-warning/25";
  return "bg-white/[0.06] text-valkor-muted border-white/10";
}

export function DashboardShowcase() {
  return (
    <Section
      title="A command view for everyday operational decisions"
      description="The dashboard gives approved administrators concise context: where zone activity is changing, which receivers need attention, what alerts require review, and how staff response workflows are progressing."
      className="overflow-hidden bg-valkor-secondary"
    >
      <MotionDiv
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-2xl border border-white/10 bg-valkor-panel shadow-panel"
      >
        <div className="flex flex-col gap-4 border-b border-white/10 bg-white/[0.035] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-valkor-text">Valkor Dashboard</p>
            <p className="mt-1 text-xs text-valkor-muted">Main Building | School-hours operation</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="whitespace-nowrap rounded-full border border-valkor-success/25 bg-valkor-success/10 px-3 py-1.5 text-xs font-semibold text-valkor-success">
              System online
            </span>
            <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-valkor-muted">
              Admin-approved access
            </span>
            <span className="whitespace-nowrap rounded-full border border-valkor-orange/30 bg-valkor-orange/10 px-3 py-1.5 text-xs font-semibold text-valkor-orange">
              Controlled pilot
            </span>
          </div>
        </div>

        <div className="grid gap-4 p-4 lg:grid-cols-[minmax(220px,250px)_minmax(0,1fr)_minmax(280px,320px)]">
          <aside className="min-w-0 rounded-xl border border-white/10 bg-[#0B1224] p-4">
            <div className="mb-4 flex items-center gap-2">
              <Activity className="h-4 w-4 text-valkor-orange" />
              <h3 className="text-sm font-semibold text-valkor-text">Approved Zones</h3>
            </div>
            <div className="space-y-3">
              {zoneActivity.map((zone) => (
                <div key={zone.zone} className="rounded-lg border border-white/10 bg-white/[0.035] p-3">
                  <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
                    <p className="min-w-0 text-sm font-medium leading-5 text-valkor-text">{zone.zone}</p>
                    <span className="whitespace-nowrap text-xs leading-5 text-valkor-muted">
                      Confidence: {zone.confidence}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-valkor-muted">Activity: {zone.activity}</p>
                </div>
              ))}
            </div>
          </aside>

          <div className="min-w-0 space-y-4">
            <div className="rounded-xl border border-white/10 bg-[#0B1224] p-4">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-valkor-text">Zone Activity</h3>
                <span className="whitespace-nowrap text-xs text-valkor-muted">Pilot area</span>
              </div>
              <div className="grid min-h-[330px] grid-cols-6 grid-rows-5 gap-2">
                {Array.from({ length: 30 }).map((_, index) => {
                  const active = [2, 3, 8, 9, 14, 15, 20].includes(index);
                  const warning = [10, 16, 22].includes(index);
                  return (
                    <div
                      key={index}
                      className={`rounded-md border ${
                        warning
                          ? "border-valkor-warning/40 bg-valkor-warning/10"
                          : active
                            ? "border-valkor-orange/40 bg-valkor-orange/10"
                            : "border-white/10 bg-white/[0.04]"
                      }`}
                    />
                  );
                })}
              </div>
            </div>

            <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(240px,260px)]">
              <div className="min-w-0 rounded-xl border border-white/10 bg-[#0B1224] p-4">
                <h3 className="mb-4 text-sm font-semibold text-valkor-text">Event History</h3>
                <div className="space-y-3">
                  {timelineEvents.map((event) => (
                    <div key={`${event.time}-${event.label}`} className="flex min-w-0 gap-3 text-sm">
                      <span className="w-12 shrink-0 whitespace-nowrap font-medium text-valkor-muted">{event.time}</span>
                      <CircleDot className="mt-0.5 h-4 w-4 shrink-0 text-valkor-orange" />
                      <div className="min-w-0">
                        <p className="text-pretty font-medium leading-5 text-valkor-text">{event.label}</p>
                        <p className="mt-1 text-xs leading-5 text-valkor-muted">{event.zone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="min-w-0 rounded-xl border border-white/10 bg-[#0B1224] p-4">
                <div className="mb-4 flex items-center gap-2">
                  <Radio className="h-4 w-4 text-valkor-success" />
                  <h3 className="text-sm font-semibold text-valkor-text">Receiver Health</h3>
                </div>
                <div className="space-y-3">
                  {receiverHealth.map((receiver) => (
                    <div key={receiver.name} className="flex items-center justify-between gap-3 text-sm">
                      <span className="min-w-0 text-valkor-muted">{receiver.name}</span>
                      <span
                        className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold ${toneClasses(
                          receiver.tone
                        )}`}
                      >
                        {receiver.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="min-w-0 rounded-xl border border-white/10 bg-[#0B1224] p-4">
            <div className="mb-4 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-valkor-warning" />
              <h3 className="text-sm font-semibold text-valkor-text">Live Incident Queue</h3>
            </div>
            <div className="space-y-3">
              {systemAlerts.map((alert) => (
                <div key={alert.label} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="min-w-0 text-sm font-medium leading-5 text-valkor-text">{alert.label}</p>
                    <span className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold ${toneClasses(alert.tone)}`}>
                      {alert.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.035] p-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-valkor-orange" />
                <p className="text-sm font-semibold text-valkor-text">Operator actions</p>
              </div>
              <p className="mt-3 text-pretty text-sm leading-6 text-valkor-muted">
                Validate context, assign response, acknowledge status, and record outcomes in one
                controlled workflow.
              </p>
            </div>
          </aside>
        </div>
      </MotionDiv>
    </Section>
  );
}

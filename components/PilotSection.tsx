import { BarChart3, CheckCircle2, ClipboardList } from "lucide-react";
import { MotionDiv } from "@/components/Motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { pilotMetrics, pilotScope } from "@/lib/siteData";

export function PilotSection() {
  return (
    <Section
      id="pilot"
      eyebrow="Controlled pilot"
      title="Built for controlled school pilots."
      description="Valkor can be evaluated through a limited pilot focused on daily operational visibility, hallway accountability, congestion awareness, and administrative response workflows."
      className="bg-valkor-secondary"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <MotionDiv
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.48 }}
          className="rounded-2xl border border-white/10 bg-valkor-panel p-6 sm:p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-valkor-orange/10">
              <ClipboardList className="h-5 w-5 text-valkor-orange" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-valkor-text">Pilot scope</h3>
          </div>
          <div className="grid gap-3">
            {pilotScope.map((item) => (
              <div key={item.label} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-valkor-success" />
                <span className="text-sm leading-6 text-valkor-muted">
                  <span className="font-semibold text-valkor-text">{item.label}:</span> {item.value}
                </span>
              </div>
            ))}
          </div>
          <Button href="#contact" showArrow className="mt-6">
            Request Pilot Information
          </Button>
        </MotionDiv>

        <MotionDiv
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.48, delay: 0.08 }}
          className="rounded-2xl border border-white/10 bg-valkor-panel p-6 sm:p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-valkor-orange/10">
              <BarChart3 className="h-5 w-5 text-valkor-orange" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-valkor-text">Pilot success metrics</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {pilotMetrics.map((metric) => (
              <div
                key={metric}
                className="rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-medium text-valkor-text"
              >
                {metric}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-valkor-muted">
            A pilot should answer practical questions: whether the dashboard improves visibility,
            whether receiver placement is reliable, and whether administrators can use the context
            without adding unnecessary operational burden.
          </p>
        </MotionDiv>
      </div>
    </Section>
  );
}

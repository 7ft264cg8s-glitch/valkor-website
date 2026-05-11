import { Compass, ShieldCheck } from "lucide-react";
import { MotionDiv } from "@/components/Motion";
import { Section } from "@/components/ui/Section";

export function MissionSection() {
  return (
    <Section
      title="Reducing blind spots before they become operational failures"
      description="Schools often lose context during normal movement, transitions, hallway activity, drills, and incidents. Valkor exists to help administrators see operational conditions earlier, coordinate with more confidence, and build a foundation for future emergency-routing intelligence."
    >
      <MotionDiv
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.48 }}
        className="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr]"
      >
        <div className="rounded-xl border border-white/10 bg-valkor-panel p-6">
          <Compass className="h-8 w-8 text-valkor-orange" aria-hidden="true" />
          <p className="mt-6 text-2xl font-semibold leading-9 text-valkor-text">
            Calm, controlled visibility for the moments schools need context.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-valkor-panel p-5">
            <ShieldCheck className="h-5 w-5 text-valkor-success" aria-hidden="true" />
            <h3 className="mt-5 text-base font-semibold text-valkor-text">Operational first</h3>
            <p className="mt-3 text-sm leading-6 text-valkor-muted">
              The platform focuses on visibility, review, and coordination inside approved school
              contexts.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-valkor-panel p-5">
            <ShieldCheck className="h-5 w-5 text-valkor-success" aria-hidden="true" />
            <h3 className="mt-5 text-base font-semibold text-valkor-text">Built for evaluation</h3>
            <p className="mt-3 text-sm leading-6 text-valkor-muted">
              Pilot conversations should produce clear evidence about workflow value, system health,
              and administrative usability.
            </p>
          </div>
        </div>
      </MotionDiv>
    </Section>
  );
}

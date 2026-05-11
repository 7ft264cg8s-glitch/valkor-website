import { MotionDiv } from "@/components/Motion";
import { Section } from "@/components/ui/Section";
import { receiverHealth, systemConfidenceFeatures } from "@/lib/siteData";

function toneClasses(tone: string) {
  if (tone === "success") return "bg-valkor-success/10 text-valkor-success border-valkor-success/25";
  if (tone === "warning") return "bg-valkor-warning/10 text-valkor-warning border-valkor-warning/25";
  return "bg-white/[0.06] text-valkor-muted border-white/10";
}

export function SystemConfidenceSection() {
  return (
    <Section
      title="Built with operational reliability in mind."
      description="Schools need to know whether the system is working before relying on any dashboard. Valkor includes receiver health, data freshness, system status, and confidence indicators so administrators and technical reviewers can understand system reliability."
    >
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <MotionDiv
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.46 }}
          className="rounded-2xl border border-white/10 bg-valkor-panel p-6 shadow-panel sm:p-8"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="text-sm font-semibold text-valkor-text">System Confidence</p>
              <p className="mt-1 text-xs text-valkor-muted">Updated 10:56 AM</p>
            </div>
            <span className="rounded-full border border-valkor-success/25 bg-valkor-success/10 px-3 py-1 text-xs font-semibold text-valkor-success">
              Healthy
            </span>
          </div>
          <div className="mt-5 space-y-4">
            {receiverHealth.map((receiver) => (
              <div key={receiver.name} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-valkor-text">{receiver.name}</span>
                  <span
                    className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${toneClasses(
                      receiver.tone
                    )}`}
                  >
                    {receiver.status}
                  </span>
                </div>
              </div>
            ))}
            <div className="grid gap-3 pt-1 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <p className="text-xs text-valkor-muted">Last event received</p>
                <p className="mt-2 text-lg font-semibold text-valkor-text">18 sec ago</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <p className="text-xs text-valkor-muted">Pilot area confidence</p>
                <p className="mt-2 text-lg font-semibold text-valkor-text">92%</p>
              </div>
            </div>
          </div>
        </MotionDiv>

        <div className="grid gap-4 sm:grid-cols-2">
          {systemConfidenceFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <MotionDiv
                key={feature.title}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{ y: -3 }}
                className="rounded-xl border border-white/10 bg-white/[0.035] p-5"
              >
                <Icon className="h-5 w-5 text-valkor-orange" aria-hidden="true" />
                <h3 className="mt-5 text-base font-semibold text-valkor-text">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-valkor-muted">{feature.description}</p>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

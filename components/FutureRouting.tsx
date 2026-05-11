import { MotionDiv } from "@/components/Motion";
import { Section } from "@/components/ui/Section";
import { futureCapabilities } from "@/lib/siteData";

export function FutureRouting() {
  return (
    <Section
      id="future-routing"
      eyebrow="Roadmap"
      title="Future roadmap: dynamic emergency routing intelligence."
      description="Valkor’s long-term roadmap includes dynamic routing capabilities that could help schools evaluate safer movement paths during emergency scenarios by accounting for blocked routes, crowding, hazards, and changing building conditions. This is a future development direction, not the current pilot focus."
      className="bg-valkor-secondary"
    >
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <MotionDiv
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.48 }}
          className="rounded-2xl border border-white/10 bg-valkor-panel p-6 sm:p-8"
        >
          <p className="text-xl font-semibold leading-8 text-valkor-text">
            The current pilot focus remains operational awareness.
          </p>
          <p className="mt-5 text-sm leading-7 text-valkor-muted">
            Today, Valkor is focused on hallway movement visibility, overdue movement awareness,
            zone activity, receiver health, incident coordination, and staff response workflows.
          </p>
          <div className="mt-6 rounded-lg border border-valkor-orange/25 bg-valkor-orange/10 p-4 text-sm leading-6 text-valkor-text">
            Any future routing intelligence would be decision support for trained school leaders. It
            would not replace school emergency procedures or guarantee outcomes.
          </div>
        </MotionDiv>

        <div className="grid gap-4 sm:grid-cols-2">
          {futureCapabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <MotionDiv
                key={capability.title}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.42, delay: index * 0.04 }}
                whileHover={{ y: -3 }}
                className="rounded-xl border border-white/10 bg-white/[0.035] p-5"
              >
                <Icon className="h-5 w-5 text-valkor-orange" aria-hidden="true" />
                <h3 className="mt-5 text-base font-semibold text-valkor-text">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-valkor-muted">
                  {capability.description}
                </p>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

import { MotionDiv } from "@/components/Motion";
import { Section } from "@/components/ui/Section";
import { platformFeatures } from "@/lib/siteData";

export function PlatformOverview() {
  return (
    <Section
      id="platform"
      eyebrow="Platform overview"
      title="A command surface for daily school operations."
      description="Valkor organizes movement signals, zone activity, incident alerts, and receiver health into one operational dashboard so approved staff can identify issues, assign response, and review outcomes."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {platformFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <MotionDiv
              key={feature.title}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.42, delay: index * 0.03 }}
              whileHover={{ y: -4 }}
              className="group rounded-xl border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-valkor-orange/35 hover:bg-white/[0.055]"
            >
              <Icon className="h-5 w-5 text-valkor-orange" aria-hidden="true" />
              <h3 className="mt-5 text-base font-semibold text-valkor-text">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-valkor-muted">{feature.description}</p>
            </MotionDiv>
          );
        })}
      </div>
    </Section>
  );
}

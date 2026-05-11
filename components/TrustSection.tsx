import { MotionDiv } from "@/components/Motion";
import { Section } from "@/components/ui/Section";
import { doesNotDo, trustCards } from "@/lib/siteData";
import { MinusCircle } from "lucide-react";

export function TrustSection() {
  return (
    <Section
      id="trust"
      title="Controlled visibility, not surveillance."
      description="Valkor is designed for school-approved operational visibility during approved school hours and within approved pilot areas. Access can be limited by role, zone, user permission, and pilot scope."
      className="bg-valkor-secondary"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trustCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <MotionDiv
              key={card.title}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              whileHover={{ y: -3 }}
              className="rounded-xl border border-white/10 bg-valkor-panel p-6 transition hover:border-white/20 hover:bg-white/[0.045]"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-valkor-orange/25 bg-valkor-orange/10">
                <Icon className="h-5 w-5 text-valkor-orange" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-valkor-text">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-valkor-muted">{card.description}</p>
            </MotionDiv>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-valkor-panel p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-valkor-text">What Valkor does not do</h3>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {doesNotDo.map((item) => (
            <div key={item} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4">
              <MinusCircle className="mt-0.5 h-5 w-5 shrink-0 text-valkor-orange" aria-hidden="true" />
              <span className="text-sm leading-6 text-valkor-muted">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

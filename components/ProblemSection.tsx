import { MotionDiv } from "@/components/Motion";
import { Section } from "@/components/ui/Section";
import { problemCards } from "@/lib/siteData";

export function ProblemSection() {
  return (
    <Section
      title="Schools still operate with limited real-time visibility."
      description="During the school day, administrators often rely on manual reports, delayed communication, disconnected systems, and staff observation to understand hallway activity. Valkor gives schools a clearer operational layer for approved pilot areas, helping administrators see what needs attention and respond with more confidence."
      className="bg-valkor-secondary"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {problemCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <MotionDiv
              key={card.title}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.42, delay: index * 0.04 }}
              whileHover={{ y: -4 }}
              className="rounded-xl border border-white/10 bg-valkor-panel p-6 shadow-panel"
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
    </Section>
  );
}

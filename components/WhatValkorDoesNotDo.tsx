import { MinusCircle } from "lucide-react";
import { MotionDiv } from "@/components/Motion";
import { Section } from "@/components/ui/Section";
import { doesNotDo } from "@/lib/siteData";

export function WhatValkorDoesNotDo() {
  return (
    <Section
      title="What Valkor does not do"
      description="Trust starts with boundaries. Valkor is being developed for approved school-controlled operational awareness, with clear limits on scope, access, and claims."
    >
      <MotionDiv
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.48 }}
        className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-7"
      >
        <div className="grid gap-3 md:grid-cols-2">
          {doesNotDo.map((item) => (
            <div key={item} className="flex gap-3 rounded-lg border border-white/10 bg-valkor-panel p-4">
              <MinusCircle className="mt-0.5 h-5 w-5 shrink-0 text-valkor-orange" aria-hidden="true" />
              <span className="text-sm leading-6 text-valkor-muted">{item}</span>
            </div>
          ))}
        </div>
      </MotionDiv>
    </Section>
  );
}

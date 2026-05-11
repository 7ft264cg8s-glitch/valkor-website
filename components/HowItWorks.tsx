import { ArrowRight } from "lucide-react";
import { MotionDiv } from "@/components/Motion";
import { Section } from "@/components/ui/Section";
import { workflowSteps } from "@/lib/siteData";

export function HowItWorks() {
  return (
    <Section
      id="workflow"
      title="From signal to response."
      description="Valkor is designed to help administrators close the loop. Each incident can be reviewed, assigned, acted on, and logged, giving schools a clearer record of what happened and how staff responded."
    >
      <div className="grid gap-4 lg:grid-cols-5">
        {workflowSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <MotionDiv
              key={step.title}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.42, delay: index * 0.04 }}
              whileHover={{ y: -4 }}
              className="relative rounded-xl border border-white/10 bg-white/[0.035] p-5"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-valkor-orange/10">
                <Icon className="h-5 w-5 text-valkor-orange" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-valkor-text">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-valkor-muted">{step.description}</p>
              {index < workflowSteps.length - 1 ? (
                <ArrowRight className="absolute -right-3 top-8 hidden h-5 w-5 text-white/25 lg:block" />
              ) : null}
            </MotionDiv>
          );
        })}
      </div>
    </Section>
  );
}

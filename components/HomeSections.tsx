import Image from "next/image";
import { ArrowRight, CheckCircle2, FileText, HelpCircle, Mail, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { MotionDiv } from "@/components/Motion";
import {
  adminActions,
  dataPurposes,
  doesNotDo,
  faqItems,
  formInterests,
  helpsSchoolsDo,
  howItWorksSteps,
  incidentLifecycle,
  nextSteps,
  operationalData,
  pilotMetrics,
  pilotScope,
  productScreenshots,
  publicTechExclusions,
  reliabilityStates,
  resolutionReasons,
  resources,
  roadmapCapabilities,
  schoolTypes,
  technicalComponents
} from "@/lib/siteData";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  muted?: boolean;
};

function SectionShell({ id, eyebrow, title, description, children, muted = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`${muted ? "bg-slate-50/80" : "bg-white"} scroll-mt-24 px-5 py-24 sm:px-6 lg:px-8 lg:py-28`}
    >
      <div className="mx-auto max-w-7xl">
        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          {eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-valkor-orange">{eyebrow}</p>
          ) : null}
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">
            {title}
          </h2>
          {description ? <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p> : null}
        </MotionDiv>
        {children}
      </div>
    </section>
  );
}

function IconCard({ item }: { item: (typeof helpsSchoolsDo)[number] }) {
  const Icon = item.icon;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80"
    >
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-valkor-orange">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
    </MotionDiv>
  );
}

function Chip({ children, tone = "slate" }: { children: ReactNode; tone?: "slate" | "orange" | "green" }) {
  const tones = {
    slate: "border-slate-200 bg-white text-slate-700",
    orange: "border-orange-200 bg-orange-50 text-orange-700",
    green: "border-emerald-200 bg-emerald-50 text-emerald-700"
  };

  return (
    <span className={`rounded-full border px-3 py-1.5 text-sm font-semibold ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function PositioningStatement() {
  const cards = [
    ["Expected movement", "Approved hall pass and zone context stays visible to administrators."],
    ["Zone confidence", "Confirmed, likely, stale, weak, or unknown states are shown clearly."],
    ["Staff response workflow", "Human teams acknowledge, assign, respond, resolve, and review."]
  ];

  return (
    <section className="border-y border-slate-200 bg-white px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-valkor-orange">Positioning</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
            Supplemental visibility for approved administrators.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Valkor helps schools see expected movement, confidence, and follow-up status without
            turning the product into GPS, camera surveillance, or automatic discipline.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {cards.map(([title, description]) => (
            <div key={title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-semibold text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HelpsSchoolsSection() {
  return (
    <SectionShell
      id="what-valkor-helps-schools-do"
      eyebrow="Operational Awareness"
      title="What Valkor Helps Schools Do"
      description="Six operational surfaces for controlled pilots: movement, zones, confidence, receivers, workflow, and proof."
    >
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {helpsSchoolsDo.map((item) => (
          <IconCard key={item.title} item={item} />
        ))}
      </div>
    </SectionShell>
  );
}

export function HowItWorksSection() {
  const process = [
    "Approved badge signal",
    "Zone receiver",
    "Device validation",
    "Confidence engine",
    "Operational dashboard",
    "Staff decision"
  ];

  return (
    <SectionShell
      id="how-it-works"
      eyebrow="How It Works"
      title="From approved signal to staff decision."
      description="A school-controlled flow: approved local signals, fixed receivers, validation, confidence scoring, dashboard context, and human next steps."
      muted
    >
      <div className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/70">
        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
          {process.map((item, index) => (
            <div key={item} className="relative rounded-3xl bg-slate-50 p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-valkor-orange shadow-sm">
                {index + 1}
              </span>
              <p className="mt-5 text-sm font-semibold leading-5 text-slate-950">{item}</p>
              {index < process.length - 1 ? (
                <ArrowRight className="absolute right-4 top-6 hidden h-4 w-4 text-slate-300 lg:block" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-5">
        {howItWorksSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <MotionDiv
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" }}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-valkor-orange">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="text-sm font-semibold text-slate-400">0{index + 1}</span>
              </div>
              <h3 className="text-base font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
            </MotionDiv>
          );
        })}
      </div>
    </SectionShell>
  );
}

export function PilotProgramSection() {
  const scope = pilotScope.slice(0, 5);
  const boundaries = [
    { label: "GPS", value: "No" },
    { label: "Biometrics", value: "No" },
    { label: "Autonomous discipline", value: "No" },
    { label: "Emergency dependency", value: "None" }
  ];

  return (
    <SectionShell
      id="pilot-program"
      eyebrow="Pilot Program"
      title="Limited Pilot Program"
      description="Small, controlled, measurable deployments for schools that want operational proof before broader conversations."
    >
      <div className="mt-12 rounded-[2rem] border border-slate-200 bg-slate-950 p-4 shadow-2xl shadow-slate-300/60 sm:p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {scope.map((item) => (
            <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-300">{item.label}</p>
              <p className="mt-3 text-xl font-semibold leading-7 text-white">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {boundaries.map((item) => (
            <span key={item.label} className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-sm font-semibold text-slate-200">
              {item.label}: {item.value}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-[1.5rem] border border-orange-200 bg-orange-50 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-700">Procurement posture</p>
          <p className="mt-3 text-lg font-semibold leading-8 text-slate-950">
            A pilot should prove daily value without becoming an emergency dependency.
          </p>
        </div>
        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-base leading-7 text-slate-600">
            Valkor gives schools supplemental, zone-level operational visibility during school-controlled
            hours. It helps administrators understand pass movement, overdue students, route deviations,
            receiver health, and incident follow-up with confidence indicators.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

export function TrustPrivacySection() {
  return (
    <SectionShell
      id="trust-privacy"
      eyebrow="Trust & Privacy"
      title="Privacy & Operational Data"
      description="Designed around operational purpose, school control, role-based access, auditability, and clear deployment boundaries."
      muted
    >
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
          <h3 className="text-xl font-semibold text-slate-950">Data Valkor may process</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {operationalData.map((item) => (
              <Chip key={item}>{item}</Chip>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
          <h3 className="text-xl font-semibold text-slate-950">Why this data exists</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {dataPurposes.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export function ReliabilitySection() {
  return (
    <SectionShell
      id="reliability"
      eyebrow="Reliability"
      title="Uncertainty should be visible."
      description="If a receiver goes offline, a badge signal becomes stale, or zone confidence is low, Valkor should show that directly instead of pretending the system is certain."
    >
      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
          <h3 className="text-xl font-semibold text-slate-950">Reliability states</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {reliabilityStates.map((state, index) => (
              <Chip key={state} tone={index < 2 ? "green" : index < 6 ? "orange" : "slate"}>
                {state}
              </Chip>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ["Fresh", "Recent reading available."],
            ["Likely", "Useful signal with confidence context."],
            ["Stale", "Lower confidence until updated."]
          ].map(([label, copy]) => (
            <div key={label} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <p className="text-2xl font-semibold text-slate-950">{label}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

export function DoesNotDoSection() {
  return (
    <SectionShell
      id="does-not-do"
      eyebrow="Boundaries"
      title="What Valkor Does Not Do"
      description="Clear boundaries make the pilot easier to evaluate and easier to trust."
      muted
    >
      <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {doesNotDo.map((item) => (
            <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-medium leading-6 text-slate-700">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-valkor-orange" aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-5 text-base font-semibold leading-7 text-slate-950">
          Valkor provides supplemental, school-controlled operational visibility. It does not replace
          human judgment, school policy, emergency protocols, or administrator discretion.
        </p>
      </div>
    </SectionShell>
  );
}

export function IncidentWorkflowSection() {
  return (
    <SectionShell
      id="incident-workflow"
      eyebrow="Incident Workflow"
      title="A lifecycle, not just an alert."
      description="Administrators can review, assign, respond, resolve, dismiss, and document operational issues inside a human-controlled workflow."
    >
      <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
        <div className="flex flex-wrap items-center gap-3">
          {incidentLifecycle.map((state, index) => (
            <div key={state} className="flex items-center gap-3">
              <Chip tone={index < 2 ? "orange" : "slate"}>{state}</Chip>
              {index < incidentLifecycle.length - 1 ? (
                <ArrowRight className="hidden h-4 w-4 text-slate-300 sm:block" aria-hidden="true" />
              ) : null}
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.5rem] bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-950">Admin actions</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {adminActions.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
          <div className="rounded-[1.5rem] bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-950">Resolution reasons</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {resolutionReasons.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export function TechnicalOverviewSection() {
  return (
    <SectionShell
      id="technical-overview"
      eyebrow="Technical Overview"
      title="Technical enough for review. Public enough for restraint."
      description="A public-light view of approved badges, fixed receivers, validation, confidence scoring, receiver health, incident workflow, audit logging, and pilot reporting."
      muted
    >
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {technicalComponents.map((item) => (
          <IconCard key={item.title} item={item} />
        ))}
      </div>
      <details className="group mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-semibold text-slate-950">
          Not published on the public site
          <span className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-500 group-open:bg-slate-50">
            Review list
          </span>
        </summary>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {publicTechExclusions.map((item) => (
            <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm font-medium text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </details>
    </SectionShell>
  );
}

export function PilotMetricsSection() {
  return (
    <SectionShell
      id="pilot-metrics"
      eyebrow="Pilot Success Metrics"
      title="Proof points for school and district review."
      description="Metrics that help principals, IT reviewers, safety teams, and advisors evaluate pilot value without expanding scope."
    >
      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {pilotMetrics.map((metric) => (
          <div key={metric} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700 shadow-sm">
            {metric}
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export function ProductViewsSection() {
  const [featured, ...rest] = productScreenshots;

  return (
    <SectionShell
      id="product-views"
      eyebrow="Product Views"
      title="Live software proof, presented calmly."
      description="Screenshots from the Valkor dashboard show how command overview, incidents, zones, people, receiver health, and reporting fit together."
      muted
    >
      <div className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-300/70">
        <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950">
          <Image
            src={featured.src}
            alt={`${featured.title} screenshot`}
            width={1800}
            height={1015}
            className="aspect-[16/9] w-full object-cover object-left-top"
            sizes="100vw"
          />
        </div>
        <div className="p-5">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{featured.title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{featured.description}</p>
        </div>
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((shot) => (
          <article key={shot.src} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/60">
            <div className="bg-slate-950 p-2">
              <Image
                src={shot.src}
                alt={`${shot.title} screenshot`}
                width={1800}
                height={1015}
                className="aspect-[16/10] w-full rounded-[1rem] object-cover object-left-top"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-950">{shot.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{shot.description}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export function FAQPreviewSection() {
  return (
    <SectionShell
      id="faq"
      eyebrow="FAQ"
      title="Questions school leaders ask first."
      description="Expandable answers keep the homepage clean while preserving the trust details reviewers need."
    >
      <div className="mx-auto mt-12 max-w-4xl divide-y divide-slate-200 rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        {faqItems.map((item) => (
          <details key={item.question} className="group p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="flex items-center gap-3 text-left text-base font-semibold text-slate-950">
                <HelpCircle className="h-5 w-5 shrink-0 text-valkor-orange" aria-hidden="true" />
                {item.question}
              </span>
              <span className="rounded-full border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-500 group-open:bg-slate-50">
                Open
              </span>
            </summary>
            <p className="mt-4 pl-8 text-sm leading-6 text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}

export function ResourcesSection() {
  const available = resources.slice(0, 4);
  const comingSoon = resources.slice(4);
  const groups = [
    { label: "Available on request", items: available, tone: "orange" as const },
    { label: "Coming soon", items: comingSoon, tone: "slate" as const }
  ];

  return (
    <SectionShell
      id="resources"
      eyebrow="Resources"
      title="Trust Center resources."
      description="Public materials can be shared as they are approved. Deeper technical and deployment materials are available for school, district, IT, and safety review."
      muted
    >
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {groups.map((group) => (
          <div key={group.label} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-slate-950">{group.label}</h3>
              <FileText className="h-5 w-5 text-valkor-orange" aria-hidden="true" />
            </div>
            <div className="mt-5 grid gap-3">
              {group.items.map((resource) => (
                <div key={resource} className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 p-4">
                  <span className="text-sm font-semibold text-slate-800">{resource}</span>
                  <Chip tone={group.tone}>{group.label}</Chip>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export function FutureRoadmapSection() {
  return (
    <SectionShell
      id="future-roadmap"
      eyebrow="Roadmap"
      title="Future Roadmap: Dynamic Emergency Routing Intelligence"
      description="A future-facing direction, not the first pilot focus."
    >
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {roadmapCapabilities.map((item) => (
          <IconCard key={item.title} item={item} />
        ))}
      </div>
      <div className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-xl shadow-slate-300/60">
        <p className="text-lg font-semibold leading-8">
          The current pilot focus remains operational awareness: hallway movement visibility, overdue
          movement awareness, zone activity, receiver health, incident coordination, and staff response
          workflows.
        </p>
        <p className="mt-4 text-sm leading-6 text-slate-300">
          Any future routing intelligence would be decision support for trained school leaders. It would
          not replace school emergency procedures or guarantee outcomes.
        </p>
      </div>
    </SectionShell>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

const fieldClass =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-950 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-valkor-orange focus:ring-4 focus:ring-orange-100";

export function PilotRequestSection() {
  return (
    <section id="request-pilot" className="scroll-mt-24 bg-slate-950 px-5 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-300">Pilot Review</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Start with a controlled operational awareness pilot.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Limited scope. School-approved access. Human-controlled workflow. No GPS, cameras,
            biometrics, autonomous discipline, or emergency dependency in the first pilot.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="mailto:jackson@valkorsystems.com?subject=Valkor%20Pilot%20Review%20Request" showArrow>
              Contact Valkor Systems
            </Button>
            <Button href="#trust-privacy" variant="secondary">
              Review Trust & Privacy
            </Button>
          </div>
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="flex gap-3">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-orange-300" aria-hidden="true" />
              <p className="text-sm leading-6 text-slate-300">
                Prefer email? Contact{" "}
                <a className="font-semibold text-white hover:text-orange-200" href="mailto:jackson@valkorsystems.com">
                  jackson@valkorsystems.com
                </a>
                . Valkor pilots are limited, school-controlled, and designed around clear privacy,
                reliability, and success metrics.
              </p>
            </div>
          </div>
        </div>

        <form
          action="mailto:jackson@valkorsystems.com"
          method="post"
          encType="text/plain"
          className="rounded-[2rem] border border-slate-200 bg-white p-5 text-slate-950 shadow-2xl shadow-black/20 sm:p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name">
              <input className={fieldClass} name="name" autoComplete="name" required />
            </Field>
            <Field label="Role">
              <input className={fieldClass} name="role" autoComplete="organization-title" required />
            </Field>
            <Field label="School / district">
              <input className={fieldClass} name="school_district" autoComplete="organization" required />
            </Field>
            <Field label="Email">
              <input className={fieldClass} name="email" type="email" autoComplete="email" required />
            </Field>
            <Field label="Phone">
              <input className={fieldClass} name="phone" type="tel" autoComplete="tel" />
            </Field>
            <Field label="Main interest">
              <select className={fieldClass} name="main_interest" defaultValue="">
                <option value="" disabled>
                  Select interest
                </option>
                {formInterests.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Field>
            <Field label="School type">
              <select className={fieldClass} name="school_type" defaultValue="">
                <option value="" disabled>
                  Select school type
                </option>
                {schoolTypes.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Field>
            <Field label="Preferred next step">
              <select className={fieldClass} name="preferred_next_step" defaultValue="">
                <option value="" disabled>
                  Select next step
                </option>
                {nextSteps.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Field>
          </div>
          <div className="mt-4">
            <Field label="Message">
              <textarea className={`${fieldClass} min-h-32 resize-y`} name="message" />
            </Field>
          </div>
          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-valkor-orange px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-orange-200/70 transition hover:bg-valkor-orangeDark focus:outline-none focus:ring-2 focus:ring-valkor-orange focus:ring-offset-2"
          >
            Request a Pilot Review
          </button>
        </form>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Activity, CheckCircle2, ChevronDown, FileText, HelpCircle, Mail, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { MotionDiv } from "@/components/Motion";
import { PilotRequestForm } from "@/components/PilotRequestForm";
import {
  accessControlItems,
  carefulScenarioNotes,
  dataPurposes,
  faqItems,
  helpsSchoolsDo,
  humanReviewItems,
  operationalData,
  pilotBoundaryItems,
  pilotMeasurementExamples,
  pilotMetrics,
  pilotOutcomes,
  pilotProofCards,
  pilotScope,
  productProofCaptions,
  productScreenshots,
  publicTechExclusions,
  resources,
  schoolControlItems,
  signalFlowStatusLabels,
  signalFlowSteps,
  technicalComponents,
  trustPrivacyCards,
  whyNowCards
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
      className={`${muted ? "bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)]" : "bg-white"} relative isolate scroll-mt-24 overflow-hidden px-5 py-20 sm:px-6 lg:px-8 lg:py-28`}
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          {eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">{eyebrow}</p>
          ) : null}
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
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
      className="group rounded-[1.75rem] border border-slate-200/80 bg-white/[0.88] p-6 shadow-sm shadow-slate-200/50 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70"
    >
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-100 bg-cyan-50 text-cyan-700 shadow-sm shadow-cyan-100/70">
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
    <span className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold shadow-sm shadow-slate-200/40 ${tones[tone]}`}>
      {children}
    </span>
  );
}

function DetailsCue({ label = "Details" }: { label?: string }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-500 transition group-open:border-cyan-200 group-open:bg-cyan-50 group-open:text-cyan-800">
      {label}
      <ChevronDown className="h-4 w-4 transition duration-200 group-open:rotate-180" aria-hidden="true" />
    </span>
  );
}

export function PositioningStatement() {
  const cards = [
    ["Pass visibility", "Approved movement, overdue trips, and route context stay in one operations view."],
    ["Building-area context", "School-defined areas are shown with freshness and signal quality, not GPS precision."],
    ["Reviewed follow-up", "Staff can acknowledge, assign, resolve, dismiss, and review incident records."]
  ];

  return (
    <section className="border-y border-slate-200 bg-white px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">What Valkor Does</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
            A controlled operating layer for daily school movement.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Valkor gives school teams a structured way to see movement status, system health, and
            follow-up work during approved hours. Staff remain responsible for decisions.
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

export function WhyNowSection() {
  return (
    <SectionShell
      id="why-now"
      eyebrow="Why Now"
      title="Schools need operational context, not more disconnected signals."
      description="Administrators are managing more hallway movement, documentation, and follow-up expectations with tools that were not built for live operations."
      muted
    >
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {whyNowCards.map((card) => (
          <div key={card.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
            <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-6 max-w-4xl rounded-[2rem] border border-orange-200 bg-orange-50 p-6 text-center text-base font-semibold leading-7 text-slate-950">
        Valkor is built for daily operations: earlier context, clearer handoffs, and careful review
        without fear-based safety claims.
      </p>
    </SectionShell>
  );
}

export function SignalFlowSection() {
  return (
    <SectionShell
      id="signal-flow"
      eyebrow="Signal Flow"
      title="From local signal to review-ready context."
      description="Approved badge signals, receiver health, and pass status are translated into a calm operations view for staff."
    >
      <div className="relative mt-12 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/70 sm:p-6">
        <div className="signal-flow-rail pointer-events-none absolute left-10 right-10 top-[6.7rem] hidden h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:block">
          <span className="signal-flow-pulse absolute top-1/2 h-2 w-20 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-valkor-orange to-transparent" />
        </div>
        <div className="grid gap-4 lg:grid-cols-5">
          {signalFlowSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <MotionDiv
                key={step.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                className="signal-flow-card relative rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5"
                style={{ animationDelay: `${index * 0.65}s` }}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-cyan-700 shadow-sm">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="rounded-full border border-cyan-200 bg-cyan-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-cyan-800">
                    {signalFlowStatusLabels[index]}
                  </span>
                </div>
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-slate-400">0{index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </MotionDiv>
            );
          })}
        </div>
        <div className="mt-5 flex items-center gap-3 rounded-[1.5rem] border border-cyan-200 bg-cyan-50 p-5">
          <Activity className="h-5 w-5 shrink-0 text-cyan-700" aria-hidden="true" />
          <p className="text-sm font-semibold leading-6 text-slate-950">
            Valkor surfaces context for approved administrators; it does not create automatic
            discipline decisions or claim GPS precision.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

export function HelpsSchoolsSection() {
  const useCaseGroups = [
    {
      title: "Movement Accountability",
      items: [
        "Students out longer than expected",
        "Movement outside approved pass routes",
        "Hallway and bathroom accountability",
        "Students leaving class without a pass",
        "Late arrival or early dismissal movement"
      ]
    },
    {
      title: "Zone & Restricted Area Awareness",
      items: [
        "Restricted-zone visibility",
        "Exit-area awareness",
        "Repeated gathering zones",
        "Bathroom or hallway clustering",
        "Office, cafeteria, gym, or locker-room movement"
      ]
    },
    {
      title: "Incident Review",
      items: [
        "Incident acknowledgement and assignment",
        "Staff response follow-up",
        "External alert context where approved",
        "Resolution reasons and action history",
        "Weak or stale signals separated from misconduct"
      ]
    },
    {
      title: "Pilot Reporting",
      items: [
        "Receiver/device health",
        "Stale or missing signal awareness",
        "After-action reporting",
        "Pilot trend reports",
        "Admin coverage and workflow gaps"
      ]
    }
  ];

  return (
    <SectionShell
      id="what-valkor-helps-schools-do"
      eyebrow="Product"
      title="What schools can evaluate in a controlled pilot."
      description="A pilot focuses on the daily gaps that create operational drag: overdue movement, pass confusion, receiver reliability, and follow-up."
    >
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {helpsSchoolsDo.map((item) => (
          <IconCard key={item.title} item={item} />
        ))}
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-4">
        {useCaseGroups.map((group) => (
          <article key={group.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
            <h3 className="text-lg font-semibold tracking-tight text-slate-950">{group.title}</h3>
            <ul className="mt-4 space-y-3">
              {group.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-700" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <details className="group mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-slate-950">
          Review careful scenario examples
          <DetailsCue />
        </summary>
        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {carefulScenarioNotes.map((note) => (
            <div key={note} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600">
              {note}
            </div>
          ))}
        </div>
      </details>
    </SectionShell>
  );
}

export function PilotProgramSection() {
  const scope = pilotScope.slice(0, 5);
  const boundaries = pilotBoundaryItems.slice(0, 8);

  return (
    <SectionShell
      id="pilot-program"
      eyebrow="Pilot Program"
      title="Controlled pilot structure for school review."
      description="Valkor pilots are limited, measurable, and governed by the school. The goal is to evaluate value and trust before any expansion."
    >
      <div className="mt-12 rounded-[2rem] border border-slate-200/80 bg-white/[0.86] p-4 shadow-2xl shadow-slate-200/70 backdrop-blur-xl sm:p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {scope.map((item) => (
            <div key={item.label} className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-5 shadow-sm shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-700">{item.label}</p>
              <p className="mt-3 text-xl font-semibold leading-7 text-slate-950">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {boundaries.map((item) => (
            <span key={item} className="rounded-full border border-slate-200 bg-white/[0.78] px-3 py-1.5 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-200/40">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-[1.5rem] border border-cyan-200 bg-cyan-50 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-800">What the pilot proves</p>
          <p className="mt-3 text-lg font-semibold leading-8 text-slate-950">
            A Valkor pilot should show whether the dashboard reduces hallway uncertainty, improves
            pass accountability, validates receiver coverage, and supports calmer incident review.
          </p>
        </div>
        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-base leading-7 text-slate-600">
            The first pilot is not full-school automation. It is a focused review in selected areas,
            with real staff workflows and measurable results.
          </p>
        </div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {pilotProofCards.map((card) => (
          <div key={card.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
          </div>
        ))}
      </div>
      <details className="group mt-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-slate-950">
          Pilot outcomes and measurement examples
          <DetailsCue />
        </summary>
        <div className="mt-5 grid gap-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">School should understand</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {pilotOutcomes.map((outcome) => (
                <Chip key={outcome}>{outcome}</Chip>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Measurements</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {pilotMeasurementExamples.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-5 text-sm font-semibold leading-6 text-slate-700">
          Valkor earns expansion by proving usefulness, reliability, and trust in a limited deployment first.
        </p>
      </details>
      <div className="mt-6 flex justify-center">
        <Button href="#request-pilot" showArrow>
          Request Pilot Review
        </Button>
      </div>
    </SectionShell>
  );
}

export function TrustPrivacySection() {
  const hardBoundaries = [
    "No GPS",
    "No cameras",
    "No biometrics",
    "No microphones",
    "No home tracking",
    "School-controlled access",
    "Human-reviewed workflows"
  ];

  return (
    <SectionShell
      id="trust-privacy"
      eyebrow="Trust & Privacy"
      title="Bounded by design, controlled by the school."
      description="Valkor is built around defined operating boundaries, limited access, visible uncertainty, and staff verification."
      muted
    >
      <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Hard product boundaries</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {hardBoundaries.map((boundary) => (
            <Chip key={boundary}>{boundary}</Chip>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {trustPrivacyCards.slice(0, 4).map((item) => (
          <IconCard key={item.title} item={item} />
        ))}
      </div>

      <div className="mt-6 rounded-[2rem] border border-cyan-200 bg-cyan-50 p-6">
        <h3 className="text-xl font-semibold text-slate-950">School Control</h3>
        <p className="mt-3 text-base leading-7 text-slate-700">
          Schools define buildings, areas, users, permissions, retention, and review process.
          Valkor does not decide policy.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {schoolControlItems.slice(0, 7).map((item) => (
            <Chip key={item}>
              {item}
            </Chip>
          ))}
        </div>
      </div>

      <details className="group mt-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-semibold text-slate-950">
          Operational data and purpose
          <DetailsCue />
        </summary>
        <div className="mt-5 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="text-base font-semibold text-slate-950">Data Valkor may process</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {operationalData.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-950">Why this data exists</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {dataPurposes.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </details>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-orange-200 bg-orange-50 p-6">
          <h3 className="text-xl font-semibold text-slate-950">Trust model</h3>
          <p className="mt-3 text-base leading-7 text-slate-700">
            Collect only what is operationally justified, explain why it exists, and control access.
          </p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-950">Access & Permissions</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Access should follow least-privilege principles and legitimate operational need.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {accessControlItems.map((item) => (
              <Chip key={item}>{item}</Chip>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-950">Human Review</h3>
        <p className="mt-3 text-base leading-7 text-slate-700">
          Valkor is decision support. School personnel verify facts and decide action.
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {humanReviewItems.map((item) => (
            <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-medium leading-6 text-slate-700">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-valkor-orange" aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <details className="group mt-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-semibold text-slate-950">
          Additional privacy boundaries
          <DetailsCue />
        </summary>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {trustPrivacyCards.slice(4).map((item) => (
            <div key={item.title} className="rounded-2xl bg-slate-50 p-4">
              <h4 className="text-sm font-semibold text-slate-950">{item.title}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </details>
      <p className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-600 shadow-sm">
        This page is informational and is not legal advice. Final privacy, compliance, contract,
        retention, and deployment review should be completed by the school, district, or counsel
        before deployment.
      </p>
    </SectionShell>
  );
}

export function TechnicalOverviewSection() {
  return (
    <SectionShell
      id="technical-overview"
      eyebrow="Technical Overview"
      title="Technical enough for review. Public enough for restraint."
      description="A public-light view of approved badges, fixed receivers, validation, receiver health, audit logging, and pilot reporting."
      muted
    >
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {technicalComponents.slice(0, 8).map((item) => (
          <IconCard key={item.title} item={item} />
        ))}
      </div>
      <details className="group mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-semibold text-slate-950">
          Additional technical review areas
          <DetailsCue />
        </summary>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {technicalComponents.slice(8).map((item) => (
            <div key={item.title} className="rounded-2xl bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </details>
      <details className="group mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-semibold text-slate-950">
          Not published on the public site
          <DetailsCue label="Review list" />
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
      eyebrow="Pilot Reporting"
      title="Measured proof before expanded deployment."
      description="Metrics help principals, IT reviewers, safety teams, and advisors evaluate pilot value without expanding scope."
    >
      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {pilotMetrics.slice(0, 8).map((metric) => (
          <div key={metric} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700 shadow-sm">
            {metric}
          </div>
        ))}
      </div>
      <details className="group mx-auto mt-6 max-w-4xl rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-slate-950">
          More possible pilot metrics
          <DetailsCue />
        </summary>
        <div className="mt-4 flex flex-wrap gap-2">
          {pilotMetrics.slice(8).map((metric) => (
            <Chip key={metric}>{metric}</Chip>
          ))}
        </div>
      </details>
    </SectionShell>
  );
}

export function ProductViewsSection() {
  const featured = productScreenshots[0];
  const proofCards = [
    {
      title: "Command View",
      description: "Receiver health, demo/live state, command focus, and operational status in one place.",
      shot: productScreenshots[0]
    },
    {
      title: "Movement State",
      description: "Zone, pass, freshness, and confidence context for approved review.",
      shot: productScreenshots.find((shot) => shot.src.includes("people-view")) ?? productScreenshots[6]
    },
    {
      title: "Incident Workflow",
      description: "Recommended next steps, responder assignment, and human resolution controls.",
      shot: productScreenshots.find((shot) => shot.src.includes("decisions")) ?? productScreenshots[1]
    },
    {
      title: "Pilot Reporting",
      description: "Action history and pilot outcomes stay reviewable without expanding scope.",
      shot: productScreenshots.find((shot) => shot.src.includes("reports-history")) ?? productScreenshots[7]
    }
  ];

  return (
    <SectionShell
      id="product-views"
      eyebrow="Product Proof"
      title="Live software proof, with one clear command center."
      description="The Valkor interface brings movement state, receiver health, incidents, and pilot reporting into one reviewable workspace."
      muted
    >
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_34px_100px_rgba(15,23,42,0.14)]">
          <div className="overflow-hidden rounded-[1.45rem] border border-slate-200 bg-slate-950">
            <div className="flex items-center justify-between border-b border-white/10 bg-slate-900 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs font-semibold text-slate-300">Valkor command center</span>
            </div>
            <Image
              src={featured.src}
              alt={`${featured.title} screenshot`}
              width={1800}
              height={1015}
              className="aspect-[16/9] w-full object-cover object-left-top"
              sizes="(min-width: 1024px) 62vw, 100vw"
            />
          </div>
          <div className="p-5">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-950">Command view</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{featured.description}</p>
          </div>
        </div>
        <div className="grid gap-4">
          {proofCards.map((card) => (
            <article key={card.title} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/60">
              <div className="grid grid-cols-[7rem_1fr] gap-4 p-3 sm:grid-cols-[10rem_1fr] lg:grid-cols-[7.5rem_1fr]">
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-950">
                  <Image
                    src={card.shot.src}
                    alt={`${card.title} screenshot`}
                    width={520}
                    height={330}
                    className="aspect-[4/3] h-full w-full object-cover object-left-top"
                    sizes="180px"
                  />
                </div>
                <div className="py-1 pr-1">
                  <h3 className="text-base font-semibold text-slate-950">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Product proof includes</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {productProofCaptions.map((caption) => (
            <Chip key={caption}>{caption}</Chip>
          ))}
        </div>
        <p className="mt-5 text-sm leading-6 text-slate-600">
          These visuals show freshness, receiver health, incidents, and uncertainty instead of pretending
          every signal is perfect.
        </p>
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
      description="Short answers for early review, with detail available when needed."
    >
      <div className="mx-auto mt-12 max-w-4xl divide-y divide-slate-200 rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        {faqItems.map((item) => (
          <details key={item.question} className="group p-5 sm:p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="flex items-center gap-3 text-left text-base font-semibold text-slate-950">
                <HelpCircle className="h-5 w-5 shrink-0 text-valkor-orange" aria-hidden="true" />
                {item.question}
              </span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition group-open:border-cyan-200 group-open:bg-cyan-50 group-open:text-cyan-800">
                <ChevronDown className="h-4 w-4 transition duration-200 group-open:rotate-180" aria-hidden="true" />
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
  const available = resources.filter((resource) => resource.status === "Available on request");
  const comingSoon = resources.filter((resource) => resource.status === "Coming soon");
  const groups = [
    { label: "Available on request", items: available, tone: "orange" as const },
    { label: "Coming soon", items: comingSoon, tone: "slate" as const }
  ];

  return (
    <SectionShell
      id="resources"
      eyebrow="Resources"
      title="Trust Center resources."
      description="Resource materials are staged for school, district, IT, privacy, and safety review."
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
                <div key={resource.title} className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 p-4">
                  <span className="text-sm font-semibold text-slate-800">{resource.title}</span>
                  <span className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold ${
                    group.tone === "orange"
                      ? "border-orange-200 bg-orange-50 text-orange-700"
                      : "border-slate-200 bg-white text-slate-600"
                  }`}>
                    {group.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export function PilotRequestSection() {
  return (
    <section id="request-pilot" className="scroll-mt-24 bg-slate-950 px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-300">Pilot Review</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Request a controlled pilot review.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Start a focused review of fit, boundaries, technical readiness, and pilot success criteria.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Principal or assistant principal",
              "School safety staff",
              "IT / privacy reviewer",
              "District operations leader"
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-semibold text-slate-200">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="mailto:jackson@valkorsystems.com?subject=Valkor%20Pilot%20Review%20Request" showArrow>
              Request Pilot Review
            </Button>
            <Button href="#product-views" variant="secondaryDark">
              View Product Demo
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
                . Pilot reviews cover scope, privacy boundaries, reliability expectations, and success metrics.
              </p>
            </div>
          </div>
        </div>

        <PilotRequestForm />
      </div>
    </section>
  );
}

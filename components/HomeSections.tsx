import Image from "next/image";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  FileCheck2,
  Gauge,
  HeartPulse,
  HelpCircle,
  History,
  IdCard,
  LockKeyhole,
  Mail,
  MapPinned,
  Route,
  School,
  ShieldCheck,
  SlidersHorizontal,
  UserCheck
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { MotionDiv } from "@/components/Motion";
import { PilotRequestForm } from "@/components/PilotRequestForm";
import { productScreenshots } from "@/lib/siteData";

const coreSentence =
  "Valkor connects approved building signals, pass activity, attendance context, incident workflow, staff response, confidence, and audit records into one school-controlled operational command system.";

const operationalLayerSentence =
  "Approved building-signal infrastructure provides authorized zone, badge, and device-health signals. Valkor turns those signals into school operations.";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  muted?: boolean;
};

type Card = {
  title: string;
  description: string;
  icon: LucideIcon;
};

function SectionShell({ id, eyebrow, title, description, children, muted = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`${muted ? "bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)]" : "bg-white"} relative isolate scroll-mt-24 overflow-hidden px-5 py-16 sm:px-6 lg:px-8 lg:py-24`}
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <MotionDiv
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.42, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          {eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">{eyebrow}</p>
          ) : null}
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl">
            {title}
          </h2>
          {description ? <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p> : null}
        </MotionDiv>
        {children}
      </div>
    </section>
  );
}

function IconCard({ card }: { card: Card }) {
  const Icon = card.icon;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.36, ease: "easeOut" }}
      className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-200/60 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/70"
    >
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-orange-100 bg-orange-50 text-valkor-orange">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
    </MotionDiv>
  );
}

function Chip({ children, tone = "slate" }: { children: ReactNode; tone?: "slate" | "orange" | "green" | "red" }) {
  const tones = {
    slate: "border-slate-200 bg-white text-slate-700",
    orange: "border-orange-200 bg-orange-50 text-orange-700",
    green: "border-emerald-200 bg-emerald-50 text-emerald-700",
    red: "border-red-200 bg-red-50 text-red-700"
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

const trustBoundaries = [
  "No GPS",
  "No Cameras",
  "No Biometrics",
  "Human Reviewed"
];

const problemCards: Card[] = [
  {
    title: "More operations to coordinate",
    description:
      "Passes, transitions, office visits, late arrivals, dismissals, lunch flow, and event-day activity all create live administrative questions.",
    icon: Activity
  },
  {
    title: "Disconnected tools",
    description:
      "Attendance systems, passes, incident logs, staff communication, and building procedures often operate separately from one another.",
    icon: ClipboardCheck
  },
  {
    title: "Faster follow-up expectations",
    description:
      "Administrators need clear context, assigned ownership, and documented outcomes without turning every exception into a crisis.",
    icon: Gauge
  }
];

const workflowCards: Card[] = [
  {
    title: "Zone-Level Awareness",
    description:
      "Review school-defined building areas such as classrooms, hallways, offices, cafeterias, gyms, exits, and restricted spaces.",
    icon: MapPinned
  },
  {
    title: "Attendance Reconciliation",
    description:
      "Compare expected school context with approved badge and zone signals to surface attendance mismatches for human review.",
    icon: School
  },
  {
    title: "Pass Accountability",
    description:
      "Review active passes, expected routes, overdue passes, and exceptions without relying on GPS.",
    icon: Route
  },
  {
    title: "Incident Workflow",
    description:
      "Move from detection to action: validate, acknowledge, assign, respond, resolve, document, and review.",
    icon: AlertTriangle
  },
  {
    title: "Staff Response",
    description:
      "Assign staff, track response status, record notes, and maintain an action history for authorized workflows.",
    icon: UserCheck
  },
  {
    title: "Confidence & Freshness",
    description:
      "Show whether data is confirmed, likely, weak, uncertain, stale, or unknown before staff decide next steps.",
    icon: Gauge
  },
  {
    title: "Device & Signal Health",
    description:
      "Separate operational events from device freshness, infrastructure health, feed delays, stale data, and low-battery conditions.",
    icon: HeartPulse
  },
  {
    title: "Pilot Proof Reports",
    description:
      "Measure reliability, usefulness, false alerts, stale data, admin actions, and privacy feedback before expansion.",
    icon: BarChart3
  }
];

const audienceCards: Card[] = [
  {
    title: "Principals",
    description:
      "See which operational exceptions need review, which workflows are open, and what outcomes were documented.",
    icon: School
  },
  {
    title: "Assistant Principals",
    description:
      "Coordinate pass accountability, attendance mismatches, incidents, staff response, and follow-up records.",
    icon: UserCheck
  },
  {
    title: "Operations and IT Reviewers",
    description:
      "Evaluate reliability, access control, system confidence, device health, audit records, and pilot outcomes.",
    icon: ShieldCheck
  }
];

const howItWorksSteps = [
  {
    title: "Approved signals",
    description: "Approved building signals are received from school-controlled infrastructure.",
    icon: IdCard
  },
  {
    title: "Confidence checked",
    description: "Valkor checks freshness, confidence, and operational context before showing state.",
    icon: Gauge
  },
  {
    title: "Workflow created",
    description: "Exceptions become reviewable workflows for authorized staff.",
    icon: ClipboardCheck
  },
  {
    title: "Staff action",
    description: "Staff can acknowledge, assign, resolve, and document the outcome.",
    icon: UserCheck
  },
  {
    title: "Pilot proof",
    description: "Pilot reports show reliability, usefulness, staff feedback, and privacy comfort.",
    icon: FileCheck2
  }
];

const decisionCards = [
  {
    label: "Building Signal",
    text: "Approved badge event received from Area 12."
  },
  {
    label: "Valkor Interpretation",
    text: "Pass context and building area do not match the expected workflow."
  },
  {
    label: "Review Context",
    text: "Data fresh. Confidence high. Suggested next step: verify, assign, or document."
  }
];

const reliabilityDefinitions = [
  {
    title: "Freshness",
    description:
      "How recent the data is. Last seen 4 seconds ago may be usable. Last seen 3 minutes ago should be treated as stale, not live truth."
  },
  {
    title: "Stale Data",
    description: "Old building-area data that should not be treated as current operational truth."
  },
  {
    title: "Infrastructure Issue",
    description:
      "A device, network, or signal condition that may reduce reliability."
  },
  {
    title: "Workflow Exception",
    description:
      "A pass, attendance, zone, or workflow exception that may need administrator review."
  }
];

const reliabilityExamples = [
  "Infrastructure area stale - last update 3m ago",
  "Approved device low battery - replace before tomorrow",
  "Signal feed delayed - review system status",
  "Zone confidence reduced - coverage needs review",
  "Pass overdue - review needed"
];

const privacyCards: Card[] = [
  {
    title: "School-Controlled Deployment",
    description:
      "Schools control deployment scope, included zones, approved badges, authorized users, retention rules, and approved use cases.",
    icon: School
  },
  {
    title: "Purpose-Limited Use",
    description:
      "Data is used for approved operational, attendance, accountability, incident, reliability, pilot-evaluation, and system-improvement purposes.",
    icon: SlidersHorizontal
  },
  {
    title: "Role-Based Access",
    description:
      "Not every user sees every person record, operational event, diagnostic record, or history view.",
    icon: LockKeyhole
  },
  {
    title: "Audit Logs",
    description:
      "Sensitive actions such as viewing restricted records, exporting data, changing badge assignments, or resolving alerts should be logged.",
    icon: History
  }
];

const doesNotDo = [
  "No GPS.",
  "No cameras.",
  "No microphones.",
  "No facial recognition.",
  "No biometrics.",
  "No student phone monitoring.",
  "No automatic discipline.",
  "No off-campus operation."
];

const pilotFormat = [
  "Limited pilot scope",
  "2-4 school-defined zones",
  "10-30 approved badges/devices",
  "Authorized staff only",
  "School-hours only",
  "No GPS",
  "No cameras",
  "No biometrics",
  "No automatic discipline",
  "Measured reliability",
  "Staff feedback"
];

const firstPilotRows = [
  ["Duration", "4-6 weeks"],
  ["Zones", "2-4 school-defined areas"],
  ["Devices", "10-30 approved badges/devices"],
  ["Users", "Authorized administrators/staff only"],
  [
    "Purpose",
    "Pass accountability, attendance review, incident workflow, staff response, reliability proof"
  ],
  ["Excluded", "GPS, cameras, biometrics, automatic discipline, emergency routing"]
];

const pilotValidationQuestions = [
  "Can staff trust the information?",
  "Does it reduce operational confusion?",
  "Does it respect school privacy boundaries?",
  "Is there enough value to expand, retest, or stop?"
];

const proofMetrics = [
  "System uptime",
  "Stale/unknown signal time",
  "False alerts reviewed",
  "Missed detections reviewed",
  "Overdue passes detected",
  "Response time",
  "Admin usefulness feedback",
  "Privacy/staff feedback",
  "Expand, retest, or stop recommendation"
];

const faqItems = [
  {
    question: "What problem does Valkor actually solve?",
    answer:
      "Administrators manage passes, attendance mismatches, incidents, staff follow-up, system status, and records across disconnected tools. Valkor connects those workflows into one school-controlled operational command system."
  },
  {
    question: "Who is Valkor built for?",
    answer:
      "Valkor is built for principals, assistant principals, and operations staff who are responsible for daily hallway accountability, pass management, and incident follow-up. It is not a student-facing product and is not accessible to parents or students."
  },
  {
    question: "How does Valkor avoid surveillance framing?",
    answer:
      "Valkor is built for approved school operations, defined campus zones, role-based access, confidence states, audit records, and human-reviewed workflows. It does not use GPS, cameras, biometrics, or student phone monitoring."
  },
  {
    question: "Does Valkor use GPS?",
    answer: "No. Valkor is designed around school-approved building infrastructure and configured campus zones, not GPS."
  },
  {
    question: "Can Valkor operate outside school deployment boundaries?",
    answer: "No. Valkor is intended for approved school-controlled use within approved campus zones and deployment rules."
  },
  {
    question: "Does Valkor use cameras, microphones, biometrics, or student phones?",
    answer:
      "No. Valkor does not require cameras, microphones, facial recognition, biometrics, student phone monitoring, or a student-facing app."
  },
  {
    question: "Does Valkor automatically discipline students?",
    answer: "No. Valkor supports human-reviewed workflows. Staff remain responsible for decisions."
  },
  {
    question: "What data does Valkor process?",
    answer:
      "Valkor may process badge identifiers, zone-level operational events, timestamps, confidence/freshness status, pass status, device health, incident workflow records, admin actions, audit logs, diagnostics, and pilot metrics."
  },
  {
    question: "What is the difference between infrastructure and Valkor?",
    answer:
      "Approved building-signal infrastructure provides the underlying signal layer. Valkor is the school operations layer: workflows, privacy controls, audit logs, command views, confidence states, staff response, and pilot proof."
  },
  {
    question: "Does Valkor replace school procedures?",
    answer:
      "No. Valkor supports administrator workflows. School personnel remain responsible for procedures, review, judgment, and action."
  }
];

const resources = [
  "Valkor One-Pager",
  "Pilot Overview",
  "Privacy & Governance Framework",
  "Parent / Guardian Explanation",
  "IT/Security Review Brief",
  "Infrastructure Layer Overview",
  "Pilot Proof Report Sample",
  "What Valkor Does Not Do"
];

export function TrustStripSection() {
  return (
    <section className="border-y border-slate-200 bg-white px-5 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2.5">
        {trustBoundaries.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>
    </section>
  );
}

export function PositioningStatement() {
  return (
    <section className="border-b border-slate-200 bg-white px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">What Valkor Provides</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
            An operational awareness layer for schools.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{coreSentence}</p>
          <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-slate-700">{operationalLayerSentence}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Signal layer</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-950">Badge infrastructure supplies building signals.</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Approved infrastructure can provide zone, badge, attendance, roll call, alert, and device-health signals.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-orange-200 bg-orange-50 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-700">Valkor layer</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-950">Valkor creates the school operations layer.</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Attendance reconciliation, pass accountability, incident review, response ownership, audit logs, confidence indicators, and pilot reporting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyNowSection() {
  return (
    <SectionShell
      id="problem"
      eyebrow="Operational Gaps Valkor Helps Address"
      title="School operations are connected in policy, but separated in software."
      description="Schools already manage attendance, passes, incidents, staff communication, and building procedures. Valkor helps approved administrators connect those workflows into one operational view for the school day."
      muted
    >
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {problemCards.map((card) => (
          <IconCard key={card.title} card={card} />
        ))}
      </div>
    </SectionShell>
  );
}

export function WhoItIsForSection() {
  return (
    <SectionShell
      id="who-it-is-for"
      eyebrow="Built For School Administrators"
      title="Built for the people responsible for the school day."
      description="Valkor is designed for principals, assistant principals, operations staff, and authorized school teams who need clearer visibility into passes, attendance mismatches, incidents, staff response, and unresolved exceptions."
    >
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {audienceCards.map((card) => (
          <IconCard key={card.title} card={card} />
        ))}
      </div>
    </SectionShell>
  );
}

export function SignalFlowSection() {
  return (
    <SectionShell
      id="how-valkor-works"
      eyebrow="How Valkor Connects Signals to School Workflows"
      title="How Valkor works."
      description="Valkor is designed to work above approved school building-signal infrastructure. The infrastructure provides authorized zone, badge, and device-health signals; Valkor turns those signals into reviewable workflows, confidence states, staff actions, and audit records."
    >
      <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/70 sm:p-6">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          {howItWorksSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative rounded-[1.35rem] border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-cyan-700 shadow-sm">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-bold text-slate-500">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-5 rounded-[1.5rem] border border-cyan-200 bg-cyan-50 p-5">
          <p className="text-sm font-semibold leading-6 text-slate-950">
            Public flow: approved building signals to confidence and freshness review to administrator
            workflow to staff action to pilot proof reporting.
          </p>
        </div>
        <p className="mt-5 rounded-[1.5rem] border border-slate-200 bg-white p-5 text-sm font-semibold leading-6 text-slate-700">
          Zone-level building awareness means Valkor works around school-defined areas such as hallways,
          offices, classrooms, cafeterias, gyms, and restricted zones - not GPS.
        </p>
      </div>
      <div className="mt-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
        <h3 className="text-lg font-semibold text-slate-950">What school leaders need to know</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Valkor is built for school operations. It helps approved administrators understand whether
          operational signals are fresh, reliable, and actionable before staff make decisions.
        </p>
      </div>
    </SectionShell>
  );
}

export function SignalDecisionSection() {
  return (
    <SectionShell
      id="signals-to-decisions"
      eyebrow="From Building Signals to Reviewable Actions"
      title="Signals alone do not solve school operations."
      description="A badge or zone event is only useful when it becomes context: which workflow needs review, whether the data is fresh, whether infrastructure is healthy, who owns the response, and what record should be kept."
      muted
    >
      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {decisionCards.map((card, index) => (
          <div key={card.label} className="relative rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-700">{card.label}</p>
            <p className="mt-4 text-xl font-semibold leading-8 text-slate-950">{card.text}</p>
            {index < decisionCards.length - 1 ? (
              <ArrowRight className="absolute -right-5 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-slate-300 lg:block" aria-hidden="true" />
            ) : null}
          </div>
        ))}
      </div>
      <p className="mx-auto mt-6 max-w-4xl rounded-[1.5rem] border border-slate-200 bg-white p-5 text-center text-sm font-semibold leading-6 text-slate-700 shadow-sm">
        Building signals are infrastructure inputs. Valkor adds school context, confidence, freshness,
        workflow ownership, staff response, and human review.
      </p>
    </SectionShell>
  );
}

export function ProductViewsSection() {
  const featured = productScreenshots[0];
  const proofCards = [
    ["Command View", "See school mode, incidents, signal feed health, infrastructure health, device health, and next schedule transition."],
    ["Building Areas", "Prioritize area status, workflow exceptions, confidence, and operational context by default."],
    ["Incident Detail", "Track what happened, where, confidence, owner, notes, resolution, and dismissal reason."],
    ["Pilot Proof", "Turn reliability, response, privacy feedback, and outcomes into an end-of-pilot report."]
  ];

  return (
    <SectionShell
      id="product-views"
      eyebrow="Command Center Overview"
      title="A calm operational command system for school teams."
      description="An assistant principal should quickly understand what needs attention, which records are fresh, which workflows are open, and who owns the next action."
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
            <h3 className="text-2xl font-semibold tracking-tight text-slate-950">Command focus panel</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Pass exception review: expected workflow, building area, freshness, confidence, suggested
              next step, assigned staff, and resolution history stay connected.
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          {proofCards.map(([title, description]) => (
            <article key={title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
              <h3 className="text-base font-semibold text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

export function HelpsSchoolsSection() {
  return (
    <SectionShell
      id="what-valkor-does"
      eyebrow="Core School Workflows"
      title="Operational meaning, not raw data."
      description="Valkor connects building awareness, pass accountability, attendance reconciliation, incident workflow, staff response, system confidence, and audit records so approved administrators can manage school-day operations clearly."
      muted
    >
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {workflowCards.map((card) => (
          <IconCard key={card.title} card={card} />
        ))}
      </div>
      <div className="mt-8 rounded-[2rem] border border-cyan-200 bg-cyan-50 p-6">
        <h3 className="text-xl font-semibold text-slate-950">Designed around school-issued badges, not student phones.</h3>
        <p className="mt-3 text-base leading-7 text-slate-700">
          Valkor does not require a student-facing mobile app, GPS permission, or access to student phone content.
        </p>
      </div>
    </SectionShell>
  );
}

export function ConfidenceFreshnessSection() {
  return (
    <SectionShell
      id="confidence-freshness"
      eyebrow="Reliability, Freshness, and System Status"
      title="Show uncertainty before it becomes risk."
      description="Operational data is only useful when administrators know how reliable it is. Valkor shows freshness, confidence, stale data, unknown status, infrastructure health, device health, and feed status so staff know whether to act, verify, or wait."
    >
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {reliabilityDefinitions.map((item) => (
          <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Example states</p>
        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          {reliabilityExamples.map((example) => (
            <div key={example} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold leading-6 text-slate-700">
              {example}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

export function TrustPrivacySection() {
  return (
    <SectionShell
      id="trust-privacy"
      eyebrow="What Valkor Does Not Do"
      title="Valkor is not a student surveillance product."
      description="Valkor is a school-controlled operations platform for approved campus workflows. It does not make discipline decisions, replace staff judgment, or treat weak data as fact."
      muted
    >
      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {doesNotDo.map((item) => (
          <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800 shadow-sm">
            <ShieldCheck className="h-4 w-4 shrink-0 text-valkor-orange" aria-hidden="true" />
            {item}
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {privacyCards.map((card) => (
          <IconCard key={card.title} card={card} />
        ))}
      </div>
      <p className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-5 text-sm font-semibold leading-6 text-slate-800">
        Valkor supports human-reviewed workflows. School personnel verify facts and decide what action is appropriate.
      </p>
      <details className="group mt-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-slate-950">
          Signal infrastructure boundary
          <DetailsCue />
        </summary>
          <p className="mt-5 text-sm leading-7 text-slate-600">
            Valkor is infrastructure-flexible and designed to integrate with approved school systems
            during a limited pilot review. School-facing workflows, access controls, audit logs,
            confidence indicators, and pilot reports remain part of the Valkor operations layer.
        </p>
      </details>
    </SectionShell>
  );
}

export function PilotProgramSection() {
  return (
    <SectionShell
      id="pilot-program"
      eyebrow="Limited Pilot Review"
      title="Start with a limited, measurable pilot."
      description="A pilot review focuses on pass accountability, attendance reconciliation, incident workflow, staff response, system reliability, staff feedback, and privacy comfort before any expansion decision."
    >
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-950">Pilot format</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {pilotFormat.map((item) => (
              <Chip key={item}>{item}</Chip>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-orange-200 bg-orange-50 p-6">
          <h3 className="text-xl font-semibold text-slate-950">Limited review language</h3>
          <p className="mt-3 text-base leading-7 text-slate-700">
            Valkor is designed to start with a limited deployment, clear boundaries, and measurable outcomes:
            2-4 school-defined zones, 10-30 approved badges/devices, authorized staff only, school-hours only,
            no GPS, no cameras, no biometrics, and no automatic discipline.
            A pilot should prove reliability, usefulness, privacy comfort, and staff workflow value before any expansion.
          </p>
        </div>
      </div>
      <details className="group mt-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-slate-950">
          Four pilot questions
          <DetailsCue />
        </summary>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {pilotValidationQuestions.map((item) => (
            <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
              <span>{item}</span>
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
      id="pilot-proof"
      eyebrow="Pilot Proof Report"
      title="Schools should not have to guess whether a pilot worked."
      description="Each pilot is designed to produce evidence: system uptime, stale data, zone reliability, false alerts, missed detections, overdue pass visibility, response times, admin actions, privacy feedback, and whether the school should expand, retest, or stop."
      muted
    >
      <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-700">Pilot Proof Report</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-950">East Wing Pilot</h3>
          <div className="mt-5 grid gap-3 text-sm">
            {[
              ["Duration", "4 weeks"],
              ["Approved devices", "10-30"],
              ["School-defined zones", "2-4"],
              ["Users", "Authorized staff"],
              ["Recommendation", "Expand, retest, or stop"]
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                <span className="font-semibold text-slate-500">{label}</span>
                <span className="font-semibold text-slate-950">{value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-950">Measured</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {proofMetrics.map((metric) => (
              <Chip key={metric}>{metric}</Chip>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export function FutureEmergencyBoundarySection() {
  return (
    <SectionShell
      id="future-emergency-readiness"
      eyebrow="Capability Boundaries"
      title="Future capability boundaries."
      description="Valkor's current focus is the limited operations pilot: pass accountability, attendance review, incident workflow, staff response, reliability, and pilot proof. Emergency routing is excluded from the first pilot and would require separate approval, testing, documentation, and governance."
    >
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Current boundary",
            description:
              "The current product is an administrative operations system, not an autonomous control product.",
            icon: AlertTriangle
          },
          {
            title: "Separate approval",
            description:
              "Any advanced coordination capability would require separate school approval, testing, documentation, and governance.",
            icon: FileCheck2
          },
          {
            title: "Human judgment remains",
            description:
              "Valkor does not replace school procedures, staff review, administrator judgment, or documented response protocols.",
            icon: UserCheck
          }
        ].map((card) => (
          <IconCard key={card.title} card={card} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button href="/future-emergency-readiness" variant="secondary" showArrow>
          Read Boundary Page
        </Button>
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
      description="Short answers for principals, assistant principals, IT reviewers, privacy reviewers, and district leaders."
      muted
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
      <div className="mt-8 flex justify-center">
        <Button href="/faq" variant="secondary">
          View Full FAQ
        </Button>
      </div>
    </SectionShell>
  );
}

export function ResourcesSection() {
  return (
    <SectionShell
      id="resources"
      eyebrow="Resources"
      title="Review materials for a limited pilot."
      description="Pilot review materials can be provided for school leadership, district teams, IT, privacy reviewers, parent communication, and operations stakeholders."
    >
      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <div key={resource} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <span className="text-sm font-semibold text-slate-800">{resource}</span>
            <span className="whitespace-nowrap rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-700">
              Available on request
            </span>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export function FirstPilotSection() {
  return (
    <SectionShell
      id="first-pilot"
      eyebrow="First Pilot Scope"
      title="What a first pilot looks like."
      description="The first pilot should stay limited, controlled, and focused on proving hallway/pass accountability and administrator coordination without privacy or workload problems."
      muted
    >
      <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <table className="w-full border-collapse text-left">
          <thead className="bg-slate-950 text-white">
            <tr>
              <th scope="col" className="w-36 px-5 py-4 text-sm font-semibold sm:w-48">
                Area
              </th>
              <th scope="col" className="px-5 py-4 text-sm font-semibold">
                Scope
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {firstPilotRows.map(([area, scope]) => (
              <tr key={area} className="align-top">
                <th scope="row" className="bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-950">
                  {area}
                </th>
                <td className="px-5 py-4 text-sm leading-6 text-slate-700">{scope}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionShell>
  );
}

export function PilotRequestSection() {
  return (
    <section id="request-pilot" className="scroll-mt-24 bg-slate-950 px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-300">Limited Pilot Review</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Request a limited pilot review.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            For schools interested in a limited, measurable review of pass accountability, attendance
            reconciliation, incident workflow, staff response, and system reliability.
          </p>
          <p className="mt-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm font-semibold leading-6 text-slate-200">
            Limited review: 2-4 school-defined zones, 10-30 approved badges/devices, authorized staff only,
            school-hours only, no GPS, no cameras, no biometrics, no automatic discipline.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Principals and assistant principals",
              "School operations staff",
              "IT / privacy reviewers",
              "District leaders and advisors"
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-semibold text-slate-200">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="mailto:jackson@valkorsystems.com?subject=Valkor%20Limited%20Pilot%20Review%20Request" showArrow>
              Request a Limited Pilot Review
            </Button>
            <Button href="/trust-center" variant="secondaryDark">
              View Trust Center
            </Button>
          </div>
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="flex gap-3">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-orange-300" aria-hidden="true" />
              <p className="text-sm leading-6 text-slate-300">
                Contact{" "}
                <a className="font-semibold text-white hover:text-orange-200" href="mailto:jackson@valkorsystems.com">
                  jackson@valkorsystems.com
                </a>
                . Pilot reviews cover operational pain points, privacy and governance boundaries, infrastructure readiness, pilot scope, reliability expectations, success metrics, and end-of-pilot reporting.
              </p>
            </div>
          </div>
        </div>

        <PilotRequestForm />
      </div>
    </section>
  );
}

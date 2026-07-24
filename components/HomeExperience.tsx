"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  ArrowDown,
  BarChart3,
  Check,
  CheckCircle2,
  CircleDot,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  Gauge,
  HeartPulse,
  IdCard,
  MapPinned,
  Play,
  Radio,
  Route,
  School,
  ShieldCheck,
  UserCheck,
  Wifi
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PilotRequestForm } from "@/components/PilotRequestForm";
import { Button } from "@/components/ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
};

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "center"
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}
    >
      <p className={`text-xs font-bold uppercase tracking-[0.24em] ${light ? "text-orange-300" : "text-orange-600"}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-balance text-base leading-8 sm:text-lg ${light ? "text-slate-300" : "text-slate-600"}`}>
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

function StatusDot({ tone = "orange" }: { tone?: "orange" | "green" | "red" }) {
  const color = {
    orange: "bg-orange-500 shadow-orange-500/50",
    green: "bg-emerald-400 shadow-emerald-400/50",
    red: "bg-red-400 shadow-red-400/50"
  }[tone];

  return (
    <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
      <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-25 ${color}`} />
      <span className={`relative inline-flex h-2.5 w-2.5 rounded-full shadow-[0_0_14px_currentColor] ${color}`} />
    </span>
  );
}

function CommandFrame({
  src,
  alt,
  priority = false,
  className = ""
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#07101a] shadow-[0_38px_100px_rgba(2,6,23,0.34)] ring-1 ring-slate-950/10 sm:rounded-[1.75rem] ${className}`}
    >
      <div className="flex h-11 items-center justify-between border-b border-white/10 bg-[#0b121d] px-4">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 sm:text-xs">
          <StatusDot tone="green" />
          Command center online
        </div>
      </div>
      <Image
        src={src}
        alt={alt}
        width={1800}
        height={1015}
        priority={priority}
        sizes="(min-width: 1280px) 1180px, 94vw"
        className="aspect-[16/9] w-full object-cover object-left-top"
      />
    </div>
  );
}

function CountUp({
  to,
  decimals = 0,
  suffix = ""
}: {
  to: number;
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setValue(to);
      return;
    }

    const startedAt = performance.now();
    const duration = 1200;
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const softened = 1 - Math.pow(1 - progress, 3);
      setValue(to * softened);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, to]);

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const signalSteps: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Approved badge",
    description: "A school-issued badge transmits inside the approved school-hours window.",
    icon: IdCard
  },
  {
    title: "Receiver detects zone",
    description: "School-controlled infrastructure identifies a defined building area.",
    icon: Radio
  },
  {
    title: "Signal normalized",
    description: "The adapter translates the event into one consistent operational record.",
    icon: Wifi
  },
  {
    title: "Confidence checked",
    description: "Freshness, receiver health, and signal quality are evaluated before display.",
    icon: Gauge
  },
  {
    title: "Pass context compared",
    description: "Expected route and timing are compared with the active pass state.",
    icon: Route
  },
  {
    title: "Incident opened",
    description: "A reviewable exception is created with the relevant context attached.",
    icon: AlertTriangle
  },
  {
    title: "Staff response assigned",
    description: "Authorized staff acknowledge, assign, respond, and document the outcome.",
    icon: UserCheck
  },
  {
    title: "Pilot proof recorded",
    description: "Reliability, response, and usefulness roll into the pilot evidence report.",
    icon: FileCheck2
  }
];

const floatingLabels = [
  { label: "Top priority", value: "Route exception", className: "left-2 top-10 xl:-left-10" },
  { label: "Receiver health", value: "41 online", className: "right-2 top-24 xl:-right-10" },
  { label: "Signal confidence", value: "High · fresh", className: "bottom-24 left-8 xl:-left-2" },
  { label: "Staff response", value: "Assigned", className: "bottom-14 right-6 xl:-right-4" }
];

const liveCards: Array<{
  eyebrow: string;
  title: string;
  tone: "orange" | "green" | "red";
  icon: LucideIcon;
  rows: Array<[string, string]>;
  action?: string;
}> = [
  {
    eyebrow: "Pass active",
    title: "Student 018",
    tone: "orange",
    icon: Route,
    rows: [
      ["Expected", "Room 204 → Bathroom A"],
      ["Status", "Overdue 4m"],
      ["Confidence", "High"]
    ]
  },
  {
    eyebrow: "Receiver health",
    title: "Receiver B-04",
    tone: "red",
    icon: HeartPulse,
    rows: [
      ["Status", "Stale"],
      ["Last heartbeat", "3m ago"],
      ["Zone confidence", "Reduced"]
    ],
    action: "Check receiver"
  },
  {
    eyebrow: "Elevated · route deviation",
    title: "Cafeteria Hall",
    tone: "orange",
    icon: AlertTriangle,
    rows: [
      ["Freshness", "3s ago"],
      ["Assigned", "Ms. Carter"],
      ["Status", "Responding"]
    ]
  },
  {
    eyebrow: "Pilot proof",
    title: "East Wing · Week 4",
    tone: "green",
    icon: BarChart3,
    rows: [
      ["Receiver uptime", "98.4%"],
      ["False alerts", "4"],
      ["Avg. response", "1m 42s"]
    ],
    action: "Review placement"
  }
];

const boundaries = [
  "No GPS",
  "No home tracking",
  "No cameras",
  "No microphones",
  "No biometrics",
  "No automatic discipline",
  "School-controlled access",
  "Human-reviewed workflows"
];

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fbfaf8] px-5 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8 lg:pt-24">
      <div className="hero-orb pointer-events-none absolute left-1/2 top-28 h-[42rem] w-[58rem] -translate-x-1/2 rounded-full bg-orange-300/25 blur-[130px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,1),transparent_68%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.17em] text-slate-600 shadow-sm backdrop-blur">
            <CircleDot className="h-3.5 w-3.5 text-orange-600" aria-hidden="true" />
            School operations, made visible
          </p>
          <h1 className="mt-7 text-balance text-[clamp(3.35rem,8.6vw,7.8rem)] font-semibold leading-[0.88] tracking-[-0.067em] text-slate-950">
            School-controlled
            <span className="block text-slate-400">operational awareness.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-balance text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
            Review movement exceptions, pass activity, receiver health, and incident follow-up from one calm
            school-hours command center.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#request-pilot" showArrow className="w-full px-7 py-3.5 sm:w-auto">
              Request Pilot Review
            </Button>
            <Button href="#demo" variant="secondary" className="w-full px-7 py-3.5 sm:w-auto">
              View Product Demo
            </Button>
          </div>
          <p className="mt-5 text-sm font-medium text-slate-500">
            School-hours use. Approved staff only. Human-reviewed follow-up.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 44, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.18, duration: 0.9, ease }}
          className="relative mx-auto mt-16 max-w-[78rem] sm:mt-20"
        >
          <div className="absolute inset-x-[8%] bottom-[-4%] h-36 rounded-[50%] bg-orange-500/20 blur-[75px]" />
          <CommandFrame
            src="/product/overview.png"
            alt="Valkor command center showing the highest-priority school operations state, receiver health, confidence, and assigned response."
            priority
            className="relative"
          />
          {floatingLabels.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.72 + index * 0.12, duration: 0.5, ease }}
              className={`absolute hidden min-w-44 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_18px_55px_rgba(15,23,42,0.16)] backdrop-blur-xl md:block ${item.className}`}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
              <p className="mt-1.5 flex items-center gap-2 text-sm font-semibold text-slate-950">
                <StatusDot tone={index === 1 ? "green" : "orange"} />
                {item.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const items = [
    ["Fragmented inputs", "Passes, radios, attendance, and staff follow-up live in different places."],
    ["Unclear ownership", "Exceptions become noise when no one can see who is responding."],
    ["Weak proof", "Schools need reliability evidence before deciding to expand a pilot."]
  ];

  return (
    <section className="bg-white px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The operational gap"
          title="Schools do not need more alerts. They need one shared state."
          description="Valkor turns disconnected building signals into a calm, reviewable workflow."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-200 shadow-sm lg:grid-cols-3">
          {items.map(([title, description], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.08, duration: 0.5, ease }}
              className="bg-white p-7 sm:p-9"
            >
              <span className="text-sm font-semibold text-orange-600">0{index + 1}</span>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-slate-950">{title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductProofSection() {
  return (
    <section id="what-valkor-does" className="relative overflow-hidden bg-[#f3f0ec] px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Product proof"
          title="The command center is the centerpiece."
          description="Priority, system confidence, pass context, and staff ownership stay together—so leaders can scan first and investigate second."
        />
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="relative mt-16"
        >
          <div className="absolute inset-x-[8%] -top-8 h-56 rounded-full bg-orange-400/20 blur-[100px]" />
          <CommandFrame
            src="/product/operational-awareness.png"
            alt="Valkor operational awareness screen showing movement exceptions, incident context, staff response, and action history."
            className="relative"
          />
          <div className="relative mx-auto -mt-1 grid max-w-5xl gap-px overflow-hidden rounded-b-[1.5rem] border border-slate-200 bg-slate-200 shadow-xl sm:grid-cols-3">
            {[
              ["Priority before volume", "The next issue to review stays obvious."],
              ["Context before action", "Confidence and freshness travel with each event."],
              ["Ownership to outcome", "Assignment and follow-up remain visible."]
            ].map(([title, text]) => (
              <div key={title} className="bg-white px-6 py-5">
                <p className="text-sm font-semibold text-slate-950">{title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SignalSection() {
  return (
    <section className="overflow-hidden bg-white px-5 py-24 sm:px-6 lg:px-8 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Signal to decision"
              title="Infrastructure in. Human judgment out."
              description="Every step adds context without pretending a signal is a decision."
              align="left"
            />
            <div className="mt-9 hidden items-center gap-3 text-sm font-semibold text-slate-500 lg:flex">
              <ArrowDown className="h-4 w-4 text-orange-600" aria-hidden="true" />
              Follow the live system path
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute bottom-10 left-[1.65rem] top-10 w-px bg-gradient-to-b from-orange-400 via-orange-300 to-slate-200 sm:left-[2.15rem]" />
          <div className="space-y-5">
            {signalSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0.35, x: 22 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.65 }}
                  transition={{ duration: 0.5, ease }}
                  className="group relative rounded-[1.6rem] border border-slate-200 bg-white p-5 pl-[5rem] shadow-sm transition duration-500 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-[0_24px_65px_rgba(249,115,22,0.1)] sm:p-7 sm:pl-[6.5rem]"
                >
                  <div className="absolute left-3.5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 text-orange-600 shadow-[0_0_0_8px_white] transition group-hover:bg-orange-600 group-hover:text-white sm:left-5 sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600">
                        Step {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">{step.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                    </div>
                    <CheckCircle2 className="mt-1 hidden h-5 w-5 shrink-0 text-slate-300 transition group-hover:text-orange-500 sm:block" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function DarkCommandCenterSection() {
  const statuses = [
    ["Active incidents", "2 open", "orange"],
    ["Receiver health", "41 online", "green"],
    ["System confidence", "High · 94%", "green"],
    ["Pass state", "18 active", "orange"],
    ["Stale signals", "1 review", "orange"],
    ["Staff response", "Assigned", "green"]
  ] as const;

  return (
    <section className="dark-grid relative isolate overflow-hidden bg-[#060b14] px-5 py-24 sm:px-6 lg:px-8 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[36rem] w-[58rem] -translate-x-1/2 rounded-full bg-orange-600/15 blur-[150px]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Command center"
          title="One calm view of what needs attention."
          description="Orange marks active work. Red is reserved for true critical events. Everything else stays quiet."
          light
        />

        <div className="mt-14 grid gap-3 sm:grid-cols-3">
          {statuses.map(([label, value, tone], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.06, duration: 0.45, ease }}
              className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">{label}</p>
              <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-white">
                <StatusDot tone={tone} />
                {value}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="relative mt-7"
        >
          <CommandFrame
            src="/product/incident-queue.png"
            alt="Valkor incident queue showing live priorities, operational context, and assigned staff response."
          />
        </motion.div>
      </div>
    </section>
  );
}

function LiveCardsSection() {
  return (
    <section className="bg-[#fbfaf8] px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Live product states"
          title="Features you can read at a glance."
          description="Not generic capabilities. The actual states administrators review and act on."
        />
        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {liveCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.07, duration: 0.55, ease }}
                className="group rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_28px_80px_rgba(15,23,42,0.1)] sm:p-8"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.19em] text-slate-500">
                      <StatusDot tone={card.tone} />
                      {card.eyebrow}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{card.title}</h3>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white transition group-hover:bg-orange-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
                <dl className="mt-7 divide-y divide-slate-100 border-y border-slate-100">
                  {card.rows.map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between gap-6 py-3.5 text-sm">
                      <dt className="text-slate-500">{label}</dt>
                      <dd className="text-right font-semibold text-slate-950">{value}</dd>
                    </div>
                  ))}
                </dl>
                {card.action ? (
                  <p className="mt-5 text-sm font-semibold text-orange-700">
                    Suggested action <span className="ml-2 text-slate-950">{card.action}</span>
                  </p>
                ) : null}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ThreeSecondViewSection() {
  const blocks: Array<{
    label: string;
    value: string;
    detail: string;
    icon: LucideIcon;
    featured?: boolean;
  }> = [
    {
      label: "Top priority",
      value: "Overdue pass",
      detail: "Cafeteria Hall · 4m",
      icon: AlertTriangle,
      featured: true
    },
    { label: "Active incidents", value: "2", detail: "1 assigned · 1 validating", icon: Activity },
    { label: "Attendance / pass", value: "18 active", detail: "1 needs review", icon: ClipboardCheck },
    { label: "Receiver health", value: "41 / 42", detail: "East Hall B-04 stale", icon: HeartPulse },
    { label: "Next transition", value: "11:24 AM", detail: "Lunch B → Period 5", icon: Clock3 }
  ];

  return (
    <section className="bg-white px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The three-second AP view"
          title="Understand the building state in three seconds."
          description="Five signals. One clear order of attention."
        />
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blocks.map((block, index) => {
            const Icon = block.icon;
            return (
              <motion.article
                key={block.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.07, duration: 0.5, ease }}
                className={`min-h-56 rounded-[1.75rem] p-7 ${
                  block.featured
                    ? "bg-slate-950 text-white shadow-[0_28px_80px_rgba(15,23,42,0.2)] md:col-span-2"
                    : "border border-slate-200 bg-[#fbfaf8] text-slate-950"
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className={`text-xs font-bold uppercase tracking-[0.18em] ${block.featured ? "text-orange-300" : "text-slate-500"}`}>
                    {block.label}
                  </p>
                  <Icon className={`h-5 w-5 ${block.featured ? "text-orange-400" : "text-slate-400"}`} aria-hidden="true" />
                </div>
                <p className={`mt-12 font-semibold tracking-[-0.04em] ${block.featured ? "text-4xl sm:text-5xl" : "text-3xl"}`}>
                  {block.value}
                </p>
                <p className={`mt-2 text-sm ${block.featured ? "text-slate-400" : "text-slate-500"}`}>{block.detail}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const before = ["Radios", "Paper passes", "Hall cameras", "Staff memory", "Disconnected reports", "Unclear follow-up"];
  const after = ["Pass state", "Zone context", "Receiver health", "Assigned response", "Action history", "Pilot proof"];

  return (
    <section className="overflow-hidden bg-[#f3f0ec] px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Before and after" title="From scattered signals to a shared operating picture." />
        <div className="mt-16 grid gap-7 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease }}
            className="rounded-[2rem] border border-slate-300/70 bg-[#e9e6e1] p-7 sm:p-9"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Before Valkor</p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {before.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-2xl border border-slate-300 bg-white/65 px-4 py-4 text-sm font-semibold text-slate-600 shadow-sm ${
                    index % 3 === 0 ? "-rotate-1" : index % 3 === 1 ? "translate-y-2 rotate-1" : "-translate-y-1"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-10 text-sm leading-6 text-slate-500">Context gets reconstructed after the moment has already moved on.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease }}
            className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white shadow-[0_34px_90px_rgba(15,23,42,0.22)] sm:p-9"
          >
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-orange-600/20 blur-[90px]" />
            <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-orange-300">With Valkor</p>
            <div className="relative mt-8 space-y-3">
              {after.map((item) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-500/15 text-orange-300">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
            <p className="relative mt-8 text-sm leading-6 text-slate-400">One state. Clear ownership. A record of what happened next.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PilotProofSection() {
  const metrics: Array<{
    label: string;
    value: ReactNode;
    width: string;
  }> = [
    { label: "Receiver uptime", value: <><CountUp to={98.4} decimals={1} suffix="%" /></>, width: "98.4%" },
    { label: "Stale signal time", value: <><CountUp to={3.1} decimals={1} suffix="%" /></>, width: "3.1%" },
    { label: "False alerts", value: <CountUp to={4} />, width: "18%" },
    { label: "Route deviations reviewed", value: <CountUp to={12} />, width: "70%" }
  ];

  return (
    <section className="bg-white px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <SectionHeading
          eyebrow="Pilot proof"
          title="The pilot ends with evidence."
          description="Valkor measures whether the system was reliable, useful, and worthy of expansion—not whether the demo looked impressive."
          align="left"
        />

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.7, ease }}
          className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#fbfaf8] shadow-[0_32px_100px_rgba(15,23,42,0.12)]"
        >
          <div className="flex flex-col gap-5 border-b border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Pilot proof report</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">East Wing Pilot</h3>
            </div>
            <span className="w-fit rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
              Week 4 complete
            </span>
          </div>
          <div className="grid grid-cols-2 gap-px bg-slate-200 sm:grid-cols-4">
            {[
              ["Duration", "4 weeks"],
              ["Approved tags", "30"],
              ["Defined zones", "5"],
              ["Reviewers", "4"]
            ].map(([label, value]) => (
              <div key={label} className="bg-[#fbfaf8] p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">{label}</p>
                <p className="mt-2 text-lg font-semibold text-slate-950">{value}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6 p-6 sm:p-8">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <div className="flex items-end justify-between gap-6">
                  <p className="text-sm font-medium text-slate-600">{metric.label}</p>
                  <p className="text-xl font-semibold tracking-tight text-slate-950">{metric.value}</p>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: metric.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease }}
                    className="h-full rounded-full bg-orange-500"
                  />
                </div>
              </div>
            ))}
            <div className="grid gap-4 border-t border-slate-200 pt-6 sm:grid-cols-2">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-slate-400">Average response time</p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">1m 42s</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-slate-400">Recommendation</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-950">Retest east hallway receiver placement</p>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="border-y border-slate-200 bg-[#fbfaf8] px-5 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Trust and privacy"
          title="Built with clear boundaries."
          description="The trust model supports the product. It does not have to overshadow it."
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {boundaries.map((boundary, index) => (
            <motion.div
              key={boundary}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.04, duration: 0.4, ease }}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-slate-700 shadow-sm"
            >
              <ShieldCheck className="h-4 w-4 shrink-0 text-orange-600" aria-hidden="true" />
              {boundary}
            </motion.div>
          ))}
        </div>
        <div className="mt-9 text-center">
          <Button href="/trust-center" variant="secondary">
            Review the trust center
          </Button>
        </div>
      </div>
    </section>
  );
}

function DemoSection() {
  const chapters = ["Command view", "Route deviation", "Receiver health", "Pilot proof"];

  return (
    <section id="demo" className="bg-white px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Product walkthrough"
          title="See Valkor in action."
          description="A short walkthrough of zone-level awareness, incident workflow, receiver health, confidence and freshness, and pilot proof reporting."
        />
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.75, ease }}
          className="relative mt-16 overflow-hidden rounded-[2rem] bg-slate-950 p-2 shadow-[0_36px_100px_rgba(15,23,42,0.2)] sm:p-3"
        >
          <div className="relative overflow-hidden rounded-[1.45rem]">
            <Image
              src="/product/decisions.png"
              alt="Valkor decisions view used as the product walkthrough preview."
              width={1800}
              height={1015}
              sizes="(min-width: 1280px) 1180px, 94vw"
              className="aspect-[16/9] w-full object-cover object-left-top opacity-65"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.06),rgba(2,6,23,0.55))]" />
            <Button
              href="/command-center"
              variant="secondaryDark"
              aria-label="Open the Valkor product demo"
              className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 p-0 shadow-[0_0_0_12px_rgba(255,255,255,0.08)] hover:scale-105"
            >
              <Play className="ml-1 h-7 w-7 fill-current" aria-hidden="true" />
            </Button>
            <p className="absolute bottom-6 left-6 hidden text-sm font-semibold text-white sm:block">02:18 product walkthrough</p>
          </div>
          <div className="grid gap-2 p-2 pt-4 sm:grid-cols-4 sm:p-3 sm:pt-5">
            {chapters.map((chapter, index) => (
              <div key={chapter} className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-xs font-semibold text-slate-300">
                <span className="mr-2 text-orange-300">0{index + 1}</span>
                {chapter}
              </div>
            ))}
          </div>
        </motion.div>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/command-center" showArrow>
            View Product Demo
          </Button>
          <Button href="#request-pilot" variant="secondary">
            Request Pilot Review
          </Button>
        </div>
      </div>
    </section>
  );
}

function PilotRequestSection() {
  return (
    <section id="request-pilot" className="relative isolate scroll-mt-24 overflow-hidden bg-[#060b14] px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-orange-600/15 blur-[120px]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
        <div className="lg:sticky lg:top-32">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-300">Limited pilot review</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Prove the value in a controlled scope.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Start with two to four defined zones, approved badges, authorized staff, and clear success criteria.
          </p>
          <div className="mt-9 space-y-4">
            {["4–6 week review", "10–30 approved badges", "Reliability and privacy feedback", "Expand, retest, or stop"].map(
              (item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-200">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/15 text-orange-300">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {item}
                </div>
              )
            )}
          </div>
        </div>
        <PilotRequestForm />
      </div>
    </section>
  );
}

export function HomeExperience() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ProductProofSection />
      <SignalSection />
      <DarkCommandCenterSection />
      <LiveCardsSection />
      <ThreeSecondViewSection />
      <ComparisonSection />
      <PilotProofSection />
      <TrustSection />
      <DemoSection />
      <PilotRequestSection />
    </>
  );
}

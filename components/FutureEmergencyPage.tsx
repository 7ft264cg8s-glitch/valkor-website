import Image from "next/image";
import {
  AlertTriangle,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Gauge,
  GitBranch,
  LockKeyhole,
  MapPinned,
  Route,
  ShieldCheck,
  UserCheck,
  Users
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/Button";

type IconItem = {
  title: string;
  body: string;
  icon: LucideIcon;
};

type Phase = {
  phase: string;
  title: string;
  body: string;
};

const emergencyVariables: IconItem[] = [
  {
    title: "Time",
    body:
      "In fast-moving events, school leaders need faster awareness, fewer blind spots, and clearer next actions.",
    icon: Clock
  },
  {
    title: "Bottlenecks",
    body:
      "A safe route is not only the closest route. Hallways, stairwells, doorways, and exits have real capacity limits.",
    icon: Users
  },
  {
    title: "Awareness",
    body:
      "The system should show what is fresh, likely, stale, uncertain, or unknown before anyone treats it as truth.",
    icon: Gauge
  }
];

const routingInputs = [
  "Believed zone",
  "Hazard zones",
  "Blocked paths",
  "Congestion",
  "Exit capacity",
  "Staff availability",
  "Confidence level",
  "Freshness"
];

const routingActions = [
  "Shelter",
  "Evacuate",
  "Hold movement",
  "Avoid a corridor",
  "Assign staff",
  "Verify unknown zones"
];

const roadmap: Phase[] = [
  {
    phase: "Phase 1",
    title: "Operational foundation",
    body:
      "Zone awareness, approved badges, active passes, stale-data handling, confidence levels, receiver health, and admin-reviewed incidents."
  },
  {
    phase: "Phase 2",
    title: "Reliability and proof",
    body:
      "Calibration, false-alert reduction, drill data, ground-truth testing, coverage review, confidence validation, and pilot reports."
  },
  {
    phase: "Phase 3",
    title: "Emergency readiness",
    body:
      "School graph modeling, hazard zones, safe zones, blocked paths, accountability views, staff coordination, and emergency timelines."
  },
  {
    phase: "Phase 4",
    title: "Dynamic coordination",
    body:
      "Future route recommendations, congestion-aware routing, hazard-aware movement guidance, live accountability, and after-action intelligence."
  }
];

const boundaries = [
  "No GPS tracking",
  "No home tracking",
  "No cameras",
  "No microphones",
  "No facial recognition",
  "No biometrics",
  "No student phone monitoring",
  "No automatic discipline",
  "No autonomous emergency control",
  "No guaranteed emergency outcomes"
];

function SectionHeader({
  eyebrow,
  title,
  body,
  invert = false
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  invert?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className={`text-sm font-bold uppercase ${invert ? "text-orange-300" : "text-orange-700"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`mt-3 text-3xl font-semibold sm:text-5xl ${invert ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      {body ? (
        <p className={`mt-5 text-lg leading-8 ${invert ? "text-slate-300" : "text-slate-600"}`}>{body}</p>
      ) : null}
    </div>
  );
}

function Pill({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" | "orange" }) {
  const tones = {
    light: "border-slate-200 bg-white text-slate-700 shadow-sm shadow-slate-200/50",
    dark: "border-white/15 bg-white/[0.08] text-slate-100",
    orange: "border-orange-200 bg-orange-50 text-orange-800"
  };

  return (
    <span className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-sm font-semibold ${tones[tone]}`}>
      {children}
    </span>
  );
}

function MiniCard({ item, dark = false }: { item: IconItem; dark?: boolean }) {
  const Icon = item.icon;

  return (
    <article
      className={`rounded-[1.5rem] border p-6 ${
        dark ? "border-white/10 bg-white/5 text-white" : "border-slate-200 bg-white text-slate-950 shadow-sm shadow-slate-200/60"
      }`}
    >
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
          dark ? "bg-white/10 text-orange-300" : "border border-orange-100 bg-orange-50 text-valkor-orange"
        }`}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
      <p className={`mt-3 text-sm leading-6 ${dark ? "text-slate-300" : "text-slate-600"}`}>{item.body}</p>
    </article>
  );
}

function FlowStep({ title, icon: Icon }: { title: string; icon: LucideIcon }) {
  return (
    <div className="flex min-h-28 flex-col justify-between rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/60">
      <Icon className="h-5 w-5 text-cyan-700" aria-hidden="true" />
      <p className="mt-4 text-sm font-semibold leading-5 text-slate-950">{title}</p>
    </div>
  );
}

export function FutureEmergencyPage() {
  return (
    <>
      <Header />
      <div aria-hidden="true" className="h-[4.5rem]" />
      <main className="bg-white text-slate-950">
        <section className="relative isolate overflow-hidden border-b border-slate-200 bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase text-orange-700">Future Capability Direction</p>
              <h1 className="mt-4 text-5xl font-semibold leading-none sm:text-7xl lg:text-8xl">The Future</h1>
              <p className="mt-6 max-w-2xl text-2xl font-semibold leading-9 text-slate-900 sm:text-3xl">
                Dynamic routing for the moments static plans cannot predict.
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Valkor starts with trusted daily visibility: zone-level awareness, pass movement, receiver health,
                confidence status, incident workflow, and staff response coordination. That foundation is what makes
                future emergency intelligence possible without building on guesswork.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/#request-pilot" showArrow>
                  Request Pilot Review
                </Button>
                <Button href="#future-boundary" variant="secondary">
                  View Boundaries
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_34px_110px_rgba(15,23,42,0.18)]">
              <Image
                src="/brand/valkor-floorplan-light.png"
                alt="Conceptual Valkor floorplan with routed signal paths"
                width={1680}
                height={945}
                priority
                className="aspect-[4/3] w-full object-cover object-center opacity-95"
                sizes="(min-width: 1024px) 52vw, 100vw"
              />
              <div className="absolute inset-x-4 bottom-4 grid gap-2 sm:grid-cols-2">
                {["Hazard marked", "Exit available", "Confidence likely", "Staff assigned"].map((label) => (
                  <div
                    key={label}
                    className="rounded-full border border-white/20 bg-slate-950/72 px-3 py-2 text-center text-xs font-semibold text-white backdrop-blur-xl"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-[#f5f5f7] px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase text-cyan-700">Why It Matters</p>
              <h2 className="mt-3 text-4xl font-semibold sm:text-6xl">Real buildings do not move in perfect plans.</h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Most school safety systems are built around fixed procedures: lockdown here, evacuate there,
                follow the posted route. Those procedures matter. Worst-case events rarely unfold inside clean
                assumptions.
              </p>
              <p>
                Students are not always in classrooms. Staff may be in hallways. Someone may be in the bathroom,
                cafeteria, office, stairwell, gym, or between zones. A hallway can become crowded. An exit can
                become unsafe. A route that works for the majority may fail the person who starts from the wrong
                place at the wrong time.
              </p>
              <p className="font-semibold text-slate-950">
                Static plans protect the average scenario. Valkor is being designed for the variables.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Current and Future"
              title="The boundary is part of the product."
              body="Valkor keeps a clear line between what is active today, what is being built toward, and what must be separately approved before emergency use."
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60 sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-700">
                  <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-3xl font-semibold text-slate-950">Where Valkor starts</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Valkor begins with school-controlled operational awareness: approved badges, school-defined zones,
                  active passes, receiver or anchor health, stale-data handling, confidence levels, and admin-reviewed
                  incidents.
                </p>
              </article>
              <article className="rounded-[2rem] border border-orange-200 bg-orange-50 p-6 shadow-sm shadow-orange-100/60 sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-200 bg-white text-orange-700">
                  <GitBranch className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-3xl font-semibold text-slate-950">Where Valkor is going</h3>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  Over time, that foundation can support emergency coordination tools such as hazard marking,
                  blocked-path awareness, congestion visibility, staff assignments, drill replay, live
                  accountability, and dynamic route recommendations.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Three Variables"
              title="Emergency intelligence has to admit what changed."
              body="The future emergency layer is built around three practical questions: what is happening, what is blocked or crowded, and what should an authorized adult do next?"
              invert
            />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {emergencyVariables.map((item) => (
                <MiniCard key={item.title} item={item} dark />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Dynamic Routing"
              title="Not the shortest path. The safest available decision."
              body="A future routing engine would reason across changing building conditions, school rules, and uncertainty before recommending action."
            />

            <div className="mt-12 rounded-[2rem] border border-slate-200 bg-[#f5f5f7] p-4 shadow-sm shadow-slate-200/60 sm:p-6 lg:p-8">
              <div className="grid gap-3 md:grid-cols-5">
                <FlowStep title="Building signals" icon={MapPinned} />
                <FlowStep title="Zone awareness" icon={Route} />
                <FlowStep title="Confidence and freshness" icon={Gauge} />
                <FlowStep title="School context" icon={ClipboardCheck} />
                <FlowStep title="Human action" icon={UserCheck} />
              </div>
              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
                  <h3 className="text-xl font-semibold text-slate-950">A future model could evaluate</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {routingInputs.map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
                  <h3 className="text-xl font-semibold text-slate-950">Then recommend reviewable actions</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {routingActions.map((item) => (
                      <Pill key={item} tone="orange">
                        {item}
                      </Pill>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-6 rounded-[1.5rem] border border-cyan-200 bg-cyan-50 p-5 text-sm font-semibold leading-6 text-slate-800">
                Valkor should never pretend uncertain information is certain. Confirmed, likely, weak,
                uncertain, stale, and unknown states are part of safety because false confidence can create risk.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#f5f5f7] px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="The Road Ahead"
              title="A roadmap, not a day-one promise."
              body="Future emergency coordination only makes sense after the daily operational layer proves reliable, useful, and trusted."
            />
            <div className="mt-12 grid gap-4 lg:grid-cols-4">
              {roadmap.map((item) => (
                <article key={item.phase} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
                  <p className="text-sm font-bold uppercase text-orange-700">{item.phase}</p>
                  <h3 className="mt-4 text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="future-boundary" className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase text-orange-700">Future Capability Boundary</p>
              <h2 className="mt-3 text-4xl font-semibold sm:text-6xl">Designed to support people, not replace them.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Dynamic emergency routing is a future capability, not a default active feature. Any emergency-routing,
                advanced-location, hazard-aware movement, or emergency-command capability would require separate
                school approval, testing, documentation, training, privacy review, and governance before use.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_34px_100px_rgba(15,23,42,0.16)] sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-orange-300">
                  <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">What Valkor does not do</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Valkor supports trained decision-makers with clearer building awareness. It does not make final
                    emergency decisions for schools.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {boundaries.map((item) => (
                  <Pill key={item} tone="dark">
                    {item}
                  </Pill>
                ))}
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                  <AlertTriangle className="h-5 w-5 text-orange-300" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold leading-6 text-white">
                    Emergency routing should not be treated as active, validated functionality today.
                  </p>
                </div>
                <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                  <LockKeyhole className="h-5 w-5 text-orange-300" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold leading-6 text-white">
                    Current Valkor remains school-controlled, zone-level operational awareness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f5f7] px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-white p-6 shadow-sm shadow-slate-200/60 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase text-cyan-700">Limited Pilot Review</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-5xl">
                Build the foundation first. Prove it before anything expands.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                Pilot reviews focus on reliability, usefulness, privacy comfort, school governance, infrastructure
                readiness, and clear end-of-pilot reporting.
              </p>
            </div>
            <Button href="/#request-pilot" showArrow>
              Request Pilot Review
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

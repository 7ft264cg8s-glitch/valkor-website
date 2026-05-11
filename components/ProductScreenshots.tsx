import Image from "next/image";
import { Section } from "@/components/ui/Section";

const screenshots = [
  {
    title: "Command center overview",
    description: "The operating surface for demo/live mode, receiver health, backend status, and command focus.",
    src: "/product/overview.png",
    featured: true
  },
  {
    title: "Incident decision workflow",
    description: "Recommended actions, responder assignment, next steps, and review controls in one place.",
    src: "/product/decisions.png"
  },
  {
    title: "Tiered incident queue",
    description: "Critical items are grouped with response state, ETA, and recommended action context.",
    src: "/product/incident-queue.png"
  },
  {
    title: "Operational awareness feed",
    description: "A lower-density incident view for route deviations, gathering risk, and response timers.",
    src: "/product/operational-awareness.png"
  },
  {
    title: "Engine incident signals",
    description: "Current engine-generated incidents with zone, person, severity, and recommended action.",
    src: "/product/engine-incidents.png"
  },
  {
    title: "Zone coverage",
    description: "Zone cards show occupancy, receiver health, issue state, and coverage confidence.",
    src: "/product/zone-coverage.png"
  },
  {
    title: "People and personnel view",
    description: "Approved staff can review current zone, pass status, movement state, and confidence.",
    src: "/product/people-view.png"
  },
  {
    title: "Reports and history",
    description: "Administrative action history and incident detail stay connected for review.",
    src: "/product/reports-history.png"
  }
];

export function ProductScreenshots() {
  const [featured, ...supporting] = screenshots;

  return (
    <Section
      id="product-views"
      eyebrow="Demo dashboard"
      title="Operational views built around real school workflows."
      description="The Valkor demo dashboard shows the surfaces schools would evaluate in a controlled pilot: command overview, incident review, zone coverage, people context, receiver status, and reporting."
    >
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-valkor-panel shadow-panel">
        <div className="border-b border-white/10 px-5 py-4 sm:px-6">
          <p className="text-base font-semibold text-valkor-text">{featured.title}</p>
          <p className="mt-1 max-w-3xl text-sm leading-6 text-valkor-muted">
            {featured.description}
          </p>
        </div>
        <div className="bg-[#070B14] p-3 sm:p-4">
          <Image
            src={featured.src}
            alt={featured.title}
            width={1800}
            height={1015}
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="h-auto w-full rounded-xl border border-white/10 object-contain"
          />
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {supporting.map((shot) => (
          <article
            key={shot.src}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-panel"
          >
            <div className="border-b border-white/10 px-5 py-4">
              <h3 className="text-base font-semibold text-valkor-text">{shot.title}</h3>
              <p className="mt-1 text-sm leading-6 text-valkor-muted">{shot.description}</p>
            </div>
            <div className="bg-[#070B14] p-3">
              <div className="aspect-[16/9] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src={shot.src}
                  alt={shot.title}
                  width={1800}
                  height={1015}
                  sizes="(min-width: 1024px) 592px, 100vw"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

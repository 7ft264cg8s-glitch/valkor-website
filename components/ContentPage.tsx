import { CheckCircle2, Mail } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/Button";

export type PageCard = {
  title: string;
  body?: string;
  items?: string[];
  status?: string;
};

export type PageSection = {
  eyebrow?: string;
  title: string;
  body?: string;
  items?: string[];
  cards?: PageCard[];
  callout?: string;
};

export type PageConfig = {
  eyebrow: string;
  title: string;
  description: string;
  sections: PageSection[];
  ctaTitle?: string;
  ctaBody?: string;
};

function List({ items, compact = false }: { items: string[]; compact?: boolean }) {
  return (
    <div className={compact ? "mt-5 grid gap-0" : "mt-6 grid gap-x-10 gap-y-0 md:grid-cols-2"}>
      {items.map((item) => (
        <div key={item} className="flex min-w-0 gap-3 border-t border-slate-900/10 py-3.5 text-sm leading-6 text-slate-700 sm:py-4">
          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-orange-700" aria-hidden="true" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

export function ContentPage({ config }: { config: PageConfig }) {
  return (
    <>
      <Header />
      <div aria-hidden="true" className="h-[4.5rem]" />
      <main className="bg-[#fffdf9] text-slate-950">
        <section className="relative isolate overflow-hidden border-b border-slate-900/10 bg-[#f2ede5] px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,rgba(194,65,12,0.13),transparent_28%),linear-gradient(115deg,transparent_0%,transparent_55%,rgba(255,255,255,0.68)_100%)]" />
          <div className="relative z-10 mx-auto max-w-6xl">
            <p className="inline-flex rounded-full border border-orange-800/15 bg-orange-50/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-orange-800 shadow-sm backdrop-blur">{config.eyebrow}</p>
            <h1 className="mt-7 max-w-5xl text-balance text-[clamp(2.8rem,7vw,6.5rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-[#07111f]">
              {config.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">{config.description}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/#request-pilot" showArrow>
                Request Pilot Review
              </Button>
              <Button href="mailto:jackson@valkorsystems.com?subject=Valkor%20Pilot%20Review%20Request" variant="secondary">
                Email Valkor
              </Button>
            </div>
          </div>
        </section>

        <div className="bg-[linear-gradient(180deg,#fffdf9_0%,#f6f2eb_48%,#fffdf9_100%)] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-0">
            {config.sections.map((section) => (
              <section key={section.title} className="border-b border-slate-900/10 py-10 sm:py-14 lg:grid lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-14 lg:py-16">
                <div>
                  {section.eyebrow ? (
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-800">{section.eyebrow}</p>
                  ) : null}
                  <h2 className="mt-2 text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#07111f] sm:text-4xl">{section.title}</h2>
                </div>
                <div className="mt-5 min-w-0 lg:mt-0">
                  {section.body ? <p className="max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">{section.body}</p> : null}
                  {section.items ? <List items={section.items} /> : null}
                  {section.cards ? (
                    <div className={`${section.body ? "mt-7 " : ""}grid gap-px overflow-hidden rounded-[1.75rem] border border-slate-900/10 bg-slate-900/10 md:grid-cols-2`}>
                      {section.cards.map((card) => (
                        <article key={card.title} className="min-w-0 bg-[#fffdf9] p-5 transition duration-300 hover:bg-white sm:p-6">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-lg font-semibold leading-6 text-[#07111f]">{card.title}</h3>
                            {card.status ? (
                              <span className="whitespace-nowrap rounded-full border border-orange-800/15 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-800">
                                {card.status}
                              </span>
                            ) : null}
                          </div>
                          {card.body ? <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-[0.9375rem]">{card.body}</p> : null}
                          {card.items ? <List items={card.items} compact /> : null}
                        </article>
                      ))}
                    </div>
                  ) : null}
                  {section.callout ? (
                    <p className="mt-7 rounded-r-2xl border-l-2 border-orange-700 bg-orange-50/70 px-5 py-4 text-sm font-semibold leading-6 text-slate-800 sm:px-6">
                      {section.callout}
                    </p>
                  ) : null}
                </div>
              </section>
            ))}

            <section className="relative isolate mt-10 overflow-hidden rounded-[2rem] border border-slate-950 bg-[#07111f] p-6 text-white shadow-[0_30px_90px_rgba(15,23,42,0.22)] sm:p-9 lg:mt-14 lg:p-11">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_18%,rgba(249,115,22,0.22),transparent_32%)]" />
              <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                    {config.ctaTitle ?? "Request a limited pilot review."}
                  </h2>
                  <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                    {config.ctaBody ??
                      "Pilot reviews cover operational pain points, privacy and governance boundaries, infrastructure readiness, pilot scope, reliability expectations, success metrics, and end-of-pilot reporting."}
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                  <Button href="/#request-pilot" showArrow>
                    Request Pilot Review
                  </Button>
                  <Button href="mailto:jackson@valkorsystems.com?subject=Valkor%20Limited%20Pilot%20Review%20Request" variant="secondaryDark">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Email
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

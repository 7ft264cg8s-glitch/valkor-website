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

function List({ items }: { items: string[] }) {
  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-valkor-orange" aria-hidden="true" />
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
      <main>
        <section className="relative isolate overflow-hidden border-b border-slate-200 bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_8%,rgba(249,115,22,0.11),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.88)_0%,#ffffff_75%)]" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-700">{config.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl">
              {config.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{config.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/#request-pilot" showArrow>
                Request Pilot Review
              </Button>
              <Button href="mailto:jackson@valkorsystems.com?subject=Valkor%20Pilot%20Review%20Request" variant="secondary">
                Email Valkor
              </Button>
            </div>
          </div>
        </section>

        <div className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] px-5 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8">
            {config.sections.map((section) => (
              <section key={section.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60 sm:p-8">
                {section.eyebrow ? (
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">{section.eyebrow}</p>
                ) : null}
                <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-slate-950">{section.title}</h2>
                {section.body ? <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">{section.body}</p> : null}
                {section.items ? <List items={section.items} /> : null}
                {section.cards ? (
                  <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {section.cards.map((card) => (
                      <article key={card.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
                          {card.status ? (
                            <span className="whitespace-nowrap rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                              {card.status}
                            </span>
                          ) : null}
                        </div>
                        {card.body ? <p className="mt-3 text-sm leading-6 text-slate-600">{card.body}</p> : null}
                        {card.items ? <List items={card.items} /> : null}
                      </article>
                    ))}
                  </div>
                ) : null}
                {section.callout ? (
                  <p className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-5 text-sm font-semibold leading-6 text-slate-800">
                    {section.callout}
                  </p>
                ) : null}
              </section>
            ))}

            <section className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-300/60 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h2 className="text-3xl font-semibold tracking-[-0.03em]">
                    {config.ctaTitle ?? "Request a limited pilot review."}
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
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

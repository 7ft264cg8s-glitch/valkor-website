import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section id="contact" className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-valkor-panel p-8 text-center shadow-panel sm:p-12">
        <p className="text-sm font-semibold uppercase text-valkor-orange">
          Pilot conversations
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight text-valkor-text sm:text-4xl lg:text-5xl">
          Start with a controlled operational awareness pilot.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-valkor-muted sm:text-lg">
          Valkor is being built to help schools evaluate a safer, clearer, and more coordinated way
          to understand movement inside approved areas during the school day.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="mailto:jackson@valkorsystems.com?subject=Valkor%20Pilot%20Information" showArrow>
            Request Pilot Information
          </Button>
          <Button href="mailto:jackson@valkorsystems.com" variant="secondary">
            Contact Valkor Systems
          </Button>
        </div>
        <p className="mt-6 text-sm font-medium text-valkor-muted">
          Controlled scope. School-approved access. No GPS, facial recognition, audio, or video.
        </p>
      </div>
    </section>
  );
}

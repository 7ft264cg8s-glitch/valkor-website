import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import {
  FAQPreviewSection,
  HelpsSchoolsSection,
  PilotMetricsSection,
  PilotProgramSection,
  PilotRequestSection,
  PositioningStatement,
  ProductViewsSection,
  ResourcesSection,
  SignalFlowSection,
  TechnicalOverviewSection,
  TrustPrivacySection,
  WhyNowSection
} from "@/components/HomeSections";

export default function Home() {
  return (
    <>
      <Header />
      <div aria-hidden="true" className="h-[4.5rem]" />
      <main>
        <Hero />
        <PositioningStatement />
        <WhyNowSection />
        <HelpsSchoolsSection />
        <SignalFlowSection />
        <ProductViewsSection />
        <PilotProgramSection />
        <TrustPrivacySection />
        <TechnicalOverviewSection />
        <PilotMetricsSection />
        <FAQPreviewSection />
        <ResourcesSection />
        <PilotRequestSection />
      </main>
      <Footer />
    </>
  );
}

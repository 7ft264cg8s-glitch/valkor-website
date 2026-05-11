import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import {
  DoesNotDoSection,
  FAQPreviewSection,
  FutureRoadmapSection,
  HelpsSchoolsSection,
  HowItWorksSection,
  IncidentWorkflowSection,
  PilotMetricsSection,
  PilotProgramSection,
  PilotRequestSection,
  PositioningStatement,
  ProductViewsSection,
  ReliabilitySection,
  ResourcesSection,
  TechnicalOverviewSection,
  TrustPrivacySection
} from "@/components/HomeSections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PositioningStatement />
        <HelpsSchoolsSection />
        <HowItWorksSection />
        <PilotProgramSection />
        <TrustPrivacySection />
        <ReliabilitySection />
        <DoesNotDoSection />
        <IncidentWorkflowSection />
        <TechnicalOverviewSection />
        <PilotMetricsSection />
        <ProductViewsSection />
        <FAQPreviewSection />
        <ResourcesSection />
        <FutureRoadmapSection />
        <PilotRequestSection />
      </main>
      <Footer />
    </>
  );
}

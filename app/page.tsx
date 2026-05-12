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
  MissionSection,
  OperationalTrustStackSection,
  PilotMetricsSection,
  PilotProgramSection,
  PilotRequestSection,
  PositioningStatement,
  ProductViewsSection,
  ReliabilitySection,
  ResourcesSection,
  SystemHealthSection,
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
        <SystemHealthSection />
        <DoesNotDoSection />
        <IncidentWorkflowSection />
        <TechnicalOverviewSection />
        <PilotMetricsSection />
        <ProductViewsSection />
        <MissionSection />
        <FAQPreviewSection />
        <ResourcesSection />
        <FutureRoadmapSection />
        <OperationalTrustStackSection />
        <PilotRequestSection />
      </main>
      <Footer />
    </>
  );
}

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import {
  BuyerValueSection,
  ClearBoundariesSection,
  DoesNotDoSection,
  FAQPreviewSection,
  FutureRoadmapSection,
  HelpsSchoolsSection,
  HowItWorksSection,
  IncidentWorkflowSection,
  LiveOperationalSnapshotSection,
  MissionSection,
  MovementIntelligenceSection,
  OperationalTrustStackSection,
  PilotMetricsSection,
  PilotProgramSection,
  PilotRequestSection,
  PositioningStatement,
  ProductViewsSection,
  ReliabilitySection,
  ResourcesSection,
  SignalFlowSection,
  SystemHealthSection,
  TechnicalOverviewSection,
  TrustPrivacySection,
  WhyNowSection
} from "@/components/HomeSections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LiveOperationalSnapshotSection />
        <PositioningStatement />
        <WhyNowSection />
        <SignalFlowSection />
        <HelpsSchoolsSection />
        <MovementIntelligenceSection />
        <HowItWorksSection />
        <ClearBoundariesSection />
        <PilotProgramSection />
        <BuyerValueSection />
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

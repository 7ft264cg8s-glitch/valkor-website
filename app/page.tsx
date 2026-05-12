import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import {
  BuyerValueSection,
  DoesNotDoSection,
  FAQPreviewSection,
  FutureRoadmapSection,
  HelpsSchoolsSection,
  HowItWorksSection,
  IncidentWorkflowSection,
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
        <PositioningStatement />
        <WhyNowSection />
        <HelpsSchoolsSection />
        <MovementIntelligenceSection />
        <HowItWorksSection />
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

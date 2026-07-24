import type { Metadata } from "next";
import { FutureEmergencyPage } from "@/components/FutureEmergencyPage";

export const metadata: Metadata = {
  title: "The Future | Valkor Systems",
  description:
    "Valkor's future emergency-readiness direction: dynamic routing, congestion-aware decision support, drill replay, and clear capability boundaries."
};

export default function FutureEmergencyReadinessPage() {
  return <FutureEmergencyPage />;
}

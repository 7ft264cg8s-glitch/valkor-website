import {
  Activity,
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Database,
  FileCheck2,
  FileText,
  Gauge,
  HeartPulse,
  HelpCircle,
  History,
  IdCard,
  LockKeyhole,
  Map,
  MapPinned,
  MonitorCheck,
  Radio,
  Route,
  School,
  ShieldCheck,
  SlidersHorizontal,
  UserCheck,
  Users,
  WifiOff
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type IconCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const navigation = [
  { label: "Home", href: "#" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pilot Program", href: "#pilot-program" },
  { label: "Trust & Privacy", href: "#trust-privacy" },
  { label: "Technical Overview", href: "#technical-overview" },
  { label: "Resources", href: "#resources" }
];

export const heroTrustPills = [
  "No GPS",
  "No Cameras",
  "No Biometrics",
  "Human-controlled",
  "Limited Pilots"
];

export const helpsSchoolsDo: IconCard[] = [
  {
    title: "Hallway accountability",
    description:
      "See when students are out on approved movement, when they are overdue, and when movement may need follow-up.",
    icon: Clock
  },
  {
    title: "Zone-level awareness",
    description:
      "Focus on school-defined areas such as hallways, bathrooms, cafeterias, offices, classroom wings, gyms, exits, and restricted zones - not exact GPS coordinates.",
    icon: MapPinned
  },
  {
    title: "Confidence-based visibility",
    description:
      "Show whether a zone estimate is confirmed, likely, weak, uncertain, stale, or unknown instead of pretending imperfect signal data is perfect.",
    icon: Gauge
  },
  {
    title: "Receiver health monitoring",
    description:
      "Give administrators and technical reviewers visibility into receiver status, degraded signals, stale data, and system confidence.",
    icon: Radio
  },
  {
    title: "Incident workflow",
    description:
      "Support detection, validation, acknowledgement, assignment, response, resolution, and dismissal inside a human-controlled workflow.",
    icon: ClipboardCheck
  },
  {
    title: "Pilot proof reporting",
    description:
      "Measure receiver uptime, zone accuracy, false alerts, missed detections, overdue pass detection, response actions, and privacy feedback.",
    icon: BarChart3
  }
];

export const howItWorksSteps: IconCard[] = [
  {
    title: "Approved badges emit local building signals",
    description:
      "Students or staff in a pilot may carry approved BLE-enabled badges or tags within school-approved areas.",
    icon: IdCard
  },
  {
    title: "Fixed receivers detect school-defined zones",
    description:
      "Receivers are placed in selected school-approved areas such as hallways, bathroom entrances, cafeteria entrances, office areas, or restricted zones.",
    icon: Radio
  },
  {
    title: "Valkor evaluates confidence and context",
    description:
      "The system evaluates freshness, receiver health, signal stability, receiver overlap, and movement context before showing operational state.",
    icon: Gauge
  },
  {
    title: "Administrators see state and incidents",
    description:
      "The dashboard shows zone-level state, incidents, confidence, stale data, receiver health, and recommended next steps.",
    icon: MonitorCheck
  }
];

export const pilotScope = [
  { label: "Duration", value: "4-6 weeks" },
  { label: "Receivers", value: "3-5" },
  { label: "Badges/devices", value: "10-30" },
  { label: "Zones", value: "2-4" },
  {
    label: "Use cases",
    value: "Hall pass movement, overdue trips, route deviation, receiver health, admin follow-up"
  },
  { label: "Emergency dependency", value: "None" },
  { label: "GPS", value: "No" },
  { label: "Biometrics", value: "No" },
  { label: "Autonomous discipline", value: "No" }
];

export const pilotMetrics = [
  "Receiver uptime",
  "Packet reliability",
  "Zone confirmation accuracy",
  "Average confidence score",
  "False alert count",
  "Missed detection count",
  "Stale/unknown signal time",
  "Overdue pass detections",
  "Route deviation detections",
  "Admin response actions",
  "Average response time",
  "Admin usefulness feedback",
  "Privacy/trust feedback",
  "End-of-pilot recommendations"
];

export const dailyVisibilityUseCases = [
  "Students out longer than expected",
  "Movement outside approved pass routes",
  "Hallway or bathroom accountability",
  "Repeated gathering zones",
  "Restricted-zone visibility",
  "Receiver/device health",
  "Stale or missing signal awareness",
  "Incident acknowledgement and resolution",
  "Operational reporting after a pilot or drill"
];

export const operationalData = [
  "Approved badge/device identifiers",
  "Receiver identifiers",
  "Zone identifiers",
  "Signal strength readings",
  "Timestamps",
  "Last seen status",
  "Confidence status",
  "Pass status",
  "Movement events",
  "Incident events",
  "Receiver health information",
  "Admin actions",
  "Audit logs",
  "Pilot performance metrics"
];

export const dataPurposes = [
  "Zone-level visibility",
  "Hallway accountability",
  "Overdue pass detection",
  "Route deviation detection",
  "Receiver reliability monitoring",
  "False alert reduction",
  "Incident documentation",
  "Pilot evaluation",
  "Historical reporting",
  "Future emergency-routing and congestion intelligence where approved"
];

export const accessControlItems = [
  "Approved school personnel only",
  "Administrator and assistant principal access",
  "IT/security reviewer access where approved",
  "Designated responder access by role",
  "School-defined deployment boundaries",
  "Configurable retention expectations",
  "Audit logs for accountability"
];

export const doesNotDo = [
  "No GPS tracking",
  "No home tracking",
  "No camera surveillance",
  "No microphone monitoring",
  "No biometric identification",
  "No facial recognition",
  "No student-facing app requirement",
  "No public student visibility",
  "No autonomous discipline",
  "No automatic staff dispatch",
  "No consumer-style behavioral profiling",
  "No automatic safety guarantees",
  "No replacement for administrators, teachers, SROs, emergency responders, school policy, or school judgment",
  "No full-school emergency automation in the first pilot"
];

export const designedFor = [
  "School-hours operational use",
  "School-approved deployment areas",
  "Administrator-controlled access",
  "Zone-level visibility",
  "Confidence-aware alerts",
  "Incident coordination",
  "Operational reporting",
  "Emergency readiness infrastructure"
];

export const confidenceStates = ["Confirmed", "Likely", "Weak", "Uncertain", "Stale", "Unknown"];

export const systemHealthItems = [
  "Receiver online/stale/offline status",
  "Last seen timestamps",
  "Signal freshness",
  "Receiver conflict indicators",
  "Badge/device health",
  "Unknown or unapproved device handling",
  "Data confidence display"
];

export const currentFocus = [
  "Zone-level school movement awareness",
  "Hallway/pass accountability",
  "Overdue movement visibility",
  "Route deviation detection",
  "Receiver health",
  "Confidence-aware operational state",
  "Incident coordination",
  "Pilot reporting"
];

export const futureDevelopment = [
  "Emergency command mode",
  "Live accountability during drills or emergencies",
  "Hazard-aware routing",
  "Congestion-aware movement intelligence",
  "Evacuation optimization",
  "Staff coordination workflows",
  "After-action reporting"
];

export const trustStack = [
  "No GPS",
  "No biometrics",
  "No cameras",
  "No microphones",
  "No home tracking",
  "Zone-level visibility",
  "School-controlled access",
  "Confidence-aware alerts",
  "Receiver health monitoring",
  "Pilot-ready deployment",
  "Human-controlled workflows"
];

export const productProofCaptions = [
  "Dashboard overview",
  "People/zone state",
  "Confidence indicator",
  "Receiver health",
  "Stale data warning",
  "Incident workflow",
  "Pilot report metrics"
];

export const missionCards: IconCard[] = [
  {
    title: "Movement accountability",
    description: "Reduce confusion around pass activity, overdue movement, and route deviation visibility.",
    icon: Activity
  },
  {
    title: "Emergency readiness",
    description: "Build trusted operational visibility before higher-stakes emergency coordination layers.",
    icon: ShieldCheck
  },
  {
    title: "Operational intelligence",
    description: "Help schools understand receiver health, confidence levels, incident follow-up, and pilot results.",
    icon: BarChart3
  }
];

export const reliabilityStates = [
  "Receiver online",
  "Receiver stale",
  "Receiver offline",
  "Data fresh",
  "Data stale",
  "Signal lost",
  "Unknown",
  "Candidate zone",
  "Confirmed zone",
  "Receiver conflict",
  "Low confidence",
  "No recent reading",
  "Demo mode",
  "Live mode"
];

export const incidentLifecycle = [
  "Detected",
  "Validating",
  "Open",
  "Acknowledged",
  "Assigned",
  "Responding",
  "Resolved / Dismissed"
];

export const adminActions = [
  "Acknowledge",
  "Assign staff",
  "Mark responding",
  "Resolve",
  "Dismiss",
  "Add resolution reason",
  "View evidence summary",
  "View recommended action",
  "Review incident history"
];

export const resolutionReasons = [
  "Student returned",
  "Staff checked",
  "False alert",
  "Receiver issue",
  "Pass corrected",
  "Manual override",
  "Real issue resolved"
];

export const technicalComponents: IconCard[] = [
  { title: "BLE badge or tag", description: "Approved pilot devices emit local signals.", icon: IdCard },
  { title: "Fixed receiver/gateway", description: "Receivers listen in selected school-approved zones.", icon: Radio },
  { title: "Approved device registry", description: "Known devices and receivers are validated before use.", icon: Database },
  { title: "Receiver heartbeat", description: "Health and freshness indicators help reveal stale coverage.", icon: HeartPulse },
  { title: "Backend validation", description: "Unknown devices should not become student records.", icon: ShieldCheck },
  { title: "Raw telemetry separation", description: "Operational displays stay focused on reviewed state.", icon: SlidersHorizontal },
  { title: "Zone inference engine", description: "Signals are interpreted as zone-level estimates.", icon: Map },
  { title: "Confidence scoring", description: "The dashboard exposes confidence and uncertainty.", icon: Gauge },
  { title: "Stale/unknown handling", description: "Loss of signal lowers confidence rather than hiding uncertainty.", icon: WifiOff },
  { title: "Incident engine", description: "Operational issues can move through a review workflow.", icon: AlertTriangle },
  { title: "Admin dashboard", description: "Approved users see operational state and response actions.", icon: MonitorCheck },
  { title: "Audit logging", description: "Admin actions can be reviewed during pilot evaluation.", icon: History },
  { title: "Pilot reporting", description: "Schools receive measurable results and recommendations.", icon: FileCheck2 }
];

export const faqItems = [
  {
    question: "Is Valkor student tracking?",
    answer:
      "Valkor is best described as school operational awareness, not consumer-style tracking. It provides zone-level visibility during school-controlled use so administrators can understand movement, pass status, stale data, and incidents."
  },
  {
    question: "Does Valkor use GPS?",
    answer: "No. Valkor's pilot positioning is zone-level and school-controlled, not GPS-based."
  },
  {
    question: "Does Valkor follow students home?",
    answer: "No. Valkor is designed for school-controlled operational use, not home tracking."
  },
  {
    question: "Does Valkor use cameras, microphones, or biometrics?",
    answer: "No. Valkor does not use cameras, microphones, facial recognition, or biometric identification."
  },
  {
    question: "Does Valkor automatically discipline students?",
    answer:
      "No. Valkor can surface operational information and recommended actions, but humans remain in control."
  },
  {
    question: "What does zone-level mean?",
    answer:
      "Zone-level means Valkor estimates areas such as hallway, bathroom entrance, cafeteria, office, classroom wing, gym, exit area, or restricted zone. It is not trying to show exact foot-by-foot location."
  },
  {
    question: "What happens if Valkor is uncertain?",
    answer:
      "The dashboard should show confidence and freshness states such as confirmed, likely, weak, uncertain, stale, or unknown."
  },
  {
    question: "What happens if a receiver goes offline?",
    answer:
      "The dashboard should show receiver health and avoid pretending the area has reliable live data."
  },
  {
    question: "Who can access Valkor?",
    answer: "Access should be limited to approved school users based on role and pilot configuration."
  },
  {
    question: "What data does Valkor collect?",
    answer:
      "Depending on deployment, Valkor may process approved badge IDs, receiver IDs, zone IDs, timestamps, signal readings, confidence states, pass events, incident events, receiver health, admin actions, and audit logs."
  },
  {
    question: "Is emergency routing part of the first pilot?",
    answer:
      "No. Emergency coordination is a long-term product layer. The first pilot should focus on live zone awareness, school operations, reliability, and trust."
  }
];

export const resources = [
  "Valkor One-Page Overview",
  "Pilot Program Overview",
  "Privacy & Operational Data Overview",
  "What Valkor Does Not Do",
  "Parent-Facing Explanation",
  "IT & Security Review Brief",
  "Pilot Success Metrics Template",
  "Failure & Downtime Handling Overview",
  "Alert Escalation Logic",
  "Demo Walkthrough"
];

export const productScreenshots = [
  {
    title: "Command center overview",
    description: "Demo/live mode, receiver health, backend status, and command focus.",
    src: "/product/overview.png"
  },
  {
    title: "Incident decision workflow",
    description: "Recommended actions, responder assignment, next steps, and review controls.",
    src: "/product/decisions.png"
  },
  {
    title: "Tiered incident queue",
    description: "Critical items grouped with response state, ETA, and recommended action context.",
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
    description: "Occupancy, receiver health, issue state, and coverage confidence by zone.",
    src: "/product/zone-coverage.png"
  },
  {
    title: "People and personnel view",
    description: "Current zone, pass status, movement state, and confidence for approved review.",
    src: "/product/people-view.png"
  },
  {
    title: "Reports and history",
    description: "Administrative action history and incident detail stay connected for review.",
    src: "/product/reports-history.png"
  }
];

export const footerLinks = [
  { label: "Pilot Program", href: "#pilot-program" },
  { label: "Trust & Privacy", href: "#trust-privacy" },
  { label: "Technical Overview", href: "#technical-overview" },
  { label: "Resources", href: "#resources" },
  { label: "Future Roadmap", href: "#future-roadmap" }
];

export const formInterests = [
  "Hallway accountability",
  "Pass visibility",
  "Bathroom monitoring",
  "Receiver reliability",
  "Incident workflow",
  "Operational overview",
  "Emergency planning",
  "Privacy/security review",
  "Other"
];

export const schoolTypes = ["Middle school", "High school", "District", "Private school", "Other"];

export const nextSteps = [
  "15-minute intro",
  "Platform walkthrough",
  "Pilot discussion",
  "IT/privacy review",
  "Send materials"
];

export const quickProof = [
  { label: "Visibility", value: "Zone-level" },
  { label: "Access", value: "School-controlled" },
  { label: "Pilot scope", value: "Limited" },
  { label: "Decisions", value: "Human-controlled" }
];

export const heroPreviewRows = [
  { label: "Approved Zones", value: "Main hallway, office wing", tone: "neutral" },
  { label: "Overdue movement", value: "2 need review", tone: "orange" },
  { label: "Receiver health", value: "4 online / 1 stale", tone: "green" },
  { label: "Confidence", value: "Likely - 86%", tone: "blue" },
  { label: "Staff response", value: "Assigned", tone: "green" },
  { label: "Readiness", value: "Emergency-ready foundation", tone: "orange" }
];

export const publicTechExclusions = [
  "Full API endpoint list",
  "Full database schema",
  "Internal code architecture",
  "Security implementation details",
  "Receiver network details",
  "Exact deployment maps",
  "School floor plans",
  "Raw telemetry examples tied to real people",
  "Detailed vulnerability information"
];

export const roadmapCapabilities: IconCard[] = [
  {
    title: "Blocked route awareness",
    description: "Future routing work could help evaluate corridors or exits that are unavailable.",
    icon: Route
  },
  {
    title: "Crowding and congestion context",
    description: "Future models could account for crowding, hazards, and changing building conditions.",
    icon: Users
  },
  {
    title: "Decision support only",
    description: "Future routing intelligence would assist trained leaders, not replace emergency procedures.",
    icon: UserCheck
  },
  {
    title: "School approval required",
    description: "Any future emergency layer should be deployed only within approved school policy.",
    icon: School
  }
];

export const problemCards: IconCard[] = [
  {
    title: "Students out longer than expected",
    description: "Overdue trips can be hard to spot quickly when movement context lives in separate systems.",
    icon: Clock
  },
  {
    title: "Congestion or gathering in key areas",
    description: "Administrators need an earlier read on activity around bathrooms, corridors, offices, and common areas.",
    icon: Users
  },
  {
    title: "Disconnected response channels",
    description: "Staff follow-up is easier to review when alerts, assignments, and outcomes stay in one workflow.",
    icon: ClipboardCheck
  }
];

export const platformFeatures: IconCard[] = [
  {
    title: "Live Incident Queue",
    description: "Review operational items that need validation, assignment, or resolution.",
    icon: AlertTriangle
  },
  {
    title: "Zone-Level Awareness",
    description: "See school-defined zones instead of exact GPS-style location.",
    icon: MapPinned
  },
  {
    title: "Overdue Movement Alerts",
    description: "Surface trips that may need follow-up without automatic discipline decisions.",
    icon: Clock
  },
  {
    title: "Staff Response Actions",
    description: "Acknowledge, assign, respond, resolve, dismiss, and review action history.",
    icon: ClipboardCheck
  },
  {
    title: "Receiver Health Monitoring",
    description: "Expose online, stale, degraded, and offline receiver states for pilot review.",
    icon: Radio
  },
  {
    title: "Event History and Reporting",
    description: "Give school teams a clearer record of what happened and how staff responded.",
    icon: History
  }
];

export const workflowSteps: IconCard[] = [
  {
    title: "Detect",
    description: "Surface movement, pass, zone, or receiver states that may need attention.",
    icon: Activity
  },
  {
    title: "Validate",
    description: "Show context and confidence before an administrator decides what to do.",
    icon: ShieldCheck
  },
  {
    title: "Assign",
    description: "Route ownership to approved school staff inside the workflow.",
    icon: UserCheck
  },
  {
    title: "Respond",
    description: "Track response state while preserving human control.",
    icon: MonitorCheck
  },
  {
    title: "Resolve",
    description: "Record outcomes, reasons, and history for pilot review.",
    icon: FileCheck2
  }
];

export const trustCards: IconCard[] = [
  {
    title: "School-controlled access",
    description: "Visibility is limited to approved users, roles, zones, and pilot scope.",
    icon: LockKeyhole
  },
  {
    title: "No GPS tracking",
    description: "Valkor is positioned around school-controlled zone-level awareness.",
    icon: Map
  },
  {
    title: "No facial recognition",
    description: "The pilot approach does not rely on biometric identification.",
    icon: ShieldCheck
  },
  {
    title: "No audio or video monitoring",
    description: "Operational signals are not camera or microphone feeds.",
    icon: MonitorCheck
  },
  {
    title: "Limited pilot scope",
    description: "Pilots are intentionally small, measurable, and school-approved.",
    icon: SlidersHorizontal
  },
  {
    title: "Operational awareness focus",
    description: "The system supports review and coordination; humans decide next actions.",
    icon: ClipboardCheck
  }
];

export const receiverHealth = [
  { name: "Receiver A", status: "Online", tone: "success" },
  { name: "Receiver B", status: "Online", tone: "success" },
  { name: "Receiver C", status: "Stale", tone: "warning" },
  { name: "Receiver D", status: "Online", tone: "success" }
];

export const systemConfidenceFeatures: IconCard[] = [
  {
    title: "Receiver online/offline status",
    description: "Expose whether receivers are ready, stale, degraded, or offline.",
    icon: Radio
  },
  {
    title: "Last event received",
    description: "Show freshness so staff can tell whether data is current.",
    icon: Clock
  },
  {
    title: "Data freshness",
    description: "Distinguish fresh, stale, and unknown operational state.",
    icon: Gauge
  },
  {
    title: "Coverage awareness",
    description: "Help technical reviewers understand confidence by pilot zone.",
    icon: MapPinned
  },
  {
    title: "Dashboard/API status",
    description: "Show backend and dashboard health without hiding uncertainty.",
    icon: MonitorCheck
  },
  {
    title: "System confidence indicators",
    description: "Use confidence language instead of pretending signals are perfect.",
    icon: Activity
  }
];

export const zoneActivity = [
  { zone: "Main Hallway", confidence: "Confirmed", activity: "Normal movement" },
  { zone: "Cafeteria Corridor", confidence: "Likely", activity: "Moderate congestion" },
  { zone: "East Wing", confidence: "Confirmed", activity: "Two overdue trips" },
  { zone: "Gym Connector", confidence: "Stale", activity: "Receiver needs review" }
];

export const timelineEvents = [
  { time: "10:42", label: "Overdue movement reviewed", zone: "Main Hallway" },
  { time: "10:45", label: "Staff response assigned", zone: "East Wing" },
  { time: "10:48", label: "Receiver health changed", zone: "Gym Connector" }
];

export const systemAlerts = [
  { label: "Overdue movement: 11 min", detail: "Review", tone: "warning" },
  { label: "Congestion: moderate", detail: "Monitor", tone: "neutral" },
  { label: "Staff response: pending", detail: "Assigned", tone: "success" }
];

export const futureCapabilities = roadmapCapabilities;

export { FileText, HelpCircle };

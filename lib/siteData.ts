import {
  Activity,
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Cpu,
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
  Trash2,
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
  { label: "Product", href: "/#what-valkor-does" },
  { label: "Pilot Program", href: "/pilot" },
  { label: "Trust & Privacy", href: "/trust-center" },
  { label: "Technical Overview", href: "/it-security" },
  { label: "Request Pilot", href: "/#request-pilot" }
];

export const heroTrustPills = [
  "Configured campus zones",
  "Authorized staff",
  "School-issued badges",
  "Confidence indicators",
  "Clear audit logs"
];

export const liveSnapshotMetrics = [
  { label: "Signal Health", value: "4 healthy / 1 stale", tone: "green" },
  { label: "Overdue Passes", value: "2 need review", tone: "orange" },
  { label: "Zone Confidence", value: "Likely · 86%", tone: "blue" },
  { label: "Incident State", value: "Assigned", tone: "slate" },
  { label: "Mode", value: "Pilot Demo", tone: "orange" }
];

export const signalFlowSteps: IconCard[] = [
  {
    title: "School-approved device sends a local signal",
    description: "School-approved devices or infrastructure generate building-level signals inside the pilot scope.",
    icon: IdCard
  },
  {
    title: "Campus system identifies a defined area",
    description: "Configured campus infrastructure reports building-level activity without GPS precision.",
    icon: Radio
  },
  {
    title: "Confidence engine checks signal state",
    description: "Freshness, signal quality, and infrastructure health are reviewed before context is shown.",
    icon: Gauge
  },
  {
    title: "Movement engine compares pass context",
    description: "Pass status, expected route, overdue movement, and zone activity are evaluated as operational context.",
    icon: Cpu
  },
  {
    title: "Dashboard surfaces reviewable context",
    description: "Approved administrators see reviewable context and decide what follow-up is appropriate.",
    icon: MonitorCheck
  }
];

export const signalFlowStatusLabels = [
  "Signal Received",
  "Area Detected",
  "Confidence Checked",
  "Movement Reviewed",
  "Admin Review Ready"
];

export const valkorDoes = [
  "Zone-level operational awareness",
  "Hall pass visibility",
  "Overdue movement review",
  "Device and signal health",
  "Human-controlled incident workflow"
];

export const valkorDoesNot = [
  "GPS tracking",
  "Cameras",
  "Biometrics",
  "Home tracking",
  "Student phone monitoring",
  "Advertising profiles",
  "Automatic discipline",
  "Autonomous emergency decisions"
];

export const helpsSchoolsDo: IconCard[] = [
  {
    title: "Hallway accountability",
    description:
      "See when students are out on approved movement, when they are overdue, and when movement may need follow-up.",
    icon: Clock
  },
  {
    title: "Building-area awareness",
    description:
      "Focus on defined areas such as hallways, bathrooms, cafeterias, offices, gyms, exits, and restricted spaces - not exact GPS coordinates.",
    icon: MapPinned
  },
  {
    title: "Signal honesty",
    description:
      "Show whether a location estimate is confirmed, likely, weak, uncertain, stale, or unknown instead of overstating imperfect data.",
    icon: Gauge
  },
  {
    title: "Device and signal health",
    description:
      "Give administrators and technical reviewers visibility into device status, degraded signals, stale data, and system confidence.",
    icon: Radio
  },
  {
    title: "Incident workflow",
    description:
      "Support detection, validation, acknowledgement, assignment, response, resolution, and dismissal.",
    icon: ClipboardCheck
  },
  {
    title: "Pilot proof reporting",
    description:
      "Measure system uptime, zone reliability, false alerts reviewed, missed detections reviewed, overdue pass visibility, response actions, and privacy feedback.",
    icon: BarChart3
  }
];

export const whyNowCards = [
  {
    title: "More movement to manage",
    description:
      "Hall passes, transitions, office visits, late arrivals, dismissals, lunch movement, and event-day flow all create live operational questions."
  },
  {
    title: "Disconnected tools",
    description:
      "Radios, hallway cameras, paper passes, staff memory, and disconnected systems leave gaps between what happened and what administrators can review."
  },
  {
    title: "Faster follow-up expectations",
    description:
      "Administrators need to understand movement, assign follow-up, and document outcomes without turning every signal into a crisis."
  }
];

export const howItWorksSteps: IconCard[] = [
  {
    title: "School-approved systems create building signals",
    description:
      "Students or staff in a pilot may use school-approved devices or infrastructure within configured campus areas.",
    icon: IdCard
  },
  {
    title: "Campus infrastructure supports school-defined zones",
    description:
      "Configured campus infrastructure supports selected areas such as hallways, bathroom entrances, cafeteria entrances, office areas, or restricted zones.",
    icon: Radio
  },
  {
    title: "Valkor evaluates confidence and context",
    description:
      "The system evaluates freshness, signal stability, infrastructure health, and movement context before showing operational state.",
    icon: Gauge
  },
  {
    title: "Administrators see state and incidents",
    description:
      "The dashboard shows zone-level state, incidents, confidence, stale data, infrastructure health, and recommended next steps.",
    icon: MonitorCheck
  }
];

export const signalDecisionFlow = [
  "Approved campus signal is generated",
  "School system identifies a configured zone",
  "Valkor checks freshness and infrastructure health",
  "Confidence engine estimates zone state",
  "Movement engine compares pass context and expected route",
  "Dashboard surfaces reviewable operational context",
  "Approved administrator decides next action",
  "Incident outcome is logged for reporting"
];

export const movementSignals = [
  "Pass status",
  "Expected route",
  "Current zone",
  "Last confirmed zone",
  "Time out of class",
  "Zone crowding",
  "Route deviation",
  "Repeated movement pattern",
  "Restricted-zone presence",
  "Infrastructure health",
  "Signal freshness",
  "Confidence score",
  "Incident history",
  "Staff assignment state",
  "Resolution outcome"
];

export const pilotScope = [
  { label: "Duration", value: "4-6 weeks" },
  { label: "Infrastructure", value: "Reviewed privately" },
  { label: "Devices", value: "10-30 approved badges/devices" },
  { label: "Zones", value: "2-4 school-defined areas" },
  {
    label: "Use cases",
    value: "Pass accountability, attendance review, incident workflow, staff response, reliability proof"
  },
  { label: "Emergency dependency", value: "None" },
  { label: "GPS", value: "No" },
  { label: "Biometrics", value: "No" },
  { label: "Autonomous discipline", value: "No" }
];

export const pilotBoundaryItems = [
  "Limited and measurable",
  "Reversible pilot scope",
  "School-hours-only operation",
  "Approved zones only",
  "Approved users only",
  "Pseudonymous IDs where appropriate",
  "No GPS",
  "No biometrics",
  "No cameras",
  "No microphones",
  "No automatic discipline",
  "Documented success metrics",
  "Documented failure conditions",
  "End-of-pilot review"
];

export const pilotMeasurementExamples = [
  "System uptime",
  "Signal feed reliability",
  "Stale-data rate",
  "Confidence levels",
  "False alerts reviewed",
  "Missed detections reviewed",
  "Overdue pass visibility",
  "Route deviation review",
  "Staff usefulness",
  "Privacy feedback",
  "Technical reliability"
];

export const pilotMetrics = [
  "System uptime",
  "Signal feed reliability",
  "Zone confirmation accuracy",
  "Average confidence score",
  "False alerts reviewed",
  "Missed detections reviewed",
  "Stale/unknown signal time",
  "Overdue pass detections",
  "Route deviation detections",
  "Admin response actions",
  "Average response time",
  "Admin usefulness feedback",
  "Privacy/trust feedback",
  "End-of-pilot recommendations"
];

export const pilotOutcomes = [
  "How reliable building-area visibility is",
  "Which areas create the most movement confusion",
  "How often students are overdue or off-route",
  "Whether administrators find the dashboard useful",
  "Which alerts are valuable versus noisy",
  "Where signal coverage needs improvement",
  "How Valkor fits into existing school workflows",
  "Whether the system is trusted enough for expanded deployment"
];

export const stakeholderValue: IconCard[] = [
  {
    title: "Principal",
    description: "Faster visibility into movement issues, fewer blind spots, and better incident follow-up.",
    icon: School
  },
  {
    title: "Assistant principal / dean",
    description: "Pass accountability, hallway patterns, student follow-up, and incident review.",
    icon: UserCheck
  },
  {
    title: "IT / security reviewer",
    description: "Infrastructure health, access control, audit logs, system confidence, and limited data scope.",
    icon: MonitorCheck
  },
  {
    title: "District / safety team",
    description: "Scalable operational awareness, reporting, and an emergency-readiness foundation.",
    icon: ShieldCheck
  },
  {
    title: "Parents / community",
    description: "No GPS, no cameras, no biometrics, no home tracking, and school-controlled use.",
    icon: LockKeyhole
  }
];

export const dailyVisibilityUseCases = [
  "Students out longer than expected",
  "Movement outside approved pass routes",
  "Hallway or bathroom accountability",
  "Students leaving class without a pass",
  "Repeated gathering zones",
  "Bathroom crowding patterns",
  "Repeated hallway clustering",
  "Multiple students converging toward the same area",
  "Restricted-zone visibility",
  "Exit-area awareness",
  "Office-wing movement",
  "Cafeteria overflow or crowding",
  "Gym/locker-room movement awareness",
  "Late arrival movement through the building",
  "Early dismissal coordination",
  "Nurse/office visit accountability",
  "Staff response follow-up",
  "Students missing from expected zones",
  "Device and signal health",
  "Stale or missing signal awareness",
  "Incident acknowledgement and resolution",
  "Incident history review",
  "After-action reporting",
  "Pilot trend reports",
  "Repeated time-of-day movement issues",
  "Route deviation patterns",
  "Zone congestion before passing periods",
  "Potential gathering-risk signals",
  "Drill accountability support",
  "Event-day movement visibility",
  "Substitute teacher support for campus movement",
  "Admin coverage gaps",
  "Bathroom supervision planning",
  "Lunch-period movement management",
  "Transition-period awareness"
];

export const carefulScenarioNotes = [
  "Operational attendance context: understand whether a student is in class, out on an approved pass, overdue, or appearing in an unexpected zone after attendance has been taken.",
  "Conflict review context: surface convergence, clustering, restricted-zone movement, or repeated route deviations that may warrant staff review.",
  "External alert context: when a vape sensor or external alert is triggered, Valkor can help administrators review who was recently present in the relevant zone, subject to school policy and human review."
];

export const operationalData = [
  "Approved badge/device identifiers",
  "Infrastructure identifiers",
  "Zone identifiers",
  "Building-level signal observations",
  "Timestamps",
  "Last seen status",
  "Confidence status",
  "Pass status",
  "Movement events",
  "Incident events",
  "Infrastructure health information",
  "Admin actions",
  "Audit logs",
  "Pilot performance metrics"
];

export const trustPrivacyCards: IconCard[] = [
  {
    title: "School-Governed Operations",
    description:
      "Schools and districts remain responsible for deployment scope, policy, review, and action.",
    icon: School
  },
  {
    title: "Area Awareness, Not Exact Tracking",
    description:
      "Valkor supports defined areas and confidence states. It is not GPS, foot-by-foot positioning, or home tracking.",
    icon: MapPinned
  },
  {
    title: "Access Based on Legitimate Operational Need",
    description:
      "Access should be limited by role, zone, user permission, pilot scope, and legitimate school operational purpose.",
    icon: LockKeyhole
  },
  {
    title: "Human Review Before Action",
    description:
      "Valkor may surface alerts, stale-data warnings, pass exceptions, and signal indicators. School personnel verify facts and decide next steps.",
    icon: UserCheck
  },
  {
    title: "Data Retention and Deletion",
    description:
      "Retention, export, and deletion expectations should be defined with the school or district before deployment and reviewed during the pilot.",
    icon: Trash2
  },
  {
    title: "Data Sharing",
    description:
      "Operational data should be shared only for approved school purposes, authorized review, pilot evaluation, and documented support needs.",
    icon: ShieldCheck
  },
  {
    title: "Compliance Review",
    description:
      "Deployment should be reviewed by the school, district, IT/privacy staff, or counsel. Website language is informational and not legal advice.",
    icon: FileCheck2
  }
];

export const dataPurposes = [
  "Building-area visibility",
  "Hallway accountability",
  "Overdue pass detection",
  "Route deviation detection",
  "Signal reliability monitoring",
  "False alert reduction",
  "Incident documentation",
  "Pilot evaluation",
  "Historical reporting",
  "Future congestion or emergency decision support where separately approved"
];

export const accessControlItems = [
  "Not every user sees every student",
  "Not every user sees every movement record",
  "Not every user sees technical diagnostics",
  "Role-based access by legitimate operational need",
  "School-defined live status permissions",
  "School-defined incident and history permissions",
  "Infrastructure health and audit access where approved"
];

export const schoolControlItems = [
  "Which buildings are included",
  "Which zones are included or excluded",
  "Which badges are approved",
  "Which people are included",
  "Whether names or pseudonymous IDs are used",
  "Who can access the dashboard",
  "Who can view historical data",
  "Who receives alerts",
  "What data is retained",
  "What data is exported or deleted",
  "How parents and stakeholders are informed"
];

export const humanReviewItems = [
  "Valkor is decision support, not an autonomous decision-maker",
  "School personnel verify facts before action",
  "Weak, missing, stale, or uncertain signals should not be treated as misconduct by themselves",
  "Valkor should not be used as the sole basis for student discipline",
  "Human school personnel remain responsible for review, verification, and action"
];

export const doesNotDoGroups = [
  {
    title: "No consumer tracking",
    items: [
      "No GPS tracking",
      "No home tracking",
      "No student phone monitoring",
      "No student message reading",
      "No web browsing monitoring"
    ]
  },
  {
    title: "No biometric or media surveillance",
    items: [
      "No cameras",
      "No microphones",
      "No facial recognition",
      "No fingerprints",
      "No biometric identification"
    ]
  },
  {
    title: "No commercial profiling",
    items: [
      "Does not sell student data",
      "Does not use student data for advertising",
      "Does not create consumer marketing profiles",
      "No public student visibility"
    ]
  },
  {
    title: "No automatic punishment",
    items: [
      "No automatic discipline",
      "No automatic staff dispatch",
      "Does not decide guilt, intent, misconduct, or punishment",
      "Weak, missing, stale, or uncertain signals are not misconduct by themselves"
    ]
  }
];

export const doesNotDo = [
  ...doesNotDoGroups.flatMap((group) => group.items),
  "No automatic safety guarantees",
  "No replacement for administrators, teachers, SROs, emergency responders, school policy, or school judgment",
  "No full-school emergency automation in the first pilot"
];

export const designedFor = [
  "School-hours operational use",
  "Configured campus deployment areas",
  "Administrator-controlled access",
  "Zone-level visibility",
  "Confidence-aware alerts",
  "Incident coordination",
  "Operational reporting",
  "Future capability planning"
];

export const confidenceStates = ["Confirmed", "Likely", "Weak", "Uncertain", "Stale", "Unknown"];

export const systemHealthItems = [
  "Infrastructure online/stale/offline status",
  "Last seen timestamps",
  "Signal freshness",
  "Signal conflict indicators",
  "Badge/device health",
  "Unknown or unapproved device handling",
  "Data confidence display"
];

export const currentFocus = [
  "Zone-level school movement awareness",
  "Hallway/pass accountability",
  "Overdue movement visibility",
  "Route deviation detection",
  "Device and signal health",
  "Confidence-aware operational state",
  "Incident coordination",
  "Pilot reporting"
];

export const futureDevelopment = [
  "Emergency coordination",
  "Drill analysis",
  "Congestion awareness",
  "Safety-routing decision support",
  "Staff coordination workflows",
  "After-action reporting"
];

export const roadmapPhases = [
  "Daily operational awareness",
  "Pattern intelligence and reporting",
  "Incident coordination",
  "Future capability boundaries",
  "District-scale operational intelligence"
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
  "Device and signal health monitoring",
  "Pilot-ready deployment",
  "Human-controlled workflows"
];

export const productProofCaptions = [
  "Command View",
  "Movement State",
  "Incident Workflow",
  "Pilot Reporting"
];

export const missionCards: IconCard[] = [
  {
    title: "Movement accountability",
    description: "Reduce confusion around pass activity, overdue movement, and route deviation visibility.",
    icon: Activity
  },
  {
    title: "Future capability boundaries",
    description: "Keep future emergency-facing capabilities separate from current pilot proof.",
    icon: ShieldCheck
  },
  {
    title: "Operational intelligence",
    description: "Help schools understand signal health, confidence levels, incident follow-up, and pilot results.",
    icon: BarChart3
  }
];

export const pilotProofCards = [
  {
    title: "Usefulness",
    description: "Do administrators get clearer follow-up context without extra operational burden?"
  },
  {
    title: "Reliability",
    description: "Where is signal coverage strong, stale, weak, or in need of adjustment?"
  },
  {
    title: "Trust",
    description: "Can the school explain the data, boundaries, access model, and review process?"
  }
];

export const reliabilityStates = [
  "Infrastructure online",
  "Infrastructure stale",
  "Infrastructure offline",
  "Data fresh",
  "Data stale",
  "Signal lost",
  "Unknown",
  "Candidate zone",
  "Confirmed zone",
  "Signal conflict",
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
  "Infrastructure issue",
  "Pass corrected",
  "Manual override",
  "Real issue resolved"
];

export const technicalComponents: IconCard[] = [
  { title: "School-approved device", description: "Approved pilot devices or systems provide local signals.", icon: IdCard },
  { title: "Configured infrastructure", description: "Campus infrastructure supports selected operational zones.", icon: Radio },
  { title: "Approved device registry", description: "Known devices and infrastructure records are validated before use.", icon: Database },
  { title: "Infrastructure health", description: "Health and freshness indicators help reveal stale coverage.", icon: HeartPulse },
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
    question: "How does Valkor handle student location concerns?",
    answer:
      "Valkor is an operational awareness system, not consumer surveillance software. It is intended for approved school use, defined areas, and staff review."
  },
  {
    question: "Does Valkor track exact location?",
    answer: "No. Valkor supports area-level awareness in school-defined spaces. It is not GPS, foot-by-foot tracking, or home tracking."
  },
  {
    question: "Does Valkor follow students home?",
    answer: "No. Valkor is designed for school-controlled operational use, not home tracking."
  },
  {
    question: "Does Valkor use cameras, microphones, or biometrics?",
    answer: "No. Valkor does not use cameras, microphones, facial recognition, fingerprints, or biometric identification."
  },
  {
    question: "Can weak or stale data be used to discipline a student?",
    answer:
      "Weak, missing, stale, or uncertain signal data should not be treated as misconduct by itself. Valkor should not be used as the sole basis for discipline."
  },
  {
    question: "Does Valkor automatically discipline students?",
    answer:
      "No. Valkor can surface operational context and workflow information, but school personnel verify facts and decide action."
  },
  {
    question: "What does zone-level mean?",
    answer:
      "It means Valkor estimates areas such as hallway, bathroom entrance, cafeteria, office, gym, exit area, or restricted space. It is not trying to show exact foot-by-foot location."
  },
  {
    question: "What happens if Valkor is uncertain?",
    answer:
      "The dashboard should show confidence and freshness states such as confirmed, likely, weak, uncertain, stale, or unknown."
  },
  {
    question: "What happens if signal infrastructure is offline?",
    answer:
      "The dashboard should show infrastructure health and avoid pretending the area has reliable live data."
  },
  {
    question: "Who controls deployment?",
    answer:
      "The school or district defines buildings, zones, approved badges, included people, access roles, retention expectations, alerts, exports, and stakeholder communication."
  },
  {
    question: "Who can access Valkor data?",
    answer:
      "Access should be limited to approved school users by role and legitimate operational need. Not every user should see every student, record, diagnostic, or historical view."
  },
  {
    question: "Does Valkor sell student data?",
    answer:
      "No. Valkor should not sell student data, use it for advertising, or create consumer marketing profiles."
  },
  {
    question: "How long is data retained?",
    answer:
      "Retention should be defined before deployment with the school or district. Pilot retention, export, and deletion expectations should be documented and reviewable."
  },
  {
    question: "What data does Valkor collect?",
    answer:
      "Depending on deployment, Valkor may process operationally justified data such as approved badge IDs, infrastructure IDs, zone IDs, timestamps, signal observations, confidence states, pass events, incidents, infrastructure health, admin actions, and audit logs."
  },
  {
    question: "Are emergency routing features active in the first pilot?",
    answer:
      "No. Future emergency coordination or routing features would require separate approval, configuration, testing, documentation, and deployment agreement coverage."
  }
];

export const resources = [
  { title: "Privacy & Operational Data Brief", status: "Available on request" },
  { title: "Product Boundaries Overview", status: "Available on request" },
  { title: "School Governance & Access Overview", status: "Available on request" },
  { title: "Pilot Boundaries Overview", status: "Available on request" },
  { title: "Parent / Guardian Explanation", status: "Coming soon" },
  { title: "IT & Security Review Brief", status: "Coming soon" },
  { title: "Data Retention & Deletion Overview", status: "Coming soon" },
  { title: "Future Capability Addendum", status: "Coming soon" }
];

export const productScreenshots = [
  {
    title: "Command center overview",
    description: "Mode, signal health, system status, and command focus.",
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
    description: "Occupancy, infrastructure health, issue state, and coverage confidence by zone.",
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
  { label: "Pilot Program", href: "/pilot" },
  { label: "Trust Center", href: "/trust-center" },
  { label: "IT & Security", href: "/it-security" },
  { label: "Resources", href: "/resources" }
];

export const formInterests = [
  "Hallway pass accountability",
  "Attendance reconciliation",
  "Incident workflow / staff response",
  "Device and infrastructure accountability",
  "Pilot reliability review",
  "Other operational concern"
];

export const reviewInterests = [
  "Demo",
  "Pilot",
  "IT/security review",
  "Board materials",
  "Partnership"
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
  { label: "Building Areas", value: "Main hallway, office wing", tone: "neutral" },
  { label: "Pass Accountability", value: "2 need review", tone: "orange" },
  { label: "System Health", value: "4 healthy / 1 stale", tone: "green" },
  { label: "Confidence", value: "Fresh - 86%", tone: "blue" },
  { label: "Staff response", value: "Assigned", tone: "green" },
  { label: "Readiness", value: "Pilot review ready", tone: "orange" }
];

export const publicTechExclusions = [
  "Full API endpoint list",
  "Full database schema",
  "Internal code architecture",
  "Security implementation details",
  "Infrastructure network details",
  "Exact deployment maps",
  "Exact floor-plan logic",
  "School floor plans",
  "Raw telemetry examples tied to real people",
  "Proprietary routing logic",
  "Internal engine architecture beyond a high-level explanation",
  "Detailed vulnerability information"
];

export const roadmapCapabilities: IconCard[] = [
  {
    title: "Blocked route awareness",
    description: "Future work may help trained school leaders evaluate unavailable corridors or exits where separately approved.",
    icon: Route
  },
  {
    title: "Crowding and congestion context",
    description: "Future capabilities may account for crowding, drills, hazards, and changing building conditions.",
    icon: Users
  },
  {
    title: "Decision support only",
    description: "Future routing intelligence would assist trained leaders, not issue automatic commands or guarantee outcomes.",
    icon: UserCheck
  },
  {
    title: "Separate approval required",
    description: "Emergency features are not active unless configured, tested, documented, and covered by deployment agreements.",
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
    description: "Surface trips that may need follow-up while keeping discipline decisions with school staff.",
    icon: Clock
  },
  {
    title: "Staff Response Actions",
    description: "Acknowledge, assign, respond, resolve, dismiss, and review action history.",
    icon: ClipboardCheck
  },
  {
    title: "Device & Signal Health Monitoring",
    description: "Expose online, stale, degraded, and offline infrastructure states for pilot review.",
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
    description: "Surface movement, pass, zone, or infrastructure states that may need attention.",
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
    description: "Valkor is positioned around approved building-area awareness.",
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
    description: "Pilots are intentionally small, measurable, and school-controlled.",
    icon: SlidersHorizontal
  },
  {
    title: "Operational awareness focus",
    description: "The system supports review and coordination; humans decide next actions.",
    icon: ClipboardCheck
  }
];

export const signalHealth = [
  { name: "Signal Area A", status: "Online", tone: "success" },
  { name: "Signal Area B", status: "Online", tone: "success" },
  { name: "Signal Area C", status: "Stale", tone: "warning" },
  { name: "Signal Area D", status: "Online", tone: "success" }
];

export const systemConfidenceFeatures: IconCard[] = [
  {
    title: "Infrastructure online/offline status",
    description: "Expose whether signal systems are ready, stale, degraded, or offline.",
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
  { zone: "Gym Connector", confidence: "Stale", activity: "Infrastructure needs review" }
];

export const timelineEvents = [
  { time: "10:42", label: "Overdue movement reviewed", zone: "Main Hallway" },
  { time: "10:45", label: "Staff response assigned", zone: "East Wing" },
  { time: "10:48", label: "Infrastructure health changed", zone: "Gym Connector" }
];

export const systemAlerts = [
  { label: "Overdue movement: 11 min", detail: "Review", tone: "warning" },
  { label: "Congestion: moderate", detail: "Monitor", tone: "neutral" },
  { label: "Staff response: pending", detail: "Assigned", tone: "success" }
];

export const futureCapabilities = roadmapCapabilities;

export { FileText, HelpCircle };

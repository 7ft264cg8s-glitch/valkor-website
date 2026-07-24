import type { PageConfig } from "@/components/ContentPage";

const coreSentence =
  "Valkor turns approved school location and device signals into calm, human-reviewed workflows for attendance, passes, incidents, staff response, and pilot proof - without GPS, cameras, biometrics, phone tracking, or automatic discipline.";

export const technologyPage: PageConfig = {
  eyebrow: "RTLS Infrastructure",
  title: "Built to work with approved school RTLS infrastructure.",
  description:
    "Valkor is designed to integrate with approved RTLS infrastructure providers such as Blueiot/LocalSense while owning the school-facing operations layer.",
  sections: [
    {
      title: "Infrastructure layer and Valkor layer",
      body:
        "The infrastructure layer may provide tags, anchors, positioning, area/region data, alarms, attendance primitives, roll call data, historical tracks, and device-health signals. Valkor turns those signals into school-specific workflows, reporting, and trust controls.",
      cards: [
        {
          title: "Infrastructure Layer",
          items: [
            "Tags / badges",
            "Anchors / base stations",
            "Positioning engine",
            "Area / region data",
            "Attendance primitives",
            "Roll call data",
            "Alarm primitives",
            "Historical tracks",
            "Device-health signals",
          ]
        },
        {
          title: "Valkor Operations Layer",
          items: [
            "School zone mapping",
            "Confidence and freshness",
            "Pass accountability",
            "Attendance reconciliation",
            "Incident lifecycle",
            "Staff response",
            "Audit logs",
            "Pilot reports",
            "Privacy controls"
          ]
        }
      ],
      callout:
        "Valkor's moat is the school operations layer: workflows, admin experience, privacy controls, reporting, and school-specific intelligence that make operational signals usable, trusted, and actionable."
    },
    {
      title: "How Valkor works",
      body:
        "Valkor connects approved school location and device-health signals to school workflows. It normalizes vendor-specific data into a school-facing operating layer for authorized staff.",
      items: [
        "Approved Badges",
        "School RTLS / Anchor Infrastructure",
        "Parser + Vendor Adapter",
        "Valkor Canonical Event Contract",
        "Valkor Event Engine",
        "Confidence + Freshness Layer",
        "Incidents, Attendance, Passes, Staff Response",
        "Pilot Proof Report"
      ]
    },
    {
      title: "Plain-language integration terms",
      cards: [
        { title: "RTLS", body: "Real-Time Location System. Indoor positioning infrastructure used to locate approved badges or assets inside buildings." },
        { title: "Tags / Badges", body: "School-issued or school-approved wearable devices that broadcast or communicate wireless signals." },
        { title: "Anchors / Base Stations", body: "Fixed devices that receive badge signals and help the positioning engine estimate area or zone." },
        { title: "Gateway", body: "A backhaul device or network path that moves local hardware data into the server/platform." },
        { title: "Parser", body: "Decodes raw incoming data into usable fields such as tag ID, zone, timestamp, battery, event type, and confidence." },
        { title: "Adapter", body: "Converts vendor-specific data into Valkor's internal standard format." },
        { title: "Canonical Event Contract", body: "Valkor's standard internal event format. It lets Valkor support Blueiot now and future RTLS providers later without rebuilding the core product." }
      ],
      callout: "Blueiot creates physical location reality. Valkor creates school operational meaning."
    }
  ]
};

export const trustCenterPage: PageConfig = {
  eyebrow: "Trust Center",
  title: "Privacy, governance, and school-control boundaries.",
  description:
    "Valkor collects operationally justified data, explains why it exists, restricts access, logs sensitive actions, supports school-controlled retention, and avoids unrelated uses like advertising, consumer tracking, or automatic discipline.",
  sections: [
    {
      title: "What Valkor collects and why",
      body:
        "Depending on deployment scope, Valkor may process badge identifiers, zone-level movement events, timestamps, confidence/freshness status, pass status, device health, incident workflow records, admin actions, audit logs, diagnostics, and pilot metrics.",
      items: [
        "Approved school operational awareness",
        "Attendance and accountability review",
        "Device-health and reliability monitoring",
        "Incident documentation and staff response",
        "Pilot evaluation and system improvement"
      ]
    },
    {
      title: "School-controlled deployment",
      items: [
        "Included zones",
        "Approved badges",
        "Authorized users",
        "Retention rules",
        "Approved use cases",
        "Parent communication",
        "Pilot approval and expansion decisions"
      ]
    },
    {
      title: "Access, audit logs, and retention",
      cards: [
        {
          title: "Role-Based Access",
          body: "Not every user sees every student, every movement event, or every diagnostic record."
        },
        {
          title: "Audit Logs",
          body:
            "Sensitive actions such as viewing restricted records, changing badge assignments, exporting data, acknowledging incidents, dismissing incidents, and resolving alerts should be logged."
        },
        {
          title: "Retention & Deletion",
          body:
            "Schools define how long live events, incident records, audit logs, historical tracks, diagnostics, and pilot metrics are retained."
        }
      ]
    },
    {
      title: "Clear product boundaries",
      items: [
        "No GPS",
        "No home tracking",
        "No microphones",
        "No cameras",
        "No facial recognition",
        "No biometrics",
        "No student phone monitoring",
        "No automatic discipline",
        "Does not replace emergency procedures or trained staff judgment"
      ],
      callout:
        "Valkor supports human-reviewed workflows. School personnel verify facts and decide what action is appropriate."
    },
    {
      title: "Signal infrastructure boundary",
      body:
        "Valkor may integrate with approved RTLS infrastructure providers, such as Blueiot/LocalSense, to receive building-local location, badge, zone, device-health, attendance, roll call, historical track, and alarm signals. The infrastructure provider supplies the physical positioning layer; Valkor provides the school-facing command, workflow, privacy, and reporting layer."
    },
    {
      title: "Parent-facing explanation",
      body:
        "Valkor is designed around approved school operations, zone-level presence, authorized staff access, school-controlled retention, and human-reviewed workflows. It does not require GPS, phone tracking, cameras, microphones, biometrics, or automatic discipline."
    },
    {
      title: "IT/security review questions",
      items: [
        "Which zones are included in the pilot?",
        "Which badges are approved and who manages assignment?",
        "Which users can see live status, history, diagnostics, exports, and audit logs?",
        "How long are live events, incidents, diagnostics, historical tracks, audit logs, and pilot metrics retained?",
        "How are stale data, offline anchors, low-battery tags, feed delays, and parser failures displayed?",
        "What data can be exported or deleted at school request?"
      ]
    }
  ]
};

export const commandCenterPage: PageConfig = {
  eyebrow: "Command Center",
  title: "A calm operations console for school staff.",
  description:
    "The dashboard helps an assistant principal understand building state quickly through zones, exceptions, confidence, device health, and accountable workflow status.",
  sections: [
    {
      title: "Top command bar",
      items: [
        "School Mode",
        "Attendance State",
        "Active Incidents",
        "Top Priority",
        "System Confidence",
        "RTLS Feed Health",
        "Anchor Health",
        "Tag / Badge Health",
        "Next Schedule Transition"
      ]
    },
    {
      title: "Command focus panel",
      body:
        "Example: Elevated route deviation. Student 018 appears outside approved bathroom route. Believed Zone: Cafeteria Hall. Freshness: Last seen 3s ago. Confidence: High. Suggested Action: Assign nearest available staff.",
      callout:
        "The default map should prioritize zone status, exceptions, confidence, and workflows."
    },
    {
      title: "Zone map default",
      body:
        "The default map shows zone status, not every student dot. Example zone card: Bathroom A Entrance. Occupancy: 4. Passes Active: 2. Overdue: 1. Anchor Health: Healthy. Confidence: 88%."
    },
    {
      title: "Incident lifecycle",
      items: [
        "Detected",
        "Validating",
        "Open",
        "Acknowledged",
        "Assigned",
        "Responding",
        "On Scene",
        "Resolved",
        "Dismissed",
        "Reviewed"
      ]
    },
    {
      title: "Incident detail",
      items: [
        "What happened",
        "Where it happened",
        "Who or which badge is involved",
        "Freshness",
        "Confidence",
        "Assigned staff",
        "Action history",
        "Notes",
        "Resolution reason",
        "Dismissal reason",
        "Related infrastructure warnings"
      ]
    }
  ]
};

export const pilotPage: PageConfig = {
  eyebrow: "Pilot Program",
  title: "Start small. Measure clearly. Expand only if it works.",
  description:
    "Limited pilots are designed to start small, measure clearly, and expand only if the system proves useful.",
  sections: [
    {
      title: "Pilot format",
      items: [
        "2-4 school-defined zones",
        "10-30 approved badges/devices",
        "Blueiot-recommended anchor count",
        "One hallway",
        "One classroom or office",
        "One bathroom/office entrance",
        "One open/common area",
        "One controlled boundary or restricted area",
        "Authorized staff users",
        "Defined success metrics",
        "Clear end-of-pilot review"
      ]
    },
    {
      title: "First RTLS demo test should prove",
      items: [
        "Can Valkor ingest Blueiot data?",
        "Can Valkor map vendor data to school zones?",
        "Can Valkor show freshness and confidence?",
        "Can Valkor detect area entry and exit?",
        "Can Valkor handle SOS/alarm events?",
        "Can Valkor handle low-battery events?",
        "Can Valkor show offline anchor scenarios?",
        "Can Valkor show stale tag scenarios?",
        "Can Valkor produce a simple pilot proof report?"
      ]
    },
    {
      title: "Pilot success metrics",
      items: [
        "Location / zone reliability",
        "Latency / freshness",
        "Infrastructure and device uptime",
        "Incident detection and response workflow",
        "Admin usefulness and trust feedback",
        "False alert rate",
        "Missed detection rate",
        "Low battery visibility",
        "Stale data frequency",
        "Attendance mismatch accuracy",
        "Roll call completion accuracy"
      ],
      callout:
        "Valkor is designed to start with a limited deployment, clear boundaries, and measurable outcomes. A pilot should prove reliability, usefulness, privacy comfort, and staff workflow value before any expansion."
    }
  ]
};

export const pilotProofPage: PageConfig = {
  eyebrow: "Pilot Proof",
  title: "Schools should not have to guess whether a pilot worked.",
  description:
    "Each pilot is designed to produce evidence: system uptime, stale data, zone reliability, false alerts, missed detections, overdue pass visibility, response times, admin actions, privacy feedback, and whether the school should expand, retest, or stop.",
  sections: [
    {
      title: "Sample report card",
      cards: [
        {
          title: "Pilot Proof Report",
          body: "Deployment: East Wing Pilot. Duration: 4 weeks. Tags: 30. Zones: 5. Anchors: 4.",
          status: "Sample"
        }
      ]
    },
    {
      title: "Measured",
      items: [
        "Anchor uptime",
        "WebSocket/API uptime",
        "Location update latency",
        "Zone confidence by area",
        "Stale/unknown time",
        "Wrong-zone moments",
        "False alerts reviewed",
        "Missed detections reviewed",
        "Overdue passes detected",
        "Route deviations detected",
        "Response time",
        "Resolution time",
        "Battery performance",
        "Admin usefulness feedback",
        "Privacy concerns"
      ],
      callout: "Recommendation: expand, retest, or stop."
    }
  ]
};

export const attendancePage: PageConfig = {
  eyebrow: "Attendance Accountability",
  title: "Attendance reconciliation and roll call support.",
  description:
    "Valkor supports attendance reconciliation and roll call workflows by comparing expected school context with approved badge and zone signals.",
  sections: [
    {
      title: "Use cases",
      items: [
        "Room expected vs detected",
        "Unaccounted students during roll call",
        "Students out on approved passes",
        "Late arrivals / early dismissals",
        "Drill accountability",
        "Staff coverage visibility"
      ],
      callout:
        "The goal is not automatic punishment; the goal is faster review, clearer accountability, and better operational visibility."
    }
  ]
};

export const passPage: PageConfig = {
  eyebrow: "Pass Accountability",
  title: "Review active passes, expected routes, and overdue movement.",
  description:
    "Valkor helps schools review active passes, expected routes, overdue passes, and route deviations with confidence and freshness indicators.",
  sections: [
    {
      title: "Pass workflow cards",
      cards: [
        { title: "Active pass", body: "Authorized movement is visible in the operational view." },
        { title: "Expected route", body: "School-defined route context helps staff review exceptions." },
        { title: "Overdue movement", body: "Trips that exceed expected time can be surfaced for review." },
        { title: "Route deviation", body: "Unexpected zone movement is framed as context, not automatic discipline." },
        { title: "Returned / resolved", body: "Staff can close the loop and document the result." },
        { title: "False alert / staff checked", body: "Dismissal reasons support auditability and pilot proof." }
      ],
      callout: "Valkor recommends review. Staff remain in control."
    }
  ]
};

export const incidentPage: PageConfig = {
  eyebrow: "Incident Workflow",
  title: "Alerts are only useful when they become accountable workflows.",
  description:
    "Valkor helps staff validate, acknowledge, assign, respond, resolve, dismiss, document, and review incidents.",
  sections: [
    {
      title: "Lifecycle",
      items: [
        "Detected",
        "Validating",
        "Open",
        "Acknowledged",
        "Assigned",
        "Responding",
        "On Scene",
        "Resolved",
        "Dismissed",
        "Reviewed"
      ]
    },
    {
      title: "Why resolution reasons matter",
      body:
        "Dismissal and resolution reasons create auditability, training data, and pilot proof evidence. They help identify whether alerts were useful, false, caused by system issues, or resolved by staff."
    }
  ]
};

export const schoolLeadersPage: PageConfig = {
  eyebrow: "For School Leaders",
  title: "See what needs attention now.",
  description:
    "Valkor helps principals, assistant principals, deans, and safety directors review overdue passes, attendance mismatches, stale signals, device issues, route deviations, and unresolved incidents.",
  sections: [
    {
      title: "Operational outcomes",
      items: [
        "Reduce hallway uncertainty",
        "Improve pass accountability",
        "Support staff response",
        "Avoid alert overload",
        "Show confidence and freshness",
        "Produce pilot evidence"
      ]
    }
  ]
};

export const itSecurityPage: PageConfig = {
  eyebrow: "IT & Security Review",
  title: "Technical review language for school infrastructure.",
  description:
    "Valkor is designed to be reviewed by IT, privacy, and district operations teams before any pilot expansion.",
  sections: [
    {
      title: "Review areas",
      items: [
        "On-prem / local deployment options",
        "Internal APIs",
        "Firewall / VPN / VLAN segmentation options",
        "Role-based access",
        "Audit logs",
        "Data retention",
        "Badge assignment controls",
        "RTLS provider disclosure",
        "Failure states",
        "Export / deletion process",
        "No GPS / no student app / no phone content"
      ]
    },
    {
      title: "Simple integration language",
      items: [
        "REST API means a normal request/response interface where Valkor can ask the RTLS platform for structured data.",
        "JSON means readable structured key-value data.",
        "WebSocket means a live connection for continuous updates.",
        "Binary protocol means compact byte-level data that may require a parser before Valkor can use it."
      ]
    },
    {
      title: "RTLS provider disclosure",
      body:
        "Valkor may integrate with approved RTLS infrastructure providers such as Blueiot/LocalSense. Those providers can supply the physical positioning layer; Valkor provides the school-facing command, workflow, privacy, reporting, and pilot proof layer."
    }
  ]
};

export const futureEmergencyPage: PageConfig = {
  eyebrow: "Future Capability Boundaries",
  title: "Built toward emergency readiness - not marketed as an emergency replacement.",
  description:
    "Valkor's current focus is zone-level operational awareness, pass accountability, attendance reconciliation, incident workflows, reliability, and pilot proof.",
  sections: [
    {
      title: "Current boundary",
      body:
        "Future emergency coordination, dynamic routing, drill replay, live accountability, or hazard-aware routing would require separate approval, testing, documentation, and deployment boundaries.",
      items: [
        "Do not treat emergency routing as active today.",
        "Do not claim guaranteed evacuation routing.",
        "Do not claim Valkor replaces emergency procedures, radios, alarms, law enforcement, fire department guidance, or human judgment."
      ]
    }
  ]
};

export const faqPage: PageConfig = {
  eyebrow: "FAQ",
  title: "Frequently asked questions.",
  description:
    "Answers for school leaders, IT reviewers, privacy reviewers, parents, and advisors considering a controlled Valkor pilot.",
  sections: [
    {
      title: "Core questions",
      cards: [
        {
          title: "What problem does Valkor actually solve?",
          body:
            "Administrators spend significant time each day without clear context on where students are, whether passes are overdue, whether attendance matches physical presence, and what happened during a hallway incident. Valkor gives approved staff a single reviewable dashboard with zone-level context, confidence levels, and an incident workflow - so they can respond faster and document better."
        },
        {
          title: "Who is Valkor built for?",
          body:
            "Valkor is built for principals, assistant principals, and operations staff who are responsible for daily hallway accountability, pass management, and incident follow-up. It is not a student-facing product and is not accessible to parents or students."
        },
        {
          title: "How does Valkor handle location concerns?",
          body:
            "Valkor is a school-controlled, zone-level operational awareness system for approved campus workflows, authorized users, and human-reviewed decisions."
        },
        {
          title: "Does Valkor use GPS?",
          body: "No. Valkor is designed around building-local, school-approved infrastructure for configured campus zones, not GPS tracking."
        },
        {
          title: "Can Valkor track students at home?",
          body: "No. Valkor is intended for approved school-controlled use within approved campus zones."
        },
        {
          title: "Does Valkor use cameras, microphones, biometrics, or student phones?",
          body:
            "No. Valkor does not require cameras, microphones, facial recognition, biometrics, student phone monitoring, or a student-facing app."
        },
        {
          title: "Does Valkor automatically discipline students?",
          body: "No. Valkor supports human-reviewed workflows. Staff remain responsible for decisions."
        },
        {
          title: "What data does Valkor process?",
          body:
            "Valkor may process badge identifiers, zone-level movement events, timestamps, confidence/freshness status, pass status, device health, incident workflow records, admin actions, audit logs, diagnostics, and pilot metrics."
        },
        {
          title: "Who controls deployment?",
          body:
            "The school controls included zones, approved badges, authorized users, retention settings, parent communication, and pilot approval."
        },
        {
          title: "What happens if data is stale or uncertain?",
          body: "Valkor shows freshness and confidence so staff know whether to act, verify, or wait."
        },
        {
          title: "What is the difference between Blueiot and Valkor?",
          body:
            "Blueiot/LocalSense can provide the RTLS infrastructure layer: tags, anchors, positioning, area data, alarms, attendance primitives, and device-health signals. Valkor turns those signals into school workflows, privacy controls, audit logs, command views, and pilot proof."
        },
        {
          title: "Does Valkor replace emergency procedures?",
          body:
            "No. Valkor does not replace school staff, radios, alarms, law enforcement, fire department guidance, emergency plans, or human judgment."
        }
      ]
    }
  ]
};

export const resourcesPage: PageConfig = {
  eyebrow: "Resources",
  title: "Review materials for school and district stakeholders.",
  description:
    "Pilot review materials can be provided for school leadership, district teams, IT, privacy reviewers, parent communication, and safety stakeholders.",
  sections: [
    {
      title: "Available on request",
      cards: [
        { title: "Valkor One-Pager", status: "Available on request" },
        { title: "Pilot Overview", status: "Available on request" },
        { title: "Privacy & Governance Framework", status: "Available on request" },
        { title: "Parent / Guardian Explanation", status: "Available on request" },
        { title: "IT/Security Review Brief", status: "Available on request" },
        { title: "RTLS Infrastructure Overview", status: "Available on request" },
        { title: "Pilot Proof Report Sample", status: "Available on request" },
        { title: "What Valkor Does Not Do", status: "Available on request" },
        { title: "Future Emergency Capability Addendum", status: "Available on request" }
      ]
    }
  ]
};

export const aboutPage: PageConfig = {
  eyebrow: "About Valkor",
  title: "Clearer operational awareness without surveillance framing.",
  description:
    "Valkor was built from the belief that schools need clearer operational awareness without turning into surveillance environments.",
  sections: [
    {
      title: "Founder belief",
      body:
        "The goal is to give adults better tools, better evidence, and better workflows while keeping students protected by clear boundaries."
    },
    {
      title: "Current status",
      body:
        "Valkor is preparing for controlled pilot validation. Current work focuses on RTLS integration, zone-level reliability, confidence/freshness display, incident workflows, trust documentation, and pilot proof reporting.",
      callout: coreSentence
    }
  ]
};

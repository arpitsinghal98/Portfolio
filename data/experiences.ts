import { impactMetrics } from "@/data/metrics";

export type Experience = {
  id: string;
  company: string;
  role: string;
  dates: string;
  start: number;
  end: number;
  outcome: string;
  summary: string;
  highlights: readonly string[];
  current?: boolean;
};

export const timelineStart = monthIndex(2019, 7);
export const timelineEnd = monthIndex(2026, 10);
export const timelineDuration = timelineEnd - timelineStart;
export const yearTicks = [2020, 2021, 2022, 2023, 2024, 2025, 2026];

export const experiences = [
  {
    id: "abbvie",
    company: "AbbVie",
    role: "Associate Software Engineer",
    dates: "Jul 2019 — Jan 2022",
    start: monthIndex(2019, 7),
    end: monthIndex(2022, 2),
    outcome: "Resolved Tier-3 production issues under SLA.",
    summary:
      "Supported a Salesforce-based medical information platform used by healthcare professionals in a regulated pharmaceutical environment.",
    highlights: [
      "Resolved Tier-3 production issues under SLA and investigated data-integrity problems with SOQL.",
      "Supported medical inquiry intake, case routing, response tracking, and stakeholder reporting workflows.",
      "Executed bulk data updates and migrations and built operational dashboards for case status and response timelines.",
    ],
  },
  {
    id: "vmware",
    company: "VMware",
    role: "Software Engineer",
    dates: "Jan 2022 — Dec 2022",
    start: monthIndex(2022, 1),
    end: monthIndex(2023, 1),
    outcome: impactMetrics.connectedSystems.outcome,
    summary:
      "Built enterprise integration workflows for VMware’s Salesforce-based customer data platform.",
    highlights: [
      impactMetrics.connectedSystems.detail,
      "Supported the master-data migration to Dun & Bradstreet to improve customer-reference consistency.",
      "Built Apex classes, triggers, batch jobs, SOQL queries, and production unit tests.",
    ],
  },
  {
    id: "onebit",
    company: "ONEBIT",
    role: "Software Developer",
    dates: "Feb 2025 — Aug 2025",
    start: monthIndex(2025, 2),
    end: monthIndex(2025, 9),
    outcome: "Moved production from GCP to AWS.",
    summary:
      "Improved the infrastructure and release path behind a live financial product for small businesses.",
    highlights: [
      "Migrated production from GCP to AWS, including DNS, database, static assets, hosting, and SSL/TLS.",
      "Automated deployment workflows to make production releases repeatable.",
      "Modernized parts of the application from vanilla JavaScript to React and TypeScript.",
    ],
  },
  {
    id: "twinmind",
    company: "TwinMind",
    role: "Founding Engineer",
    dates: "Aug 2025 — Present",
    start: monthIndex(2025, 8),
    end: timelineEnd,
    current: true,
    outcome: impactMetrics.transcriptionCost.outcome,
    summary: impactMetrics.productReach.detail,
    highlights: [
      "Built chat infrastructure connecting five-plus context sources, including recordings, previous chats, Gmail, notes, and summaries.",
      impactMetrics.transcriptionCost.detail,
      impactMetrics.chatFailures.detail,
      "Shipped subscriptions, paywall experiments, and product event tracking across the application.",
    ],
  },
] satisfies readonly Experience[];

export const education = {
  institution: "Illinois Tech — MS CS",
  degree: "Master of Science, Computer Science · 4.00 GPA",
  dates: "Jan 2023 — Dec 2024",
  start: monthIndex(2023, 1),
  end: monthIndex(2025, 1),
};

export function monthIndex(year: number, month: number) {
  return year * 12 + month - 1;
}

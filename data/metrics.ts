const productUsers = 400_000;
const transcriptionCostReduction = 80;
const estimatedChatFailureReduction = 30;
const connectedApplications = 18;

type ImpactMetric = {
  value: string;
  label: string;
  qualifier?: string;
  outcome: string;
  detail: string;
};

export const impactMetrics = {
  productReach: {
    value: `${productUsers / 1_000}k+`,
    label: "People on the product",
    outcome: `AI memory for ${productUsers.toLocaleString("en-US")}+ people.`,
    detail: `Building AI memory infrastructure for a product used by more than ${productUsers.toLocaleString("en-US")} professionals and students.`,
  },
  transcriptionCost: {
    value: `${transcriptionCostReduction}%`,
    label: "Lower transcription cost",
    outcome: `${transcriptionCostReduction}% lower STT-related LLM cost.`,
    detail: `Filtered silence and non-speech audio with voice activity detection before transcription, reducing STT-related LLM cost by ${transcriptionCostReduction}%.`,
  },
  chatFailures: {
    value: `${estimatedChatFailureReduction}%`,
    label: "Fewer avoidable chat failures",
    qualifier: "Estimated",
    outcome: `Estimated ${estimatedChatFailureReduction}% fewer avoidable chat failures.`,
    detail: `Added rate limiting, request controls, and response-flow handling on high-usage chat paths, reducing avoidable failures by an estimated ${estimatedChatFailureReduction}%.`,
  },
  connectedSystems: {
    value: String(connectedApplications),
    label: "Systems kept in sync",
    outcome: `${connectedApplications} enterprise applications kept in sync.`,
    detail: `Integrated ${connectedApplications} enterprise applications with Salesforce Platform Events, Apex triggers, subscriber logic, and batch processing to synchronize customer data across systems.`,
  },
} satisfies Record<string, ImpactMetric>;

export const careerMetrics: readonly ImpactMetric[] =
  Object.values(impactMetrics);

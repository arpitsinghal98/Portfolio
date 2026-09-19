export type Project = {
  id: string;
  number: string;
  name: string;
  summary: string;
  technologies: readonly string[];
  decision: string;
  details: readonly { label: string; description: string }[];
  sourceUrl?: string;
};

export const projects = {
  halfLife: {
    id: "half-life",
    number: "01",
    name: "Half-Life",
    summary:
      "A work-week analysis tool that evaluates AI exposure task by task, then creates a practical handoff plan.",
    technologies: ["Node.js", "Anthropic SDK", "SSE", "Structured output"],
    decision: "LLM for judgment. Code for arithmetic.",
    details: [
      {
        label: "The boundary",
        description:
          "Claude decomposes a work week into 12–22 tasks and scores six qualitative axes. Deterministic code computes exposure and half-life, keeping the calculation separate from model judgment.",
      },
      {
        label: "Why it matters",
        description:
          "A disputed result can be traced to a specific axis. Task analysis streams over SSE; a separate structured response supplies paste-ready handoff prompts. These are model-based estimates, not measured predictions of job displacement.",
      },
    ],
  },
  paperTrail: {
    id: "paper-trail",
    number: "02",
    name: "PaperTrail",
    summary:
      "A research workspace that combines PubMed, arXiv, and uploaded documents to stream answers with source citations.",
    technologies: ["Next.js", "PostgreSQL", "Qdrant / pgvector", "Redis"],
    decision: "One deployment. A traceable answer.",
    details: [
      {
        label: "The architecture",
        description:
          "An in-app job runner handles ingestion, chunking, and embedding without a separate worker service. Dense and sparse retrieval supply source context before the answer streams over SSE.",
      },
      {
        label: "The boundary",
        description:
          "Keeping jobs inside the application reduces the number of services to operate, while coupling their deployment to the app. Citations and PDF, Markdown, and reference exports let a reader follow an answer back to its sources.",
      },
    ],
  },
  mailIq: {
    id: "mail-iq",
    number: "03",
    name: "MailIQ",
    summary:
      "A Gmail workspace for categorizing messages and handling bulk actions, with a three-panel inbox and real-time sync.",
    technologies: ["Remix", "Gmail API", "Neon Postgres", "Gemini"],
    decision: "Keep inbox actions connected to Gmail.",
    details: [
      {
        label: "Integration",
        description:
          "Google OAuth connects each account. Linked accounts and sync jobs are stored in Postgres; dedicated sync and stream endpoints keep inbox state connected to Gmail.",
      },
      {
        label: "Verification",
        description:
          "The public repository documents Jest for unit tests, Playwright for browser tests, and MSW for API mocking. You can inspect the implementation without connecting a Gmail account.",
      },
    ],
    sourceUrl: "https://github.com/arpitsinghal98/MailIQ",
  },
  whispr: {
    id: "whispr",
    number: "04",
    name: "Whispr",
    summary:
      "A weekend team prototype that turns live meeting transcripts into summaries, action items, and a memory bank you can question afterwards.",
    technologies: ["Remix", "Firebase", "Google Generative AI"],
    decision: "Keep the meeting useful after it ends.",
    details: [
      {
        label: "Workflow",
        description:
          "Live transcription feeds summaries and action-item extraction. Google Calendar integration and question answering connect the conversation to meeting context.",
      },
      {
        label: "Scope",
        description:
          "Built with Karan Savaliya and Pushkar Patil in a weekend hackathon. This early meeting-memory experiment preceded my work on AI memory at TwinMind. The project repository is private.",
      },
    ],
  },
} as const satisfies Record<string, Project>;

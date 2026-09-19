const configuredSiteUrl =
  process.env.SITE_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL;

function resolveSiteUrl(value?: string) {
  if (!value) {
    return "http://localhost:3000";
  }

  const url = value.startsWith("http") ? value : `https://${value}`;

  return url.replace(/\/+$/, "");
}

export const siteUrl = resolveSiteUrl(configuredSiteUrl);

export const siteConfig = {
  name: "Arpit Singhal",
  role: "Backend & AI Product Engineer",
  location: "SF Bay Area",
  availability: "Open to work",
  email: "arpitsinghal98@outlook.com",
  title: "Arpit Singhal — Backend & AI Product Engineer",
  description:
    "Product-minded software engineer building backend systems, AI workflows, APIs, data infrastructure, and reliable products.",
  positioning:
    "Looking for founding, product, and forward-deployed engineering roles where backend systems, AI workflows, and reliability matter.",
  resumeUrl: process.env.RESUME_URL?.trim() || null,
  links: {
    github: "https://github.com/arpitsinghal98",
    linkedin: "https://www.linkedin.com/in/arpitsinghal98",
  },
} as const;

export function createEmailHref(subject?: string) {
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";

  return `mailto:${siteConfig.email}${query}`;
}

export type SiteLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const navigationLinks: readonly SiteLink[] = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const professionalLinks: readonly SiteLink[] = [
  ...(siteConfig.resumeUrl
    ? [{ label: "Résumé", href: siteConfig.resumeUrl, external: true }]
    : []),
  { label: "GitHub", href: siteConfig.links.github, external: true },
  { label: "LinkedIn", href: siteConfig.links.linkedin, external: true },
];

export const contactLinks: readonly SiteLink[] = [
  { label: siteConfig.email, href: createEmailHref("Portfolio inquiry") },
  ...professionalLinks,
];

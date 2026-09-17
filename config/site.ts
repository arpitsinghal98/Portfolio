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
  role: "Software Engineer",
  location: "SF Bay Area",
  email: "arpitsinghal98@outlook.com",
  title: "Arpit Singhal — Software Engineer",
  description:
    "Product-minded software engineer building backend systems, AI workflows, APIs, data infrastructure, and reliable products.",
  links: {
    github: "https://github.com/arpitsinghal98",
    linkedin: "https://www.linkedin.com/in/arpitsinghal98",
  },
} as const;

export function createEmailHref(subject?: string) {
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";

  return `mailto:${siteConfig.email}${query}`;
}

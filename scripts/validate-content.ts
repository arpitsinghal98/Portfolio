import { siteConfig, siteUrl } from "../config/site";
import {
  education,
  experiences,
  timelineEnd,
  timelineStart,
} from "../data/experiences";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

assert(experiences.length > 0, "At least one experience is required.");

const experienceIds = new Set<string>();

for (const experience of experiences) {
  assert(
    !experienceIds.has(experience.id),
    `Duplicate experience id: ${experience.id}`,
  );
  assert(
    experience.start < experience.end,
    `${experience.company} must end after it starts.`,
  );
  assert(
    experience.start >= timelineStart && experience.end <= timelineEnd,
    `${experience.company} falls outside the timeline range.`,
  );

  experienceIds.add(experience.id);
}

assert(
  experiences.filter((experience) => experience.current).length === 1,
  "Exactly one experience must be marked as current.",
);
assert(
  education.start >= timelineStart && education.end <= timelineEnd,
  "Education falls outside the timeline range.",
);

for (const url of [siteUrl, ...Object.values(siteConfig.links)]) {
  assert(URL.canParse(url), `Invalid site URL: ${url}`);
}

assert(!siteUrl.endsWith("/"), "Site URL must not end with a slash.");

console.log("Portfolio content validation passed.");

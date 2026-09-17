"use client";

import { useState } from "react";
import { ExperienceDetail } from "@/components/experience/experience-detail";
import { Button } from "@/components/ui/button";
import {
  education,
  experiences,
  monthIndex,
  timelineDuration,
  timelineStart,
  yearTicks,
} from "@/data/experiences";

function timelinePosition(start: number, end: number) {
  const left = ((start - timelineStart) / timelineDuration) * 100;
  const width = ((end - start) / timelineDuration) * 100;

  return {
    left: `${left.toFixed(2)}%`,
    width: `${width.toFixed(2)}%`,
  };
}

function tickPosition(year: number) {
  const position =
    ((monthIndex(year, 1) - timelineStart) / timelineDuration) * 100;

  return `${position.toFixed(2)}%`;
}

export function ExperienceTimeline() {
  const [selectedId, setSelectedId] = useState("twinmind");
  const selectedExperience =
    experiences.find((experience) => experience.id === selectedId) ??
    experiences[experiences.length - 1];

  return (
    <>
      <div className="mt-10 hidden grid-cols-[5.75rem_minmax(0,1fr)] items-center gap-x-[1.125rem] gap-y-2 md:grid">
        <p className="font-mono text-micro tracking-label text-foreground/50 uppercase">
          Years
        </p>
        <div className="relative h-4 border-foreground/20 border-b">
          {yearTicks.map((year) => (
            <span
              key={year}
              className="absolute bottom-0 translate-x-[-50%] font-mono text-micro text-foreground/50"
              style={{ left: tickPosition(year) }}
            >
              &apos;{String(year).slice(2)}
            </span>
          ))}
        </div>

        <p className="self-start pt-2 font-mono text-micro tracking-label text-foreground/50 uppercase">
          Roles
        </p>
        <ol aria-label="Work experience timeline" className="space-y-1">
          {experiences.map((experience) => {
            const position = timelinePosition(experience.start, experience.end);
            const isSelected = experience.id === selectedId;

            return (
              <li key={experience.id}>
                <Button
                  type="button"
                  variant="ghost"
                  aria-label={`Show experience at ${experience.company}`}
                  aria-controls="experience-detail"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedId(experience.id)}
                  className="relative h-8 w-full overflow-visible rounded-none p-0 hover:bg-transparent dark:hover:bg-transparent"
                >
                  <span
                    aria-hidden="true"
                    className={
                      isSelected
                        ? "absolute inset-y-0 bg-accent/20 ring-1 ring-accent ring-inset"
                        : "absolute inset-y-0 bg-foreground/15 transition-colors group-hover/button:bg-foreground/25"
                    }
                    style={position}
                  />
                  <span
                    aria-hidden="true"
                    className={
                      isSelected
                        ? "absolute inset-y-0 flex items-center px-2.5 font-mono text-label text-accent"
                        : "absolute inset-y-0 flex items-center px-2.5 font-mono text-label text-foreground/70"
                    }
                    style={{ left: position.left }}
                  >
                    {experience.company}
                  </span>
                </Button>
              </li>
            );
          })}
        </ol>

        <p className="self-start pt-2 font-mono text-micro tracking-label text-foreground/50 uppercase">
          Studied
        </p>
        <div className="relative h-8">
          <span
            aria-hidden="true"
            className="absolute inset-y-0 border border-foreground/30 border-dashed bg-foreground/5"
            style={timelinePosition(education.start, education.end)}
          />
          <span
            className="absolute inset-y-0 flex items-center px-2.5 font-mono text-label text-foreground/70"
            style={{
              left: timelinePosition(education.start, education.end).left,
            }}
          >
            {education.institution}
            <span className="sr-only">
              , {education.degree}, {education.dates}
            </span>
          </span>
        </div>
      </div>

      <div className="mt-8 md:hidden">
        <p className="font-mono text-micro tracking-label text-foreground/50 uppercase">
          Roles
        </p>
        <ol className="mt-3 border-foreground/20 border-t">
          {[...experiences].reverse().map((experience) => {
            const isSelected = experience.id === selectedId;

            return (
              <li key={experience.id} className="border-foreground/20 border-b">
                <Button
                  type="button"
                  variant="ghost"
                  aria-controls="experience-detail"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedId(experience.id)}
                  className="h-auto w-full items-stretch justify-start rounded-none px-0 py-4 text-left whitespace-normal hover:bg-transparent dark:hover:bg-transparent"
                >
                  <span className="grid w-full gap-1">
                    <span className="flex items-baseline justify-between gap-4">
                      <span
                        className={
                          isSelected
                            ? "font-heading text-2xl text-accent"
                            : "font-heading text-2xl text-foreground"
                        }
                      >
                        {experience.company}
                      </span>
                      <span className="font-mono text-micro text-foreground/55">
                        {experience.dates}
                      </span>
                    </span>
                    <span className="text-sm font-normal text-foreground/65">
                      {experience.role}
                    </span>
                  </span>
                </Button>
              </li>
            );
          })}
        </ol>

        <div className="mt-8">
          <p className="font-mono text-micro tracking-label text-foreground/50 uppercase">
            Studied
          </p>
          <div className="mt-3 border border-foreground/30 border-dashed p-4">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-heading text-2xl">Illinois Tech</h3>
              <span className="font-mono text-micro text-foreground/55">
                {education.dates}
              </span>
            </div>
            <p className="mt-1 text-sm text-foreground/65">
              {education.degree}
            </p>
          </div>
        </div>
      </div>

      <div aria-live="polite">
        <ExperienceDetail experience={selectedExperience} />
      </div>
    </>
  );
}

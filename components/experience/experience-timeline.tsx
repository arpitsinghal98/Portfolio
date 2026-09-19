"use client";

import { useState } from "react";
import { ExperienceDetail } from "@/components/experience/experience-detail";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  education,
  experiences,
  monthIndex,
  timelineDuration,
  timelineStart,
  yearTicks,
} from "@/data/experiences";

const defaultExperienceId =
  experiences.find((experience) => experience.current)?.id ?? experiences[0].id;
const recentExperiences = experiences.toReversed();

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
  const [selectedId, setSelectedId] = useState<string | null>(
    defaultExperienceId,
  );

  return (
    <>
      <Tabs
        value={selectedId ?? defaultExperienceId}
        onValueChange={(value: string | null) => setSelectedId(value)}
        orientation="vertical"
        className="hidden md:block"
      >
        <div className="mt-10 grid grid-cols-[7rem_minmax(0,1fr)] items-center gap-x-[1.125rem] gap-y-2">
          <p className="font-mono text-micro tracking-label text-foreground/60 uppercase">
            Years
          </p>
          <div className="relative h-4 border-foreground/20 border-b">
            {yearTicks.map((year) => (
              <span
                key={year}
                className="absolute bottom-0 translate-x-[-50%] font-mono text-micro text-foreground/60"
                style={{ left: tickPosition(year) }}
              >
                &apos;{String(year).slice(2)}
              </span>
            ))}
          </div>

          <p className="self-start pt-2 font-mono text-micro tracking-label text-foreground/60 uppercase">
            Select a role
          </p>
          <TabsList
            aria-label="Work experience timeline"
            variant="line"
            className="h-auto w-full gap-1 rounded-none p-0"
          >
            {experiences.map((experience) => {
              const position = timelinePosition(
                experience.start,
                experience.end,
              );

              return (
                <TabsTrigger
                  key={experience.id}
                  value={experience.id}
                  aria-label={`${experience.company}, ${experience.role}, ${experience.dates}`}
                  className="group/timeline-tab relative h-9 w-full flex-none overflow-visible rounded-none border-0 p-0 after:hidden"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 bg-foreground/15 ring-1 ring-transparent ring-inset transition-colors group-hover/timeline-tab:bg-foreground/25 group-data-active/timeline-tab:bg-accent/20 group-data-active/timeline-tab:ring-accent"
                    style={position}
                  />
                  <span
                    className="absolute inset-y-0 flex items-center px-2.5 font-mono text-label text-foreground/70 group-data-active/timeline-tab:text-accent"
                    style={{ left: position.left }}
                  >
                    {experience.company}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <p className="self-start pt-2 font-mono text-micro tracking-label text-foreground/60 uppercase">
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

        {experiences.map((experience) => (
          <TabsContent key={experience.id} value={experience.id}>
            <ExperienceDetail experience={experience} />
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-8 md:hidden">
        <p className="font-mono text-micro tracking-label text-foreground/60 uppercase">
          Explore each role
        </p>
        <Accordion
          value={selectedId ? [selectedId] : []}
          onValueChange={(value: string[]) => setSelectedId(value[0] ?? null)}
          className="mt-3 border-foreground/20 border-t"
        >
          {recentExperiences.map((experience) => (
            <AccordionItem
              key={experience.id}
              value={experience.id}
              className="border-foreground/20 border-b"
            >
              <AccordionTrigger className="gap-3 rounded-none px-0 font-sans text-left hover:no-underline">
                <span className="grid flex-1 gap-1">
                  <span className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <span className="font-heading text-2xl text-foreground group-aria-expanded/accordion-trigger:text-accent">
                      {experience.company}
                    </span>
                    <span className="font-mono text-micro text-foreground/60">
                      {experience.dates}
                    </span>
                  </span>
                  <span className="text-sm font-normal text-foreground/65">
                    {experience.role}
                  </span>
                  <span className="mt-1 text-sm leading-6 font-normal text-foreground/80">
                    {experience.outcome}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <ExperienceDetail experience={experience} compact />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8">
          <p className="font-mono text-micro tracking-label text-foreground/60 uppercase">
            Studied
          </p>
          <Card
            size="sm"
            className="mt-3 rounded-none border border-foreground/30 border-dashed bg-transparent shadow-none ring-0"
          >
            <CardContent className="gap-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-heading text-2xl">Illinois Tech</h3>
                <span className="font-mono text-micro text-foreground/60">
                  {education.dates}
                </span>
              </div>
              <p className="text-sm text-foreground/65">{education.degree}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

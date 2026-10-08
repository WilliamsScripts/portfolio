"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { experiences, type EmploymentType } from "@/data/experience";

type Filter = "All" | EmploymentType;
const filters: Filter[] = ["All", "Full-time", "Contract"];

export default function Experience() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = experiences.filter((e) => filter === "All" || e.type === filter);
  const count = (f: Filter) => (f === "All" ? experiences.length : experiences.filter((e) => e.type === f).length);

  return (
    <Section
      id="experience"
      title="Experience"
      aside={
        <div role="group" aria-label="Filter by employment type" className="flex rounded-lg border border-line bg-card p-0.5">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                filter === f ? "bg-foreground text-background" : "text-dim hover:text-foreground"
              }`}
            >
              {f} <span className="opacity-60">{count(f)}</span>
            </button>
          ))}
        </div>
      }
    >
      <ol className="space-y-3">
        {visible.map((e, i) => {
          const contract = e.type === "Contract";
          return (
            <li key={e.company}>
              <Reveal delay={Math.min(i, 3) * 0.04}>
                <article className="panel grid gap-x-8 gap-y-3 p-4 transition-colors sm:p-5 grid-cols-1 md:grid-cols-[210px_minmax(0,1fr)]">
                  <header className="flex flex-wrap items-start gap-x-4 gap-y-1.5 md:flex-col md:gap-y-2">
                    <p className="text-[13px] font-medium">{e.period}</p>
                    <p className="flex items-center gap-1 text-xs text-dim">
                      <MapPin className="h-3 w-3" /> {e.location}
                    </p>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs ${
                        contract
                          ? "border-amber/40 bg-amber/10 text-amber"
                          : "border-accent/40 bg-accent/10 text-accent"
                      }`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${contract ? "bg-amber" : "bg-accent"}`} />
                      {e.type}
                    </span>
                  </header>

                  <div>
                    <h3 className="text-base font-semibold leading-snug">
                      {e.title} <span className="text-dim">· {e.company}</span>
                    </h3>
                    <ul className="mt-2.5 space-y-1.5 text-[13.5px] leading-relaxed text-dim">
                      {e.highlights.map((h) => (
                        <li key={h} className="flex gap-2.5">
                          <span aria-hidden className="mt-[9px] h-px w-2.5 shrink-0 bg-dim/60" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {e.technologies.map((t) => (
                        <li key={t} className="chip">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>

      <Reveal>
        <p className="mt-4 text-xs text-dim">
          Education: ND &amp; HND Computer Science, Federal Polytechnic Nekede, Owerri · 2018–2023
        </p>
      </Reveal>
    </Section>
  );
}

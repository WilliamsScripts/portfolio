"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Section from "./ui/Section";
import { projects } from "@/data/projects";

export default function Projects() {
  const [viewport, embla] = useEmblaCarousel({ loop: true, align: "start", dragFree: false });

  return (
    <Section
      id="projects"
      title="Projects"
      aside={
        <div className="flex gap-1.5">
          {([-1, 1] as const).map((d) => (
            <button
              key={d}
              onClick={() => (d === 1 ? embla?.scrollNext() : embla?.scrollPrev())}
              aria-label={d === 1 ? "Next projects" : "Previous projects"}
              className="grid h-9 w-9 place-items-center rounded-lg border border-line text-dim transition-colors hover:border-accent/50 hover:text-foreground"
            >
              {d === 1 ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </button>
          ))}
        </div>
      }
    >
      <div ref={viewport} className="cursor-grab overflow-hidden active:cursor-grabbing" aria-label="Projects carousel">
        <ul className="-ml-4 flex touch-pan-y">
          {projects.map((p) => (
            <li
              key={p.title}
              className="min-w-0 shrink-0 basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
            >
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                draggable={false}
                className="panel group flex h-full select-none flex-col overflow-hidden transition-colors hover:border-foreground/40"
              >
                <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-background">
                  <Image
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    fill
                    draggable={false}
                    sizes="(min-width: 1152px) 370px, (min-width: 640px) 45vw, 90vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold leading-tight">{p.title}</h3>
                      {p.role && <p className="mt-0.5 text-xs text-dim">{p.role}</p>}
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-dim transition-colors group-hover:text-accent" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-dim">{p.tagline}</p>
                  <p className="mt-1.5 text-sm text-foreground">{p.impact}</p>
                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-3">
                    {p.technologies.slice(0, 4).map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

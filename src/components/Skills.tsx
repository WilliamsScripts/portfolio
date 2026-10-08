import {
  Bot,
  Cloud,
  Code2,
  Database,
  LayoutTemplate,
  Server,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { skillGroups, type SkillGroup } from "@/data/skills";

const icons: Record<SkillGroup["icon"], LucideIcon> = {
  ai: Bot,
  frontend: LayoutTemplate,
  backend: Server,
  languages: Code2,
  database: Database,
  devops: Cloud,
  mobile: Smartphone,
  practice: Workflow,
};

const span: Record<string, string> = {
  "AI & LLM": "lg:col-span-5",
  Frontend: "lg:col-span-7",
  Backend: "lg:col-span-4",
  Languages: "lg:col-span-3",
  Data: "lg:col-span-5",
  "DevOps & Cloud": "lg:col-span-5",
  Mobile: "lg:col-span-2",
  Practices: "lg:col-span-5",
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12">
        {skillGroups.map((g, i) => {
          const Icon = icons[g.icon];
          return (
            <Reveal key={g.title} delay={i * 0.03} className={`min-w-0 ${span[g.title]}`}>
              <div
                className="panel h-full p-4"
              >
                <div className="mb-3 flex items-center gap-2">
                  <Icon className="h-4 w-4 text-dim" />
                  <h3 className="text-sm font-semibold">{g.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-1.5">
                  {g.skills.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

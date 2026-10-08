export interface SkillGroup {
  title: string;
  icon: "ai" | "frontend" | "backend" | "languages" | "database" | "devops" | "mobile" | "practice";
  skills: string[];
  highlight?: boolean;
}

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & LLM",
    icon: "ai",
    highlight: true,
    skills: ["OpenAI API / SDK", "LLM applications", "AI chatbots", "AI integrations", "Prompt engineering", "Human-in-the-loop"],
  },
  {
    title: "Frontend",
    icon: "frontend",
    skills: ["React", "Next.js", "Vue.js", "Nuxt.js", "Redux", "Zustand", "TanStack Query", "Tailwind CSS", "Shadcn UI", "Recharts", "Storybook", "Vitest", "Jest"],
  },
  {
    title: "Backend",
    icon: "backend",
    skills: ["Node.js", "Express.js", "FastAPI", "Laravel", "REST APIs", "GraphQL"],
  },
  {
    title: "Languages",
    icon: "languages",
    skills: ["TypeScript", "JavaScript", "Python", "PHP", "SQL"],
  },
  {
    title: "Data",
    icon: "database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "Supabase"],
  },
  {
    title: "DevOps & Cloud",
    icon: "devops",
    skills: ["GitHub Actions CI/CD", "Docker", "AWS", "Azure", "Vercel", "DigitalOcean", "Railway"],
  },
  {
    title: "Mobile",
    icon: "mobile",
    skills: ["React Native", "Expo"],
  },
  {
    title: "Practices",
    icon: "practice",
    skills: ["System architecture", "Atomic Design", "SOLID", "Performance tuning", "Testing", "Technical leadership"],
  },
];

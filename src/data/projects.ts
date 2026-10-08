export interface Project {
  title: string;
  role?: string;
  tagline: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Token Metrics",
    role: "Senior Software Engineer",
    tagline: "Crypto research platform and AI chatbot.",
    problem: "Research blog ran on slow, hard-to-extend WordPress.",
    solution:
      "Rebuilt on Next.js with a decoupled API and an OpenAI chatbot for instant crypto answers.",
    impact: "30% faster. 90% bug-free. 3x Employee of the Month.",
    technologies: ["Next.js", "Strapi CMS", "PostgreSQL", "OpenAI SDK", "React", "TypeScript"],
    image: "/projects/tokenmetrics.png",
    liveUrl: "https://www.tokenmetrics.com",
    featured: true,
  },
  {
    title: "Capera",
    tagline: "Multi-currency fintech wallet for cross-border teams.",
    problem: "Cross-border teams juggle separate tools to move money.",
    solution: "One wallet for USD, NGN, XOF, and XAF with instant payouts.",
    impact: "Replaces multiple remittance tools with a single dashboard.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/capera.png",
    liveUrl: "https://withcapera.com/",
    featured: true,
  },
  {
    title: "GivePot",
    tagline: "Real-time contribution collection for group fundraising.",
    problem: "Group fundraising gets tracked by hand in spreadsheets.",
    solution: "Pots that track contributions live and notify on every payment.",
    impact: "Removes manual reconciliation from group fundraising.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/givepot.png",
    liveUrl: "https://withgivepot.com/",
    featured: true,
  },
  {
    title: "CosmoRemit",
    role: "Frontend Software Engineer",
    tagline: "Cross-border remittance platform for an Australian fintech.",
    problem: "Needed a compliant, high-volume transfer platform.",
    solution: "Built pay-in/pay-out flows and KYC/AML admin tooling.",
    impact: "20% faster on high-volume transactions.",
    technologies: ["React", "Redux", "TypeScript", "Laravel", "Postgres"],
    image: "/projects/cosmoremit.png",
    liveUrl: "https://cosmoremit.com.au/",
    featured: true,
  },
  {
    title: "Fuelsgate",
    role: "Technical Lead",
    tagline: "Bulk fuel-procurement platform, architected from zero.",
    problem: "No existing codebase or architecture to build on.",
    solution: "Designed the full stack, docs, and CI/CD as sole technical lead.",
    impact: "Took the product from zero to a tested, deployed platform.",
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "GitHub Actions", "DigitalOcean", "Vercel"],
    image: "/projects/fuelsgate.png",
    liveUrl: "https://fuelsgate.com",
    featured: false,
  },
  {
    title: "Thatapp",
    tagline: "Podio integration platform with email sync and analytics.",
    problem: "Podio users needed built-in email and analytics.",
    solution: "Added email sync, templates, and analytics on top of Podio.",
    impact: "Streamlined daily Podio workflows for teams.",
    technologies: ["PHP", "Laravel", "React", "Podio", "MySQL", "MongoDB", "PostgreSQL"],
    image: "/projects/thatapp.png",
    liveUrl: "https://www.thatapp.io/",
    featured: false,
  },
  {
    title: "Mentra",
    tagline: "AI-powered wellness app with licensed human therapists.",
    problem: "Users needed real therapist access, not just an app.",
    solution: "Built the core experience connecting users to licensed therapists.",
    impact: "Delivered ahead of schedule.",
    technologies: ["PHP", "Laravel", "React", "Next.js", "MySQL"],
    image: "/projects/mentra.png",
    liveUrl: "https://yourmentra.com/",
    featured: false,
  },
  {
    title: "Usedora",
    tagline: "AI-powered platform connecting users with curated services.",
    problem: "Users needed one place to find curated services.",
    solution: "Built the core discovery and matching experience.",
    impact: "Shipped in the same accelerated delivery cycle.",
    technologies: ["PHP", "Laravel", "React", "Next.js", "Postgres"],
    image: "/projects/dora.png",
    liveUrl: "https://usedora.com/",
    featured: false,
  },
  {
    title: "ProDevs",
    tagline: "Chrome extension for faster job applications, built on OpenAI.",
    problem: "Job seekers spent too long on repetitive applications.",
    solution: "Chrome extension using the OpenAI API to auto-fill applications.",
    impact: "Grew the platform's user base 25%.",
    technologies: ["Chrome Extension", "OpenAI API", "JavaScript", "React", "Web APIs"],
    image: "/projects/prodevs.png",
    liveUrl:
      "https://chromewebstore.google.com/detail/prodevs-ai-job-applicatio/kbgnpjebpekcckmcfoijnngogjolfgag",
    featured: false,
  },
];

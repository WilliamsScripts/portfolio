export type EmploymentType = "Full-time" | "Contract";

export interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  period: string;
  type: EmploymentType;
  highlights: string[];
  technologies: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    title: "Senior Software Engineer",
    company: "Token Metrics",
    location: "USA, Remote",
    period: "September 2024 – January 2026",
    type: "Full-time",
    highlights: [
      "Built an AI-powered crypto chatbot with the OpenAI SDK and PostgreSQL, letting users query crypto data in natural language.",
      "Led development, testing, and deployment of the Governance & Staking Dashboard, delivering production functionality for complex crypto workflows.",
      "Rebuilt the research blog platform, migrating it from WordPress to Next.js and Strapi CMS for better performance, scalability, and developer experience.",
      "Improved application performance by 30% by splitting monolithic modules into standalone services, decoupling the backend API from the Next.js app, migrating the database from Snowflake to Supabase, and adding caching, code splitting, and lazy loading.",
      "Resolved critical bugs reported by QA, Sentry, and Unguess, reaching 90% bug-free usability.",
      "Designed the foundation for the company's mobile app, establishing a reusable cross-platform architecture.",
      "Named Employee of the Month three times for technical execution, ownership, and cross-team impact.",
    ],
    technologies: ["Next.js", "TypeScript", "OpenAI SDK", "PostgreSQL", "Supabase", "Strapi"],
  },
  {
    title: "Technical Lead",
    company: "Fuelsgate",
    location: "Nigeria, Remote",
    period: "July 2024 – May 2025",
    type: "Contract",
    highlights: [
      "Designed and implemented the full application architecture across frontend, backend, and deployment, building a scalable foundation.",
      "Applied Atomic Design and SOLID principles, and documented APIs and components with Postman and Storybook.",
      "Wrote frontend and backend unit tests to reduce regressions.",
      "Improved performance with caching, code splitting, lazy loading, and state-management optimizations that cut unnecessary re-renders.",
      "Owned production deployments on DigitalOcean and Vercel, with GitHub Actions CI/CD for automated testing and deployment.",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Storybook", "GitHub Actions", "DigitalOcean"],
  },
  {
    title: "Fullstack Software Engineer",
    company: "ProDevs",
    location: "USA, Remote",
    period: "March 2023 – May 2024",
    type: "Full-time",
    highlights: [
      "Built a Chrome extension on the OpenAI API that contributed to a 25% increase in the platform's user base.",
      "Built Node.js/Express and Laravel REST APIs, improving data processing and retrieval efficiency by 25%.",
      "Improved frontend performance by 40% through browser caching and responsive design, which led to a client referral.",
      "Delivered a project in two months instead of the planned three.",
      "Integrated third-party payment and user verification services into production.",
    ],
    technologies: ["React", "Node.js", "Laravel", "OpenAI API", "Chrome Extension"],
  },
  {
    title: "Frontend Software Engineer",
    company: "CosmoRemit",
    location: "Australia, Remote",
    period: "May 2022 – February 2023",
    type: "Contract",
    highlights: [
      "Built a cross-border remittance platform using React and Redux.",
      "Implemented pay-in/pay-out flows and integrated third-party providers Thunes and Monoova.",
      "Developed admin dashboards for transactions, users, and KYC/AML compliance.",
      "Optimized performance by 20% for high-volume transactions using memoization, code splitting, and lazy loading.",
    ],
    technologies: ["React", "Redux", "Laravel", "PostgreSQL"],
  },
  {
    title: "Fullstack Software Engineer",
    company: "Simpoo Business",
    location: "Nigeria, Remote",
    period: "September 2021 – February 2023",
    type: "Full-time",
    highlights: [
      "Improved front-end rendering performance by 30% through virtualization and lazy loading.",
      "Kept REST API response times low with caching and query optimization.",
      "Established code review and testing practices, reducing bugs.",
      "Turned Figma designs into responsive components using atomic design patterns.",
    ],
    technologies: ["React", "PHP", "Laravel", "Figma"],
  },
  {
    title: "Fullstack Software Engineer",
    company: "Olotu Square",
    location: "Nigeria, Hybrid",
    period: "November 2019 – August 2021",
    type: "Full-time",
    highlights: [
      "Raised user engagement by 15% on a PHP/Laravel cooperative platform.",
      "Integrated Paystack, Okra, Mono, Indicina, and Recova APIs.",
      "Automated deployments with GitHub Actions and managed dedicated virtual hosting.",
    ],
    technologies: ["PHP", "Laravel", "GitHub Actions", "Paystack"],
  },
];

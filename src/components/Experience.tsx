"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Building2, Award } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Token Metrics",
    location: "USA (Remote)",
    period: "November 2024 - September 2025",
    type: "Full-time",
    description:
      "Rebuilt the entire research blog platform, migrating it from WordPress to Next.js and Strapi CMS, enhancing performance, scalability, and developer experience.",
    achievements: [
      "Rebuilt entire research blog platform from WordPress to Next.js and Strapi CMS",
      "Resolved critical bugs and errors, achieving 90% bug-free usability",
      "Built AI chatbot leveraging Open AI SDK and PostgreSQL database",
      "Optimized software performance by 30% through strategic improvements",
      "Led development of Governance & Staking Dashboard",
      "Awarded employee of the month trice",
    ],
    technologies: [
      "Next.js",
      "Strapi CMS",
      "PostgreSQL",
      "OpenAI SDK",
      "React",
      "TypeScript",
    ],
  },
  {
    title: "Lead Software Engineer",
    company: "Fuelsgate",
    location: "Nigeria (Remote)",
    period: "August 2024 - May 2025",
    type: "Full-time",
    description:
      "Designed and implemented the entire software architecture for the application, ensuring scalability and maintainability while adhering to industry best practices.",
    achievements: [
      "Designed and implemented entire software architecture",
      "Applied Atomic Design and SOLID principles",
      "Documented APIs and components using Postman and Storybook",
      "Developed comprehensive unit tests for frontend and backend",
      "Enhanced performance through caching, code splitting, and lazy loading",
      "Set up CI/CD pipelines using GitHub Actions",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "GitHub Actions",
      "DigitalOcean",
      "Vercel",
    ],
  },
  {
    title: "Frontend Software Engineer",
    company: "Shortpoint",
    location: "USA (Remote)",
    period: "May 2024 - July 2024",
    type: "Contract",
    description:
      "Enhanced code organization and performance by implementing best practices in collaboration with cross-functional teams.",
    achievements: [
      "Improved code quality and modularity in monorepo with component-based architecture",
      "Optimized application state management using Redux",
      "Reduced load times and improved user experiences",
      "Resolved majority of customer issues, resulting in 20% increase in positive feedback",
      "Participated in sprint planning, code review, and daily standups",
    ],
    technologies: [
      "React",
      "Redux",
      "TypeScript",
      "Monorepo",
      "Atomic Design",
      "Component Architecture",
    ],
  },
  {
    title: "Fullstack Software Engineer",
    company: "ProDevs",
    location: "Nigeria (Remote)",
    period: "March 2023 - April 2024",
    type: "Full-time",
    description:
      "Directed development team through all phases from concept to deployment for multiple projects, focusing on feature implementation, testing, and optimization.",
    achievements: [
      "Developed Chrome extension using OpenAI API, increasing user base by 100%",
      "Integrated third-party APIs for payment processing and user verification",
      "Designed and optimized RESTful APIs, improving efficiency by 25%",
      "Enhanced database performance through pagination, indexing, and caching",
      "Boosted frontend performance by 40%, earning client referral",
      "Delivered 3-month project in 2 months through efficient development",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PHP/Laravel",
      "OpenAI API",
      "Chrome Extension",
      "RESTful APIs",
    ],
  },
  {
    title: "Fullstack Software Engineer",
    company: "Simpoo Codes",
    location: "Nigeria (Remote)",
    period: "September 2021 - April 2023",
    type: "Full-time",
    description:
      "Optimized front-end rendering performance and implemented SEO best practices while establishing code reviews and testing best practices.",
    achievements: [
      "Optimized front-end rendering performance by 30% through virtualization and lazy loading",
      "Implemented SEO best practices improving application visibility and ranking",
      "Established code reviews and testing best practices",
      "Translated Figma mockups into responsive, mobile-friendly web pages",
      "Ensured minimum REST API response time through caching and query optimization",
    ],
    technologies: [
      "React",
      "Vue.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Figma",
      "SEO",
    ],
  },
  {
    title: "Fullstack Software Engineer",
    company: "Olotu Square",
    location: "Nigeria (Hybrid)",
    period: "November 2019 - August 2021",
    type: "Full-time",
    description:
      "Increased user engagement through contributions to cooperative platform and automated deployment processes while integrating third-party APIs.",
    achievements: [
      "Increased user engagement by 15% through cooperative platform contributions",
      "Automated deployment processes using GitHub Actions",
      "Integrated third-party APIs including Recova, Indicina, Paystack, Okra, and Mono",
      "Adopted SOLID principles and atomic design patterns",
      "Managed dedicated virtual hosting, optimizing performance and security",
    ],
    technologies: [
      "PHP",
      "Laravel",
      "React",
      "GitHub Actions",
      "Paystack",
      "Mono",
      "Okra",
    ],
  },
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credential: "AWS-SAA-2023",
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2022",
    credential: "GCP-PD-2022",
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2021",
    credential: "CKA-2021",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              Professional{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Experience
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              My journey in software development and continuous learning
            </motion.p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary transform md:-translate-x-0.5" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                }
                transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-2 md:-translate-x-2 border-4 border-background shadow-lg" />

                {/* Content Card */}
                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="card-modern p-6 hover:shadow-glow transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-primary font-semibold mb-2">
                          <Building2 className="h-4 w-4 mr-2" />
                          {exp.company}
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm mb-2">
                          <MapPin className="h-4 w-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end">
                        <div className="flex items-center text-muted-foreground text-sm mb-1">
                          <Calendar className="h-4 w-4 mr-2" />
                          {exp.period}
                        </div>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-sm text-muted-foreground flex items-start"
                          >
                            <span className="text-primary mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="hidden mt-16">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="card-modern p-6 hover:shadow-glow transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Award className="h-6 w-6 mr-3 text-primary" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
                  >
                    <h4 className="font-semibold text-foreground mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-primary text-sm mb-1">{cert.issuer}</p>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>{cert.date}</span>
                      <span className="font-mono">{cert.credential}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

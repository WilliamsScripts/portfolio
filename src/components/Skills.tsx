"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95, color: "from-cyan-400 to-cyan-600" },
      { name: "Next.js", level: 95, color: "from-gray-700 to-gray-900" },
      { name: "Vue.js", level: 90, color: "from-green-400 to-green-600" },
      { name: "Nuxt.js", level: 85, color: "from-green-500 to-green-700" },
      { name: "TypeScript", level: 95, color: "from-blue-500 to-blue-700" },
      { name: "JavaScript", level: 95, color: "from-yellow-400 to-yellow-600" },
      { name: "Tailwind CSS", level: 95, color: "from-teal-400 to-teal-600" },
      { name: "SCSS", level: 90, color: "from-pink-500 to-pink-700" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 95, color: "from-green-500 to-green-700" },
      { name: "Express.js", level: 95, color: "from-gray-600 to-gray-800" },
      { name: "NestJS", level: 90, color: "from-red-500 to-red-700" },
      {
        name: "PHP/Laravel",
        level: 85,
        color: "from-orange-500 to-orange-700",
      },
      { name: "REST API", level: 95, color: "from-blue-600 to-blue-800" },
      { name: "WebSocket", level: 90, color: "from-purple-500 to-purple-700" },
      { name: "Strapi", level: 85, color: "from-indigo-500 to-indigo-700" },
    ],
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "PostgreSQL", level: 95, color: "from-blue-600 to-blue-800" },
      { name: "MongoDB", level: 90, color: "from-green-600 to-green-800" },
      { name: "MySQL", level: 90, color: "from-orange-600 to-orange-800" },
      { name: "Firebase", level: 85, color: "from-yellow-500 to-yellow-700" },
      { name: "Supabase", level: 90, color: "from-green-500 to-green-700" },
      { name: "Snowflake", level: 80, color: "from-blue-400 to-blue-600" },
    ],
  },
  {
    title: "Web3 & Tools",
    skills: [
      { name: "Solidity", level: 85, color: "from-gray-600 to-gray-800" },
      { name: "Web3 Modal", level: 80, color: "from-purple-500 to-purple-700" },
      { name: "Git", level: 95, color: "from-orange-500 to-orange-700" },
      { name: "GitHub Actions", level: 90, color: "from-gray-500 to-gray-700" },
      { name: "Docker", level: 85, color: "from-blue-500 to-blue-700" },
      { name: "Vercel", level: 95, color: "from-gray-600 to-gray-800" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20">
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
              Technical{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Skills
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              A comprehensive overview of my technical expertise and proficiency
              levels
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: 0.6 + categoryIndex * 0.1, duration: 0.6 }}
                className="card-modern hover:shadow-glow transition-all duration-300 p-6"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{
                        delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.4,
                      }}
                      className="space-y-2 p-2 rounded-lg hover:bg-muted/30 transition-colors duration-200"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">
                          {skill.name}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted/50 rounded-full h-3 shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={
                            isInView
                              ? { width: `${skill.level}%` }
                              : { width: 0 }
                          }
                          transition={{
                            delay: 1 + categoryIndex * 0.1 + skillIndex * 0.05,
                            duration: 0.8,
                            ease: "easeOut",
                          }}
                          className={`h-3 rounded-full bg-gradient-to-r ${skill.color} shadow-sm`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-16 text-center p-6"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Additional Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Redux",
                "Pinia",
                "Context API",
                "Zustand",
                "MobX",
                "Atomic Design",
                "SOLID Principles",
                "CI/CD",
                "Performance Optimization",
                "SEO",
                "Responsive Design",
                "Web3 Integration",
                "API Integration",
                "State Management",
                "Code Splitting",
                "Lazy Loading",
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ delay: 1.4 + index * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-card border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary hover:shadow-glow transition-all duration-300 font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

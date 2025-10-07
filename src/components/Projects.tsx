"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Token Metrics Analytics Platform",
    description:
      "Rebuilt entire research blog platform from WordPress to Next.js and Supabase, enhancing performance, scalability, and developer experience. Built AI chatbot leveraging OpenAI SDK.",
    image: "/api/placeholder/600/400",
    technologies: [
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "OpenAI SDK",
      "React",
      "TypeScript",
    ],
    liveUrl: "https://app.tokenmetrics.com",
    featured: true,
  },
  {
    title: "Fuelsgate Platform",
    description:
      "Designed and implemented entire software architecture for bulk fuel procurement application.",
    image: "/api/placeholder/600/400",
    technologies: [
      "React",
      "Node.js",
      "Nest.js",
      "MongoDB",
      "AWS",
      "GitHub Actions",
      "Vercel",
    ],
    liveUrl: "https://fuelsgate.com",
    featured: true,
  },
  {
    title: "ProDevs AI Job Application Assistant",
    description:
      "Developed Chrome extension using OpenAI API that helps users apply to jobs faster and easier.",
    image: "/api/placeholder/600/400",
    technologies: [
      "Chrome Extension",
      "OpenAI API",
      "Web3",
      "JavaScript",
      "React",
      "Web APIs",
    ],
    liveUrl:
      "https://chromewebstore.google.com/detail/prodevs-ai-job-applicatio/kbgnpjebpekcckmcfoijnngogjolfgag",
    featured: false,
  },
  {
    title: "CosmoRemit",
    description: "This app facilitates seamless money transfers across borders",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Redux", "TypeScript", "Laravel", "Atomic Design"],
    liveUrl: "https://cosmoremit.com.au/",
    featured: true,
  },
  {
    title: "Governance & Staking Dashboard",
    description:
      "Led development of comprehensive governance and staking dashboard with seamless user experience and robust functionality.",
    image: "/api/placeholder/600/400",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Web3",
      "Solidity",
      "PostgreSQL",
    ],
    liveUrl: "https://tmai.tokenmetrics.com",
    featured: false,
  },
  {
    title: "Thatapp",
    description:
      "Transform your Podio experience with ThatApp: seamless email integration, custom templates, and powerful analytics for ultimate efficiency.",
    image: "/api/placeholder/600/400",
    technologies: [
      "PHP",
      "Laravel",
      "React",
      "Podio",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
    ],
    liveUrl: "https://www.thatapp.io/",
    featured: true,
  },
  {
    title: "Mentra",
    description:
      "AI powered Wellness application with licensed human therapists.",
    image: "/api/placeholder/600/400",
    technologies: ["PHP", "Laravel", "React", "Next.js", "MySQL"],
    liveUrl: "https://yourmentra.com/",
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              Featured{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              A showcase of my recent work and the technologies I love to work
              with
            </motion.p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="group card-modern overflow-hidden hover:shadow-glow transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-6xl font-bold text-primary/30">
                        WCW
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white text-black rounded-full hover:bg-primary hover:text-white transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:text-primary-dark transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Other Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => !project.featured)
                .map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.4 }}
                    whileHover={{ y: -3 }}
                    className="group card-modern p-6 hover:shadow-glow transition-all duration-300"
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-4xl font-bold text-primary/30">
                        WCW
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-dark transition-colors"
                          aria-label="View live demo"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </motion.a>
                      </div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="text-primary text-sm font-medium flex items-center"
                      >
                        View Details <ArrowRight className="h-3 w-3 ml-1" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="text-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/williamscherechi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              View All Projects on GitHub
              <Github className="h-5 w-5 ml-2" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

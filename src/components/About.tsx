"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Users, Lightbulb, Target } from "lucide-react";

const values = [
  {
    icon: Code,
    title: "Clean Code",
    description:
      "I believe in writing maintainable, readable, and efficient code that stands the test of time.",
  },
  {
    icon: Users,
    title: "User-Centric",
    description:
      "Every decision I make is driven by creating the best possible experience for end users.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "I love exploring new technologies and finding creative solutions to complex problems.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "I focus on delivering measurable outcomes that drive business success and user satisfaction.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-card/50">
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
              About{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Me
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Get to know the person behind the code
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="space-y-6">
                <p className="text-body text-foreground">
                  I'm a Senior Fullstack Developer with 5+ years of experience
                  delivering high-performing web applications for remote-first
                  startups and SaaS companies. My journey began with a curiosity
                  about how websites work, and it has evolved into a deep
                  passion for creating scalable, efficient digital solutions.
                </p>

                <p className="text-body text-foreground">
                  I specialize in React, Next.js, Node.js, TypeScript, and
                  modern web technologies. I'm adept at scalable product
                  development, API integration, and performance optimization. I
                  have a proven track record of shipping features fast,
                  improving system efficiency, and collaborating across teams.
                </p>

                <p className="text-body text-foreground">
                  I'm actively seeking a full-time remote position with a
                  product-led, growth-focused team where I can continue to
                  deliver exceptional results and contribute to meaningful
                  projects. When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community.
                </p>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.8, duration: 0.6 }}
                className="grid grid-cols-2 gap-6 mt-12"
              >
                <div className="text-center p-6 card-modern hover:shadow-glow">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    5+
                  </div>
                  <div className="text-muted-foreground font-medium">
                    Years Experience
                  </div>
                </div>
                <div className="text-center p-6 card-modern hover:shadow-glow">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    50+
                  </div>
                  <div className="text-muted-foreground font-medium">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center p-6 card-modern hover:shadow-glow">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    100%
                  </div>
                  <div className="text-muted-foreground font-medium">
                    Client Satisfaction
                  </div>
                </div>
                <div className="text-center p-6 card-modern hover:shadow-glow">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    24/7
                  </div>
                  <div className="text-muted-foreground font-medium">
                    Learning Mode
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Values Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 card-modern hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl mr-4 shadow-glow">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

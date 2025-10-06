"use client";

import { motion } from "framer-motion";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-secondary/30 to-accent/30 rounded-full blur-3xl animate-pulse float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-3xl animate-pulse float"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl animate-pulse float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-muted-foreground mb-4"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-display mb-6"
          >
            <span className="gradient-text">Williams Cherechi Williams</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-heading text-foreground mb-6"
          >
            Senior Fullstack Developer
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Senior Fullstack Developer with 5+ years of experience delivering
            high-performing web applications for remote-first startups and SaaS
            companies. Specialized in React, Next.js, Node.js, and TypeScript.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#projects")}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:shadow-glow transition-all duration-300 flex items-center gap-2 pulse-glow btn-text"
            >
              View Projects
              <ExternalLink className="h-4 w-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#contact")}
              className="px-8 py-4 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white hover:shadow-glow transition-all duration-300 glass btn-text"
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              href="https://github.com/WilliamsScripts"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-card border border-border rounded-full hover:bg-primary hover:text-white hover:shadow-glow transition-all duration-300 glass"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              href="https://linkedin.com/in/williams-williams"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-card border border-border rounded-full hover:bg-primary hover:text-white hover:shadow-glow transition-all duration-300 glass"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              href="mailto:willemzy2002@gmail.com"
              className="p-4 bg-card border border-border rounded-full hover:bg-primary hover:text-white hover:shadow-glow transition-all duration-300 glass"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => scrollToSection("#about")}
            className="p-2 bg-card border border-border rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Scroll down"
          >
            <ChevronDown className="h-6 w-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

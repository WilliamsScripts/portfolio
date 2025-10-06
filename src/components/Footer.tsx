"use client";

import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/WilliamsScripts",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/williams-williams",
    icon: Linkedin,
  },
  { name: "Email", href: "mailto:willemzy2002@gmail.com", icon: Mail },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Williams Cherechi Williams
            </h3>
            <p className="text-muted-foreground mb-6">
              Senior Fullstack Developer
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-background border border-border rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
            <span>Back to Top</span>
          </motion.button>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-border mt-8 pt-6 text-center"
        >
          <div className="flex items-center justify-center text-muted-foreground">
            <span>© 2024 Williams Cherechi Williams. Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="mx-1 text-red-500"
            >
              <Heart className="h-4 w-4" />
            </motion.span>
            <span>and Next.js</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

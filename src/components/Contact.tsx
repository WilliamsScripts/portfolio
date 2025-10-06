"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "willemzy2002@gmail.com",
    href: "mailto:willemzy2002@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+234 706-246-5404",
    href: "tel:+2347062465404",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Port Harcourt, Rivers, Nigeria",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/WilliamsScripts",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://linkedin.com/in/williams-williams",
    color: "hover:text-blue-600",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 bg-card/50">
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
              Get In{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Touch
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Ready to work together? Let&apos;s discuss your next project and
              bring your ideas to life.
            </motion.p>
          </div>

          <div className="flex justify-center">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-8 max-w-2xl w-full"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Let&apos;s Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I&apos;m always interested in new opportunities and exciting
                  projects. Whether you have a question, want to collaborate, or
                  just want to say hi, I&apos;d love to hear from you!
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                    href={info.href}
                    className="flex items-center p-4 card-modern hover:shadow-glow transition-all duration-300 group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-foreground">
                        {info.title}
                      </p>
                      <p className="text-muted-foreground truncate">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="text-center">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Follow Me
                </h4>
                <div className="flex flex-wrap justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0 }
                      }
                      transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300 ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

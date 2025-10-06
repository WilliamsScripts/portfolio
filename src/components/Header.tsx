"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-xl border-b border-slate-800/50 shadow-2xl shadow-blue-500/5"
          : "bg-transparent"
      }`}
    >
      <nav className="container relative mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="flex-shrink-0"
          >
            <button
              onClick={() => scrollToSection("#home")}
              className="relative group text-3xl lg:text-4xl font-black tracking-tight"
            >
              <span className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_auto] bg-clip-text text-transparent">
                WCW
              </span>
              <span className="absolute inset-0 blur-xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block flex-1 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 lg:gap-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 * index,
                    type: "spring",
                    stiffness: 100,
                  }}
                  onClick={() => scrollToSection(item.href)}
                  className="relative group px-4 py-2.5 lg:px-6 lg:py-3 text-sm lg:text-base font-semibold text-slate-300 hover:text-white transition-all duration-300"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:gap-4">
            <motion.button
              whileHover={{ scale: 1.05, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="relative group p-3 lg:p-3.5 rounded-xl bg-gradient-to-br from-slate-800 to-slate-800/50 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/10"
              aria-label="Toggle theme"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {theme === "light" ? (
                <Moon className="h-5 w-5 lg:h-6 lg:w-6 relative z-10 text-slate-200" />
              ) : (
                <Sun className="h-5 w-5 lg:h-6 lg:w-6 relative z-10 text-slate-200" />
              )}
            </motion.button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="relative group p-3 rounded-xl bg-gradient-to-br from-slate-800 to-slate-800/50 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/10"
                aria-label="Toggle menu"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {isOpen ? (
                  <X className="h-5 w-5 relative z-10 text-slate-200" />
                ) : (
                  <Menu className="h-5 w-5 relative z-10 text-slate-200" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-4 pt-6 pb-8 mt-4 space-y-2 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-2xl rounded-2xl border border-slate-700/50 shadow-2xl">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{
                  delay: 0.05 * index,
                  type: "spring",
                  stiffness: 100,
                }}
                onClick={() => scrollToSection(item.href)}
                className="group relative block w-full text-left px-5 py-4 text-base font-semibold text-slate-300 hover:text-white rounded-xl transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-blue-500 to-purple-500 group-hover:h-full transition-all duration-300 rounded-r-full"></span>
                <span className="relative z-10 ml-2">{item.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}

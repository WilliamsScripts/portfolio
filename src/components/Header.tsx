"use client";

import { useEffect, useState } from "react";
import { Download, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const navItems = [
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navItems.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled ? "border-line bg-background/80 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" className="text-sm font-semibold tracking-tight">
          Williams Williams
        </a>

        <div className="flex items-center gap-1">
          <ul className="flex items-center">
            {navItems.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  aria-current={active === n.id ? "true" : undefined}
                  className={`rounded-md px-2.5 py-1.5 text-[13px] transition-colors sm:px-3 ${
                    active === n.id ? "text-foreground" : "text-dim hover:text-foreground"
                  }`}
                >
                  {n.name}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-1 grid h-8 w-8 place-items-center rounded-md border border-line text-dim transition-colors hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="/williams-williams-resume.pdf"
            download="Williams-Williams-Resume.pdf"
            className="ml-1 hidden h-8 items-center gap-1.5 rounded-md bg-foreground px-3 text-[13px] font-medium text-background transition-opacity hover:opacity-85 sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" /> Résumé
          </a>
        </div>
      </nav>
    </header>
  );
}

import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Reveal from "./ui/Reveal";

const facts = [
  ["Based in", "Port Harcourt, Nigeria"],
  ["Teams in", "US, Australia, Nigeria (remote)"],
  ["Core stack", "TypeScript, React/Next.js, Node.js, Python/FastAPI, PostgreSQL"],
  ["Right now", "Capera (fintech), WORKOPTi (human-in-the-loop AI)"],
];

export default function Hero() {
  return (
    <section id="top" className="pt-28 pb-6 sm:pt-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-14">
        <Reveal>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Williams Williams</h1>
          <p className="mt-2 text-lg text-dim sm:text-xl">Fullstack &amp; AI engineer</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-dim">
            Senior Software Engineer with 6+ years building fintech, SaaS, and AI products for remote
            teams in the US, Australia, and Nigeria. Built an OpenAI-powered crypto chatbot at Token
            Metrics and was named Employee of the Month three times.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <a href="#projects" className="btn bg-foreground text-background hover:opacity-85">
              See projects
            </a>
            <a
              href="/williams-williams-resume.pdf"
              download="Williams-Williams-Resume.pdf"
              className="btn border border-line hover:border-foreground/40"
            >
              <Download className="h-4 w-4" /> Résumé
            </a>
            <div className="ml-1 flex items-center gap-1">
              {[
                { icon: Github, href: "https://github.com/WilliamsScripts", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/williams-williams/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:willemzy2002@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-lg text-dim transition-colors hover:text-foreground"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <dl className="divide-y divide-line border-y border-line text-sm">
            {facts.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-3 py-2.5">
                <dt className="flex items-center gap-1.5 text-dim">
                  {k === "Based in" && <MapPin className="h-3.5 w-3.5" />}
                  {k}
                </dt>
                <dd className="min-w-0">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

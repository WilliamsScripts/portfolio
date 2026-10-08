import { Download, Github, Linkedin, Mail, Phone, Send, Twitter } from "lucide-react";
import Section from "./ui/Section";
import WhatsAppIcon from "./ui/WhatsAppIcon";

const links = [
  { icon: Mail, label: "willemzy2002@gmail.com", href: "mailto:willemzy2002@gmail.com" },
  { icon: WhatsAppIcon, label: "WhatsApp: +234 706 246 5404", href: "https://wa.me/2347062465404" },
  { icon: Send, label: "Telegram: @willemzy", href: "https://t.me/willemzy" },
  { icon: Phone, label: "+234 706 246 5404", href: "tel:+2347062465404" },
  { icon: Linkedin, label: "linkedin.com/in/williams-williams", href: "https://www.linkedin.com/in/williams-williams/" },
  { icon: Github, label: "github.com/WilliamsScripts", href: "https://github.com/WilliamsScripts" },
  { icon: Twitter, label: "x.com/billionaire_dev", href: "https://x.com/billionaire_dev" },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      aside={
        <a
          href="/williams-williams-resume.pdf"
          download="Williams-Williams-Resume.pdf"
          className="btn border border-line hover:border-foreground/40"
        >
          <Download className="h-4 w-4" /> Résumé
        </a>
      }
    >
      <ul className="grid gap-x-10 border-t border-line sm:grid-cols-2">
        {links.map(({ icon: Icon, label, href }) => (
          <li key={label} className="border-b border-line">
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-3 text-sm text-dim transition-colors hover:text-foreground"
            >
              <Icon className="h-4 w-4" /> {label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

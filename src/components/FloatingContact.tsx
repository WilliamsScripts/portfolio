import { Mail } from "lucide-react";
import WhatsAppIcon from "./ui/WhatsAppIcon";

const base =
  "grid h-12 w-12 place-items-center rounded-full shadow-lg shadow-black/30 transition-transform hover:scale-105";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="mailto:willemzy2002@gmail.com"
        aria-label="Send an email"
        className={`${base} border border-line bg-card text-foreground`}
      >
        <Mail className="h-5 w-5" />
      </a>
      <a
        href="https://wa.me/2347062465404"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`${base} bg-[#25D366] text-white`}
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </div>
  );
}

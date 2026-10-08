import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://williamscherechi.dev";
const SITE_TITLE = "Williams Williams | Senior Fullstack & AI Engineer";
const SITE_DESCRIPTION =
  "Senior Fullstack & AI Engineer with 6+ years building fintech, SaaS, and AI products. TypeScript, React/Next.js, Node.js, Python/FastAPI, PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "software engineer",
    "senior software engineer",
    "AI engineer",
    "LLM applications",
    "full-stack developer",
    "fintech engineer",
    "react developer",
    "next.js developer",
    "node.js developer",
    "typescript",
    "remote engineer",
    "portfolio",
  ],
  authors: [{ name: "Williams Williams" }],
  creator: "Williams Williams",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Williams Williams Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@billionaire_dev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || 'dark';
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Williams Williams",
  jobTitle: "Senior Software Engineer",
  url: SITE_URL,
  email: "mailto:willemzy2002@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Port Harcourt",
    addressRegion: "Rivers",
    addressCountry: "NG",
  },
  sameAs: [
    "https://github.com/WilliamsScripts",
    "https://linkedin.com/in/williams-williams",
    "https://x.com/billionaire_dev",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${sans.variable} ${mono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

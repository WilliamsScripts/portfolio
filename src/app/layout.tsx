import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Williams Cherechi Williams - Senior Fullstack Developer",
  description:
    "Senior Fullstack Developer with 5+ years of experience delivering high-performing web applications for remote-first startups and SaaS companies. Specialized in React, Next.js, Node.js, and TypeScript.",
  keywords: [
    "developer",
    "full-stack",
    "web development",
    "software engineer",
    "portfolio",
    "react",
    "nextjs",
    "nodejs",
    "typescript",
    "remote",
  ],
  authors: [{ name: "Williams Cherechi Williams" }],
  creator: "Williams Cherechi Williams",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://williamscherechi.dev",
    title: "Williams Cherechi Williams - Senior Fullstack Developer",
    description:
      "Senior Fullstack Developer with 5+ years of experience delivering high-performing web applications for remote-first startups and SaaS companies.",
    siteName: "Williams Cherechi Williams Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Williams Cherechi Williams - Senior Fullstack Developer",
    description:
      "Senior Fullstack Developer with 5+ years of experience delivering high-performing web applications for remote-first startups and SaaS companies.",
    creator: "@williamscherechi",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

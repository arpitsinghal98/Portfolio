import type { Metadata } from "next";
import {
  Instrument_Serif,
  JetBrains_Mono,
  Schibsted_Grotesk,
} from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  display: "swap",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
});

const schibstedGrotesk = Schibsted_Grotesk({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-schibsted-grotesk",
  weight: "variable",
});

const jetBrainsMono = JetBrains_Mono({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: "variable",
});

export const metadata: Metadata = {
  description:
    "Product-minded software engineer working across backend systems, AI workflows, APIs, data infrastructure, reliability, and performance.",
  title: {
    default: "Arpit Singhal — Product-minded Software Engineer",
    template: "%s — Arpit Singhal",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        instrumentSerif.variable,
        schibstedGrotesk.variable,
        jetBrainsMono.variable,
      )}
    >
      <body className="min-h-svh antialiased">{children}</body>
    </html>
  );
}

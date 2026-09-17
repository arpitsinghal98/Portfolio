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
  weight: ["400", "500"],
});

const jetBrainsMono = JetBrains_Mono({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Arpit Singhal — Software Engineer",
  description:
    "Product-minded software engineer building backend systems, AI workflows, APIs, data infrastructure, and reliable products.",
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
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "AIgentr OS — The AI Operating System for Modern Insurance Agencies",
  description:
    "AIgentr OS is a framework for transforming insurance agency operations using AI and automation. Built by an insurance producer who got tired of manual work.",
  openGraph: {
    title: "AIgentr OS — The AI Operating System for Modern Insurance Agencies",
    description:
      "AIgentr OS is a framework for transforming insurance agency operations using AI and automation. Built by an insurance producer who got tired of manual work.",
    type: "website",
    url: "https://aigentros.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface PillarCardProps {
  number: string;
  name: string;
  outcome: string;
  href: string;
  index?: number;
}

export default function PillarCard({ number, name, outcome, href, index = 0 }: PillarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-hover"
      style={{
        backgroundColor: "var(--bg-secondary)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "1rem",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontWeight: 600,
          fontSize: "0.75rem",
          color: "var(--accent-lime)",
          letterSpacing: "0.05em",
        }}
      >
        {number}
      </span>
      <h3
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontWeight: 700,
          fontSize: "1.25rem",
          color: "var(--text-heading)",
        }}
      >
        {name}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: "0.9375rem",
          color: "var(--text-secondary)",
          lineHeight: 1.6,
          flex: 1,
        }}
      >
        {outcome}
      </p>
      <Link
        href={href}
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontWeight: 600,
          fontSize: "0.875rem",
          color: "var(--accent-orange)",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.25rem",
          transition: "gap 0.2s",
        }}
      >
        Explore →
      </Link>
    </motion.div>
  );
}

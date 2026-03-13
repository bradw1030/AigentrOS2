"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  stat: string;
  description: string;
  index?: number;
}

export default function StatCard({ stat, description, index = 0 }: StatCardProps) {
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
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontWeight: 800,
          fontSize: "2rem",
          color: "var(--accent-orange)",
          marginBottom: "0.75rem",
          lineHeight: 1,
        }}
      >
        {stat}
      </p>
      <p
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: "0.9375rem",
          color: "var(--text-secondary)",
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}

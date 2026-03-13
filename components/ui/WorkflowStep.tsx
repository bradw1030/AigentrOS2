"use client";

import { motion } from "framer-motion";

interface WorkflowStepProps {
  number: string;
  title: string;
  description: string;
  index: number;
  isLast?: boolean;
}

export default function WorkflowStep({
  number,
  title,
  description,
  index,
  isLast = false,
}: WorkflowStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      style={{ display: "flex", gap: "1.5rem", position: "relative" }}
    >
      {/* Step number badge + connector line */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div
          style={{
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "9999px",
            backgroundColor: "var(--accent-orange)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontWeight: 600,
              fontSize: "0.8125rem",
              color: "var(--bg-primary)",
            }}
          >
            {number}
          </span>
        </div>
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
            style={{
              width: "2px",
              flex: 1,
              minHeight: "3rem",
              background: "linear-gradient(to bottom, var(--accent-orange), var(--accent-lime))",
              transformOrigin: "top",
              margin: "0.25rem 0",
            }}
          />
        )}
      </div>

      {/* Content */}
      <div style={{ paddingBottom: isLast ? 0 : "2rem" }}>
        <h4
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 700,
            fontSize: "1.0625rem",
            color: "var(--text-heading)",
            marginBottom: "0.375rem",
            marginTop: "0.375rem",
          }}
        >
          {title}
        </h4>
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "0.9375rem",
            color: "var(--text-secondary)",
            lineHeight: 1.65,
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

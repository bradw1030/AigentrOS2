"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

export default function FounderSection() {
  return (
    <section id="about" style={{ padding: "6rem 1.5rem" }}>
      <div
        className="max-w-[1200px] mx-auto"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
        }}
      >
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel text="// ABOUT" color="lime" />
          <h2
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)",
              color: "var(--text-heading)",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Producer built.<br />Agency approved.
          </h2>

          {[
            "Brad has spent more than 12 years in the world of commercial insurance. During that time he built a book of business from scratch, worked his way through the large broker environment, and was part of a successful exit from an insurtech startup.",
            "It was during his time in the startup world that his perspective shifted. He saw firsthand the potential of AI, automation, and agent-driven workflows to transform how work gets done and how insurance agencies scale, resulting in a successful acquisition and exit.",
            "Over the next 18 months, as AI capabilities rapidly accelerated, Brad immersed himself in the tools, platforms, and strategies shaping this new landscape. He explored emerging technologies, built agents and automations, studied real-world use cases, and connected with founders and innovators pushing the industry forward.",
            "The result is a powerful combination of AI agents, automation, and operational strategy designed specifically for insurance agencies.",
          ].map((text, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "1.0625rem",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                marginBottom: "1.25rem",
              }}
            >
              {text}
            </p>
          ))}

          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "1.0625rem",
              color: "var(--text-primary)",
              lineHeight: 1.75,
              fontWeight: 500,
              marginBottom: "1.25rem",
            }}
          >
            AI is not something coming in the distant future. It is already reshaping how businesses operate, and agencies that learn to leverage it today will have a significant advantage tomorrow.
          </p>

          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "1.0625rem",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            AIgentrOS was built to help agencies harness that opportunity and operate at a new level.
          </p>

          {/* Credential pills */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {["Producer", "Sales Leader", "AI & Automation", "Speaker", "Coach", "Girl Dad", "Consultant", "Chief AIO", "Podcast Host", "Sales Nerd"].map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--accent-lime)",
                  backgroundColor: "var(--accent-lime-muted)",
                  border: "1px solid var(--accent-lime)",
                  borderRadius: "9999px",
                  padding: "0.375rem 0.875rem",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right: Headshot */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ position: "relative", display: "flex", justifyContent: "center" }}
        >
          {/* Decorative corner bracket */}
          <div
            style={{
              position: "absolute",
              top: "-12px",
              right: "-12px",
              width: "40px",
              height: "40px",
              borderTop: "3px solid var(--accent-lime)",
              borderRight: "3px solid var(--accent-lime)",
              borderRadius: "0 6px 0 0",
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-12px",
              left: "-12px",
              width: "40px",
              height: "40px",
              borderBottom: "3px solid var(--accent-orange)",
              borderLeft: "3px solid var(--accent-orange)",
              borderRadius: "0 0 0 6px",
              zIndex: 2,
            }}
          />

          <div
            className="glow-orange"
            style={{
              borderRadius: "0.75rem",
              overflow: "hidden",
              border: "1px solid var(--border-accent)",
              width: "100%",
              maxWidth: "475px",
              backgroundColor: "var(--bg-tertiary)",
            }}
          >
            <Image
              src="/images/founder3.png"
              alt="Brad Weaver — Founder of AIgentr OS"
              width={475}
              height={625}
              style={{ objectFit: "contain", width: "100%", height: "auto", display: "block" }}
              priority
            />
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .founder-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

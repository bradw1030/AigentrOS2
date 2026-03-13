"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

const stats = [
  {
    stat: "60%+",
    description: "of a salesperson's time is spent on non-selling activities",
    source: "Salesforce State of Sales",
  },
  {
    stat: "30–40%",
    description: "of insurance operational tasks can be automated with current technology",
    source: "McKinsey Global Institute",
  },
  {
    stat: "14.5%",
    description: "average increase in sales productivity after automation adoption",
    source: "Nucleus Research",
  },
];

export default function ProblemSection() {
  return (
    <section
      id="potential"
      className="dot-grid"
      style={{ padding: "6rem 1.5rem", position: "relative", overflow: "hidden" }}
    >

      <div className="max-w-[1200px] mx-auto">

        {/* Section label + headline — full width above columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <SectionLabel text="// POTENTIAL" color="lime" />
          <h2
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.875rem, 3vw, 2.75rem)",
              color: "var(--text-heading)",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Elevate your Team.<br />Unlock their Potential.
          </h2>
        </motion.div>

        {/* Two columns: stats left, text right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* Left: Stat cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1.5px solid #D4B896",
                  borderLeft: "5px solid var(--accent-orange)",
                  borderRadius: "0.75rem",
                  padding: "1.75rem",
                  boxShadow: "0 6px 32px rgba(255,85,0,0.13), 0 2px 10px rgba(0,0,0,0.09)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontWeight: 800,
                    fontSize: "2.5rem",
                    lineHeight: 1,
                    marginBottom: "0.625rem",
                    background: "linear-gradient(135deg, var(--accent-orange), var(--accent-lime))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.stat}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "1rem",
                    color: "var(--text-primary)",
                    lineHeight: 1.6,
                    marginBottom: "0.75rem",
                    fontWeight: 500,
                  }}
                >
                  {s.description}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "0.7rem",
                    color: "var(--text-secondary)",
                    opacity: 0.6,
                    letterSpacing: "0.04em",
                  }}
                >
                  // {s.source}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right: Body copy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "1.0625rem",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            <p>
              Insurance agencies are full of smart, driven people doing work that
              shouldn&apos;t require smart, driven people.<br />
              <br />
              Repetitive research. Manual outreach. Document review. Data entry.
            </p>
            <p>
              The tools now exist to automate most of it.
            </p>
            <p>
              Not to replace the talented people already inside your agency — but to{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>amplify them.</span>
            </p>
            <p>
              When repetitive work disappears, producers can spend more time selling.
              Account managers can deepen relationships, round accounts, and cross-sell coverage.
              Service teams can advocate for clients, analyze risk, and strengthen carrier partnerships.
            </p>
            <p>
              Even administrative roles can evolve into revenue-driving positions — managing
              inbound opportunities, guiding small business clients through coverage decisions,
              and closing transactions that grow the agency.
            </p>
            <p>
              The talent is already inside your organization.
            </p>
            <p
              style={{
                color: "var(--text-primary)",
                fontWeight: 600,
                fontSize: "1.125rem",
              }}
            >
              AIgentrOS simply gives that talent the systems it needs to reach a whole new level.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

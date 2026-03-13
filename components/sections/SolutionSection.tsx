"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

export default function SolutionSection() {
  return (
    <section id="automations" style={{ padding: "6rem 1.5rem", backgroundColor: "var(--bg-secondary)" }}>
      <div
        className="max-w-[1200px] mx-auto solution-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Left: Bot image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/images/rightbot.png"
            alt="AIgentrOS Bot"
            style={{
              width: "100%",
              maxWidth: "420px",
              height: "auto",
              maskImage: "radial-gradient(ellipse 80% 85% at 50% 50%, black 55%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 85% at 50% 50%, black 55%, transparent 100%)",
            }}
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel text="// AUTOMATIONS" color="orange" />
          <h2
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.875rem, 3vw, 2.75rem)",
              color: "var(--text-heading)",
              marginBottom: "1.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            We know what works.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              "We've designed AI agents and automation to handle countless common tasks across an insurance agency, from research and prospecting to service and operational work.",
              "For every agency we partner with, we determine the right approach based on how your team operates.",
              "Then we implement the solution, manage it, and continuously improve it so your agency runs more efficiently and your team can focus on growth.",
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "1.0625rem",
                  color: i === 2 ? "var(--text-primary)" : "var(--text-secondary)",
                  lineHeight: 1.75,
                  fontWeight: i === 2 ? 500 : 400,
                }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .solution-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import PillarCard from "@/components/ui/PillarCard";

const pillars = [
  {
    number: "01",
    name: "Sales",
    outcome: "More time selling. Better pipeline.",
    href: "/framework#sales",
  },
  {
    number: "02",
    name: "Account Management",
    outcome: "Proactive retention. Higher revenue per account.",
    href: "/framework#account-management",
  },
  {
    number: "03",
    name: "Marketing",
    outcome: "Consistent output. Automated lead nurturing.",
    href: "/framework#marketing",
  },
  {
    number: "04",
    name: "Customer Service",
    outcome: "Faster response. Lighter workload.",
    href: "/framework#customer-service",
  },
  {
    number: "05",
    name: "Analytics",
    outcome: "Performance clarity. Continuous improvement.",
    href: "/framework#analytics",
  },
];

export default function PillarsPreview() {
  return (
    <section style={{ padding: "6rem 1.5rem" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <SectionLabel text="// THE FRAMEWORK" color="lime" />
          <h2
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.875rem, 3vw, 2.75rem)",
              color: "var(--text-heading)",
              letterSpacing: "-0.02em",
            }}
          >
            Five Pillars. One Operating System.
          </h2>
        </motion.div>

        {/* 3+2 grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {pillars.slice(0, 3).map((p, i) => (
            <PillarCard key={p.number} {...p} index={i} />
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
            marginTop: "1.5rem",
          }}
        >
          {pillars.slice(3).map((p, i) => (
            <PillarCard key={p.number} {...p} index={i + 3} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pillars-top { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .pillars-top, .pillars-bottom { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

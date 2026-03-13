"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      style={{
        padding: "6rem 1.5rem",
        background:
          "linear-gradient(135deg, rgba(255,107,43,0.12) 0%, rgba(168,255,62,0.08) 100%)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >

      <div className="max-w-[1200px] mx-auto" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              color: "var(--text-heading)",
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Ready to Build an AI-Enabled<br />Insurance Agency?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "1.125rem",
              color: "var(--text-secondary)",
              marginBottom: "2.5rem",
              maxWidth: "480px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.7,
            }}
          >
            Book a free discovery call to explore what AIgentr OS could look like
            for your team.
          </p>

          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              color: "var(--bg-primary)",
              backgroundColor: "var(--accent-orange)",
              padding: "1rem 2.5rem",
              borderRadius: "9999px",
              textDecoration: "none",
              display: "inline-block",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 0 32px rgba(255,107,43,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 48px rgba(255,107,43,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(255,107,43,0.3)";
            }}
          >
            Book a Discovery Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
